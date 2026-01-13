// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  GenerateDataSetCommand,
  GenerateDataSetCommandInput,
  GenerateDataSetCommandOutput,
} from "./commands/GenerateDataSetCommand";
import {
  StartSupportDataExportCommand,
  StartSupportDataExportCommandInput,
  StartSupportDataExportCommandOutput,
} from "./commands/StartSupportDataExportCommand";
import { MarketplaceCommerceAnalyticsClient } from "./MarketplaceCommerceAnalyticsClient";

const commands = {
  GenerateDataSetCommand,
  StartSupportDataExportCommand,
};

export interface MarketplaceCommerceAnalytics {
  /**
   * @see {@link GenerateDataSetCommand}
   */
  generateDataSet(
    args: GenerateDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateDataSetCommandOutput>;
  generateDataSet(
    args: GenerateDataSetCommandInput,
    cb: (err: any, data?: GenerateDataSetCommandOutput) => void
  ): void;
  generateDataSet(
    args: GenerateDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSupportDataExportCommand}
   */
  startSupportDataExport(
    args: StartSupportDataExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSupportDataExportCommandOutput>;
  startSupportDataExport(
    args: StartSupportDataExportCommandInput,
    cb: (err: any, data?: StartSupportDataExportCommandOutput) => void
  ): void;
  startSupportDataExport(
    args: StartSupportDataExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSupportDataExportCommandOutput) => void
  ): void;
}

/**
 * Provides AWS Marketplace business intelligence data on-demand.
 * @public
 */
export class MarketplaceCommerceAnalytics extends MarketplaceCommerceAnalyticsClient implements MarketplaceCommerceAnalytics {}
createAggregatedClient(commands, MarketplaceCommerceAnalytics);
