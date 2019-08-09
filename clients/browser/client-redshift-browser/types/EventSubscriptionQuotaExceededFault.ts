import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request would exceed the allowed number of event subscriptions for this account. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
export interface EventSubscriptionQuotaExceededFault
  extends __ServiceException__<_EventSubscriptionQuotaExceededFaultDetails> {
  name: "EventSubscriptionQuotaExceededFault";
}

export interface _EventSubscriptionQuotaExceededFaultDetails {}
