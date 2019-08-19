import { _UnmarshalledPatchComplianceData } from "./_PatchComplianceData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeInstancePatchesOutput shape
 */
export interface DescribeInstancePatchesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Each entry in the array is a structure containing:</p> <p>Title (string)</p> <p>KBId (string)</p> <p>Classification (string)</p> <p>Severity (string)</p> <p>State (string, such as "INSTALLED" or "FAILED")</p> <p>InstalledTime (DateTime)</p> <p>InstalledBy (string)</p>
   */
  Patches?: Array<_UnmarshalledPatchComplianceData>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
