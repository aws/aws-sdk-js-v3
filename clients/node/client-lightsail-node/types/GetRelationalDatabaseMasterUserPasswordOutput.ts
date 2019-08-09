import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRelationalDatabaseMasterUserPasswordOutput shape
 */
export interface GetRelationalDatabaseMasterUserPasswordOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The master user password for the <code>password version</code> specified.</p>
   */
  masterUserPassword?: string;

  /**
   * <p>The timestamp when the specified version of the master user password was created.</p>
   */
  createdAt?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
