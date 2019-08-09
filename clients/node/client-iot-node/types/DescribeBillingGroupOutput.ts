import { _UnmarshalledBillingGroupProperties } from "./_BillingGroupProperties";
import { _UnmarshalledBillingGroupMetadata } from "./_BillingGroupMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeBillingGroupOutput shape
 */
export interface DescribeBillingGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ID of the billing group.</p>
   */
  billingGroupId?: string;

  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The version of the billing group.</p>
   */
  version?: number;

  /**
   * <p>The properties of the billing group.</p>
   */
  billingGroupProperties?: _UnmarshalledBillingGroupProperties;

  /**
   * <p>Additional information about the billing group.</p>
   */
  billingGroupMetadata?: _UnmarshalledBillingGroupMetadata;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
