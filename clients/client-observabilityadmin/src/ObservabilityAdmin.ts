// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateCentralizationRuleForOrganizationCommandInput,
  type CreateCentralizationRuleForOrganizationCommandOutput,
  CreateCentralizationRuleForOrganizationCommand,
} from "./commands/CreateCentralizationRuleForOrganizationCommand";
import {
  type CreateDatasetIntegrationCommandInput,
  type CreateDatasetIntegrationCommandOutput,
  CreateDatasetIntegrationCommand,
} from "./commands/CreateDatasetIntegrationCommand";
import {
  type CreateS3TableIntegrationCommandInput,
  type CreateS3TableIntegrationCommandOutput,
  CreateS3TableIntegrationCommand,
} from "./commands/CreateS3TableIntegrationCommand";
import {
  type CreateTelemetryPipelineCommandInput,
  type CreateTelemetryPipelineCommandOutput,
  CreateTelemetryPipelineCommand,
} from "./commands/CreateTelemetryPipelineCommand";
import {
  type CreateTelemetryRuleCommandInput,
  type CreateTelemetryRuleCommandOutput,
  CreateTelemetryRuleCommand,
} from "./commands/CreateTelemetryRuleCommand";
import {
  type CreateTelemetryRuleForOrganizationCommandInput,
  type CreateTelemetryRuleForOrganizationCommandOutput,
  CreateTelemetryRuleForOrganizationCommand,
} from "./commands/CreateTelemetryRuleForOrganizationCommand";
import {
  type DeleteCentralizationRuleForOrganizationCommandInput,
  type DeleteCentralizationRuleForOrganizationCommandOutput,
  DeleteCentralizationRuleForOrganizationCommand,
} from "./commands/DeleteCentralizationRuleForOrganizationCommand";
import {
  type DeleteDatasetIntegrationCommandInput,
  type DeleteDatasetIntegrationCommandOutput,
  DeleteDatasetIntegrationCommand,
} from "./commands/DeleteDatasetIntegrationCommand";
import {
  type DeleteS3TableIntegrationCommandInput,
  type DeleteS3TableIntegrationCommandOutput,
  DeleteS3TableIntegrationCommand,
} from "./commands/DeleteS3TableIntegrationCommand";
import {
  type DeleteTelemetryPipelineCommandInput,
  type DeleteTelemetryPipelineCommandOutput,
  DeleteTelemetryPipelineCommand,
} from "./commands/DeleteTelemetryPipelineCommand";
import {
  type DeleteTelemetryRuleCommandInput,
  type DeleteTelemetryRuleCommandOutput,
  DeleteTelemetryRuleCommand,
} from "./commands/DeleteTelemetryRuleCommand";
import {
  type DeleteTelemetryRuleForOrganizationCommandInput,
  type DeleteTelemetryRuleForOrganizationCommandOutput,
  DeleteTelemetryRuleForOrganizationCommand,
} from "./commands/DeleteTelemetryRuleForOrganizationCommand";
import {
  type GetCentralizationRuleForOrganizationCommandInput,
  type GetCentralizationRuleForOrganizationCommandOutput,
  GetCentralizationRuleForOrganizationCommand,
} from "./commands/GetCentralizationRuleForOrganizationCommand";
import {
  type GetDatasetIntegrationCommandInput,
  type GetDatasetIntegrationCommandOutput,
  GetDatasetIntegrationCommand,
} from "./commands/GetDatasetIntegrationCommand";
import {
  type GetS3TableIntegrationCommandInput,
  type GetS3TableIntegrationCommandOutput,
  GetS3TableIntegrationCommand,
} from "./commands/GetS3TableIntegrationCommand";
import {
  type GetTelemetryEnrichmentStatusCommandInput,
  type GetTelemetryEnrichmentStatusCommandOutput,
  GetTelemetryEnrichmentStatusCommand,
} from "./commands/GetTelemetryEnrichmentStatusCommand";
import {
  type GetTelemetryEvaluationStatusCommandInput,
  type GetTelemetryEvaluationStatusCommandOutput,
  GetTelemetryEvaluationStatusCommand,
} from "./commands/GetTelemetryEvaluationStatusCommand";
import {
  type GetTelemetryEvaluationStatusForOrganizationCommandInput,
  type GetTelemetryEvaluationStatusForOrganizationCommandOutput,
  GetTelemetryEvaluationStatusForOrganizationCommand,
} from "./commands/GetTelemetryEvaluationStatusForOrganizationCommand";
import {
  type GetTelemetryPipelineCommandInput,
  type GetTelemetryPipelineCommandOutput,
  GetTelemetryPipelineCommand,
} from "./commands/GetTelemetryPipelineCommand";
import {
  type GetTelemetryRuleCommandInput,
  type GetTelemetryRuleCommandOutput,
  GetTelemetryRuleCommand,
} from "./commands/GetTelemetryRuleCommand";
import {
  type GetTelemetryRuleForOrganizationCommandInput,
  type GetTelemetryRuleForOrganizationCommandOutput,
  GetTelemetryRuleForOrganizationCommand,
} from "./commands/GetTelemetryRuleForOrganizationCommand";
import {
  type ListCentralizationRulesForOrganizationCommandInput,
  type ListCentralizationRulesForOrganizationCommandOutput,
  ListCentralizationRulesForOrganizationCommand,
} from "./commands/ListCentralizationRulesForOrganizationCommand";
import {
  type ListDatasetIntegrationsCommandInput,
  type ListDatasetIntegrationsCommandOutput,
  ListDatasetIntegrationsCommand,
} from "./commands/ListDatasetIntegrationsCommand";
import {
  type ListResourceTelemetryCommandInput,
  type ListResourceTelemetryCommandOutput,
  ListResourceTelemetryCommand,
} from "./commands/ListResourceTelemetryCommand";
import {
  type ListResourceTelemetryForOrganizationCommandInput,
  type ListResourceTelemetryForOrganizationCommandOutput,
  ListResourceTelemetryForOrganizationCommand,
} from "./commands/ListResourceTelemetryForOrganizationCommand";
import {
  type ListS3TableIntegrationsCommandInput,
  type ListS3TableIntegrationsCommandOutput,
  ListS3TableIntegrationsCommand,
} from "./commands/ListS3TableIntegrationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTelemetryPipelinesCommandInput,
  type ListTelemetryPipelinesCommandOutput,
  ListTelemetryPipelinesCommand,
} from "./commands/ListTelemetryPipelinesCommand";
import {
  type ListTelemetryRulesCommandInput,
  type ListTelemetryRulesCommandOutput,
  ListTelemetryRulesCommand,
} from "./commands/ListTelemetryRulesCommand";
import {
  type ListTelemetryRulesForOrganizationCommandInput,
  type ListTelemetryRulesForOrganizationCommandOutput,
  ListTelemetryRulesForOrganizationCommand,
} from "./commands/ListTelemetryRulesForOrganizationCommand";
import {
  type StartTelemetryEnrichmentCommandInput,
  type StartTelemetryEnrichmentCommandOutput,
  StartTelemetryEnrichmentCommand,
} from "./commands/StartTelemetryEnrichmentCommand";
import {
  type StartTelemetryEvaluationCommandInput,
  type StartTelemetryEvaluationCommandOutput,
  StartTelemetryEvaluationCommand,
} from "./commands/StartTelemetryEvaluationCommand";
import {
  type StartTelemetryEvaluationForOrganizationCommandInput,
  type StartTelemetryEvaluationForOrganizationCommandOutput,
  StartTelemetryEvaluationForOrganizationCommand,
} from "./commands/StartTelemetryEvaluationForOrganizationCommand";
import {
  type StopTelemetryEnrichmentCommandInput,
  type StopTelemetryEnrichmentCommandOutput,
  StopTelemetryEnrichmentCommand,
} from "./commands/StopTelemetryEnrichmentCommand";
import {
  type StopTelemetryEvaluationCommandInput,
  type StopTelemetryEvaluationCommandOutput,
  StopTelemetryEvaluationCommand,
} from "./commands/StopTelemetryEvaluationCommand";
import {
  type StopTelemetryEvaluationForOrganizationCommandInput,
  type StopTelemetryEvaluationForOrganizationCommandOutput,
  StopTelemetryEvaluationForOrganizationCommand,
} from "./commands/StopTelemetryEvaluationForOrganizationCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TestTelemetryPipelineCommandInput,
  type TestTelemetryPipelineCommandOutput,
  TestTelemetryPipelineCommand,
} from "./commands/TestTelemetryPipelineCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateCentralizationRuleForOrganizationCommandInput,
  type UpdateCentralizationRuleForOrganizationCommandOutput,
  UpdateCentralizationRuleForOrganizationCommand,
} from "./commands/UpdateCentralizationRuleForOrganizationCommand";
import {
  type UpdateDatasetIntegrationCommandInput,
  type UpdateDatasetIntegrationCommandOutput,
  UpdateDatasetIntegrationCommand,
} from "./commands/UpdateDatasetIntegrationCommand";
import {
  type UpdateTelemetryPipelineCommandInput,
  type UpdateTelemetryPipelineCommandOutput,
  UpdateTelemetryPipelineCommand,
} from "./commands/UpdateTelemetryPipelineCommand";
import {
  type UpdateTelemetryRuleCommandInput,
  type UpdateTelemetryRuleCommandOutput,
  UpdateTelemetryRuleCommand,
} from "./commands/UpdateTelemetryRuleCommand";
import {
  type UpdateTelemetryRuleForOrganizationCommandInput,
  type UpdateTelemetryRuleForOrganizationCommandOutput,
  UpdateTelemetryRuleForOrganizationCommand,
} from "./commands/UpdateTelemetryRuleForOrganizationCommand";
import {
  type ValidateTelemetryPipelineConfigurationCommandInput,
  type ValidateTelemetryPipelineConfigurationCommandOutput,
  ValidateTelemetryPipelineConfigurationCommand,
} from "./commands/ValidateTelemetryPipelineConfigurationCommand";
import { ObservabilityAdminClient } from "./ObservabilityAdminClient";
import {
  paginateListCentralizationRulesForOrganization,
} from "./pagination/ListCentralizationRulesForOrganizationPaginator";
import { paginateListDatasetIntegrations } from "./pagination/ListDatasetIntegrationsPaginator";
import {
  paginateListResourceTelemetryForOrganization,
} from "./pagination/ListResourceTelemetryForOrganizationPaginator";
import { paginateListResourceTelemetry } from "./pagination/ListResourceTelemetryPaginator";
import { paginateListS3TableIntegrations } from "./pagination/ListS3TableIntegrationsPaginator";
import { paginateListTelemetryPipelines } from "./pagination/ListTelemetryPipelinesPaginator";
import { paginateListTelemetryRulesForOrganization } from "./pagination/ListTelemetryRulesForOrganizationPaginator";
import { paginateListTelemetryRules } from "./pagination/ListTelemetryRulesPaginator";

