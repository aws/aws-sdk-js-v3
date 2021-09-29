import { ComputeOptimizerClient } from "./ComputeOptimizerClient";
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
  GetRecommendationSummariesCommand,
  GetRecommendationSummariesCommandInput,
  GetRecommendationSummariesCommandOutput,
} from "./commands/GetRecommendationSummariesCommand";
import {
  UpdateEnrollmentStatusCommand,
  UpdateEnrollmentStatusCommandInput,
  UpdateEnrollmentStatusCommandOutput,
} from "./commands/UpdateEnrollmentStatusCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Compute Optimizer is a service that analyzes the configuration and utilization
 *             metrics of your Amazon Web Services compute resources, such as Amazon EC2
 *             instances, Amazon EC2 Auto Scaling groups, Lambda functions, and Amazon EBS volumes. It reports whether your resources are optimal, and generates
 *             optimization recommendations to reduce the cost and improve the performance of your
 *             workloads. Compute Optimizer also provides recent utilization metric data, in addition
 *             to projected utilization metric data for the recommendations, which you can use to
 *             evaluate which recommendation provides the best price-performance trade-off. The
 *             analysis of your usage patterns can help you decide when to move or resize your running
 *             resources, and still meet your performance and capacity requirements. For more
 *             information about Compute Optimizer, including the required permissions to use the
 *             service, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/">Compute Optimizer User Guide</a>.</p>
 */
