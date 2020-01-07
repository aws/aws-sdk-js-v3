import { AutoScalingPlansClient } from "./AutoScalingPlansClient";
import { CreateScalingPlanCommandInput, CreateScalingPlanCommandOutput } from "./commands/CreateScalingPlanCommand";
import { DeleteScalingPlanCommandInput, DeleteScalingPlanCommandOutput } from "./commands/DeleteScalingPlanCommand";
import { DescribeScalingPlanResourcesCommandInput, DescribeScalingPlanResourcesCommandOutput } from "./commands/DescribeScalingPlanResourcesCommand";
import { DescribeScalingPlansCommandInput, DescribeScalingPlansCommandOutput } from "./commands/DescribeScalingPlansCommand";
import { GetScalingPlanResourceForecastDataCommandInput, GetScalingPlanResourceForecastDataCommandOutput } from "./commands/GetScalingPlanResourceForecastDataCommand";
import { UpdateScalingPlanCommandInput, UpdateScalingPlanCommandOutput } from "./commands/UpdateScalingPlanCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Auto Scaling</fullname>
 *          <p>Use AWS Auto Scaling to quickly discover all the scalable AWS resources for your application and
 *          configure dynamic scaling and predictive scaling for your resources using scaling plans.
 *          Use this service in conjunction with the Amazon EC2 Auto Scaling, Application Auto Scaling, Amazon CloudWatch, and AWS
 *          CloudFormation services. </p>
 *          <p>Currently, predictive scaling is only available for Amazon EC2 Auto Scaling groups.</p>
 *          <p>For more information about AWS Auto Scaling, including information about granting IAM users
 *          required permissions for AWS Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html">AWS Auto Scaling User Guide</a>.</p>
 */
export declare class AutoScalingPlans extends AutoScalingPlansClient {
    /**
     * <p>Creates a scaling plan.</p>
     */
    createScalingPlan(args: CreateScalingPlanCommandInput, options?: __HttpHandlerOptions): Promise<CreateScalingPlanCommandOutput>;
    createScalingPlan(args: CreateScalingPlanCommandInput, cb: (err: any, data?: CreateScalingPlanCommandOutput) => void): void;
    createScalingPlan(args: CreateScalingPlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateScalingPlanCommandOutput) => void): void;
    /**
     * <p>Deletes the specified scaling plan.</p>
     *          <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for
     *          all of the scalable resources that are covered by the plan.</p>
     *          <p>If the plan has launched resources or has scaling activities in progress, you must
     *          delete those resources separately.</p>
     */
    deleteScalingPlan(args: DeleteScalingPlanCommandInput, options?: __HttpHandlerOptions): Promise<DeleteScalingPlanCommandOutput>;
    deleteScalingPlan(args: DeleteScalingPlanCommandInput, cb: (err: any, data?: DeleteScalingPlanCommandOutput) => void): void;
    deleteScalingPlan(args: DeleteScalingPlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteScalingPlanCommandOutput) => void): void;
    /**
     * <p>Describes the scalable resources in the specified scaling plan.</p>
     */
    describeScalingPlanResources(args: DescribeScalingPlanResourcesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScalingPlanResourcesCommandOutput>;
    describeScalingPlanResources(args: DescribeScalingPlanResourcesCommandInput, cb: (err: any, data?: DescribeScalingPlanResourcesCommandOutput) => void): void;
    describeScalingPlanResources(args: DescribeScalingPlanResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScalingPlanResourcesCommandOutput) => void): void;
    /**
     * <p>Describes one or more of your scaling plans.</p>
     */
    describeScalingPlans(args: DescribeScalingPlansCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScalingPlansCommandOutput>;
    describeScalingPlans(args: DescribeScalingPlansCommandInput, cb: (err: any, data?: DescribeScalingPlansCommandOutput) => void): void;
    describeScalingPlans(args: DescribeScalingPlansCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScalingPlansCommandOutput) => void): void;
    /**
     * <p>Retrieves the forecast data for a scalable resource.</p>
     *          <p>Capacity forecasts are represented as predicted values, or data points, that are
     *          calculated using historical data points from a specified CloudWatch load metric. Data points are
     *          available for up to 56 days.
     *
     *       </p>
     */
    getScalingPlanResourceForecastData(args: GetScalingPlanResourceForecastDataCommandInput, options?: __HttpHandlerOptions): Promise<GetScalingPlanResourceForecastDataCommandOutput>;
    getScalingPlanResourceForecastData(args: GetScalingPlanResourceForecastDataCommandInput, cb: (err: any, data?: GetScalingPlanResourceForecastDataCommandOutput) => void): void;
    getScalingPlanResourceForecastData(args: GetScalingPlanResourceForecastDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetScalingPlanResourceForecastDataCommandOutput) => void): void;
    /**
     * <p>Updates the specified scaling plan.</p>
     *          <p>You cannot update a scaling plan if it is in the process of being created, updated, or
     *          deleted.</p>
     */
    updateScalingPlan(args: UpdateScalingPlanCommandInput, options?: __HttpHandlerOptions): Promise<UpdateScalingPlanCommandOutput>;
    updateScalingPlan(args: UpdateScalingPlanCommandInput, cb: (err: any, data?: UpdateScalingPlanCommandOutput) => void): void;
    updateScalingPlan(args: UpdateScalingPlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateScalingPlanCommandOutput) => void): void;
}
