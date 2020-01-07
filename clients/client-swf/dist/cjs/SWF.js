"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SWFClient_1 = require("./SWFClient");
const CountClosedWorkflowExecutionsCommand_1 = require("./commands/CountClosedWorkflowExecutionsCommand");
const CountOpenWorkflowExecutionsCommand_1 = require("./commands/CountOpenWorkflowExecutionsCommand");
const CountPendingActivityTasksCommand_1 = require("./commands/CountPendingActivityTasksCommand");
const CountPendingDecisionTasksCommand_1 = require("./commands/CountPendingDecisionTasksCommand");
const DeprecateActivityTypeCommand_1 = require("./commands/DeprecateActivityTypeCommand");
const DeprecateDomainCommand_1 = require("./commands/DeprecateDomainCommand");
const DeprecateWorkflowTypeCommand_1 = require("./commands/DeprecateWorkflowTypeCommand");
const DescribeActivityTypeCommand_1 = require("./commands/DescribeActivityTypeCommand");
const DescribeDomainCommand_1 = require("./commands/DescribeDomainCommand");
const DescribeWorkflowExecutionCommand_1 = require("./commands/DescribeWorkflowExecutionCommand");
const DescribeWorkflowTypeCommand_1 = require("./commands/DescribeWorkflowTypeCommand");
const GetWorkflowExecutionHistoryCommand_1 = require("./commands/GetWorkflowExecutionHistoryCommand");
const ListActivityTypesCommand_1 = require("./commands/ListActivityTypesCommand");
const ListClosedWorkflowExecutionsCommand_1 = require("./commands/ListClosedWorkflowExecutionsCommand");
const ListDomainsCommand_1 = require("./commands/ListDomainsCommand");
const ListOpenWorkflowExecutionsCommand_1 = require("./commands/ListOpenWorkflowExecutionsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListWorkflowTypesCommand_1 = require("./commands/ListWorkflowTypesCommand");
const PollForActivityTaskCommand_1 = require("./commands/PollForActivityTaskCommand");
const PollForDecisionTaskCommand_1 = require("./commands/PollForDecisionTaskCommand");
const RecordActivityTaskHeartbeatCommand_1 = require("./commands/RecordActivityTaskHeartbeatCommand");
const RegisterActivityTypeCommand_1 = require("./commands/RegisterActivityTypeCommand");
const RegisterDomainCommand_1 = require("./commands/RegisterDomainCommand");
const RegisterWorkflowTypeCommand_1 = require("./commands/RegisterWorkflowTypeCommand");
const RequestCancelWorkflowExecutionCommand_1 = require("./commands/RequestCancelWorkflowExecutionCommand");
const RespondActivityTaskCanceledCommand_1 = require("./commands/RespondActivityTaskCanceledCommand");
const RespondActivityTaskCompletedCommand_1 = require("./commands/RespondActivityTaskCompletedCommand");
const RespondActivityTaskFailedCommand_1 = require("./commands/RespondActivityTaskFailedCommand");
const RespondDecisionTaskCompletedCommand_1 = require("./commands/RespondDecisionTaskCompletedCommand");
const SignalWorkflowExecutionCommand_1 = require("./commands/SignalWorkflowExecutionCommand");
const StartWorkflowExecutionCommand_1 = require("./commands/StartWorkflowExecutionCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TerminateWorkflowExecutionCommand_1 = require("./commands/TerminateWorkflowExecutionCommand");
const UndeprecateActivityTypeCommand_1 = require("./commands/UndeprecateActivityTypeCommand");
const UndeprecateDomainCommand_1 = require("./commands/UndeprecateDomainCommand");
const UndeprecateWorkflowTypeCommand_1 = require("./commands/UndeprecateWorkflowTypeCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
/**
 * <fullname>Amazon Simple Workflow Service</fullname>
 *
 *          <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to
 *       coordinate work across distributed components. In Amazon SWF, a <i>task</i>
 *       represents a logical unit of work that is performed by a component of your workflow.
 *       Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and
 *       concurrency in accordance with the logical flow of the application.</p>
 *
 *          <p>Amazon SWF gives you full control over implementing tasks and coordinating them without
 *       worrying about underlying complexities such as tracking their progress and maintaining their
 *       state.</p>
 *
 *          <p>This documentation serves as reference only. For a broader overview of the Amazon SWF
 *       programming model, see the <i>
 *                <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a>
 *             </i>.</p>
 */
class SWF extends SWFClient_1.SWFClient {
    countClosedWorkflowExecutions(args, optionsOrCb, cb) {
        const command = new CountClosedWorkflowExecutionsCommand_1.CountClosedWorkflowExecutionsCommand(args);
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
    countOpenWorkflowExecutions(args, optionsOrCb, cb) {
        const command = new CountOpenWorkflowExecutionsCommand_1.CountOpenWorkflowExecutionsCommand(args);
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
    countPendingActivityTasks(args, optionsOrCb, cb) {
        const command = new CountPendingActivityTasksCommand_1.CountPendingActivityTasksCommand(args);
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
    countPendingDecisionTasks(args, optionsOrCb, cb) {
        const command = new CountPendingDecisionTasksCommand_1.CountPendingDecisionTasksCommand(args);
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
    deprecateActivityType(args, optionsOrCb, cb) {
        const command = new DeprecateActivityTypeCommand_1.DeprecateActivityTypeCommand(args);
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
    deprecateDomain(args, optionsOrCb, cb) {
        const command = new DeprecateDomainCommand_1.DeprecateDomainCommand(args);
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
    deprecateWorkflowType(args, optionsOrCb, cb) {
        const command = new DeprecateWorkflowTypeCommand_1.DeprecateWorkflowTypeCommand(args);
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
    describeActivityType(args, optionsOrCb, cb) {
        const command = new DescribeActivityTypeCommand_1.DescribeActivityTypeCommand(args);
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
    describeDomain(args, optionsOrCb, cb) {
        const command = new DescribeDomainCommand_1.DescribeDomainCommand(args);
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
    describeWorkflowExecution(args, optionsOrCb, cb) {
        const command = new DescribeWorkflowExecutionCommand_1.DescribeWorkflowExecutionCommand(args);
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
    describeWorkflowType(args, optionsOrCb, cb) {
        const command = new DescribeWorkflowTypeCommand_1.DescribeWorkflowTypeCommand(args);
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
    getWorkflowExecutionHistory(args, optionsOrCb, cb) {
        const command = new GetWorkflowExecutionHistoryCommand_1.GetWorkflowExecutionHistoryCommand(args);
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
    listActivityTypes(args, optionsOrCb, cb) {
        const command = new ListActivityTypesCommand_1.ListActivityTypesCommand(args);
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
    listClosedWorkflowExecutions(args, optionsOrCb, cb) {
        const command = new ListClosedWorkflowExecutionsCommand_1.ListClosedWorkflowExecutionsCommand(args);
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
    listDomains(args, optionsOrCb, cb) {
        const command = new ListDomainsCommand_1.ListDomainsCommand(args);
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
    listOpenWorkflowExecutions(args, optionsOrCb, cb) {
        const command = new ListOpenWorkflowExecutionsCommand_1.ListOpenWorkflowExecutionsCommand(args);
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
    listWorkflowTypes(args, optionsOrCb, cb) {
        const command = new ListWorkflowTypesCommand_1.ListWorkflowTypesCommand(args);
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
    pollForActivityTask(args, optionsOrCb, cb) {
        const command = new PollForActivityTaskCommand_1.PollForActivityTaskCommand(args);
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
    pollForDecisionTask(args, optionsOrCb, cb) {
        const command = new PollForDecisionTaskCommand_1.PollForDecisionTaskCommand(args);
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
    recordActivityTaskHeartbeat(args, optionsOrCb, cb) {
        const command = new RecordActivityTaskHeartbeatCommand_1.RecordActivityTaskHeartbeatCommand(args);
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
    registerActivityType(args, optionsOrCb, cb) {
        const command = new RegisterActivityTypeCommand_1.RegisterActivityTypeCommand(args);
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
    registerDomain(args, optionsOrCb, cb) {
        const command = new RegisterDomainCommand_1.RegisterDomainCommand(args);
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
    registerWorkflowType(args, optionsOrCb, cb) {
        const command = new RegisterWorkflowTypeCommand_1.RegisterWorkflowTypeCommand(args);
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
    requestCancelWorkflowExecution(args, optionsOrCb, cb) {
        const command = new RequestCancelWorkflowExecutionCommand_1.RequestCancelWorkflowExecutionCommand(args);
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
    respondActivityTaskCanceled(args, optionsOrCb, cb) {
        const command = new RespondActivityTaskCanceledCommand_1.RespondActivityTaskCanceledCommand(args);
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
    respondActivityTaskCompleted(args, optionsOrCb, cb) {
        const command = new RespondActivityTaskCompletedCommand_1.RespondActivityTaskCompletedCommand(args);
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
    respondActivityTaskFailed(args, optionsOrCb, cb) {
        const command = new RespondActivityTaskFailedCommand_1.RespondActivityTaskFailedCommand(args);
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
    respondDecisionTaskCompleted(args, optionsOrCb, cb) {
        const command = new RespondDecisionTaskCompletedCommand_1.RespondDecisionTaskCompletedCommand(args);
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
    signalWorkflowExecution(args, optionsOrCb, cb) {
        const command = new SignalWorkflowExecutionCommand_1.SignalWorkflowExecutionCommand(args);
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
    startWorkflowExecution(args, optionsOrCb, cb) {
        const command = new StartWorkflowExecutionCommand_1.StartWorkflowExecutionCommand(args);
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
    terminateWorkflowExecution(args, optionsOrCb, cb) {
        const command = new TerminateWorkflowExecutionCommand_1.TerminateWorkflowExecutionCommand(args);
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
    undeprecateActivityType(args, optionsOrCb, cb) {
        const command = new UndeprecateActivityTypeCommand_1.UndeprecateActivityTypeCommand(args);
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
    undeprecateDomain(args, optionsOrCb, cb) {
        const command = new UndeprecateDomainCommand_1.UndeprecateDomainCommand(args);
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
    undeprecateWorkflowType(args, optionsOrCb, cb) {
        const command = new UndeprecateWorkflowTypeCommand_1.UndeprecateWorkflowTypeCommand(args);
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
exports.SWF = SWF;
//# sourceMappingURL=SWF.js.map