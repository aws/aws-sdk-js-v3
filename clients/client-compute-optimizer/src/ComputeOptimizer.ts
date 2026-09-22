// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type DeleteRecommendationPreferencesCommandInput,
  type DeleteRecommendationPreferencesCommandOutput,
  DeleteRecommendationPreferencesCommand,
} from "./commands/DeleteRecommendationPreferencesCommand";
import {
  type DescribeRecommendationExportJobsCommandInput,
  type DescribeRecommendationExportJobsCommandOutput,
  DescribeRecommendationExportJobsCommand,
} from "./commands/DescribeRecommendationExportJobsCommand";
import {
  type ExportAutoScalingGroupRecommendationsCommandInput,
  type ExportAutoScalingGroupRecommendationsCommandOutput,
  ExportAutoScalingGroupRecommendationsCommand,
} from "./commands/ExportAutoScalingGroupRecommendationsCommand";
import {
  type ExportEBSVolumeRecommendationsCommandInput,
  type ExportEBSVolumeRecommendationsCommandOutput,
  ExportEBSVolumeRecommendationsCommand,
} from "./commands/ExportEBSVolumeRecommendationsCommand";
import {
  type ExportEC2InstanceRecommendationsCommandInput,
  type ExportEC2InstanceRecommendationsCommandOutput,
  ExportEC2InstanceRecommendationsCommand,
} from "./commands/ExportEC2InstanceRecommendationsCommand";
import {
  type ExportECSServiceRecommendationsCommandInput,
  type ExportECSServiceRecommendationsCommandOutput,
  ExportECSServiceRecommendationsCommand,
} from "./commands/ExportECSServiceRecommendationsCommand";
import {
  type ExportIdleRecommendationsCommandInput,
  type ExportIdleRecommendationsCommandOutput,
  ExportIdleRecommendationsCommand,
} from "./commands/ExportIdleRecommendationsCommand";
import {
  type ExportLambdaFunctionRecommendationsCommandInput,
  type ExportLambdaFunctionRecommendationsCommandOutput,
  ExportLambdaFunctionRecommendationsCommand,
} from "./commands/ExportLambdaFunctionRecommendationsCommand";
import {
  type ExportLicenseRecommendationsCommandInput,
  type ExportLicenseRecommendationsCommandOutput,
  ExportLicenseRecommendationsCommand,
} from "./commands/ExportLicenseRecommendationsCommand";
import {
  type ExportRDSDatabaseRecommendationsCommandInput,
  type ExportRDSDatabaseRecommendationsCommandOutput,
  ExportRDSDatabaseRecommendationsCommand,
} from "./commands/ExportRDSDatabaseRecommendationsCommand";
import {
  type GetAutoScalingGroupRecommendationsCommandInput,
  type GetAutoScalingGroupRecommendationsCommandOutput,
  GetAutoScalingGroupRecommendationsCommand,
} from "./commands/GetAutoScalingGroupRecommendationsCommand";
import {
  type GetEBSVolumeRecommendationsCommandInput,
  type GetEBSVolumeRecommendationsCommandOutput,
  GetEBSVolumeRecommendationsCommand,
} from "./commands/GetEBSVolumeRecommendationsCommand";
import {
  type GetEC2InstanceRecommendationsCommandInput,
  type GetEC2InstanceRecommendationsCommandOutput,
  GetEC2InstanceRecommendationsCommand,
} from "./commands/GetEC2InstanceRecommendationsCommand";
import {
  type GetEC2RecommendationProjectedMetricsCommandInput,
  type GetEC2RecommendationProjectedMetricsCommandOutput,
  GetEC2RecommendationProjectedMetricsCommand,
} from "./commands/GetEC2RecommendationProjectedMetricsCommand";
import {
  type GetECSServiceRecommendationProjectedMetricsCommandInput,
  type GetECSServiceRecommendationProjectedMetricsCommandOutput,
  GetECSServiceRecommendationProjectedMetricsCommand,
} from "./commands/GetECSServiceRecommendationProjectedMetricsCommand";
import {
  type GetECSServiceRecommendationsCommandInput,
  type GetECSServiceRecommendationsCommandOutput,
  GetECSServiceRecommendationsCommand,
} from "./commands/GetECSServiceRecommendationsCommand";
import {
  type GetEffectiveRecommendationPreferencesCommandInput,
  type GetEffectiveRecommendationPreferencesCommandOutput,
  GetEffectiveRecommendationPreferencesCommand,
} from "./commands/GetEffectiveRecommendationPreferencesCommand";
import {
  type GetEnrollmentStatusCommandInput,
  type GetEnrollmentStatusCommandOutput,
  GetEnrollmentStatusCommand,
} from "./commands/GetEnrollmentStatusCommand";
import {
  type GetEnrollmentStatusesForOrganizationCommandInput,
  type GetEnrollmentStatusesForOrganizationCommandOutput,
  GetEnrollmentStatusesForOrganizationCommand,
} from "./commands/GetEnrollmentStatusesForOrganizationCommand";
import {
  type GetIdleRecommendationsCommandInput,
  type GetIdleRecommendationsCommandOutput,
  GetIdleRecommendationsCommand,
} from "./commands/GetIdleRecommendationsCommand";
import {
  type GetLambdaFunctionRecommendationsCommandInput,
  type GetLambdaFunctionRecommendationsCommandOutput,
  GetLambdaFunctionRecommendationsCommand,
} from "./commands/GetLambdaFunctionRecommendationsCommand";
import {
  type GetLicenseRecommendationsCommandInput,
  type GetLicenseRecommendationsCommandOutput,
  GetLicenseRecommendationsCommand,
} from "./commands/GetLicenseRecommendationsCommand";
import {
  type GetRDSDatabaseRecommendationProjectedMetricsCommandInput,
  type GetRDSDatabaseRecommendationProjectedMetricsCommandOutput,
  GetRDSDatabaseRecommendationProjectedMetricsCommand,
} from "./commands/GetRDSDatabaseRecommendationProjectedMetricsCommand";
import {
  type GetRDSDatabaseRecommendationsCommandInput,
  type GetRDSDatabaseRecommendationsCommandOutput,
  GetRDSDatabaseRecommendationsCommand,
} from "./commands/GetRDSDatabaseRecommendationsCommand";
import {
  type GetRecommendationPreferencesCommandInput,
  type GetRecommendationPreferencesCommandOutput,
  GetRecommendationPreferencesCommand,
} from "./commands/GetRecommendationPreferencesCommand";
import {
  type GetRecommendationSummariesCommandInput,
  type GetRecommendationSummariesCommandOutput,
  GetRecommendationSummariesCommand,
} from "./commands/GetRecommendationSummariesCommand";
import {
  type PutRecommendationPreferencesCommandInput,
  type PutRecommendationPreferencesCommandOutput,
  PutRecommendationPreferencesCommand,
} from "./commands/PutRecommendationPreferencesCommand";
import {
  type UpdateEnrollmentStatusCommandInput,
  type UpdateEnrollmentStatusCommandOutput,
  UpdateEnrollmentStatusCommand,
} from "./commands/UpdateEnrollmentStatusCommand";
import { ComputeOptimizerClient } from "./ComputeOptimizerClient";
import { paginateDescribeRecommendationExportJobs } from "./pagination/DescribeRecommendationExportJobsPaginator";
import {
  paginateGetEnrollmentStatusesForOrganization,
} from "./pagination/GetEnrollmentStatusesForOrganizationPaginator";
import { paginateGetLambdaFunctionRecommendations } from "./pagination/GetLambdaFunctionRecommendationsPaginator";
import { paginateGetRecommendationPreferences } from "./pagination/GetRecommendationPreferencesPaginator";
import { paginateGetRecommendationSummaries } from "./pagination/GetRecommendationSummariesPaginator";

