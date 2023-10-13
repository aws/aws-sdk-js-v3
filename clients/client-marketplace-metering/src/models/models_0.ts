// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MarketplaceMeteringServiceException as __BaseException } from "./MarketplaceMeteringServiceException";

/**
 * @public
 * <p>Metadata assigned to an allocation. Each tag is made up of a <code>key</code> and a
 *                 <code>value</code>.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>One part of a key-value pair that makes up a <code>tag</code>. A <code>key</code> is a
   *             label that acts like a category for the specific tag values.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>One part of a key-value pair that makes up a <code>tag</code>. A <code>value</code>
   *             acts as a descriptor within a tag category (key). The value can be empty or null.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Usage allocations allow you to split usage into buckets by tags.</p>
 *          <p>Each <code>UsageAllocation</code> indicates the usage quantity for a specific set of
 *             tags.</p>
 */
export interface UsageAllocation {
  /**
   * @public
   * <p>The total quantity allocated to this bucket of usage.</p>
   */
  AllocatedUsageQuantity: number | undefined;

  /**
   * @public
   * <p>The set of tags that define the bucket of usage. For the bucket of items with no tags,
   *             this parameter can be left out.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A <code>UsageRecord</code> indicates a quantity of usage for a given product,
 *             customer, dimension and time.</p>
 *          <p>Multiple requests with the same <code>UsageRecords</code> as input will be
 *             de-duplicated to prevent double charges.</p>
 */
export interface UsageRecord {
  /**
   * @public
   * <p>Timestamp, in UTC, for which the usage is being reported.</p>
   *          <p>Your application can meter usage for up to one hour in the past. Make sure the
   *                 <code>timestamp</code> value is not before the start of the software usage.</p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p>The <code>CustomerIdentifier</code> is obtained through the
   *                 <code>ResolveCustomer</code> operation and represents an individual buyer in your
   *             application.</p>
   */
  CustomerIdentifier: string | undefined;

  /**
   * @public
   * <p>During the process of registering a product on AWS Marketplace, dimensions are
   *             specified. These represent different units of value in your application.</p>
   */
  Dimension: string | undefined;

  /**
   * @public
   * <p>The quantity of usage consumed by the customer for the given dimension and time.
   *             Defaults to <code>0</code> if not specified.</p>
   */
  Quantity?: number;

  /**
   * @public
   * <p>The set of <code>UsageAllocations</code> to submit. The sum of all
   *                 <code>UsageAllocation</code> quantities must equal the Quantity of the
   *                 <code>UsageRecord</code>.</p>
   */
  UsageAllocations?: UsageAllocation[];
}

/**
 * @public
 * <p>A <code>BatchMeterUsageRequest</code> contains <code>UsageRecords</code>, which
 *             indicate quantities of usage within your application.</p>
 */
export interface BatchMeterUsageRequest {
  /**
   * @public
   * <p>The set of <code>UsageRecords</code> to submit. <code>BatchMeterUsage</code> accepts
   *             up to 25 <code>UsageRecords</code> at a time.</p>
   */
  UsageRecords: UsageRecord[] | undefined;

  /**
   * @public
   * <p>Product code is used to uniquely identify a product in AWS Marketplace. The product
   *             code should be the same as the one used during the publishing of a new product.</p>
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
 * @public
 * <p>A <code>UsageRecordResult</code> indicates the status of a given
 *                 <code>UsageRecord</code> processed by <code>BatchMeterUsage</code>.</p>
 */
export interface UsageRecordResult {
  /**
   * @public
   * <p>The <code>UsageRecord</code> that was part of the <code>BatchMeterUsage</code>
   *             request.</p>
   */
  UsageRecord?: UsageRecord;

  /**
   * @public
   * <p>The <code>MeteringRecordId</code> is a unique identifier for this metering
   *             event.</p>
   */
  MeteringRecordId?: string;

