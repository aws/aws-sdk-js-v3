// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchEvaluateFeatureCommand,
  BatchEvaluateFeatureCommandInput,
  BatchEvaluateFeatureCommandOutput,
} from "./commands/BatchEvaluateFeatureCommand";
import {
  CreateExperimentCommand,
  CreateExperimentCommandInput,
  CreateExperimentCommandOutput,
} from "./commands/CreateExperimentCommand";
import {
  CreateFeatureCommand,
  CreateFeatureCommandInput,
  CreateFeatureCommandOutput,
} from "./commands/CreateFeatureCommand";
import {
  CreateLaunchCommand,
  CreateLaunchCommandInput,
  CreateLaunchCommandOutput,
} from "./commands/CreateLaunchCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  CreateSegmentCommand,
  CreateSegmentCommandInput,
  CreateSegmentCommandOutput,
} from "./commands/CreateSegmentCommand";
import {
  DeleteExperimentCommand,
  DeleteExperimentCommandInput,
  DeleteExperimentCommandOutput,
} from "./commands/DeleteExperimentCommand";
import {
  DeleteFeatureCommand,
  DeleteFeatureCommandInput,
  DeleteFeatureCommandOutput,
} from "./commands/DeleteFeatureCommand";
import {
  DeleteLaunchCommand,
  DeleteLaunchCommandInput,
  DeleteLaunchCommandOutput,
} from "./commands/DeleteLaunchCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DeleteSegmentCommand,
  DeleteSegmentCommandInput,
  DeleteSegmentCommandOutput,
} from "./commands/DeleteSegmentCommand";
import {
  EvaluateFeatureCommand,
  EvaluateFeatureCommandInput,
  EvaluateFeatureCommandOutput,
} from "./commands/EvaluateFeatureCommand";
import {
  GetExperimentCommand,
  GetExperimentCommandInput,
  GetExperimentCommandOutput,
} from "./commands/GetExperimentCommand";
import {
  GetExperimentResultsCommand,
  GetExperimentResultsCommandInput,
  GetExperimentResultsCommandOutput,
} from "./commands/GetExperimentResultsCommand";
import { GetFeatureCommand, GetFeatureCommandInput, GetFeatureCommandOutput } from "./commands/GetFeatureCommand";
import { GetLaunchCommand, GetLaunchCommandInput, GetLaunchCommandOutput } from "./commands/GetLaunchCommand";
import { GetProjectCommand, GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import { GetSegmentCommand, GetSegmentCommandInput, GetSegmentCommandOutput } from "./commands/GetSegmentCommand";
import {
  ListExperimentsCommand,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput,
} from "./commands/ListExperimentsCommand";
import {
  ListFeaturesCommand,
  ListFeaturesCommandInput,
  ListFeaturesCommandOutput,
} from "./commands/ListFeaturesCommand";
import {
  ListLaunchesCommand,
  ListLaunchesCommandInput,
  ListLaunchesCommandOutput,
} from "./commands/ListLaunchesCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListSegmentReferencesCommand,
  ListSegmentReferencesCommandInput,
  ListSegmentReferencesCommandOutput,
} from "./commands/ListSegmentReferencesCommand";
import {
  ListSegmentsCommand,
  ListSegmentsCommandInput,
  ListSegmentsCommandOutput,
} from "./commands/ListSegmentsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutProjectEventsCommand,
  PutProjectEventsCommandInput,
  PutProjectEventsCommandOutput,
} from "./commands/PutProjectEventsCommand";
import {
  StartExperimentCommand,
  StartExperimentCommandInput,
  StartExperimentCommandOutput,
} from "./commands/StartExperimentCommand";
import { StartLaunchCommand, StartLaunchCommandInput, StartLaunchCommandOutput } from "./commands/StartLaunchCommand";
import {
  StopExperimentCommand,
  StopExperimentCommandInput,
  StopExperimentCommandOutput,
} from "./commands/StopExperimentCommand";
import { StopLaunchCommand, StopLaunchCommandInput, StopLaunchCommandOutput } from "./commands/StopLaunchCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestSegmentPatternCommand,
  TestSegmentPatternCommandInput,
  TestSegmentPatternCommandOutput,
} from "./commands/TestSegmentPatternCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateExperimentCommand,
  UpdateExperimentCommandInput,
  UpdateExperimentCommandOutput,
} from "./commands/UpdateExperimentCommand";
import {
  UpdateFeatureCommand,
  UpdateFeatureCommandInput,
  UpdateFeatureCommandOutput,
} from "./commands/UpdateFeatureCommand";
import {
  UpdateLaunchCommand,
  UpdateLaunchCommandInput,
  UpdateLaunchCommandOutput,
} from "./commands/UpdateLaunchCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import {
  UpdateProjectDataDeliveryCommand,
  UpdateProjectDataDeliveryCommandInput,
  UpdateProjectDataDeliveryCommandOutput,
} from "./commands/UpdateProjectDataDeliveryCommand";
import { EvidentlyClient } from "./EvidentlyClient";

