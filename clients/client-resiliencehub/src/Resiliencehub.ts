// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptResourceGroupingRecommendationsCommand,
  AcceptResourceGroupingRecommendationsCommandInput,
  AcceptResourceGroupingRecommendationsCommandOutput,
} from "./commands/AcceptResourceGroupingRecommendationsCommand";
import {
  AddDraftAppVersionResourceMappingsCommand,
  AddDraftAppVersionResourceMappingsCommandInput,
  AddDraftAppVersionResourceMappingsCommandOutput,
} from "./commands/AddDraftAppVersionResourceMappingsCommand";
import {
  BatchUpdateRecommendationStatusCommand,
  BatchUpdateRecommendationStatusCommandInput,
  BatchUpdateRecommendationStatusCommandOutput,
} from "./commands/BatchUpdateRecommendationStatusCommand";
import { CreateAppCommand, CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateAppVersionAppComponentCommand,
  CreateAppVersionAppComponentCommandInput,
  CreateAppVersionAppComponentCommandOutput,
} from "./commands/CreateAppVersionAppComponentCommand";
import {
  CreateAppVersionResourceCommand,
  CreateAppVersionResourceCommandInput,
  CreateAppVersionResourceCommandOutput,
} from "./commands/CreateAppVersionResourceCommand";
import {
  CreateRecommendationTemplateCommand,
  CreateRecommendationTemplateCommandInput,
  CreateRecommendationTemplateCommandOutput,
} from "./commands/CreateRecommendationTemplateCommand";
import {
  CreateResiliencyPolicyCommand,
  CreateResiliencyPolicyCommandInput,
  CreateResiliencyPolicyCommandOutput,
} from "./commands/CreateResiliencyPolicyCommand";
import {
  DeleteAppAssessmentCommand,
  DeleteAppAssessmentCommandInput,
  DeleteAppAssessmentCommandOutput,
} from "./commands/DeleteAppAssessmentCommand";
import { DeleteAppCommand, DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteAppInputSourceCommand,
  DeleteAppInputSourceCommandInput,
  DeleteAppInputSourceCommandOutput,
} from "./commands/DeleteAppInputSourceCommand";
import {
  DeleteAppVersionAppComponentCommand,
  DeleteAppVersionAppComponentCommandInput,
  DeleteAppVersionAppComponentCommandOutput,
} from "./commands/DeleteAppVersionAppComponentCommand";
import {
  DeleteAppVersionResourceCommand,
  DeleteAppVersionResourceCommandInput,
  DeleteAppVersionResourceCommandOutput,
} from "./commands/DeleteAppVersionResourceCommand";
import {
  DeleteRecommendationTemplateCommand,
  DeleteRecommendationTemplateCommandInput,
  DeleteRecommendationTemplateCommandOutput,
} from "./commands/DeleteRecommendationTemplateCommand";
import {
  DeleteResiliencyPolicyCommand,
  DeleteResiliencyPolicyCommandInput,
  DeleteResiliencyPolicyCommandOutput,
} from "./commands/DeleteResiliencyPolicyCommand";
import {
  DescribeAppAssessmentCommand,
  DescribeAppAssessmentCommandInput,
  DescribeAppAssessmentCommandOutput,
} from "./commands/DescribeAppAssessmentCommand";
import { DescribeAppCommand, DescribeAppCommandInput, DescribeAppCommandOutput } from "./commands/DescribeAppCommand";
import {
  DescribeAppVersionAppComponentCommand,
  DescribeAppVersionAppComponentCommandInput,
  DescribeAppVersionAppComponentCommandOutput,
} from "./commands/DescribeAppVersionAppComponentCommand";
import {
  DescribeAppVersionCommand,
  DescribeAppVersionCommandInput,
  DescribeAppVersionCommandOutput,
} from "./commands/DescribeAppVersionCommand";
import {
  DescribeAppVersionResourceCommand,
  DescribeAppVersionResourceCommandInput,
  DescribeAppVersionResourceCommandOutput,
} from "./commands/DescribeAppVersionResourceCommand";
import {
  DescribeAppVersionResourcesResolutionStatusCommand,
  DescribeAppVersionResourcesResolutionStatusCommandInput,
  DescribeAppVersionResourcesResolutionStatusCommandOutput,
} from "./commands/DescribeAppVersionResourcesResolutionStatusCommand";
import {
  DescribeAppVersionTemplateCommand,
  DescribeAppVersionTemplateCommandInput,
  DescribeAppVersionTemplateCommandOutput,
} from "./commands/DescribeAppVersionTemplateCommand";
import {
  DescribeDraftAppVersionResourcesImportStatusCommand,
  DescribeDraftAppVersionResourcesImportStatusCommandInput,
  DescribeDraftAppVersionResourcesImportStatusCommandOutput,
} from "./commands/DescribeDraftAppVersionResourcesImportStatusCommand";
import {
  DescribeMetricsExportCommand,
  DescribeMetricsExportCommandInput,
  DescribeMetricsExportCommandOutput,
} from "./commands/DescribeMetricsExportCommand";
import {
  DescribeResiliencyPolicyCommand,
  DescribeResiliencyPolicyCommandInput,
  DescribeResiliencyPolicyCommandOutput,
} from "./commands/DescribeResiliencyPolicyCommand";
import {
  DescribeResourceGroupingRecommendationTaskCommand,
  DescribeResourceGroupingRecommendationTaskCommandInput,
  DescribeResourceGroupingRecommendationTaskCommandOutput,
} from "./commands/DescribeResourceGroupingRecommendationTaskCommand";
import {
  ImportResourcesToDraftAppVersionCommand,
  ImportResourcesToDraftAppVersionCommandInput,
  ImportResourcesToDraftAppVersionCommandOutput,
} from "./commands/ImportResourcesToDraftAppVersionCommand";
import {
  ListAlarmRecommendationsCommand,
  ListAlarmRecommendationsCommandInput,
  ListAlarmRecommendationsCommandOutput,
} from "./commands/ListAlarmRecommendationsCommand";
import {
  ListAppAssessmentComplianceDriftsCommand,
  ListAppAssessmentComplianceDriftsCommandInput,
  ListAppAssessmentComplianceDriftsCommandOutput,
} from "./commands/ListAppAssessmentComplianceDriftsCommand";
import {
  ListAppAssessmentResourceDriftsCommand,
  ListAppAssessmentResourceDriftsCommandInput,
  ListAppAssessmentResourceDriftsCommandOutput,
} from "./commands/ListAppAssessmentResourceDriftsCommand";
import {
  ListAppAssessmentsCommand,
  ListAppAssessmentsCommandInput,
  ListAppAssessmentsCommandOutput,
} from "./commands/ListAppAssessmentsCommand";
import {
  ListAppComponentCompliancesCommand,
  ListAppComponentCompliancesCommandInput,
  ListAppComponentCompliancesCommandOutput,
} from "./commands/ListAppComponentCompliancesCommand";
import {
  ListAppComponentRecommendationsCommand,
  ListAppComponentRecommendationsCommandInput,
  ListAppComponentRecommendationsCommandOutput,
} from "./commands/ListAppComponentRecommendationsCommand";
import {
  ListAppInputSourcesCommand,
  ListAppInputSourcesCommandInput,
  ListAppInputSourcesCommandOutput,
} from "./commands/ListAppInputSourcesCommand";
import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import {
  ListAppVersionAppComponentsCommand,
  ListAppVersionAppComponentsCommandInput,
  ListAppVersionAppComponentsCommandOutput,
} from "./commands/ListAppVersionAppComponentsCommand";
import {
  ListAppVersionResourceMappingsCommand,
  ListAppVersionResourceMappingsCommandInput,
  ListAppVersionResourceMappingsCommandOutput,
} from "./commands/ListAppVersionResourceMappingsCommand";
import {
  ListAppVersionResourcesCommand,
  ListAppVersionResourcesCommandInput,
  ListAppVersionResourcesCommandOutput,
} from "./commands/ListAppVersionResourcesCommand";
import {
  ListAppVersionsCommand,
  ListAppVersionsCommandInput,
  ListAppVersionsCommandOutput,
} from "./commands/ListAppVersionsCommand";
import { ListMetricsCommand, ListMetricsCommandInput, ListMetricsCommandOutput } from "./commands/ListMetricsCommand";
import {
  ListRecommendationTemplatesCommand,
  ListRecommendationTemplatesCommandInput,
  ListRecommendationTemplatesCommandOutput,
} from "./commands/ListRecommendationTemplatesCommand";
import {
  ListResiliencyPoliciesCommand,
  ListResiliencyPoliciesCommandInput,
  ListResiliencyPoliciesCommandOutput,
} from "./commands/ListResiliencyPoliciesCommand";
import {
  ListResourceGroupingRecommendationsCommand,
  ListResourceGroupingRecommendationsCommandInput,
  ListResourceGroupingRecommendationsCommandOutput,
} from "./commands/ListResourceGroupingRecommendationsCommand";
import {
  ListSopRecommendationsCommand,
  ListSopRecommendationsCommandInput,
  ListSopRecommendationsCommandOutput,
} from "./commands/ListSopRecommendationsCommand";
import {
  ListSuggestedResiliencyPoliciesCommand,
  ListSuggestedResiliencyPoliciesCommandInput,
  ListSuggestedResiliencyPoliciesCommandOutput,
} from "./commands/ListSuggestedResiliencyPoliciesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTestRecommendationsCommand,
  ListTestRecommendationsCommandInput,
  ListTestRecommendationsCommandOutput,
} from "./commands/ListTestRecommendationsCommand";
import {
  ListUnsupportedAppVersionResourcesCommand,
  ListUnsupportedAppVersionResourcesCommandInput,
  ListUnsupportedAppVersionResourcesCommandOutput,
} from "./commands/ListUnsupportedAppVersionResourcesCommand";
import {
  PublishAppVersionCommand,
  PublishAppVersionCommandInput,
  PublishAppVersionCommandOutput,
} from "./commands/PublishAppVersionCommand";
import {
  PutDraftAppVersionTemplateCommand,
  PutDraftAppVersionTemplateCommandInput,
  PutDraftAppVersionTemplateCommandOutput,
} from "./commands/PutDraftAppVersionTemplateCommand";
import {
  RejectResourceGroupingRecommendationsCommand,
  RejectResourceGroupingRecommendationsCommandInput,
  RejectResourceGroupingRecommendationsCommandOutput,
} from "./commands/RejectResourceGroupingRecommendationsCommand";
import {
  RemoveDraftAppVersionResourceMappingsCommand,
  RemoveDraftAppVersionResourceMappingsCommandInput,
  RemoveDraftAppVersionResourceMappingsCommandOutput,
} from "./commands/RemoveDraftAppVersionResourceMappingsCommand";
import {
  ResolveAppVersionResourcesCommand,
  ResolveAppVersionResourcesCommandInput,
  ResolveAppVersionResourcesCommandOutput,
} from "./commands/ResolveAppVersionResourcesCommand";
import {
  StartAppAssessmentCommand,
  StartAppAssessmentCommandInput,
  StartAppAssessmentCommandOutput,
} from "./commands/StartAppAssessmentCommand";
import {
  StartMetricsExportCommand,
  StartMetricsExportCommandInput,
  StartMetricsExportCommandOutput,
} from "./commands/StartMetricsExportCommand";
import {
  StartResourceGroupingRecommendationTaskCommand,
  StartResourceGroupingRecommendationTaskCommandInput,
  StartResourceGroupingRecommendationTaskCommandOutput,
} from "./commands/StartResourceGroupingRecommendationTaskCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAppCommand, UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import {
  UpdateAppVersionAppComponentCommand,
  UpdateAppVersionAppComponentCommandInput,
  UpdateAppVersionAppComponentCommandOutput,
} from "./commands/UpdateAppVersionAppComponentCommand";
import {
  UpdateAppVersionCommand,
  UpdateAppVersionCommandInput,
  UpdateAppVersionCommandOutput,
} from "./commands/UpdateAppVersionCommand";
import {
  UpdateAppVersionResourceCommand,
  UpdateAppVersionResourceCommandInput,
  UpdateAppVersionResourceCommandOutput,
} from "./commands/UpdateAppVersionResourceCommand";
import {
  UpdateResiliencyPolicyCommand,
  UpdateResiliencyPolicyCommandInput,
  UpdateResiliencyPolicyCommandOutput,
} from "./commands/UpdateResiliencyPolicyCommand";
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
createAggregatedClient(commands, Resiliencehub);
