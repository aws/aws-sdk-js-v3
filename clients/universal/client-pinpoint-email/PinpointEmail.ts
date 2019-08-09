import { PinpointEmailClient } from "./PinpointEmailClient";
import { AccountSuspendedException } from "./types/AccountSuspendedException";
import { AlreadyExistsException } from "./types/AlreadyExistsException";
import { BadRequestException } from "./types/BadRequestException";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { CreateConfigurationSetEventDestinationInput } from "./types/CreateConfigurationSetEventDestinationInput";
import { CreateConfigurationSetEventDestinationOutput } from "./types/CreateConfigurationSetEventDestinationOutput";
import { CreateConfigurationSetInput } from "./types/CreateConfigurationSetInput";
import { CreateConfigurationSetOutput } from "./types/CreateConfigurationSetOutput";
import { CreateDedicatedIpPoolInput } from "./types/CreateDedicatedIpPoolInput";
import { CreateDedicatedIpPoolOutput } from "./types/CreateDedicatedIpPoolOutput";
import { CreateDeliverabilityTestReportInput } from "./types/CreateDeliverabilityTestReportInput";
import { CreateDeliverabilityTestReportOutput } from "./types/CreateDeliverabilityTestReportOutput";
import { CreateEmailIdentityInput } from "./types/CreateEmailIdentityInput";
import { CreateEmailIdentityOutput } from "./types/CreateEmailIdentityOutput";
import { DeleteConfigurationSetEventDestinationInput } from "./types/DeleteConfigurationSetEventDestinationInput";
import { DeleteConfigurationSetEventDestinationOutput } from "./types/DeleteConfigurationSetEventDestinationOutput";
import { DeleteConfigurationSetInput } from "./types/DeleteConfigurationSetInput";
import { DeleteConfigurationSetOutput } from "./types/DeleteConfigurationSetOutput";
import { DeleteDedicatedIpPoolInput } from "./types/DeleteDedicatedIpPoolInput";
import { DeleteDedicatedIpPoolOutput } from "./types/DeleteDedicatedIpPoolOutput";
import { DeleteEmailIdentityInput } from "./types/DeleteEmailIdentityInput";
import { DeleteEmailIdentityOutput } from "./types/DeleteEmailIdentityOutput";
import { GetAccountInput } from "./types/GetAccountInput";
import { GetAccountOutput } from "./types/GetAccountOutput";
import { GetBlacklistReportsInput } from "./types/GetBlacklistReportsInput";
import { GetBlacklistReportsOutput } from "./types/GetBlacklistReportsOutput";
import { GetConfigurationSetEventDestinationsInput } from "./types/GetConfigurationSetEventDestinationsInput";
import { GetConfigurationSetEventDestinationsOutput } from "./types/GetConfigurationSetEventDestinationsOutput";
import { GetConfigurationSetInput } from "./types/GetConfigurationSetInput";
import { GetConfigurationSetOutput } from "./types/GetConfigurationSetOutput";
import { GetDedicatedIpInput } from "./types/GetDedicatedIpInput";
import { GetDedicatedIpOutput } from "./types/GetDedicatedIpOutput";
import { GetDedicatedIpsInput } from "./types/GetDedicatedIpsInput";
import { GetDedicatedIpsOutput } from "./types/GetDedicatedIpsOutput";
import { GetDeliverabilityDashboardOptionsInput } from "./types/GetDeliverabilityDashboardOptionsInput";
import { GetDeliverabilityDashboardOptionsOutput } from "./types/GetDeliverabilityDashboardOptionsOutput";
import { GetDeliverabilityTestReportInput } from "./types/GetDeliverabilityTestReportInput";
import { GetDeliverabilityTestReportOutput } from "./types/GetDeliverabilityTestReportOutput";
import { GetDomainDeliverabilityCampaignInput } from "./types/GetDomainDeliverabilityCampaignInput";
import { GetDomainDeliverabilityCampaignOutput } from "./types/GetDomainDeliverabilityCampaignOutput";
import { GetDomainStatisticsReportInput } from "./types/GetDomainStatisticsReportInput";
import { GetDomainStatisticsReportOutput } from "./types/GetDomainStatisticsReportOutput";
import { GetEmailIdentityInput } from "./types/GetEmailIdentityInput";
import { GetEmailIdentityOutput } from "./types/GetEmailIdentityOutput";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListConfigurationSetsInput } from "./types/ListConfigurationSetsInput";
import { ListConfigurationSetsOutput } from "./types/ListConfigurationSetsOutput";
import { ListDedicatedIpPoolsInput } from "./types/ListDedicatedIpPoolsInput";
import { ListDedicatedIpPoolsOutput } from "./types/ListDedicatedIpPoolsOutput";
import { ListDeliverabilityTestReportsInput } from "./types/ListDeliverabilityTestReportsInput";
import { ListDeliverabilityTestReportsOutput } from "./types/ListDeliverabilityTestReportsOutput";
import { ListDomainDeliverabilityCampaignsInput } from "./types/ListDomainDeliverabilityCampaignsInput";
import { ListDomainDeliverabilityCampaignsOutput } from "./types/ListDomainDeliverabilityCampaignsOutput";
import { ListEmailIdentitiesInput } from "./types/ListEmailIdentitiesInput";
import { ListEmailIdentitiesOutput } from "./types/ListEmailIdentitiesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { MailFromDomainNotVerifiedException } from "./types/MailFromDomainNotVerifiedException";
import { MessageRejected } from "./types/MessageRejected";
import { NotFoundException } from "./types/NotFoundException";
import { PutAccountDedicatedIpWarmupAttributesInput } from "./types/PutAccountDedicatedIpWarmupAttributesInput";
import { PutAccountDedicatedIpWarmupAttributesOutput } from "./types/PutAccountDedicatedIpWarmupAttributesOutput";
import { PutAccountSendingAttributesInput } from "./types/PutAccountSendingAttributesInput";
import { PutAccountSendingAttributesOutput } from "./types/PutAccountSendingAttributesOutput";
import { PutConfigurationSetDeliveryOptionsInput } from "./types/PutConfigurationSetDeliveryOptionsInput";
import { PutConfigurationSetDeliveryOptionsOutput } from "./types/PutConfigurationSetDeliveryOptionsOutput";
import { PutConfigurationSetReputationOptionsInput } from "./types/PutConfigurationSetReputationOptionsInput";
import { PutConfigurationSetReputationOptionsOutput } from "./types/PutConfigurationSetReputationOptionsOutput";
import { PutConfigurationSetSendingOptionsInput } from "./types/PutConfigurationSetSendingOptionsInput";
import { PutConfigurationSetSendingOptionsOutput } from "./types/PutConfigurationSetSendingOptionsOutput";
import { PutConfigurationSetTrackingOptionsInput } from "./types/PutConfigurationSetTrackingOptionsInput";
import { PutConfigurationSetTrackingOptionsOutput } from "./types/PutConfigurationSetTrackingOptionsOutput";
import { PutDedicatedIpInPoolInput } from "./types/PutDedicatedIpInPoolInput";
import { PutDedicatedIpInPoolOutput } from "./types/PutDedicatedIpInPoolOutput";
import { PutDedicatedIpWarmupAttributesInput } from "./types/PutDedicatedIpWarmupAttributesInput";
import { PutDedicatedIpWarmupAttributesOutput } from "./types/PutDedicatedIpWarmupAttributesOutput";
import { PutDeliverabilityDashboardOptionInput } from "./types/PutDeliverabilityDashboardOptionInput";
import { PutDeliverabilityDashboardOptionOutput } from "./types/PutDeliverabilityDashboardOptionOutput";
import { PutEmailIdentityDkimAttributesInput } from "./types/PutEmailIdentityDkimAttributesInput";
import { PutEmailIdentityDkimAttributesOutput } from "./types/PutEmailIdentityDkimAttributesOutput";
import { PutEmailIdentityFeedbackAttributesInput } from "./types/PutEmailIdentityFeedbackAttributesInput";
import { PutEmailIdentityFeedbackAttributesOutput } from "./types/PutEmailIdentityFeedbackAttributesOutput";
import { PutEmailIdentityMailFromAttributesInput } from "./types/PutEmailIdentityMailFromAttributesInput";
import { PutEmailIdentityMailFromAttributesOutput } from "./types/PutEmailIdentityMailFromAttributesOutput";
import { SendEmailInput } from "./types/SendEmailInput";
import { SendEmailOutput } from "./types/SendEmailOutput";
import { SendingPausedException } from "./types/SendingPausedException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateConfigurationSetEventDestinationInput } from "./types/UpdateConfigurationSetEventDestinationInput";
import { UpdateConfigurationSetEventDestinationOutput } from "./types/UpdateConfigurationSetEventDestinationOutput";
import { CreateConfigurationSetCommand } from "./commands/CreateConfigurationSetCommand";
import { CreateConfigurationSetEventDestinationCommand } from "./commands/CreateConfigurationSetEventDestinationCommand";
import { CreateDedicatedIpPoolCommand } from "./commands/CreateDedicatedIpPoolCommand";
import { CreateDeliverabilityTestReportCommand } from "./commands/CreateDeliverabilityTestReportCommand";
import { CreateEmailIdentityCommand } from "./commands/CreateEmailIdentityCommand";
import { DeleteConfigurationSetCommand } from "./commands/DeleteConfigurationSetCommand";
import { DeleteConfigurationSetEventDestinationCommand } from "./commands/DeleteConfigurationSetEventDestinationCommand";
import { DeleteDedicatedIpPoolCommand } from "./commands/DeleteDedicatedIpPoolCommand";
import { DeleteEmailIdentityCommand } from "./commands/DeleteEmailIdentityCommand";
import { GetAccountCommand } from "./commands/GetAccountCommand";
import { GetBlacklistReportsCommand } from "./commands/GetBlacklistReportsCommand";
import { GetConfigurationSetCommand } from "./commands/GetConfigurationSetCommand";
import { GetConfigurationSetEventDestinationsCommand } from "./commands/GetConfigurationSetEventDestinationsCommand";
import { GetDedicatedIpCommand } from "./commands/GetDedicatedIpCommand";
import { GetDedicatedIpsCommand } from "./commands/GetDedicatedIpsCommand";
import { GetDeliverabilityDashboardOptionsCommand } from "./commands/GetDeliverabilityDashboardOptionsCommand";
import { GetDeliverabilityTestReportCommand } from "./commands/GetDeliverabilityTestReportCommand";
import { GetDomainDeliverabilityCampaignCommand } from "./commands/GetDomainDeliverabilityCampaignCommand";
import { GetDomainStatisticsReportCommand } from "./commands/GetDomainStatisticsReportCommand";
import { GetEmailIdentityCommand } from "./commands/GetEmailIdentityCommand";
import { ListConfigurationSetsCommand } from "./commands/ListConfigurationSetsCommand";
import { ListDedicatedIpPoolsCommand } from "./commands/ListDedicatedIpPoolsCommand";
import { ListDeliverabilityTestReportsCommand } from "./commands/ListDeliverabilityTestReportsCommand";
import { ListDomainDeliverabilityCampaignsCommand } from "./commands/ListDomainDeliverabilityCampaignsCommand";
import { ListEmailIdentitiesCommand } from "./commands/ListEmailIdentitiesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PutAccountDedicatedIpWarmupAttributesCommand } from "./commands/PutAccountDedicatedIpWarmupAttributesCommand";
import { PutAccountSendingAttributesCommand } from "./commands/PutAccountSendingAttributesCommand";
import { PutConfigurationSetDeliveryOptionsCommand } from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import { PutConfigurationSetReputationOptionsCommand } from "./commands/PutConfigurationSetReputationOptionsCommand";
import { PutConfigurationSetSendingOptionsCommand } from "./commands/PutConfigurationSetSendingOptionsCommand";
import { PutConfigurationSetTrackingOptionsCommand } from "./commands/PutConfigurationSetTrackingOptionsCommand";
import { PutDedicatedIpInPoolCommand } from "./commands/PutDedicatedIpInPoolCommand";
import { PutDedicatedIpWarmupAttributesCommand } from "./commands/PutDedicatedIpWarmupAttributesCommand";
import { PutDeliverabilityDashboardOptionCommand } from "./commands/PutDeliverabilityDashboardOptionCommand";
import { PutEmailIdentityDkimAttributesCommand } from "./commands/PutEmailIdentityDkimAttributesCommand";
import { PutEmailIdentityFeedbackAttributesCommand } from "./commands/PutEmailIdentityFeedbackAttributesCommand";
import { PutEmailIdentityMailFromAttributesCommand } from "./commands/PutEmailIdentityMailFromAttributesCommand";
import { SendEmailCommand } from "./commands/SendEmailCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateConfigurationSetEventDestinationCommand } from "./commands/UpdateConfigurationSetEventDestinationCommand";