const commands = {
  CreateCentralizationRuleForOrganizationCommand,
  CreateDatasetIntegrationCommand,
  CreateS3TableIntegrationCommand,
  CreateTelemetryPipelineCommand,
  CreateTelemetryRuleCommand,
  CreateTelemetryRuleForOrganizationCommand,
  DeleteCentralizationRuleForOrganizationCommand,
  DeleteDatasetIntegrationCommand,
  DeleteS3TableIntegrationCommand,
  DeleteTelemetryPipelineCommand,
  DeleteTelemetryRuleCommand,
  DeleteTelemetryRuleForOrganizationCommand,
  GetCentralizationRuleForOrganizationCommand,
  GetDatasetIntegrationCommand,
  GetS3TableIntegrationCommand,
  GetTelemetryEnrichmentStatusCommand,
  GetTelemetryEvaluationStatusCommand,
  GetTelemetryEvaluationStatusForOrganizationCommand,
  GetTelemetryPipelineCommand,
  GetTelemetryRuleCommand,
  GetTelemetryRuleForOrganizationCommand,
  ListCentralizationRulesForOrganizationCommand,
  ListDatasetIntegrationsCommand,
  ListResourceTelemetryCommand,
  ListResourceTelemetryForOrganizationCommand,
  ListS3TableIntegrationsCommand,
  ListTagsForResourceCommand,
  ListTelemetryPipelinesCommand,
  ListTelemetryRulesCommand,
  ListTelemetryRulesForOrganizationCommand,
  StartTelemetryEnrichmentCommand,
  StartTelemetryEvaluationCommand,
  StartTelemetryEvaluationForOrganizationCommand,
  StopTelemetryEnrichmentCommand,
  StopTelemetryEvaluationCommand,
  StopTelemetryEvaluationForOrganizationCommand,
  TagResourceCommand,
  TestTelemetryPipelineCommand,
  UntagResourceCommand,
  UpdateCentralizationRuleForOrganizationCommand,
  UpdateDatasetIntegrationCommand,
  UpdateTelemetryPipelineCommand,
  UpdateTelemetryRuleCommand,
  UpdateTelemetryRuleForOrganizationCommand,
  ValidateTelemetryPipelineConfigurationCommand,
};
const paginators = {
  paginateListCentralizationRulesForOrganization,
  paginateListDatasetIntegrations,
  paginateListResourceTelemetry,
  paginateListResourceTelemetryForOrganization,
  paginateListS3TableIntegrations,
  paginateListTelemetryPipelines,
  paginateListTelemetryRules,
  paginateListTelemetryRulesForOrganization,
};

