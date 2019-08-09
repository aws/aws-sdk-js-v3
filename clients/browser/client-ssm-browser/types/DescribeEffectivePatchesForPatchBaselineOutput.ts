import { _UnmarshalledEffectivePatch } from "./_EffectivePatch";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEffectivePatchesForPatchBaselineOutput shape
 */
export interface DescribeEffectivePatchesForPatchBaselineOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of patches and patch status.</p>
   */
  EffectivePatches?: Array<_UnmarshalledEffectivePatch>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
