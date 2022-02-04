import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Metadata assigned to an allocation. Each tag is made up of a <code>key</code> and a
 *                 <code>value</code>.</p>
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that makes up a <code>tag</code>. A <code>key</code> is a
   *             label that acts like a category for the specific tag values.</p>
   */
  Key: string | undefined;

  /**
   * <p>One part of a key-value pair that makes up a <code>tag</code>. A <code>value</code>
   *             acts as a descriptor within a tag category (key). The value can be empty or null.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Usage allocations allow you to split usage into buckets by tags.</p>
 *         <p>Each <code>UsageAllocation</code> indicates the usage quantity for a specific set of
 *             tags.</p>
 */
export interface UsageAllocation {
  /**
   * <p>The total quantity allocated to this bucket of usage.</p>
   */
  AllocatedUsageQuantity: number | undefined;

  /**
   * <p>The set of tags that define the bucket of usage. For the bucket of items with no tags,
   *             this parameter can be left out.</p>
   */
  Tags?: Tag[];
}

export namespace UsageAllocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageAllocation): any => ({
    ...obj,
  });
}

/**
 * <p>A <code>UsageRecord</code> indicates a quantity of usage for a given product,
 *             customer, dimension and time.</p>
 *         <p>Multiple requests with the same <code>UsageRecords</code> as input will be
 *             de-duplicated to prevent double charges.</p>
 */
export interface UsageRecord {
  /**
   * <p>Timestamp, in UTC, for which the usage is being reported.</p>
   *         <p>Your application can meter usage for up to one hour in the past. Make sure the
   *                 <code>timestamp</code> value is not before the start of the software usage.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>The <code>CustomerIdentifier</code> is obtained through the
   *                 <code>ResolveCustomer</code> operation and represents an individual buyer in your
   *             application.</p>
   */
  CustomerIdentifier: string | undefined;

  /**
   * <p>During the process of registering a product on AWS Marketplace, dimensions are
   *             specified. These represent different units of value in your application.</p>
   */
  Dimension: string | undefined;

  /**
   * <p>The quantity of usage consumed by the customer for the given dimension and time.
   *             Defaults to <code>0</code> if not specified.</p>
   */
  Quantity?: number;

  /**
   * <p>The set of <code>UsageAllocations</code> to submit. The sum of all
   *                 <code>UsageAllocation</code> quantities must equal the Quantity of the
   *                 <code>UsageRecord</code>.</p>
   */
  UsageAllocations?: UsageAllocation[];
}

export namespace UsageRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageRecord): any => ({
    ...obj,
  });
}

/**
 * <p>A <code>BatchMeterUsageRequest</code> contains <code>UsageRecords</code>, which
 *             indicate quantities of usage within your application.</p>
 */
export interface BatchMeterUsageRequest {
  /**
   * <p>The set of <code>UsageRecords</code> to submit. <code>BatchMeterUsage</code> accepts
   *             up to 25 <code>UsageRecords</code> at a time.</p>
   */
  UsageRecords: UsageRecord[] | undefined;

  /**
   * <p>Product code is used to uniquely identify a product in AWS Marketplace. The product
   *             code should be the same as the one used during the publishing of a new product.</p>
   */
  ProductCode: string | undefined;
}

export namespace BatchMeterUsageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchMeterUsageRequest): any => ({
    ...obj,
  });
}

export enum UsageRecordResultStatus {
  CUSTOMER_NOT_SUBSCRIBED = "CustomerNotSubscribed",
  DUPLICATE_RECORD = "DuplicateRecord",
  SUCCESS = "Success",
}

/**
 * <p>A <code>UsageRecordResult</code> indicates the status of a given
 *                 <code>UsageRecord</code> processed by <code>BatchMeterUsage</code>.</p>
 */
export interface UsageRecordResult {
  /**
   * <p>The <code>UsageRecord</code> that was part of the <code>BatchMeterUsage</code>
   *             request.</p>
   */
  UsageRecord?: UsageRecord;

