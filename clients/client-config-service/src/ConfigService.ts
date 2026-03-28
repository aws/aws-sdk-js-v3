// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateResourceTypesCommandInput,
  type AssociateResourceTypesCommandOutput,
  AssociateResourceTypesCommand,
} from "./commands/AssociateResourceTypesCommand";
import {
  type BatchGetAggregateResourceConfigCommandInput,
  type BatchGetAggregateResourceConfigCommandOutput,
  BatchGetAggregateResourceConfigCommand,
} from "./commands/BatchGetAggregateResourceConfigCommand";
import {
  type BatchGetResourceConfigCommandInput,
  type BatchGetResourceConfigCommandOutput,
  BatchGetResourceConfigCommand,
} from "./commands/BatchGetResourceConfigCommand";
import {
  type DeleteAggregationAuthorizationCommandInput,
  type DeleteAggregationAuthorizationCommandOutput,
  DeleteAggregationAuthorizationCommand,
} from "./commands/DeleteAggregationAuthorizationCommand";
import {
  type DeleteConfigRuleCommandInput,
  type DeleteConfigRuleCommandOutput,
  DeleteConfigRuleCommand,
} from "./commands/DeleteConfigRuleCommand";
import {
  type DeleteConfigurationAggregatorCommandInput,
  type DeleteConfigurationAggregatorCommandOutput,
  DeleteConfigurationAggregatorCommand,
} from "./commands/DeleteConfigurationAggregatorCommand";
import {
  type DeleteConfigurationRecorderCommandInput,
  type DeleteConfigurationRecorderCommandOutput,
  DeleteConfigurationRecorderCommand,
} from "./commands/DeleteConfigurationRecorderCommand";
import {
  type DeleteConformancePackCommandInput,
  type DeleteConformancePackCommandOutput,
  DeleteConformancePackCommand,
} from "./commands/DeleteConformancePackCommand";
import {
  type DeleteDeliveryChannelCommandInput,
  type DeleteDeliveryChannelCommandOutput,
  DeleteDeliveryChannelCommand,
} from "./commands/DeleteDeliveryChannelCommand";
import {
  type DeleteEvaluationResultsCommandInput,
  type DeleteEvaluationResultsCommandOutput,
  DeleteEvaluationResultsCommand,
} from "./commands/DeleteEvaluationResultsCommand";
import {
  type DeleteOrganizationConfigRuleCommandInput,
  type DeleteOrganizationConfigRuleCommandOutput,
  DeleteOrganizationConfigRuleCommand,
} from "./commands/DeleteOrganizationConfigRuleCommand";
import {
  type DeleteOrganizationConformancePackCommandInput,
  type DeleteOrganizationConformancePackCommandOutput,
  DeleteOrganizationConformancePackCommand,
} from "./commands/DeleteOrganizationConformancePackCommand";
import {
  type DeletePendingAggregationRequestCommandInput,
  type DeletePendingAggregationRequestCommandOutput,
  DeletePendingAggregationRequestCommand,
} from "./commands/DeletePendingAggregationRequestCommand";
import {
  type DeleteRemediationConfigurationCommandInput,
  type DeleteRemediationConfigurationCommandOutput,
  DeleteRemediationConfigurationCommand,
} from "./commands/DeleteRemediationConfigurationCommand";
import {
  type DeleteRemediationExceptionsCommandInput,
  type DeleteRemediationExceptionsCommandOutput,
  DeleteRemediationExceptionsCommand,
} from "./commands/DeleteRemediationExceptionsCommand";
import {
  type DeleteResourceConfigCommandInput,
  type DeleteResourceConfigCommandOutput,
  DeleteResourceConfigCommand,
} from "./commands/DeleteResourceConfigCommand";
import {
  type DeleteRetentionConfigurationCommandInput,
  type DeleteRetentionConfigurationCommandOutput,
  DeleteRetentionConfigurationCommand,
} from "./commands/DeleteRetentionConfigurationCommand";
import {
  type DeleteServiceLinkedConfigurationRecorderCommandInput,
  type DeleteServiceLinkedConfigurationRecorderCommandOutput,
  DeleteServiceLinkedConfigurationRecorderCommand,
} from "./commands/DeleteServiceLinkedConfigurationRecorderCommand";
import {
  type DeleteStoredQueryCommandInput,
  type DeleteStoredQueryCommandOutput,
  DeleteStoredQueryCommand,
} from "./commands/DeleteStoredQueryCommand";
import {
  type DeliverConfigSnapshotCommandInput,
  type DeliverConfigSnapshotCommandOutput,
  DeliverConfigSnapshotCommand,
} from "./commands/DeliverConfigSnapshotCommand";
import {
  type DescribeAggregateComplianceByConfigRulesCommandInput,
  type DescribeAggregateComplianceByConfigRulesCommandOutput,
  DescribeAggregateComplianceByConfigRulesCommand,
} from "./commands/DescribeAggregateComplianceByConfigRulesCommand";
import {
  type DescribeAggregateComplianceByConformancePacksCommandInput,
  type DescribeAggregateComplianceByConformancePacksCommandOutput,
  DescribeAggregateComplianceByConformancePacksCommand,
} from "./commands/DescribeAggregateComplianceByConformancePacksCommand";
import {
  type DescribeAggregationAuthorizationsCommandInput,
  type DescribeAggregationAuthorizationsCommandOutput,
  DescribeAggregationAuthorizationsCommand,
} from "./commands/DescribeAggregationAuthorizationsCommand";
import {
  type DescribeComplianceByConfigRuleCommandInput,
  type DescribeComplianceByConfigRuleCommandOutput,
  DescribeComplianceByConfigRuleCommand,
} from "./commands/DescribeComplianceByConfigRuleCommand";
import {
  type DescribeComplianceByResourceCommandInput,
  type DescribeComplianceByResourceCommandOutput,
  DescribeComplianceByResourceCommand,
} from "./commands/DescribeComplianceByResourceCommand";
import {
  type DescribeConfigRuleEvaluationStatusCommandInput,
  type DescribeConfigRuleEvaluationStatusCommandOutput,
  DescribeConfigRuleEvaluationStatusCommand,
} from "./commands/DescribeConfigRuleEvaluationStatusCommand";
import {
  type DescribeConfigRulesCommandInput,
  type DescribeConfigRulesCommandOutput,
  DescribeConfigRulesCommand,
} from "./commands/DescribeConfigRulesCommand";
import {
  type DescribeConfigurationAggregatorsCommandInput,
  type DescribeConfigurationAggregatorsCommandOutput,
  DescribeConfigurationAggregatorsCommand,
} from "./commands/DescribeConfigurationAggregatorsCommand";
import {
  type DescribeConfigurationAggregatorSourcesStatusCommandInput,
  type DescribeConfigurationAggregatorSourcesStatusCommandOutput,
  DescribeConfigurationAggregatorSourcesStatusCommand,
} from "./commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import {
  type DescribeConfigurationRecordersCommandInput,
  type DescribeConfigurationRecordersCommandOutput,
  DescribeConfigurationRecordersCommand,
} from "./commands/DescribeConfigurationRecordersCommand";
import {
  type DescribeConfigurationRecorderStatusCommandInput,
  type DescribeConfigurationRecorderStatusCommandOutput,
  DescribeConfigurationRecorderStatusCommand,
} from "./commands/DescribeConfigurationRecorderStatusCommand";
import {
  type DescribeConformancePackComplianceCommandInput,
  type DescribeConformancePackComplianceCommandOutput,
  DescribeConformancePackComplianceCommand,
} from "./commands/DescribeConformancePackComplianceCommand";
import {
  type DescribeConformancePacksCommandInput,
  type DescribeConformancePacksCommandOutput,
  DescribeConformancePacksCommand,
} from "./commands/DescribeConformancePacksCommand";
import {
  type DescribeConformancePackStatusCommandInput,
  type DescribeConformancePackStatusCommandOutput,
  DescribeConformancePackStatusCommand,
} from "./commands/DescribeConformancePackStatusCommand";
import {
  type DescribeDeliveryChannelsCommandInput,
  type DescribeDeliveryChannelsCommandOutput,
  DescribeDeliveryChannelsCommand,
} from "./commands/DescribeDeliveryChannelsCommand";
import {
  type DescribeDeliveryChannelStatusCommandInput,
  type DescribeDeliveryChannelStatusCommandOutput,
  DescribeDeliveryChannelStatusCommand,
} from "./commands/DescribeDeliveryChannelStatusCommand";
import {
  type DescribeOrganizationConfigRulesCommandInput,
  type DescribeOrganizationConfigRulesCommandOutput,
  DescribeOrganizationConfigRulesCommand,
} from "./commands/DescribeOrganizationConfigRulesCommand";
import {
  type DescribeOrganizationConfigRuleStatusesCommandInput,
  type DescribeOrganizationConfigRuleStatusesCommandOutput,
  DescribeOrganizationConfigRuleStatusesCommand,
} from "./commands/DescribeOrganizationConfigRuleStatusesCommand";
import {
  type DescribeOrganizationConformancePacksCommandInput,
  type DescribeOrganizationConformancePacksCommandOutput,
  DescribeOrganizationConformancePacksCommand,
} from "./commands/DescribeOrganizationConformancePacksCommand";
import {
  type DescribeOrganizationConformancePackStatusesCommandInput,
  type DescribeOrganizationConformancePackStatusesCommandOutput,
  DescribeOrganizationConformancePackStatusesCommand,
} from "./commands/DescribeOrganizationConformancePackStatusesCommand";
import {
  type DescribePendingAggregationRequestsCommandInput,
  type DescribePendingAggregationRequestsCommandOutput,
  DescribePendingAggregationRequestsCommand,
} from "./commands/DescribePendingAggregationRequestsCommand";
import {
  type DescribeRemediationConfigurationsCommandInput,
  type DescribeRemediationConfigurationsCommandOutput,
  DescribeRemediationConfigurationsCommand,
} from "./commands/DescribeRemediationConfigurationsCommand";
import {
  type DescribeRemediationExceptionsCommandInput,
  type DescribeRemediationExceptionsCommandOutput,
  DescribeRemediationExceptionsCommand,
} from "./commands/DescribeRemediationExceptionsCommand";
import {
  type DescribeRemediationExecutionStatusCommandInput,
  type DescribeRemediationExecutionStatusCommandOutput,
  DescribeRemediationExecutionStatusCommand,
} from "./commands/DescribeRemediationExecutionStatusCommand";
import {
  type DescribeRetentionConfigurationsCommandInput,
  type DescribeRetentionConfigurationsCommandOutput,
  DescribeRetentionConfigurationsCommand,
} from "./commands/DescribeRetentionConfigurationsCommand";
import {
  type DisassociateResourceTypesCommandInput,
  type DisassociateResourceTypesCommandOutput,
  DisassociateResourceTypesCommand,
} from "./commands/DisassociateResourceTypesCommand";
import {
  type GetAggregateComplianceDetailsByConfigRuleCommandInput,
  type GetAggregateComplianceDetailsByConfigRuleCommandOutput,
  GetAggregateComplianceDetailsByConfigRuleCommand,
} from "./commands/GetAggregateComplianceDetailsByConfigRuleCommand";
import {
  type GetAggregateConfigRuleComplianceSummaryCommandInput,
  type GetAggregateConfigRuleComplianceSummaryCommandOutput,
  GetAggregateConfigRuleComplianceSummaryCommand,
} from "./commands/GetAggregateConfigRuleComplianceSummaryCommand";
import {
  type GetAggregateConformancePackComplianceSummaryCommandInput,
  type GetAggregateConformancePackComplianceSummaryCommandOutput,
  GetAggregateConformancePackComplianceSummaryCommand,
} from "./commands/GetAggregateConformancePackComplianceSummaryCommand";
import {
  type GetAggregateDiscoveredResourceCountsCommandInput,
  type GetAggregateDiscoveredResourceCountsCommandOutput,
  GetAggregateDiscoveredResourceCountsCommand,
} from "./commands/GetAggregateDiscoveredResourceCountsCommand";
import {
  type GetAggregateResourceConfigCommandInput,
  type GetAggregateResourceConfigCommandOutput,
  GetAggregateResourceConfigCommand,
} from "./commands/GetAggregateResourceConfigCommand";
import {
  type GetComplianceDetailsByConfigRuleCommandInput,
  type GetComplianceDetailsByConfigRuleCommandOutput,
  GetComplianceDetailsByConfigRuleCommand,
} from "./commands/GetComplianceDetailsByConfigRuleCommand";
import {
  type GetComplianceDetailsByResourceCommandInput,
  type GetComplianceDetailsByResourceCommandOutput,
  GetComplianceDetailsByResourceCommand,
} from "./commands/GetComplianceDetailsByResourceCommand";
import {
  type GetComplianceSummaryByConfigRuleCommandInput,
  type GetComplianceSummaryByConfigRuleCommandOutput,
  GetComplianceSummaryByConfigRuleCommand,
} from "./commands/GetComplianceSummaryByConfigRuleCommand";
import {
  type GetComplianceSummaryByResourceTypeCommandInput,
  type GetComplianceSummaryByResourceTypeCommandOutput,
  GetComplianceSummaryByResourceTypeCommand,
} from "./commands/GetComplianceSummaryByResourceTypeCommand";
import {
  type GetConformancePackComplianceDetailsCommandInput,
  type GetConformancePackComplianceDetailsCommandOutput,
  GetConformancePackComplianceDetailsCommand,
} from "./commands/GetConformancePackComplianceDetailsCommand";
import {
  type GetConformancePackComplianceSummaryCommandInput,
  type GetConformancePackComplianceSummaryCommandOutput,
  GetConformancePackComplianceSummaryCommand,
} from "./commands/GetConformancePackComplianceSummaryCommand";
import {
  type GetCustomRulePolicyCommandInput,
  type GetCustomRulePolicyCommandOutput,
  GetCustomRulePolicyCommand,
} from "./commands/GetCustomRulePolicyCommand";
import {
  type GetDiscoveredResourceCountsCommandInput,
  type GetDiscoveredResourceCountsCommandOutput,
  GetDiscoveredResourceCountsCommand,
} from "./commands/GetDiscoveredResourceCountsCommand";
import {
  type GetOrganizationConfigRuleDetailedStatusCommandInput,
  type GetOrganizationConfigRuleDetailedStatusCommandOutput,
  GetOrganizationConfigRuleDetailedStatusCommand,
} from "./commands/GetOrganizationConfigRuleDetailedStatusCommand";
import {
  type GetOrganizationConformancePackDetailedStatusCommandInput,
  type GetOrganizationConformancePackDetailedStatusCommandOutput,
  GetOrganizationConformancePackDetailedStatusCommand,
} from "./commands/GetOrganizationConformancePackDetailedStatusCommand";
import {
  type GetOrganizationCustomRulePolicyCommandInput,
  type GetOrganizationCustomRulePolicyCommandOutput,
  GetOrganizationCustomRulePolicyCommand,
} from "./commands/GetOrganizationCustomRulePolicyCommand";
import {
  type GetResourceConfigHistoryCommandInput,
  type GetResourceConfigHistoryCommandOutput,
  GetResourceConfigHistoryCommand,
} from "./commands/GetResourceConfigHistoryCommand";
import {
  type GetResourceEvaluationSummaryCommandInput,
  type GetResourceEvaluationSummaryCommandOutput,
  GetResourceEvaluationSummaryCommand,
} from "./commands/GetResourceEvaluationSummaryCommand";
import {
  type GetStoredQueryCommandInput,
  type GetStoredQueryCommandOutput,
  GetStoredQueryCommand,
} from "./commands/GetStoredQueryCommand";
import {
  type ListAggregateDiscoveredResourcesCommandInput,
  type ListAggregateDiscoveredResourcesCommandOutput,
  ListAggregateDiscoveredResourcesCommand,
} from "./commands/ListAggregateDiscoveredResourcesCommand";
import {
  type ListConfigurationRecordersCommandInput,
  type ListConfigurationRecordersCommandOutput,
  ListConfigurationRecordersCommand,
} from "./commands/ListConfigurationRecordersCommand";
import {
  type ListConformancePackComplianceScoresCommandInput,
  type ListConformancePackComplianceScoresCommandOutput,
  ListConformancePackComplianceScoresCommand,
} from "./commands/ListConformancePackComplianceScoresCommand";
import {
  type ListDiscoveredResourcesCommandInput,
  type ListDiscoveredResourcesCommandOutput,
  ListDiscoveredResourcesCommand,
} from "./commands/ListDiscoveredResourcesCommand";
import {
  type ListResourceEvaluationsCommandInput,
  type ListResourceEvaluationsCommandOutput,
  ListResourceEvaluationsCommand,
} from "./commands/ListResourceEvaluationsCommand";
import {
  type ListStoredQueriesCommandInput,
  type ListStoredQueriesCommandOutput,
  ListStoredQueriesCommand,
} from "./commands/ListStoredQueriesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutAggregationAuthorizationCommandInput,
  type PutAggregationAuthorizationCommandOutput,
  PutAggregationAuthorizationCommand,
} from "./commands/PutAggregationAuthorizationCommand";
import {
  type PutConfigRuleCommandInput,
  type PutConfigRuleCommandOutput,
  PutConfigRuleCommand,
} from "./commands/PutConfigRuleCommand";
import {
  type PutConfigurationAggregatorCommandInput,
  type PutConfigurationAggregatorCommandOutput,
  PutConfigurationAggregatorCommand,
} from "./commands/PutConfigurationAggregatorCommand";
import {
  type PutConfigurationRecorderCommandInput,
  type PutConfigurationRecorderCommandOutput,
  PutConfigurationRecorderCommand,
} from "./commands/PutConfigurationRecorderCommand";
import {
  type PutConformancePackCommandInput,
  type PutConformancePackCommandOutput,
  PutConformancePackCommand,
} from "./commands/PutConformancePackCommand";
import {
  type PutDeliveryChannelCommandInput,
  type PutDeliveryChannelCommandOutput,
  PutDeliveryChannelCommand,
} from "./commands/PutDeliveryChannelCommand";
import {
  type PutEvaluationsCommandInput,
  type PutEvaluationsCommandOutput,
  PutEvaluationsCommand,
} from "./commands/PutEvaluationsCommand";
import {
  type PutExternalEvaluationCommandInput,
  type PutExternalEvaluationCommandOutput,
  PutExternalEvaluationCommand,
} from "./commands/PutExternalEvaluationCommand";
import {
  type PutOrganizationConfigRuleCommandInput,
  type PutOrganizationConfigRuleCommandOutput,
  PutOrganizationConfigRuleCommand,
} from "./commands/PutOrganizationConfigRuleCommand";
import {
  type PutOrganizationConformancePackCommandInput,
  type PutOrganizationConformancePackCommandOutput,
  PutOrganizationConformancePackCommand,
} from "./commands/PutOrganizationConformancePackCommand";
import {
  type PutRemediationConfigurationsCommandInput,
  type PutRemediationConfigurationsCommandOutput,
  PutRemediationConfigurationsCommand,
} from "./commands/PutRemediationConfigurationsCommand";
import {
  type PutRemediationExceptionsCommandInput,
  type PutRemediationExceptionsCommandOutput,
  PutRemediationExceptionsCommand,
} from "./commands/PutRemediationExceptionsCommand";
import {
  type PutResourceConfigCommandInput,
  type PutResourceConfigCommandOutput,
  PutResourceConfigCommand,
} from "./commands/PutResourceConfigCommand";
import {
  type PutRetentionConfigurationCommandInput,
  type PutRetentionConfigurationCommandOutput,
  PutRetentionConfigurationCommand,
} from "./commands/PutRetentionConfigurationCommand";
import {
  type PutServiceLinkedConfigurationRecorderCommandInput,
  type PutServiceLinkedConfigurationRecorderCommandOutput,
  PutServiceLinkedConfigurationRecorderCommand,
} from "./commands/PutServiceLinkedConfigurationRecorderCommand";
import {
  type PutStoredQueryCommandInput,
  type PutStoredQueryCommandOutput,
  PutStoredQueryCommand,
} from "./commands/PutStoredQueryCommand";
import {
  type SelectAggregateResourceConfigCommandInput,
  type SelectAggregateResourceConfigCommandOutput,
  SelectAggregateResourceConfigCommand,
} from "./commands/SelectAggregateResourceConfigCommand";
import {
  type SelectResourceConfigCommandInput,
  type SelectResourceConfigCommandOutput,
  SelectResourceConfigCommand,
} from "./commands/SelectResourceConfigCommand";
import {
  type StartConfigRulesEvaluationCommandInput,
  type StartConfigRulesEvaluationCommandOutput,
  StartConfigRulesEvaluationCommand,
} from "./commands/StartConfigRulesEvaluationCommand";
import {
  type StartConfigurationRecorderCommandInput,
  type StartConfigurationRecorderCommandOutput,
  StartConfigurationRecorderCommand,
} from "./commands/StartConfigurationRecorderCommand";
import {
  type StartRemediationExecutionCommandInput,
  type StartRemediationExecutionCommandOutput,
  StartRemediationExecutionCommand,
} from "./commands/StartRemediationExecutionCommand";
import {
  type StartResourceEvaluationCommandInput,
  type StartResourceEvaluationCommandOutput,
  StartResourceEvaluationCommand,
} from "./commands/StartResourceEvaluationCommand";
import {
  type StopConfigurationRecorderCommandInput,
  type StopConfigurationRecorderCommandOutput,
  StopConfigurationRecorderCommand,
} from "./commands/StopConfigurationRecorderCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import { ConfigServiceClient } from "./ConfigServiceClient";
import {
  paginateDescribeAggregateComplianceByConfigRules,
} from "./pagination/DescribeAggregateComplianceByConfigRulesPaginator";
import {
  paginateDescribeAggregateComplianceByConformancePacks,
} from "./pagination/DescribeAggregateComplianceByConformancePacksPaginator";
import { paginateDescribeAggregationAuthorizations } from "./pagination/DescribeAggregationAuthorizationsPaginator";
import { paginateDescribeComplianceByConfigRule } from "./pagination/DescribeComplianceByConfigRulePaginator";
import { paginateDescribeComplianceByResource } from "./pagination/DescribeComplianceByResourcePaginator";
import { paginateDescribeConfigRuleEvaluationStatus } from "./pagination/DescribeConfigRuleEvaluationStatusPaginator";
import { paginateDescribeConfigRules } from "./pagination/DescribeConfigRulesPaginator";
import {
  paginateDescribeConfigurationAggregatorSourcesStatus,
} from "./pagination/DescribeConfigurationAggregatorSourcesStatusPaginator";
import { paginateDescribeConfigurationAggregators } from "./pagination/DescribeConfigurationAggregatorsPaginator";
import { paginateDescribeConformancePackCompliance } from "./pagination/DescribeConformancePackCompliancePaginator";
import { paginateDescribeConformancePacks } from "./pagination/DescribeConformancePacksPaginator";
import { paginateDescribeConformancePackStatus } from "./pagination/DescribeConformancePackStatusPaginator";
import { paginateDescribeOrganizationConfigRules } from "./pagination/DescribeOrganizationConfigRulesPaginator";
import {
  paginateDescribeOrganizationConfigRuleStatuses,
} from "./pagination/DescribeOrganizationConfigRuleStatusesPaginator";
import {
  paginateDescribeOrganizationConformancePacks,
} from "./pagination/DescribeOrganizationConformancePacksPaginator";
import {
  paginateDescribeOrganizationConformancePackStatuses,
} from "./pagination/DescribeOrganizationConformancePackStatusesPaginator";
import { paginateDescribePendingAggregationRequests } from "./pagination/DescribePendingAggregationRequestsPaginator";
import { paginateDescribeRemediationExceptions } from "./pagination/DescribeRemediationExceptionsPaginator";
import { paginateDescribeRemediationExecutionStatus } from "./pagination/DescribeRemediationExecutionStatusPaginator";
import { paginateDescribeRetentionConfigurations } from "./pagination/DescribeRetentionConfigurationsPaginator";
import {
  paginateGetAggregateComplianceDetailsByConfigRule,
} from "./pagination/GetAggregateComplianceDetailsByConfigRulePaginator";
import {
  paginateGetAggregateConfigRuleComplianceSummary,
} from "./pagination/GetAggregateConfigRuleComplianceSummaryPaginator";
import {
  paginateGetAggregateConformancePackComplianceSummary,
} from "./pagination/GetAggregateConformancePackComplianceSummaryPaginator";
import {
  paginateGetAggregateDiscoveredResourceCounts,
} from "./pagination/GetAggregateDiscoveredResourceCountsPaginator";
import { paginateGetComplianceDetailsByConfigRule } from "./pagination/GetComplianceDetailsByConfigRulePaginator";
import { paginateGetComplianceDetailsByResource } from "./pagination/GetComplianceDetailsByResourcePaginator";
import { paginateGetConformancePackComplianceDetails } from "./pagination/GetConformancePackComplianceDetailsPaginator";
import { paginateGetConformancePackComplianceSummary } from "./pagination/GetConformancePackComplianceSummaryPaginator";
import { paginateGetDiscoveredResourceCounts } from "./pagination/GetDiscoveredResourceCountsPaginator";
import {
  paginateGetOrganizationConfigRuleDetailedStatus,
} from "./pagination/GetOrganizationConfigRuleDetailedStatusPaginator";
import {
  paginateGetOrganizationConformancePackDetailedStatus,
} from "./pagination/GetOrganizationConformancePackDetailedStatusPaginator";
import { paginateGetResourceConfigHistory } from "./pagination/GetResourceConfigHistoryPaginator";
import { paginateListAggregateDiscoveredResources } from "./pagination/ListAggregateDiscoveredResourcesPaginator";
import { paginateListConfigurationRecorders } from "./pagination/ListConfigurationRecordersPaginator";
import { paginateListConformancePackComplianceScores } from "./pagination/ListConformancePackComplianceScoresPaginator";
import { paginateListDiscoveredResources } from "./pagination/ListDiscoveredResourcesPaginator";
import { paginateListResourceEvaluations } from "./pagination/ListResourceEvaluationsPaginator";
import { paginateListStoredQueries } from "./pagination/ListStoredQueriesPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { paginateSelectAggregateResourceConfig } from "./pagination/SelectAggregateResourceConfigPaginator";
import { paginateSelectResourceConfig } from "./pagination/SelectResourceConfigPaginator";

