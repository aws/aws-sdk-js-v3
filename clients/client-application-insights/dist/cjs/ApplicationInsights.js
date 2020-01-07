"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationInsightsClient_1 = require("./ApplicationInsightsClient");
const CreateApplicationCommand_1 = require("./commands/CreateApplicationCommand");
const CreateComponentCommand_1 = require("./commands/CreateComponentCommand");
const CreateLogPatternCommand_1 = require("./commands/CreateLogPatternCommand");
const DeleteApplicationCommand_1 = require("./commands/DeleteApplicationCommand");
const DeleteComponentCommand_1 = require("./commands/DeleteComponentCommand");
const DeleteLogPatternCommand_1 = require("./commands/DeleteLogPatternCommand");
const DescribeApplicationCommand_1 = require("./commands/DescribeApplicationCommand");
const DescribeComponentCommand_1 = require("./commands/DescribeComponentCommand");
const DescribeComponentConfigurationCommand_1 = require("./commands/DescribeComponentConfigurationCommand");
const DescribeComponentConfigurationRecommendationCommand_1 = require("./commands/DescribeComponentConfigurationRecommendationCommand");
const DescribeLogPatternCommand_1 = require("./commands/DescribeLogPatternCommand");
const DescribeObservationCommand_1 = require("./commands/DescribeObservationCommand");
const DescribeProblemCommand_1 = require("./commands/DescribeProblemCommand");
const DescribeProblemObservationsCommand_1 = require("./commands/DescribeProblemObservationsCommand");
const ListApplicationsCommand_1 = require("./commands/ListApplicationsCommand");
const ListComponentsCommand_1 = require("./commands/ListComponentsCommand");
const ListConfigurationHistoryCommand_1 = require("./commands/ListConfigurationHistoryCommand");
const ListLogPatternSetsCommand_1 = require("./commands/ListLogPatternSetsCommand");
const ListLogPatternsCommand_1 = require("./commands/ListLogPatternsCommand");
const ListProblemsCommand_1 = require("./commands/ListProblemsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateApplicationCommand_1 = require("./commands/UpdateApplicationCommand");
const UpdateComponentCommand_1 = require("./commands/UpdateComponentCommand");
const UpdateComponentConfigurationCommand_1 = require("./commands/UpdateComponentConfigurationCommand");
const UpdateLogPatternCommand_1 = require("./commands/UpdateLogPatternCommand");
/**
 * <fullname>Amazon CloudWatch Application Insights for .NET and SQL Server</fullname>
 *          <p> Amazon CloudWatch Application Insights for .NET and SQL Server is a service that
 *          helps you detect common problems with your .NET and SQL Server-based applications. It
 *          enables you to pinpoint the source of issues in your applications (built with technologies
 *          such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into
 *          detected problems.</p>
 *          <p>After you onboard your application, CloudWatch Application Insights for .NET and SQL
 *          Server identifies, recommends, and sets up metrics and logs. It continuously analyzes and
 *          correlates your metrics and logs for unusual behavior to surface actionable problems with
 *          your application. For example, if your application is slow and unresponsive and leading to
 *          HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you
 *          that a memory pressure problem with your SQL Server database is occurring. It bases this
 *          analysis on impactful metrics and log errors. </p>
 */
class ApplicationInsights extends ApplicationInsightsClient_1.ApplicationInsightsClient {
    createApplication(args, optionsOrCb, cb) {
        const command = new CreateApplicationCommand_1.CreateApplicationCommand(args);
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
    createComponent(args, optionsOrCb, cb) {
        const command = new CreateComponentCommand_1.CreateComponentCommand(args);
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
    createLogPattern(args, optionsOrCb, cb) {
        const command = new CreateLogPatternCommand_1.CreateLogPatternCommand(args);
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
    deleteApplication(args, optionsOrCb, cb) {
        const command = new DeleteApplicationCommand_1.DeleteApplicationCommand(args);
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
    deleteComponent(args, optionsOrCb, cb) {
        const command = new DeleteComponentCommand_1.DeleteComponentCommand(args);
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
    deleteLogPattern(args, optionsOrCb, cb) {
        const command = new DeleteLogPatternCommand_1.DeleteLogPatternCommand(args);
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
    describeApplication(args, optionsOrCb, cb) {
        const command = new DescribeApplicationCommand_1.DescribeApplicationCommand(args);
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
    describeComponent(args, optionsOrCb, cb) {
        const command = new DescribeComponentCommand_1.DescribeComponentCommand(args);
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
    describeComponentConfiguration(args, optionsOrCb, cb) {
        const command = new DescribeComponentConfigurationCommand_1.DescribeComponentConfigurationCommand(args);
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
    describeComponentConfigurationRecommendation(args, optionsOrCb, cb) {
        const command = new DescribeComponentConfigurationRecommendationCommand_1.DescribeComponentConfigurationRecommendationCommand(args);
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
    describeLogPattern(args, optionsOrCb, cb) {
        const command = new DescribeLogPatternCommand_1.DescribeLogPatternCommand(args);
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
    describeObservation(args, optionsOrCb, cb) {
        const command = new DescribeObservationCommand_1.DescribeObservationCommand(args);
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
    describeProblem(args, optionsOrCb, cb) {
        const command = new DescribeProblemCommand_1.DescribeProblemCommand(args);
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
    describeProblemObservations(args, optionsOrCb, cb) {
        const command = new DescribeProblemObservationsCommand_1.DescribeProblemObservationsCommand(args);
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
    listApplications(args, optionsOrCb, cb) {
        const command = new ListApplicationsCommand_1.ListApplicationsCommand(args);
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
    listComponents(args, optionsOrCb, cb) {
        const command = new ListComponentsCommand_1.ListComponentsCommand(args);
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
    listConfigurationHistory(args, optionsOrCb, cb) {
        const command = new ListConfigurationHistoryCommand_1.ListConfigurationHistoryCommand(args);
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
    listLogPatternSets(args, optionsOrCb, cb) {
        const command = new ListLogPatternSetsCommand_1.ListLogPatternSetsCommand(args);
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
    listLogPatterns(args, optionsOrCb, cb) {
        const command = new ListLogPatternsCommand_1.ListLogPatternsCommand(args);
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
    listProblems(args, optionsOrCb, cb) {
        const command = new ListProblemsCommand_1.ListProblemsCommand(args);
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
    updateApplication(args, optionsOrCb, cb) {
        const command = new UpdateApplicationCommand_1.UpdateApplicationCommand(args);
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
    updateComponent(args, optionsOrCb, cb) {
        const command = new UpdateComponentCommand_1.UpdateComponentCommand(args);
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
    updateComponentConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateComponentConfigurationCommand_1.UpdateComponentConfigurationCommand(args);
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
    updateLogPattern(args, optionsOrCb, cb) {
        const command = new UpdateLogPatternCommand_1.UpdateLogPatternCommand(args);
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
exports.ApplicationInsights = ApplicationInsights;
//# sourceMappingURL=ApplicationInsights.js.map