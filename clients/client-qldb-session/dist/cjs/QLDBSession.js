"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QLDBSessionClient_1 = require("./QLDBSessionClient");
const SendCommandCommand_1 = require("./commands/SendCommandCommand");
/**
 * <p>The transactional data APIs for Amazon QLDB</p>
 */
class QLDBSession extends QLDBSessionClient_1.QLDBSessionClient {
    sendCommand(args, optionsOrCb, cb) {
        const command = new SendCommandCommand_1.SendCommandCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.QLDBSession = QLDBSession;
//# sourceMappingURL=QLDBSession.js.map