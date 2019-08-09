import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDirectoryOutput shape
 */
export interface CreateDirectoryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN that is associated with the <a>Directory</a>. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string;

  /**
   * <p>The name of the <a>Directory</a>.</p>
   */
  Name: string;

  /**
   * <p>The root object node of the created directory.</p>
   */
  ObjectIdentifier: string;

  /**
   * <p>The ARN of the published schema in the <a>Directory</a>. Once a published schema is copied into the directory, it has its own ARN, which is referred to applied schema ARN. For more information, see <a>arns</a>.</p>
   */
  AppliedSchemaArn: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
