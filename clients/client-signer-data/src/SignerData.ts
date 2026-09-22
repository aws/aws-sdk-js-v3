// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type GetRevocationStatusCommandInput,
  type GetRevocationStatusCommandOutput,
  GetRevocationStatusCommand,
} from "./commands/GetRevocationStatusCommand";
import { SignerDataClient } from "./SignerDataClient";

const commands = {
  GetRevocationStatusCommand,
};

/**
 * @public
 */
export interface SignerDataRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SignerData {
  /**
   * @see {@link GetRevocationStatusCommand}
   */
  getRevocationStatus(
    args: GetRevocationStatusCommandInput,
    options?: SignerDataRequestOptions
  ): Promise<GetRevocationStatusCommandOutput>;
  getRevocationStatus(
    args: GetRevocationStatusCommandInput,
    cb: (err: any, data?: GetRevocationStatusCommandOutput) => void
  ): void;
  getRevocationStatus(
    args: GetRevocationStatusCommandInput,
    options: SignerDataRequestOptions,
    cb: (err: any, data?: GetRevocationStatusCommandOutput) => void
  ): void;
}

/**
 * <p>AWS Signer Data Plane service provides APIs for checking revocation status of signed artifacts.</p>
 * @public
 */
export class SignerData extends SignerDataClient implements SignerData {}
createAggregatedClient(commands, SignerData);
