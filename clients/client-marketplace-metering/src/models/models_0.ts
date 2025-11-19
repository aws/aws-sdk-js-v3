// smithy-typescript generated code
import { UsageRecordResultStatus } from "./enums";

/**
 * <p>Metadata assigned to an allocation. Each tag is made up of a <code>key</code> and a
 *                 <code>value</code>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that makes up a <code>tag</code>. A <code>key</code> is a
   *             label that acts like a category for the specific tag values.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>One part of a key-value pair that makes up a <code>tag</code>. A <code>value</code>
   *             acts as a descriptor within a tag category (key). The value can be empty or null.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Usage allocations allow you to split usage into buckets by tags.</p>
 *          <p>Each <code>UsageAllocation</code> indicates the usage quantity for a specific set of
 *             tags.</p>
 * @public
 */
export interface UsageAllocation {
  /**
   * <p>The total quantity allocated to this bucket of usage.</p>
   * @public
   */
  AllocatedUsageQuantity: number | undefined;

  /**
   * <p>The set of tags that define the bucket of usage. For the bucket of items with no tags,
   *             this parameter can be left out.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A <code>UsageRecord</code> indicates a quantity of usage for a given product,
 *             customer, dimension and time.</p>
 *          <p>Multiple requests with the same <code>UsageRecords</code> as input will be
 *             de-duplicated to prevent double charges.</p>
 * @public
 */
export interface UsageRecord {
  /**
   * <p>Timestamp, in UTC, for which the usage is being reported.</p>
   *          <p>Your application can meter usage for up to six hours in the past. Make sure the
   *                 <code>timestamp</code> value is not before the start of the software usage.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>The <code>CustomerIdentifier</code> is obtained through the
   *                 <code>ResolveCustomer</code> operation and represents an individual buyer in your
   *             application.</p>
   * @public
   */
  CustomerIdentifier?: string | undefined;

  /**
   * <p>During the process of registering a product on Amazon Web Services Marketplace, dimensions are specified.
   *             These represent different units of value in your application.</p>
   * @public
   */
  Dimension: string | undefined;

  /**
   * <p>The quantity of usage consumed by the customer for the given dimension and time.
   *             Defaults to <code>0</code> if not specified.</p>
   * @public
   */
  Quantity?: number | undefined;

  /**
   * <p>The set of <code>UsageAllocations</code> to submit. The sum of all
   *                 <code>UsageAllocation</code> quantities must equal the Quantity of the
   *                 <code>UsageRecord</code>.</p>
   * @public
   */
  UsageAllocations?: UsageAllocation[] | undefined;

  /**
   * <p>
   *             The <code>CustomerAWSAccountID</code> parameter specifies the AWS account ID of the buyer.
   *         </p>
   * @public
   */
  CustomerAWSAccountId?: string | undefined;
}

/**
 * <p>A <code>BatchMeterUsageRequest</code> contains <code>UsageRecords</code>, which
 *             indicate quantities of usage within your application.</p>
 * @public
 */
export interface BatchMeterUsageRequest {
  /**
   * <p>The set of <code>UsageRecords</code> to submit. <code>BatchMeterUsage</code> accepts
   *             up to 25 <code>UsageRecords</code> at a time.</p>
   * @public
   */
  UsageRecords: UsageRecord[] | undefined;

  /**
   * <p>Product code is used to uniquely identify a product in Amazon Web Services Marketplace. The product code should
   *             be the same as the one used during the publishing of a new product.</p>
   * @public
   */
  ProductCode: string | undefined;
}

/**
 * <p>A <code>UsageRecordResult</code> indicates the status of a given
 *                 <code>UsageRecord</code> processed by <code>BatchMeterUsage</code>.</p>
 * @public
 */
export interface UsageRecordResult {
  /**
   * <p>The <code>UsageRecord</code> that was part of the <code>BatchMeterUsage</code>
   *             request.</p>
   * @public
   */
  UsageRecord?: UsageRecord | undefined;

  /**
   * <p>The <code>MeteringRecordId</code> is a unique identifier for this metering
   *             event.</p>
   * @public
   */
  MeteringRecordId?: string | undefined;

  /**
   * <p>The <code>UsageRecordResult</code>
   *             <code>Status</code> indicates the status of an individual <code>UsageRecord</code>
   *             processed by <code>BatchMeterUsage</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>Success</i>- The <code>UsageRecord</code> was accepted and
   *                     honored by <code>BatchMeterUsage</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>CustomerNotSubscribed</i>- The <code>CustomerIdentifier</code>
   *                     specified is not able to use your product. The <code>UsageRecord</code> was not
   *                     honored. There are three causes for this result:</p>
   *                <ul>
   *                   <li>
   *                      <p>The customer identifier is invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>The customer identifier provided in the metering record does not have
   *                             an active agreement or subscription with this product. Future
   *                                 <code>UsageRecords</code> for this customer will fail until the
   *                             customer subscribes to your product.</p>
   *                   </li>
   *                   <li>
   *                      <p>The customer's Amazon Web Services account was suspended.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>DuplicateRecord</i>- Indicates that the
   *                         <code>UsageRecord</code> was invalid and not honored. A previously metered
   *                         <code>UsageRecord</code> had the same customer, dimension, and time, but a
   *                     different quantity.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: UsageRecordResultStatus | undefined;
}

/**
 * <p>Contains the <code>UsageRecords</code> processed by <code>BatchMeterUsage</code> and
 *             any records that have failed due to transient error.</p>
 * @public
 */
export interface BatchMeterUsageResult {
  /**
   * <p>Contains all <code>UsageRecords</code> processed by <code>BatchMeterUsage</code>.
   *             These records were either honored by Amazon Web Services Marketplace Metering Service or were invalid. Invalid
   *             records should be fixed before being resubmitted.</p>
   * @public
   */
  Results?: UsageRecordResult[] | undefined;

