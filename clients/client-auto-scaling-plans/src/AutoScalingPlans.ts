// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AutoScalingPlansClient } from "./AutoScalingPlansClient";
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
 */
export class AutoScalingPlans extends AutoScalingPlansClient {
  /**
   * <p>Creates a scaling plan. </p>
   */
  public createScalingPlan(
    args: CreateScalingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScalingPlanCommandOutput>;
  public createScalingPlan(
    args: CreateScalingPlanCommandInput,
    cb: (err: any, data?: CreateScalingPlanCommandOutput) => void
  ): void;
  public createScalingPlan(
    args: CreateScalingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScalingPlanCommandOutput) => void
  ): void;
  public createScalingPlan(
    args: CreateScalingPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateScalingPlanCommandOutput) => void),
    cb?: (err: any, data?: CreateScalingPlanCommandOutput) => void
  ): Promise<CreateScalingPlanCommandOutput> | void {
    const command = new CreateScalingPlanCommand(args);
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
   * <p>Deletes the specified scaling plan.</p>
   *          <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for
   *          all of the scalable resources that are covered by the plan.</p>
   *          <p>If the plan has launched resources or has scaling activities in progress, you must
   *          delete those resources separately.</p>
   */
  public deleteScalingPlan(
    args: DeleteScalingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScalingPlanCommandOutput>;
  public deleteScalingPlan(
    args: DeleteScalingPlanCommandInput,
    cb: (err: any, data?: DeleteScalingPlanCommandOutput) => void
  ): void;
  public deleteScalingPlan(
    args: DeleteScalingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScalingPlanCommandOutput) => void
  ): void;
  public deleteScalingPlan(
    args: DeleteScalingPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteScalingPlanCommandOutput) => void),
    cb?: (err: any, data?: DeleteScalingPlanCommandOutput) => void
  ): Promise<DeleteScalingPlanCommandOutput> | void {
    const command = new DeleteScalingPlanCommand(args);
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
   * <p>Describes the scalable resources in the specified scaling plan.</p>
   */
  public describeScalingPlanResources(
    args: DescribeScalingPlanResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingPlanResourcesCommandOutput>;
  public describeScalingPlanResources(
    args: DescribeScalingPlanResourcesCommandInput,
    cb: (err: any, data?: DescribeScalingPlanResourcesCommandOutput) => void
  ): void;
  public describeScalingPlanResources(
    args: DescribeScalingPlanResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingPlanResourcesCommandOutput) => void
  ): void;
  public describeScalingPlanResources(
    args: DescribeScalingPlanResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScalingPlanResourcesCommandOutput) => void),
    cb?: (err: any, data?: DescribeScalingPlanResourcesCommandOutput) => void
  ): Promise<DescribeScalingPlanResourcesCommandOutput> | void {
    const command = new DescribeScalingPlanResourcesCommand(args);
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
   * <p>Describes one or more of your scaling plans.</p>
   */
  public describeScalingPlans(
    args: DescribeScalingPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingPlansCommandOutput>;
  public describeScalingPlans(
    args: DescribeScalingPlansCommandInput,
    cb: (err: any, data?: DescribeScalingPlansCommandOutput) => void
  ): void;
  public describeScalingPlans(
    args: DescribeScalingPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingPlansCommandOutput) => void
  ): void;
  public describeScalingPlans(
    args: DescribeScalingPlansCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScalingPlansCommandOutput) => void),
    cb?: (err: any, data?: DescribeScalingPlansCommandOutput) => void
  ): Promise<DescribeScalingPlansCommandOutput> | void {
    const command = new DescribeScalingPlansCommand(args);
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
   * <p>Retrieves the forecast data for a scalable resource.</p>
   *          <p>Capacity forecasts are represented as predicted values, or data points, that are
   *          calculated using historical data points from a specified CloudWatch load metric. Data points are
   *          available for up to 56 days. </p>
   */
  public getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetScalingPlanResourceForecastDataCommandOutput>;
  public getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataCommandInput,
    cb: (err: any, data?: GetScalingPlanResourceForecastDataCommandOutput) => void
  ): void;
  public getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScalingPlanResourceForecastDataCommandOutput) => void
  ): void;
  public getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetScalingPlanResourceForecastDataCommandOutput) => void),
    cb?: (err: any, data?: GetScalingPlanResourceForecastDataCommandOutput) => void
  ): Promise<GetScalingPlanResourceForecastDataCommandOutput> | void {
    const command = new GetScalingPlanResourceForecastDataCommand(args);
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
   * <p>Updates the specified scaling plan.</p>
   *          <p>You cannot update a scaling plan if it is in the process of being created, updated, or
   *          deleted.</p>
   */
  public updateScalingPlan(
    args: UpdateScalingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScalingPlanCommandOutput>;
  public updateScalingPlan(
    args: UpdateScalingPlanCommandInput,
    cb: (err: any, data?: UpdateScalingPlanCommandOutput) => void
  ): void;
  public updateScalingPlan(
    args: UpdateScalingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScalingPlanCommandOutput) => void
  ): void;
  public updateScalingPlan(
    args: UpdateScalingPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateScalingPlanCommandOutput) => void),
    cb?: (err: any, data?: UpdateScalingPlanCommandOutput) => void
  ): Promise<UpdateScalingPlanCommandOutput> | void {
    const command = new UpdateScalingPlanCommand(args);
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