export class ComputeOptimizer extends ComputeOptimizerClient {
  /**
   * <p>Describes recommendation export jobs created in the last seven days.</p>
   *
   *         <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your
   *             recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action
   *             to view your export jobs.</p>
   */
  public describeRecommendationExportJobs(
    args: DescribeRecommendationExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecommendationExportJobsCommandOutput>;
  public describeRecommendationExportJobs(
    args: DescribeRecommendationExportJobsCommandInput,
    cb: (err: any, data?: DescribeRecommendationExportJobsCommandOutput) => void
  ): void;
  public describeRecommendationExportJobs(
    args: DescribeRecommendationExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecommendationExportJobsCommandOutput) => void
  ): void;
  public describeRecommendationExportJobs(
    args: DescribeRecommendationExportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRecommendationExportJobsCommandOutput) => void),
    cb?: (err: any, data?: DescribeRecommendationExportJobsCommandOutput) => void
  ): Promise<DescribeRecommendationExportJobsCommandOutput> | void {
    const command = new DescribeRecommendationExportJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Exports optimization recommendations for Auto Scaling groups.</p>
   *
   *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
   *             in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
   *                 Recommendations</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   *
   *         <p>You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</p>
   */
  public exportAutoScalingGroupRecommendations(
    args: ExportAutoScalingGroupRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportAutoScalingGroupRecommendationsCommandOutput>;
  public exportAutoScalingGroupRecommendations(
    args: ExportAutoScalingGroupRecommendationsCommandInput,
    cb: (err: any, data?: ExportAutoScalingGroupRecommendationsCommandOutput) => void
  ): void;
  public exportAutoScalingGroupRecommendations(
    args: ExportAutoScalingGroupRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportAutoScalingGroupRecommendationsCommandOutput) => void
  ): void;
  public exportAutoScalingGroupRecommendations(
    args: ExportAutoScalingGroupRecommendationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ExportAutoScalingGroupRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: ExportAutoScalingGroupRecommendationsCommandOutput) => void
  ): Promise<ExportAutoScalingGroupRecommendationsCommandOutput> | void {
    const command = new ExportAutoScalingGroupRecommendationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Exports optimization recommendations for Amazon EBS volumes.</p>
   *
   *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
   *             in a JavaScript Object Notation (JSON)   (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see
   *                 <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
   *                 Recommendations</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   *
   *         <p>You can have only one Amazon EBS volume export job in progress per Amazon Web Services Region.</p>
   */
  public exportEBSVolumeRecommendations(
    args: ExportEBSVolumeRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportEBSVolumeRecommendationsCommandOutput>;
  public exportEBSVolumeRecommendations(
    args: ExportEBSVolumeRecommendationsCommandInput,
    cb: (err: any, data?: ExportEBSVolumeRecommendationsCommandOutput) => void
  ): void;
  public exportEBSVolumeRecommendations(
    args: ExportEBSVolumeRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportEBSVolumeRecommendationsCommandOutput) => void
  ): void;
  public exportEBSVolumeRecommendations(
    args: ExportEBSVolumeRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportEBSVolumeRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: ExportEBSVolumeRecommendationsCommandOutput) => void
  ): Promise<ExportEBSVolumeRecommendationsCommandOutput> | void {
    const command = new ExportEBSVolumeRecommendationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Exports optimization recommendations for Amazon EC2 instances.</p>
   *
   *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
   *             in a JavaScript Object Notation (JSON)   (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see
   *                 <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
   *                 Recommendations</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   *
   *         <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>
   */
  public exportEC2InstanceRecommendations(
    args: ExportEC2InstanceRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportEC2InstanceRecommendationsCommandOutput>;
  public exportEC2InstanceRecommendations(
    args: ExportEC2InstanceRecommendationsCommandInput,
    cb: (err: any, data?: ExportEC2InstanceRecommendationsCommandOutput) => void
  ): void;
  public exportEC2InstanceRecommendations(
    args: ExportEC2InstanceRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportEC2InstanceRecommendationsCommandOutput) => void
  ): void;
  public exportEC2InstanceRecommendations(
    args: ExportEC2InstanceRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportEC2InstanceRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: ExportEC2InstanceRecommendationsCommandOutput) => void
  ): Promise<ExportEC2InstanceRecommendationsCommandOutput> | void {
    const command = new ExportEC2InstanceRecommendationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Exports optimization recommendations for Lambda functions.</p>
   *
   *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
   *             in a JavaScript Object Notation (JSON)   (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see
   *                 <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
   *                 Recommendations</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   *
   *         <p>You can have only one Lambda function export job in progress per Amazon Web Services Region.</p>
   */
  public exportLambdaFunctionRecommendations(
    args: ExportLambdaFunctionRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportLambdaFunctionRecommendationsCommandOutput>;
  public exportLambdaFunctionRecommendations(
    args: ExportLambdaFunctionRecommendationsCommandInput,
    cb: (err: any, data?: ExportLambdaFunctionRecommendationsCommandOutput) => void
  ): void;
  public exportLambdaFunctionRecommendations(
    args: ExportLambdaFunctionRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportLambdaFunctionRecommendationsCommandOutput) => void
  ): void;
  public exportLambdaFunctionRecommendations(
    args: ExportLambdaFunctionRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportLambdaFunctionRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: ExportLambdaFunctionRecommendationsCommandOutput) => void
  ): Promise<ExportLambdaFunctionRecommendationsCommandOutput> | void {
    const command = new ExportLambdaFunctionRecommendationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns Auto Scaling group recommendations.</p>
   *
   *         <p>Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that
   *             meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported
   *                 resources and requirements</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   */
  public getAutoScalingGroupRecommendations(
    args: GetAutoScalingGroupRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutoScalingGroupRecommendationsCommandOutput>;
  public getAutoScalingGroupRecommendations(
    args: GetAutoScalingGroupRecommendationsCommandInput,
    cb: (err: any, data?: GetAutoScalingGroupRecommendationsCommandOutput) => void
  ): void;
  public getAutoScalingGroupRecommendations(
    args: GetAutoScalingGroupRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutoScalingGroupRecommendationsCommandOutput) => void
  ): void;
  public getAutoScalingGroupRecommendations(
    args: GetAutoScalingGroupRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAutoScalingGroupRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: GetAutoScalingGroupRecommendationsCommandOutput) => void
  ): Promise<GetAutoScalingGroupRecommendationsCommandOutput> | void {
    const command = new GetAutoScalingGroupRecommendationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p>
   *
   *         <p>Compute Optimizer generates recommendations for Amazon EBS volumes that
   *             meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported
   *                 resources and requirements</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   */
  public getEBSVolumeRecommendations(
    args: GetEBSVolumeRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEBSVolumeRecommendationsCommandOutput>;
  public getEBSVolumeRecommendations(
    args: GetEBSVolumeRecommendationsCommandInput,
    cb: (err: any, data?: GetEBSVolumeRecommendationsCommandOutput) => void
  ): void;
  public getEBSVolumeRecommendations(
    args: GetEBSVolumeRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEBSVolumeRecommendationsCommandOutput) => void
  ): void;
  public getEBSVolumeRecommendations(
    args: GetEBSVolumeRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEBSVolumeRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: GetEBSVolumeRecommendationsCommandOutput) => void
  ): Promise<GetEBSVolumeRecommendationsCommandOutput> | void {
    const command = new GetEBSVolumeRecommendationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns Amazon EC2 instance recommendations.</p>
   *
   *         <p>Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more
   *             information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
   *                 requirements</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   */
  public getEC2InstanceRecommendations(
    args: GetEC2InstanceRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEC2InstanceRecommendationsCommandOutput>;
  public getEC2InstanceRecommendations(
    args: GetEC2InstanceRecommendationsCommandInput,
    cb: (err: any, data?: GetEC2InstanceRecommendationsCommandOutput) => void
  ): void;
  public getEC2InstanceRecommendations(
    args: GetEC2InstanceRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEC2InstanceRecommendationsCommandOutput) => void
  ): void;
  public getEC2InstanceRecommendations(
    args: GetEC2InstanceRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEC2InstanceRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: GetEC2InstanceRecommendationsCommandOutput) => void
  ): Promise<GetEC2InstanceRecommendationsCommandOutput> | void {
    const command = new GetEC2InstanceRecommendationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the projected utilization metrics of Amazon EC2 instance
   *             recommendations.</p>
   *
   *         <note>
   *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
   *                 utilization metrics returned when you run this action. Additionally, the
   *                     <code>Memory</code> metric is returned only for resources that have the unified
   *                     CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p>
   *         </note>
   */
  public getEC2RecommendationProjectedMetrics(
    args: GetEC2RecommendationProjectedMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEC2RecommendationProjectedMetricsCommandOutput>;
  public getEC2RecommendationProjectedMetrics(
    args: GetEC2RecommendationProjectedMetricsCommandInput,
    cb: (err: any, data?: GetEC2RecommendationProjectedMetricsCommandOutput) => void
  ): void;
  public getEC2RecommendationProjectedMetrics(
    args: GetEC2RecommendationProjectedMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEC2RecommendationProjectedMetricsCommandOutput) => void
  ): void;
  public getEC2RecommendationProjectedMetrics(
    args: GetEC2RecommendationProjectedMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEC2RecommendationProjectedMetricsCommandOutput) => void),
    cb?: (err: any, data?: GetEC2RecommendationProjectedMetricsCommandOutput) => void
  ): Promise<GetEC2RecommendationProjectedMetricsCommandOutput> | void {
    const command = new GetEC2RecommendationProjectedMetricsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the enrollment (opt in) status of an account to the Compute Optimizer
   *             service.</p>
   *
   *         <p>If the account is the management account of an organization, this action also confirms
   *             the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information
   *             about the enrollment status of member accounts of an organization.</p>
   */
  public getEnrollmentStatus(
    args: GetEnrollmentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnrollmentStatusCommandOutput>;
  public getEnrollmentStatus(
    args: GetEnrollmentStatusCommandInput,
    cb: (err: any, data?: GetEnrollmentStatusCommandOutput) => void
  ): void;
  public getEnrollmentStatus(
    args: GetEnrollmentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnrollmentStatusCommandOutput) => void
  ): void;
  public getEnrollmentStatus(
    args: GetEnrollmentStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEnrollmentStatusCommandOutput) => void),
    cb?: (err: any, data?: GetEnrollmentStatusCommandOutput) => void
  ): Promise<GetEnrollmentStatusCommandOutput> | void {
    const command = new GetEnrollmentStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the Compute Optimizer enrollment (opt-in) status of organization member
   *             accounts, if your account is an organization management account.</p>
   *
   *         <p>To get the enrollment status of standalone accounts, use the <a>GetEnrollmentStatus</a> action.</p>
   */
  public getEnrollmentStatusesForOrganization(
    args: GetEnrollmentStatusesForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnrollmentStatusesForOrganizationCommandOutput>;
  public getEnrollmentStatusesForOrganization(
    args: GetEnrollmentStatusesForOrganizationCommandInput,
    cb: (err: any, data?: GetEnrollmentStatusesForOrganizationCommandOutput) => void
  ): void;
  public getEnrollmentStatusesForOrganization(
    args: GetEnrollmentStatusesForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnrollmentStatusesForOrganizationCommandOutput) => void
  ): void;
  public getEnrollmentStatusesForOrganization(
    args: GetEnrollmentStatusesForOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEnrollmentStatusesForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: GetEnrollmentStatusesForOrganizationCommandOutput) => void
  ): Promise<GetEnrollmentStatusesForOrganizationCommandOutput> | void {
    const command = new GetEnrollmentStatusesForOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns Lambda function recommendations.</p>
   *
   *         <p>Compute Optimizer generates recommendations for functions that meet a specific set
   *             of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
   *                 requirements</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   */
  public getLambdaFunctionRecommendations(
    args: GetLambdaFunctionRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLambdaFunctionRecommendationsCommandOutput>;
  public getLambdaFunctionRecommendations(
    args: GetLambdaFunctionRecommendationsCommandInput,
    cb: (err: any, data?: GetLambdaFunctionRecommendationsCommandOutput) => void
  ): void;
  public getLambdaFunctionRecommendations(
    args: GetLambdaFunctionRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLambdaFunctionRecommendationsCommandOutput) => void
  ): void;
  public getLambdaFunctionRecommendations(
    args: GetLambdaFunctionRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLambdaFunctionRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: GetLambdaFunctionRecommendationsCommandOutput) => void
  ): Promise<GetLambdaFunctionRecommendationsCommandOutput> | void {
    const command = new GetLambdaFunctionRecommendationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the optimization findings for an account.</p>
   *
   *         <p>It returns the number of:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>Amazon EC2 instances in an account that are
   *                         <code>Underprovisioned</code>, <code>Overprovisioned</code>, or
   *                         <code>Optimized</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or
   *                         <code>Optimized</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>,
   *                     or <code>Optimized</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Lambda functions in an account that are <code>NotOptimized</code>,
   *                     or <code>Optimized</code>.</p>
   *             </li>
   *          </ul>
   */
  public getRecommendationSummaries(
    args: GetRecommendationSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationSummariesCommandOutput>;
  public getRecommendationSummaries(
    args: GetRecommendationSummariesCommandInput,
    cb: (err: any, data?: GetRecommendationSummariesCommandOutput) => void
  ): void;
  public getRecommendationSummaries(
    args: GetRecommendationSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationSummariesCommandOutput) => void
  ): void;
  public getRecommendationSummaries(
    args: GetRecommendationSummariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRecommendationSummariesCommandOutput) => void),
    cb?: (err: any, data?: GetRecommendationSummariesCommandOutput) => void
  ): Promise<GetRecommendationSummariesCommandOutput> | void {
    const command = new GetRecommendationSummariesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p>
   *
   *         <p>If the account is a management account of an organization, this action can also be
   *             used to enroll member accounts of the organization.</p>
   *
   *         <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its
   *             recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p>
   *
   *         <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your
   *             account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using
   *                 Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
   */
  public updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnrollmentStatusCommandOutput>;
  public updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    cb: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void
  ): void;
  public updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void
  ): void;
  public updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEnrollmentStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void
  ): Promise<UpdateEnrollmentStatusCommandOutput> | void {
    const command = new UpdateEnrollmentStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
