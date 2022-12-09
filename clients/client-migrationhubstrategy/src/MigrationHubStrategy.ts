// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  GetApplicationComponentDetailsCommand,
  GetApplicationComponentDetailsCommandInput,
  GetApplicationComponentDetailsCommandOutput,
} from "./commands/GetApplicationComponentDetailsCommand";
import {
  GetApplicationComponentStrategiesCommand,
  GetApplicationComponentStrategiesCommandInput,
  GetApplicationComponentStrategiesCommandOutput,
} from "./commands/GetApplicationComponentStrategiesCommand";
import {
  GetAssessmentCommand,
  GetAssessmentCommandInput,
  GetAssessmentCommandOutput,
} from "./commands/GetAssessmentCommand";
import {
  GetImportFileTaskCommand,
  GetImportFileTaskCommandInput,
  GetImportFileTaskCommandOutput,
} from "./commands/GetImportFileTaskCommand";
import {
  GetLatestAssessmentIdCommand,
  GetLatestAssessmentIdCommandInput,
  GetLatestAssessmentIdCommandOutput,
} from "./commands/GetLatestAssessmentIdCommand";
import {
  GetPortfolioPreferencesCommand,
  GetPortfolioPreferencesCommandInput,
  GetPortfolioPreferencesCommandOutput,
} from "./commands/GetPortfolioPreferencesCommand";
import {
  GetPortfolioSummaryCommand,
  GetPortfolioSummaryCommandInput,
  GetPortfolioSummaryCommandOutput,
} from "./commands/GetPortfolioSummaryCommand";
import {
  GetRecommendationReportDetailsCommand,
  GetRecommendationReportDetailsCommandInput,
  GetRecommendationReportDetailsCommandOutput,
} from "./commands/GetRecommendationReportDetailsCommand";
import {
  GetServerDetailsCommand,
  GetServerDetailsCommandInput,
  GetServerDetailsCommandOutput,
} from "./commands/GetServerDetailsCommand";
import {
  GetServerStrategiesCommand,
  GetServerStrategiesCommandInput,
  GetServerStrategiesCommandOutput,
} from "./commands/GetServerStrategiesCommand";
import {
  ListApplicationComponentsCommand,
  ListApplicationComponentsCommandInput,
  ListApplicationComponentsCommandOutput,
} from "./commands/ListApplicationComponentsCommand";
import {
  ListCollectorsCommand,
  ListCollectorsCommandInput,
  ListCollectorsCommandOutput,
} from "./commands/ListCollectorsCommand";
import {
  ListImportFileTaskCommand,
  ListImportFileTaskCommandInput,
  ListImportFileTaskCommandOutput,
} from "./commands/ListImportFileTaskCommand";
import { ListServersCommand, ListServersCommandInput, ListServersCommandOutput } from "./commands/ListServersCommand";
import {
  PutPortfolioPreferencesCommand,
  PutPortfolioPreferencesCommandInput,
  PutPortfolioPreferencesCommandOutput,
} from "./commands/PutPortfolioPreferencesCommand";
import {
  StartAssessmentCommand,
  StartAssessmentCommandInput,
  StartAssessmentCommandOutput,
} from "./commands/StartAssessmentCommand";
import {
  StartImportFileTaskCommand,
  StartImportFileTaskCommandInput,
  StartImportFileTaskCommandOutput,
} from "./commands/StartImportFileTaskCommand";
import {
  StartRecommendationReportGenerationCommand,
  StartRecommendationReportGenerationCommandInput,
  StartRecommendationReportGenerationCommandOutput,
} from "./commands/StartRecommendationReportGenerationCommand";
import {
  StopAssessmentCommand,
  StopAssessmentCommandInput,
  StopAssessmentCommandOutput,
} from "./commands/StopAssessmentCommand";
import {
  UpdateApplicationComponentConfigCommand,
  UpdateApplicationComponentConfigCommandInput,
  UpdateApplicationComponentConfigCommandOutput,
} from "./commands/UpdateApplicationComponentConfigCommand";
import {
  UpdateServerConfigCommand,
  UpdateServerConfigCommandInput,
  UpdateServerConfigCommandOutput,
} from "./commands/UpdateServerConfigCommand";
import { MigrationHubStrategyClient } from "./MigrationHubStrategyClient";

