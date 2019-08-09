import { BatchGetAggregateResourceConfigInput } from "./BatchGetAggregateResourceConfigInput";
import { BatchGetResourceConfigInput } from "./BatchGetResourceConfigInput";
import { DeleteAggregationAuthorizationInput } from "./DeleteAggregationAuthorizationInput";
import { DeleteConfigRuleInput } from "./DeleteConfigRuleInput";
import { DeleteConfigurationAggregatorInput } from "./DeleteConfigurationAggregatorInput";
import { DeleteConfigurationRecorderInput } from "./DeleteConfigurationRecorderInput";
import { DeleteDeliveryChannelInput } from "./DeleteDeliveryChannelInput";
import { DeleteEvaluationResultsInput } from "./DeleteEvaluationResultsInput";
import { DeleteOrganizationConfigRuleInput } from "./DeleteOrganizationConfigRuleInput";
import { DeletePendingAggregationRequestInput } from "./DeletePendingAggregationRequestInput";
import { DeleteRemediationConfigurationInput } from "./DeleteRemediationConfigurationInput";
import { DeleteRetentionConfigurationInput } from "./DeleteRetentionConfigurationInput";
import { DeliverConfigSnapshotInput } from "./DeliverConfigSnapshotInput";
import { DescribeAggregateComplianceByConfigRulesInput } from "./DescribeAggregateComplianceByConfigRulesInput";
import { DescribeAggregationAuthorizationsInput } from "./DescribeAggregationAuthorizationsInput";
import { DescribeComplianceByConfigRuleInput } from "./DescribeComplianceByConfigRuleInput";
import { DescribeComplianceByResourceInput } from "./DescribeComplianceByResourceInput";
import { DescribeConfigRuleEvaluationStatusInput } from "./DescribeConfigRuleEvaluationStatusInput";
import { DescribeConfigRulesInput } from "./DescribeConfigRulesInput";
import { DescribeConfigurationAggregatorSourcesStatusInput } from "./DescribeConfigurationAggregatorSourcesStatusInput";
import { DescribeConfigurationAggregatorsInput } from "./DescribeConfigurationAggregatorsInput";
import { DescribeConfigurationRecorderStatusInput } from "./DescribeConfigurationRecorderStatusInput";
import { DescribeConfigurationRecordersInput } from "./DescribeConfigurationRecordersInput";
import { DescribeDeliveryChannelStatusInput } from "./DescribeDeliveryChannelStatusInput";
import { DescribeDeliveryChannelsInput } from "./DescribeDeliveryChannelsInput";
import { DescribeOrganizationConfigRuleStatusesInput } from "./DescribeOrganizationConfigRuleStatusesInput";
import { DescribeOrganizationConfigRulesInput } from "./DescribeOrganizationConfigRulesInput";
import { DescribePendingAggregationRequestsInput } from "./DescribePendingAggregationRequestsInput";
import { DescribeRemediationConfigurationsInput } from "./DescribeRemediationConfigurationsInput";
import { DescribeRemediationExecutionStatusInput } from "./DescribeRemediationExecutionStatusInput";
import { DescribeRetentionConfigurationsInput } from "./DescribeRetentionConfigurationsInput";
import { GetAggregateComplianceDetailsByConfigRuleInput } from "./GetAggregateComplianceDetailsByConfigRuleInput";
import { GetAggregateConfigRuleComplianceSummaryInput } from "./GetAggregateConfigRuleComplianceSummaryInput";
import { GetAggregateDiscoveredResourceCountsInput } from "./GetAggregateDiscoveredResourceCountsInput";
import { GetAggregateResourceConfigInput } from "./GetAggregateResourceConfigInput";
import { GetComplianceDetailsByConfigRuleInput } from "./GetComplianceDetailsByConfigRuleInput";
import { GetComplianceDetailsByResourceInput } from "./GetComplianceDetailsByResourceInput";
import { GetComplianceSummaryByConfigRuleInput } from "./GetComplianceSummaryByConfigRuleInput";
import { GetComplianceSummaryByResourceTypeInput } from "./GetComplianceSummaryByResourceTypeInput";
import { GetDiscoveredResourceCountsInput } from "./GetDiscoveredResourceCountsInput";
import { GetOrganizationConfigRuleDetailedStatusInput } from "./GetOrganizationConfigRuleDetailedStatusInput";
import { GetResourceConfigHistoryInput } from "./GetResourceConfigHistoryInput";
import { ListAggregateDiscoveredResourcesInput } from "./ListAggregateDiscoveredResourcesInput";
import { ListDiscoveredResourcesInput } from "./ListDiscoveredResourcesInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { PutAggregationAuthorizationInput } from "./PutAggregationAuthorizationInput";
import { PutConfigRuleInput } from "./PutConfigRuleInput";
import { PutConfigurationAggregatorInput } from "./PutConfigurationAggregatorInput";
import { PutConfigurationRecorderInput } from "./PutConfigurationRecorderInput";
import { PutDeliveryChannelInput } from "./PutDeliveryChannelInput";
import { PutEvaluationsInput } from "./PutEvaluationsInput";
import { PutOrganizationConfigRuleInput } from "./PutOrganizationConfigRuleInput";
import { PutRemediationConfigurationsInput } from "./PutRemediationConfigurationsInput";
import { PutRetentionConfigurationInput } from "./PutRetentionConfigurationInput";
import { SelectResourceConfigInput } from "./SelectResourceConfigInput";
import { StartConfigRulesEvaluationInput } from "./StartConfigRulesEvaluationInput";
import { StartConfigurationRecorderInput } from "./StartConfigurationRecorderInput";
import { StartRemediationExecutionInput } from "./StartRemediationExecutionInput";
import { StopConfigurationRecorderInput } from "./StopConfigurationRecorderInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
export type InputTypesUnion =
  | BatchGetAggregateResourceConfigInput
  | BatchGetResourceConfigInput
  | DeleteAggregationAuthorizationInput
  | DeleteConfigRuleInput
  | DeleteConfigurationAggregatorInput
  | DeleteConfigurationRecorderInput
  | DeleteDeliveryChannelInput
  | DeleteEvaluationResultsInput
  | DeleteOrganizationConfigRuleInput
  | DeletePendingAggregationRequestInput
  | DeleteRemediationConfigurationInput
  | DeleteRetentionConfigurationInput
  | DeliverConfigSnapshotInput
  | DescribeAggregateComplianceByConfigRulesInput
  | DescribeAggregationAuthorizationsInput
  | DescribeComplianceByConfigRuleInput
  | DescribeComplianceByResourceInput
  | DescribeConfigRuleEvaluationStatusInput
  | DescribeConfigRulesInput
  | DescribeConfigurationAggregatorSourcesStatusInput
  | DescribeConfigurationAggregatorsInput
  | DescribeConfigurationRecorderStatusInput
  | DescribeConfigurationRecordersInput
  | DescribeDeliveryChannelStatusInput
  | DescribeDeliveryChannelsInput
  | DescribeOrganizationConfigRuleStatusesInput
  | DescribeOrganizationConfigRulesInput
  | DescribePendingAggregationRequestsInput
  | DescribeRemediationConfigurationsInput
  | DescribeRemediationExecutionStatusInput
  | DescribeRetentionConfigurationsInput
  | GetAggregateComplianceDetailsByConfigRuleInput
  | GetAggregateConfigRuleComplianceSummaryInput
  | GetAggregateDiscoveredResourceCountsInput
  | GetAggregateResourceConfigInput
  | GetComplianceDetailsByConfigRuleInput
  | GetComplianceDetailsByResourceInput
  | GetComplianceSummaryByConfigRuleInput
  | GetComplianceSummaryByResourceTypeInput
  | GetDiscoveredResourceCountsInput
  | GetOrganizationConfigRuleDetailedStatusInput
  | GetResourceConfigHistoryInput
  | ListAggregateDiscoveredResourcesInput
  | ListDiscoveredResourcesInput
  | ListTagsForResourceInput
  | PutAggregationAuthorizationInput
  | PutConfigRuleInput
  | PutConfigurationAggregatorInput
  | PutConfigurationRecorderInput
  | PutDeliveryChannelInput
  | PutEvaluationsInput
  | PutOrganizationConfigRuleInput
  | PutRemediationConfigurationsInput
  | PutRetentionConfigurationInput
  | SelectResourceConfigInput
  | StartConfigRulesEvaluationInput
  | StartConfigurationRecorderInput
  | StartRemediationExecutionInput
  | StopConfigurationRecorderInput
  | TagResourceInput
  | UntagResourceInput;
