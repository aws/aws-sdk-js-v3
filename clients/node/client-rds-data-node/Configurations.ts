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
    credentialDefaultProvider: (input: any) => Provider<Credentials>
    region: string | Provider<string>;
    signingName: string;
    signer?: RequestSigner;
    signingEscapePath?: boolean;
    sha256: HashConstructor;
  }
  export type Resolved = {
    credentials: Provider<Credentials>;
    signer: RequestSigner;
    signingEscapePath: boolean;
  };
  export function resolve<T>(input: T & Input): T & Resolved {
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
    regionDefaultProvider: (input: any) => Provider<string>
  }
  export interface Resolved extends Input {
    region: Provider<string>
  }
  export function resolve<T>(input: T & Input): T & Resolved {
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
    urlParser: UrlParser,
    tls?: boolean,
    region: Provider<string>,
    service: string
  }
  export interface Resolved extends Required<Input> {
    endpoint: Provider<HttpEndpoint>;
  }
  export function resolve<T>(input: T & Input): T & Resolved {
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
    httpHandler: HttpHandler,
    protocolDefaultProvider: (handler: HttpHandler) => Protocol<HttpRequest, HttpResponse, HttpOptions>
    protocol?: Protocol<any, any>
  }
  export type Resolved = Required<Input>
  export function resolve<T>(input: T & Input): T & Resolved {
    return {
      ...input,
      protocol: input.protocol || input.protocolDefaultProvider(input.httpHandler)
    }
  }
}

// namespace MqttProtocolConfig {
//   export interface Input {
//     mqtt?: Partial<Settings>,
//   }
//   export interface Resolved {
//     mqtt: Settings,
//   }
//   export interface Settings {
//     qos: number,
//   }
//   export function resolve<T extends Input>(input: T): Settings {
//     let mqtt = input.mqtt || {};
//     let qos = mqtt.qos || 0;
//     return { qos: qos };
//   }
// }