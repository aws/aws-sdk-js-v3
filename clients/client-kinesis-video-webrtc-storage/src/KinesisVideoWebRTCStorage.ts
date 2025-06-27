// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  JoinStorageSessionAsViewerCommand,
  JoinStorageSessionAsViewerCommandInput,
  JoinStorageSessionAsViewerCommandOutput,
} from "./commands/JoinStorageSessionAsViewerCommand";
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
  JoinStorageSessionAsViewerCommand,
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

  /**
   * @see {@link JoinStorageSessionAsViewerCommand}
   */
  joinStorageSessionAsViewer(
    args: JoinStorageSessionAsViewerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<JoinStorageSessionAsViewerCommandOutput>;
  joinStorageSessionAsViewer(
    args: JoinStorageSessionAsViewerCommandInput,
    cb: (err: any, data?: JoinStorageSessionAsViewerCommandOutput) => void
  ): void;
  joinStorageSessionAsViewer(
    args: JoinStorageSessionAsViewerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JoinStorageSessionAsViewerCommandOutput) => void
  ): void;
}

/**
 * <fullname>webrtc</fullname>
 *          <p>
 *     </p>
 * @public
 */
export class KinesisVideoWebRTCStorage extends KinesisVideoWebRTCStorageClient implements KinesisVideoWebRTCStorage {}
createAggregatedClient(commands, KinesisVideoWebRTCStorage);
