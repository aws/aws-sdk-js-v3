// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AddAttributesToFindingsCommandInput,
  type AddAttributesToFindingsCommandOutput,
  AddAttributesToFindingsCommand,
} from "./commands/AddAttributesToFindingsCommand";
import {
  type CreateAssessmentTargetCommandInput,
  type CreateAssessmentTargetCommandOutput,
  CreateAssessmentTargetCommand,
} from "./commands/CreateAssessmentTargetCommand";
import {
  type CreateAssessmentTemplateCommandInput,
  type CreateAssessmentTemplateCommandOutput,
  CreateAssessmentTemplateCommand,
} from "./commands/CreateAssessmentTemplateCommand";
import {
  type CreateExclusionsPreviewCommandInput,
  type CreateExclusionsPreviewCommandOutput,
  CreateExclusionsPreviewCommand,
} from "./commands/CreateExclusionsPreviewCommand";
import {
  type CreateResourceGroupCommandInput,
  type CreateResourceGroupCommandOutput,
  CreateResourceGroupCommand,
} from "./commands/CreateResourceGroupCommand";
import {
  type DeleteAssessmentRunCommandInput,
  type DeleteAssessmentRunCommandOutput,
  DeleteAssessmentRunCommand,
} from "./commands/DeleteAssessmentRunCommand";
import {
  type DeleteAssessmentTargetCommandInput,
  type DeleteAssessmentTargetCommandOutput,
  DeleteAssessmentTargetCommand,
} from "./commands/DeleteAssessmentTargetCommand";
import {
  type DeleteAssessmentTemplateCommandInput,
  type DeleteAssessmentTemplateCommandOutput,
  DeleteAssessmentTemplateCommand,
} from "./commands/DeleteAssessmentTemplateCommand";
import {
  type DescribeAssessmentRunsCommandInput,
  type DescribeAssessmentRunsCommandOutput,
  DescribeAssessmentRunsCommand,
} from "./commands/DescribeAssessmentRunsCommand";
import {
  type DescribeAssessmentTargetsCommandInput,
  type DescribeAssessmentTargetsCommandOutput,
  DescribeAssessmentTargetsCommand,
} from "./commands/DescribeAssessmentTargetsCommand";
import {
  type DescribeAssessmentTemplatesCommandInput,
  type DescribeAssessmentTemplatesCommandOutput,
  DescribeAssessmentTemplatesCommand,
} from "./commands/DescribeAssessmentTemplatesCommand";
import {
  type DescribeCrossAccountAccessRoleCommandInput,
  type DescribeCrossAccountAccessRoleCommandOutput,
  DescribeCrossAccountAccessRoleCommand,
} from "./commands/DescribeCrossAccountAccessRoleCommand";
import {
  type DescribeExclusionsCommandInput,
  type DescribeExclusionsCommandOutput,
  DescribeExclusionsCommand,
} from "./commands/DescribeExclusionsCommand";
import {
  type DescribeFindingsCommandInput,
  type DescribeFindingsCommandOutput,
  DescribeFindingsCommand,
} from "./commands/DescribeFindingsCommand";
import {
  type DescribeResourceGroupsCommandInput,
  type DescribeResourceGroupsCommandOutput,
  DescribeResourceGroupsCommand,
} from "./commands/DescribeResourceGroupsCommand";
import {
  type DescribeRulesPackagesCommandInput,
  type DescribeRulesPackagesCommandOutput,
  DescribeRulesPackagesCommand,
} from "./commands/DescribeRulesPackagesCommand";
import {
  type GetAssessmentReportCommandInput,
  type GetAssessmentReportCommandOutput,
  GetAssessmentReportCommand,
} from "./commands/GetAssessmentReportCommand";
import {
  type GetExclusionsPreviewCommandInput,
  type GetExclusionsPreviewCommandOutput,
  GetExclusionsPreviewCommand,
} from "./commands/GetExclusionsPreviewCommand";
import {
  type GetTelemetryMetadataCommandInput,
  type GetTelemetryMetadataCommandOutput,
  GetTelemetryMetadataCommand,
} from "./commands/GetTelemetryMetadataCommand";
import {
  type ListAssessmentRunAgentsCommandInput,
  type ListAssessmentRunAgentsCommandOutput,
  ListAssessmentRunAgentsCommand,
} from "./commands/ListAssessmentRunAgentsCommand";
import {
  type ListAssessmentRunsCommandInput,
  type ListAssessmentRunsCommandOutput,
  ListAssessmentRunsCommand,
} from "./commands/ListAssessmentRunsCommand";
import {
  type ListAssessmentTargetsCommandInput,
  type ListAssessmentTargetsCommandOutput,
  ListAssessmentTargetsCommand,
} from "./commands/ListAssessmentTargetsCommand";
import {
  type ListAssessmentTemplatesCommandInput,
  type ListAssessmentTemplatesCommandOutput,
  ListAssessmentTemplatesCommand,
} from "./commands/ListAssessmentTemplatesCommand";
import {
  type ListEventSubscriptionsCommandInput,
  type ListEventSubscriptionsCommandOutput,
  ListEventSubscriptionsCommand,
} from "./commands/ListEventSubscriptionsCommand";
import {
  type ListExclusionsCommandInput,
  type ListExclusionsCommandOutput,
  ListExclusionsCommand,
} from "./commands/ListExclusionsCommand";
import {
  type ListFindingsCommandInput,
  type ListFindingsCommandOutput,
  ListFindingsCommand,
} from "./commands/ListFindingsCommand";
import {
  type ListRulesPackagesCommandInput,
  type ListRulesPackagesCommandOutput,
  ListRulesPackagesCommand,
} from "./commands/ListRulesPackagesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PreviewAgentsCommandInput,
  type PreviewAgentsCommandOutput,
  PreviewAgentsCommand,
} from "./commands/PreviewAgentsCommand";
import {
  type RegisterCrossAccountAccessRoleCommandInput,
  type RegisterCrossAccountAccessRoleCommandOutput,
  RegisterCrossAccountAccessRoleCommand,
} from "./commands/RegisterCrossAccountAccessRoleCommand";
import {
  type RemoveAttributesFromFindingsCommandInput,
  type RemoveAttributesFromFindingsCommandOutput,
  RemoveAttributesFromFindingsCommand,
} from "./commands/RemoveAttributesFromFindingsCommand";
import {
  type SetTagsForResourceCommandInput,
  type SetTagsForResourceCommandOutput,
  SetTagsForResourceCommand,
} from "./commands/SetTagsForResourceCommand";
import {
  type StartAssessmentRunCommandInput,
  type StartAssessmentRunCommandOutput,
  StartAssessmentRunCommand,
} from "./commands/StartAssessmentRunCommand";
import {
  type StopAssessmentRunCommandInput,
  type StopAssessmentRunCommandOutput,
  StopAssessmentRunCommand,
} from "./commands/StopAssessmentRunCommand";
import {
  type SubscribeToEventCommandInput,
  type SubscribeToEventCommandOutput,
  SubscribeToEventCommand,
} from "./commands/SubscribeToEventCommand";
import {
  type UnsubscribeFromEventCommandInput,
  type UnsubscribeFromEventCommandOutput,
  UnsubscribeFromEventCommand,
} from "./commands/UnsubscribeFromEventCommand";
import {
  type UpdateAssessmentTargetCommandInput,
  type UpdateAssessmentTargetCommandOutput,
  UpdateAssessmentTargetCommand,
} from "./commands/UpdateAssessmentTargetCommand";
import { InspectorClient } from "./InspectorClient";
import { paginateGetExclusionsPreview } from "./pagination/GetExclusionsPreviewPaginator";
import { paginateListAssessmentRunAgents } from "./pagination/ListAssessmentRunAgentsPaginator";
import { paginateListAssessmentRuns } from "./pagination/ListAssessmentRunsPaginator";
import { paginateListAssessmentTargets } from "./pagination/ListAssessmentTargetsPaginator";
import { paginateListAssessmentTemplates } from "./pagination/ListAssessmentTemplatesPaginator";
import { paginateListEventSubscriptions } from "./pagination/ListEventSubscriptionsPaginator";
import { paginateListExclusions } from "./pagination/ListExclusionsPaginator";
import { paginateListFindings } from "./pagination/ListFindingsPaginator";
import { paginateListRulesPackages } from "./pagination/ListRulesPackagesPaginator";
import { paginatePreviewAgents } from "./pagination/PreviewAgentsPaginator";

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
const paginators = {
  paginateGetExclusionsPreview,
  paginateListAssessmentRunAgents,
  paginateListAssessmentRuns,
  paginateListAssessmentTargets,
  paginateListAssessmentTemplates,
  paginateListEventSubscriptions,
  paginateListExclusions,
  paginateListFindings,
  paginateListRulesPackages,
  paginatePreviewAgents,
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
  describeCrossAccountAccessRole(): Promise<DescribeCrossAccountAccessRoleCommandOutput>;
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
  listAssessmentRuns(): Promise<ListAssessmentRunsCommandOutput>;
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
  listAssessmentTargets(): Promise<ListAssessmentTargetsCommandOutput>;
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
  listAssessmentTemplates(): Promise<ListAssessmentTemplatesCommandOutput>;
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
  listEventSubscriptions(): Promise<ListEventSubscriptionsCommandOutput>;
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
  listExclusions(
    args: ListExclusionsCommandInput,
    cb: (err: any, data?: ListExclusionsCommandOutput) => void
  ): void;
  listExclusions(
    args: ListExclusionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExclusionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsCommand}
   */
  listFindings(): Promise<ListFindingsCommandOutput>;
  listFindings(
    args: ListFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsCommandOutput>;
  listFindings(
    args: ListFindingsCommandInput,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;
  listFindings(
    args: ListFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesPackagesCommand}
   */
  listRulesPackages(): Promise<ListRulesPackagesCommandOutput>;
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
  previewAgents(
    args: PreviewAgentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PreviewAgentsCommandOutput>;
  previewAgents(
    args: PreviewAgentsCommandInput,
    cb: (err: any, data?: PreviewAgentsCommandOutput) => void
  ): void;
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

  /**
   * @see {@link GetExclusionsPreviewCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetExclusionsPreviewCommandOutput}.
   */
  paginateGetExclusionsPreview(
    args: GetExclusionsPreviewCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetExclusionsPreviewCommandOutput>;

  /**
   * @see {@link ListAssessmentRunAgentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssessmentRunAgentsCommandOutput}.
   */
  paginateListAssessmentRunAgents(
    args: ListAssessmentRunAgentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssessmentRunAgentsCommandOutput>;

  /**
   * @see {@link ListAssessmentRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssessmentRunsCommandOutput}.
   */
  paginateListAssessmentRuns(
    args?: ListAssessmentRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssessmentRunsCommandOutput>;

  /**
   * @see {@link ListAssessmentTargetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssessmentTargetsCommandOutput}.
   */
  paginateListAssessmentTargets(
    args?: ListAssessmentTargetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssessmentTargetsCommandOutput>;

  /**
   * @see {@link ListAssessmentTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssessmentTemplatesCommandOutput}.
   */
  paginateListAssessmentTemplates(
    args?: ListAssessmentTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssessmentTemplatesCommandOutput>;

  /**
   * @see {@link ListEventSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventSubscriptionsCommandOutput}.
   */
  paginateListEventSubscriptions(
    args?: ListEventSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventSubscriptionsCommandOutput>;

  /**
   * @see {@link ListExclusionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExclusionsCommandOutput}.
   */
  paginateListExclusions(
    args: ListExclusionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExclusionsCommandOutput>;

  /**
   * @see {@link ListFindingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFindingsCommandOutput}.
   */
  paginateListFindings(
    args?: ListFindingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFindingsCommandOutput>;

  /**
   * @see {@link ListRulesPackagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRulesPackagesCommandOutput}.
   */
  paginateListRulesPackages(
    args?: ListRulesPackagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRulesPackagesCommandOutput>;

  /**
   * @see {@link PreviewAgentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link PreviewAgentsCommandOutput}.
   */
  paginatePreviewAgents(
    args: PreviewAgentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<PreviewAgentsCommandOutput>;
}

/**
 * <fullname>Amazon Inspector</fullname>
 *          <p>Amazon Inspector enables you to analyze the behavior of your AWS resources and to
 *          identify potential security issues. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"> Amazon Inspector User
 *             Guide</a>.</p>
 * @public
 */
export class Inspector extends InspectorClient implements Inspector {}
createAggregatedClient(commands, Inspector, { paginators });
