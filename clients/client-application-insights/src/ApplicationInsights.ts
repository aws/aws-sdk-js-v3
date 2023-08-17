// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ApplicationInsightsClient, ApplicationInsightsClientConfig } from "./ApplicationInsightsClient";
import { AddWorkloadCommand, AddWorkloadCommandInput, AddWorkloadCommandOutput } from "./commands/AddWorkloadCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateComponentCommand,
  CreateComponentCommandInput,
  CreateComponentCommandOutput,
} from "./commands/CreateComponentCommand";
import {
  CreateLogPatternCommand,
  CreateLogPatternCommandInput,
  CreateLogPatternCommandOutput,
} from "./commands/CreateLogPatternCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteComponentCommand,
  DeleteComponentCommandInput,
  DeleteComponentCommandOutput,
} from "./commands/DeleteComponentCommand";
import {
  DeleteLogPatternCommand,
  DeleteLogPatternCommandInput,
  DeleteLogPatternCommandOutput,
} from "./commands/DeleteLogPatternCommand";
import {
  DescribeApplicationCommand,
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "./commands/DescribeApplicationCommand";
import {
  DescribeComponentCommand,
  DescribeComponentCommandInput,
  DescribeComponentCommandOutput,
} from "./commands/DescribeComponentCommand";
import {
  DescribeComponentConfigurationCommand,
  DescribeComponentConfigurationCommandInput,
  DescribeComponentConfigurationCommandOutput,
} from "./commands/DescribeComponentConfigurationCommand";
import {
  DescribeComponentConfigurationRecommendationCommand,
  DescribeComponentConfigurationRecommendationCommandInput,
  DescribeComponentConfigurationRecommendationCommandOutput,
} from "./commands/DescribeComponentConfigurationRecommendationCommand";
import {
  DescribeLogPatternCommand,
  DescribeLogPatternCommandInput,
  DescribeLogPatternCommandOutput,
} from "./commands/DescribeLogPatternCommand";
import {
  DescribeObservationCommand,
  DescribeObservationCommandInput,
  DescribeObservationCommandOutput,
} from "./commands/DescribeObservationCommand";
import {
  DescribeProblemCommand,
  DescribeProblemCommandInput,
  DescribeProblemCommandOutput,
} from "./commands/DescribeProblemCommand";
import {
  DescribeProblemObservationsCommand,
  DescribeProblemObservationsCommandInput,
  DescribeProblemObservationsCommandOutput,
} from "./commands/DescribeProblemObservationsCommand";
import {
  DescribeWorkloadCommand,
  DescribeWorkloadCommandInput,
  DescribeWorkloadCommandOutput,
} from "./commands/DescribeWorkloadCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "./commands/ListComponentsCommand";
import {
  ListConfigurationHistoryCommand,
  ListConfigurationHistoryCommandInput,
  ListConfigurationHistoryCommandOutput,
} from "./commands/ListConfigurationHistoryCommand";
import {
  ListLogPatternsCommand,
  ListLogPatternsCommandInput,
  ListLogPatternsCommandOutput,
} from "./commands/ListLogPatternsCommand";
import {
  ListLogPatternSetsCommand,
  ListLogPatternSetsCommandInput,
  ListLogPatternSetsCommandOutput,
} from "./commands/ListLogPatternSetsCommand";
import {
  ListProblemsCommand,
  ListProblemsCommandInput,
  ListProblemsCommandOutput,
} from "./commands/ListProblemsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkloadsCommand,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
} from "./commands/ListWorkloadsCommand";
import {
  RemoveWorkloadCommand,
  RemoveWorkloadCommandInput,
  RemoveWorkloadCommandOutput,
} from "./commands/RemoveWorkloadCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateComponentCommand,
  UpdateComponentCommandInput,
  UpdateComponentCommandOutput,
} from "./commands/UpdateComponentCommand";
import {
  UpdateComponentConfigurationCommand,
  UpdateComponentConfigurationCommandInput,
  UpdateComponentConfigurationCommandOutput,
} from "./commands/UpdateComponentConfigurationCommand";
import {
  UpdateLogPatternCommand,
  UpdateLogPatternCommandInput,
  UpdateLogPatternCommandOutput,
} from "./commands/UpdateLogPatternCommand";
import {
  UpdateProblemCommand,
  UpdateProblemCommandInput,
  UpdateProblemCommandOutput,
} from "./commands/UpdateProblemCommand";
import {
  UpdateWorkloadCommand,
  UpdateWorkloadCommandInput,
  UpdateWorkloadCommandOutput,
} from "./commands/UpdateWorkloadCommand";

