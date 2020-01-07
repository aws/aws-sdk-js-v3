"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EC2InstanceConnectClient_1 = require("./EC2InstanceConnectClient");
const SendSSHPublicKeyCommand_1 = require("./commands/SendSSHPublicKeyCommand");
/**
 * <p>AWS EC2 Connect Service is a service that enables system administrators to publish
 *             temporary SSH keys to their EC2 instances in order to establish connections to their
 *             instances without leaving a permanent authentication option.</p>
 */
class EC2InstanceConnect extends EC2InstanceConnectClient_1.EC2InstanceConnectClient {
    sendSSHPublicKey(args, optionsOrCb, cb) {
        const command = new SendSSHPublicKeyCommand_1.SendSSHPublicKeyCommand(args);
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
exports.EC2InstanceConnect = EC2InstanceConnect;
//# sourceMappingURL=EC2InstanceConnect.js.map