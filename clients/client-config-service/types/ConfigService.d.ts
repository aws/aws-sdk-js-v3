import { ConfigServiceClient } from "./ConfigServiceClient";
import { BatchGetAggregateResourceConfigCommandInput, BatchGetAggregateResourceConfigCommandOutput } from "./commands/BatchGetAggregateResourceConfigCommand";
import { BatchGetResourceConfigCommandInput, BatchGetResourceConfigCommandOutput } from "./commands/BatchGetResourceConfigCommand";
import { DeleteAggregationAuthorizationCommandInput, DeleteAggregationAuthorizationCommandOutput } from "./commands/DeleteAggregationAuthorizationCommand";
import { DeleteConfigRuleCommandInput, DeleteConfigRuleCommandOutput } from "./commands/DeleteConfigRuleCommand";
import { DeleteConfigurationAggregatorCommandInput, DeleteConfigurationAggregatorCommandOutput } from "./commands/DeleteConfigurationAggregatorCommand";
import { DeleteConfigurationRecorderCommandInput, DeleteConfigurationRecorderCommandOutput } from "./commands/DeleteConfigurationRecorderCommand";
import { DeleteConformancePackCommandInput, DeleteConformancePackCommandOutput } from "./commands/DeleteConformancePackCommand";
import { DeleteDeliveryChannelCommandInput, DeleteDeliveryChannelCommandOutput } from "./commands/DeleteDeliveryChannelCommand";
import { DeleteEvaluationResultsCommandInput, DeleteEvaluationResultsCommandOutput } from "./commands/DeleteEvaluationResultsCommand";
import { DeleteOrganizationConfigRuleCommandInput, DeleteOrganizationConfigRuleCommandOutput } from "./commands/DeleteOrganizationConfigRuleCommand";
import { DeleteOrganizationConformancePackCommandInput, DeleteOrganizationConformancePackCommandOutput } from "./commands/DeleteOrganizationConformancePackCommand";
import { DeletePendingAggregationRequestCommandInput, DeletePendingAggregationRequestCommandOutput } from "./commands/DeletePendingAggregationRequestCommand";
import { DeleteRemediationConfigurationCommandInput, DeleteRemediationConfigurationCommandOutput } from "./commands/DeleteRemediationConfigurationCommand";
import { DeleteRemediationExceptionsCommandInput, DeleteRemediationExceptionsCommandOutput } from "./commands/DeleteRemediationExceptionsCommand";
import { DeleteResourceConfigCommandInput, DeleteResourceConfigCommandOutput } from "./commands/DeleteResourceConfigCommand";
import { DeleteRetentionConfigurationCommandInput, DeleteRetentionConfigurationCommandOutput } from "./commands/DeleteRetentionConfigurationCommand";
import { DeliverConfigSnapshotCommandInput, DeliverConfigSnapshotCommandOutput } from "./commands/DeliverConfigSnapshotCommand";
import { DescribeAggregateComplianceByConfigRulesCommandInput, DescribeAggregateComplianceByConfigRulesCommandOutput } from "./commands/DescribeAggregateComplianceByConfigRulesCommand";
import { DescribeAggregationAuthorizationsCommandInput, DescribeAggregationAuthorizationsCommandOutput } from "./commands/DescribeAggregationAuthorizationsCommand";
import { DescribeComplianceByConfigRuleCommandInput, DescribeComplianceByConfigRuleCommandOutput } from "./commands/DescribeComplianceByConfigRuleCommand";
import { DescribeComplianceByResourceCommandInput, DescribeComplianceByResourceCommandOutput } from "./commands/DescribeComplianceByResourceCommand";
import { DescribeConfigRuleEvaluationStatusCommandInput, DescribeConfigRuleEvaluationStatusCommandOutput } from "./commands/DescribeConfigRuleEvaluationStatusCommand";
import { DescribeConfigRulesCommandInput, DescribeConfigRulesCommandOutput } from "./commands/DescribeConfigRulesCommand";
import { DescribeConfigurationAggregatorSourcesStatusCommandInput, DescribeConfigurationAggregatorSourcesStatusCommandOutput } from "./commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import { DescribeConfigurationAggregatorsCommandInput, DescribeConfigurationAggregatorsCommandOutput } from "./commands/DescribeConfigurationAggregatorsCommand";
import { DescribeConfigurationRecorderStatusCommandInput, DescribeConfigurationRecorderStatusCommandOutput } from "./commands/DescribeConfigurationRecorderStatusCommand";
import { DescribeConfigurationRecordersCommandInput, DescribeConfigurationRecordersCommandOutput } from "./commands/DescribeConfigurationRecordersCommand";
import { DescribeConformancePackComplianceCommandInput, DescribeConformancePackComplianceCommandOutput } from "./commands/DescribeConformancePackComplianceCommand";
import { DescribeConformancePackStatusCommandInput, DescribeConformancePackStatusCommandOutput } from "./commands/DescribeConformancePackStatusCommand";
import { DescribeConformancePacksCommandInput, DescribeConformancePacksCommandOutput } from "./commands/DescribeConformancePacksCommand";
import { DescribeDeliveryChannelStatusCommandInput, DescribeDeliveryChannelStatusCommandOutput } from "./commands/DescribeDeliveryChannelStatusCommand";
import { DescribeDeliveryChannelsCommandInput, DescribeDeliveryChannelsCommandOutput } from "./commands/DescribeDeliveryChannelsCommand";
import { DescribeOrganizationConfigRuleStatusesCommandInput, DescribeOrganizationConfigRuleStatusesCommandOutput } from "./commands/DescribeOrganizationConfigRuleStatusesCommand";
import { DescribeOrganizationConfigRulesCommandInput, DescribeOrganizationConfigRulesCommandOutput } from "./commands/DescribeOrganizationConfigRulesCommand";
import { DescribeOrganizationConformancePackStatusesCommandInput, DescribeOrganizationConformancePackStatusesCommandOutput } from "./commands/DescribeOrganizationConformancePackStatusesCommand";
import { DescribeOrganizationConformancePacksCommandInput, DescribeOrganizationConformancePacksCommandOutput } from "./commands/DescribeOrganizationConformancePacksCommand";
import { DescribePendingAggregationRequestsCommandInput, DescribePendingAggregationRequestsCommandOutput } from "./commands/DescribePendingAggregationRequestsCommand";
import { DescribeRemediationConfigurationsCommandInput, DescribeRemediationConfigurationsCommandOutput } from "./commands/DescribeRemediationConfigurationsCommand";
import { DescribeRemediationExceptionsCommandInput, DescribeRemediationExceptionsCommandOutput } from "./commands/DescribeRemediationExceptionsCommand";
import { DescribeRemediationExecutionStatusCommandInput, DescribeRemediationExecutionStatusCommandOutput } from "./commands/DescribeRemediationExecutionStatusCommand";
import { DescribeRetentionConfigurationsCommandInput, DescribeRetentionConfigurationsCommandOutput } from "./commands/DescribeRetentionConfigurationsCommand";
import { GetAggregateComplianceDetailsByConfigRuleCommandInput, GetAggregateComplianceDetailsByConfigRuleCommandOutput } from "./commands/GetAggregateComplianceDetailsByConfigRuleCommand";
import { GetAggregateConfigRuleComplianceSummaryCommandInput, GetAggregateConfigRuleComplianceSummaryCommandOutput } from "./commands/GetAggregateConfigRuleComplianceSummaryCommand";
import { GetAggregateDiscoveredResourceCountsCommandInput, GetAggregateDiscoveredResourceCountsCommandOutput } from "./commands/GetAggregateDiscoveredResourceCountsCommand";
import { GetAggregateResourceConfigCommandInput, GetAggregateResourceConfigCommandOutput } from "./commands/GetAggregateResourceConfigCommand";
import { GetComplianceDetailsByConfigRuleCommandInput, GetComplianceDetailsByConfigRuleCommandOutput } from "./commands/GetComplianceDetailsByConfigRuleCommand";
import { GetComplianceDetailsByResourceCommandInput, GetComplianceDetailsByResourceCommandOutput } from "./commands/GetComplianceDetailsByResourceCommand";
import { GetComplianceSummaryByConfigRuleCommandInput, GetComplianceSummaryByConfigRuleCommandOutput } from "./commands/GetComplianceSummaryByConfigRuleCommand";
import { GetComplianceSummaryByResourceTypeCommandInput, GetComplianceSummaryByResourceTypeCommandOutput } from "./commands/GetComplianceSummaryByResourceTypeCommand";
import { GetConformancePackComplianceDetailsCommandInput, GetConformancePackComplianceDetailsCommandOutput } from "./commands/GetConformancePackComplianceDetailsCommand";
import { GetConformancePackComplianceSummaryCommandInput, GetConformancePackComplianceSummaryCommandOutput } from "./commands/GetConformancePackComplianceSummaryCommand";
import { GetDiscoveredResourceCountsCommandInput, GetDiscoveredResourceCountsCommandOutput } from "./commands/GetDiscoveredResourceCountsCommand";
import { GetOrganizationConfigRuleDetailedStatusCommandInput, GetOrganizationConfigRuleDetailedStatusCommandOutput } from "./commands/GetOrganizationConfigRuleDetailedStatusCommand";
import { GetOrganizationConformancePackDetailedStatusCommandInput, GetOrganizationConformancePackDetailedStatusCommandOutput } from "./commands/GetOrganizationConformancePackDetailedStatusCommand";
import { GetResourceConfigHistoryCommandInput, GetResourceConfigHistoryCommandOutput } from "./commands/GetResourceConfigHistoryCommand";
import { ListAggregateDiscoveredResourcesCommandInput, ListAggregateDiscoveredResourcesCommandOutput } from "./commands/ListAggregateDiscoveredResourcesCommand";
import { ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput } from "./commands/ListDiscoveredResourcesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutAggregationAuthorizationCommandInput, PutAggregationAuthorizationCommandOutput } from "./commands/PutAggregationAuthorizationCommand";
import { PutConfigRuleCommandInput, PutConfigRuleCommandOutput } from "./commands/PutConfigRuleCommand";
import { PutConfigurationAggregatorCommandInput, PutConfigurationAggregatorCommandOutput } from "./commands/PutConfigurationAggregatorCommand";
import { PutConfigurationRecorderCommandInput, PutConfigurationRecorderCommandOutput } from "./commands/PutConfigurationRecorderCommand";
import { PutConformancePackCommandInput, PutConformancePackCommandOutput } from "./commands/PutConformancePackCommand";
import { PutDeliveryChannelCommandInput, PutDeliveryChannelCommandOutput } from "./commands/PutDeliveryChannelCommand";
import { PutEvaluationsCommandInput, PutEvaluationsCommandOutput } from "./commands/PutEvaluationsCommand";
import { PutOrganizationConfigRuleCommandInput, PutOrganizationConfigRuleCommandOutput } from "./commands/PutOrganizationConfigRuleCommand";
import { PutOrganizationConformancePackCommandInput, PutOrganizationConformancePackCommandOutput } from "./commands/PutOrganizationConformancePackCommand";
import { PutRemediationConfigurationsCommandInput, PutRemediationConfigurationsCommandOutput } from "./commands/PutRemediationConfigurationsCommand";
import { PutRemediationExceptionsCommandInput, PutRemediationExceptionsCommandOutput } from "./commands/PutRemediationExceptionsCommand";
import { PutResourceConfigCommandInput, PutResourceConfigCommandOutput } from "./commands/PutResourceConfigCommand";
import { PutRetentionConfigurationCommandInput, PutRetentionConfigurationCommandOutput } from "./commands/PutRetentionConfigurationCommand";
import { SelectResourceConfigCommandInput, SelectResourceConfigCommandOutput } from "./commands/SelectResourceConfigCommand";
import { StartConfigRulesEvaluationCommandInput, StartConfigRulesEvaluationCommandOutput } from "./commands/StartConfigRulesEvaluationCommand";
import { StartConfigurationRecorderCommandInput, StartConfigurationRecorderCommandOutput } from "./commands/StartConfigurationRecorderCommand";
import { StartRemediationExecutionCommandInput, StartRemediationExecutionCommandOutput } from "./commands/StartRemediationExecutionCommand";
import { StopConfigurationRecorderCommandInput, StopConfigurationRecorderCommandOutput } from "./commands/StopConfigurationRecorderCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class ConfigService extends ConfigServiceClient {
    /**
     * <p>Returns the current configuration items for resources that are present in your AWS Config aggregator. The operation also returns a list of resources that are not processed in the current request.
     * 			If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p>
     *
     * 		       <note>
     *             <ul>
     *                <li>
     *                   <p>The API does not return results for deleted resources.</p>
     *                </li>
     *                <li>
     *                   <p> The API does not return tags and relationships.</p>
     *                </li>
     *             </ul>
     *          </note>
     */
    batchGetAggregateResourceConfig(args: BatchGetAggregateResourceConfigCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetAggregateResourceConfigCommandOutput>;
    batchGetAggregateResourceConfig(args: BatchGetAggregateResourceConfigCommandInput, cb: (err: any, data?: BatchGetAggregateResourceConfigCommandOutput) => void): void;
    batchGetAggregateResourceConfig(args: BatchGetAggregateResourceConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetAggregateResourceConfigCommandOutput) => void): void;
    /**
     * <p>Returns the current configuration for one or more requested
     * 			resources. The operation also returns a list of resources that are
     * 			not processed in the current request. If there are no unprocessed
     * 			resources, the operation returns an empty unprocessedResourceKeys
     * 			list. </p>
     * 		       <note>
     * 			         <ul>
     *                <li>
     * 					             <p>The API does not return results for deleted
     * 						resources.</p>
     * 				           </li>
     *                <li>
     * 					             <p> The API does not return any tags for the requested
     * 						resources. This information is filtered out of the
     * 						supplementaryConfiguration section of the API
     * 						response.</p>
     * 				           </li>
     *             </ul>
     * 		       </note>
     */
    batchGetResourceConfig(args: BatchGetResourceConfigCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetResourceConfigCommandOutput>;
    batchGetResourceConfig(args: BatchGetResourceConfigCommandInput, cb: (err: any, data?: BatchGetResourceConfigCommandOutput) => void): void;
    batchGetResourceConfig(args: BatchGetResourceConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetResourceConfigCommandOutput) => void): void;
    /**
     * <p>Deletes the authorization granted to the specified
     * 			configuration aggregator account in a specified region.</p>
     */
    deleteAggregationAuthorization(args: DeleteAggregationAuthorizationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAggregationAuthorizationCommandOutput>;
    deleteAggregationAuthorization(args: DeleteAggregationAuthorizationCommandInput, cb: (err: any, data?: DeleteAggregationAuthorizationCommandOutput) => void): void;
    deleteAggregationAuthorization(args: DeleteAggregationAuthorizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAggregationAuthorizationCommandOutput) => void): void;
    /**
     * <p>Deletes the specified AWS Config rule and all of its evaluation
     * 			results.</p>
     * 		       <p>AWS Config sets the state of a rule to <code>DELETING</code>
     * 			until the deletion is complete. You cannot update a rule while it is
     * 			in this state. If you make a <code>PutConfigRule</code> or
     * 				<code>DeleteConfigRule</code> request for the rule, you will
     * 			receive a <code>ResourceInUseException</code>.</p>
     * 		       <p>You can check the state of a rule by using the
     * 				<code>DescribeConfigRules</code> request.</p>
     */
    deleteConfigRule(args: DeleteConfigRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigRuleCommandOutput>;
    deleteConfigRule(args: DeleteConfigRuleCommandInput, cb: (err: any, data?: DeleteConfigRuleCommandOutput) => void): void;
    deleteConfigRule(args: DeleteConfigRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigRuleCommandOutput) => void): void;
    /**
     * <p>Deletes the specified configuration aggregator and the
     * 			aggregated data associated with the aggregator.</p>
     */
    deleteConfigurationAggregator(args: DeleteConfigurationAggregatorCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigurationAggregatorCommandOutput>;
    deleteConfigurationAggregator(args: DeleteConfigurationAggregatorCommandInput, cb: (err: any, data?: DeleteConfigurationAggregatorCommandOutput) => void): void;
    deleteConfigurationAggregator(args: DeleteConfigurationAggregatorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigurationAggregatorCommandOutput) => void): void;
    /**
     * <p>Deletes the configuration recorder.</p>
     * 		       <p>After the configuration recorder is deleted, AWS Config will
     * 			not record resource configuration changes until you create a new
     * 			configuration recorder.</p>
     * 		       <p>This action does not delete the configuration information that
     * 			was previously recorded. You will be able to access the previously
     * 			recorded information by using the
     * 				<code>GetResourceConfigHistory</code> action, but you will not
     * 			be able to access this information in the AWS Config console until
     * 			you create a new configuration recorder.</p>
     */
    deleteConfigurationRecorder(args: DeleteConfigurationRecorderCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigurationRecorderCommandOutput>;
    deleteConfigurationRecorder(args: DeleteConfigurationRecorderCommandInput, cb: (err: any, data?: DeleteConfigurationRecorderCommandOutput) => void): void;
    deleteConfigurationRecorder(args: DeleteConfigurationRecorderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigurationRecorderCommandOutput) => void): void;
    /**
     * <p>Deletes the specified conformance pack and all the AWS Config rules, remediation actions, and all evaluation results within that conformance pack.</p>
     * 		       <p>AWS Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>
     */
    deleteConformancePack(args: DeleteConformancePackCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConformancePackCommandOutput>;
    deleteConformancePack(args: DeleteConformancePackCommandInput, cb: (err: any, data?: DeleteConformancePackCommandOutput) => void): void;
    deleteConformancePack(args: DeleteConformancePackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConformancePackCommandOutput) => void): void;
    /**
     * <p>Deletes the delivery channel.</p>
     * 		       <p>Before you can delete the delivery channel, you must stop the
     * 			configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>
     */
    deleteDeliveryChannel(args: DeleteDeliveryChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeliveryChannelCommandOutput>;
    deleteDeliveryChannel(args: DeleteDeliveryChannelCommandInput, cb: (err: any, data?: DeleteDeliveryChannelCommandOutput) => void): void;
    deleteDeliveryChannel(args: DeleteDeliveryChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDeliveryChannelCommandOutput) => void): void;
    /**
     * <p>Deletes the evaluation results for the specified AWS Config
     * 			rule. You can specify one AWS Config rule per request. After you
     * 			delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating
     * 			your AWS resources against the rule.</p>
     */
    deleteEvaluationResults(args: DeleteEvaluationResultsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEvaluationResultsCommandOutput>;
    deleteEvaluationResults(args: DeleteEvaluationResultsCommandInput, cb: (err: any, data?: DeleteEvaluationResultsCommandOutput) => void): void;
    deleteEvaluationResults(args: DeleteEvaluationResultsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEvaluationResultsCommandOutput) => void): void;
    /**
     * <p>Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization. Only a master account can delete an organization config rule.</p>
     * 		       <p>AWS Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete.
     * 			You cannot update a rule while it is in this state.</p>
     */
    deleteOrganizationConfigRule(args: DeleteOrganizationConfigRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOrganizationConfigRuleCommandOutput>;
    deleteOrganizationConfigRule(args: DeleteOrganizationConfigRuleCommandInput, cb: (err: any, data?: DeleteOrganizationConfigRuleCommandOutput) => void): void;
    deleteOrganizationConfigRule(args: DeleteOrganizationConfigRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteOrganizationConfigRuleCommandOutput) => void): void;
    /**
     * <p>Deletes the specified organization conformance pack and all of the config rules and remediation actions from all member accounts in that organization.
     * 			Only a master account can delete an organization conformance pack.</p>
     * 			      <p>AWS Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete.
     * 				You cannot update a conformance pack while it is in this state. </p>
     */
    deleteOrganizationConformancePack(args: DeleteOrganizationConformancePackCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOrganizationConformancePackCommandOutput>;
    deleteOrganizationConformancePack(args: DeleteOrganizationConformancePackCommandInput, cb: (err: any, data?: DeleteOrganizationConformancePackCommandOutput) => void): void;
    deleteOrganizationConformancePack(args: DeleteOrganizationConformancePackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteOrganizationConformancePackCommandOutput) => void): void;
    /**
     * <p>Deletes pending authorization requests for a specified
     * 			aggregator account in a specified region.</p>
     */
    deletePendingAggregationRequest(args: DeletePendingAggregationRequestCommandInput, options?: __HttpHandlerOptions): Promise<DeletePendingAggregationRequestCommandOutput>;
    deletePendingAggregationRequest(args: DeletePendingAggregationRequestCommandInput, cb: (err: any, data?: DeletePendingAggregationRequestCommandOutput) => void): void;
    deletePendingAggregationRequest(args: DeletePendingAggregationRequestCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePendingAggregationRequestCommandOutput) => void): void;
    /**
     * <p>Deletes the remediation configuration.</p>
     */
    deleteRemediationConfiguration(args: DeleteRemediationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRemediationConfigurationCommandOutput>;
    deleteRemediationConfiguration(args: DeleteRemediationConfigurationCommandInput, cb: (err: any, data?: DeleteRemediationConfigurationCommandOutput) => void): void;
    deleteRemediationConfiguration(args: DeleteRemediationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRemediationConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes one or more remediation exceptions mentioned in the resource keys.</p>
     */
    deleteRemediationExceptions(args: DeleteRemediationExceptionsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRemediationExceptionsCommandOutput>;
    deleteRemediationExceptions(args: DeleteRemediationExceptionsCommandInput, cb: (err: any, data?: DeleteRemediationExceptionsCommandOutput) => void): void;
    deleteRemediationExceptions(args: DeleteRemediationExceptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRemediationExceptionsCommandOutput) => void): void;
    /**
     * <p>Records the configuration state for a custom resource that has been deleted.  This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your AWS Config History.
     * 			 </p>
     */
    deleteResourceConfig(args: DeleteResourceConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourceConfigCommandOutput>;
    deleteResourceConfig(args: DeleteResourceConfigCommandInput, cb: (err: any, data?: DeleteResourceConfigCommandOutput) => void): void;
    deleteResourceConfig(args: DeleteResourceConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourceConfigCommandOutput) => void): void;
    /**
     * <p>Deletes the retention configuration.</p>
     */
    deleteRetentionConfiguration(args: DeleteRetentionConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRetentionConfigurationCommandOutput>;
    deleteRetentionConfiguration(args: DeleteRetentionConfigurationCommandInput, cb: (err: any, data?: DeleteRetentionConfigurationCommandOutput) => void): void;
    deleteRetentionConfiguration(args: DeleteRetentionConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRetentionConfigurationCommandOutput) => void): void;
    /**
     * <p>Schedules delivery of a configuration snapshot to the Amazon S3
     * 			bucket in the specified delivery channel. After the delivery has
     * 			started, AWS Config sends the following notifications using an
     * 			Amazon SNS topic that you have specified.</p>
     * 		       <ul>
     *             <li>
     * 				           <p>Notification of the start of the delivery.</p>
     * 			         </li>
     *             <li>
     * 				           <p>Notification of the completion of the delivery, if the
     * 					delivery was successfully completed.</p>
     * 			         </li>
     *             <li>
     * 				           <p>Notification of delivery failure, if the delivery
     * 					failed.</p>
     * 			         </li>
     *          </ul>
     */
    deliverConfigSnapshot(args: DeliverConfigSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeliverConfigSnapshotCommandOutput>;
    deliverConfigSnapshot(args: DeliverConfigSnapshotCommandInput, cb: (err: any, data?: DeliverConfigSnapshotCommandOutput) => void): void;
    deliverConfigSnapshot(args: DeliverConfigSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeliverConfigSnapshotCommandOutput) => void): void;
    /**
     * <p>Returns a list of compliant and noncompliant rules with the
     * 			number of resources for compliant and noncompliant rules.
     * 			</p>
     * 		       <note>
     * 			         <p>The results can return an empty result page, but if you
     * 				have a <code>nextToken</code>, the results are displayed on the next
     * 				page.</p>
     * 		       </note>
     */
    describeAggregateComplianceByConfigRules(args: DescribeAggregateComplianceByConfigRulesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAggregateComplianceByConfigRulesCommandOutput>;
    describeAggregateComplianceByConfigRules(args: DescribeAggregateComplianceByConfigRulesCommandInput, cb: (err: any, data?: DescribeAggregateComplianceByConfigRulesCommandOutput) => void): void;
    describeAggregateComplianceByConfigRules(args: DescribeAggregateComplianceByConfigRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAggregateComplianceByConfigRulesCommandOutput) => void): void;
    /**
     * <p>Returns a list of authorizations granted to various aggregator
     * 			accounts and regions.</p>
     */
    describeAggregationAuthorizations(args: DescribeAggregationAuthorizationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAggregationAuthorizationsCommandOutput>;
    describeAggregationAuthorizations(args: DescribeAggregationAuthorizationsCommandInput, cb: (err: any, data?: DescribeAggregationAuthorizationsCommandOutput) => void): void;
    describeAggregationAuthorizations(args: DescribeAggregationAuthorizationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAggregationAuthorizationsCommandOutput) => void): void;
    /**
     * <p>Indicates whether the specified AWS Config rules are compliant.
     * 			If a rule is noncompliant, this action returns the number of AWS
     * 			resources that do not comply with the rule.</p>
     * 		       <p>A rule is compliant if all of the evaluated resources comply
     * 			with it. It is noncompliant if any of these resources do not
     * 			comply.</p>
     * 		       <p>If AWS Config has no current evaluation results for the rule,
     * 			it returns <code>INSUFFICIENT_DATA</code>. This result might
     * 			indicate one of the following conditions:</p>
     * 		       <ul>
     *             <li>
     * 				           <p>AWS Config has never invoked an evaluation for the
     * 					rule. To check whether it has, use the
     * 						<code>DescribeConfigRuleEvaluationStatus</code> action
     * 					to get the <code>LastSuccessfulInvocationTime</code> and
     * 						<code>LastFailedInvocationTime</code>.</p>
     * 			         </li>
     *             <li>
     * 				           <p>The rule's AWS Lambda function is failing to send
     * 					evaluation results to AWS Config. Verify that the role you
     * 					assigned to your configuration recorder includes the
     * 						<code>config:PutEvaluations</code> permission. If the
     * 					rule is a custom rule, verify that the AWS Lambda execution
     * 					role includes the <code>config:PutEvaluations</code>
     * 					permission.</p>
     * 			         </li>
     *             <li>
     * 				           <p>The rule's AWS Lambda function has returned
     * 						<code>NOT_APPLICABLE</code> for all evaluation results.
     * 					This can occur if the resources were deleted or removed from
     * 					the rule's scope.</p>
     * 			         </li>
     *          </ul>
     */
    describeComplianceByConfigRule(args: DescribeComplianceByConfigRuleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeComplianceByConfigRuleCommandOutput>;
    describeComplianceByConfigRule(args: DescribeComplianceByConfigRuleCommandInput, cb: (err: any, data?: DescribeComplianceByConfigRuleCommandOutput) => void): void;
    describeComplianceByConfigRule(args: DescribeComplianceByConfigRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeComplianceByConfigRuleCommandOutput) => void): void;
    /**
     * <p>Indicates whether the specified AWS resources are compliant. If
     * 			a resource is noncompliant, this action returns the number of AWS
     * 			Config rules that the resource does not comply with.</p>
     * 		       <p>A resource is compliant if it complies with all the AWS Config
     * 			rules that evaluate it. It is noncompliant if it does not comply
     * 			with one or more of these rules.</p>
     * 		       <p>If AWS Config has no current evaluation results for the
     * 			resource, it returns <code>INSUFFICIENT_DATA</code>. This result
     * 			might indicate one of the following conditions about the rules that
     * 			evaluate the resource:</p>
     * 		       <ul>
     *             <li>
     * 				           <p>AWS Config has never invoked an evaluation for the
     * 					rule. To check whether it has, use the
     * 						<code>DescribeConfigRuleEvaluationStatus</code> action
     * 					to get the <code>LastSuccessfulInvocationTime</code> and
     * 						<code>LastFailedInvocationTime</code>.</p>
     * 			         </li>
     *             <li>
     * 				           <p>The rule's AWS Lambda function is failing to send
     * 					evaluation results to AWS Config. Verify that the role that
     * 					you assigned to your configuration recorder includes the
     * 						<code>config:PutEvaluations</code> permission. If the
     * 					rule is a custom rule, verify that the AWS Lambda execution
     * 					role includes the <code>config:PutEvaluations</code>
     * 					permission.</p>
     * 			         </li>
     *             <li>
     * 				           <p>The rule's AWS Lambda function has returned
     * 						<code>NOT_APPLICABLE</code> for all evaluation results.
     * 					This can occur if the resources were deleted or removed from
     * 					the rule's scope.</p>
     * 			         </li>
     *          </ul>
     */
    describeComplianceByResource(args: DescribeComplianceByResourceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeComplianceByResourceCommandOutput>;
    describeComplianceByResource(args: DescribeComplianceByResourceCommandInput, cb: (err: any, data?: DescribeComplianceByResourceCommandOutput) => void): void;
    describeComplianceByResource(args: DescribeComplianceByResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeComplianceByResourceCommandOutput) => void): void;
    /**
     * <p>Returns status information for each of your AWS managed Config
     * 			rules. The status includes information such as the last time AWS
     * 			Config invoked the rule, the last time AWS Config failed to invoke
     * 			the rule, and the related error for the last failure.</p>
     */
    describeConfigRuleEvaluationStatus(args: DescribeConfigRuleEvaluationStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigRuleEvaluationStatusCommandOutput>;
    describeConfigRuleEvaluationStatus(args: DescribeConfigRuleEvaluationStatusCommandInput, cb: (err: any, data?: DescribeConfigRuleEvaluationStatusCommandOutput) => void): void;
    describeConfigRuleEvaluationStatus(args: DescribeConfigRuleEvaluationStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigRuleEvaluationStatusCommandOutput) => void): void;
    /**
     * <p>Returns details about your AWS Config rules.</p>
     */
    describeConfigRules(args: DescribeConfigRulesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigRulesCommandOutput>;
    describeConfigRules(args: DescribeConfigRulesCommandInput, cb: (err: any, data?: DescribeConfigRulesCommandOutput) => void): void;
    describeConfigRules(args: DescribeConfigRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigRulesCommandOutput) => void): void;
    /**
     * <p>Returns status information for sources within an aggregator.
     * 			The status includes information about the last time AWS Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. </p>
     */
    describeConfigurationAggregatorSourcesStatus(args: DescribeConfigurationAggregatorSourcesStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigurationAggregatorSourcesStatusCommandOutput>;
    describeConfigurationAggregatorSourcesStatus(args: DescribeConfigurationAggregatorSourcesStatusCommandInput, cb: (err: any, data?: DescribeConfigurationAggregatorSourcesStatusCommandOutput) => void): void;
    describeConfigurationAggregatorSourcesStatus(args: DescribeConfigurationAggregatorSourcesStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigurationAggregatorSourcesStatusCommandOutput) => void): void;
    /**
     * <p>Returns the details of one or more configuration aggregators.
     * 			If the configuration aggregator is not specified, this action
     * 			returns the details for all the configuration aggregators associated
     * 			with the account. </p>
     */
    describeConfigurationAggregators(args: DescribeConfigurationAggregatorsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigurationAggregatorsCommandOutput>;
    describeConfigurationAggregators(args: DescribeConfigurationAggregatorsCommandInput, cb: (err: any, data?: DescribeConfigurationAggregatorsCommandOutput) => void): void;
    describeConfigurationAggregators(args: DescribeConfigurationAggregatorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigurationAggregatorsCommandOutput) => void): void;
    /**
     * <p>Returns the current status of the specified configuration
     * 			recorder. If a configuration recorder is not specified, this action
     * 			returns the status of all configuration recorders associated with
     * 			the account.</p>
     * 		       <note>
     * 			         <p>Currently, you can specify only one configuration recorder
     * 				per region in your account.</p>
     * 		       </note>
     */
    describeConfigurationRecorderStatus(args: DescribeConfigurationRecorderStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigurationRecorderStatusCommandOutput>;
    describeConfigurationRecorderStatus(args: DescribeConfigurationRecorderStatusCommandInput, cb: (err: any, data?: DescribeConfigurationRecorderStatusCommandOutput) => void): void;
    describeConfigurationRecorderStatus(args: DescribeConfigurationRecorderStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigurationRecorderStatusCommandOutput) => void): void;
    /**
     * <p>Returns the details for the specified configuration recorders.
     * 			If the configuration recorder is not specified, this action returns
     * 			the details for all configuration recorders associated with the
     * 			account.</p>
     * 		       <note>
     * 			         <p>Currently, you can specify only one configuration recorder
     * 				per region in your account.</p>
     * 		       </note>
     */
    describeConfigurationRecorders(args: DescribeConfigurationRecordersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigurationRecordersCommandOutput>;
    describeConfigurationRecorders(args: DescribeConfigurationRecordersCommandInput, cb: (err: any, data?: DescribeConfigurationRecordersCommandOutput) => void): void;
    describeConfigurationRecorders(args: DescribeConfigurationRecordersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigurationRecordersCommandOutput) => void): void;
    /**
     * <p>Returns compliance details for each rule in that conformance pack.</p>
     * 		       <note>
     *             <p>You must provide exact rule names.</p>
     *          </note>
     */
    describeConformancePackCompliance(args: DescribeConformancePackComplianceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConformancePackComplianceCommandOutput>;
    describeConformancePackCompliance(args: DescribeConformancePackComplianceCommandInput, cb: (err: any, data?: DescribeConformancePackComplianceCommandOutput) => void): void;
    describeConformancePackCompliance(args: DescribeConformancePackComplianceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConformancePackComplianceCommandOutput) => void): void;
    /**
     * <p>Provides one or more conformance packs deployment status.</p>
     * 		       <note>
     *             <p>If there are no conformance packs then you will see an empty result.</p>
     *          </note>
     */
    describeConformancePackStatus(args: DescribeConformancePackStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConformancePackStatusCommandOutput>;
    describeConformancePackStatus(args: DescribeConformancePackStatusCommandInput, cb: (err: any, data?: DescribeConformancePackStatusCommandOutput) => void): void;
    describeConformancePackStatus(args: DescribeConformancePackStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConformancePackStatusCommandOutput) => void): void;
    /**
     * <p>Returns a list of one or more conformance packs.</p>
     */
    describeConformancePacks(args: DescribeConformancePacksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConformancePacksCommandOutput>;
    describeConformancePacks(args: DescribeConformancePacksCommandInput, cb: (err: any, data?: DescribeConformancePacksCommandOutput) => void): void;
    describeConformancePacks(args: DescribeConformancePacksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConformancePacksCommandOutput) => void): void;
    /**
     * <p>Returns the current status of the specified delivery channel.
     * 			If a delivery channel is not specified, this action returns the
     * 			current status of all delivery channels associated with the
     * 			account.</p>
     * 		       <note>
     * 			         <p>Currently, you can specify only one delivery channel per
     * 				region in your account.</p>
     * 		       </note>
     */
    describeDeliveryChannelStatus(args: DescribeDeliveryChannelStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDeliveryChannelStatusCommandOutput>;
    describeDeliveryChannelStatus(args: DescribeDeliveryChannelStatusCommandInput, cb: (err: any, data?: DescribeDeliveryChannelStatusCommandOutput) => void): void;
    describeDeliveryChannelStatus(args: DescribeDeliveryChannelStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDeliveryChannelStatusCommandOutput) => void): void;
    /**
     * <p>Returns details about the specified delivery channel. If a
     * 			delivery channel is not specified, this action returns the details
     * 			of all delivery channels associated with the account.</p>
     * 		       <note>
     * 			         <p>Currently, you can specify only one delivery channel per
     * 				region in your account.</p>
     * 		       </note>
     */
    describeDeliveryChannels(args: DescribeDeliveryChannelsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDeliveryChannelsCommandOutput>;
    describeDeliveryChannels(args: DescribeDeliveryChannelsCommandInput, cb: (err: any, data?: DescribeDeliveryChannelsCommandOutput) => void): void;
    describeDeliveryChannels(args: DescribeDeliveryChannelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDeliveryChannelsCommandOutput) => void): void;
    /**
     * <p>Provides organization config rule deployment status for an organization.</p>
     * 		       <note>
     *             <p>The status is not considered successful until organization config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p>
     * 			         <p>When you specify the limit and the next token, you receive a paginated response.
     * 			Limit and next token are not applicable if you specify organization config rule names.
     * 			It is only applicable, when you request all the organization config rules.</p>
     * 			         <p>Only a master account can call this API.</p>
     *          </note>
     */
    describeOrganizationConfigRuleStatuses(args: DescribeOrganizationConfigRuleStatusesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrganizationConfigRuleStatusesCommandOutput>;
    describeOrganizationConfigRuleStatuses(args: DescribeOrganizationConfigRuleStatusesCommandInput, cb: (err: any, data?: DescribeOrganizationConfigRuleStatusesCommandOutput) => void): void;
    describeOrganizationConfigRuleStatuses(args: DescribeOrganizationConfigRuleStatusesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrganizationConfigRuleStatusesCommandOutput) => void): void;
    /**
     * <p>Returns a list of organization config rules.</p>
     * 		       <note>
     *             <p>When you specify the limit and the next token, you receive a paginated response.
     * 			Limit and next token are not applicable if you specify organization config rule names.
     * 			It is only applicable, when you request all the organization config rules.</p>
     * 			         <p>Only a master account can call this API.</p>
     *          </note>
     */
    describeOrganizationConfigRules(args: DescribeOrganizationConfigRulesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrganizationConfigRulesCommandOutput>;
    describeOrganizationConfigRules(args: DescribeOrganizationConfigRulesCommandInput, cb: (err: any, data?: DescribeOrganizationConfigRulesCommandOutput) => void): void;
    describeOrganizationConfigRules(args: DescribeOrganizationConfigRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrganizationConfigRulesCommandOutput) => void): void;
    /**
     * <p>Provides organization conformance pack deployment status for an organization.</p>
     * 		       <note>
     * 			         <p>The status is not considered successful until organization conformance pack is successfully
     * 				deployed in all the member accounts with an exception of excluded accounts.</p>
     * 			         <p>When you specify the limit and the next token, you receive a paginated response.
     * 				Limit and next token are not applicable if you specify organization conformance pack names.
     * 				They are only applicable, when you request all the organization conformance packs.</p>
     * 			         <p>Only a master account can call this API.</p>
     *          </note>
     */
    describeOrganizationConformancePackStatuses(args: DescribeOrganizationConformancePackStatusesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrganizationConformancePackStatusesCommandOutput>;
    describeOrganizationConformancePackStatuses(args: DescribeOrganizationConformancePackStatusesCommandInput, cb: (err: any, data?: DescribeOrganizationConformancePackStatusesCommandOutput) => void): void;
    describeOrganizationConformancePackStatuses(args: DescribeOrganizationConformancePackStatusesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrganizationConformancePackStatusesCommandOutput) => void): void;
    /**
     * <p>Returns a list of organization conformance packs.</p>
     * 		       <note>
     *             <p>When you specify the limit and the next token, you receive a paginated response. </p>
     * 			         <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable,
     * 			when you request all the organization conformance packs. </p>
     * 			         <p>Only a master account can call this API.</p>
     *          </note>
     */
    describeOrganizationConformancePacks(args: DescribeOrganizationConformancePacksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrganizationConformancePacksCommandOutput>;
    describeOrganizationConformancePacks(args: DescribeOrganizationConformancePacksCommandInput, cb: (err: any, data?: DescribeOrganizationConformancePacksCommandOutput) => void): void;
    describeOrganizationConformancePacks(args: DescribeOrganizationConformancePacksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrganizationConformancePacksCommandOutput) => void): void;
    /**
     * <p>Returns a list of all pending aggregation requests.</p>
     */
    describePendingAggregationRequests(args: DescribePendingAggregationRequestsCommandInput, options?: __HttpHandlerOptions): Promise<DescribePendingAggregationRequestsCommandOutput>;
    describePendingAggregationRequests(args: DescribePendingAggregationRequestsCommandInput, cb: (err: any, data?: DescribePendingAggregationRequestsCommandOutput) => void): void;
    describePendingAggregationRequests(args: DescribePendingAggregationRequestsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePendingAggregationRequestsCommandOutput) => void): void;
    /**
     * <p>Returns the details of one or more remediation configurations.</p>
     */
    describeRemediationConfigurations(args: DescribeRemediationConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRemediationConfigurationsCommandOutput>;
    describeRemediationConfigurations(args: DescribeRemediationConfigurationsCommandInput, cb: (err: any, data?: DescribeRemediationConfigurationsCommandOutput) => void): void;
    describeRemediationConfigurations(args: DescribeRemediationConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRemediationConfigurationsCommandOutput) => void): void;
    /**
     * <p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted.
     * 			When you specify the limit and the next token, you receive a paginated response. </p>
     * 		       <note>
     *             <p>When you specify the limit and the next token, you receive a paginated response. </p>
     * 			         <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p>
     *          </note>
     */
    describeRemediationExceptions(args: DescribeRemediationExceptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRemediationExceptionsCommandOutput>;
    describeRemediationExceptions(args: DescribeRemediationExceptionsCommandInput, cb: (err: any, data?: DescribeRemediationExceptionsCommandOutput) => void): void;
    describeRemediationExceptions(args: DescribeRemediationExceptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRemediationExceptionsCommandOutput) => void): void;
    /**
     * <p>Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed.
     * 			When you specify the limit and the next token, you receive a paginated response.</p>
     */
    describeRemediationExecutionStatus(args: DescribeRemediationExecutionStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRemediationExecutionStatusCommandOutput>;
    describeRemediationExecutionStatus(args: DescribeRemediationExecutionStatusCommandInput, cb: (err: any, data?: DescribeRemediationExecutionStatusCommandOutput) => void): void;
    describeRemediationExecutionStatus(args: DescribeRemediationExecutionStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRemediationExecutionStatusCommandOutput) => void): void;
    /**
     * <p>Returns the details of one or more retention configurations. If
     * 			the retention configuration name is not specified, this action
     * 			returns the details for all the retention configurations for that
     * 			account.</p>
     * 		       <note>
     * 			         <p>Currently, AWS Config supports only one retention
     * 				configuration per region in your account.</p>
     * 		       </note>
     */
    describeRetentionConfigurations(args: DescribeRetentionConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRetentionConfigurationsCommandOutput>;
    describeRetentionConfigurations(args: DescribeRetentionConfigurationsCommandInput, cb: (err: any, data?: DescribeRetentionConfigurationsCommandOutput) => void): void;
    describeRetentionConfigurations(args: DescribeRetentionConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRetentionConfigurationsCommandOutput) => void): void;
    /**
     * <p>Returns the evaluation results for the specified AWS Config
     * 			rule for a specific resource in a rule. The results indicate which
     * 			AWS resources were evaluated by the rule, when each resource was
     * 			last evaluated, and whether each resource complies with the rule. </p>
     * 		       <note>
     * 			         <p>The results can return an empty result page. But if you
     * 				have a <code>nextToken</code>, the results are displayed on the next
     * 				page.</p>
     * 		       </note>
     */
    getAggregateComplianceDetailsByConfigRule(args: GetAggregateComplianceDetailsByConfigRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetAggregateComplianceDetailsByConfigRuleCommandOutput>;
    getAggregateComplianceDetailsByConfigRule(args: GetAggregateComplianceDetailsByConfigRuleCommandInput, cb: (err: any, data?: GetAggregateComplianceDetailsByConfigRuleCommandOutput) => void): void;
    getAggregateComplianceDetailsByConfigRule(args: GetAggregateComplianceDetailsByConfigRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAggregateComplianceDetailsByConfigRuleCommandOutput) => void): void;
    /**
     * <p>Returns the number of compliant and noncompliant rules for one
     * 			or more accounts and regions in an aggregator.</p>
     * 		       <note>
     * 			         <p>The results can return an empty result page, but if you
     * 				have a nextToken, the results are displayed on the next
     * 				page.</p>
     * 		       </note>
     */
    getAggregateConfigRuleComplianceSummary(args: GetAggregateConfigRuleComplianceSummaryCommandInput, options?: __HttpHandlerOptions): Promise<GetAggregateConfigRuleComplianceSummaryCommandOutput>;
    getAggregateConfigRuleComplianceSummary(args: GetAggregateConfigRuleComplianceSummaryCommandInput, cb: (err: any, data?: GetAggregateConfigRuleComplianceSummaryCommandOutput) => void): void;
    getAggregateConfigRuleComplianceSummary(args: GetAggregateConfigRuleComplianceSummaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAggregateConfigRuleComplianceSummaryCommandOutput) => void): void;
    /**
     * <p>Returns the resource counts across accounts and regions that are present in your AWS Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p>
     * 		       <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1.
     * 			If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>
     */
    getAggregateDiscoveredResourceCounts(args: GetAggregateDiscoveredResourceCountsCommandInput, options?: __HttpHandlerOptions): Promise<GetAggregateDiscoveredResourceCountsCommandOutput>;
    getAggregateDiscoveredResourceCounts(args: GetAggregateDiscoveredResourceCountsCommandInput, cb: (err: any, data?: GetAggregateDiscoveredResourceCountsCommandOutput) => void): void;
    getAggregateDiscoveredResourceCounts(args: GetAggregateDiscoveredResourceCountsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAggregateDiscoveredResourceCountsCommandOutput) => void): void;
    /**
     * <p>Returns configuration item that is aggregated for your specific resource in a specific source account and region.</p>
     */
    getAggregateResourceConfig(args: GetAggregateResourceConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetAggregateResourceConfigCommandOutput>;
    getAggregateResourceConfig(args: GetAggregateResourceConfigCommandInput, cb: (err: any, data?: GetAggregateResourceConfigCommandOutput) => void): void;
    getAggregateResourceConfig(args: GetAggregateResourceConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAggregateResourceConfigCommandOutput) => void): void;
    /**
     * <p>Returns the evaluation results for the specified AWS Config
     * 			rule. The results indicate which AWS resources were evaluated by the
     * 			rule, when each resource was last evaluated, and whether each
     * 			resource complies with the rule.</p>
     */
    getComplianceDetailsByConfigRule(args: GetComplianceDetailsByConfigRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetComplianceDetailsByConfigRuleCommandOutput>;
    getComplianceDetailsByConfigRule(args: GetComplianceDetailsByConfigRuleCommandInput, cb: (err: any, data?: GetComplianceDetailsByConfigRuleCommandOutput) => void): void;
    getComplianceDetailsByConfigRule(args: GetComplianceDetailsByConfigRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetComplianceDetailsByConfigRuleCommandOutput) => void): void;
    /**
     * <p>Returns the evaluation results for the specified AWS resource.
     * 			The results indicate which AWS Config rules were used to evaluate
     * 			the resource, when each rule was last used, and whether the resource
     * 			complies with each rule.</p>
     */
    getComplianceDetailsByResource(args: GetComplianceDetailsByResourceCommandInput, options?: __HttpHandlerOptions): Promise<GetComplianceDetailsByResourceCommandOutput>;
    getComplianceDetailsByResource(args: GetComplianceDetailsByResourceCommandInput, cb: (err: any, data?: GetComplianceDetailsByResourceCommandOutput) => void): void;
    getComplianceDetailsByResource(args: GetComplianceDetailsByResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetComplianceDetailsByResourceCommandOutput) => void): void;
    /**
     * <p>Returns the number of AWS Config rules that are compliant and
     * 			noncompliant, up to a maximum of 25 for each.</p>
     */
    getComplianceSummaryByConfigRule(args: GetComplianceSummaryByConfigRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetComplianceSummaryByConfigRuleCommandOutput>;
    getComplianceSummaryByConfigRule(args: GetComplianceSummaryByConfigRuleCommandInput, cb: (err: any, data?: GetComplianceSummaryByConfigRuleCommandOutput) => void): void;
    getComplianceSummaryByConfigRule(args: GetComplianceSummaryByConfigRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetComplianceSummaryByConfigRuleCommandOutput) => void): void;
    /**
     * <p>Returns the number of resources that are compliant and the
     * 			number that are noncompliant. You can specify one or more resource
     * 			types to get these numbers for each resource type. The maximum
     * 			number returned is 100.</p>
     */
    getComplianceSummaryByResourceType(args: GetComplianceSummaryByResourceTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetComplianceSummaryByResourceTypeCommandOutput>;
    getComplianceSummaryByResourceType(args: GetComplianceSummaryByResourceTypeCommandInput, cb: (err: any, data?: GetComplianceSummaryByResourceTypeCommandOutput) => void): void;
    getComplianceSummaryByResourceType(args: GetComplianceSummaryByResourceTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetComplianceSummaryByResourceTypeCommandOutput) => void): void;
    /**
     * <p>Returns compliance details of a conformance pack for all AWS resources that are monitered by conformance pack.</p>
     */
    getConformancePackComplianceDetails(args: GetConformancePackComplianceDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetConformancePackComplianceDetailsCommandOutput>;
    getConformancePackComplianceDetails(args: GetConformancePackComplianceDetailsCommandInput, cb: (err: any, data?: GetConformancePackComplianceDetailsCommandOutput) => void): void;
    getConformancePackComplianceDetails(args: GetConformancePackComplianceDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConformancePackComplianceDetailsCommandOutput) => void): void;
    /**
     * <p>Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.</p>
     */
    getConformancePackComplianceSummary(args: GetConformancePackComplianceSummaryCommandInput, options?: __HttpHandlerOptions): Promise<GetConformancePackComplianceSummaryCommandOutput>;
    getConformancePackComplianceSummary(args: GetConformancePackComplianceSummaryCommandInput, cb: (err: any, data?: GetConformancePackComplianceSummaryCommandOutput) => void): void;
    getConformancePackComplianceSummary(args: GetConformancePackComplianceSummaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConformancePackComplianceSummaryCommandOutput) => void): void;
    /**
     * <p>Returns the resource types, the number of each resource type,
     * 			and the total number of resources that AWS Config is recording in
     * 			this region for your AWS account. </p>
     * 		       <p class="title">
     *             <b>Example</b>
     *          </p>
     *          <ol>
     *             <li>
     * 				           <p>AWS Config is recording three resource types in the US
     * 					East (Ohio) Region for your account: 25 EC2 instances, 20
     * 					IAM users, and 15 S3 buckets.</p>
     * 			         </li>
     *             <li>
     * 				           <p>You make a call to the
     * 						<code>GetDiscoveredResourceCounts</code> action and
     * 					specify that you want all resource types. </p>
     * 			         </li>
     *             <li>
     * 				           <p>AWS Config returns the following:</p>
     *
     * 				           <ul>
     *                   <li>
     * 						               <p>The resource types (EC2 instances, IAM users,
     * 							and S3 buckets).</p>
     * 					             </li>
     *                   <li>
     * 						               <p>The number of each resource type (25, 20, and
     * 							15).</p>
     * 					             </li>
     *                   <li>
     * 						               <p>The total number of all resources
     * 							(60).</p>
     * 					             </li>
     *                </ul>
     *
     * 			         </li>
     *          </ol>
     *
     * 		       <p>The response is paginated. By default, AWS Config lists 100
     * 				<a>ResourceCount</a> objects on each page. You can
     * 			customize this number with the <code>limit</code> parameter. The
     * 			response includes a <code>nextToken</code> string. To get the next
     * 			page of results, run the request again and specify the string for
     * 			the <code>nextToken</code> parameter.</p>
     *
     * 		       <note>
     * 			         <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might
     * 				not immediately receive resource counts in the following
     * 				situations:</p>
     *
     * 			         <ul>
     *                <li>
     * 					             <p>You are a new AWS Config customer.</p>
     * 				           </li>
     *                <li>
     * 					             <p>You just enabled resource recording.</p>
     * 				           </li>
     *             </ul>
     *
     * 			         <p>It might take a few minutes for AWS Config to record and
     * 				count your resources. Wait a few minutes and then retry the
     * 					<a>GetDiscoveredResourceCounts</a> action.
     * 			</p>
     * 		       </note>
     */
    getDiscoveredResourceCounts(args: GetDiscoveredResourceCountsCommandInput, options?: __HttpHandlerOptions): Promise<GetDiscoveredResourceCountsCommandOutput>;
    getDiscoveredResourceCounts(args: GetDiscoveredResourceCountsCommandInput, cb: (err: any, data?: GetDiscoveredResourceCountsCommandOutput) => void): void;
    getDiscoveredResourceCounts(args: GetDiscoveredResourceCountsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDiscoveredResourceCountsCommandOutput) => void): void;
    /**
     * <p>Returns detailed status for each member account within an organization for a given organization config rule.</p>
     * 		       <note>
     *             <p>Only a master account can call this API.</p>
     *          </note>
     */
    getOrganizationConfigRuleDetailedStatus(args: GetOrganizationConfigRuleDetailedStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetOrganizationConfigRuleDetailedStatusCommandOutput>;
    getOrganizationConfigRuleDetailedStatus(args: GetOrganizationConfigRuleDetailedStatusCommandInput, cb: (err: any, data?: GetOrganizationConfigRuleDetailedStatusCommandOutput) => void): void;
    getOrganizationConfigRuleDetailedStatus(args: GetOrganizationConfigRuleDetailedStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOrganizationConfigRuleDetailedStatusCommandOutput) => void): void;
    /**
     * <p>Returns detailed status for each member account within an organization for a given organization conformance pack.</p>
     * 		       <p>Only a master account can call this API.</p>
     */
    getOrganizationConformancePackDetailedStatus(args: GetOrganizationConformancePackDetailedStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetOrganizationConformancePackDetailedStatusCommandOutput>;
    getOrganizationConformancePackDetailedStatus(args: GetOrganizationConformancePackDetailedStatusCommandInput, cb: (err: any, data?: GetOrganizationConformancePackDetailedStatusCommandOutput) => void): void;
    getOrganizationConformancePackDetailedStatus(args: GetOrganizationConformancePackDetailedStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOrganizationConformancePackDetailedStatusCommandOutput) => void): void;
    /**
     * <p>Returns a list of configuration items for the specified
     * 			resource. The list contains details about each state of the resource
     * 			during the specified time interval. If you specified a retention
     * 			period to retain your <code>ConfigurationItems</code> between a
     * 			minimum of 30 days and a maximum of 7 years (2557 days), AWS Config
     * 			returns the <code>ConfigurationItems</code> for the specified
     * 			retention period. </p>
     * 		       <p>The response is paginated. By default, AWS Config returns a
     * 			limit of 10 configuration items per page. You can customize this
     * 			number with the <code>limit</code> parameter. The response includes
     * 			a <code>nextToken</code> string. To get the next page of results,
     * 			run the request again and specify the string for the
     * 				<code>nextToken</code> parameter.</p>
     * 		       <note>
     * 			         <p>Each call to the API is limited to span a duration of seven
     * 				days. It is likely that the number of records returned is
     * 				smaller than the specified <code>limit</code>. In such cases,
     * 				you can make another call, using the
     * 				<code>nextToken</code>.</p>
     * 		       </note>
     */
    getResourceConfigHistory(args: GetResourceConfigHistoryCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceConfigHistoryCommandOutput>;
    getResourceConfigHistory(args: GetResourceConfigHistoryCommandInput, cb: (err: any, data?: GetResourceConfigHistoryCommandOutput) => void): void;
    getResourceConfigHistory(args: GetResourceConfigHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourceConfigHistoryCommandOutput) => void): void;
    /**
     * <p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions.
     * 			A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region.
     * 			You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p>
     * 			      <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>
     */
    listAggregateDiscoveredResources(args: ListAggregateDiscoveredResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListAggregateDiscoveredResourcesCommandOutput>;
    listAggregateDiscoveredResources(args: ListAggregateDiscoveredResourcesCommandInput, cb: (err: any, data?: ListAggregateDiscoveredResourcesCommandOutput) => void): void;
    listAggregateDiscoveredResources(args: ListAggregateDiscoveredResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAggregateDiscoveredResourcesCommandOutput) => void): void;
    /**
     * <p>Accepts a resource type and returns a list of resource
     * 			identifiers for the resources of that type. A resource identifier
     * 			includes the resource type, ID, and (if available) the custom
     * 			resource name. The results consist of resources that AWS Config has
     * 			discovered, including those that AWS Config is not currently
     * 			recording. You can narrow the results to include only resources that
     * 			have specific resource IDs or a resource name.</p>
     * 		       <note>
     * 			         <p>You can specify either resource IDs or a resource name, but
     * 				not both, in the same request.</p>
     * 		       </note>
     * 		       <p>The response is paginated. By default, AWS Config lists 100
     * 			resource identifiers on each page. You can customize this number
     * 			with the <code>limit</code> parameter. The response includes a
     * 				<code>nextToken</code> string. To get the next page of results,
     * 			run the request again and specify the string for the
     * 				<code>nextToken</code> parameter.</p>
     */
    listDiscoveredResources(args: ListDiscoveredResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListDiscoveredResourcesCommandOutput>;
    listDiscoveredResources(args: ListDiscoveredResourcesCommandInput, cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void): void;
    listDiscoveredResources(args: ListDiscoveredResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void): void;
    /**
     * <p>List the tags for AWS Config resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Authorizes the aggregator account and region to collect data
     * 			from the source account and region. </p>
     */
    putAggregationAuthorization(args: PutAggregationAuthorizationCommandInput, options?: __HttpHandlerOptions): Promise<PutAggregationAuthorizationCommandOutput>;
    putAggregationAuthorization(args: PutAggregationAuthorizationCommandInput, cb: (err: any, data?: PutAggregationAuthorizationCommandOutput) => void): void;
    putAggregationAuthorization(args: PutAggregationAuthorizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAggregationAuthorizationCommandOutput) => void): void;
    /**
     * <p>Adds or updates an AWS Config rule for evaluating whether your
     * 			AWS resources comply with your desired configurations.</p>
     * 		       <p>You can use this action for custom AWS Config rules and AWS
     * 			managed Config rules. A custom AWS Config rule is a rule that you
     * 			develop and maintain. An AWS managed Config rule is a customizable,
     * 			predefined rule that AWS Config provides.</p>
     * 		       <p>If you are adding a new custom AWS Config rule, you must first
     * 			create the AWS Lambda function that the rule invokes to evaluate
     * 			your resources. When you use the <code>PutConfigRule</code> action
     * 			to add the rule to AWS Config, you must specify the Amazon Resource
     * 			Name (ARN) that AWS Lambda assigns to the function. Specify the ARN
     * 			for the <code>SourceIdentifier</code> key. This key is part of the
     * 				<code>Source</code> object, which is part of the
     * 				<code>ConfigRule</code> object. </p>
     * 		       <p>If you are adding an AWS managed Config rule, specify the
     * 			rule's identifier for the <code>SourceIdentifier</code> key. To
     * 			reference AWS managed Config rule identifiers, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">About AWS Managed Config Rules</a>.</p>
     * 		       <p>For any new rule that you add, specify the
     * 				<code>ConfigRuleName</code> in the <code>ConfigRule</code>
     * 			object. Do not specify the <code>ConfigRuleArn</code> or the
     * 				<code>ConfigRuleId</code>. These values are generated by AWS
     * 			Config for new rules.</p>
     * 		       <p>If you are updating a rule that you added previously, you can
     * 			specify the rule by <code>ConfigRuleName</code>,
     * 				<code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the
     * 				<code>ConfigRule</code> data type that you use in this
     * 			request.</p>
     * 		       <p>The maximum number of rules that AWS Config supports is 150.</p>
     *
     * 		       <p>For information about requesting a rule limit increase, see
     * 				<a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config">AWS Config Limits</a> in the <i>AWS General
     * 				Reference Guide</i>.</p>
     *
     * 		       <p>For more information about developing and using AWS Config
     * 			rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a>
     * 			in the <i>AWS Config Developer Guide</i>.</p>
     */
    putConfigRule(args: PutConfigRuleCommandInput, options?: __HttpHandlerOptions): Promise<PutConfigRuleCommandOutput>;
    putConfigRule(args: PutConfigRuleCommandInput, cb: (err: any, data?: PutConfigRuleCommandOutput) => void): void;
    putConfigRule(args: PutConfigRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutConfigRuleCommandOutput) => void): void;
    /**
     * <p>Creates and updates the configuration aggregator with the
     * 			selected source accounts and regions. The source account can be
     * 			individual account(s) or an organization.</p>
     * 		       <note>
     * 			         <p>AWS Config should be enabled in source accounts and regions
     * 				you want to aggregate.</p>
     * 			         <p>If your source type is an organization, you must be signed
     * 				in to the master account and all features must be enabled in
     * 				your organization. AWS Config calls
     * 					<code>EnableAwsServiceAccess</code> API to enable
     * 				integration between AWS Config and AWS Organizations. </p>
     * 		       </note>
     */
    putConfigurationAggregator(args: PutConfigurationAggregatorCommandInput, options?: __HttpHandlerOptions): Promise<PutConfigurationAggregatorCommandOutput>;
    putConfigurationAggregator(args: PutConfigurationAggregatorCommandInput, cb: (err: any, data?: PutConfigurationAggregatorCommandOutput) => void): void;
    putConfigurationAggregator(args: PutConfigurationAggregatorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutConfigurationAggregatorCommandOutput) => void): void;
    /**
     * <p>Creates a new configuration recorder to record the selected
     * 			resource configurations.</p>
     * 		       <p>You can use this action to change the role <code>roleARN</code>
     * 			or the <code>recordingGroup</code> of an existing recorder. To
     * 			change the role, call the action on the existing configuration
     * 			recorder and specify a role.</p>
     * 		       <note>
     * 			         <p>Currently, you can specify only one configuration recorder
     * 				per region in your account.</p>
     * 			         <p>If <code>ConfigurationRecorder</code> does not have the
     * 					<b>recordingGroup</b> parameter
     * 				specified, the default is to record all supported resource
     * 				types.</p>
     * 		       </note>
     */
    putConfigurationRecorder(args: PutConfigurationRecorderCommandInput, options?: __HttpHandlerOptions): Promise<PutConfigurationRecorderCommandOutput>;
    putConfigurationRecorder(args: PutConfigurationRecorderCommandInput, cb: (err: any, data?: PutConfigurationRecorderCommandOutput) => void): void;
    putConfigurationRecorder(args: PutConfigurationRecorderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutConfigurationRecorderCommandOutput) => void): void;
    /**
     * <p>Creates or updates a conformance pack. A conformance pack is a collection of AWS Config rules that can be easily deployed in an account and a region and across AWS Organization.</p>
     * 		       <p>This API creates a service linked role <code>AWSServiceRoleForConfigConforms</code> in your account.
     * 		The service linked role is created only when the role does not exist in your account. AWS Config verifies the existence of role with <code>GetRole</code> action.</p>
     * 		       <note>
     *             <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both.
     * 			If you provide both AWS Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p>
     *          </note>
     */
    putConformancePack(args: PutConformancePackCommandInput, options?: __HttpHandlerOptions): Promise<PutConformancePackCommandOutput>;
    putConformancePack(args: PutConformancePackCommandInput, cb: (err: any, data?: PutConformancePackCommandOutput) => void): void;
    putConformancePack(args: PutConformancePackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutConformancePackCommandOutput) => void): void;
    /**
     * <p>Creates a delivery channel object to deliver configuration
     * 			information to an Amazon S3 bucket and Amazon SNS topic.</p>
     * 		       <p>Before you can create a delivery channel, you must create a
     * 			configuration recorder.</p>
     * 		       <p>You can use this action to change the Amazon S3 bucket or an
     * 			Amazon SNS topic of the existing delivery channel. To change the
     * 			Amazon S3 bucket or an Amazon SNS topic, call this action and
     * 			specify the changed values for the S3 bucket and the SNS topic. If
     * 			you specify a different value for either the S3 bucket or the SNS
     * 			topic, this action will keep the existing value for the parameter
     * 			that is not changed.</p>
     * 		       <note>
     * 			         <p>You can have only one delivery channel per region in your
     * 				account.</p>
     *
     *
     * 		       </note>
     */
    putDeliveryChannel(args: PutDeliveryChannelCommandInput, options?: __HttpHandlerOptions): Promise<PutDeliveryChannelCommandOutput>;
    putDeliveryChannel(args: PutDeliveryChannelCommandInput, cb: (err: any, data?: PutDeliveryChannelCommandOutput) => void): void;
    putDeliveryChannel(args: PutDeliveryChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutDeliveryChannelCommandOutput) => void): void;
    /**
     * <p>Used by an AWS Lambda function to deliver evaluation results to
     * 			AWS Config. This action is required in every AWS Lambda function
     * 			that is invoked by an AWS Config rule.</p>
     */
    putEvaluations(args: PutEvaluationsCommandInput, options?: __HttpHandlerOptions): Promise<PutEvaluationsCommandOutput>;
    putEvaluations(args: PutEvaluationsCommandInput, cb: (err: any, data?: PutEvaluationsCommandOutput) => void): void;
    putEvaluations(args: PutEvaluationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutEvaluationsCommandOutput) => void): void;
    /**
     * <p>Adds or updates organization config rule for your entire organization evaluating whether your AWS resources comply with your desired configurations. Only a master account can create or update an organization config rule.</p>
     * 		       <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code>
     * 			in the master account of your organization. The service linked role is created only when the role does not exist in the master account. AWS Config verifies the existence of role with <code>GetRole</code> action.</p>
     * 		       <p>You can use this action to create both custom AWS Config rules and AWS managed Config rules.
     * 			If you are adding a new custom AWS Config rule, you must first create AWS Lambda function in the master account that the rule invokes to evaluate your resources.
     * 			When you use the <code>PutOrganizationConfigRule</code> action to add the rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function.
     * 			If you are adding an AWS managed Config rule, specify the rule's identifier for the <code>RuleIdentifier</code> key.</p>
     * 		       <p>The maximum number of organization config rules that AWS Config supports is 150.</p>
     *
     * 		       <note>
     *             <p>Specify either <code>OrganizationCustomRuleMetadata</code> or <code>OrganizationManagedRuleMetadata</code>.</p>
     *          </note>
     */
    putOrganizationConfigRule(args: PutOrganizationConfigRuleCommandInput, options?: __HttpHandlerOptions): Promise<PutOrganizationConfigRuleCommandOutput>;
    putOrganizationConfigRule(args: PutOrganizationConfigRuleCommandInput, cb: (err: any, data?: PutOrganizationConfigRuleCommandOutput) => void): void;
    putOrganizationConfigRule(args: PutOrganizationConfigRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutOrganizationConfigRuleCommandOutput) => void): void;
    /**
     * <p>Deploys conformance packs across member accounts in an AWS Organization.</p>
     * 		       <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code>
     * 			through the <code>EnableAWSServiceAccess</code> action and creates a
     * 			service linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the master account of your organization.
     * 			The service linked role is created only when the role does not exist in the master account.
     * 			AWS Config verifies the existence of role with GetRole action.</p>
     * 		       <note>
     *             <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both.
     * 			If you provide both AWS Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p>
     * 			         <p>AWS Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the confomance pack is created or updated.
     * 				You cannot update a conformance pack while it is in this state.</p>
     * 			         <p>You can create 6 conformance packs with 25 AWS Config rules in each pack.</p>
     *          </note>
     */
    putOrganizationConformancePack(args: PutOrganizationConformancePackCommandInput, options?: __HttpHandlerOptions): Promise<PutOrganizationConformancePackCommandOutput>;
    putOrganizationConformancePack(args: PutOrganizationConformancePackCommandInput, cb: (err: any, data?: PutOrganizationConformancePackCommandOutput) => void): void;
    putOrganizationConformancePack(args: PutOrganizationConformancePackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutOrganizationConformancePackCommandOutput) => void): void;
    /**
     * <p>Adds or updates the remediation configuration with a specific AWS Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the AWS Config rule.
     * 		The AWS Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. </p>
     */
    putRemediationConfigurations(args: PutRemediationConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<PutRemediationConfigurationsCommandOutput>;
    putRemediationConfigurations(args: PutRemediationConfigurationsCommandInput, cb: (err: any, data?: PutRemediationConfigurationsCommandOutput) => void): void;
    putRemediationConfigurations(args: PutRemediationConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRemediationConfigurationsCommandOutput) => void): void;
    /**
     * <p>A remediation exception is when a specific resource is no longer considered for auto-remediation.
     * 			This API adds a new exception or updates an exisiting exception for a specific resource with a specific AWS Config rule. </p>
     */
    putRemediationExceptions(args: PutRemediationExceptionsCommandInput, options?: __HttpHandlerOptions): Promise<PutRemediationExceptionsCommandOutput>;
    putRemediationExceptions(args: PutRemediationExceptionsCommandInput, cb: (err: any, data?: PutRemediationExceptionsCommandOutput) => void): void;
    putRemediationExceptions(args: PutRemediationExceptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRemediationExceptionsCommandOutput) => void): void;
    /**
     * <p>Records the configuration state for the resource provided in the request.
     *
     * 			The configuration state of a resource is represented in AWS Config as Configuration Items.
     * 			Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing AWS Config APIs. </p>
     * 		       <note>
     *             <p>The custom resource type must be registered with AWS CloudFormation. This API accepts the configuration item registered with AWS CloudFormation.</p>
     * 			         <p>When you call this API, AWS Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource.
     * 				</p>
     *          </note>
     */
    putResourceConfig(args: PutResourceConfigCommandInput, options?: __HttpHandlerOptions): Promise<PutResourceConfigCommandOutput>;
    putResourceConfig(args: PutResourceConfigCommandInput, cb: (err: any, data?: PutResourceConfigCommandOutput) => void): void;
    putResourceConfig(args: PutResourceConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutResourceConfigCommandOutput) => void): void;
    /**
     * <p>Creates and updates the retention configuration with details
     * 			about retention period (number of days) that AWS Config stores your
     * 			historical information. The API creates the
     * 				<code>RetentionConfiguration</code> object and names the object
     * 			as <b>default</b>. When you have a
     * 				<code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the
     * 			default object. </p>
     * 		       <note>
     * 			         <p>Currently, AWS Config supports only one retention
     * 				configuration per region in your account.</p>
     * 		       </note>
     */
    putRetentionConfiguration(args: PutRetentionConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutRetentionConfigurationCommandOutput>;
    putRetentionConfiguration(args: PutRetentionConfigurationCommandInput, cb: (err: any, data?: PutRetentionConfigurationCommandOutput) => void): void;
    putRetentionConfiguration(args: PutRetentionConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRetentionConfigurationCommandOutput) => void): void;
    /**
     * <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p>
     * 		       <p>For more information about query components, see the
     * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
     *                <b>Query Components</b>
     *             </a> section in the AWS Config Developer Guide.</p>
     */
    selectResourceConfig(args: SelectResourceConfigCommandInput, options?: __HttpHandlerOptions): Promise<SelectResourceConfigCommandOutput>;
    selectResourceConfig(args: SelectResourceConfigCommandInput, cb: (err: any, data?: SelectResourceConfigCommandOutput) => void): void;
    selectResourceConfig(args: SelectResourceConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SelectResourceConfigCommandOutput) => void): void;
    /**
     * <p>Runs an on-demand evaluation for the specified AWS Config rules
     * 			against the last known configuration state of the resources. Use
     * 				<code>StartConfigRulesEvaluation</code> when you want to test
     * 			that a rule you updated is working as expected.
     * 				<code>StartConfigRulesEvaluation</code> does not re-record the
     * 			latest configuration state for your resources. It re-runs an
     * 			evaluation against the last known state of your resources. </p>
     * 		       <p>You can specify up to 25 AWS Config rules per request. </p>
     *
     *
     * 		       <p>An existing <code>StartConfigRulesEvaluation</code> call for
     * 			the specified rules must complete before you can call the API again.
     * 			If you chose to have AWS Config stream to an Amazon SNS topic, you
     * 			will receive a <code>ConfigRuleEvaluationStarted</code> notification
     * 			when the evaluation starts.</p>
     * 		       <note>
     * 			         <p>You don't need to call the
     * 					<code>StartConfigRulesEvaluation</code> API to run an
     * 				evaluation for a new rule. When you create a rule, AWS Config
     * 				evaluates your resources against the rule automatically.
     * 			</p>
     * 		       </note>
     * 		       <p>The <code>StartConfigRulesEvaluation</code> API is useful if
     * 			you want to run on-demand evaluations, such as the following
     * 			example:</p>
     * 		       <ol>
     *             <li>
     * 				           <p>You have a custom rule that evaluates your IAM
     * 					resources every 24 hours.</p>
     * 			         </li>
     *             <li>
     * 				           <p>You update your Lambda function to add additional
     * 					conditions to your rule.</p>
     * 			         </li>
     *             <li>
     * 				           <p>Instead of waiting for the next periodic evaluation,
     * 					you call the <code>StartConfigRulesEvaluation</code>
     * 					API.</p>
     * 			         </li>
     *             <li>
     * 				           <p>AWS Config invokes your Lambda function and evaluates
     * 					your IAM resources.</p>
     * 			         </li>
     *             <li>
     * 				           <p>Your custom rule will still run periodic evaluations
     * 					every 24 hours.</p>
     * 			         </li>
     *          </ol>
     */
    startConfigRulesEvaluation(args: StartConfigRulesEvaluationCommandInput, options?: __HttpHandlerOptions): Promise<StartConfigRulesEvaluationCommandOutput>;
    startConfigRulesEvaluation(args: StartConfigRulesEvaluationCommandInput, cb: (err: any, data?: StartConfigRulesEvaluationCommandOutput) => void): void;
    startConfigRulesEvaluation(args: StartConfigRulesEvaluationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartConfigRulesEvaluationCommandOutput) => void): void;
    /**
     * <p>Starts recording configurations of the AWS resources you have
     * 			selected to record in your AWS account.</p>
     * 		       <p>You must have created at least one delivery channel to
     * 			successfully start the configuration recorder.</p>
     */
    startConfigurationRecorder(args: StartConfigurationRecorderCommandInput, options?: __HttpHandlerOptions): Promise<StartConfigurationRecorderCommandOutput>;
    startConfigurationRecorder(args: StartConfigurationRecorderCommandInput, cb: (err: any, data?: StartConfigurationRecorderCommandOutput) => void): void;
    startConfigurationRecorder(args: StartConfigurationRecorderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartConfigurationRecorderCommandOutput) => void): void;
    /**
     * <p>Runs an on-demand remediation for the specified AWS Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p>
     * 			      <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
     */
    startRemediationExecution(args: StartRemediationExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StartRemediationExecutionCommandOutput>;
    startRemediationExecution(args: StartRemediationExecutionCommandInput, cb: (err: any, data?: StartRemediationExecutionCommandOutput) => void): void;
    startRemediationExecution(args: StartRemediationExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartRemediationExecutionCommandOutput) => void): void;
    /**
     * <p>Stops recording configurations of the AWS resources you have selected to record in your AWS account.</p>
     */
    stopConfigurationRecorder(args: StopConfigurationRecorderCommandInput, options?: __HttpHandlerOptions): Promise<StopConfigurationRecorderCommandOutput>;
    stopConfigurationRecorder(args: StopConfigurationRecorderCommandInput, cb: (err: any, data?: StopConfigurationRecorderCommandOutput) => void): void;
    stopConfigurationRecorder(args: StopConfigurationRecorderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopConfigurationRecorderCommandOutput) => void): void;
    /**
     * <p>Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed.
     * 			When a resource is deleted, the tags associated with that resource are deleted as well.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Deletes specified tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
