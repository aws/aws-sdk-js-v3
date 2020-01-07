"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ElasticBeanstalkClient_1 = require("./ElasticBeanstalkClient");
const AbortEnvironmentUpdateCommand_1 = require("./commands/AbortEnvironmentUpdateCommand");
const ApplyEnvironmentManagedActionCommand_1 = require("./commands/ApplyEnvironmentManagedActionCommand");
const CheckDNSAvailabilityCommand_1 = require("./commands/CheckDNSAvailabilityCommand");
const ComposeEnvironmentsCommand_1 = require("./commands/ComposeEnvironmentsCommand");
const CreateApplicationCommand_1 = require("./commands/CreateApplicationCommand");
const CreateApplicationVersionCommand_1 = require("./commands/CreateApplicationVersionCommand");
const CreateConfigurationTemplateCommand_1 = require("./commands/CreateConfigurationTemplateCommand");
const CreateEnvironmentCommand_1 = require("./commands/CreateEnvironmentCommand");
const CreatePlatformVersionCommand_1 = require("./commands/CreatePlatformVersionCommand");
const CreateStorageLocationCommand_1 = require("./commands/CreateStorageLocationCommand");
const DeleteApplicationCommand_1 = require("./commands/DeleteApplicationCommand");
const DeleteApplicationVersionCommand_1 = require("./commands/DeleteApplicationVersionCommand");
const DeleteConfigurationTemplateCommand_1 = require("./commands/DeleteConfigurationTemplateCommand");
const DeleteEnvironmentConfigurationCommand_1 = require("./commands/DeleteEnvironmentConfigurationCommand");
const DeletePlatformVersionCommand_1 = require("./commands/DeletePlatformVersionCommand");
const DescribeAccountAttributesCommand_1 = require("./commands/DescribeAccountAttributesCommand");
const DescribeApplicationVersionsCommand_1 = require("./commands/DescribeApplicationVersionsCommand");
const DescribeApplicationsCommand_1 = require("./commands/DescribeApplicationsCommand");
const DescribeConfigurationOptionsCommand_1 = require("./commands/DescribeConfigurationOptionsCommand");
const DescribeConfigurationSettingsCommand_1 = require("./commands/DescribeConfigurationSettingsCommand");
const DescribeEnvironmentHealthCommand_1 = require("./commands/DescribeEnvironmentHealthCommand");
const DescribeEnvironmentManagedActionHistoryCommand_1 = require("./commands/DescribeEnvironmentManagedActionHistoryCommand");
const DescribeEnvironmentManagedActionsCommand_1 = require("./commands/DescribeEnvironmentManagedActionsCommand");
const DescribeEnvironmentResourcesCommand_1 = require("./commands/DescribeEnvironmentResourcesCommand");
const DescribeEnvironmentsCommand_1 = require("./commands/DescribeEnvironmentsCommand");
const DescribeEventsCommand_1 = require("./commands/DescribeEventsCommand");
const DescribeInstancesHealthCommand_1 = require("./commands/DescribeInstancesHealthCommand");
const DescribePlatformVersionCommand_1 = require("./commands/DescribePlatformVersionCommand");
const ListAvailableSolutionStacksCommand_1 = require("./commands/ListAvailableSolutionStacksCommand");
const ListPlatformVersionsCommand_1 = require("./commands/ListPlatformVersionsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const RebuildEnvironmentCommand_1 = require("./commands/RebuildEnvironmentCommand");
const RequestEnvironmentInfoCommand_1 = require("./commands/RequestEnvironmentInfoCommand");
const RestartAppServerCommand_1 = require("./commands/RestartAppServerCommand");
const RetrieveEnvironmentInfoCommand_1 = require("./commands/RetrieveEnvironmentInfoCommand");
const SwapEnvironmentCNAMEsCommand_1 = require("./commands/SwapEnvironmentCNAMEsCommand");
const TerminateEnvironmentCommand_1 = require("./commands/TerminateEnvironmentCommand");
const UpdateApplicationCommand_1 = require("./commands/UpdateApplicationCommand");
const UpdateApplicationResourceLifecycleCommand_1 = require("./commands/UpdateApplicationResourceLifecycleCommand");
const UpdateApplicationVersionCommand_1 = require("./commands/UpdateApplicationVersionCommand");
const UpdateConfigurationTemplateCommand_1 = require("./commands/UpdateConfigurationTemplateCommand");
const UpdateEnvironmentCommand_1 = require("./commands/UpdateEnvironmentCommand");
const UpdateTagsForResourceCommand_1 = require("./commands/UpdateTagsForResourceCommand");
const ValidateConfigurationSettingsCommand_1 = require("./commands/ValidateConfigurationSettingsCommand");
/**
 * <fullname>AWS Elastic Beanstalk</fullname>
 *
 *
 *          <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable,
 *       fault-tolerant applications running on the Amazon Web Services cloud.</p>
 *          <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the
 *       latest AWS Elastic Beanstalk WSDL is <a href="http://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">http://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>.
 *       To install the Software Development Kits (SDKs), Integrated Development Environment (IDE)
 *       Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to
 *         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services
 *       Glossary</i>.</p>
 */
class ElasticBeanstalk extends ElasticBeanstalkClient_1.ElasticBeanstalkClient {
    abortEnvironmentUpdate(args, optionsOrCb, cb) {
        const command = new AbortEnvironmentUpdateCommand_1.AbortEnvironmentUpdateCommand(args);
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
    applyEnvironmentManagedAction(args, optionsOrCb, cb) {
        const command = new ApplyEnvironmentManagedActionCommand_1.ApplyEnvironmentManagedActionCommand(args);
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
    checkDNSAvailability(args, optionsOrCb, cb) {
        const command = new CheckDNSAvailabilityCommand_1.CheckDNSAvailabilityCommand(args);
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
    composeEnvironments(args, optionsOrCb, cb) {
        const command = new ComposeEnvironmentsCommand_1.ComposeEnvironmentsCommand(args);
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
    createApplicationVersion(args, optionsOrCb, cb) {
        const command = new CreateApplicationVersionCommand_1.CreateApplicationVersionCommand(args);
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
    createConfigurationTemplate(args, optionsOrCb, cb) {
        const command = new CreateConfigurationTemplateCommand_1.CreateConfigurationTemplateCommand(args);
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
    createEnvironment(args, optionsOrCb, cb) {
        const command = new CreateEnvironmentCommand_1.CreateEnvironmentCommand(args);
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
    createPlatformVersion(args, optionsOrCb, cb) {
        const command = new CreatePlatformVersionCommand_1.CreatePlatformVersionCommand(args);
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
    createStorageLocation(args, optionsOrCb, cb) {
        const command = new CreateStorageLocationCommand_1.CreateStorageLocationCommand(args);
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
    deleteApplicationVersion(args, optionsOrCb, cb) {
        const command = new DeleteApplicationVersionCommand_1.DeleteApplicationVersionCommand(args);
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
    deleteConfigurationTemplate(args, optionsOrCb, cb) {
        const command = new DeleteConfigurationTemplateCommand_1.DeleteConfigurationTemplateCommand(args);
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
    deleteEnvironmentConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteEnvironmentConfigurationCommand_1.DeleteEnvironmentConfigurationCommand(args);
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
    deletePlatformVersion(args, optionsOrCb, cb) {
        const command = new DeletePlatformVersionCommand_1.DeletePlatformVersionCommand(args);
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
    describeAccountAttributes(args, optionsOrCb, cb) {
        const command = new DescribeAccountAttributesCommand_1.DescribeAccountAttributesCommand(args);
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
    describeApplicationVersions(args, optionsOrCb, cb) {
        const command = new DescribeApplicationVersionsCommand_1.DescribeApplicationVersionsCommand(args);
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
    describeApplications(args, optionsOrCb, cb) {
        const command = new DescribeApplicationsCommand_1.DescribeApplicationsCommand(args);
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
    describeConfigurationOptions(args, optionsOrCb, cb) {
        const command = new DescribeConfigurationOptionsCommand_1.DescribeConfigurationOptionsCommand(args);
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
    describeConfigurationSettings(args, optionsOrCb, cb) {
        const command = new DescribeConfigurationSettingsCommand_1.DescribeConfigurationSettingsCommand(args);
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
    describeEnvironmentHealth(args, optionsOrCb, cb) {
        const command = new DescribeEnvironmentHealthCommand_1.DescribeEnvironmentHealthCommand(args);
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
    describeEnvironmentManagedActionHistory(args, optionsOrCb, cb) {
        const command = new DescribeEnvironmentManagedActionHistoryCommand_1.DescribeEnvironmentManagedActionHistoryCommand(args);
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
    describeEnvironmentManagedActions(args, optionsOrCb, cb) {
        const command = new DescribeEnvironmentManagedActionsCommand_1.DescribeEnvironmentManagedActionsCommand(args);
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
    describeEnvironmentResources(args, optionsOrCb, cb) {
        const command = new DescribeEnvironmentResourcesCommand_1.DescribeEnvironmentResourcesCommand(args);
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
    describeEnvironments(args, optionsOrCb, cb) {
        const command = new DescribeEnvironmentsCommand_1.DescribeEnvironmentsCommand(args);
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
    describeEvents(args, optionsOrCb, cb) {
        const command = new DescribeEventsCommand_1.DescribeEventsCommand(args);
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
    describeInstancesHealth(args, optionsOrCb, cb) {
        const command = new DescribeInstancesHealthCommand_1.DescribeInstancesHealthCommand(args);
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
    describePlatformVersion(args, optionsOrCb, cb) {
        const command = new DescribePlatformVersionCommand_1.DescribePlatformVersionCommand(args);
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
    listAvailableSolutionStacks(args, optionsOrCb, cb) {
        const command = new ListAvailableSolutionStacksCommand_1.ListAvailableSolutionStacksCommand(args);
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
    listPlatformVersions(args, optionsOrCb, cb) {
        const command = new ListPlatformVersionsCommand_1.ListPlatformVersionsCommand(args);
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
    rebuildEnvironment(args, optionsOrCb, cb) {
        const command = new RebuildEnvironmentCommand_1.RebuildEnvironmentCommand(args);
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
    requestEnvironmentInfo(args, optionsOrCb, cb) {
        const command = new RequestEnvironmentInfoCommand_1.RequestEnvironmentInfoCommand(args);
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
    restartAppServer(args, optionsOrCb, cb) {
        const command = new RestartAppServerCommand_1.RestartAppServerCommand(args);
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
    retrieveEnvironmentInfo(args, optionsOrCb, cb) {
        const command = new RetrieveEnvironmentInfoCommand_1.RetrieveEnvironmentInfoCommand(args);
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
    swapEnvironmentCNAMEs(args, optionsOrCb, cb) {
        const command = new SwapEnvironmentCNAMEsCommand_1.SwapEnvironmentCNAMEsCommand(args);
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
    terminateEnvironment(args, optionsOrCb, cb) {
        const command = new TerminateEnvironmentCommand_1.TerminateEnvironmentCommand(args);
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
    updateApplicationResourceLifecycle(args, optionsOrCb, cb) {
        const command = new UpdateApplicationResourceLifecycleCommand_1.UpdateApplicationResourceLifecycleCommand(args);
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
    updateApplicationVersion(args, optionsOrCb, cb) {
        const command = new UpdateApplicationVersionCommand_1.UpdateApplicationVersionCommand(args);
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
    updateConfigurationTemplate(args, optionsOrCb, cb) {
        const command = new UpdateConfigurationTemplateCommand_1.UpdateConfigurationTemplateCommand(args);
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
    updateEnvironment(args, optionsOrCb, cb) {
        const command = new UpdateEnvironmentCommand_1.UpdateEnvironmentCommand(args);
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
    updateTagsForResource(args, optionsOrCb, cb) {
        const command = new UpdateTagsForResourceCommand_1.UpdateTagsForResourceCommand(args);
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
    validateConfigurationSettings(args, optionsOrCb, cb) {
        const command = new ValidateConfigurationSettingsCommand_1.ValidateConfigurationSettingsCommand(args);
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
exports.ElasticBeanstalk = ElasticBeanstalk;
//# sourceMappingURL=ElasticBeanstalk.js.map