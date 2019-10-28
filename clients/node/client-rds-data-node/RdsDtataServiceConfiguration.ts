import {
  AwsAuthConfigInput,
  AwsAuthConfigResolved
} from "@aws-sdk/middleware-signing";
import {
  UserAgentConfigInput,
  UserAgentConfigResolved
} from "@aws-sdk/middleware-user-agent";
import {
  RetryConfigInput,
  RetryConfigResolved
} from "@aws-sdk/middleware-retry";
import {
  RegionConfigInput,
  RegionConfigResolved,
  EndpointsConfigInput,
  EndpointsConfigResolved,
  ClientProtocolConfigInput,
  ClientProtocolConfigResolved
} from "@aws-sdk/config-resolver";
import {
  Credentials,
  Provider,
  HashConstructor,
  UrlParser,
  Protocol,
  StreamCollector,
  Decoder,
  Encoder
} from "@aws-sdk/types";
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";

export interface RDSDataRuntimeDependencies {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs
   */
  httpHandler?: HttpHandler;

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
   * The function that will be used to populate serializing protocol
   */
  protocolDefaultProvider?: (
    handler: HttpHandler
  ) => Protocol<HttpRequest, HttpResponse>;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * The service name with which to construct endpoints.
   */
  service?: string;
}

export type RdsDataServiceConfig = RDSDataRuntimeDependencies &
  AwsAuthConfigInput &
  RegionConfigInput &
  RetryConfigInput &
  EndpointsConfigInput &
  ClientProtocolConfigInput &
  UserAgentConfigInput;

export type RdsDataServiceResolvedConfig = Required<
  RDSDataRuntimeDependencies
> &
  AwsAuthConfigResolved &
  RegionConfigResolved &
  RetryConfigResolved &
  EndpointsConfigResolved &
  ClientProtocolConfigResolved &
  UserAgentConfigResolved;
