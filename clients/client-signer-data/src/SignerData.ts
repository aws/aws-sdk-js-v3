// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type GetRevocationStatusCommandInput,
  type GetRevocationStatusCommandOutput,
  GetRevocationStatusCommand,
} from "./commands/GetRevocationStatusCommand";
import { SignerDataClient } from "./SignerDataClient";

const commands = {
  GetRevocationStatusCommand,
};

export interface SignerData {
  /**
   * @see {@link GetRevocationStatusCommand}
   */
  getRevocationStatus(
    args: GetRevocationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRevocationStatusCommandOutput>;
  getRevocationStatus(
    args: GetRevocationStatusCommandInput,
    cb: (err: any, data?: GetRevocationStatusCommandOutput) => void
  ): void;
  getRevocationStatus(
    args: GetRevocationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRevocationStatusCommandOutput) => void
  ): void;
}

/**
 * <p>AWS Signer Data Plane service provides APIs for checking revocation status of signed artifacts.</p>
 * @public
 */
export class SignerData extends SignerDataClient implements SignerData {}
createAggregatedClient(commands, SignerData);
