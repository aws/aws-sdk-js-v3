// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateAccountsCommand,
  AssociateAccountsCommandInput,
  AssociateAccountsCommandOutput,
} from "./commands/AssociateAccountsCommand";
import {
  CreateAutomationRuleCommand,
  CreateAutomationRuleCommandInput,
  CreateAutomationRuleCommandOutput,
} from "./commands/CreateAutomationRuleCommand";
import {
  DeleteAutomationRuleCommand,
  DeleteAutomationRuleCommandInput,
  DeleteAutomationRuleCommandOutput,
} from "./commands/DeleteAutomationRuleCommand";
import {
  DisassociateAccountsCommand,
  DisassociateAccountsCommandInput,
  DisassociateAccountsCommandOutput,
} from "./commands/DisassociateAccountsCommand";
import {
  GetAutomationEventCommand,
  GetAutomationEventCommandInput,
  GetAutomationEventCommandOutput,
} from "./commands/GetAutomationEventCommand";
import {
  GetAutomationRuleCommand,
  GetAutomationRuleCommandInput,
  GetAutomationRuleCommandOutput,
} from "./commands/GetAutomationRuleCommand";
import {
  GetEnrollmentConfigurationCommand,
  GetEnrollmentConfigurationCommandInput,
  GetEnrollmentConfigurationCommandOutput,
} from "./commands/GetEnrollmentConfigurationCommand";
import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "./commands/ListAccountsCommand";
import {
  ListAutomationEventsCommand,
  ListAutomationEventsCommandInput,
  ListAutomationEventsCommandOutput,
} from "./commands/ListAutomationEventsCommand";
import {
  ListAutomationEventStepsCommand,
  ListAutomationEventStepsCommandInput,
  ListAutomationEventStepsCommandOutput,
} from "./commands/ListAutomationEventStepsCommand";
import {
  ListAutomationEventSummariesCommand,
  ListAutomationEventSummariesCommandInput,
  ListAutomationEventSummariesCommandOutput,
} from "./commands/ListAutomationEventSummariesCommand";
import {
  ListAutomationRulePreviewCommand,
  ListAutomationRulePreviewCommandInput,
  ListAutomationRulePreviewCommandOutput,
} from "./commands/ListAutomationRulePreviewCommand";
import {
  ListAutomationRulePreviewSummariesCommand,
  ListAutomationRulePreviewSummariesCommandInput,
  ListAutomationRulePreviewSummariesCommandOutput,
} from "./commands/ListAutomationRulePreviewSummariesCommand";
import {
  ListAutomationRulesCommand,
  ListAutomationRulesCommandInput,
  ListAutomationRulesCommandOutput,
} from "./commands/ListAutomationRulesCommand";
import {
  ListRecommendedActionsCommand,
  ListRecommendedActionsCommandInput,
  ListRecommendedActionsCommandOutput,
} from "./commands/ListRecommendedActionsCommand";
import {
  ListRecommendedActionSummariesCommand,
  ListRecommendedActionSummariesCommandInput,
  ListRecommendedActionSummariesCommandOutput,
} from "./commands/ListRecommendedActionSummariesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RollbackAutomationEventCommand,
  RollbackAutomationEventCommandInput,
  RollbackAutomationEventCommandOutput,
} from "./commands/RollbackAutomationEventCommand";
import {
  StartAutomationEventCommand,
  StartAutomationEventCommandInput,
  StartAutomationEventCommandOutput,
} from "./commands/StartAutomationEventCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAutomationRuleCommand,
  UpdateAutomationRuleCommandInput,
  UpdateAutomationRuleCommandOutput,
} from "./commands/UpdateAutomationRuleCommand";
import {
  UpdateEnrollmentConfigurationCommand,
  UpdateEnrollmentConfigurationCommandInput,
  UpdateEnrollmentConfigurationCommandOutput,
} from "./commands/UpdateEnrollmentConfigurationCommand";
import {
  ComputeOptimizerAutomationClient,
  ComputeOptimizerAutomationClientConfig,
} from "./ComputeOptimizerAutomationClient";

const commands = {
  AssociateAccountsCommand,
  CreateAutomationRuleCommand,
  DeleteAutomationRuleCommand,
  DisassociateAccountsCommand,
  GetAutomationEventCommand,
  GetAutomationRuleCommand,
  GetEnrollmentConfigurationCommand,
  ListAccountsCommand,
  ListAutomationEventsCommand,
  ListAutomationEventStepsCommand,
  ListAutomationEventSummariesCommand,
  ListAutomationRulePreviewCommand,
  ListAutomationRulePreviewSummariesCommand,
  ListAutomationRulesCommand,
  ListRecommendedActionsCommand,
  ListRecommendedActionSummariesCommand,
  ListTagsForResourceCommand,
  RollbackAutomationEventCommand,
  StartAutomationEventCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAutomationRuleCommand,
  UpdateEnrollmentConfigurationCommand,
};

