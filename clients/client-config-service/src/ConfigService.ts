// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchGetAggregateResourceConfigCommand,
  BatchGetAggregateResourceConfigCommandInput,
  BatchGetAggregateResourceConfigCommandOutput,
} from "./commands/BatchGetAggregateResourceConfigCommand";
import {
  BatchGetResourceConfigCommand,
  BatchGetResourceConfigCommandInput,
  BatchGetResourceConfigCommandOutput,
} from "./commands/BatchGetResourceConfigCommand";
import {
  DeleteAggregationAuthorizationCommand,
  DeleteAggregationAuthorizationCommandInput,
  DeleteAggregationAuthorizationCommandOutput,
} from "./commands/DeleteAggregationAuthorizationCommand";
import {
  DeleteConfigRuleCommand,
  DeleteConfigRuleCommandInput,
  DeleteConfigRuleCommandOutput,
} from "./commands/DeleteConfigRuleCommand";
import {
  DeleteConfigurationAggregatorCommand,
  DeleteConfigurationAggregatorCommandInput,
  DeleteConfigurationAggregatorCommandOutput,
} from "./commands/DeleteConfigurationAggregatorCommand";
import {
  DeleteConfigurationRecorderCommand,
  DeleteConfigurationRecorderCommandInput,
  DeleteConfigurationRecorderCommandOutput,
} from "./commands/DeleteConfigurationRecorderCommand";
import {
  DeleteConformancePackCommand,
  DeleteConformancePackCommandInput,
  DeleteConformancePackCommandOutput,
} from "./commands/DeleteConformancePackCommand";
import {
  DeleteDeliveryChannelCommand,
  DeleteDeliveryChannelCommandInput,
  DeleteDeliveryChannelCommandOutput,
} from "./commands/DeleteDeliveryChannelCommand";
import {
  DeleteEvaluationResultsCommand,
  DeleteEvaluationResultsCommandInput,
  DeleteEvaluationResultsCommandOutput,
} from "./commands/DeleteEvaluationResultsCommand";
import {
  DeleteOrganizationConfigRuleCommand,
  DeleteOrganizationConfigRuleCommandInput,
  DeleteOrganizationConfigRuleCommandOutput,
} from "./commands/DeleteOrganizationConfigRuleCommand";
import {
  DeleteOrganizationConformancePackCommand,
  DeleteOrganizationConformancePackCommandInput,
  DeleteOrganizationConformancePackCommandOutput,
} from "./commands/DeleteOrganizationConformancePackCommand";
import {
  DeletePendingAggregationRequestCommand,
  DeletePendingAggregationRequestCommandInput,
  DeletePendingAggregationRequestCommandOutput,
} from "./commands/DeletePendingAggregationRequestCommand";
import {
  DeleteRemediationConfigurationCommand,
  DeleteRemediationConfigurationCommandInput,
  DeleteRemediationConfigurationCommandOutput,
} from "./commands/DeleteRemediationConfigurationCommand";
import {
  DeleteRemediationExceptionsCommand,
  DeleteRemediationExceptionsCommandInput,
  DeleteRemediationExceptionsCommandOutput,
} from "./commands/DeleteRemediationExceptionsCommand";
import {
  DeleteResourceConfigCommand,
  DeleteResourceConfigCommandInput,
  DeleteResourceConfigCommandOutput,
} from "./commands/DeleteResourceConfigCommand";
import {
  DeleteRetentionConfigurationCommand,
  DeleteRetentionConfigurationCommandInput,
  DeleteRetentionConfigurationCommandOutput,
} from "./commands/DeleteRetentionConfigurationCommand";
import {
  DeleteStoredQueryCommand,
  DeleteStoredQueryCommandInput,
  DeleteStoredQueryCommandOutput,
} from "./commands/DeleteStoredQueryCommand";
import {
  DeliverConfigSnapshotCommand,
  DeliverConfigSnapshotCommandInput,
  DeliverConfigSnapshotCommandOutput,
} from "./commands/DeliverConfigSnapshotCommand";
import {
  DescribeAggregateComplianceByConfigRulesCommand,
  DescribeAggregateComplianceByConfigRulesCommandInput,
  DescribeAggregateComplianceByConfigRulesCommandOutput,
} from "./commands/DescribeAggregateComplianceByConfigRulesCommand";
import {
  DescribeAggregateComplianceByConformancePacksCommand,
  DescribeAggregateComplianceByConformancePacksCommandInput,
  DescribeAggregateComplianceByConformancePacksCommandOutput,
} from "./commands/DescribeAggregateComplianceByConformancePacksCommand";
import {
  DescribeAggregationAuthorizationsCommand,
  DescribeAggregationAuthorizationsCommandInput,
  DescribeAggregationAuthorizationsCommandOutput,
} from "./commands/DescribeAggregationAuthorizationsCommand";
import {
  DescribeComplianceByConfigRuleCommand,
  DescribeComplianceByConfigRuleCommandInput,
  DescribeComplianceByConfigRuleCommandOutput,
} from "./commands/DescribeComplianceByConfigRuleCommand";
import {
  DescribeComplianceByResourceCommand,
  DescribeComplianceByResourceCommandInput,
  DescribeComplianceByResourceCommandOutput,
} from "./commands/DescribeComplianceByResourceCommand";
import {
  DescribeConfigRuleEvaluationStatusCommand,
  DescribeConfigRuleEvaluationStatusCommandInput,
  DescribeConfigRuleEvaluationStatusCommandOutput,
} from "./commands/DescribeConfigRuleEvaluationStatusCommand";
import {
  DescribeConfigRulesCommand,
  DescribeConfigRulesCommandInput,
  DescribeConfigRulesCommandOutput,
} from "./commands/DescribeConfigRulesCommand";
import {
  DescribeConfigurationAggregatorsCommand,
  DescribeConfigurationAggregatorsCommandInput,
  DescribeConfigurationAggregatorsCommandOutput,
} from "./commands/DescribeConfigurationAggregatorsCommand";
import {
  DescribeConfigurationAggregatorSourcesStatusCommand,
  DescribeConfigurationAggregatorSourcesStatusCommandInput,
  DescribeConfigurationAggregatorSourcesStatusCommandOutput,
} from "./commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import {
  DescribeConfigurationRecordersCommand,
  DescribeConfigurationRecordersCommandInput,
  DescribeConfigurationRecordersCommandOutput,
} from "./commands/DescribeConfigurationRecordersCommand";
import {
  DescribeConfigurationRecorderStatusCommand,
  DescribeConfigurationRecorderStatusCommandInput,
  DescribeConfigurationRecorderStatusCommandOutput,
} from "./commands/DescribeConfigurationRecorderStatusCommand";
import {
  DescribeConformancePackComplianceCommand,
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput,
} from "./commands/DescribeConformancePackComplianceCommand";
import {
  DescribeConformancePacksCommand,
  DescribeConformancePacksCommandInput,
  DescribeConformancePacksCommandOutput,
} from "./commands/DescribeConformancePacksCommand";
import {
  DescribeConformancePackStatusCommand,
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput,
} from "./commands/DescribeConformancePackStatusCommand";
import {
  DescribeDeliveryChannelsCommand,
  DescribeDeliveryChannelsCommandInput,
  DescribeDeliveryChannelsCommandOutput,
} from "./commands/DescribeDeliveryChannelsCommand";
import {
  DescribeDeliveryChannelStatusCommand,
  DescribeDeliveryChannelStatusCommandInput,
  DescribeDeliveryChannelStatusCommandOutput,
} from "./commands/DescribeDeliveryChannelStatusCommand";
import {
  DescribeOrganizationConfigRulesCommand,
  DescribeOrganizationConfigRulesCommandInput,
  DescribeOrganizationConfigRulesCommandOutput,
} from "./commands/DescribeOrganizationConfigRulesCommand";
import {
  DescribeOrganizationConfigRuleStatusesCommand,
  DescribeOrganizationConfigRuleStatusesCommandInput,
  DescribeOrganizationConfigRuleStatusesCommandOutput,
} from "./commands/DescribeOrganizationConfigRuleStatusesCommand";
import {
  DescribeOrganizationConformancePacksCommand,
  DescribeOrganizationConformancePacksCommandInput,
  DescribeOrganizationConformancePacksCommandOutput,
} from "./commands/DescribeOrganizationConformancePacksCommand";
import {
  DescribeOrganizationConformancePackStatusesCommand,
  DescribeOrganizationConformancePackStatusesCommandInput,
  DescribeOrganizationConformancePackStatusesCommandOutput,
} from "./commands/DescribeOrganizationConformancePackStatusesCommand";
import {
  DescribePendingAggregationRequestsCommand,
  DescribePendingAggregationRequestsCommandInput,
  DescribePendingAggregationRequestsCommandOutput,
} from "./commands/DescribePendingAggregationRequestsCommand";
import {
  DescribeRemediationConfigurationsCommand,
  DescribeRemediationConfigurationsCommandInput,
  DescribeRemediationConfigurationsCommandOutput,
} from "./commands/DescribeRemediationConfigurationsCommand";
import {
  DescribeRemediationExceptionsCommand,
  DescribeRemediationExceptionsCommandInput,
  DescribeRemediationExceptionsCommandOutput,
} from "./commands/DescribeRemediationExceptionsCommand";
import {
  DescribeRemediationExecutionStatusCommand,
  DescribeRemediationExecutionStatusCommandInput,
  DescribeRemediationExecutionStatusCommandOutput,
} from "./commands/DescribeRemediationExecutionStatusCommand";
import {
  DescribeRetentionConfigurationsCommand,
  DescribeRetentionConfigurationsCommandInput,
  DescribeRetentionConfigurationsCommandOutput,
} from "./commands/DescribeRetentionConfigurationsCommand";
import {
  GetAggregateComplianceDetailsByConfigRuleCommand,
  GetAggregateComplianceDetailsByConfigRuleCommandInput,
  GetAggregateComplianceDetailsByConfigRuleCommandOutput,
} from "./commands/GetAggregateComplianceDetailsByConfigRuleCommand";
import {
  GetAggregateConfigRuleComplianceSummaryCommand,
  GetAggregateConfigRuleComplianceSummaryCommandInput,
  GetAggregateConfigRuleComplianceSummaryCommandOutput,
} from "./commands/GetAggregateConfigRuleComplianceSummaryCommand";
import {
  GetAggregateConformancePackComplianceSummaryCommand,
  GetAggregateConformancePackComplianceSummaryCommandInput,
  GetAggregateConformancePackComplianceSummaryCommandOutput,
} from "./commands/GetAggregateConformancePackComplianceSummaryCommand";
import {
  GetAggregateDiscoveredResourceCountsCommand,
  GetAggregateDiscoveredResourceCountsCommandInput,
  GetAggregateDiscoveredResourceCountsCommandOutput,
} from "./commands/GetAggregateDiscoveredResourceCountsCommand";
import {
  GetAggregateResourceConfigCommand,
  GetAggregateResourceConfigCommandInput,
  GetAggregateResourceConfigCommandOutput,
} from "./commands/GetAggregateResourceConfigCommand";
import {
  GetComplianceDetailsByConfigRuleCommand,
  GetComplianceDetailsByConfigRuleCommandInput,
  GetComplianceDetailsByConfigRuleCommandOutput,
} from "./commands/GetComplianceDetailsByConfigRuleCommand";
import {
  GetComplianceDetailsByResourceCommand,
  GetComplianceDetailsByResourceCommandInput,
  GetComplianceDetailsByResourceCommandOutput,
} from "./commands/GetComplianceDetailsByResourceCommand";
import {
  GetComplianceSummaryByConfigRuleCommand,
  GetComplianceSummaryByConfigRuleCommandInput,
  GetComplianceSummaryByConfigRuleCommandOutput,
} from "./commands/GetComplianceSummaryByConfigRuleCommand";
import {
  GetComplianceSummaryByResourceTypeCommand,
  GetComplianceSummaryByResourceTypeCommandInput,
  GetComplianceSummaryByResourceTypeCommandOutput,
} from "./commands/GetComplianceSummaryByResourceTypeCommand";
import {
  GetConformancePackComplianceDetailsCommand,
  GetConformancePackComplianceDetailsCommandInput,
  GetConformancePackComplianceDetailsCommandOutput,
} from "./commands/GetConformancePackComplianceDetailsCommand";
import {
  GetConformancePackComplianceSummaryCommand,
  GetConformancePackComplianceSummaryCommandInput,
  GetConformancePackComplianceSummaryCommandOutput,
} from "./commands/GetConformancePackComplianceSummaryCommand";
import {
  GetCustomRulePolicyCommand,
  GetCustomRulePolicyCommandInput,
  GetCustomRulePolicyCommandOutput,
} from "./commands/GetCustomRulePolicyCommand";
import {
  GetDiscoveredResourceCountsCommand,
  GetDiscoveredResourceCountsCommandInput,
  GetDiscoveredResourceCountsCommandOutput,
} from "./commands/GetDiscoveredResourceCountsCommand";
import {
  GetOrganizationConfigRuleDetailedStatusCommand,
  GetOrganizationConfigRuleDetailedStatusCommandInput,
  GetOrganizationConfigRuleDetailedStatusCommandOutput,
} from "./commands/GetOrganizationConfigRuleDetailedStatusCommand";
import {
  GetOrganizationConformancePackDetailedStatusCommand,
  GetOrganizationConformancePackDetailedStatusCommandInput,
  GetOrganizationConformancePackDetailedStatusCommandOutput,
} from "./commands/GetOrganizationConformancePackDetailedStatusCommand";
import {
  GetOrganizationCustomRulePolicyCommand,
  GetOrganizationCustomRulePolicyCommandInput,
  GetOrganizationCustomRulePolicyCommandOutput,
} from "./commands/GetOrganizationCustomRulePolicyCommand";
import {
  GetResourceConfigHistoryCommand,
  GetResourceConfigHistoryCommandInput,
  GetResourceConfigHistoryCommandOutput,
} from "./commands/GetResourceConfigHistoryCommand";
import {
  GetResourceEvaluationSummaryCommand,
  GetResourceEvaluationSummaryCommandInput,
  GetResourceEvaluationSummaryCommandOutput,
} from "./commands/GetResourceEvaluationSummaryCommand";
import {
  GetStoredQueryCommand,
  GetStoredQueryCommandInput,
  GetStoredQueryCommandOutput,
} from "./commands/GetStoredQueryCommand";
import {
  ListAggregateDiscoveredResourcesCommand,
  ListAggregateDiscoveredResourcesCommandInput,
  ListAggregateDiscoveredResourcesCommandOutput,
} from "./commands/ListAggregateDiscoveredResourcesCommand";
import {
  ListConformancePackComplianceScoresCommand,
  ListConformancePackComplianceScoresCommandInput,
  ListConformancePackComplianceScoresCommandOutput,
} from "./commands/ListConformancePackComplianceScoresCommand";
import {
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "./commands/ListDiscoveredResourcesCommand";
import {
  ListResourceEvaluationsCommand,
  ListResourceEvaluationsCommandInput,
  ListResourceEvaluationsCommandOutput,
} from "./commands/ListResourceEvaluationsCommand";
import {
  ListStoredQueriesCommand,
  ListStoredQueriesCommandInput,
  ListStoredQueriesCommandOutput,
} from "./commands/ListStoredQueriesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutAggregationAuthorizationCommand,
  PutAggregationAuthorizationCommandInput,
  PutAggregationAuthorizationCommandOutput,
} from "./commands/PutAggregationAuthorizationCommand";
import {
  PutConfigRuleCommand,
  PutConfigRuleCommandInput,
  PutConfigRuleCommandOutput,
} from "./commands/PutConfigRuleCommand";
import {
  PutConfigurationAggregatorCommand,
  PutConfigurationAggregatorCommandInput,
  PutConfigurationAggregatorCommandOutput,
} from "./commands/PutConfigurationAggregatorCommand";
import {
  PutConfigurationRecorderCommand,
  PutConfigurationRecorderCommandInput,
  PutConfigurationRecorderCommandOutput,
} from "./commands/PutConfigurationRecorderCommand";
import {
  PutConformancePackCommand,
  PutConformancePackCommandInput,
  PutConformancePackCommandOutput,
} from "./commands/PutConformancePackCommand";
import {
  PutDeliveryChannelCommand,
  PutDeliveryChannelCommandInput,
  PutDeliveryChannelCommandOutput,
} from "./commands/PutDeliveryChannelCommand";
import {
  PutEvaluationsCommand,
  PutEvaluationsCommandInput,
  PutEvaluationsCommandOutput,
} from "./commands/PutEvaluationsCommand";
import {
  PutExternalEvaluationCommand,
  PutExternalEvaluationCommandInput,
  PutExternalEvaluationCommandOutput,
} from "./commands/PutExternalEvaluationCommand";
import {
  PutOrganizationConfigRuleCommand,
  PutOrganizationConfigRuleCommandInput,
  PutOrganizationConfigRuleCommandOutput,
} from "./commands/PutOrganizationConfigRuleCommand";
import {
  PutOrganizationConformancePackCommand,
  PutOrganizationConformancePackCommandInput,
  PutOrganizationConformancePackCommandOutput,
} from "./commands/PutOrganizationConformancePackCommand";
import {
  PutRemediationConfigurationsCommand,
  PutRemediationConfigurationsCommandInput,
  PutRemediationConfigurationsCommandOutput,
} from "./commands/PutRemediationConfigurationsCommand";
import {
  PutRemediationExceptionsCommand,
  PutRemediationExceptionsCommandInput,
  PutRemediationExceptionsCommandOutput,
} from "./commands/PutRemediationExceptionsCommand";
import {
  PutResourceConfigCommand,
  PutResourceConfigCommandInput,
  PutResourceConfigCommandOutput,
} from "./commands/PutResourceConfigCommand";
import {
  PutRetentionConfigurationCommand,
  PutRetentionConfigurationCommandInput,
  PutRetentionConfigurationCommandOutput,
} from "./commands/PutRetentionConfigurationCommand";
import {
  PutStoredQueryCommand,
  PutStoredQueryCommandInput,
  PutStoredQueryCommandOutput,
} from "./commands/PutStoredQueryCommand";
import {
  SelectAggregateResourceConfigCommand,
  SelectAggregateResourceConfigCommandInput,
  SelectAggregateResourceConfigCommandOutput,
} from "./commands/SelectAggregateResourceConfigCommand";
import {
  SelectResourceConfigCommand,
  SelectResourceConfigCommandInput,
  SelectResourceConfigCommandOutput,
} from "./commands/SelectResourceConfigCommand";
import {
  StartConfigRulesEvaluationCommand,
  StartConfigRulesEvaluationCommandInput,
  StartConfigRulesEvaluationCommandOutput,
} from "./commands/StartConfigRulesEvaluationCommand";
import {
  StartConfigurationRecorderCommand,
  StartConfigurationRecorderCommandInput,
  StartConfigurationRecorderCommandOutput,
} from "./commands/StartConfigurationRecorderCommand";
import {
  StartRemediationExecutionCommand,
  StartRemediationExecutionCommandInput,
  StartRemediationExecutionCommandOutput,
} from "./commands/StartRemediationExecutionCommand";
import {
  StartResourceEvaluationCommand,
  StartResourceEvaluationCommandInput,
  StartResourceEvaluationCommandOutput,
} from "./commands/StartResourceEvaluationCommand";
import {
  StopConfigurationRecorderCommand,
  StopConfigurationRecorderCommandInput,
  StopConfigurationRecorderCommandOutput,
} from "./commands/StopConfigurationRecorderCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { ConfigServiceClient } from "./ConfigServiceClient";

