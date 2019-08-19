import { MarketplaceMeteringClient } from "./MarketplaceMeteringClient";
import { BatchMeterUsageInput } from "./types/BatchMeterUsageInput";
import { BatchMeterUsageOutput } from "./types/BatchMeterUsageOutput";
import { CustomerNotEntitledException } from "./types/CustomerNotEntitledException";
import { DisabledApiException } from "./types/DisabledApiException";
import { DuplicateRequestException } from "./types/DuplicateRequestException";
import { ExpiredTokenException } from "./types/ExpiredTokenException";
import { InternalServiceErrorException } from "./types/InternalServiceErrorException";
import { InvalidCustomerIdentifierException } from "./types/InvalidCustomerIdentifierException";
import { InvalidEndpointRegionException } from "./types/InvalidEndpointRegionException";
import { InvalidProductCodeException } from "./types/InvalidProductCodeException";
import { InvalidPublicKeyVersionException } from "./types/InvalidPublicKeyVersionException";
import { InvalidRegionException } from "./types/InvalidRegionException";
import { InvalidTokenException } from "./types/InvalidTokenException";
import { InvalidUsageDimensionException } from "./types/InvalidUsageDimensionException";
import { MeterUsageInput } from "./types/MeterUsageInput";
import { MeterUsageOutput } from "./types/MeterUsageOutput";
import { PlatformNotSupportedException } from "./types/PlatformNotSupportedException";
import { RegisterUsageInput } from "./types/RegisterUsageInput";
import { RegisterUsageOutput } from "./types/RegisterUsageOutput";
import { ResolveCustomerInput } from "./types/ResolveCustomerInput";
import { ResolveCustomerOutput } from "./types/ResolveCustomerOutput";
import { ThrottlingException } from "./types/ThrottlingException";
import { TimestampOutOfBoundsException } from "./types/TimestampOutOfBoundsException";
import { BatchMeterUsageCommand } from "./commands/BatchMeterUsageCommand";
import { MeterUsageCommand } from "./commands/MeterUsageCommand";
import { RegisterUsageCommand } from "./commands/RegisterUsageCommand";
import { ResolveCustomerCommand } from "./commands/ResolveCustomerCommand";

