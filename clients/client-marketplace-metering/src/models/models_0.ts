// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MarketplaceMeteringServiceException as __BaseException } from "./MarketplaceMeteringServiceException";

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
 * @public
 * @enum
 */
export const UsageRecordResultStatus = {
  CUSTOMER_NOT_SUBSCRIBED: "CustomerNotSubscribed",
  DUPLICATE_RECORD: "DuplicateRecord",
  SUCCESS: "Success",
} as const;

/**
 * @public
 */
export type UsageRecordResultStatus = (typeof UsageRecordResultStatus)[keyof typeof UsageRecordResultStatus];

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
 * <p>The API is disabled in the Region.</p>
 * @public
 */
export class DisabledApiException extends __BaseException {
  readonly name: "DisabledApiException" = "DisabledApiException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DisabledApiException, __BaseException>) {
    super({
      name: "DisabledApiException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DisabledApiException.prototype);
  }
}

/**
 * <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *             message with details on the Amazon Web Services forums.</p>
 * @public
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
  }
}

/**
 * <p>You have metered usage for a <code>CustomerIdentifier</code> that does not
 *             exist.</p>
 * @public
 */
export class InvalidCustomerIdentifierException extends __BaseException {
  readonly name: "InvalidCustomerIdentifierException" = "InvalidCustomerIdentifierException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCustomerIdentifierException, __BaseException>) {
    super({
      name: "InvalidCustomerIdentifierException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCustomerIdentifierException.prototype);
  }
}

/**
 * <p>The product code passed does not match the product code used for publishing the
 *             product.</p>
 * @public
 */
export class InvalidProductCodeException extends __BaseException {
  readonly name: "InvalidProductCodeException" = "InvalidProductCodeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidProductCodeException, __BaseException>) {
    super({
      name: "InvalidProductCodeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidProductCodeException.prototype);
  }
}

/**
 * <p>The tag is invalid, or the number of tags is greater than 5.</p>
 * @public
 */
export class InvalidTagException extends __BaseException {
  readonly name: "InvalidTagException" = "InvalidTagException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagException, __BaseException>) {
    super({
      name: "InvalidTagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagException.prototype);
  }
}

/**
 * <p>Sum of allocated usage quantities is not equal to the usage quantity.</p>
 * @public
 */
export class InvalidUsageAllocationsException extends __BaseException {
  readonly name: "InvalidUsageAllocationsException" = "InvalidUsageAllocationsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUsageAllocationsException, __BaseException>) {
    super({
      name: "InvalidUsageAllocationsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUsageAllocationsException.prototype);
  }
}

/**
 * <p>The usage dimension does not match one of the <code>UsageDimensions</code> associated
 *             with products.</p>
 * @public
 */
export class InvalidUsageDimensionException extends __BaseException {
  readonly name: "InvalidUsageDimensionException" = "InvalidUsageDimensionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUsageDimensionException, __BaseException>) {
    super({
      name: "InvalidUsageDimensionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUsageDimensionException.prototype);
  }
}

/**
 * <p>The calls to the API are throttled.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The <code>timestamp</code> value passed in the <code>UsageRecord</code> is out of
 *             allowed range.</p>
 *          <p>For <code>BatchMeterUsage</code>, if any of the records are outside of the allowed
 *             range, the entire batch is not processed. You must remove invalid records and try
 *             again.</p>
 * @public
 */
export class TimestampOutOfBoundsException extends __BaseException {
  readonly name: "TimestampOutOfBoundsException" = "TimestampOutOfBoundsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TimestampOutOfBoundsException, __BaseException>) {
    super({
      name: "TimestampOutOfBoundsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TimestampOutOfBoundsException.prototype);
  }
}

/**
 * <p>Exception thrown when the customer does not have a valid subscription for the
 *             product.</p>
 * @public
 */
export class CustomerNotEntitledException extends __BaseException {
  readonly name: "CustomerNotEntitledException" = "CustomerNotEntitledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomerNotEntitledException, __BaseException>) {
    super({
      name: "CustomerNotEntitledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomerNotEntitledException.prototype);
  }
}

/**
 * <p>A metering record has already been emitted by the same EC2 instance, ECS task, or EKS
 *             pod for the given \{<code>usageDimension</code>, <code>timestamp</code>\} with a different
 *                 <code>usageQuantity</code>.</p>
 * @public
 */
export class DuplicateRequestException extends __BaseException {
  readonly name: "DuplicateRequestException" = "DuplicateRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateRequestException, __BaseException>) {
    super({
      name: "DuplicateRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateRequestException.prototype);
  }
}

/**
 * <p>The <code>ClientToken</code> is being used for multiple requests.</p>
 * @public
 */
export class IdempotencyConflictException extends __BaseException {
  readonly name: "IdempotencyConflictException" = "IdempotencyConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyConflictException, __BaseException>) {
    super({
      name: "IdempotencyConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyConflictException.prototype);
  }
}

/**
 * <p>The endpoint being called is in a Amazon Web Services Region different from your EC2 instance, ECS
 *             task, or EKS pod. The Region of the Metering Service endpoint and the Amazon Web Services Region of
 *             the resource must match.</p>
 * @public
 */
export class InvalidEndpointRegionException extends __BaseException {
  readonly name: "InvalidEndpointRegionException" = "InvalidEndpointRegionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEndpointRegionException, __BaseException>) {
    super({
      name: "InvalidEndpointRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEndpointRegionException.prototype);
  }
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
 * <p>Public Key version is invalid.</p>
 * @public
 */
export class InvalidPublicKeyVersionException extends __BaseException {
  readonly name: "InvalidPublicKeyVersionException" = "InvalidPublicKeyVersionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPublicKeyVersionException, __BaseException>) {
    super({
      name: "InvalidPublicKeyVersionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPublicKeyVersionException.prototype);
  }
}

/**
 * <p>
 *             <code>RegisterUsage</code> must be called in the same Amazon Web Services Region the ECS task was
 *             launched in. This prevents a container from hardcoding a Region (e.g.
 *             withRegion(“us-east-1”) when calling <code>RegisterUsage</code>.</p>
 * @public
 */
export class InvalidRegionException extends __BaseException {
  readonly name: "InvalidRegionException" = "InvalidRegionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRegionException, __BaseException>) {
    super({
      name: "InvalidRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRegionException.prototype);
  }
}

/**
 * <p>Amazon Web Services Marketplace does not support metering usage from the underlying platform. Currently, Amazon ECS, Amazon EKS, and Fargate are supported.</p>
 * @public
 */
export class PlatformNotSupportedException extends __BaseException {
  readonly name: "PlatformNotSupportedException" = "PlatformNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PlatformNotSupportedException, __BaseException>) {
    super({
      name: "PlatformNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PlatformNotSupportedException.prototype);
  }
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
 * <p>The submitted registration token has expired. This can happen if the buyer's browser
 *             takes too long to redirect to your page, the buyer has resubmitted the registration
 *             token, or your application has held on to the registration token for too long. Your SaaS
 *             registration website should redeem this token as soon as it is submitted by the buyer's
 *             browser.</p>
 * @public
 */
export class ExpiredTokenException extends __BaseException {
  readonly name: "ExpiredTokenException" = "ExpiredTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredTokenException, __BaseException>) {
    super({
      name: "ExpiredTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredTokenException.prototype);
  }
}

/**
 * <p>Registration token is invalid.</p>
 * @public
 */
export class InvalidTokenException extends __BaseException {
  readonly name: "InvalidTokenException" = "InvalidTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTokenException, __BaseException>) {
    super({
      name: "InvalidTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTokenException.prototype);
  }
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
