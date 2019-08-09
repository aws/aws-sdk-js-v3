import {
  _RecurringCharge,
  _UnmarshalledRecurringCharge
} from "./_RecurringCharge";

/**
 * <p>Details of a reserved Elasticsearch instance offering.</p>
 */
export interface _ReservedElasticsearchInstanceOffering {
  /**
   * <p>The Elasticsearch reserved instance offering identifier.</p>
   */
  ReservedElasticsearchInstanceOfferingId?: string;

  /**
   * <p>The Elasticsearch instance type offered by the reserved instance offering.</p>
   */
  ElasticsearchInstanceType?:
    | "m3.medium.elasticsearch"
    | "m3.large.elasticsearch"
    | "m3.xlarge.elasticsearch"
    | "m3.2xlarge.elasticsearch"
    | "m4.large.elasticsearch"
    | "m4.xlarge.elasticsearch"
    | "m4.2xlarge.elasticsearch"
    | "m4.4xlarge.elasticsearch"
    | "m4.10xlarge.elasticsearch"
    | "m5.large.elasticsearch"
    | "m5.xlarge.elasticsearch"
    | "m5.2xlarge.elasticsearch"
    | "m5.4xlarge.elasticsearch"
    | "m5.12xlarge.elasticsearch"
    | "r5.large.elasticsearch"
    | "r5.xlarge.elasticsearch"
    | "r5.2xlarge.elasticsearch"
    | "r5.4xlarge.elasticsearch"
    | "r5.12xlarge.elasticsearch"
    | "c5.large.elasticsearch"
    | "c5.xlarge.elasticsearch"
    | "c5.2xlarge.elasticsearch"
    | "c5.4xlarge.elasticsearch"
    | "c5.9xlarge.elasticsearch"
    | "c5.18xlarge.elasticsearch"
    | "t2.micro.elasticsearch"
    | "t2.small.elasticsearch"
    | "t2.medium.elasticsearch"
    | "r3.large.elasticsearch"
    | "r3.xlarge.elasticsearch"
    | "r3.2xlarge.elasticsearch"
    | "r3.4xlarge.elasticsearch"
    | "r3.8xlarge.elasticsearch"
    | "i2.xlarge.elasticsearch"
    | "i2.2xlarge.elasticsearch"
    | "d2.xlarge.elasticsearch"
    | "d2.2xlarge.elasticsearch"
    | "d2.4xlarge.elasticsearch"
    | "d2.8xlarge.elasticsearch"
    | "c4.large.elasticsearch"
    | "c4.xlarge.elasticsearch"
    | "c4.2xlarge.elasticsearch"
    | "c4.4xlarge.elasticsearch"
    | "c4.8xlarge.elasticsearch"
    | "r4.large.elasticsearch"
    | "r4.xlarge.elasticsearch"
    | "r4.2xlarge.elasticsearch"
    | "r4.4xlarge.elasticsearch"
    | "r4.8xlarge.elasticsearch"
    | "r4.16xlarge.elasticsearch"
    | "i3.large.elasticsearch"
    | "i3.xlarge.elasticsearch"
    | "i3.2xlarge.elasticsearch"
    | "i3.4xlarge.elasticsearch"
    | "i3.8xlarge.elasticsearch"
    | "i3.16xlarge.elasticsearch"
    | string;

  /**
   * <p>The duration, in seconds, for which the offering will reserve the Elasticsearch instance.</p>
   */
  Duration?: number;

  /**
   * <p>The upfront fixed charge you will pay to purchase the specific reserved Elasticsearch instance offering. </p>
   */
  FixedPrice?: number;

  /**
   * <p>The rate you are charged for each hour the domain that is using the offering is running.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the reserved Elasticsearch instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>Payment option for the reserved Elasticsearch instance offering</p>
   */
  PaymentOption?: "ALL_UPFRONT" | "PARTIAL_UPFRONT" | "NO_UPFRONT" | string;

  /**
   * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
   */
  RecurringCharges?: Array<_RecurringCharge> | Iterable<_RecurringCharge>;
}

export interface _UnmarshalledReservedElasticsearchInstanceOffering
  extends _ReservedElasticsearchInstanceOffering {
  /**
   * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
   */
  RecurringCharges?: Array<_UnmarshalledRecurringCharge>;
}
