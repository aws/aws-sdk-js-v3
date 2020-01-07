"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LicenseManagerClient_1 = require("./LicenseManagerClient");
const CreateLicenseConfigurationCommand_1 = require("./commands/CreateLicenseConfigurationCommand");
const DeleteLicenseConfigurationCommand_1 = require("./commands/DeleteLicenseConfigurationCommand");
const GetLicenseConfigurationCommand_1 = require("./commands/GetLicenseConfigurationCommand");
const GetServiceSettingsCommand_1 = require("./commands/GetServiceSettingsCommand");
const ListAssociationsForLicenseConfigurationCommand_1 = require("./commands/ListAssociationsForLicenseConfigurationCommand");
const ListFailuresForLicenseConfigurationOperationsCommand_1 = require("./commands/ListFailuresForLicenseConfigurationOperationsCommand");
const ListLicenseConfigurationsCommand_1 = require("./commands/ListLicenseConfigurationsCommand");
const ListLicenseSpecificationsForResourceCommand_1 = require("./commands/ListLicenseSpecificationsForResourceCommand");
const ListResourceInventoryCommand_1 = require("./commands/ListResourceInventoryCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListUsageForLicenseConfigurationCommand_1 = require("./commands/ListUsageForLicenseConfigurationCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateLicenseConfigurationCommand_1 = require("./commands/UpdateLicenseConfigurationCommand");
const UpdateLicenseSpecificationsForResourceCommand_1 = require("./commands/UpdateLicenseSpecificationsForResourceCommand");
const UpdateServiceSettingsCommand_1 = require("./commands/UpdateServiceSettingsCommand");
/**
 * <fullname> AWS License Manager </fullname>
 *          <p>AWS License Manager makes it easier to manage licenses from software vendors across multiple
 *          AWS accounts and on-premises servers.</p>
 */
class LicenseManager extends LicenseManagerClient_1.LicenseManagerClient {
    createLicenseConfiguration(args, optionsOrCb, cb) {
        const command = new CreateLicenseConfigurationCommand_1.CreateLicenseConfigurationCommand(args);
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
    deleteLicenseConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteLicenseConfigurationCommand_1.DeleteLicenseConfigurationCommand(args);
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
    getLicenseConfiguration(args, optionsOrCb, cb) {
        const command = new GetLicenseConfigurationCommand_1.GetLicenseConfigurationCommand(args);
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
    getServiceSettings(args, optionsOrCb, cb) {
        const command = new GetServiceSettingsCommand_1.GetServiceSettingsCommand(args);
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
    listAssociationsForLicenseConfiguration(args, optionsOrCb, cb) {
        const command = new ListAssociationsForLicenseConfigurationCommand_1.ListAssociationsForLicenseConfigurationCommand(args);
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
    listFailuresForLicenseConfigurationOperations(args, optionsOrCb, cb) {
        const command = new ListFailuresForLicenseConfigurationOperationsCommand_1.ListFailuresForLicenseConfigurationOperationsCommand(args);
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
    listLicenseConfigurations(args, optionsOrCb, cb) {
        const command = new ListLicenseConfigurationsCommand_1.ListLicenseConfigurationsCommand(args);
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
    listLicenseSpecificationsForResource(args, optionsOrCb, cb) {
        const command = new ListLicenseSpecificationsForResourceCommand_1.ListLicenseSpecificationsForResourceCommand(args);
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
    listResourceInventory(args, optionsOrCb, cb) {
        const command = new ListResourceInventoryCommand_1.ListResourceInventoryCommand(args);
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
    listUsageForLicenseConfiguration(args, optionsOrCb, cb) {
        const command = new ListUsageForLicenseConfigurationCommand_1.ListUsageForLicenseConfigurationCommand(args);
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
    updateLicenseConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateLicenseConfigurationCommand_1.UpdateLicenseConfigurationCommand(args);
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
    updateLicenseSpecificationsForResource(args, optionsOrCb, cb) {
        const command = new UpdateLicenseSpecificationsForResourceCommand_1.UpdateLicenseSpecificationsForResourceCommand(args);
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
    updateServiceSettings(args, optionsOrCb, cb) {
        const command = new UpdateServiceSettingsCommand_1.UpdateServiceSettingsCommand(args);
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
exports.LicenseManager = LicenseManager;
//# sourceMappingURL=LicenseManager.js.map