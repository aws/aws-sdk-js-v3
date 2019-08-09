import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TestEventPatternOutput shape
 */
export interface TestEventPatternOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Indicates whether the event matches the event pattern.</p>
   */
  Result?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
