import { _UnmarshalledFileMetadata } from "./_FileMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCommitOutput shape
 */
export interface CreateCommitOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full commit ID of the commit that contains your committed file changes.</p>
   */
  commitId?: string;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the commited file changes.</p>
   */
  treeId?: string;

  /**
   * <p>The files added as part of the committed file changes.</p>
   */
  filesAdded?: Array<_UnmarshalledFileMetadata>;

  /**
   * <p>The files updated as part of the commited file changes.</p>
   */
  filesUpdated?: Array<_UnmarshalledFileMetadata>;

  /**
   * <p>The files deleted as part of the committed file changes.</p>
   */
  filesDeleted?: Array<_UnmarshalledFileMetadata>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
