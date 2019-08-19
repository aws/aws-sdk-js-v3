import { _UnmarshalledPatchGroupPatchBaselineMapping } from "./_PatchGroupPatchBaselineMapping";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePatchGroupsOutput shape
 */
export interface DescribePatchGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Each entry in the array contains:</p> <p>PatchGroup: string (between 1 and 256 characters, Regex: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$)</p> <p>PatchBaselineIdentity: A PatchBaselineIdentity element. </p>
   */
  Mappings?: Array<_UnmarshalledPatchGroupPatchBaselineMapping>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
