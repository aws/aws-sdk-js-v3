import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the <a>CreateChangeSet</a> action.</p>
 */
export interface CreateChangeSetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the change set.</p>
   */
  Id?: string;

  /**
   * <p>The unique ID of the stack.</p>
   */
  StackId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
