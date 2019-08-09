import { _UnmarshalledPatch } from "./_Patch";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAvailablePatchesOutput shape
 */
export interface DescribeAvailablePatchesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of patches. Each entry in the array is a patch structure.</p>
   */
  Patches?: Array<_UnmarshalledPatch>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