const commands = {
  DeleteRecommendationPreferencesCommand,
  DescribeRecommendationExportJobsCommand,
  ExportAutoScalingGroupRecommendationsCommand,
  ExportEBSVolumeRecommendationsCommand,
  ExportEC2InstanceRecommendationsCommand,
  ExportECSServiceRecommendationsCommand,
  ExportIdleRecommendationsCommand,
  ExportLambdaFunctionRecommendationsCommand,
  ExportLicenseRecommendationsCommand,
  ExportRDSDatabaseRecommendationsCommand,
  GetAutoScalingGroupRecommendationsCommand,
  GetEBSVolumeRecommendationsCommand,
  GetEC2InstanceRecommendationsCommand,
  GetEC2RecommendationProjectedMetricsCommand,
  GetECSServiceRecommendationProjectedMetricsCommand,
  GetECSServiceRecommendationsCommand,
  GetEffectiveRecommendationPreferencesCommand,
  GetEnrollmentStatusCommand,
  GetEnrollmentStatusesForOrganizationCommand,
  GetIdleRecommendationsCommand,
  GetLambdaFunctionRecommendationsCommand,
  GetLicenseRecommendationsCommand,
  GetRDSDatabaseRecommendationProjectedMetricsCommand,
  GetRDSDatabaseRecommendationsCommand,
  GetRecommendationPreferencesCommand,
  GetRecommendationSummariesCommand,
  PutRecommendationPreferencesCommand,
  UpdateEnrollmentStatusCommand,
};
const paginators = {
  paginateDescribeRecommendationExportJobs,
  paginateGetEnrollmentStatusesForOrganization,
  paginateGetLambdaFunctionRecommendations,
  paginateGetRecommendationPreferences,
  paginateGetRecommendationSummaries,
};