/**
 * @public
 */
export interface ObservabilityAdminRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ObservabilityAdmin {
  /**
   * @see {@link CreateCentralizationRuleForOrganizationCommand}
   */
  createCentralizationRuleForOrganization(
    args: CreateCentralizationRuleForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<CreateCentralizationRuleForOrganizationCommandOutput>;
  createCentralizationRuleForOrganization(
    args: CreateCentralizationRuleForOrganizationCommandInput,
    cb: (err: any, data?: CreateCentralizationRuleForOrganizationCommandOutput) => void
  ): void;
  createCentralizationRuleForOrganization(
    args: CreateCentralizationRuleForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: CreateCentralizationRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetIntegrationCommand}
   */
  createDatasetIntegration(
    args: CreateDatasetIntegrationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<CreateDatasetIntegrationCommandOutput>;
  createDatasetIntegration(
    args: CreateDatasetIntegrationCommandInput,
    cb: (err: any, data?: CreateDatasetIntegrationCommandOutput) => void
  ): void;
  createDatasetIntegration(
    args: CreateDatasetIntegrationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: CreateDatasetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateS3TableIntegrationCommand}
   */
  createS3TableIntegration(
    args: CreateS3TableIntegrationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<CreateS3TableIntegrationCommandOutput>;
  createS3TableIntegration(
    args: CreateS3TableIntegrationCommandInput,
    cb: (err: any, data?: CreateS3TableIntegrationCommandOutput) => void
  ): void;
  createS3TableIntegration(
    args: CreateS3TableIntegrationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: CreateS3TableIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTelemetryPipelineCommand}
   */
  createTelemetryPipeline(
    args: CreateTelemetryPipelineCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<CreateTelemetryPipelineCommandOutput>;
  createTelemetryPipeline(
    args: CreateTelemetryPipelineCommandInput,
    cb: (err: any, data?: CreateTelemetryPipelineCommandOutput) => void
  ): void;
  createTelemetryPipeline(
    args: CreateTelemetryPipelineCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: CreateTelemetryPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTelemetryRuleCommand}
   */
  createTelemetryRule(
    args: CreateTelemetryRuleCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<CreateTelemetryRuleCommandOutput>;
  createTelemetryRule(
    args: CreateTelemetryRuleCommandInput,
    cb: (err: any, data?: CreateTelemetryRuleCommandOutput) => void
  ): void;
  createTelemetryRule(
    args: CreateTelemetryRuleCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: CreateTelemetryRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTelemetryRuleForOrganizationCommand}
   */
  createTelemetryRuleForOrganization(
    args: CreateTelemetryRuleForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<CreateTelemetryRuleForOrganizationCommandOutput>;
  createTelemetryRuleForOrganization(
    args: CreateTelemetryRuleForOrganizationCommandInput,
    cb: (err: any, data?: CreateTelemetryRuleForOrganizationCommandOutput) => void
  ): void;
  createTelemetryRuleForOrganization(
    args: CreateTelemetryRuleForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: CreateTelemetryRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCentralizationRuleForOrganizationCommand}
   */
  deleteCentralizationRuleForOrganization(
    args: DeleteCentralizationRuleForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<DeleteCentralizationRuleForOrganizationCommandOutput>;
  deleteCentralizationRuleForOrganization(
    args: DeleteCentralizationRuleForOrganizationCommandInput,
    cb: (err: any, data?: DeleteCentralizationRuleForOrganizationCommandOutput) => void
  ): void;
  deleteCentralizationRuleForOrganization(
    args: DeleteCentralizationRuleForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: DeleteCentralizationRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetIntegrationCommand}
   */
  deleteDatasetIntegration(
    args: DeleteDatasetIntegrationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<DeleteDatasetIntegrationCommandOutput>;
  deleteDatasetIntegration(
    args: DeleteDatasetIntegrationCommandInput,
    cb: (err: any, data?: DeleteDatasetIntegrationCommandOutput) => void
  ): void;
  deleteDatasetIntegration(
    args: DeleteDatasetIntegrationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: DeleteDatasetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteS3TableIntegrationCommand}
   */
  deleteS3TableIntegration(
    args: DeleteS3TableIntegrationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<DeleteS3TableIntegrationCommandOutput>;
  deleteS3TableIntegration(
    args: DeleteS3TableIntegrationCommandInput,
    cb: (err: any, data?: DeleteS3TableIntegrationCommandOutput) => void
  ): void;
  deleteS3TableIntegration(
    args: DeleteS3TableIntegrationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: DeleteS3TableIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTelemetryPipelineCommand}
   */
  deleteTelemetryPipeline(
    args: DeleteTelemetryPipelineCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<DeleteTelemetryPipelineCommandOutput>;
  deleteTelemetryPipeline(
    args: DeleteTelemetryPipelineCommandInput,
    cb: (err: any, data?: DeleteTelemetryPipelineCommandOutput) => void
  ): void;
  deleteTelemetryPipeline(
    args: DeleteTelemetryPipelineCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: DeleteTelemetryPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTelemetryRuleCommand}
   */
  deleteTelemetryRule(
    args: DeleteTelemetryRuleCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<DeleteTelemetryRuleCommandOutput>;
  deleteTelemetryRule(
    args: DeleteTelemetryRuleCommandInput,
    cb: (err: any, data?: DeleteTelemetryRuleCommandOutput) => void
  ): void;
  deleteTelemetryRule(
    args: DeleteTelemetryRuleCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: DeleteTelemetryRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTelemetryRuleForOrganizationCommand}
   */
  deleteTelemetryRuleForOrganization(
    args: DeleteTelemetryRuleForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<DeleteTelemetryRuleForOrganizationCommandOutput>;
  deleteTelemetryRuleForOrganization(
    args: DeleteTelemetryRuleForOrganizationCommandInput,
    cb: (err: any, data?: DeleteTelemetryRuleForOrganizationCommandOutput) => void
  ): void;
  deleteTelemetryRuleForOrganization(
    args: DeleteTelemetryRuleForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: DeleteTelemetryRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCentralizationRuleForOrganizationCommand}
   */
  getCentralizationRuleForOrganization(
    args: GetCentralizationRuleForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<GetCentralizationRuleForOrganizationCommandOutput>;
  getCentralizationRuleForOrganization(
    args: GetCentralizationRuleForOrganizationCommandInput,
    cb: (err: any, data?: GetCentralizationRuleForOrganizationCommandOutput) => void
  ): void;
  getCentralizationRuleForOrganization(
    args: GetCentralizationRuleForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: GetCentralizationRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatasetIntegrationCommand}
   */
  getDatasetIntegration(
    args: GetDatasetIntegrationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<GetDatasetIntegrationCommandOutput>;
  getDatasetIntegration(
    args: GetDatasetIntegrationCommandInput,
    cb: (err: any, data?: GetDatasetIntegrationCommandOutput) => void
  ): void;
  getDatasetIntegration(
    args: GetDatasetIntegrationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: GetDatasetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetS3TableIntegrationCommand}
   */
  getS3TableIntegration(
    args: GetS3TableIntegrationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<GetS3TableIntegrationCommandOutput>;
  getS3TableIntegration(
    args: GetS3TableIntegrationCommandInput,
    cb: (err: any, data?: GetS3TableIntegrationCommandOutput) => void
  ): void;
  getS3TableIntegration(
    args: GetS3TableIntegrationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: GetS3TableIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryEnrichmentStatusCommand}
   */
  getTelemetryEnrichmentStatus(): Promise<GetTelemetryEnrichmentStatusCommandOutput>;
  getTelemetryEnrichmentStatus(
    args: GetTelemetryEnrichmentStatusCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<GetTelemetryEnrichmentStatusCommandOutput>;
  getTelemetryEnrichmentStatus(
    args: GetTelemetryEnrichmentStatusCommandInput,
    cb: (err: any, data?: GetTelemetryEnrichmentStatusCommandOutput) => void
  ): void;
  getTelemetryEnrichmentStatus(
    args: GetTelemetryEnrichmentStatusCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: GetTelemetryEnrichmentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryEvaluationStatusCommand}
   */
  getTelemetryEvaluationStatus(): Promise<GetTelemetryEvaluationStatusCommandOutput>;
  getTelemetryEvaluationStatus(
    args: GetTelemetryEvaluationStatusCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<GetTelemetryEvaluationStatusCommandOutput>;
  getTelemetryEvaluationStatus(
    args: GetTelemetryEvaluationStatusCommandInput,
    cb: (err: any, data?: GetTelemetryEvaluationStatusCommandOutput) => void
  ): void;
  getTelemetryEvaluationStatus(
    args: GetTelemetryEvaluationStatusCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: GetTelemetryEvaluationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryEvaluationStatusForOrganizationCommand}
   */
  getTelemetryEvaluationStatusForOrganization(): Promise<GetTelemetryEvaluationStatusForOrganizationCommandOutput>;
  getTelemetryEvaluationStatusForOrganization(
    args: GetTelemetryEvaluationStatusForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<GetTelemetryEvaluationStatusForOrganizationCommandOutput>;
  getTelemetryEvaluationStatusForOrganization(
    args: GetTelemetryEvaluationStatusForOrganizationCommandInput,
    cb: (err: any, data?: GetTelemetryEvaluationStatusForOrganizationCommandOutput) => void
  ): void;
  getTelemetryEvaluationStatusForOrganization(
    args: GetTelemetryEvaluationStatusForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: GetTelemetryEvaluationStatusForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryPipelineCommand}
   */
  getTelemetryPipeline(
    args: GetTelemetryPipelineCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<GetTelemetryPipelineCommandOutput>;
  getTelemetryPipeline(
    args: GetTelemetryPipelineCommandInput,
    cb: (err: any, data?: GetTelemetryPipelineCommandOutput) => void
  ): void;
  getTelemetryPipeline(
    args: GetTelemetryPipelineCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: GetTelemetryPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryRuleCommand}
   */
  getTelemetryRule(
    args: GetTelemetryRuleCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<GetTelemetryRuleCommandOutput>;
  getTelemetryRule(
    args: GetTelemetryRuleCommandInput,
    cb: (err: any, data?: GetTelemetryRuleCommandOutput) => void
  ): void;
  getTelemetryRule(
    args: GetTelemetryRuleCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: GetTelemetryRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryRuleForOrganizationCommand}
   */
  getTelemetryRuleForOrganization(
    args: GetTelemetryRuleForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<GetTelemetryRuleForOrganizationCommandOutput>;
  getTelemetryRuleForOrganization(
    args: GetTelemetryRuleForOrganizationCommandInput,
    cb: (err: any, data?: GetTelemetryRuleForOrganizationCommandOutput) => void
  ): void;
  getTelemetryRuleForOrganization(
    args: GetTelemetryRuleForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: GetTelemetryRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCentralizationRulesForOrganizationCommand}
   */
  listCentralizationRulesForOrganization(): Promise<ListCentralizationRulesForOrganizationCommandOutput>;
  listCentralizationRulesForOrganization(
    args: ListCentralizationRulesForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<ListCentralizationRulesForOrganizationCommandOutput>;
  listCentralizationRulesForOrganization(
    args: ListCentralizationRulesForOrganizationCommandInput,
    cb: (err: any, data?: ListCentralizationRulesForOrganizationCommandOutput) => void
  ): void;
  listCentralizationRulesForOrganization(
    args: ListCentralizationRulesForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: ListCentralizationRulesForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetIntegrationsCommand}
   */
  listDatasetIntegrations(): Promise<ListDatasetIntegrationsCommandOutput>;
  listDatasetIntegrations(
    args: ListDatasetIntegrationsCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<ListDatasetIntegrationsCommandOutput>;
  listDatasetIntegrations(
    args: ListDatasetIntegrationsCommandInput,
    cb: (err: any, data?: ListDatasetIntegrationsCommandOutput) => void
  ): void;
  listDatasetIntegrations(
    args: ListDatasetIntegrationsCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: ListDatasetIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceTelemetryCommand}
   */
  listResourceTelemetry(): Promise<ListResourceTelemetryCommandOutput>;
  listResourceTelemetry(
    args: ListResourceTelemetryCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<ListResourceTelemetryCommandOutput>;
  listResourceTelemetry(
    args: ListResourceTelemetryCommandInput,
    cb: (err: any, data?: ListResourceTelemetryCommandOutput) => void
  ): void;
  listResourceTelemetry(
    args: ListResourceTelemetryCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: ListResourceTelemetryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceTelemetryForOrganizationCommand}
   */
  listResourceTelemetryForOrganization(): Promise<ListResourceTelemetryForOrganizationCommandOutput>;
  listResourceTelemetryForOrganization(
    args: ListResourceTelemetryForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<ListResourceTelemetryForOrganizationCommandOutput>;
  listResourceTelemetryForOrganization(
    args: ListResourceTelemetryForOrganizationCommandInput,
    cb: (err: any, data?: ListResourceTelemetryForOrganizationCommandOutput) => void
  ): void;
  listResourceTelemetryForOrganization(
    args: ListResourceTelemetryForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: ListResourceTelemetryForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListS3TableIntegrationsCommand}
   */
  listS3TableIntegrations(): Promise<ListS3TableIntegrationsCommandOutput>;
  listS3TableIntegrations(
    args: ListS3TableIntegrationsCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<ListS3TableIntegrationsCommandOutput>;
  listS3TableIntegrations(
    args: ListS3TableIntegrationsCommandInput,
    cb: (err: any, data?: ListS3TableIntegrationsCommandOutput) => void
  ): void;
  listS3TableIntegrations(
    args: ListS3TableIntegrationsCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: ListS3TableIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTelemetryPipelinesCommand}
   */
  listTelemetryPipelines(): Promise<ListTelemetryPipelinesCommandOutput>;
  listTelemetryPipelines(
    args: ListTelemetryPipelinesCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<ListTelemetryPipelinesCommandOutput>;
  listTelemetryPipelines(
    args: ListTelemetryPipelinesCommandInput,
    cb: (err: any, data?: ListTelemetryPipelinesCommandOutput) => void
  ): void;
  listTelemetryPipelines(
    args: ListTelemetryPipelinesCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: ListTelemetryPipelinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTelemetryRulesCommand}
   */
  listTelemetryRules(): Promise<ListTelemetryRulesCommandOutput>;
  listTelemetryRules(
    args: ListTelemetryRulesCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<ListTelemetryRulesCommandOutput>;
  listTelemetryRules(
    args: ListTelemetryRulesCommandInput,
    cb: (err: any, data?: ListTelemetryRulesCommandOutput) => void
  ): void;
  listTelemetryRules(
    args: ListTelemetryRulesCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: ListTelemetryRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTelemetryRulesForOrganizationCommand}
   */
  listTelemetryRulesForOrganization(): Promise<ListTelemetryRulesForOrganizationCommandOutput>;
  listTelemetryRulesForOrganization(
    args: ListTelemetryRulesForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<ListTelemetryRulesForOrganizationCommandOutput>;
  listTelemetryRulesForOrganization(
    args: ListTelemetryRulesForOrganizationCommandInput,
    cb: (err: any, data?: ListTelemetryRulesForOrganizationCommandOutput) => void
  ): void;
  listTelemetryRulesForOrganization(
    args: ListTelemetryRulesForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: ListTelemetryRulesForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTelemetryEnrichmentCommand}
   */
  startTelemetryEnrichment(): Promise<StartTelemetryEnrichmentCommandOutput>;
  startTelemetryEnrichment(
    args: StartTelemetryEnrichmentCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<StartTelemetryEnrichmentCommandOutput>;
  startTelemetryEnrichment(
    args: StartTelemetryEnrichmentCommandInput,
    cb: (err: any, data?: StartTelemetryEnrichmentCommandOutput) => void
  ): void;
  startTelemetryEnrichment(
    args: StartTelemetryEnrichmentCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: StartTelemetryEnrichmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTelemetryEvaluationCommand}
   */
  startTelemetryEvaluation(): Promise<StartTelemetryEvaluationCommandOutput>;
  startTelemetryEvaluation(
    args: StartTelemetryEvaluationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<StartTelemetryEvaluationCommandOutput>;
  startTelemetryEvaluation(
    args: StartTelemetryEvaluationCommandInput,
    cb: (err: any, data?: StartTelemetryEvaluationCommandOutput) => void
  ): void;
  startTelemetryEvaluation(
    args: StartTelemetryEvaluationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: StartTelemetryEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTelemetryEvaluationForOrganizationCommand}
   */
  startTelemetryEvaluationForOrganization(): Promise<StartTelemetryEvaluationForOrganizationCommandOutput>;
  startTelemetryEvaluationForOrganization(
    args: StartTelemetryEvaluationForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<StartTelemetryEvaluationForOrganizationCommandOutput>;
  startTelemetryEvaluationForOrganization(
    args: StartTelemetryEvaluationForOrganizationCommandInput,
    cb: (err: any, data?: StartTelemetryEvaluationForOrganizationCommandOutput) => void
  ): void;
  startTelemetryEvaluationForOrganization(
    args: StartTelemetryEvaluationForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: StartTelemetryEvaluationForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTelemetryEnrichmentCommand}
   */
  stopTelemetryEnrichment(): Promise<StopTelemetryEnrichmentCommandOutput>;
  stopTelemetryEnrichment(
    args: StopTelemetryEnrichmentCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<StopTelemetryEnrichmentCommandOutput>;
  stopTelemetryEnrichment(
    args: StopTelemetryEnrichmentCommandInput,
    cb: (err: any, data?: StopTelemetryEnrichmentCommandOutput) => void
  ): void;
  stopTelemetryEnrichment(
    args: StopTelemetryEnrichmentCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: StopTelemetryEnrichmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTelemetryEvaluationCommand}
   */
  stopTelemetryEvaluation(): Promise<StopTelemetryEvaluationCommandOutput>;
  stopTelemetryEvaluation(
    args: StopTelemetryEvaluationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<StopTelemetryEvaluationCommandOutput>;
  stopTelemetryEvaluation(
    args: StopTelemetryEvaluationCommandInput,
    cb: (err: any, data?: StopTelemetryEvaluationCommandOutput) => void
  ): void;
  stopTelemetryEvaluation(
    args: StopTelemetryEvaluationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: StopTelemetryEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTelemetryEvaluationForOrganizationCommand}
   */
  stopTelemetryEvaluationForOrganization(): Promise<StopTelemetryEvaluationForOrganizationCommandOutput>;
  stopTelemetryEvaluationForOrganization(
    args: StopTelemetryEvaluationForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<StopTelemetryEvaluationForOrganizationCommandOutput>;
  stopTelemetryEvaluationForOrganization(
    args: StopTelemetryEvaluationForOrganizationCommandInput,
    cb: (err: any, data?: StopTelemetryEvaluationForOrganizationCommandOutput) => void
  ): void;
  stopTelemetryEvaluationForOrganization(
    args: StopTelemetryEvaluationForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: StopTelemetryEvaluationForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestTelemetryPipelineCommand}
   */
  testTelemetryPipeline(
    args: TestTelemetryPipelineCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<TestTelemetryPipelineCommandOutput>;
  testTelemetryPipeline(
    args: TestTelemetryPipelineCommandInput,
    cb: (err: any, data?: TestTelemetryPipelineCommandOutput) => void
  ): void;
  testTelemetryPipeline(
    args: TestTelemetryPipelineCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: TestTelemetryPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCentralizationRuleForOrganizationCommand}
   */
  updateCentralizationRuleForOrganization(
    args: UpdateCentralizationRuleForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<UpdateCentralizationRuleForOrganizationCommandOutput>;
  updateCentralizationRuleForOrganization(
    args: UpdateCentralizationRuleForOrganizationCommandInput,
    cb: (err: any, data?: UpdateCentralizationRuleForOrganizationCommandOutput) => void
  ): void;
  updateCentralizationRuleForOrganization(
    args: UpdateCentralizationRuleForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: UpdateCentralizationRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatasetIntegrationCommand}
   */
  updateDatasetIntegration(
    args: UpdateDatasetIntegrationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<UpdateDatasetIntegrationCommandOutput>;
  updateDatasetIntegration(
    args: UpdateDatasetIntegrationCommandInput,
    cb: (err: any, data?: UpdateDatasetIntegrationCommandOutput) => void
  ): void;
  updateDatasetIntegration(
    args: UpdateDatasetIntegrationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: UpdateDatasetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTelemetryPipelineCommand}
   */
  updateTelemetryPipeline(
    args: UpdateTelemetryPipelineCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<UpdateTelemetryPipelineCommandOutput>;
  updateTelemetryPipeline(
    args: UpdateTelemetryPipelineCommandInput,
    cb: (err: any, data?: UpdateTelemetryPipelineCommandOutput) => void
  ): void;
  updateTelemetryPipeline(
    args: UpdateTelemetryPipelineCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: UpdateTelemetryPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTelemetryRuleCommand}
   */
  updateTelemetryRule(
    args: UpdateTelemetryRuleCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<UpdateTelemetryRuleCommandOutput>;
  updateTelemetryRule(
    args: UpdateTelemetryRuleCommandInput,
    cb: (err: any, data?: UpdateTelemetryRuleCommandOutput) => void
  ): void;
  updateTelemetryRule(
    args: UpdateTelemetryRuleCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: UpdateTelemetryRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTelemetryRuleForOrganizationCommand}
   */
  updateTelemetryRuleForOrganization(
    args: UpdateTelemetryRuleForOrganizationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<UpdateTelemetryRuleForOrganizationCommandOutput>;
  updateTelemetryRuleForOrganization(
    args: UpdateTelemetryRuleForOrganizationCommandInput,
    cb: (err: any, data?: UpdateTelemetryRuleForOrganizationCommandOutput) => void
  ): void;
  updateTelemetryRuleForOrganization(
    args: UpdateTelemetryRuleForOrganizationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: UpdateTelemetryRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateTelemetryPipelineConfigurationCommand}
   */
  validateTelemetryPipelineConfiguration(
    args: ValidateTelemetryPipelineConfigurationCommandInput,
    options?: ObservabilityAdminRequestOptions
  ): Promise<ValidateTelemetryPipelineConfigurationCommandOutput>;
  validateTelemetryPipelineConfiguration(
    args: ValidateTelemetryPipelineConfigurationCommandInput,
    cb: (err: any, data?: ValidateTelemetryPipelineConfigurationCommandOutput) => void
  ): void;
  validateTelemetryPipelineConfiguration(
    args: ValidateTelemetryPipelineConfigurationCommandInput,
    options: ObservabilityAdminRequestOptions,
    cb: (err: any, data?: ValidateTelemetryPipelineConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCentralizationRulesForOrganizationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCentralizationRulesForOrganizationCommandOutput}.
   */
  paginateListCentralizationRulesForOrganization(
    args?: ListCentralizationRulesForOrganizationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCentralizationRulesForOrganizationCommandOutput>;

  /**
   * @see {@link ListDatasetIntegrationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetIntegrationsCommandOutput}.
   */
  paginateListDatasetIntegrations(
    args?: ListDatasetIntegrationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetIntegrationsCommandOutput>;

  /**
   * @see {@link ListResourceTelemetryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceTelemetryCommandOutput}.
   */
  paginateListResourceTelemetry(
    args?: ListResourceTelemetryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceTelemetryCommandOutput>;

  /**
   * @see {@link ListResourceTelemetryForOrganizationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceTelemetryForOrganizationCommandOutput}.
   */
  paginateListResourceTelemetryForOrganization(
    args?: ListResourceTelemetryForOrganizationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceTelemetryForOrganizationCommandOutput>;

  /**
   * @see {@link ListS3TableIntegrationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListS3TableIntegrationsCommandOutput}.
   */
  paginateListS3TableIntegrations(
    args?: ListS3TableIntegrationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListS3TableIntegrationsCommandOutput>;

  /**
   * @see {@link ListTelemetryPipelinesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTelemetryPipelinesCommandOutput}.
   */
  paginateListTelemetryPipelines(
    args?: ListTelemetryPipelinesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTelemetryPipelinesCommandOutput>;

  /**
   * @see {@link ListTelemetryRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTelemetryRulesCommandOutput}.
   */
  paginateListTelemetryRules(
    args?: ListTelemetryRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTelemetryRulesCommandOutput>;

  /**
   * @see {@link ListTelemetryRulesForOrganizationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTelemetryRulesForOrganizationCommandOutput}.
   */
  paginateListTelemetryRulesForOrganization(
    args?: ListTelemetryRulesForOrganizationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTelemetryRulesForOrganizationCommandOutput>;
}

/**
 * <p> You can use Amazon CloudWatch Observability Admin to discover and understand the state of telemetry configuration in CloudWatch for your Amazon Web Services Organization or account. This simplifies the process of auditing your telemetry collection configurations across multiple resource types within your Amazon Web Services Organization or account. By providing a consolidated view, it allows you to easily review and manage telemetry settings, helping you ensure proper monitoring and data collection across your Amazon Web Services environment. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/telemetry-config-cloudwatch.html">Auditing CloudWatch telemetry conﬁgurations</a> in the CloudWatch User Guide.</p> <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html">Identity and access management for Amazon CloudWatch</a> in the CloudWatch User Guide.</p>
 * @public
 */
export class ObservabilityAdmin extends ObservabilityAdminClient implements ObservabilityAdmin {}
createAggregatedClient(commands, ObservabilityAdmin, { paginators });
