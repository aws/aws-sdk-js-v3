"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AutoScalingPlansClient_1 = require("./AutoScalingPlansClient");
const CreateScalingPlanCommand_1 = require("./commands/CreateScalingPlanCommand");
const DeleteScalingPlanCommand_1 = require("./commands/DeleteScalingPlanCommand");
const DescribeScalingPlanResourcesCommand_1 = require("./commands/DescribeScalingPlanResourcesCommand");
const DescribeScalingPlansCommand_1 = require("./commands/DescribeScalingPlansCommand");
const GetScalingPlanResourceForecastDataCommand_1 = require("./commands/GetScalingPlanResourceForecastDataCommand");
const UpdateScalingPlanCommand_1 = require("./commands/UpdateScalingPlanCommand");
/**
 * <fullname>AWS Auto Scaling</fullname>
 *          <p>Use AWS Auto Scaling to quickly discover all the scalable AWS resources for your application and
 *          configure dynamic scaling and predictive scaling for your resources using scaling plans.
 *          Use this service in conjunction with the Amazon EC2 Auto Scaling, Application Auto Scaling, Amazon CloudWatch, and AWS
 *          CloudFormation services. </p>
 *          <p>Currently, predictive scaling is only available for Amazon EC2 Auto Scaling groups.</p>
 *          <p>For more information about AWS Auto Scaling, including information about granting IAM users
 *          required permissions for AWS Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html">AWS Auto Scaling User Guide</a>.</p>
 */
class AutoScalingPlans extends AutoScalingPlansClient_1.AutoScalingPlansClient {
    createScalingPlan(args, optionsOrCb, cb) {
        const command = new CreateScalingPlanCommand_1.CreateScalingPlanCommand(args);
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
    deleteScalingPlan(args, optionsOrCb, cb) {
        const command = new DeleteScalingPlanCommand_1.DeleteScalingPlanCommand(args);
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
    describeScalingPlanResources(args, optionsOrCb, cb) {
        const command = new DescribeScalingPlanResourcesCommand_1.DescribeScalingPlanResourcesCommand(args);
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
    describeScalingPlans(args, optionsOrCb, cb) {
        const command = new DescribeScalingPlansCommand_1.DescribeScalingPlansCommand(args);
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
    getScalingPlanResourceForecastData(args, optionsOrCb, cb) {
        const command = new GetScalingPlanResourceForecastDataCommand_1.GetScalingPlanResourceForecastDataCommand(args);
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
    updateScalingPlan(args, optionsOrCb, cb) {
        const command = new UpdateScalingPlanCommand_1.UpdateScalingPlanCommand(args);
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
exports.AutoScalingPlans = AutoScalingPlans;
//# sourceMappingURL=AutoScalingPlans.js.map