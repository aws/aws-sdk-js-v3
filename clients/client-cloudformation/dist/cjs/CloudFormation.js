"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CloudFormationClient_1 = require("./CloudFormationClient");
const CancelUpdateStackCommand_1 = require("./commands/CancelUpdateStackCommand");
const ContinueUpdateRollbackCommand_1 = require("./commands/ContinueUpdateRollbackCommand");
const CreateChangeSetCommand_1 = require("./commands/CreateChangeSetCommand");
const CreateStackCommand_1 = require("./commands/CreateStackCommand");
const CreateStackInstancesCommand_1 = require("./commands/CreateStackInstancesCommand");
const CreateStackSetCommand_1 = require("./commands/CreateStackSetCommand");
const DeleteChangeSetCommand_1 = require("./commands/DeleteChangeSetCommand");
const DeleteStackCommand_1 = require("./commands/DeleteStackCommand");
const DeleteStackInstancesCommand_1 = require("./commands/DeleteStackInstancesCommand");
const DeleteStackSetCommand_1 = require("./commands/DeleteStackSetCommand");
const DeregisterTypeCommand_1 = require("./commands/DeregisterTypeCommand");
const DescribeAccountLimitsCommand_1 = require("./commands/DescribeAccountLimitsCommand");
const DescribeChangeSetCommand_1 = require("./commands/DescribeChangeSetCommand");
const DescribeStackDriftDetectionStatusCommand_1 = require("./commands/DescribeStackDriftDetectionStatusCommand");
const DescribeStackEventsCommand_1 = require("./commands/DescribeStackEventsCommand");
const DescribeStackInstanceCommand_1 = require("./commands/DescribeStackInstanceCommand");
const DescribeStackResourceCommand_1 = require("./commands/DescribeStackResourceCommand");
const DescribeStackResourceDriftsCommand_1 = require("./commands/DescribeStackResourceDriftsCommand");
const DescribeStackResourcesCommand_1 = require("./commands/DescribeStackResourcesCommand");
const DescribeStackSetCommand_1 = require("./commands/DescribeStackSetCommand");
const DescribeStackSetOperationCommand_1 = require("./commands/DescribeStackSetOperationCommand");
const DescribeStacksCommand_1 = require("./commands/DescribeStacksCommand");
const DescribeTypeCommand_1 = require("./commands/DescribeTypeCommand");
const DescribeTypeRegistrationCommand_1 = require("./commands/DescribeTypeRegistrationCommand");
const DetectStackDriftCommand_1 = require("./commands/DetectStackDriftCommand");
const DetectStackResourceDriftCommand_1 = require("./commands/DetectStackResourceDriftCommand");
const DetectStackSetDriftCommand_1 = require("./commands/DetectStackSetDriftCommand");
const EstimateTemplateCostCommand_1 = require("./commands/EstimateTemplateCostCommand");
const ExecuteChangeSetCommand_1 = require("./commands/ExecuteChangeSetCommand");
const GetStackPolicyCommand_1 = require("./commands/GetStackPolicyCommand");
const GetTemplateCommand_1 = require("./commands/GetTemplateCommand");
const GetTemplateSummaryCommand_1 = require("./commands/GetTemplateSummaryCommand");
const ListChangeSetsCommand_1 = require("./commands/ListChangeSetsCommand");
const ListExportsCommand_1 = require("./commands/ListExportsCommand");
const ListImportsCommand_1 = require("./commands/ListImportsCommand");
const ListStackInstancesCommand_1 = require("./commands/ListStackInstancesCommand");
const ListStackResourcesCommand_1 = require("./commands/ListStackResourcesCommand");
const ListStackSetOperationResultsCommand_1 = require("./commands/ListStackSetOperationResultsCommand");
const ListStackSetOperationsCommand_1 = require("./commands/ListStackSetOperationsCommand");
const ListStackSetsCommand_1 = require("./commands/ListStackSetsCommand");
const ListStacksCommand_1 = require("./commands/ListStacksCommand");
const ListTypeRegistrationsCommand_1 = require("./commands/ListTypeRegistrationsCommand");
const ListTypeVersionsCommand_1 = require("./commands/ListTypeVersionsCommand");
const ListTypesCommand_1 = require("./commands/ListTypesCommand");
const RecordHandlerProgressCommand_1 = require("./commands/RecordHandlerProgressCommand");
const RegisterTypeCommand_1 = require("./commands/RegisterTypeCommand");
const SetStackPolicyCommand_1 = require("./commands/SetStackPolicyCommand");
const SetTypeDefaultVersionCommand_1 = require("./commands/SetTypeDefaultVersionCommand");
const SignalResourceCommand_1 = require("./commands/SignalResourceCommand");
const StopStackSetOperationCommand_1 = require("./commands/StopStackSetOperationCommand");
const UpdateStackCommand_1 = require("./commands/UpdateStackCommand");
const UpdateStackInstancesCommand_1 = require("./commands/UpdateStackInstancesCommand");
const UpdateStackSetCommand_1 = require("./commands/UpdateStackSetCommand");
const UpdateTerminationProtectionCommand_1 = require("./commands/UpdateTerminationProtectionCommand");
const ValidateTemplateCommand_1 = require("./commands/ValidateTemplateCommand");
/**
 * <fullname>AWS CloudFormation</fullname>
 *          <p>AWS CloudFormation allows you to create and manage AWS infrastructure deployments
 *          predictably and repeatedly. You can use AWS CloudFormation to leverage AWS products, such
 *          as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification
 *          Service, Elastic Load Balancing, and Auto Scaling to build highly-reliable, highly
 *          scalable, cost-effective applications without creating or configuring the underlying AWS
 *          infrastructure.</p>
 *          <p>With AWS CloudFormation, you declare all of your resources and dependencies in a
 *          template file. The template defines a collection of resources as a single unit called a
 *          stack. AWS CloudFormation creates and deletes all member resources of the stack together
 *          and manages all dependencies between the resources for you.</p>
 *          <p>For more information about AWS CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">AWS CloudFormation Product Page</a>.</p>
 *          <p>Amazon CloudFormation makes use of other AWS products. If you need additional
 *          technical information about a specific AWS product, you can find the product's technical
 *          documentation at <a href="https://docs.aws.amazon.com/">docs.aws.amazon.com</a>.</p>
 */
