// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AcceptResourceGroupingRecommendationsCommandInput,
  type AcceptResourceGroupingRecommendationsCommandOutput,
  AcceptResourceGroupingRecommendationsCommand,
} from "./commands/AcceptResourceGroupingRecommendationsCommand";
import {
  type AddDraftAppVersionResourceMappingsCommandInput,
  type AddDraftAppVersionResourceMappingsCommandOutput,
  AddDraftAppVersionResourceMappingsCommand,
} from "./commands/AddDraftAppVersionResourceMappingsCommand";
import {
  type BatchUpdateRecommendationStatusCommandInput,
  type BatchUpdateRecommendationStatusCommandOutput,
  BatchUpdateRecommendationStatusCommand,
} from "./commands/BatchUpdateRecommendationStatusCommand";
import { type CreateAppCommandInput, type CreateAppCommandOutput, CreateAppCommand } from "./commands/CreateAppCommand";
import {
  type CreateAppVersionAppComponentCommandInput,
  type CreateAppVersionAppComponentCommandOutput,
  CreateAppVersionAppComponentCommand,
} from "./commands/CreateAppVersionAppComponentCommand";
import {
  type CreateAppVersionResourceCommandInput,
  type CreateAppVersionResourceCommandOutput,
  CreateAppVersionResourceCommand,
} from "./commands/CreateAppVersionResourceCommand";
import {
  type CreateRecommendationTemplateCommandInput,
  type CreateRecommendationTemplateCommandOutput,
  CreateRecommendationTemplateCommand,
} from "./commands/CreateRecommendationTemplateCommand";
import {
  type CreateResiliencyPolicyCommandInput,
  type CreateResiliencyPolicyCommandOutput,
  CreateResiliencyPolicyCommand,
} from "./commands/CreateResiliencyPolicyCommand";
import {
  type DeleteAppAssessmentCommandInput,
  type DeleteAppAssessmentCommandOutput,
  DeleteAppAssessmentCommand,
} from "./commands/DeleteAppAssessmentCommand";
import { type DeleteAppCommandInput, type DeleteAppCommandOutput, DeleteAppCommand } from "./commands/DeleteAppCommand";
import {
  type DeleteAppInputSourceCommandInput,
  type DeleteAppInputSourceCommandOutput,
  DeleteAppInputSourceCommand,
} from "./commands/DeleteAppInputSourceCommand";
import {
  type DeleteAppVersionAppComponentCommandInput,
  type DeleteAppVersionAppComponentCommandOutput,
  DeleteAppVersionAppComponentCommand,
} from "./commands/DeleteAppVersionAppComponentCommand";
import {
  type DeleteAppVersionResourceCommandInput,
  type DeleteAppVersionResourceCommandOutput,
  DeleteAppVersionResourceCommand,
} from "./commands/DeleteAppVersionResourceCommand";
import {
  type DeleteRecommendationTemplateCommandInput,
  type DeleteRecommendationTemplateCommandOutput,
  DeleteRecommendationTemplateCommand,
} from "./commands/DeleteRecommendationTemplateCommand";
import {
  type DeleteResiliencyPolicyCommandInput,
  type DeleteResiliencyPolicyCommandOutput,
  DeleteResiliencyPolicyCommand,
} from "./commands/DeleteResiliencyPolicyCommand";
import {
  type DescribeAppAssessmentCommandInput,
  type DescribeAppAssessmentCommandOutput,
  DescribeAppAssessmentCommand,
} from "./commands/DescribeAppAssessmentCommand";
import {
  type DescribeAppCommandInput,
  type DescribeAppCommandOutput,
  DescribeAppCommand,
} from "./commands/DescribeAppCommand";
import {
  type DescribeAppVersionAppComponentCommandInput,
  type DescribeAppVersionAppComponentCommandOutput,
  DescribeAppVersionAppComponentCommand,
} from "./commands/DescribeAppVersionAppComponentCommand";
import {
  type DescribeAppVersionCommandInput,
  type DescribeAppVersionCommandOutput,
  DescribeAppVersionCommand,
} from "./commands/DescribeAppVersionCommand";
import {
  type DescribeAppVersionResourceCommandInput,
  type DescribeAppVersionResourceCommandOutput,
  DescribeAppVersionResourceCommand,
} from "./commands/DescribeAppVersionResourceCommand";
import {
  type DescribeAppVersionResourcesResolutionStatusCommandInput,
  type DescribeAppVersionResourcesResolutionStatusCommandOutput,
  DescribeAppVersionResourcesResolutionStatusCommand,
} from "./commands/DescribeAppVersionResourcesResolutionStatusCommand";
import {
  type DescribeAppVersionTemplateCommandInput,
  type DescribeAppVersionTemplateCommandOutput,
  DescribeAppVersionTemplateCommand,
} from "./commands/DescribeAppVersionTemplateCommand";
import {
  type DescribeDraftAppVersionResourcesImportStatusCommandInput,
  type DescribeDraftAppVersionResourcesImportStatusCommandOutput,
  DescribeDraftAppVersionResourcesImportStatusCommand,
} from "./commands/DescribeDraftAppVersionResourcesImportStatusCommand";
import {
  type DescribeMetricsExportCommandInput,
  type DescribeMetricsExportCommandOutput,
  DescribeMetricsExportCommand,
} from "./commands/DescribeMetricsExportCommand";
import {
  type DescribeResiliencyPolicyCommandInput,
  type DescribeResiliencyPolicyCommandOutput,
  DescribeResiliencyPolicyCommand,
} from "./commands/DescribeResiliencyPolicyCommand";
import {
  type DescribeResourceGroupingRecommendationTaskCommandInput,
  type DescribeResourceGroupingRecommendationTaskCommandOutput,
  DescribeResourceGroupingRecommendationTaskCommand,
} from "./commands/DescribeResourceGroupingRecommendationTaskCommand";
import {
  type ImportResourcesToDraftAppVersionCommandInput,
  type ImportResourcesToDraftAppVersionCommandOutput,
  ImportResourcesToDraftAppVersionCommand,
} from "./commands/ImportResourcesToDraftAppVersionCommand";
import {
  type ListAlarmRecommendationsCommandInput,
  type ListAlarmRecommendationsCommandOutput,
  ListAlarmRecommendationsCommand,
} from "./commands/ListAlarmRecommendationsCommand";
import {
  type ListAppAssessmentComplianceDriftsCommandInput,
  type ListAppAssessmentComplianceDriftsCommandOutput,
  ListAppAssessmentComplianceDriftsCommand,
} from "./commands/ListAppAssessmentComplianceDriftsCommand";
import {
  type ListAppAssessmentResourceDriftsCommandInput,
  type ListAppAssessmentResourceDriftsCommandOutput,
  ListAppAssessmentResourceDriftsCommand,
} from "./commands/ListAppAssessmentResourceDriftsCommand";
import {
  type ListAppAssessmentsCommandInput,
  type ListAppAssessmentsCommandOutput,
  ListAppAssessmentsCommand,
} from "./commands/ListAppAssessmentsCommand";
import {
  type ListAppComponentCompliancesCommandInput,
  type ListAppComponentCompliancesCommandOutput,
  ListAppComponentCompliancesCommand,
} from "./commands/ListAppComponentCompliancesCommand";
import {
  type ListAppComponentRecommendationsCommandInput,
  type ListAppComponentRecommendationsCommandOutput,
  ListAppComponentRecommendationsCommand,
} from "./commands/ListAppComponentRecommendationsCommand";
import {
  type ListAppInputSourcesCommandInput,
  type ListAppInputSourcesCommandOutput,
  ListAppInputSourcesCommand,
} from "./commands/ListAppInputSourcesCommand";
import { type ListAppsCommandInput, type ListAppsCommandOutput, ListAppsCommand } from "./commands/ListAppsCommand";
import {
  type ListAppVersionAppComponentsCommandInput,
  type ListAppVersionAppComponentsCommandOutput,
  ListAppVersionAppComponentsCommand,
} from "./commands/ListAppVersionAppComponentsCommand";
import {
  type ListAppVersionResourceMappingsCommandInput,
  type ListAppVersionResourceMappingsCommandOutput,
  ListAppVersionResourceMappingsCommand,
} from "./commands/ListAppVersionResourceMappingsCommand";
import {
  type ListAppVersionResourcesCommandInput,
  type ListAppVersionResourcesCommandOutput,
  ListAppVersionResourcesCommand,
} from "./commands/ListAppVersionResourcesCommand";
import {
  type ListAppVersionsCommandInput,
  type ListAppVersionsCommandOutput,
  ListAppVersionsCommand,
} from "./commands/ListAppVersionsCommand";
import {
  type ListMetricsCommandInput,
  type ListMetricsCommandOutput,
  ListMetricsCommand,
} from "./commands/ListMetricsCommand";
import {
  type ListRecommendationTemplatesCommandInput,
  type ListRecommendationTemplatesCommandOutput,
  ListRecommendationTemplatesCommand,
} from "./commands/ListRecommendationTemplatesCommand";
import {
  type ListResiliencyPoliciesCommandInput,
  type ListResiliencyPoliciesCommandOutput,
  ListResiliencyPoliciesCommand,
} from "./commands/ListResiliencyPoliciesCommand";
import {
  type ListResourceGroupingRecommendationsCommandInput,
  type ListResourceGroupingRecommendationsCommandOutput,
  ListResourceGroupingRecommendationsCommand,
} from "./commands/ListResourceGroupingRecommendationsCommand";
import {
  type ListSopRecommendationsCommandInput,
  type ListSopRecommendationsCommandOutput,
  ListSopRecommendationsCommand,
} from "./commands/ListSopRecommendationsCommand";
import {
  type ListSuggestedResiliencyPoliciesCommandInput,
  type ListSuggestedResiliencyPoliciesCommandOutput,
  ListSuggestedResiliencyPoliciesCommand,
} from "./commands/ListSuggestedResiliencyPoliciesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTestRecommendationsCommandInput,
  type ListTestRecommendationsCommandOutput,
  ListTestRecommendationsCommand,
} from "./commands/ListTestRecommendationsCommand";
import {
  type ListUnsupportedAppVersionResourcesCommandInput,
  type ListUnsupportedAppVersionResourcesCommandOutput,
  ListUnsupportedAppVersionResourcesCommand,
} from "./commands/ListUnsupportedAppVersionResourcesCommand";
import {
  type PublishAppVersionCommandInput,
  type PublishAppVersionCommandOutput,
  PublishAppVersionCommand,
} from "./commands/PublishAppVersionCommand";
import {
  type PutDraftAppVersionTemplateCommandInput,
  type PutDraftAppVersionTemplateCommandOutput,
  PutDraftAppVersionTemplateCommand,
} from "./commands/PutDraftAppVersionTemplateCommand";
import {
  type RejectResourceGroupingRecommendationsCommandInput,
  type RejectResourceGroupingRecommendationsCommandOutput,
  RejectResourceGroupingRecommendationsCommand,
} from "./commands/RejectResourceGroupingRecommendationsCommand";
import {
  type RemoveDraftAppVersionResourceMappingsCommandInput,
  type RemoveDraftAppVersionResourceMappingsCommandOutput,
  RemoveDraftAppVersionResourceMappingsCommand,
} from "./commands/RemoveDraftAppVersionResourceMappingsCommand";
import {
  type ResolveAppVersionResourcesCommandInput,
  type ResolveAppVersionResourcesCommandOutput,
  ResolveAppVersionResourcesCommand,
} from "./commands/ResolveAppVersionResourcesCommand";
import {
  type StartAppAssessmentCommandInput,
  type StartAppAssessmentCommandOutput,
  StartAppAssessmentCommand,
} from "./commands/StartAppAssessmentCommand";
import {
  type StartMetricsExportCommandInput,
  type StartMetricsExportCommandOutput,
  StartMetricsExportCommand,
} from "./commands/StartMetricsExportCommand";
import {
  type StartResourceGroupingRecommendationTaskCommandInput,
  type StartResourceGroupingRecommendationTaskCommandOutput,
  StartResourceGroupingRecommendationTaskCommand,
} from "./commands/StartResourceGroupingRecommendationTaskCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import { type UpdateAppCommandInput, type UpdateAppCommandOutput, UpdateAppCommand } from "./commands/UpdateAppCommand";
import {
  type UpdateAppVersionAppComponentCommandInput,
  type UpdateAppVersionAppComponentCommandOutput,
  UpdateAppVersionAppComponentCommand,
} from "./commands/UpdateAppVersionAppComponentCommand";
import {
  type UpdateAppVersionCommandInput,
  type UpdateAppVersionCommandOutput,
  UpdateAppVersionCommand,
} from "./commands/UpdateAppVersionCommand";
import {
  type UpdateAppVersionResourceCommandInput,
  type UpdateAppVersionResourceCommandOutput,
  UpdateAppVersionResourceCommand,
} from "./commands/UpdateAppVersionResourceCommand";
import {
  type UpdateResiliencyPolicyCommandInput,
  type UpdateResiliencyPolicyCommandOutput,
  UpdateResiliencyPolicyCommand,
} from "./commands/UpdateResiliencyPolicyCommand";
import { paginateListAlarmRecommendations } from "./pagination/ListAlarmRecommendationsPaginator";
import { paginateListAppAssessmentComplianceDrifts } from "./pagination/ListAppAssessmentComplianceDriftsPaginator";
import { paginateListAppAssessmentResourceDrifts } from "./pagination/ListAppAssessmentResourceDriftsPaginator";
import { paginateListAppAssessments } from "./pagination/ListAppAssessmentsPaginator";
import { paginateListAppComponentCompliances } from "./pagination/ListAppComponentCompliancesPaginator";
import { paginateListAppComponentRecommendations } from "./pagination/ListAppComponentRecommendationsPaginator";
import { paginateListAppInputSources } from "./pagination/ListAppInputSourcesPaginator";
import { paginateListApps } from "./pagination/ListAppsPaginator";
import { paginateListAppVersionAppComponents } from "./pagination/ListAppVersionAppComponentsPaginator";
import { paginateListAppVersionResourceMappings } from "./pagination/ListAppVersionResourceMappingsPaginator";
import { paginateListAppVersionResources } from "./pagination/ListAppVersionResourcesPaginator";
import { paginateListAppVersions } from "./pagination/ListAppVersionsPaginator";
import { paginateListMetrics } from "./pagination/ListMetricsPaginator";
import { paginateListRecommendationTemplates } from "./pagination/ListRecommendationTemplatesPaginator";
import { paginateListResiliencyPolicies } from "./pagination/ListResiliencyPoliciesPaginator";
import { paginateListResourceGroupingRecommendations } from "./pagination/ListResourceGroupingRecommendationsPaginator";
import { paginateListSopRecommendations } from "./pagination/ListSopRecommendationsPaginator";
import { paginateListSuggestedResiliencyPolicies } from "./pagination/ListSuggestedResiliencyPoliciesPaginator";
import { paginateListTestRecommendations } from "./pagination/ListTestRecommendationsPaginator";
import { paginateListUnsupportedAppVersionResources } from "./pagination/ListUnsupportedAppVersionResourcesPaginator";
import { ResiliencehubClient } from "./ResiliencehubClient";

