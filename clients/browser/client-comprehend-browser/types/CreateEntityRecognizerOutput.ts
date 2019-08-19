import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateEntityRecognizerOutput shape
 */
export interface CreateEntityRecognizerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
