// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateConfigurationSetCommand,
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "./commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "./commands/CreateConfigurationSetEventDestinationCommand";
import {
  CreateDedicatedIpPoolCommand,
  CreateDedicatedIpPoolCommandInput,
  CreateDedicatedIpPoolCommandOutput,
} from "./commands/CreateDedicatedIpPoolCommand";
import {
  CreateDeliverabilityTestReportCommand,
  CreateDeliverabilityTestReportCommandInput,
  CreateDeliverabilityTestReportCommandOutput,
} from "./commands/CreateDeliverabilityTestReportCommand";
import {
  CreateEmailIdentityCommand,
  CreateEmailIdentityCommandInput,
  CreateEmailIdentityCommandOutput,
} from "./commands/CreateEmailIdentityCommand";
import {
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "./commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "./commands/DeleteConfigurationSetEventDestinationCommand";
import {
  DeleteDedicatedIpPoolCommand,
  DeleteDedicatedIpPoolCommandInput,
  DeleteDedicatedIpPoolCommandOutput,
} from "./commands/DeleteDedicatedIpPoolCommand";
import {
  DeleteEmailIdentityCommand,
  DeleteEmailIdentityCommandInput,
  DeleteEmailIdentityCommandOutput,
} from "./commands/DeleteEmailIdentityCommand";
import { GetAccountCommand, GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import {
  GetBlacklistReportsCommand,
  GetBlacklistReportsCommandInput,
  GetBlacklistReportsCommandOutput,
} from "./commands/GetBlacklistReportsCommand";
import {
  GetConfigurationSetCommand,
  GetConfigurationSetCommandInput,
  GetConfigurationSetCommandOutput,
} from "./commands/GetConfigurationSetCommand";
import {
  GetConfigurationSetEventDestinationsCommand,
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
} from "./commands/GetConfigurationSetEventDestinationsCommand";
import {
  GetDedicatedIpCommand,
  GetDedicatedIpCommandInput,
  GetDedicatedIpCommandOutput,
} from "./commands/GetDedicatedIpCommand";
import {
  GetDedicatedIpsCommand,
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput,
} from "./commands/GetDedicatedIpsCommand";
import {
  GetDeliverabilityDashboardOptionsCommand,
  GetDeliverabilityDashboardOptionsCommandInput,
  GetDeliverabilityDashboardOptionsCommandOutput,
} from "./commands/GetDeliverabilityDashboardOptionsCommand";
import {
  GetDeliverabilityTestReportCommand,
  GetDeliverabilityTestReportCommandInput,
  GetDeliverabilityTestReportCommandOutput,
} from "./commands/GetDeliverabilityTestReportCommand";
import {
  GetDomainDeliverabilityCampaignCommand,
  GetDomainDeliverabilityCampaignCommandInput,
  GetDomainDeliverabilityCampaignCommandOutput,
} from "./commands/GetDomainDeliverabilityCampaignCommand";
import {
  GetDomainStatisticsReportCommand,
  GetDomainStatisticsReportCommandInput,
  GetDomainStatisticsReportCommandOutput,
} from "./commands/GetDomainStatisticsReportCommand";
import {
  GetEmailIdentityCommand,
  GetEmailIdentityCommandInput,
  GetEmailIdentityCommandOutput,
} from "./commands/GetEmailIdentityCommand";
import {
  ListConfigurationSetsCommand,
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "./commands/ListConfigurationSetsCommand";
import {
  ListDedicatedIpPoolsCommand,
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
} from "./commands/ListDedicatedIpPoolsCommand";
import {
  ListDeliverabilityTestReportsCommand,
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
} from "./commands/ListDeliverabilityTestReportsCommand";
import {
  ListDomainDeliverabilityCampaignsCommand,
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
} from "./commands/ListDomainDeliverabilityCampaignsCommand";
import {
  ListEmailIdentitiesCommand,
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
} from "./commands/ListEmailIdentitiesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutAccountDedicatedIpWarmupAttributesCommand,
  PutAccountDedicatedIpWarmupAttributesCommandInput,
  PutAccountDedicatedIpWarmupAttributesCommandOutput,
} from "./commands/PutAccountDedicatedIpWarmupAttributesCommand";
import {
  PutAccountSendingAttributesCommand,
  PutAccountSendingAttributesCommandInput,
  PutAccountSendingAttributesCommandOutput,
} from "./commands/PutAccountSendingAttributesCommand";
import {
  PutConfigurationSetDeliveryOptionsCommand,
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
} from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import {
  PutConfigurationSetReputationOptionsCommand,
  PutConfigurationSetReputationOptionsCommandInput,
  PutConfigurationSetReputationOptionsCommandOutput,
} from "./commands/PutConfigurationSetReputationOptionsCommand";
import {
  PutConfigurationSetSendingOptionsCommand,
  PutConfigurationSetSendingOptionsCommandInput,
  PutConfigurationSetSendingOptionsCommandOutput,
} from "./commands/PutConfigurationSetSendingOptionsCommand";
import {
  PutConfigurationSetTrackingOptionsCommand,
  PutConfigurationSetTrackingOptionsCommandInput,
  PutConfigurationSetTrackingOptionsCommandOutput,
} from "./commands/PutConfigurationSetTrackingOptionsCommand";
import {
  PutDedicatedIpInPoolCommand,
  PutDedicatedIpInPoolCommandInput,
  PutDedicatedIpInPoolCommandOutput,
} from "./commands/PutDedicatedIpInPoolCommand";
import {
  PutDedicatedIpWarmupAttributesCommand,
  PutDedicatedIpWarmupAttributesCommandInput,
  PutDedicatedIpWarmupAttributesCommandOutput,
} from "./commands/PutDedicatedIpWarmupAttributesCommand";
import {
  PutDeliverabilityDashboardOptionCommand,
  PutDeliverabilityDashboardOptionCommandInput,
  PutDeliverabilityDashboardOptionCommandOutput,
} from "./commands/PutDeliverabilityDashboardOptionCommand";
import {
  PutEmailIdentityDkimAttributesCommand,
  PutEmailIdentityDkimAttributesCommandInput,
  PutEmailIdentityDkimAttributesCommandOutput,
} from "./commands/PutEmailIdentityDkimAttributesCommand";
import {
  PutEmailIdentityFeedbackAttributesCommand,
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput,
} from "./commands/PutEmailIdentityFeedbackAttributesCommand";
import {
  PutEmailIdentityMailFromAttributesCommand,
  PutEmailIdentityMailFromAttributesCommandInput,
  PutEmailIdentityMailFromAttributesCommandOutput,
} from "./commands/PutEmailIdentityMailFromAttributesCommand";
import { SendEmailCommand, SendEmailCommandInput, SendEmailCommandOutput } from "./commands/SendEmailCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "./commands/UpdateConfigurationSetEventDestinationCommand";
import { PinpointEmailClient } from "./PinpointEmailClient";

/**
 * <fullname>Amazon Pinpoint Email Service</fullname>
 *         <p>Welcome to the <i>Amazon Pinpoint Email API Reference</i>. This guide provides
 *             information about the Amazon Pinpoint Email API (version 1.0), including supported
 *             operations, data types, parameters, and schemas.</p>
 *         <p>
 *             <a href="https://aws.amazon.com/pinpoint">Amazon Pinpoint</a> is an AWS service that you
 *             can use to engage with your customers across multiple messaging channels. You can use
 *             Amazon Pinpoint to send email, SMS text messages, voice messages, and push notifications. The
 *             Amazon Pinpoint Email API provides programmatic access to options that are unique to the
 *             email channel and supplement the options provided by the Amazon Pinpoint API.</p>
 *         <p>If you're new to Amazon Pinpoint, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon
 *                 Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer
 *                 Guide</i> provides tutorials, code samples, and procedures that demonstrate
 *             how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into
 *             mobile apps and other types of applications. The guide also provides information about
 *             key topics such as Amazon Pinpoint integration with other AWS services and the limits that apply
 *             to using the service.</p>
 *         <p>The Amazon Pinpoint Email API is available in several AWS Regions and it provides an endpoint
 *             for each of these Regions. For a list of all the Regions and endpoints where the API is
 *             currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">AWS Service Endpoints</a> in
 *             the <i>Amazon Web Services General Reference</i>. To learn more about AWS Regions, see
 *                 <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS
 *                 Regions</a> in the <i>Amazon Web Services General Reference</i>.</p>
 *         <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones
 *             are physically isolated from each other, but are united by private, low-latency,
 *             high-throughput, and highly redundant network connections. These Availability Zones
 *             enable us to provide very high levels of availability and redundancy, while also
 *             minimizing latency. To learn more about the number of Availability Zones that are
 *             available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>
 */
export class PinpointEmail extends PinpointEmailClient {
  /**
   * <p>Create a configuration set. <i>Configuration sets</i> are groups of
   *             rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration
   *             set to an email by including a reference to the configuration set in the headers of the
   *             email. When you apply a configuration set to an email, all of the rules in that
   *             configuration set are applied to the email. </p>
   */
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetCommandOutput>;
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConfigurationSetCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): Promise<CreateConfigurationSetCommandOutput> | void {
    const command = new CreateConfigurationSetCommand(args);
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
   * <p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message
   *             sends, deliveries, opens, clicks, bounces, and complaints. <i>Event
   *                 destinations</i> are places that you can send information about these events
   *             to. For example, you can send event data to Amazon SNS to receive notifications when you
   *             receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term
   *             storage.</p>
   *         <p>A single configuration set can include more than one event destination.</p>
   */
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput>;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput> | void {
    const command = new CreateConfigurationSetEventDestinationCommand(args);
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
   * <p>Create a new pool of dedicated IP addresses. A pool can include one or more dedicated
   *             IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with
   *             a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint
   *             sends it using only the IP addresses in the associated pool.</p>
   */
  public createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDedicatedIpPoolCommandOutput>;
  public createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    cb: (err: any, data?: CreateDedicatedIpPoolCommandOutput) => void
  ): void;
  public createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDedicatedIpPoolCommandOutput) => void
  ): void;
  public createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDedicatedIpPoolCommandOutput) => void),
    cb?: (err: any, data?: CreateDedicatedIpPoolCommandOutput) => void
  ): Promise<CreateDedicatedIpPoolCommandOutput> | void {
    const command = new CreateDedicatedIpPoolCommand(args);
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
   * <p>Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled
   *             by various email providers around the world. When you perform a predictive inbox placement test, you provide a
   *             sample message that contains the content that you plan to send to your customers. Amazon Pinpoint
   *             then sends that message to special email addresses spread across several major email
   *             providers. After about 24 hours, the test is complete, and you can use the
   *                 <code>GetDeliverabilityTestReport</code> operation to view the results of the
   *             test.</p>
   */
  public createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeliverabilityTestReportCommandOutput>;
  public createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    cb: (err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void
  ): void;
  public createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void
  ): void;
  public createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void),
    cb?: (err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void
  ): Promise<CreateDeliverabilityTestReportCommandOutput> | void {
    const command = new CreateDeliverabilityTestReportCommand(args);
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
   * <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email
   *             address or domain that you use when you send email. Before you can use an identity to
   *             send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you
   *             demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission
   *             to send email from the address.</p>
   *         <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email
   *             address is verified as soon as you follow the link in the verification email.
   *
   *         </p>
   *         <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can
   *             convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your
   *             domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS
   *             configuration for your domain. It usually takes around 72 hours to complete the domain
   *             verification process.</p>
   */
  public createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEmailIdentityCommandOutput>;
  public createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    cb: (err: any, data?: CreateEmailIdentityCommandOutput) => void
  ): void;
  public createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEmailIdentityCommandOutput) => void
  ): void;
  public createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEmailIdentityCommandOutput) => void),
    cb?: (err: any, data?: CreateEmailIdentityCommandOutput) => void
  ): Promise<CreateEmailIdentityCommandOutput> | void {
    const command = new CreateEmailIdentityCommand(args);
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
   * <p>Delete an existing configuration set.</p>
   *         <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can
   *             apply to the emails you send. You apply a configuration set to an email by including a
   *             reference to the configuration set in the headers of the email. When you apply a
   *             configuration set to an email, all of the rules in that configuration set are applied to
   *             the email.</p>
   */
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetCommandOutput>;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfigurationSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): Promise<DeleteConfigurationSetCommandOutput> | void {
    const command = new DeleteConfigurationSetCommand(args);
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
   * <p>Delete an event destination.</p>
   *         <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens,
   *             clicks, bounces, and complaints. <i>Event destinations</i> are places that
   *             you can send information about these events to. For example, you can send event data to
   *             Amazon SNS to receive notifications when you receive bounces or complaints, or you can use
   *             Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
   */
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput>;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput> | void {
    const command = new DeleteConfigurationSetEventDestinationCommand(args);
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
   * <p>Delete a dedicated IP pool.</p>
   */
  public deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDedicatedIpPoolCommandOutput>;
  public deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    cb: (err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void
  ): void;
  public deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void
  ): void;
  public deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void),
    cb?: (err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void
  ): Promise<DeleteDedicatedIpPoolCommandOutput> | void {
    const command = new DeleteDedicatedIpPoolCommand(args);
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
   * <p>Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity
   *             can be either an email address or a domain name.</p>
   */
  public deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailIdentityCommandOutput>;
  public deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    cb: (err: any, data?: DeleteEmailIdentityCommandOutput) => void
  ): void;
  public deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailIdentityCommandOutput) => void
  ): void;
  public deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEmailIdentityCommandOutput) => void),
    cb?: (err: any, data?: DeleteEmailIdentityCommandOutput) => void
  ): Promise<DeleteEmailIdentityCommandOutput> | void {
    const command = new DeleteEmailIdentityCommand(args);
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
   * <p>Obtain information about the email-sending status and capabilities of your Amazon Pinpoint
   *             account in the current AWS Region.</p>
   */
  public getAccount(args: GetAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountCommandOutput>;
  public getAccount(args: GetAccountCommandInput, cb: (err: any, data?: GetAccountCommandOutput) => void): void;
  public getAccount(
    args: GetAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;
  public getAccount(
    args: GetAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountCommandOutput) => void),
    cb?: (err: any, data?: GetAccountCommandOutput) => void
  ): Promise<GetAccountCommandOutput> | void {
    const command = new GetAccountCommand(args);
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
   * <p>Retrieve a list of the blacklists that your dedicated IP addresses appear on.</p>
   */
  public getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlacklistReportsCommandOutput>;
  public getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    cb: (err: any, data?: GetBlacklistReportsCommandOutput) => void
  ): void;
  public getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlacklistReportsCommandOutput) => void
  ): void;
  public getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBlacklistReportsCommandOutput) => void),
    cb?: (err: any, data?: GetBlacklistReportsCommandOutput) => void
  ): Promise<GetBlacklistReportsCommandOutput> | void {
    const command = new GetBlacklistReportsCommand(args);
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
   * <p>Get information about an existing configuration set, including the dedicated IP pool
   *             that it's associated with, whether or not it's enabled for sending email, and
   *             more.</p>
   *         <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can
   *             apply to the emails you send. You apply a configuration set to an email by including a
   *             reference to the configuration set in the headers of the email. When you apply a
   *             configuration set to an email, all of the rules in that configuration set are applied to
   *             the email.</p>
   */
  public getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationSetCommandOutput>;
  public getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    cb: (err: any, data?: GetConfigurationSetCommandOutput) => void
  ): void;
  public getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationSetCommandOutput) => void
  ): void;
  public getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfigurationSetCommandOutput) => void),
    cb?: (err: any, data?: GetConfigurationSetCommandOutput) => void
  ): Promise<GetConfigurationSetCommandOutput> | void {
    const command = new GetConfigurationSetCommand(args);
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
   * <p>Retrieve a list of event destinations that are associated with a configuration
   *             set.</p>
   *         <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens,
   *             clicks, bounces, and complaints. <i>Event destinations</i> are places that
   *             you can send information about these events to. For example, you can send event data to
   *             Amazon SNS to receive notifications when you receive bounces or complaints, or you can use
   *             Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
   */
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput>;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void),
    cb?: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput> | void {
    const command = new GetConfigurationSetEventDestinationsCommand(args);
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
   * <p>Get information about a dedicated IP address, including the name of the dedicated IP
   *             pool that it's associated with, as well information about the automatic warm-up process
   *             for the address.</p>
   */
  public getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDedicatedIpCommandOutput>;
  public getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    cb: (err: any, data?: GetDedicatedIpCommandOutput) => void
  ): void;
  public getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDedicatedIpCommandOutput) => void
  ): void;
  public getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDedicatedIpCommandOutput) => void),
    cb?: (err: any, data?: GetDedicatedIpCommandOutput) => void
  ): Promise<GetDedicatedIpCommandOutput> | void {
    const command = new GetDedicatedIpCommand(args);
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
   * <p>List the dedicated IP addresses that are associated with your Amazon Pinpoint
   *             account.</p>
   */
  public getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDedicatedIpsCommandOutput>;
  public getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    cb: (err: any, data?: GetDedicatedIpsCommandOutput) => void
  ): void;
  public getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDedicatedIpsCommandOutput) => void
  ): void;
  public getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDedicatedIpsCommandOutput) => void),
    cb?: (err: any, data?: GetDedicatedIpsCommandOutput) => void
  ): Promise<GetDedicatedIpsCommandOutput> | void {
    const command = new GetDedicatedIpsCommand(args);
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
   * <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account.
   *             When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and
   *             other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the
   *             ability to perform predictive inbox placement tests.</p>
   *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
   *             to any other fees that you accrue by using Amazon Pinpoint. For more information about the
   *             features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
   */
  public getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliverabilityDashboardOptionsCommandOutput>;
  public getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    cb: (err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void
  ): void;
  public getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void
  ): void;
  public getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void),
    cb?: (err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void
  ): Promise<GetDeliverabilityDashboardOptionsCommandOutput> | void {
    const command = new GetDeliverabilityDashboardOptionsCommand(args);
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
   * <p>Retrieve the results of a predictive inbox placement test.</p>
   */
  public getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliverabilityTestReportCommandOutput>;
  public getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    cb: (err: any, data?: GetDeliverabilityTestReportCommandOutput) => void
  ): void;
  public getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliverabilityTestReportCommandOutput) => void
  ): void;
  public getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeliverabilityTestReportCommandOutput) => void),
    cb?: (err: any, data?: GetDeliverabilityTestReportCommandOutput) => void
  ): Promise<GetDeliverabilityTestReportCommandOutput> | void {
    const command = new GetDeliverabilityTestReportCommand(args);
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
   * <p>Retrieve all the deliverability data for a specific campaign. This data is available
   *             for a campaign only if the campaign sent email by using a domain that the
   *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
   *             operation).</p>
   */
  public getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainDeliverabilityCampaignCommandOutput>;
  public getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    cb: (err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void
  ): void;
  public getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void
  ): void;
  public getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void),
    cb?: (err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void
  ): Promise<GetDomainDeliverabilityCampaignCommandOutput> | void {
    const command = new GetDomainDeliverabilityCampaignCommand(args);
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
   * <p>Retrieve inbox placement and engagement rates for the domains that you use to send
   *             email.</p>
   */
  public getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainStatisticsReportCommandOutput>;
  public getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    cb: (err: any, data?: GetDomainStatisticsReportCommandOutput) => void
  ): void;
  public getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainStatisticsReportCommandOutput) => void
  ): void;
  public getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDomainStatisticsReportCommandOutput) => void),
    cb?: (err: any, data?: GetDomainStatisticsReportCommandOutput) => void
  ): Promise<GetDomainStatisticsReportCommandOutput> | void {
    const command = new GetDomainStatisticsReportCommand(args);
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
   * <p>Provides information about a specific identity associated with your Amazon Pinpoint account,
   *             including the identity's verification status, its DKIM authentication status, and its
   *             custom Mail-From settings.</p>
   */
  public getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEmailIdentityCommandOutput>;
  public getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    cb: (err: any, data?: GetEmailIdentityCommandOutput) => void
  ): void;
  public getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEmailIdentityCommandOutput) => void
  ): void;
  public getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEmailIdentityCommandOutput) => void),
    cb?: (err: any, data?: GetEmailIdentityCommandOutput) => void
  ): Promise<GetEmailIdentityCommandOutput> | void {
    const command = new GetEmailIdentityCommand(args);
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
   * <p>List all of the configuration sets associated with your Amazon Pinpoint account in the current
   *             region.</p>
   *         <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can
   *             apply to the emails you send. You apply a configuration set to an email by including a
   *             reference to the configuration set in the headers of the email. When you apply a
   *             configuration set to an email, all of the rules in that configuration set are applied to
   *             the email.</p>
   */
  public listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationSetsCommandOutput>;
  public listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;
  public listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;
  public listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConfigurationSetsCommandOutput) => void),
    cb?: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): Promise<ListConfigurationSetsCommandOutput> | void {
    const command = new ListConfigurationSetsCommand(args);
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
   * <p>List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current
   *             AWS Region.</p>
   */
  public listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDedicatedIpPoolsCommandOutput>;
  public listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    cb: (err: any, data?: ListDedicatedIpPoolsCommandOutput) => void
  ): void;
  public listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDedicatedIpPoolsCommandOutput) => void
  ): void;
  public listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDedicatedIpPoolsCommandOutput) => void),
    cb?: (err: any, data?: ListDedicatedIpPoolsCommandOutput) => void
  ): Promise<ListDedicatedIpPoolsCommandOutput> | void {
    const command = new ListDedicatedIpPoolsCommand(args);
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
   * <p>Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For
   *             predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code>
   *             operation to view the results.</p>
   */
  public listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeliverabilityTestReportsCommandOutput>;
  public listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    cb: (err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void
  ): void;
  public listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void
  ): void;
  public listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void),
    cb?: (err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void
  ): Promise<ListDeliverabilityTestReportsCommandOutput> | void {
    const command = new ListDeliverabilityTestReportsCommand(args);
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
   * <p>Retrieve deliverability data for all the campaigns that used a specific domain to send
   *             email during a specified time range. This data is available for a domain only if you
   *             enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation)
   *             for the domain.</p>
   */
  public listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainDeliverabilityCampaignsCommandOutput>;
  public listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    cb: (err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void
  ): void;
  public listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void
  ): void;
  public listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void),
    cb?: (err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void
  ): Promise<ListDomainDeliverabilityCampaignsCommandOutput> | void {
    const command = new ListDomainDeliverabilityCampaignsCommand(args);
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
   * <p>Returns a list of all of the email identities that are associated with your Amazon Pinpoint
   *             account. An identity can be either an email address or a domain. This operation returns
   *             identities that are verified as well as those that aren't.</p>
   */
  public listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEmailIdentitiesCommandOutput>;
  public listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    cb: (err: any, data?: ListEmailIdentitiesCommandOutput) => void
  ): void;
  public listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEmailIdentitiesCommandOutput) => void
  ): void;
  public listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEmailIdentitiesCommandOutput) => void),
    cb?: (err: any, data?: ListEmailIdentitiesCommandOutput) => void
  ): Promise<ListEmailIdentitiesCommandOutput> | void {
    const command = new ListEmailIdentitiesCommand(args);
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
   * <p>Retrieve a list of the tags (keys and values) that are associated with a specified
   *             resource. A <i>tag</i> is a label that you optionally define and associate
   *             with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag
   *                 key</i> and an optional associated <i>tag value</i>. A tag key
   *             is a general label that acts as a category for more specific tag values. A tag value
   *             acts as a descriptor within a tag key.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Enable or disable the automatic warm-up feature for dedicated IP addresses.</p>
   */
  public putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput>;
  public putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    cb: (err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;
  public putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;
  public putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void
  ): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> | void {
    const command = new PutAccountDedicatedIpWarmupAttributesCommand(args);
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
   * <p>Enable or disable the ability of your account to send email.</p>
   */
  public putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountSendingAttributesCommandOutput>;
  public putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    cb: (err: any, data?: PutAccountSendingAttributesCommandOutput) => void
  ): void;
  public putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountSendingAttributesCommandOutput) => void
  ): void;
  public putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAccountSendingAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutAccountSendingAttributesCommandOutput) => void
  ): Promise<PutAccountSendingAttributesCommandOutput> | void {
    const command = new PutAccountSendingAttributesCommand(args);
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
   * <p>Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools
   *             to create groups of dedicated IP addresses for sending specific types of email.</p>
   */
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetDeliveryOptionsCommandOutput>;
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void
  ): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> | void {
    const command = new PutConfigurationSetDeliveryOptionsCommand(args);
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
   * <p>Enable or disable collection of reputation metrics for emails that you send using a
   *             particular configuration set in a specific AWS Region.</p>
   */
  public putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetReputationOptionsCommandOutput>;
  public putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void
  ): Promise<PutConfigurationSetReputationOptionsCommandOutput> | void {
    const command = new PutConfigurationSetReputationOptionsCommand(args);
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
   * <p>Enable or disable email sending for messages that use a particular configuration set
   *             in a specific AWS Region.</p>
   */
  public putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetSendingOptionsCommandOutput>;
  public putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void
  ): Promise<PutConfigurationSetSendingOptionsCommandOutput> | void {
    const command = new PutConfigurationSetSendingOptionsCommand(args);
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
   * <p>Specify a custom domain to use for open and click tracking elements in email that you
   *             send using Amazon Pinpoint.</p>
   */
  public putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetTrackingOptionsCommandOutput>;
  public putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void
  ): Promise<PutConfigurationSetTrackingOptionsCommandOutput> | void {
    const command = new PutConfigurationSetTrackingOptionsCommand(args);
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
   * <p>Move a dedicated IP address to an existing dedicated IP pool.</p>
   *         <note>
   *             <p>The dedicated IP address that you specify must already exist, and must be
   *                 associated with your Amazon Pinpoint account.
   *
   *             </p>
   *             <p>The dedicated IP pool you specify must already exist. You can create a new pool by
   *                 using the <code>CreateDedicatedIpPool</code> operation.</p>
   *
   *         </note>
   */
  public putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDedicatedIpInPoolCommandOutput>;
  public putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    cb: (err: any, data?: PutDedicatedIpInPoolCommandOutput) => void
  ): void;
  public putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDedicatedIpInPoolCommandOutput) => void
  ): void;
  public putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDedicatedIpInPoolCommandOutput) => void),
    cb?: (err: any, data?: PutDedicatedIpInPoolCommandOutput) => void
  ): Promise<PutDedicatedIpInPoolCommandOutput> | void {
    const command = new PutDedicatedIpInPoolCommand(args);
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
   * <p></p>
   */
  public putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDedicatedIpWarmupAttributesCommandOutput>;
  public putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    cb: (err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;
  public putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;
  public putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void
  ): Promise<PutDedicatedIpWarmupAttributesCommandOutput> | void {
    const command = new PutDedicatedIpWarmupAttributesCommand(args);
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
   * <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the
   *             Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for
   *             the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform
   *             predictive inbox placement tests.</p>
   *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
   *             to any other fees that you accrue by using Amazon Pinpoint. For more information about the
   *             features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
   */
  public putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeliverabilityDashboardOptionCommandOutput>;
  public putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    cb: (err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void
  ): void;
  public putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void
  ): void;
  public putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void),
    cb?: (err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void
  ): Promise<PutDeliverabilityDashboardOptionCommandOutput> | void {
    const command = new PutDeliverabilityDashboardOptionCommand(args);
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
   * <p>Used to enable or disable DKIM authentication for an email identity.</p>
   */
  public putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityDkimAttributesCommandOutput>;
  public putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void
  ): Promise<PutEmailIdentityDkimAttributesCommandOutput> | void {
    const command = new PutEmailIdentityDkimAttributesCommand(args);
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
   * <p>Used to enable or disable feedback forwarding for an identity. This setting determines
   *             what happens when an identity is used to send an email that results in a bounce or
   *             complaint event.</p>
   *         <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce
   *             or complaint events occur. Amazon Pinpoint sends this notification to the address that you
   *             specified in the Return-Path header of the original email.</p>
   *         <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other
   *             mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of
   *             tracking bounces and complaints. If you haven't set up another mechanism for receiving
   *             bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events
   *             occur (even if this setting is disabled).</p>
   */
  public putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityFeedbackAttributesCommandOutput>;
  public putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void
  ): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> | void {
    const command = new PutEmailIdentityFeedbackAttributesCommand(args);
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
   * <p>Used to enable or disable the custom Mail-From domain configuration for an email
   *             identity.</p>
   */
  public putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityMailFromAttributesCommandOutput>;
  public putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void
  ): Promise<PutEmailIdentityMailFromAttributesCommandOutput> | void {
    const command = new PutEmailIdentityMailFromAttributesCommand(args);
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
   * <p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of
   *             messages:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>Simple</b> – A standard email message. When
   *                     you create this type of message, you specify the sender, the recipient, and the
   *                     message body, and Amazon Pinpoint assembles the message for you.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Raw</b> –  A raw, MIME-formatted email
   *                     message. When you send this type of email, you have to specify all of the
   *                     message headers, as well as the message body. You can use this message type to
   *                     send messages that contain attachments. The message that you specify has to be a
   *                     valid MIME message.</p>
   *             </li>
   *          </ul>
   */
  public sendEmail(args: SendEmailCommandInput, options?: __HttpHandlerOptions): Promise<SendEmailCommandOutput>;
  public sendEmail(args: SendEmailCommandInput, cb: (err: any, data?: SendEmailCommandOutput) => void): void;
  public sendEmail(
    args: SendEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendEmailCommandOutput) => void
  ): void;
  public sendEmail(
    args: SendEmailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendEmailCommandOutput) => void),
    cb?: (err: any, data?: SendEmailCommandOutput) => void
  ): Promise<SendEmailCommandOutput> | void {
    const command = new SendEmailCommand(args);
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
   * <p>Add one or more tags (keys and values) to a specified resource. A
   *                 <i>tag</i> is a label that you optionally define and associate with a
   *             resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways,
   *             such as by purpose, owner, environment, or other criteria. A resource can have as many
   *             as 50 tags.</p>
   *         <p>Each tag consists of a required <i>tag key</i> and an
   *                 associated <i>tag value</i>, both of which you define. A tag key is a
   *             general label that acts as a category for more specific tag values. A tag value acts as
   *             a descriptor within a tag key.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Remove one or more tags (keys and values) from a specified resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Update the configuration of an event destination for a configuration set.</p>
   *         <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens,
   *             clicks, bounces, and complaints. <i>Event destinations</i> are places that
   *             you can send information about these events to. For example, you can send event data to
   *             Amazon SNS to receive notifications when you receive bounces or complaints, or you can use
   *             Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
   */
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationSetEventDestinationCommandOutput>;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): Promise<UpdateConfigurationSetEventDestinationCommandOutput> | void {
    const command = new UpdateConfigurationSetEventDestinationCommand(args);
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
