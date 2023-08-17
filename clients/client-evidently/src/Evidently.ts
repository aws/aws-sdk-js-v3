// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { EvidentlyClient, EvidentlyClientConfig } from "./EvidentlyClient";

const commands = {
  BatchEvaluateFeatureCommand,
  CreateExperimentCommand,
  CreateFeatureCommand,
  CreateLaunchCommand,
  CreateProjectCommand,
  CreateSegmentCommand,
  DeleteExperimentCommand,
  DeleteFeatureCommand,
  DeleteLaunchCommand,
  DeleteProjectCommand,
  DeleteSegmentCommand,
  EvaluateFeatureCommand,
  GetExperimentCommand,
  GetExperimentResultsCommand,
  GetFeatureCommand,
  GetLaunchCommand,
  GetProjectCommand,
  GetSegmentCommand,
  ListExperimentsCommand,
  ListFeaturesCommand,
  ListLaunchesCommand,
  ListProjectsCommand,
  ListSegmentReferencesCommand,
  ListSegmentsCommand,
  ListTagsForResourceCommand,
  PutProjectEventsCommand,
  StartExperimentCommand,
  StartLaunchCommand,
  StopExperimentCommand,
  StopLaunchCommand,
  TagResourceCommand,
  TestSegmentPatternCommand,
  UntagResourceCommand,
  UpdateExperimentCommand,
  UpdateFeatureCommand,
  UpdateLaunchCommand,
  UpdateProjectCommand,
  UpdateProjectDataDeliveryCommand,
};

