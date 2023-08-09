// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AutoScalingPlansClient, AutoScalingPlansClientConfig } from "./AutoScalingPlansClient";
import {
  CreateScalingPlanCommand,
  CreateScalingPlanCommandInput,
  CreateScalingPlanCommandOutput,
} from "./commands/CreateScalingPlanCommand";
import {
  DeleteScalingPlanCommand,
  DeleteScalingPlanCommandInput,
  DeleteScalingPlanCommandOutput,
} from "./commands/DeleteScalingPlanCommand";
import {
  DescribeScalingPlanResourcesCommand,
  DescribeScalingPlanResourcesCommandInput,
  DescribeScalingPlanResourcesCommandOutput,
} from "./commands/DescribeScalingPlanResourcesCommand";
import {
  DescribeScalingPlansCommand,
  DescribeScalingPlansCommandInput,
  DescribeScalingPlansCommandOutput,
} from "./commands/DescribeScalingPlansCommand";
import {
  GetScalingPlanResourceForecastDataCommand,
  GetScalingPlanResourceForecastDataCommandInput,
  GetScalingPlanResourceForecastDataCommandOutput,
} from "./commands/GetScalingPlanResourceForecastDataCommand";
import {
  UpdateScalingPlanCommand,
  UpdateScalingPlanCommandInput,
  UpdateScalingPlanCommandOutput,
} from "./commands/UpdateScalingPlanCommand";

const commands = {
  CreateScalingPlanCommand,
  DeleteScalingPlanCommand,
  DescribeScalingPlanResourcesCommand,
  DescribeScalingPlansCommand,
  GetScalingPlanResourceForecastDataCommand,
  UpdateScalingPlanCommand,
};

export interface AutoScalingPlans {
  /**
   * @see {@link CreateScalingPlanCommand}
   */
  createScalingPlan(
    args: CreateScalingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScalingPlanCommandOutput>;
  createScalingPlan(
    args: CreateScalingPlanCommandInput,
    cb: (err: any, data?: CreateScalingPlanCommandOutput) => void
  ): void;
  createScalingPlan(
    args: CreateScalingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScalingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScalingPlanCommand}
   */
  deleteScalingPlan(
    args: DeleteScalingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScalingPlanCommandOutput>;
  deleteScalingPlan(
    args: DeleteScalingPlanCommandInput,
    cb: (err: any, data?: DeleteScalingPlanCommandOutput) => void
  ): void;
  deleteScalingPlan(
    args: DeleteScalingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScalingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalingPlanResourcesCommand}
   */
  describeScalingPlanResources(
    args: DescribeScalingPlanResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingPlanResourcesCommandOutput>;
  describeScalingPlanResources(
    args: DescribeScalingPlanResourcesCommandInput,
    cb: (err: any, data?: DescribeScalingPlanResourcesCommandOutput) => void
  ): void;
  describeScalingPlanResources(
    args: DescribeScalingPlanResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingPlanResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalingPlansCommand}
   */
  describeScalingPlans(
    args: DescribeScalingPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingPlansCommandOutput>;
  describeScalingPlans(
    args: DescribeScalingPlansCommandInput,
    cb: (err: any, data?: DescribeScalingPlansCommandOutput) => void
  ): void;
  describeScalingPlans(
    args: DescribeScalingPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScalingPlanResourceForecastDataCommand}
   */
  getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetScalingPlanResourceForecastDataCommandOutput>;
  getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataCommandInput,
    cb: (err: any, data?: GetScalingPlanResourceForecastDataCommandOutput) => void
  ): void;
  getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScalingPlanResourceForecastDataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScalingPlanCommand}
   */
  updateScalingPlan(
    args: UpdateScalingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScalingPlanCommandOutput>;
  updateScalingPlan(
    args: UpdateScalingPlanCommandInput,
    cb: (err: any, data?: UpdateScalingPlanCommandOutput) => void
  ): void;
  updateScalingPlan(
    args: UpdateScalingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScalingPlanCommandOutput) => void
  ): void;
}

/**
 * @public
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
 */
export class AutoScalingPlans extends AutoScalingPlansClient implements AutoScalingPlans {}
createAggregatedClient(commands, AutoScalingPlans);