/**
 * <fullname>Migration Hub Strategy Recommendations</fullname>
 *
 *          <p>This API reference provides descriptions, syntax, and other details about each of the
 *       actions and data types for Migration Hub Strategy Recommendations (Strategy Recommendations). The topic for each action shows the API
 *       request parameters and the response. Alternatively, you can use one of the AWS SDKs to
 *       access an API that is tailored to the programming language or platform that you're using. For
 *       more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p>
 */
export class MigrationHubStrategy extends MigrationHubStrategyClient {
  /**
   * <p> Retrieves details about an application component. </p>
   */
  public getApplicationComponentDetails(
    args: GetApplicationComponentDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationComponentDetailsCommandOutput>;
  public getApplicationComponentDetails(
    args: GetApplicationComponentDetailsCommandInput,
    cb: (err: any, data?: GetApplicationComponentDetailsCommandOutput) => void
  ): void;
  public getApplicationComponentDetails(
    args: GetApplicationComponentDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationComponentDetailsCommandOutput) => void
  ): void;
  public getApplicationComponentDetails(
    args: GetApplicationComponentDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApplicationComponentDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetApplicationComponentDetailsCommandOutput) => void
  ): Promise<GetApplicationComponentDetailsCommandOutput> | void {
    const command = new GetApplicationComponentDetailsCommand(args);
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
   * <p> Retrieves a list of all the recommended strategies and tools for an application component
   *       running on a server. </p>
   */
  public getApplicationComponentStrategies(
    args: GetApplicationComponentStrategiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationComponentStrategiesCommandOutput>;
  public getApplicationComponentStrategies(
    args: GetApplicationComponentStrategiesCommandInput,
    cb: (err: any, data?: GetApplicationComponentStrategiesCommandOutput) => void
  ): void;
  public getApplicationComponentStrategies(
    args: GetApplicationComponentStrategiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationComponentStrategiesCommandOutput) => void
  ): void;
  public getApplicationComponentStrategies(
    args: GetApplicationComponentStrategiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApplicationComponentStrategiesCommandOutput) => void),
    cb?: (err: any, data?: GetApplicationComponentStrategiesCommandOutput) => void
  ): Promise<GetApplicationComponentStrategiesCommandOutput> | void {
    const command = new GetApplicationComponentStrategiesCommand(args);
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
   * <p> Retrieves the status of an on-going assessment. </p>
   */
  public getAssessment(
    args: GetAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssessmentCommandOutput>;
  public getAssessment(
    args: GetAssessmentCommandInput,
    cb: (err: any, data?: GetAssessmentCommandOutput) => void
  ): void;
  public getAssessment(
    args: GetAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentCommandOutput) => void
  ): void;
  public getAssessment(
    args: GetAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssessmentCommandOutput) => void),
    cb?: (err: any, data?: GetAssessmentCommandOutput) => void
  ): Promise<GetAssessmentCommandOutput> | void {
    const command = new GetAssessmentCommand(args);
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
   * <p> Retrieves the details about a specific import task. </p>
   */
  public getImportFileTask(
    args: GetImportFileTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImportFileTaskCommandOutput>;
  public getImportFileTask(
    args: GetImportFileTaskCommandInput,
    cb: (err: any, data?: GetImportFileTaskCommandOutput) => void
  ): void;
  public getImportFileTask(
    args: GetImportFileTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportFileTaskCommandOutput) => void
  ): void;
  public getImportFileTask(
    args: GetImportFileTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetImportFileTaskCommandOutput) => void),
    cb?: (err: any, data?: GetImportFileTaskCommandOutput) => void
  ): Promise<GetImportFileTaskCommandOutput> | void {
    const command = new GetImportFileTaskCommand(args);
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
   * <p>Retrieve the latest ID of a specific assessment task.</p>
   */
  public getLatestAssessmentId(
    args: GetLatestAssessmentIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLatestAssessmentIdCommandOutput>;
  public getLatestAssessmentId(
    args: GetLatestAssessmentIdCommandInput,
    cb: (err: any, data?: GetLatestAssessmentIdCommandOutput) => void
  ): void;
  public getLatestAssessmentId(
    args: GetLatestAssessmentIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLatestAssessmentIdCommandOutput) => void
  ): void;
  public getLatestAssessmentId(
    args: GetLatestAssessmentIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLatestAssessmentIdCommandOutput) => void),
    cb?: (err: any, data?: GetLatestAssessmentIdCommandOutput) => void
  ): Promise<GetLatestAssessmentIdCommandOutput> | void {
    const command = new GetLatestAssessmentIdCommand(args);
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
   * <p> Retrieves your migration and modernization preferences. </p>
   */
  public getPortfolioPreferences(
    args: GetPortfolioPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPortfolioPreferencesCommandOutput>;
  public getPortfolioPreferences(
    args: GetPortfolioPreferencesCommandInput,
    cb: (err: any, data?: GetPortfolioPreferencesCommandOutput) => void
  ): void;
  public getPortfolioPreferences(
    args: GetPortfolioPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPortfolioPreferencesCommandOutput) => void
  ): void;
  public getPortfolioPreferences(
    args: GetPortfolioPreferencesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPortfolioPreferencesCommandOutput) => void),
    cb?: (err: any, data?: GetPortfolioPreferencesCommandOutput) => void
  ): Promise<GetPortfolioPreferencesCommandOutput> | void {
    const command = new GetPortfolioPreferencesCommand(args);
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
   * <p> Retrieves overall summary including the number of servers to rehost and the overall
   *       number of anti-patterns. </p>
   */
  public getPortfolioSummary(
    args: GetPortfolioSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPortfolioSummaryCommandOutput>;
  public getPortfolioSummary(
    args: GetPortfolioSummaryCommandInput,
    cb: (err: any, data?: GetPortfolioSummaryCommandOutput) => void
  ): void;
  public getPortfolioSummary(
    args: GetPortfolioSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPortfolioSummaryCommandOutput) => void
  ): void;
  public getPortfolioSummary(
    args: GetPortfolioSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPortfolioSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetPortfolioSummaryCommandOutput) => void
  ): Promise<GetPortfolioSummaryCommandOutput> | void {
    const command = new GetPortfolioSummaryCommand(args);
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
   * <p> Retrieves detailed information about the specified recommendation report. </p>
   */
  public getRecommendationReportDetails(
    args: GetRecommendationReportDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationReportDetailsCommandOutput>;
  public getRecommendationReportDetails(
    args: GetRecommendationReportDetailsCommandInput,
    cb: (err: any, data?: GetRecommendationReportDetailsCommandOutput) => void
  ): void;
  public getRecommendationReportDetails(
    args: GetRecommendationReportDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationReportDetailsCommandOutput) => void
  ): void;
  public getRecommendationReportDetails(
    args: GetRecommendationReportDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRecommendationReportDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetRecommendationReportDetailsCommandOutput) => void
  ): Promise<GetRecommendationReportDetailsCommandOutput> | void {
    const command = new GetRecommendationReportDetailsCommand(args);
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
   * <p> Retrieves detailed information about a specified server. </p>
   */
  public getServerDetails(
    args: GetServerDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServerDetailsCommandOutput>;
  public getServerDetails(
    args: GetServerDetailsCommandInput,
    cb: (err: any, data?: GetServerDetailsCommandOutput) => void
  ): void;
  public getServerDetails(
    args: GetServerDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServerDetailsCommandOutput) => void
  ): void;
  public getServerDetails(
    args: GetServerDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServerDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetServerDetailsCommandOutput) => void
  ): Promise<GetServerDetailsCommandOutput> | void {
    const command = new GetServerDetailsCommand(args);
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
   * <p> Retrieves recommended strategies and tools for the specified server. </p>
   */
  public getServerStrategies(
    args: GetServerStrategiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServerStrategiesCommandOutput>;
  public getServerStrategies(
    args: GetServerStrategiesCommandInput,
    cb: (err: any, data?: GetServerStrategiesCommandOutput) => void
  ): void;
  public getServerStrategies(
    args: GetServerStrategiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServerStrategiesCommandOutput) => void
  ): void;
  public getServerStrategies(
    args: GetServerStrategiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServerStrategiesCommandOutput) => void),
    cb?: (err: any, data?: GetServerStrategiesCommandOutput) => void
  ): Promise<GetServerStrategiesCommandOutput> | void {
    const command = new GetServerStrategiesCommand(args);
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
   * <p> Retrieves a list of all the application components (processes). </p>
   */
  public listApplicationComponents(
    args: ListApplicationComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationComponentsCommandOutput>;
  public listApplicationComponents(
    args: ListApplicationComponentsCommandInput,
    cb: (err: any, data?: ListApplicationComponentsCommandOutput) => void
  ): void;
  public listApplicationComponents(
    args: ListApplicationComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationComponentsCommandOutput) => void
  ): void;
  public listApplicationComponents(
    args: ListApplicationComponentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationComponentsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationComponentsCommandOutput) => void
  ): Promise<ListApplicationComponentsCommandOutput> | void {
    const command = new ListApplicationComponentsCommand(args);
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
   * <p> Retrieves a list of all the installed collectors. </p>
   */
  public listCollectors(
    args: ListCollectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollectorsCommandOutput>;
  public listCollectors(
    args: ListCollectorsCommandInput,
    cb: (err: any, data?: ListCollectorsCommandOutput) => void
  ): void;
  public listCollectors(
    args: ListCollectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollectorsCommandOutput) => void
  ): void;
  public listCollectors(
    args: ListCollectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCollectorsCommandOutput) => void),
    cb?: (err: any, data?: ListCollectorsCommandOutput) => void
  ): Promise<ListCollectorsCommandOutput> | void {
    const command = new ListCollectorsCommand(args);
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
   * <p> Retrieves a list of all the imports performed. </p>
   */
  public listImportFileTask(
    args: ListImportFileTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportFileTaskCommandOutput>;
  public listImportFileTask(
    args: ListImportFileTaskCommandInput,
    cb: (err: any, data?: ListImportFileTaskCommandOutput) => void
  ): void;
  public listImportFileTask(
    args: ListImportFileTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportFileTaskCommandOutput) => void
  ): void;
  public listImportFileTask(
    args: ListImportFileTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListImportFileTaskCommandOutput) => void),
    cb?: (err: any, data?: ListImportFileTaskCommandOutput) => void
  ): Promise<ListImportFileTaskCommandOutput> | void {
    const command = new ListImportFileTaskCommand(args);
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
   * <p> Returns a list of all the servers. </p>
   */
  public listServers(args: ListServersCommandInput, options?: __HttpHandlerOptions): Promise<ListServersCommandOutput>;
  public listServers(args: ListServersCommandInput, cb: (err: any, data?: ListServersCommandOutput) => void): void;
  public listServers(
    args: ListServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServersCommandOutput) => void
  ): void;
  public listServers(
    args: ListServersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServersCommandOutput) => void),
    cb?: (err: any, data?: ListServersCommandOutput) => void
  ): Promise<ListServersCommandOutput> | void {
    const command = new ListServersCommand(args);
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
   * <p> Saves the specified migration and modernization preferences. </p>
   */
  public putPortfolioPreferences(
    args: PutPortfolioPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPortfolioPreferencesCommandOutput>;
  public putPortfolioPreferences(
    args: PutPortfolioPreferencesCommandInput,
    cb: (err: any, data?: PutPortfolioPreferencesCommandOutput) => void
  ): void;
  public putPortfolioPreferences(
    args: PutPortfolioPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPortfolioPreferencesCommandOutput) => void
  ): void;
  public putPortfolioPreferences(
    args: PutPortfolioPreferencesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPortfolioPreferencesCommandOutput) => void),
    cb?: (err: any, data?: PutPortfolioPreferencesCommandOutput) => void
  ): Promise<PutPortfolioPreferencesCommandOutput> | void {
    const command = new PutPortfolioPreferencesCommand(args);
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
   * <p> Starts the assessment of an on-premises environment. </p>
   */
  public startAssessment(
    args: StartAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAssessmentCommandOutput>;
  public startAssessment(
    args: StartAssessmentCommandInput,
    cb: (err: any, data?: StartAssessmentCommandOutput) => void
  ): void;
  public startAssessment(
    args: StartAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAssessmentCommandOutput) => void
  ): void;
  public startAssessment(
    args: StartAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAssessmentCommandOutput) => void),
    cb?: (err: any, data?: StartAssessmentCommandOutput) => void
  ): Promise<StartAssessmentCommandOutput> | void {
    const command = new StartAssessmentCommand(args);
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
   * <p> Starts a file import. </p>
   */
  public startImportFileTask(
    args: StartImportFileTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportFileTaskCommandOutput>;
  public startImportFileTask(
    args: StartImportFileTaskCommandInput,
    cb: (err: any, data?: StartImportFileTaskCommandOutput) => void
  ): void;
  public startImportFileTask(
    args: StartImportFileTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportFileTaskCommandOutput) => void
  ): void;
  public startImportFileTask(
    args: StartImportFileTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartImportFileTaskCommandOutput) => void),
    cb?: (err: any, data?: StartImportFileTaskCommandOutput) => void
  ): Promise<StartImportFileTaskCommandOutput> | void {
    const command = new StartImportFileTaskCommand(args);
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
   * <p> Starts generating a recommendation report. </p>
   */
  public startRecommendationReportGeneration(
    args: StartRecommendationReportGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRecommendationReportGenerationCommandOutput>;
  public startRecommendationReportGeneration(
    args: StartRecommendationReportGenerationCommandInput,
    cb: (err: any, data?: StartRecommendationReportGenerationCommandOutput) => void
  ): void;
  public startRecommendationReportGeneration(
    args: StartRecommendationReportGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRecommendationReportGenerationCommandOutput) => void
  ): void;
  public startRecommendationReportGeneration(
    args: StartRecommendationReportGenerationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartRecommendationReportGenerationCommandOutput) => void),
    cb?: (err: any, data?: StartRecommendationReportGenerationCommandOutput) => void
  ): Promise<StartRecommendationReportGenerationCommandOutput> | void {
    const command = new StartRecommendationReportGenerationCommand(args);
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
   * <p> Stops the assessment of an on-premises environment. </p>
   */
  public stopAssessment(
    args: StopAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAssessmentCommandOutput>;
  public stopAssessment(
    args: StopAssessmentCommandInput,
    cb: (err: any, data?: StopAssessmentCommandOutput) => void
  ): void;
  public stopAssessment(
    args: StopAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAssessmentCommandOutput) => void
  ): void;
  public stopAssessment(
    args: StopAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopAssessmentCommandOutput) => void),
    cb?: (err: any, data?: StopAssessmentCommandOutput) => void
  ): Promise<StopAssessmentCommandOutput> | void {
    const command = new StopAssessmentCommand(args);
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
   * <p> Updates the configuration of an application component. </p>
   */
  public updateApplicationComponentConfig(
    args: UpdateApplicationComponentConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationComponentConfigCommandOutput>;
  public updateApplicationComponentConfig(
    args: UpdateApplicationComponentConfigCommandInput,
    cb: (err: any, data?: UpdateApplicationComponentConfigCommandOutput) => void
  ): void;
  public updateApplicationComponentConfig(
    args: UpdateApplicationComponentConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationComponentConfigCommandOutput) => void
  ): void;
  public updateApplicationComponentConfig(
    args: UpdateApplicationComponentConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationComponentConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationComponentConfigCommandOutput) => void
  ): Promise<UpdateApplicationComponentConfigCommandOutput> | void {
    const command = new UpdateApplicationComponentConfigCommand(args);
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
   * <p> Updates the configuration of the specified server. </p>
   */
  public updateServerConfig(
    args: UpdateServerConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServerConfigCommandOutput>;
  public updateServerConfig(
    args: UpdateServerConfigCommandInput,
    cb: (err: any, data?: UpdateServerConfigCommandOutput) => void
  ): void;
  public updateServerConfig(
    args: UpdateServerConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServerConfigCommandOutput) => void
  ): void;
  public updateServerConfig(
    args: UpdateServerConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServerConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateServerConfigCommandOutput) => void
  ): Promise<UpdateServerConfigCommandOutput> | void {
    const command = new UpdateServerConfigCommand(args);
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
