// smithy-typescript generated code
import type { UsageRecordResultStatus } from "./enums";

/**
 * Metadata assigned to an allocation. Each tag is made up of a `key` and a `value`.
 *
 * @public
 */
export interface Tag {
  /**
   * One part of a key-value pair that makes up a `tag`. A `key` is a label that acts like a category for the specific tag values.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * One part of a key-value pair that makes up a `tag`. A `value` acts as a descriptor within a tag category (key). The value can be empty or null.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Usage allocations allow you to split usage into buckets by tags.
 *
 * Each `UsageAllocation` indicates the usage quantity for a specific set of tags.
 *
 * @public
 */
export interface UsageAllocation {
  /**
   * The total quantity allocated to this bucket of usage.
   *
   * @public
   */
  AllocatedUsageQuantity: number | undefined;

  /**
   * The set of tags that define the bucket of usage. For the bucket of items with no tags, this parameter can be left out.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A `UsageRecord` indicates a quantity of usage for a given product, customer, dimension and time.
 *
 * Multiple requests with the same `UsageRecords` as input will be de-duplicated to prevent double charges.
 *
 * @public
 */
export interface UsageRecord {
  /**
   * Timestamp, in UTC, for which the usage is being reported.
   *
   * Your application can meter usage for up to 24 hours in the past. Make sure the `timestamp` value is not before the start of the software usage.
   *
   * At the end of each billing cycle, you have a 6-hour grace period to submit usage records for the previous billing month before 06:00 UTC on the first day of the next month.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * The `CustomerIdentifier` is obtained through the `ResolveCustomer` operation and represents an individual buyer in your application.
   *
   * > **Important:** `CustomerIdentifier` is not supported for new SaaS product integrations. Use `CustomerAWSAccountId` to identify the buyer.
   *
   * @public
   */
  CustomerIdentifier?: string | undefined;

  /**
   * During the process of registering a product on Amazon Web Services Marketplace, dimensions are specified. These represent different units of value in your application.
   *
   * @public
   */
  Dimension: string | undefined;

  /**
   * The quantity of usage consumed by the customer for the given dimension and time. Defaults to `0` if not specified.
   *
   * @public
   */
  Quantity?: number | undefined;

  /**
   * The set of `UsageAllocations` to submit. The sum of all `UsageAllocation` quantities must equal the Quantity of the `UsageRecord`.
   *
   * @public
   */
  UsageAllocations?: UsageAllocation[] | undefined;

  /**
   * The `CustomerAWSAccountId` parameter specifies the AWS account ID of the buyer.
   *
   * > **Important:** If you have an existing integration and need the `CustomerAWSAccountId` that corresponds to a `CustomerIdentifier`, contact [AWS Marketplace Seller Operations](https://aws.amazon.com/marketplace/management/contact-us/) to obtain the mapping. Do not request the `CustomerAWSAccountId` directly from buyers. We cannot verify that a buyer-provided account ID is authentic, which can result in incorrect metering or billing.
   *
   * @public
   */
  CustomerAWSAccountId?: string | undefined;

  /**
   * The `LicenseArn` is a unique identifier for a specific granted license. These are used for software purchased through Amazon Web Services Marketplace.
   *
   * > **Note:** To access your `CustomerAWSAccountId` and `LicenseArn` mapping, visit [Agreements Feeds](https://docs.aws.amazon.com/marketplace/latest/userguide/data-feed-agreements.html).
   *
   * @public
   */
  LicenseArn?: string | undefined;
}

/**
 * A `BatchMeterUsageRequest` contains `UsageRecords`, which indicate quantities of usage within your application.
 *
 * @public
 */
export interface BatchMeterUsageRequest {
  /**
   * The set of `UsageRecords` to submit. `BatchMeterUsage` accepts up to 25 `UsageRecords` at a time.
   *
   * @public
   */
  UsageRecords: UsageRecord[] | undefined;

