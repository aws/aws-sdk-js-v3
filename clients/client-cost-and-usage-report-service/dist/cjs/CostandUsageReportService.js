"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CostandUsageReportServiceClient_1 = require("./CostandUsageReportServiceClient");
const DeleteReportDefinitionCommand_1 = require("./commands/DeleteReportDefinitionCommand");
const DescribeReportDefinitionsCommand_1 = require("./commands/DescribeReportDefinitionsCommand");
const ModifyReportDefinitionCommand_1 = require("./commands/ModifyReportDefinitionCommand");
const PutReportDefinitionCommand_1 = require("./commands/PutReportDefinitionCommand");
/**
 * <p>The AWS Cost and Usage Report API enables you to programmatically create, query, and delete
 *         AWS Cost and Usage report definitions.</p>
 *          <p>AWS Cost and Usage reports track the monthly AWS costs and usage
 *    associated with your AWS account.
 *
 *         The report contains line items for each unique combination of AWS product,
 *         usage type, and operation that your AWS account uses.
 *
 *         You can configure the AWS Cost and Usage report to show only the data that you want, using the
 *         AWS Cost and Usage API.</p>
 *
 *
 *          <p>Service Endpoint</p>
 *          <p>The AWS Cost and Usage Report API provides the following endpoint:</p>
 *          <ul>
 *             <li>
 *                <p>cur.us-east-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 */
class CostandUsageReportService extends CostandUsageReportServiceClient_1.CostandUsageReportServiceClient {
    deleteReportDefinition(args, optionsOrCb, cb) {
        const command = new DeleteReportDefinitionCommand_1.DeleteReportDefinitionCommand(args);
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
    describeReportDefinitions(args, optionsOrCb, cb) {
        const command = new DescribeReportDefinitionsCommand_1.DescribeReportDefinitionsCommand(args);
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
    modifyReportDefinition(args, optionsOrCb, cb) {
        const command = new ModifyReportDefinitionCommand_1.ModifyReportDefinitionCommand(args);
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
    putReportDefinition(args, optionsOrCb, cb) {
        const command = new PutReportDefinitionCommand_1.PutReportDefinitionCommand(args);
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
exports.CostandUsageReportService = CostandUsageReportService;
//# sourceMappingURL=CostandUsageReportService.js.map