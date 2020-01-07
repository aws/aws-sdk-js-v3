"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IoTSecureTunnelingClient_1 = require("./IoTSecureTunnelingClient");
const CloseTunnelCommand_1 = require("./commands/CloseTunnelCommand");
const DescribeTunnelCommand_1 = require("./commands/DescribeTunnelCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTunnelsCommand_1 = require("./commands/ListTunnelsCommand");
const OpenTunnelCommand_1 = require("./commands/OpenTunnelCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
/**
 * <fullname>AWS IoT Secure Tunneling</fullname>
 * 		       <p>AWS IoT Secure Tunnling enables you to create remote connections to devices
 * 			deployed in the field.</p>
 * 		       <p>For more information about how AWS IoT Secure Tunneling works, see the <a href="https://docs.aws.amazon.com/secure-tunneling/latest/ug/what-is-secure-tunneling.html">User
 * 			Guide</a>.</p>
 */
class IoTSecureTunneling extends IoTSecureTunnelingClient_1.IoTSecureTunnelingClient {
    closeTunnel(args, optionsOrCb, cb) {
        const command = new CloseTunnelCommand_1.CloseTunnelCommand(args);
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
    describeTunnel(args, optionsOrCb, cb) {
        const command = new DescribeTunnelCommand_1.DescribeTunnelCommand(args);
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
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
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
    listTunnels(args, optionsOrCb, cb) {
        const command = new ListTunnelsCommand_1.ListTunnelsCommand(args);
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
    openTunnel(args, optionsOrCb, cb) {
        const command = new OpenTunnelCommand_1.OpenTunnelCommand(args);
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
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
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
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
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
exports.IoTSecureTunneling = IoTSecureTunneling;
//# sourceMappingURL=IoTSecureTunneling.js.map