export interface Evidently {
  /**
   * @see {@link BatchEvaluateFeatureCommand}
   */
  batchEvaluateFeature(
    args: BatchEvaluateFeatureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchEvaluateFeatureCommandOutput>;
  batchEvaluateFeature(
    args: BatchEvaluateFeatureCommandInput,
    cb: (err: any, data?: BatchEvaluateFeatureCommandOutput) => void
  ): void;
  batchEvaluateFeature(
    args: BatchEvaluateFeatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchEvaluateFeatureCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExperimentCommand}
   */
  createExperiment(
    args: CreateExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExperimentCommandOutput>;
  createExperiment(
    args: CreateExperimentCommandInput,
    cb: (err: any, data?: CreateExperimentCommandOutput) => void
  ): void;
  createExperiment(
    args: CreateExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFeatureCommand}
   */
  createFeature(args: CreateFeatureCommandInput, options?: __HttpHandlerOptions): Promise<CreateFeatureCommandOutput>;
  createFeature(args: CreateFeatureCommandInput, cb: (err: any, data?: CreateFeatureCommandOutput) => void): void;
  createFeature(
    args: CreateFeatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFeatureCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLaunchCommand}
   */
  createLaunch(args: CreateLaunchCommandInput, options?: __HttpHandlerOptions): Promise<CreateLaunchCommandOutput>;
  createLaunch(args: CreateLaunchCommandInput, cb: (err: any, data?: CreateLaunchCommandOutput) => void): void;
  createLaunch(
    args: CreateLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
  createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
  createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSegmentCommand}
   */
  createSegment(args: CreateSegmentCommandInput, options?: __HttpHandlerOptions): Promise<CreateSegmentCommandOutput>;
  createSegment(args: CreateSegmentCommandInput, cb: (err: any, data?: CreateSegmentCommandOutput) => void): void;
  createSegment(
    args: CreateSegmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSegmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExperimentCommand}
   */
  deleteExperiment(
    args: DeleteExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExperimentCommandOutput>;
  deleteExperiment(
    args: DeleteExperimentCommandInput,
    cb: (err: any, data?: DeleteExperimentCommandOutput) => void
  ): void;
  deleteExperiment(
    args: DeleteExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFeatureCommand}
   */
  deleteFeature(args: DeleteFeatureCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFeatureCommandOutput>;
  deleteFeature(args: DeleteFeatureCommandInput, cb: (err: any, data?: DeleteFeatureCommandOutput) => void): void;
  deleteFeature(
    args: DeleteFeatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFeatureCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLaunchCommand}
   */
  deleteLaunch(args: DeleteLaunchCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLaunchCommandOutput>;
  deleteLaunch(args: DeleteLaunchCommandInput, cb: (err: any, data?: DeleteLaunchCommandOutput) => void): void;
  deleteLaunch(
    args: DeleteLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
  deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSegmentCommand}
   */
  deleteSegment(args: DeleteSegmentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSegmentCommandOutput>;
  deleteSegment(args: DeleteSegmentCommandInput, cb: (err: any, data?: DeleteSegmentCommandOutput) => void): void;
  deleteSegment(
    args: DeleteSegmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSegmentCommandOutput) => void
  ): void;

  /**
   * @see {@link EvaluateFeatureCommand}
   */
  evaluateFeature(
    args: EvaluateFeatureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluateFeatureCommandOutput>;
  evaluateFeature(args: EvaluateFeatureCommandInput, cb: (err: any, data?: EvaluateFeatureCommandOutput) => void): void;
  evaluateFeature(
    args: EvaluateFeatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateFeatureCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExperimentCommand}
   */
  getExperiment(args: GetExperimentCommandInput, options?: __HttpHandlerOptions): Promise<GetExperimentCommandOutput>;
  getExperiment(args: GetExperimentCommandInput, cb: (err: any, data?: GetExperimentCommandOutput) => void): void;
  getExperiment(
    args: GetExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExperimentResultsCommand}
   */
  getExperimentResults(
    args: GetExperimentResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExperimentResultsCommandOutput>;
  getExperimentResults(
    args: GetExperimentResultsCommandInput,
    cb: (err: any, data?: GetExperimentResultsCommandOutput) => void
  ): void;
  getExperimentResults(
    args: GetExperimentResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExperimentResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFeatureCommand}
   */
  getFeature(args: GetFeatureCommandInput, options?: __HttpHandlerOptions): Promise<GetFeatureCommandOutput>;
  getFeature(args: GetFeatureCommandInput, cb: (err: any, data?: GetFeatureCommandOutput) => void): void;
  getFeature(
    args: GetFeatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFeatureCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLaunchCommand}
   */
  getLaunch(args: GetLaunchCommandInput, options?: __HttpHandlerOptions): Promise<GetLaunchCommandOutput>;
  getLaunch(args: GetLaunchCommandInput, cb: (err: any, data?: GetLaunchCommandOutput) => void): void;
  getLaunch(
    args: GetLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProjectCommand}
   */
  getProject(args: GetProjectCommandInput, options?: __HttpHandlerOptions): Promise<GetProjectCommandOutput>;
  getProject(args: GetProjectCommandInput, cb: (err: any, data?: GetProjectCommandOutput) => void): void;
  getProject(
    args: GetProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentCommand}
   */
  getSegment(args: GetSegmentCommandInput, options?: __HttpHandlerOptions): Promise<GetSegmentCommandOutput>;
  getSegment(args: GetSegmentCommandInput, cb: (err: any, data?: GetSegmentCommandOutput) => void): void;
  getSegment(
    args: GetSegmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperimentsCommand}
   */
  listExperiments(
    args: ListExperimentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentsCommandOutput>;
  listExperiments(args: ListExperimentsCommandInput, cb: (err: any, data?: ListExperimentsCommandOutput) => void): void;
  listExperiments(
    args: ListExperimentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFeaturesCommand}
   */
  listFeatures(args: ListFeaturesCommandInput, options?: __HttpHandlerOptions): Promise<ListFeaturesCommandOutput>;
  listFeatures(args: ListFeaturesCommandInput, cb: (err: any, data?: ListFeaturesCommandOutput) => void): void;
  listFeatures(
    args: ListFeaturesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFeaturesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLaunchesCommand}
   */
  listLaunches(args: ListLaunchesCommandInput, options?: __HttpHandlerOptions): Promise<ListLaunchesCommandOutput>;
  listLaunches(args: ListLaunchesCommandInput, cb: (err: any, data?: ListLaunchesCommandOutput) => void): void;
  listLaunches(
    args: ListLaunchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLaunchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
  listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSegmentReferencesCommand}
   */
  listSegmentReferences(
    args: ListSegmentReferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSegmentReferencesCommandOutput>;
  listSegmentReferences(
    args: ListSegmentReferencesCommandInput,
    cb: (err: any, data?: ListSegmentReferencesCommandOutput) => void
  ): void;
  listSegmentReferences(
    args: ListSegmentReferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSegmentReferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSegmentsCommand}
   */
  listSegments(args: ListSegmentsCommandInput, options?: __HttpHandlerOptions): Promise<ListSegmentsCommandOutput>;
  listSegments(args: ListSegmentsCommandInput, cb: (err: any, data?: ListSegmentsCommandOutput) => void): void;
  listSegments(
    args: ListSegmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSegmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutProjectEventsCommand}
   */
  putProjectEvents(
    args: PutProjectEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProjectEventsCommandOutput>;
  putProjectEvents(
    args: PutProjectEventsCommandInput,
    cb: (err: any, data?: PutProjectEventsCommandOutput) => void
  ): void;
  putProjectEvents(
    args: PutProjectEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProjectEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExperimentCommand}
   */
  startExperiment(
    args: StartExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExperimentCommandOutput>;
  startExperiment(args: StartExperimentCommandInput, cb: (err: any, data?: StartExperimentCommandOutput) => void): void;
  startExperiment(
    args: StartExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartLaunchCommand}
   */
  startLaunch(args: StartLaunchCommandInput, options?: __HttpHandlerOptions): Promise<StartLaunchCommandOutput>;
  startLaunch(args: StartLaunchCommandInput, cb: (err: any, data?: StartLaunchCommandOutput) => void): void;
  startLaunch(
    args: StartLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartLaunchCommandOutput) => void
  ): void;

  /**
   * @see {@link StopExperimentCommand}
   */
  stopExperiment(
    args: StopExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopExperimentCommandOutput>;
  stopExperiment(args: StopExperimentCommandInput, cb: (err: any, data?: StopExperimentCommandOutput) => void): void;
  stopExperiment(
    args: StopExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link StopLaunchCommand}
   */
  stopLaunch(args: StopLaunchCommandInput, options?: __HttpHandlerOptions): Promise<StopLaunchCommandOutput>;
  stopLaunch(args: StopLaunchCommandInput, cb: (err: any, data?: StopLaunchCommandOutput) => void): void;
  stopLaunch(
    args: StopLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopLaunchCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestSegmentPatternCommand}
   */
  testSegmentPattern(
    args: TestSegmentPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestSegmentPatternCommandOutput>;
  testSegmentPattern(
    args: TestSegmentPatternCommandInput,
    cb: (err: any, data?: TestSegmentPatternCommandOutput) => void
  ): void;
  testSegmentPattern(
    args: TestSegmentPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestSegmentPatternCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateExperimentCommand}
   */
  updateExperiment(
    args: UpdateExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExperimentCommandOutput>;
  updateExperiment(
    args: UpdateExperimentCommandInput,
    cb: (err: any, data?: UpdateExperimentCommandOutput) => void
  ): void;
  updateExperiment(
    args: UpdateExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFeatureCommand}
   */
  updateFeature(args: UpdateFeatureCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFeatureCommandOutput>;
  updateFeature(args: UpdateFeatureCommandInput, cb: (err: any, data?: UpdateFeatureCommandOutput) => void): void;
  updateFeature(
    args: UpdateFeatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFeatureCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLaunchCommand}
   */
  updateLaunch(args: UpdateLaunchCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLaunchCommandOutput>;
  updateLaunch(args: UpdateLaunchCommandInput, cb: (err: any, data?: UpdateLaunchCommandOutput) => void): void;
  updateLaunch(
    args: UpdateLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLaunchCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
  updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectDataDeliveryCommand}
   */
  updateProjectDataDelivery(
    args: UpdateProjectDataDeliveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectDataDeliveryCommandOutput>;
  updateProjectDataDelivery(
    args: UpdateProjectDataDeliveryCommandInput,
    cb: (err: any, data?: UpdateProjectDataDeliveryCommandOutput) => void
  ): void;
  updateProjectDataDelivery(
    args: UpdateProjectDataDeliveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectDataDeliveryCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class Evidently extends EvidentlyClient implements Evidently {}
createAggregatedClient(commands, Evidently);
