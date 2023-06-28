// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddAttributesToFindingsCommand,
  AddAttributesToFindingsCommandInput,
  AddAttributesToFindingsCommandOutput,
} from "./commands/AddAttributesToFindingsCommand";
import {
  CreateAssessmentTargetCommand,
  CreateAssessmentTargetCommandInput,
  CreateAssessmentTargetCommandOutput,
} from "./commands/CreateAssessmentTargetCommand";
import {
  CreateAssessmentTemplateCommand,
  CreateAssessmentTemplateCommandInput,
  CreateAssessmentTemplateCommandOutput,
} from "./commands/CreateAssessmentTemplateCommand";
import {
  CreateExclusionsPreviewCommand,
  CreateExclusionsPreviewCommandInput,
  CreateExclusionsPreviewCommandOutput,
} from "./commands/CreateExclusionsPreviewCommand";
import {
  CreateResourceGroupCommand,
  CreateResourceGroupCommandInput,
  CreateResourceGroupCommandOutput,
} from "./commands/CreateResourceGroupCommand";
import {
  DeleteAssessmentRunCommand,
  DeleteAssessmentRunCommandInput,
  DeleteAssessmentRunCommandOutput,
} from "./commands/DeleteAssessmentRunCommand";
import {
  DeleteAssessmentTargetCommand,
  DeleteAssessmentTargetCommandInput,
  DeleteAssessmentTargetCommandOutput,
} from "./commands/DeleteAssessmentTargetCommand";
import {
  DeleteAssessmentTemplateCommand,
  DeleteAssessmentTemplateCommandInput,
  DeleteAssessmentTemplateCommandOutput,
} from "./commands/DeleteAssessmentTemplateCommand";
import {
  DescribeAssessmentRunsCommand,
  DescribeAssessmentRunsCommandInput,
  DescribeAssessmentRunsCommandOutput,
} from "./commands/DescribeAssessmentRunsCommand";
import {
  DescribeAssessmentTargetsCommand,
  DescribeAssessmentTargetsCommandInput,
  DescribeAssessmentTargetsCommandOutput,
} from "./commands/DescribeAssessmentTargetsCommand";
import {
  DescribeAssessmentTemplatesCommand,
  DescribeAssessmentTemplatesCommandInput,
  DescribeAssessmentTemplatesCommandOutput,
} from "./commands/DescribeAssessmentTemplatesCommand";
import {
  DescribeCrossAccountAccessRoleCommand,
  DescribeCrossAccountAccessRoleCommandInput,
  DescribeCrossAccountAccessRoleCommandOutput,
} from "./commands/DescribeCrossAccountAccessRoleCommand";
import {
  DescribeExclusionsCommand,
  DescribeExclusionsCommandInput,
  DescribeExclusionsCommandOutput,
} from "./commands/DescribeExclusionsCommand";
import {
  DescribeFindingsCommand,
  DescribeFindingsCommandInput,
  DescribeFindingsCommandOutput,
} from "./commands/DescribeFindingsCommand";
import {
  DescribeResourceGroupsCommand,
  DescribeResourceGroupsCommandInput,
  DescribeResourceGroupsCommandOutput,
} from "./commands/DescribeResourceGroupsCommand";
import {
  DescribeRulesPackagesCommand,
  DescribeRulesPackagesCommandInput,
  DescribeRulesPackagesCommandOutput,
} from "./commands/DescribeRulesPackagesCommand";
import {
  GetAssessmentReportCommand,
  GetAssessmentReportCommandInput,
  GetAssessmentReportCommandOutput,
} from "./commands/GetAssessmentReportCommand";
import {
  GetExclusionsPreviewCommand,
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput,
} from "./commands/GetExclusionsPreviewCommand";
import {
  GetTelemetryMetadataCommand,
  GetTelemetryMetadataCommandInput,
  GetTelemetryMetadataCommandOutput,
} from "./commands/GetTelemetryMetadataCommand";
import {
  ListAssessmentRunAgentsCommand,
  ListAssessmentRunAgentsCommandInput,
  ListAssessmentRunAgentsCommandOutput,
} from "./commands/ListAssessmentRunAgentsCommand";
import {
  ListAssessmentRunsCommand,
  ListAssessmentRunsCommandInput,
  ListAssessmentRunsCommandOutput,
} from "./commands/ListAssessmentRunsCommand";
import {
  ListAssessmentTargetsCommand,
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput,
} from "./commands/ListAssessmentTargetsCommand";
import {
  ListAssessmentTemplatesCommand,
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput,
} from "./commands/ListAssessmentTemplatesCommand";
import {
  ListEventSubscriptionsCommand,
  ListEventSubscriptionsCommandInput,
  ListEventSubscriptionsCommandOutput,
} from "./commands/ListEventSubscriptionsCommand";
import {
  ListExclusionsCommand,
  ListExclusionsCommandInput,
  ListExclusionsCommandOutput,
} from "./commands/ListExclusionsCommand";
import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "./commands/ListFindingsCommand";
import {
  ListRulesPackagesCommand,
  ListRulesPackagesCommandInput,
  ListRulesPackagesCommandOutput,
} from "./commands/ListRulesPackagesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PreviewAgentsCommand,
  PreviewAgentsCommandInput,
  PreviewAgentsCommandOutput,
} from "./commands/PreviewAgentsCommand";
import {
  RegisterCrossAccountAccessRoleCommand,
  RegisterCrossAccountAccessRoleCommandInput,
  RegisterCrossAccountAccessRoleCommandOutput,
} from "./commands/RegisterCrossAccountAccessRoleCommand";
import {
  RemoveAttributesFromFindingsCommand,
  RemoveAttributesFromFindingsCommandInput,
  RemoveAttributesFromFindingsCommandOutput,
} from "./commands/RemoveAttributesFromFindingsCommand";
import {
  SetTagsForResourceCommand,
  SetTagsForResourceCommandInput,
  SetTagsForResourceCommandOutput,
} from "./commands/SetTagsForResourceCommand";
import {
  StartAssessmentRunCommand,
  StartAssessmentRunCommandInput,
  StartAssessmentRunCommandOutput,
} from "./commands/StartAssessmentRunCommand";
import {
  StopAssessmentRunCommand,
  StopAssessmentRunCommandInput,
  StopAssessmentRunCommandOutput,
} from "./commands/StopAssessmentRunCommand";
import {
  SubscribeToEventCommand,
  SubscribeToEventCommandInput,
  SubscribeToEventCommandOutput,
} from "./commands/SubscribeToEventCommand";
import {
  UnsubscribeFromEventCommand,
  UnsubscribeFromEventCommandInput,
  UnsubscribeFromEventCommandOutput,
} from "./commands/UnsubscribeFromEventCommand";
import {
  UpdateAssessmentTargetCommand,
  UpdateAssessmentTargetCommandInput,
  UpdateAssessmentTargetCommandOutput,
} from "./commands/UpdateAssessmentTargetCommand";
import { InspectorClient, InspectorClientConfig } from "./InspectorClient";