/**
 * <fullname>Config</fullname>
 *
 * 		       <p>Config provides a way to keep track of the configurations
 * 			of all the Amazon Web Services resources associated with your Amazon Web Services account. You can
 * 			use Config to get the current and historical configurations of
 * 			each Amazon Web Services resource and also to get information about the relationship
 * 			between the resources. An Amazon Web Services resource can be an Amazon Compute
 * 			Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an
 * 			elastic network Interface (ENI), or a security group. For a complete
 * 			list of resources currently supported by Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Amazon Web Services resources</a>.</p>
 *
 * 		       <p>You can access and manage Config through the Amazon Web Services Management
 * 			Console, the Amazon Web Services Command Line Interface (Amazon Web Services CLI), the Config
 * 			API, or the Amazon Web Services SDKs for Config. This reference guide contains
 * 			documentation for the Config API and the Amazon Web Services CLI commands that
 * 			you can use to manage Config. The Config API uses the
 * 			Signature Version 4 protocol for signing requests. For more
 * 			information about how to sign a request with this protocol, see
 * 				<a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
 * 				Version 4 Signing Process</a>. For detailed information
 * 			about Config features and their associated actions or commands,
 * 			as well as how to work with Amazon Web Services Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is Config</a> in the <i>Config Developer
 * 				Guide</i>.</p>
 */