class CloudFormation extends CloudFormationClient_1.CloudFormationClient {
    cancelUpdateStack(args, optionsOrCb, cb) {
        const command = new CancelUpdateStackCommand_1.CancelUpdateStackCommand(args);
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
    continueUpdateRollback(args, optionsOrCb, cb) {
        const command = new ContinueUpdateRollbackCommand_1.ContinueUpdateRollbackCommand(args);
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
    createChangeSet(args, optionsOrCb, cb) {
        const command = new CreateChangeSetCommand_1.CreateChangeSetCommand(args);
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
    createStack(args, optionsOrCb, cb) {
        const command = new CreateStackCommand_1.CreateStackCommand(args);
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
    deleteChangeSet(args, optionsOrCb, cb) {
        const command = new DeleteChangeSetCommand_1.DeleteChangeSetCommand(args);
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
    deleteStack(args, optionsOrCb, cb) {
        const command = new DeleteStackCommand_1.DeleteStackCommand(args);
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
    deregisterType(args, optionsOrCb, cb) {
        const command = new DeregisterTypeCommand_1.DeregisterTypeCommand(args);
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
    describeAccountLimits(args, optionsOrCb, cb) {
        const command = new DescribeAccountLimitsCommand_1.DescribeAccountLimitsCommand(args);
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
    describeChangeSet(args, optionsOrCb, cb) {
        const command = new DescribeChangeSetCommand_1.DescribeChangeSetCommand(args);
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
    describeStackDriftDetectionStatus(args, optionsOrCb, cb) {
        const command = new DescribeStackDriftDetectionStatusCommand_1.DescribeStackDriftDetectionStatusCommand(args);
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
    describeStackEvents(args, optionsOrCb, cb) {
        const command = new DescribeStackEventsCommand_1.DescribeStackEventsCommand(args);
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
    describeStackResource(args, optionsOrCb, cb) {
        const command = new DescribeStackResourceCommand_1.DescribeStackResourceCommand(args);
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
    describeStackResourceDrifts(args, optionsOrCb, cb) {
        const command = new DescribeStackResourceDriftsCommand_1.DescribeStackResourceDriftsCommand(args);
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
    describeStackResources(args, optionsOrCb, cb) {
        const command = new DescribeStackResourcesCommand_1.DescribeStackResourcesCommand(args);
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
    describeStacks(args, optionsOrCb, cb) {
        const command = new DescribeStacksCommand_1.DescribeStacksCommand(args);
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
    describeType(args, optionsOrCb, cb) {
        const command = new DescribeTypeCommand_1.DescribeTypeCommand(args);
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
    describeTypeRegistration(args, optionsOrCb, cb) {
        const command = new DescribeTypeRegistrationCommand_1.DescribeTypeRegistrationCommand(args);
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
    detectStackDrift(args, optionsOrCb, cb) {
        const command = new DetectStackDriftCommand_1.DetectStackDriftCommand(args);
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
    detectStackResourceDrift(args, optionsOrCb, cb) {
        const command = new DetectStackResourceDriftCommand_1.DetectStackResourceDriftCommand(args);
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
    estimateTemplateCost(args, optionsOrCb, cb) {
        const command = new EstimateTemplateCostCommand_1.EstimateTemplateCostCommand(args);
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
    executeChangeSet(args, optionsOrCb, cb) {
        const command = new ExecuteChangeSetCommand_1.ExecuteChangeSetCommand(args);
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
    getStackPolicy(args, optionsOrCb, cb) {
        const command = new GetStackPolicyCommand_1.GetStackPolicyCommand(args);
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
    getTemplate(args, optionsOrCb, cb) {
        const command = new GetTemplateCommand_1.GetTemplateCommand(args);
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
    getTemplateSummary(args, optionsOrCb, cb) {
        const command = new GetTemplateSummaryCommand_1.GetTemplateSummaryCommand(args);
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
    listChangeSets(args, optionsOrCb, cb) {
        const command = new ListChangeSetsCommand_1.ListChangeSetsCommand(args);
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
    listExports(args, optionsOrCb, cb) {
        const command = new ListExportsCommand_1.ListExportsCommand(args);
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
    listImports(args, optionsOrCb, cb) {
        const command = new ListImportsCommand_1.ListImportsCommand(args);
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
    listStackResources(args, optionsOrCb, cb) {
        const command = new ListStackResourcesCommand_1.ListStackResourcesCommand(args);
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
    listStacks(args, optionsOrCb, cb) {
        const command = new ListStacksCommand_1.ListStacksCommand(args);
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
    listTypeRegistrations(args, optionsOrCb, cb) {
        const command = new ListTypeRegistrationsCommand_1.ListTypeRegistrationsCommand(args);
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
    listTypeVersions(args, optionsOrCb, cb) {
        const command = new ListTypeVersionsCommand_1.ListTypeVersionsCommand(args);
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
    listTypes(args, optionsOrCb, cb) {
        const command = new ListTypesCommand_1.ListTypesCommand(args);
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
    recordHandlerProgress(args, optionsOrCb, cb) {
        const command = new RecordHandlerProgressCommand_1.RecordHandlerProgressCommand(args);
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
    registerType(args, optionsOrCb, cb) {
        const command = new RegisterTypeCommand_1.RegisterTypeCommand(args);
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
    setStackPolicy(args, optionsOrCb, cb) {
        const command = new SetStackPolicyCommand_1.SetStackPolicyCommand(args);
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
    setTypeDefaultVersion(args, optionsOrCb, cb) {
        const command = new SetTypeDefaultVersionCommand_1.SetTypeDefaultVersionCommand(args);
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
    signalResource(args, optionsOrCb, cb) {
        const command = new SignalResourceCommand_1.SignalResourceCommand(args);
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
    updateStack(args, optionsOrCb, cb) {
        const command = new UpdateStackCommand_1.UpdateStackCommand(args);
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
    updateTerminationProtection(args, optionsOrCb, cb) {
        const command = new UpdateTerminationProtectionCommand_1.UpdateTerminationProtectionCommand(args);
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
    validateTemplate(args, optionsOrCb, cb) {
        const command = new ValidateTemplateCommand_1.ValidateTemplateCommand(args);
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
    createStackInstances(args, optionsOrCb, cb) {
        const command = new CreateStackInstancesCommand_1.CreateStackInstancesCommand(args);
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
    createStackSet(args, optionsOrCb, cb) {
        const command = new CreateStackSetCommand_1.CreateStackSetCommand(args);
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
    deleteStackInstances(args, optionsOrCb, cb) {
        const command = new DeleteStackInstancesCommand_1.DeleteStackInstancesCommand(args);
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
    deleteStackSet(args, optionsOrCb, cb) {
        const command = new DeleteStackSetCommand_1.DeleteStackSetCommand(args);
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
    describeStackInstance(args, optionsOrCb, cb) {
        const command = new DescribeStackInstanceCommand_1.DescribeStackInstanceCommand(args);
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
    describeStackSet(args, optionsOrCb, cb) {
        const command = new DescribeStackSetCommand_1.DescribeStackSetCommand(args);
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
    describeStackSetOperation(args, optionsOrCb, cb) {
        const command = new DescribeStackSetOperationCommand_1.DescribeStackSetOperationCommand(args);
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
    detectStackSetDrift(args, optionsOrCb, cb) {
        const command = new DetectStackSetDriftCommand_1.DetectStackSetDriftCommand(args);
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
    listStackInstances(args, optionsOrCb, cb) {
        const command = new ListStackInstancesCommand_1.ListStackInstancesCommand(args);
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
    listStackSetOperationResults(args, optionsOrCb, cb) {
        const command = new ListStackSetOperationResultsCommand_1.ListStackSetOperationResultsCommand(args);
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
    listStackSetOperations(args, optionsOrCb, cb) {
        const command = new ListStackSetOperationsCommand_1.ListStackSetOperationsCommand(args);
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
    listStackSets(args, optionsOrCb, cb) {
        const command = new ListStackSetsCommand_1.ListStackSetsCommand(args);
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
    stopStackSetOperation(args, optionsOrCb, cb) {
        const command = new StopStackSetOperationCommand_1.StopStackSetOperationCommand(args);
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
    updateStackInstances(args, optionsOrCb, cb) {
        const command = new UpdateStackInstancesCommand_1.UpdateStackInstancesCommand(args);
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
    updateStackSet(args, optionsOrCb, cb) {
        const command = new UpdateStackSetCommand_1.UpdateStackSetCommand(args);
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
exports.CloudFormation = CloudFormation;
//# sourceMappingURL=CloudFormation.js.map