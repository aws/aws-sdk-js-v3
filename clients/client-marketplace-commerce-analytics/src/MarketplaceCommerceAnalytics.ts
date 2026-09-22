// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type GenerateDataSetCommandInput,
  type GenerateDataSetCommandOutput,
  GenerateDataSetCommand,
} from "./commands/GenerateDataSetCommand";
import {
  type StartSupportDataExportCommandInput,
  type StartSupportDataExportCommandOutput,
  StartSupportDataExportCommand,
} from "./commands/StartSupportDataExportCommand";
import { MarketplaceCommerceAnalyticsClient } from "./MarketplaceCommerceAnalyticsClient";

const commands = {
  GenerateDataSetCommand,
  StartSupportDataExportCommand,
};

/**
 * @public
 */
export interface MarketplaceCommerceAnalyticsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MarketplaceCommerceAnalytics {
  /**
   * @see {@link GenerateDataSetCommand}
   */
  generateDataSet(
    args: GenerateDataSetCommandInput,
    options?: MarketplaceCommerceAnalyticsRequestOptions
  ): Promise<GenerateDataSetCommandOutput>;
  generateDataSet(
    args: GenerateDataSetCommandInput,
    cb: (err: any, data?: GenerateDataSetCommandOutput) => void
  ): void;
  generateDataSet(
    args: GenerateDataSetCommandInput,
    options: MarketplaceCommerceAnalyticsRequestOptions,
    cb: (err: any, data?: GenerateDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSupportDataExportCommand}
   */
  startSupportDataExport(
    args: StartSupportDataExportCommandInput,
    options?: MarketplaceCommerceAnalyticsRequestOptions
  ): Promise<StartSupportDataExportCommandOutput>;
  startSupportDataExport(
    args: StartSupportDataExportCommandInput,
    cb: (err: any, data?: StartSupportDataExportCommandOutput) => void
  ): void;
  startSupportDataExport(
    args: StartSupportDataExportCommandInput,
    options: MarketplaceCommerceAnalyticsRequestOptions,
    cb: (err: any, data?: StartSupportDataExportCommandOutput) => void
  ): void;
}

/**
 * Provides AWS Marketplace business intelligence data on-demand.
 * @public
 */
export class MarketplaceCommerceAnalytics extends MarketplaceCommerceAnalyticsClient implements MarketplaceCommerceAnalytics {}
createAggregatedClient(commands, MarketplaceCommerceAnalytics);
