"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const S3ControlClient_1 = require("./S3ControlClient");
const CreateAccessPointCommand_1 = require("./commands/CreateAccessPointCommand");
const CreateJobCommand_1 = require("./commands/CreateJobCommand");
const DeleteAccessPointCommand_1 = require("./commands/DeleteAccessPointCommand");
const DeleteAccessPointPolicyCommand_1 = require("./commands/DeleteAccessPointPolicyCommand");
const DeletePublicAccessBlockCommand_1 = require("./commands/DeletePublicAccessBlockCommand");
const DescribeJobCommand_1 = require("./commands/DescribeJobCommand");
const GetAccessPointCommand_1 = require("./commands/GetAccessPointCommand");
const GetAccessPointPolicyCommand_1 = require("./commands/GetAccessPointPolicyCommand");
const GetAccessPointPolicyStatusCommand_1 = require("./commands/GetAccessPointPolicyStatusCommand");
const GetPublicAccessBlockCommand_1 = require("./commands/GetPublicAccessBlockCommand");
const ListAccessPointsCommand_1 = require("./commands/ListAccessPointsCommand");
const ListJobsCommand_1 = require("./commands/ListJobsCommand");
const PutAccessPointPolicyCommand_1 = require("./commands/PutAccessPointPolicyCommand");
const PutPublicAccessBlockCommand_1 = require("./commands/PutPublicAccessBlockCommand");
const UpdateJobPriorityCommand_1 = require("./commands/UpdateJobPriorityCommand");
const UpdateJobStatusCommand_1 = require("./commands/UpdateJobStatusCommand");
/**
 * <p>
 *          AWS S3 Control provides access to Amazon S3 control plane operations.
 *       </p>
 */
class S3Control extends S3ControlClient_1.S3ControlClient {
    createAccessPoint(args, optionsOrCb, cb) {
        const command = new CreateAccessPointCommand_1.CreateAccessPointCommand(args);
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
    createJob(args, optionsOrCb, cb) {
        const command = new CreateJobCommand_1.CreateJobCommand(args);
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
    deleteAccessPoint(args, optionsOrCb, cb) {
        const command = new DeleteAccessPointCommand_1.DeleteAccessPointCommand(args);
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
    deleteAccessPointPolicy(args, optionsOrCb, cb) {
        const command = new DeleteAccessPointPolicyCommand_1.DeleteAccessPointPolicyCommand(args);
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
    deletePublicAccessBlock(args, optionsOrCb, cb) {
        const command = new DeletePublicAccessBlockCommand_1.DeletePublicAccessBlockCommand(args);
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
    describeJob(args, optionsOrCb, cb) {
        const command = new DescribeJobCommand_1.DescribeJobCommand(args);
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
    getAccessPoint(args, optionsOrCb, cb) {
        const command = new GetAccessPointCommand_1.GetAccessPointCommand(args);
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
    getAccessPointPolicy(args, optionsOrCb, cb) {
        const command = new GetAccessPointPolicyCommand_1.GetAccessPointPolicyCommand(args);
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
    getAccessPointPolicyStatus(args, optionsOrCb, cb) {
        const command = new GetAccessPointPolicyStatusCommand_1.GetAccessPointPolicyStatusCommand(args);
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
    getPublicAccessBlock(args, optionsOrCb, cb) {
        const command = new GetPublicAccessBlockCommand_1.GetPublicAccessBlockCommand(args);
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
    listAccessPoints(args, optionsOrCb, cb) {
        const command = new ListAccessPointsCommand_1.ListAccessPointsCommand(args);
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
    listJobs(args, optionsOrCb, cb) {
        const command = new ListJobsCommand_1.ListJobsCommand(args);
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
    putAccessPointPolicy(args, optionsOrCb, cb) {
        const command = new PutAccessPointPolicyCommand_1.PutAccessPointPolicyCommand(args);
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
    putPublicAccessBlock(args, optionsOrCb, cb) {
        const command = new PutPublicAccessBlockCommand_1.PutPublicAccessBlockCommand(args);
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
    updateJobPriority(args, optionsOrCb, cb) {
        const command = new UpdateJobPriorityCommand_1.UpdateJobPriorityCommand(args);
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
    updateJobStatus(args, optionsOrCb, cb) {
        const command = new UpdateJobStatusCommand_1.UpdateJobStatusCommand(args);
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
exports.S3Control = S3Control;
//# sourceMappingURL=S3Control.js.map