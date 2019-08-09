import { _UnmarshalledInstancePatchState } from "./_InstancePatchState";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeInstancePatchStatesForPatchGroupOutput shape
 */
export interface DescribeInstancePatchStatesForPatchGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The high-level patch state for the requested instances. </p>
   */
  InstancePatchStates?: Array<_UnmarshalledInstancePatchState>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
