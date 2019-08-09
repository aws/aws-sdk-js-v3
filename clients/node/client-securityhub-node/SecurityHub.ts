import { SecurityHubClient } from "./SecurityHubClient";
import { AcceptInvitationInput } from "./types/AcceptInvitationInput";
import { AcceptInvitationOutput } from "./types/AcceptInvitationOutput";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { BatchDisableStandardsInput } from "./types/BatchDisableStandardsInput";
import { BatchDisableStandardsOutput } from "./types/BatchDisableStandardsOutput";
import { BatchEnableStandardsInput } from "./types/BatchEnableStandardsInput";
import { BatchEnableStandardsOutput } from "./types/BatchEnableStandardsOutput";
import { BatchImportFindingsInput } from "./types/BatchImportFindingsInput";
import { BatchImportFindingsOutput } from "./types/BatchImportFindingsOutput";
import { CreateActionTargetInput } from "./types/CreateActionTargetInput";
import { CreateActionTargetOutput } from "./types/CreateActionTargetOutput";
import { CreateInsightInput } from "./types/CreateInsightInput";
import { CreateInsightOutput } from "./types/CreateInsightOutput";
import { CreateMembersInput } from "./types/CreateMembersInput";
import { CreateMembersOutput } from "./types/CreateMembersOutput";
import { DeclineInvitationsInput } from "./types/DeclineInvitationsInput";
import { DeclineInvitationsOutput } from "./types/DeclineInvitationsOutput";
import { DeleteActionTargetInput } from "./types/DeleteActionTargetInput";
import { DeleteActionTargetOutput } from "./types/DeleteActionTargetOutput";
import { DeleteInsightInput } from "./types/DeleteInsightInput";
import { DeleteInsightOutput } from "./types/DeleteInsightOutput";
import { DeleteInvitationsInput } from "./types/DeleteInvitationsInput";
import { DeleteInvitationsOutput } from "./types/DeleteInvitationsOutput";
import { DeleteMembersInput } from "./types/DeleteMembersInput";
import { DeleteMembersOutput } from "./types/DeleteMembersOutput";
import { DescribeActionTargetsInput } from "./types/DescribeActionTargetsInput";
import { DescribeActionTargetsOutput } from "./types/DescribeActionTargetsOutput";
import { DescribeHubInput } from "./types/DescribeHubInput";
import { DescribeHubOutput } from "./types/DescribeHubOutput";
import { DescribeProductsInput } from "./types/DescribeProductsInput";
import { DescribeProductsOutput } from "./types/DescribeProductsOutput";
import { DisableImportFindingsForProductInput } from "./types/DisableImportFindingsForProductInput";
import { DisableImportFindingsForProductOutput } from "./types/DisableImportFindingsForProductOutput";
import { DisableSecurityHubInput } from "./types/DisableSecurityHubInput";
import { DisableSecurityHubOutput } from "./types/DisableSecurityHubOutput";
import { DisassociateFromMasterAccountInput } from "./types/DisassociateFromMasterAccountInput";
import { DisassociateFromMasterAccountOutput } from "./types/DisassociateFromMasterAccountOutput";
import { DisassociateMembersInput } from "./types/DisassociateMembersInput";
import { DisassociateMembersOutput } from "./types/DisassociateMembersOutput";
import { EnableImportFindingsForProductInput } from "./types/EnableImportFindingsForProductInput";
import { EnableImportFindingsForProductOutput } from "./types/EnableImportFindingsForProductOutput";
import { EnableSecurityHubInput } from "./types/EnableSecurityHubInput";
import { EnableSecurityHubOutput } from "./types/EnableSecurityHubOutput";
import { GetEnabledStandardsInput } from "./types/GetEnabledStandardsInput";
import { GetEnabledStandardsOutput } from "./types/GetEnabledStandardsOutput";
import { GetFindingsInput } from "./types/GetFindingsInput";
import { GetFindingsOutput } from "./types/GetFindingsOutput";
import { GetInsightResultsInput } from "./types/GetInsightResultsInput";
import { GetInsightResultsOutput } from "./types/GetInsightResultsOutput";
import { GetInsightsInput } from "./types/GetInsightsInput";
import { GetInsightsOutput } from "./types/GetInsightsOutput";
import { GetInvitationsCountInput } from "./types/GetInvitationsCountInput";
import { GetInvitationsCountOutput } from "./types/GetInvitationsCountOutput";
import { GetMasterAccountInput } from "./types/GetMasterAccountInput";
import { GetMasterAccountOutput } from "./types/GetMasterAccountOutput";
import { GetMembersInput } from "./types/GetMembersInput";
import { GetMembersOutput } from "./types/GetMembersOutput";
import { InternalException } from "./types/InternalException";
import { InvalidAccessException } from "./types/InvalidAccessException";
import { InvalidInputException } from "./types/InvalidInputException";
import { InviteMembersInput } from "./types/InviteMembersInput";
import { InviteMembersOutput } from "./types/InviteMembersOutput";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListEnabledProductsForImportInput } from "./types/ListEnabledProductsForImportInput";
import { ListEnabledProductsForImportOutput } from "./types/ListEnabledProductsForImportOutput";
import { ListInvitationsInput } from "./types/ListInvitationsInput";
import { ListInvitationsOutput } from "./types/ListInvitationsOutput";
import { ListMembersInput } from "./types/ListMembersInput";
import { ListMembersOutput } from "./types/ListMembersOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ResourceConflictException } from "./types/ResourceConflictException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateActionTargetInput } from "./types/UpdateActionTargetInput";
import { UpdateActionTargetOutput } from "./types/UpdateActionTargetOutput";
import { UpdateFindingsInput } from "./types/UpdateFindingsInput";
import { UpdateFindingsOutput } from "./types/UpdateFindingsOutput";
import { UpdateInsightInput } from "./types/UpdateInsightInput";
import { UpdateInsightOutput } from "./types/UpdateInsightOutput";
import { AcceptInvitationCommand } from "./commands/AcceptInvitationCommand";
import { BatchDisableStandardsCommand } from "./commands/BatchDisableStandardsCommand";
import { BatchEnableStandardsCommand } from "./commands/BatchEnableStandardsCommand";
import { BatchImportFindingsCommand } from "./commands/BatchImportFindingsCommand";
import { CreateActionTargetCommand } from "./commands/CreateActionTargetCommand";
import { CreateInsightCommand } from "./commands/CreateInsightCommand";
import { CreateMembersCommand } from "./commands/CreateMembersCommand";
import { DeclineInvitationsCommand } from "./commands/DeclineInvitationsCommand";
import { DeleteActionTargetCommand } from "./commands/DeleteActionTargetCommand";
import { DeleteInsightCommand } from "./commands/DeleteInsightCommand";
import { DeleteInvitationsCommand } from "./commands/DeleteInvitationsCommand";
import { DeleteMembersCommand } from "./commands/DeleteMembersCommand";
import { DescribeActionTargetsCommand } from "./commands/DescribeActionTargetsCommand";
import { DescribeHubCommand } from "./commands/DescribeHubCommand";
import { DescribeProductsCommand } from "./commands/DescribeProductsCommand";
import { DisableImportFindingsForProductCommand } from "./commands/DisableImportFindingsForProductCommand";
import { DisableSecurityHubCommand } from "./commands/DisableSecurityHubCommand";
import { DisassociateFromMasterAccountCommand } from "./commands/DisassociateFromMasterAccountCommand";
import { DisassociateMembersCommand } from "./commands/DisassociateMembersCommand";
import { EnableImportFindingsForProductCommand } from "./commands/EnableImportFindingsForProductCommand";
import { EnableSecurityHubCommand } from "./commands/EnableSecurityHubCommand";
import { GetEnabledStandardsCommand } from "./commands/GetEnabledStandardsCommand";
import { GetFindingsCommand } from "./commands/GetFindingsCommand";
import { GetInsightResultsCommand } from "./commands/GetInsightResultsCommand";
import { GetInsightsCommand } from "./commands/GetInsightsCommand";
import { GetInvitationsCountCommand } from "./commands/GetInvitationsCountCommand";
import { GetMasterAccountCommand } from "./commands/GetMasterAccountCommand";
import { GetMembersCommand } from "./commands/GetMembersCommand";
import { InviteMembersCommand } from "./commands/InviteMembersCommand";
import { ListEnabledProductsForImportCommand } from "./commands/ListEnabledProductsForImportCommand";
import { ListInvitationsCommand } from "./commands/ListInvitationsCommand";
import { ListMembersCommand } from "./commands/ListMembersCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateActionTargetCommand } from "./commands/UpdateActionTargetCommand";
import { UpdateFindingsCommand } from "./commands/UpdateFindingsCommand";
import { UpdateInsightCommand } from "./commands/UpdateInsightCommand";

