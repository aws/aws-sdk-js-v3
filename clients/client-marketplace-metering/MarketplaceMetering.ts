import { MarketplaceMeteringClient } from "./MarketplaceMeteringClient";
import {
  BatchMeterUsageCommand,
  BatchMeterUsageCommandInput,
  BatchMeterUsageCommandOutput,
} from "./commands/BatchMeterUsageCommand";
import { MeterUsageCommand, MeterUsageCommandInput, MeterUsageCommandOutput } from "./commands/MeterUsageCommand";
import {
  RegisterUsageCommand,
  RegisterUsageCommandInput,
  RegisterUsageCommandOutput,
} from "./commands/RegisterUsageCommand";
import {
  ResolveCustomerCommand,
  ResolveCustomerCommandInput,
  ResolveCustomerCommandOutput,
} from "./commands/ResolveCustomerCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Marketplace Metering Service</fullname>
 *         <p>This reference provides descriptions of the low-level AWS Marketplace Metering
 *             Service API.</p>
 *         <p>AWS Marketplace sellers can use this API to submit usage data for custom usage
 *             dimensions.</p>
 *         <p>
 *             <b>Submitting Metering Records</b>
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <i>MeterUsage</i>- Submits the metering record for a Marketplace
 *                     product. MeterUsage is called from an EC2 instance or a container running on EKS
 *                     or ECS.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <i>BatchMeterUsage</i>- Submits the metering record for a set of
 *                     customers. BatchMeterUsage is called from a software-as-a-service (SaaS)
 *                     application.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Accepting New Customers</b>
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <i>ResolveCustomer</i>- Called by a SaaS application during the
 *                     registration process. When a buyer visits your website during the registration
 *                     process, the buyer submits a Registration Token through the browser. The
 *                     Registration Token is resolved through this API to obtain a CustomerIdentifier
 *                     and Product Code.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Entitlement and Metering for Paid Container Products</b>
 *         </p>
 *         <ul>
 *             <li>
 *                 <p> Paid container software products sold through AWS Marketplace must
 *                     integrate with the AWS Marketplace Metering Service and call the RegisterUsage
 *                     operation for software entitlement and metering. Free and BYOL products for
 *                     Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you can do
 *                     so if you want to receive usage data in your seller reports. For more
 *                     information on using the RegisterUsage operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-Based Products</a>. </p>
 *             </li>
 *          </ul>
 *         <p>BatchMeterUsage API calls are captured by AWS CloudTrail. You can use Cloudtrail to
 *             verify that the SaaS metering records that you sent are accurate by searching for
 *             records with the eventName of BatchMeterUsage. You can also use CloudTrail to audit
 *             records over time. For more information, see the <i>
 *                <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">AWS CloudTrail User Guide</a>
 *             </i>.</p>
 */