export class ConfigService extends ConfigServiceClient {
  /**
   * <p>Returns the current configuration items for resources that are present in your Config aggregator. The operation also returns a list of resources that are not processed in the current request.
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
  public batchGetAggregateResourceConfig(
    args: BatchGetAggregateResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetAggregateResourceConfigCommandOutput>;
  public batchGetAggregateResourceConfig(
    args: BatchGetAggregateResourceConfigCommandInput,
    cb: (err: any, data?: BatchGetAggregateResourceConfigCommandOutput) => void
  ): void;
  public batchGetAggregateResourceConfig(
    args: BatchGetAggregateResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetAggregateResourceConfigCommandOutput) => void
  ): void;
  public batchGetAggregateResourceConfig(
    args: BatchGetAggregateResourceConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetAggregateResourceConfigCommandOutput) => void),
    cb?: (err: any, data?: BatchGetAggregateResourceConfigCommandOutput) => void
  ): Promise<BatchGetAggregateResourceConfigCommandOutput> | void {
    const command = new BatchGetAggregateResourceConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the <code>BaseConfigurationItem</code> for one or more requested resources.
   * 			The operation also returns a list of resources that are
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
  public batchGetResourceConfig(
    args: BatchGetResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetResourceConfigCommandOutput>;
  public batchGetResourceConfig(
    args: BatchGetResourceConfigCommandInput,
    cb: (err: any, data?: BatchGetResourceConfigCommandOutput) => void
  ): void;
  public batchGetResourceConfig(
    args: BatchGetResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetResourceConfigCommandOutput) => void
  ): void;
  public batchGetResourceConfig(
    args: BatchGetResourceConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetResourceConfigCommandOutput) => void),
    cb?: (err: any, data?: BatchGetResourceConfigCommandOutput) => void
  ): Promise<BatchGetResourceConfigCommandOutput> | void {
    const command = new BatchGetResourceConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the authorization granted to the specified
   * 			configuration aggregator account in a specified region.</p>
   */
  public deleteAggregationAuthorization(
    args: DeleteAggregationAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAggregationAuthorizationCommandOutput>;
  public deleteAggregationAuthorization(
    args: DeleteAggregationAuthorizationCommandInput,
    cb: (err: any, data?: DeleteAggregationAuthorizationCommandOutput) => void
  ): void;
  public deleteAggregationAuthorization(
    args: DeleteAggregationAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAggregationAuthorizationCommandOutput) => void
  ): void;
  public deleteAggregationAuthorization(
    args: DeleteAggregationAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAggregationAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: DeleteAggregationAuthorizationCommandOutput) => void
  ): Promise<DeleteAggregationAuthorizationCommandOutput> | void {
    const command = new DeleteAggregationAuthorizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Config rule and all of its evaluation
   * 			results.</p>
   * 		       <p>Config sets the state of a rule to <code>DELETING</code>
   * 			until the deletion is complete. You cannot update a rule while it is
   * 			in this state. If you make a <code>PutConfigRule</code> or
   * 				<code>DeleteConfigRule</code> request for the rule, you will
   * 			receive a <code>ResourceInUseException</code>.</p>
   * 		       <p>You can check the state of a rule by using the
   * 				<code>DescribeConfigRules</code> request.</p>
   */
  public deleteConfigRule(
    args: DeleteConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigRuleCommandOutput>;
  public deleteConfigRule(
    args: DeleteConfigRuleCommandInput,
    cb: (err: any, data?: DeleteConfigRuleCommandOutput) => void
  ): void;
  public deleteConfigRule(
    args: DeleteConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigRuleCommandOutput) => void
  ): void;
  public deleteConfigRule(
    args: DeleteConfigRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfigRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigRuleCommandOutput) => void
  ): Promise<DeleteConfigRuleCommandOutput> | void {
    const command = new DeleteConfigRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified configuration aggregator and the
   * 			aggregated data associated with the aggregator.</p>
   */
  public deleteConfigurationAggregator(
    args: DeleteConfigurationAggregatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationAggregatorCommandOutput>;
  public deleteConfigurationAggregator(
    args: DeleteConfigurationAggregatorCommandInput,
    cb: (err: any, data?: DeleteConfigurationAggregatorCommandOutput) => void
  ): void;
  public deleteConfigurationAggregator(
    args: DeleteConfigurationAggregatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationAggregatorCommandOutput) => void
  ): void;
  public deleteConfigurationAggregator(
    args: DeleteConfigurationAggregatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfigurationAggregatorCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationAggregatorCommandOutput) => void
  ): Promise<DeleteConfigurationAggregatorCommandOutput> | void {
    const command = new DeleteConfigurationAggregatorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the configuration recorder.</p>
   * 		       <p>After the configuration recorder is deleted, Config will
   * 			not record resource configuration changes until you create a new
   * 			configuration recorder.</p>
   * 		       <p>This action does not delete the configuration information that
   * 			was previously recorded. You will be able to access the previously
   * 			recorded information by using the
   * 				<code>GetResourceConfigHistory</code> action, but you will not
   * 			be able to access this information in the Config console until
   * 			you create a new configuration recorder.</p>
   */
  public deleteConfigurationRecorder(
    args: DeleteConfigurationRecorderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationRecorderCommandOutput>;
  public deleteConfigurationRecorder(
    args: DeleteConfigurationRecorderCommandInput,
    cb: (err: any, data?: DeleteConfigurationRecorderCommandOutput) => void
  ): void;
  public deleteConfigurationRecorder(
    args: DeleteConfigurationRecorderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationRecorderCommandOutput) => void
  ): void;
  public deleteConfigurationRecorder(
    args: DeleteConfigurationRecorderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfigurationRecorderCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationRecorderCommandOutput) => void
  ): Promise<DeleteConfigurationRecorderCommandOutput> | void {
    const command = new DeleteConfigurationRecorderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified conformance pack and all the Config rules, remediation actions, and all evaluation results within that
   * 			conformance pack.</p>
   * 		       <p>Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete.
   * 			You cannot update a conformance pack while it is in this state.</p>
   */
  public deleteConformancePack(
    args: DeleteConformancePackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConformancePackCommandOutput>;
  public deleteConformancePack(
    args: DeleteConformancePackCommandInput,
    cb: (err: any, data?: DeleteConformancePackCommandOutput) => void
  ): void;
  public deleteConformancePack(
    args: DeleteConformancePackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConformancePackCommandOutput) => void
  ): void;
  public deleteConformancePack(
    args: DeleteConformancePackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConformancePackCommandOutput) => void),
    cb?: (err: any, data?: DeleteConformancePackCommandOutput) => void
  ): Promise<DeleteConformancePackCommandOutput> | void {
    const command = new DeleteConformancePackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the delivery channel.</p>
   * 		       <p>Before you can delete the delivery channel, you must stop the
   * 			configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>
   */
  public deleteDeliveryChannel(
    args: DeleteDeliveryChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeliveryChannelCommandOutput>;
  public deleteDeliveryChannel(
    args: DeleteDeliveryChannelCommandInput,
    cb: (err: any, data?: DeleteDeliveryChannelCommandOutput) => void
  ): void;
  public deleteDeliveryChannel(
    args: DeleteDeliveryChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeliveryChannelCommandOutput) => void
  ): void;
  public deleteDeliveryChannel(
    args: DeleteDeliveryChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeliveryChannelCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeliveryChannelCommandOutput) => void
  ): Promise<DeleteDeliveryChannelCommandOutput> | void {
    const command = new DeleteDeliveryChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the evaluation results for the specified Config
   * 			rule. You can specify one Config rule per request. After you
   * 			delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating
   * 			your Amazon Web Services resources against the rule.</p>
   */
  public deleteEvaluationResults(
    args: DeleteEvaluationResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEvaluationResultsCommandOutput>;
  public deleteEvaluationResults(
    args: DeleteEvaluationResultsCommandInput,
    cb: (err: any, data?: DeleteEvaluationResultsCommandOutput) => void
  ): void;
  public deleteEvaluationResults(
    args: DeleteEvaluationResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEvaluationResultsCommandOutput) => void
  ): void;
  public deleteEvaluationResults(
    args: DeleteEvaluationResultsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEvaluationResultsCommandOutput) => void),
    cb?: (err: any, data?: DeleteEvaluationResultsCommandOutput) => void
  ): Promise<DeleteEvaluationResultsCommandOutput> | void {
    const command = new DeleteEvaluationResultsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified organization Config rule and all of its evaluation results from all member accounts in that organization. </p>
   * 	        <p>Only a management account and a delegated administrator account can delete an organization Config rule.
   * 		When calling this API with a delegated administrator, you must ensure Organizations
   * 			<code>ListDelegatedAdministrator</code> permissions are added.</p>
   * 		       <p>Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete.
   * 			You cannot update a rule while it is in this state.</p>
   */
  public deleteOrganizationConfigRule(
    args: DeleteOrganizationConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOrganizationConfigRuleCommandOutput>;
  public deleteOrganizationConfigRule(
    args: DeleteOrganizationConfigRuleCommandInput,
    cb: (err: any, data?: DeleteOrganizationConfigRuleCommandOutput) => void
  ): void;
  public deleteOrganizationConfigRule(
    args: DeleteOrganizationConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrganizationConfigRuleCommandOutput) => void
  ): void;
  public deleteOrganizationConfigRule(
    args: DeleteOrganizationConfigRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOrganizationConfigRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteOrganizationConfigRuleCommandOutput) => void
  ): Promise<DeleteOrganizationConfigRuleCommandOutput> | void {
    const command = new DeleteOrganizationConfigRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified organization conformance pack and all of the Config rules and remediation actions from
   * 			all member accounts in that organization. </p>
   *          <p> Only a management account or a delegated administrator account can delete an organization conformance pack.
   * 	When calling this API with a delegated administrator, you must ensure Organizations
   * 		<code>ListDelegatedAdministrator</code> permissions are added.</p>
   * 			      <p>Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete.
   * 				You cannot update a conformance pack while it is in this state. </p>
   */
  public deleteOrganizationConformancePack(
    args: DeleteOrganizationConformancePackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOrganizationConformancePackCommandOutput>;
  public deleteOrganizationConformancePack(
    args: DeleteOrganizationConformancePackCommandInput,
    cb: (err: any, data?: DeleteOrganizationConformancePackCommandOutput) => void
  ): void;
  public deleteOrganizationConformancePack(
    args: DeleteOrganizationConformancePackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrganizationConformancePackCommandOutput) => void
  ): void;
  public deleteOrganizationConformancePack(
    args: DeleteOrganizationConformancePackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOrganizationConformancePackCommandOutput) => void),
    cb?: (err: any, data?: DeleteOrganizationConformancePackCommandOutput) => void
  ): Promise<DeleteOrganizationConformancePackCommandOutput> | void {
    const command = new DeleteOrganizationConformancePackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes pending authorization requests for a specified
   * 			aggregator account in a specified region.</p>
   */
  public deletePendingAggregationRequest(
    args: DeletePendingAggregationRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePendingAggregationRequestCommandOutput>;
  public deletePendingAggregationRequest(
    args: DeletePendingAggregationRequestCommandInput,
    cb: (err: any, data?: DeletePendingAggregationRequestCommandOutput) => void
  ): void;
  public deletePendingAggregationRequest(
    args: DeletePendingAggregationRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePendingAggregationRequestCommandOutput) => void
  ): void;
  public deletePendingAggregationRequest(
    args: DeletePendingAggregationRequestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePendingAggregationRequestCommandOutput) => void),
    cb?: (err: any, data?: DeletePendingAggregationRequestCommandOutput) => void
  ): Promise<DeletePendingAggregationRequestCommandOutput> | void {
    const command = new DeletePendingAggregationRequestCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the remediation configuration.</p>
   */
  public deleteRemediationConfiguration(
    args: DeleteRemediationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRemediationConfigurationCommandOutput>;
  public deleteRemediationConfiguration(
    args: DeleteRemediationConfigurationCommandInput,
    cb: (err: any, data?: DeleteRemediationConfigurationCommandOutput) => void
  ): void;
  public deleteRemediationConfiguration(
    args: DeleteRemediationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRemediationConfigurationCommandOutput) => void
  ): void;
  public deleteRemediationConfiguration(
    args: DeleteRemediationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRemediationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteRemediationConfigurationCommandOutput) => void
  ): Promise<DeleteRemediationConfigurationCommandOutput> | void {
    const command = new DeleteRemediationConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes one or more remediation exceptions mentioned in the resource keys.</p>
   * 		       <note>
   *             <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource.
   * 			Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
   *          </note>
   */
  public deleteRemediationExceptions(
    args: DeleteRemediationExceptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRemediationExceptionsCommandOutput>;
  public deleteRemediationExceptions(
    args: DeleteRemediationExceptionsCommandInput,
    cb: (err: any, data?: DeleteRemediationExceptionsCommandOutput) => void
  ): void;
  public deleteRemediationExceptions(
    args: DeleteRemediationExceptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRemediationExceptionsCommandOutput) => void
  ): void;
  public deleteRemediationExceptions(
    args: DeleteRemediationExceptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRemediationExceptionsCommandOutput) => void),
    cb?: (err: any, data?: DeleteRemediationExceptionsCommandOutput) => void
  ): Promise<DeleteRemediationExceptionsCommandOutput> | void {
    const command = new DeleteRemediationExceptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Records the configuration state for a custom resource that has been deleted.  This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your Config History.
   * 			 </p>
   */
  public deleteResourceConfig(
    args: DeleteResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceConfigCommandOutput>;
  public deleteResourceConfig(
    args: DeleteResourceConfigCommandInput,
    cb: (err: any, data?: DeleteResourceConfigCommandOutput) => void
  ): void;
  public deleteResourceConfig(
    args: DeleteResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceConfigCommandOutput) => void
  ): void;
  public deleteResourceConfig(
    args: DeleteResourceConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourceConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourceConfigCommandOutput) => void
  ): Promise<DeleteResourceConfigCommandOutput> | void {
    const command = new DeleteResourceConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the retention configuration.</p>
   */
  public deleteRetentionConfiguration(
    args: DeleteRetentionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRetentionConfigurationCommandOutput>;
  public deleteRetentionConfiguration(
    args: DeleteRetentionConfigurationCommandInput,
    cb: (err: any, data?: DeleteRetentionConfigurationCommandOutput) => void
  ): void;
  public deleteRetentionConfiguration(
    args: DeleteRetentionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRetentionConfigurationCommandOutput) => void
  ): void;
  public deleteRetentionConfiguration(
    args: DeleteRetentionConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRetentionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteRetentionConfigurationCommandOutput) => void
  ): Promise<DeleteRetentionConfigurationCommandOutput> | void {
    const command = new DeleteRetentionConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the stored query for a single Amazon Web Services account and a single Amazon Web Services Region.</p>
   */
  public deleteStoredQuery(
    args: DeleteStoredQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStoredQueryCommandOutput>;
  public deleteStoredQuery(
    args: DeleteStoredQueryCommandInput,
    cb: (err: any, data?: DeleteStoredQueryCommandOutput) => void
  ): void;
  public deleteStoredQuery(
    args: DeleteStoredQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStoredQueryCommandOutput) => void
  ): void;
  public deleteStoredQuery(
    args: DeleteStoredQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStoredQueryCommandOutput) => void),
    cb?: (err: any, data?: DeleteStoredQueryCommandOutput) => void
  ): Promise<DeleteStoredQueryCommandOutput> | void {
    const command = new DeleteStoredQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Schedules delivery of a configuration snapshot to the Amazon S3
   * 			bucket in the specified delivery channel. After the delivery has
   * 			started, Config sends the following notifications using an
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
  public deliverConfigSnapshot(
    args: DeliverConfigSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeliverConfigSnapshotCommandOutput>;
  public deliverConfigSnapshot(
    args: DeliverConfigSnapshotCommandInput,
    cb: (err: any, data?: DeliverConfigSnapshotCommandOutput) => void
  ): void;
  public deliverConfigSnapshot(
    args: DeliverConfigSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeliverConfigSnapshotCommandOutput) => void
  ): void;
  public deliverConfigSnapshot(
    args: DeliverConfigSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeliverConfigSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeliverConfigSnapshotCommandOutput) => void
  ): Promise<DeliverConfigSnapshotCommandOutput> | void {
    const command = new DeliverConfigSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of compliant and noncompliant rules with the
   * 			number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results.
   * 			</p>
   * 		       <note>
   * 			         <p>The results can return an empty result page, but if you
   * 				have a <code>nextToken</code>, the results are displayed on the next
   * 				page.</p>
   * 		       </note>
   */
  public describeAggregateComplianceByConfigRules(
    args: DescribeAggregateComplianceByConfigRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAggregateComplianceByConfigRulesCommandOutput>;
  public describeAggregateComplianceByConfigRules(
    args: DescribeAggregateComplianceByConfigRulesCommandInput,
    cb: (err: any, data?: DescribeAggregateComplianceByConfigRulesCommandOutput) => void
  ): void;
  public describeAggregateComplianceByConfigRules(
    args: DescribeAggregateComplianceByConfigRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAggregateComplianceByConfigRulesCommandOutput) => void
  ): void;
  public describeAggregateComplianceByConfigRules(
    args: DescribeAggregateComplianceByConfigRulesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAggregateComplianceByConfigRulesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAggregateComplianceByConfigRulesCommandOutput) => void
  ): Promise<DescribeAggregateComplianceByConfigRulesCommandOutput> | void {
    const command = new DescribeAggregateComplianceByConfigRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant Config rules within each
   * 			conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p>
   * 		       <note>
   *             <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p>
   *          </note>
   */
  public describeAggregateComplianceByConformancePacks(
    args: DescribeAggregateComplianceByConformancePacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAggregateComplianceByConformancePacksCommandOutput>;
  public describeAggregateComplianceByConformancePacks(
    args: DescribeAggregateComplianceByConformancePacksCommandInput,
    cb: (err: any, data?: DescribeAggregateComplianceByConformancePacksCommandOutput) => void
  ): void;
  public describeAggregateComplianceByConformancePacks(
    args: DescribeAggregateComplianceByConformancePacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAggregateComplianceByConformancePacksCommandOutput) => void
  ): void;
  public describeAggregateComplianceByConformancePacks(
    args: DescribeAggregateComplianceByConformancePacksCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAggregateComplianceByConformancePacksCommandOutput) => void),
    cb?: (err: any, data?: DescribeAggregateComplianceByConformancePacksCommandOutput) => void
  ): Promise<DescribeAggregateComplianceByConformancePacksCommandOutput> | void {
    const command = new DescribeAggregateComplianceByConformancePacksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of authorizations granted to various aggregator
   * 			accounts and regions.</p>
   */
  public describeAggregationAuthorizations(
    args: DescribeAggregationAuthorizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAggregationAuthorizationsCommandOutput>;
  public describeAggregationAuthorizations(
    args: DescribeAggregationAuthorizationsCommandInput,
    cb: (err: any, data?: DescribeAggregationAuthorizationsCommandOutput) => void
  ): void;
  public describeAggregationAuthorizations(
    args: DescribeAggregationAuthorizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAggregationAuthorizationsCommandOutput) => void
  ): void;
  public describeAggregationAuthorizations(
    args: DescribeAggregationAuthorizationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAggregationAuthorizationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAggregationAuthorizationsCommandOutput) => void
  ): Promise<DescribeAggregationAuthorizationsCommandOutput> | void {
    const command = new DescribeAggregationAuthorizationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Indicates whether the specified Config rules are compliant.
   * 			If a rule is noncompliant, this action returns the number of Amazon Web Services
   * 			resources that do not comply with the rule.</p>
   * 		       <p>A rule is compliant if all of the evaluated resources comply
   * 			with it. It is noncompliant if any of these resources do not
   * 			comply.</p>
   * 		       <p>If Config has no current evaluation results for the rule,
   * 			it returns <code>INSUFFICIENT_DATA</code>. This result might
   * 			indicate one of the following conditions:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Config has never invoked an evaluation for the
   * 					rule. To check whether it has, use the
   * 						<code>DescribeConfigRuleEvaluationStatus</code> action
   * 					to get the <code>LastSuccessfulInvocationTime</code> and
   * 						<code>LastFailedInvocationTime</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The rule's Lambda function is failing to send
   * 					evaluation results to Config. Verify that the role you
   * 					assigned to your configuration recorder includes the
   * 						<code>config:PutEvaluations</code> permission. If the
   * 					rule is a custom rule, verify that the Lambda execution
   * 					role includes the <code>config:PutEvaluations</code>
   * 					permission.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The rule's Lambda function has returned
   * 						<code>NOT_APPLICABLE</code> for all evaluation results.
   * 					This can occur if the resources were deleted or removed from
   * 					the rule's scope.</p>
   * 			         </li>
   *          </ul>
   */
  public describeComplianceByConfigRule(
    args: DescribeComplianceByConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComplianceByConfigRuleCommandOutput>;
  public describeComplianceByConfigRule(
    args: DescribeComplianceByConfigRuleCommandInput,
    cb: (err: any, data?: DescribeComplianceByConfigRuleCommandOutput) => void
  ): void;
  public describeComplianceByConfigRule(
    args: DescribeComplianceByConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComplianceByConfigRuleCommandOutput) => void
  ): void;
  public describeComplianceByConfigRule(
    args: DescribeComplianceByConfigRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeComplianceByConfigRuleCommandOutput) => void),
    cb?: (err: any, data?: DescribeComplianceByConfigRuleCommandOutput) => void
  ): Promise<DescribeComplianceByConfigRuleCommandOutput> | void {
    const command = new DescribeComplianceByConfigRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Indicates whether the specified Amazon Web Services resources are compliant. If
   * 			a resource is noncompliant, this action returns the number of Config rules that the resource does not comply with.</p>
   * 		       <p>A resource is compliant if it complies with all the Config
   * 			rules that evaluate it. It is noncompliant if it does not comply
   * 			with one or more of these rules.</p>
   * 		       <p>If Config has no current evaluation results for the
   * 			resource, it returns <code>INSUFFICIENT_DATA</code>. This result
   * 			might indicate one of the following conditions about the rules that
   * 			evaluate the resource:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Config has never invoked an evaluation for the
   * 					rule. To check whether it has, use the
   * 						<code>DescribeConfigRuleEvaluationStatus</code> action
   * 					to get the <code>LastSuccessfulInvocationTime</code> and
   * 						<code>LastFailedInvocationTime</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The rule's Lambda function is failing to send
   * 					evaluation results to Config. Verify that the role that
   * 					you assigned to your configuration recorder includes the
   * 						<code>config:PutEvaluations</code> permission. If the
   * 					rule is a custom rule, verify that the Lambda execution
   * 					role includes the <code>config:PutEvaluations</code>
   * 					permission.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The rule's Lambda function has returned
   * 						<code>NOT_APPLICABLE</code> for all evaluation results.
   * 					This can occur if the resources were deleted or removed from
   * 					the rule's scope.</p>
   * 			         </li>
   *          </ul>
   */
  public describeComplianceByResource(
    args: DescribeComplianceByResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComplianceByResourceCommandOutput>;
  public describeComplianceByResource(
    args: DescribeComplianceByResourceCommandInput,
    cb: (err: any, data?: DescribeComplianceByResourceCommandOutput) => void
  ): void;
  public describeComplianceByResource(
    args: DescribeComplianceByResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComplianceByResourceCommandOutput) => void
  ): void;
  public describeComplianceByResource(
    args: DescribeComplianceByResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeComplianceByResourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeComplianceByResourceCommandOutput) => void
  ): Promise<DescribeComplianceByResourceCommandOutput> | void {
    const command = new DescribeComplianceByResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke
   * 			the rule, and the related error for the last failure.</p>
   */
  public describeConfigRuleEvaluationStatus(
    args: DescribeConfigRuleEvaluationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigRuleEvaluationStatusCommandOutput>;
  public describeConfigRuleEvaluationStatus(
    args: DescribeConfigRuleEvaluationStatusCommandInput,
    cb: (err: any, data?: DescribeConfigRuleEvaluationStatusCommandOutput) => void
  ): void;
  public describeConfigRuleEvaluationStatus(
    args: DescribeConfigRuleEvaluationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigRuleEvaluationStatusCommandOutput) => void
  ): void;
  public describeConfigRuleEvaluationStatus(
    args: DescribeConfigRuleEvaluationStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConfigRuleEvaluationStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigRuleEvaluationStatusCommandOutput) => void
  ): Promise<DescribeConfigRuleEvaluationStatusCommandOutput> | void {
    const command = new DescribeConfigRuleEvaluationStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns details about your Config rules.</p>
   */
  public describeConfigRules(
    args: DescribeConfigRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigRulesCommandOutput>;
  public describeConfigRules(
    args: DescribeConfigRulesCommandInput,
    cb: (err: any, data?: DescribeConfigRulesCommandOutput) => void
  ): void;
  public describeConfigRules(
    args: DescribeConfigRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigRulesCommandOutput) => void
  ): void;
  public describeConfigRules(
    args: DescribeConfigRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConfigRulesCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigRulesCommandOutput) => void
  ): Promise<DescribeConfigRulesCommandOutput> | void {
    const command = new DescribeConfigRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the details of one or more configuration aggregators.
   * 			If the configuration aggregator is not specified, this action
   * 			returns the details for all the configuration aggregators associated
   * 			with the account. </p>
   */
  public describeConfigurationAggregators(
    args: DescribeConfigurationAggregatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationAggregatorsCommandOutput>;
  public describeConfigurationAggregators(
    args: DescribeConfigurationAggregatorsCommandInput,
    cb: (err: any, data?: DescribeConfigurationAggregatorsCommandOutput) => void
  ): void;
  public describeConfigurationAggregators(
    args: DescribeConfigurationAggregatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationAggregatorsCommandOutput) => void
  ): void;
  public describeConfigurationAggregators(
    args: DescribeConfigurationAggregatorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConfigurationAggregatorsCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationAggregatorsCommandOutput) => void
  ): Promise<DescribeConfigurationAggregatorsCommandOutput> | void {
    const command = new DescribeConfigurationAggregatorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns status information for sources within an aggregator.
   * 			The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. </p>
   */
  public describeConfigurationAggregatorSourcesStatus(
    args: DescribeConfigurationAggregatorSourcesStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationAggregatorSourcesStatusCommandOutput>;
  public describeConfigurationAggregatorSourcesStatus(
    args: DescribeConfigurationAggregatorSourcesStatusCommandInput,
    cb: (err: any, data?: DescribeConfigurationAggregatorSourcesStatusCommandOutput) => void
  ): void;
  public describeConfigurationAggregatorSourcesStatus(
    args: DescribeConfigurationAggregatorSourcesStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationAggregatorSourcesStatusCommandOutput) => void
  ): void;
  public describeConfigurationAggregatorSourcesStatus(
    args: DescribeConfigurationAggregatorSourcesStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeConfigurationAggregatorSourcesStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationAggregatorSourcesStatusCommandOutput) => void
  ): Promise<DescribeConfigurationAggregatorSourcesStatusCommandOutput> | void {
    const command = new DescribeConfigurationAggregatorSourcesStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public describeConfigurationRecorders(
    args: DescribeConfigurationRecordersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationRecordersCommandOutput>;
  public describeConfigurationRecorders(
    args: DescribeConfigurationRecordersCommandInput,
    cb: (err: any, data?: DescribeConfigurationRecordersCommandOutput) => void
  ): void;
  public describeConfigurationRecorders(
    args: DescribeConfigurationRecordersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationRecordersCommandOutput) => void
  ): void;
  public describeConfigurationRecorders(
    args: DescribeConfigurationRecordersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConfigurationRecordersCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationRecordersCommandOutput) => void
  ): Promise<DescribeConfigurationRecordersCommandOutput> | void {
    const command = new DescribeConfigurationRecordersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public describeConfigurationRecorderStatus(
    args: DescribeConfigurationRecorderStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationRecorderStatusCommandOutput>;
  public describeConfigurationRecorderStatus(
    args: DescribeConfigurationRecorderStatusCommandInput,
    cb: (err: any, data?: DescribeConfigurationRecorderStatusCommandOutput) => void
  ): void;
  public describeConfigurationRecorderStatus(
    args: DescribeConfigurationRecorderStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationRecorderStatusCommandOutput) => void
  ): void;
  public describeConfigurationRecorderStatus(
    args: DescribeConfigurationRecorderStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConfigurationRecorderStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationRecorderStatusCommandOutput) => void
  ): Promise<DescribeConfigurationRecorderStatusCommandOutput> | void {
    const command = new DescribeConfigurationRecorderStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns compliance details for each rule in that conformance pack.</p>
   * 		       <note>
   *             <p>You must provide exact rule names.</p>
   *          </note>
   */
  public describeConformancePackCompliance(
    args: DescribeConformancePackComplianceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConformancePackComplianceCommandOutput>;
  public describeConformancePackCompliance(
    args: DescribeConformancePackComplianceCommandInput,
    cb: (err: any, data?: DescribeConformancePackComplianceCommandOutput) => void
  ): void;
  public describeConformancePackCompliance(
    args: DescribeConformancePackComplianceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConformancePackComplianceCommandOutput) => void
  ): void;
  public describeConformancePackCompliance(
    args: DescribeConformancePackComplianceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConformancePackComplianceCommandOutput) => void),
    cb?: (err: any, data?: DescribeConformancePackComplianceCommandOutput) => void
  ): Promise<DescribeConformancePackComplianceCommandOutput> | void {
    const command = new DescribeConformancePackComplianceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of one or more conformance packs.</p>
   */
  public describeConformancePacks(
    args: DescribeConformancePacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConformancePacksCommandOutput>;
  public describeConformancePacks(
    args: DescribeConformancePacksCommandInput,
    cb: (err: any, data?: DescribeConformancePacksCommandOutput) => void
  ): void;
  public describeConformancePacks(
    args: DescribeConformancePacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConformancePacksCommandOutput) => void
  ): void;
  public describeConformancePacks(
    args: DescribeConformancePacksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConformancePacksCommandOutput) => void),
    cb?: (err: any, data?: DescribeConformancePacksCommandOutput) => void
  ): Promise<DescribeConformancePacksCommandOutput> | void {
    const command = new DescribeConformancePacksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides one or more conformance packs deployment status.</p>
   * 		       <note>
   *             <p>If there are no conformance packs then you will see an empty result.</p>
   *          </note>
   */
  public describeConformancePackStatus(
    args: DescribeConformancePackStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConformancePackStatusCommandOutput>;
  public describeConformancePackStatus(
    args: DescribeConformancePackStatusCommandInput,
    cb: (err: any, data?: DescribeConformancePackStatusCommandOutput) => void
  ): void;
  public describeConformancePackStatus(
    args: DescribeConformancePackStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConformancePackStatusCommandOutput) => void
  ): void;
  public describeConformancePackStatus(
    args: DescribeConformancePackStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConformancePackStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeConformancePackStatusCommandOutput) => void
  ): Promise<DescribeConformancePackStatusCommandOutput> | void {
    const command = new DescribeConformancePackStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns details about the specified delivery channel. If a
   * 			delivery channel is not specified, this action returns the details
   * 			of all delivery channels associated with the account.</p>
   * 		       <note>
   * 			         <p>Currently, you can specify only one delivery channel per
   * 				region in your account.</p>
   * 		       </note>
   */
  public describeDeliveryChannels(
    args: DescribeDeliveryChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeliveryChannelsCommandOutput>;
  public describeDeliveryChannels(
    args: DescribeDeliveryChannelsCommandInput,
    cb: (err: any, data?: DescribeDeliveryChannelsCommandOutput) => void
  ): void;
  public describeDeliveryChannels(
    args: DescribeDeliveryChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeliveryChannelsCommandOutput) => void
  ): void;
  public describeDeliveryChannels(
    args: DescribeDeliveryChannelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDeliveryChannelsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDeliveryChannelsCommandOutput) => void
  ): Promise<DescribeDeliveryChannelsCommandOutput> | void {
    const command = new DescribeDeliveryChannelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public describeDeliveryChannelStatus(
    args: DescribeDeliveryChannelStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeliveryChannelStatusCommandOutput>;
  public describeDeliveryChannelStatus(
    args: DescribeDeliveryChannelStatusCommandInput,
    cb: (err: any, data?: DescribeDeliveryChannelStatusCommandOutput) => void
  ): void;
  public describeDeliveryChannelStatus(
    args: DescribeDeliveryChannelStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeliveryChannelStatusCommandOutput) => void
  ): void;
  public describeDeliveryChannelStatus(
    args: DescribeDeliveryChannelStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDeliveryChannelStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeDeliveryChannelStatusCommandOutput) => void
  ): Promise<DescribeDeliveryChannelStatusCommandOutput> | void {
    const command = new DescribeDeliveryChannelStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of organization Config rules. </p>
   *
   * 		       <note>
   *             <p>When you specify the limit and the next token, you receive a paginated response.</p>
   * 			         <p>Limit and next token are not applicable if you specify organization Config rule names.
   * 			It is only applicable, when you request all the organization Config rules.</p>
   *
   * 			         <p>
   *                <i>For accounts within an organzation</i>
   *             </p>
   *
   * 			         <p>If you deploy an organizational rule or conformance pack in an organization
   * 				administrator account, and then establish a delegated administrator and deploy an
   * 				organizational rule or conformance pack in the delegated administrator account, you
   * 				won't be able to see the organizational rule or conformance pack in the organization
   * 				administrator account from the delegated administrator account or see the organizational
   * 				rule or conformance pack in the delegated administrator account from organization
   * 				administrator account. The <code>DescribeOrganizationConfigRules</code> and
   * 				<code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with
   * 				the organization-related resource that were deployed from within the account calling
   * 				those APIs.</p>
   * 		       </note>
   */
  public describeOrganizationConfigRules(
    args: DescribeOrganizationConfigRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConfigRulesCommandOutput>;
  public describeOrganizationConfigRules(
    args: DescribeOrganizationConfigRulesCommandInput,
    cb: (err: any, data?: DescribeOrganizationConfigRulesCommandOutput) => void
  ): void;
  public describeOrganizationConfigRules(
    args: DescribeOrganizationConfigRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConfigRulesCommandOutput) => void
  ): void;
  public describeOrganizationConfigRules(
    args: DescribeOrganizationConfigRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrganizationConfigRulesCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationConfigRulesCommandOutput) => void
  ): Promise<DescribeOrganizationConfigRulesCommandOutput> | void {
    const command = new DescribeOrganizationConfigRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides organization Config rule deployment status for an organization.</p>
   *
   * 		       <note>
   *             <p>The status is not considered successful until organization Config rule is successfully deployed in all the member
   * 			accounts with an exception of excluded accounts.</p>
   * 			         <p>When you specify the limit and the next token, you receive a paginated response.
   * 			Limit and next token are not applicable if you specify organization Config rule names.
   * 			It is only applicable, when you request all the organization Config rules.</p>
   * 			      </note>
   */
  public describeOrganizationConfigRuleStatuses(
    args: DescribeOrganizationConfigRuleStatusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConfigRuleStatusesCommandOutput>;
  public describeOrganizationConfigRuleStatuses(
    args: DescribeOrganizationConfigRuleStatusesCommandInput,
    cb: (err: any, data?: DescribeOrganizationConfigRuleStatusesCommandOutput) => void
  ): void;
  public describeOrganizationConfigRuleStatuses(
    args: DescribeOrganizationConfigRuleStatusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConfigRuleStatusesCommandOutput) => void
  ): void;
  public describeOrganizationConfigRuleStatuses(
    args: DescribeOrganizationConfigRuleStatusesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeOrganizationConfigRuleStatusesCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationConfigRuleStatusesCommandOutput) => void
  ): Promise<DescribeOrganizationConfigRuleStatusesCommandOutput> | void {
    const command = new DescribeOrganizationConfigRuleStatusesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of organization conformance packs. </p>
   * 		       <note>
   *             <p>When you specify the limit and the next token, you receive a paginated response. </p>
   * 			         <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable,
   * 			when you request all the organization conformance packs. </p>
   *
   * 			         <p>
   *                <i>For accounts within an organzation</i>
   *             </p>
   *
   * 			         <p>If you deploy an organizational rule or conformance pack in an organization
   * 				administrator account, and then establish a delegated administrator and deploy an
   * 				organizational rule or conformance pack in the delegated administrator account, you
   * 				won't be able to see the organizational rule or conformance pack in the organization
   * 				administrator account from the delegated administrator account or see the organizational
   * 				rule or conformance pack in the delegated administrator account from organization
   * 				administrator account. The <code>DescribeOrganizationConfigRules</code> and
   * 				<code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with
   * 				the organization-related resource that were deployed from within the account calling
   * 				those APIs.</p>
   * 		       </note>
   */
  public describeOrganizationConformancePacks(
    args: DescribeOrganizationConformancePacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConformancePacksCommandOutput>;
  public describeOrganizationConformancePacks(
    args: DescribeOrganizationConformancePacksCommandInput,
    cb: (err: any, data?: DescribeOrganizationConformancePacksCommandOutput) => void
  ): void;
  public describeOrganizationConformancePacks(
    args: DescribeOrganizationConformancePacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConformancePacksCommandOutput) => void
  ): void;
  public describeOrganizationConformancePacks(
    args: DescribeOrganizationConformancePacksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrganizationConformancePacksCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationConformancePacksCommandOutput) => void
  ): Promise<DescribeOrganizationConformancePacksCommandOutput> | void {
    const command = new DescribeOrganizationConformancePacksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides organization conformance pack deployment status for an organization. </p>
   * 		       <note>
   * 			         <p>The status is not considered successful until organization conformance pack is successfully
   * 				deployed in all the member accounts with an exception of excluded accounts.</p>
   * 			         <p>When you specify the limit and the next token, you receive a paginated response.
   * 				Limit and next token are not applicable if you specify organization conformance pack names.
   * 				They are only applicable, when you request all the organization conformance packs.</p>
   *          </note>
   */
  public describeOrganizationConformancePackStatuses(
    args: DescribeOrganizationConformancePackStatusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConformancePackStatusesCommandOutput>;
  public describeOrganizationConformancePackStatuses(
    args: DescribeOrganizationConformancePackStatusesCommandInput,
    cb: (err: any, data?: DescribeOrganizationConformancePackStatusesCommandOutput) => void
  ): void;
  public describeOrganizationConformancePackStatuses(
    args: DescribeOrganizationConformancePackStatusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConformancePackStatusesCommandOutput) => void
  ): void;
  public describeOrganizationConformancePackStatuses(
    args: DescribeOrganizationConformancePackStatusesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeOrganizationConformancePackStatusesCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationConformancePackStatusesCommandOutput) => void
  ): Promise<DescribeOrganizationConformancePackStatusesCommandOutput> | void {
    const command = new DescribeOrganizationConformancePackStatusesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of all pending aggregation requests.</p>
   */
  public describePendingAggregationRequests(
    args: DescribePendingAggregationRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePendingAggregationRequestsCommandOutput>;
  public describePendingAggregationRequests(
    args: DescribePendingAggregationRequestsCommandInput,
    cb: (err: any, data?: DescribePendingAggregationRequestsCommandOutput) => void
  ): void;
  public describePendingAggregationRequests(
    args: DescribePendingAggregationRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePendingAggregationRequestsCommandOutput) => void
  ): void;
  public describePendingAggregationRequests(
    args: DescribePendingAggregationRequestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePendingAggregationRequestsCommandOutput) => void),
    cb?: (err: any, data?: DescribePendingAggregationRequestsCommandOutput) => void
  ): Promise<DescribePendingAggregationRequestsCommandOutput> | void {
    const command = new DescribePendingAggregationRequestsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the details of one or more remediation configurations.</p>
   */
  public describeRemediationConfigurations(
    args: DescribeRemediationConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRemediationConfigurationsCommandOutput>;
  public describeRemediationConfigurations(
    args: DescribeRemediationConfigurationsCommandInput,
    cb: (err: any, data?: DescribeRemediationConfigurationsCommandOutput) => void
  ): void;
  public describeRemediationConfigurations(
    args: DescribeRemediationConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRemediationConfigurationsCommandOutput) => void
  ): void;
  public describeRemediationConfigurations(
    args: DescribeRemediationConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRemediationConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeRemediationConfigurationsCommandOutput) => void
  ): Promise<DescribeRemediationConfigurationsCommandOutput> | void {
    const command = new DescribeRemediationConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted.
   * 			When you specify the limit and the next token, you receive a paginated response. </p>
   * 		       <note>
   *             <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource.
   * 				Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
   * 			         <p>When you specify the limit and the next token, you receive a paginated response. </p>
   * 			         <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p>
   *          </note>
   */
  public describeRemediationExceptions(
    args: DescribeRemediationExceptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRemediationExceptionsCommandOutput>;
  public describeRemediationExceptions(
    args: DescribeRemediationExceptionsCommandInput,
    cb: (err: any, data?: DescribeRemediationExceptionsCommandOutput) => void
  ): void;
  public describeRemediationExceptions(
    args: DescribeRemediationExceptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRemediationExceptionsCommandOutput) => void
  ): void;
  public describeRemediationExceptions(
    args: DescribeRemediationExceptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRemediationExceptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeRemediationExceptionsCommandOutput) => void
  ): Promise<DescribeRemediationExceptionsCommandOutput> | void {
    const command = new DescribeRemediationExceptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed.
   * 			When you specify the limit and the next token, you receive a paginated response.</p>
   */
  public describeRemediationExecutionStatus(
    args: DescribeRemediationExecutionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRemediationExecutionStatusCommandOutput>;
  public describeRemediationExecutionStatus(
    args: DescribeRemediationExecutionStatusCommandInput,
    cb: (err: any, data?: DescribeRemediationExecutionStatusCommandOutput) => void
  ): void;
  public describeRemediationExecutionStatus(
    args: DescribeRemediationExecutionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRemediationExecutionStatusCommandOutput) => void
  ): void;
  public describeRemediationExecutionStatus(
    args: DescribeRemediationExecutionStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRemediationExecutionStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeRemediationExecutionStatusCommandOutput) => void
  ): Promise<DescribeRemediationExecutionStatusCommandOutput> | void {
    const command = new DescribeRemediationExecutionStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the details of one or more retention configurations. If
   * 			the retention configuration name is not specified, this action
   * 			returns the details for all the retention configurations for that
   * 			account.</p>
   * 		       <note>
   * 			         <p>Currently, Config supports only one retention
   * 				configuration per region in your account.</p>
   * 		       </note>
   */
  public describeRetentionConfigurations(
    args: DescribeRetentionConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRetentionConfigurationsCommandOutput>;
  public describeRetentionConfigurations(
    args: DescribeRetentionConfigurationsCommandInput,
    cb: (err: any, data?: DescribeRetentionConfigurationsCommandOutput) => void
  ): void;
  public describeRetentionConfigurations(
    args: DescribeRetentionConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRetentionConfigurationsCommandOutput) => void
  ): void;
  public describeRetentionConfigurations(
    args: DescribeRetentionConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRetentionConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeRetentionConfigurationsCommandOutput) => void
  ): Promise<DescribeRetentionConfigurationsCommandOutput> | void {
    const command = new DescribeRetentionConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the evaluation results for the specified Config
   * 			rule for a specific resource in a rule. The results indicate which
   * 			Amazon Web Services resources were evaluated by the rule, when each resource was
   * 			last evaluated, and whether each resource complies with the rule. </p>
   * 		       <note>
   * 			         <p>The results can return an empty result page. But if you
   * 				have a <code>nextToken</code>, the results are displayed on the next
   * 				page.</p>
   * 		       </note>
   */
  public getAggregateComplianceDetailsByConfigRule(
    args: GetAggregateComplianceDetailsByConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAggregateComplianceDetailsByConfigRuleCommandOutput>;
  public getAggregateComplianceDetailsByConfigRule(
    args: GetAggregateComplianceDetailsByConfigRuleCommandInput,
    cb: (err: any, data?: GetAggregateComplianceDetailsByConfigRuleCommandOutput) => void
  ): void;
  public getAggregateComplianceDetailsByConfigRule(
    args: GetAggregateComplianceDetailsByConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAggregateComplianceDetailsByConfigRuleCommandOutput) => void
  ): void;
  public getAggregateComplianceDetailsByConfigRule(
    args: GetAggregateComplianceDetailsByConfigRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAggregateComplianceDetailsByConfigRuleCommandOutput) => void),
    cb?: (err: any, data?: GetAggregateComplianceDetailsByConfigRuleCommandOutput) => void
  ): Promise<GetAggregateComplianceDetailsByConfigRuleCommandOutput> | void {
    const command = new GetAggregateComplianceDetailsByConfigRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the number of compliant and noncompliant rules for one
   * 			or more accounts and regions in an aggregator.</p>
   * 		       <note>
   * 			         <p>The results can return an empty result page, but if you
   * 				have a nextToken, the results are displayed on the next
   * 				page.</p>
   * 		       </note>
   */
  public getAggregateConfigRuleComplianceSummary(
    args: GetAggregateConfigRuleComplianceSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAggregateConfigRuleComplianceSummaryCommandOutput>;
  public getAggregateConfigRuleComplianceSummary(
    args: GetAggregateConfigRuleComplianceSummaryCommandInput,
    cb: (err: any, data?: GetAggregateConfigRuleComplianceSummaryCommandOutput) => void
  ): void;
  public getAggregateConfigRuleComplianceSummary(
    args: GetAggregateConfigRuleComplianceSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAggregateConfigRuleComplianceSummaryCommandOutput) => void
  ): void;
  public getAggregateConfigRuleComplianceSummary(
    args: GetAggregateConfigRuleComplianceSummaryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAggregateConfigRuleComplianceSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetAggregateConfigRuleComplianceSummaryCommandOutput) => void
  ): Promise<GetAggregateConfigRuleComplianceSummaryCommandOutput> | void {
    const command = new GetAggregateConfigRuleComplianceSummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region.</p>
   * 		       <note>
   *             <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p>
   *          </note>
   */
  public getAggregateConformancePackComplianceSummary(
    args: GetAggregateConformancePackComplianceSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAggregateConformancePackComplianceSummaryCommandOutput>;
  public getAggregateConformancePackComplianceSummary(
    args: GetAggregateConformancePackComplianceSummaryCommandInput,
    cb: (err: any, data?: GetAggregateConformancePackComplianceSummaryCommandOutput) => void
  ): void;
  public getAggregateConformancePackComplianceSummary(
    args: GetAggregateConformancePackComplianceSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAggregateConformancePackComplianceSummaryCommandOutput) => void
  ): void;
  public getAggregateConformancePackComplianceSummary(
    args: GetAggregateConformancePackComplianceSummaryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAggregateConformancePackComplianceSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetAggregateConformancePackComplianceSummaryCommandOutput) => void
  ): Promise<GetAggregateConformancePackComplianceSummaryCommandOutput> | void {
    const command = new GetAggregateConformancePackComplianceSummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the resource counts across accounts and regions that are present in your Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p>
   * 		       <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1.
   * 			If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>
   */
  public getAggregateDiscoveredResourceCounts(
    args: GetAggregateDiscoveredResourceCountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAggregateDiscoveredResourceCountsCommandOutput>;
  public getAggregateDiscoveredResourceCounts(
    args: GetAggregateDiscoveredResourceCountsCommandInput,
    cb: (err: any, data?: GetAggregateDiscoveredResourceCountsCommandOutput) => void
  ): void;
  public getAggregateDiscoveredResourceCounts(
    args: GetAggregateDiscoveredResourceCountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAggregateDiscoveredResourceCountsCommandOutput) => void
  ): void;
  public getAggregateDiscoveredResourceCounts(
    args: GetAggregateDiscoveredResourceCountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAggregateDiscoveredResourceCountsCommandOutput) => void),
    cb?: (err: any, data?: GetAggregateDiscoveredResourceCountsCommandOutput) => void
  ): Promise<GetAggregateDiscoveredResourceCountsCommandOutput> | void {
    const command = new GetAggregateDiscoveredResourceCountsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns configuration item that is aggregated for your specific resource in a specific source account and region.</p>
   */
  public getAggregateResourceConfig(
    args: GetAggregateResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAggregateResourceConfigCommandOutput>;
  public getAggregateResourceConfig(
    args: GetAggregateResourceConfigCommandInput,
    cb: (err: any, data?: GetAggregateResourceConfigCommandOutput) => void
  ): void;
  public getAggregateResourceConfig(
    args: GetAggregateResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAggregateResourceConfigCommandOutput) => void
  ): void;
  public getAggregateResourceConfig(
    args: GetAggregateResourceConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAggregateResourceConfigCommandOutput) => void),
    cb?: (err: any, data?: GetAggregateResourceConfigCommandOutput) => void
  ): Promise<GetAggregateResourceConfigCommandOutput> | void {
    const command = new GetAggregateResourceConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the evaluation results for the specified Config
   * 			rule. The results indicate which Amazon Web Services resources were evaluated by the
   * 			rule, when each resource was last evaluated, and whether each
   * 			resource complies with the rule.</p>
   */
  public getComplianceDetailsByConfigRule(
    args: GetComplianceDetailsByConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceDetailsByConfigRuleCommandOutput>;
  public getComplianceDetailsByConfigRule(
    args: GetComplianceDetailsByConfigRuleCommandInput,
    cb: (err: any, data?: GetComplianceDetailsByConfigRuleCommandOutput) => void
  ): void;
  public getComplianceDetailsByConfigRule(
    args: GetComplianceDetailsByConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceDetailsByConfigRuleCommandOutput) => void
  ): void;
  public getComplianceDetailsByConfigRule(
    args: GetComplianceDetailsByConfigRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComplianceDetailsByConfigRuleCommandOutput) => void),
    cb?: (err: any, data?: GetComplianceDetailsByConfigRuleCommandOutput) => void
  ): Promise<GetComplianceDetailsByConfigRuleCommandOutput> | void {
    const command = new GetComplianceDetailsByConfigRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the evaluation results for the specified Amazon Web Services resource.
   * 			The results indicate which Config rules were used to evaluate
   * 			the resource, when each rule was last invoked, and whether the resource
   * 			complies with each rule.</p>
   */
  public getComplianceDetailsByResource(
    args: GetComplianceDetailsByResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceDetailsByResourceCommandOutput>;
  public getComplianceDetailsByResource(
    args: GetComplianceDetailsByResourceCommandInput,
    cb: (err: any, data?: GetComplianceDetailsByResourceCommandOutput) => void
  ): void;
  public getComplianceDetailsByResource(
    args: GetComplianceDetailsByResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceDetailsByResourceCommandOutput) => void
  ): void;
  public getComplianceDetailsByResource(
    args: GetComplianceDetailsByResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComplianceDetailsByResourceCommandOutput) => void),
    cb?: (err: any, data?: GetComplianceDetailsByResourceCommandOutput) => void
  ): Promise<GetComplianceDetailsByResourceCommandOutput> | void {
    const command = new GetComplianceDetailsByResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the number of Config rules that are compliant and
   * 			noncompliant, up to a maximum of 25 for each.</p>
   */
  public getComplianceSummaryByConfigRule(
    args: GetComplianceSummaryByConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceSummaryByConfigRuleCommandOutput>;
  public getComplianceSummaryByConfigRule(
    args: GetComplianceSummaryByConfigRuleCommandInput,
    cb: (err: any, data?: GetComplianceSummaryByConfigRuleCommandOutput) => void
  ): void;
  public getComplianceSummaryByConfigRule(
    args: GetComplianceSummaryByConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceSummaryByConfigRuleCommandOutput) => void
  ): void;
  public getComplianceSummaryByConfigRule(
    args: GetComplianceSummaryByConfigRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComplianceSummaryByConfigRuleCommandOutput) => void),
    cb?: (err: any, data?: GetComplianceSummaryByConfigRuleCommandOutput) => void
  ): Promise<GetComplianceSummaryByConfigRuleCommandOutput> | void {
    const command = new GetComplianceSummaryByConfigRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the number of resources that are compliant and the
   * 			number that are noncompliant. You can specify one or more resource
   * 			types to get these numbers for each resource type. The maximum
   * 			number returned is 100.</p>
   */
  public getComplianceSummaryByResourceType(
    args: GetComplianceSummaryByResourceTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceSummaryByResourceTypeCommandOutput>;
  public getComplianceSummaryByResourceType(
    args: GetComplianceSummaryByResourceTypeCommandInput,
    cb: (err: any, data?: GetComplianceSummaryByResourceTypeCommandOutput) => void
  ): void;
  public getComplianceSummaryByResourceType(
    args: GetComplianceSummaryByResourceTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceSummaryByResourceTypeCommandOutput) => void
  ): void;
  public getComplianceSummaryByResourceType(
    args: GetComplianceSummaryByResourceTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComplianceSummaryByResourceTypeCommandOutput) => void),
    cb?: (err: any, data?: GetComplianceSummaryByResourceTypeCommandOutput) => void
  ): Promise<GetComplianceSummaryByResourceTypeCommandOutput> | void {
    const command = new GetComplianceSummaryByResourceTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.</p>
   */
  public getConformancePackComplianceDetails(
    args: GetConformancePackComplianceDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConformancePackComplianceDetailsCommandOutput>;
  public getConformancePackComplianceDetails(
    args: GetConformancePackComplianceDetailsCommandInput,
    cb: (err: any, data?: GetConformancePackComplianceDetailsCommandOutput) => void
  ): void;
  public getConformancePackComplianceDetails(
    args: GetConformancePackComplianceDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConformancePackComplianceDetailsCommandOutput) => void
  ): void;
  public getConformancePackComplianceDetails(
    args: GetConformancePackComplianceDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConformancePackComplianceDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetConformancePackComplianceDetailsCommandOutput) => void
  ): Promise<GetConformancePackComplianceDetailsCommandOutput> | void {
    const command = new GetConformancePackComplianceDetailsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.</p>
   */
  public getConformancePackComplianceSummary(
    args: GetConformancePackComplianceSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConformancePackComplianceSummaryCommandOutput>;
  public getConformancePackComplianceSummary(
    args: GetConformancePackComplianceSummaryCommandInput,
    cb: (err: any, data?: GetConformancePackComplianceSummaryCommandOutput) => void
  ): void;
  public getConformancePackComplianceSummary(
    args: GetConformancePackComplianceSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConformancePackComplianceSummaryCommandOutput) => void
  ): void;
  public getConformancePackComplianceSummary(
    args: GetConformancePackComplianceSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConformancePackComplianceSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetConformancePackComplianceSummaryCommandOutput) => void
  ): Promise<GetConformancePackComplianceSummaryCommandOutput> | void {
    const command = new GetConformancePackComplianceSummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the policy definition containing the logic for your Config Custom Policy rule.</p>
   */
  public getCustomRulePolicy(
    args: GetCustomRulePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomRulePolicyCommandOutput>;
  public getCustomRulePolicy(
    args: GetCustomRulePolicyCommandInput,
    cb: (err: any, data?: GetCustomRulePolicyCommandOutput) => void
  ): void;
  public getCustomRulePolicy(
    args: GetCustomRulePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomRulePolicyCommandOutput) => void
  ): void;
  public getCustomRulePolicy(
    args: GetCustomRulePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCustomRulePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetCustomRulePolicyCommandOutput) => void
  ): Promise<GetCustomRulePolicyCommandOutput> | void {
    const command = new GetCustomRulePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the resource types, the number of each resource type,
   * 			and the total number of resources that Config is recording in
   * 			this region for your Amazon Web Services account. </p>
   * 		       <p class="title">
   *             <b>Example</b>
   *          </p>
   *          <ol>
   *             <li>
   * 				           <p>Config is recording three resource types in the US
   * 					East (Ohio) Region for your account: 25 EC2 instances, 20
   * 					IAM users, and 15 S3 buckets.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You make a call to the
   * 						<code>GetDiscoveredResourceCounts</code> action and
   * 					specify that you want all resource types. </p>
   * 			         </li>
   *             <li>
   * 				           <p>Config returns the following:</p>
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
   * 		       <p>The response is paginated. By default, Config lists 100
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
   * 					             <p>You are a new Config customer.</p>
   * 				           </li>
   *                <li>
   * 					             <p>You just enabled resource recording.</p>
   * 				           </li>
   *             </ul>
   *
   * 			         <p>It might take a few minutes for Config to record and
   * 				count your resources. Wait a few minutes and then retry the
   * 					<a>GetDiscoveredResourceCounts</a> action.
   * 			</p>
   * 		       </note>
   */
  public getDiscoveredResourceCounts(
    args: GetDiscoveredResourceCountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDiscoveredResourceCountsCommandOutput>;
  public getDiscoveredResourceCounts(
    args: GetDiscoveredResourceCountsCommandInput,
    cb: (err: any, data?: GetDiscoveredResourceCountsCommandOutput) => void
  ): void;
  public getDiscoveredResourceCounts(
    args: GetDiscoveredResourceCountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDiscoveredResourceCountsCommandOutput) => void
  ): void;
  public getDiscoveredResourceCounts(
    args: GetDiscoveredResourceCountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDiscoveredResourceCountsCommandOutput) => void),
    cb?: (err: any, data?: GetDiscoveredResourceCountsCommandOutput) => void
  ): Promise<GetDiscoveredResourceCountsCommandOutput> | void {
    const command = new GetDiscoveredResourceCountsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns detailed status for each member account within an organization for a given organization Config rule.</p>
   */
  public getOrganizationConfigRuleDetailedStatus(
    args: GetOrganizationConfigRuleDetailedStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationConfigRuleDetailedStatusCommandOutput>;
  public getOrganizationConfigRuleDetailedStatus(
    args: GetOrganizationConfigRuleDetailedStatusCommandInput,
    cb: (err: any, data?: GetOrganizationConfigRuleDetailedStatusCommandOutput) => void
  ): void;
  public getOrganizationConfigRuleDetailedStatus(
    args: GetOrganizationConfigRuleDetailedStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationConfigRuleDetailedStatusCommandOutput) => void
  ): void;
  public getOrganizationConfigRuleDetailedStatus(
    args: GetOrganizationConfigRuleDetailedStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetOrganizationConfigRuleDetailedStatusCommandOutput) => void),
    cb?: (err: any, data?: GetOrganizationConfigRuleDetailedStatusCommandOutput) => void
  ): Promise<GetOrganizationConfigRuleDetailedStatusCommandOutput> | void {
    const command = new GetOrganizationConfigRuleDetailedStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns detailed status for each member account within an organization for a given organization conformance pack.</p>
   */
  public getOrganizationConformancePackDetailedStatus(
    args: GetOrganizationConformancePackDetailedStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationConformancePackDetailedStatusCommandOutput>;
  public getOrganizationConformancePackDetailedStatus(
    args: GetOrganizationConformancePackDetailedStatusCommandInput,
    cb: (err: any, data?: GetOrganizationConformancePackDetailedStatusCommandOutput) => void
  ): void;
  public getOrganizationConformancePackDetailedStatus(
    args: GetOrganizationConformancePackDetailedStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationConformancePackDetailedStatusCommandOutput) => void
  ): void;
  public getOrganizationConformancePackDetailedStatus(
    args: GetOrganizationConformancePackDetailedStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetOrganizationConformancePackDetailedStatusCommandOutput) => void),
    cb?: (err: any, data?: GetOrganizationConformancePackDetailedStatusCommandOutput) => void
  ): Promise<GetOrganizationConformancePackDetailedStatusCommandOutput> | void {
    const command = new GetOrganizationConformancePackDetailedStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the policy definition containing the logic for your organization Config Custom Policy rule.</p>
   */
  public getOrganizationCustomRulePolicy(
    args: GetOrganizationCustomRulePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationCustomRulePolicyCommandOutput>;
  public getOrganizationCustomRulePolicy(
    args: GetOrganizationCustomRulePolicyCommandInput,
    cb: (err: any, data?: GetOrganizationCustomRulePolicyCommandOutput) => void
  ): void;
  public getOrganizationCustomRulePolicy(
    args: GetOrganizationCustomRulePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationCustomRulePolicyCommandOutput) => void
  ): void;
  public getOrganizationCustomRulePolicy(
    args: GetOrganizationCustomRulePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOrganizationCustomRulePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetOrganizationCustomRulePolicyCommandOutput) => void
  ): Promise<GetOrganizationCustomRulePolicyCommandOutput> | void {
    const command = new GetOrganizationCustomRulePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of <code>ConfigurationItems</code> for the specified resource.
   * 			The list contains details about each state of the resource
   * 			during the specified time interval. If you specified a retention
   * 			period to retain your <code>ConfigurationItems</code> between a
   * 			minimum of 30 days and a maximum of 7 years (2557 days), Config
   * 			returns the <code>ConfigurationItems</code> for the specified
   * 			retention period. </p>
   * 		       <p>The response is paginated. By default, Config returns a
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
  public getResourceConfigHistory(
    args: GetResourceConfigHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceConfigHistoryCommandOutput>;
  public getResourceConfigHistory(
    args: GetResourceConfigHistoryCommandInput,
    cb: (err: any, data?: GetResourceConfigHistoryCommandOutput) => void
  ): void;
  public getResourceConfigHistory(
    args: GetResourceConfigHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceConfigHistoryCommandOutput) => void
  ): void;
  public getResourceConfigHistory(
    args: GetResourceConfigHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceConfigHistoryCommandOutput) => void),
    cb?: (err: any, data?: GetResourceConfigHistoryCommandOutput) => void
  ): Promise<GetResourceConfigHistoryCommandOutput> | void {
    const command = new GetResourceConfigHistoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run.
   * 			The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated,
   * 			the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. </p>
   */
  public getResourceEvaluationSummary(
    args: GetResourceEvaluationSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceEvaluationSummaryCommandOutput>;
  public getResourceEvaluationSummary(
    args: GetResourceEvaluationSummaryCommandInput,
    cb: (err: any, data?: GetResourceEvaluationSummaryCommandOutput) => void
  ): void;
  public getResourceEvaluationSummary(
    args: GetResourceEvaluationSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceEvaluationSummaryCommandOutput) => void
  ): void;
  public getResourceEvaluationSummary(
    args: GetResourceEvaluationSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceEvaluationSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetResourceEvaluationSummaryCommandOutput) => void
  ): Promise<GetResourceEvaluationSummaryCommandOutput> | void {
    const command = new GetResourceEvaluationSummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the details of a specific stored query.</p>
   */
  public getStoredQuery(
    args: GetStoredQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStoredQueryCommandOutput>;
  public getStoredQuery(
    args: GetStoredQueryCommandInput,
    cb: (err: any, data?: GetStoredQueryCommandOutput) => void
  ): void;
  public getStoredQuery(
    args: GetStoredQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStoredQueryCommandOutput) => void
  ): void;
  public getStoredQuery(
    args: GetStoredQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStoredQueryCommandOutput) => void),
    cb?: (err: any, data?: GetStoredQueryCommandOutput) => void
  ): Promise<GetStoredQueryCommandOutput> | void {
    const command = new GetStoredQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions.
   * 			A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region.
   * 			You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p>
   * 			      <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>
   */
  public listAggregateDiscoveredResources(
    args: ListAggregateDiscoveredResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAggregateDiscoveredResourcesCommandOutput>;
  public listAggregateDiscoveredResources(
    args: ListAggregateDiscoveredResourcesCommandInput,
    cb: (err: any, data?: ListAggregateDiscoveredResourcesCommandOutput) => void
  ): void;
  public listAggregateDiscoveredResources(
    args: ListAggregateDiscoveredResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAggregateDiscoveredResourcesCommandOutput) => void
  ): void;
  public listAggregateDiscoveredResources(
    args: ListAggregateDiscoveredResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAggregateDiscoveredResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListAggregateDiscoveredResourcesCommandOutput) => void
  ): Promise<ListAggregateDiscoveredResourcesCommandOutput> | void {
    const command = new ListAggregateDiscoveredResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of conformance pack compliance scores.
   * 			A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack.
   * 			This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand
   * 			the level of compliance in your conformance packs.</p>
   * 		       <note>
   *             <p>Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p>
   *          </note>
   */
  public listConformancePackComplianceScores(
    args: ListConformancePackComplianceScoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConformancePackComplianceScoresCommandOutput>;
  public listConformancePackComplianceScores(
    args: ListConformancePackComplianceScoresCommandInput,
    cb: (err: any, data?: ListConformancePackComplianceScoresCommandOutput) => void
  ): void;
  public listConformancePackComplianceScores(
    args: ListConformancePackComplianceScoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConformancePackComplianceScoresCommandOutput) => void
  ): void;
  public listConformancePackComplianceScores(
    args: ListConformancePackComplianceScoresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConformancePackComplianceScoresCommandOutput) => void),
    cb?: (err: any, data?: ListConformancePackComplianceScoresCommandOutput) => void
  ): Promise<ListConformancePackComplianceScoresCommandOutput> | void {
    const command = new ListConformancePackComplianceScoresCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Accepts a resource type and returns a list of resource
   * 			identifiers for the resources of that type. A resource identifier
   * 			includes the resource type, ID, and (if available) the custom
   * 			resource name. The results consist of resources that Config has
   * 			discovered, including those that Config is not currently
   * 			recording. You can narrow the results to include only resources that
   * 			have specific resource IDs or a resource name.</p>
   * 		       <note>
   * 			         <p>You can specify either resource IDs or a resource name, but
   * 				not both, in the same request.</p>
   * 		       </note>
   * 		       <p>The response is paginated. By default, Config lists 100
   * 			resource identifiers on each page. You can customize this number
   * 			with the <code>limit</code> parameter. The response includes a
   * 				<code>nextToken</code> string. To get the next page of results,
   * 			run the request again and specify the string for the
   * 				<code>nextToken</code> parameter.</p>
   */
  public listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoveredResourcesCommandOutput>;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): void;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): void;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDiscoveredResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): Promise<ListDiscoveredResourcesCommandOutput> | void {
    const command = new ListDiscoveredResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of proactive resource evaluations.</p>
   */
  public listResourceEvaluations(
    args: ListResourceEvaluationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceEvaluationsCommandOutput>;
  public listResourceEvaluations(
    args: ListResourceEvaluationsCommandInput,
    cb: (err: any, data?: ListResourceEvaluationsCommandOutput) => void
  ): void;
  public listResourceEvaluations(
    args: ListResourceEvaluationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceEvaluationsCommandOutput) => void
  ): void;
  public listResourceEvaluations(
    args: ListResourceEvaluationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceEvaluationsCommandOutput) => void),
    cb?: (err: any, data?: ListResourceEvaluationsCommandOutput) => void
  ): Promise<ListResourceEvaluationsCommandOutput> | void {
    const command = new ListResourceEvaluationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100. </p>
   */
  public listStoredQueries(
    args: ListStoredQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStoredQueriesCommandOutput>;
  public listStoredQueries(
    args: ListStoredQueriesCommandInput,
    cb: (err: any, data?: ListStoredQueriesCommandOutput) => void
  ): void;
  public listStoredQueries(
    args: ListStoredQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStoredQueriesCommandOutput) => void
  ): void;
  public listStoredQueries(
    args: ListStoredQueriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStoredQueriesCommandOutput) => void),
    cb?: (err: any, data?: ListStoredQueriesCommandOutput) => void
  ): Promise<ListStoredQueriesCommandOutput> | void {
    const command = new ListStoredQueriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the tags for Config resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Authorizes the aggregator account and region to collect data
   * 			from the source account and region. </p>
   */
  public putAggregationAuthorization(
    args: PutAggregationAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAggregationAuthorizationCommandOutput>;
  public putAggregationAuthorization(
    args: PutAggregationAuthorizationCommandInput,
    cb: (err: any, data?: PutAggregationAuthorizationCommandOutput) => void
  ): void;
  public putAggregationAuthorization(
    args: PutAggregationAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAggregationAuthorizationCommandOutput) => void
  ): void;
  public putAggregationAuthorization(
    args: PutAggregationAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAggregationAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: PutAggregationAuthorizationCommandOutput) => void
  ): Promise<PutAggregationAuthorizationCommandOutput> | void {
    const command = new PutAggregationAuthorizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds or updates an Config rule to evaluate if your
   * 			Amazon Web Services resources comply with your desired configurations. For information on how many Config rules you can have per account,
   * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
   *                <b>Service Limits</b>
   *             </a> in the <i>Config Developer Guide</i>.</p>
   *
   * 		       <p>There are two types of rules: Config Custom Rules and Config Managed Rules.
   * 			You can use <code>PutConfigRule</code> to create both Config custom rules and Config managed rules.</p>
   *
   * 		       <p>Custom rules are rules that you can create using either Guard or Lambda functions.
   * 			Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
   * 				Repository</a>) is a policy-as-code language that allows you to write policies that
   * 			are enforced by Config Custom Policy rules. Lambda uses custom code that you upload to
   * 			evaluate a custom rule. If you are adding a new Custom Lambda rule,
   * 			you first need to create an Lambda function that the rule invokes to evaluate
   * 			your resources. When you use <code>PutConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource
   * 			Name (ARN) that Lambda assigns to the function. You specify the ARN
   * 			in the <code>SourceIdentifier</code> key. This key is part of the
   * 			<code>Source</code> object, which is part of the
   * 			<code>ConfigRule</code> object. </p>
   *
   * 		       <p>Managed rules are predefined,
   * 			customizable rules created by Config. For a list of managed rules, see
   * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config
   * 				Managed Rules</a>. If you are adding an Config managed rule, you must specify the
   * 			rule's identifier for the <code>SourceIdentifier</code> key.</p>
   *
   * 		       <p>For any new rule that you add, specify the
   * 				<code>ConfigRuleName</code> in the <code>ConfigRule</code>
   * 			object. Do not specify the <code>ConfigRuleArn</code> or the
   * 			<code>ConfigRuleId</code>. These values are generated by Config for new rules.</p>
   * 		       <p>If you are updating a rule that you added previously, you can
   * 			specify the rule by <code>ConfigRuleName</code>,
   * 				<code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the
   * 				<code>ConfigRule</code> data type that you use in this
   * 			request.</p>
   *
   * 		       <p>For more information about developing and using Config
   * 			rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Amazon Web Services resource Configurations with Config</a>
   * 			in the <i>Config Developer Guide</i>.</p>
   */
  public putConfigRule(
    args: PutConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigRuleCommandOutput>;
  public putConfigRule(
    args: PutConfigRuleCommandInput,
    cb: (err: any, data?: PutConfigRuleCommandOutput) => void
  ): void;
  public putConfigRule(
    args: PutConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigRuleCommandOutput) => void
  ): void;
  public putConfigRule(
    args: PutConfigRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigRuleCommandOutput) => void),
    cb?: (err: any, data?: PutConfigRuleCommandOutput) => void
  ): Promise<PutConfigRuleCommandOutput> | void {
    const command = new PutConfigRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates and updates the configuration aggregator with the
   * 			selected source accounts and regions. The source account can be
   * 			individual account(s) or an organization.</p>
   *
   * 		       <p>
   *             <code>accountIds</code> that are passed will be replaced with existing accounts.
   * 			If you want to add additional accounts into the aggregator, call <code>DescribeConfigurationAggregators</code> to get the previous accounts and then append new ones.</p>
   * 		       <note>
   * 			         <p>Config should be enabled in source accounts and regions
   * 				you want to aggregate.</p>
   *
   * 			         <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization.
   * 				If the caller is a management account, Config calls <code>EnableAwsServiceAccess</code> API to enable integration between Config and Organizations.
   * 				If the caller is a registered delegated administrator, Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p>
   * 			         <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the <i>Config developer guide</i>. </p>
   * 		       </note>
   */
  public putConfigurationAggregator(
    args: PutConfigurationAggregatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationAggregatorCommandOutput>;
  public putConfigurationAggregator(
    args: PutConfigurationAggregatorCommandInput,
    cb: (err: any, data?: PutConfigurationAggregatorCommandOutput) => void
  ): void;
  public putConfigurationAggregator(
    args: PutConfigurationAggregatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationAggregatorCommandOutput) => void
  ): void;
  public putConfigurationAggregator(
    args: PutConfigurationAggregatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigurationAggregatorCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationAggregatorCommandOutput) => void
  ): Promise<PutConfigurationAggregatorCommandOutput> | void {
    const command = new PutConfigurationAggregatorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public putConfigurationRecorder(
    args: PutConfigurationRecorderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationRecorderCommandOutput>;
  public putConfigurationRecorder(
    args: PutConfigurationRecorderCommandInput,
    cb: (err: any, data?: PutConfigurationRecorderCommandOutput) => void
  ): void;
  public putConfigurationRecorder(
    args: PutConfigurationRecorderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationRecorderCommandOutput) => void
  ): void;
  public putConfigurationRecorder(
    args: PutConfigurationRecorderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigurationRecorderCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationRecorderCommandOutput) => void
  ): Promise<PutConfigurationRecorderCommandOutput> | void {
    const command = new PutConfigurationRecorderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across an organization.
   * 			For information on how many conformance packs you can have per account,
   * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
   *                <b>Service Limits</b>
   *             </a> in the Config Developer Guide.</p>
   * 		       <p>This API creates a service-linked role <code>AWSServiceRoleForConfigConforms</code> in your account.
   * 		The service-linked role is created only when the role does not exist in your account. </p>
   * 		       <note>
   *             <p>You must specify only one of the follow parameters: <code>TemplateS3Uri</code>, <code>TemplateBody</code> or <code>TemplateSSMDocumentDetails</code>.</p>
   *          </note>
   */
  public putConformancePack(
    args: PutConformancePackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConformancePackCommandOutput>;
  public putConformancePack(
    args: PutConformancePackCommandInput,
    cb: (err: any, data?: PutConformancePackCommandOutput) => void
  ): void;
  public putConformancePack(
    args: PutConformancePackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConformancePackCommandOutput) => void
  ): void;
  public putConformancePack(
    args: PutConformancePackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConformancePackCommandOutput) => void),
    cb?: (err: any, data?: PutConformancePackCommandOutput) => void
  ): Promise<PutConformancePackCommandOutput> | void {
    const command = new PutConformancePackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public putDeliveryChannel(
    args: PutDeliveryChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeliveryChannelCommandOutput>;
  public putDeliveryChannel(
    args: PutDeliveryChannelCommandInput,
    cb: (err: any, data?: PutDeliveryChannelCommandOutput) => void
  ): void;
  public putDeliveryChannel(
    args: PutDeliveryChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeliveryChannelCommandOutput) => void
  ): void;
  public putDeliveryChannel(
    args: PutDeliveryChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDeliveryChannelCommandOutput) => void),
    cb?: (err: any, data?: PutDeliveryChannelCommandOutput) => void
  ): Promise<PutDeliveryChannelCommandOutput> | void {
    const command = new PutDeliveryChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Used by an Lambda function to deliver evaluation results to
   * 			Config. This action is required in every Lambda function
   * 			that is invoked by an Config rule.</p>
   */
  public putEvaluations(
    args: PutEvaluationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEvaluationsCommandOutput>;
  public putEvaluations(
    args: PutEvaluationsCommandInput,
    cb: (err: any, data?: PutEvaluationsCommandOutput) => void
  ): void;
  public putEvaluations(
    args: PutEvaluationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEvaluationsCommandOutput) => void
  ): void;
  public putEvaluations(
    args: PutEvaluationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEvaluationsCommandOutput) => void),
    cb?: (err: any, data?: PutEvaluationsCommandOutput) => void
  ): Promise<PutEvaluationsCommandOutput> | void {
    const command = new PutEvaluationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Add or updates the evaluations for process checks.
   * 			This API checks if the rule is a process check when the name of the Config rule is provided.</p>
   */
  public putExternalEvaluation(
    args: PutExternalEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutExternalEvaluationCommandOutput>;
  public putExternalEvaluation(
    args: PutExternalEvaluationCommandInput,
    cb: (err: any, data?: PutExternalEvaluationCommandOutput) => void
  ): void;
  public putExternalEvaluation(
    args: PutExternalEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutExternalEvaluationCommandOutput) => void
  ): void;
  public putExternalEvaluation(
    args: PutExternalEvaluationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutExternalEvaluationCommandOutput) => void),
    cb?: (err: any, data?: PutExternalEvaluationCommandOutput) => void
  ): Promise<PutExternalEvaluationCommandOutput> | void {
    const command = new PutExternalEvaluationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your
   * 			desired configurations. For information on how many organization Config rules you can have per account,
   * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
   *                <b>Service Limits</b>
   *             </a> in the <i>Config Developer Guide</i>.</p>
   * 	        <p> Only a management account and a delegated administrator can create or update an organization Config rule.
   * 		When calling this API with a delegated administrator, you must ensure Organizations
   * 		<code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p>
   * 		       <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service-linked
   * 			role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization.
   * 			The service-linked role is created only when the role does not exist in the caller account.
   * 			Config verifies the existence of role with <code>GetRole</code> action.</p>
   * 		       <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization
   * 			<code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p>
   *
   * 		       <p>There are two types of rules: Config Custom Rules and Config Managed Rules.
   * 			You can use <code>PutOrganizationConfigRule</code> to create both Config custom rules and Config managed rules.</p>
   *
   * 		       <p>Custom rules are rules that you can create using either Guard or Lambda functions.
   * 			Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
   * 				Repository</a>) is a policy-as-code language that allows you to write policies that
   * 			are enforced by Config Custom Policy rules. Lambda uses custom code that you upload to
   * 			evaluate a custom rule. If you are adding a new Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated
   * 		administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function.
   * 		When you use <code>PutOrganizationConfigRule</code> to add a Custom Lambda rule to Config, you must
   * 			specify the Amazon Resource Name (ARN) that Lambda assigns to the function.</p>
   *
   * 		       <p>Managed rules are predefined,
   * 			customizable rules created by Config. For a list of managed rules, see
   * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config
   * 				Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>RuleIdentifier</code> key.</p>
   *
   *
   * 		       <note>
   *             <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p>
   * 			         <p>Make sure to specify one of either <code>OrganizationCustomPolicyRuleMetadata</code> for Custom Policy rules, <code>OrganizationCustomRuleMetadata</code> for Custom Lambda rules, or <code>OrganizationManagedRuleMetadata</code> for managed rules.</p>
   * 			      </note>
   */
  public putOrganizationConfigRule(
    args: PutOrganizationConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutOrganizationConfigRuleCommandOutput>;
  public putOrganizationConfigRule(
    args: PutOrganizationConfigRuleCommandInput,
    cb: (err: any, data?: PutOrganizationConfigRuleCommandOutput) => void
  ): void;
  public putOrganizationConfigRule(
    args: PutOrganizationConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutOrganizationConfigRuleCommandOutput) => void
  ): void;
  public putOrganizationConfigRule(
    args: PutOrganizationConfigRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutOrganizationConfigRuleCommandOutput) => void),
    cb?: (err: any, data?: PutOrganizationConfigRuleCommandOutput) => void
  ): Promise<PutOrganizationConfigRuleCommandOutput> | void {
    const command = new PutOrganizationConfigRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account,
   * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
   *                <b>Service Limits</b>
   *             </a> in the Config Developer Guide.</p>
   * 		       <p>Only a management account and a delegated administrator can call this API.
   * 			When calling this API with a delegated administrator, you must ensure Organizations
   * 			<code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p>
   * 		       <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code>
   * 			through the <code>EnableAWSServiceAccess</code> action and creates a
   * 			service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization.
   * 			The service-linked role is created only when the role does not exist in the caller account.
   * 			To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization
   * 			<code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p>
   *
   *
   *
   * 		       <note>
   * 			         <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p>
   * 			         <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both.
   * 			If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p>
   * 			         <p>Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated.
   * 				You cannot update a conformance pack while it is in this state.</p>
   *          </note>
   */
  public putOrganizationConformancePack(
    args: PutOrganizationConformancePackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutOrganizationConformancePackCommandOutput>;
  public putOrganizationConformancePack(
    args: PutOrganizationConformancePackCommandInput,
    cb: (err: any, data?: PutOrganizationConformancePackCommandOutput) => void
  ): void;
  public putOrganizationConformancePack(
    args: PutOrganizationConformancePackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutOrganizationConformancePackCommandOutput) => void
  ): void;
  public putOrganizationConformancePack(
    args: PutOrganizationConformancePackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutOrganizationConformancePackCommandOutput) => void),
    cb?: (err: any, data?: PutOrganizationConformancePackCommandOutput) => void
  ): Promise<PutOrganizationConformancePackCommandOutput> | void {
    const command = new PutOrganizationConformancePackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds or updates the remediation configuration with a specific Config rule with the
   * 			selected target or action.
   * 			The API creates the <code>RemediationConfiguration</code> object for the Config rule.
   * 		The Config rule must already exist for you to add a remediation configuration.
   * 		The target (SSM document) must exist and have permissions to use the target. </p>
   * 		       <note>
   *             <p>If you make backward incompatible changes to the SSM document,
   * 			you must call this again to ensure the remediations can run.</p>
   * 			         <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules,
   * 				the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p>
   *          </note>
   * 		       <note>
   *             <p>For manual remediation configuration, you need to provide a value for <code>automationAssumeRole</code> or use a value in the <code>assumeRole</code>field  to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.</p>
   * 			         <p>However, for automatic remediation configuration, the only valid <code>assumeRole</code> field value is <code>AutomationAssumeRole</code> and you need to provide a value for <code>AutomationAssumeRole</code> to remediate your resources.</p>
   * 		       </note>
   */
  public putRemediationConfigurations(
    args: PutRemediationConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRemediationConfigurationsCommandOutput>;
  public putRemediationConfigurations(
    args: PutRemediationConfigurationsCommandInput,
    cb: (err: any, data?: PutRemediationConfigurationsCommandOutput) => void
  ): void;
  public putRemediationConfigurations(
    args: PutRemediationConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRemediationConfigurationsCommandOutput) => void
  ): void;
  public putRemediationConfigurations(
    args: PutRemediationConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRemediationConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: PutRemediationConfigurationsCommandOutput) => void
  ): Promise<PutRemediationConfigurationsCommandOutput> | void {
    const command = new PutRemediationConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A remediation exception is when a specific resource is no longer considered for auto-remediation.
   * 			This API adds a new exception or updates an existing exception for a specific resource with a specific Config rule. </p>
   * 		       <note>
   *             <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource.
   * 			Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
   *          </note>
   * 		       <note>
   *             <p>To place an exception on an Amazon Web Services resource, ensure remediation is set as manual remediation.</p>
   *          </note>
   */
  public putRemediationExceptions(
    args: PutRemediationExceptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRemediationExceptionsCommandOutput>;
  public putRemediationExceptions(
    args: PutRemediationExceptionsCommandInput,
    cb: (err: any, data?: PutRemediationExceptionsCommandOutput) => void
  ): void;
  public putRemediationExceptions(
    args: PutRemediationExceptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRemediationExceptionsCommandOutput) => void
  ): void;
  public putRemediationExceptions(
    args: PutRemediationExceptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRemediationExceptionsCommandOutput) => void),
    cb?: (err: any, data?: PutRemediationExceptionsCommandOutput) => void
  ): Promise<PutRemediationExceptionsCommandOutput> | void {
    const command = new PutRemediationExceptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Records the configuration state for the resource provided in the request.
   *
   * 			The configuration state of a resource is represented in Config as Configuration Items.
   * 			Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. </p>
   * 		       <note>
   *             <p>The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation.</p>
   * 			         <p>When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource.
   * 				</p>
   * 		          <p>Write-only schema properites are not recorded as part of the published configuration item.</p>
   *          </note>
   */
  public putResourceConfig(
    args: PutResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourceConfigCommandOutput>;
  public putResourceConfig(
    args: PutResourceConfigCommandInput,
    cb: (err: any, data?: PutResourceConfigCommandOutput) => void
  ): void;
  public putResourceConfig(
    args: PutResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourceConfigCommandOutput) => void
  ): void;
  public putResourceConfig(
    args: PutResourceConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourceConfigCommandOutput) => void),
    cb?: (err: any, data?: PutResourceConfigCommandOutput) => void
  ): Promise<PutResourceConfigCommandOutput> | void {
    const command = new PutResourceConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates and updates the retention configuration with details
   * 			about retention period (number of days) that Config stores your
   * 			historical information. The API creates the
   * 				<code>RetentionConfiguration</code> object and names the object
   * 			as <b>default</b>. When you have a
   * 				<code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the
   * 			default object. </p>
   * 		       <note>
   * 			         <p>Currently, Config supports only one retention
   * 				configuration per region in your account.</p>
   * 		       </note>
   */
  public putRetentionConfiguration(
    args: PutRetentionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRetentionConfigurationCommandOutput>;
  public putRetentionConfiguration(
    args: PutRetentionConfigurationCommandInput,
    cb: (err: any, data?: PutRetentionConfigurationCommandOutput) => void
  ): void;
  public putRetentionConfiguration(
    args: PutRetentionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRetentionConfigurationCommandOutput) => void
  ): void;
  public putRetentionConfiguration(
    args: PutRetentionConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRetentionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutRetentionConfigurationCommandOutput) => void
  ): Promise<PutRetentionConfigurationCommandOutput> | void {
    const command = new PutRetentionConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single Amazon Web Services account and a single Amazon Web Services Region.
   * 			You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.</p>
   */
  public putStoredQuery(
    args: PutStoredQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutStoredQueryCommandOutput>;
  public putStoredQuery(
    args: PutStoredQueryCommandInput,
    cb: (err: any, data?: PutStoredQueryCommandOutput) => void
  ): void;
  public putStoredQuery(
    args: PutStoredQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutStoredQueryCommandOutput) => void
  ): void;
  public putStoredQuery(
    args: PutStoredQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutStoredQueryCommandOutput) => void),
    cb?: (err: any, data?: PutStoredQueryCommandOutput) => void
  ): Promise<PutStoredQueryCommandOutput> | void {
    const command = new PutStoredQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions,
   * 			performs the corresponding search, and returns resource configurations matching the properties.</p>
   * 		       <p>For more information about query components, see the
   * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
   *                <b>Query Components</b>
   *             </a> section in the Config Developer Guide.</p>
   *
   * 		       <note>
   * 			         <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>)
   * 				and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p>
   *
   * 			         <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>)
   * 				and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p>
   * 		       </note>
   */
  public selectAggregateResourceConfig(
    args: SelectAggregateResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SelectAggregateResourceConfigCommandOutput>;
  public selectAggregateResourceConfig(
    args: SelectAggregateResourceConfigCommandInput,
    cb: (err: any, data?: SelectAggregateResourceConfigCommandOutput) => void
  ): void;
  public selectAggregateResourceConfig(
    args: SelectAggregateResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SelectAggregateResourceConfigCommandOutput) => void
  ): void;
  public selectAggregateResourceConfig(
    args: SelectAggregateResourceConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SelectAggregateResourceConfigCommandOutput) => void),
    cb?: (err: any, data?: SelectAggregateResourceConfigCommandOutput) => void
  ): Promise<SelectAggregateResourceConfigCommandOutput> | void {
    const command = new SelectAggregateResourceConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p>
   * 		       <p>For more information about query components, see the
   * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
   *                <b>Query Components</b>
   *             </a> section in the <i>Config Developer Guide</i>.</p>
   */
  public selectResourceConfig(
    args: SelectResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SelectResourceConfigCommandOutput>;
  public selectResourceConfig(
    args: SelectResourceConfigCommandInput,
    cb: (err: any, data?: SelectResourceConfigCommandOutput) => void
  ): void;
  public selectResourceConfig(
    args: SelectResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SelectResourceConfigCommandOutput) => void
  ): void;
  public selectResourceConfig(
    args: SelectResourceConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SelectResourceConfigCommandOutput) => void),
    cb?: (err: any, data?: SelectResourceConfigCommandOutput) => void
  ): Promise<SelectResourceConfigCommandOutput> | void {
    const command = new SelectResourceConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Runs an on-demand evaluation for the specified Config rules
   * 			against the last known configuration state of the resources. Use
   * 				<code>StartConfigRulesEvaluation</code> when you want to test
   * 			that a rule you updated is working as expected.
   * 				<code>StartConfigRulesEvaluation</code> does not re-record the
   * 			latest configuration state for your resources. It re-runs an
   * 			evaluation against the last known state of your resources. </p>
   * 		       <p>You can specify up to 25 Config rules per request. </p>
   *
   *
   * 		       <p>An existing <code>StartConfigRulesEvaluation</code> call for
   * 			the specified rules must complete before you can call the API again.
   * 			If you chose to have Config stream to an Amazon SNS topic, you
   * 			will receive a <code>ConfigRuleEvaluationStarted</code> notification
   * 			when the evaluation starts.</p>
   * 		       <note>
   * 			         <p>You don't need to call the
   * 					<code>StartConfigRulesEvaluation</code> API to run an
   * 				evaluation for a new rule. When you create a rule, Config
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
   * 				           <p>Config invokes your Lambda function and evaluates
   * 					your IAM resources.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Your custom rule will still run periodic evaluations
   * 					every 24 hours.</p>
   * 			         </li>
   *          </ol>
   */
  public startConfigRulesEvaluation(
    args: StartConfigRulesEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartConfigRulesEvaluationCommandOutput>;
  public startConfigRulesEvaluation(
    args: StartConfigRulesEvaluationCommandInput,
    cb: (err: any, data?: StartConfigRulesEvaluationCommandOutput) => void
  ): void;
  public startConfigRulesEvaluation(
    args: StartConfigRulesEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartConfigRulesEvaluationCommandOutput) => void
  ): void;
  public startConfigRulesEvaluation(
    args: StartConfigRulesEvaluationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartConfigRulesEvaluationCommandOutput) => void),
    cb?: (err: any, data?: StartConfigRulesEvaluationCommandOutput) => void
  ): Promise<StartConfigRulesEvaluationCommandOutput> | void {
    const command = new StartConfigRulesEvaluationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts recording configurations of the Amazon Web Services resources you have
   * 			selected to record in your Amazon Web Services account.</p>
   * 		       <p>You must have created at least one delivery channel to
   * 			successfully start the configuration recorder.</p>
   */
  public startConfigurationRecorder(
    args: StartConfigurationRecorderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartConfigurationRecorderCommandOutput>;
  public startConfigurationRecorder(
    args: StartConfigurationRecorderCommandInput,
    cb: (err: any, data?: StartConfigurationRecorderCommandOutput) => void
  ): void;
  public startConfigurationRecorder(
    args: StartConfigurationRecorderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartConfigurationRecorderCommandOutput) => void
  ): void;
  public startConfigurationRecorder(
    args: StartConfigurationRecorderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartConfigurationRecorderCommandOutput) => void),
    cb?: (err: any, data?: StartConfigurationRecorderCommandOutput) => void
  ): Promise<StartConfigurationRecorderCommandOutput> | void {
    const command = new StartConfigurationRecorderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p>
   * 			      <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
   */
  public startRemediationExecution(
    args: StartRemediationExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRemediationExecutionCommandOutput>;
  public startRemediationExecution(
    args: StartRemediationExecutionCommandInput,
    cb: (err: any, data?: StartRemediationExecutionCommandOutput) => void
  ): void;
  public startRemediationExecution(
    args: StartRemediationExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRemediationExecutionCommandOutput) => void
  ): void;
  public startRemediationExecution(
    args: StartRemediationExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartRemediationExecutionCommandOutput) => void),
    cb?: (err: any, data?: StartRemediationExecutionCommandOutput) => void
  ): Promise<StartRemediationExecutionCommandOutput> | void {
    const command = new StartRemediationExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules.
   * 			You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all
   * 			of the Config rules in your account that match with the specified proactive mode and resource type.</p>
   *
   * 		       <note>
   *             <p>Ensure you have the <code>cloudformation:DescribeType</code> role setup to validate the resource type schema.
   * 		</p>
   *          </note>
   */
  public startResourceEvaluation(
    args: StartResourceEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartResourceEvaluationCommandOutput>;
  public startResourceEvaluation(
    args: StartResourceEvaluationCommandInput,
    cb: (err: any, data?: StartResourceEvaluationCommandOutput) => void
  ): void;
  public startResourceEvaluation(
    args: StartResourceEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartResourceEvaluationCommandOutput) => void
  ): void;
  public startResourceEvaluation(
    args: StartResourceEvaluationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartResourceEvaluationCommandOutput) => void),
    cb?: (err: any, data?: StartResourceEvaluationCommandOutput) => void
  ): Promise<StartResourceEvaluationCommandOutput> | void {
    const command = new StartResourceEvaluationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.</p>
   */
  public stopConfigurationRecorder(
    args: StopConfigurationRecorderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopConfigurationRecorderCommandOutput>;
  public stopConfigurationRecorder(
    args: StopConfigurationRecorderCommandInput,
    cb: (err: any, data?: StopConfigurationRecorderCommandOutput) => void
  ): void;
  public stopConfigurationRecorder(
    args: StopConfigurationRecorderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopConfigurationRecorderCommandOutput) => void
  ): void;
  public stopConfigurationRecorder(
    args: StopConfigurationRecorderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopConfigurationRecorderCommandOutput) => void),
    cb?: (err: any, data?: StopConfigurationRecorderCommandOutput) => void
  ): Promise<StopConfigurationRecorderCommandOutput> | void {
    const command = new StopConfigurationRecorderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed.
   * 			When a resource is deleted, the tags associated with that resource are deleted as well.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes specified tags from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
