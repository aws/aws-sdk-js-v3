import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";
import { Hash } from "@aws-sdk/hash-node";
import { NodeHttpHandler } from "@aws-sdk/node-http-handler";
import { defaultProvider as regionDefaultProvider } from "@aws-sdk/region-provider";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { Protocol, HashConstructor, StreamCollector, Provider, Credentials, UrlParser } from "@aws-sdk/types";
import { HttpRequest, HttpResponse, HttpHandler } from "@aws-sdk/protocol-http";
import { streamCollector } from '@aws-sdk/stream-collector-node';
import { RestJsonProtocol } from "@aws-sdk/protocol-rest-json";
import { AwsAuthConfiguration, RegionConfiguration, RetryConfig, EndpointsConfig, ProtocolConfig } from '@aws-sdk/config-resolver';

export interface AWSClientRuntimeConfiguration {
  httpHandler?: HttpHandler;
  protocolDefaultProvider?: (handler: HttpHandler) => Protocol<HttpRequest, HttpResponse>
  signingName?: string;
  service?: string;
  sha256?: HashConstructor;
  credentialDefaultProvider?: (input: any) => Provider<Credentials>;
  regionDefaultProvider?: (input: any) => Provider<string>;
  urlParser?: UrlParser,
  bodyLengthChecker?: (body: any) => number | undefined;
  streamCollector?: StreamCollector<any>
}

export type ResolvedAWSClientRuntimeConfiguration = Required<AWSClientRuntimeConfiguration>;

export const RDSRuntimeConfiguration: ResolvedAWSClientRuntimeConfiguration = {
  httpHandler: new NodeHttpHandler(),
  protocolDefaultProvider: (handler) => new RestJsonProtocol(handler),
  signingName: "rds-data",
  service: "rds-data",
  sha256: Hash.bind(null, "sha256"),
  credentialDefaultProvider,
  regionDefaultProvider,
  urlParser: parseUrl,
  bodyLengthChecker: calculateBodyLength,
  streamCollector
}

export type RDSDataConfiguration = AWSClientRuntimeConfiguration &
  AwsAuthConfiguration.Input &
  RegionConfiguration.Input &
  RetryConfig.Input &
  EndpointsConfig.Input &
  ProtocolConfig.Input

export type RDSDataResolvedConfiguration = ResolvedAWSClientRuntimeConfiguration &
  AwsAuthConfiguration.Resolved &
  RegionConfiguration.Resolved &
  RetryConfig.Resolved &
  EndpointsConfig.Resolved &
  ProtocolConfig.Resolved