const commands = {
  AcceptResourceGroupingRecommendationsCommand,
  AddDraftAppVersionResourceMappingsCommand,
  BatchUpdateRecommendationStatusCommand,
  CreateAppCommand,
  CreateAppVersionAppComponentCommand,
  CreateAppVersionResourceCommand,
  CreateRecommendationTemplateCommand,
  CreateResiliencyPolicyCommand,
  DeleteAppCommand,
  DeleteAppAssessmentCommand,
  DeleteAppInputSourceCommand,
  DeleteAppVersionAppComponentCommand,
  DeleteAppVersionResourceCommand,
  DeleteRecommendationTemplateCommand,
  DeleteResiliencyPolicyCommand,
  DescribeAppCommand,
  DescribeAppAssessmentCommand,
  DescribeAppVersionCommand,
  DescribeAppVersionAppComponentCommand,
  DescribeAppVersionResourceCommand,
  DescribeAppVersionResourcesResolutionStatusCommand,
  DescribeAppVersionTemplateCommand,
  DescribeDraftAppVersionResourcesImportStatusCommand,
  DescribeMetricsExportCommand,
  DescribeResiliencyPolicyCommand,
  DescribeResourceGroupingRecommendationTaskCommand,
  ImportResourcesToDraftAppVersionCommand,
  ListAlarmRecommendationsCommand,
  ListAppAssessmentComplianceDriftsCommand,
  ListAppAssessmentResourceDriftsCommand,
  ListAppAssessmentsCommand,
  ListAppComponentCompliancesCommand,
  ListAppComponentRecommendationsCommand,
  ListAppInputSourcesCommand,
  ListAppsCommand,
  ListAppVersionAppComponentsCommand,
  ListAppVersionResourceMappingsCommand,
  ListAppVersionResourcesCommand,
  ListAppVersionsCommand,
  ListMetricsCommand,
  ListRecommendationTemplatesCommand,
  ListResiliencyPoliciesCommand,
  ListResourceGroupingRecommendationsCommand,
  ListSopRecommendationsCommand,
  ListSuggestedResiliencyPoliciesCommand,
  ListTagsForResourceCommand,
  ListTestRecommendationsCommand,
  ListUnsupportedAppVersionResourcesCommand,
  PublishAppVersionCommand,
  PutDraftAppVersionTemplateCommand,
  RejectResourceGroupingRecommendationsCommand,
  RemoveDraftAppVersionResourceMappingsCommand,
  ResolveAppVersionResourcesCommand,
  StartAppAssessmentCommand,
  StartMetricsExportCommand,
  StartResourceGroupingRecommendationTaskCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAppCommand,
  UpdateAppVersionCommand,
  UpdateAppVersionAppComponentCommand,
  UpdateAppVersionResourceCommand,
  UpdateResiliencyPolicyCommand,
};
const paginators = {
  paginateListAlarmRecommendations,
  paginateListAppAssessmentComplianceDrifts,
  paginateListAppAssessmentResourceDrifts,
  paginateListAppAssessments,
  paginateListAppComponentCompliances,
  paginateListAppComponentRecommendations,
  paginateListAppInputSources,
  paginateListApps,
  paginateListAppVersionAppComponents,
  paginateListAppVersionResourceMappings,
  paginateListAppVersionResources,
  paginateListAppVersions,
  paginateListMetrics,
  paginateListRecommendationTemplates,
  paginateListResiliencyPolicies,
  paginateListResourceGroupingRecommendations,
  paginateListSopRecommendations,
  paginateListSuggestedResiliencyPolicies,
  paginateListTestRecommendations,
  paginateListUnsupportedAppVersionResources,
};

