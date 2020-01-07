"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KinesisVideoSignalingClient_1 = require("./KinesisVideoSignalingClient");
const GetIceServerConfigCommand_1 = require("./commands/GetIceServerConfigCommand");
const SendAlexaOfferToMasterCommand_1 = require("./commands/SendAlexaOfferToMasterCommand");
/**
 * <p>Kinesis Video Streams Signaling Service is a intermediate service that establishes a
 *             communication channel for discovering peers, transmitting offers and answers in order to
 *             establish peer-to-peer connection in webRTC technology.</p>
 */
class KinesisVideoSignaling extends KinesisVideoSignalingClient_1.KinesisVideoSignalingClient {
    getIceServerConfig(args, optionsOrCb, cb) {
        const command = new GetIceServerConfigCommand_1.GetIceServerConfigCommand(args);
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
    sendAlexaOfferToMaster(args, optionsOrCb, cb) {
        const command = new SendAlexaOfferToMasterCommand_1.SendAlexaOfferToMasterCommand(args);
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
exports.KinesisVideoSignaling = KinesisVideoSignaling;
//# sourceMappingURL=KinesisVideoSignaling.js.map