  /**
   * @public
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
   *                      <p>The customer's AWS account was suspended.</p>
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
   */
  Status?: UsageRecordResultStatus;
}

/**
 * @public
 * <p>Contains the <code>UsageRecords</code> processed by <code>BatchMeterUsage</code> and
 *             any records that have failed due to transient error.</p>
 */
export interface BatchMeterUsageResult {
  /**
   * @public
   * <p>Contains all <code>UsageRecords</code> processed by <code>BatchMeterUsage</code>.
   *             These records were either honored by AWS Marketplace Metering Service or were invalid.
   *             Invalid records should be fixed before being resubmitted.</p>
   */
  Results?: UsageRecordResult[];

  /**
   * @public
   * <p>Contains all <code>UsageRecords</code> that were not processed by
   *                 <code>BatchMeterUsage</code>. This is a list of <code>UsageRecords</code>. You can
   *             retry the failed request by making another <code>BatchMeterUsage</code> call with this
   *             list as input in the <code>BatchMeterUsageRequest</code>.</p>
   */
  UnprocessedRecords?: UsageRecord[];
}

/**
 * @public
 * <p>The API is disabled in the Region.</p>
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
 * @public
 * <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *             message with details on the AWS forums.</p>
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
 * @public
 * <p>You have metered usage for a <code>CustomerIdentifier</code> that does not
 *             exist.</p>
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
 * @public
 * <p>The product code passed does not match the product code used for publishing the
 *             product.</p>
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
 * @public
 * <p>The tag is invalid, or the number of tags is greater than 5.</p>
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
 * @public
 * <p>The usage allocation objects are invalid, or the number of allocations is greater than
 *             500 for a single usage record.</p>
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
 * @public
 * <p>The usage dimension does not match one of the <code>UsageDimensions</code> associated
 *             with products.</p>
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
 * @public
 * <p>The calls to the API are throttled.</p>
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
 * @public
 * <p>The <code>timestamp</code> value passed in the <code>UsageRecord</code> is out of
 *             allowed range.</p>
 *          <p>For <code>BatchMeterUsage</code>, if any of the records are outside of the allowed
 *             range, the entire batch is not processed. You must remove invalid records and try
 *             again.</p>
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
 * @public
 * <p>Exception thrown when the customer does not have a valid subscription for the
 *             product.</p>
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
 * @public
 * <p>A metering record has already been emitted by the same EC2 instance, ECS task, or EKS
 *             pod for the given \{<code>usageDimension</code>, <code>timestamp</code>\} with a different
 *                 <code>usageQuantity</code>.</p>
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
 * @public
 * <p>The endpoint being called is in a AWS Region different from your EC2 instance, ECS
 *             task, or EKS pod. The Region of the Metering Service endpoint and the AWS Region of the
 *             resource must match.</p>
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
   * @public
   * <p>Product code is used to uniquely identify a product in AWS Marketplace. The product
   *             code should be the same as the one used during the publishing of a new product.</p>
   */
  ProductCode: string | undefined;

  /**
   * @public
   * <p>Timestamp, in UTC, for which the usage is being reported. Your application can meter
   *             usage for up to one hour in the past. Make sure the <code>timestamp</code> value is not
   *             before the start of the software usage.</p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p>It will be one of the fcp dimension name provided during the publishing of the
   *             product.</p>
   */
  UsageDimension: string | undefined;

  /**
   * @public
   * <p>Consumption value for the hour. Defaults to <code>0</code> if not specified.</p>
   */
  UsageQuantity?: number;