/**
 * @public
 */
export interface ComputeOptimizerRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ComputeOptimizer {
  /**
   * @see {@link DeleteRecommendationPreferencesCommand}
   */
  deleteRecommendationPreferences(
    args: DeleteRecommendationPreferencesCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<DeleteRecommendationPreferencesCommandOutput>;
  deleteRecommendationPreferences(
    args: DeleteRecommendationPreferencesCommandInput,
    cb: (err: any, data?: DeleteRecommendationPreferencesCommandOutput) => void
  ): void;
  deleteRecommendationPreferences(
    args: DeleteRecommendationPreferencesCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: DeleteRecommendationPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecommendationExportJobsCommand}
   */
  describeRecommendationExportJobs(): Promise<DescribeRecommendationExportJobsCommandOutput>;
  describeRecommendationExportJobs(
    args: DescribeRecommendationExportJobsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<DescribeRecommendationExportJobsCommandOutput>;
  describeRecommendationExportJobs(
    args: DescribeRecommendationExportJobsCommandInput,
    cb: (err: any, data?: DescribeRecommendationExportJobsCommandOutput) => void
  ): void;
  describeRecommendationExportJobs(
    args: DescribeRecommendationExportJobsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: DescribeRecommendationExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportAutoScalingGroupRecommendationsCommand}
   */
  exportAutoScalingGroupRecommendations(
    args: ExportAutoScalingGroupRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<ExportAutoScalingGroupRecommendationsCommandOutput>;
  exportAutoScalingGroupRecommendations(
    args: ExportAutoScalingGroupRecommendationsCommandInput,
    cb: (err: any, data?: ExportAutoScalingGroupRecommendationsCommandOutput) => void
  ): void;
  exportAutoScalingGroupRecommendations(
    args: ExportAutoScalingGroupRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: ExportAutoScalingGroupRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportEBSVolumeRecommendationsCommand}
   */
  exportEBSVolumeRecommendations(
    args: ExportEBSVolumeRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<ExportEBSVolumeRecommendationsCommandOutput>;
  exportEBSVolumeRecommendations(
    args: ExportEBSVolumeRecommendationsCommandInput,
    cb: (err: any, data?: ExportEBSVolumeRecommendationsCommandOutput) => void
  ): void;
  exportEBSVolumeRecommendations(
    args: ExportEBSVolumeRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: ExportEBSVolumeRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportEC2InstanceRecommendationsCommand}
   */
  exportEC2InstanceRecommendations(
    args: ExportEC2InstanceRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<ExportEC2InstanceRecommendationsCommandOutput>;
  exportEC2InstanceRecommendations(
    args: ExportEC2InstanceRecommendationsCommandInput,
    cb: (err: any, data?: ExportEC2InstanceRecommendationsCommandOutput) => void
  ): void;
  exportEC2InstanceRecommendations(
    args: ExportEC2InstanceRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: ExportEC2InstanceRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportECSServiceRecommendationsCommand}
   */
  exportECSServiceRecommendations(
    args: ExportECSServiceRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<ExportECSServiceRecommendationsCommandOutput>;
  exportECSServiceRecommendations(
    args: ExportECSServiceRecommendationsCommandInput,
    cb: (err: any, data?: ExportECSServiceRecommendationsCommandOutput) => void
  ): void;
  exportECSServiceRecommendations(
    args: ExportECSServiceRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: ExportECSServiceRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportIdleRecommendationsCommand}
   */
  exportIdleRecommendations(
    args: ExportIdleRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<ExportIdleRecommendationsCommandOutput>;
  exportIdleRecommendations(
    args: ExportIdleRecommendationsCommandInput,
    cb: (err: any, data?: ExportIdleRecommendationsCommandOutput) => void
  ): void;
  exportIdleRecommendations(
    args: ExportIdleRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: ExportIdleRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportLambdaFunctionRecommendationsCommand}
   */
  exportLambdaFunctionRecommendations(
    args: ExportLambdaFunctionRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<ExportLambdaFunctionRecommendationsCommandOutput>;
  exportLambdaFunctionRecommendations(
    args: ExportLambdaFunctionRecommendationsCommandInput,
    cb: (err: any, data?: ExportLambdaFunctionRecommendationsCommandOutput) => void
  ): void;
  exportLambdaFunctionRecommendations(
    args: ExportLambdaFunctionRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: ExportLambdaFunctionRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportLicenseRecommendationsCommand}
   */
  exportLicenseRecommendations(
    args: ExportLicenseRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<ExportLicenseRecommendationsCommandOutput>;
  exportLicenseRecommendations(
    args: ExportLicenseRecommendationsCommandInput,
    cb: (err: any, data?: ExportLicenseRecommendationsCommandOutput) => void
  ): void;
  exportLicenseRecommendations(
    args: ExportLicenseRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: ExportLicenseRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportRDSDatabaseRecommendationsCommand}
   */
  exportRDSDatabaseRecommendations(
    args: ExportRDSDatabaseRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<ExportRDSDatabaseRecommendationsCommandOutput>;
  exportRDSDatabaseRecommendations(
    args: ExportRDSDatabaseRecommendationsCommandInput,
    cb: (err: any, data?: ExportRDSDatabaseRecommendationsCommandOutput) => void
  ): void;
  exportRDSDatabaseRecommendations(
    args: ExportRDSDatabaseRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: ExportRDSDatabaseRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutoScalingGroupRecommendationsCommand}
   */
  getAutoScalingGroupRecommendations(): Promise<GetAutoScalingGroupRecommendationsCommandOutput>;
  getAutoScalingGroupRecommendations(
    args: GetAutoScalingGroupRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetAutoScalingGroupRecommendationsCommandOutput>;
  getAutoScalingGroupRecommendations(
    args: GetAutoScalingGroupRecommendationsCommandInput,
    cb: (err: any, data?: GetAutoScalingGroupRecommendationsCommandOutput) => void
  ): void;
  getAutoScalingGroupRecommendations(
    args: GetAutoScalingGroupRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetAutoScalingGroupRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEBSVolumeRecommendationsCommand}
   */
  getEBSVolumeRecommendations(): Promise<GetEBSVolumeRecommendationsCommandOutput>;
  getEBSVolumeRecommendations(
    args: GetEBSVolumeRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetEBSVolumeRecommendationsCommandOutput>;
  getEBSVolumeRecommendations(
    args: GetEBSVolumeRecommendationsCommandInput,
    cb: (err: any, data?: GetEBSVolumeRecommendationsCommandOutput) => void
  ): void;
  getEBSVolumeRecommendations(
    args: GetEBSVolumeRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetEBSVolumeRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEC2InstanceRecommendationsCommand}
   */
  getEC2InstanceRecommendations(): Promise<GetEC2InstanceRecommendationsCommandOutput>;
  getEC2InstanceRecommendations(
    args: GetEC2InstanceRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetEC2InstanceRecommendationsCommandOutput>;
  getEC2InstanceRecommendations(
    args: GetEC2InstanceRecommendationsCommandInput,
    cb: (err: any, data?: GetEC2InstanceRecommendationsCommandOutput) => void
  ): void;
  getEC2InstanceRecommendations(
    args: GetEC2InstanceRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetEC2InstanceRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEC2RecommendationProjectedMetricsCommand}
   */
  getEC2RecommendationProjectedMetrics(
    args: GetEC2RecommendationProjectedMetricsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetEC2RecommendationProjectedMetricsCommandOutput>;
  getEC2RecommendationProjectedMetrics(
    args: GetEC2RecommendationProjectedMetricsCommandInput,
    cb: (err: any, data?: GetEC2RecommendationProjectedMetricsCommandOutput) => void
  ): void;
  getEC2RecommendationProjectedMetrics(
    args: GetEC2RecommendationProjectedMetricsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetEC2RecommendationProjectedMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetECSServiceRecommendationProjectedMetricsCommand}
   */
  getECSServiceRecommendationProjectedMetrics(
    args: GetECSServiceRecommendationProjectedMetricsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetECSServiceRecommendationProjectedMetricsCommandOutput>;
  getECSServiceRecommendationProjectedMetrics(
    args: GetECSServiceRecommendationProjectedMetricsCommandInput,
    cb: (err: any, data?: GetECSServiceRecommendationProjectedMetricsCommandOutput) => void
  ): void;
  getECSServiceRecommendationProjectedMetrics(
    args: GetECSServiceRecommendationProjectedMetricsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetECSServiceRecommendationProjectedMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetECSServiceRecommendationsCommand}
   */
  getECSServiceRecommendations(): Promise<GetECSServiceRecommendationsCommandOutput>;
  getECSServiceRecommendations(
    args: GetECSServiceRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetECSServiceRecommendationsCommandOutput>;
  getECSServiceRecommendations(
    args: GetECSServiceRecommendationsCommandInput,
    cb: (err: any, data?: GetECSServiceRecommendationsCommandOutput) => void
  ): void;
  getECSServiceRecommendations(
    args: GetECSServiceRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetECSServiceRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEffectiveRecommendationPreferencesCommand}
   */
  getEffectiveRecommendationPreferences(
    args: GetEffectiveRecommendationPreferencesCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetEffectiveRecommendationPreferencesCommandOutput>;
  getEffectiveRecommendationPreferences(
    args: GetEffectiveRecommendationPreferencesCommandInput,
    cb: (err: any, data?: GetEffectiveRecommendationPreferencesCommandOutput) => void
  ): void;
  getEffectiveRecommendationPreferences(
    args: GetEffectiveRecommendationPreferencesCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetEffectiveRecommendationPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnrollmentStatusCommand}
   */
  getEnrollmentStatus(): Promise<GetEnrollmentStatusCommandOutput>;
  getEnrollmentStatus(
    args: GetEnrollmentStatusCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetEnrollmentStatusCommandOutput>;
  getEnrollmentStatus(
    args: GetEnrollmentStatusCommandInput,
    cb: (err: any, data?: GetEnrollmentStatusCommandOutput) => void
  ): void;
  getEnrollmentStatus(
    args: GetEnrollmentStatusCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetEnrollmentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnrollmentStatusesForOrganizationCommand}
   */
  getEnrollmentStatusesForOrganization(): Promise<GetEnrollmentStatusesForOrganizationCommandOutput>;
  getEnrollmentStatusesForOrganization(
    args: GetEnrollmentStatusesForOrganizationCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetEnrollmentStatusesForOrganizationCommandOutput>;
  getEnrollmentStatusesForOrganization(
    args: GetEnrollmentStatusesForOrganizationCommandInput,
    cb: (err: any, data?: GetEnrollmentStatusesForOrganizationCommandOutput) => void
  ): void;
  getEnrollmentStatusesForOrganization(
    args: GetEnrollmentStatusesForOrganizationCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetEnrollmentStatusesForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdleRecommendationsCommand}
   */
  getIdleRecommendations(): Promise<GetIdleRecommendationsCommandOutput>;
  getIdleRecommendations(
    args: GetIdleRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetIdleRecommendationsCommandOutput>;
  getIdleRecommendations(
    args: GetIdleRecommendationsCommandInput,
    cb: (err: any, data?: GetIdleRecommendationsCommandOutput) => void
  ): void;
  getIdleRecommendations(
    args: GetIdleRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetIdleRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLambdaFunctionRecommendationsCommand}
   */
  getLambdaFunctionRecommendations(): Promise<GetLambdaFunctionRecommendationsCommandOutput>;
  getLambdaFunctionRecommendations(
    args: GetLambdaFunctionRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetLambdaFunctionRecommendationsCommandOutput>;
  getLambdaFunctionRecommendations(
    args: GetLambdaFunctionRecommendationsCommandInput,
    cb: (err: any, data?: GetLambdaFunctionRecommendationsCommandOutput) => void
  ): void;
  getLambdaFunctionRecommendations(
    args: GetLambdaFunctionRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetLambdaFunctionRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLicenseRecommendationsCommand}
   */
  getLicenseRecommendations(): Promise<GetLicenseRecommendationsCommandOutput>;
  getLicenseRecommendations(
    args: GetLicenseRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetLicenseRecommendationsCommandOutput>;
  getLicenseRecommendations(
    args: GetLicenseRecommendationsCommandInput,
    cb: (err: any, data?: GetLicenseRecommendationsCommandOutput) => void
  ): void;
  getLicenseRecommendations(
    args: GetLicenseRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetLicenseRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRDSDatabaseRecommendationProjectedMetricsCommand}
   */
  getRDSDatabaseRecommendationProjectedMetrics(
    args: GetRDSDatabaseRecommendationProjectedMetricsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetRDSDatabaseRecommendationProjectedMetricsCommandOutput>;
  getRDSDatabaseRecommendationProjectedMetrics(
    args: GetRDSDatabaseRecommendationProjectedMetricsCommandInput,
    cb: (err: any, data?: GetRDSDatabaseRecommendationProjectedMetricsCommandOutput) => void
  ): void;
  getRDSDatabaseRecommendationProjectedMetrics(
    args: GetRDSDatabaseRecommendationProjectedMetricsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetRDSDatabaseRecommendationProjectedMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRDSDatabaseRecommendationsCommand}
   */
  getRDSDatabaseRecommendations(): Promise<GetRDSDatabaseRecommendationsCommandOutput>;
  getRDSDatabaseRecommendations(
    args: GetRDSDatabaseRecommendationsCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetRDSDatabaseRecommendationsCommandOutput>;
  getRDSDatabaseRecommendations(
    args: GetRDSDatabaseRecommendationsCommandInput,
    cb: (err: any, data?: GetRDSDatabaseRecommendationsCommandOutput) => void
  ): void;
  getRDSDatabaseRecommendations(
    args: GetRDSDatabaseRecommendationsCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetRDSDatabaseRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationPreferencesCommand}
   */
  getRecommendationPreferences(
    args: GetRecommendationPreferencesCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetRecommendationPreferencesCommandOutput>;
  getRecommendationPreferences(
    args: GetRecommendationPreferencesCommandInput,
    cb: (err: any, data?: GetRecommendationPreferencesCommandOutput) => void
  ): void;
  getRecommendationPreferences(
    args: GetRecommendationPreferencesCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetRecommendationPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationSummariesCommand}
   */
  getRecommendationSummaries(): Promise<GetRecommendationSummariesCommandOutput>;
  getRecommendationSummaries(
    args: GetRecommendationSummariesCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<GetRecommendationSummariesCommandOutput>;
  getRecommendationSummaries(
    args: GetRecommendationSummariesCommandInput,
    cb: (err: any, data?: GetRecommendationSummariesCommandOutput) => void
  ): void;
  getRecommendationSummaries(
    args: GetRecommendationSummariesCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: GetRecommendationSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRecommendationPreferencesCommand}
   */
  putRecommendationPreferences(
    args: PutRecommendationPreferencesCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<PutRecommendationPreferencesCommandOutput>;
  putRecommendationPreferences(
    args: PutRecommendationPreferencesCommandInput,
    cb: (err: any, data?: PutRecommendationPreferencesCommandOutput) => void
  ): void;
  putRecommendationPreferences(
    args: PutRecommendationPreferencesCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: PutRecommendationPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnrollmentStatusCommand}
   */
  updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    options?: ComputeOptimizerRequestOptions
  ): Promise<UpdateEnrollmentStatusCommandOutput>;
  updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    cb: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void
  ): void;
  updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    options: ComputeOptimizerRequestOptions,
    cb: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecommendationExportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeRecommendationExportJobsCommandOutput}.
   */
  paginateDescribeRecommendationExportJobs(
    args?: DescribeRecommendationExportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeRecommendationExportJobsCommandOutput>;

  /**
   * @see {@link GetEnrollmentStatusesForOrganizationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetEnrollmentStatusesForOrganizationCommandOutput}.
   */
  paginateGetEnrollmentStatusesForOrganization(
    args?: GetEnrollmentStatusesForOrganizationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetEnrollmentStatusesForOrganizationCommandOutput>;

  /**
   * @see {@link GetLambdaFunctionRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetLambdaFunctionRecommendationsCommandOutput}.
   */
  paginateGetLambdaFunctionRecommendations(
    args?: GetLambdaFunctionRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetLambdaFunctionRecommendationsCommandOutput>;

  /**
   * @see {@link GetRecommendationPreferencesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetRecommendationPreferencesCommandOutput}.
   */
  paginateGetRecommendationPreferences(
    args: GetRecommendationPreferencesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetRecommendationPreferencesCommandOutput>;

  /**
   * @see {@link GetRecommendationSummariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetRecommendationSummariesCommandOutput}.
   */
  paginateGetRecommendationSummaries(
    args?: GetRecommendationSummariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetRecommendationSummariesCommandOutput>;
}

/**
 * <p>Compute Optimizer is a service that analyzes the configuration and utilization
 *             metrics of your Amazon Web Services compute resources, such as Amazon EC2
 *             instances, Amazon EC2 Auto Scaling groups, Lambda functions, Amazon EBS volumes, and Amazon ECS services on Fargate.
 *             It reports whether your resources are optimal, and generates
 *             optimization recommendations to reduce the cost and improve the performance of your
 *             workloads. Compute Optimizer also provides recent utilization metric data, in addition
 *             to projected utilization metric data for the recommendations, which you can use to
 *             evaluate which recommendation provides the best price-performance trade-off. The
 *             analysis of your usage patterns can help you decide when to move or resize your running
 *             resources, and still meet your performance and capacity requirements. For more
 *             information about Compute Optimizer, including the required permissions to use the
 *             service, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/">Compute Optimizer User Guide</a>.</p>
 * @public
 */
export class ComputeOptimizer extends ComputeOptimizerClient implements ComputeOptimizer {}
createAggregatedClient(commands, ComputeOptimizer, { paginators });