  /**
   * <p>The <code>MeteringRecordId</code> is a unique identifier for this metering
   *             event.</p>
   */
  MeteringRecordId?: string;

  /**
   * <p>The <code>UsageRecordResult</code>
   *             <code>Status</code> indicates the status of an individual <code>UsageRecord</code>
   *             processed by <code>BatchMeterUsage</code>.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <i>Success</i>- The <code>UsageRecord</code> was accepted and
   *                     honored by <code>BatchMeterUsage</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>CustomerNotSubscribed</i>- The <code>CustomerIdentifier</code>
   *                     specified is not able to use your product. The <code>UsageRecord</code> was not
   *                     honored. There are three causes for this result:</p>
   *                 <ul>
   *                   <li>
   *                         <p>The customer identifier is invalid.</p>
   *                     </li>
   *                   <li>
   *                         <p>The customer identifier provided in the metering record does not have
   *                             an active agreement or subscription with this product. Future
   *                                 <code>UsageRecords</code> for this customer will fail until the
   *                             customer subscribes to your product.</p>
   *                     </li>
   *                   <li>
   *                         <p>The customer's AWS account was suspended.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>DuplicateRecord</i>- Indicates that the
   *                         <code>UsageRecord</code> was invalid and not honored. A previously metered
   *                         <code>UsageRecord</code> had the same customer, dimension, and time, but a
   *                     different quantity.</p>
   *             </li>
   *          </ul>
   */
  Status?: UsageRecordResultStatus | string;
}

export namespace UsageRecordResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageRecordResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the <code>UsageRecords</code> processed by <code>BatchMeterUsage</code> and
 *             any records that have failed due to transient error.</p>
 */
export interface BatchMeterUsageResult {
  /**
   * <p>Contains all <code>UsageRecords</code> processed by <code>BatchMeterUsage</code>.
   *             These records were either honored by AWS Marketplace Metering Service or were invalid.
   *             Invalid records should be fixed before being resubmitted.</p>
   */
  Results?: UsageRecordResult[];

  /**
   * <p>Contains all <code>UsageRecords</code> that were not processed by
   *                 <code>BatchMeterUsage</code>. This is a list of <code>UsageRecords</code>. You can
   *             retry the failed request by making another <code>BatchMeterUsage</code> call with this
   *             list as input in the <code>BatchMeterUsageRequest</code>.</p>
   */
  UnprocessedRecords?: UsageRecord[];
}

export namespace BatchMeterUsageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchMeterUsageResult): any => ({
    ...obj,
  });
}

/**
 * <p>The API is disabled in the Region.</p>
 */
export interface DisabledApiException extends __SmithyException, $MetadataBearer {
  name: "DisabledApiException";
  $fault: "client";
  message?: string;
}

/**
 * <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *             message with details on the AWS forums.</p>
 */
export interface InternalServiceErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceErrorException";
  $fault: "server";
  message?: string;
}

/**
 * <p>You have metered usage for a <code>CustomerIdentifier</code> that does not
 *             exist.</p>
 */
export interface InvalidCustomerIdentifierException extends __SmithyException, $MetadataBearer {
  name: "InvalidCustomerIdentifierException";
  $fault: "client";
  message?: string;
}

/**
 * <p>The product code passed does not match the product code used for publishing the
 *             product.</p>
 */
export interface InvalidProductCodeException extends __SmithyException, $MetadataBearer {
  name: "InvalidProductCodeException";
  $fault: "client";
  message?: string;
}

/**
 * <p>The tag is invalid, or the number of tags is greater than 5.</p>
 */
export interface InvalidTagException extends __SmithyException, $MetadataBearer {
  name: "InvalidTagException";
  $fault: "client";
  message?: string;
}

/**
 * <p>The usage allocation objects are invalid, or the number of allocations is greater than
 *             500 for a single usage record.</p>
 */
