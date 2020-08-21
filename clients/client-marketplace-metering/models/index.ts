import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>A BatchMeterUsageRequest contains UsageRecords, which indicate quantities of usage
 *             within your application.</p>
 */
export interface BatchMeterUsageRequest {
  __type?: "BatchMeterUsageRequest";
  /**
   * <p>Product code is used to uniquely identify a product in AWS Marketplace. The product
   *             code should be the same as the one used during the publishing of a new
   *             product.</p>
   */
  ProductCode: string | undefined;

  /**
   * <p>The set of UsageRecords to submit. BatchMeterUsage accepts up to 25 UsageRecords at
   *             a time.</p>
   */
  UsageRecords: UsageRecord[] | undefined;
}

export namespace BatchMeterUsageRequest {
  export const filterSensitiveLog = (obj: BatchMeterUsageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchMeterUsageRequest => __isa(o, "BatchMeterUsageRequest");
}

/**
 * <p>Contains the UsageRecords processed by BatchMeterUsage and any records that have
 *             failed due to transient error.</p>
 */
export interface BatchMeterUsageResult {
  __type?: "BatchMeterUsageResult";
  /**
   * <p>Contains all UsageRecords processed by BatchMeterUsage. These records were either
   *             honored by AWS Marketplace Metering Service or were invalid.</p>
   */
  Results?: UsageRecordResult[];