export class MarketplaceMetering extends MarketplaceMeteringClient {
  /**
   * <p>BatchMeterUsage is called from a SaaS application listed on the AWS Marketplace to post metering records for a set of customers.</p> <p>For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records.</p> <p>Every request to BatchMeterUsage is for one product. If you need to meter usage for multiple products, you must make multiple calls to BatchMeterUsage.</p> <p>BatchMeterUsage can process up to 25 UsageRecords at a time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceErrorException} <p>An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.</p>
   *   - {InvalidProductCodeException} <p>The product code passed does not match the product code used for publishing the product.</p>
   *   - {InvalidUsageDimensionException} <p>The usage dimension does not match one of the UsageDimensions associated with products.</p>
   *   - {InvalidCustomerIdentifierException} <p>You have metered usage for a CustomerIdentifier that does not exist.</p>
   *   - {TimestampOutOfBoundsException} <p>The timestamp value passed in the meterUsage() is out of allowed range.</p>
   *   - {ThrottlingException} <p>The calls to the API are throttled.</p>
   *   - {DisabledApiException} <p>The API is disabled in the Region.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchMeterUsage(
    args: BatchMeterUsageInput
  ): Promise<BatchMeterUsageOutput>;
  public batchMeterUsage(
    args: BatchMeterUsageInput,
    cb: (err: any, data?: BatchMeterUsageOutput) => void
  ): void;
  public batchMeterUsage(
    args: BatchMeterUsageInput,
    cb?: (err: any, data?: BatchMeterUsageOutput) => void
  ): Promise<BatchMeterUsageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchMeterUsageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID.</p> <p>MeterUsage is authenticated on the buyer's AWS account, generally when running from an EC2 instance on the AWS Marketplace.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceErrorException} <p>An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.</p>
   *   - {InvalidProductCodeException} <p>The product code passed does not match the product code used for publishing the product.</p>
   *   - {InvalidUsageDimensionException} <p>The usage dimension does not match one of the UsageDimensions associated with products.</p>
   *   - {InvalidEndpointRegionException} <p>The endpoint being called is in a Region different from your EC2 instance. The Region of the Metering Service endpoint and the Region of the EC2 instance must match.</p>
   *   - {TimestampOutOfBoundsException} <p>The timestamp value passed in the meterUsage() is out of allowed range.</p>
   *   - {DuplicateRequestException} <p>A metering record has already been emitted by the same EC2 instance for the given {usageDimension, timestamp} with a different usageQuantity.</p>
   *   - {ThrottlingException} <p>The calls to the API are throttled.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public meterUsage(args: MeterUsageInput): Promise<MeterUsageOutput>;
  public meterUsage(
    args: MeterUsageInput,
    cb: (err: any, data?: MeterUsageOutput) => void
  ): void;
  public meterUsage(
    args: MeterUsageInput,
    cb?: (err: any, data?: MeterUsageOutput) => void
  ): Promise<MeterUsageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new MeterUsageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the RegisterUsage operation for software entitlement and metering. Calling RegisterUsage from containers running outside of ECS is not currently supported. Free and BYOL products for ECS aren't required to call RegisterUsage, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of RegisterUsage. RegisterUsage performs two primary functions: metering and entitlement.</p> <ul> <li> <p> <i>Entitlement</i>: RegisterUsage allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with RegisterUsage is only required to guard against unauthorized use at container startup, as such a CustomerNotSubscribedException/PlatformNotSupportedException will only be thrown on the initial call to RegisterUsage. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) will not throw a CustomerNotSubscribedException, even if the customer unsubscribes while the Amazon ECS task is still running.</p> </li> <li> <p> <i>Metering</i>: RegisterUsage meters software use per ECS task, per hour, with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node ECS cluster and creates an ECS service configured as a Daemon Set, then ECS will launch a task on all 10 cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for software use is automatically handled by the AWS Marketplace Metering Control Plane -- your software is not required to perform any metering specific actions, other than call RegisterUsage once for metering of software use to commence. The AWS Marketplace Metering Control Plane will also continue to bill customers for running ECS tasks, regardless of the customers subscription state, removing the need for your software to perform entitlement checks at runtime.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidProductCodeException} <p>The product code passed does not match the product code used for publishing the product.</p>
   *   - {InvalidRegionException} <p>RegisterUsage must be called in the same AWS Region the ECS task was launched in. This prevents a container from hardcoding a Region (e.g. withRegion(“us-east-1”) when calling RegisterUsage.</p>
   *   - {InvalidPublicKeyVersionException} <p>Public Key version is invalid.</p>
   *   - {PlatformNotSupportedException} <p>AWS Marketplace does not support metering usage from the underlying platform. Currently, only Amazon ECS is supported.</p>
   *   - {CustomerNotEntitledException} <p>Exception thrown when the customer does not have a valid subscription for the product.</p>
   *   - {ThrottlingException} <p>The calls to the API are throttled.</p>
   *   - {InternalServiceErrorException} <p>An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.</p>
   *   - {DisabledApiException} <p>The API is disabled in the Region.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerUsage(args: RegisterUsageInput): Promise<RegisterUsageOutput>;
  public registerUsage(
    args: RegisterUsageInput,
    cb: (err: any, data?: RegisterUsageOutput) => void
  ): void;
  public registerUsage(
    args: RegisterUsageInput,
    cb?: (err: any, data?: RegisterUsageOutput) => void
  ): Promise<RegisterUsageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterUsageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>ResolveCustomer is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a CustomerIdentifier and product code.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidTokenException} <p>Registration token is invalid.</p>
   *   - {ExpiredTokenException} <p>The submitted registration token has expired. This can happen if the buyer's browser takes too long to redirect to your page, the buyer has resubmitted the registration token, or your application has held on to the registration token for too long. Your SaaS registration website should redeem this token as soon as it is submitted by the buyer's browser.</p>
   *   - {ThrottlingException} <p>The calls to the API are throttled.</p>
   *   - {InternalServiceErrorException} <p>An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.</p>
   *   - {DisabledApiException} <p>The API is disabled in the Region.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resolveCustomer(
    args: ResolveCustomerInput
  ): Promise<ResolveCustomerOutput>;
  public resolveCustomer(
    args: ResolveCustomerInput,
    cb: (err: any, data?: ResolveCustomerOutput) => void
  ): void;
  public resolveCustomer(
    args: ResolveCustomerInput,
    cb?: (err: any, data?: ResolveCustomerOutput) => void
  ): Promise<ResolveCustomerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResolveCustomerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
