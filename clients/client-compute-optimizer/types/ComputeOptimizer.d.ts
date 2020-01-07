import { ComputeOptimizerClient } from "./ComputeOptimizerClient";
import { GetAutoScalingGroupRecommendationsCommandInput, GetAutoScalingGroupRecommendationsCommandOutput } from "./commands/GetAutoScalingGroupRecommendationsCommand";
import { GetEC2InstanceRecommendationsCommandInput, GetEC2InstanceRecommendationsCommandOutput } from "./commands/GetEC2InstanceRecommendationsCommand";
import { GetEC2RecommendationProjectedMetricsCommandInput, GetEC2RecommendationProjectedMetricsCommandOutput } from "./commands/GetEC2RecommendationProjectedMetricsCommand";
import { GetEnrollmentStatusCommandInput, GetEnrollmentStatusCommandOutput } from "./commands/GetEnrollmentStatusCommand";
import { GetRecommendationSummariesCommandInput, GetRecommendationSummariesCommandOutput } from "./commands/GetRecommendationSummariesCommand";
import { UpdateEnrollmentStatusCommandInput, UpdateEnrollmentStatusCommandOutput } from "./commands/UpdateEnrollmentStatusCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Compute Optimizer is a service that analyzes the configuration and utilization metrics of
 *             your AWS resources, such as EC2 instances and Auto Scaling groups. It reports whether your
 *             resources are optimal, and generates optimization recommendations to reduce the cost and
 *             improve the performance of your workloads. Compute Optimizer also provides recent utilization
 *             metric data, as well as projected utilization metric data for the recommendations, which
 *             you can use to evaluate which recommendation provides the best price-performance
 *             trade-off. The analysis of your usage patterns can help you decide when to move or
 *             resize your running resources, and still meet your performance and capacity
 *             requirements. For more information about Compute Optimizer, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/">AWS Compute Optimizer User
 *                 Guide</a>.</p>
 */
export declare class ComputeOptimizer extends ComputeOptimizerClient {
    /**
     * <p>Returns Auto Scaling group recommendations.</p>
     *         <p>AWS Compute Optimizer currently generates recommendations for Auto Scaling groups that are configured
     *             to run instances of the M, C, R, T, and X instance families. The service does not
     *             generate recommendations for Auto Scaling groups that have a scaling policy attached to them, or
     *             that do not have the same values for desired, minimum, and maximum capacity. In order
     *             for Compute Optimizer to analyze your Auto Scaling groups, they must be of a fixed size. For more
     *             information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is.html">AWS Compute Optimizer User Guide</a>.</p>
     */
    getAutoScalingGroupRecommendations(args: GetAutoScalingGroupRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<GetAutoScalingGroupRecommendationsCommandOutput>;
    getAutoScalingGroupRecommendations(args: GetAutoScalingGroupRecommendationsCommandInput, cb: (err: any, data?: GetAutoScalingGroupRecommendationsCommandOutput) => void): void;
    getAutoScalingGroupRecommendations(args: GetAutoScalingGroupRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAutoScalingGroupRecommendationsCommandOutput) => void): void;
    /**
     * <p>Returns Amazon EC2 instance recommendations.</p>
     *         <p>AWS Compute Optimizer currently generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) and Amazon EC2 Auto Scaling.
     *             It generates recommendations for M, C, R, T, and X instance families. For more
     *             information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is.html">AWS Compute Optimizer User Guide</a>.</p>
     */
    getEC2InstanceRecommendations(args: GetEC2InstanceRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<GetEC2InstanceRecommendationsCommandOutput>;
    getEC2InstanceRecommendations(args: GetEC2InstanceRecommendationsCommandInput, cb: (err: any, data?: GetEC2InstanceRecommendationsCommandOutput) => void): void;
    getEC2InstanceRecommendations(args: GetEC2InstanceRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEC2InstanceRecommendationsCommandOutput) => void): void;
    /**
     * <p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p>
     */
    getEC2RecommendationProjectedMetrics(args: GetEC2RecommendationProjectedMetricsCommandInput, options?: __HttpHandlerOptions): Promise<GetEC2RecommendationProjectedMetricsCommandOutput>;
    getEC2RecommendationProjectedMetrics(args: GetEC2RecommendationProjectedMetricsCommandInput, cb: (err: any, data?: GetEC2RecommendationProjectedMetricsCommandOutput) => void): void;
    getEC2RecommendationProjectedMetrics(args: GetEC2RecommendationProjectedMetricsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEC2RecommendationProjectedMetricsCommandOutput) => void): void;
    /**
     * <p>Returns the enrollment (opt in) status of an account to the AWS Compute Optimizer
     *             service.</p>
     *         <p>If the account is a master account of an organization, this operation also confirms
     *             the enrollment status of member accounts within the organization.</p>
     */
    getEnrollmentStatus(args: GetEnrollmentStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetEnrollmentStatusCommandOutput>;
    getEnrollmentStatus(args: GetEnrollmentStatusCommandInput, cb: (err: any, data?: GetEnrollmentStatusCommandOutput) => void): void;
    getEnrollmentStatus(args: GetEnrollmentStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEnrollmentStatusCommandOutput) => void): void;
    /**
     * <p>Returns the optimization findings for an account.</p>
     *         <p>For example, it returns the number of Amazon EC2 instances in an account that are
     *             under-provisioned, over-provisioned, or optimized. It also returns the number of Auto Scaling
     *             groups in an account that are not optimized, or optimized.</p>
     */
    getRecommendationSummaries(args: GetRecommendationSummariesCommandInput, options?: __HttpHandlerOptions): Promise<GetRecommendationSummariesCommandOutput>;
    getRecommendationSummaries(args: GetRecommendationSummariesCommandInput, cb: (err: any, data?: GetRecommendationSummariesCommandOutput) => void): void;
    getRecommendationSummaries(args: GetRecommendationSummariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRecommendationSummariesCommandOutput) => void): void;
    /**
     * <p>Updates the enrollment (opt in) status of an account to the AWS Compute Optimizer
     *             service.</p>
     *         <p>If the account is a master account of an organization, this operation can also enroll
     *             member accounts within the organization.</p>
     */
    updateEnrollmentStatus(args: UpdateEnrollmentStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEnrollmentStatusCommandOutput>;
    updateEnrollmentStatus(args: UpdateEnrollmentStatusCommandInput, cb: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void): void;
    updateEnrollmentStatus(args: UpdateEnrollmentStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void): void;
}
