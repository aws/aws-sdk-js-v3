// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import { type ScanSbomCommandInput, type ScanSbomCommandOutput, ScanSbomCommand } from "./commands/ScanSbomCommand";
import { InspectorScanClient } from "./InspectorScanClient";

const commands = {
  ScanSbomCommand,
};

/**
 * @public
 */
export interface InspectorScanRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface InspectorScan {
  /**
   * @see {@link ScanSbomCommand}
   */
  scanSbom(
    args: ScanSbomCommandInput,
    options?: InspectorScanRequestOptions
  ): Promise<ScanSbomCommandOutput>;
  scanSbom(
    args: ScanSbomCommandInput,
    cb: (err: any, data?: ScanSbomCommandOutput) => void
  ): void;
  scanSbom(
    args: ScanSbomCommandInput,
    options: InspectorScanRequestOptions,
    cb: (err: any, data?: ScanSbomCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Inspector Scan is a vulnerability discovery service that scans a provided Software Bill of Materials (SBOM) for security vulnerabilities.</p>
 * @public
 */
export class InspectorScan extends InspectorScanClient implements InspectorScan {}
createAggregatedClient(commands, InspectorScan);
