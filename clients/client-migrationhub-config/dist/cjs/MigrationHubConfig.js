"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MigrationHubConfigClient_1 = require("./MigrationHubConfigClient");
const CreateHomeRegionControlCommand_1 = require("./commands/CreateHomeRegionControlCommand");
const DescribeHomeRegionControlsCommand_1 = require("./commands/DescribeHomeRegionControlsCommand");
const GetHomeRegionCommand_1 = require("./commands/GetHomeRegionCommand");
/**
 * <p>The AWS Migration Hub home region APIs are available specifically for working with your
 *       Migration Hub home region. You can use these APIs to determine a home region, as well as to
 *       create and work with controls that describe the home region.</p>
 *
 *          <p>You can use these APIs within your home region only. If you call these APIs from outside
 *       your home region, your calls are rejected, except for the ability to register your agents and
 *       connectors. </p>
 *
 *          <p> You must call <code>GetHomeRegion</code> at least once before you call any other AWS
 *       Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration
 *       Hub home region.</p>
 *
 *          <p>The <code>StartDataCollection</code> API call in AWS Application Discovery Service allows
 *       your agents and connectors to begin collecting data that flows directly into the home region,
 *       and it will prevent you from enabling data collection information to be sent outside the home
 *       region. </p>
 *
 *          <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region
 *       API reference. </p>
 *
 *          <note>
 *             <p>The Migration Hub Home Region APIs do not support AWS Organizations.</p>
 *          </note>
 */
class MigrationHubConfig extends MigrationHubConfigClient_1.MigrationHubConfigClient {
    createHomeRegionControl(args, optionsOrCb, cb) {
        const command = new CreateHomeRegionControlCommand_1.CreateHomeRegionControlCommand(args);
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
    describeHomeRegionControls(args, optionsOrCb, cb) {
        const command = new DescribeHomeRegionControlsCommand_1.DescribeHomeRegionControlsCommand(args);
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
    getHomeRegion(args, optionsOrCb, cb) {
        const command = new GetHomeRegionCommand_1.GetHomeRegionCommand(args);
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
exports.MigrationHubConfig = MigrationHubConfig;
//# sourceMappingURL=MigrationHubConfig.js.map