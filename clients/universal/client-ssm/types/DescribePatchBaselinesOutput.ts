import { _UnmarshalledPatchBaselineIdentity } from "./_PatchBaselineIdentity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePatchBaselinesOutput shape
 */
export interface DescribePatchBaselinesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of PatchBaselineIdentity elements.</p>
   */
  BaselineIdentities?: Array<_UnmarshalledPatchBaselineIdentity>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
