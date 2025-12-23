// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ScanSbomCommand, ScanSbomCommandInput, ScanSbomCommandOutput } from "./commands/ScanSbomCommand";
import { InspectorScanClient } from "./InspectorScanClient";

const commands = {
  ScanSbomCommand,
};

export interface InspectorScan {
  /**
   * @see {@link ScanSbomCommand}
   */
  scanSbom(
    args: ScanSbomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ScanSbomCommandOutput>;
  scanSbom(
    args: ScanSbomCommandInput,
    cb: (err: any, data?: ScanSbomCommandOutput) => void
  ): void;
  scanSbom(
    args: ScanSbomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ScanSbomCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Inspector Scan is a vulnerability discovery service that scans a provided Software Bill of Materials (SBOM) for security vulnerabilities.</p>
 * @public
 */
export class InspectorScan extends InspectorScanClient implements InspectorScan {}
createAggregatedClient(commands, InspectorScan);
