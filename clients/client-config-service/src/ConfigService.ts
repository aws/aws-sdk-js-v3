import { ConfigServiceClient } from "./ConfigServiceClient";
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
  DescribeConfigurationAggregatorSourcesStatusCommand,
  DescribeConfigurationAggregatorSourcesStatusCommandInput,
  DescribeConfigurationAggregatorSourcesStatusCommandOutput,
} from "./commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import {
  DescribeConfigurationAggregatorsCommand,
  DescribeConfigurationAggregatorsCommandInput,
  DescribeConfigurationAggregatorsCommandOutput,
} from "./commands/DescribeConfigurationAggregatorsCommand";
import {
  DescribeConfigurationRecorderStatusCommand,
  DescribeConfigurationRecorderStatusCommandInput,
  DescribeConfigurationRecorderStatusCommandOutput,
} from "./commands/DescribeConfigurationRecorderStatusCommand";
import {
  DescribeConfigurationRecordersCommand,
  DescribeConfigurationRecordersCommandInput,
  DescribeConfigurationRecordersCommandOutput,
} from "./commands/DescribeConfigurationRecordersCommand";
import {
  DescribeConformancePackComplianceCommand,
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput,
} from "./commands/DescribeConformancePackComplianceCommand";
import {
  DescribeConformancePackStatusCommand,
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput,
} from "./commands/DescribeConformancePackStatusCommand";
import {
  DescribeConformancePacksCommand,
  DescribeConformancePacksCommandInput,
  DescribeConformancePacksCommandOutput,
} from "./commands/DescribeConformancePacksCommand";
import {
  DescribeDeliveryChannelStatusCommand,
  DescribeDeliveryChannelStatusCommandInput,
  DescribeDeliveryChannelStatusCommandOutput,
} from "./commands/DescribeDeliveryChannelStatusCommand";
import {
  DescribeDeliveryChannelsCommand,
  DescribeDeliveryChannelsCommandInput,
  DescribeDeliveryChannelsCommandOutput,
} from "./commands/DescribeDeliveryChannelsCommand";
import {
  DescribeOrganizationConfigRuleStatusesCommand,
  DescribeOrganizationConfigRuleStatusesCommandInput,
  DescribeOrganizationConfigRuleStatusesCommandOutput,
} from "./commands/DescribeOrganizationConfigRuleStatusesCommand";
import {
  DescribeOrganizationConfigRulesCommand,
  DescribeOrganizationConfigRulesCommandInput,
  DescribeOrganizationConfigRulesCommandOutput,
} from "./commands/DescribeOrganizationConfigRulesCommand";
import {
  DescribeOrganizationConformancePackStatusesCommand,
  DescribeOrganizationConformancePackStatusesCommandInput,
  DescribeOrganizationConformancePackStatusesCommandOutput,
} from "./commands/DescribeOrganizationConformancePackStatusesCommand";
import {
  DescribeOrganizationConformancePacksCommand,
  DescribeOrganizationConformancePacksCommandInput,
  DescribeOrganizationConformancePacksCommandOutput,
} from "./commands/DescribeOrganizationConformancePacksCommand";
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
  GetResourceConfigHistoryCommand,
  GetResourceConfigHistoryCommandInput,
  GetResourceConfigHistoryCommandOutput,
} from "./commands/GetResourceConfigHistoryCommand";
import {
  ListAggregateDiscoveredResourcesCommand,
  ListAggregateDiscoveredResourcesCommandInput,
  ListAggregateDiscoveredResourcesCommandOutput,
} from "./commands/ListAggregateDiscoveredResourcesCommand";
import {
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "./commands/ListDiscoveredResourcesCommand";
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
export class ConfigService extends ConfigServiceClient {
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
   * <p>Deletes the specified conformance pack and all the AWS Config rules, remediation actions, and all evaluation results within that conformance pack.</p>
   * 		       <p>AWS Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>
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
   * <p>Deletes the evaluation results for the specified AWS Config
   * 			rule. You can specify one AWS Config rule per request. After you
   * 			delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating
   * 			your AWS resources against the rule.</p>
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
   * <p>Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization. Only a master account can delete an organization config rule.</p>
   * 		       <p>AWS Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete.
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
   * <p>Deletes the specified organization conformance pack and all of the config rules and remediation actions from all member accounts in that organization.
   * 			Only a master account can delete an organization conformance pack.</p>
   * 			      <p>AWS Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete.
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
   * <p>Records the configuration state for a custom resource that has been deleted.  This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your AWS Config History.
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
   * 			number of resources for compliant and noncompliant rules.
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
   * <p>Returns status information for each of your AWS managed Config
   * 			rules. The status includes information such as the last time AWS
   * 			Config invoked the rule, the last time AWS Config failed to invoke
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
   * <p>Returns details about your AWS Config rules.</p>
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
   * 			The status includes information about the last time AWS Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. </p>
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
   * <p>Returns a list of organization config rules.</p>
   * 		       <note>
   *             <p>When you specify the limit and the next token, you receive a paginated response.
   * 			Limit and next token are not applicable if you specify organization config rule names.
   * 			It is only applicable, when you request all the organization config rules.</p>
   * 			         <p>Only a master account can call this API.</p>
   *          </note>
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
   * <p>Provides organization config rule deployment status for an organization.</p>
   * 		       <note>
   *             <p>The status is not considered successful until organization config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p>
   * 			         <p>When you specify the limit and the next token, you receive a paginated response.
   * 			Limit and next token are not applicable if you specify organization config rule names.
   * 			It is only applicable, when you request all the organization config rules.</p>
   * 			         <p>Only a master account can call this API.</p>
   *          </note>
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
   * <p>Returns a list of organization conformance packs.</p>
   * 		       <note>
   *             <p>When you specify the limit and the next token, you receive a paginated response. </p>
   * 			         <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable,
   * 			when you request all the organization conformance packs. </p>
   * 			         <p>Only a master account can call this API.</p>
   *          </note>
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
   *             <p>When you specify the limit and the next token, you receive a paginated response. </p>
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
   * 			         <p>Currently, AWS Config supports only one retention
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
   * <p>Returns the resource counts across accounts and regions that are present in your AWS Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p>
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
   * <p>Returns the evaluation results for the specified AWS Config
   * 			rule. The results indicate which AWS resources were evaluated by the
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
   * <p>Returns the evaluation results for the specified AWS resource.
   * 			The results indicate which AWS Config rules were used to evaluate
   * 			the resource, when each rule was last used, and whether the resource
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
   * <p>Returns the number of AWS Config rules that are compliant and
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
   * <p>Returns compliance details of a conformance pack for all AWS resources that are monitered by conformance pack.</p>
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
   * <p>Returns detailed status for each member account within an organization for a given organization config rule.</p>
   * 		       <note>
   *             <p>Only a master account can call this API.</p>
   *          </note>
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
   * 		       <p>Only a master account can call this API.</p>
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
   * <p>List the tags for AWS Config resource.</p>
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
   * <p>Creates or updates a conformance pack. A conformance pack is a collection of AWS Config rules that can be easily deployed in an account and a region and across AWS Organization.</p>
   * 		       <p>This API creates a service linked role <code>AWSServiceRoleForConfigConforms</code> in your account.
   * 		The service linked role is created only when the role does not exist in your account. AWS Config verifies the existence of role with <code>GetRole</code> action.</p>
   * 		       <note>
   *             <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both.
   * 			If you provide both AWS Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p>
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
   * <p>Used by an AWS Lambda function to deliver evaluation results to
   * 			AWS Config. This action is required in every AWS Lambda function
   * 			that is invoked by an AWS Config rule.</p>
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
   * <p>Adds or updates the remediation configuration with a specific AWS Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the AWS Config rule.
   * 		The AWS Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. </p>
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
   * 			This API adds a new exception or updates an exisiting exception for a specific resource with a specific AWS Config rule. </p>
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
   * 			The configuration state of a resource is represented in AWS Config as Configuration Items.
   * 			Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing AWS Config APIs. </p>
   * 		       <note>
   *             <p>The custom resource type must be registered with AWS CloudFormation. This API accepts the configuration item registered with AWS CloudFormation.</p>
   * 			         <p>When you call this API, AWS Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource.
   * 				</p>
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
   * <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p>
   * 		       <p>For more information about query components, see the
   * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
   *                <b>Query Components</b>
   *             </a> section in the AWS Config Developer Guide.</p>
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
   * <p>Starts recording configurations of the AWS resources you have
   * 			selected to record in your AWS account.</p>
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
   * <p>Runs an on-demand remediation for the specified AWS Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p>
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
   * <p>Stops recording configurations of the AWS resources you have selected to record in your AWS account.</p>
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
