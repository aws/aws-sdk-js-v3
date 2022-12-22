// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateMemberCommand,
  AssociateMemberCommandInput,
  AssociateMemberCommandOutput,
} from "./commands/AssociateMemberCommand";
import {
  BatchGetAccountStatusCommand,
  BatchGetAccountStatusCommandInput,
  BatchGetAccountStatusCommandOutput,
} from "./commands/BatchGetAccountStatusCommand";
import {
  BatchGetFreeTrialInfoCommand,
  BatchGetFreeTrialInfoCommandInput,
  BatchGetFreeTrialInfoCommandOutput,
} from "./commands/BatchGetFreeTrialInfoCommand";
import {
  CancelFindingsReportCommand,
  CancelFindingsReportCommandInput,
  CancelFindingsReportCommandOutput,
} from "./commands/CancelFindingsReportCommand";
import {
  CreateFilterCommand,
  CreateFilterCommandInput,
  CreateFilterCommandOutput,
} from "./commands/CreateFilterCommand";
import {
  CreateFindingsReportCommand,
  CreateFindingsReportCommandInput,
  CreateFindingsReportCommandOutput,
} from "./commands/CreateFindingsReportCommand";
import {
  DeleteFilterCommand,
  DeleteFilterCommandInput,
  DeleteFilterCommandOutput,
} from "./commands/DeleteFilterCommand";
import {
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import { DisableCommand, DisableCommandInput, DisableCommandOutput } from "./commands/DisableCommand";
import {
  DisableDelegatedAdminAccountCommand,
  DisableDelegatedAdminAccountCommandInput,
  DisableDelegatedAdminAccountCommandOutput,
} from "./commands/DisableDelegatedAdminAccountCommand";
import {
  DisassociateMemberCommand,
  DisassociateMemberCommandInput,
  DisassociateMemberCommandOutput,
} from "./commands/DisassociateMemberCommand";
import { EnableCommand, EnableCommandInput, EnableCommandOutput } from "./commands/EnableCommand";
import {
  EnableDelegatedAdminAccountCommand,
  EnableDelegatedAdminAccountCommandInput,
  EnableDelegatedAdminAccountCommandOutput,
} from "./commands/EnableDelegatedAdminAccountCommand";
import {
  GetConfigurationCommand,
  GetConfigurationCommandInput,
  GetConfigurationCommandOutput,
} from "./commands/GetConfigurationCommand";
import {
  GetDelegatedAdminAccountCommand,
  GetDelegatedAdminAccountCommandInput,
  GetDelegatedAdminAccountCommandOutput,
} from "./commands/GetDelegatedAdminAccountCommand";
import {
  GetFindingsReportStatusCommand,
  GetFindingsReportStatusCommandInput,
  GetFindingsReportStatusCommandOutput,
} from "./commands/GetFindingsReportStatusCommand";
import { GetMemberCommand, GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand";
import {
  ListAccountPermissionsCommand,
  ListAccountPermissionsCommandInput,
  ListAccountPermissionsCommandOutput,
} from "./commands/ListAccountPermissionsCommand";
import {
  ListCoverageCommand,
  ListCoverageCommandInput,
  ListCoverageCommandOutput,
} from "./commands/ListCoverageCommand";
import {
  ListCoverageStatisticsCommand,
  ListCoverageStatisticsCommandInput,
  ListCoverageStatisticsCommandOutput,
} from "./commands/ListCoverageStatisticsCommand";
import {
  ListDelegatedAdminAccountsCommand,
  ListDelegatedAdminAccountsCommandInput,
  ListDelegatedAdminAccountsCommandOutput,
} from "./commands/ListDelegatedAdminAccountsCommand";
import { ListFiltersCommand, ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import {
  ListFindingAggregationsCommand,
  ListFindingAggregationsCommandInput,
  ListFindingAggregationsCommandOutput,
} from "./commands/ListFindingAggregationsCommand";
import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "./commands/ListFindingsCommand";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListUsageTotalsCommand,
  ListUsageTotalsCommandInput,
  ListUsageTotalsCommandOutput,
} from "./commands/ListUsageTotalsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConfigurationCommand,
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "./commands/UpdateConfigurationCommand";
import {
  UpdateFilterCommand,
  UpdateFilterCommandInput,
  UpdateFilterCommandOutput,
} from "./commands/UpdateFilterCommand";
import {
  UpdateOrganizationConfigurationCommand,
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import { Inspector2Client } from "./Inspector2Client";

/**
 * <p>Amazon Inspector is a vulnerability discovery service that automates continuous scanning for
 *          security vulnerabilities within your Amazon EC2 and Amazon ECR environments.</p>
 */
export class Inspector2 extends Inspector2Client {
  /**
   * <p>Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.</p>
   */
  public associateMember(
    args: AssociateMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMemberCommandOutput>;
  public associateMember(
    args: AssociateMemberCommandInput,
    cb: (err: any, data?: AssociateMemberCommandOutput) => void
  ): void;
  public associateMember(
    args: AssociateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMemberCommandOutput) => void
  ): void;
  public associateMember(
    args: AssociateMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateMemberCommandOutput) => void),
    cb?: (err: any, data?: AssociateMemberCommandOutput) => void
  ): Promise<AssociateMemberCommandOutput> | void {
    const command = new AssociateMemberCommand(args);
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
   * <p>Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.</p>
   */
  public batchGetAccountStatus(
    args: BatchGetAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetAccountStatusCommandOutput>;
  public batchGetAccountStatus(
    args: BatchGetAccountStatusCommandInput,
    cb: (err: any, data?: BatchGetAccountStatusCommandOutput) => void
  ): void;
  public batchGetAccountStatus(
    args: BatchGetAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetAccountStatusCommandOutput) => void
  ): void;
  public batchGetAccountStatus(
    args: BatchGetAccountStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetAccountStatusCommandOutput) => void),
    cb?: (err: any, data?: BatchGetAccountStatusCommandOutput) => void
  ): Promise<BatchGetAccountStatusCommandOutput> | void {
    const command = new BatchGetAccountStatusCommand(args);
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
   * <p>Gets free trial status for multiple Amazon Web Services accounts.</p>
   */
  public batchGetFreeTrialInfo(
    args: BatchGetFreeTrialInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetFreeTrialInfoCommandOutput>;
  public batchGetFreeTrialInfo(
    args: BatchGetFreeTrialInfoCommandInput,
    cb: (err: any, data?: BatchGetFreeTrialInfoCommandOutput) => void
  ): void;
  public batchGetFreeTrialInfo(
    args: BatchGetFreeTrialInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetFreeTrialInfoCommandOutput) => void
  ): void;
  public batchGetFreeTrialInfo(
    args: BatchGetFreeTrialInfoCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetFreeTrialInfoCommandOutput) => void),
    cb?: (err: any, data?: BatchGetFreeTrialInfoCommandOutput) => void
  ): Promise<BatchGetFreeTrialInfoCommandOutput> | void {
    const command = new BatchGetFreeTrialInfoCommand(args);
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
   * <p>Cancels the given findings report.</p>
   */
  public cancelFindingsReport(
    args: CancelFindingsReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelFindingsReportCommandOutput>;
  public cancelFindingsReport(
    args: CancelFindingsReportCommandInput,
    cb: (err: any, data?: CancelFindingsReportCommandOutput) => void
  ): void;
  public cancelFindingsReport(
    args: CancelFindingsReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelFindingsReportCommandOutput) => void
  ): void;
  public cancelFindingsReport(
    args: CancelFindingsReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelFindingsReportCommandOutput) => void),
    cb?: (err: any, data?: CancelFindingsReportCommandOutput) => void
  ): Promise<CancelFindingsReportCommandOutput> | void {
    const command = new CancelFindingsReportCommand(args);
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
   * <p>Creates a filter resource using specified filter criteria.</p>
   */
  public createFilter(
    args: CreateFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFilterCommandOutput>;
  public createFilter(args: CreateFilterCommandInput, cb: (err: any, data?: CreateFilterCommandOutput) => void): void;
  public createFilter(
    args: CreateFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFilterCommandOutput) => void
  ): void;
  public createFilter(
    args: CreateFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFilterCommandOutput) => void),
    cb?: (err: any, data?: CreateFilterCommandOutput) => void
  ): Promise<CreateFilterCommandOutput> | void {
    const command = new CreateFilterCommand(args);
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
   * <p>Creates a finding report.</p>
   */
  public createFindingsReport(
    args: CreateFindingsReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFindingsReportCommandOutput>;
  public createFindingsReport(
    args: CreateFindingsReportCommandInput,
    cb: (err: any, data?: CreateFindingsReportCommandOutput) => void
  ): void;
  public createFindingsReport(
    args: CreateFindingsReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFindingsReportCommandOutput) => void
  ): void;
  public createFindingsReport(
    args: CreateFindingsReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFindingsReportCommandOutput) => void),
    cb?: (err: any, data?: CreateFindingsReportCommandOutput) => void
  ): Promise<CreateFindingsReportCommandOutput> | void {
    const command = new CreateFindingsReportCommand(args);
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
   * <p>Deletes a filter resource.</p>
   */
  public deleteFilter(
    args: DeleteFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFilterCommandOutput>;
  public deleteFilter(args: DeleteFilterCommandInput, cb: (err: any, data?: DeleteFilterCommandOutput) => void): void;
  public deleteFilter(
    args: DeleteFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFilterCommandOutput) => void
  ): void;
  public deleteFilter(
    args: DeleteFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFilterCommandOutput) => void),
    cb?: (err: any, data?: DeleteFilterCommandOutput) => void
  ): Promise<DeleteFilterCommandOutput> | void {
    const command = new DeleteFilterCommand(args);
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
   * <p>Describe Amazon Inspector configuration settings for an Amazon Web Services organization.</p>
   */
  public describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConfigurationCommandOutput>;
  public describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;
  public describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;
  public describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): Promise<DescribeOrganizationConfigurationCommandOutput> | void {
    const command = new DescribeOrganizationConfigurationCommand(args);
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
   * <p>Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account
   *          disables the Amazon Inspector service.</p>
   */
  public disable(args: DisableCommandInput, options?: __HttpHandlerOptions): Promise<DisableCommandOutput>;
  public disable(args: DisableCommandInput, cb: (err: any, data?: DisableCommandOutput) => void): void;
  public disable(
    args: DisableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableCommandOutput) => void
  ): void;
  public disable(
    args: DisableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableCommandOutput) => void),
    cb?: (err: any, data?: DisableCommandOutput) => void
  ): Promise<DisableCommandOutput> | void {
    const command = new DisableCommand(args);
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
   * <p>Disables the Amazon Inspector delegated administrator for your organization.</p>
   */
  public disableDelegatedAdminAccount(
    args: DisableDelegatedAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableDelegatedAdminAccountCommandOutput>;
  public disableDelegatedAdminAccount(
    args: DisableDelegatedAdminAccountCommandInput,
    cb: (err: any, data?: DisableDelegatedAdminAccountCommandOutput) => void
  ): void;
  public disableDelegatedAdminAccount(
    args: DisableDelegatedAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableDelegatedAdminAccountCommandOutput) => void
  ): void;
  public disableDelegatedAdminAccount(
    args: DisableDelegatedAdminAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableDelegatedAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: DisableDelegatedAdminAccountCommandOutput) => void
  ): Promise<DisableDelegatedAdminAccountCommandOutput> | void {
    const command = new DisableDelegatedAdminAccountCommand(args);
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
   * <p>Disassociates a member account from an Amazon Inspector delegated administrator.</p>
   */
  public disassociateMember(
    args: DisassociateMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMemberCommandOutput>;
  public disassociateMember(
    args: DisassociateMemberCommandInput,
    cb: (err: any, data?: DisassociateMemberCommandOutput) => void
  ): void;
  public disassociateMember(
    args: DisassociateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMemberCommandOutput) => void
  ): void;
  public disassociateMember(
    args: DisassociateMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateMemberCommandOutput) => void),
    cb?: (err: any, data?: DisassociateMemberCommandOutput) => void
  ): Promise<DisassociateMemberCommandOutput> | void {
    const command = new DisassociateMemberCommand(args);
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
   * <p>Enables Amazon Inspector scans for one or more Amazon Web Services accounts.</p>
   */
  public enable(args: EnableCommandInput, options?: __HttpHandlerOptions): Promise<EnableCommandOutput>;
  public enable(args: EnableCommandInput, cb: (err: any, data?: EnableCommandOutput) => void): void;
  public enable(
    args: EnableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableCommandOutput) => void
  ): void;
  public enable(
    args: EnableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableCommandOutput) => void),
    cb?: (err: any, data?: EnableCommandOutput) => void
  ): Promise<EnableCommandOutput> | void {
    const command = new EnableCommand(args);
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
   * <p>Enables the Amazon Inspector delegated administrator for your Organizations organization.</p>
   */
  public enableDelegatedAdminAccount(
    args: EnableDelegatedAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableDelegatedAdminAccountCommandOutput>;
  public enableDelegatedAdminAccount(
    args: EnableDelegatedAdminAccountCommandInput,
    cb: (err: any, data?: EnableDelegatedAdminAccountCommandOutput) => void
  ): void;
  public enableDelegatedAdminAccount(
    args: EnableDelegatedAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableDelegatedAdminAccountCommandOutput) => void
  ): void;
  public enableDelegatedAdminAccount(
    args: EnableDelegatedAdminAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableDelegatedAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: EnableDelegatedAdminAccountCommandOutput) => void
  ): Promise<EnableDelegatedAdminAccountCommandOutput> | void {
    const command = new EnableDelegatedAdminAccountCommand(args);
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
   * <p>Retrieves setting configurations for Inspector scans.</p>
   */
  public getConfiguration(
    args: GetConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationCommandOutput>;
  public getConfiguration(
    args: GetConfigurationCommandInput,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  public getConfiguration(
    args: GetConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  public getConfiguration(
    args: GetConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetConfigurationCommandOutput) => void
  ): Promise<GetConfigurationCommandOutput> | void {
    const command = new GetConfigurationCommand(args);
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
   * <p>Retrieves information about the Amazon Inspector delegated administrator for your
   *          organization.</p>
   */
  public getDelegatedAdminAccount(
    args: GetDelegatedAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDelegatedAdminAccountCommandOutput>;
  public getDelegatedAdminAccount(
    args: GetDelegatedAdminAccountCommandInput,
    cb: (err: any, data?: GetDelegatedAdminAccountCommandOutput) => void
  ): void;
  public getDelegatedAdminAccount(
    args: GetDelegatedAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDelegatedAdminAccountCommandOutput) => void
  ): void;
  public getDelegatedAdminAccount(
    args: GetDelegatedAdminAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDelegatedAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: GetDelegatedAdminAccountCommandOutput) => void
  ): Promise<GetDelegatedAdminAccountCommandOutput> | void {
    const command = new GetDelegatedAdminAccountCommand(args);
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
   * <p>Gets the status of a findings report.</p>
   */
  public getFindingsReportStatus(
    args: GetFindingsReportStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsReportStatusCommandOutput>;
  public getFindingsReportStatus(
    args: GetFindingsReportStatusCommandInput,
    cb: (err: any, data?: GetFindingsReportStatusCommandOutput) => void
  ): void;
  public getFindingsReportStatus(
    args: GetFindingsReportStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsReportStatusCommandOutput) => void
  ): void;
  public getFindingsReportStatus(
    args: GetFindingsReportStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFindingsReportStatusCommandOutput) => void),
    cb?: (err: any, data?: GetFindingsReportStatusCommandOutput) => void
  ): Promise<GetFindingsReportStatusCommandOutput> | void {
    const command = new GetFindingsReportStatusCommand(args);
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
   * <p>Gets member information for your organization.</p>
   */
  public getMember(args: GetMemberCommandInput, options?: __HttpHandlerOptions): Promise<GetMemberCommandOutput>;
  public getMember(args: GetMemberCommandInput, cb: (err: any, data?: GetMemberCommandOutput) => void): void;
  public getMember(
    args: GetMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemberCommandOutput) => void
  ): void;
  public getMember(
    args: GetMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMemberCommandOutput) => void),
    cb?: (err: any, data?: GetMemberCommandOutput) => void
  ): Promise<GetMemberCommandOutput> | void {
    const command = new GetMemberCommand(args);
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
   * <p>Lists the permissions an account has to configure Amazon Inspector.</p>
   */
  public listAccountPermissions(
    args: ListAccountPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountPermissionsCommandOutput>;
  public listAccountPermissions(
    args: ListAccountPermissionsCommandInput,
    cb: (err: any, data?: ListAccountPermissionsCommandOutput) => void
  ): void;
  public listAccountPermissions(
    args: ListAccountPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountPermissionsCommandOutput) => void
  ): void;
  public listAccountPermissions(
    args: ListAccountPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountPermissionsCommandOutput) => void),
    cb?: (err: any, data?: ListAccountPermissionsCommandOutput) => void
  ): Promise<ListAccountPermissionsCommandOutput> | void {
    const command = new ListAccountPermissionsCommand(args);
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
   * <p>Lists coverage details for you environment.</p>
   */
  public listCoverage(
    args: ListCoverageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoverageCommandOutput>;
  public listCoverage(args: ListCoverageCommandInput, cb: (err: any, data?: ListCoverageCommandOutput) => void): void;
  public listCoverage(
    args: ListCoverageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoverageCommandOutput) => void
  ): void;
  public listCoverage(
    args: ListCoverageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCoverageCommandOutput) => void),
    cb?: (err: any, data?: ListCoverageCommandOutput) => void
  ): Promise<ListCoverageCommandOutput> | void {
    const command = new ListCoverageCommand(args);
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
   * <p>Lists Amazon Inspector coverage statistics for your environment.</p>
   */
  public listCoverageStatistics(
    args: ListCoverageStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoverageStatisticsCommandOutput>;
  public listCoverageStatistics(
    args: ListCoverageStatisticsCommandInput,
    cb: (err: any, data?: ListCoverageStatisticsCommandOutput) => void
  ): void;
  public listCoverageStatistics(
    args: ListCoverageStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoverageStatisticsCommandOutput) => void
  ): void;
  public listCoverageStatistics(
    args: ListCoverageStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCoverageStatisticsCommandOutput) => void),
    cb?: (err: any, data?: ListCoverageStatisticsCommandOutput) => void
  ): Promise<ListCoverageStatisticsCommandOutput> | void {
    const command = new ListCoverageStatisticsCommand(args);
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
   * <p>Lists information about the Amazon Inspector delegated administrator of your
   *          organization.</p>
   */
  public listDelegatedAdminAccounts(
    args: ListDelegatedAdminAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDelegatedAdminAccountsCommandOutput>;
  public listDelegatedAdminAccounts(
    args: ListDelegatedAdminAccountsCommandInput,
    cb: (err: any, data?: ListDelegatedAdminAccountsCommandOutput) => void
  ): void;
  public listDelegatedAdminAccounts(
    args: ListDelegatedAdminAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDelegatedAdminAccountsCommandOutput) => void
  ): void;
  public listDelegatedAdminAccounts(
    args: ListDelegatedAdminAccountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDelegatedAdminAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListDelegatedAdminAccountsCommandOutput) => void
  ): Promise<ListDelegatedAdminAccountsCommandOutput> | void {
    const command = new ListDelegatedAdminAccountsCommand(args);
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
   * <p>Lists the filters associated with your account.</p>
   */
  public listFilters(args: ListFiltersCommandInput, options?: __HttpHandlerOptions): Promise<ListFiltersCommandOutput>;
  public listFilters(args: ListFiltersCommandInput, cb: (err: any, data?: ListFiltersCommandOutput) => void): void;
  public listFilters(
    args: ListFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFiltersCommandOutput) => void
  ): void;
  public listFilters(
    args: ListFiltersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFiltersCommandOutput) => void),
    cb?: (err: any, data?: ListFiltersCommandOutput) => void
  ): Promise<ListFiltersCommandOutput> | void {
    const command = new ListFiltersCommand(args);
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
   * <p>Lists aggregated finding data for your environment based on specific criteria.</p>
   */
  public listFindingAggregations(
    args: ListFindingAggregationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingAggregationsCommandOutput>;
  public listFindingAggregations(
    args: ListFindingAggregationsCommandInput,
    cb: (err: any, data?: ListFindingAggregationsCommandOutput) => void
  ): void;
  public listFindingAggregations(
    args: ListFindingAggregationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingAggregationsCommandOutput) => void
  ): void;
  public listFindingAggregations(
    args: ListFindingAggregationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFindingAggregationsCommandOutput) => void),
    cb?: (err: any, data?: ListFindingAggregationsCommandOutput) => void
  ): Promise<ListFindingAggregationsCommandOutput> | void {
    const command = new ListFindingAggregationsCommand(args);
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
   * <p>Lists findings for your environment.</p>
   */
  public listFindings(
    args: ListFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsCommandOutput>;
  public listFindings(args: ListFindingsCommandInput, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
  public listFindings(
    args: ListFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;
  public listFindings(
    args: ListFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFindingsCommandOutput) => void),
    cb?: (err: any, data?: ListFindingsCommandOutput) => void
  ): Promise<ListFindingsCommandOutput> | void {
    const command = new ListFindingsCommand(args);
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
   * <p>List members associated with the Amazon Inspector delegated administrator for your
   *          organization.</p>
   */
  public listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
  public listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
  public listMembers(
    args: ListMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;
  public listMembers(
    args: ListMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMembersCommandOutput) => void),
    cb?: (err: any, data?: ListMembersCommandOutput) => void
  ): Promise<ListMembersCommandOutput> | void {
    const command = new ListMembersCommand(args);
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
   * <p>Lists all tags attached to a given resource.</p>
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
   * <p>Lists the Amazon Inspector usage totals over the last 30 days.</p>
   */
  public listUsageTotals(
    args: ListUsageTotalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsageTotalsCommandOutput>;
  public listUsageTotals(
    args: ListUsageTotalsCommandInput,
    cb: (err: any, data?: ListUsageTotalsCommandOutput) => void
  ): void;
  public listUsageTotals(
    args: ListUsageTotalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsageTotalsCommandOutput) => void
  ): void;
  public listUsageTotals(
    args: ListUsageTotalsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsageTotalsCommandOutput) => void),
    cb?: (err: any, data?: ListUsageTotalsCommandOutput) => void
  ): Promise<ListUsageTotalsCommandOutput> | void {
    const command = new ListUsageTotalsCommand(args);
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
   * <p>Adds tags to a resource.</p>
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
   * <p>Removes tags from a resource.</p>
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
   * <p>Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.</p>
   */
  public updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationCommandOutput>;
  public updateConfiguration(
    args: UpdateConfigurationCommandInput,
    cb: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): void;
  public updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): void;
  public updateConfiguration(
    args: UpdateConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): Promise<UpdateConfigurationCommandOutput> | void {
    const command = new UpdateConfigurationCommand(args);
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
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  public updateFilter(
    args: UpdateFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFilterCommandOutput>;
  public updateFilter(args: UpdateFilterCommandInput, cb: (err: any, data?: UpdateFilterCommandOutput) => void): void;
  public updateFilter(
    args: UpdateFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFilterCommandOutput) => void
  ): void;
  public updateFilter(
    args: UpdateFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFilterCommandOutput) => void),
    cb?: (err: any, data?: UpdateFilterCommandOutput) => void
  ): Promise<UpdateFilterCommandOutput> | void {
    const command = new UpdateFilterCommand(args);
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
   * <p>Updates the configurations for your Amazon Inspector organization.</p>
   */
  public updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOrganizationConfigurationCommandOutput>;
  public updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;
  public updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;
  public updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): Promise<UpdateOrganizationConfigurationCommandOutput> | void {
    const command = new UpdateOrganizationConfigurationCommand(args);
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
