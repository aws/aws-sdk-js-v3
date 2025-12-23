// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateCentralizationRuleForOrganizationCommand,
  CreateCentralizationRuleForOrganizationCommandInput,
  CreateCentralizationRuleForOrganizationCommandOutput,
} from "./commands/CreateCentralizationRuleForOrganizationCommand";
import {
  CreateS3TableIntegrationCommand,
  CreateS3TableIntegrationCommandInput,
  CreateS3TableIntegrationCommandOutput,
} from "./commands/CreateS3TableIntegrationCommand";
import {
  CreateTelemetryPipelineCommand,
  CreateTelemetryPipelineCommandInput,
  CreateTelemetryPipelineCommandOutput,
} from "./commands/CreateTelemetryPipelineCommand";
import {
  CreateTelemetryRuleCommand,
  CreateTelemetryRuleCommandInput,
  CreateTelemetryRuleCommandOutput,
} from "./commands/CreateTelemetryRuleCommand";
import {
  CreateTelemetryRuleForOrganizationCommand,
  CreateTelemetryRuleForOrganizationCommandInput,
  CreateTelemetryRuleForOrganizationCommandOutput,
} from "./commands/CreateTelemetryRuleForOrganizationCommand";
import {
  DeleteCentralizationRuleForOrganizationCommand,
  DeleteCentralizationRuleForOrganizationCommandInput,
  DeleteCentralizationRuleForOrganizationCommandOutput,
} from "./commands/DeleteCentralizationRuleForOrganizationCommand";
import {
  DeleteS3TableIntegrationCommand,
  DeleteS3TableIntegrationCommandInput,
  DeleteS3TableIntegrationCommandOutput,
} from "./commands/DeleteS3TableIntegrationCommand";
import {
  DeleteTelemetryPipelineCommand,
  DeleteTelemetryPipelineCommandInput,
  DeleteTelemetryPipelineCommandOutput,
} from "./commands/DeleteTelemetryPipelineCommand";
import {
  DeleteTelemetryRuleCommand,
  DeleteTelemetryRuleCommandInput,
  DeleteTelemetryRuleCommandOutput,
} from "./commands/DeleteTelemetryRuleCommand";
import {
  DeleteTelemetryRuleForOrganizationCommand,
  DeleteTelemetryRuleForOrganizationCommandInput,
  DeleteTelemetryRuleForOrganizationCommandOutput,
} from "./commands/DeleteTelemetryRuleForOrganizationCommand";
import {
  GetCentralizationRuleForOrganizationCommand,
  GetCentralizationRuleForOrganizationCommandInput,
  GetCentralizationRuleForOrganizationCommandOutput,
} from "./commands/GetCentralizationRuleForOrganizationCommand";
import {
  GetS3TableIntegrationCommand,
  GetS3TableIntegrationCommandInput,
  GetS3TableIntegrationCommandOutput,
} from "./commands/GetS3TableIntegrationCommand";
import {
  GetTelemetryEnrichmentStatusCommand,
  GetTelemetryEnrichmentStatusCommandInput,
  GetTelemetryEnrichmentStatusCommandOutput,
} from "./commands/GetTelemetryEnrichmentStatusCommand";
import {
  GetTelemetryEvaluationStatusCommand,
  GetTelemetryEvaluationStatusCommandInput,
  GetTelemetryEvaluationStatusCommandOutput,
} from "./commands/GetTelemetryEvaluationStatusCommand";
import {
  GetTelemetryEvaluationStatusForOrganizationCommand,
  GetTelemetryEvaluationStatusForOrganizationCommandInput,
  GetTelemetryEvaluationStatusForOrganizationCommandOutput,
} from "./commands/GetTelemetryEvaluationStatusForOrganizationCommand";
import {
  GetTelemetryPipelineCommand,
  GetTelemetryPipelineCommandInput,
  GetTelemetryPipelineCommandOutput,
} from "./commands/GetTelemetryPipelineCommand";
import {
  GetTelemetryRuleCommand,
  GetTelemetryRuleCommandInput,
  GetTelemetryRuleCommandOutput,
} from "./commands/GetTelemetryRuleCommand";
import {
  GetTelemetryRuleForOrganizationCommand,
  GetTelemetryRuleForOrganizationCommandInput,
  GetTelemetryRuleForOrganizationCommandOutput,
} from "./commands/GetTelemetryRuleForOrganizationCommand";
import {
  ListCentralizationRulesForOrganizationCommand,
  ListCentralizationRulesForOrganizationCommandInput,
  ListCentralizationRulesForOrganizationCommandOutput,
} from "./commands/ListCentralizationRulesForOrganizationCommand";
import {
  ListResourceTelemetryCommand,
  ListResourceTelemetryCommandInput,
  ListResourceTelemetryCommandOutput,
} from "./commands/ListResourceTelemetryCommand";
import {
  ListResourceTelemetryForOrganizationCommand,
  ListResourceTelemetryForOrganizationCommandInput,
  ListResourceTelemetryForOrganizationCommandOutput,
} from "./commands/ListResourceTelemetryForOrganizationCommand";
import {
  ListS3TableIntegrationsCommand,
  ListS3TableIntegrationsCommandInput,
  ListS3TableIntegrationsCommandOutput,
} from "./commands/ListS3TableIntegrationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTelemetryPipelinesCommand,
  ListTelemetryPipelinesCommandInput,
  ListTelemetryPipelinesCommandOutput,
} from "./commands/ListTelemetryPipelinesCommand";
import {
  ListTelemetryRulesCommand,
  ListTelemetryRulesCommandInput,
  ListTelemetryRulesCommandOutput,
} from "./commands/ListTelemetryRulesCommand";
import {
  ListTelemetryRulesForOrganizationCommand,
  ListTelemetryRulesForOrganizationCommandInput,
  ListTelemetryRulesForOrganizationCommandOutput,
} from "./commands/ListTelemetryRulesForOrganizationCommand";
import {
  StartTelemetryEnrichmentCommand,
  StartTelemetryEnrichmentCommandInput,
  StartTelemetryEnrichmentCommandOutput,
} from "./commands/StartTelemetryEnrichmentCommand";
import {
  StartTelemetryEvaluationCommand,
  StartTelemetryEvaluationCommandInput,
  StartTelemetryEvaluationCommandOutput,
} from "./commands/StartTelemetryEvaluationCommand";
import {
  StartTelemetryEvaluationForOrganizationCommand,
  StartTelemetryEvaluationForOrganizationCommandInput,
  StartTelemetryEvaluationForOrganizationCommandOutput,
} from "./commands/StartTelemetryEvaluationForOrganizationCommand";
import {
  StopTelemetryEnrichmentCommand,
  StopTelemetryEnrichmentCommandInput,
  StopTelemetryEnrichmentCommandOutput,
} from "./commands/StopTelemetryEnrichmentCommand";
import {
  StopTelemetryEvaluationCommand,
  StopTelemetryEvaluationCommandInput,
  StopTelemetryEvaluationCommandOutput,
} from "./commands/StopTelemetryEvaluationCommand";
import {
  StopTelemetryEvaluationForOrganizationCommand,
  StopTelemetryEvaluationForOrganizationCommandInput,
  StopTelemetryEvaluationForOrganizationCommandOutput,
} from "./commands/StopTelemetryEvaluationForOrganizationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestTelemetryPipelineCommand,
  TestTelemetryPipelineCommandInput,
  TestTelemetryPipelineCommandOutput,
} from "./commands/TestTelemetryPipelineCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCentralizationRuleForOrganizationCommand,
  UpdateCentralizationRuleForOrganizationCommandInput,
  UpdateCentralizationRuleForOrganizationCommandOutput,
} from "./commands/UpdateCentralizationRuleForOrganizationCommand";
import {
  UpdateTelemetryPipelineCommand,
  UpdateTelemetryPipelineCommandInput,
  UpdateTelemetryPipelineCommandOutput,
} from "./commands/UpdateTelemetryPipelineCommand";
import {
  UpdateTelemetryRuleCommand,
  UpdateTelemetryRuleCommandInput,
  UpdateTelemetryRuleCommandOutput,
} from "./commands/UpdateTelemetryRuleCommand";
import {
  UpdateTelemetryRuleForOrganizationCommand,
  UpdateTelemetryRuleForOrganizationCommandInput,
  UpdateTelemetryRuleForOrganizationCommandOutput,
} from "./commands/UpdateTelemetryRuleForOrganizationCommand";
import {
  ValidateTelemetryPipelineConfigurationCommand,
  ValidateTelemetryPipelineConfigurationCommandInput,
  ValidateTelemetryPipelineConfigurationCommandOutput,
} from "./commands/ValidateTelemetryPipelineConfigurationCommand";
import { ObservabilityAdminClient } from "./ObservabilityAdminClient";

