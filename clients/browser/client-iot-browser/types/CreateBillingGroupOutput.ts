import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateBillingGroupOutput shape
 */
export interface CreateBillingGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name you gave to the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The ID of the billing group.</p>
   */
  billingGroupId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