export interface InvalidUsageAllocationsException extends __SmithyException, $MetadataBearer {
  name: "InvalidUsageAllocationsException";
  $fault: "client";
  message?: string;
}

/**
 * <p>The usage dimension does not match one of the <code>UsageDimensions</code> associated
 *             with products.</p>
 */
export interface InvalidUsageDimensionException extends __SmithyException, $MetadataBearer {
  name: "InvalidUsageDimensionException";
  $fault: "client";
  message?: string;
}

/**
 * <p>The calls to the API are throttled.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

/**
 * <p>The <code>timestamp</code> value passed in the <code>UsageRecord</code> is out of
 *             allowed range.</p>
 *         <p>For <code>BatchMeterUsage</code>, if any of the records are outside of the allowed
 *             range, the entire batch is not processed. You must remove invalid records and try
 *             again.</p>
 */
export interface TimestampOutOfBoundsException extends __SmithyException, $MetadataBearer {
  name: "TimestampOutOfBoundsException";
  $fault: "client";
  message?: string;
}

/**
 * <p>Exception thrown when the customer does not have a valid subscription for the
 *             product.</p>
 */
export interface CustomerNotEntitledException extends __SmithyException, $MetadataBearer {
  name: "CustomerNotEntitledException";
  $fault: "client";
  message?: string;
}

/**
 * <p>A metering record has already been emitted by the same EC2 instance, ECS task, or EKS
 *             pod for the given {<code>usageDimension</code>, <code>timestamp</code>} with a different
 *                 <code>usageQuantity</code>.</p>
 */
export interface DuplicateRequestException extends __SmithyException, $MetadataBearer {
  name: "DuplicateRequestException";
  $fault: "client";
  message?: string;
}

/**
 * <p>The endpoint being called is in a AWS Region different from your EC2 instance, ECS
 *             task, or EKS pod. The Region of the Metering Service endpoint and the AWS Region of the
 *             resource must match.</p>
 */
export interface InvalidEndpointRegionException extends __SmithyException, $MetadataBearer {
  name: "InvalidEndpointRegionException";
  $fault: "client";
  message?: string;
}

export interface MeterUsageRequest {
  /**
   * <p>Product code is used to uniquely identify a product in AWS Marketplace. The product
   *             code should be the same as the one used during the publishing of a new product.</p>
   */
  ProductCode: string | undefined;

  /**
   * <p>Timestamp, in UTC, for which the usage is being reported. Your application can meter
   *             usage for up to one hour in the past. Make sure the <code>timestamp</code> value is not
   *             before the start of the software usage.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>It will be one of the fcp dimension name provided during the publishing of the
   *             product.</p>
   */
  UsageDimension: string | undefined;

  /**
   * <p>Consumption value for the hour. Defaults to <code>0</code> if not specified.</p>
   */
  UsageQuantity?: number;

  /**
   * <p>Checks whether you have the permissions required for the action, but does not make the
   *             request. If you have the permissions, the request returns <code>DryRunOperation</code>;
   *             otherwise, it returns <code>UnauthorizedException</code>. Defaults to <code>false</code>
   *             if not specified.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The set of <code>UsageAllocations</code> to submit.</p>
   *         <p>The sum of all <code>UsageAllocation</code> quantities must equal the
   *                 <code>UsageQuantity</code> of the <code>MeterUsage</code> request, and each
   *                 <code>UsageAllocation</code> must have a unique set of tags (include no
   *             tags).</p>
   */
  UsageAllocations?: UsageAllocation[];
}

export namespace MeterUsageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MeterUsageRequest): any => ({
    ...obj,
  });
}

export interface MeterUsageResult {
  /**
   * <p>Metering record id.</p>
   */
  MeteringRecordId?: string;
}

export namespace MeterUsageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MeterUsageResult): any => ({
    ...obj,
  });
}

/**
 * <p>Public Key version is invalid.</p>
 */
