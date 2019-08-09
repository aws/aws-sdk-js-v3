import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the name of a DB cluster parameter group.</p>
 */
export interface ModifyDBClusterParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of a DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be from 1 to 255 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>
   */
  DBClusterParameterGroupName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