export class SecurityHub extends SecurityHubClient {
  /**
   * <p>Accepts the invitation to be a member account and be monitored by the Security Hub master account that the invitation was sent from. When the member account accepts the invitation, permission is granted to the master account to view findings generated in the member account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acceptInvitation(
    args: AcceptInvitationInput
  ): Promise<AcceptInvitationOutput>;
  public acceptInvitation(
    args: AcceptInvitationInput,
    cb: (err: any, data?: AcceptInvitationOutput) => void
  ): void;
  public acceptInvitation(
    args: AcceptInvitationInput,
    cb?: (err: any, data?: AcceptInvitationOutput) => void
  ): Promise<AcceptInvitationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcceptInvitationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the standards specified by the provided <code>StandardsSubscriptionArns</code>. For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Standards Supported in AWS Security Hub</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDisableStandards(
    args: BatchDisableStandardsInput
  ): Promise<BatchDisableStandardsOutput>;
  public batchDisableStandards(
    args: BatchDisableStandardsInput,
    cb: (err: any, data?: BatchDisableStandardsOutput) => void
  ): void;
  public batchDisableStandards(
    args: BatchDisableStandardsInput,
    cb?: (err: any, data?: BatchDisableStandardsOutput) => void
  ): Promise<BatchDisableStandardsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDisableStandardsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables the standards specified by the provided <code>standardsArn</code>. In this release, only CIS AWS Foundations standards are supported. For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Standards Supported in AWS Security Hub</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchEnableStandards(
    args: BatchEnableStandardsInput
  ): Promise<BatchEnableStandardsOutput>;
  public batchEnableStandards(
    args: BatchEnableStandardsInput,
    cb: (err: any, data?: BatchEnableStandardsOutput) => void
  ): void;
  public batchEnableStandards(
    args: BatchEnableStandardsInput,
    cb?: (err: any, data?: BatchEnableStandardsOutput) => void
  ): Promise<BatchEnableStandardsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchEnableStandardsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Imports security findings generated from an integrated third-party product into Security Hub. This action is requested by the integrated product to import its findings into Security Hub. The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchImportFindings(
    args: BatchImportFindingsInput
  ): Promise<BatchImportFindingsOutput>;
  public batchImportFindings(
    args: BatchImportFindingsInput,
    cb: (err: any, data?: BatchImportFindingsOutput) => void
  ): void;
  public batchImportFindings(
    args: BatchImportFindingsInput,
    cb?: (err: any, data?: BatchImportFindingsOutput) => void
  ): Promise<BatchImportFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchImportFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a custom action target in Security Hub. You can use custom actions on findings and insights in Security Hub to trigger target actions in Amazon CloudWatch Events.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceConflictException} <p>The resource specified in the request conflicts with an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createActionTarget(
    args: CreateActionTargetInput
  ): Promise<CreateActionTargetOutput>;
  public createActionTarget(
    args: CreateActionTargetInput,
    cb: (err: any, data?: CreateActionTargetOutput) => void
  ): void;
  public createActionTarget(
    args: CreateActionTargetInput,
    cb?: (err: any, data?: CreateActionTargetOutput) => void
  ): Promise<CreateActionTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateActionTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation. Use the <code>GroupByAttribute</code> to group the related findings in the insight.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {ResourceConflictException} <p>The resource specified in the request conflicts with an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInsight(args: CreateInsightInput): Promise<CreateInsightOutput>;
  public createInsight(
    args: CreateInsightInput,
    cb: (err: any, data?: CreateInsightOutput) => void
  ): void;
  public createInsight(
    args: CreateInsightInput,
    cb?: (err: any, data?: CreateInsightOutput) => void
  ): Promise<CreateInsightOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInsightCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the master account. To successfully create a member, you must use this action from an account that already has Security Hub enabled. You can use the <a>EnableSecurityHub</a> to enable Security Hub.</p> <p>After you use <code>CreateMembers</code> to create member account associations in Security Hub, you need to use the <a>InviteMembers</a> action, which invites the accounts to enable Security Hub and become member accounts in Security Hub. If the invitation is accepted by the account owner, the account becomes a member account in Security Hub, and a permission policy is added that permits the master account to view the findings generated in the member account. When Security Hub is enabled in the invited account, findings start being sent to both the member and master accounts.</p> <p>You can remove the association between the master and member accounts by using the <a>DisassociateFromMasterAccount</a> or <a>DisassociateMembers</a> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {ResourceConflictException} <p>The resource specified in the request conflicts with an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createMembers(args: CreateMembersInput): Promise<CreateMembersOutput>;
  public createMembers(
    args: CreateMembersInput,
    cb: (err: any, data?: CreateMembersOutput) => void
  ): void;
  public createMembers(
    args: CreateMembersInput,
    cb?: (err: any, data?: CreateMembersOutput) => void
  ): Promise<CreateMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Declines invitations to become a member account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public declineInvitations(
    args: DeclineInvitationsInput
  ): Promise<DeclineInvitationsOutput>;
  public declineInvitations(
    args: DeclineInvitationsInput,
    cb: (err: any, data?: DeclineInvitationsOutput) => void
  ): void;
  public declineInvitations(
    args: DeclineInvitationsInput,
    cb?: (err: any, data?: DeclineInvitationsOutput) => void
  ): Promise<DeclineInvitationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeclineInvitationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a custom action target from Security Hub. Deleting a custom action target doesn't affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteActionTarget(
    args: DeleteActionTargetInput
  ): Promise<DeleteActionTargetOutput>;
  public deleteActionTarget(
    args: DeleteActionTargetInput,
    cb: (err: any, data?: DeleteActionTargetOutput) => void
  ): void;
  public deleteActionTarget(
    args: DeleteActionTargetInput,
    cb?: (err: any, data?: DeleteActionTargetOutput) => void
  ): Promise<DeleteActionTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteActionTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the insight specified by the <code>InsightArn</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInsight(args: DeleteInsightInput): Promise<DeleteInsightOutput>;
  public deleteInsight(
    args: DeleteInsightInput,
    cb: (err: any, data?: DeleteInsightOutput) => void
  ): void;
  public deleteInsight(
    args: DeleteInsightInput,
    cb?: (err: any, data?: DeleteInsightOutput) => void
  ): Promise<DeleteInsightOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInsightCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes invitations received by the AWS account to become a member account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInvitations(
    args: DeleteInvitationsInput
  ): Promise<DeleteInvitationsOutput>;
  public deleteInvitations(
    args: DeleteInvitationsInput,
    cb: (err: any, data?: DeleteInvitationsOutput) => void
  ): void;
  public deleteInvitations(
    args: DeleteInvitationsInput,
    cb?: (err: any, data?: DeleteInvitationsOutput) => void
  ): Promise<DeleteInvitationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInvitationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified member accounts from Security Hub.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteMembers(args: DeleteMembersInput): Promise<DeleteMembersOutput>;
  public deleteMembers(
    args: DeleteMembersInput,
    cb: (err: any, data?: DeleteMembersOutput) => void
  ): void;
  public deleteMembers(
    args: DeleteMembersInput,
    cb?: (err: any, data?: DeleteMembersOutput) => void
  ): Promise<DeleteMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the custom action targets in Security Hub in your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeActionTargets(
    args: DescribeActionTargetsInput
  ): Promise<DescribeActionTargetsOutput>;
  public describeActionTargets(
    args: DescribeActionTargetsInput,
    cb: (err: any, data?: DescribeActionTargetsOutput) => void
  ): void;
  public describeActionTargets(
    args: DescribeActionTargetsInput,
    cb?: (err: any, data?: DescribeActionTargetsOutput) => void
  ): Promise<DescribeActionTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeActionTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns details about the Hub resource in your account, including the <code>HubArn</code> and the time when you enabled Security Hub.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeHub(args: DescribeHubInput): Promise<DescribeHubOutput>;
  public describeHub(
    args: DescribeHubInput,
    cb: (err: any, data?: DescribeHubOutput) => void
  ): void;
  public describeHub(
    args: DescribeHubInput,
    cb?: (err: any, data?: DescribeHubOutput) => void
  ): Promise<DescribeHubOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeHubCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the products available that you can subscribe to and integrate with Security Hub to consolidate findings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeProducts(
    args: DescribeProductsInput
  ): Promise<DescribeProductsOutput>;
  public describeProducts(
    args: DescribeProductsInput,
    cb: (err: any, data?: DescribeProductsOutput) => void
  ): void;
  public describeProducts(
    args: DescribeProductsInput,
    cb?: (err: any, data?: DescribeProductsOutput) => void
  ): Promise<DescribeProductsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeProductsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the integration of the specified product with Security Hub. Findings from that product are no longer sent to Security Hub after the integration is disabled.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableImportFindingsForProduct(
    args: DisableImportFindingsForProductInput
  ): Promise<DisableImportFindingsForProductOutput>;
  public disableImportFindingsForProduct(
    args: DisableImportFindingsForProductInput,
    cb: (err: any, data?: DisableImportFindingsForProductOutput) => void
  ): void;
  public disableImportFindingsForProduct(
    args: DisableImportFindingsForProductInput,
    cb?: (err: any, data?: DisableImportFindingsForProductOutput) => void
  ): Promise<DisableImportFindingsForProductOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableImportFindingsForProductCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables Security Hub in your account only in the current Region. To disable Security Hub in all Regions, you must submit one request per Region where you have enabled Security Hub. When you disable Security Hub for a master account, it doesn't disable Security Hub for any associated member accounts.</p> <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration settings are deleted after 90 days and can't be recovered. Any standards that were enabled are disabled, and your master and member account associations are removed. If you want to save your existing findings, you must export them before you disable Security Hub.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableSecurityHub(
    args: DisableSecurityHubInput
  ): Promise<DisableSecurityHubOutput>;
  public disableSecurityHub(
    args: DisableSecurityHubInput,
    cb: (err: any, data?: DisableSecurityHubOutput) => void
  ): void;
  public disableSecurityHub(
    args: DisableSecurityHubInput,
    cb?: (err: any, data?: DisableSecurityHubOutput) => void
  ): Promise<DisableSecurityHubOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableSecurityHubCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the current Security Hub member account from the associated master account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountInput
  ): Promise<DisassociateFromMasterAccountOutput>;
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountInput,
    cb: (err: any, data?: DisassociateFromMasterAccountOutput) => void
  ): void;
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountInput,
    cb?: (err: any, data?: DisassociateFromMasterAccountOutput) => void
  ): Promise<DisassociateFromMasterAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateFromMasterAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the specified member accounts from the associated master account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateMembers(
    args: DisassociateMembersInput
  ): Promise<DisassociateMembersOutput>;
  public disassociateMembers(
    args: DisassociateMembersInput,
    cb: (err: any, data?: DisassociateMembersOutput) => void
  ): void;
  public disassociateMembers(
    args: DisassociateMembersInput,
    cb?: (err: any, data?: DisassociateMembersOutput) => void
  ): Promise<DisassociateMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables the integration of a partner product with Security Hub. Integrated products send findings to Security Hub. When you enable a product integration, a permission policy that grants permission for the product to send findings to Security Hub is applied.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {ResourceConflictException} <p>The resource specified in the request conflicts with an existing resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableImportFindingsForProduct(
    args: EnableImportFindingsForProductInput
  ): Promise<EnableImportFindingsForProductOutput>;
  public enableImportFindingsForProduct(
    args: EnableImportFindingsForProductInput,
    cb: (err: any, data?: EnableImportFindingsForProductOutput) => void
  ): void;
  public enableImportFindingsForProduct(
    args: EnableImportFindingsForProductInput,
    cb?: (err: any, data?: EnableImportFindingsForProductOutput) => void
  ): Promise<EnableImportFindingsForProductOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableImportFindingsForProductCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables Security Hub for your account in the current Region or the Region you specify in the request. When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from AWS Config, Amazon GuardDuty, Amazon Inspector, and Amazon Macie. To learn more, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">Setting Up AWS Security Hub</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {ResourceConflictException} <p>The resource specified in the request conflicts with an existing resource.</p>
   *   - {AccessDeniedException} <p>You don't have permission to perform the action specified in the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableSecurityHub(
    args: EnableSecurityHubInput
  ): Promise<EnableSecurityHubOutput>;
  public enableSecurityHub(
    args: EnableSecurityHubInput,
    cb: (err: any, data?: EnableSecurityHubOutput) => void
  ): void;
  public enableSecurityHub(
    args: EnableSecurityHubInput,
    cb?: (err: any, data?: EnableSecurityHubOutput) => void
  ): Promise<EnableSecurityHubOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableSecurityHubCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the standards that are currently enabled.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEnabledStandards(
    args: GetEnabledStandardsInput
  ): Promise<GetEnabledStandardsOutput>;
  public getEnabledStandards(
    args: GetEnabledStandardsInput,
    cb: (err: any, data?: GetEnabledStandardsOutput) => void
  ): void;
  public getEnabledStandards(
    args: GetEnabledStandardsInput,
    cb?: (err: any, data?: GetEnabledStandardsOutput) => void
  ): Promise<GetEnabledStandardsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEnabledStandardsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of findings that match the specified criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFindings(args: GetFindingsInput): Promise<GetFindingsOutput>;
  public getFindings(
    args: GetFindingsInput,
    cb: (err: any, data?: GetFindingsOutput) => void
  ): void;
  public getFindings(
    args: GetFindingsInput,
    cb?: (err: any, data?: GetFindingsOutput) => void
  ): Promise<GetFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the results of the Security Hub insight that the insight ARN specifies.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInsightResults(
    args: GetInsightResultsInput
  ): Promise<GetInsightResultsOutput>;
  public getInsightResults(
    args: GetInsightResultsInput,
    cb: (err: any, data?: GetInsightResultsOutput) => void
  ): void;
  public getInsightResults(
    args: GetInsightResultsInput,
    cb?: (err: any, data?: GetInsightResultsOutput) => void
  ): Promise<GetInsightResultsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInsightResultsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists and describes insights that insight ARNs specify.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInsights(args: GetInsightsInput): Promise<GetInsightsOutput>;
  public getInsights(
    args: GetInsightsInput,
    cb: (err: any, data?: GetInsightsOutput) => void
  ): void;
  public getInsights(
    args: GetInsightsInput,
    cb?: (err: any, data?: GetInsightsOutput) => void
  ): Promise<GetInsightsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInsightsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the count of all Security Hub membership invitations that were sent to the current member account, not including the currently accepted invitation. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInvitationsCount(
    args: GetInvitationsCountInput
  ): Promise<GetInvitationsCountOutput>;
  public getInvitationsCount(
    args: GetInvitationsCountInput,
    cb: (err: any, data?: GetInvitationsCountOutput) => void
  ): void;
  public getInvitationsCount(
    args: GetInvitationsCountInput,
    cb?: (err: any, data?: GetInvitationsCountOutput) => void
  ): Promise<GetInvitationsCountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInvitationsCountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides the details for the Security Hub master account to the current member account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMasterAccount(
    args: GetMasterAccountInput
  ): Promise<GetMasterAccountOutput>;
  public getMasterAccount(
    args: GetMasterAccountInput,
    cb: (err: any, data?: GetMasterAccountOutput) => void
  ): void;
  public getMasterAccount(
    args: GetMasterAccountInput,
    cb?: (err: any, data?: GetMasterAccountOutput) => void
  ): Promise<GetMasterAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMasterAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the details on the Security Hub member accounts that the account IDs specify.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMembers(args: GetMembersInput): Promise<GetMembersOutput>;
  public getMembers(
    args: GetMembersInput,
    cb: (err: any, data?: GetMembersOutput) => void
  ): void;
  public getMembers(
    args: GetMembersInput,
    cb?: (err: any, data?: GetMembersOutput) => void
  ): Promise<GetMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Invites other AWS accounts to become member accounts for the Security Hub master account that the invitation is sent from. Before you can use this action to invite a member, you must first create the member account in Security Hub by using the <a>CreateMembers</a> action. When the account owner accepts the invitation to become a member account and enables Security Hub, the master account can view the findings generated from member account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public inviteMembers(args: InviteMembersInput): Promise<InviteMembersOutput>;
  public inviteMembers(
    args: InviteMembersInput,
    cb: (err: any, data?: InviteMembersOutput) => void
  ): void;
  public inviteMembers(
    args: InviteMembersInput,
    cb?: (err: any, data?: InviteMembersOutput) => void
  ): Promise<InviteMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InviteMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all findings-generating solutions (products) whose findings you have subscribed to receive in Security Hub.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEnabledProductsForImport(
    args: ListEnabledProductsForImportInput
  ): Promise<ListEnabledProductsForImportOutput>;
  public listEnabledProductsForImport(
    args: ListEnabledProductsForImportInput,
    cb: (err: any, data?: ListEnabledProductsForImportOutput) => void
  ): void;
  public listEnabledProductsForImport(
    args: ListEnabledProductsForImportInput,
    cb?: (err: any, data?: ListEnabledProductsForImportOutput) => void
  ): Promise<ListEnabledProductsForImportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEnabledProductsForImportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all Security Hub membership invitations that were sent to the current AWS account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInvitations(
    args: ListInvitationsInput
  ): Promise<ListInvitationsOutput>;
  public listInvitations(
    args: ListInvitationsInput,
    cb: (err: any, data?: ListInvitationsOutput) => void
  ): void;
  public listInvitations(
    args: ListInvitationsInput,
    cb?: (err: any, data?: ListInvitationsOutput) => void
  ): Promise<ListInvitationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInvitationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists details about all member accounts for the current Security Hub master account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMembers(args: ListMembersInput): Promise<ListMembersOutput>;
  public listMembers(
    args: ListMembersInput,
    cb: (err: any, data?: ListMembersOutput) => void
  ): void;
  public listMembers(
    args: ListMembersInput,
    cb?: (err: any, data?: ListMembersOutput) => void
  ): Promise<ListMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of tags associated with a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
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
   * <p>Adds one or more tags to a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
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
   * <p>Removes one or more tags from a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
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
   * <p>Updates the name and description of a custom action target in Security Hub.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateActionTarget(
    args: UpdateActionTargetInput
  ): Promise<UpdateActionTargetOutput>;
  public updateActionTarget(
    args: UpdateActionTargetInput,
    cb: (err: any, data?: UpdateActionTargetOutput) => void
  ): void;
  public updateActionTarget(
    args: UpdateActionTargetInput,
    cb?: (err: any, data?: UpdateActionTargetOutput) => void
  ): Promise<UpdateActionTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateActionTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFindings(
    args: UpdateFindingsInput
  ): Promise<UpdateFindingsOutput>;
  public updateFindings(
    args: UpdateFindingsInput,
    cb: (err: any, data?: UpdateFindingsOutput) => void
  ): void;
  public updateFindings(
    args: UpdateFindingsInput,
    cb?: (err: any, data?: UpdateFindingsOutput) => void
  ): Promise<UpdateFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the Security Hub insight that the insight ARN specifies.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
   *   - {InvalidAccessException} <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because we can't find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateInsight(args: UpdateInsightInput): Promise<UpdateInsightOutput>;
  public updateInsight(
    args: UpdateInsightInput,
    cb: (err: any, data?: UpdateInsightOutput) => void
  ): void;
  public updateInsight(
    args: UpdateInsightInput,
    cb?: (err: any, data?: UpdateInsightOutput) => void
  ): Promise<UpdateInsightOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateInsightCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
