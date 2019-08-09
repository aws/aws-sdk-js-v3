import { _UnmarshalledBranch } from "./_Branch";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBranchOutput shape
 */
export interface GetBranchOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Branch for an Amplify App, which maps to a 3rd party repository branch. </p>
   */
  branch: _UnmarshalledBranch;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
