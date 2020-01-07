"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CodeGuruProfilerClient_1 = require("./CodeGuruProfilerClient");
const ConfigureAgentCommand_1 = require("./commands/ConfigureAgentCommand");
const CreateProfilingGroupCommand_1 = require("./commands/CreateProfilingGroupCommand");
const DeleteProfilingGroupCommand_1 = require("./commands/DeleteProfilingGroupCommand");
const DescribeProfilingGroupCommand_1 = require("./commands/DescribeProfilingGroupCommand");
const GetProfileCommand_1 = require("./commands/GetProfileCommand");
const ListProfileTimesCommand_1 = require("./commands/ListProfileTimesCommand");
const ListProfilingGroupsCommand_1 = require("./commands/ListProfilingGroupsCommand");
const PostAgentProfileCommand_1 = require("./commands/PostAgentProfileCommand");
const UpdateProfilingGroupCommand_1 = require("./commands/UpdateProfilingGroupCommand");
/**
 * <p>Example service documentation.</p>
 */
class CodeGuruProfiler extends CodeGuruProfilerClient_1.CodeGuruProfilerClient {
    configureAgent(args, optionsOrCb, cb) {
        const command = new ConfigureAgentCommand_1.ConfigureAgentCommand(args);
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
    createProfilingGroup(args, optionsOrCb, cb) {
        const command = new CreateProfilingGroupCommand_1.CreateProfilingGroupCommand(args);
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
    deleteProfilingGroup(args, optionsOrCb, cb) {
        const command = new DeleteProfilingGroupCommand_1.DeleteProfilingGroupCommand(args);
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
    describeProfilingGroup(args, optionsOrCb, cb) {
        const command = new DescribeProfilingGroupCommand_1.DescribeProfilingGroupCommand(args);
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
    listProfilingGroups(args, optionsOrCb, cb) {
        const command = new ListProfilingGroupsCommand_1.ListProfilingGroupsCommand(args);
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
    updateProfilingGroup(args, optionsOrCb, cb) {
        const command = new UpdateProfilingGroupCommand_1.UpdateProfilingGroupCommand(args);
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
    getProfile(args, optionsOrCb, cb) {
        const command = new GetProfileCommand_1.GetProfileCommand(args);
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
    listProfileTimes(args, optionsOrCb, cb) {
        const command = new ListProfileTimesCommand_1.ListProfileTimesCommand(args);
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
    postAgentProfile(args, optionsOrCb, cb) {
        const command = new PostAgentProfileCommand_1.PostAgentProfileCommand(args);
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
exports.CodeGuruProfiler = CodeGuruProfiler;
//# sourceMappingURL=CodeGuruProfiler.js.map