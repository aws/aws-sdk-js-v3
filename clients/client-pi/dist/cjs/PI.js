"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PIClient_1 = require("./PIClient");
const DescribeDimensionKeysCommand_1 = require("./commands/DescribeDimensionKeysCommand");
const GetResourceMetricsCommand_1 = require("./commands/GetResourceMetricsCommand");
/**
 * <p>AWS Performance Insights enables you to monitor and explore different dimensions of
 *       database load based on data captured from a running RDS instance. The guide provides detailed
 *       information about Performance Insights data types, parameters and errors. For more information
 *       about Performance Insights capabilities see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon RDS Performance
 *         Insights </a> in the <i>Amazon RDS User Guide</i>.</p>
 *
 *          <p> The AWS Performance Insights API provides visibility into the performance of your RDS
 *       instance, when Performance Insights is enabled for supported engine types. While Amazon
 *       CloudWatch provides the authoritative source for AWS service vended monitoring metrics, AWS
 *       Performance Insights offers a domain-specific view of database load measured as Average Active
 *       Sessions and provided to API consumers as a 2-dimensional time-series dataset. The time
 *       dimension of the data provides DB load data for each time point in the queried time range, and
 *       each time point decomposes overall load in relation to the requested dimensions, such as SQL,
 *       Wait-event, User or Host, measured at that time point.</p>
 */
class PI extends PIClient_1.PIClient {
    describeDimensionKeys(args, optionsOrCb, cb) {
        const command = new DescribeDimensionKeysCommand_1.DescribeDimensionKeysCommand(args);
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
    getResourceMetrics(args, optionsOrCb, cb) {
        const command = new GetResourceMetricsCommand_1.GetResourceMetricsCommand(args);
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
exports.PI = PI;
//# sourceMappingURL=PI.js.map