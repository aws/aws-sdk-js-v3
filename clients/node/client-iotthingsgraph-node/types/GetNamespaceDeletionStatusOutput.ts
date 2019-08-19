import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetNamespaceDeletionStatusOutput shape
 */
export interface GetNamespaceDeletionStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the namespace that is being deleted.</p>
   */
  namespaceArn?: string;

  /**
   * <p>The name of the namespace that is being deleted.</p>
   */
  namespaceName?: string;

  /**
   * <p>The status of the deletion request.</p>
   */
  status?: "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | string;

  /**
   * <p>An error code returned by the namespace deletion task.</p>
   */
  errorCode?: "VALIDATION_FAILED" | string;

  /**
   * <p>An error code returned by the namespace deletion task.</p>
   */
  errorMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
