// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { MigrationHubStrategyClient, MigrationHubStrategyClientConfig } from "./MigrationHubStrategyClient";

const commands = {
  GetApplicationComponentDetailsCommand,
  GetApplicationComponentStrategiesCommand,
  GetAssessmentCommand,
  GetImportFileTaskCommand,
  GetLatestAssessmentIdCommand,
  GetPortfolioPreferencesCommand,
  GetPortfolioSummaryCommand,
  GetRecommendationReportDetailsCommand,
  GetServerDetailsCommand,
  GetServerStrategiesCommand,
  ListApplicationComponentsCommand,
  ListCollectorsCommand,
  ListImportFileTaskCommand,
  ListServersCommand,
  PutPortfolioPreferencesCommand,
  StartAssessmentCommand,
  StartImportFileTaskCommand,
  StartRecommendationReportGenerationCommand,
  StopAssessmentCommand,
  UpdateApplicationComponentConfigCommand,
  UpdateServerConfigCommand,
};

export interface MigrationHubStrategy {
  /**
   * @see {@link GetApplicationComponentDetailsCommand}
   */
  getApplicationComponentDetails(
    args: GetApplicationComponentDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationComponentDetailsCommandOutput>;
  getApplicationComponentDetails(
    args: GetApplicationComponentDetailsCommandInput,
    cb: (err: any, data?: GetApplicationComponentDetailsCommandOutput) => void
  ): void;
  getApplicationComponentDetails(
    args: GetApplicationComponentDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationComponentDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationComponentStrategiesCommand}
   */
  getApplicationComponentStrategies(
    args: GetApplicationComponentStrategiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationComponentStrategiesCommandOutput>;
  getApplicationComponentStrategies(
    args: GetApplicationComponentStrategiesCommandInput,
    cb: (err: any, data?: GetApplicationComponentStrategiesCommandOutput) => void
  ): void;
  getApplicationComponentStrategies(
    args: GetApplicationComponentStrategiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationComponentStrategiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssessmentCommand}
   */
  getAssessment(args: GetAssessmentCommandInput, options?: __HttpHandlerOptions): Promise<GetAssessmentCommandOutput>;
  getAssessment(args: GetAssessmentCommandInput, cb: (err: any, data?: GetAssessmentCommandOutput) => void): void;
  getAssessment(
    args: GetAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImportFileTaskCommand}
   */
  getImportFileTask(
    args: GetImportFileTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImportFileTaskCommandOutput>;
  getImportFileTask(
    args: GetImportFileTaskCommandInput,
    cb: (err: any, data?: GetImportFileTaskCommandOutput) => void
  ): void;
  getImportFileTask(
    args: GetImportFileTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportFileTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLatestAssessmentIdCommand}
   */
  getLatestAssessmentId(
    args: GetLatestAssessmentIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLatestAssessmentIdCommandOutput>;
  getLatestAssessmentId(
    args: GetLatestAssessmentIdCommandInput,
    cb: (err: any, data?: GetLatestAssessmentIdCommandOutput) => void
  ): void;
  getLatestAssessmentId(
    args: GetLatestAssessmentIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLatestAssessmentIdCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPortfolioPreferencesCommand}
   */
  getPortfolioPreferences(
    args: GetPortfolioPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPortfolioPreferencesCommandOutput>;
  getPortfolioPreferences(
    args: GetPortfolioPreferencesCommandInput,
    cb: (err: any, data?: GetPortfolioPreferencesCommandOutput) => void
  ): void;
  getPortfolioPreferences(
    args: GetPortfolioPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPortfolioPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPortfolioSummaryCommand}
   */
  getPortfolioSummary(
    args: GetPortfolioSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPortfolioSummaryCommandOutput>;
  getPortfolioSummary(
    args: GetPortfolioSummaryCommandInput,
    cb: (err: any, data?: GetPortfolioSummaryCommandOutput) => void
  ): void;
  getPortfolioSummary(
    args: GetPortfolioSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPortfolioSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationReportDetailsCommand}
   */
  getRecommendationReportDetails(
    args: GetRecommendationReportDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationReportDetailsCommandOutput>;
  getRecommendationReportDetails(
    args: GetRecommendationReportDetailsCommandInput,
    cb: (err: any, data?: GetRecommendationReportDetailsCommandOutput) => void
  ): void;
  getRecommendationReportDetails(
    args: GetRecommendationReportDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationReportDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServerDetailsCommand}
   */
  getServerDetails(
    args: GetServerDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServerDetailsCommandOutput>;
  getServerDetails(
    args: GetServerDetailsCommandInput,
    cb: (err: any, data?: GetServerDetailsCommandOutput) => void
  ): void;
  getServerDetails(
    args: GetServerDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServerDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServerStrategiesCommand}
   */
  getServerStrategies(
    args: GetServerStrategiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServerStrategiesCommandOutput>;
  getServerStrategies(
    args: GetServerStrategiesCommandInput,
    cb: (err: any, data?: GetServerStrategiesCommandOutput) => void
  ): void;
  getServerStrategies(
    args: GetServerStrategiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServerStrategiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationComponentsCommand}
   */
  listApplicationComponents(
    args: ListApplicationComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationComponentsCommandOutput>;
  listApplicationComponents(
    args: ListApplicationComponentsCommandInput,
    cb: (err: any, data?: ListApplicationComponentsCommandOutput) => void
  ): void;
  listApplicationComponents(
    args: ListApplicationComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollectorsCommand}
   */
  listCollectors(
    args: ListCollectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollectorsCommandOutput>;
  listCollectors(args: ListCollectorsCommandInput, cb: (err: any, data?: ListCollectorsCommandOutput) => void): void;
  listCollectors(
    args: ListCollectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportFileTaskCommand}
   */
  listImportFileTask(
    args: ListImportFileTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportFileTaskCommandOutput>;
  listImportFileTask(
    args: ListImportFileTaskCommandInput,
    cb: (err: any, data?: ListImportFileTaskCommandOutput) => void
  ): void;
  listImportFileTask(
    args: ListImportFileTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportFileTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServersCommand}
   */
  listServers(args: ListServersCommandInput, options?: __HttpHandlerOptions): Promise<ListServersCommandOutput>;
  listServers(args: ListServersCommandInput, cb: (err: any, data?: ListServersCommandOutput) => void): void;
  listServers(
    args: ListServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServersCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPortfolioPreferencesCommand}
   */
  putPortfolioPreferences(
    args: PutPortfolioPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPortfolioPreferencesCommandOutput>;
  putPortfolioPreferences(
    args: PutPortfolioPreferencesCommandInput,
    cb: (err: any, data?: PutPortfolioPreferencesCommandOutput) => void
  ): void;
  putPortfolioPreferences(
    args: PutPortfolioPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPortfolioPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAssessmentCommand}
   */
  startAssessment(
    args: StartAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAssessmentCommandOutput>;
  startAssessment(args: StartAssessmentCommandInput, cb: (err: any, data?: StartAssessmentCommandOutput) => void): void;
  startAssessment(
    args: StartAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportFileTaskCommand}
   */
  startImportFileTask(
    args: StartImportFileTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportFileTaskCommandOutput>;
  startImportFileTask(
    args: StartImportFileTaskCommandInput,
    cb: (err: any, data?: StartImportFileTaskCommandOutput) => void
  ): void;
  startImportFileTask(
    args: StartImportFileTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportFileTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRecommendationReportGenerationCommand}
   */
  startRecommendationReportGeneration(
    args: StartRecommendationReportGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRecommendationReportGenerationCommandOutput>;
  startRecommendationReportGeneration(
    args: StartRecommendationReportGenerationCommandInput,
    cb: (err: any, data?: StartRecommendationReportGenerationCommandOutput) => void
  ): void;
  startRecommendationReportGeneration(
    args: StartRecommendationReportGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRecommendationReportGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopAssessmentCommand}
   */
  stopAssessment(
    args: StopAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAssessmentCommandOutput>;
  stopAssessment(args: StopAssessmentCommandInput, cb: (err: any, data?: StopAssessmentCommandOutput) => void): void;
  stopAssessment(
    args: StopAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationComponentConfigCommand}
   */
  updateApplicationComponentConfig(
    args: UpdateApplicationComponentConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationComponentConfigCommandOutput>;
  updateApplicationComponentConfig(
    args: UpdateApplicationComponentConfigCommandInput,
    cb: (err: any, data?: UpdateApplicationComponentConfigCommandOutput) => void
  ): void;
  updateApplicationComponentConfig(
    args: UpdateApplicationComponentConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationComponentConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServerConfigCommand}
   */
  updateServerConfig(
    args: UpdateServerConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServerConfigCommandOutput>;
  updateServerConfig(
    args: UpdateServerConfigCommandInput,
    cb: (err: any, data?: UpdateServerConfigCommandOutput) => void
  ): void;
  updateServerConfig(
    args: UpdateServerConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServerConfigCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Migration Hub Strategy Recommendations</fullname>
 *          <p>This API reference provides descriptions, syntax, and other details about each of the
 *       actions and data types for Migration Hub Strategy Recommendations (Strategy Recommendations). The topic for each action shows the API
 *       request parameters and the response. Alternatively, you can use one of the AWS SDKs to
 *       access an API that is tailored to the programming language or platform that you're using. For
 *       more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p>
 */
export class MigrationHubStrategy extends MigrationHubStrategyClient implements MigrationHubStrategy {}
createAggregatedClient(commands, MigrationHubStrategy);
