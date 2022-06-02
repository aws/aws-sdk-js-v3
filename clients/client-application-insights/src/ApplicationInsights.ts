// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ApplicationInsightsClient } from "./ApplicationInsightsClient";
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

/**
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
export class ApplicationInsights extends ApplicationInsightsClient {
  /**
   * <p>Adds an application that is created from a resource group.</p>
   */
  public createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  public createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationCommandOutput) => void
  ): Promise<CreateApplicationCommandOutput> | void {
    const command = new CreateApplicationCommand(args);
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
   * <p>Creates a custom component by grouping similar standalone instances to monitor.</p>
   */
  public createComponent(
    args: CreateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComponentCommandOutput>;
  public createComponent(
    args: CreateComponentCommandInput,
    cb: (err: any, data?: CreateComponentCommandOutput) => void
  ): void;
  public createComponent(
    args: CreateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComponentCommandOutput) => void
  ): void;
  public createComponent(
    args: CreateComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateComponentCommandOutput) => void),
    cb?: (err: any, data?: CreateComponentCommandOutput) => void
  ): Promise<CreateComponentCommandOutput> | void {
    const command = new CreateComponentCommand(args);
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
   * <p>Adds an log pattern to a <code>LogPatternSet</code>.</p>
   */
  public createLogPattern(
    args: CreateLogPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLogPatternCommandOutput>;
  public createLogPattern(
    args: CreateLogPatternCommandInput,
    cb: (err: any, data?: CreateLogPatternCommandOutput) => void
  ): void;
  public createLogPattern(
    args: CreateLogPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLogPatternCommandOutput) => void
  ): void;
  public createLogPattern(
    args: CreateLogPatternCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLogPatternCommandOutput) => void),
    cb?: (err: any, data?: CreateLogPatternCommandOutput) => void
  ): Promise<CreateLogPatternCommandOutput> | void {
    const command = new CreateLogPatternCommand(args);
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
   * <p>Removes the specified application from monitoring. Does not delete the
   *          application.</p>
   */
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): Promise<DeleteApplicationCommandOutput> | void {
    const command = new DeleteApplicationCommand(args);
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
   * <p>Ungroups a custom component. When you ungroup custom components, all applicable monitors
   *          that are set up for the component are removed and the instances revert to their standalone
   *          status.</p>
   */
  public deleteComponent(
    args: DeleteComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComponentCommandOutput>;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteComponentCommandOutput) => void),
    cb?: (err: any, data?: DeleteComponentCommandOutput) => void
  ): Promise<DeleteComponentCommandOutput> | void {
    const command = new DeleteComponentCommand(args);
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
   * <p>Removes the specified log pattern from a <code>LogPatternSet</code>.</p>
   */
  public deleteLogPattern(
    args: DeleteLogPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLogPatternCommandOutput>;
  public deleteLogPattern(
    args: DeleteLogPatternCommandInput,
    cb: (err: any, data?: DeleteLogPatternCommandOutput) => void
  ): void;
  public deleteLogPattern(
    args: DeleteLogPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLogPatternCommandOutput) => void
  ): void;
  public deleteLogPattern(
    args: DeleteLogPatternCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLogPatternCommandOutput) => void),
    cb?: (err: any, data?: DeleteLogPatternCommandOutput) => void
  ): Promise<DeleteLogPatternCommandOutput> | void {
    const command = new DeleteLogPatternCommand(args);
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
   * <p>Describes the application.</p>
   */
  public describeApplication(
    args: DescribeApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationCommandOutput>;
  public describeApplication(
    args: DescribeApplicationCommandInput,
    cb: (err: any, data?: DescribeApplicationCommandOutput) => void
  ): void;
  public describeApplication(
    args: DescribeApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationCommandOutput) => void
  ): void;
  public describeApplication(
    args: DescribeApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeApplicationCommandOutput) => void),
    cb?: (err: any, data?: DescribeApplicationCommandOutput) => void
  ): Promise<DescribeApplicationCommandOutput> | void {
    const command = new DescribeApplicationCommand(args);
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
   * <p>Describes a component and lists the resources that are grouped together in a
   *          component.</p>
   */
  public describeComponent(
    args: DescribeComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComponentCommandOutput>;
  public describeComponent(
    args: DescribeComponentCommandInput,
    cb: (err: any, data?: DescribeComponentCommandOutput) => void
  ): void;
  public describeComponent(
    args: DescribeComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComponentCommandOutput) => void
  ): void;
  public describeComponent(
    args: DescribeComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeComponentCommandOutput) => void),
    cb?: (err: any, data?: DescribeComponentCommandOutput) => void
  ): Promise<DescribeComponentCommandOutput> | void {
    const command = new DescribeComponentCommand(args);
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
   * <p>Describes the monitoring configuration of the component.</p>
   */
  public describeComponentConfiguration(
    args: DescribeComponentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComponentConfigurationCommandOutput>;
  public describeComponentConfiguration(
    args: DescribeComponentConfigurationCommandInput,
    cb: (err: any, data?: DescribeComponentConfigurationCommandOutput) => void
  ): void;
  public describeComponentConfiguration(
    args: DescribeComponentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComponentConfigurationCommandOutput) => void
  ): void;
  public describeComponentConfiguration(
    args: DescribeComponentConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeComponentConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeComponentConfigurationCommandOutput) => void
  ): Promise<DescribeComponentConfigurationCommandOutput> | void {
    const command = new DescribeComponentConfigurationCommand(args);
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
   * <p>Describes the recommended monitoring configuration of the component.</p>
   */
  public describeComponentConfigurationRecommendation(
    args: DescribeComponentConfigurationRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComponentConfigurationRecommendationCommandOutput>;
  public describeComponentConfigurationRecommendation(
    args: DescribeComponentConfigurationRecommendationCommandInput,
    cb: (err: any, data?: DescribeComponentConfigurationRecommendationCommandOutput) => void
  ): void;
  public describeComponentConfigurationRecommendation(
    args: DescribeComponentConfigurationRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComponentConfigurationRecommendationCommandOutput) => void
  ): void;
  public describeComponentConfigurationRecommendation(
    args: DescribeComponentConfigurationRecommendationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeComponentConfigurationRecommendationCommandOutput) => void),
    cb?: (err: any, data?: DescribeComponentConfigurationRecommendationCommandOutput) => void
  ): Promise<DescribeComponentConfigurationRecommendationCommandOutput> | void {
    const command = new DescribeComponentConfigurationRecommendationCommand(args);
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
   * <p>Describe a specific log pattern from a <code>LogPatternSet</code>.</p>
   */
  public describeLogPattern(
    args: DescribeLogPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLogPatternCommandOutput>;
  public describeLogPattern(
    args: DescribeLogPatternCommandInput,
    cb: (err: any, data?: DescribeLogPatternCommandOutput) => void
  ): void;
  public describeLogPattern(
    args: DescribeLogPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLogPatternCommandOutput) => void
  ): void;
  public describeLogPattern(
    args: DescribeLogPatternCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLogPatternCommandOutput) => void),
    cb?: (err: any, data?: DescribeLogPatternCommandOutput) => void
  ): Promise<DescribeLogPatternCommandOutput> | void {
    const command = new DescribeLogPatternCommand(args);
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
   * <p>Describes an anomaly or error with the application.</p>
   */
  public describeObservation(
    args: DescribeObservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeObservationCommandOutput>;
  public describeObservation(
    args: DescribeObservationCommandInput,
    cb: (err: any, data?: DescribeObservationCommandOutput) => void
  ): void;
  public describeObservation(
    args: DescribeObservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeObservationCommandOutput) => void
  ): void;
  public describeObservation(
    args: DescribeObservationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeObservationCommandOutput) => void),
    cb?: (err: any, data?: DescribeObservationCommandOutput) => void
  ): Promise<DescribeObservationCommandOutput> | void {
    const command = new DescribeObservationCommand(args);
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
   * <p>Describes an application problem.</p>
   */
  public describeProblem(
    args: DescribeProblemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProblemCommandOutput>;
  public describeProblem(
    args: DescribeProblemCommandInput,
    cb: (err: any, data?: DescribeProblemCommandOutput) => void
  ): void;
  public describeProblem(
    args: DescribeProblemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProblemCommandOutput) => void
  ): void;
  public describeProblem(
    args: DescribeProblemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProblemCommandOutput) => void),
    cb?: (err: any, data?: DescribeProblemCommandOutput) => void
  ): Promise<DescribeProblemCommandOutput> | void {
    const command = new DescribeProblemCommand(args);
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
   * <p>Describes the anomalies or errors associated with the problem.</p>
   */
  public describeProblemObservations(
    args: DescribeProblemObservationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProblemObservationsCommandOutput>;
  public describeProblemObservations(
    args: DescribeProblemObservationsCommandInput,
    cb: (err: any, data?: DescribeProblemObservationsCommandOutput) => void
  ): void;
  public describeProblemObservations(
    args: DescribeProblemObservationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProblemObservationsCommandOutput) => void
  ): void;
  public describeProblemObservations(
    args: DescribeProblemObservationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProblemObservationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeProblemObservationsCommandOutput) => void
  ): Promise<DescribeProblemObservationsCommandOutput> | void {
    const command = new DescribeProblemObservationsCommand(args);
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
   * <p>Lists the IDs of the applications that you are monitoring. </p>
   */
  public listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  public listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationsCommandOutput) => void
  ): Promise<ListApplicationsCommandOutput> | void {
    const command = new ListApplicationsCommand(args);
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
   * <p>Lists the auto-grouped, standalone, and custom components of the application.</p>
   */
  public listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  public listComponents(
    args: ListComponentsCommandInput,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComponentsCommandOutput) => void),
    cb?: (err: any, data?: ListComponentsCommandOutput) => void
  ): Promise<ListComponentsCommandOutput> | void {
    const command = new ListComponentsCommand(args);
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
   * <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by
   *          Application Insights. Examples of events represented are: </p>
   *          <ul>
   *             <li>
   *                <p>INFO: creating a new alarm or updating an alarm threshold.</p>
   *             </li>
   *             <li>
   *                <p>WARN: alarm not created due to insufficient data points used to predict
   *                thresholds.</p>
   *             </li>
   *             <li>
   *                <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p>
   *             </li>
   *          </ul>
   */
  public listConfigurationHistory(
    args: ListConfigurationHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationHistoryCommandOutput>;
  public listConfigurationHistory(
    args: ListConfigurationHistoryCommandInput,
    cb: (err: any, data?: ListConfigurationHistoryCommandOutput) => void
  ): void;
  public listConfigurationHistory(
    args: ListConfigurationHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationHistoryCommandOutput) => void
  ): void;
  public listConfigurationHistory(
    args: ListConfigurationHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConfigurationHistoryCommandOutput) => void),
    cb?: (err: any, data?: ListConfigurationHistoryCommandOutput) => void
  ): Promise<ListConfigurationHistoryCommandOutput> | void {
    const command = new ListConfigurationHistoryCommand(args);
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
   * <p>Lists the log patterns in the specific log <code>LogPatternSet</code>.</p>
   */
  public listLogPatterns(
    args: ListLogPatternsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogPatternsCommandOutput>;
  public listLogPatterns(
    args: ListLogPatternsCommandInput,
    cb: (err: any, data?: ListLogPatternsCommandOutput) => void
  ): void;
  public listLogPatterns(
    args: ListLogPatternsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogPatternsCommandOutput) => void
  ): void;
  public listLogPatterns(
    args: ListLogPatternsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLogPatternsCommandOutput) => void),
    cb?: (err: any, data?: ListLogPatternsCommandOutput) => void
  ): Promise<ListLogPatternsCommandOutput> | void {
    const command = new ListLogPatternsCommand(args);
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
   * <p>Lists the log pattern sets in the specific application.</p>
   */
  public listLogPatternSets(
    args: ListLogPatternSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogPatternSetsCommandOutput>;
  public listLogPatternSets(
    args: ListLogPatternSetsCommandInput,
    cb: (err: any, data?: ListLogPatternSetsCommandOutput) => void
  ): void;
  public listLogPatternSets(
    args: ListLogPatternSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogPatternSetsCommandOutput) => void
  ): void;
  public listLogPatternSets(
    args: ListLogPatternSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLogPatternSetsCommandOutput) => void),
    cb?: (err: any, data?: ListLogPatternSetsCommandOutput) => void
  ): Promise<ListLogPatternSetsCommandOutput> | void {
    const command = new ListLogPatternSetsCommand(args);
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
   * <p>Lists the problems with your application.</p>
   */
  public listProblems(
    args: ListProblemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProblemsCommandOutput>;
  public listProblems(args: ListProblemsCommandInput, cb: (err: any, data?: ListProblemsCommandOutput) => void): void;
  public listProblems(
    args: ListProblemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProblemsCommandOutput) => void
  ): void;
  public listProblems(
    args: ListProblemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProblemsCommandOutput) => void),
    cb?: (err: any, data?: ListProblemsCommandOutput) => void
  ): Promise<ListProblemsCommandOutput> | void {
    const command = new ListProblemsCommand(args);
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
   * <p>Retrieve a list of the tags (keys and values) that are associated with a specified
   *          application. A <i>tag</i> is a label that you optionally define and associate
   *          with an application. Each tag consists of a required <i>tag key</i> and an
   *          optional associated <i>tag value</i>. A tag key is a general label that acts
   *          as a category for more specific tag values. A tag value acts as a descriptor within a tag
   *          key.</p>
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
   * <p>Add one or more tags (keys and values) to a specified application. A
   *             <i>tag</i> is a label that you optionally define and associate with an
   *          application. Tags can help you categorize and manage application in different ways, such as
   *          by purpose, owner, environment, or other criteria. </p>
   *          <p>Each tag consists of a required <i>tag key</i> and an associated
   *             <i>tag value</i>, both of which you define. A tag key is a general label
   *          that acts as a category for more specific tag values. A tag value acts as a descriptor
   *          within a tag key.</p>
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
   * <p>Remove one or more tags (keys and values) from a specified application.</p>
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
   * <p>Updates the application.</p>
   */
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): Promise<UpdateApplicationCommandOutput> | void {
    const command = new UpdateApplicationCommand(args);
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
   * <p>Updates the custom component name and/or the list of resources that make up the
   *          component.</p>
   */
  public updateComponent(
    args: UpdateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComponentCommandOutput>;
  public updateComponent(
    args: UpdateComponentCommandInput,
    cb: (err: any, data?: UpdateComponentCommandOutput) => void
  ): void;
  public updateComponent(
    args: UpdateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComponentCommandOutput) => void
  ): void;
  public updateComponent(
    args: UpdateComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateComponentCommandOutput) => void),
    cb?: (err: any, data?: UpdateComponentCommandOutput) => void
  ): Promise<UpdateComponentCommandOutput> | void {
    const command = new UpdateComponentCommand(args);
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
   * <p>Updates the monitoring configurations for the component. The configuration input
   *          parameter is an escaped JSON of the configuration and should match the schema of what is
   *          returned by <code>DescribeComponentConfigurationRecommendation</code>. </p>
   */
  public updateComponentConfiguration(
    args: UpdateComponentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComponentConfigurationCommandOutput>;
  public updateComponentConfiguration(
    args: UpdateComponentConfigurationCommandInput,
    cb: (err: any, data?: UpdateComponentConfigurationCommandOutput) => void
  ): void;
  public updateComponentConfiguration(
    args: UpdateComponentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComponentConfigurationCommandOutput) => void
  ): void;
  public updateComponentConfiguration(
    args: UpdateComponentConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateComponentConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateComponentConfigurationCommandOutput) => void
  ): Promise<UpdateComponentConfigurationCommandOutput> | void {
    const command = new UpdateComponentConfigurationCommand(args);
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
   * <p>Adds a log pattern to a <code>LogPatternSet</code>.</p>
   */
  public updateLogPattern(
    args: UpdateLogPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLogPatternCommandOutput>;
  public updateLogPattern(
    args: UpdateLogPatternCommandInput,
    cb: (err: any, data?: UpdateLogPatternCommandOutput) => void
  ): void;
  public updateLogPattern(
    args: UpdateLogPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLogPatternCommandOutput) => void
  ): void;
  public updateLogPattern(
    args: UpdateLogPatternCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLogPatternCommandOutput) => void),
    cb?: (err: any, data?: UpdateLogPatternCommandOutput) => void
  ): Promise<UpdateLogPatternCommandOutput> | void {
    const command = new UpdateLogPatternCommand(args);
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