const commands = {
  AssociateResourceTypesCommand,
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
  DeleteServiceLinkedConfigurationRecorderCommand,
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
  DisassociateResourceTypesCommand,
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
  ListConfigurationRecordersCommand,
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
  PutServiceLinkedConfigurationRecorderCommand,
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
const paginators = {
  paginateDescribeAggregateComplianceByConfigRules,
  paginateDescribeAggregateComplianceByConformancePacks,
  paginateDescribeAggregationAuthorizations,
  paginateDescribeComplianceByConfigRule,
  paginateDescribeComplianceByResource,
  paginateDescribeConfigRuleEvaluationStatus,
  paginateDescribeConfigRules,
  paginateDescribeConfigurationAggregators,
  paginateDescribeConfigurationAggregatorSourcesStatus,
  paginateDescribeConformancePackCompliance,
  paginateDescribeConformancePacks,
  paginateDescribeConformancePackStatus,
  paginateDescribeOrganizationConfigRules,
  paginateDescribeOrganizationConfigRuleStatuses,
  paginateDescribeOrganizationConformancePacks,
  paginateDescribeOrganizationConformancePackStatuses,
  paginateDescribePendingAggregationRequests,
  paginateDescribeRemediationExceptions,
  paginateDescribeRemediationExecutionStatus,
  paginateDescribeRetentionConfigurations,
  paginateGetAggregateComplianceDetailsByConfigRule,
  paginateGetAggregateConfigRuleComplianceSummary,
  paginateGetAggregateConformancePackComplianceSummary,
  paginateGetAggregateDiscoveredResourceCounts,
  paginateGetComplianceDetailsByConfigRule,
  paginateGetComplianceDetailsByResource,
  paginateGetConformancePackComplianceDetails,
  paginateGetConformancePackComplianceSummary,
  paginateGetDiscoveredResourceCounts,
  paginateGetOrganizationConfigRuleDetailedStatus,
  paginateGetOrganizationConformancePackDetailedStatus,
  paginateGetResourceConfigHistory,
  paginateListAggregateDiscoveredResources,
  paginateListConfigurationRecorders,
  paginateListConformancePackComplianceScores,
  paginateListDiscoveredResources,
  paginateListResourceEvaluations,
  paginateListStoredQueries,
  paginateListTagsForResource,
  paginateSelectAggregateResourceConfig,
  paginateSelectResourceConfig,
};

export interface ConfigService {
  /**
   * @see {@link AssociateResourceTypesCommand}
   */
  associateResourceTypes(
    args: AssociateResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResourceTypesCommandOutput>;
  associateResourceTypes(
    args: AssociateResourceTypesCommandInput,
    cb: (err: any, data?: AssociateResourceTypesCommandOutput) => void
  ): void;
  associateResourceTypes(
    args: AssociateResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResourceTypesCommandOutput) => void
  ): void;

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
   * @see {@link DeleteServiceLinkedConfigurationRecorderCommand}
   */
  deleteServiceLinkedConfigurationRecorder(
    args: DeleteServiceLinkedConfigurationRecorderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceLinkedConfigurationRecorderCommandOutput>;
  deleteServiceLinkedConfigurationRecorder(
    args: DeleteServiceLinkedConfigurationRecorderCommandInput,
    cb: (err: any, data?: DeleteServiceLinkedConfigurationRecorderCommandOutput) => void
  ): void;
  deleteServiceLinkedConfigurationRecorder(
    args: DeleteServiceLinkedConfigurationRecorderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceLinkedConfigurationRecorderCommandOutput) => void
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
  describeAggregationAuthorizations(): Promise<DescribeAggregationAuthorizationsCommandOutput>;
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
  describeComplianceByConfigRule(): Promise<DescribeComplianceByConfigRuleCommandOutput>;
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
  describeComplianceByResource(): Promise<DescribeComplianceByResourceCommandOutput>;
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
  describeConfigRuleEvaluationStatus(): Promise<DescribeConfigRuleEvaluationStatusCommandOutput>;
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
  describeConfigRules(): Promise<DescribeConfigRulesCommandOutput>;
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
  describeConfigurationAggregators(): Promise<DescribeConfigurationAggregatorsCommandOutput>;
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
  describeConfigurationRecorders(): Promise<DescribeConfigurationRecordersCommandOutput>;
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
  describeConfigurationRecorderStatus(): Promise<DescribeConfigurationRecorderStatusCommandOutput>;
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
  describeConformancePacks(): Promise<DescribeConformancePacksCommandOutput>;
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
  describeConformancePackStatus(): Promise<DescribeConformancePackStatusCommandOutput>;
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
  describeDeliveryChannels(): Promise<DescribeDeliveryChannelsCommandOutput>;
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
  describeDeliveryChannelStatus(): Promise<DescribeDeliveryChannelStatusCommandOutput>;
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
  describeOrganizationConfigRules(): Promise<DescribeOrganizationConfigRulesCommandOutput>;
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
  describeOrganizationConfigRuleStatuses(): Promise<DescribeOrganizationConfigRuleStatusesCommandOutput>;
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
  describeOrganizationConformancePacks(): Promise<DescribeOrganizationConformancePacksCommandOutput>;
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
  describeOrganizationConformancePackStatuses(): Promise<DescribeOrganizationConformancePackStatusesCommandOutput>;
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
  describePendingAggregationRequests(): Promise<DescribePendingAggregationRequestsCommandOutput>;
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
  describeRetentionConfigurations(): Promise<DescribeRetentionConfigurationsCommandOutput>;
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
   * @see {@link DisassociateResourceTypesCommand}
   */
  disassociateResourceTypes(
    args: DisassociateResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResourceTypesCommandOutput>;
  disassociateResourceTypes(
    args: DisassociateResourceTypesCommandInput,
    cb: (err: any, data?: DisassociateResourceTypesCommandOutput) => void
  ): void;
  disassociateResourceTypes(
    args: DisassociateResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResourceTypesCommandOutput) => void
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
  getComplianceDetailsByResource(): Promise<GetComplianceDetailsByResourceCommandOutput>;
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
  getComplianceSummaryByConfigRule(): Promise<GetComplianceSummaryByConfigRuleCommandOutput>;
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
  getComplianceSummaryByResourceType(): Promise<GetComplianceSummaryByResourceTypeCommandOutput>;
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
  getCustomRulePolicy(): Promise<GetCustomRulePolicyCommandOutput>;
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
  getDiscoveredResourceCounts(): Promise<GetDiscoveredResourceCountsCommandOutput>;
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
  getStoredQuery(
    args: GetStoredQueryCommandInput,
    cb: (err: any, data?: GetStoredQueryCommandOutput) => void
  ): void;
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
   * @see {@link ListConfigurationRecordersCommand}
   */
  listConfigurationRecorders(): Promise<ListConfigurationRecordersCommandOutput>;
  listConfigurationRecorders(
    args: ListConfigurationRecordersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationRecordersCommandOutput>;
  listConfigurationRecorders(
    args: ListConfigurationRecordersCommandInput,
    cb: (err: any, data?: ListConfigurationRecordersCommandOutput) => void
  ): void;
  listConfigurationRecorders(
    args: ListConfigurationRecordersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationRecordersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConformancePackComplianceScoresCommand}
   */
  listConformancePackComplianceScores(): Promise<ListConformancePackComplianceScoresCommandOutput>;
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
  listResourceEvaluations(): Promise<ListResourceEvaluationsCommandOutput>;
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
  listStoredQueries(): Promise<ListStoredQueriesCommandOutput>;
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
  putConfigRule(
    args: PutConfigRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigRuleCommandOutput>;
  putConfigRule(
    args: PutConfigRuleCommandInput,
    cb: (err: any, data?: PutConfigRuleCommandOutput) => void
  ): void;
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
  putEvaluations(
    args: PutEvaluationsCommandInput,
    cb: (err: any, data?: PutEvaluationsCommandOutput) => void
  ): void;
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
   * @see {@link PutServiceLinkedConfigurationRecorderCommand}
   */
  putServiceLinkedConfigurationRecorder(
    args: PutServiceLinkedConfigurationRecorderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutServiceLinkedConfigurationRecorderCommandOutput>;
  putServiceLinkedConfigurationRecorder(
    args: PutServiceLinkedConfigurationRecorderCommandInput,
    cb: (err: any, data?: PutServiceLinkedConfigurationRecorderCommandOutput) => void
  ): void;
  putServiceLinkedConfigurationRecorder(
    args: PutServiceLinkedConfigurationRecorderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutServiceLinkedConfigurationRecorderCommandOutput) => void
  ): void;

  /**
   * @see {@link PutStoredQueryCommand}
   */
  putStoredQuery(
    args: PutStoredQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutStoredQueryCommandOutput>;
  putStoredQuery(
    args: PutStoredQueryCommandInput,
    cb: (err: any, data?: PutStoredQueryCommandOutput) => void
  ): void;
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
  startConfigRulesEvaluation(): Promise<StartConfigRulesEvaluationCommandOutput>;
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAggregateComplianceByConfigRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAggregateComplianceByConfigRulesCommandOutput}.
   */
  paginateDescribeAggregateComplianceByConfigRules(
    args: DescribeAggregateComplianceByConfigRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAggregateComplianceByConfigRulesCommandOutput>;

  /**
   * @see {@link DescribeAggregateComplianceByConformancePacksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAggregateComplianceByConformancePacksCommandOutput}.
   */
  paginateDescribeAggregateComplianceByConformancePacks(
    args: DescribeAggregateComplianceByConformancePacksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAggregateComplianceByConformancePacksCommandOutput>;

  /**
   * @see {@link DescribeAggregationAuthorizationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAggregationAuthorizationsCommandOutput}.
   */
  paginateDescribeAggregationAuthorizations(
    args?: DescribeAggregationAuthorizationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAggregationAuthorizationsCommandOutput>;

  /**
   * @see {@link DescribeComplianceByConfigRuleCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeComplianceByConfigRuleCommandOutput}.
   */
  paginateDescribeComplianceByConfigRule(
    args?: DescribeComplianceByConfigRuleCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeComplianceByConfigRuleCommandOutput>;

  /**
   * @see {@link DescribeComplianceByResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeComplianceByResourceCommandOutput}.
   */
  paginateDescribeComplianceByResource(
    args?: DescribeComplianceByResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeComplianceByResourceCommandOutput>;

  /**
   * @see {@link DescribeConfigRuleEvaluationStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeConfigRuleEvaluationStatusCommandOutput}.
   */
  paginateDescribeConfigRuleEvaluationStatus(
    args?: DescribeConfigRuleEvaluationStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeConfigRuleEvaluationStatusCommandOutput>;

  /**
   * @see {@link DescribeConfigRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeConfigRulesCommandOutput}.
   */
  paginateDescribeConfigRules(
    args?: DescribeConfigRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeConfigRulesCommandOutput>;

  /**
   * @see {@link DescribeConfigurationAggregatorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeConfigurationAggregatorsCommandOutput}.
   */
  paginateDescribeConfigurationAggregators(
    args?: DescribeConfigurationAggregatorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeConfigurationAggregatorsCommandOutput>;

  /**
   * @see {@link DescribeConfigurationAggregatorSourcesStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeConfigurationAggregatorSourcesStatusCommandOutput}.
   */
  paginateDescribeConfigurationAggregatorSourcesStatus(
    args: DescribeConfigurationAggregatorSourcesStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeConfigurationAggregatorSourcesStatusCommandOutput>;

  /**
   * @see {@link DescribeConformancePackComplianceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeConformancePackComplianceCommandOutput}.
   */
  paginateDescribeConformancePackCompliance(
    args: DescribeConformancePackComplianceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeConformancePackComplianceCommandOutput>;

  /**
   * @see {@link DescribeConformancePacksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeConformancePacksCommandOutput}.
   */
  paginateDescribeConformancePacks(
    args?: DescribeConformancePacksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeConformancePacksCommandOutput>;

  /**
   * @see {@link DescribeConformancePackStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeConformancePackStatusCommandOutput}.
   */
  paginateDescribeConformancePackStatus(
    args?: DescribeConformancePackStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeConformancePackStatusCommandOutput>;

  /**
   * @see {@link DescribeOrganizationConfigRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOrganizationConfigRulesCommandOutput}.
   */
  paginateDescribeOrganizationConfigRules(
    args?: DescribeOrganizationConfigRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOrganizationConfigRulesCommandOutput>;

  /**
   * @see {@link DescribeOrganizationConfigRuleStatusesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOrganizationConfigRuleStatusesCommandOutput}.
   */
  paginateDescribeOrganizationConfigRuleStatuses(
    args?: DescribeOrganizationConfigRuleStatusesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOrganizationConfigRuleStatusesCommandOutput>;

  /**
   * @see {@link DescribeOrganizationConformancePacksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOrganizationConformancePacksCommandOutput}.
   */
  paginateDescribeOrganizationConformancePacks(
    args?: DescribeOrganizationConformancePacksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOrganizationConformancePacksCommandOutput>;

  /**
   * @see {@link DescribeOrganizationConformancePackStatusesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOrganizationConformancePackStatusesCommandOutput}.
   */
  paginateDescribeOrganizationConformancePackStatuses(
    args?: DescribeOrganizationConformancePackStatusesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOrganizationConformancePackStatusesCommandOutput>;

  /**
   * @see {@link DescribePendingAggregationRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribePendingAggregationRequestsCommandOutput}.
   */
  paginateDescribePendingAggregationRequests(
    args?: DescribePendingAggregationRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribePendingAggregationRequestsCommandOutput>;

  /**
   * @see {@link DescribeRemediationExceptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeRemediationExceptionsCommandOutput}.
   */
  paginateDescribeRemediationExceptions(
    args: DescribeRemediationExceptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeRemediationExceptionsCommandOutput>;

  /**
   * @see {@link DescribeRemediationExecutionStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeRemediationExecutionStatusCommandOutput}.
   */
  paginateDescribeRemediationExecutionStatus(
    args: DescribeRemediationExecutionStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeRemediationExecutionStatusCommandOutput>;

  /**
   * @see {@link DescribeRetentionConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeRetentionConfigurationsCommandOutput}.
   */
  paginateDescribeRetentionConfigurations(
    args?: DescribeRetentionConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeRetentionConfigurationsCommandOutput>;

  /**
   * @see {@link GetAggregateComplianceDetailsByConfigRuleCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAggregateComplianceDetailsByConfigRuleCommandOutput}.
   */
  paginateGetAggregateComplianceDetailsByConfigRule(
    args: GetAggregateComplianceDetailsByConfigRuleCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAggregateComplianceDetailsByConfigRuleCommandOutput>;

  /**
   * @see {@link GetAggregateConfigRuleComplianceSummaryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAggregateConfigRuleComplianceSummaryCommandOutput}.
   */
  paginateGetAggregateConfigRuleComplianceSummary(
    args: GetAggregateConfigRuleComplianceSummaryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAggregateConfigRuleComplianceSummaryCommandOutput>;

  /**
   * @see {@link GetAggregateConformancePackComplianceSummaryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAggregateConformancePackComplianceSummaryCommandOutput}.
   */
  paginateGetAggregateConformancePackComplianceSummary(
    args: GetAggregateConformancePackComplianceSummaryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAggregateConformancePackComplianceSummaryCommandOutput>;

  /**
   * @see {@link GetAggregateDiscoveredResourceCountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAggregateDiscoveredResourceCountsCommandOutput}.
   */
  paginateGetAggregateDiscoveredResourceCounts(
    args: GetAggregateDiscoveredResourceCountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAggregateDiscoveredResourceCountsCommandOutput>;

  /**
   * @see {@link GetComplianceDetailsByConfigRuleCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetComplianceDetailsByConfigRuleCommandOutput}.
   */
  paginateGetComplianceDetailsByConfigRule(
    args: GetComplianceDetailsByConfigRuleCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetComplianceDetailsByConfigRuleCommandOutput>;

  /**
   * @see {@link GetComplianceDetailsByResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetComplianceDetailsByResourceCommandOutput}.
   */
  paginateGetComplianceDetailsByResource(
    args?: GetComplianceDetailsByResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetComplianceDetailsByResourceCommandOutput>;

  /**
   * @see {@link GetConformancePackComplianceDetailsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetConformancePackComplianceDetailsCommandOutput}.
   */
  paginateGetConformancePackComplianceDetails(
    args: GetConformancePackComplianceDetailsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetConformancePackComplianceDetailsCommandOutput>;

  /**
   * @see {@link GetConformancePackComplianceSummaryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetConformancePackComplianceSummaryCommandOutput}.
   */
  paginateGetConformancePackComplianceSummary(
    args: GetConformancePackComplianceSummaryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetConformancePackComplianceSummaryCommandOutput>;

  /**
   * @see {@link GetDiscoveredResourceCountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetDiscoveredResourceCountsCommandOutput}.
   */
  paginateGetDiscoveredResourceCounts(
    args?: GetDiscoveredResourceCountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetDiscoveredResourceCountsCommandOutput>;

  /**
   * @see {@link GetOrganizationConfigRuleDetailedStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetOrganizationConfigRuleDetailedStatusCommandOutput}.
   */
  paginateGetOrganizationConfigRuleDetailedStatus(
    args: GetOrganizationConfigRuleDetailedStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetOrganizationConfigRuleDetailedStatusCommandOutput>;

  /**
   * @see {@link GetOrganizationConformancePackDetailedStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetOrganizationConformancePackDetailedStatusCommandOutput}.
   */
  paginateGetOrganizationConformancePackDetailedStatus(
    args: GetOrganizationConformancePackDetailedStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetOrganizationConformancePackDetailedStatusCommandOutput>;

  /**
   * @see {@link GetResourceConfigHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetResourceConfigHistoryCommandOutput}.
   */
  paginateGetResourceConfigHistory(
    args: GetResourceConfigHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetResourceConfigHistoryCommandOutput>;

  /**
   * @see {@link ListAggregateDiscoveredResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAggregateDiscoveredResourcesCommandOutput}.
   */
  paginateListAggregateDiscoveredResources(
    args: ListAggregateDiscoveredResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAggregateDiscoveredResourcesCommandOutput>;

  /**
   * @see {@link ListConfigurationRecordersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConfigurationRecordersCommandOutput}.
   */
  paginateListConfigurationRecorders(
    args?: ListConfigurationRecordersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConfigurationRecordersCommandOutput>;

  /**
   * @see {@link ListConformancePackComplianceScoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConformancePackComplianceScoresCommandOutput}.
   */
  paginateListConformancePackComplianceScores(
    args?: ListConformancePackComplianceScoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConformancePackComplianceScoresCommandOutput>;

  /**
   * @see {@link ListDiscoveredResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDiscoveredResourcesCommandOutput}.
   */
  paginateListDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDiscoveredResourcesCommandOutput>;

  /**
   * @see {@link ListResourceEvaluationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceEvaluationsCommandOutput}.
   */
  paginateListResourceEvaluations(
    args?: ListResourceEvaluationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceEvaluationsCommandOutput>;

  /**
   * @see {@link ListStoredQueriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStoredQueriesCommandOutput}.
   */
  paginateListStoredQueries(
    args?: ListStoredQueriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStoredQueriesCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;

  /**
   * @see {@link SelectAggregateResourceConfigCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SelectAggregateResourceConfigCommandOutput}.
   */
  paginateSelectAggregateResourceConfig(
    args: SelectAggregateResourceConfigCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SelectAggregateResourceConfigCommandOutput>;

  /**
   * @see {@link SelectResourceConfigCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SelectResourceConfigCommandOutput}.
   */
  paginateSelectResourceConfig(
    args: SelectResourceConfigCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SelectResourceConfigCommandOutput>;
}

/**
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
 * @public
 */
export class ConfigService extends ConfigServiceClient implements ConfigService {}
createAggregatedClient(commands, ConfigService, { paginators });
