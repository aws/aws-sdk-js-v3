"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CloudWatchClient_1 = require("./CloudWatchClient");
const DeleteAlarmsCommand_1 = require("./commands/DeleteAlarmsCommand");
const DeleteAnomalyDetectorCommand_1 = require("./commands/DeleteAnomalyDetectorCommand");
const DeleteDashboardsCommand_1 = require("./commands/DeleteDashboardsCommand");
const DeleteInsightRulesCommand_1 = require("./commands/DeleteInsightRulesCommand");
const DescribeAlarmHistoryCommand_1 = require("./commands/DescribeAlarmHistoryCommand");
const DescribeAlarmsCommand_1 = require("./commands/DescribeAlarmsCommand");
const DescribeAlarmsForMetricCommand_1 = require("./commands/DescribeAlarmsForMetricCommand");
const DescribeAnomalyDetectorsCommand_1 = require("./commands/DescribeAnomalyDetectorsCommand");
const DescribeInsightRulesCommand_1 = require("./commands/DescribeInsightRulesCommand");
const DisableAlarmActionsCommand_1 = require("./commands/DisableAlarmActionsCommand");
const DisableInsightRulesCommand_1 = require("./commands/DisableInsightRulesCommand");
const EnableAlarmActionsCommand_1 = require("./commands/EnableAlarmActionsCommand");
const EnableInsightRulesCommand_1 = require("./commands/EnableInsightRulesCommand");
const GetDashboardCommand_1 = require("./commands/GetDashboardCommand");
const GetInsightRuleReportCommand_1 = require("./commands/GetInsightRuleReportCommand");
const GetMetricDataCommand_1 = require("./commands/GetMetricDataCommand");
const GetMetricStatisticsCommand_1 = require("./commands/GetMetricStatisticsCommand");
const GetMetricWidgetImageCommand_1 = require("./commands/GetMetricWidgetImageCommand");
const ListDashboardsCommand_1 = require("./commands/ListDashboardsCommand");
const ListMetricsCommand_1 = require("./commands/ListMetricsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutAnomalyDetectorCommand_1 = require("./commands/PutAnomalyDetectorCommand");
const PutDashboardCommand_1 = require("./commands/PutDashboardCommand");
const PutInsightRuleCommand_1 = require("./commands/PutInsightRuleCommand");
const PutMetricAlarmCommand_1 = require("./commands/PutMetricAlarmCommand");
const PutMetricDataCommand_1 = require("./commands/PutMetricDataCommand");
const SetAlarmStateCommand_1 = require("./commands/SetAlarmStateCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
/**
 * <p>Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the
 * 			applications you run on AWS in real time. You can use CloudWatch to collect and track
 * 			metrics, which are the variables you want to measure for your resources and
 * 			applications.</p>
 *
 * 		       <p>CloudWatch alarms send notifications or automatically change the resources
 * 			you are monitoring based on rules that you define. For example, you can monitor the CPU
 * 			usage and disk reads and writes of your Amazon EC2
 * 			instances. Then, use this data to determine whether you should launch additional
 * 			instances to handle increased load. You can also use this data to stop under-used
 * 			instances to save money.</p>
 *
 * 		       <p>In addition to monitoring the built-in metrics that come with AWS, you can monitor
 * 			your own custom metrics. With CloudWatch, you gain system-wide visibility into resource
 * 			utilization, application performance, and operational health.</p>
 */
class CloudWatch extends CloudWatchClient_1.CloudWatchClient {
    deleteAlarms(args, optionsOrCb, cb) {
        const command = new DeleteAlarmsCommand_1.DeleteAlarmsCommand(args);
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
    deleteAnomalyDetector(args, optionsOrCb, cb) {
        const command = new DeleteAnomalyDetectorCommand_1.DeleteAnomalyDetectorCommand(args);
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
    deleteDashboards(args, optionsOrCb, cb) {
        const command = new DeleteDashboardsCommand_1.DeleteDashboardsCommand(args);
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
    deleteInsightRules(args, optionsOrCb, cb) {
        const command = new DeleteInsightRulesCommand_1.DeleteInsightRulesCommand(args);
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
    describeAlarmHistory(args, optionsOrCb, cb) {
        const command = new DescribeAlarmHistoryCommand_1.DescribeAlarmHistoryCommand(args);
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
    describeAlarms(args, optionsOrCb, cb) {
        const command = new DescribeAlarmsCommand_1.DescribeAlarmsCommand(args);
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
    describeAlarmsForMetric(args, optionsOrCb, cb) {
        const command = new DescribeAlarmsForMetricCommand_1.DescribeAlarmsForMetricCommand(args);
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
    describeAnomalyDetectors(args, optionsOrCb, cb) {
        const command = new DescribeAnomalyDetectorsCommand_1.DescribeAnomalyDetectorsCommand(args);
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
    describeInsightRules(args, optionsOrCb, cb) {
        const command = new DescribeInsightRulesCommand_1.DescribeInsightRulesCommand(args);
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
    disableAlarmActions(args, optionsOrCb, cb) {
        const command = new DisableAlarmActionsCommand_1.DisableAlarmActionsCommand(args);
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
    disableInsightRules(args, optionsOrCb, cb) {
        const command = new DisableInsightRulesCommand_1.DisableInsightRulesCommand(args);
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
    enableAlarmActions(args, optionsOrCb, cb) {
        const command = new EnableAlarmActionsCommand_1.EnableAlarmActionsCommand(args);
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
    enableInsightRules(args, optionsOrCb, cb) {
        const command = new EnableInsightRulesCommand_1.EnableInsightRulesCommand(args);
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
    getDashboard(args, optionsOrCb, cb) {
        const command = new GetDashboardCommand_1.GetDashboardCommand(args);
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
    getInsightRuleReport(args, optionsOrCb, cb) {
        const command = new GetInsightRuleReportCommand_1.GetInsightRuleReportCommand(args);
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
    getMetricData(args, optionsOrCb, cb) {
        const command = new GetMetricDataCommand_1.GetMetricDataCommand(args);
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
    getMetricStatistics(args, optionsOrCb, cb) {
        const command = new GetMetricStatisticsCommand_1.GetMetricStatisticsCommand(args);
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
    getMetricWidgetImage(args, optionsOrCb, cb) {
        const command = new GetMetricWidgetImageCommand_1.GetMetricWidgetImageCommand(args);
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
    listDashboards(args, optionsOrCb, cb) {
        const command = new ListDashboardsCommand_1.ListDashboardsCommand(args);
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
    listMetrics(args, optionsOrCb, cb) {
        const command = new ListMetricsCommand_1.ListMetricsCommand(args);
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
    putAnomalyDetector(args, optionsOrCb, cb) {
        const command = new PutAnomalyDetectorCommand_1.PutAnomalyDetectorCommand(args);
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
    putDashboard(args, optionsOrCb, cb) {
        const command = new PutDashboardCommand_1.PutDashboardCommand(args);
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
    putInsightRule(args, optionsOrCb, cb) {
        const command = new PutInsightRuleCommand_1.PutInsightRuleCommand(args);
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
    putMetricAlarm(args, optionsOrCb, cb) {
        const command = new PutMetricAlarmCommand_1.PutMetricAlarmCommand(args);
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
    putMetricData(args, optionsOrCb, cb) {
        const command = new PutMetricDataCommand_1.PutMetricDataCommand(args);
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
    setAlarmState(args, optionsOrCb, cb) {
        const command = new SetAlarmStateCommand_1.SetAlarmStateCommand(args);
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
}
exports.CloudWatch = CloudWatch;
//# sourceMappingURL=CloudWatch.js.map