const commands = {
  AddAttributesToFindingsCommand,
  CreateAssessmentTargetCommand,
  CreateAssessmentTemplateCommand,
  CreateExclusionsPreviewCommand,
  CreateResourceGroupCommand,
  DeleteAssessmentRunCommand,
  DeleteAssessmentTargetCommand,
  DeleteAssessmentTemplateCommand,
  DescribeAssessmentRunsCommand,
  DescribeAssessmentTargetsCommand,
  DescribeAssessmentTemplatesCommand,
  DescribeCrossAccountAccessRoleCommand,
  DescribeExclusionsCommand,
  DescribeFindingsCommand,
  DescribeResourceGroupsCommand,
  DescribeRulesPackagesCommand,
  GetAssessmentReportCommand,
  GetExclusionsPreviewCommand,
  GetTelemetryMetadataCommand,
  ListAssessmentRunAgentsCommand,
  ListAssessmentRunsCommand,
  ListAssessmentTargetsCommand,
  ListAssessmentTemplatesCommand,
  ListEventSubscriptionsCommand,
  ListExclusionsCommand,
  ListFindingsCommand,
  ListRulesPackagesCommand,
  ListTagsForResourceCommand,
  PreviewAgentsCommand,
  RegisterCrossAccountAccessRoleCommand,
  RemoveAttributesFromFindingsCommand,
  SetTagsForResourceCommand,
  StartAssessmentRunCommand,
  StopAssessmentRunCommand,
  SubscribeToEventCommand,
  UnsubscribeFromEventCommand,
  UpdateAssessmentTargetCommand,
};

