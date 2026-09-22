// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type JoinStorageSessionAsViewerCommandInput,
  type JoinStorageSessionAsViewerCommandOutput,
  JoinStorageSessionAsViewerCommand,
} from "./commands/JoinStorageSessionAsViewerCommand";
import {
  type JoinStorageSessionCommandInput,
  type JoinStorageSessionCommandOutput,
  JoinStorageSessionCommand,
} from "./commands/JoinStorageSessionCommand";
import { KinesisVideoWebRTCStorageClient } from "./KinesisVideoWebRTCStorageClient";

const commands = {
  JoinStorageSessionCommand,
  JoinStorageSessionAsViewerCommand,
};

/**
 * @public
 */
export interface KinesisVideoWebRTCStorageRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface KinesisVideoWebRTCStorage {
  /**
   * @see {@link JoinStorageSessionCommand}
   */
  joinStorageSession(
    args: JoinStorageSessionCommandInput,
    options?: KinesisVideoWebRTCStorageRequestOptions
  ): Promise<JoinStorageSessionCommandOutput>;
  joinStorageSession(
    args: JoinStorageSessionCommandInput,
    cb: (err: any, data?: JoinStorageSessionCommandOutput) => void
  ): void;
  joinStorageSession(
    args: JoinStorageSessionCommandInput,
    options: KinesisVideoWebRTCStorageRequestOptions,
    cb: (err: any, data?: JoinStorageSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link JoinStorageSessionAsViewerCommand}
   */
  joinStorageSessionAsViewer(
    args: JoinStorageSessionAsViewerCommandInput,
    options?: KinesisVideoWebRTCStorageRequestOptions
  ): Promise<JoinStorageSessionAsViewerCommandOutput>;
  joinStorageSessionAsViewer(
    args: JoinStorageSessionAsViewerCommandInput,
    cb: (err: any, data?: JoinStorageSessionAsViewerCommandOutput) => void
  ): void;
  joinStorageSessionAsViewer(
    args: JoinStorageSessionAsViewerCommandInput,
    options: KinesisVideoWebRTCStorageRequestOptions,
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
