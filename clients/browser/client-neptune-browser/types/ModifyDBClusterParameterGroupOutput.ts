import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyDBClusterParameterGroupOutput shape
 */
export interface ModifyDBClusterParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters or numbers.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>
   */
  DBClusterParameterGroupName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
