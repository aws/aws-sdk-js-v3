import { Credentials, Provider, RequestSigner, HashConstructor, RetryDecider, DelayDecider, UrlParser, Protocol, HttpOptions } from "@aws-sdk/types";
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpEndpoint, HttpHandler, HttpRequest, HttpResponse } from '@aws-sdk/protocol-http';

export function normalizeProvider<T>(input: T | Provider<T>): Provider<T> {
  if (typeof input === "object") {
    const promisified = Promise.resolve(input);
    return () => promisified;
  }
  return input as Provider<T>;
}

export function normalizeEndpoint(
  endpoint?: string | HttpEndpoint | Provider<HttpEndpoint>,
  urlParser?: UrlParser
): Provider<HttpEndpoint> {
  if (typeof endpoint === "string") {
    const promisified = Promise.resolve(urlParser!(endpoint));
    return () => promisified;
  } else if (typeof endpoint === "object") {
    const promisified = Promise.resolve(endpoint);
    return () => promisified;
  }
  return endpoint!
}

export namespace AwsAuthConfiguration {
  export interface Input {
    credentials?: Credentials | Provider<Credentials>;
    signer?: RequestSigner;
    signingEscapePath?: boolean;
  }
  interface PreviouslyResolved {
    credentialDefaultProvider: (input: any) => Provider<Credentials>
    region: string | Provider<string>;
    signingName: string;
    sha256: HashConstructor;
  }
  export type Resolved = {
    credentials: Provider<Credentials>;
    signer: RequestSigner;
    signingEscapePath: boolean;
  };
  export function resolve<T>(input: T & Input & PreviouslyResolved): T & Resolved {
    let credentials = input.credentials || input.credentialDefaultProvider(input as any);
    const normalizedCreds = normalizeProvider(credentials);
    const signingEscapePath = input.signingEscapePath || false;
    return {
      ...input,
      signingEscapePath,
      credentials: normalizedCreds,
      signer: new SignatureV4({
        credentials: normalizedCreds,
        region: input.region,
        service: input.signingName,
        sha256: input.sha256,
        uriEscapePath: signingEscapePath
      })
    }
  }
}

export namespace RegionConfiguration {
  export interface Input {
    region?: string | Provider<string>
  }
  interface PreviouslyResolved {
    regionDefaultProvider: (input: any) => Provider<string>
  }
  export interface Resolved {
    region: Provider<string>
  }
  export function resolve<T>(input: T & Input & PreviouslyResolved): T & Resolved {
    let region = input.region || input.regionDefaultProvider(input as any);
    return {
      ...input,
      region: normalizeProvider(region)
    }
  }
}

export namespace RetryConfig {
  export interface Input {
    maxRetries?: number,
    retryDecider?: RetryDecider,
    delayDecider?: DelayDecider,
  }
  export interface Resolved {
    maxRetries: number,
    retryDecider?: RetryDecider,
    delayDecider?: DelayDecider,
  }
  export function resolve<T>(input: T & Input): T & Resolved {
    return {
      ...input,
      maxRetries: input.maxRetries === undefined ? 3 : input.maxRetries
    }
  }
}

export namespace EndpointsConfig {
  export interface Input {
    endpoint?: string | HttpEndpoint | Provider<HttpEndpoint>,
    endpointProvider?: any,
    tls?: boolean,
  }
  interface PreviouslyResolved {
    urlParser: UrlParser,
    region: Provider<string>,
    service: string
  }
  export interface Resolved extends Required<Input> {
    endpoint: Provider<HttpEndpoint>;
  }
  export function resolve<T>(input: T & Input & PreviouslyResolved): T & Resolved {
    const tls = input.tls || true;
    const defaultProvider = (tls: boolean, region: string) => ({
      protocol: tls ? "https:" : "http:",
      path: "/",
      hostname: `${input.service}.${region}.amazonaws.com`
    });
    const endpointProvider = input.endpointProvider || defaultProvider
    let endpoint: Provider<HttpEndpoint> = input.endpoint ?
      normalizeEndpoint(input.endpoint) :
      () => input.region().then(region => endpointProvider(tls, region));
    return {
      ...input,
      endpointProvider,
      endpoint,
      tls
    }
  }
}

export namespace ProtocolConfig {
  export interface Input {
    protocol?: Protocol<any, any>
  }
  export interface PreviouslyResolved {
    httpHandler: HttpHandler,
    protocolDefaultProvider: (handler: HttpHandler) => Protocol<HttpRequest, HttpResponse, HttpOptions>
  }
  export type Resolved = Required<Input>
  export function resolve<T>(input: T & Input & PreviouslyResolved): T & Resolved {
    return {
      ...input,
      protocol: input.protocol || input.protocolDefaultProvider(input.httpHandler)
    }
  }
}