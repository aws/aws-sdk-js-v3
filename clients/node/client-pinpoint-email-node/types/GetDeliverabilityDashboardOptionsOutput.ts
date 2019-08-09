import { _UnmarshalledDomainDeliverabilityTrackingOption } from "./_DomainDeliverabilityTrackingOption";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account.</p>
 */
export interface GetDeliverabilityDashboardOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies whether the Deliverability dashboard is enabled for your Amazon Pinpoint account. If this value is <code>true</code>, the dashboard is enabled.</p>
   */
  DashboardEnabled: boolean;

  /**
   * <p>The date, in Unix time format, when your current subscription to the Deliverability dashboard is scheduled to expire, if your subscription is scheduled to expire at the end of the current calendar month. This value is null if you have an active subscription that isn’t due to expire at the end of the month.</p>
   */
  SubscriptionExpiryDate?: Date;

  /**
   * <p>The current status of your Deliverability dashboard subscription. If this value is <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end of the current calendar month.</p>
   */
  AccountStatus?: "ACTIVE" | "PENDING_EXPIRATION" | "DISABLED" | string;

  /**
   * <p>An array of objects, one for each verified domain that you use to send email and currently has an active Deliverability dashboard subscription that isn’t scheduled to expire at the end of the current calendar month.</p>
   */
  ActiveSubscribedDomains?: Array<
    _UnmarshalledDomainDeliverabilityTrackingOption
  >;

  /**
   * <p>An array of objects, one for each verified domain that you use to send email and currently has an active Deliverability dashboard subscription that's scheduled to expire at the end of the current calendar month.</p>
   */
  PendingExpirationSubscribedDomains?: Array<
    _UnmarshalledDomainDeliverabilityTrackingOption
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