export class MarketplaceMetering extends MarketplaceMeteringClient {
  /**
   * <p>BatchMeterUsage is called from a SaaS application listed on the AWS Marketplace to
   *             post metering records for a set of customers.</p>
   *         <p>For identical requests, the API is idempotent; requests can be retried with the
   *             same records or a subset of the input records.</p>
   *         <p>Every request to BatchMeterUsage is for one product. If you need to meter usage for
   *             multiple products, you must make multiple calls to BatchMeterUsage.</p>
   *         <p>BatchMeterUsage can process up to 25 UsageRecords at a time.</p>
   */
  public batchMeterUsage(
    args: BatchMeterUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchMeterUsageCommandOutput>;
  public batchMeterUsage(
    args: BatchMeterUsageCommandInput,
    cb: (err: any, data?: BatchMeterUsageCommandOutput) => void
  ): void;
  public batchMeterUsage(
    args: BatchMeterUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchMeterUsageCommandOutput) => void
  ): void;
  public batchMeterUsage(
    args: BatchMeterUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchMeterUsageCommandOutput) => void),
    cb?: (err: any, data?: BatchMeterUsageCommandOutput) => void
  ): Promise<BatchMeterUsageCommandOutput> | void {
    const command = new BatchMeterUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>API to emit metering records. For identical requests, the API is idempotent. It
   *             simply returns the metering record ID.</p>
   *         <p>MeterUsage is authenticated on the buyer's AWS account using credentials from the
   *             EC2 instance, ECS task, or EKS pod.</p>
   */
  public meterUsage(args: MeterUsageCommandInput, options?: __HttpHandlerOptions): Promise<MeterUsageCommandOutput>;
  public meterUsage(args: MeterUsageCommandInput, cb: (err: any, data?: MeterUsageCommandOutput) => void): void;
  public meterUsage(
    args: MeterUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MeterUsageCommandOutput) => void
  ): void;
  public meterUsage(
    args: MeterUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MeterUsageCommandOutput) => void),
    cb?: (err: any, data?: MeterUsageCommandOutput) => void
  ): Promise<MeterUsageCommandOutput> | void {
    const command = new MeterUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Paid container software products sold through AWS Marketplace must integrate with
   *             the AWS Marketplace Metering Service and call the RegisterUsage operation for software
   *             entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't
   *             required to call RegisterUsage, but you may choose to do so if you would like to receive
   *             usage data in your seller reports. The sections below explain the behavior of
   *             RegisterUsage. RegisterUsage performs two primary functions: metering and
   *             entitlement.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                     <i>Entitlement</i>: RegisterUsage allows you to verify that the
   *                     customer running your paid software is subscribed to your product on AWS
   *                     Marketplace, enabling you to guard against unauthorized use. Your container
   *                     image that integrates with RegisterUsage is only required to guard against
   *                     unauthorized use at container startup, as such a
   *                     CustomerNotSubscribedException/PlatformNotSupportedException will only be thrown
   *                     on the initial call to RegisterUsage. Subsequent calls from the same Amazon ECS
   *                     task instance (e.g. task-id) or Amazon EKS pod will not throw a
   *                     CustomerNotSubscribedException, even if the customer unsubscribes while the
   *                     Amazon ECS task or Amazon EKS pod is still running.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Metering</i>: RegisterUsage meters software use per ECS task,
   *                     per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum
   *                     of 1 minute of usage applies to tasks that are short lived. For example, if a
   *                     customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured
   *                     as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10
   *                     cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for
   *                     software use is automatically handled by the AWS Marketplace Metering Control
   *                     Plane -- your software is not required to perform any metering specific actions,
   *                     other than call RegisterUsage once for metering of software use to commence. The
   *                     AWS Marketplace Metering Control Plane will also continue to bill customers for
   *                     running ECS tasks and Amazon EKS pods, regardless of the customers subscription
   *                     state, removing the need for your software to perform entitlement checks at
   *                     runtime.</p>
   *             </li>
   *          </ul>
   */
  public registerUsage(
    args: RegisterUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterUsageCommandOutput>;
  public registerUsage(
    args: RegisterUsageCommandInput,
    cb: (err: any, data?: RegisterUsageCommandOutput) => void
  ): void;
  public registerUsage(
    args: RegisterUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterUsageCommandOutput) => void
  ): void;
  public registerUsage(
    args: RegisterUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterUsageCommandOutput) => void),
    cb?: (err: any, data?: RegisterUsageCommandOutput) => void
  ): Promise<RegisterUsageCommandOutput> | void {
    const command = new RegisterUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>ResolveCustomer is called by a SaaS application during the registration process.
   *             When a buyer visits your website during the registration process, the buyer submits a
   *             registration token through their browser. The registration token is resolved through
   *             this API to obtain a CustomerIdentifier and product code.</p>
   */
  public resolveCustomer(
    args: ResolveCustomerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResolveCustomerCommandOutput>;
  public resolveCustomer(
    args: ResolveCustomerCommandInput,
    cb: (err: any, data?: ResolveCustomerCommandOutput) => void
  ): void;
  public resolveCustomer(
    args: ResolveCustomerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveCustomerCommandOutput) => void
  ): void;
  public resolveCustomer(
    args: ResolveCustomerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResolveCustomerCommandOutput) => void),
    cb?: (err: any, data?: ResolveCustomerCommandOutput) => void
  ): Promise<ResolveCustomerCommandOutput> | void {
    const command = new ResolveCustomerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
