// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeleteRecommendationPreferencesCommand,
  DeleteRecommendationPreferencesCommandInput,
  DeleteRecommendationPreferencesCommandOutput,
} from "./commands/DeleteRecommendationPreferencesCommand";
import {
  DescribeRecommendationExportJobsCommand,
  DescribeRecommendationExportJobsCommandInput,
  DescribeRecommendationExportJobsCommandOutput,
} from "./commands/DescribeRecommendationExportJobsCommand";
import {
  ExportAutoScalingGroupRecommendationsCommand,
  ExportAutoScalingGroupRecommendationsCommandInput,
  ExportAutoScalingGroupRecommendationsCommandOutput,
} from "./commands/ExportAutoScalingGroupRecommendationsCommand";
import {
  ExportEBSVolumeRecommendationsCommand,
  ExportEBSVolumeRecommendationsCommandInput,
  ExportEBSVolumeRecommendationsCommandOutput,
} from "./commands/ExportEBSVolumeRecommendationsCommand";
import {
  ExportEC2InstanceRecommendationsCommand,
  ExportEC2InstanceRecommendationsCommandInput,
  ExportEC2InstanceRecommendationsCommandOutput,
} from "./commands/ExportEC2InstanceRecommendationsCommand";
import {
  ExportECSServiceRecommendationsCommand,
  ExportECSServiceRecommendationsCommandInput,
  ExportECSServiceRecommendationsCommandOutput,
} from "./commands/ExportECSServiceRecommendationsCommand";
import {
  ExportLambdaFunctionRecommendationsCommand,
  ExportLambdaFunctionRecommendationsCommandInput,
  ExportLambdaFunctionRecommendationsCommandOutput,
} from "./commands/ExportLambdaFunctionRecommendationsCommand";
import {
  GetAutoScalingGroupRecommendationsCommand,
  GetAutoScalingGroupRecommendationsCommandInput,
  GetAutoScalingGroupRecommendationsCommandOutput,
} from "./commands/GetAutoScalingGroupRecommendationsCommand";
import {
  GetEBSVolumeRecommendationsCommand,
  GetEBSVolumeRecommendationsCommandInput,
  GetEBSVolumeRecommendationsCommandOutput,
} from "./commands/GetEBSVolumeRecommendationsCommand";
import {
  GetEC2InstanceRecommendationsCommand,
  GetEC2InstanceRecommendationsCommandInput,
  GetEC2InstanceRecommendationsCommandOutput,
} from "./commands/GetEC2InstanceRecommendationsCommand";
import {
  GetEC2RecommendationProjectedMetricsCommand,
  GetEC2RecommendationProjectedMetricsCommandInput,
  GetEC2RecommendationProjectedMetricsCommandOutput,
} from "./commands/GetEC2RecommendationProjectedMetricsCommand";
import {
  GetECSServiceRecommendationProjectedMetricsCommand,
  GetECSServiceRecommendationProjectedMetricsCommandInput,
  GetECSServiceRecommendationProjectedMetricsCommandOutput,
} from "./commands/GetECSServiceRecommendationProjectedMetricsCommand";
import {
  GetECSServiceRecommendationsCommand,
  GetECSServiceRecommendationsCommandInput,
  GetECSServiceRecommendationsCommandOutput,
} from "./commands/GetECSServiceRecommendationsCommand";
import {
  GetEffectiveRecommendationPreferencesCommand,
  GetEffectiveRecommendationPreferencesCommandInput,
  GetEffectiveRecommendationPreferencesCommandOutput,
} from "./commands/GetEffectiveRecommendationPreferencesCommand";
import {
  GetEnrollmentStatusCommand,
  GetEnrollmentStatusCommandInput,
  GetEnrollmentStatusCommandOutput,
} from "./commands/GetEnrollmentStatusCommand";
import {
  GetEnrollmentStatusesForOrganizationCommand,
  GetEnrollmentStatusesForOrganizationCommandInput,
  GetEnrollmentStatusesForOrganizationCommandOutput,
} from "./commands/GetEnrollmentStatusesForOrganizationCommand";
import {
  GetLambdaFunctionRecommendationsCommand,
  GetLambdaFunctionRecommendationsCommandInput,
  GetLambdaFunctionRecommendationsCommandOutput,
} from "./commands/GetLambdaFunctionRecommendationsCommand";
import {
  GetRecommendationPreferencesCommand,
  GetRecommendationPreferencesCommandInput,
  GetRecommendationPreferencesCommandOutput,
} from "./commands/GetRecommendationPreferencesCommand";
import {
  GetRecommendationSummariesCommand,
  GetRecommendationSummariesCommandInput,
  GetRecommendationSummariesCommandOutput,
} from "./commands/GetRecommendationSummariesCommand";
import {
  PutRecommendationPreferencesCommand,
  PutRecommendationPreferencesCommandInput,
  PutRecommendationPreferencesCommandOutput,
} from "./commands/PutRecommendationPreferencesCommand";
import {
  UpdateEnrollmentStatusCommand,
  UpdateEnrollmentStatusCommandInput,
  UpdateEnrollmentStatusCommandOutput,
} from "./commands/UpdateEnrollmentStatusCommand";
import { ComputeOptimizerClient, ComputeOptimizerClientConfig } from "./ComputeOptimizerClient";