export interface Resiliencehub {
  /**
   * @see {@link AcceptResourceGroupingRecommendationsCommand}
   */
  acceptResourceGroupingRecommendations(
    args: AcceptResourceGroupingRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptResourceGroupingRecommendationsCommandOutput>;
  acceptResourceGroupingRecommendations(
    args: AcceptResourceGroupingRecommendationsCommandInput,
    cb: (err: any, data?: AcceptResourceGroupingRecommendationsCommandOutput) => void
  ): void;
  acceptResourceGroupingRecommendations(
    args: AcceptResourceGroupingRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptResourceGroupingRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddDraftAppVersionResourceMappingsCommand}
   */
  addDraftAppVersionResourceMappings(
    args: AddDraftAppVersionResourceMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddDraftAppVersionResourceMappingsCommandOutput>;
  addDraftAppVersionResourceMappings(
    args: AddDraftAppVersionResourceMappingsCommandInput,
    cb: (err: any, data?: AddDraftAppVersionResourceMappingsCommandOutput) => void
  ): void;
  addDraftAppVersionResourceMappings(
    args: AddDraftAppVersionResourceMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddDraftAppVersionResourceMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateRecommendationStatusCommand}
   */
  batchUpdateRecommendationStatus(
    args: BatchUpdateRecommendationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateRecommendationStatusCommandOutput>;
  batchUpdateRecommendationStatus(
    args: BatchUpdateRecommendationStatusCommandInput,
    cb: (err: any, data?: BatchUpdateRecommendationStatusCommandOutput) => void
  ): void;
  batchUpdateRecommendationStatus(
    args: BatchUpdateRecommendationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateRecommendationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppCommand}
   */
  createApp(
    args: CreateAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppCommandOutput>;
  createApp(
    args: CreateAppCommandInput,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;
  createApp(
    args: CreateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppVersionAppComponentCommand}
   */
  createAppVersionAppComponent(
    args: CreateAppVersionAppComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppVersionAppComponentCommandOutput>;
  createAppVersionAppComponent(
    args: CreateAppVersionAppComponentCommandInput,
    cb: (err: any, data?: CreateAppVersionAppComponentCommandOutput) => void
  ): void;
  createAppVersionAppComponent(
    args: CreateAppVersionAppComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppVersionAppComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppVersionResourceCommand}
   */
  createAppVersionResource(
    args: CreateAppVersionResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppVersionResourceCommandOutput>;
  createAppVersionResource(
    args: CreateAppVersionResourceCommandInput,
    cb: (err: any, data?: CreateAppVersionResourceCommandOutput) => void
  ): void;
  createAppVersionResource(
    args: CreateAppVersionResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppVersionResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRecommendationTemplateCommand}
   */
  createRecommendationTemplate(
    args: CreateRecommendationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRecommendationTemplateCommandOutput>;
  createRecommendationTemplate(
    args: CreateRecommendationTemplateCommandInput,
    cb: (err: any, data?: CreateRecommendationTemplateCommandOutput) => void
  ): void;
  createRecommendationTemplate(
    args: CreateRecommendationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecommendationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResiliencyPolicyCommand}
   */
  createResiliencyPolicy(
    args: CreateResiliencyPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResiliencyPolicyCommandOutput>;
  createResiliencyPolicy(
    args: CreateResiliencyPolicyCommandInput,
    cb: (err: any, data?: CreateResiliencyPolicyCommandOutput) => void
  ): void;
  createResiliencyPolicy(
    args: CreateResiliencyPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResiliencyPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppCommand}
   */
  deleteApp(
    args: DeleteAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppCommandOutput>;
  deleteApp(
    args: DeleteAppCommandInput,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;
  deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppAssessmentCommand}
   */
  deleteAppAssessment(
    args: DeleteAppAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppAssessmentCommandOutput>;
  deleteAppAssessment(
    args: DeleteAppAssessmentCommandInput,
    cb: (err: any, data?: DeleteAppAssessmentCommandOutput) => void
  ): void;
  deleteAppAssessment(
    args: DeleteAppAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppInputSourceCommand}
   */
  deleteAppInputSource(
    args: DeleteAppInputSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInputSourceCommandOutput>;
  deleteAppInputSource(
    args: DeleteAppInputSourceCommandInput,
    cb: (err: any, data?: DeleteAppInputSourceCommandOutput) => void
  ): void;
  deleteAppInputSource(
    args: DeleteAppInputSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInputSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppVersionAppComponentCommand}
   */
  deleteAppVersionAppComponent(
    args: DeleteAppVersionAppComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppVersionAppComponentCommandOutput>;
  deleteAppVersionAppComponent(
    args: DeleteAppVersionAppComponentCommandInput,
    cb: (err: any, data?: DeleteAppVersionAppComponentCommandOutput) => void
  ): void;
  deleteAppVersionAppComponent(
    args: DeleteAppVersionAppComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppVersionAppComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppVersionResourceCommand}
   */
  deleteAppVersionResource(
    args: DeleteAppVersionResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppVersionResourceCommandOutput>;
  deleteAppVersionResource(
    args: DeleteAppVersionResourceCommandInput,
    cb: (err: any, data?: DeleteAppVersionResourceCommandOutput) => void
  ): void;
  deleteAppVersionResource(
    args: DeleteAppVersionResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppVersionResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecommendationTemplateCommand}
   */
  deleteRecommendationTemplate(
    args: DeleteRecommendationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecommendationTemplateCommandOutput>;
  deleteRecommendationTemplate(
    args: DeleteRecommendationTemplateCommandInput,
    cb: (err: any, data?: DeleteRecommendationTemplateCommandOutput) => void
  ): void;
  deleteRecommendationTemplate(
    args: DeleteRecommendationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecommendationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResiliencyPolicyCommand}
   */
  deleteResiliencyPolicy(
    args: DeleteResiliencyPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResiliencyPolicyCommandOutput>;
  deleteResiliencyPolicy(
    args: DeleteResiliencyPolicyCommandInput,
    cb: (err: any, data?: DeleteResiliencyPolicyCommandOutput) => void
  ): void;
  deleteResiliencyPolicy(
    args: DeleteResiliencyPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResiliencyPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppCommand}
   */
  describeApp(
    args: DescribeAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppCommandOutput>;
  describeApp(
    args: DescribeAppCommandInput,
    cb: (err: any, data?: DescribeAppCommandOutput) => void
  ): void;
  describeApp(
    args: DescribeAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppAssessmentCommand}
   */
  describeAppAssessment(
    args: DescribeAppAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppAssessmentCommandOutput>;
  describeAppAssessment(
    args: DescribeAppAssessmentCommandInput,
    cb: (err: any, data?: DescribeAppAssessmentCommandOutput) => void
  ): void;
  describeAppAssessment(
    args: DescribeAppAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppVersionCommand}
   */
  describeAppVersion(
    args: DescribeAppVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppVersionCommandOutput>;
  describeAppVersion(
    args: DescribeAppVersionCommandInput,
    cb: (err: any, data?: DescribeAppVersionCommandOutput) => void
  ): void;
  describeAppVersion(
    args: DescribeAppVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppVersionAppComponentCommand}
   */
  describeAppVersionAppComponent(
    args: DescribeAppVersionAppComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppVersionAppComponentCommandOutput>;
  describeAppVersionAppComponent(
    args: DescribeAppVersionAppComponentCommandInput,
    cb: (err: any, data?: DescribeAppVersionAppComponentCommandOutput) => void
  ): void;
  describeAppVersionAppComponent(
    args: DescribeAppVersionAppComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppVersionAppComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppVersionResourceCommand}
   */
  describeAppVersionResource(
    args: DescribeAppVersionResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppVersionResourceCommandOutput>;
  describeAppVersionResource(
    args: DescribeAppVersionResourceCommandInput,
    cb: (err: any, data?: DescribeAppVersionResourceCommandOutput) => void
  ): void;
  describeAppVersionResource(
    args: DescribeAppVersionResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppVersionResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppVersionResourcesResolutionStatusCommand}
   */
  describeAppVersionResourcesResolutionStatus(
    args: DescribeAppVersionResourcesResolutionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppVersionResourcesResolutionStatusCommandOutput>;
  describeAppVersionResourcesResolutionStatus(
    args: DescribeAppVersionResourcesResolutionStatusCommandInput,
    cb: (err: any, data?: DescribeAppVersionResourcesResolutionStatusCommandOutput) => void
  ): void;
  describeAppVersionResourcesResolutionStatus(
    args: DescribeAppVersionResourcesResolutionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppVersionResourcesResolutionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppVersionTemplateCommand}
   */
  describeAppVersionTemplate(
    args: DescribeAppVersionTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppVersionTemplateCommandOutput>;
  describeAppVersionTemplate(
    args: DescribeAppVersionTemplateCommandInput,
    cb: (err: any, data?: DescribeAppVersionTemplateCommandOutput) => void
  ): void;
  describeAppVersionTemplate(
    args: DescribeAppVersionTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppVersionTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDraftAppVersionResourcesImportStatusCommand}
   */
  describeDraftAppVersionResourcesImportStatus(
    args: DescribeDraftAppVersionResourcesImportStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDraftAppVersionResourcesImportStatusCommandOutput>;
  describeDraftAppVersionResourcesImportStatus(
    args: DescribeDraftAppVersionResourcesImportStatusCommandInput,
    cb: (err: any, data?: DescribeDraftAppVersionResourcesImportStatusCommandOutput) => void
  ): void;
  describeDraftAppVersionResourcesImportStatus(
    args: DescribeDraftAppVersionResourcesImportStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDraftAppVersionResourcesImportStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMetricsExportCommand}
   */
  describeMetricsExport(
    args: DescribeMetricsExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMetricsExportCommandOutput>;
  describeMetricsExport(
    args: DescribeMetricsExportCommandInput,
    cb: (err: any, data?: DescribeMetricsExportCommandOutput) => void
  ): void;
  describeMetricsExport(
    args: DescribeMetricsExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMetricsExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResiliencyPolicyCommand}
   */
  describeResiliencyPolicy(
    args: DescribeResiliencyPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResiliencyPolicyCommandOutput>;
  describeResiliencyPolicy(
    args: DescribeResiliencyPolicyCommandInput,
    cb: (err: any, data?: DescribeResiliencyPolicyCommandOutput) => void
  ): void;
  describeResiliencyPolicy(
    args: DescribeResiliencyPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResiliencyPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourceGroupingRecommendationTaskCommand}
   */
  describeResourceGroupingRecommendationTask(
    args: DescribeResourceGroupingRecommendationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourceGroupingRecommendationTaskCommandOutput>;
  describeResourceGroupingRecommendationTask(
    args: DescribeResourceGroupingRecommendationTaskCommandInput,
    cb: (err: any, data?: DescribeResourceGroupingRecommendationTaskCommandOutput) => void
  ): void;
  describeResourceGroupingRecommendationTask(
    args: DescribeResourceGroupingRecommendationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourceGroupingRecommendationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportResourcesToDraftAppVersionCommand}
   */
  importResourcesToDraftAppVersion(
    args: ImportResourcesToDraftAppVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportResourcesToDraftAppVersionCommandOutput>;
  importResourcesToDraftAppVersion(
    args: ImportResourcesToDraftAppVersionCommandInput,
    cb: (err: any, data?: ImportResourcesToDraftAppVersionCommandOutput) => void
  ): void;
  importResourcesToDraftAppVersion(
    args: ImportResourcesToDraftAppVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportResourcesToDraftAppVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAlarmRecommendationsCommand}
   */
  listAlarmRecommendations(
    args: ListAlarmRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAlarmRecommendationsCommandOutput>;
  listAlarmRecommendations(
    args: ListAlarmRecommendationsCommandInput,
    cb: (err: any, data?: ListAlarmRecommendationsCommandOutput) => void
  ): void;
  listAlarmRecommendations(
    args: ListAlarmRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlarmRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppAssessmentComplianceDriftsCommand}
   */
  listAppAssessmentComplianceDrifts(
    args: ListAppAssessmentComplianceDriftsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppAssessmentComplianceDriftsCommandOutput>;
  listAppAssessmentComplianceDrifts(
    args: ListAppAssessmentComplianceDriftsCommandInput,
    cb: (err: any, data?: ListAppAssessmentComplianceDriftsCommandOutput) => void
  ): void;
  listAppAssessmentComplianceDrifts(
    args: ListAppAssessmentComplianceDriftsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppAssessmentComplianceDriftsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppAssessmentResourceDriftsCommand}
   */
  listAppAssessmentResourceDrifts(
    args: ListAppAssessmentResourceDriftsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppAssessmentResourceDriftsCommandOutput>;
  listAppAssessmentResourceDrifts(
    args: ListAppAssessmentResourceDriftsCommandInput,
    cb: (err: any, data?: ListAppAssessmentResourceDriftsCommandOutput) => void
  ): void;
  listAppAssessmentResourceDrifts(
    args: ListAppAssessmentResourceDriftsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppAssessmentResourceDriftsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppAssessmentsCommand}
   */
  listAppAssessments(): Promise<ListAppAssessmentsCommandOutput>;
  listAppAssessments(
    args: ListAppAssessmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppAssessmentsCommandOutput>;
  listAppAssessments(
    args: ListAppAssessmentsCommandInput,
    cb: (err: any, data?: ListAppAssessmentsCommandOutput) => void
  ): void;
  listAppAssessments(
    args: ListAppAssessmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppAssessmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppComponentCompliancesCommand}
   */
  listAppComponentCompliances(
    args: ListAppComponentCompliancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppComponentCompliancesCommandOutput>;
  listAppComponentCompliances(
    args: ListAppComponentCompliancesCommandInput,
    cb: (err: any, data?: ListAppComponentCompliancesCommandOutput) => void
  ): void;
  listAppComponentCompliances(
    args: ListAppComponentCompliancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppComponentCompliancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppComponentRecommendationsCommand}
   */
  listAppComponentRecommendations(
    args: ListAppComponentRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppComponentRecommendationsCommandOutput>;
  listAppComponentRecommendations(
    args: ListAppComponentRecommendationsCommandInput,
    cb: (err: any, data?: ListAppComponentRecommendationsCommandOutput) => void
  ): void;
  listAppComponentRecommendations(
    args: ListAppComponentRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppComponentRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppInputSourcesCommand}
   */
  listAppInputSources(
    args: ListAppInputSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInputSourcesCommandOutput>;
  listAppInputSources(
    args: ListAppInputSourcesCommandInput,
    cb: (err: any, data?: ListAppInputSourcesCommandOutput) => void
  ): void;
  listAppInputSources(
    args: ListAppInputSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInputSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppsCommand}
   */
  listApps(): Promise<ListAppsCommandOutput>;
  listApps(
    args: ListAppsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppsCommandOutput>;
  listApps(
    args: ListAppsCommandInput,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;
  listApps(
    args: ListAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppVersionAppComponentsCommand}
   */
  listAppVersionAppComponents(
    args: ListAppVersionAppComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppVersionAppComponentsCommandOutput>;
  listAppVersionAppComponents(
    args: ListAppVersionAppComponentsCommandInput,
    cb: (err: any, data?: ListAppVersionAppComponentsCommandOutput) => void
  ): void;
  listAppVersionAppComponents(
    args: ListAppVersionAppComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppVersionAppComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppVersionResourceMappingsCommand}
   */
  listAppVersionResourceMappings(
    args: ListAppVersionResourceMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppVersionResourceMappingsCommandOutput>;
  listAppVersionResourceMappings(
    args: ListAppVersionResourceMappingsCommandInput,
    cb: (err: any, data?: ListAppVersionResourceMappingsCommandOutput) => void
  ): void;
  listAppVersionResourceMappings(
    args: ListAppVersionResourceMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppVersionResourceMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppVersionResourcesCommand}
   */
  listAppVersionResources(
    args: ListAppVersionResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppVersionResourcesCommandOutput>;
  listAppVersionResources(
    args: ListAppVersionResourcesCommandInput,
    cb: (err: any, data?: ListAppVersionResourcesCommandOutput) => void
  ): void;
  listAppVersionResources(
    args: ListAppVersionResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppVersionResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppVersionsCommand}
   */
  listAppVersions(
    args: ListAppVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppVersionsCommandOutput>;
  listAppVersions(
    args: ListAppVersionsCommandInput,
    cb: (err: any, data?: ListAppVersionsCommandOutput) => void
  ): void;
  listAppVersions(
    args: ListAppVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMetricsCommand}
   */
  listMetrics(): Promise<ListMetricsCommandOutput>;
  listMetrics(
    args: ListMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMetricsCommandOutput>;
  listMetrics(
    args: ListMetricsCommandInput,
    cb: (err: any, data?: ListMetricsCommandOutput) => void
  ): void;
  listMetrics(
    args: ListMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationTemplatesCommand}
   */
  listRecommendationTemplates(): Promise<ListRecommendationTemplatesCommandOutput>;
  listRecommendationTemplates(
    args: ListRecommendationTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationTemplatesCommandOutput>;
  listRecommendationTemplates(
    args: ListRecommendationTemplatesCommandInput,
    cb: (err: any, data?: ListRecommendationTemplatesCommandOutput) => void
  ): void;
  listRecommendationTemplates(
    args: ListRecommendationTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResiliencyPoliciesCommand}
   */
  listResiliencyPolicies(): Promise<ListResiliencyPoliciesCommandOutput>;
  listResiliencyPolicies(
    args: ListResiliencyPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResiliencyPoliciesCommandOutput>;
  listResiliencyPolicies(
    args: ListResiliencyPoliciesCommandInput,
    cb: (err: any, data?: ListResiliencyPoliciesCommandOutput) => void
  ): void;
  listResiliencyPolicies(
    args: ListResiliencyPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResiliencyPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceGroupingRecommendationsCommand}
   */
  listResourceGroupingRecommendations(): Promise<ListResourceGroupingRecommendationsCommandOutput>;
  listResourceGroupingRecommendations(
    args: ListResourceGroupingRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceGroupingRecommendationsCommandOutput>;
  listResourceGroupingRecommendations(
    args: ListResourceGroupingRecommendationsCommandInput,
    cb: (err: any, data?: ListResourceGroupingRecommendationsCommandOutput) => void
  ): void;
  listResourceGroupingRecommendations(
    args: ListResourceGroupingRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceGroupingRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSopRecommendationsCommand}
   */
  listSopRecommendations(
    args: ListSopRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSopRecommendationsCommandOutput>;
  listSopRecommendations(
    args: ListSopRecommendationsCommandInput,
    cb: (err: any, data?: ListSopRecommendationsCommandOutput) => void
  ): void;
  listSopRecommendations(
    args: ListSopRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSopRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSuggestedResiliencyPoliciesCommand}
   */
  listSuggestedResiliencyPolicies(): Promise<ListSuggestedResiliencyPoliciesCommandOutput>;
  listSuggestedResiliencyPolicies(
    args: ListSuggestedResiliencyPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSuggestedResiliencyPoliciesCommandOutput>;
  listSuggestedResiliencyPolicies(
    args: ListSuggestedResiliencyPoliciesCommandInput,
    cb: (err: any, data?: ListSuggestedResiliencyPoliciesCommandOutput) => void
  ): void;
  listSuggestedResiliencyPolicies(
    args: ListSuggestedResiliencyPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSuggestedResiliencyPoliciesCommandOutput) => void
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
   * @see {@link ListTestRecommendationsCommand}
   */
  listTestRecommendations(
    args: ListTestRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestRecommendationsCommandOutput>;
  listTestRecommendations(
    args: ListTestRecommendationsCommandInput,
    cb: (err: any, data?: ListTestRecommendationsCommandOutput) => void
  ): void;
  listTestRecommendations(
    args: ListTestRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUnsupportedAppVersionResourcesCommand}
   */
  listUnsupportedAppVersionResources(
    args: ListUnsupportedAppVersionResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUnsupportedAppVersionResourcesCommandOutput>;
  listUnsupportedAppVersionResources(
    args: ListUnsupportedAppVersionResourcesCommandInput,
    cb: (err: any, data?: ListUnsupportedAppVersionResourcesCommandOutput) => void
  ): void;
  listUnsupportedAppVersionResources(
    args: ListUnsupportedAppVersionResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUnsupportedAppVersionResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishAppVersionCommand}
   */
  publishAppVersion(
    args: PublishAppVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishAppVersionCommandOutput>;
  publishAppVersion(
    args: PublishAppVersionCommandInput,
    cb: (err: any, data?: PublishAppVersionCommandOutput) => void
  ): void;
  publishAppVersion(
    args: PublishAppVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishAppVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDraftAppVersionTemplateCommand}
   */
  putDraftAppVersionTemplate(
    args: PutDraftAppVersionTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDraftAppVersionTemplateCommandOutput>;
  putDraftAppVersionTemplate(
    args: PutDraftAppVersionTemplateCommandInput,
    cb: (err: any, data?: PutDraftAppVersionTemplateCommandOutput) => void
  ): void;
  putDraftAppVersionTemplate(
    args: PutDraftAppVersionTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDraftAppVersionTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectResourceGroupingRecommendationsCommand}
   */
  rejectResourceGroupingRecommendations(
    args: RejectResourceGroupingRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectResourceGroupingRecommendationsCommandOutput>;
  rejectResourceGroupingRecommendations(
    args: RejectResourceGroupingRecommendationsCommandInput,
    cb: (err: any, data?: RejectResourceGroupingRecommendationsCommandOutput) => void
  ): void;
  rejectResourceGroupingRecommendations(
    args: RejectResourceGroupingRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectResourceGroupingRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveDraftAppVersionResourceMappingsCommand}
   */
  removeDraftAppVersionResourceMappings(
    args: RemoveDraftAppVersionResourceMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveDraftAppVersionResourceMappingsCommandOutput>;
  removeDraftAppVersionResourceMappings(
    args: RemoveDraftAppVersionResourceMappingsCommandInput,
    cb: (err: any, data?: RemoveDraftAppVersionResourceMappingsCommandOutput) => void
  ): void;
  removeDraftAppVersionResourceMappings(
    args: RemoveDraftAppVersionResourceMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveDraftAppVersionResourceMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ResolveAppVersionResourcesCommand}
   */
  resolveAppVersionResources(
    args: ResolveAppVersionResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResolveAppVersionResourcesCommandOutput>;
  resolveAppVersionResources(
    args: ResolveAppVersionResourcesCommandInput,
    cb: (err: any, data?: ResolveAppVersionResourcesCommandOutput) => void
  ): void;
  resolveAppVersionResources(
    args: ResolveAppVersionResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveAppVersionResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAppAssessmentCommand}
   */
  startAppAssessment(
    args: StartAppAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAppAssessmentCommandOutput>;
  startAppAssessment(
    args: StartAppAssessmentCommandInput,
    cb: (err: any, data?: StartAppAssessmentCommandOutput) => void
  ): void;
  startAppAssessment(
    args: StartAppAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAppAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMetricsExportCommand}
   */
  startMetricsExport(): Promise<StartMetricsExportCommandOutput>;
  startMetricsExport(
    args: StartMetricsExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMetricsExportCommandOutput>;
  startMetricsExport(
    args: StartMetricsExportCommandInput,
    cb: (err: any, data?: StartMetricsExportCommandOutput) => void
  ): void;
  startMetricsExport(
    args: StartMetricsExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMetricsExportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartResourceGroupingRecommendationTaskCommand}
   */
  startResourceGroupingRecommendationTask(
    args: StartResourceGroupingRecommendationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartResourceGroupingRecommendationTaskCommandOutput>;
  startResourceGroupingRecommendationTask(
    args: StartResourceGroupingRecommendationTaskCommandInput,
    cb: (err: any, data?: StartResourceGroupingRecommendationTaskCommandOutput) => void
  ): void;
  startResourceGroupingRecommendationTask(
    args: StartResourceGroupingRecommendationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartResourceGroupingRecommendationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppCommand}
   */
  updateApp(
    args: UpdateAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppCommandOutput>;
  updateApp(
    args: UpdateAppCommandInput,
    cb: (err: any, data?: UpdateAppCommandOutput) => void
  ): void;
  updateApp(
    args: UpdateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppVersionCommand}
   */
  updateAppVersion(
    args: UpdateAppVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppVersionCommandOutput>;
  updateAppVersion(
    args: UpdateAppVersionCommandInput,
    cb: (err: any, data?: UpdateAppVersionCommandOutput) => void
  ): void;
  updateAppVersion(
    args: UpdateAppVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppVersionAppComponentCommand}
   */
  updateAppVersionAppComponent(
    args: UpdateAppVersionAppComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppVersionAppComponentCommandOutput>;
  updateAppVersionAppComponent(
    args: UpdateAppVersionAppComponentCommandInput,
    cb: (err: any, data?: UpdateAppVersionAppComponentCommandOutput) => void
  ): void;
  updateAppVersionAppComponent(
    args: UpdateAppVersionAppComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppVersionAppComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppVersionResourceCommand}
   */
  updateAppVersionResource(
    args: UpdateAppVersionResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppVersionResourceCommandOutput>;
  updateAppVersionResource(
    args: UpdateAppVersionResourceCommandInput,
    cb: (err: any, data?: UpdateAppVersionResourceCommandOutput) => void
  ): void;
  updateAppVersionResource(
    args: UpdateAppVersionResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppVersionResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResiliencyPolicyCommand}
   */
  updateResiliencyPolicy(
    args: UpdateResiliencyPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResiliencyPolicyCommandOutput>;
  updateResiliencyPolicy(
    args: UpdateResiliencyPolicyCommandInput,
    cb: (err: any, data?: UpdateResiliencyPolicyCommandOutput) => void
  ): void;
  updateResiliencyPolicy(
    args: UpdateResiliencyPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResiliencyPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAlarmRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAlarmRecommendationsCommandOutput}.
   */
  paginateListAlarmRecommendations(
    args: ListAlarmRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAlarmRecommendationsCommandOutput>;

  /**
   * @see {@link ListAppAssessmentComplianceDriftsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppAssessmentComplianceDriftsCommandOutput}.
   */
  paginateListAppAssessmentComplianceDrifts(
    args: ListAppAssessmentComplianceDriftsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppAssessmentComplianceDriftsCommandOutput>;

  /**
   * @see {@link ListAppAssessmentResourceDriftsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppAssessmentResourceDriftsCommandOutput}.
   */
  paginateListAppAssessmentResourceDrifts(
    args: ListAppAssessmentResourceDriftsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppAssessmentResourceDriftsCommandOutput>;

  /**
   * @see {@link ListAppAssessmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppAssessmentsCommandOutput}.
   */
  paginateListAppAssessments(
    args?: ListAppAssessmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppAssessmentsCommandOutput>;

  /**
   * @see {@link ListAppComponentCompliancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppComponentCompliancesCommandOutput}.
   */
  paginateListAppComponentCompliances(
    args: ListAppComponentCompliancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppComponentCompliancesCommandOutput>;

  /**
   * @see {@link ListAppComponentRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppComponentRecommendationsCommandOutput}.
   */
  paginateListAppComponentRecommendations(
    args: ListAppComponentRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppComponentRecommendationsCommandOutput>;

  /**
   * @see {@link ListAppInputSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppInputSourcesCommandOutput}.
   */
  paginateListAppInputSources(
    args: ListAppInputSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppInputSourcesCommandOutput>;

  /**
   * @see {@link ListAppsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppsCommandOutput}.
   */
  paginateListApps(
    args?: ListAppsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppsCommandOutput>;

  /**
   * @see {@link ListAppVersionAppComponentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppVersionAppComponentsCommandOutput}.
   */
  paginateListAppVersionAppComponents(
    args: ListAppVersionAppComponentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppVersionAppComponentsCommandOutput>;

  /**
   * @see {@link ListAppVersionResourceMappingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppVersionResourceMappingsCommandOutput}.
   */
  paginateListAppVersionResourceMappings(
    args: ListAppVersionResourceMappingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppVersionResourceMappingsCommandOutput>;

  /**
   * @see {@link ListAppVersionResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppVersionResourcesCommandOutput}.
   */
  paginateListAppVersionResources(
    args: ListAppVersionResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppVersionResourcesCommandOutput>;

  /**
   * @see {@link ListAppVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppVersionsCommandOutput}.
   */
  paginateListAppVersions(
    args: ListAppVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppVersionsCommandOutput>;

  /**
   * @see {@link ListMetricsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMetricsCommandOutput}.
   */
  paginateListMetrics(
    args?: ListMetricsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMetricsCommandOutput>;

  /**
   * @see {@link ListRecommendationTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommendationTemplatesCommandOutput}.
   */
  paginateListRecommendationTemplates(
    args?: ListRecommendationTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommendationTemplatesCommandOutput>;

  /**
   * @see {@link ListResiliencyPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResiliencyPoliciesCommandOutput}.
   */
  paginateListResiliencyPolicies(
    args?: ListResiliencyPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResiliencyPoliciesCommandOutput>;

  /**
   * @see {@link ListResourceGroupingRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceGroupingRecommendationsCommandOutput}.
   */
  paginateListResourceGroupingRecommendations(
    args?: ListResourceGroupingRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceGroupingRecommendationsCommandOutput>;

  /**
   * @see {@link ListSopRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSopRecommendationsCommandOutput}.
   */
  paginateListSopRecommendations(
    args: ListSopRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSopRecommendationsCommandOutput>;

  /**
   * @see {@link ListSuggestedResiliencyPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSuggestedResiliencyPoliciesCommandOutput}.
   */
  paginateListSuggestedResiliencyPolicies(
    args?: ListSuggestedResiliencyPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSuggestedResiliencyPoliciesCommandOutput>;

  /**
   * @see {@link ListTestRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTestRecommendationsCommandOutput}.
   */
  paginateListTestRecommendations(
    args: ListTestRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTestRecommendationsCommandOutput>;

  /**
   * @see {@link ListUnsupportedAppVersionResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUnsupportedAppVersionResourcesCommandOutput}.
   */
  paginateListUnsupportedAppVersionResources(
    args: ListUnsupportedAppVersionResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUnsupportedAppVersionResourcesCommandOutput>;
}

/**
 * <p>Resilience Hub helps you proactively prepare and protect your Amazon Web Services applications from
 *       disruptions. It offers continual resiliency assessment and validation that integrates
 *       into your software development lifecycle. This enables you to uncover resiliency weaknesses,
 *       ensure recovery time objective (RTO) and recovery point objective (RPO) targets for your
 *       applications are met, and resolve issues before they are released into production. </p>
 * @public
 */
export class Resiliencehub extends ResiliencehubClient implements Resiliencehub {}
createAggregatedClient(commands, Resiliencehub, { paginators });
