// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { ConfigServiceClient, ConfigServiceClientConfig } from "./ConfigServiceClient";

const commands = {
  BatchGetAggregateResourceConfigCommand,
  BatchGetResourceConfigCommand,
  DeleteAggregationAuthorizationCommand,
  DeleteConfigRuleCommand,
  DeleteConfigurationAggregatorCommand,
  DeleteConfigurationRecorderCommand,
  DeleteConformancePackCommand,
  DeleteDeliveryChannelCommand,
  DeleteEvaluationResultsCommand,
  DeleteOrganizationConfigRuleCommand,
  DeleteOrganizationConformancePackCommand,
  DeletePendingAggregationRequestCommand,
  DeleteRemediationConfigurationCommand,
  DeleteRemediationExceptionsCommand,
  DeleteResourceConfigCommand,
  DeleteRetentionConfigurationCommand,
  DeleteStoredQueryCommand,
  DeliverConfigSnapshotCommand,
  DescribeAggregateComplianceByConfigRulesCommand,
  DescribeAggregateComplianceByConformancePacksCommand,
  DescribeAggregationAuthorizationsCommand,
  DescribeComplianceByConfigRuleCommand,
  DescribeComplianceByResourceCommand,
  DescribeConfigRuleEvaluationStatusCommand,
  DescribeConfigRulesCommand,
  DescribeConfigurationAggregatorsCommand,
  DescribeConfigurationAggregatorSourcesStatusCommand,
  DescribeConfigurationRecordersCommand,
  DescribeConfigurationRecorderStatusCommand,
  DescribeConformancePackComplianceCommand,
  DescribeConformancePacksCommand,
  DescribeConformancePackStatusCommand,
  DescribeDeliveryChannelsCommand,
  DescribeDeliveryChannelStatusCommand,
  DescribeOrganizationConfigRulesCommand,
  DescribeOrganizationConfigRuleStatusesCommand,
  DescribeOrganizationConformancePacksCommand,
  DescribeOrganizationConformancePackStatusesCommand,
  DescribePendingAggregationRequestsCommand,
  DescribeRemediationConfigurationsCommand,
  DescribeRemediationExceptionsCommand,
  DescribeRemediationExecutionStatusCommand,
  DescribeRetentionConfigurationsCommand,
  GetAggregateComplianceDetailsByConfigRuleCommand,
  GetAggregateConfigRuleComplianceSummaryCommand,
  GetAggregateConformancePackComplianceSummaryCommand,
  GetAggregateDiscoveredResourceCountsCommand,
  GetAggregateResourceConfigCommand,
  GetComplianceDetailsByConfigRuleCommand,
  GetComplianceDetailsByResourceCommand,
  GetComplianceSummaryByConfigRuleCommand,
  GetComplianceSummaryByResourceTypeCommand,
  GetConformancePackComplianceDetailsCommand,
  GetConformancePackComplianceSummaryCommand,
  GetCustomRulePolicyCommand,
  GetDiscoveredResourceCountsCommand,
  GetOrganizationConfigRuleDetailedStatusCommand,
  GetOrganizationConformancePackDetailedStatusCommand,
  GetOrganizationCustomRulePolicyCommand,
  GetResourceConfigHistoryCommand,
  GetResourceEvaluationSummaryCommand,
  GetStoredQueryCommand,
  ListAggregateDiscoveredResourcesCommand,
  ListConformancePackComplianceScoresCommand,
  ListDiscoveredResourcesCommand,
  ListResourceEvaluationsCommand,
  ListStoredQueriesCommand,
  ListTagsForResourceCommand,
  PutAggregationAuthorizationCommand,
  PutConfigRuleCommand,
  PutConfigurationAggregatorCommand,
  PutConfigurationRecorderCommand,
  PutConformancePackCommand,
  PutDeliveryChannelCommand,
  PutEvaluationsCommand,
  PutExternalEvaluationCommand,
  PutOrganizationConfigRuleCommand,
  PutOrganizationConformancePackCommand,
  PutRemediationConfigurationsCommand,
  PutRemediationExceptionsCommand,
  PutResourceConfigCommand,
  PutRetentionConfigurationCommand,
  PutStoredQueryCommand,
  SelectAggregateResourceConfigCommand,
  SelectResourceConfigCommand,
  StartConfigRulesEvaluationCommand,
  StartConfigurationRecorderCommand,
  StartRemediationExecutionCommand,
  StartResourceEvaluationCommand,
  StopConfigurationRecorderCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface ConfigService {
  /**
   * @see {@link BatchGetAggregateResourceConfigCommand}
   */
  batchGetAggregateResourceConfig(
    args: BatchGetAggregateResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetAggregateResourceConfigCommandOutput>;
  batchGetAggregateResourceConfig(
    args: BatchGetAggregateResourceConfigCommandInput,
    cb: (err: any, data?: BatchGetAggregateResourceConfigCommandOutput) => void
  ): void;
  batchGetAggregateResourceConfig(
    args: BatchGetAggregateResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetAggregateResourceConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetResourceConfigCommand}
   */
  batchGetResourceConfig(
    args: BatchGetResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetResourceConfigCommandOutput>;
  batchGetResourceConfig(
    args: BatchGetResourceConfigCommandInput,
    cb: (err: any, data?: BatchGetResourceConfigCommandOutput) => void
  ): void;
  batchGetResourceConfig(
    args: BatchGetResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetResourceConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAggregationAuthorizationCommand}
   */
  deleteAggregationAuthorization(
    args: DeleteAggregationAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAggregationAuthorizationCommandOutput>;
  deleteAggregationAuthorization(
    args: DeleteAggregationAuthorizationCommandInput,
    cb: (err: any, data?: DeleteAggregationAuthorizationCommandOutput) => void
  ): void;
  deleteAggregationAuthorization(
    args: DeleteAggregationAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAggregationAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigRuleCommand}
   */
  deleteConfigRule(
    args: DeleteConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigRuleCommandOutput>;
  deleteConfigRule(
    args: DeleteConfigRuleCommandInput,
    cb: (err: any, data?: DeleteConfigRuleCommandOutput) => void
  ): void;
  deleteConfigRule(
    args: DeleteConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationAggregatorCommand}
   */
  deleteConfigurationAggregator(
    args: DeleteConfigurationAggregatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationAggregatorCommandOutput>;
  deleteConfigurationAggregator(
    args: DeleteConfigurationAggregatorCommandInput,
    cb: (err: any, data?: DeleteConfigurationAggregatorCommandOutput) => void
  ): void;
  deleteConfigurationAggregator(
    args: DeleteConfigurationAggregatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationAggregatorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationRecorderCommand}
   */
  deleteConfigurationRecorder(
    args: DeleteConfigurationRecorderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationRecorderCommandOutput>;
  deleteConfigurationRecorder(
    args: DeleteConfigurationRecorderCommandInput,
    cb: (err: any, data?: DeleteConfigurationRecorderCommandOutput) => void
  ): void;
  deleteConfigurationRecorder(
    args: DeleteConfigurationRecorderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationRecorderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConformancePackCommand}
   */
  deleteConformancePack(
    args: DeleteConformancePackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConformancePackCommandOutput>;
  deleteConformancePack(
    args: DeleteConformancePackCommandInput,
    cb: (err: any, data?: DeleteConformancePackCommandOutput) => void
  ): void;
  deleteConformancePack(
    args: DeleteConformancePackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConformancePackCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeliveryChannelCommand}
   */
  deleteDeliveryChannel(
    args: DeleteDeliveryChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeliveryChannelCommandOutput>;
  deleteDeliveryChannel(
    args: DeleteDeliveryChannelCommandInput,
    cb: (err: any, data?: DeleteDeliveryChannelCommandOutput) => void
  ): void;
  deleteDeliveryChannel(
    args: DeleteDeliveryChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeliveryChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEvaluationResultsCommand}
   */
  deleteEvaluationResults(
    args: DeleteEvaluationResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEvaluationResultsCommandOutput>;
  deleteEvaluationResults(
    args: DeleteEvaluationResultsCommandInput,
    cb: (err: any, data?: DeleteEvaluationResultsCommandOutput) => void
  ): void;
  deleteEvaluationResults(
    args: DeleteEvaluationResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEvaluationResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOrganizationConfigRuleCommand}
   */
  deleteOrganizationConfigRule(
    args: DeleteOrganizationConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOrganizationConfigRuleCommandOutput>;
  deleteOrganizationConfigRule(
    args: DeleteOrganizationConfigRuleCommandInput,
    cb: (err: any, data?: DeleteOrganizationConfigRuleCommandOutput) => void
  ): void;
  deleteOrganizationConfigRule(
    args: DeleteOrganizationConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrganizationConfigRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOrganizationConformancePackCommand}
   */
  deleteOrganizationConformancePack(
    args: DeleteOrganizationConformancePackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOrganizationConformancePackCommandOutput>;
  deleteOrganizationConformancePack(
    args: DeleteOrganizationConformancePackCommandInput,
    cb: (err: any, data?: DeleteOrganizationConformancePackCommandOutput) => void
  ): void;
  deleteOrganizationConformancePack(
    args: DeleteOrganizationConformancePackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrganizationConformancePackCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePendingAggregationRequestCommand}
   */
  deletePendingAggregationRequest(
    args: DeletePendingAggregationRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePendingAggregationRequestCommandOutput>;
  deletePendingAggregationRequest(
    args: DeletePendingAggregationRequestCommandInput,
    cb: (err: any, data?: DeletePendingAggregationRequestCommandOutput) => void
  ): void;
  deletePendingAggregationRequest(
    args: DeletePendingAggregationRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePendingAggregationRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRemediationConfigurationCommand}
   */
  deleteRemediationConfiguration(
    args: DeleteRemediationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRemediationConfigurationCommandOutput>;
  deleteRemediationConfiguration(
    args: DeleteRemediationConfigurationCommandInput,
    cb: (err: any, data?: DeleteRemediationConfigurationCommandOutput) => void
  ): void;
  deleteRemediationConfiguration(
    args: DeleteRemediationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRemediationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRemediationExceptionsCommand}
   */
  deleteRemediationExceptions(
    args: DeleteRemediationExceptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRemediationExceptionsCommandOutput>;
  deleteRemediationExceptions(
    args: DeleteRemediationExceptionsCommandInput,
    cb: (err: any, data?: DeleteRemediationExceptionsCommandOutput) => void
  ): void;
  deleteRemediationExceptions(
    args: DeleteRemediationExceptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRemediationExceptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceConfigCommand}
   */
  deleteResourceConfig(
    args: DeleteResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceConfigCommandOutput>;
  deleteResourceConfig(
    args: DeleteResourceConfigCommandInput,
    cb: (err: any, data?: DeleteResourceConfigCommandOutput) => void
  ): void;
  deleteResourceConfig(
    args: DeleteResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRetentionConfigurationCommand}
   */
  deleteRetentionConfiguration(
    args: DeleteRetentionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRetentionConfigurationCommandOutput>;
  deleteRetentionConfiguration(
    args: DeleteRetentionConfigurationCommandInput,
    cb: (err: any, data?: DeleteRetentionConfigurationCommandOutput) => void
  ): void;
  deleteRetentionConfiguration(
    args: DeleteRetentionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRetentionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStoredQueryCommand}
   */
  deleteStoredQuery(
    args: DeleteStoredQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStoredQueryCommandOutput>;
  deleteStoredQuery(
    args: DeleteStoredQueryCommandInput,
    cb: (err: any, data?: DeleteStoredQueryCommandOutput) => void
  ): void;
  deleteStoredQuery(
    args: DeleteStoredQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStoredQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeliverConfigSnapshotCommand}
   */
  deliverConfigSnapshot(
    args: DeliverConfigSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeliverConfigSnapshotCommandOutput>;
  deliverConfigSnapshot(
    args: DeliverConfigSnapshotCommandInput,
    cb: (err: any, data?: DeliverConfigSnapshotCommandOutput) => void
  ): void;
  deliverConfigSnapshot(
    args: DeliverConfigSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeliverConfigSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAggregateComplianceByConfigRulesCommand}
   */
  describeAggregateComplianceByConfigRules(
    args: DescribeAggregateComplianceByConfigRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAggregateComplianceByConfigRulesCommandOutput>;
  describeAggregateComplianceByConfigRules(
    args: DescribeAggregateComplianceByConfigRulesCommandInput,
    cb: (err: any, data?: DescribeAggregateComplianceByConfigRulesCommandOutput) => void
  ): void;
  describeAggregateComplianceByConfigRules(
    args: DescribeAggregateComplianceByConfigRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAggregateComplianceByConfigRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAggregateComplianceByConformancePacksCommand}
   */
  describeAggregateComplianceByConformancePacks(
    args: DescribeAggregateComplianceByConformancePacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAggregateComplianceByConformancePacksCommandOutput>;
  describeAggregateComplianceByConformancePacks(
    args: DescribeAggregateComplianceByConformancePacksCommandInput,
    cb: (err: any, data?: DescribeAggregateComplianceByConformancePacksCommandOutput) => void
  ): void;
  describeAggregateComplianceByConformancePacks(
    args: DescribeAggregateComplianceByConformancePacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAggregateComplianceByConformancePacksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAggregationAuthorizationsCommand}
   */
  describeAggregationAuthorizations(
    args: DescribeAggregationAuthorizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAggregationAuthorizationsCommandOutput>;
  describeAggregationAuthorizations(
    args: DescribeAggregationAuthorizationsCommandInput,
    cb: (err: any, data?: DescribeAggregationAuthorizationsCommandOutput) => void
  ): void;
  describeAggregationAuthorizations(
    args: DescribeAggregationAuthorizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAggregationAuthorizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeComplianceByConfigRuleCommand}
   */
  describeComplianceByConfigRule(
    args: DescribeComplianceByConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComplianceByConfigRuleCommandOutput>;
  describeComplianceByConfigRule(
    args: DescribeComplianceByConfigRuleCommandInput,
    cb: (err: any, data?: DescribeComplianceByConfigRuleCommandOutput) => void
  ): void;
  describeComplianceByConfigRule(
    args: DescribeComplianceByConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComplianceByConfigRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeComplianceByResourceCommand}
   */
  describeComplianceByResource(
    args: DescribeComplianceByResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComplianceByResourceCommandOutput>;
  describeComplianceByResource(
    args: DescribeComplianceByResourceCommandInput,
    cb: (err: any, data?: DescribeComplianceByResourceCommandOutput) => void
  ): void;
  describeComplianceByResource(
    args: DescribeComplianceByResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComplianceByResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigRuleEvaluationStatusCommand}
   */
  describeConfigRuleEvaluationStatus(
    args: DescribeConfigRuleEvaluationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigRuleEvaluationStatusCommandOutput>;
  describeConfigRuleEvaluationStatus(
    args: DescribeConfigRuleEvaluationStatusCommandInput,
    cb: (err: any, data?: DescribeConfigRuleEvaluationStatusCommandOutput) => void
  ): void;
  describeConfigRuleEvaluationStatus(
    args: DescribeConfigRuleEvaluationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigRuleEvaluationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigRulesCommand}
   */
  describeConfigRules(
    args: DescribeConfigRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigRulesCommandOutput>;
  describeConfigRules(
    args: DescribeConfigRulesCommandInput,
    cb: (err: any, data?: DescribeConfigRulesCommandOutput) => void
  ): void;
  describeConfigRules(
    args: DescribeConfigRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationAggregatorsCommand}
   */
  describeConfigurationAggregators(
    args: DescribeConfigurationAggregatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationAggregatorsCommandOutput>;
  describeConfigurationAggregators(
    args: DescribeConfigurationAggregatorsCommandInput,
    cb: (err: any, data?: DescribeConfigurationAggregatorsCommandOutput) => void
  ): void;
  describeConfigurationAggregators(
    args: DescribeConfigurationAggregatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationAggregatorsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationAggregatorSourcesStatusCommand}
   */
  describeConfigurationAggregatorSourcesStatus(
    args: DescribeConfigurationAggregatorSourcesStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationAggregatorSourcesStatusCommandOutput>;
  describeConfigurationAggregatorSourcesStatus(
    args: DescribeConfigurationAggregatorSourcesStatusCommandInput,
    cb: (err: any, data?: DescribeConfigurationAggregatorSourcesStatusCommandOutput) => void
  ): void;
  describeConfigurationAggregatorSourcesStatus(
    args: DescribeConfigurationAggregatorSourcesStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationAggregatorSourcesStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationRecordersCommand}
   */
  describeConfigurationRecorders(
    args: DescribeConfigurationRecordersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationRecordersCommandOutput>;
  describeConfigurationRecorders(
    args: DescribeConfigurationRecordersCommandInput,
    cb: (err: any, data?: DescribeConfigurationRecordersCommandOutput) => void
  ): void;
  describeConfigurationRecorders(
    args: DescribeConfigurationRecordersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationRecordersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationRecorderStatusCommand}
   */
  describeConfigurationRecorderStatus(
    args: DescribeConfigurationRecorderStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationRecorderStatusCommandOutput>;
  describeConfigurationRecorderStatus(
    args: DescribeConfigurationRecorderStatusCommandInput,
    cb: (err: any, data?: DescribeConfigurationRecorderStatusCommandOutput) => void
  ): void;
  describeConfigurationRecorderStatus(
    args: DescribeConfigurationRecorderStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationRecorderStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConformancePackComplianceCommand}
   */
  describeConformancePackCompliance(
    args: DescribeConformancePackComplianceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConformancePackComplianceCommandOutput>;
  describeConformancePackCompliance(
    args: DescribeConformancePackComplianceCommandInput,
    cb: (err: any, data?: DescribeConformancePackComplianceCommandOutput) => void
  ): void;
  describeConformancePackCompliance(
    args: DescribeConformancePackComplianceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConformancePackComplianceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConformancePacksCommand}
   */
  describeConformancePacks(
    args: DescribeConformancePacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConformancePacksCommandOutput>;
  describeConformancePacks(
    args: DescribeConformancePacksCommandInput,
    cb: (err: any, data?: DescribeConformancePacksCommandOutput) => void
  ): void;
  describeConformancePacks(
    args: DescribeConformancePacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConformancePacksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConformancePackStatusCommand}
   */
  describeConformancePackStatus(
    args: DescribeConformancePackStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConformancePackStatusCommandOutput>;
  describeConformancePackStatus(
    args: DescribeConformancePackStatusCommandInput,
    cb: (err: any, data?: DescribeConformancePackStatusCommandOutput) => void
  ): void;
  describeConformancePackStatus(
    args: DescribeConformancePackStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConformancePackStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeliveryChannelsCommand}
   */
  describeDeliveryChannels(
    args: DescribeDeliveryChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeliveryChannelsCommandOutput>;
  describeDeliveryChannels(
    args: DescribeDeliveryChannelsCommandInput,
    cb: (err: any, data?: DescribeDeliveryChannelsCommandOutput) => void
  ): void;
  describeDeliveryChannels(
    args: DescribeDeliveryChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeliveryChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeliveryChannelStatusCommand}
   */
  describeDeliveryChannelStatus(
    args: DescribeDeliveryChannelStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeliveryChannelStatusCommandOutput>;
  describeDeliveryChannelStatus(
    args: DescribeDeliveryChannelStatusCommandInput,
    cb: (err: any, data?: DescribeDeliveryChannelStatusCommandOutput) => void
  ): void;
  describeDeliveryChannelStatus(
    args: DescribeDeliveryChannelStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeliveryChannelStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationConfigRulesCommand}
   */
  describeOrganizationConfigRules(
    args: DescribeOrganizationConfigRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConfigRulesCommandOutput>;
  describeOrganizationConfigRules(
    args: DescribeOrganizationConfigRulesCommandInput,
    cb: (err: any, data?: DescribeOrganizationConfigRulesCommandOutput) => void
  ): void;
  describeOrganizationConfigRules(
    args: DescribeOrganizationConfigRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConfigRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationConfigRuleStatusesCommand}
   */
  describeOrganizationConfigRuleStatuses(
    args: DescribeOrganizationConfigRuleStatusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConfigRuleStatusesCommandOutput>;
  describeOrganizationConfigRuleStatuses(
    args: DescribeOrganizationConfigRuleStatusesCommandInput,
    cb: (err: any, data?: DescribeOrganizationConfigRuleStatusesCommandOutput) => void
  ): void;
  describeOrganizationConfigRuleStatuses(
    args: DescribeOrganizationConfigRuleStatusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConfigRuleStatusesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationConformancePacksCommand}
   */
  describeOrganizationConformancePacks(
    args: DescribeOrganizationConformancePacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConformancePacksCommandOutput>;
  describeOrganizationConformancePacks(
    args: DescribeOrganizationConformancePacksCommandInput,
    cb: (err: any, data?: DescribeOrganizationConformancePacksCommandOutput) => void
  ): void;
  describeOrganizationConformancePacks(
    args: DescribeOrganizationConformancePacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConformancePacksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationConformancePackStatusesCommand}
   */
  describeOrganizationConformancePackStatuses(
    args: DescribeOrganizationConformancePackStatusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConformancePackStatusesCommandOutput>;
  describeOrganizationConformancePackStatuses(
    args: DescribeOrganizationConformancePackStatusesCommandInput,
    cb: (err: any, data?: DescribeOrganizationConformancePackStatusesCommandOutput) => void
  ): void;
  describeOrganizationConformancePackStatuses(
    args: DescribeOrganizationConformancePackStatusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConformancePackStatusesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePendingAggregationRequestsCommand}
   */
  describePendingAggregationRequests(
    args: DescribePendingAggregationRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePendingAggregationRequestsCommandOutput>;
  describePendingAggregationRequests(
    args: DescribePendingAggregationRequestsCommandInput,
    cb: (err: any, data?: DescribePendingAggregationRequestsCommandOutput) => void
  ): void;
  describePendingAggregationRequests(
    args: DescribePendingAggregationRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePendingAggregationRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRemediationConfigurationsCommand}
   */
  describeRemediationConfigurations(
    args: DescribeRemediationConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRemediationConfigurationsCommandOutput>;
  describeRemediationConfigurations(
    args: DescribeRemediationConfigurationsCommandInput,
    cb: (err: any, data?: DescribeRemediationConfigurationsCommandOutput) => void
  ): void;
  describeRemediationConfigurations(
    args: DescribeRemediationConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRemediationConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRemediationExceptionsCommand}
   */
  describeRemediationExceptions(
    args: DescribeRemediationExceptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRemediationExceptionsCommandOutput>;
  describeRemediationExceptions(
    args: DescribeRemediationExceptionsCommandInput,
    cb: (err: any, data?: DescribeRemediationExceptionsCommandOutput) => void
  ): void;
  describeRemediationExceptions(
    args: DescribeRemediationExceptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRemediationExceptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRemediationExecutionStatusCommand}
   */
  describeRemediationExecutionStatus(
    args: DescribeRemediationExecutionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRemediationExecutionStatusCommandOutput>;
  describeRemediationExecutionStatus(
    args: DescribeRemediationExecutionStatusCommandInput,
    cb: (err: any, data?: DescribeRemediationExecutionStatusCommandOutput) => void
  ): void;
  describeRemediationExecutionStatus(
    args: DescribeRemediationExecutionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRemediationExecutionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRetentionConfigurationsCommand}
   */
  describeRetentionConfigurations(
    args: DescribeRetentionConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRetentionConfigurationsCommandOutput>;
  describeRetentionConfigurations(
    args: DescribeRetentionConfigurationsCommandInput,
    cb: (err: any, data?: DescribeRetentionConfigurationsCommandOutput) => void
  ): void;
  describeRetentionConfigurations(
    args: DescribeRetentionConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRetentionConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAggregateComplianceDetailsByConfigRuleCommand}
   */
  getAggregateComplianceDetailsByConfigRule(
    args: GetAggregateComplianceDetailsByConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAggregateComplianceDetailsByConfigRuleCommandOutput>;
  getAggregateComplianceDetailsByConfigRule(
    args: GetAggregateComplianceDetailsByConfigRuleCommandInput,
    cb: (err: any, data?: GetAggregateComplianceDetailsByConfigRuleCommandOutput) => void
  ): void;
  getAggregateComplianceDetailsByConfigRule(
    args: GetAggregateComplianceDetailsByConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAggregateComplianceDetailsByConfigRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAggregateConfigRuleComplianceSummaryCommand}
   */
  getAggregateConfigRuleComplianceSummary(
    args: GetAggregateConfigRuleComplianceSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAggregateConfigRuleComplianceSummaryCommandOutput>;
  getAggregateConfigRuleComplianceSummary(
    args: GetAggregateConfigRuleComplianceSummaryCommandInput,
    cb: (err: any, data?: GetAggregateConfigRuleComplianceSummaryCommandOutput) => void
  ): void;
  getAggregateConfigRuleComplianceSummary(
    args: GetAggregateConfigRuleComplianceSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAggregateConfigRuleComplianceSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAggregateConformancePackComplianceSummaryCommand}
   */
  getAggregateConformancePackComplianceSummary(
    args: GetAggregateConformancePackComplianceSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAggregateConformancePackComplianceSummaryCommandOutput>;
  getAggregateConformancePackComplianceSummary(
    args: GetAggregateConformancePackComplianceSummaryCommandInput,
    cb: (err: any, data?: GetAggregateConformancePackComplianceSummaryCommandOutput) => void
  ): void;
  getAggregateConformancePackComplianceSummary(
    args: GetAggregateConformancePackComplianceSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAggregateConformancePackComplianceSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAggregateDiscoveredResourceCountsCommand}
   */
  getAggregateDiscoveredResourceCounts(
    args: GetAggregateDiscoveredResourceCountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAggregateDiscoveredResourceCountsCommandOutput>;
  getAggregateDiscoveredResourceCounts(
    args: GetAggregateDiscoveredResourceCountsCommandInput,
    cb: (err: any, data?: GetAggregateDiscoveredResourceCountsCommandOutput) => void
  ): void;
  getAggregateDiscoveredResourceCounts(
    args: GetAggregateDiscoveredResourceCountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAggregateDiscoveredResourceCountsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAggregateResourceConfigCommand}
   */
  getAggregateResourceConfig(
    args: GetAggregateResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAggregateResourceConfigCommandOutput>;
  getAggregateResourceConfig(
    args: GetAggregateResourceConfigCommandInput,
    cb: (err: any, data?: GetAggregateResourceConfigCommandOutput) => void
  ): void;
  getAggregateResourceConfig(
    args: GetAggregateResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAggregateResourceConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComplianceDetailsByConfigRuleCommand}
   */
  getComplianceDetailsByConfigRule(
    args: GetComplianceDetailsByConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceDetailsByConfigRuleCommandOutput>;
  getComplianceDetailsByConfigRule(
    args: GetComplianceDetailsByConfigRuleCommandInput,
    cb: (err: any, data?: GetComplianceDetailsByConfigRuleCommandOutput) => void
  ): void;
  getComplianceDetailsByConfigRule(
    args: GetComplianceDetailsByConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceDetailsByConfigRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComplianceDetailsByResourceCommand}
   */
  getComplianceDetailsByResource(
    args: GetComplianceDetailsByResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceDetailsByResourceCommandOutput>;
  getComplianceDetailsByResource(
    args: GetComplianceDetailsByResourceCommandInput,
    cb: (err: any, data?: GetComplianceDetailsByResourceCommandOutput) => void
  ): void;
  getComplianceDetailsByResource(
    args: GetComplianceDetailsByResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceDetailsByResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComplianceSummaryByConfigRuleCommand}
   */
  getComplianceSummaryByConfigRule(
    args: GetComplianceSummaryByConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceSummaryByConfigRuleCommandOutput>;
  getComplianceSummaryByConfigRule(
    args: GetComplianceSummaryByConfigRuleCommandInput,
    cb: (err: any, data?: GetComplianceSummaryByConfigRuleCommandOutput) => void
  ): void;
  getComplianceSummaryByConfigRule(
    args: GetComplianceSummaryByConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceSummaryByConfigRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComplianceSummaryByResourceTypeCommand}
   */
  getComplianceSummaryByResourceType(
    args: GetComplianceSummaryByResourceTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceSummaryByResourceTypeCommandOutput>;
  getComplianceSummaryByResourceType(
    args: GetComplianceSummaryByResourceTypeCommandInput,
    cb: (err: any, data?: GetComplianceSummaryByResourceTypeCommandOutput) => void
  ): void;
  getComplianceSummaryByResourceType(
    args: GetComplianceSummaryByResourceTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceSummaryByResourceTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConformancePackComplianceDetailsCommand}
   */
  getConformancePackComplianceDetails(
    args: GetConformancePackComplianceDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConformancePackComplianceDetailsCommandOutput>;
  getConformancePackComplianceDetails(
    args: GetConformancePackComplianceDetailsCommandInput,
    cb: (err: any, data?: GetConformancePackComplianceDetailsCommandOutput) => void
  ): void;
  getConformancePackComplianceDetails(
    args: GetConformancePackComplianceDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConformancePackComplianceDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConformancePackComplianceSummaryCommand}
   */
  getConformancePackComplianceSummary(
    args: GetConformancePackComplianceSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConformancePackComplianceSummaryCommandOutput>;
  getConformancePackComplianceSummary(
    args: GetConformancePackComplianceSummaryCommandInput,
    cb: (err: any, data?: GetConformancePackComplianceSummaryCommandOutput) => void
  ): void;
  getConformancePackComplianceSummary(
    args: GetConformancePackComplianceSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConformancePackComplianceSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomRulePolicyCommand}
   */
  getCustomRulePolicy(
    args: GetCustomRulePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomRulePolicyCommandOutput>;
  getCustomRulePolicy(
    args: GetCustomRulePolicyCommandInput,
    cb: (err: any, data?: GetCustomRulePolicyCommandOutput) => void
  ): void;
  getCustomRulePolicy(
    args: GetCustomRulePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomRulePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDiscoveredResourceCountsCommand}
   */
  getDiscoveredResourceCounts(
    args: GetDiscoveredResourceCountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDiscoveredResourceCountsCommandOutput>;
  getDiscoveredResourceCounts(
    args: GetDiscoveredResourceCountsCommandInput,
    cb: (err: any, data?: GetDiscoveredResourceCountsCommandOutput) => void
  ): void;
  getDiscoveredResourceCounts(
    args: GetDiscoveredResourceCountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDiscoveredResourceCountsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrganizationConfigRuleDetailedStatusCommand}
   */
  getOrganizationConfigRuleDetailedStatus(
    args: GetOrganizationConfigRuleDetailedStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationConfigRuleDetailedStatusCommandOutput>;
  getOrganizationConfigRuleDetailedStatus(
    args: GetOrganizationConfigRuleDetailedStatusCommandInput,
    cb: (err: any, data?: GetOrganizationConfigRuleDetailedStatusCommandOutput) => void
  ): void;
  getOrganizationConfigRuleDetailedStatus(
    args: GetOrganizationConfigRuleDetailedStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationConfigRuleDetailedStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrganizationConformancePackDetailedStatusCommand}
   */
  getOrganizationConformancePackDetailedStatus(
    args: GetOrganizationConformancePackDetailedStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationConformancePackDetailedStatusCommandOutput>;
  getOrganizationConformancePackDetailedStatus(
    args: GetOrganizationConformancePackDetailedStatusCommandInput,
    cb: (err: any, data?: GetOrganizationConformancePackDetailedStatusCommandOutput) => void
  ): void;
  getOrganizationConformancePackDetailedStatus(
    args: GetOrganizationConformancePackDetailedStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationConformancePackDetailedStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrganizationCustomRulePolicyCommand}
   */
  getOrganizationCustomRulePolicy(
    args: GetOrganizationCustomRulePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationCustomRulePolicyCommandOutput>;
  getOrganizationCustomRulePolicy(
    args: GetOrganizationCustomRulePolicyCommandInput,
    cb: (err: any, data?: GetOrganizationCustomRulePolicyCommandOutput) => void
  ): void;
  getOrganizationCustomRulePolicy(
    args: GetOrganizationCustomRulePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationCustomRulePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceConfigHistoryCommand}
   */
  getResourceConfigHistory(
    args: GetResourceConfigHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceConfigHistoryCommandOutput>;
  getResourceConfigHistory(
    args: GetResourceConfigHistoryCommandInput,
    cb: (err: any, data?: GetResourceConfigHistoryCommandOutput) => void
  ): void;
  getResourceConfigHistory(
    args: GetResourceConfigHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceConfigHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceEvaluationSummaryCommand}
   */
  getResourceEvaluationSummary(
    args: GetResourceEvaluationSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceEvaluationSummaryCommandOutput>;
  getResourceEvaluationSummary(
    args: GetResourceEvaluationSummaryCommandInput,
    cb: (err: any, data?: GetResourceEvaluationSummaryCommandOutput) => void
  ): void;
  getResourceEvaluationSummary(
    args: GetResourceEvaluationSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceEvaluationSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStoredQueryCommand}
   */
  getStoredQuery(
    args: GetStoredQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStoredQueryCommandOutput>;
  getStoredQuery(args: GetStoredQueryCommandInput, cb: (err: any, data?: GetStoredQueryCommandOutput) => void): void;
  getStoredQuery(
    args: GetStoredQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStoredQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAggregateDiscoveredResourcesCommand}
   */
  listAggregateDiscoveredResources(
    args: ListAggregateDiscoveredResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAggregateDiscoveredResourcesCommandOutput>;
  listAggregateDiscoveredResources(
    args: ListAggregateDiscoveredResourcesCommandInput,
    cb: (err: any, data?: ListAggregateDiscoveredResourcesCommandOutput) => void
  ): void;
  listAggregateDiscoveredResources(
    args: ListAggregateDiscoveredResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAggregateDiscoveredResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConformancePackComplianceScoresCommand}
   */
  listConformancePackComplianceScores(
    args: ListConformancePackComplianceScoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConformancePackComplianceScoresCommandOutput>;
  listConformancePackComplianceScores(
    args: ListConformancePackComplianceScoresCommandInput,
    cb: (err: any, data?: ListConformancePackComplianceScoresCommandOutput) => void
  ): void;
  listConformancePackComplianceScores(
    args: ListConformancePackComplianceScoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConformancePackComplianceScoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDiscoveredResourcesCommand}
   */
  listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoveredResourcesCommandOutput>;
  listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): void;
  listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceEvaluationsCommand}
   */
  listResourceEvaluations(
    args: ListResourceEvaluationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceEvaluationsCommandOutput>;
  listResourceEvaluations(
    args: ListResourceEvaluationsCommandInput,
    cb: (err: any, data?: ListResourceEvaluationsCommandOutput) => void
  ): void;
  listResourceEvaluations(
    args: ListResourceEvaluationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceEvaluationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStoredQueriesCommand}
   */
  listStoredQueries(
    args: ListStoredQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStoredQueriesCommandOutput>;
  listStoredQueries(
    args: ListStoredQueriesCommandInput,
    cb: (err: any, data?: ListStoredQueriesCommandOutput) => void
  ): void;
  listStoredQueries(
    args: ListStoredQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStoredQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAggregationAuthorizationCommand}
   */
  putAggregationAuthorization(
    args: PutAggregationAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAggregationAuthorizationCommandOutput>;
  putAggregationAuthorization(
    args: PutAggregationAuthorizationCommandInput,
    cb: (err: any, data?: PutAggregationAuthorizationCommandOutput) => void
  ): void;
  putAggregationAuthorization(
    args: PutAggregationAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAggregationAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigRuleCommand}
   */
  putConfigRule(args: PutConfigRuleCommandInput, options?: __HttpHandlerOptions): Promise<PutConfigRuleCommandOutput>;
  putConfigRule(args: PutConfigRuleCommandInput, cb: (err: any, data?: PutConfigRuleCommandOutput) => void): void;
  putConfigRule(
    args: PutConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationAggregatorCommand}
   */
  putConfigurationAggregator(
    args: PutConfigurationAggregatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationAggregatorCommandOutput>;
  putConfigurationAggregator(
    args: PutConfigurationAggregatorCommandInput,
    cb: (err: any, data?: PutConfigurationAggregatorCommandOutput) => void
  ): void;
  putConfigurationAggregator(
    args: PutConfigurationAggregatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationAggregatorCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationRecorderCommand}
   */
  putConfigurationRecorder(
    args: PutConfigurationRecorderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationRecorderCommandOutput>;
  putConfigurationRecorder(
    args: PutConfigurationRecorderCommandInput,
    cb: (err: any, data?: PutConfigurationRecorderCommandOutput) => void
  ): void;
  putConfigurationRecorder(
    args: PutConfigurationRecorderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationRecorderCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConformancePackCommand}
   */
  putConformancePack(
    args: PutConformancePackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConformancePackCommandOutput>;
  putConformancePack(
    args: PutConformancePackCommandInput,
    cb: (err: any, data?: PutConformancePackCommandOutput) => void
  ): void;
  putConformancePack(
    args: PutConformancePackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConformancePackCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDeliveryChannelCommand}
   */
  putDeliveryChannel(
    args: PutDeliveryChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeliveryChannelCommandOutput>;
  putDeliveryChannel(
    args: PutDeliveryChannelCommandInput,
    cb: (err: any, data?: PutDeliveryChannelCommandOutput) => void
  ): void;
  putDeliveryChannel(
    args: PutDeliveryChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeliveryChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEvaluationsCommand}
   */
  putEvaluations(
    args: PutEvaluationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEvaluationsCommandOutput>;
  putEvaluations(args: PutEvaluationsCommandInput, cb: (err: any, data?: PutEvaluationsCommandOutput) => void): void;
  putEvaluations(
    args: PutEvaluationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEvaluationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutExternalEvaluationCommand}
   */
  putExternalEvaluation(
    args: PutExternalEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutExternalEvaluationCommandOutput>;
  putExternalEvaluation(
    args: PutExternalEvaluationCommandInput,
    cb: (err: any, data?: PutExternalEvaluationCommandOutput) => void
  ): void;
  putExternalEvaluation(
    args: PutExternalEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutExternalEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutOrganizationConfigRuleCommand}
   */
  putOrganizationConfigRule(
    args: PutOrganizationConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutOrganizationConfigRuleCommandOutput>;
  putOrganizationConfigRule(
    args: PutOrganizationConfigRuleCommandInput,
    cb: (err: any, data?: PutOrganizationConfigRuleCommandOutput) => void
  ): void;
  putOrganizationConfigRule(
    args: PutOrganizationConfigRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutOrganizationConfigRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link PutOrganizationConformancePackCommand}
   */
  putOrganizationConformancePack(
    args: PutOrganizationConformancePackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutOrganizationConformancePackCommandOutput>;
  putOrganizationConformancePack(
    args: PutOrganizationConformancePackCommandInput,
    cb: (err: any, data?: PutOrganizationConformancePackCommandOutput) => void
  ): void;
  putOrganizationConformancePack(
    args: PutOrganizationConformancePackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutOrganizationConformancePackCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRemediationConfigurationsCommand}
   */
  putRemediationConfigurations(
    args: PutRemediationConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRemediationConfigurationsCommandOutput>;
  putRemediationConfigurations(
    args: PutRemediationConfigurationsCommandInput,
    cb: (err: any, data?: PutRemediationConfigurationsCommandOutput) => void
  ): void;
  putRemediationConfigurations(
    args: PutRemediationConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRemediationConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRemediationExceptionsCommand}
   */
  putRemediationExceptions(
    args: PutRemediationExceptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRemediationExceptionsCommandOutput>;
  putRemediationExceptions(
    args: PutRemediationExceptionsCommandInput,
    cb: (err: any, data?: PutRemediationExceptionsCommandOutput) => void
  ): void;
  putRemediationExceptions(
    args: PutRemediationExceptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRemediationExceptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourceConfigCommand}
   */
  putResourceConfig(
    args: PutResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourceConfigCommandOutput>;
  putResourceConfig(
    args: PutResourceConfigCommandInput,
    cb: (err: any, data?: PutResourceConfigCommandOutput) => void
  ): void;
  putResourceConfig(
    args: PutResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourceConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRetentionConfigurationCommand}
   */
  putRetentionConfiguration(
    args: PutRetentionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRetentionConfigurationCommandOutput>;
  putRetentionConfiguration(
    args: PutRetentionConfigurationCommandInput,
    cb: (err: any, data?: PutRetentionConfigurationCommandOutput) => void
  ): void;
  putRetentionConfiguration(
    args: PutRetentionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRetentionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutStoredQueryCommand}
   */
  putStoredQuery(
    args: PutStoredQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutStoredQueryCommandOutput>;
  putStoredQuery(args: PutStoredQueryCommandInput, cb: (err: any, data?: PutStoredQueryCommandOutput) => void): void;
  putStoredQuery(
    args: PutStoredQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutStoredQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link SelectAggregateResourceConfigCommand}
   */
  selectAggregateResourceConfig(
    args: SelectAggregateResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SelectAggregateResourceConfigCommandOutput>;
  selectAggregateResourceConfig(
    args: SelectAggregateResourceConfigCommandInput,
    cb: (err: any, data?: SelectAggregateResourceConfigCommandOutput) => void
  ): void;
  selectAggregateResourceConfig(
    args: SelectAggregateResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SelectAggregateResourceConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link SelectResourceConfigCommand}
   */
  selectResourceConfig(
    args: SelectResourceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SelectResourceConfigCommandOutput>;
  selectResourceConfig(
    args: SelectResourceConfigCommandInput,
    cb: (err: any, data?: SelectResourceConfigCommandOutput) => void
  ): void;
  selectResourceConfig(
    args: SelectResourceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SelectResourceConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link StartConfigRulesEvaluationCommand}
   */
  startConfigRulesEvaluation(
    args: StartConfigRulesEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartConfigRulesEvaluationCommandOutput>;
  startConfigRulesEvaluation(
    args: StartConfigRulesEvaluationCommandInput,
    cb: (err: any, data?: StartConfigRulesEvaluationCommandOutput) => void
  ): void;
  startConfigRulesEvaluation(
    args: StartConfigRulesEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartConfigRulesEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartConfigurationRecorderCommand}
   */
  startConfigurationRecorder(
    args: StartConfigurationRecorderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartConfigurationRecorderCommandOutput>;
  startConfigurationRecorder(
    args: StartConfigurationRecorderCommandInput,
    cb: (err: any, data?: StartConfigurationRecorderCommandOutput) => void
  ): void;
  startConfigurationRecorder(
    args: StartConfigurationRecorderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartConfigurationRecorderCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRemediationExecutionCommand}
   */
  startRemediationExecution(
    args: StartRemediationExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRemediationExecutionCommandOutput>;
  startRemediationExecution(
    args: StartRemediationExecutionCommandInput,
    cb: (err: any, data?: StartRemediationExecutionCommandOutput) => void
  ): void;
  startRemediationExecution(
    args: StartRemediationExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRemediationExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartResourceEvaluationCommand}
   */
  startResourceEvaluation(
    args: StartResourceEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartResourceEvaluationCommandOutput>;
  startResourceEvaluation(
    args: StartResourceEvaluationCommandInput,
    cb: (err: any, data?: StartResourceEvaluationCommandOutput) => void
  ): void;
  startResourceEvaluation(
    args: StartResourceEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartResourceEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopConfigurationRecorderCommand}
   */
  stopConfigurationRecorder(
    args: StopConfigurationRecorderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopConfigurationRecorderCommandOutput>;
  stopConfigurationRecorder(
    args: StopConfigurationRecorderCommandInput,
    cb: (err: any, data?: StopConfigurationRecorderCommandOutput) => void
  ): void;
  stopConfigurationRecorder(
    args: StopConfigurationRecorderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopConfigurationRecorderCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Config</fullname>
 *          <p>Config provides a way to keep track of the configurations
 * 			of all the Amazon Web Services resources associated with your Amazon Web Services account. You can
 * 			use Config to get the current and historical configurations of
 * 			each Amazon Web Services resource and also to get information about the relationship
 * 			between the resources. An Amazon Web Services resource can be an Amazon Compute
 * 			Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an
 * 			elastic network Interface (ENI), or a security group. For a complete
 * 			list of resources currently supported by Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Amazon Web Services resources</a>.</p>
 *          <p>You can access and manage Config through the Amazon Web Services Management
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
export class ConfigService extends ConfigServiceClient implements ConfigService {}
createAggregatedClient(commands, ConfigService);
