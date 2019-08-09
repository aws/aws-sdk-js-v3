import { _UnmarshalledBranch } from "./_Branch";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure for create branch request. </p>
 */
export interface CreateBranchOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Branch structure for an Amplify App. </p>
   */
  branch: _UnmarshalledBranch;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