  /**
   * <p>Contains all <code>UsageRecords</code> that were not processed by
   *                 <code>BatchMeterUsage</code>. This is a list of <code>UsageRecords</code>. You can
   *             retry the failed request by making another <code>BatchMeterUsage</code> call with this
   *             list as input in the <code>BatchMeterUsageRequest</code>.</p>
   * @public
   */
  UnprocessedRecords?: UsageRecord[] | undefined;
}

/**
 * @public
 */
export interface MeterUsageRequest {
  /**
   * <p>Product code is used to uniquely identify a product in Amazon Web Services Marketplace. The product code
   *             should be the same as the one used during the publishing of a new product.</p>
   * @public
   */
  ProductCode: string | undefined;

  /**
   * <p>Timestamp, in UTC, for which the usage is being reported. Your application can meter
   *             usage for up to six hours in the past. Make sure the <code>timestamp</code> value is not
   *             before the start of the software usage.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>It will be one of the fcp dimension name provided during the publishing of the
   *             product.</p>
   * @public
   */
  UsageDimension: string | undefined;

  /**
   * <p>Consumption value for the hour. Defaults to <code>0</code> if not specified.</p>
   * @public
   */
  UsageQuantity?: number | undefined;

  /**
   * <p>Checks whether you have the permissions required for the action, but does not make the
   *             request. If you have the permissions, the request returns <code>DryRunOperation</code>;
   *             otherwise, it returns <code>UnauthorizedException</code>. Defaults to <code>false</code>
   *             if not specified.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The set of <code>UsageAllocations</code> to submit.</p>
   *          <p>The sum of all <code>UsageAllocation</code> quantities must equal the
   *                 <code>UsageQuantity</code> of the <code>MeterUsage</code> request, and each
   *                 <code>UsageAllocation</code> must have a unique set of tags (include no
   *             tags).</p>
   * @public
   */
  UsageAllocations?: UsageAllocation[] | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency
   *          of the request. This lets you safely retry the request without accidentally performing the
   *          same operation a second time. Passing the same value to a later call to an operation
   *          requires that you also pass the same value for all other parameters. We recommend that you
   *          use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *             value</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *          you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with different
   *          parameters, the retry fails with an <code>IdempotencyConflictException</code> error.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface MeterUsageResult {
  /**
   * <p>Metering record id.</p>
   * @public
   */
  MeteringRecordId?: string | undefined;
}

/**
 * @public
 */
export interface RegisterUsageRequest {
  /**
   * <p>Product code is used to uniquely identify a product in Amazon Web Services Marketplace. The product code should
   *             be the same as the one used during the publishing of a new product.</p>
   * @public
   */
  ProductCode: string | undefined;

  /**
   * <p>Public Key Version provided by Amazon Web Services Marketplace</p>
   * @public
   */
  PublicKeyVersion: number | undefined;

  /**
   * <p>(Optional) To scope down the registration to a specific running software instance and
   *             guard against replay attacks.</p>
   * @public
   */
  Nonce?: string | undefined;
}

/**
 * @public
 */
export interface RegisterUsageResult {
  /**
   * <p>(Optional) Only included when public key version has expired</p>
   * @public
   */
  PublicKeyRotationTimestamp?: Date | undefined;

  /**
   * <p>JWT Token</p>
   * @public
   */
  Signature?: string | undefined;
}

/**
 * <p>Contains input to the <code>ResolveCustomer</code> operation.</p>
 * @public
 */
export interface ResolveCustomerRequest {
  /**
   * <p>When a buyer visits your website during the registration process, the buyer submits a
   *             registration token through the browser. The registration token is resolved to obtain a
   *                 <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and
   *                 <code>ProductCode</code>.</p>
   * @public
   */
  RegistrationToken: string | undefined;
}

/**
 * <p>The result of the <code>ResolveCustomer</code> operation. Contains the
 *                 <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and
 *                 <code>ProductCode</code>.</p>
 * @public
 */
export interface ResolveCustomerResult {
  /**
   * <p>The <code>CustomerIdentifier</code> is used to identify an individual customer in your
   *             application. Calls to <code>BatchMeterUsage</code> require
   *                 <code>CustomerIdentifiers</code> for each <code>UsageRecord</code>.</p>
   * @public
   */
  CustomerIdentifier?: string | undefined;

  /**
   * <p>The product code is returned to confirm that the buyer is registering for your
   *             product. Subsequent <code>BatchMeterUsage</code> calls should be made using this product
   *             code.</p>
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * <p>The <code>CustomerAWSAccountId</code> provides the Amazon Web Services account ID associated with
   *             the <code>CustomerIdentifier</code> for the individual customer.</p>
   * @public
   */
  CustomerAWSAccountId?: string | undefined;
}