export interface ComputeOptimizerAutomation {
  /**
   * @see {@link AssociateAccountsCommand}
   */
  associateAccounts(
    args: AssociateAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAccountsCommandOutput>;
  associateAccounts(
    args: AssociateAccountsCommandInput,
    cb: (err: any, data?: AssociateAccountsCommandOutput) => void
  ): void;
  associateAccounts(
    args: AssociateAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAccountsCommandOutput) => void
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
   * @see {@link DeleteAutomationRuleCommand}
   */
  deleteAutomationRule(
    args: DeleteAutomationRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAutomationRuleCommandOutput>;
  deleteAutomationRule(
    args: DeleteAutomationRuleCommandInput,
    cb: (err: any, data?: DeleteAutomationRuleCommandOutput) => void
  ): void;
  deleteAutomationRule(
    args: DeleteAutomationRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAutomationRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAccountsCommand}
   */
  disassociateAccounts(
    args: DisassociateAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAccountsCommandOutput>;
  disassociateAccounts(
    args: DisassociateAccountsCommandInput,
    cb: (err: any, data?: DisassociateAccountsCommandOutput) => void
  ): void;
  disassociateAccounts(
    args: DisassociateAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutomationEventCommand}
   */
  getAutomationEvent(
    args: GetAutomationEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutomationEventCommandOutput>;
  getAutomationEvent(
    args: GetAutomationEventCommandInput,
    cb: (err: any, data?: GetAutomationEventCommandOutput) => void
  ): void;
  getAutomationEvent(
    args: GetAutomationEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutomationEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutomationRuleCommand}
   */
  getAutomationRule(
    args: GetAutomationRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutomationRuleCommandOutput>;
  getAutomationRule(
    args: GetAutomationRuleCommandInput,
    cb: (err: any, data?: GetAutomationRuleCommandOutput) => void
  ): void;
  getAutomationRule(
    args: GetAutomationRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutomationRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnrollmentConfigurationCommand}
   */
  getEnrollmentConfiguration(): Promise<GetEnrollmentConfigurationCommandOutput>;
  getEnrollmentConfiguration(
    args: GetEnrollmentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnrollmentConfigurationCommandOutput>;
  getEnrollmentConfiguration(
    args: GetEnrollmentConfigurationCommandInput,
    cb: (err: any, data?: GetEnrollmentConfigurationCommandOutput) => void
  ): void;
  getEnrollmentConfiguration(
    args: GetEnrollmentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnrollmentConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountsCommand}
   */
  listAccounts(): Promise<ListAccountsCommandOutput>;
  listAccounts(args: ListAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountsCommandOutput>;
  listAccounts(args: ListAccountsCommandInput, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
  listAccounts(
    args: ListAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutomationEventsCommand}
   */
  listAutomationEvents(): Promise<ListAutomationEventsCommandOutput>;
  listAutomationEvents(
    args: ListAutomationEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutomationEventsCommandOutput>;
  listAutomationEvents(
    args: ListAutomationEventsCommandInput,
    cb: (err: any, data?: ListAutomationEventsCommandOutput) => void
  ): void;
  listAutomationEvents(
    args: ListAutomationEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutomationEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutomationEventStepsCommand}
   */
  listAutomationEventSteps(
    args: ListAutomationEventStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutomationEventStepsCommandOutput>;
  listAutomationEventSteps(
    args: ListAutomationEventStepsCommandInput,
    cb: (err: any, data?: ListAutomationEventStepsCommandOutput) => void
  ): void;
  listAutomationEventSteps(
    args: ListAutomationEventStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutomationEventStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutomationEventSummariesCommand}
   */
  listAutomationEventSummaries(): Promise<ListAutomationEventSummariesCommandOutput>;
  listAutomationEventSummaries(
    args: ListAutomationEventSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutomationEventSummariesCommandOutput>;
  listAutomationEventSummaries(
    args: ListAutomationEventSummariesCommandInput,
    cb: (err: any, data?: ListAutomationEventSummariesCommandOutput) => void
  ): void;
  listAutomationEventSummaries(
    args: ListAutomationEventSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutomationEventSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutomationRulePreviewCommand}
   */
  listAutomationRulePreview(
    args: ListAutomationRulePreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutomationRulePreviewCommandOutput>;
  listAutomationRulePreview(
    args: ListAutomationRulePreviewCommandInput,
    cb: (err: any, data?: ListAutomationRulePreviewCommandOutput) => void
  ): void;
  listAutomationRulePreview(
    args: ListAutomationRulePreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutomationRulePreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutomationRulePreviewSummariesCommand}
   */
  listAutomationRulePreviewSummaries(
    args: ListAutomationRulePreviewSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutomationRulePreviewSummariesCommandOutput>;
  listAutomationRulePreviewSummaries(
    args: ListAutomationRulePreviewSummariesCommandInput,
    cb: (err: any, data?: ListAutomationRulePreviewSummariesCommandOutput) => void
  ): void;
  listAutomationRulePreviewSummaries(
    args: ListAutomationRulePreviewSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutomationRulePreviewSummariesCommandOutput) => void
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
   * @see {@link ListRecommendedActionsCommand}
   */
  listRecommendedActions(): Promise<ListRecommendedActionsCommandOutput>;
  listRecommendedActions(
    args: ListRecommendedActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendedActionsCommandOutput>;
  listRecommendedActions(
    args: ListRecommendedActionsCommandInput,
    cb: (err: any, data?: ListRecommendedActionsCommandOutput) => void
  ): void;
  listRecommendedActions(
    args: ListRecommendedActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendedActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendedActionSummariesCommand}
   */
  listRecommendedActionSummaries(): Promise<ListRecommendedActionSummariesCommandOutput>;
  listRecommendedActionSummaries(
    args: ListRecommendedActionSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendedActionSummariesCommandOutput>;
  listRecommendedActionSummaries(
    args: ListRecommendedActionSummariesCommandInput,
    cb: (err: any, data?: ListRecommendedActionSummariesCommandOutput) => void
  ): void;
  listRecommendedActionSummaries(
    args: ListRecommendedActionSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendedActionSummariesCommandOutput) => void
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
   * @see {@link RollbackAutomationEventCommand}
   */
  rollbackAutomationEvent(
    args: RollbackAutomationEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RollbackAutomationEventCommandOutput>;
  rollbackAutomationEvent(
    args: RollbackAutomationEventCommandInput,
    cb: (err: any, data?: RollbackAutomationEventCommandOutput) => void
  ): void;
  rollbackAutomationEvent(
    args: RollbackAutomationEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RollbackAutomationEventCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAutomationEventCommand}
   */
  startAutomationEvent(
    args: StartAutomationEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAutomationEventCommandOutput>;
  startAutomationEvent(
    args: StartAutomationEventCommandInput,
    cb: (err: any, data?: StartAutomationEventCommandOutput) => void
  ): void;
  startAutomationEvent(
    args: StartAutomationEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAutomationEventCommandOutput) => void
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
   * @see {@link UpdateAutomationRuleCommand}
   */
  updateAutomationRule(
    args: UpdateAutomationRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAutomationRuleCommandOutput>;
  updateAutomationRule(
    args: UpdateAutomationRuleCommandInput,
    cb: (err: any, data?: UpdateAutomationRuleCommandOutput) => void
  ): void;
  updateAutomationRule(
    args: UpdateAutomationRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAutomationRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnrollmentConfigurationCommand}
   */
  updateEnrollmentConfiguration(
    args: UpdateEnrollmentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnrollmentConfigurationCommandOutput>;
  updateEnrollmentConfiguration(
    args: UpdateEnrollmentConfigurationCommandInput,
    cb: (err: any, data?: UpdateEnrollmentConfigurationCommandOutput) => void
  ): void;
  updateEnrollmentConfiguration(
    args: UpdateEnrollmentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnrollmentConfigurationCommandOutput) => void
  ): void;
}

/**
 * <p> Automation is a feature within Amazon Web Services Compute Optimizer that enables you to apply optimization recommendations to your Amazon Web Services resources, reducing costs and improving performance. You can apply recommended actions directly or create automation rules that implement recommendations on a recurring schedule when they match your specified criteria. With automation rules, set criteria such as Amazon Web Services Region and Resource Tags to target specific geographies and workloads. Configure rules to run daily, weekly, or monthly, and Compute Optimizer continuously evaluates new recommendations against your criteria. Track automation events over time, examine detailed step history, estimate savings achieved, and reverse actions directly from Compute Optimizer when needed. </p>
 * @public
 */
export class ComputeOptimizerAutomation
  extends ComputeOptimizerAutomationClient
  implements ComputeOptimizerAutomation {}
createAggregatedClient(commands, ComputeOptimizerAutomation);
