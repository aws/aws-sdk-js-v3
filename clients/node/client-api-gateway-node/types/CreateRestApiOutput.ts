import { _UnmarshalledEndpointConfiguration } from "./_EndpointConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a REST API.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
 */
export interface CreateRestApiOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The API's identifier. This identifier is unique across all of your APIs in API Gateway.</p>
   */
  id?: string;

  /**
   * <p>The API's name.</p>
   */
  name?: string;

  /**
   * <p>The API's description.</p>
   */
  description?: string;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>A version identifier for the API.</p>
   */
  version?: string;

  /**
   * <p>The warning messages reported when <code>failonwarnings</code> is turned on during API import.</p>
   */
  warnings?: Array<string>;

  /**
   * <p>The list of binary media types supported by the <a>RestApi</a>. By default, the <a>RestApi</a> supports only UTF-8-encoded text payloads.</p>
   */
  binaryMediaTypes?: Array<string>;

  /**
   * <p>A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.</p>
   */
  minimumCompressionSize?: number;

  /**
   * <p>The source of the API key for metering requests according to a usage plan. Valid values are: <ul><li><code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. </li><li><code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.</li></ul> </p>
   */
  apiKeySource?: "HEADER" | "AUTHORIZER" | string;

  /**
   * <p>The endpoint configuration of this <a>RestApi</a> showing the endpoint types of the API. </p>
   */
  endpointConfiguration?: _UnmarshalledEndpointConfiguration;

  /**
   * A stringified JSON policy document that applies to this RestApi regardless of the caller and <a>Method</a> configuration.
   */
  policy?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
