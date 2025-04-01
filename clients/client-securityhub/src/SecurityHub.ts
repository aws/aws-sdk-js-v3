// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptAdministratorInvitationCommand,
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
} from "./commands/AcceptAdministratorInvitationCommand";
import {
  AcceptInvitationCommand,
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput,
} from "./commands/AcceptInvitationCommand";
import {
  BatchDeleteAutomationRulesCommand,
  BatchDeleteAutomationRulesCommandInput,
  BatchDeleteAutomationRulesCommandOutput,
} from "./commands/BatchDeleteAutomationRulesCommand";
import {
  BatchDisableStandardsCommand,
  BatchDisableStandardsCommandInput,
  BatchDisableStandardsCommandOutput,
} from "./commands/BatchDisableStandardsCommand";
import {
  BatchEnableStandardsCommand,
  BatchEnableStandardsCommandInput,
  BatchEnableStandardsCommandOutput,
} from "./commands/BatchEnableStandardsCommand";
import {
  BatchGetAutomationRulesCommand,
  BatchGetAutomationRulesCommandInput,
  BatchGetAutomationRulesCommandOutput,
} from "./commands/BatchGetAutomationRulesCommand";
import {
  BatchGetConfigurationPolicyAssociationsCommand,
  BatchGetConfigurationPolicyAssociationsCommandInput,
  BatchGetConfigurationPolicyAssociationsCommandOutput,
} from "./commands/BatchGetConfigurationPolicyAssociationsCommand";
import {
  BatchGetSecurityControlsCommand,
  BatchGetSecurityControlsCommandInput,
  BatchGetSecurityControlsCommandOutput,
} from "./commands/BatchGetSecurityControlsCommand";
import {
  BatchGetStandardsControlAssociationsCommand,
  BatchGetStandardsControlAssociationsCommandInput,
  BatchGetStandardsControlAssociationsCommandOutput,
} from "./commands/BatchGetStandardsControlAssociationsCommand";
import {
  BatchImportFindingsCommand,
  BatchImportFindingsCommandInput,
  BatchImportFindingsCommandOutput,
} from "./commands/BatchImportFindingsCommand";
import {
  BatchUpdateAutomationRulesCommand,
  BatchUpdateAutomationRulesCommandInput,
  BatchUpdateAutomationRulesCommandOutput,
} from "./commands/BatchUpdateAutomationRulesCommand";
import {
  BatchUpdateFindingsCommand,
  BatchUpdateFindingsCommandInput,
  BatchUpdateFindingsCommandOutput,
} from "./commands/BatchUpdateFindingsCommand";
import {
  BatchUpdateStandardsControlAssociationsCommand,
  BatchUpdateStandardsControlAssociationsCommandInput,
  BatchUpdateStandardsControlAssociationsCommandOutput,
} from "./commands/BatchUpdateStandardsControlAssociationsCommand";
import {
  CreateActionTargetCommand,
  CreateActionTargetCommandInput,
  CreateActionTargetCommandOutput,
} from "./commands/CreateActionTargetCommand";
import {
  CreateAutomationRuleCommand,
  CreateAutomationRuleCommandInput,
  CreateAutomationRuleCommandOutput,
} from "./commands/CreateAutomationRuleCommand";
import {
  CreateConfigurationPolicyCommand,
  CreateConfigurationPolicyCommandInput,
  CreateConfigurationPolicyCommandOutput,
} from "./commands/CreateConfigurationPolicyCommand";
import {
  CreateFindingAggregatorCommand,
  CreateFindingAggregatorCommandInput,
  CreateFindingAggregatorCommandOutput,
} from "./commands/CreateFindingAggregatorCommand";
import {
  CreateInsightCommand,
  CreateInsightCommandInput,
  CreateInsightCommandOutput,
} from "./commands/CreateInsightCommand";
import {
  CreateMembersCommand,
  CreateMembersCommandInput,
  CreateMembersCommandOutput,
} from "./commands/CreateMembersCommand";
import {
  DeclineInvitationsCommand,
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput,
} from "./commands/DeclineInvitationsCommand";
import {
  DeleteActionTargetCommand,
  DeleteActionTargetCommandInput,
  DeleteActionTargetCommandOutput,
} from "./commands/DeleteActionTargetCommand";
import {
  DeleteConfigurationPolicyCommand,
  DeleteConfigurationPolicyCommandInput,
  DeleteConfigurationPolicyCommandOutput,
} from "./commands/DeleteConfigurationPolicyCommand";
import {
  DeleteFindingAggregatorCommand,
  DeleteFindingAggregatorCommandInput,
  DeleteFindingAggregatorCommandOutput,
} from "./commands/DeleteFindingAggregatorCommand";
import {
  DeleteInsightCommand,
  DeleteInsightCommandInput,
  DeleteInsightCommandOutput,
} from "./commands/DeleteInsightCommand";
import {
  DeleteInvitationsCommand,
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput,
} from "./commands/DeleteInvitationsCommand";
import {
  DeleteMembersCommand,
  DeleteMembersCommandInput,
  DeleteMembersCommandOutput,
} from "./commands/DeleteMembersCommand";
import {
  DescribeActionTargetsCommand,
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput,
} from "./commands/DescribeActionTargetsCommand";
import { DescribeHubCommand, DescribeHubCommandInput, DescribeHubCommandOutput } from "./commands/DescribeHubCommand";
import {
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import {
  DescribeProductsCommand,
  DescribeProductsCommandInput,
  DescribeProductsCommandOutput,
} from "./commands/DescribeProductsCommand";
import {
  DescribeStandardsCommand,
  DescribeStandardsCommandInput,
  DescribeStandardsCommandOutput,
} from "./commands/DescribeStandardsCommand";
import {
  DescribeStandardsControlsCommand,
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput,
} from "./commands/DescribeStandardsControlsCommand";
import {
  DisableImportFindingsForProductCommand,
  DisableImportFindingsForProductCommandInput,
  DisableImportFindingsForProductCommandOutput,
} from "./commands/DisableImportFindingsForProductCommand";
import {
  DisableOrganizationAdminAccountCommand,
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "./commands/DisableOrganizationAdminAccountCommand";
import {
  DisableSecurityHubCommand,
  DisableSecurityHubCommandInput,
  DisableSecurityHubCommandOutput,
} from "./commands/DisableSecurityHubCommand";
import {
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromAdministratorAccountCommandInput,
  DisassociateFromAdministratorAccountCommandOutput,
} from "./commands/DisassociateFromAdministratorAccountCommand";
import {
  DisassociateFromMasterAccountCommand,
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "./commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommand,
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
} from "./commands/DisassociateMembersCommand";
import {
  EnableImportFindingsForProductCommand,
  EnableImportFindingsForProductCommandInput,
  EnableImportFindingsForProductCommandOutput,
} from "./commands/EnableImportFindingsForProductCommand";
import {
  EnableOrganizationAdminAccountCommand,
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "./commands/EnableOrganizationAdminAccountCommand";
import {
  EnableSecurityHubCommand,
  EnableSecurityHubCommandInput,
  EnableSecurityHubCommandOutput,
} from "./commands/EnableSecurityHubCommand";
import {
  GetAdministratorAccountCommand,
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "./commands/GetAdministratorAccountCommand";
import {
  GetConfigurationPolicyAssociationCommand,
  GetConfigurationPolicyAssociationCommandInput,
  GetConfigurationPolicyAssociationCommandOutput,
} from "./commands/GetConfigurationPolicyAssociationCommand";
import {
  GetConfigurationPolicyCommand,
  GetConfigurationPolicyCommandInput,
  GetConfigurationPolicyCommandOutput,
} from "./commands/GetConfigurationPolicyCommand";
import {
  GetEnabledStandardsCommand,
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
} from "./commands/GetEnabledStandardsCommand";
import {
  GetFindingAggregatorCommand,
  GetFindingAggregatorCommandInput,
  GetFindingAggregatorCommandOutput,
} from "./commands/GetFindingAggregatorCommand";
import {
  GetFindingHistoryCommand,
  GetFindingHistoryCommandInput,
  GetFindingHistoryCommandOutput,
} from "./commands/GetFindingHistoryCommand";
import { GetFindingsCommand, GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import {
  GetInsightResultsCommand,
  GetInsightResultsCommandInput,
  GetInsightResultsCommandOutput,
} from "./commands/GetInsightResultsCommand";
import { GetInsightsCommand, GetInsightsCommandInput, GetInsightsCommandOutput } from "./commands/GetInsightsCommand";
import {
  GetInvitationsCountCommand,
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand";
import {
  GetMasterAccountCommand,
  GetMasterAccountCommandInput,
  GetMasterAccountCommandOutput,
} from "./commands/GetMasterAccountCommand";
import { GetMembersCommand, GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import {
  GetSecurityControlDefinitionCommand,
  GetSecurityControlDefinitionCommandInput,
  GetSecurityControlDefinitionCommandOutput,
} from "./commands/GetSecurityControlDefinitionCommand";
import {
  InviteMembersCommand,
  InviteMembersCommandInput,
  InviteMembersCommandOutput,
} from "./commands/InviteMembersCommand";
import {
  ListAutomationRulesCommand,
  ListAutomationRulesCommandInput,
  ListAutomationRulesCommandOutput,
} from "./commands/ListAutomationRulesCommand";
import {
  ListConfigurationPoliciesCommand,
  ListConfigurationPoliciesCommandInput,
  ListConfigurationPoliciesCommandOutput,
} from "./commands/ListConfigurationPoliciesCommand";
import {
  ListConfigurationPolicyAssociationsCommand,
  ListConfigurationPolicyAssociationsCommandInput,
  ListConfigurationPolicyAssociationsCommandOutput,
} from "./commands/ListConfigurationPolicyAssociationsCommand";
import {
  ListEnabledProductsForImportCommand,
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
} from "./commands/ListEnabledProductsForImportCommand";
import {
  ListFindingAggregatorsCommand,
  ListFindingAggregatorsCommandInput,
  ListFindingAggregatorsCommandOutput,
} from "./commands/ListFindingAggregatorsCommand";
import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "./commands/ListInvitationsCommand";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "./commands/ListOrganizationAdminAccountsCommand";
import {
  ListSecurityControlDefinitionsCommand,
  ListSecurityControlDefinitionsCommandInput,
  ListSecurityControlDefinitionsCommandOutput,
} from "./commands/ListSecurityControlDefinitionsCommand";
import {
  ListStandardsControlAssociationsCommand,
  ListStandardsControlAssociationsCommandInput,
  ListStandardsControlAssociationsCommandOutput,
} from "./commands/ListStandardsControlAssociationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartConfigurationPolicyAssociationCommand,
  StartConfigurationPolicyAssociationCommandInput,
  StartConfigurationPolicyAssociationCommandOutput,
} from "./commands/StartConfigurationPolicyAssociationCommand";
import {
  StartConfigurationPolicyDisassociationCommand,
  StartConfigurationPolicyDisassociationCommandInput,
  StartConfigurationPolicyDisassociationCommandOutput,
} from "./commands/StartConfigurationPolicyDisassociationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateActionTargetCommand,
  UpdateActionTargetCommandInput,
  UpdateActionTargetCommandOutput,
} from "./commands/UpdateActionTargetCommand";
import {
  UpdateConfigurationPolicyCommand,
  UpdateConfigurationPolicyCommandInput,
  UpdateConfigurationPolicyCommandOutput,
} from "./commands/UpdateConfigurationPolicyCommand";
import {
  UpdateFindingAggregatorCommand,
  UpdateFindingAggregatorCommandInput,
  UpdateFindingAggregatorCommandOutput,
} from "./commands/UpdateFindingAggregatorCommand";
import {
  UpdateFindingsCommand,
  UpdateFindingsCommandInput,
  UpdateFindingsCommandOutput,
} from "./commands/UpdateFindingsCommand";
import {
  UpdateInsightCommand,
  UpdateInsightCommandInput,
  UpdateInsightCommandOutput,
} from "./commands/UpdateInsightCommand";
import {
  UpdateOrganizationConfigurationCommand,
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import {
  UpdateSecurityControlCommand,
  UpdateSecurityControlCommandInput,
  UpdateSecurityControlCommandOutput,
} from "./commands/UpdateSecurityControlCommand";
import {
  UpdateSecurityHubConfigurationCommand,
  UpdateSecurityHubConfigurationCommandInput,
  UpdateSecurityHubConfigurationCommandOutput,
} from "./commands/UpdateSecurityHubConfigurationCommand";
import {
  UpdateStandardsControlCommand,
  UpdateStandardsControlCommandInput,
  UpdateStandardsControlCommandOutput,
} from "./commands/UpdateStandardsControlCommand";
import { SecurityHubClient, SecurityHubClientConfig } from "./SecurityHubClient";

const commands = {
  AcceptAdministratorInvitationCommand,
  AcceptInvitationCommand,
  BatchDeleteAutomationRulesCommand,
  BatchDisableStandardsCommand,
  BatchEnableStandardsCommand,
  BatchGetAutomationRulesCommand,
  BatchGetConfigurationPolicyAssociationsCommand,
  BatchGetSecurityControlsCommand,
  BatchGetStandardsControlAssociationsCommand,
  BatchImportFindingsCommand,
  BatchUpdateAutomationRulesCommand,
  BatchUpdateFindingsCommand,
  BatchUpdateStandardsControlAssociationsCommand,
  CreateActionTargetCommand,
  CreateAutomationRuleCommand,
  CreateConfigurationPolicyCommand,
  CreateFindingAggregatorCommand,
  CreateInsightCommand,
  CreateMembersCommand,
  DeclineInvitationsCommand,
  DeleteActionTargetCommand,
  DeleteConfigurationPolicyCommand,
  DeleteFindingAggregatorCommand,
  DeleteInsightCommand,
  DeleteInvitationsCommand,
  DeleteMembersCommand,
  DescribeActionTargetsCommand,
  DescribeHubCommand,
  DescribeOrganizationConfigurationCommand,
  DescribeProductsCommand,
  DescribeStandardsCommand,
  DescribeStandardsControlsCommand,
  DisableImportFindingsForProductCommand,
  DisableOrganizationAdminAccountCommand,
  DisableSecurityHubCommand,
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromMasterAccountCommand,
  DisassociateMembersCommand,
  EnableImportFindingsForProductCommand,
  EnableOrganizationAdminAccountCommand,
  EnableSecurityHubCommand,
  GetAdministratorAccountCommand,
  GetConfigurationPolicyCommand,
  GetConfigurationPolicyAssociationCommand,
  GetEnabledStandardsCommand,
  GetFindingAggregatorCommand,
  GetFindingHistoryCommand,
  GetFindingsCommand,
  GetInsightResultsCommand,
  GetInsightsCommand,
  GetInvitationsCountCommand,
  GetMasterAccountCommand,
  GetMembersCommand,
  GetSecurityControlDefinitionCommand,
  InviteMembersCommand,
  ListAutomationRulesCommand,
  ListConfigurationPoliciesCommand,
  ListConfigurationPolicyAssociationsCommand,
  ListEnabledProductsForImportCommand,
  ListFindingAggregatorsCommand,
  ListInvitationsCommand,
  ListMembersCommand,
  ListOrganizationAdminAccountsCommand,
  ListSecurityControlDefinitionsCommand,
  ListStandardsControlAssociationsCommand,
  ListTagsForResourceCommand,
  StartConfigurationPolicyAssociationCommand,
  StartConfigurationPolicyDisassociationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateActionTargetCommand,
  UpdateConfigurationPolicyCommand,
  UpdateFindingAggregatorCommand,
  UpdateFindingsCommand,
  UpdateInsightCommand,
  UpdateOrganizationConfigurationCommand,
  UpdateSecurityControlCommand,
  UpdateSecurityHubConfigurationCommand,
  UpdateStandardsControlCommand,
};

export interface SecurityHub {
  /**
   * @see {@link AcceptAdministratorInvitationCommand}
   */
  acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptAdministratorInvitationCommandOutput>;
  acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    cb: (err: any, data?: AcceptAdministratorInvitationCommandOutput) => void
  ): void;
  acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptAdministratorInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptInvitationCommand}
   */
  acceptInvitation(
    args: AcceptInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptInvitationCommandOutput>;
  acceptInvitation(
    args: AcceptInvitationCommandInput,
    cb: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): void;
  acceptInvitation(
    args: AcceptInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteAutomationRulesCommand}
   */
  batchDeleteAutomationRules(
    args: BatchDeleteAutomationRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteAutomationRulesCommandOutput>;
  batchDeleteAutomationRules(
    args: BatchDeleteAutomationRulesCommandInput,
    cb: (err: any, data?: BatchDeleteAutomationRulesCommandOutput) => void
  ): void;
  batchDeleteAutomationRules(
    args: BatchDeleteAutomationRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteAutomationRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisableStandardsCommand}
   */
  batchDisableStandards(
    args: BatchDisableStandardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisableStandardsCommandOutput>;
  batchDisableStandards(
    args: BatchDisableStandardsCommandInput,
    cb: (err: any, data?: BatchDisableStandardsCommandOutput) => void
  ): void;
  batchDisableStandards(
    args: BatchDisableStandardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisableStandardsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchEnableStandardsCommand}
   */
  batchEnableStandards(
    args: BatchEnableStandardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchEnableStandardsCommandOutput>;
  batchEnableStandards(
    args: BatchEnableStandardsCommandInput,
    cb: (err: any, data?: BatchEnableStandardsCommandOutput) => void
  ): void;
  batchEnableStandards(
    args: BatchEnableStandardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchEnableStandardsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetAutomationRulesCommand}
   */
  batchGetAutomationRules(
    args: BatchGetAutomationRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetAutomationRulesCommandOutput>;
  batchGetAutomationRules(
    args: BatchGetAutomationRulesCommandInput,
    cb: (err: any, data?: BatchGetAutomationRulesCommandOutput) => void
  ): void;
  batchGetAutomationRules(
    args: BatchGetAutomationRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetAutomationRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetConfigurationPolicyAssociationsCommand}
   */
  batchGetConfigurationPolicyAssociations(
    args: BatchGetConfigurationPolicyAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetConfigurationPolicyAssociationsCommandOutput>;
  batchGetConfigurationPolicyAssociations(
    args: BatchGetConfigurationPolicyAssociationsCommandInput,
    cb: (err: any, data?: BatchGetConfigurationPolicyAssociationsCommandOutput) => void
  ): void;
  batchGetConfigurationPolicyAssociations(
    args: BatchGetConfigurationPolicyAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetConfigurationPolicyAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetSecurityControlsCommand}
   */
  batchGetSecurityControls(
    args: BatchGetSecurityControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetSecurityControlsCommandOutput>;
  batchGetSecurityControls(
    args: BatchGetSecurityControlsCommandInput,
    cb: (err: any, data?: BatchGetSecurityControlsCommandOutput) => void
  ): void;
  batchGetSecurityControls(
    args: BatchGetSecurityControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetSecurityControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetStandardsControlAssociationsCommand}
   */
  batchGetStandardsControlAssociations(
    args: BatchGetStandardsControlAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetStandardsControlAssociationsCommandOutput>;
  batchGetStandardsControlAssociations(
    args: BatchGetStandardsControlAssociationsCommandInput,
    cb: (err: any, data?: BatchGetStandardsControlAssociationsCommandOutput) => void
  ): void;
  batchGetStandardsControlAssociations(
    args: BatchGetStandardsControlAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetStandardsControlAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchImportFindingsCommand}
   */
  batchImportFindings(
    args: BatchImportFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchImportFindingsCommandOutput>;
  batchImportFindings(
    args: BatchImportFindingsCommandInput,
    cb: (err: any, data?: BatchImportFindingsCommandOutput) => void
  ): void;
  batchImportFindings(
    args: BatchImportFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchImportFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateAutomationRulesCommand}
   */
  batchUpdateAutomationRules(
    args: BatchUpdateAutomationRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateAutomationRulesCommandOutput>;
  batchUpdateAutomationRules(
    args: BatchUpdateAutomationRulesCommandInput,
    cb: (err: any, data?: BatchUpdateAutomationRulesCommandOutput) => void
  ): void;
  batchUpdateAutomationRules(
    args: BatchUpdateAutomationRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateAutomationRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateFindingsCommand}
   */
  batchUpdateFindings(
    args: BatchUpdateFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateFindingsCommandOutput>;
  batchUpdateFindings(
    args: BatchUpdateFindingsCommandInput,
    cb: (err: any, data?: BatchUpdateFindingsCommandOutput) => void
  ): void;
  batchUpdateFindings(
    args: BatchUpdateFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateStandardsControlAssociationsCommand}
   */
  batchUpdateStandardsControlAssociations(
    args: BatchUpdateStandardsControlAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateStandardsControlAssociationsCommandOutput>;
  batchUpdateStandardsControlAssociations(
    args: BatchUpdateStandardsControlAssociationsCommandInput,
    cb: (err: any, data?: BatchUpdateStandardsControlAssociationsCommandOutput) => void
  ): void;
  batchUpdateStandardsControlAssociations(
    args: BatchUpdateStandardsControlAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateStandardsControlAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateActionTargetCommand}
   */
  createActionTarget(
    args: CreateActionTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateActionTargetCommandOutput>;
  createActionTarget(
    args: CreateActionTargetCommandInput,
    cb: (err: any, data?: CreateActionTargetCommandOutput) => void
  ): void;
  createActionTarget(
    args: CreateActionTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateActionTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAutomationRuleCommand}
   */
  createAutomationRule(
    args: CreateAutomationRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutomationRuleCommandOutput>;
  createAutomationRule(
    args: CreateAutomationRuleCommandInput,
    cb: (err: any, data?: CreateAutomationRuleCommandOutput) => void
  ): void;
  createAutomationRule(
    args: CreateAutomationRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutomationRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationPolicyCommand}
   */
  createConfigurationPolicy(
    args: CreateConfigurationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationPolicyCommandOutput>;
  createConfigurationPolicy(
    args: CreateConfigurationPolicyCommandInput,
    cb: (err: any, data?: CreateConfigurationPolicyCommandOutput) => void
  ): void;
  createConfigurationPolicy(
    args: CreateConfigurationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFindingAggregatorCommand}
   */
  createFindingAggregator(
    args: CreateFindingAggregatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFindingAggregatorCommandOutput>;
  createFindingAggregator(
    args: CreateFindingAggregatorCommandInput,
    cb: (err: any, data?: CreateFindingAggregatorCommandOutput) => void
  ): void;
  createFindingAggregator(
    args: CreateFindingAggregatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFindingAggregatorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInsightCommand}
   */
  createInsight(args: CreateInsightCommandInput, options?: __HttpHandlerOptions): Promise<CreateInsightCommandOutput>;
  createInsight(args: CreateInsightCommandInput, cb: (err: any, data?: CreateInsightCommandOutput) => void): void;
  createInsight(
    args: CreateInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInsightCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMembersCommand}
   */
  createMembers(args: CreateMembersCommandInput, options?: __HttpHandlerOptions): Promise<CreateMembersCommandOutput>;
  createMembers(args: CreateMembersCommandInput, cb: (err: any, data?: CreateMembersCommandOutput) => void): void;
  createMembers(
    args: CreateMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link DeclineInvitationsCommand}
   */
  declineInvitations(
    args: DeclineInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeclineInvitationsCommandOutput>;
  declineInvitations(
    args: DeclineInvitationsCommandInput,
    cb: (err: any, data?: DeclineInvitationsCommandOutput) => void
  ): void;
  declineInvitations(
    args: DeclineInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeclineInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteActionTargetCommand}
   */
  deleteActionTarget(
    args: DeleteActionTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteActionTargetCommandOutput>;
  deleteActionTarget(
    args: DeleteActionTargetCommandInput,
    cb: (err: any, data?: DeleteActionTargetCommandOutput) => void
  ): void;
  deleteActionTarget(
    args: DeleteActionTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteActionTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationPolicyCommand}
   */
  deleteConfigurationPolicy(
    args: DeleteConfigurationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationPolicyCommandOutput>;
  deleteConfigurationPolicy(
    args: DeleteConfigurationPolicyCommandInput,
    cb: (err: any, data?: DeleteConfigurationPolicyCommandOutput) => void
  ): void;
  deleteConfigurationPolicy(
    args: DeleteConfigurationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFindingAggregatorCommand}
   */
  deleteFindingAggregator(
    args: DeleteFindingAggregatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFindingAggregatorCommandOutput>;
  deleteFindingAggregator(
    args: DeleteFindingAggregatorCommandInput,
    cb: (err: any, data?: DeleteFindingAggregatorCommandOutput) => void
  ): void;
  deleteFindingAggregator(
    args: DeleteFindingAggregatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFindingAggregatorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInsightCommand}
   */
  deleteInsight(args: DeleteInsightCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInsightCommandOutput>;
  deleteInsight(args: DeleteInsightCommandInput, cb: (err: any, data?: DeleteInsightCommandOutput) => void): void;
  deleteInsight(
    args: DeleteInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInsightCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInvitationsCommand}
   */
  deleteInvitations(
    args: DeleteInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInvitationsCommandOutput>;
  deleteInvitations(
    args: DeleteInvitationsCommandInput,
    cb: (err: any, data?: DeleteInvitationsCommandOutput) => void
  ): void;
  deleteInvitations(
    args: DeleteInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMembersCommand}
   */
  deleteMembers(args: DeleteMembersCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMembersCommandOutput>;
  deleteMembers(args: DeleteMembersCommandInput, cb: (err: any, data?: DeleteMembersCommandOutput) => void): void;
  deleteMembers(
    args: DeleteMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActionTargetsCommand}
   */
  describeActionTargets(): Promise<DescribeActionTargetsCommandOutput>;
  describeActionTargets(
    args: DescribeActionTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActionTargetsCommandOutput>;
  describeActionTargets(
    args: DescribeActionTargetsCommandInput,
    cb: (err: any, data?: DescribeActionTargetsCommandOutput) => void
  ): void;
  describeActionTargets(
    args: DescribeActionTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActionTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHubCommand}
   */
  describeHub(): Promise<DescribeHubCommandOutput>;
  describeHub(args: DescribeHubCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHubCommandOutput>;
  describeHub(args: DescribeHubCommandInput, cb: (err: any, data?: DescribeHubCommandOutput) => void): void;
  describeHub(
    args: DescribeHubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHubCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationConfigurationCommand}
   */
  describeOrganizationConfiguration(): Promise<DescribeOrganizationConfigurationCommandOutput>;
  describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConfigurationCommandOutput>;
  describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;
  describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProductsCommand}
   */
  describeProducts(): Promise<DescribeProductsCommandOutput>;
  describeProducts(
    args: DescribeProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProductsCommandOutput>;
  describeProducts(
    args: DescribeProductsCommandInput,
    cb: (err: any, data?: DescribeProductsCommandOutput) => void
  ): void;
  describeProducts(
    args: DescribeProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStandardsCommand}
   */
  describeStandards(): Promise<DescribeStandardsCommandOutput>;
  describeStandards(
    args: DescribeStandardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStandardsCommandOutput>;
  describeStandards(
    args: DescribeStandardsCommandInput,
    cb: (err: any, data?: DescribeStandardsCommandOutput) => void
  ): void;
  describeStandards(
    args: DescribeStandardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStandardsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStandardsControlsCommand}
   */
  describeStandardsControls(
    args: DescribeStandardsControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStandardsControlsCommandOutput>;
  describeStandardsControls(
    args: DescribeStandardsControlsCommandInput,
    cb: (err: any, data?: DescribeStandardsControlsCommandOutput) => void
  ): void;
  describeStandardsControls(
    args: DescribeStandardsControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStandardsControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableImportFindingsForProductCommand}
   */
  disableImportFindingsForProduct(
    args: DisableImportFindingsForProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableImportFindingsForProductCommandOutput>;
  disableImportFindingsForProduct(
    args: DisableImportFindingsForProductCommandInput,
    cb: (err: any, data?: DisableImportFindingsForProductCommandOutput) => void
  ): void;
  disableImportFindingsForProduct(
    args: DisableImportFindingsForProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableImportFindingsForProductCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableOrganizationAdminAccountCommand}
   */
  disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableOrganizationAdminAccountCommandOutput>;
  disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): void;
  disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableSecurityHubCommand}
   */
  disableSecurityHub(): Promise<DisableSecurityHubCommandOutput>;
  disableSecurityHub(
    args: DisableSecurityHubCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableSecurityHubCommandOutput>;
  disableSecurityHub(
    args: DisableSecurityHubCommandInput,
    cb: (err: any, data?: DisableSecurityHubCommandOutput) => void
  ): void;
  disableSecurityHub(
    args: DisableSecurityHubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableSecurityHubCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFromAdministratorAccountCommand}
   */
  disassociateFromAdministratorAccount(): Promise<DisassociateFromAdministratorAccountCommandOutput>;
  disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFromAdministratorAccountCommandOutput>;
  disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void
  ): void;
  disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFromMasterAccountCommand}
   */
  disassociateFromMasterAccount(): Promise<DisassociateFromMasterAccountCommandOutput>;
  disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFromMasterAccountCommandOutput>;
  disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void
  ): void;
  disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMembersCommand}
   */
  disassociateMembers(
    args: DisassociateMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMembersCommandOutput>;
  disassociateMembers(
    args: DisassociateMembersCommandInput,
    cb: (err: any, data?: DisassociateMembersCommandOutput) => void
  ): void;
  disassociateMembers(
    args: DisassociateMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableImportFindingsForProductCommand}
   */
  enableImportFindingsForProduct(
    args: EnableImportFindingsForProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableImportFindingsForProductCommandOutput>;
  enableImportFindingsForProduct(
    args: EnableImportFindingsForProductCommandInput,
    cb: (err: any, data?: EnableImportFindingsForProductCommandOutput) => void
  ): void;
  enableImportFindingsForProduct(
    args: EnableImportFindingsForProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableImportFindingsForProductCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableOrganizationAdminAccountCommand}
   */
  enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableOrganizationAdminAccountCommandOutput>;
  enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): void;
  enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableSecurityHubCommand}
   */
  enableSecurityHub(): Promise<EnableSecurityHubCommandOutput>;
  enableSecurityHub(
    args: EnableSecurityHubCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableSecurityHubCommandOutput>;
  enableSecurityHub(
    args: EnableSecurityHubCommandInput,
    cb: (err: any, data?: EnableSecurityHubCommandOutput) => void
  ): void;
  enableSecurityHub(
    args: EnableSecurityHubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableSecurityHubCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAdministratorAccountCommand}
   */
  getAdministratorAccount(): Promise<GetAdministratorAccountCommandOutput>;
  getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAdministratorAccountCommandOutput>;
  getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void
  ): void;
  getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationPolicyCommand}
   */
  getConfigurationPolicy(
    args: GetConfigurationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationPolicyCommandOutput>;
  getConfigurationPolicy(
    args: GetConfigurationPolicyCommandInput,
    cb: (err: any, data?: GetConfigurationPolicyCommandOutput) => void
  ): void;
  getConfigurationPolicy(
    args: GetConfigurationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationPolicyAssociationCommand}
   */
  getConfigurationPolicyAssociation(
    args: GetConfigurationPolicyAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationPolicyAssociationCommandOutput>;
  getConfigurationPolicyAssociation(
    args: GetConfigurationPolicyAssociationCommandInput,
    cb: (err: any, data?: GetConfigurationPolicyAssociationCommandOutput) => void
  ): void;
  getConfigurationPolicyAssociation(
    args: GetConfigurationPolicyAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationPolicyAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnabledStandardsCommand}
   */
  getEnabledStandards(): Promise<GetEnabledStandardsCommandOutput>;
  getEnabledStandards(
    args: GetEnabledStandardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnabledStandardsCommandOutput>;
  getEnabledStandards(
    args: GetEnabledStandardsCommandInput,
    cb: (err: any, data?: GetEnabledStandardsCommandOutput) => void
  ): void;
  getEnabledStandards(
    args: GetEnabledStandardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnabledStandardsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingAggregatorCommand}
   */
  getFindingAggregator(
    args: GetFindingAggregatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingAggregatorCommandOutput>;
  getFindingAggregator(
    args: GetFindingAggregatorCommandInput,
    cb: (err: any, data?: GetFindingAggregatorCommandOutput) => void
  ): void;
  getFindingAggregator(
    args: GetFindingAggregatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingAggregatorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingHistoryCommand}
   */
  getFindingHistory(
    args: GetFindingHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingHistoryCommandOutput>;
  getFindingHistory(
    args: GetFindingHistoryCommandInput,
    cb: (err: any, data?: GetFindingHistoryCommandOutput) => void
  ): void;
  getFindingHistory(
    args: GetFindingHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingsCommand}
   */
  getFindings(): Promise<GetFindingsCommandOutput>;
  getFindings(args: GetFindingsCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsCommandOutput>;
  getFindings(args: GetFindingsCommandInput, cb: (err: any, data?: GetFindingsCommandOutput) => void): void;
  getFindings(
    args: GetFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightResultsCommand}
   */
  getInsightResults(
    args: GetInsightResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInsightResultsCommandOutput>;
  getInsightResults(
    args: GetInsightResultsCommandInput,
    cb: (err: any, data?: GetInsightResultsCommandOutput) => void
  ): void;
  getInsightResults(
    args: GetInsightResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightsCommand}
   */
  getInsights(): Promise<GetInsightsCommandOutput>;
  getInsights(args: GetInsightsCommandInput, options?: __HttpHandlerOptions): Promise<GetInsightsCommandOutput>;
  getInsights(args: GetInsightsCommandInput, cb: (err: any, data?: GetInsightsCommandOutput) => void): void;
  getInsights(
    args: GetInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvitationsCountCommand}
   */
  getInvitationsCount(): Promise<GetInvitationsCountCommandOutput>;
  getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvitationsCountCommandOutput>;
  getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    cb: (err: any, data?: GetInvitationsCountCommandOutput) => void
  ): void;
  getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvitationsCountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMasterAccountCommand}
   */
  getMasterAccount(): Promise<GetMasterAccountCommandOutput>;
  getMasterAccount(
    args: GetMasterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMasterAccountCommandOutput>;
  getMasterAccount(
    args: GetMasterAccountCommandInput,
    cb: (err: any, data?: GetMasterAccountCommandOutput) => void
  ): void;
  getMasterAccount(
    args: GetMasterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMasterAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMembersCommand}
   */
  getMembers(args: GetMembersCommandInput, options?: __HttpHandlerOptions): Promise<GetMembersCommandOutput>;
  getMembers(args: GetMembersCommandInput, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
  getMembers(
    args: GetMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecurityControlDefinitionCommand}
   */
  getSecurityControlDefinition(
    args: GetSecurityControlDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityControlDefinitionCommandOutput>;
  getSecurityControlDefinition(
    args: GetSecurityControlDefinitionCommandInput,
    cb: (err: any, data?: GetSecurityControlDefinitionCommandOutput) => void
  ): void;
  getSecurityControlDefinition(
    args: GetSecurityControlDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityControlDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link InviteMembersCommand}
   */
  inviteMembers(args: InviteMembersCommandInput, options?: __HttpHandlerOptions): Promise<InviteMembersCommandOutput>;
  inviteMembers(args: InviteMembersCommandInput, cb: (err: any, data?: InviteMembersCommandOutput) => void): void;
  inviteMembers(
    args: InviteMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InviteMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutomationRulesCommand}
   */
  listAutomationRules(): Promise<ListAutomationRulesCommandOutput>;
  listAutomationRules(
    args: ListAutomationRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutomationRulesCommandOutput>;
  listAutomationRules(
    args: ListAutomationRulesCommandInput,
    cb: (err: any, data?: ListAutomationRulesCommandOutput) => void
  ): void;
  listAutomationRules(
    args: ListAutomationRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutomationRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationPoliciesCommand}
   */
  listConfigurationPolicies(): Promise<ListConfigurationPoliciesCommandOutput>;
  listConfigurationPolicies(
    args: ListConfigurationPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationPoliciesCommandOutput>;
  listConfigurationPolicies(
    args: ListConfigurationPoliciesCommandInput,
    cb: (err: any, data?: ListConfigurationPoliciesCommandOutput) => void
  ): void;
  listConfigurationPolicies(
    args: ListConfigurationPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationPolicyAssociationsCommand}
   */
  listConfigurationPolicyAssociations(): Promise<ListConfigurationPolicyAssociationsCommandOutput>;
  listConfigurationPolicyAssociations(
    args: ListConfigurationPolicyAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationPolicyAssociationsCommandOutput>;
  listConfigurationPolicyAssociations(
    args: ListConfigurationPolicyAssociationsCommandInput,
    cb: (err: any, data?: ListConfigurationPolicyAssociationsCommandOutput) => void
  ): void;
  listConfigurationPolicyAssociations(
    args: ListConfigurationPolicyAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationPolicyAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnabledProductsForImportCommand}
   */
  listEnabledProductsForImport(): Promise<ListEnabledProductsForImportCommandOutput>;
  listEnabledProductsForImport(
    args: ListEnabledProductsForImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnabledProductsForImportCommandOutput>;
  listEnabledProductsForImport(
    args: ListEnabledProductsForImportCommandInput,
    cb: (err: any, data?: ListEnabledProductsForImportCommandOutput) => void
  ): void;
  listEnabledProductsForImport(
    args: ListEnabledProductsForImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnabledProductsForImportCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingAggregatorsCommand}
   */
  listFindingAggregators(): Promise<ListFindingAggregatorsCommandOutput>;
  listFindingAggregators(
    args: ListFindingAggregatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingAggregatorsCommandOutput>;
  listFindingAggregators(
    args: ListFindingAggregatorsCommandInput,
    cb: (err: any, data?: ListFindingAggregatorsCommandOutput) => void
  ): void;
  listFindingAggregators(
    args: ListFindingAggregatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingAggregatorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvitationsCommand}
   */
  listInvitations(): Promise<ListInvitationsCommandOutput>;
  listInvitations(
    args: ListInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvitationsCommandOutput>;
  listInvitations(args: ListInvitationsCommandInput, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
  listInvitations(
    args: ListInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembersCommand}
   */
  listMembers(): Promise<ListMembersCommandOutput>;
  listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
  listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
  listMembers(
    args: ListMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationAdminAccountsCommand}
   */
  listOrganizationAdminAccounts(): Promise<ListOrganizationAdminAccountsCommandOutput>;
  listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationAdminAccountsCommandOutput>;
  listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): void;
  listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityControlDefinitionsCommand}
   */
  listSecurityControlDefinitions(): Promise<ListSecurityControlDefinitionsCommandOutput>;
  listSecurityControlDefinitions(
    args: ListSecurityControlDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityControlDefinitionsCommandOutput>;
  listSecurityControlDefinitions(
    args: ListSecurityControlDefinitionsCommandInput,
    cb: (err: any, data?: ListSecurityControlDefinitionsCommandOutput) => void
  ): void;
  listSecurityControlDefinitions(
    args: ListSecurityControlDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityControlDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStandardsControlAssociationsCommand}
   */
  listStandardsControlAssociations(
    args: ListStandardsControlAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStandardsControlAssociationsCommandOutput>;
  listStandardsControlAssociations(
    args: ListStandardsControlAssociationsCommandInput,
    cb: (err: any, data?: ListStandardsControlAssociationsCommandOutput) => void
  ): void;
  listStandardsControlAssociations(
    args: ListStandardsControlAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStandardsControlAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartConfigurationPolicyAssociationCommand}
   */
  startConfigurationPolicyAssociation(
    args: StartConfigurationPolicyAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartConfigurationPolicyAssociationCommandOutput>;
  startConfigurationPolicyAssociation(
    args: StartConfigurationPolicyAssociationCommandInput,
    cb: (err: any, data?: StartConfigurationPolicyAssociationCommandOutput) => void
  ): void;
  startConfigurationPolicyAssociation(
    args: StartConfigurationPolicyAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartConfigurationPolicyAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartConfigurationPolicyDisassociationCommand}
   */
  startConfigurationPolicyDisassociation(
    args: StartConfigurationPolicyDisassociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartConfigurationPolicyDisassociationCommandOutput>;
  startConfigurationPolicyDisassociation(
    args: StartConfigurationPolicyDisassociationCommandInput,
    cb: (err: any, data?: StartConfigurationPolicyDisassociationCommandOutput) => void
  ): void;
  startConfigurationPolicyDisassociation(
    args: StartConfigurationPolicyDisassociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartConfigurationPolicyDisassociationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateActionTargetCommand}
   */
  updateActionTarget(
    args: UpdateActionTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateActionTargetCommandOutput>;
  updateActionTarget(
    args: UpdateActionTargetCommandInput,
    cb: (err: any, data?: UpdateActionTargetCommandOutput) => void
  ): void;
  updateActionTarget(
    args: UpdateActionTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateActionTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationPolicyCommand}
   */
  updateConfigurationPolicy(
    args: UpdateConfigurationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationPolicyCommandOutput>;
  updateConfigurationPolicy(
    args: UpdateConfigurationPolicyCommandInput,
    cb: (err: any, data?: UpdateConfigurationPolicyCommandOutput) => void
  ): void;
  updateConfigurationPolicy(
    args: UpdateConfigurationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFindingAggregatorCommand}
   */
  updateFindingAggregator(
    args: UpdateFindingAggregatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingAggregatorCommandOutput>;
  updateFindingAggregator(
    args: UpdateFindingAggregatorCommandInput,
    cb: (err: any, data?: UpdateFindingAggregatorCommandOutput) => void
  ): void;
  updateFindingAggregator(
    args: UpdateFindingAggregatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingAggregatorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFindingsCommand}
   */
  updateFindings(
    args: UpdateFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingsCommandOutput>;
  updateFindings(args: UpdateFindingsCommandInput, cb: (err: any, data?: UpdateFindingsCommandOutput) => void): void;
  updateFindings(
    args: UpdateFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInsightCommand}
   */
  updateInsight(args: UpdateInsightCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInsightCommandOutput>;
  updateInsight(args: UpdateInsightCommandInput, cb: (err: any, data?: UpdateInsightCommandOutput) => void): void;
  updateInsight(
    args: UpdateInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInsightCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOrganizationConfigurationCommand}
   */
  updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOrganizationConfigurationCommandOutput>;
  updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;
  updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityControlCommand}
   */
  updateSecurityControl(
    args: UpdateSecurityControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityControlCommandOutput>;
  updateSecurityControl(
    args: UpdateSecurityControlCommandInput,
    cb: (err: any, data?: UpdateSecurityControlCommandOutput) => void
  ): void;
  updateSecurityControl(
    args: UpdateSecurityControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityControlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityHubConfigurationCommand}
   */
  updateSecurityHubConfiguration(): Promise<UpdateSecurityHubConfigurationCommandOutput>;
  updateSecurityHubConfiguration(
    args: UpdateSecurityHubConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityHubConfigurationCommandOutput>;
  updateSecurityHubConfiguration(
    args: UpdateSecurityHubConfigurationCommandInput,
    cb: (err: any, data?: UpdateSecurityHubConfigurationCommandOutput) => void
  ): void;
  updateSecurityHubConfiguration(
    args: UpdateSecurityHubConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityHubConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStandardsControlCommand}
   */
  updateStandardsControl(
    args: UpdateStandardsControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStandardsControlCommandOutput>;
  updateStandardsControl(
    args: UpdateStandardsControlCommandInput,
    cb: (err: any, data?: UpdateStandardsControlCommandOutput) => void
  ): void;
  updateStandardsControl(
    args: UpdateStandardsControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStandardsControlCommandOutput) => void
  ): void;
}

/**
 * <p>Security Hub provides you with a comprehensive view of your security state in Amazon Web Services and helps
 *            you assess your Amazon Web Services environment against security industry standards and best practices.</p>
 *          <p>Security Hub collects security data across Amazon Web Services accounts, Amazon Web Services services, and
 *             supported third-party products and helps you analyze your security trends and identify the highest priority security
 *             issues.</p>
 *          <p>To help you manage the security state of your organization, Security Hub supports multiple security standards.
 *            These include the Amazon Web Services Foundational Security Best Practices (FSBP) standard developed by Amazon Web Services,
 *             and external compliance frameworks such as the Center for Internet Security (CIS), the Payment Card Industry Data
 *             Security Standard (PCI DSS), and the National Institute of Standards and Technology (NIST). Each standard includes
 *             several security controls, each of which represents a security best practice. Security Hub runs checks against
 *             security controls and generates control findings to help you assess your compliance against security best practices.</p>
 *          <p>In addition to generating control findings, Security Hub also receives findings from other Amazon Web Services services,
 *             such as Amazon GuardDuty and Amazon Inspector, and
 *             supported third-party products. This gives you a single pane of glass into a variety of security-related issues. You
 *             can also send Security Hub findings to other Amazon Web Services services and supported third-party products.</p>
 *          <p>Security Hub offers automation features that help you triage and remediate security issues. For example,
 *            you can use automation rules to automatically update critical findings when a security check fails. You can also leverage the integration with
 *            Amazon EventBridge  to trigger automatic responses to specific findings.</p>
 *          <p>This guide, the <i>Security Hub API Reference</i>, provides
 *            information about the Security Hub API. This includes supported resources, HTTP methods, parameters,
 *            and schemas. If you're new to Security Hub, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">
 *                <i>Security Hub User Guide</i>
 *             </a>. The
 *            user guide explains key concepts and provides procedures
 *            that demonstrate how to use Security Hub features. It also provides information about topics such as
 *            integrating Security Hub with other Amazon Web Services services.</p>
 *          <p>In addition to interacting with Security Hub  by making calls to the Security Hub API, you can
 *            use a current version of an Amazon Web Services command line tool or SDK. Amazon Web Services provides tools
 *             and SDKs that consist of libraries and sample code for various languages and platforms, such as PowerShell,
 *            Java, Go, Python, C++, and .NET. These tools and SDKs provide convenient, programmatic access to
 *            Security Hub  and other Amazon Web Services services . They also handle tasks such as signing requests,
 *            managing errors, and retrying requests automatically. For information about installing and using the Amazon Web Services  tools
 *            and SDKs, see <a href="http://aws.amazon.com/developer/tools/">Tools to Build on Amazon Web Services</a>.</p>
 *          <p>With the exception of operations that are related to central configuration, Security Hub API requests are executed only in
 *          the Amazon Web Services Region that is currently active or in the specific Amazon Web Services Region that you specify in your request. Any configuration or settings change
 *          that results from the operation is applied only to that Region. To make the same change in
 *          other Regions, call the same API operation in each Region in which you want to apply the change. When you use central configuration,
 * API requests for enabling Security Hub, standards, and controls are executed in the home Region and all linked Regions. For a list of
 * central configuration operations, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/central-configuration-intro.html#central-configuration-concepts">Central configuration
 * terms and concepts</a> section of the <i>Security Hub User Guide</i>.</p>
 *          <p>The following throttling limits apply to Security Hub API operations.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BatchEnableStandards</code> - <code>RateLimit</code> of 1 request per
 *                second. <code>BurstLimit</code> of 1 request per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetFindings</code> - <code>RateLimit</code> of 3 requests per second.
 *                   <code>BurstLimit</code> of 6 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchImportFindings</code> - <code>RateLimit</code> of 10 requests per second.
 *             <code>BurstLimit</code> of 30 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchUpdateFindings</code> - <code>RateLimit</code> of 10 requests per second.
 *             <code>BurstLimit</code> of 30 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateStandardsControl</code> - <code>RateLimit</code> of 1 request per
 *                second. <code>BurstLimit</code> of 5 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>All other operations - <code>RateLimit</code> of 10 requests per second.
 *                   <code>BurstLimit</code> of 30 requests per second.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class SecurityHub extends SecurityHubClient implements SecurityHub {}
createAggregatedClient(commands, SecurityHub);
