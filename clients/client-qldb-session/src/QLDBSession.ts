// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { SendCommandCommand, SendCommandCommandInput, SendCommandCommandOutput } from "./commands/SendCommandCommand";
import { QLDBSessionClient } from "./QLDBSessionClient";

/**
 * <p>The transactional data APIs for Amazon QLDB</p>
 *          <note>
 *             <p>Instead of interacting directly with this API, we recommend using the QLDB driver
 *             or the QLDB shell to execute data transactions on a ledger.</p>
 *             <ul>
 *                <li>
 *                   <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides
 *                   a high-level abstraction layer above this <i>QLDB Session</i> data
 *                   plane and manages <code>SendCommand</code> API calls for you. For information and
 *                   a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started
 *                      with the driver</a> in the <i>Amazon QLDB Developer
 *                   Guide</i>.</p>
 *                </li>
 *                <li>
 *                   <p>If you are working with the AWS Command Line Interface (AWS CLI), use the
 *                   QLDB shell. The shell is a command line interface that uses the QLDB driver to
 *                   interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the
 *                      QLDB shell</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export class QLDBSession extends QLDBSessionClient {
  /**
   * <p>Sends a command to an Amazon QLDB ledger.</p>
   *          <note>
   *             <p>Instead of interacting directly with this API, we recommend using the QLDB driver
   *             or the QLDB shell to execute data transactions on a ledger.</p>
   *             <ul>
   *                <li>
   *                   <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides
   *                   a high-level abstraction layer above this <i>QLDB Session</i> data
   *                   plane and manages <code>SendCommand</code> API calls for you. For information and
   *                   a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started
   *                      with the driver</a> in the <i>Amazon QLDB Developer
   *                   Guide</i>.</p>
   *                </li>
   *                <li>
   *                   <p>If you are working with the AWS Command Line Interface (AWS CLI), use the
   *                   QLDB shell. The shell is a command line interface that uses the QLDB driver to
   *                   interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the
   *                      QLDB shell</a>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public sendCommand(args: SendCommandCommandInput, options?: __HttpHandlerOptions): Promise<SendCommandCommandOutput>;
  public sendCommand(args: SendCommandCommandInput, cb: (err: any, data?: SendCommandCommandOutput) => void): void;
  public sendCommand(
    args: SendCommandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendCommandCommandOutput) => void
  ): void;
  public sendCommand(
    args: SendCommandCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendCommandCommandOutput) => void),
    cb?: (err: any, data?: SendCommandCommandOutput) => void
  ): Promise<SendCommandCommandOutput> | void {
    const command = new SendCommandCommand(args);
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
