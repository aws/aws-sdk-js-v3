import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetUploadStatusOutput shape
 */
export interface GetUploadStatusOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the upload.</p>
   */
  uploadId: string;

  /**
   * <p>The status of the upload. The initial status is <code>IN_PROGRESS</code>. The response show all validation failures if the upload fails.</p>
   */
  uploadStatus: "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | string;

  /**
   * <p>The ARN of the upload.</p>
   */
  namespaceArn?: string;

  /**
   * <p>The name of the upload's namespace.</p>
   */
  namespaceName?: string;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   */
  namespaceVersion?: number;

  /**
   * <p>The reason for an upload failure.</p>
   */
  failureReason?: Array<string>;

  /**
   * <p>The date at which the upload was created.</p>
   */
  createdDate: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
