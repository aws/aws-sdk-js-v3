import { _UnmarshalledApiKey } from "./_ApiKey";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateApiKeyOutput shape
 */
export interface CreateApiKeyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The API key.</p>
   */
  apiKey?: _UnmarshalledApiKey;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
