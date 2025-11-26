// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  GetPreferencesCommand,
  GetPreferencesCommandInput,
  GetPreferencesCommandOutput,
} from "./commands/GetPreferencesCommand";
import {
  GetRecommendationCommand,
  GetRecommendationCommandInput,
  GetRecommendationCommandOutput,
} from "./commands/GetRecommendationCommand";
import {
  ListEfficiencyMetricsCommand,
  ListEfficiencyMetricsCommandInput,
  ListEfficiencyMetricsCommandOutput,
} from "./commands/ListEfficiencyMetricsCommand";
import {
  ListEnrollmentStatusesCommand,
  ListEnrollmentStatusesCommandInput,
  ListEnrollmentStatusesCommandOutput,
} from "./commands/ListEnrollmentStatusesCommand";
import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import {
  ListRecommendationSummariesCommand,
  ListRecommendationSummariesCommandInput,
  ListRecommendationSummariesCommandOutput,
} from "./commands/ListRecommendationSummariesCommand";
import {
  UpdateEnrollmentStatusCommand,
  UpdateEnrollmentStatusCommandInput,
  UpdateEnrollmentStatusCommandOutput,
} from "./commands/UpdateEnrollmentStatusCommand";
import {
  UpdatePreferencesCommand,
  UpdatePreferencesCommandInput,
  UpdatePreferencesCommandOutput,
} from "./commands/UpdatePreferencesCommand";
import { CostOptimizationHubClient } from "./CostOptimizationHubClient";

const commands = {
  GetPreferencesCommand,
  GetRecommendationCommand,
  ListEfficiencyMetricsCommand,
  ListEnrollmentStatusesCommand,
  ListRecommendationsCommand,
  ListRecommendationSummariesCommand,
  UpdateEnrollmentStatusCommand,
  UpdatePreferencesCommand,
};

export interface CostOptimizationHub {
  /**
   * @see {@link GetPreferencesCommand}
   */
  getPreferences(): Promise<GetPreferencesCommandOutput>;
  getPreferences(
    args: GetPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPreferencesCommandOutput>;
  getPreferences(args: GetPreferencesCommandInput, cb: (err: any, data?: GetPreferencesCommandOutput) => void): void;
  getPreferences(
    args: GetPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationCommand}
   */
  getRecommendation(
    args: GetRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationCommandOutput>;
  getRecommendation(
    args: GetRecommendationCommandInput,
    cb: (err: any, data?: GetRecommendationCommandOutput) => void
  ): void;
  getRecommendation(
    args: GetRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEfficiencyMetricsCommand}
   */
  listEfficiencyMetrics(
    args: ListEfficiencyMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEfficiencyMetricsCommandOutput>;
  listEfficiencyMetrics(
    args: ListEfficiencyMetricsCommandInput,
    cb: (err: any, data?: ListEfficiencyMetricsCommandOutput) => void
  ): void;
  listEfficiencyMetrics(
    args: ListEfficiencyMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEfficiencyMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnrollmentStatusesCommand}
   */
  listEnrollmentStatuses(): Promise<ListEnrollmentStatusesCommandOutput>;
  listEnrollmentStatuses(
    args: ListEnrollmentStatusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnrollmentStatusesCommandOutput>;
  listEnrollmentStatuses(
    args: ListEnrollmentStatusesCommandInput,
    cb: (err: any, data?: ListEnrollmentStatusesCommandOutput) => void
  ): void;
  listEnrollmentStatuses(
    args: ListEnrollmentStatusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnrollmentStatusesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationsCommand}
   */
  listRecommendations(): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationSummariesCommand}
   */
  listRecommendationSummaries(
    args: ListRecommendationSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationSummariesCommandOutput>;
  listRecommendationSummaries(
    args: ListRecommendationSummariesCommandInput,
    cb: (err: any, data?: ListRecommendationSummariesCommandOutput) => void
  ): void;
  listRecommendationSummaries(
    args: ListRecommendationSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnrollmentStatusCommand}
   */
  updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnrollmentStatusCommandOutput>;
  updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    cb: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void
  ): void;
  updateEnrollmentStatus(
    args: UpdateEnrollmentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePreferencesCommand}
   */
  updatePreferences(): Promise<UpdatePreferencesCommandOutput>;
  updatePreferences(
    args: UpdatePreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePreferencesCommandOutput>;
  updatePreferences(
    args: UpdatePreferencesCommandInput,
    cb: (err: any, data?: UpdatePreferencesCommandOutput) => void
  ): void;
  updatePreferences(
    args: UpdatePreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePreferencesCommandOutput) => void
  ): void;
}

/**
 * <p>You can use the Cost Optimization Hub API to programmatically identify, filter, aggregate, and quantify savings for your cost optimization recommendations across multiple Amazon Web Services Regions and Amazon Web Services accounts in your organization.</p> <p>The Cost Optimization Hub API provides the following endpoint:</p> <ul> <li> <p> https://cost-optimization-hub.us-east-1.amazonaws.com </p> </li> </ul>
 * @public
 */
export class CostOptimizationHub extends CostOptimizationHubClient implements CostOptimizationHub {}
createAggregatedClient(commands, CostOptimizationHub);
