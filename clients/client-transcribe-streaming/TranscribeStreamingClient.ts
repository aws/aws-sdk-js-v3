import {
  StartStreamTranscriptionRequest,
  StartStreamTranscriptionResponse
} from "./models";
import { TranscribeStreamingRuntimeConfiguration } from "./runtimeConfig";
import {
  Credentials,
  Provider,
  HashConstructor,
  UrlParser,
  StreamCollector,
  Decoder,
  Encoder,
  HttpOptions as __HttpOptions
} from "@aws-sdk/types";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  resolveEndpointsConfig,
  destroyRequestHandlerConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  resolveUserAgentConfig,
  getUserAgentPlugin
} from "@aws-sdk/middleware-user-agent";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  resolveRetryConfig,
  getRetryPlugin
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";

import { HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as SmithyClient,
  SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
//TODO add eventstream serde to @aws-sdk/types
import {
  EventStreamMarshaller,
  EventStreamMarshallerOptions,
  EventStreamInputConfig,
  EventStreamResolvedConfig,
  resolveEventStreamConfig
} from "@aws-sdk/util-eventstream-node";

export type ServiceInputTypes = StartStreamTranscriptionRequest;

export type ServiceOutputTypes = StartStreamTranscriptionResponse;

export interface TranscribeStreamingRuntimeDependencies {
  /**
   * The function that will be used to populate serializing protocol
   */
  protocol: string;

  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs
   */
  requestHandler?: HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface that computes the SHA-256 HMAC or checksum of a string or binary buffer
   */
  sha256?: HashConstructor;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => Provider<Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => Provider<string>;

  /**
   * The function that will be used to convert strings into HTTP endpoints
   */
  urlParser?: UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: Encoder;

  /**
   * The function that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * The service name with which to construct endpoints.
   */
  service?: string;

  eventStreamSerdeProvider?: (
    options: EventStreamMarshallerOptions
  ) => EventStreamMarshaller;
}

export type TranscribeStreamingConfiguration = TranscribeStreamingRuntimeDependencies &
  AwsAuthInputConfig &
  RegionInputConfig &
  RetryInputConfig &
  EndpointsInputConfig &
  EventStreamInputConfig &
  UserAgentInputConfig;

export type TranscribeStreamingResolvedConfiguration = SmithyResolvedConfiguration<
  __HttpOptions
> &
  Required<TranscribeStreamingRuntimeDependencies> &
  AwsAuthResolvedConfig &
  RegionResolvedConfig &
  RetryResolvedConfig &
  EndpointsResolvedConfig &
  EventStreamResolvedConfig &
  UserAgentResolvedConfig;

export class TranscribeStreamingClient extends SmithyClient<
  __HttpOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  TranscribeStreamingResolvedConfiguration
> {
  readonly config: TranscribeStreamingResolvedConfiguration;

  constructor(configuration: TranscribeStreamingConfiguration) {
    const _config_0 = {
      ...TranscribeStreamingRuntimeConfiguration,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveAwsAuthConfig(_config_1);
    let _config_3 = resolveEndpointsConfig(_config_2);
    let _config_4 = resolveEventStreamConfig(_config_3);
    let _config_5 = resolveRetryConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    // this.middlewareStack.use(getAwsAuthPlugin(this.config));
    // Eventstream operation doesn't need authplugin, it's signed in serializer
    // TODO: make stack.use() lazy and remove signing plugin from command, so that
    // client code gen can be static
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  destroy(): void {
    destroyRequestHandlerConfig(this.config);
  }
}
