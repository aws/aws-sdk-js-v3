import { BatchGetAggregateResourceConfigOutput } from "./BatchGetAggregateResourceConfigOutput";
import { BatchGetResourceConfigOutput } from "./BatchGetResourceConfigOutput";
import { DeleteAggregationAuthorizationOutput } from "./DeleteAggregationAuthorizationOutput";
import { DeleteConfigRuleOutput } from "./DeleteConfigRuleOutput";
import { DeleteConfigurationAggregatorOutput } from "./DeleteConfigurationAggregatorOutput";
import { DeleteConfigurationRecorderOutput } from "./DeleteConfigurationRecorderOutput";
import { DeleteDeliveryChannelOutput } from "./DeleteDeliveryChannelOutput";
import { DeleteEvaluationResultsOutput } from "./DeleteEvaluationResultsOutput";
import { DeleteOrganizationConfigRuleOutput } from "./DeleteOrganizationConfigRuleOutput";
import { DeletePendingAggregationRequestOutput } from "./DeletePendingAggregationRequestOutput";
import { DeleteRemediationConfigurationOutput } from "./DeleteRemediationConfigurationOutput";
import { DeleteRetentionConfigurationOutput } from "./DeleteRetentionConfigurationOutput";
import { DeliverConfigSnapshotOutput } from "./DeliverConfigSnapshotOutput";
import { DescribeAggregateComplianceByConfigRulesOutput } from "./DescribeAggregateComplianceByConfigRulesOutput";
import { DescribeAggregationAuthorizationsOutput } from "./DescribeAggregationAuthorizationsOutput";
import { DescribeComplianceByConfigRuleOutput } from "./DescribeComplianceByConfigRuleOutput";
import { DescribeComplianceByResourceOutput } from "./DescribeComplianceByResourceOutput";
import { DescribeConfigRuleEvaluationStatusOutput } from "./DescribeConfigRuleEvaluationStatusOutput";
import { DescribeConfigRulesOutput } from "./DescribeConfigRulesOutput";
import { DescribeConfigurationAggregatorSourcesStatusOutput } from "./DescribeConfigurationAggregatorSourcesStatusOutput";
import { DescribeConfigurationAggregatorsOutput } from "./DescribeConfigurationAggregatorsOutput";
import { DescribeConfigurationRecorderStatusOutput } from "./DescribeConfigurationRecorderStatusOutput";
import { DescribeConfigurationRecordersOutput } from "./DescribeConfigurationRecordersOutput";
import { DescribeDeliveryChannelStatusOutput } from "./DescribeDeliveryChannelStatusOutput";
import { DescribeDeliveryChannelsOutput } from "./DescribeDeliveryChannelsOutput";
import { DescribeOrganizationConfigRuleStatusesOutput } from "./DescribeOrganizationConfigRuleStatusesOutput";
import { DescribeOrganizationConfigRulesOutput } from "./DescribeOrganizationConfigRulesOutput";
import { DescribePendingAggregationRequestsOutput } from "./DescribePendingAggregationRequestsOutput";
import { DescribeRemediationConfigurationsOutput } from "./DescribeRemediationConfigurationsOutput";
import { DescribeRemediationExecutionStatusOutput } from "./DescribeRemediationExecutionStatusOutput";
import { DescribeRetentionConfigurationsOutput } from "./DescribeRetentionConfigurationsOutput";
import { GetAggregateComplianceDetailsByConfigRuleOutput } from "./GetAggregateComplianceDetailsByConfigRuleOutput";
import { GetAggregateConfigRuleComplianceSummaryOutput } from "./GetAggregateConfigRuleComplianceSummaryOutput";
import { GetAggregateDiscoveredResourceCountsOutput } from "./GetAggregateDiscoveredResourceCountsOutput";
import { GetAggregateResourceConfigOutput } from "./GetAggregateResourceConfigOutput";
import { GetComplianceDetailsByConfigRuleOutput } from "./GetComplianceDetailsByConfigRuleOutput";
import { GetComplianceDetailsByResourceOutput } from "./GetComplianceDetailsByResourceOutput";
import { GetComplianceSummaryByConfigRuleOutput } from "./GetComplianceSummaryByConfigRuleOutput";
import { GetComplianceSummaryByResourceTypeOutput } from "./GetComplianceSummaryByResourceTypeOutput";
import { GetDiscoveredResourceCountsOutput } from "./GetDiscoveredResourceCountsOutput";
import { GetOrganizationConfigRuleDetailedStatusOutput } from "./GetOrganizationConfigRuleDetailedStatusOutput";
import { GetResourceConfigHistoryOutput } from "./GetResourceConfigHistoryOutput";
import { ListAggregateDiscoveredResourcesOutput } from "./ListAggregateDiscoveredResourcesOutput";
import { ListDiscoveredResourcesOutput } from "./ListDiscoveredResourcesOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { PutAggregationAuthorizationOutput } from "./PutAggregationAuthorizationOutput";
import { PutConfigRuleOutput } from "./PutConfigRuleOutput";
import { PutConfigurationAggregatorOutput } from "./PutConfigurationAggregatorOutput";
import { PutConfigurationRecorderOutput } from "./PutConfigurationRecorderOutput";
import { PutDeliveryChannelOutput } from "./PutDeliveryChannelOutput";
import { PutEvaluationsOutput } from "./PutEvaluationsOutput";
import { PutOrganizationConfigRuleOutput } from "./PutOrganizationConfigRuleOutput";
import { PutRemediationConfigurationsOutput } from "./PutRemediationConfigurationsOutput";
import { PutRetentionConfigurationOutput } from "./PutRetentionConfigurationOutput";
import { SelectResourceConfigOutput } from "./SelectResourceConfigOutput";
import { StartConfigRulesEvaluationOutput } from "./StartConfigRulesEvaluationOutput";
import { StartConfigurationRecorderOutput } from "./StartConfigurationRecorderOutput";
import { StartRemediationExecutionOutput } from "./StartRemediationExecutionOutput";
import { StopConfigurationRecorderOutput } from "./StopConfigurationRecorderOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
export type OutputTypesUnion =
  | BatchGetAggregateResourceConfigOutput
  | BatchGetResourceConfigOutput
  | DeleteAggregationAuthorizationOutput
  | DeleteConfigRuleOutput
  | DeleteConfigurationAggregatorOutput
  | DeleteConfigurationRecorderOutput
  | DeleteDeliveryChannelOutput
  | DeleteEvaluationResultsOutput
  | DeleteOrganizationConfigRuleOutput
  | DeletePendingAggregationRequestOutput
  | DeleteRemediationConfigurationOutput
  | DeleteRetentionConfigurationOutput
  | DeliverConfigSnapshotOutput
  | DescribeAggregateComplianceByConfigRulesOutput
  | DescribeAggregationAuthorizationsOutput
  | DescribeComplianceByConfigRuleOutput
  | DescribeComplianceByResourceOutput
  | DescribeConfigRuleEvaluationStatusOutput
  | DescribeConfigRulesOutput
  | DescribeConfigurationAggregatorSourcesStatusOutput
  | DescribeConfigurationAggregatorsOutput
  | DescribeConfigurationRecorderStatusOutput
  | DescribeConfigurationRecordersOutput
  | DescribeDeliveryChannelStatusOutput
  | DescribeDeliveryChannelsOutput
  | DescribeOrganizationConfigRuleStatusesOutput
  | DescribeOrganizationConfigRulesOutput
  | DescribePendingAggregationRequestsOutput
  | DescribeRemediationConfigurationsOutput
  | DescribeRemediationExecutionStatusOutput
  | DescribeRetentionConfigurationsOutput
  | GetAggregateComplianceDetailsByConfigRuleOutput
  | GetAggregateConfigRuleComplianceSummaryOutput
  | GetAggregateDiscoveredResourceCountsOutput
  | GetAggregateResourceConfigOutput
  | GetComplianceDetailsByConfigRuleOutput
  | GetComplianceDetailsByResourceOutput
  | GetComplianceSummaryByConfigRuleOutput
  | GetComplianceSummaryByResourceTypeOutput
  | GetDiscoveredResourceCountsOutput
  | GetOrganizationConfigRuleDetailedStatusOutput
  | GetResourceConfigHistoryOutput
  | ListAggregateDiscoveredResourcesOutput
  | ListDiscoveredResourcesOutput
  | ListTagsForResourceOutput
  | PutAggregationAuthorizationOutput
  | PutConfigRuleOutput
  | PutConfigurationAggregatorOutput
  | PutConfigurationRecorderOutput
  | PutDeliveryChannelOutput
  | PutEvaluationsOutput
  | PutOrganizationConfigRuleOutput
  | PutRemediationConfigurationsOutput
  | PutRetentionConfigurationOutput
  | SelectResourceConfigOutput
  | StartConfigRulesEvaluationOutput
  | StartConfigurationRecorderOutput
  | StartRemediationExecutionOutput
  | StopConfigurationRecorderOutput
  | TagResourceOutput
  | UntagResourceOutput;