  /**
   * @public
   * <p>Checks whether you have the permissions required for the action, but does not make the
   *             request. If you have the permissions, the request returns <code>DryRunOperation</code>;
   *             otherwise, it returns <code>UnauthorizedException</code>. Defaults to <code>false</code>
   *             if not specified.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The set of <code>UsageAllocations</code> to submit.</p>
   *          <p>The sum of all <code>UsageAllocation</code> quantities must equal the
   *                 <code>UsageQuantity</code> of the <code>MeterUsage</code> request, and each
   *                 <code>UsageAllocation</code> must have a unique set of tags (include no
   *             tags).</p>
   */
  UsageAllocations?: UsageAllocation[];
}

/**
 * @public
 */
export interface MeterUsageResult {
  /**
   * @public
   * <p>Metering record id.</p>
   */
  MeteringRecordId?: string;
}

/**
 * @public
 * <p>Public Key version is invalid.</p>
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
 * @public
 * <p>
 *             <code>RegisterUsage</code> must be called in the same AWS Region the ECS task was
 *             launched in. This prevents a container from hardcoding a Region (e.g.
 *             withRegion(“us-east-1”) when calling <code>RegisterUsage</code>.</p>
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
 * @public
 * <p>AWS Marketplace does not support metering usage from the underlying platform.
 *             Currently, Amazon ECS, Amazon EKS, and AWS Fargate are supported.</p>
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
   * @public
   * <p>Product code is used to uniquely identify a product in AWS Marketplace. The product
   *             code should be the same as the one used during the publishing of a new product.</p>
   */
  ProductCode: string | undefined;

  /**
   * @public
   * <p>Public Key Version provided by AWS Marketplace</p>
   */
  PublicKeyVersion: number | undefined;

  /**
   * @public
   * <p>(Optional) To scope down the registration to a specific running software instance and
   *             guard against replay attacks.</p>
   */
  Nonce?: string;
}

/**
 * @public
 */
export interface RegisterUsageResult {
  /**
   * @public
   * <p>(Optional) Only included when public key version has expired</p>
   */
  PublicKeyRotationTimestamp?: Date;

  /**
   * @public
   * <p>JWT Token</p>
   */
  Signature?: string;
}

/**
 * @public
 * <p>The submitted registration token has expired. This can happen if the buyer's browser
 *             takes too long to redirect to your page, the buyer has resubmitted the registration
 *             token, or your application has held on to the registration token for too long. Your SaaS
 *             registration website should redeem this token as soon as it is submitted by the buyer's
 *             browser.</p>
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
 * @public
 * <p>Registration token is invalid.</p>
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
 * @public
 * <p>Contains input to the <code>ResolveCustomer</code> operation.</p>
 */
export interface ResolveCustomerRequest {
  /**
   * @public
   * <p>When a buyer visits your website during the registration process, the buyer submits a
   *             registration token through the browser. The registration token is resolved to obtain a
   *                 <code>CustomerIdentifier</code>
   *             along with the
   *                 <code>CustomerAWSAccountId</code>
   *             and
   *                 <code>ProductCode</code>.</p>
   */
  RegistrationToken: string | undefined;
}

/**
 * @public
 * <p>The result of the <code>ResolveCustomer</code> operation. Contains the
 *                 <code>CustomerIdentifier</code>
 *
 *             along with the <code>CustomerAWSAccountId</code> and
 *             <code>ProductCode</code>.</p>
 */
export interface ResolveCustomerResult {
  /**
   * @public
   * <p>The <code>CustomerIdentifier</code> is used to identify an individual customer in your
   *             application. Calls to <code>BatchMeterUsage</code> require
   *                 <code>CustomerIdentifiers</code> for each <code>UsageRecord</code>.</p>
   */
  CustomerIdentifier?: string;

  /**
   * @public
   * <p>The product code is returned to confirm that the buyer is registering for your
   *             product. Subsequent <code>BatchMeterUsage</code> calls should be made using this product
   *             code.</p>
   */
  ProductCode?: string;

  /**
   * @public
   * <p>The <code>CustomerAWSAccountId</code> provides the AWS account ID associated with the
   *                 <code>CustomerIdentifier</code> for the individual customer.</p>
   */
  CustomerAWSAccountId?: string;
}
