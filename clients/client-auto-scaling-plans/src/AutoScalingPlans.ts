// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import { AutoScalingPlansClient } from "./AutoScalingPlansClient";
import {
  type CreateScalingPlanCommandInput,
  type CreateScalingPlanCommandOutput,
  CreateScalingPlanCommand,
} from "./commands/CreateScalingPlanCommand";
import {
  type DeleteScalingPlanCommandInput,
  type DeleteScalingPlanCommandOutput,
  DeleteScalingPlanCommand,
} from "./commands/DeleteScalingPlanCommand";
import {
  type DescribeScalingPlanResourcesCommandInput,
  type DescribeScalingPlanResourcesCommandOutput,
  DescribeScalingPlanResourcesCommand,
} from "./commands/DescribeScalingPlanResourcesCommand";
import {
  type DescribeScalingPlansCommandInput,
  type DescribeScalingPlansCommandOutput,
  DescribeScalingPlansCommand,
} from "./commands/DescribeScalingPlansCommand";
import {
  type GetScalingPlanResourceForecastDataCommandInput,
  type GetScalingPlanResourceForecastDataCommandOutput,
  GetScalingPlanResourceForecastDataCommand,
} from "./commands/GetScalingPlanResourceForecastDataCommand";
import {
  type UpdateScalingPlanCommandInput,
  type UpdateScalingPlanCommandOutput,
  UpdateScalingPlanCommand,
} from "./commands/UpdateScalingPlanCommand";

const commands = {
  CreateScalingPlanCommand,
  DeleteScalingPlanCommand,
  DescribeScalingPlanResourcesCommand,
  DescribeScalingPlansCommand,
  GetScalingPlanResourceForecastDataCommand,
  UpdateScalingPlanCommand,
};

/**
 * @public
 */
export interface AutoScalingPlansRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface AutoScalingPlans {
  /**
   * @see {@link CreateScalingPlanCommand}
   */
  createScalingPlan(
    args: CreateScalingPlanCommandInput,
    options?: AutoScalingPlansRequestOptions
  ): Promise<CreateScalingPlanCommandOutput>;
  createScalingPlan(
    args: CreateScalingPlanCommandInput,
    cb: (err: any, data?: CreateScalingPlanCommandOutput) => void
  ): void;
  createScalingPlan(
    args: CreateScalingPlanCommandInput,
    options: AutoScalingPlansRequestOptions,
    cb: (err: any, data?: CreateScalingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScalingPlanCommand}
   */
  deleteScalingPlan(
    args: DeleteScalingPlanCommandInput,
    options?: AutoScalingPlansRequestOptions
  ): Promise<DeleteScalingPlanCommandOutput>;
  deleteScalingPlan(
    args: DeleteScalingPlanCommandInput,
    cb: (err: any, data?: DeleteScalingPlanCommandOutput) => void
  ): void;
  deleteScalingPlan(
    args: DeleteScalingPlanCommandInput,
    options: AutoScalingPlansRequestOptions,
    cb: (err: any, data?: DeleteScalingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalingPlanResourcesCommand}
   */
  describeScalingPlanResources(
    args: DescribeScalingPlanResourcesCommandInput,
    options?: AutoScalingPlansRequestOptions
  ): Promise<DescribeScalingPlanResourcesCommandOutput>;
  describeScalingPlanResources(
    args: DescribeScalingPlanResourcesCommandInput,
    cb: (err: any, data?: DescribeScalingPlanResourcesCommandOutput) => void
  ): void;
  describeScalingPlanResources(
    args: DescribeScalingPlanResourcesCommandInput,
    options: AutoScalingPlansRequestOptions,
    cb: (err: any, data?: DescribeScalingPlanResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalingPlansCommand}
   */
  describeScalingPlans(): Promise<DescribeScalingPlansCommandOutput>;
  describeScalingPlans(
    args: DescribeScalingPlansCommandInput,
    options?: AutoScalingPlansRequestOptions
  ): Promise<DescribeScalingPlansCommandOutput>;
  describeScalingPlans(
    args: DescribeScalingPlansCommandInput,
    cb: (err: any, data?: DescribeScalingPlansCommandOutput) => void
  ): void;
  describeScalingPlans(
    args: DescribeScalingPlansCommandInput,
    options: AutoScalingPlansRequestOptions,
    cb: (err: any, data?: DescribeScalingPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScalingPlanResourceForecastDataCommand}
   */
  getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataCommandInput,
    options?: AutoScalingPlansRequestOptions
  ): Promise<GetScalingPlanResourceForecastDataCommandOutput>;
  getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataCommandInput,
    cb: (err: any, data?: GetScalingPlanResourceForecastDataCommandOutput) => void
  ): void;
  getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataCommandInput,
    options: AutoScalingPlansRequestOptions,
    cb: (err: any, data?: GetScalingPlanResourceForecastDataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScalingPlanCommand}
   */
  updateScalingPlan(
    args: UpdateScalingPlanCommandInput,
    options?: AutoScalingPlansRequestOptions
  ): Promise<UpdateScalingPlanCommandOutput>;
  updateScalingPlan(
    args: UpdateScalingPlanCommandInput,
    cb: (err: any, data?: UpdateScalingPlanCommandOutput) => void
  ): void;
  updateScalingPlan(
    args: UpdateScalingPlanCommandInput,
    options: AutoScalingPlansRequestOptions,
    cb: (err: any, data?: UpdateScalingPlanCommandOutput) => void
  ): void;
}

/**
 * <fullname>AWS Auto Scaling</fullname>
 *
 *
 *          <p>Use AWS Auto Scaling to create scaling plans for your applications to
 *          automatically scale your scalable AWS resources. </p>
 *          <p>
 *             <b>API Summary</b>
 *          </p>
 *          <p>You can use the AWS Auto Scaling service API to accomplish the following tasks:</p>
 *          <ul>
 *             <li>
 *                <p>Create and manage scaling plans</p>
 *             </li>
 *             <li>
 *                <p>Define target tracking scaling policies to dynamically scale your resources based
 *                on utilization</p>
 *             </li>
 *             <li>
 *                <p>Scale Amazon EC2 Auto Scaling groups using predictive scaling and dynamic scaling to scale your
 *                Amazon EC2 capacity faster</p>
 *             </li>
 *             <li>
 *                <p>Set minimum and maximum capacity limits</p>
 *             </li>
 *             <li>
 *                <p>Retrieve information on existing scaling plans</p>
 *             </li>
 *             <li>
 *                <p>Access current forecast data and historical forecast data for up to 56 days
 *                previous</p>
 *             </li>
 *          </ul>
 *
 *          <p>To learn more about AWS Auto Scaling, including information about granting IAM users required
 *          permissions for AWS Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html">AWS Auto Scaling User Guide</a>. </p>
 * @public
 */
export class AutoScalingPlans extends AutoScalingPlansClient implements AutoScalingPlans {}
createAggregatedClient(commands, AutoScalingPlans);
