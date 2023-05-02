// smithy-typescript generated code
import { createAggregatedClient } from "@aws-sdk/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  JoinStorageSessionCommand,
  JoinStorageSessionCommandInput,
  JoinStorageSessionCommandOutput,
} from "./commands/JoinStorageSessionCommand";
import {
  KinesisVideoWebRTCStorageClient,
  KinesisVideoWebRTCStorageClientConfig,
} from "./KinesisVideoWebRTCStorageClient";

const commands = {
  JoinStorageSessionCommand,
};

export interface KinesisVideoWebRTCStorage {
  /**
   * @see {@link JoinStorageSessionCommand}
   */
  joinStorageSession(
    args: JoinStorageSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<JoinStorageSessionCommandOutput>;
  joinStorageSession(
    args: JoinStorageSessionCommandInput,
    cb: (err: any, data?: JoinStorageSessionCommandOutput) => void
  ): void;
  joinStorageSession(
    args: JoinStorageSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JoinStorageSessionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>
 *     </p>
 */
export class KinesisVideoWebRTCStorage extends KinesisVideoWebRTCStorageClient implements KinesisVideoWebRTCStorage {}
createAggregatedClient(commands, KinesisVideoWebRTCStorage);