const commands = {
  DeleteRecommendationPreferencesCommand,
  DescribeRecommendationExportJobsCommand,
  ExportAutoScalingGroupRecommendationsCommand,
  ExportEBSVolumeRecommendationsCommand,
  ExportEC2InstanceRecommendationsCommand,
  ExportECSServiceRecommendationsCommand,
  ExportLambdaFunctionRecommendationsCommand,
  GetAutoScalingGroupRecommendationsCommand,
  GetEBSVolumeRecommendationsCommand,
  GetEC2InstanceRecommendationsCommand,
  GetEC2RecommendationProjectedMetricsCommand,
  GetECSServiceRecommendationProjectedMetricsCommand,
  GetECSServiceRecommendationsCommand,
  GetEffectiveRecommendationPreferencesCommand,
  GetEnrollmentStatusCommand,
  GetEnrollmentStatusesForOrganizationCommand,
  GetLambdaFunctionRecommendationsCommand,
  GetRecommendationPreferencesCommand,
  GetRecommendationSummariesCommand,
  PutRecommendationPreferencesCommand,
  UpdateEnrollmentStatusCommand,
};

export interface ComputeOptimizer {
  /**
   * @see {@link DeleteRecommendationPreferencesCommand}
   */
  deleteRecommendationPreferences(
    args: DeleteRecommendationPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecommendationPreferencesCommandOutput>;
  deleteRecommendationPreferences(
    args: DeleteRecommendationPreferencesCommandInput,
    cb: (err: any, data?: DeleteRecommendationPreferencesCommandOutput) => void
  ): void;
  deleteRecommendationPreferences(
    args: DeleteRecommendationPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecommendationPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecommendationExportJobsCommand}
   */
  describeRecommendationExportJobs(
    args: DescribeRecommendationExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecommendationExportJobsCommandOutput>;
  describeRecommendationExportJobs(
    args: DescribeRecommendationExportJobsCommandInput,
    cb: (err: any, data?: DescribeRecommendationExportJobsCommandOutput) => void
  ): void;
  describeRecommendationExportJobs(
    args: DescribeRecommendationExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecommendationExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportAutoScalingGroupRecommendationsCommand}
   */
  exportAutoScalingGroupRecommendations(
    args: ExportAutoScalingGroupRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportAutoScalingGroupRecommendationsCommandOutput>;
  exportAutoScalingGroupRecommendations(
    args: ExportAutoScalingGroupRecommendationsCommandInput,
    cb: (err: any, data?: ExportAutoScalingGroupRecommendationsCommandOutput) => void
  ): void;
  exportAutoScalingGroupRecommendations(
    args: ExportAutoScalingGroupRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportAutoScalingGroupRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportEBSVolumeRecommendationsCommand}
   */
  exportEBSVolumeRecommendations(
    args: ExportEBSVolumeRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportEBSVolumeRecommendationsCommandOutput>;
  exportEBSVolumeRecommendations(
    args: ExportEBSVolumeRecommendationsCommandInput,
    cb: (err: any, data?: ExportEBSVolumeRecommendationsCommandOutput) => void
  ): void;
  exportEBSVolumeRecommendations(
    args: ExportEBSVolumeRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportEBSVolumeRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportEC2InstanceRecommendationsCommand}
   */
  exportEC2InstanceRecommendations(
    args: ExportEC2InstanceRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportEC2InstanceRecommendationsCommandOutput>;
  exportEC2InstanceRecommendations(
    args: ExportEC2InstanceRecommendationsCommandInput,
    cb: (err: any, data?: ExportEC2InstanceRecommendationsCommandOutput) => void
  ): void;
  exportEC2InstanceRecommendations(
    args: ExportEC2InstanceRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportEC2InstanceRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportECSServiceRecommendationsCommand}
   */
  exportECSServiceRecommendations(
    args: ExportECSServiceRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportECSServiceRecommendationsCommandOutput>;
  exportECSServiceRecommendations(
    args: ExportECSServiceRecommendationsCommandInput,
    cb: (err: any, data?: ExportECSServiceRecommendationsCommandOutput) => void
  ): void;
  exportECSServiceRecommendations(
    args: ExportECSServiceRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportECSServiceRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportLambdaFunctionRecommendationsCommand}
   */
  exportLambdaFunctionRecommendations(
    args: ExportLambdaFunctionRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportLambdaFunctionRecommendationsCommandOutput>;
  exportLambdaFunctionRecommendations(
    args: ExportLambdaFunctionRecommendationsCommandInput,
    cb: (err: any, data?: ExportLambdaFunctionRecommendationsCommandOutput) => void
  ): void;
  exportLambdaFunctionRecommendations(
    args: ExportLambdaFunctionRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportLambdaFunctionRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutoScalingGroupRecommendationsCommand}
   */
  getAutoScalingGroupRecommendations(
    args: GetAutoScalingGroupRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutoScalingGroupRecommendationsCommandOutput>;
  getAutoScalingGroupRecommendations(
    args: GetAutoScalingGroupRecommendationsCommandInput,
    cb: (err: any, data?: GetAutoScalingGroupRecommendationsCommandOutput) => void
  ): void;
  getAutoScalingGroupRecommendations(
    args: GetAutoScalingGroupRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutoScalingGroupRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEBSVolumeRecommendationsCommand}
   */
  getEBSVolumeRecommendations(
    args: GetEBSVolumeRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEBSVolumeRecommendationsCommandOutput>;
  getEBSVolumeRecommendations(
    args: GetEBSVolumeRecommendationsCommandInput,
    cb: (err: any, data?: GetEBSVolumeRecommendationsCommandOutput) => void
  ): void;
  getEBSVolumeRecommendations(
    args: GetEBSVolumeRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEBSVolumeRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEC2InstanceRecommendationsCommand}
   */
  getEC2InstanceRecommendations(
    args: GetEC2InstanceRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEC2InstanceRecommendationsCommandOutput>;
  getEC2InstanceRecommendations(
    args: GetEC2InstanceRecommendationsCommandInput,
    cb: (err: any, data?: GetEC2InstanceRecommendationsCommandOutput) => void
  ): void;
  getEC2InstanceRecommendations(
    args: GetEC2InstanceRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEC2InstanceRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEC2RecommendationProjectedMetricsCommand}
   */
  getEC2RecommendationProjectedMetrics(
    args: GetEC2RecommendationProjectedMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEC2RecommendationProjectedMetricsCommandOutput>;
  getEC2RecommendationProjectedMetrics(
    args: GetEC2RecommendationProjectedMetricsCommandInput,
    cb: (err: any, data?: GetEC2RecommendationProjectedMetricsCommandOutput) => void
  ): void;
  getEC2RecommendationProjectedMetrics(
    args: GetEC2RecommendationProjectedMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEC2RecommendationProjectedMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetECSServiceRecommendationProjectedMetricsCommand}
   */
  getECSServiceRecommendationProjectedMetrics(
    args: GetECSServiceRecommendationProjectedMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetECSServiceRecommendationProjectedMetricsCommandOutput>;
  getECSServiceRecommendationProjectedMetrics(
    args: GetECSServiceRecommendationProjectedMetricsCommandInput,
    cb: (err: any, data?: GetECSServiceRecommendationProjectedMetricsCommandOutput) => void
  ): void;
  getECSServiceRecommendationProjectedMetrics(
    args: GetECSServiceRecommendationProjectedMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetECSServiceRecommendationProjectedMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetECSServiceRecommendationsCommand}
   */
  getECSServiceRecommendations(
    args: GetECSServiceRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetECSServiceRecommendationsCommandOutput>;
  getECSServiceRecommendations(
    args: GetECSServiceRecommendationsCommandInput,
    cb: (err: any, data?: GetECSServiceRecommendationsCommandOutput) => void
  ): void;
  getECSServiceRecommendations(
    args: GetECSServiceRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetECSServiceRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEffectiveRecommendationPreferencesCommand}
   */
  getEffectiveRecommendationPreferences(
    args: GetEffectiveRecommendationPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEffectiveRecommendationPreferencesCommandOutput>;
  getEffectiveRecommendationPreferences(
    args: GetEffectiveRecommendationPreferencesCommandInput,
    cb: (err: any, data?: GetEffectiveRecommendationPreferencesCommandOutput) => void
  ): void;
  getEffectiveRecommendationPreferences(
    args: GetEffectiveRecommendationPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEffectiveRecommendationPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnrollmentStatusCommand}
   */
  getEnrollmentStatus(
    args: GetEnrollmentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnrollmentStatusCommandOutput>;
  getEnrollmentStatus(
    args: GetEnrollmentStatusCommandInput,
    cb: (err: any, data?: GetEnrollmentStatusCommandOutput) => void
  ): void;
  getEnrollmentStatus(
    args: GetEnrollmentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnrollmentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnrollmentStatusesForOrganizationCommand}
   */
  getEnrollmentStatusesForOrganization(
    args: GetEnrollmentStatusesForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnrollmentStatusesForOrganizationCommandOutput>;
  getEnrollmentStatusesForOrganization(
    args: GetEnrollmentStatusesForOrganizationCommandInput,
    cb: (err: any, data?: GetEnrollmentStatusesForOrganizationCommandOutput) => void
  ): void;
  getEnrollmentStatusesForOrganization(
    args: GetEnrollmentStatusesForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnrollmentStatusesForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLambdaFunctionRecommendationsCommand}
   */
  getLambdaFunctionRecommendations(
    args: GetLambdaFunctionRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLambdaFunctionRecommendationsCommandOutput>;
  getLambdaFunctionRecommendations(
    args: GetLambdaFunctionRecommendationsCommandInput,
    cb: (err: any, data?: GetLambdaFunctionRecommendationsCommandOutput) => void
  ): void;
  getLambdaFunctionRecommendations(
    args: GetLambdaFunctionRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLambdaFunctionRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationPreferencesCommand}
   */
  getRecommendationPreferences(
    args: GetRecommendationPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationPreferencesCommandOutput>;
  getRecommendationPreferences(
    args: GetRecommendationPreferencesCommandInput,
    cb: (err: any, data?: GetRecommendationPreferencesCommandOutput) => void
  ): void;
  getRecommendationPreferences(
    args: GetRecommendationPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationSummariesCommand}
   */
  getRecommendationSummaries(
    args: GetRecommendationSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationSummariesCommandOutput>;
  getRecommendationSummaries(
    args: GetRecommendationSummariesCommandInput,
    cb: (err: any, data?: GetRecommendationSummariesCommandOutput) => void
  ): void;
  getRecommendationSummaries(
    args: GetRecommendationSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRecommendationPreferencesCommand}
   */
  putRecommendationPreferences(
    args: PutRecommendationPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRecommendationPreferencesCommandOutput>;
  putRecommendationPreferences(
    args: PutRecommendationPreferencesCommandInput,
    cb: (err: any, data?: PutRecommendationPreferencesCommandOutput) => void
  ): void;
  putRecommendationPreferences(
    args: PutRecommendationPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRecommendationPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnrollmentStatusCommand}
   */
  updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnrollmentStatusCommandOutput>;
  updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    cb: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void
  ): void;
  updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void
  ): void;
}

/**
 * @public
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
 */
export class ComputeOptimizer extends ComputeOptimizerClient implements ComputeOptimizer {}
createAggregatedClient(commands, ComputeOptimizer);
