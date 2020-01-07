"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DynamoDBStreamsClient_1 = require("./DynamoDBStreamsClient");
const DescribeStreamCommand_1 = require("./commands/DescribeStreamCommand");
const GetRecordsCommand_1 = require("./commands/GetRecordsCommand");
const GetShardIteratorCommand_1 = require("./commands/GetShardIteratorCommand");
const ListStreamsCommand_1 = require("./commands/ListStreamsCommand");
/**
 * <fullname>Amazon DynamoDB</fullname>
 *
 *          <p>Amazon DynamoDB Streams provides API actions for accessing streams and processing
 *          stream records. To learn more about application development with Streams, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html">Capturing
 *             Table Activity with DynamoDB Streams</a> in the Amazon DynamoDB Developer
 *          Guide.</p>
 */
class DynamoDBStreams extends DynamoDBStreamsClient_1.DynamoDBStreamsClient {
    describeStream(args, optionsOrCb, cb) {
        const command = new DescribeStreamCommand_1.DescribeStreamCommand(args);
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
    getRecords(args, optionsOrCb, cb) {
        const command = new GetRecordsCommand_1.GetRecordsCommand(args);
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
    getShardIterator(args, optionsOrCb, cb) {
        const command = new GetShardIteratorCommand_1.GetShardIteratorCommand(args);
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
    listStreams(args, optionsOrCb, cb) {
        const command = new ListStreamsCommand_1.ListStreamsCommand(args);
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
exports.DynamoDBStreams = DynamoDBStreams;
//# sourceMappingURL=DynamoDBStreams.js.map