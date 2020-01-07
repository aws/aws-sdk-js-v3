"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LakeFormationClient_1 = require("./LakeFormationClient");
const BatchGrantPermissionsCommand_1 = require("./commands/BatchGrantPermissionsCommand");
const BatchRevokePermissionsCommand_1 = require("./commands/BatchRevokePermissionsCommand");
const DeregisterResourceCommand_1 = require("./commands/DeregisterResourceCommand");
const DescribeResourceCommand_1 = require("./commands/DescribeResourceCommand");
const GetDataLakeSettingsCommand_1 = require("./commands/GetDataLakeSettingsCommand");
const GetEffectivePermissionsForPathCommand_1 = require("./commands/GetEffectivePermissionsForPathCommand");
const GrantPermissionsCommand_1 = require("./commands/GrantPermissionsCommand");
const ListPermissionsCommand_1 = require("./commands/ListPermissionsCommand");
const ListResourcesCommand_1 = require("./commands/ListResourcesCommand");
const PutDataLakeSettingsCommand_1 = require("./commands/PutDataLakeSettingsCommand");
const RegisterResourceCommand_1 = require("./commands/RegisterResourceCommand");
const RevokePermissionsCommand_1 = require("./commands/RevokePermissionsCommand");
const UpdateResourceCommand_1 = require("./commands/UpdateResourceCommand");
/**
 * <fullname>AWS Lake Formation</fullname>
 *          <p>Defines the public endpoint for the AWS Lake Formation service.</p>
 */
class LakeFormation extends LakeFormationClient_1.LakeFormationClient {
    batchGrantPermissions(args, optionsOrCb, cb) {
        const command = new BatchGrantPermissionsCommand_1.BatchGrantPermissionsCommand(args);
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
    batchRevokePermissions(args, optionsOrCb, cb) {
        const command = new BatchRevokePermissionsCommand_1.BatchRevokePermissionsCommand(args);
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
    deregisterResource(args, optionsOrCb, cb) {
        const command = new DeregisterResourceCommand_1.DeregisterResourceCommand(args);
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
    describeResource(args, optionsOrCb, cb) {
        const command = new DescribeResourceCommand_1.DescribeResourceCommand(args);
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
    getDataLakeSettings(args, optionsOrCb, cb) {
        const command = new GetDataLakeSettingsCommand_1.GetDataLakeSettingsCommand(args);
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
    getEffectivePermissionsForPath(args, optionsOrCb, cb) {
        const command = new GetEffectivePermissionsForPathCommand_1.GetEffectivePermissionsForPathCommand(args);
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
    grantPermissions(args, optionsOrCb, cb) {
        const command = new GrantPermissionsCommand_1.GrantPermissionsCommand(args);
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
    listPermissions(args, optionsOrCb, cb) {
        const command = new ListPermissionsCommand_1.ListPermissionsCommand(args);
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
    listResources(args, optionsOrCb, cb) {
        const command = new ListResourcesCommand_1.ListResourcesCommand(args);
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
    putDataLakeSettings(args, optionsOrCb, cb) {
        const command = new PutDataLakeSettingsCommand_1.PutDataLakeSettingsCommand(args);
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
    registerResource(args, optionsOrCb, cb) {
        const command = new RegisterResourceCommand_1.RegisterResourceCommand(args);
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
    revokePermissions(args, optionsOrCb, cb) {
        const command = new RevokePermissionsCommand_1.RevokePermissionsCommand(args);
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
    updateResource(args, optionsOrCb, cb) {
        const command = new UpdateResourceCommand_1.UpdateResourceCommand(args);
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
exports.LakeFormation = LakeFormation;
//# sourceMappingURL=LakeFormation.js.map