export class PinpointEmail extends PinpointEmailClient {
  /**
   * <p>Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>The resource specified in your request already exists.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {LimitExceededException} <p>There are too many instances of the specified resource type.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {ConcurrentModificationException} <p>The resource is being modified by another operation or thread.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConfigurationSet(
    args: CreateConfigurationSetInput
  ): Promise<CreateConfigurationSetOutput>;
  public createConfigurationSet(
    args: CreateConfigurationSetInput,
    cb: (err: any, data?: CreateConfigurationSetOutput) => void
  ): void;
  public createConfigurationSet(
    args: CreateConfigurationSetInput,
    cb?: (err: any, data?: CreateConfigurationSetOutput) => void
  ): Promise<CreateConfigurationSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConfigurationSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {AlreadyExistsException} <p>The resource specified in your request already exists.</p>
   *   - {LimitExceededException} <p>There are too many instances of the specified resource type.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationInput
  ): Promise<CreateConfigurationSetEventDestinationOutput>;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationInput,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationOutput) => void
  ): void;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationInput,
    cb?: (err: any, data?: CreateConfigurationSetEventDestinationOutput) => void
  ): Promise<CreateConfigurationSetEventDestinationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConfigurationSetEventDestinationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>The resource specified in your request already exists.</p>
   *   - {LimitExceededException} <p>There are too many instances of the specified resource type.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {ConcurrentModificationException} <p>The resource is being modified by another operation or thread.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDedicatedIpPool(
    args: CreateDedicatedIpPoolInput
  ): Promise<CreateDedicatedIpPoolOutput>;
  public createDedicatedIpPool(
    args: CreateDedicatedIpPoolInput,
    cb: (err: any, data?: CreateDedicatedIpPoolOutput) => void
  ): void;
  public createDedicatedIpPool(
    args: CreateDedicatedIpPoolInput,
    cb?: (err: any, data?: CreateDedicatedIpPoolOutput) => void
  ): Promise<CreateDedicatedIpPoolOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDedicatedIpPoolCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccountSuspendedException} <p>The message can't be sent because the account's ability to send email has been permanently restricted.</p>
   *   - {SendingPausedException} <p>The message can't be sent because the account's ability to send email is currently paused.</p>
   *   - {MessageRejected} <p>The message can't be sent because it contains invalid content.</p>
   *   - {MailFromDomainNotVerifiedException} <p>The message can't be sent because the sending domain isn't verified.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {LimitExceededException} <p>There are too many instances of the specified resource type.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {ConcurrentModificationException} <p>The resource is being modified by another operation or thread.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportInput
  ): Promise<CreateDeliverabilityTestReportOutput>;
  public createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportInput,
    cb: (err: any, data?: CreateDeliverabilityTestReportOutput) => void
  ): void;
  public createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportInput,
    cb?: (err: any, data?: CreateDeliverabilityTestReportOutput) => void
  ): Promise<CreateDeliverabilityTestReportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDeliverabilityTestReportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>There are too many instances of the specified resource type.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {ConcurrentModificationException} <p>The resource is being modified by another operation or thread.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEmailIdentity(
    args: CreateEmailIdentityInput
  ): Promise<CreateEmailIdentityOutput>;
  public createEmailIdentity(
    args: CreateEmailIdentityInput,
    cb: (err: any, data?: CreateEmailIdentityOutput) => void
  ): void;
  public createEmailIdentity(
    args: CreateEmailIdentityInput,
    cb?: (err: any, data?: CreateEmailIdentityOutput) => void
  ): Promise<CreateEmailIdentityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEmailIdentityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {ConcurrentModificationException} <p>The resource is being modified by another operation or thread.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConfigurationSet(
    args: DeleteConfigurationSetInput
  ): Promise<DeleteConfigurationSetOutput>;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetInput,
    cb: (err: any, data?: DeleteConfigurationSetOutput) => void
  ): void;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetInput,
    cb?: (err: any, data?: DeleteConfigurationSetOutput) => void
  ): Promise<DeleteConfigurationSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConfigurationSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationInput
  ): Promise<DeleteConfigurationSetEventDestinationOutput>;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationInput,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationOutput) => void
  ): void;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationInput,
    cb?: (err: any, data?: DeleteConfigurationSetEventDestinationOutput) => void
  ): Promise<DeleteConfigurationSetEventDestinationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConfigurationSetEventDestinationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete a dedicated IP pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {ConcurrentModificationException} <p>The resource is being modified by another operation or thread.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolInput
  ): Promise<DeleteDedicatedIpPoolOutput>;
  public deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolInput,
    cb: (err: any, data?: DeleteDedicatedIpPoolOutput) => void
  ): void;
  public deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolInput,
    cb?: (err: any, data?: DeleteDedicatedIpPoolOutput) => void
  ): Promise<DeleteDedicatedIpPoolOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDedicatedIpPoolCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {ConcurrentModificationException} <p>The resource is being modified by another operation or thread.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEmailIdentity(
    args: DeleteEmailIdentityInput
  ): Promise<DeleteEmailIdentityOutput>;
  public deleteEmailIdentity(
    args: DeleteEmailIdentityInput,
    cb: (err: any, data?: DeleteEmailIdentityOutput) => void
  ): void;
  public deleteEmailIdentity(
    args: DeleteEmailIdentityInput,
    cb?: (err: any, data?: DeleteEmailIdentityOutput) => void
  ): Promise<DeleteEmailIdentityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEmailIdentityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccount(args: GetAccountInput): Promise<GetAccountOutput>;
  public getAccount(
    args: GetAccountInput,
    cb: (err: any, data?: GetAccountOutput) => void
  ): void;
  public getAccount(
    args: GetAccountInput,
    cb?: (err: any, data?: GetAccountOutput) => void
  ): Promise<GetAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve a list of the blacklists that your dedicated IP addresses appear on.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBlacklistReports(
    args: GetBlacklistReportsInput
  ): Promise<GetBlacklistReportsOutput>;
  public getBlacklistReports(
    args: GetBlacklistReportsInput,
    cb: (err: any, data?: GetBlacklistReportsOutput) => void
  ): void;
  public getBlacklistReports(
    args: GetBlacklistReportsInput,
    cb?: (err: any, data?: GetBlacklistReportsOutput) => void
  ): Promise<GetBlacklistReportsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBlacklistReportsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConfigurationSet(
    args: GetConfigurationSetInput
  ): Promise<GetConfigurationSetOutput>;
  public getConfigurationSet(
    args: GetConfigurationSetInput,
    cb: (err: any, data?: GetConfigurationSetOutput) => void
  ): void;
  public getConfigurationSet(
    args: GetConfigurationSetInput,
    cb?: (err: any, data?: GetConfigurationSetOutput) => void
  ): Promise<GetConfigurationSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConfigurationSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsInput
  ): Promise<GetConfigurationSetEventDestinationsOutput>;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsInput,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsOutput) => void
  ): void;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsInput,
    cb?: (err: any, data?: GetConfigurationSetEventDestinationsOutput) => void
  ): Promise<GetConfigurationSetEventDestinationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConfigurationSetEventDestinationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDedicatedIp(
    args: GetDedicatedIpInput
  ): Promise<GetDedicatedIpOutput>;
  public getDedicatedIp(
    args: GetDedicatedIpInput,
    cb: (err: any, data?: GetDedicatedIpOutput) => void
  ): void;
  public getDedicatedIp(
    args: GetDedicatedIpInput,
    cb?: (err: any, data?: GetDedicatedIpOutput) => void
  ): Promise<GetDedicatedIpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDedicatedIpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the dedicated IP addresses that are associated with your Amazon Pinpoint account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDedicatedIps(
    args: GetDedicatedIpsInput
  ): Promise<GetDedicatedIpsOutput>;
  public getDedicatedIps(
    args: GetDedicatedIpsInput,
    cb: (err: any, data?: GetDedicatedIpsOutput) => void
  ): void;
  public getDedicatedIps(
    args: GetDedicatedIpsInput,
    cb?: (err: any, data?: GetDedicatedIpsOutput) => void
  ): Promise<GetDedicatedIpsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDedicatedIpsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {LimitExceededException} <p>There are too many instances of the specified resource type.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsInput
  ): Promise<GetDeliverabilityDashboardOptionsOutput>;
  public getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsInput,
    cb: (err: any, data?: GetDeliverabilityDashboardOptionsOutput) => void
  ): void;
  public getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsInput,
    cb?: (err: any, data?: GetDeliverabilityDashboardOptionsOutput) => void
  ): Promise<GetDeliverabilityDashboardOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeliverabilityDashboardOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve the results of a predictive inbox placement test.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportInput
  ): Promise<GetDeliverabilityTestReportOutput>;
  public getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportInput,
    cb: (err: any, data?: GetDeliverabilityTestReportOutput) => void
  ): void;
  public getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportInput,
    cb?: (err: any, data?: GetDeliverabilityTestReportOutput) => void
  ): Promise<GetDeliverabilityTestReportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeliverabilityTestReportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignInput
  ): Promise<GetDomainDeliverabilityCampaignOutput>;
  public getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignInput,
    cb: (err: any, data?: GetDomainDeliverabilityCampaignOutput) => void
  ): void;
  public getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignInput,
    cb?: (err: any, data?: GetDomainDeliverabilityCampaignOutput) => void
  ): Promise<GetDomainDeliverabilityCampaignOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDomainDeliverabilityCampaignCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve inbox placement and engagement rates for the domains that you use to send email.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDomainStatisticsReport(
    args: GetDomainStatisticsReportInput
  ): Promise<GetDomainStatisticsReportOutput>;
  public getDomainStatisticsReport(
    args: GetDomainStatisticsReportInput,
    cb: (err: any, data?: GetDomainStatisticsReportOutput) => void
  ): void;
  public getDomainStatisticsReport(
    args: GetDomainStatisticsReportInput,
    cb?: (err: any, data?: GetDomainStatisticsReportOutput) => void
  ): Promise<GetDomainStatisticsReportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDomainStatisticsReportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEmailIdentity(
    args: GetEmailIdentityInput
  ): Promise<GetEmailIdentityOutput>;
  public getEmailIdentity(
    args: GetEmailIdentityInput,
    cb: (err: any, data?: GetEmailIdentityOutput) => void
  ): void;
  public getEmailIdentity(
    args: GetEmailIdentityInput,
    cb?: (err: any, data?: GetEmailIdentityOutput) => void
  ): Promise<GetEmailIdentityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEmailIdentityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listConfigurationSets(
    args: ListConfigurationSetsInput
  ): Promise<ListConfigurationSetsOutput>;
  public listConfigurationSets(
    args: ListConfigurationSetsInput,
    cb: (err: any, data?: ListConfigurationSetsOutput) => void
  ): void;
  public listConfigurationSets(
    args: ListConfigurationSetsInput,
    cb?: (err: any, data?: ListConfigurationSetsOutput) => void
  ): Promise<ListConfigurationSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListConfigurationSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDedicatedIpPools(
    args: ListDedicatedIpPoolsInput
  ): Promise<ListDedicatedIpPoolsOutput>;
  public listDedicatedIpPools(
    args: ListDedicatedIpPoolsInput,
    cb: (err: any, data?: ListDedicatedIpPoolsOutput) => void
  ): void;
  public listDedicatedIpPools(
    args: ListDedicatedIpPoolsInput,
    cb?: (err: any, data?: ListDedicatedIpPoolsOutput) => void
  ): Promise<ListDedicatedIpPoolsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDedicatedIpPoolsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsInput
  ): Promise<ListDeliverabilityTestReportsOutput>;
  public listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsInput,
    cb: (err: any, data?: ListDeliverabilityTestReportsOutput) => void
  ): void;
  public listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsInput,
    cb?: (err: any, data?: ListDeliverabilityTestReportsOutput) => void
  ): Promise<ListDeliverabilityTestReportsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeliverabilityTestReportsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsInput
  ): Promise<ListDomainDeliverabilityCampaignsOutput>;
  public listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsInput,
    cb: (err: any, data?: ListDomainDeliverabilityCampaignsOutput) => void
  ): void;
  public listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsInput,
    cb?: (err: any, data?: ListDomainDeliverabilityCampaignsOutput) => void
  ): Promise<ListDomainDeliverabilityCampaignsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDomainDeliverabilityCampaignsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEmailIdentities(
    args: ListEmailIdentitiesInput
  ): Promise<ListEmailIdentitiesOutput>;
  public listEmailIdentities(
    args: ListEmailIdentitiesInput,
    cb: (err: any, data?: ListEmailIdentitiesOutput) => void
  ): void;
  public listEmailIdentities(
    args: ListEmailIdentitiesInput,
    cb?: (err: any, data?: ListEmailIdentitiesOutput) => void
  ): Promise<ListEmailIdentitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEmailIdentitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enable or disable the automatic warm-up feature for dedicated IP addresses.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesInput
  ): Promise<PutAccountDedicatedIpWarmupAttributesOutput>;
  public putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesInput,
    cb: (err: any, data?: PutAccountDedicatedIpWarmupAttributesOutput) => void
  ): void;
  public putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesInput,
    cb?: (err: any, data?: PutAccountDedicatedIpWarmupAttributesOutput) => void
  ): Promise<PutAccountDedicatedIpWarmupAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutAccountDedicatedIpWarmupAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enable or disable the ability of your account to send email.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putAccountSendingAttributes(
    args: PutAccountSendingAttributesInput
  ): Promise<PutAccountSendingAttributesOutput>;
  public putAccountSendingAttributes(
    args: PutAccountSendingAttributesInput,
    cb: (err: any, data?: PutAccountSendingAttributesOutput) => void
  ): void;
  public putAccountSendingAttributes(
    args: PutAccountSendingAttributesInput,
    cb?: (err: any, data?: PutAccountSendingAttributesOutput) => void
  ): Promise<PutAccountSendingAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutAccountSendingAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsInput
  ): Promise<PutConfigurationSetDeliveryOptionsOutput>;
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsInput,
    cb: (err: any, data?: PutConfigurationSetDeliveryOptionsOutput) => void
  ): void;
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsInput,
    cb?: (err: any, data?: PutConfigurationSetDeliveryOptionsOutput) => void
  ): Promise<PutConfigurationSetDeliveryOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutConfigurationSetDeliveryOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsInput
  ): Promise<PutConfigurationSetReputationOptionsOutput>;
  public putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsInput,
    cb: (err: any, data?: PutConfigurationSetReputationOptionsOutput) => void
  ): void;
  public putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsInput,
    cb?: (err: any, data?: PutConfigurationSetReputationOptionsOutput) => void
  ): Promise<PutConfigurationSetReputationOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutConfigurationSetReputationOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsInput
  ): Promise<PutConfigurationSetSendingOptionsOutput>;
  public putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsInput,
    cb: (err: any, data?: PutConfigurationSetSendingOptionsOutput) => void
  ): void;
  public putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsInput,
    cb?: (err: any, data?: PutConfigurationSetSendingOptionsOutput) => void
  ): Promise<PutConfigurationSetSendingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutConfigurationSetSendingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsInput
  ): Promise<PutConfigurationSetTrackingOptionsOutput>;
  public putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsInput,
    cb: (err: any, data?: PutConfigurationSetTrackingOptionsOutput) => void
  ): void;
  public putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsInput,
    cb?: (err: any, data?: PutConfigurationSetTrackingOptionsOutput) => void
  ): Promise<PutConfigurationSetTrackingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutConfigurationSetTrackingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putDedicatedIpInPool(
    args: PutDedicatedIpInPoolInput
  ): Promise<PutDedicatedIpInPoolOutput>;
  public putDedicatedIpInPool(
    args: PutDedicatedIpInPoolInput,
    cb: (err: any, data?: PutDedicatedIpInPoolOutput) => void
  ): void;
  public putDedicatedIpInPool(
    args: PutDedicatedIpInPoolInput,
    cb?: (err: any, data?: PutDedicatedIpInPoolOutput) => void
  ): Promise<PutDedicatedIpInPoolOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutDedicatedIpInPoolCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p/>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesInput
  ): Promise<PutDedicatedIpWarmupAttributesOutput>;
  public putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesInput,
    cb: (err: any, data?: PutDedicatedIpWarmupAttributesOutput) => void
  ): void;
  public putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesInput,
    cb?: (err: any, data?: PutDedicatedIpWarmupAttributesOutput) => void
  ): Promise<PutDedicatedIpWarmupAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutDedicatedIpWarmupAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>The resource specified in your request already exists.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {LimitExceededException} <p>There are too many instances of the specified resource type.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionInput
  ): Promise<PutDeliverabilityDashboardOptionOutput>;
  public putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionInput,
    cb: (err: any, data?: PutDeliverabilityDashboardOptionOutput) => void
  ): void;
  public putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionInput,
    cb?: (err: any, data?: PutDeliverabilityDashboardOptionOutput) => void
  ): Promise<PutDeliverabilityDashboardOptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutDeliverabilityDashboardOptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used to enable or disable DKIM authentication for an email identity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesInput
  ): Promise<PutEmailIdentityDkimAttributesOutput>;
  public putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesInput,
    cb: (err: any, data?: PutEmailIdentityDkimAttributesOutput) => void
  ): void;
  public putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesInput,
    cb?: (err: any, data?: PutEmailIdentityDkimAttributesOutput) => void
  ): Promise<PutEmailIdentityDkimAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutEmailIdentityDkimAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesInput
  ): Promise<PutEmailIdentityFeedbackAttributesOutput>;
  public putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesInput,
    cb: (err: any, data?: PutEmailIdentityFeedbackAttributesOutput) => void
  ): void;
  public putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesInput,
    cb?: (err: any, data?: PutEmailIdentityFeedbackAttributesOutput) => void
  ): Promise<PutEmailIdentityFeedbackAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutEmailIdentityFeedbackAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used to enable or disable the custom Mail-From domain configuration for an email identity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesInput
  ): Promise<PutEmailIdentityMailFromAttributesOutput>;
  public putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesInput,
    cb: (err: any, data?: PutEmailIdentityMailFromAttributesOutput) => void
  ): void;
  public putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesInput,
    cb?: (err: any, data?: PutEmailIdentityMailFromAttributesOutput) => void
  ): Promise<PutEmailIdentityMailFromAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutEmailIdentityMailFromAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {LimitExceededException} <p>There are too many instances of the specified resource type.</p>
   *   - {AccountSuspendedException} <p>The message can't be sent because the account's ability to send email has been permanently restricted.</p>
   *   - {SendingPausedException} <p>The message can't be sent because the account's ability to send email is currently paused.</p>
   *   - {MessageRejected} <p>The message can't be sent because it contains invalid content.</p>
   *   - {MailFromDomainNotVerifiedException} <p>The message can't be sent because the sending domain isn't verified.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendEmail(args: SendEmailInput): Promise<SendEmailOutput>;
  public sendEmail(
    args: SendEmailInput,
    cb: (err: any, data?: SendEmailOutput) => void
  ): void;
  public sendEmail(
    args: SendEmailInput,
    cb?: (err: any, data?: SendEmailOutput) => void
  ): Promise<SendEmailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendEmailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {ConcurrentModificationException} <p>The resource is being modified by another operation or thread.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Remove one or more tags (keys and values) from a specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {ConcurrentModificationException} <p>The resource is being modified by another operation or thread.</p>
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource you attempted to access doesn't exist.</p>
   *   - {TooManyRequestsException} <p>Too many requests have been made to the operation.</p>
   *   - {BadRequestException} <p>The input you provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationInput
  ): Promise<UpdateConfigurationSetEventDestinationOutput>;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationInput,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationOutput) => void
  ): void;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationInput,
    cb?: (err: any, data?: UpdateConfigurationSetEventDestinationOutput) => void
  ): Promise<UpdateConfigurationSetEventDestinationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConfigurationSetEventDestinationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
