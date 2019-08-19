import { _UnmarshalledProvisionedProductPlanDetails } from "./_ProvisionedProductPlanDetails";
import { _UnmarshalledResourceChange } from "./_ResourceChange";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProvisionedProductPlanOutput shape
 */
export interface DescribeProvisionedProductPlanOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the plan.</p>
   */
  ProvisionedProductPlanDetails?: _UnmarshalledProvisionedProductPlanDetails;

  /**
   * <p>Information about the resource changes that will occur when the plan is executed.</p>
   */
  ResourceChanges?: Array<_UnmarshalledResourceChange>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
