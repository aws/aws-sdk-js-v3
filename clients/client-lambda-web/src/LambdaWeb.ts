// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type GetWebAccountSettingsCommandInput,
  type GetWebAccountSettingsCommandOutput,
  GetWebAccountSettingsCommand,
} from "./commands/GetWebAccountSettingsCommand";
import { LambdaWebClient } from "./LambdaWebClient";

const commands = {
  GetWebAccountSettingsCommand,
};

/**
 * @public
 */
export interface LambdaWebRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface LambdaWeb {
  /**
   * @see {@link GetWebAccountSettingsCommand}
   */
  getWebAccountSettings(): Promise<GetWebAccountSettingsCommandOutput>;
  getWebAccountSettings(
    args: GetWebAccountSettingsCommandInput,
    options?: LambdaWebRequestOptions
  ): Promise<GetWebAccountSettingsCommandOutput>;
  getWebAccountSettings(
    args: GetWebAccountSettingsCommandInput,
    cb: (err: any, data?: GetWebAccountSettingsCommandOutput) => void
  ): void;
  getWebAccountSettings(
    args: GetWebAccountSettingsCommandInput,
    options: LambdaWebRequestOptions,
    cb: (err: any, data?: GetWebAccountSettingsCommandOutput) => void
  ): void;
}

/**
 * <note> <p>The AWS Lambda Web Functions APIs (<code>LambdaWeb</code> namespace) are experimental and for internal AWS use only. They are not yet available to external customers.</p> </note>
 * @public
 */
export class LambdaWeb extends LambdaWebClient implements LambdaWeb {}
createAggregatedClient(commands, LambdaWeb);