  /**
   * Product code is used to uniquely identify a product in Amazon Web Services Marketplace. The product code should be the same as the one used during the publishing of a new product.
   *
   * > **Important:**
   * >
   * > `ProductCode` is required only for legacy integrations that use `CustomerIdentifier`. For new integrations using `LicenseArn` (Concurrent Agreements), do NOT include `ProductCode` at the request level. The `LicenseArn` in each `UsageRecord` identifies both the product and the specific agreement.
   * >
   * > Sending metering records with both `ProductCode` and `LicenseArn` for the same customer within the same hour will result in duplicate billing. If you are migrating from product-based metering to license-based metering, stop sending `ProductCode` before you start sending `LicenseArn`.
   *
   * @public
   */
  ProductCode?: string | undefined;
}

/**
 * A `UsageRecordResult` indicates the status of a given `UsageRecord` processed by `BatchMeterUsage`.
 *
 * @public
 */
export interface UsageRecordResult {
  /**
   * The `UsageRecord` that was part of the `BatchMeterUsage` request.
   *
   * @public
   */
  UsageRecord?: UsageRecord | undefined;

  /**
   * The `MeteringRecordId` is a unique identifier for this metering event.
   *
   * @public
   */
  MeteringRecordId?: string | undefined;

  /**
   * The `UsageRecordResult` `Status` indicates the status of an individual `UsageRecord` processed by `BatchMeterUsage`.
   *
   * - *Success*- The `UsageRecord` was accepted and honored by `BatchMeterUsage`.
   * - *CustomerNotSubscribed*- The `CustomerIdentifier` specified is not able to use your product. The `UsageRecord` was not honored. There are three causes for this result:
   *
   *   - The customer identifier is invalid.
   *   - The customer identifier provided in the metering record does not have an active agreement or subscription with this product. Future `UsageRecords` for this customer will fail until the customer subscribes to your product.
   *   - The customer's Amazon Web Services account was suspended.
   * - *DuplicateRecord*- Indicates that the `UsageRecord` was invalid and not honored. A previously metered `UsageRecord` had the same customer, dimension, and time, but a different quantity.
   *
   * @public
   */
  Status?: UsageRecordResultStatus | undefined;
}

/**
 * Contains the `UsageRecords` processed by `BatchMeterUsage` and any records that have failed due to transient error.
 *
 * @public
 */
export interface BatchMeterUsageResult {
  /**
   * Contains all `UsageRecords` processed by `BatchMeterUsage`. These records were either honored by Amazon Web Services Marketplace Metering Service or were invalid. Invalid records should be fixed before being resubmitted.
   *
   * @public
   */
  Results?: UsageRecordResult[] | undefined;

  /**
   * Contains all `UsageRecords` that were not processed by `BatchMeterUsage`. This is a list of `UsageRecords`. You can retry the failed request by making another `BatchMeterUsage` call with this list as input in the `BatchMeterUsageRequest`.
   *
   * @public
   */
  UnprocessedRecords?: UsageRecord[] | undefined;
}

/**
 * @public
 */
export interface MeterUsageRequest {
  /**
   * Product code is used to uniquely identify a product in Amazon Web Services Marketplace. The product code should be the same as the one used during the publishing of a new product.
   *
   * @public
   */
  ProductCode: string | undefined;

  /**
   * Timestamp, in UTC, for which the usage is being reported. Your application can meter usage for up to six hours in the past. Make sure the `timestamp` value is not before the start of the software usage.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * It will be one of the fcp dimension name provided during the publishing of the product.
   *
   * @public
   */
  UsageDimension: string | undefined;

  /**
   * Consumption value for the hour. Defaults to `0` if not specified.
   *
   * @public
   */
  UsageQuantity?: number | undefined;