export interface Inspector {
  /**
   * @see {@link AddAttributesToFindingsCommand}
   */
  addAttributesToFindings(
    args: AddAttributesToFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddAttributesToFindingsCommandOutput>;
  addAttributesToFindings(
    args: AddAttributesToFindingsCommandInput,
    cb: (err: any, data?: AddAttributesToFindingsCommandOutput) => void
  ): void;
  addAttributesToFindings(
    args: AddAttributesToFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddAttributesToFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssessmentTargetCommand}
   */
  createAssessmentTarget(
    args: CreateAssessmentTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentTargetCommandOutput>;
  createAssessmentTarget(
    args: CreateAssessmentTargetCommandInput,
    cb: (err: any, data?: CreateAssessmentTargetCommandOutput) => void
  ): void;
  createAssessmentTarget(
    args: CreateAssessmentTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssessmentTemplateCommand}
   */
  createAssessmentTemplate(
    args: CreateAssessmentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentTemplateCommandOutput>;
  createAssessmentTemplate(
    args: CreateAssessmentTemplateCommandInput,
    cb: (err: any, data?: CreateAssessmentTemplateCommandOutput) => void
  ): void;
  createAssessmentTemplate(
    args: CreateAssessmentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExclusionsPreviewCommand}
   */
  createExclusionsPreview(
    args: CreateExclusionsPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExclusionsPreviewCommandOutput>;
  createExclusionsPreview(
    args: CreateExclusionsPreviewCommandInput,
    cb: (err: any, data?: CreateExclusionsPreviewCommandOutput) => void
  ): void;
  createExclusionsPreview(
    args: CreateExclusionsPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExclusionsPreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceGroupCommand}
   */
  createResourceGroup(
    args: CreateResourceGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceGroupCommandOutput>;
  createResourceGroup(
    args: CreateResourceGroupCommandInput,
    cb: (err: any, data?: CreateResourceGroupCommandOutput) => void
  ): void;
  createResourceGroup(
    args: CreateResourceGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssessmentRunCommand}
   */
  deleteAssessmentRun(
    args: DeleteAssessmentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentRunCommandOutput>;
  deleteAssessmentRun(
    args: DeleteAssessmentRunCommandInput,
    cb: (err: any, data?: DeleteAssessmentRunCommandOutput) => void
  ): void;
  deleteAssessmentRun(
    args: DeleteAssessmentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssessmentTargetCommand}
   */
  deleteAssessmentTarget(
    args: DeleteAssessmentTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentTargetCommandOutput>;
  deleteAssessmentTarget(
    args: DeleteAssessmentTargetCommandInput,
    cb: (err: any, data?: DeleteAssessmentTargetCommandOutput) => void
  ): void;
  deleteAssessmentTarget(
    args: DeleteAssessmentTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssessmentTemplateCommand}
   */
  deleteAssessmentTemplate(
    args: DeleteAssessmentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentTemplateCommandOutput>;
  deleteAssessmentTemplate(
    args: DeleteAssessmentTemplateCommandInput,
    cb: (err: any, data?: DeleteAssessmentTemplateCommandOutput) => void
  ): void;
  deleteAssessmentTemplate(
    args: DeleteAssessmentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssessmentRunsCommand}
   */
  describeAssessmentRuns(
    args: DescribeAssessmentRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssessmentRunsCommandOutput>;
  describeAssessmentRuns(
    args: DescribeAssessmentRunsCommandInput,
    cb: (err: any, data?: DescribeAssessmentRunsCommandOutput) => void
  ): void;
  describeAssessmentRuns(
    args: DescribeAssessmentRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssessmentRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssessmentTargetsCommand}
   */
  describeAssessmentTargets(
    args: DescribeAssessmentTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssessmentTargetsCommandOutput>;
  describeAssessmentTargets(
    args: DescribeAssessmentTargetsCommandInput,
    cb: (err: any, data?: DescribeAssessmentTargetsCommandOutput) => void
  ): void;
  describeAssessmentTargets(
    args: DescribeAssessmentTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssessmentTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssessmentTemplatesCommand}
   */
  describeAssessmentTemplates(
    args: DescribeAssessmentTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssessmentTemplatesCommandOutput>;
  describeAssessmentTemplates(
    args: DescribeAssessmentTemplatesCommandInput,
    cb: (err: any, data?: DescribeAssessmentTemplatesCommandOutput) => void
  ): void;
  describeAssessmentTemplates(
    args: DescribeAssessmentTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssessmentTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCrossAccountAccessRoleCommand}
   */
  describeCrossAccountAccessRole(
    args: DescribeCrossAccountAccessRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCrossAccountAccessRoleCommandOutput>;
  describeCrossAccountAccessRole(
    args: DescribeCrossAccountAccessRoleCommandInput,
    cb: (err: any, data?: DescribeCrossAccountAccessRoleCommandOutput) => void
  ): void;
  describeCrossAccountAccessRole(
    args: DescribeCrossAccountAccessRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCrossAccountAccessRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExclusionsCommand}
   */
  describeExclusions(
    args: DescribeExclusionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExclusionsCommandOutput>;
  describeExclusions(
    args: DescribeExclusionsCommandInput,
    cb: (err: any, data?: DescribeExclusionsCommandOutput) => void
  ): void;
  describeExclusions(
    args: DescribeExclusionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExclusionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFindingsCommand}
   */
  describeFindings(
    args: DescribeFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFindingsCommandOutput>;
  describeFindings(
    args: DescribeFindingsCommandInput,
    cb: (err: any, data?: DescribeFindingsCommandOutput) => void
  ): void;
  describeFindings(
    args: DescribeFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourceGroupsCommand}
   */
  describeResourceGroups(
    args: DescribeResourceGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourceGroupsCommandOutput>;
  describeResourceGroups(
    args: DescribeResourceGroupsCommandInput,
    cb: (err: any, data?: DescribeResourceGroupsCommandOutput) => void
  ): void;
  describeResourceGroups(
    args: DescribeResourceGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourceGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRulesPackagesCommand}
   */
  describeRulesPackages(
    args: DescribeRulesPackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRulesPackagesCommandOutput>;
  describeRulesPackages(
    args: DescribeRulesPackagesCommandInput,
    cb: (err: any, data?: DescribeRulesPackagesCommandOutput) => void
  ): void;
  describeRulesPackages(
    args: DescribeRulesPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRulesPackagesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssessmentReportCommand}
   */
  getAssessmentReport(
    args: GetAssessmentReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssessmentReportCommandOutput>;
  getAssessmentReport(
    args: GetAssessmentReportCommandInput,
    cb: (err: any, data?: GetAssessmentReportCommandOutput) => void
  ): void;
  getAssessmentReport(
    args: GetAssessmentReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExclusionsPreviewCommand}
   */
  getExclusionsPreview(
    args: GetExclusionsPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExclusionsPreviewCommandOutput>;
  getExclusionsPreview(
    args: GetExclusionsPreviewCommandInput,
    cb: (err: any, data?: GetExclusionsPreviewCommandOutput) => void
  ): void;
  getExclusionsPreview(
    args: GetExclusionsPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExclusionsPreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryMetadataCommand}
   */
  getTelemetryMetadata(
    args: GetTelemetryMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTelemetryMetadataCommandOutput>;
  getTelemetryMetadata(
    args: GetTelemetryMetadataCommandInput,
    cb: (err: any, data?: GetTelemetryMetadataCommandOutput) => void
  ): void;
  getTelemetryMetadata(
    args: GetTelemetryMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTelemetryMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssessmentRunAgentsCommand}
   */
  listAssessmentRunAgents(
    args: ListAssessmentRunAgentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentRunAgentsCommandOutput>;
  listAssessmentRunAgents(
    args: ListAssessmentRunAgentsCommandInput,
    cb: (err: any, data?: ListAssessmentRunAgentsCommandOutput) => void
  ): void;
  listAssessmentRunAgents(
    args: ListAssessmentRunAgentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentRunAgentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssessmentRunsCommand}
   */
  listAssessmentRuns(
    args: ListAssessmentRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentRunsCommandOutput>;
  listAssessmentRuns(
    args: ListAssessmentRunsCommandInput,
    cb: (err: any, data?: ListAssessmentRunsCommandOutput) => void
  ): void;
  listAssessmentRuns(
    args: ListAssessmentRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssessmentTargetsCommand}
   */
  listAssessmentTargets(
    args: ListAssessmentTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentTargetsCommandOutput>;
  listAssessmentTargets(
    args: ListAssessmentTargetsCommandInput,
    cb: (err: any, data?: ListAssessmentTargetsCommandOutput) => void
  ): void;
  listAssessmentTargets(
    args: ListAssessmentTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssessmentTemplatesCommand}
   */
  listAssessmentTemplates(
    args: ListAssessmentTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentTemplatesCommandOutput>;
  listAssessmentTemplates(
    args: ListAssessmentTemplatesCommandInput,
    cb: (err: any, data?: ListAssessmentTemplatesCommandOutput) => void
  ): void;
  listAssessmentTemplates(
    args: ListAssessmentTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventSubscriptionsCommand}
   */
  listEventSubscriptions(
    args: ListEventSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventSubscriptionsCommandOutput>;
  listEventSubscriptions(
    args: ListEventSubscriptionsCommandInput,
    cb: (err: any, data?: ListEventSubscriptionsCommandOutput) => void
  ): void;
  listEventSubscriptions(
    args: ListEventSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExclusionsCommand}
   */
  listExclusions(
    args: ListExclusionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExclusionsCommandOutput>;
  listExclusions(args: ListExclusionsCommandInput, cb: (err: any, data?: ListExclusionsCommandOutput) => void): void;
  listExclusions(
    args: ListExclusionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExclusionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsCommand}
   */
  listFindings(args: ListFindingsCommandInput, options?: __HttpHandlerOptions): Promise<ListFindingsCommandOutput>;
  listFindings(args: ListFindingsCommandInput, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
  listFindings(
    args: ListFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesPackagesCommand}
   */
  listRulesPackages(
    args: ListRulesPackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRulesPackagesCommandOutput>;
  listRulesPackages(
    args: ListRulesPackagesCommandInput,
    cb: (err: any, data?: ListRulesPackagesCommandOutput) => void
  ): void;
  listRulesPackages(
    args: ListRulesPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesPackagesCommandOutput) => void
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
   * @see {@link PreviewAgentsCommand}
   */
  previewAgents(args: PreviewAgentsCommandInput, options?: __HttpHandlerOptions): Promise<PreviewAgentsCommandOutput>;
  previewAgents(args: PreviewAgentsCommandInput, cb: (err: any, data?: PreviewAgentsCommandOutput) => void): void;
  previewAgents(
    args: PreviewAgentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PreviewAgentsCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterCrossAccountAccessRoleCommand}
   */
  registerCrossAccountAccessRole(
    args: RegisterCrossAccountAccessRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterCrossAccountAccessRoleCommandOutput>;
  registerCrossAccountAccessRole(
    args: RegisterCrossAccountAccessRoleCommandInput,
    cb: (err: any, data?: RegisterCrossAccountAccessRoleCommandOutput) => void
  ): void;
  registerCrossAccountAccessRole(
    args: RegisterCrossAccountAccessRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterCrossAccountAccessRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveAttributesFromFindingsCommand}
   */
  removeAttributesFromFindings(
    args: RemoveAttributesFromFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAttributesFromFindingsCommandOutput>;
  removeAttributesFromFindings(
    args: RemoveAttributesFromFindingsCommandInput,
    cb: (err: any, data?: RemoveAttributesFromFindingsCommandOutput) => void
  ): void;
  removeAttributesFromFindings(
    args: RemoveAttributesFromFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAttributesFromFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link SetTagsForResourceCommand}
   */
  setTagsForResource(
    args: SetTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTagsForResourceCommandOutput>;
  setTagsForResource(
    args: SetTagsForResourceCommandInput,
    cb: (err: any, data?: SetTagsForResourceCommandOutput) => void
  ): void;
  setTagsForResource(
    args: SetTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAssessmentRunCommand}
   */
  startAssessmentRun(
    args: StartAssessmentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAssessmentRunCommandOutput>;
  startAssessmentRun(
    args: StartAssessmentRunCommandInput,
    cb: (err: any, data?: StartAssessmentRunCommandOutput) => void
  ): void;
  startAssessmentRun(
    args: StartAssessmentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAssessmentRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopAssessmentRunCommand}
   */
  stopAssessmentRun(
    args: StopAssessmentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAssessmentRunCommandOutput>;
  stopAssessmentRun(
    args: StopAssessmentRunCommandInput,
    cb: (err: any, data?: StopAssessmentRunCommandOutput) => void
  ): void;
  stopAssessmentRun(
    args: StopAssessmentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAssessmentRunCommandOutput) => void
  ): void;

  /**
   * @see {@link SubscribeToEventCommand}
   */
  subscribeToEvent(
    args: SubscribeToEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubscribeToEventCommandOutput>;
  subscribeToEvent(
    args: SubscribeToEventCommandInput,
    cb: (err: any, data?: SubscribeToEventCommandOutput) => void
  ): void;
  subscribeToEvent(
    args: SubscribeToEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubscribeToEventCommandOutput) => void
  ): void;

  /**
   * @see {@link UnsubscribeFromEventCommand}
   */
  unsubscribeFromEvent(
    args: UnsubscribeFromEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnsubscribeFromEventCommandOutput>;
  unsubscribeFromEvent(
    args: UnsubscribeFromEventCommandInput,
    cb: (err: any, data?: UnsubscribeFromEventCommandOutput) => void
  ): void;
  unsubscribeFromEvent(
    args: UnsubscribeFromEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnsubscribeFromEventCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssessmentTargetCommand}
   */
  updateAssessmentTarget(
    args: UpdateAssessmentTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentTargetCommandOutput>;
  updateAssessmentTarget(
    args: UpdateAssessmentTargetCommandInput,
    cb: (err: any, data?: UpdateAssessmentTargetCommandOutput) => void
  ): void;
  updateAssessmentTarget(
    args: UpdateAssessmentTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentTargetCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Inspector</fullname>
 *          <p>Amazon Inspector enables you to analyze the behavior of your AWS resources and to
 *          identify potential security issues. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"> Amazon Inspector User
 *             Guide</a>.</p>
 */
export class Inspector extends InspectorClient implements Inspector {}
createAggregatedClient(commands, Inspector);
