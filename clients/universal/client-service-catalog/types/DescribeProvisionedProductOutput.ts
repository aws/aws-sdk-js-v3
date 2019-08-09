import { _UnmarshalledProvisionedProductDetail } from "./_ProvisionedProductDetail";
import { _UnmarshalledCloudWatchDashboard } from "./_CloudWatchDashboard";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProvisionedProductOutput shape
 */
export interface DescribeProvisionedProductOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the provisioned product.</p>
   */
  ProvisionedProductDetail?: _UnmarshalledProvisionedProductDetail;

  /**
   * <p>Any CloudWatch dashboards that were created when provisioning the product.</p>
   */
  CloudWatchDashboards?: Array<_UnmarshalledCloudWatchDashboard>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