export interface InvalidPublicKeyVersionException extends __SmithyException, $MetadataBearer {
  name: "InvalidPublicKeyVersionException";
  $fault: "client";
  message?: string;
}

/**
 * <p>
 *             <code>RegisterUsage</code> must be called in the same AWS Region the ECS task was
 *             launched in. This prevents a container from hardcoding a Region (e.g.
 *             withRegion(“us-east-1”) when calling <code>RegisterUsage</code>.</p>
 */
export interface InvalidRegionException extends __SmithyException, $MetadataBearer {
  name: "InvalidRegionException";
  $fault: "client";
  message?: string;
}

/**
 * <p>AWS Marketplace does not support metering usage from the underlying platform.
 *             Currently, Amazon ECS, Amazon EKS, and AWS Fargate are supported.</p>
 */
export interface PlatformNotSupportedException extends __SmithyException, $MetadataBearer {
  name: "PlatformNotSupportedException";
  $fault: "client";
  message?: string;
}

export interface RegisterUsageRequest {
  /**
   * <p>Product code is used to uniquely identify a product in AWS Marketplace. The product
   *             code should be the same as the one used during the publishing of a new product.</p>
   */
  ProductCode: string | undefined;

  /**
   * <p>Public Key Version provided by AWS Marketplace</p>
   */
  PublicKeyVersion: number | undefined;

  /**
   * <p>(Optional) To scope down the registration to a specific running software instance and
   *             guard against replay attacks.</p>
   */
  Nonce?: string;
}

export namespace RegisterUsageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterUsageRequest): any => ({
    ...obj,
  });
}

export interface RegisterUsageResult {
  /**
   * <p>(Optional) Only included when public key version has expired</p>
   */
  PublicKeyRotationTimestamp?: Date;

  /**
   * <p>JWT Token</p>
   */
  Signature?: string;
}

export namespace RegisterUsageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterUsageResult): any => ({
    ...obj,
  });
}

/**
 * <p>The submitted registration token has expired. This can happen if the buyer's browser
 *             takes too long to redirect to your page, the buyer has resubmitted the registration
 *             token, or your application has held on to the registration token for too long. Your SaaS
 *             registration website should redeem this token as soon as it is submitted by the buyer's
 *             browser.</p>
 */
export interface ExpiredTokenException extends __SmithyException, $MetadataBearer {
  name: "ExpiredTokenException";
  $fault: "client";
  message?: string;
}

/**
 * <p>Registration token is invalid.</p>
 */
export interface InvalidTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidTokenException";
  $fault: "client";
  message?: string;
}

/**
 * <p>Contains input to the <code>ResolveCustomer</code> operation.</p>
 */
export interface ResolveCustomerRequest {
  /**
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

export namespace ResolveCustomerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResolveCustomerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of the <code>ResolveCustomer</code> operation. Contains the
 *                 <code>CustomerIdentifier</code>
 *
 *             along with the <code>CustomerAWSAccountId</code> and
 *             <code>ProductCode</code>.</p>
 */
export interface ResolveCustomerResult {
  /**
   * <p>The <code>CustomerIdentifier</code> is used to identify an individual customer in your
   *             application. Calls to <code>BatchMeterUsage</code> require
   *                 <code>CustomerIdentifiers</code> for each <code>UsageRecord</code>.</p>
   */
  CustomerIdentifier?: string;

  /**
   * <p>The product code is returned to confirm that the buyer is registering for your
   *             product. Subsequent <code>BatchMeterUsage</code> calls should be made using this product
   *             code.</p>
   */
  ProductCode?: string;

  /**
   * <p>The <code>CustomerAWSAccountId</code> provides the AWS account ID associated with the
   *                 <code>CustomerIdentifier</code> for the individual customer.</p>
   */
  CustomerAWSAccountId?: string;
}

export namespace ResolveCustomerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResolveCustomerResult): any => ({
    ...obj,
  });
}
