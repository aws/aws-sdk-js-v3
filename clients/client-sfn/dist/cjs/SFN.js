"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SFNClient_1 = require("./SFNClient");
const CreateActivityCommand_1 = require("./commands/CreateActivityCommand");
const CreateStateMachineCommand_1 = require("./commands/CreateStateMachineCommand");
const DeleteActivityCommand_1 = require("./commands/DeleteActivityCommand");
const DeleteStateMachineCommand_1 = require("./commands/DeleteStateMachineCommand");
const DescribeActivityCommand_1 = require("./commands/DescribeActivityCommand");
const DescribeExecutionCommand_1 = require("./commands/DescribeExecutionCommand");
const DescribeStateMachineCommand_1 = require("./commands/DescribeStateMachineCommand");
const DescribeStateMachineForExecutionCommand_1 = require("./commands/DescribeStateMachineForExecutionCommand");
const GetActivityTaskCommand_1 = require("./commands/GetActivityTaskCommand");
const GetExecutionHistoryCommand_1 = require("./commands/GetExecutionHistoryCommand");
const ListActivitiesCommand_1 = require("./commands/ListActivitiesCommand");
const ListExecutionsCommand_1 = require("./commands/ListExecutionsCommand");
const ListStateMachinesCommand_1 = require("./commands/ListStateMachinesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const SendTaskFailureCommand_1 = require("./commands/SendTaskFailureCommand");
const SendTaskHeartbeatCommand_1 = require("./commands/SendTaskHeartbeatCommand");
const SendTaskSuccessCommand_1 = require("./commands/SendTaskSuccessCommand");
const StartExecutionCommand_1 = require("./commands/StartExecutionCommand");
const StopExecutionCommand_1 = require("./commands/StopExecutionCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateStateMachineCommand_1 = require("./commands/UpdateStateMachineCommand");
/**
 * <fullname>AWS Step Functions</fullname>
 *          <p>AWS Step Functions is a service that lets you coordinate the components of distributed applications
 *       and microservices using visual workflows.</p>
 *          <p>You can use Step Functions to build applications from individual components, each of which performs
 *       a discrete function, or <i>task</i>, allowing you to scale and change
 *       applications quickly. Step Functions provides a console that helps visualize the components of your
 *       application as a series of steps. Step Functions automatically triggers and tracks each step, and
 *       retries steps when there are errors, so your application executes predictably and in the right
 *       order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any
 *       issues.</p>
 *          <p>Step Functions manages operations and underlying infrastructure to ensure your application is
 *       available at any scale. You can run tasks on AWS, your own servers, or any system that has
 *       access to AWS. You can access and use Step Functions using the console, the AWS SDKs, or an HTTP API.
 *       For more information about Step Functions, see the <i>
 *                <a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">AWS Step Functions Developer Guide</a>
 *             </i>.</p>
 */
class SFN extends SFNClient_1.SFNClient {
    createActivity(args, optionsOrCb, cb) {
        const command = new CreateActivityCommand_1.CreateActivityCommand(args);
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
    createStateMachine(args, optionsOrCb, cb) {
        const command = new CreateStateMachineCommand_1.CreateStateMachineCommand(args);
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
    deleteActivity(args, optionsOrCb, cb) {
        const command = new DeleteActivityCommand_1.DeleteActivityCommand(args);
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
    deleteStateMachine(args, optionsOrCb, cb) {
        const command = new DeleteStateMachineCommand_1.DeleteStateMachineCommand(args);
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
    describeActivity(args, optionsOrCb, cb) {
        const command = new DescribeActivityCommand_1.DescribeActivityCommand(args);
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
    describeExecution(args, optionsOrCb, cb) {
        const command = new DescribeExecutionCommand_1.DescribeExecutionCommand(args);
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
    describeStateMachine(args, optionsOrCb, cb) {
        const command = new DescribeStateMachineCommand_1.DescribeStateMachineCommand(args);
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
    describeStateMachineForExecution(args, optionsOrCb, cb) {
        const command = new DescribeStateMachineForExecutionCommand_1.DescribeStateMachineForExecutionCommand(args);
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
    getActivityTask(args, optionsOrCb, cb) {
        const command = new GetActivityTaskCommand_1.GetActivityTaskCommand(args);
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
    getExecutionHistory(args, optionsOrCb, cb) {
        const command = new GetExecutionHistoryCommand_1.GetExecutionHistoryCommand(args);
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
    listActivities(args, optionsOrCb, cb) {
        const command = new ListActivitiesCommand_1.ListActivitiesCommand(args);
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
    listExecutions(args, optionsOrCb, cb) {
        const command = new ListExecutionsCommand_1.ListExecutionsCommand(args);
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
    listStateMachines(args, optionsOrCb, cb) {
        const command = new ListStateMachinesCommand_1.ListStateMachinesCommand(args);
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
    sendTaskFailure(args, optionsOrCb, cb) {
        const command = new SendTaskFailureCommand_1.SendTaskFailureCommand(args);
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
    sendTaskHeartbeat(args, optionsOrCb, cb) {
        const command = new SendTaskHeartbeatCommand_1.SendTaskHeartbeatCommand(args);
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
    sendTaskSuccess(args, optionsOrCb, cb) {
        const command = new SendTaskSuccessCommand_1.SendTaskSuccessCommand(args);
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
    startExecution(args, optionsOrCb, cb) {
        const command = new StartExecutionCommand_1.StartExecutionCommand(args);
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
    stopExecution(args, optionsOrCb, cb) {
        const command = new StopExecutionCommand_1.StopExecutionCommand(args);
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
    updateStateMachine(args, optionsOrCb, cb) {
        const command = new UpdateStateMachineCommand_1.UpdateStateMachineCommand(args);
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
exports.SFN = SFN;
//# sourceMappingURL=SFN.js.map