/**
 * <p>You can use Amazon CloudWatch Evidently to safely validate new features by serving
 *       them to a specified percentage
 *       of your users while you roll out the feature. You can monitor the performance of the new feature
 *       to help you decide when to ramp up traffic to your users. This helps you
 *       reduce risk and identify unintended consequences before you fully launch the feature.</p>
 *          <p>You can also conduct A/B experiments to make feature design decisions based on evidence
 *       and data. An experiment can test as many as five variations at once. Evidently collects
 *       experiment data and analyzes it using statistical methods. It also provides clear
 *       recommendations about which variations perform better. You can test both user-facing features
 *       and backend features.</p>
 */
export class Evidently extends EvidentlyClient {
  /**
   * <p>This operation assigns feature variation to user sessions. For each user session, you pass
   *       in an <code>entityID</code> that represents the user. Evidently then checks the evaluation
   *       rules and assigns the variation.</p>
   *          <p>The first rules that are evaluated are the override rules. If the user's
   *         <code>entityID</code> matches an override rule, the user is served the variation specified
   *       by that rule.</p>
   *          <p>Next, if there is a launch of the feature, the user might be assigned to a variation in
   *       the launch. The chance of this depends on the percentage of users that are allocated to that
   *       launch. If the user is enrolled in the launch, the variation they are served depends on the
   *       allocation of the various feature variations used for the launch.</p>
   *          <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature,  the user might
   *       be assigned to a variation in the experiment. The chance of this
   *       depends on the percentage of users that are allocated to that experiment. If the user is enrolled in the experiment,
   *       the variation they are served depends on the allocation of the various feature variations used for the experiment. </p>
   *          <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
   */
  public batchEvaluateFeature(
    args: BatchEvaluateFeatureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchEvaluateFeatureCommandOutput>;
  public batchEvaluateFeature(
    args: BatchEvaluateFeatureCommandInput,
    cb: (err: any, data?: BatchEvaluateFeatureCommandOutput) => void
  ): void;
  public batchEvaluateFeature(
    args: BatchEvaluateFeatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchEvaluateFeatureCommandOutput) => void
  ): void;
  public batchEvaluateFeature(
    args: BatchEvaluateFeatureCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchEvaluateFeatureCommandOutput) => void),
    cb?: (err: any, data?: BatchEvaluateFeatureCommandOutput) => void
  ): Promise<BatchEvaluateFeatureCommandOutput> | void {
    const command = new BatchEvaluateFeatureCommand(args);
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
   * <p>Creates an Evidently <i>experiment</i>. Before you create an experiment,
   *       you must create the feature to use for the experiment.</p>
   *          <p>An experiment helps you make feature design
   *        decisions based on evidence and data. An experiment can test as
   *        many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides
   *        clear recommendations about which variations perform better.</p>
   *          <p>You can optionally specify a <code>segment</code> to have the experiment consider only certain audience
   *      types in the experiment, such as using only user sessions from a certain location or who use a certain internet browser.</p>
   *          <p>Don't use this operation to update an existing experiment. Instead, use
   *        <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a>. </p>
   */
  public createExperiment(
    args: CreateExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExperimentCommandOutput>;
  public createExperiment(
    args: CreateExperimentCommandInput,
    cb: (err: any, data?: CreateExperimentCommandOutput) => void
  ): void;
  public createExperiment(
    args: CreateExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExperimentCommandOutput) => void
  ): void;
  public createExperiment(
    args: CreateExperimentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateExperimentCommandOutput) => void),
    cb?: (err: any, data?: CreateExperimentCommandOutput) => void
  ): Promise<CreateExperimentCommandOutput> | void {
    const command = new CreateExperimentCommand(args);
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
   * <p>Creates an Evidently <i>feature</i> that you want to launch or test. You can define up to
   *        five variations of a feature, and use these variations in your launches and experiments. A feature must be created in
   *        a project. For information about creating a project, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p>
   *          <p>Don't use this operation to update an existing feature. Instead, use
   *        <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateFeature.html">UpdateFeature</a>. </p>
   */
  public createFeature(
    args: CreateFeatureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFeatureCommandOutput>;
  public createFeature(
    args: CreateFeatureCommandInput,
    cb: (err: any, data?: CreateFeatureCommandOutput) => void
  ): void;
  public createFeature(
    args: CreateFeatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFeatureCommandOutput) => void
  ): void;
  public createFeature(
    args: CreateFeatureCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFeatureCommandOutput) => void),
    cb?: (err: any, data?: CreateFeatureCommandOutput) => void
  ): Promise<CreateFeatureCommandOutput> | void {
    const command = new CreateFeatureCommand(args);
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
   * <p>Creates a <i>launch</i> of a given feature. Before you create a launch, you
   *       must create the feature to use for the launch.</p>
   *          <p>You can use a launch to safely validate new features by serving them to a specified
   *       percentage of your users while you roll out the feature. You can monitor the performance of
   *       the new feature to help you decide when to ramp up traffic to more users. This helps you
   *       reduce risk and identify unintended consequences before you fully launch the feature.</p>
   *          <p>Don't use this operation to update an existing launch. Instead, use
   *        <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html">UpdateLaunch</a>. </p>
   */
  public createLaunch(
    args: CreateLaunchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLaunchCommandOutput>;
  public createLaunch(args: CreateLaunchCommandInput, cb: (err: any, data?: CreateLaunchCommandOutput) => void): void;
  public createLaunch(
    args: CreateLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchCommandOutput) => void
  ): void;
  public createLaunch(
    args: CreateLaunchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLaunchCommandOutput) => void),
    cb?: (err: any, data?: CreateLaunchCommandOutput) => void
  ): Promise<CreateLaunchCommandOutput> | void {
    const command = new CreateLaunchCommand(args);
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
   * <p>Creates a project, which is the logical object in Evidently that can contain features, launches, and
   *       experiments. Use projects to group similar features together.</p>
   *          <p>To update an existing project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProject.html">UpdateProject</a>.</p>
   */
  public createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  public createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProjectCommandOutput) => void),
    cb?: (err: any, data?: CreateProjectCommandOutput) => void
  ): Promise<CreateProjectCommandOutput> | void {
    const command = new CreateProjectCommand(args);
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
   * <p>Use this operation to define a <i>segment</i> of your audience. A segment
   *       is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users,
   *       users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects,
   *       such as age.</p>
   *          <p>Using a segment in an experiment limits that experiment to evaluate only the users who match the segment
   *       criteria. Using one or more segments in a launch allows you to define different traffic splits for the different
   *       audience segments.</p>
   *
   *          <p>For more information about segment pattern syntax, see
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html">
   *         Segment rule pattern syntax</a>.</p>
   *
   *          <p>The pattern that you define for a segment is matched against the value of <code>evaluationContext</code>, which
   *       is passed into Evidently in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation,
   *       when Evidently assigns a feature variation to a user.</p>
   */
  public createSegment(
    args: CreateSegmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSegmentCommandOutput>;
  public createSegment(
    args: CreateSegmentCommandInput,
    cb: (err: any, data?: CreateSegmentCommandOutput) => void
  ): void;
  public createSegment(
    args: CreateSegmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSegmentCommandOutput) => void
  ): void;
  public createSegment(
    args: CreateSegmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSegmentCommandOutput) => void),
    cb?: (err: any, data?: CreateSegmentCommandOutput) => void
  ): Promise<CreateSegmentCommandOutput> | void {
    const command = new CreateSegmentCommand(args);
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
   * <p>Deletes an Evidently experiment. The feature used for the experiment is not deleted.</p>
   *          <p>To stop an experiment without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopExperiment.html">StopExperiment</a>. </p>
   */
  public deleteExperiment(
    args: DeleteExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExperimentCommandOutput>;
  public deleteExperiment(
    args: DeleteExperimentCommandInput,
    cb: (err: any, data?: DeleteExperimentCommandOutput) => void
  ): void;
  public deleteExperiment(
    args: DeleteExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExperimentCommandOutput) => void
  ): void;
  public deleteExperiment(
    args: DeleteExperimentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteExperimentCommandOutput) => void),
    cb?: (err: any, data?: DeleteExperimentCommandOutput) => void
  ): Promise<DeleteExperimentCommandOutput> | void {
    const command = new DeleteExperimentCommand(args);
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
   * <p>Deletes an Evidently feature.</p>
   */
  public deleteFeature(
    args: DeleteFeatureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFeatureCommandOutput>;
  public deleteFeature(
    args: DeleteFeatureCommandInput,
    cb: (err: any, data?: DeleteFeatureCommandOutput) => void
  ): void;
  public deleteFeature(
    args: DeleteFeatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFeatureCommandOutput) => void
  ): void;
  public deleteFeature(
    args: DeleteFeatureCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFeatureCommandOutput) => void),
    cb?: (err: any, data?: DeleteFeatureCommandOutput) => void
  ): Promise<DeleteFeatureCommandOutput> | void {
    const command = new DeleteFeatureCommand(args);
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
   * <p>Deletes an Evidently launch. The feature used for the launch is not deleted.</p>
   *          <p>To stop a launch without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html">StopLaunch</a>. </p>
   */
  public deleteLaunch(
    args: DeleteLaunchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchCommandOutput>;
  public deleteLaunch(args: DeleteLaunchCommandInput, cb: (err: any, data?: DeleteLaunchCommandOutput) => void): void;
  public deleteLaunch(
    args: DeleteLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchCommandOutput) => void
  ): void;
  public deleteLaunch(
    args: DeleteLaunchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLaunchCommandOutput) => void),
    cb?: (err: any, data?: DeleteLaunchCommandOutput) => void
  ): Promise<DeleteLaunchCommandOutput> | void {
    const command = new DeleteLaunchCommand(args);
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
   * <p>Deletes an Evidently project. Before you can delete a project, you must delete all the
   *       features that the project contains. To delete a feature, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteFeature.html">DeleteFeature</a>.</p>
   */
  public deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  public deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteProjectCommandOutput) => void
  ): Promise<DeleteProjectCommandOutput> | void {
    const command = new DeleteProjectCommand(args);
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
   * <p>Deletes a segment. You can't delete a segment that is being used in a launch or experiment, even if that
   *     launch or experiment is not currently running.</p>
   */
  public deleteSegment(
    args: DeleteSegmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSegmentCommandOutput>;
  public deleteSegment(
    args: DeleteSegmentCommandInput,
    cb: (err: any, data?: DeleteSegmentCommandOutput) => void
  ): void;
  public deleteSegment(
    args: DeleteSegmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSegmentCommandOutput) => void
  ): void;
  public deleteSegment(
    args: DeleteSegmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSegmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteSegmentCommandOutput) => void
  ): Promise<DeleteSegmentCommandOutput> | void {
    const command = new DeleteSegmentCommand(args);
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
   * <p>This operation assigns a feature variation to one given user session. You pass in an
   *         <code>entityID</code> that represents the user. Evidently then checks the evaluation rules
   *       and assigns the variation.</p>
   *          <p>The first rules that are evaluated are the override rules. If the user's
   *         <code>entityID</code> matches an override rule, the user is served the variation specified
   *       by that rule.</p>
   *
   *          <p>If there is a current launch with this feature that uses segment overrides, and
   *       if the user session's <code>evaluationContext</code> matches a segment rule defined in a
   *       segment override, the configuration in the segment overrides is used. For more information
   *       about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>
   *       and
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your
   *         audience</a>.</p>
   *          <p>If there is a launch with no segment overrides, the user might be assigned to a variation in
   *       the launch. The chance of this depends on the percentage of users that are allocated to that
   *       launch. If the user is enrolled in the launch, the variation they are served depends on the
   *       allocation of the various feature variations used for the launch.</p>
   *          <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might
   *       be assigned to a variation in the experiment. The chance of this
   *       depends on the percentage of users that are allocated to that experiment.</p>
   *          <p>If the experiment uses a segment, then only
   *       user sessions with <code>evaluationContext</code> values that match the segment rule are used in the experiment.</p>
   *          <p>If the user is enrolled in the experiment,
   *       the variation they are served depends on the allocation of the various feature variations used for the experiment. </p>
   *          <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
   */
  public evaluateFeature(
    args: EvaluateFeatureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluateFeatureCommandOutput>;
  public evaluateFeature(
    args: EvaluateFeatureCommandInput,
    cb: (err: any, data?: EvaluateFeatureCommandOutput) => void
  ): void;
  public evaluateFeature(
    args: EvaluateFeatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateFeatureCommandOutput) => void
  ): void;
  public evaluateFeature(
    args: EvaluateFeatureCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EvaluateFeatureCommandOutput) => void),
    cb?: (err: any, data?: EvaluateFeatureCommandOutput) => void
  ): Promise<EvaluateFeatureCommandOutput> | void {
    const command = new EvaluateFeatureCommand(args);
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
   * <p>Returns the details about one experiment. You must already know the
   *       experiment name. To retrieve a list of experiments in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html">ListExperiments</a>.</p>
   */
  public getExperiment(
    args: GetExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExperimentCommandOutput>;
  public getExperiment(
    args: GetExperimentCommandInput,
    cb: (err: any, data?: GetExperimentCommandOutput) => void
  ): void;
  public getExperiment(
    args: GetExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExperimentCommandOutput) => void
  ): void;
  public getExperiment(
    args: GetExperimentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExperimentCommandOutput) => void),
    cb?: (err: any, data?: GetExperimentCommandOutput) => void
  ): Promise<GetExperimentCommandOutput> | void {
    const command = new GetExperimentCommand(args);
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
   * <p>Retrieves the results of a running or completed experiment. No results are available until
   *        there have been 100 events for each variation and at least 10 minutes have passed since the start of the experiment.
   *        To increase the statistical power, Evidently performs an additional offline p-value analysis at the end of the experiment.
   *        Offline p-value analysis can detect statistical significance in some cases where the anytime p-values used during
   *        the experiment do not find statistical significance.</p>
   *          <p>Experiment
   *        results are available up to 63 days after the start of the experiment. They are not available after that because
   *        of CloudWatch data retention policies.</p>
   */
  public getExperimentResults(
    args: GetExperimentResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExperimentResultsCommandOutput>;
  public getExperimentResults(
    args: GetExperimentResultsCommandInput,
    cb: (err: any, data?: GetExperimentResultsCommandOutput) => void
  ): void;
  public getExperimentResults(
    args: GetExperimentResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExperimentResultsCommandOutput) => void
  ): void;
  public getExperimentResults(
    args: GetExperimentResultsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExperimentResultsCommandOutput) => void),
    cb?: (err: any, data?: GetExperimentResultsCommandOutput) => void
  ): Promise<GetExperimentResultsCommandOutput> | void {
    const command = new GetExperimentResultsCommand(args);
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
   * <p>Returns the details about one feature. You must already know the feature name. To
   *       retrieve a list of features in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html">ListFeatures</a>.</p>
   */
  public getFeature(args: GetFeatureCommandInput, options?: __HttpHandlerOptions): Promise<GetFeatureCommandOutput>;
  public getFeature(args: GetFeatureCommandInput, cb: (err: any, data?: GetFeatureCommandOutput) => void): void;
  public getFeature(
    args: GetFeatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFeatureCommandOutput) => void
  ): void;
  public getFeature(
    args: GetFeatureCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFeatureCommandOutput) => void),
    cb?: (err: any, data?: GetFeatureCommandOutput) => void
  ): Promise<GetFeatureCommandOutput> | void {
    const command = new GetFeatureCommand(args);
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
   * <p>Returns the details about one launch. You must already know the
   *        launch name. To retrieve a list of launches in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListLaunches.html">ListLaunches</a>.</p>
   */
  public getLaunch(args: GetLaunchCommandInput, options?: __HttpHandlerOptions): Promise<GetLaunchCommandOutput>;
  public getLaunch(args: GetLaunchCommandInput, cb: (err: any, data?: GetLaunchCommandOutput) => void): void;
  public getLaunch(
    args: GetLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchCommandOutput) => void
  ): void;
  public getLaunch(
    args: GetLaunchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLaunchCommandOutput) => void),
    cb?: (err: any, data?: GetLaunchCommandOutput) => void
  ): Promise<GetLaunchCommandOutput> | void {
    const command = new GetLaunchCommand(args);
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
   * <p>Returns the details about one launch. You must already know the
   *        project name. To retrieve a list of projects in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListProjects.html">ListProjects</a>.</p>
   */
  public getProject(args: GetProjectCommandInput, options?: __HttpHandlerOptions): Promise<GetProjectCommandOutput>;
  public getProject(args: GetProjectCommandInput, cb: (err: any, data?: GetProjectCommandOutput) => void): void;
  public getProject(
    args: GetProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProjectCommandOutput) => void
  ): void;
  public getProject(
    args: GetProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProjectCommandOutput) => void),
    cb?: (err: any, data?: GetProjectCommandOutput) => void
  ): Promise<GetProjectCommandOutput> | void {
    const command = new GetProjectCommand(args);
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
   * <p>Returns information about the specified segment. Specify the segment you want to view
   *     by specifying its ARN.</p>
   */
  public getSegment(args: GetSegmentCommandInput, options?: __HttpHandlerOptions): Promise<GetSegmentCommandOutput>;
  public getSegment(args: GetSegmentCommandInput, cb: (err: any, data?: GetSegmentCommandOutput) => void): void;
  public getSegment(
    args: GetSegmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentCommandOutput) => void
  ): void;
  public getSegment(
    args: GetSegmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSegmentCommandOutput) => void),
    cb?: (err: any, data?: GetSegmentCommandOutput) => void
  ): Promise<GetSegmentCommandOutput> | void {
    const command = new GetSegmentCommand(args);
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
   * <p>Returns configuration details about all the experiments in the specified project.</p>
   */
  public listExperiments(
    args: ListExperimentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentsCommandOutput>;
  public listExperiments(
    args: ListExperimentsCommandInput,
    cb: (err: any, data?: ListExperimentsCommandOutput) => void
  ): void;
  public listExperiments(
    args: ListExperimentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentsCommandOutput) => void
  ): void;
  public listExperiments(
    args: ListExperimentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExperimentsCommandOutput) => void),
    cb?: (err: any, data?: ListExperimentsCommandOutput) => void
  ): Promise<ListExperimentsCommandOutput> | void {
    const command = new ListExperimentsCommand(args);
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
   * <p>Returns configuration details about all the features in the specified project.</p>
   */
  public listFeatures(
    args: ListFeaturesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFeaturesCommandOutput>;
  public listFeatures(args: ListFeaturesCommandInput, cb: (err: any, data?: ListFeaturesCommandOutput) => void): void;
  public listFeatures(
    args: ListFeaturesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFeaturesCommandOutput) => void
  ): void;
  public listFeatures(
    args: ListFeaturesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFeaturesCommandOutput) => void),
    cb?: (err: any, data?: ListFeaturesCommandOutput) => void
  ): Promise<ListFeaturesCommandOutput> | void {
    const command = new ListFeaturesCommand(args);
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
   * <p>Returns configuration details about all the launches in the specified project.</p>
   */
  public listLaunches(
    args: ListLaunchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLaunchesCommandOutput>;
  public listLaunches(args: ListLaunchesCommandInput, cb: (err: any, data?: ListLaunchesCommandOutput) => void): void;
  public listLaunches(
    args: ListLaunchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLaunchesCommandOutput) => void
  ): void;
  public listLaunches(
    args: ListLaunchesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLaunchesCommandOutput) => void),
    cb?: (err: any, data?: ListLaunchesCommandOutput) => void
  ): Promise<ListLaunchesCommandOutput> | void {
    const command = new ListLaunchesCommand(args);
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
   * <p>Returns configuration details about all the projects in the current Region in your
   *       account.</p>
   */
  public listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  public listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  public listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProjectsCommandOutput) => void),
    cb?: (err: any, data?: ListProjectsCommandOutput) => void
  ): Promise<ListProjectsCommandOutput> | void {
    const command = new ListProjectsCommand(args);
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
   * <p>Use this operation to find which experiments or launches are using a specified segment.</p>
   */
  public listSegmentReferences(
    args: ListSegmentReferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSegmentReferencesCommandOutput>;
  public listSegmentReferences(
    args: ListSegmentReferencesCommandInput,
    cb: (err: any, data?: ListSegmentReferencesCommandOutput) => void
  ): void;
  public listSegmentReferences(
    args: ListSegmentReferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSegmentReferencesCommandOutput) => void
  ): void;
  public listSegmentReferences(
    args: ListSegmentReferencesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSegmentReferencesCommandOutput) => void),
    cb?: (err: any, data?: ListSegmentReferencesCommandOutput) => void
  ): Promise<ListSegmentReferencesCommandOutput> | void {
    const command = new ListSegmentReferencesCommand(args);
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
   * <p>Returns a list of audience segments that you have created in your account in this Region.</p>
   */
  public listSegments(
    args: ListSegmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSegmentsCommandOutput>;
  public listSegments(args: ListSegmentsCommandInput, cb: (err: any, data?: ListSegmentsCommandOutput) => void): void;
  public listSegments(
    args: ListSegmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSegmentsCommandOutput) => void
  ): void;
  public listSegments(
    args: ListSegmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSegmentsCommandOutput) => void),
    cb?: (err: any, data?: ListSegmentsCommandOutput) => void
  ): Promise<ListSegmentsCommandOutput> | void {
    const command = new ListSegmentsCommand(args);
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
   * <p>Displays the tags associated with an Evidently resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Sends performance events to Evidently. These events can be used to evaluate a launch or
   *       an experiment.</p>
   */
  public putProjectEvents(
    args: PutProjectEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProjectEventsCommandOutput>;
  public putProjectEvents(
    args: PutProjectEventsCommandInput,
    cb: (err: any, data?: PutProjectEventsCommandOutput) => void
  ): void;
  public putProjectEvents(
    args: PutProjectEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProjectEventsCommandOutput) => void
  ): void;
  public putProjectEvents(
    args: PutProjectEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutProjectEventsCommandOutput) => void),
    cb?: (err: any, data?: PutProjectEventsCommandOutput) => void
  ): Promise<PutProjectEventsCommandOutput> | void {
    const command = new PutProjectEventsCommand(args);
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
   * <p>Starts an existing experiment. To create an experiment,
   *         use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html">CreateExperiment</a>.</p>
   */
  public startExperiment(
    args: StartExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExperimentCommandOutput>;
  public startExperiment(
    args: StartExperimentCommandInput,
    cb: (err: any, data?: StartExperimentCommandOutput) => void
  ): void;
  public startExperiment(
    args: StartExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExperimentCommandOutput) => void
  ): void;
  public startExperiment(
    args: StartExperimentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartExperimentCommandOutput) => void),
    cb?: (err: any, data?: StartExperimentCommandOutput) => void
  ): Promise<StartExperimentCommandOutput> | void {
    const command = new StartExperimentCommand(args);
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
   * <p>Starts an existing launch. To create a launch,
   *        use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html">CreateLaunch</a>.</p>
   */
  public startLaunch(args: StartLaunchCommandInput, options?: __HttpHandlerOptions): Promise<StartLaunchCommandOutput>;
  public startLaunch(args: StartLaunchCommandInput, cb: (err: any, data?: StartLaunchCommandOutput) => void): void;
  public startLaunch(
    args: StartLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartLaunchCommandOutput) => void
  ): void;
  public startLaunch(
    args: StartLaunchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartLaunchCommandOutput) => void),
    cb?: (err: any, data?: StartLaunchCommandOutput) => void
  ): Promise<StartLaunchCommandOutput> | void {
    const command = new StartLaunchCommand(args);
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
   * <p>Stops an experiment that is currently running. If you stop an experiment, you can't
   *       resume it or restart it.</p>
   */
  public stopExperiment(
    args: StopExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopExperimentCommandOutput>;
  public stopExperiment(
    args: StopExperimentCommandInput,
    cb: (err: any, data?: StopExperimentCommandOutput) => void
  ): void;
  public stopExperiment(
    args: StopExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopExperimentCommandOutput) => void
  ): void;
  public stopExperiment(
    args: StopExperimentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopExperimentCommandOutput) => void),
    cb?: (err: any, data?: StopExperimentCommandOutput) => void
  ): Promise<StopExperimentCommandOutput> | void {
    const command = new StopExperimentCommand(args);
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
   * <p>Stops a launch that is currently running. After you stop a launch, you will not be able to resume it or restart it.
   *        Also, it
   *        will not be evaluated as a rule for traffic allocation, and the traffic that was allocated to the launch
   *        will instead be available to the feature's experiment, if there is one. Otherwise, all traffic
   *        will be served the default variation after the launch is stopped.</p>
   */
  public stopLaunch(args: StopLaunchCommandInput, options?: __HttpHandlerOptions): Promise<StopLaunchCommandOutput>;
  public stopLaunch(args: StopLaunchCommandInput, cb: (err: any, data?: StopLaunchCommandOutput) => void): void;
  public stopLaunch(
    args: StopLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopLaunchCommandOutput) => void
  ): void;
  public stopLaunch(
    args: StopLaunchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopLaunchCommandOutput) => void),
    cb?: (err: any, data?: StopLaunchCommandOutput) => void
  ): Promise<StopLaunchCommandOutput> | void {
    const command = new StopLaunchCommand(args);
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
   * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Evidently resource. Projects,
   *        features, launches, and experiments can be tagged.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can use the <code>TagResource</code> action with a resource that already has tags.
   *        If you specify a new tag key for the resource,
   *        this tag is appended to the list of tags associated
   *        with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces
   *        the previous value for that tag.</p>
   *          <p>You can associate as many as 50 tags with a resource.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Use this operation to test a rules pattern that you plan to use to create an audience segment.
   *       For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>.</p>
   */
  public testSegmentPattern(
    args: TestSegmentPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestSegmentPatternCommandOutput>;
  public testSegmentPattern(
    args: TestSegmentPatternCommandInput,
    cb: (err: any, data?: TestSegmentPatternCommandOutput) => void
  ): void;
  public testSegmentPattern(
    args: TestSegmentPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestSegmentPatternCommandOutput) => void
  ): void;
  public testSegmentPattern(
    args: TestSegmentPatternCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestSegmentPatternCommandOutput) => void),
    cb?: (err: any, data?: TestSegmentPatternCommandOutput) => void
  ): Promise<TestSegmentPatternCommandOutput> | void {
    const command = new TestSegmentPatternCommand(args);
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
   * <p>Removes one or more tags from the specified resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Updates an Evidently experiment. </p>
   *          <p>Don't use this operation to update an experiment's tag. Instead, use
   *       <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
   */
  public updateExperiment(
    args: UpdateExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExperimentCommandOutput>;
  public updateExperiment(
    args: UpdateExperimentCommandInput,
    cb: (err: any, data?: UpdateExperimentCommandOutput) => void
  ): void;
  public updateExperiment(
    args: UpdateExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExperimentCommandOutput) => void
  ): void;
  public updateExperiment(
    args: UpdateExperimentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateExperimentCommandOutput) => void),
    cb?: (err: any, data?: UpdateExperimentCommandOutput) => void
  ): Promise<UpdateExperimentCommandOutput> | void {
    const command = new UpdateExperimentCommand(args);
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
   * <p>Updates an existing feature.</p>
   *          <p>You can't use this operation to update the tags of an existing feature. Instead, use
   *       <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
   */
  public updateFeature(
    args: UpdateFeatureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFeatureCommandOutput>;
  public updateFeature(
    args: UpdateFeatureCommandInput,
    cb: (err: any, data?: UpdateFeatureCommandOutput) => void
  ): void;
  public updateFeature(
    args: UpdateFeatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFeatureCommandOutput) => void
  ): void;
  public updateFeature(
    args: UpdateFeatureCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFeatureCommandOutput) => void),
    cb?: (err: any, data?: UpdateFeatureCommandOutput) => void
  ): Promise<UpdateFeatureCommandOutput> | void {
    const command = new UpdateFeatureCommand(args);
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
   * <p>Updates a launch of a given feature. </p>
   *          <p>Don't use this operation to update the tags of an existing launch. Instead, use
   *       <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
   */
  public updateLaunch(
    args: UpdateLaunchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLaunchCommandOutput>;
  public updateLaunch(args: UpdateLaunchCommandInput, cb: (err: any, data?: UpdateLaunchCommandOutput) => void): void;
  public updateLaunch(
    args: UpdateLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLaunchCommandOutput) => void
  ): void;
  public updateLaunch(
    args: UpdateLaunchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLaunchCommandOutput) => void),
    cb?: (err: any, data?: UpdateLaunchCommandOutput) => void
  ): Promise<UpdateLaunchCommandOutput> | void {
    const command = new UpdateLaunchCommand(args);
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
   * <p>Updates the description of an existing project.</p>
   *          <p>To create a new project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p>
   *          <p>Don't use this operation to update the data storage options of a project. Instead, use
   *        <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProjectDataDelivery.html">UpdateProjectDataDelivery</a>. </p>
   *          <p>Don't use this operation to update the tags of a project. Instead, use
   *        <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
   */
  public updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  public updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProjectCommandOutput) => void),
    cb?: (err: any, data?: UpdateProjectCommandOutput) => void
  ): Promise<UpdateProjectCommandOutput> | void {
    const command = new UpdateProjectCommand(args);
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
   * <p>Updates the data storage options for this project. If you store evaluation events, you an
   *       keep them and analyze them on your own. If you choose not to store evaluation events,
   *       Evidently deletes them after using them to produce metrics and other experiment results that
   *       you can view.</p>
   *          <p>You can't specify both <code>cloudWatchLogs</code> and <code>s3Destination</code> in the same operation.</p>
   */
  public updateProjectDataDelivery(
    args: UpdateProjectDataDeliveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectDataDeliveryCommandOutput>;
  public updateProjectDataDelivery(
    args: UpdateProjectDataDeliveryCommandInput,
    cb: (err: any, data?: UpdateProjectDataDeliveryCommandOutput) => void
  ): void;
  public updateProjectDataDelivery(
    args: UpdateProjectDataDeliveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectDataDeliveryCommandOutput) => void
  ): void;
  public updateProjectDataDelivery(
    args: UpdateProjectDataDeliveryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProjectDataDeliveryCommandOutput) => void),
    cb?: (err: any, data?: UpdateProjectDataDeliveryCommandOutput) => void
  ): Promise<UpdateProjectDataDeliveryCommandOutput> | void {
    const command = new UpdateProjectDataDeliveryCommand(args);
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
