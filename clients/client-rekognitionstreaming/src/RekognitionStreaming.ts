// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  StartFaceLivenessSessionCommand,
  StartFaceLivenessSessionCommandInput,
  StartFaceLivenessSessionCommandOutput,
} from "./commands/StartFaceLivenessSessionCommand";
import { RekognitionStreamingClient } from "./RekognitionStreamingClient";

/**
 * @public
 */
export class RekognitionStreaming extends RekognitionStreamingClient {
  /**
   * @public
   */
  public startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFaceLivenessSessionCommandOutput>;
  public startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    cb: (err: any, data?: StartFaceLivenessSessionCommandOutput) => void
  ): void;
  public startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFaceLivenessSessionCommandOutput) => void
  ): void;
  public startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFaceLivenessSessionCommandOutput) => void),
    cb?: (err: any, data?: StartFaceLivenessSessionCommandOutput) => void
  ): Promise<StartFaceLivenessSessionCommandOutput> | void {
    const command = new StartFaceLivenessSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