  /**
   * <p>Contains all UsageRecords that were not processed by BatchMeterUsage. This is a
   *             list of UsageRecords. You can retry the failed request by making another BatchMeterUsage
   *             call with this list as input in the BatchMeterUsageRequest.</p>
   */
  UnprocessedRecords?: UsageRecord[];
}

export namespace BatchMeterUsageResult {
  export const filterSensitiveLog = (obj: BatchMeterUsageResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchMeterUsageResult => __isa(o, "BatchMeterUsageResult");
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

export namespace CustomerNotEntitledException {
  export const filterSensitiveLog = (obj: CustomerNotEntitledException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CustomerNotEntitledException => __isa(o, "CustomerNotEntitledException");
}

/**
 * <p>The API is disabled in the Region.</p>
 */
export interface DisabledApiException extends __SmithyException, $MetadataBearer {
  name: "DisabledApiException";
  $fault: "client";
  message?: string;
}

export namespace DisabledApiException {
  export const filterSensitiveLog = (obj: DisabledApiException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisabledApiException => __isa(o, "DisabledApiException");
}

/**
 * <p>A metering record has already been emitted by the same EC2 instance, ECS task, or
 *             EKS pod for the given {usageDimension, timestamp} with a different
 *             usageQuantity.</p>
 */
export interface DuplicateRequestException extends __SmithyException, $MetadataBearer {
  name: "DuplicateRequestException";
  $fault: "client";
  message?: string;
}

export namespace DuplicateRequestException {
  export const filterSensitiveLog = (obj: DuplicateRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DuplicateRequestException => __isa(o, "DuplicateRequestException");
}

/**
 * <p>The submitted registration token has expired. This can happen if the buyer's
 *             browser takes too long to redirect to your page, the buyer has resubmitted the
 *             registration token, or your application has held on to the registration token for too
 *             long. Your SaaS registration website should redeem this token as soon as it is submitted
 *             by the buyer's browser.</p>
 */
export interface ExpiredTokenException extends __SmithyException, $MetadataBearer {
  name: "ExpiredTokenException";
  $fault: "client";
  message?: string;
}

export namespace ExpiredTokenException {
  export const filterSensitiveLog = (obj: ExpiredTokenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExpiredTokenException => __isa(o, "ExpiredTokenException");
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

export namespace InternalServiceErrorException {
  export const filterSensitiveLog = (obj: InternalServiceErrorException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServiceErrorException => __isa(o, "InternalServiceErrorException");
}

/**
 * <p>You have metered usage for a CustomerIdentifier that does not exist.</p>
 */
export interface InvalidCustomerIdentifierException extends __SmithyException, $MetadataBearer {
  name: "InvalidCustomerIdentifierException";
  $fault: "client";
  message?: string;
}

export namespace InvalidCustomerIdentifierException {
  export const filterSensitiveLog = (obj: InvalidCustomerIdentifierException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidCustomerIdentifierException =>
    __isa(o, "InvalidCustomerIdentifierException");
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

export namespace InvalidEndpointRegionException {
  export const filterSensitiveLog = (obj: InvalidEndpointRegionException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidEndpointRegionException => __isa(o, "InvalidEndpointRegionException");
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

export namespace InvalidProductCodeException {
  export const filterSensitiveLog = (obj: InvalidProductCodeException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidProductCodeException => __isa(o, "InvalidProductCodeException");
}

/**
 * <p>Public Key version is invalid.</p>
 */
export interface InvalidPublicKeyVersionException extends __SmithyException, $MetadataBearer {
  name: "InvalidPublicKeyVersionException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPublicKeyVersionException {
  export const filterSensitiveLog = (obj: InvalidPublicKeyVersionException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidPublicKeyVersionException => __isa(o, "InvalidPublicKeyVersionException");
}

/**
 * <p>RegisterUsage must be called in the same AWS Region the ECS task was launched in.
 *             This prevents a container from hardcoding a Region (e.g. withRegion(“us-east-1”) when
 *             calling RegisterUsage.</p>
 */
export interface InvalidRegionException extends __SmithyException, $MetadataBearer {
  name: "InvalidRegionException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRegionException {
  export const filterSensitiveLog = (obj: InvalidRegionException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidRegionException => __isa(o, "InvalidRegionException");
}

/**
 * <p>Registration token is invalid.</p>
 */
export interface InvalidTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidTokenException {
  export const filterSensitiveLog = (obj: InvalidTokenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidTokenException => __isa(o, "InvalidTokenException");
}

/**
 * <p>The usage dimension does not match one of the UsageDimensions associated with
 *             products.</p>
 */
export interface InvalidUsageDimensionException extends __SmithyException, $MetadataBearer {
  name: "InvalidUsageDimensionException";
  $fault: "client";
  message?: string;
}

export namespace InvalidUsageDimensionException {
  export const filterSensitiveLog = (obj: InvalidUsageDimensionException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidUsageDimensionException => __isa(o, "InvalidUsageDimensionException");
}

export interface MeterUsageRequest {
  __type?: "MeterUsageRequest";
  /**
   * <p>Timestamp, in UTC, for which the usage is being reported. Your application can
   *             meter usage for up to one hour in the past. Make sure the timestamp value is not before
   *             the start of the software usage.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>Checks whether you have the permissions required for the action, but does not make
   *             the request. If you have the permissions, the request returns DryRunOperation;
   *             otherwise, it returns UnauthorizedException. Defaults to <code>false</code> if not
   *             specified.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Product code is used to uniquely identify a product in AWS Marketplace. The product
   *             code should be the same as the one used during the publishing of a new
   *             product.</p>
   */
  ProductCode: string | undefined;

  /**
   * <p>Consumption value for the hour. Defaults to <code>0</code> if not
   *             specified.</p>
   */
  UsageQuantity?: number;

  /**
   * <p>It will be one of the fcp dimension name provided during the publishing of the
   *             product.</p>
   */
  UsageDimension: string | undefined;
}

export namespace MeterUsageRequest {
  export const filterSensitiveLog = (obj: MeterUsageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MeterUsageRequest => __isa(o, "MeterUsageRequest");
}

export interface MeterUsageResult {
  __type?: "MeterUsageResult";
  /**
   * <p>Metering record id.</p>
   */
  MeteringRecordId?: string;
}

export namespace MeterUsageResult {
  export const filterSensitiveLog = (obj: MeterUsageResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MeterUsageResult => __isa(o, "MeterUsageResult");
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

export namespace PlatformNotSupportedException {
  export const filterSensitiveLog = (obj: PlatformNotSupportedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PlatformNotSupportedException => __isa(o, "PlatformNotSupportedException");
}

export interface RegisterUsageRequest {
  __type?: "RegisterUsageRequest";
  /**
   * <p>Product code is used to uniquely identify a product in AWS Marketplace. The product
   *             code should be the same as the one used during the publishing of a new
   *             product.</p>
   */
  ProductCode: string | undefined;

  /**
   * <p>(Optional) To scope down the registration to a specific running software instance
   *             and guard against replay attacks.</p>
   */
  Nonce?: string;

  /**
   * <p>Public Key Version provided by AWS Marketplace</p>
   */
  PublicKeyVersion: number | undefined;
}

export namespace RegisterUsageRequest {
  export const filterSensitiveLog = (obj: RegisterUsageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RegisterUsageRequest => __isa(o, "RegisterUsageRequest");
}

export interface RegisterUsageResult {
  __type?: "RegisterUsageResult";
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
  export const filterSensitiveLog = (obj: RegisterUsageResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RegisterUsageResult => __isa(o, "RegisterUsageResult");
}

/**
 * <p>Contains input to the ResolveCustomer operation.</p>
 */
export interface ResolveCustomerRequest {
  __type?: "ResolveCustomerRequest";
  /**
   * <p>When a buyer visits your website during the registration process, the buyer submits
   *             a registration token through the browser. The registration token is resolved to obtain a
   *             CustomerIdentifier and product code.</p>
   */
  RegistrationToken: string | undefined;
}

export namespace ResolveCustomerRequest {
  export const filterSensitiveLog = (obj: ResolveCustomerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResolveCustomerRequest => __isa(o, "ResolveCustomerRequest");
}

/**
 * <p>The result of the ResolveCustomer operation. Contains the CustomerIdentifier and
 *             product code.</p>
 */
export interface ResolveCustomerResult {
  __type?: "ResolveCustomerResult";
  /**
   * <p>The product code is returned to confirm that the buyer is registering for your
   *             product. Subsequent BatchMeterUsage calls should be made using this product
   *             code.</p>
   */
  ProductCode?: string;

  /**
   * <p>The CustomerIdentifier is used to identify an individual customer in your
   *             application. Calls to BatchMeterUsage require CustomerIdentifiers for each
   *             UsageRecord.</p>
   */
  CustomerIdentifier?: string;
}

export namespace ResolveCustomerResult {
  export const filterSensitiveLog = (obj: ResolveCustomerResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResolveCustomerResult => __isa(o, "ResolveCustomerResult");
}

/**
 * <p>The calls to the API are throttled.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThrottlingException => __isa(o, "ThrottlingException");
}

/**
 * <p>The timestamp value passed in the meterUsage() is out of allowed range.</p>
 */
export interface TimestampOutOfBoundsException extends __SmithyException, $MetadataBearer {
  name: "TimestampOutOfBoundsException";
  $fault: "client";
  message?: string;
}

export namespace TimestampOutOfBoundsException {
  export const filterSensitiveLog = (obj: TimestampOutOfBoundsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TimestampOutOfBoundsException => __isa(o, "TimestampOutOfBoundsException");
}

/**
 * <p>A UsageRecord indicates a quantity of usage for a given product, customer,
 *             dimension and time.</p>
 *         <p>Multiple requests with the same UsageRecords as input will be deduplicated to
 *             prevent double charges.</p>
 */
export interface UsageRecord {
  __type?: "UsageRecord";
  /**
   * <p>Timestamp, in UTC, for which the usage is being reported.</p>
   *         <p>Your application can meter usage for up to one hour in the past. Make sure the
   *             timestamp value is not before the start of the software usage.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>The quantity of usage consumed by the customer for the given dimension and time.
   *             Defaults to <code>0</code> if not specified.</p>
   */
  Quantity?: number;

  /**
   * <p>During the process of registering a product on AWS Marketplace, up to eight
   *             dimensions are specified. These represent different units of value in your
   *             application.</p>
   */
  Dimension: string | undefined;

  /**
   * <p>The CustomerIdentifier is obtained through the ResolveCustomer operation and
   *             represents an individual buyer in your application.</p>
   */
  CustomerIdentifier: string | undefined;
}

export namespace UsageRecord {
  export const filterSensitiveLog = (obj: UsageRecord): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UsageRecord => __isa(o, "UsageRecord");
}

/**
 * <p>A UsageRecordResult indicates the status of a given UsageRecord processed by
 *             BatchMeterUsage.</p>
 */
export interface UsageRecordResult {
  __type?: "UsageRecordResult";
  /**
   * <p>The MeteringRecordId is a unique identifier for this metering event.</p>
   */
  MeteringRecordId?: string;

  /**
   * <p>The UsageRecordResult Status indicates the status of an individual UsageRecord
   *             processed by BatchMeterUsage.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <i>Success</i>- The UsageRecord was accepted and honored by
   *                     BatchMeterUsage.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>CustomerNotSubscribed</i>- The CustomerIdentifier specified is
   *                     not subscribed to your product. The UsageRecord was not honored. Future
   *                     UsageRecords for this customer will fail until the customer subscribes to your
   *                     product.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>DuplicateRecord</i>- Indicates that the UsageRecord was invalid
   *                     and not honored. A previously metered UsageRecord had the same customer,
   *                     dimension, and time, but a different quantity.</p>
   *             </li>
   *          </ul>
   */
  Status?: UsageRecordResultStatus | string;

  /**
   * <p>The UsageRecord that was part of the BatchMeterUsage request.</p>
   */
  UsageRecord?: UsageRecord;
}

export namespace UsageRecordResult {
  export const filterSensitiveLog = (obj: UsageRecordResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UsageRecordResult => __isa(o, "UsageRecordResult");
}

export enum UsageRecordResultStatus {
  CUSTOMER_NOT_SUBSCRIBED = "CustomerNotSubscribed",
  DUPLICATE_RECORD = "DuplicateRecord",
  SUCCESS = "Success",
}
