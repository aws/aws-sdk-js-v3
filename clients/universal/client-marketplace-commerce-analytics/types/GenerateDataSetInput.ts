import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Container for the parameters to the GenerateDataSet operation.
 */
export interface GenerateDataSetInput {
  /**
   * <p>The desired data set type.</p> <p> <ul> <li> <strong>customer_subscriber_hourly_monthly_subscriptions</strong> <p>From 2014-07-21 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>customer_subscriber_annual_subscriptions</strong> <p>From 2014-07-21 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>daily_business_usage_by_instance_type</strong> <p>From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>daily_business_fees</strong> <p>From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>daily_business_free_trial_conversions</strong> <p>From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>daily_business_new_instances</strong> <p>From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>daily_business_new_product_subscribers</strong> <p>From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>daily_business_canceled_product_subscribers</strong> <p>From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>monthly_revenue_billing_and_revenue_data</strong> <p>From 2015-02 to 2017-06: Available monthly on the 4th day of the month by 5:00pm Pacific Time. Data includes metered transactions (e.g. hourly) from two months prior.</p> <p>From 2017-07 to present: Available monthly on the 15th day of the month by 5:00pm Pacific Time. Data includes metered transactions (e.g. hourly) from one month prior.</p> </li> <li> <strong>monthly_revenue_annual_subscriptions</strong> <p>From 2015-02 to 2017-06: Available monthly on the 4th day of the month by 5:00pm Pacific Time. Data includes up-front software charges (e.g. annual) from one month prior.</p> <p>From 2017-07 to present: Available monthly on the 15th day of the month by 5:00pm Pacific Time. Data includes up-front software charges (e.g. annual) from one month prior.</p> </li> <li> <strong>disbursed_amount_by_product</strong> <p>From 2015-01-26 to present: Available every 30 days by 5:00 PM Pacific Time.</p> </li> <li> <strong>disbursed_amount_by_product_with_uncollected_funds</strong> <p>From 2012-04-19 to 2015-01-25: Available every 30 days by 5:00 PM Pacific Time.</p> <p>From 2015-01-26 to present: This data set was split into three data sets: disbursed_amount_by_product, disbursed_amount_by_age_of_uncollected_funds, and disbursed_amount_by_age_of_disbursed_funds.</p> </li> <li> <strong>disbursed_amount_by_instance_hours</strong> <p>From 2012-09-04 to present: Available every 30 days by 5:00 PM Pacific Time.</p> </li> <li> <strong>disbursed_amount_by_customer_geo</strong> <p>From 2012-04-19 to present: Available every 30 days by 5:00 PM Pacific Time.</p> </li> <li> <strong>disbursed_amount_by_age_of_uncollected_funds</strong> <p>From 2015-01-26 to present: Available every 30 days by 5:00 PM Pacific Time.</p> </li> <li> <strong>disbursed_amount_by_age_of_disbursed_funds</strong> <p>From 2015-01-26 to present: Available every 30 days by 5:00 PM Pacific Time.</p> </li> <li> <strong>customer_profile_by_industry</strong> <p>From 2015-10-01 to 2017-06-29: Available daily by 5:00 PM Pacific Time.</p> <p>From 2017-06-30 to present: This data set is no longer available.</p> </li> <li> <strong>customer_profile_by_revenue</strong> <p>From 2015-10-01 to 2017-06-29: Available daily by 5:00 PM Pacific Time.</p> <p>From 2017-06-30 to present: This data set is no longer available.</p> </li> <li> <strong>customer_profile_by_geography</strong> <p>From 2015-10-01 to 2017-06-29: Available daily by 5:00 PM Pacific Time.</p> <p>From 2017-06-30 to present: This data set is no longer available.</p> </li> <li> <strong>sales_compensation_billed_revenue</strong> <p>From 2016-12 to 2017-06: Available monthly on the 4th day of the month by 5:00pm Pacific Time. Data includes metered transactions (e.g. hourly) from two months prior, and up-front software charges (e.g. annual) from one month prior.</p> <p>From 2017-06 to present: Available monthly on the 15th day of the month by 5:00pm Pacific Time. Data includes metered transactions (e.g. hourly) from one month prior, and up-front software charges (e.g. annual) from one month prior.</p> </li> <li> <strong>us_sales_and_use_tax_records</strong> <p>From 2017-02-15 to present: Available monthly on the 15th day of the month by 5:00 PM Pacific Time.</p> </li> </ul> </p>
   */
  dataSetType:
    | "customer_subscriber_hourly_monthly_subscriptions"
    | "customer_subscriber_annual_subscriptions"
    | "daily_business_usage_by_instance_type"
    | "daily_business_fees"
    | "daily_business_free_trial_conversions"
    | "daily_business_new_instances"
    | "daily_business_new_product_subscribers"
    | "daily_business_canceled_product_subscribers"
    | "monthly_revenue_billing_and_revenue_data"
    | "monthly_revenue_annual_subscriptions"
    | "disbursed_amount_by_product"
    | "disbursed_amount_by_product_with_uncollected_funds"
    | "disbursed_amount_by_instance_hours"
    | "disbursed_amount_by_customer_geo"
    | "disbursed_amount_by_age_of_uncollected_funds"
    | "disbursed_amount_by_age_of_disbursed_funds"
    | "customer_profile_by_industry"
    | "customer_profile_by_revenue"
    | "customer_profile_by_geography"
    | "sales_compensation_billed_revenue"
    | "us_sales_and_use_tax_records"
    | string;

  /**
   * The date a data set was published. For daily data sets, provide a date with day-level granularity for the desired day. For weekly data sets, provide a date with day-level granularity within the desired week (the day value will be ignored). For monthly data sets, provide a date with month-level granularity for the desired month (the day value will be ignored).
   */
  dataSetPublicationDate: Date | string | number;

  /**
   * The Amazon Resource Name (ARN) of the Role with an attached permissions policy to interact with the provided AWS services.
   */
  roleNameArn: string;

  /**
   * The name (friendly name, not ARN) of the destination S3 bucket.
   */
  destinationS3BucketName: string;

  /**
   * (Optional) The desired S3 prefix for the published data set, similar to a directory path in standard file systems. For example, if given the bucket name "mybucket" and the prefix "myprefix/mydatasets", the output file "outputfile" would be published to "s3://mybucket/myprefix/mydatasets/outputfile". If the prefix directory structure does not exist, it will be created. If no prefix is provided, the data set will be published to the S3 bucket root.
   */
  destinationS3Prefix?: string;

  /**
   * Amazon Resource Name (ARN) for the SNS Topic that will be notified when the data set has been published or if an error has occurred.
   */
  snsTopicArn: string;

  /**
   * (Optional) Key-value pairs which will be returned, unmodified, in the Amazon SNS notification message and the data set metadata file. These key-value pairs can be used to correlated responses with tracking information from other systems.
   */
  customerDefinedValues?:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
