"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigServiceClient_1 = require("./ConfigServiceClient");
const BatchGetAggregateResourceConfigCommand_1 = require("./commands/BatchGetAggregateResourceConfigCommand");
const BatchGetResourceConfigCommand_1 = require("./commands/BatchGetResourceConfigCommand");
const DeleteAggregationAuthorizationCommand_1 = require("./commands/DeleteAggregationAuthorizationCommand");
const DeleteConfigRuleCommand_1 = require("./commands/DeleteConfigRuleCommand");
const DeleteConfigurationAggregatorCommand_1 = require("./commands/DeleteConfigurationAggregatorCommand");
const DeleteConfigurationRecorderCommand_1 = require("./commands/DeleteConfigurationRecorderCommand");
const DeleteConformancePackCommand_1 = require("./commands/DeleteConformancePackCommand");
const DeleteDeliveryChannelCommand_1 = require("./commands/DeleteDeliveryChannelCommand");
const DeleteEvaluationResultsCommand_1 = require("./commands/DeleteEvaluationResultsCommand");
const DeleteOrganizationConfigRuleCommand_1 = require("./commands/DeleteOrganizationConfigRuleCommand");
const DeleteOrganizationConformancePackCommand_1 = require("./commands/DeleteOrganizationConformancePackCommand");
const DeletePendingAggregationRequestCommand_1 = require("./commands/DeletePendingAggregationRequestCommand");
const DeleteRemediationConfigurationCommand_1 = require("./commands/DeleteRemediationConfigurationCommand");
const DeleteRemediationExceptionsCommand_1 = require("./commands/DeleteRemediationExceptionsCommand");
const DeleteResourceConfigCommand_1 = require("./commands/DeleteResourceConfigCommand");
const DeleteRetentionConfigurationCommand_1 = require("./commands/DeleteRetentionConfigurationCommand");
const DeliverConfigSnapshotCommand_1 = require("./commands/DeliverConfigSnapshotCommand");
const DescribeAggregateComplianceByConfigRulesCommand_1 = require("./commands/DescribeAggregateComplianceByConfigRulesCommand");
const DescribeAggregationAuthorizationsCommand_1 = require("./commands/DescribeAggregationAuthorizationsCommand");
const DescribeComplianceByConfigRuleCommand_1 = require("./commands/DescribeComplianceByConfigRuleCommand");
const DescribeComplianceByResourceCommand_1 = require("./commands/DescribeComplianceByResourceCommand");
const DescribeConfigRuleEvaluationStatusCommand_1 = require("./commands/DescribeConfigRuleEvaluationStatusCommand");
const DescribeConfigRulesCommand_1 = require("./commands/DescribeConfigRulesCommand");
const DescribeConfigurationAggregatorSourcesStatusCommand_1 = require("./commands/DescribeConfigurationAggregatorSourcesStatusCommand");
const DescribeConfigurationAggregatorsCommand_1 = require("./commands/DescribeConfigurationAggregatorsCommand");
const DescribeConfigurationRecorderStatusCommand_1 = require("./commands/DescribeConfigurationRecorderStatusCommand");
const DescribeConfigurationRecordersCommand_1 = require("./commands/DescribeConfigurationRecordersCommand");
const DescribeConformancePackComplianceCommand_1 = require("./commands/DescribeConformancePackComplianceCommand");
const DescribeConformancePackStatusCommand_1 = require("./commands/DescribeConformancePackStatusCommand");
const DescribeConformancePacksCommand_1 = require("./commands/DescribeConformancePacksCommand");
const DescribeDeliveryChannelStatusCommand_1 = require("./commands/DescribeDeliveryChannelStatusCommand");
const DescribeDeliveryChannelsCommand_1 = require("./commands/DescribeDeliveryChannelsCommand");
const DescribeOrganizationConfigRuleStatusesCommand_1 = require("./commands/DescribeOrganizationConfigRuleStatusesCommand");
const DescribeOrganizationConfigRulesCommand_1 = require("./commands/DescribeOrganizationConfigRulesCommand");
const DescribeOrganizationConformancePackStatusesCommand_1 = require("./commands/DescribeOrganizationConformancePackStatusesCommand");
const DescribeOrganizationConformancePacksCommand_1 = require("./commands/DescribeOrganizationConformancePacksCommand");
const DescribePendingAggregationRequestsCommand_1 = require("./commands/DescribePendingAggregationRequestsCommand");
const DescribeRemediationConfigurationsCommand_1 = require("./commands/DescribeRemediationConfigurationsCommand");
const DescribeRemediationExceptionsCommand_1 = require("./commands/DescribeRemediationExceptionsCommand");
const DescribeRemediationExecutionStatusCommand_1 = require("./commands/DescribeRemediationExecutionStatusCommand");
const DescribeRetentionConfigurationsCommand_1 = require("./commands/DescribeRetentionConfigurationsCommand");
const GetAggregateComplianceDetailsByConfigRuleCommand_1 = require("./commands/GetAggregateComplianceDetailsByConfigRuleCommand");
const GetAggregateConfigRuleComplianceSummaryCommand_1 = require("./commands/GetAggregateConfigRuleComplianceSummaryCommand");
const GetAggregateDiscoveredResourceCountsCommand_1 = require("./commands/GetAggregateDiscoveredResourceCountsCommand");
const GetAggregateResourceConfigCommand_1 = require("./commands/GetAggregateResourceConfigCommand");
const GetComplianceDetailsByConfigRuleCommand_1 = require("./commands/GetComplianceDetailsByConfigRuleCommand");
const GetComplianceDetailsByResourceCommand_1 = require("./commands/GetComplianceDetailsByResourceCommand");
const GetComplianceSummaryByConfigRuleCommand_1 = require("./commands/GetComplianceSummaryByConfigRuleCommand");
const GetComplianceSummaryByResourceTypeCommand_1 = require("./commands/GetComplianceSummaryByResourceTypeCommand");
const GetConformancePackComplianceDetailsCommand_1 = require("./commands/GetConformancePackComplianceDetailsCommand");
const GetConformancePackComplianceSummaryCommand_1 = require("./commands/GetConformancePackComplianceSummaryCommand");
const GetDiscoveredResourceCountsCommand_1 = require("./commands/GetDiscoveredResourceCountsCommand");
const GetOrganizationConfigRuleDetailedStatusCommand_1 = require("./commands/GetOrganizationConfigRuleDetailedStatusCommand");
const GetOrganizationConformancePackDetailedStatusCommand_1 = require("./commands/GetOrganizationConformancePackDetailedStatusCommand");
const GetResourceConfigHistoryCommand_1 = require("./commands/GetResourceConfigHistoryCommand");
const ListAggregateDiscoveredResourcesCommand_1 = require("./commands/ListAggregateDiscoveredResourcesCommand");
const ListDiscoveredResourcesCommand_1 = require("./commands/ListDiscoveredResourcesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutAggregationAuthorizationCommand_1 = require("./commands/PutAggregationAuthorizationCommand");
const PutConfigRuleCommand_1 = require("./commands/PutConfigRuleCommand");
const PutConfigurationAggregatorCommand_1 = require("./commands/PutConfigurationAggregatorCommand");
const PutConfigurationRecorderCommand_1 = require("./commands/PutConfigurationRecorderCommand");
const PutConformancePackCommand_1 = require("./commands/PutConformancePackCommand");
const PutDeliveryChannelCommand_1 = require("./commands/PutDeliveryChannelCommand");
const PutEvaluationsCommand_1 = require("./commands/PutEvaluationsCommand");
const PutOrganizationConfigRuleCommand_1 = require("./commands/PutOrganizationConfigRuleCommand");
const PutOrganizationConformancePackCommand_1 = require("./commands/PutOrganizationConformancePackCommand");
const PutRemediationConfigurationsCommand_1 = require("./commands/PutRemediationConfigurationsCommand");
const PutRemediationExceptionsCommand_1 = require("./commands/PutRemediationExceptionsCommand");
const PutResourceConfigCommand_1 = require("./commands/PutResourceConfigCommand");
const PutRetentionConfigurationCommand_1 = require("./commands/PutRetentionConfigurationCommand");
const SelectResourceConfigCommand_1 = require("./commands/SelectResourceConfigCommand");
const StartConfigRulesEvaluationCommand_1 = require("./commands/StartConfigRulesEvaluationCommand");
const StartConfigurationRecorderCommand_1 = require("./commands/StartConfigurationRecorderCommand");
const StartRemediationExecutionCommand_1 = require("./commands/StartRemediationExecutionCommand");
const StopConfigurationRecorderCommand_1 = require("./commands/StopConfigurationRecorderCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
/**
 * <fullname>AWS Config</fullname>
 *
 * 		       <p>AWS Config provides a way to keep track of the configurations
 * 			of all the AWS resources associated with your AWS account. You can
 * 			use AWS Config to get the current and historical configurations of
 * 			each AWS resource and also to get information about the relationship
 * 			between the resources. An AWS resource can be an Amazon Compute
 * 			Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an
 * 			elastic network Interface (ENI), or a security group. For a complete
 * 			list of resources currently supported by AWS Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported AWS Resources</a>.</p>
 *
 * 		       <p>You can access and manage AWS Config through the AWS Management
 * 			Console, the AWS Command Line Interface (AWS CLI), the AWS Config
 * 			API, or the AWS SDKs for AWS Config. This reference guide contains
 * 			documentation for the AWS Config API and the AWS CLI commands that
 * 			you can use to manage AWS Config. The AWS Config API uses the
 * 			Signature Version 4 protocol for signing requests. For more
 * 			information about how to sign a request with this protocol, see
 * 				<a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
 * 				Version 4 Signing Process</a>. For detailed information
 * 			about AWS Config features and their associated actions or commands,
 * 			as well as how to work with AWS Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is AWS
 * 				Config</a> in the <i>AWS Config Developer
 * 				Guide</i>.</p>
 */
class ConfigService extends ConfigServiceClient_1.ConfigServiceClient {
    batchGetAggregateResourceConfig(args, optionsOrCb, cb) {
        const command = new BatchGetAggregateResourceConfigCommand_1.BatchGetAggregateResourceConfigCommand(args);
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
    batchGetResourceConfig(args, optionsOrCb, cb) {
        const command = new BatchGetResourceConfigCommand_1.BatchGetResourceConfigCommand(args);
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
    deleteAggregationAuthorization(args, optionsOrCb, cb) {
        const command = new DeleteAggregationAuthorizationCommand_1.DeleteAggregationAuthorizationCommand(args);
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
    deleteConfigRule(args, optionsOrCb, cb) {
        const command = new DeleteConfigRuleCommand_1.DeleteConfigRuleCommand(args);
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
    deleteConfigurationAggregator(args, optionsOrCb, cb) {
        const command = new DeleteConfigurationAggregatorCommand_1.DeleteConfigurationAggregatorCommand(args);
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
    deleteConfigurationRecorder(args, optionsOrCb, cb) {
        const command = new DeleteConfigurationRecorderCommand_1.DeleteConfigurationRecorderCommand(args);
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
    deleteConformancePack(args, optionsOrCb, cb) {
        const command = new DeleteConformancePackCommand_1.DeleteConformancePackCommand(args);
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
    deleteDeliveryChannel(args, optionsOrCb, cb) {
        const command = new DeleteDeliveryChannelCommand_1.DeleteDeliveryChannelCommand(args);
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
    deleteEvaluationResults(args, optionsOrCb, cb) {
        const command = new DeleteEvaluationResultsCommand_1.DeleteEvaluationResultsCommand(args);
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
    deleteOrganizationConfigRule(args, optionsOrCb, cb) {
        const command = new DeleteOrganizationConfigRuleCommand_1.DeleteOrganizationConfigRuleCommand(args);
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
    deleteOrganizationConformancePack(args, optionsOrCb, cb) {
        const command = new DeleteOrganizationConformancePackCommand_1.DeleteOrganizationConformancePackCommand(args);
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
    deletePendingAggregationRequest(args, optionsOrCb, cb) {
        const command = new DeletePendingAggregationRequestCommand_1.DeletePendingAggregationRequestCommand(args);
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
    deleteRemediationConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteRemediationConfigurationCommand_1.DeleteRemediationConfigurationCommand(args);
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
    deleteRemediationExceptions(args, optionsOrCb, cb) {
        const command = new DeleteRemediationExceptionsCommand_1.DeleteRemediationExceptionsCommand(args);
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
    deleteResourceConfig(args, optionsOrCb, cb) {
        const command = new DeleteResourceConfigCommand_1.DeleteResourceConfigCommand(args);
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
    deleteRetentionConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteRetentionConfigurationCommand_1.DeleteRetentionConfigurationCommand(args);
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
    deliverConfigSnapshot(args, optionsOrCb, cb) {
        const command = new DeliverConfigSnapshotCommand_1.DeliverConfigSnapshotCommand(args);
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
    describeAggregateComplianceByConfigRules(args, optionsOrCb, cb) {
        const command = new DescribeAggregateComplianceByConfigRulesCommand_1.DescribeAggregateComplianceByConfigRulesCommand(args);
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
    describeAggregationAuthorizations(args, optionsOrCb, cb) {
        const command = new DescribeAggregationAuthorizationsCommand_1.DescribeAggregationAuthorizationsCommand(args);
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
    describeComplianceByConfigRule(args, optionsOrCb, cb) {
        const command = new DescribeComplianceByConfigRuleCommand_1.DescribeComplianceByConfigRuleCommand(args);
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
    describeComplianceByResource(args, optionsOrCb, cb) {
        const command = new DescribeComplianceByResourceCommand_1.DescribeComplianceByResourceCommand(args);
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
    describeConfigRuleEvaluationStatus(args, optionsOrCb, cb) {
        const command = new DescribeConfigRuleEvaluationStatusCommand_1.DescribeConfigRuleEvaluationStatusCommand(args);
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
    describeConfigRules(args, optionsOrCb, cb) {
        const command = new DescribeConfigRulesCommand_1.DescribeConfigRulesCommand(args);
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
    describeConfigurationAggregatorSourcesStatus(args, optionsOrCb, cb) {
        const command = new DescribeConfigurationAggregatorSourcesStatusCommand_1.DescribeConfigurationAggregatorSourcesStatusCommand(args);
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
    describeConfigurationAggregators(args, optionsOrCb, cb) {
        const command = new DescribeConfigurationAggregatorsCommand_1.DescribeConfigurationAggregatorsCommand(args);
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
    describeConfigurationRecorderStatus(args, optionsOrCb, cb) {
        const command = new DescribeConfigurationRecorderStatusCommand_1.DescribeConfigurationRecorderStatusCommand(args);
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
    describeConfigurationRecorders(args, optionsOrCb, cb) {
        const command = new DescribeConfigurationRecordersCommand_1.DescribeConfigurationRecordersCommand(args);
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
    describeConformancePackCompliance(args, optionsOrCb, cb) {
        const command = new DescribeConformancePackComplianceCommand_1.DescribeConformancePackComplianceCommand(args);
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
    describeConformancePackStatus(args, optionsOrCb, cb) {
        const command = new DescribeConformancePackStatusCommand_1.DescribeConformancePackStatusCommand(args);
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
    describeConformancePacks(args, optionsOrCb, cb) {
        const command = new DescribeConformancePacksCommand_1.DescribeConformancePacksCommand(args);
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
    describeDeliveryChannelStatus(args, optionsOrCb, cb) {
        const command = new DescribeDeliveryChannelStatusCommand_1.DescribeDeliveryChannelStatusCommand(args);
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
    describeDeliveryChannels(args, optionsOrCb, cb) {
        const command = new DescribeDeliveryChannelsCommand_1.DescribeDeliveryChannelsCommand(args);
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
    describeOrganizationConfigRuleStatuses(args, optionsOrCb, cb) {
        const command = new DescribeOrganizationConfigRuleStatusesCommand_1.DescribeOrganizationConfigRuleStatusesCommand(args);
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
    describeOrganizationConfigRules(args, optionsOrCb, cb) {
        const command = new DescribeOrganizationConfigRulesCommand_1.DescribeOrganizationConfigRulesCommand(args);
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
    describeOrganizationConformancePackStatuses(args, optionsOrCb, cb) {
        const command = new DescribeOrganizationConformancePackStatusesCommand_1.DescribeOrganizationConformancePackStatusesCommand(args);
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
    describeOrganizationConformancePacks(args, optionsOrCb, cb) {
        const command = new DescribeOrganizationConformancePacksCommand_1.DescribeOrganizationConformancePacksCommand(args);
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
    describePendingAggregationRequests(args, optionsOrCb, cb) {
        const command = new DescribePendingAggregationRequestsCommand_1.DescribePendingAggregationRequestsCommand(args);
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
    describeRemediationConfigurations(args, optionsOrCb, cb) {
        const command = new DescribeRemediationConfigurationsCommand_1.DescribeRemediationConfigurationsCommand(args);
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
    describeRemediationExceptions(args, optionsOrCb, cb) {
        const command = new DescribeRemediationExceptionsCommand_1.DescribeRemediationExceptionsCommand(args);
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
    describeRemediationExecutionStatus(args, optionsOrCb, cb) {
        const command = new DescribeRemediationExecutionStatusCommand_1.DescribeRemediationExecutionStatusCommand(args);
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
    describeRetentionConfigurations(args, optionsOrCb, cb) {
        const command = new DescribeRetentionConfigurationsCommand_1.DescribeRetentionConfigurationsCommand(args);
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
    getAggregateComplianceDetailsByConfigRule(args, optionsOrCb, cb) {
        const command = new GetAggregateComplianceDetailsByConfigRuleCommand_1.GetAggregateComplianceDetailsByConfigRuleCommand(args);
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
    getAggregateConfigRuleComplianceSummary(args, optionsOrCb, cb) {
        const command = new GetAggregateConfigRuleComplianceSummaryCommand_1.GetAggregateConfigRuleComplianceSummaryCommand(args);
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
    getAggregateDiscoveredResourceCounts(args, optionsOrCb, cb) {
        const command = new GetAggregateDiscoveredResourceCountsCommand_1.GetAggregateDiscoveredResourceCountsCommand(args);
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
    getAggregateResourceConfig(args, optionsOrCb, cb) {
        const command = new GetAggregateResourceConfigCommand_1.GetAggregateResourceConfigCommand(args);
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
    getComplianceDetailsByConfigRule(args, optionsOrCb, cb) {
        const command = new GetComplianceDetailsByConfigRuleCommand_1.GetComplianceDetailsByConfigRuleCommand(args);
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
    getComplianceDetailsByResource(args, optionsOrCb, cb) {
        const command = new GetComplianceDetailsByResourceCommand_1.GetComplianceDetailsByResourceCommand(args);
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
    getComplianceSummaryByConfigRule(args, optionsOrCb, cb) {
        const command = new GetComplianceSummaryByConfigRuleCommand_1.GetComplianceSummaryByConfigRuleCommand(args);
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
    getComplianceSummaryByResourceType(args, optionsOrCb, cb) {
        const command = new GetComplianceSummaryByResourceTypeCommand_1.GetComplianceSummaryByResourceTypeCommand(args);
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
    getConformancePackComplianceDetails(args, optionsOrCb, cb) {
        const command = new GetConformancePackComplianceDetailsCommand_1.GetConformancePackComplianceDetailsCommand(args);
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
    getConformancePackComplianceSummary(args, optionsOrCb, cb) {
        const command = new GetConformancePackComplianceSummaryCommand_1.GetConformancePackComplianceSummaryCommand(args);
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
    getDiscoveredResourceCounts(args, optionsOrCb, cb) {
        const command = new GetDiscoveredResourceCountsCommand_1.GetDiscoveredResourceCountsCommand(args);
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
    getOrganizationConfigRuleDetailedStatus(args, optionsOrCb, cb) {
        const command = new GetOrganizationConfigRuleDetailedStatusCommand_1.GetOrganizationConfigRuleDetailedStatusCommand(args);
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
    getOrganizationConformancePackDetailedStatus(args, optionsOrCb, cb) {
        const command = new GetOrganizationConformancePackDetailedStatusCommand_1.GetOrganizationConformancePackDetailedStatusCommand(args);
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
    getResourceConfigHistory(args, optionsOrCb, cb) {
        const command = new GetResourceConfigHistoryCommand_1.GetResourceConfigHistoryCommand(args);
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
    listAggregateDiscoveredResources(args, optionsOrCb, cb) {
        const command = new ListAggregateDiscoveredResourcesCommand_1.ListAggregateDiscoveredResourcesCommand(args);
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
    listDiscoveredResources(args, optionsOrCb, cb) {
        const command = new ListDiscoveredResourcesCommand_1.ListDiscoveredResourcesCommand(args);
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
    putAggregationAuthorization(args, optionsOrCb, cb) {
        const command = new PutAggregationAuthorizationCommand_1.PutAggregationAuthorizationCommand(args);
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
    putConfigRule(args, optionsOrCb, cb) {
        const command = new PutConfigRuleCommand_1.PutConfigRuleCommand(args);
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
    putConfigurationAggregator(args, optionsOrCb, cb) {
        const command = new PutConfigurationAggregatorCommand_1.PutConfigurationAggregatorCommand(args);
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
    putConfigurationRecorder(args, optionsOrCb, cb) {
        const command = new PutConfigurationRecorderCommand_1.PutConfigurationRecorderCommand(args);
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
    putConformancePack(args, optionsOrCb, cb) {
        const command = new PutConformancePackCommand_1.PutConformancePackCommand(args);
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
    putDeliveryChannel(args, optionsOrCb, cb) {
        const command = new PutDeliveryChannelCommand_1.PutDeliveryChannelCommand(args);
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
    putEvaluations(args, optionsOrCb, cb) {
        const command = new PutEvaluationsCommand_1.PutEvaluationsCommand(args);
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
    putOrganizationConfigRule(args, optionsOrCb, cb) {
        const command = new PutOrganizationConfigRuleCommand_1.PutOrganizationConfigRuleCommand(args);
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
    putOrganizationConformancePack(args, optionsOrCb, cb) {
        const command = new PutOrganizationConformancePackCommand_1.PutOrganizationConformancePackCommand(args);
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
    putRemediationConfigurations(args, optionsOrCb, cb) {
        const command = new PutRemediationConfigurationsCommand_1.PutRemediationConfigurationsCommand(args);
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
    putRemediationExceptions(args, optionsOrCb, cb) {
        const command = new PutRemediationExceptionsCommand_1.PutRemediationExceptionsCommand(args);
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
    putResourceConfig(args, optionsOrCb, cb) {
        const command = new PutResourceConfigCommand_1.PutResourceConfigCommand(args);
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
    putRetentionConfiguration(args, optionsOrCb, cb) {
        const command = new PutRetentionConfigurationCommand_1.PutRetentionConfigurationCommand(args);
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
    selectResourceConfig(args, optionsOrCb, cb) {
        const command = new SelectResourceConfigCommand_1.SelectResourceConfigCommand(args);
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
    startConfigRulesEvaluation(args, optionsOrCb, cb) {
        const command = new StartConfigRulesEvaluationCommand_1.StartConfigRulesEvaluationCommand(args);
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
    startConfigurationRecorder(args, optionsOrCb, cb) {
        const command = new StartConfigurationRecorderCommand_1.StartConfigurationRecorderCommand(args);
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
    startRemediationExecution(args, optionsOrCb, cb) {
        const command = new StartRemediationExecutionCommand_1.StartRemediationExecutionCommand(args);
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
    stopConfigurationRecorder(args, optionsOrCb, cb) {
        const command = new StopConfigurationRecorderCommand_1.StopConfigurationRecorderCommand(args);
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
exports.ConfigService = ConfigService;
//# sourceMappingURL=ConfigService.js.map