  /**
   * Checks whether you have the permissions required for the action, but does not make the request. If you have the permissions, the request returns `DryRunOperation`; otherwise, it returns `UnauthorizedException`. Defaults to `false` if not specified.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The set of `UsageAllocations` to submit.
   *
   * The sum of all `UsageAllocation` quantities must equal the `UsageQuantity` of the `MeterUsage` request, and each `UsageAllocation` must have a unique set of tags (include no tags).
   *
   * @public
   */
  UsageAllocations?: UsageAllocation[] | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotencyConflictException` error.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface MeterUsageResult {
  /**
   * Metering record id.
   *
   * @public
   */
  MeteringRecordId?: string | undefined;
}

/**
 * @public
 */
export interface RegisterUsageRequest {
  /**
   * Product code is used to uniquely identify a product in Amazon Web Services Marketplace. The product code should be the same as the one used during the publishing of a new product.
   *
   * @public
   */
  ProductCode: string | undefined;

  /**
   * Public Key Version provided by Amazon Web Services Marketplace
   *
   * @public
   */
  PublicKeyVersion: number | undefined;

  /**
   * (Optional) To scope down the registration to a specific running software instance and guard against replay attacks.
   *
   * @public
   */
  Nonce?: string | undefined;
}

/**
 * @public
 */
export interface RegisterUsageResult {
  /**
   * (Optional) Only included when public key version has expired
   *
   * @public
   */
  PublicKeyRotationTimestamp?: Date | undefined;

  /**
   * JWT Token
   *
   * @public
   */
  Signature?: string | undefined;
}

/**
 * Contains input to the `ResolveCustomer` operation.
 *
 * @public
 */
export interface ResolveCustomerRequest {
  /**
   * When a buyer visits your website during the registration process, the buyer submits a registration token through the browser. The registration token is resolved to obtain a `CustomerIdentifier` along with the `CustomerAWSAccountId`, `ProductCode`, and `LicenseArn`.
   *
   * > **Note:** For new SaaS product integrations, the `CustomerIdentifier` field is not populated. Use `CustomerAWSAccountId` and `LicenseArn` for customer identification.
   *
   * @public
   */
  RegistrationToken: string | undefined;
}

/**
 * Metadata associated with a resolved customer. Includes the `AgreementId` of the Amazon Web Services Marketplace agreement the customer accepted.
 *
 * @public
 */
export interface Metadata {
  /**
   * The unique identifier of the Amazon Web Services Marketplace agreement the customer accepted. Use it to call Amazon Web Services Marketplace Agreement APIs.
   *
   * @public
   */
  AgreementId?: string | undefined;
}

/**
 * The result of the `ResolveCustomer` operation. Contains the `CustomerIdentifier` along with the `CustomerAWSAccountId`, `ProductCode`, `LicenseArn`, and `Metadata`.
 *
 * @public
 */
export interface ResolveCustomerResult {
  /**
   * The `CustomerIdentifier` is used to identify an individual customer in your application.
   *
   * > **Important:** For new SaaS product integrations, this field is not populated. Use `CustomerAWSAccountId` and `LicenseArn` to identify customers instead.
   *
   * @public
   */
  CustomerIdentifier?: string | undefined;

  /**
   * The product code is returned to confirm that the buyer is registering for your product. Subsequent `BatchMeterUsage` calls should be made using this product code.
   *
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * The `CustomerAWSAccountId` provides the Amazon Web Services account ID associated with the `CustomerIdentifier` for the individual customer. Calls to `BatchMeterUsage` require `CustomerAWSAccountId` for each `UsageRecord`.
   *
   * @public
   */
  CustomerAWSAccountId?: string | undefined;

  /**
   * The `LicenseArn` is a unique identifier for a specific granted license. These are typically used for software purchased through Amazon Web Services Marketplace. Calls to `BatchMeterUsage` require `LicenseArn` for each `UsageRecord`.
   *
   * > **Note:** Once you receive the `CustomerAWSAccountId` and `LicenseArn` in the response, store that for future purposes/API calls/integrations.
   *
   * @public
   */
  LicenseArn?: string | undefined;

  /**
   * The metadata associated with the resolved customer, including the `AgreementId` of the Amazon Web Services Marketplace agreement the customer accepted.
   *
   * @public
   */
  Metadata?: Metadata | undefined;
}
