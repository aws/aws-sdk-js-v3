"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CloudTrailClient_1 = require("./CloudTrailClient");
const AddTagsCommand_1 = require("./commands/AddTagsCommand");
const CreateTrailCommand_1 = require("./commands/CreateTrailCommand");
const DeleteTrailCommand_1 = require("./commands/DeleteTrailCommand");
const DescribeTrailsCommand_1 = require("./commands/DescribeTrailsCommand");
const GetEventSelectorsCommand_1 = require("./commands/GetEventSelectorsCommand");
const GetInsightSelectorsCommand_1 = require("./commands/GetInsightSelectorsCommand");
const GetTrailCommand_1 = require("./commands/GetTrailCommand");
const GetTrailStatusCommand_1 = require("./commands/GetTrailStatusCommand");
const ListPublicKeysCommand_1 = require("./commands/ListPublicKeysCommand");
const ListTagsCommand_1 = require("./commands/ListTagsCommand");
const ListTrailsCommand_1 = require("./commands/ListTrailsCommand");
const LookupEventsCommand_1 = require("./commands/LookupEventsCommand");
const PutEventSelectorsCommand_1 = require("./commands/PutEventSelectorsCommand");
const PutInsightSelectorsCommand_1 = require("./commands/PutInsightSelectorsCommand");
const RemoveTagsCommand_1 = require("./commands/RemoveTagsCommand");
const StartLoggingCommand_1 = require("./commands/StartLoggingCommand");
const StopLoggingCommand_1 = require("./commands/StopLoggingCommand");
const UpdateTrailCommand_1 = require("./commands/UpdateTrailCommand");
/**
 * <fullname>AWS CloudTrail</fullname>
 *          <p>This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail.</p>
 *          <p>CloudTrail is a web service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the AWS API call, the source IP address, the request parameters, and the response elements returned by the service.</p>
 *
 *          <note>
 *             <p>As an alternative to the API,
 *          you can use one of the AWS SDKs, which consist of libraries and sample code for various
 *          programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs
 *          provide a convenient way to create programmatic access to AWSCloudTrail. For example, the SDKs
 *          take care of cryptographically signing requests, managing errors, and retrying requests
 *          automatically. For information about the AWS SDKs, including how to download and install
 *          them, see the <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services
 *             page</a>.</p>
 *          </note>
 *          <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">AWS CloudTrail User Guide</a> for information about the data that is included with each AWS API call listed in the log files.</p>
 */
class CloudTrail extends CloudTrailClient_1.CloudTrailClient {
    addTags(args, optionsOrCb, cb) {
        const command = new AddTagsCommand_1.AddTagsCommand(args);
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
    createTrail(args, optionsOrCb, cb) {
        const command = new CreateTrailCommand_1.CreateTrailCommand(args);
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
    deleteTrail(args, optionsOrCb, cb) {
        const command = new DeleteTrailCommand_1.DeleteTrailCommand(args);
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
    describeTrails(args, optionsOrCb, cb) {
        const command = new DescribeTrailsCommand_1.DescribeTrailsCommand(args);
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
    getEventSelectors(args, optionsOrCb, cb) {
        const command = new GetEventSelectorsCommand_1.GetEventSelectorsCommand(args);
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
    getInsightSelectors(args, optionsOrCb, cb) {
        const command = new GetInsightSelectorsCommand_1.GetInsightSelectorsCommand(args);
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
    getTrail(args, optionsOrCb, cb) {
        const command = new GetTrailCommand_1.GetTrailCommand(args);
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
    getTrailStatus(args, optionsOrCb, cb) {
        const command = new GetTrailStatusCommand_1.GetTrailStatusCommand(args);
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
    listPublicKeys(args, optionsOrCb, cb) {
        const command = new ListPublicKeysCommand_1.ListPublicKeysCommand(args);
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
    listTags(args, optionsOrCb, cb) {
        const command = new ListTagsCommand_1.ListTagsCommand(args);
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
    listTrails(args, optionsOrCb, cb) {
        const command = new ListTrailsCommand_1.ListTrailsCommand(args);
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
    lookupEvents(args, optionsOrCb, cb) {
        const command = new LookupEventsCommand_1.LookupEventsCommand(args);
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
    putEventSelectors(args, optionsOrCb, cb) {
        const command = new PutEventSelectorsCommand_1.PutEventSelectorsCommand(args);
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
    putInsightSelectors(args, optionsOrCb, cb) {
        const command = new PutInsightSelectorsCommand_1.PutInsightSelectorsCommand(args);
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
    removeTags(args, optionsOrCb, cb) {
        const command = new RemoveTagsCommand_1.RemoveTagsCommand(args);
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
    startLogging(args, optionsOrCb, cb) {
        const command = new StartLoggingCommand_1.StartLoggingCommand(args);
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
    stopLogging(args, optionsOrCb, cb) {
        const command = new StopLoggingCommand_1.StopLoggingCommand(args);
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
    updateTrail(args, optionsOrCb, cb) {
        const command = new UpdateTrailCommand_1.UpdateTrailCommand(args);
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
exports.CloudTrail = CloudTrail;
//# sourceMappingURL=CloudTrail.js.map