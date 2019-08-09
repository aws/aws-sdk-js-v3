import { AutoScalingPlansClient } from "./AutoScalingPlansClient";
import { ConcurrentUpdateException } from "./types/ConcurrentUpdateException";
import { CreateScalingPlanInput } from "./types/CreateScalingPlanInput";
import { CreateScalingPlanOutput } from "./types/CreateScalingPlanOutput";
import { DeleteScalingPlanInput } from "./types/DeleteScalingPlanInput";
import { DeleteScalingPlanOutput } from "./types/DeleteScalingPlanOutput";
import { DescribeScalingPlanResourcesInput } from "./types/DescribeScalingPlanResourcesInput";
import { DescribeScalingPlanResourcesOutput } from "./types/DescribeScalingPlanResourcesOutput";
import { DescribeScalingPlansInput } from "./types/DescribeScalingPlansInput";
import { DescribeScalingPlansOutput } from "./types/DescribeScalingPlansOutput";
import { GetScalingPlanResourceForecastDataInput } from "./types/GetScalingPlanResourceForecastDataInput";
import { GetScalingPlanResourceForecastDataOutput } from "./types/GetScalingPlanResourceForecastDataOutput";
import { InternalServiceException } from "./types/InternalServiceException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ObjectNotFoundException } from "./types/ObjectNotFoundException";
import { UpdateScalingPlanInput } from "./types/UpdateScalingPlanInput";
import { UpdateScalingPlanOutput } from "./types/UpdateScalingPlanOutput";
import { ValidationException } from "./types/ValidationException";
import { CreateScalingPlanCommand } from "./commands/CreateScalingPlanCommand";
import { DeleteScalingPlanCommand } from "./commands/DeleteScalingPlanCommand";
import { DescribeScalingPlanResourcesCommand } from "./commands/DescribeScalingPlanResourcesCommand";
import { DescribeScalingPlansCommand } from "./commands/DescribeScalingPlansCommand";
import { GetScalingPlanResourceForecastDataCommand } from "./commands/GetScalingPlanResourceForecastDataCommand";
import { UpdateScalingPlanCommand } from "./commands/UpdateScalingPlanCommand";

export class AutoScalingPlans extends AutoScalingPlansClient {
  /**
   * <p>Creates a scaling plan.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
   *   - {LimitExceededException} <p>Your account exceeded a limit. This exception is thrown when a per-account resource limit is exceeded.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to a scaling plan that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createScalingPlan(
    args: CreateScalingPlanInput
  ): Promise<CreateScalingPlanOutput>;
  public createScalingPlan(
    args: CreateScalingPlanInput,
    cb: (err: any, data?: CreateScalingPlanOutput) => void
  ): void;
  public createScalingPlan(
    args: CreateScalingPlanInput,
    cb?: (err: any, data?: CreateScalingPlanOutput) => void
  ): Promise<CreateScalingPlanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateScalingPlanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
   *   - {ObjectNotFoundException} <p>The specified object could not be found.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to a scaling plan that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteScalingPlan(
    args: DeleteScalingPlanInput
  ): Promise<DeleteScalingPlanOutput>;
  public deleteScalingPlan(
    args: DeleteScalingPlanInput,
    cb: (err: any, data?: DeleteScalingPlanOutput) => void
  ): void;
  public deleteScalingPlan(
    args: DeleteScalingPlanInput,
    cb?: (err: any, data?: DeleteScalingPlanOutput) => void
  ): Promise<DeleteScalingPlanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteScalingPlanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the scalable resources in the specified scaling plan.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
   *   - {InvalidNextTokenException} <p>The token provided is not valid.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to a scaling plan that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeScalingPlanResources(
    args: DescribeScalingPlanResourcesInput
  ): Promise<DescribeScalingPlanResourcesOutput>;
  public describeScalingPlanResources(
    args: DescribeScalingPlanResourcesInput,
    cb: (err: any, data?: DescribeScalingPlanResourcesOutput) => void
  ): void;
  public describeScalingPlanResources(
    args: DescribeScalingPlanResourcesInput,
    cb?: (err: any, data?: DescribeScalingPlanResourcesOutput) => void
  ): Promise<DescribeScalingPlanResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeScalingPlanResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your scaling plans.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
   *   - {InvalidNextTokenException} <p>The token provided is not valid.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to a scaling plan that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeScalingPlans(
    args: DescribeScalingPlansInput
  ): Promise<DescribeScalingPlansOutput>;
  public describeScalingPlans(
    args: DescribeScalingPlansInput,
    cb: (err: any, data?: DescribeScalingPlansOutput) => void
  ): void;
  public describeScalingPlans(
    args: DescribeScalingPlansInput,
    cb?: (err: any, data?: DescribeScalingPlansOutput) => void
  ): Promise<DescribeScalingPlansOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeScalingPlansCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataInput
  ): Promise<GetScalingPlanResourceForecastDataOutput>;
  public getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataInput,
    cb: (err: any, data?: GetScalingPlanResourceForecastDataOutput) => void
  ): void;
  public getScalingPlanResourceForecastData(
    args: GetScalingPlanResourceForecastDataInput,
    cb?: (err: any, data?: GetScalingPlanResourceForecastDataOutput) => void
  ): Promise<GetScalingPlanResourceForecastDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetScalingPlanResourceForecastDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to a scaling plan that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
   *   - {ObjectNotFoundException} <p>The specified object could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateScalingPlan(
    args: UpdateScalingPlanInput
  ): Promise<UpdateScalingPlanOutput>;
  public updateScalingPlan(
    args: UpdateScalingPlanInput,
    cb: (err: any, data?: UpdateScalingPlanOutput) => void
  ): void;
  public updateScalingPlan(
    args: UpdateScalingPlanInput,
    cb?: (err: any, data?: UpdateScalingPlanOutput) => void
  ): Promise<UpdateScalingPlanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateScalingPlanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
