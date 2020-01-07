import { QLDBSessionClient } from "./QLDBSessionClient";
import { SendCommandCommandInput, SendCommandCommandOutput } from "./commands/SendCommandCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The transactional data APIs for Amazon QLDB</p>
 */
export declare class QLDBSession extends QLDBSessionClient {
    /**
     * <p>Sends a command to an Amazon QLDB ledger.</p>
     */
    sendCommand(args: SendCommandCommandInput, options?: __HttpHandlerOptions): Promise<SendCommandCommandOutput>;
    sendCommand(args: SendCommandCommandInput, cb: (err: any, data?: SendCommandCommandOutput) => void): void;
    sendCommand(args: SendCommandCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendCommandCommandOutput) => void): void;
}