const commands = {
  AddWorkloadCommand,
  CreateApplicationCommand,
  CreateComponentCommand,
  CreateLogPatternCommand,
  DeleteApplicationCommand,
  DeleteComponentCommand,
  DeleteLogPatternCommand,
  DescribeApplicationCommand,
  DescribeComponentCommand,
  DescribeComponentConfigurationCommand,
  DescribeComponentConfigurationRecommendationCommand,
  DescribeLogPatternCommand,
  DescribeObservationCommand,
  DescribeProblemCommand,
  DescribeProblemObservationsCommand,
  DescribeWorkloadCommand,
  ListApplicationsCommand,
  ListComponentsCommand,
  ListConfigurationHistoryCommand,
  ListLogPatternsCommand,
  ListLogPatternSetsCommand,
  ListProblemsCommand,
  ListTagsForResourceCommand,
  ListWorkloadsCommand,
  RemoveWorkloadCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateComponentCommand,
  UpdateComponentConfigurationCommand,
  UpdateLogPatternCommand,
  UpdateProblemCommand,
  UpdateWorkloadCommand,
};

export interface ApplicationInsights {
  /**
   * @see {@link AddWorkloadCommand}
   */
  addWorkload(args: AddWorkloadCommandInput, options?: __HttpHandlerOptions): Promise<AddWorkloadCommandOutput>;
  addWorkload(args: AddWorkloadCommandInput, cb: (err: any, data?: AddWorkloadCommandOutput) => void): void;
  addWorkload(
    args: AddWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateComponentCommand}
   */
  createComponent(
    args: CreateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComponentCommandOutput>;
  createComponent(args: CreateComponentCommandInput, cb: (err: any, data?: CreateComponentCommandOutput) => void): void;
  createComponent(
    args: CreateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLogPatternCommand}
   */
  createLogPattern(
    args: CreateLogPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLogPatternCommandOutput>;
  createLogPattern(
    args: CreateLogPatternCommandInput,
    cb: (err: any, data?: CreateLogPatternCommandOutput) => void
  ): void;
  createLogPattern(
    args: CreateLogPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLogPatternCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteComponentCommand}
   */
  deleteComponent(
    args: DeleteComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComponentCommandOutput>;
  deleteComponent(args: DeleteComponentCommandInput, cb: (err: any, data?: DeleteComponentCommandOutput) => void): void;
  deleteComponent(
    args: DeleteComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLogPatternCommand}
   */
  deleteLogPattern(
    args: DeleteLogPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLogPatternCommandOutput>;
  deleteLogPattern(
    args: DeleteLogPatternCommandInput,
    cb: (err: any, data?: DeleteLogPatternCommandOutput) => void
  ): void;
  deleteLogPattern(
    args: DeleteLogPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLogPatternCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationCommand}
   */
  describeApplication(
    args: DescribeApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationCommandOutput>;
  describeApplication(
    args: DescribeApplicationCommandInput,
    cb: (err: any, data?: DescribeApplicationCommandOutput) => void
  ): void;
  describeApplication(
    args: DescribeApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeComponentCommand}
   */
  describeComponent(
    args: DescribeComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComponentCommandOutput>;
  describeComponent(
    args: DescribeComponentCommandInput,
    cb: (err: any, data?: DescribeComponentCommandOutput) => void
  ): void;
  describeComponent(
    args: DescribeComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeComponentConfigurationCommand}
   */
  describeComponentConfiguration(
    args: DescribeComponentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComponentConfigurationCommandOutput>;
  describeComponentConfiguration(
    args: DescribeComponentConfigurationCommandInput,
    cb: (err: any, data?: DescribeComponentConfigurationCommandOutput) => void
  ): void;
  describeComponentConfiguration(
    args: DescribeComponentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComponentConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeComponentConfigurationRecommendationCommand}
   */
  describeComponentConfigurationRecommendation(
    args: DescribeComponentConfigurationRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComponentConfigurationRecommendationCommandOutput>;
  describeComponentConfigurationRecommendation(
    args: DescribeComponentConfigurationRecommendationCommandInput,
    cb: (err: any, data?: DescribeComponentConfigurationRecommendationCommandOutput) => void
  ): void;
  describeComponentConfigurationRecommendation(
    args: DescribeComponentConfigurationRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComponentConfigurationRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLogPatternCommand}
   */
  describeLogPattern(
    args: DescribeLogPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLogPatternCommandOutput>;
  describeLogPattern(
    args: DescribeLogPatternCommandInput,
    cb: (err: any, data?: DescribeLogPatternCommandOutput) => void
  ): void;
  describeLogPattern(
    args: DescribeLogPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLogPatternCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeObservationCommand}
   */
  describeObservation(
    args: DescribeObservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeObservationCommandOutput>;
  describeObservation(
    args: DescribeObservationCommandInput,
    cb: (err: any, data?: DescribeObservationCommandOutput) => void
  ): void;
  describeObservation(
    args: DescribeObservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeObservationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProblemCommand}
   */
  describeProblem(
    args: DescribeProblemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProblemCommandOutput>;
  describeProblem(args: DescribeProblemCommandInput, cb: (err: any, data?: DescribeProblemCommandOutput) => void): void;
  describeProblem(
    args: DescribeProblemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProblemCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProblemObservationsCommand}
   */
  describeProblemObservations(
    args: DescribeProblemObservationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProblemObservationsCommandOutput>;
  describeProblemObservations(
    args: DescribeProblemObservationsCommandInput,
    cb: (err: any, data?: DescribeProblemObservationsCommandOutput) => void
  ): void;
  describeProblemObservations(
    args: DescribeProblemObservationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProblemObservationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkloadCommand}
   */
  describeWorkload(
    args: DescribeWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkloadCommandOutput>;
  describeWorkload(
    args: DescribeWorkloadCommandInput,
    cb: (err: any, data?: DescribeWorkloadCommandOutput) => void
  ): void;
  describeWorkload(
    args: DescribeWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentsCommand}
   */
  listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  listComponents(args: ListComponentsCommandInput, cb: (err: any, data?: ListComponentsCommandOutput) => void): void;
  listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationHistoryCommand}
   */
  listConfigurationHistory(
    args: ListConfigurationHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationHistoryCommandOutput>;
  listConfigurationHistory(
    args: ListConfigurationHistoryCommandInput,
    cb: (err: any, data?: ListConfigurationHistoryCommandOutput) => void
  ): void;
  listConfigurationHistory(
    args: ListConfigurationHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLogPatternsCommand}
   */
  listLogPatterns(
    args: ListLogPatternsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogPatternsCommandOutput>;
  listLogPatterns(args: ListLogPatternsCommandInput, cb: (err: any, data?: ListLogPatternsCommandOutput) => void): void;
  listLogPatterns(
    args: ListLogPatternsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogPatternsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLogPatternSetsCommand}
   */
  listLogPatternSets(
    args: ListLogPatternSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogPatternSetsCommandOutput>;
  listLogPatternSets(
    args: ListLogPatternSetsCommandInput,
    cb: (err: any, data?: ListLogPatternSetsCommandOutput) => void
  ): void;
  listLogPatternSets(
    args: ListLogPatternSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogPatternSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProblemsCommand}
   */
  listProblems(args: ListProblemsCommandInput, options?: __HttpHandlerOptions): Promise<ListProblemsCommandOutput>;
  listProblems(args: ListProblemsCommandInput, cb: (err: any, data?: ListProblemsCommandOutput) => void): void;
  listProblems(
    args: ListProblemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProblemsCommandOutput) => void
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
   * @see {@link ListWorkloadsCommand}
   */
  listWorkloads(args: ListWorkloadsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkloadsCommandOutput>;
  listWorkloads(args: ListWorkloadsCommandInput, cb: (err: any, data?: ListWorkloadsCommandOutput) => void): void;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveWorkloadCommand}
   */
  removeWorkload(
    args: RemoveWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveWorkloadCommandOutput>;
  removeWorkload(args: RemoveWorkloadCommandInput, cb: (err: any, data?: RemoveWorkloadCommandOutput) => void): void;
  removeWorkload(
    args: RemoveWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveWorkloadCommandOutput) => void
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
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateComponentCommand}
   */
  updateComponent(
    args: UpdateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComponentCommandOutput>;
  updateComponent(args: UpdateComponentCommandInput, cb: (err: any, data?: UpdateComponentCommandOutput) => void): void;
  updateComponent(
    args: UpdateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateComponentConfigurationCommand}
   */
  updateComponentConfiguration(
    args: UpdateComponentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComponentConfigurationCommandOutput>;
  updateComponentConfiguration(
    args: UpdateComponentConfigurationCommandInput,
    cb: (err: any, data?: UpdateComponentConfigurationCommandOutput) => void
  ): void;
  updateComponentConfiguration(
    args: UpdateComponentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComponentConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLogPatternCommand}
   */
  updateLogPattern(
    args: UpdateLogPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLogPatternCommandOutput>;
  updateLogPattern(
    args: UpdateLogPatternCommandInput,
    cb: (err: any, data?: UpdateLogPatternCommandOutput) => void
  ): void;
  updateLogPattern(
    args: UpdateLogPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLogPatternCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProblemCommand}
   */
  updateProblem(args: UpdateProblemCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProblemCommandOutput>;
  updateProblem(args: UpdateProblemCommandInput, cb: (err: any, data?: UpdateProblemCommandOutput) => void): void;
  updateProblem(
    args: UpdateProblemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProblemCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkloadCommand}
   */
  updateWorkload(
    args: UpdateWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkloadCommandOutput>;
  updateWorkload(args: UpdateWorkloadCommandInput, cb: (err: any, data?: UpdateWorkloadCommandOutput) => void): void;
  updateWorkload(
    args: UpdateWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkloadCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon CloudWatch Application Insights</fullname>
 *          <p> Amazon CloudWatch Application Insights is a service that helps you detect common
 *          problems with your applications. It enables you to pinpoint the source of issues in your
 *          applications (built with technologies such as Microsoft IIS, .NET, and Microsoft SQL
 *          Server), by providing key insights into detected problems.</p>
 *          <p>After you onboard your application, CloudWatch Application Insights identifies,
 *          recommends, and sets up metrics and logs. It continuously analyzes and correlates your
 *          metrics and logs for unusual behavior to surface actionable problems with your application.
 *          For example, if your application is slow and unresponsive and leading to HTTP 500 errors in
 *          your Application Load Balancer (ALB), Application Insights informs you that a memory
 *          pressure problem with your SQL Server database is occurring. It bases this analysis on
 *          impactful metrics and log errors. </p>
 */
export class ApplicationInsights extends ApplicationInsightsClient implements ApplicationInsights {}
createAggregatedClient(commands, ApplicationInsights);
