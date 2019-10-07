import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";
import { Hash } from "@aws-sdk/hash-node";
import { NodeHttpHandler } from "@aws-sdk/node-http-handler";
import { defaultProvider as regionDefaultProvider } from "@aws-sdk/region-provider";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { streamCollector } from '@aws-sdk/stream-collector-node';
import { RestJsonProtocol } from "@aws-sdk/protocol-rest-json";
import { fromUtf8, toUtf8 } from '@aws-sdk/util-utf8-node';
import { fromBase64, toBase64 } from '@aws-sdk/util-base64-node';
import { defaultUserAgent } from '@aws-sdk/util-user-agent-node';
import { AwsAuthConfiguration, AwsAuthConfigurationInput } from '@aws-sdk/signing-middleware';
import { RetryConfig, RetryConfigInput } from '@aws-sdk/retry-middleware';
import { name, version } from './package.json';
import {
  RegionConfiguration,
  RegionConfigurationInput,
  EndpointsConfig,
  EndpointsConfigInput,
  ProtocolConfig,
  ProtocolConfigInput,
  AWSClientRuntimeConfiguration
} from '@aws-sdk/config-resolver';

export type AWSClientRuntimeResolvedConfiguration = Required<AWSClientRuntimeConfiguration>;

export const RDSRuntimeConfiguration: AWSClientRuntimeResolvedConfiguration = {
  protocolDefaultProvider: (handler) => new RestJsonProtocol(handler),
  signingName: "rds-data",
  service: "rds-data",
  httpHandler: new NodeHttpHandler(),
  sha256: Hash.bind(null, "sha256"),
  credentialDefaultProvider,
  regionDefaultProvider,
  urlParser: parseUrl,
  bodyLengthChecker: calculateBodyLength,
  streamCollector,
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8,
  defaultUserAgent: defaultUserAgent(name, version)
}

export type RDSDataConfiguration = AWSClientRuntimeConfiguration &
  AwsAuthConfigurationInput &
  RegionConfigurationInput &
  RetryConfigInput &
  EndpointsConfigInput &
  ProtocolConfigInput

export type RDSDataResolvedConfiguration = AWSClientRuntimeResolvedConfiguration &
  AwsAuthConfiguration.Resolved &
  RegionConfiguration.Resolved &
  RetryConfig.Resolved &
  EndpointsConfig.Resolved &
  ProtocolConfig.Resolved