const commands = {
  CreateCentralizationRuleForOrganizationCommand,
  CreateS3TableIntegrationCommand,
  CreateTelemetryPipelineCommand,
  CreateTelemetryRuleCommand,
  CreateTelemetryRuleForOrganizationCommand,
  DeleteCentralizationRuleForOrganizationCommand,
  DeleteS3TableIntegrationCommand,
  DeleteTelemetryPipelineCommand,
  DeleteTelemetryRuleCommand,
  DeleteTelemetryRuleForOrganizationCommand,
  GetCentralizationRuleForOrganizationCommand,
  GetS3TableIntegrationCommand,
  GetTelemetryEnrichmentStatusCommand,
  GetTelemetryEvaluationStatusCommand,
  GetTelemetryEvaluationStatusForOrganizationCommand,
  GetTelemetryPipelineCommand,
  GetTelemetryRuleCommand,
  GetTelemetryRuleForOrganizationCommand,
  ListCentralizationRulesForOrganizationCommand,
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
  UpdateTelemetryPipelineCommand,
  UpdateTelemetryRuleCommand,
  UpdateTelemetryRuleForOrganizationCommand,
  ValidateTelemetryPipelineConfigurationCommand,
};

export interface ObservabilityAdmin {
  /**
   * @see {@link CreateCentralizationRuleForOrganizationCommand}
   */
  createCentralizationRuleForOrganization(
    args: CreateCentralizationRuleForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCentralizationRuleForOrganizationCommandOutput>;
  createCentralizationRuleForOrganization(
    args: CreateCentralizationRuleForOrganizationCommandInput,
    cb: (err: any, data?: CreateCentralizationRuleForOrganizationCommandOutput) => void
  ): void;
  createCentralizationRuleForOrganization(
    args: CreateCentralizationRuleForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCentralizationRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateS3TableIntegrationCommand}
   */
  createS3TableIntegration(
    args: CreateS3TableIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateS3TableIntegrationCommandOutput>;
  createS3TableIntegration(
    args: CreateS3TableIntegrationCommandInput,
    cb: (err: any, data?: CreateS3TableIntegrationCommandOutput) => void
  ): void;
  createS3TableIntegration(
    args: CreateS3TableIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateS3TableIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTelemetryPipelineCommand}
   */
  createTelemetryPipeline(
    args: CreateTelemetryPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTelemetryPipelineCommandOutput>;
  createTelemetryPipeline(
    args: CreateTelemetryPipelineCommandInput,
    cb: (err: any, data?: CreateTelemetryPipelineCommandOutput) => void
  ): void;
  createTelemetryPipeline(
    args: CreateTelemetryPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTelemetryPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTelemetryRuleCommand}
   */
  createTelemetryRule(
    args: CreateTelemetryRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTelemetryRuleCommandOutput>;
  createTelemetryRule(
    args: CreateTelemetryRuleCommandInput,
    cb: (err: any, data?: CreateTelemetryRuleCommandOutput) => void
  ): void;
  createTelemetryRule(
    args: CreateTelemetryRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTelemetryRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTelemetryRuleForOrganizationCommand}
   */
  createTelemetryRuleForOrganization(
    args: CreateTelemetryRuleForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTelemetryRuleForOrganizationCommandOutput>;
  createTelemetryRuleForOrganization(
    args: CreateTelemetryRuleForOrganizationCommandInput,
    cb: (err: any, data?: CreateTelemetryRuleForOrganizationCommandOutput) => void
  ): void;
  createTelemetryRuleForOrganization(
    args: CreateTelemetryRuleForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTelemetryRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCentralizationRuleForOrganizationCommand}
   */
  deleteCentralizationRuleForOrganization(
    args: DeleteCentralizationRuleForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCentralizationRuleForOrganizationCommandOutput>;
  deleteCentralizationRuleForOrganization(
    args: DeleteCentralizationRuleForOrganizationCommandInput,
    cb: (err: any, data?: DeleteCentralizationRuleForOrganizationCommandOutput) => void
  ): void;
  deleteCentralizationRuleForOrganization(
    args: DeleteCentralizationRuleForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCentralizationRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteS3TableIntegrationCommand}
   */
  deleteS3TableIntegration(
    args: DeleteS3TableIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteS3TableIntegrationCommandOutput>;
  deleteS3TableIntegration(
    args: DeleteS3TableIntegrationCommandInput,
    cb: (err: any, data?: DeleteS3TableIntegrationCommandOutput) => void
  ): void;
  deleteS3TableIntegration(
    args: DeleteS3TableIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteS3TableIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTelemetryPipelineCommand}
   */
  deleteTelemetryPipeline(
    args: DeleteTelemetryPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTelemetryPipelineCommandOutput>;
  deleteTelemetryPipeline(
    args: DeleteTelemetryPipelineCommandInput,
    cb: (err: any, data?: DeleteTelemetryPipelineCommandOutput) => void
  ): void;
  deleteTelemetryPipeline(
    args: DeleteTelemetryPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTelemetryPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTelemetryRuleCommand}
   */
  deleteTelemetryRule(
    args: DeleteTelemetryRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTelemetryRuleCommandOutput>;
  deleteTelemetryRule(
    args: DeleteTelemetryRuleCommandInput,
    cb: (err: any, data?: DeleteTelemetryRuleCommandOutput) => void
  ): void;
  deleteTelemetryRule(
    args: DeleteTelemetryRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTelemetryRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTelemetryRuleForOrganizationCommand}
   */
  deleteTelemetryRuleForOrganization(
    args: DeleteTelemetryRuleForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTelemetryRuleForOrganizationCommandOutput>;
  deleteTelemetryRuleForOrganization(
    args: DeleteTelemetryRuleForOrganizationCommandInput,
    cb: (err: any, data?: DeleteTelemetryRuleForOrganizationCommandOutput) => void
  ): void;
  deleteTelemetryRuleForOrganization(
    args: DeleteTelemetryRuleForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTelemetryRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCentralizationRuleForOrganizationCommand}
   */
  getCentralizationRuleForOrganization(
    args: GetCentralizationRuleForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCentralizationRuleForOrganizationCommandOutput>;
  getCentralizationRuleForOrganization(
    args: GetCentralizationRuleForOrganizationCommandInput,
    cb: (err: any, data?: GetCentralizationRuleForOrganizationCommandOutput) => void
  ): void;
  getCentralizationRuleForOrganization(
    args: GetCentralizationRuleForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCentralizationRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetS3TableIntegrationCommand}
   */
  getS3TableIntegration(
    args: GetS3TableIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetS3TableIntegrationCommandOutput>;
  getS3TableIntegration(
    args: GetS3TableIntegrationCommandInput,
    cb: (err: any, data?: GetS3TableIntegrationCommandOutput) => void
  ): void;
  getS3TableIntegration(
    args: GetS3TableIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetS3TableIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryEnrichmentStatusCommand}
   */
  getTelemetryEnrichmentStatus(): Promise<GetTelemetryEnrichmentStatusCommandOutput>;
  getTelemetryEnrichmentStatus(
    args: GetTelemetryEnrichmentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTelemetryEnrichmentStatusCommandOutput>;
  getTelemetryEnrichmentStatus(
    args: GetTelemetryEnrichmentStatusCommandInput,
    cb: (err: any, data?: GetTelemetryEnrichmentStatusCommandOutput) => void
  ): void;
  getTelemetryEnrichmentStatus(
    args: GetTelemetryEnrichmentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTelemetryEnrichmentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryEvaluationStatusCommand}
   */
  getTelemetryEvaluationStatus(): Promise<GetTelemetryEvaluationStatusCommandOutput>;
  getTelemetryEvaluationStatus(
    args: GetTelemetryEvaluationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTelemetryEvaluationStatusCommandOutput>;
  getTelemetryEvaluationStatus(
    args: GetTelemetryEvaluationStatusCommandInput,
    cb: (err: any, data?: GetTelemetryEvaluationStatusCommandOutput) => void
  ): void;
  getTelemetryEvaluationStatus(
    args: GetTelemetryEvaluationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTelemetryEvaluationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryEvaluationStatusForOrganizationCommand}
   */
  getTelemetryEvaluationStatusForOrganization(): Promise<GetTelemetryEvaluationStatusForOrganizationCommandOutput>;
  getTelemetryEvaluationStatusForOrganization(
    args: GetTelemetryEvaluationStatusForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTelemetryEvaluationStatusForOrganizationCommandOutput>;
  getTelemetryEvaluationStatusForOrganization(
    args: GetTelemetryEvaluationStatusForOrganizationCommandInput,
    cb: (err: any, data?: GetTelemetryEvaluationStatusForOrganizationCommandOutput) => void
  ): void;
  getTelemetryEvaluationStatusForOrganization(
    args: GetTelemetryEvaluationStatusForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTelemetryEvaluationStatusForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryPipelineCommand}
   */
  getTelemetryPipeline(
    args: GetTelemetryPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTelemetryPipelineCommandOutput>;
  getTelemetryPipeline(
    args: GetTelemetryPipelineCommandInput,
    cb: (err: any, data?: GetTelemetryPipelineCommandOutput) => void
  ): void;
  getTelemetryPipeline(
    args: GetTelemetryPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTelemetryPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryRuleCommand}
   */
  getTelemetryRule(
    args: GetTelemetryRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTelemetryRuleCommandOutput>;
  getTelemetryRule(
    args: GetTelemetryRuleCommandInput,
    cb: (err: any, data?: GetTelemetryRuleCommandOutput) => void
  ): void;
  getTelemetryRule(
    args: GetTelemetryRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTelemetryRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryRuleForOrganizationCommand}
   */
  getTelemetryRuleForOrganization(
    args: GetTelemetryRuleForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTelemetryRuleForOrganizationCommandOutput>;
  getTelemetryRuleForOrganization(
    args: GetTelemetryRuleForOrganizationCommandInput,
    cb: (err: any, data?: GetTelemetryRuleForOrganizationCommandOutput) => void
  ): void;
  getTelemetryRuleForOrganization(
    args: GetTelemetryRuleForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTelemetryRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCentralizationRulesForOrganizationCommand}
   */
  listCentralizationRulesForOrganization(): Promise<ListCentralizationRulesForOrganizationCommandOutput>;
  listCentralizationRulesForOrganization(
    args: ListCentralizationRulesForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCentralizationRulesForOrganizationCommandOutput>;
  listCentralizationRulesForOrganization(
    args: ListCentralizationRulesForOrganizationCommandInput,
    cb: (err: any, data?: ListCentralizationRulesForOrganizationCommandOutput) => void
  ): void;
  listCentralizationRulesForOrganization(
    args: ListCentralizationRulesForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCentralizationRulesForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceTelemetryCommand}
   */
  listResourceTelemetry(): Promise<ListResourceTelemetryCommandOutput>;
  listResourceTelemetry(
    args: ListResourceTelemetryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceTelemetryCommandOutput>;
  listResourceTelemetry(
    args: ListResourceTelemetryCommandInput,
    cb: (err: any, data?: ListResourceTelemetryCommandOutput) => void
  ): void;
  listResourceTelemetry(
    args: ListResourceTelemetryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceTelemetryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceTelemetryForOrganizationCommand}
   */
  listResourceTelemetryForOrganization(): Promise<ListResourceTelemetryForOrganizationCommandOutput>;
  listResourceTelemetryForOrganization(
    args: ListResourceTelemetryForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceTelemetryForOrganizationCommandOutput>;
  listResourceTelemetryForOrganization(
    args: ListResourceTelemetryForOrganizationCommandInput,
    cb: (err: any, data?: ListResourceTelemetryForOrganizationCommandOutput) => void
  ): void;
  listResourceTelemetryForOrganization(
    args: ListResourceTelemetryForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceTelemetryForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListS3TableIntegrationsCommand}
   */
  listS3TableIntegrations(): Promise<ListS3TableIntegrationsCommandOutput>;
  listS3TableIntegrations(
    args: ListS3TableIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListS3TableIntegrationsCommandOutput>;
  listS3TableIntegrations(
    args: ListS3TableIntegrationsCommandInput,
    cb: (err: any, data?: ListS3TableIntegrationsCommandOutput) => void
  ): void;
  listS3TableIntegrations(
    args: ListS3TableIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListS3TableIntegrationsCommandOutput) => void
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
   * @see {@link ListTelemetryPipelinesCommand}
   */
  listTelemetryPipelines(): Promise<ListTelemetryPipelinesCommandOutput>;
  listTelemetryPipelines(
    args: ListTelemetryPipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTelemetryPipelinesCommandOutput>;
  listTelemetryPipelines(
    args: ListTelemetryPipelinesCommandInput,
    cb: (err: any, data?: ListTelemetryPipelinesCommandOutput) => void
  ): void;
  listTelemetryPipelines(
    args: ListTelemetryPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTelemetryPipelinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTelemetryRulesCommand}
   */
  listTelemetryRules(): Promise<ListTelemetryRulesCommandOutput>;
  listTelemetryRules(
    args: ListTelemetryRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTelemetryRulesCommandOutput>;
  listTelemetryRules(
    args: ListTelemetryRulesCommandInput,
    cb: (err: any, data?: ListTelemetryRulesCommandOutput) => void
  ): void;
  listTelemetryRules(
    args: ListTelemetryRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTelemetryRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTelemetryRulesForOrganizationCommand}
   */
  listTelemetryRulesForOrganization(): Promise<ListTelemetryRulesForOrganizationCommandOutput>;
  listTelemetryRulesForOrganization(
    args: ListTelemetryRulesForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTelemetryRulesForOrganizationCommandOutput>;
  listTelemetryRulesForOrganization(
    args: ListTelemetryRulesForOrganizationCommandInput,
    cb: (err: any, data?: ListTelemetryRulesForOrganizationCommandOutput) => void
  ): void;
  listTelemetryRulesForOrganization(
    args: ListTelemetryRulesForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTelemetryRulesForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTelemetryEnrichmentCommand}
   */
  startTelemetryEnrichment(): Promise<StartTelemetryEnrichmentCommandOutput>;
  startTelemetryEnrichment(
    args: StartTelemetryEnrichmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTelemetryEnrichmentCommandOutput>;
  startTelemetryEnrichment(
    args: StartTelemetryEnrichmentCommandInput,
    cb: (err: any, data?: StartTelemetryEnrichmentCommandOutput) => void
  ): void;
  startTelemetryEnrichment(
    args: StartTelemetryEnrichmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTelemetryEnrichmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTelemetryEvaluationCommand}
   */
  startTelemetryEvaluation(): Promise<StartTelemetryEvaluationCommandOutput>;
  startTelemetryEvaluation(
    args: StartTelemetryEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTelemetryEvaluationCommandOutput>;
  startTelemetryEvaluation(
    args: StartTelemetryEvaluationCommandInput,
    cb: (err: any, data?: StartTelemetryEvaluationCommandOutput) => void
  ): void;
  startTelemetryEvaluation(
    args: StartTelemetryEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTelemetryEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTelemetryEvaluationForOrganizationCommand}
   */
  startTelemetryEvaluationForOrganization(): Promise<StartTelemetryEvaluationForOrganizationCommandOutput>;
  startTelemetryEvaluationForOrganization(
    args: StartTelemetryEvaluationForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTelemetryEvaluationForOrganizationCommandOutput>;
  startTelemetryEvaluationForOrganization(
    args: StartTelemetryEvaluationForOrganizationCommandInput,
    cb: (err: any, data?: StartTelemetryEvaluationForOrganizationCommandOutput) => void
  ): void;
  startTelemetryEvaluationForOrganization(
    args: StartTelemetryEvaluationForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTelemetryEvaluationForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTelemetryEnrichmentCommand}
   */
  stopTelemetryEnrichment(): Promise<StopTelemetryEnrichmentCommandOutput>;
  stopTelemetryEnrichment(
    args: StopTelemetryEnrichmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTelemetryEnrichmentCommandOutput>;
  stopTelemetryEnrichment(
    args: StopTelemetryEnrichmentCommandInput,
    cb: (err: any, data?: StopTelemetryEnrichmentCommandOutput) => void
  ): void;
  stopTelemetryEnrichment(
    args: StopTelemetryEnrichmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTelemetryEnrichmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTelemetryEvaluationCommand}
   */
  stopTelemetryEvaluation(): Promise<StopTelemetryEvaluationCommandOutput>;
  stopTelemetryEvaluation(
    args: StopTelemetryEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTelemetryEvaluationCommandOutput>;
  stopTelemetryEvaluation(
    args: StopTelemetryEvaluationCommandInput,
    cb: (err: any, data?: StopTelemetryEvaluationCommandOutput) => void
  ): void;
  stopTelemetryEvaluation(
    args: StopTelemetryEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTelemetryEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTelemetryEvaluationForOrganizationCommand}
   */
  stopTelemetryEvaluationForOrganization(): Promise<StopTelemetryEvaluationForOrganizationCommandOutput>;
  stopTelemetryEvaluationForOrganization(
    args: StopTelemetryEvaluationForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTelemetryEvaluationForOrganizationCommandOutput>;
  stopTelemetryEvaluationForOrganization(
    args: StopTelemetryEvaluationForOrganizationCommandInput,
    cb: (err: any, data?: StopTelemetryEvaluationForOrganizationCommandOutput) => void
  ): void;
  stopTelemetryEvaluationForOrganization(
    args: StopTelemetryEvaluationForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTelemetryEvaluationForOrganizationCommandOutput) => void
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
   * @see {@link TestTelemetryPipelineCommand}
   */
  testTelemetryPipeline(
    args: TestTelemetryPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestTelemetryPipelineCommandOutput>;
  testTelemetryPipeline(
    args: TestTelemetryPipelineCommandInput,
    cb: (err: any, data?: TestTelemetryPipelineCommandOutput) => void
  ): void;
  testTelemetryPipeline(
    args: TestTelemetryPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestTelemetryPipelineCommandOutput) => void
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
   * @see {@link UpdateCentralizationRuleForOrganizationCommand}
   */
  updateCentralizationRuleForOrganization(
    args: UpdateCentralizationRuleForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCentralizationRuleForOrganizationCommandOutput>;
  updateCentralizationRuleForOrganization(
    args: UpdateCentralizationRuleForOrganizationCommandInput,
    cb: (err: any, data?: UpdateCentralizationRuleForOrganizationCommandOutput) => void
  ): void;
  updateCentralizationRuleForOrganization(
    args: UpdateCentralizationRuleForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCentralizationRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTelemetryPipelineCommand}
   */
  updateTelemetryPipeline(
    args: UpdateTelemetryPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTelemetryPipelineCommandOutput>;
  updateTelemetryPipeline(
    args: UpdateTelemetryPipelineCommandInput,
    cb: (err: any, data?: UpdateTelemetryPipelineCommandOutput) => void
  ): void;
  updateTelemetryPipeline(
    args: UpdateTelemetryPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTelemetryPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTelemetryRuleCommand}
   */
  updateTelemetryRule(
    args: UpdateTelemetryRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTelemetryRuleCommandOutput>;
  updateTelemetryRule(
    args: UpdateTelemetryRuleCommandInput,
    cb: (err: any, data?: UpdateTelemetryRuleCommandOutput) => void
  ): void;
  updateTelemetryRule(
    args: UpdateTelemetryRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTelemetryRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTelemetryRuleForOrganizationCommand}
   */
  updateTelemetryRuleForOrganization(
    args: UpdateTelemetryRuleForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTelemetryRuleForOrganizationCommandOutput>;
  updateTelemetryRuleForOrganization(
    args: UpdateTelemetryRuleForOrganizationCommandInput,
    cb: (err: any, data?: UpdateTelemetryRuleForOrganizationCommandOutput) => void
  ): void;
  updateTelemetryRuleForOrganization(
    args: UpdateTelemetryRuleForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTelemetryRuleForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateTelemetryPipelineConfigurationCommand}
   */
  validateTelemetryPipelineConfiguration(
    args: ValidateTelemetryPipelineConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateTelemetryPipelineConfigurationCommandOutput>;
  validateTelemetryPipelineConfiguration(
    args: ValidateTelemetryPipelineConfigurationCommandInput,
    cb: (err: any, data?: ValidateTelemetryPipelineConfigurationCommandOutput) => void
  ): void;
  validateTelemetryPipelineConfiguration(
    args: ValidateTelemetryPipelineConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateTelemetryPipelineConfigurationCommandOutput) => void
  ): void;
}

/**
 * <p> You can use Amazon CloudWatch Observability Admin to discover and understand the state of telemetry configuration in CloudWatch for your Amazon Web Services Organization or account. This simplifies the process of auditing your telemetry collection configurations across multiple resource types within your Amazon Web Services Organization or account. By providing a consolidated view, it allows you to easily review and manage telemetry settings, helping you ensure proper monitoring and data collection across your Amazon Web Services environment. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/telemetry-config-cloudwatch.html">Auditing CloudWatch telemetry conﬁgurations</a> in the CloudWatch User Guide.</p> <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html">Identity and access management for Amazon CloudWatch</a> in the CloudWatch User Guide.</p>
 * @public
 */
export class ObservabilityAdmin extends ObservabilityAdminClient implements ObservabilityAdmin {}
createAggregatedClient(commands, ObservabilityAdmin);
