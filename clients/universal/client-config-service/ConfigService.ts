import { ConfigServiceClient } from "./ConfigServiceClient";
import { BatchGetAggregateResourceConfigInput } from "./types/BatchGetAggregateResourceConfigInput";
import { BatchGetAggregateResourceConfigOutput } from "./types/BatchGetAggregateResourceConfigOutput";
import { BatchGetResourceConfigInput } from "./types/BatchGetResourceConfigInput";
import { BatchGetResourceConfigOutput } from "./types/BatchGetResourceConfigOutput";
import { DeleteAggregationAuthorizationInput } from "./types/DeleteAggregationAuthorizationInput";
import { DeleteAggregationAuthorizationOutput } from "./types/DeleteAggregationAuthorizationOutput";
import { DeleteConfigRuleInput } from "./types/DeleteConfigRuleInput";
import { DeleteConfigRuleOutput } from "./types/DeleteConfigRuleOutput";
import { DeleteConfigurationAggregatorInput } from "./types/DeleteConfigurationAggregatorInput";
import { DeleteConfigurationAggregatorOutput } from "./types/DeleteConfigurationAggregatorOutput";
import { DeleteConfigurationRecorderInput } from "./types/DeleteConfigurationRecorderInput";
import { DeleteConfigurationRecorderOutput } from "./types/DeleteConfigurationRecorderOutput";
import { DeleteDeliveryChannelInput } from "./types/DeleteDeliveryChannelInput";
import { DeleteDeliveryChannelOutput } from "./types/DeleteDeliveryChannelOutput";
import { DeleteEvaluationResultsInput } from "./types/DeleteEvaluationResultsInput";
import { DeleteEvaluationResultsOutput } from "./types/DeleteEvaluationResultsOutput";
import { DeleteOrganizationConfigRuleInput } from "./types/DeleteOrganizationConfigRuleInput";
import { DeleteOrganizationConfigRuleOutput } from "./types/DeleteOrganizationConfigRuleOutput";
import { DeletePendingAggregationRequestInput } from "./types/DeletePendingAggregationRequestInput";
import { DeletePendingAggregationRequestOutput } from "./types/DeletePendingAggregationRequestOutput";
import { DeleteRemediationConfigurationInput } from "./types/DeleteRemediationConfigurationInput";
import { DeleteRemediationConfigurationOutput } from "./types/DeleteRemediationConfigurationOutput";
import { DeleteRetentionConfigurationInput } from "./types/DeleteRetentionConfigurationInput";
import { DeleteRetentionConfigurationOutput } from "./types/DeleteRetentionConfigurationOutput";
import { DeliverConfigSnapshotInput } from "./types/DeliverConfigSnapshotInput";
import { DeliverConfigSnapshotOutput } from "./types/DeliverConfigSnapshotOutput";
import { DescribeAggregateComplianceByConfigRulesInput } from "./types/DescribeAggregateComplianceByConfigRulesInput";
import { DescribeAggregateComplianceByConfigRulesOutput } from "./types/DescribeAggregateComplianceByConfigRulesOutput";
import { DescribeAggregationAuthorizationsInput } from "./types/DescribeAggregationAuthorizationsInput";
import { DescribeAggregationAuthorizationsOutput } from "./types/DescribeAggregationAuthorizationsOutput";
import { DescribeComplianceByConfigRuleInput } from "./types/DescribeComplianceByConfigRuleInput";
import { DescribeComplianceByConfigRuleOutput } from "./types/DescribeComplianceByConfigRuleOutput";
import { DescribeComplianceByResourceInput } from "./types/DescribeComplianceByResourceInput";
import { DescribeComplianceByResourceOutput } from "./types/DescribeComplianceByResourceOutput";
import { DescribeConfigRuleEvaluationStatusInput } from "./types/DescribeConfigRuleEvaluationStatusInput";
import { DescribeConfigRuleEvaluationStatusOutput } from "./types/DescribeConfigRuleEvaluationStatusOutput";
import { DescribeConfigRulesInput } from "./types/DescribeConfigRulesInput";
import { DescribeConfigRulesOutput } from "./types/DescribeConfigRulesOutput";
import { DescribeConfigurationAggregatorSourcesStatusInput } from "./types/DescribeConfigurationAggregatorSourcesStatusInput";
import { DescribeConfigurationAggregatorSourcesStatusOutput } from "./types/DescribeConfigurationAggregatorSourcesStatusOutput";
import { DescribeConfigurationAggregatorsInput } from "./types/DescribeConfigurationAggregatorsInput";
import { DescribeConfigurationAggregatorsOutput } from "./types/DescribeConfigurationAggregatorsOutput";
import { DescribeConfigurationRecorderStatusInput } from "./types/DescribeConfigurationRecorderStatusInput";
import { DescribeConfigurationRecorderStatusOutput } from "./types/DescribeConfigurationRecorderStatusOutput";
import { DescribeConfigurationRecordersInput } from "./types/DescribeConfigurationRecordersInput";
import { DescribeConfigurationRecordersOutput } from "./types/DescribeConfigurationRecordersOutput";
import { DescribeDeliveryChannelStatusInput } from "./types/DescribeDeliveryChannelStatusInput";
import { DescribeDeliveryChannelStatusOutput } from "./types/DescribeDeliveryChannelStatusOutput";
import { DescribeDeliveryChannelsInput } from "./types/DescribeDeliveryChannelsInput";
import { DescribeDeliveryChannelsOutput } from "./types/DescribeDeliveryChannelsOutput";
import { DescribeOrganizationConfigRuleStatusesInput } from "./types/DescribeOrganizationConfigRuleStatusesInput";
import { DescribeOrganizationConfigRuleStatusesOutput } from "./types/DescribeOrganizationConfigRuleStatusesOutput";
import { DescribeOrganizationConfigRulesInput } from "./types/DescribeOrganizationConfigRulesInput";
import { DescribeOrganizationConfigRulesOutput } from "./types/DescribeOrganizationConfigRulesOutput";
import { DescribePendingAggregationRequestsInput } from "./types/DescribePendingAggregationRequestsInput";
import { DescribePendingAggregationRequestsOutput } from "./types/DescribePendingAggregationRequestsOutput";
import { DescribeRemediationConfigurationsInput } from "./types/DescribeRemediationConfigurationsInput";
import { DescribeRemediationConfigurationsOutput } from "./types/DescribeRemediationConfigurationsOutput";
import { DescribeRemediationExecutionStatusInput } from "./types/DescribeRemediationExecutionStatusInput";
import { DescribeRemediationExecutionStatusOutput } from "./types/DescribeRemediationExecutionStatusOutput";
import { DescribeRetentionConfigurationsInput } from "./types/DescribeRetentionConfigurationsInput";
import { DescribeRetentionConfigurationsOutput } from "./types/DescribeRetentionConfigurationsOutput";
import { GetAggregateComplianceDetailsByConfigRuleInput } from "./types/GetAggregateComplianceDetailsByConfigRuleInput";
import { GetAggregateComplianceDetailsByConfigRuleOutput } from "./types/GetAggregateComplianceDetailsByConfigRuleOutput";
import { GetAggregateConfigRuleComplianceSummaryInput } from "./types/GetAggregateConfigRuleComplianceSummaryInput";
import { GetAggregateConfigRuleComplianceSummaryOutput } from "./types/GetAggregateConfigRuleComplianceSummaryOutput";
import { GetAggregateDiscoveredResourceCountsInput } from "./types/GetAggregateDiscoveredResourceCountsInput";
import { GetAggregateDiscoveredResourceCountsOutput } from "./types/GetAggregateDiscoveredResourceCountsOutput";
import { GetAggregateResourceConfigInput } from "./types/GetAggregateResourceConfigInput";
import { GetAggregateResourceConfigOutput } from "./types/GetAggregateResourceConfigOutput";
import { GetComplianceDetailsByConfigRuleInput } from "./types/GetComplianceDetailsByConfigRuleInput";
import { GetComplianceDetailsByConfigRuleOutput } from "./types/GetComplianceDetailsByConfigRuleOutput";
import { GetComplianceDetailsByResourceInput } from "./types/GetComplianceDetailsByResourceInput";
import { GetComplianceDetailsByResourceOutput } from "./types/GetComplianceDetailsByResourceOutput";
import { GetComplianceSummaryByConfigRuleInput } from "./types/GetComplianceSummaryByConfigRuleInput";
import { GetComplianceSummaryByConfigRuleOutput } from "./types/GetComplianceSummaryByConfigRuleOutput";
import { GetComplianceSummaryByResourceTypeInput } from "./types/GetComplianceSummaryByResourceTypeInput";
import { GetComplianceSummaryByResourceTypeOutput } from "./types/GetComplianceSummaryByResourceTypeOutput";
import { GetDiscoveredResourceCountsInput } from "./types/GetDiscoveredResourceCountsInput";
import { GetDiscoveredResourceCountsOutput } from "./types/GetDiscoveredResourceCountsOutput";
import { GetOrganizationConfigRuleDetailedStatusInput } from "./types/GetOrganizationConfigRuleDetailedStatusInput";
import { GetOrganizationConfigRuleDetailedStatusOutput } from "./types/GetOrganizationConfigRuleDetailedStatusOutput";
import { GetResourceConfigHistoryInput } from "./types/GetResourceConfigHistoryInput";
import { GetResourceConfigHistoryOutput } from "./types/GetResourceConfigHistoryOutput";
import { InsufficientDeliveryPolicyException } from "./types/InsufficientDeliveryPolicyException";
import { InsufficientPermissionsException } from "./types/InsufficientPermissionsException";
import { InvalidConfigurationRecorderNameException } from "./types/InvalidConfigurationRecorderNameException";
import { InvalidDeliveryChannelNameException } from "./types/InvalidDeliveryChannelNameException";
import { InvalidExpressionException } from "./types/InvalidExpressionException";
import { InvalidLimitException } from "./types/InvalidLimitException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidParameterValueException } from "./types/InvalidParameterValueException";
import { InvalidRecordingGroupException } from "./types/InvalidRecordingGroupException";
import { InvalidResultTokenException } from "./types/InvalidResultTokenException";
import { InvalidRoleException } from "./types/InvalidRoleException";
import { InvalidS3KeyPrefixException } from "./types/InvalidS3KeyPrefixException";
import { InvalidSNSTopicARNException } from "./types/InvalidSNSTopicARNException";
import { InvalidTimeRangeException } from "./types/InvalidTimeRangeException";
import { LastDeliveryChannelDeleteFailedException } from "./types/LastDeliveryChannelDeleteFailedException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListAggregateDiscoveredResourcesInput } from "./types/ListAggregateDiscoveredResourcesInput";
import { ListAggregateDiscoveredResourcesOutput } from "./types/ListAggregateDiscoveredResourcesOutput";
import { ListDiscoveredResourcesInput } from "./types/ListDiscoveredResourcesInput";
import { ListDiscoveredResourcesOutput } from "./types/ListDiscoveredResourcesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { MaxNumberOfConfigRulesExceededException } from "./types/MaxNumberOfConfigRulesExceededException";
import { MaxNumberOfConfigurationRecordersExceededException } from "./types/MaxNumberOfConfigurationRecordersExceededException";
import { MaxNumberOfDeliveryChannelsExceededException } from "./types/MaxNumberOfDeliveryChannelsExceededException";
import { MaxNumberOfOrganizationConfigRulesExceededException } from "./types/MaxNumberOfOrganizationConfigRulesExceededException";
import { MaxNumberOfRetentionConfigurationsExceededException } from "./types/MaxNumberOfRetentionConfigurationsExceededException";
import { NoAvailableConfigurationRecorderException } from "./types/NoAvailableConfigurationRecorderException";
import { NoAvailableDeliveryChannelException } from "./types/NoAvailableDeliveryChannelException";
import { NoAvailableOrganizationException } from "./types/NoAvailableOrganizationException";
import { NoRunningConfigurationRecorderException } from "./types/NoRunningConfigurationRecorderException";
import { NoSuchBucketException } from "./types/NoSuchBucketException";
import { NoSuchConfigRuleException } from "./types/NoSuchConfigRuleException";
import { NoSuchConfigurationAggregatorException } from "./types/NoSuchConfigurationAggregatorException";
import { NoSuchConfigurationRecorderException } from "./types/NoSuchConfigurationRecorderException";
import { NoSuchDeliveryChannelException } from "./types/NoSuchDeliveryChannelException";
import { NoSuchOrganizationConfigRuleException } from "./types/NoSuchOrganizationConfigRuleException";
import { NoSuchRemediationConfigurationException } from "./types/NoSuchRemediationConfigurationException";
import { NoSuchRetentionConfigurationException } from "./types/NoSuchRetentionConfigurationException";
import { OrganizationAccessDeniedException } from "./types/OrganizationAccessDeniedException";
import { OrganizationAllFeaturesNotEnabledException } from "./types/OrganizationAllFeaturesNotEnabledException";
import { OversizedConfigurationItemException } from "./types/OversizedConfigurationItemException";
import { PutAggregationAuthorizationInput } from "./types/PutAggregationAuthorizationInput";
import { PutAggregationAuthorizationOutput } from "./types/PutAggregationAuthorizationOutput";
import { PutConfigRuleInput } from "./types/PutConfigRuleInput";
import { PutConfigRuleOutput } from "./types/PutConfigRuleOutput";
import { PutConfigurationAggregatorInput } from "./types/PutConfigurationAggregatorInput";
import { PutConfigurationAggregatorOutput } from "./types/PutConfigurationAggregatorOutput";
import { PutConfigurationRecorderInput } from "./types/PutConfigurationRecorderInput";
import { PutConfigurationRecorderOutput } from "./types/PutConfigurationRecorderOutput";
import { PutDeliveryChannelInput } from "./types/PutDeliveryChannelInput";
import { PutDeliveryChannelOutput } from "./types/PutDeliveryChannelOutput";
import { PutEvaluationsInput } from "./types/PutEvaluationsInput";
import { PutEvaluationsOutput } from "./types/PutEvaluationsOutput";
import { PutOrganizationConfigRuleInput } from "./types/PutOrganizationConfigRuleInput";
import { PutOrganizationConfigRuleOutput } from "./types/PutOrganizationConfigRuleOutput";
import { PutRemediationConfigurationsInput } from "./types/PutRemediationConfigurationsInput";
import { PutRemediationConfigurationsOutput } from "./types/PutRemediationConfigurationsOutput";
import { PutRetentionConfigurationInput } from "./types/PutRetentionConfigurationInput";
import { PutRetentionConfigurationOutput } from "./types/PutRetentionConfigurationOutput";
import { RemediationInProgressException } from "./types/RemediationInProgressException";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotDiscoveredException } from "./types/ResourceNotDiscoveredException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { SelectResourceConfigInput } from "./types/SelectResourceConfigInput";
import { SelectResourceConfigOutput } from "./types/SelectResourceConfigOutput";
import { StartConfigRulesEvaluationInput } from "./types/StartConfigRulesEvaluationInput";
import { StartConfigRulesEvaluationOutput } from "./types/StartConfigRulesEvaluationOutput";
import { StartConfigurationRecorderInput } from "./types/StartConfigurationRecorderInput";
import { StartConfigurationRecorderOutput } from "./types/StartConfigurationRecorderOutput";
import { StartRemediationExecutionInput } from "./types/StartRemediationExecutionInput";
import { StartRemediationExecutionOutput } from "./types/StartRemediationExecutionOutput";
import { StopConfigurationRecorderInput } from "./types/StopConfigurationRecorderInput";
import { StopConfigurationRecorderOutput } from "./types/StopConfigurationRecorderOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { ValidationException } from "./types/ValidationException";
import { BatchGetAggregateResourceConfigCommand } from "./commands/BatchGetAggregateResourceConfigCommand";
import { BatchGetResourceConfigCommand } from "./commands/BatchGetResourceConfigCommand";
import { DeleteAggregationAuthorizationCommand } from "./commands/DeleteAggregationAuthorizationCommand";
import { DeleteConfigRuleCommand } from "./commands/DeleteConfigRuleCommand";
import { DeleteConfigurationAggregatorCommand } from "./commands/DeleteConfigurationAggregatorCommand";
import { DeleteConfigurationRecorderCommand } from "./commands/DeleteConfigurationRecorderCommand";
import { DeleteDeliveryChannelCommand } from "./commands/DeleteDeliveryChannelCommand";
import { DeleteEvaluationResultsCommand } from "./commands/DeleteEvaluationResultsCommand";
import { DeleteOrganizationConfigRuleCommand } from "./commands/DeleteOrganizationConfigRuleCommand";
import { DeletePendingAggregationRequestCommand } from "./commands/DeletePendingAggregationRequestCommand";
import { DeleteRemediationConfigurationCommand } from "./commands/DeleteRemediationConfigurationCommand";
import { DeleteRetentionConfigurationCommand } from "./commands/DeleteRetentionConfigurationCommand";
import { DeliverConfigSnapshotCommand } from "./commands/DeliverConfigSnapshotCommand";
import { DescribeAggregateComplianceByConfigRulesCommand } from "./commands/DescribeAggregateComplianceByConfigRulesCommand";
import { DescribeAggregationAuthorizationsCommand } from "./commands/DescribeAggregationAuthorizationsCommand";
import { DescribeComplianceByConfigRuleCommand } from "./commands/DescribeComplianceByConfigRuleCommand";
import { DescribeComplianceByResourceCommand } from "./commands/DescribeComplianceByResourceCommand";
import { DescribeConfigRuleEvaluationStatusCommand } from "./commands/DescribeConfigRuleEvaluationStatusCommand";
import { DescribeConfigRulesCommand } from "./commands/DescribeConfigRulesCommand";
import { DescribeConfigurationAggregatorSourcesStatusCommand } from "./commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import { DescribeConfigurationAggregatorsCommand } from "./commands/DescribeConfigurationAggregatorsCommand";
import { DescribeConfigurationRecorderStatusCommand } from "./commands/DescribeConfigurationRecorderStatusCommand";
import { DescribeConfigurationRecordersCommand } from "./commands/DescribeConfigurationRecordersCommand";
import { DescribeDeliveryChannelStatusCommand } from "./commands/DescribeDeliveryChannelStatusCommand";
import { DescribeDeliveryChannelsCommand } from "./commands/DescribeDeliveryChannelsCommand";
import { DescribeOrganizationConfigRuleStatusesCommand } from "./commands/DescribeOrganizationConfigRuleStatusesCommand";
import { DescribeOrganizationConfigRulesCommand } from "./commands/DescribeOrganizationConfigRulesCommand";
import { DescribePendingAggregationRequestsCommand } from "./commands/DescribePendingAggregationRequestsCommand";
import { DescribeRemediationConfigurationsCommand } from "./commands/DescribeRemediationConfigurationsCommand";
import { DescribeRemediationExecutionStatusCommand } from "./commands/DescribeRemediationExecutionStatusCommand";
import { DescribeRetentionConfigurationsCommand } from "./commands/DescribeRetentionConfigurationsCommand";
import { GetAggregateComplianceDetailsByConfigRuleCommand } from "./commands/GetAggregateComplianceDetailsByConfigRuleCommand";
import { GetAggregateConfigRuleComplianceSummaryCommand } from "./commands/GetAggregateConfigRuleComplianceSummaryCommand";
import { GetAggregateDiscoveredResourceCountsCommand } from "./commands/GetAggregateDiscoveredResourceCountsCommand";
import { GetAggregateResourceConfigCommand } from "./commands/GetAggregateResourceConfigCommand";
import { GetComplianceDetailsByConfigRuleCommand } from "./commands/GetComplianceDetailsByConfigRuleCommand";
import { GetComplianceDetailsByResourceCommand } from "./commands/GetComplianceDetailsByResourceCommand";
import { GetComplianceSummaryByConfigRuleCommand } from "./commands/GetComplianceSummaryByConfigRuleCommand";
import { GetComplianceSummaryByResourceTypeCommand } from "./commands/GetComplianceSummaryByResourceTypeCommand";
import { GetDiscoveredResourceCountsCommand } from "./commands/GetDiscoveredResourceCountsCommand";
import { GetOrganizationConfigRuleDetailedStatusCommand } from "./commands/GetOrganizationConfigRuleDetailedStatusCommand";
import { GetResourceConfigHistoryCommand } from "./commands/GetResourceConfigHistoryCommand";
import { ListAggregateDiscoveredResourcesCommand } from "./commands/ListAggregateDiscoveredResourcesCommand";
import { ListDiscoveredResourcesCommand } from "./commands/ListDiscoveredResourcesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PutAggregationAuthorizationCommand } from "./commands/PutAggregationAuthorizationCommand";
import { PutConfigRuleCommand } from "./commands/PutConfigRuleCommand";
import { PutConfigurationAggregatorCommand } from "./commands/PutConfigurationAggregatorCommand";
import { PutConfigurationRecorderCommand } from "./commands/PutConfigurationRecorderCommand";
import { PutDeliveryChannelCommand } from "./commands/PutDeliveryChannelCommand";
import { PutEvaluationsCommand } from "./commands/PutEvaluationsCommand";
import { PutOrganizationConfigRuleCommand } from "./commands/PutOrganizationConfigRuleCommand";
import { PutRemediationConfigurationsCommand } from "./commands/PutRemediationConfigurationsCommand";
import { PutRetentionConfigurationCommand } from "./commands/PutRetentionConfigurationCommand";
import { SelectResourceConfigCommand } from "./commands/SelectResourceConfigCommand";
import { StartConfigRulesEvaluationCommand } from "./commands/StartConfigRulesEvaluationCommand";
import { StartConfigurationRecorderCommand } from "./commands/StartConfigurationRecorderCommand";
import { StartRemediationExecutionCommand } from "./commands/StartRemediationExecutionCommand";
import { StopConfigurationRecorderCommand } from "./commands/StopConfigurationRecorderCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";

export class ConfigService extends ConfigServiceClient {
  /**
   * <p>Returns the current configuration items for resources that are present in your AWS Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return tags and relationships.</p> </li> </ul> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {NoSuchConfigurationAggregatorException} <p>You have specified a configuration aggregator that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetAggregateResourceConfig(
    args: BatchGetAggregateResourceConfigInput
  ): Promise<BatchGetAggregateResourceConfigOutput>;
  public batchGetAggregateResourceConfig(
    args: BatchGetAggregateResourceConfigInput,
    cb: (err: any, data?: BatchGetAggregateResourceConfigOutput) => void
  ): void;
  public batchGetAggregateResourceConfig(
    args: BatchGetAggregateResourceConfigInput,
    cb?: (err: any, data?: BatchGetAggregateResourceConfigOutput) => void
  ): Promise<BatchGetAggregateResourceConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetAggregateResourceConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the current configuration for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {NoAvailableConfigurationRecorderException} <p>There are no configuration recorders available to provide the role needed to describe your resources. Create a configuration recorder.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetResourceConfig(
    args: BatchGetResourceConfigInput
  ): Promise<BatchGetResourceConfigOutput>;
  public batchGetResourceConfig(
    args: BatchGetResourceConfigInput,
    cb: (err: any, data?: BatchGetResourceConfigOutput) => void
  ): void;
  public batchGetResourceConfig(
    args: BatchGetResourceConfigInput,
    cb?: (err: any, data?: BatchGetResourceConfigOutput) => void
  ): Promise<BatchGetResourceConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetResourceConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the authorization granted to the specified configuration aggregator account in a specified region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAggregationAuthorization(
    args: DeleteAggregationAuthorizationInput
  ): Promise<DeleteAggregationAuthorizationOutput>;
  public deleteAggregationAuthorization(
    args: DeleteAggregationAuthorizationInput,
    cb: (err: any, data?: DeleteAggregationAuthorizationOutput) => void
  ): void;
  public deleteAggregationAuthorization(
    args: DeleteAggregationAuthorizationInput,
    cb?: (err: any, data?: DeleteAggregationAuthorizationOutput) => void
  ): Promise<DeleteAggregationAuthorizationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAggregationAuthorizationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified AWS Config rule and all of its evaluation results.</p> <p>AWS Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchConfigRuleException} <p>One or more AWS Config rules in the request are invalid. Verify that the rule names are correct and try again.</p>
   *   - {ResourceInUseException} <p>The rule is currently being deleted or the rule is deleting your evaluation results. Try your request again later.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConfigRule(
    args: DeleteConfigRuleInput
  ): Promise<DeleteConfigRuleOutput>;
  public deleteConfigRule(
    args: DeleteConfigRuleInput,
    cb: (err: any, data?: DeleteConfigRuleOutput) => void
  ): void;
  public deleteConfigRule(
    args: DeleteConfigRuleInput,
    cb?: (err: any, data?: DeleteConfigRuleOutput) => void
  ): Promise<DeleteConfigRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConfigRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchConfigurationAggregatorException} <p>You have specified a configuration aggregator that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConfigurationAggregator(
    args: DeleteConfigurationAggregatorInput
  ): Promise<DeleteConfigurationAggregatorOutput>;
  public deleteConfigurationAggregator(
    args: DeleteConfigurationAggregatorInput,
    cb: (err: any, data?: DeleteConfigurationAggregatorOutput) => void
  ): void;
  public deleteConfigurationAggregator(
    args: DeleteConfigurationAggregatorInput,
    cb?: (err: any, data?: DeleteConfigurationAggregatorOutput) => void
  ): Promise<DeleteConfigurationAggregatorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConfigurationAggregatorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, AWS Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the AWS Config console until you create a new configuration recorder.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchConfigurationRecorderException} <p>You have specified a configuration recorder that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConfigurationRecorder(
    args: DeleteConfigurationRecorderInput
  ): Promise<DeleteConfigurationRecorderOutput>;
  public deleteConfigurationRecorder(
    args: DeleteConfigurationRecorderInput,
    cb: (err: any, data?: DeleteConfigurationRecorderOutput) => void
  ): void;
  public deleteConfigurationRecorder(
    args: DeleteConfigurationRecorderInput,
    cb?: (err: any, data?: DeleteConfigurationRecorderOutput) => void
  ): Promise<DeleteConfigurationRecorderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConfigurationRecorderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the delivery channel.</p> <p>Before you can delete the delivery channel, you must stop the configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchDeliveryChannelException} <p>You have specified a delivery channel that does not exist.</p>
   *   - {LastDeliveryChannelDeleteFailedException} <p>You cannot delete the delivery channel you specified because the configuration recorder is running.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDeliveryChannel(
    args: DeleteDeliveryChannelInput
  ): Promise<DeleteDeliveryChannelOutput>;
  public deleteDeliveryChannel(
    args: DeleteDeliveryChannelInput,
    cb: (err: any, data?: DeleteDeliveryChannelOutput) => void
  ): void;
  public deleteDeliveryChannel(
    args: DeleteDeliveryChannelInput,
    cb?: (err: any, data?: DeleteDeliveryChannelOutput) => void
  ): Promise<DeleteDeliveryChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDeliveryChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the evaluation results for the specified AWS Config rule. You can specify one AWS Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your AWS resources against the rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchConfigRuleException} <p>One or more AWS Config rules in the request are invalid. Verify that the rule names are correct and try again.</p>
   *   - {ResourceInUseException} <p>The rule is currently being deleted or the rule is deleting your evaluation results. Try your request again later.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEvaluationResults(
    args: DeleteEvaluationResultsInput
  ): Promise<DeleteEvaluationResultsOutput>;
  public deleteEvaluationResults(
    args: DeleteEvaluationResultsInput,
    cb: (err: any, data?: DeleteEvaluationResultsOutput) => void
  ): void;
  public deleteEvaluationResults(
    args: DeleteEvaluationResultsInput,
    cb?: (err: any, data?: DeleteEvaluationResultsOutput) => void
  ): Promise<DeleteEvaluationResultsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEvaluationResultsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * DeleteOrganizationConfigRule operation
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchOrganizationConfigRuleException} NoSuchOrganizationConfigRuleException shape
   *   - {ResourceInUseException} <p>The rule is currently being deleted or the rule is deleting your evaluation results. Try your request again later.</p>
   *   - {OrganizationAccessDeniedException} <p>No permission to call the EnableAWSServiceAccess API.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteOrganizationConfigRule(
    args: DeleteOrganizationConfigRuleInput
  ): Promise<DeleteOrganizationConfigRuleOutput>;
  public deleteOrganizationConfigRule(
    args: DeleteOrganizationConfigRuleInput,
    cb: (err: any, data?: DeleteOrganizationConfigRuleOutput) => void
  ): void;
  public deleteOrganizationConfigRule(
    args: DeleteOrganizationConfigRuleInput,
    cb?: (err: any, data?: DeleteOrganizationConfigRuleOutput) => void
  ): Promise<DeleteOrganizationConfigRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteOrganizationConfigRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes pending authorization requests for a specified aggregator account in a specified region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePendingAggregationRequest(
    args: DeletePendingAggregationRequestInput
  ): Promise<DeletePendingAggregationRequestOutput>;
  public deletePendingAggregationRequest(
    args: DeletePendingAggregationRequestInput,
    cb: (err: any, data?: DeletePendingAggregationRequestOutput) => void
  ): void;
  public deletePendingAggregationRequest(
    args: DeletePendingAggregationRequestInput,
    cb?: (err: any, data?: DeletePendingAggregationRequestOutput) => void
  ): Promise<DeletePendingAggregationRequestOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePendingAggregationRequestCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the remediation configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchRemediationConfigurationException} <p>You specified an AWS Config rule without a remediation configuration.</p>
   *   - {RemediationInProgressException} RemediationInProgressException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRemediationConfiguration(
    args: DeleteRemediationConfigurationInput
  ): Promise<DeleteRemediationConfigurationOutput>;
  public deleteRemediationConfiguration(
    args: DeleteRemediationConfigurationInput,
    cb: (err: any, data?: DeleteRemediationConfigurationOutput) => void
  ): void;
  public deleteRemediationConfiguration(
    args: DeleteRemediationConfigurationInput,
    cb?: (err: any, data?: DeleteRemediationConfigurationOutput) => void
  ): Promise<DeleteRemediationConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRemediationConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the retention configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {NoSuchRetentionConfigurationException} <p>You have specified a retention configuration that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRetentionConfiguration(
    args: DeleteRetentionConfigurationInput
  ): Promise<DeleteRetentionConfigurationOutput>;
  public deleteRetentionConfiguration(
    args: DeleteRetentionConfigurationInput,
    cb: (err: any, data?: DeleteRetentionConfigurationOutput) => void
  ): void;
  public deleteRetentionConfiguration(
    args: DeleteRetentionConfigurationInput,
    cb?: (err: any, data?: DeleteRetentionConfigurationOutput) => void
  ): Promise<DeleteRetentionConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRetentionConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, AWS Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchDeliveryChannelException} <p>You have specified a delivery channel that does not exist.</p>
   *   - {NoAvailableConfigurationRecorderException} <p>There are no configuration recorders available to provide the role needed to describe your resources. Create a configuration recorder.</p>
   *   - {NoRunningConfigurationRecorderException} <p>There is no configuration recorder running.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deliverConfigSnapshot(
    args: DeliverConfigSnapshotInput
  ): Promise<DeliverConfigSnapshotOutput>;
  public deliverConfigSnapshot(
    args: DeliverConfigSnapshotInput,
    cb: (err: any, data?: DeliverConfigSnapshotOutput) => void
  ): void;
  public deliverConfigSnapshot(
    args: DeliverConfigSnapshotInput,
    cb?: (err: any, data?: DeliverConfigSnapshotOutput) => void
  ): Promise<DeliverConfigSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeliverConfigSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. </p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {NoSuchConfigurationAggregatorException} <p>You have specified a configuration aggregator that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAggregateComplianceByConfigRules(
    args: DescribeAggregateComplianceByConfigRulesInput
  ): Promise<DescribeAggregateComplianceByConfigRulesOutput>;
  public describeAggregateComplianceByConfigRules(
    args: DescribeAggregateComplianceByConfigRulesInput,
    cb: (
      err: any,
      data?: DescribeAggregateComplianceByConfigRulesOutput
    ) => void
  ): void;
  public describeAggregateComplianceByConfigRules(
    args: DescribeAggregateComplianceByConfigRulesInput,
    cb?: (
      err: any,
      data?: DescribeAggregateComplianceByConfigRulesOutput
    ) => void
  ): Promise<DescribeAggregateComplianceByConfigRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAggregateComplianceByConfigRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of authorizations granted to various aggregator accounts and regions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAggregationAuthorizations(
    args: DescribeAggregationAuthorizationsInput
  ): Promise<DescribeAggregationAuthorizationsOutput>;
  public describeAggregationAuthorizations(
    args: DescribeAggregationAuthorizationsInput,
    cb: (err: any, data?: DescribeAggregationAuthorizationsOutput) => void
  ): void;
  public describeAggregationAuthorizations(
    args: DescribeAggregationAuthorizationsInput,
    cb?: (err: any, data?: DescribeAggregationAuthorizationsOutput) => void
  ): Promise<DescribeAggregationAuthorizationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAggregationAuthorizationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Indicates whether the specified AWS Config rules are compliant. If a rule is noncompliant, this action returns the number of AWS resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If AWS Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>AWS Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's AWS Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {NoSuchConfigRuleException} <p>One or more AWS Config rules in the request are invalid. Verify that the rule names are correct and try again.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeComplianceByConfigRule(
    args: DescribeComplianceByConfigRuleInput
  ): Promise<DescribeComplianceByConfigRuleOutput>;
  public describeComplianceByConfigRule(
    args: DescribeComplianceByConfigRuleInput,
    cb: (err: any, data?: DescribeComplianceByConfigRuleOutput) => void
  ): void;
  public describeComplianceByConfigRule(
    args: DescribeComplianceByConfigRuleInput,
    cb?: (err: any, data?: DescribeComplianceByConfigRuleOutput) => void
  ): Promise<DescribeComplianceByConfigRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeComplianceByConfigRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Indicates whether the specified AWS resources are compliant. If a resource is noncompliant, this action returns the number of AWS Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the AWS Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If AWS Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>AWS Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's AWS Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeComplianceByResource(
    args: DescribeComplianceByResourceInput
  ): Promise<DescribeComplianceByResourceOutput>;
  public describeComplianceByResource(
    args: DescribeComplianceByResourceInput,
    cb: (err: any, data?: DescribeComplianceByResourceOutput) => void
  ): void;
  public describeComplianceByResource(
    args: DescribeComplianceByResourceInput,
    cb?: (err: any, data?: DescribeComplianceByResourceOutput) => void
  ): Promise<DescribeComplianceByResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeComplianceByResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns status information for each of your AWS managed Config rules. The status includes information such as the last time AWS Config invoked the rule, the last time AWS Config failed to invoke the rule, and the related error for the last failure.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchConfigRuleException} <p>One or more AWS Config rules in the request are invalid. Verify that the rule names are correct and try again.</p>
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConfigRuleEvaluationStatus(
    args: DescribeConfigRuleEvaluationStatusInput
  ): Promise<DescribeConfigRuleEvaluationStatusOutput>;
  public describeConfigRuleEvaluationStatus(
    args: DescribeConfigRuleEvaluationStatusInput,
    cb: (err: any, data?: DescribeConfigRuleEvaluationStatusOutput) => void
  ): void;
  public describeConfigRuleEvaluationStatus(
    args: DescribeConfigRuleEvaluationStatusInput,
    cb?: (err: any, data?: DescribeConfigRuleEvaluationStatusOutput) => void
  ): Promise<DescribeConfigRuleEvaluationStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConfigRuleEvaluationStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns details about your AWS Config rules.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchConfigRuleException} <p>One or more AWS Config rules in the request are invalid. Verify that the rule names are correct and try again.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConfigRules(
    args: DescribeConfigRulesInput
  ): Promise<DescribeConfigRulesOutput>;
  public describeConfigRules(
    args: DescribeConfigRulesInput,
    cb: (err: any, data?: DescribeConfigRulesOutput) => void
  ): void;
  public describeConfigRules(
    args: DescribeConfigRulesInput,
    cb?: (err: any, data?: DescribeConfigRulesOutput) => void
  ): Promise<DescribeConfigRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConfigRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns status information for sources within an aggregator. The status includes information about the last time AWS Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {NoSuchConfigurationAggregatorException} <p>You have specified a configuration aggregator that does not exist.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConfigurationAggregatorSourcesStatus(
    args: DescribeConfigurationAggregatorSourcesStatusInput
  ): Promise<DescribeConfigurationAggregatorSourcesStatusOutput>;
  public describeConfigurationAggregatorSourcesStatus(
    args: DescribeConfigurationAggregatorSourcesStatusInput,
    cb: (
      err: any,
      data?: DescribeConfigurationAggregatorSourcesStatusOutput
    ) => void
  ): void;
  public describeConfigurationAggregatorSourcesStatus(
    args: DescribeConfigurationAggregatorSourcesStatusInput,
    cb?: (
      err: any,
      data?: DescribeConfigurationAggregatorSourcesStatusOutput
    ) => void
  ): Promise<DescribeConfigurationAggregatorSourcesStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConfigurationAggregatorSourcesStatusCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {NoSuchConfigurationAggregatorException} <p>You have specified a configuration aggregator that does not exist.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConfigurationAggregators(
    args: DescribeConfigurationAggregatorsInput
  ): Promise<DescribeConfigurationAggregatorsOutput>;
  public describeConfigurationAggregators(
    args: DescribeConfigurationAggregatorsInput,
    cb: (err: any, data?: DescribeConfigurationAggregatorsOutput) => void
  ): void;
  public describeConfigurationAggregators(
    args: DescribeConfigurationAggregatorsInput,
    cb?: (err: any, data?: DescribeConfigurationAggregatorsOutput) => void
  ): Promise<DescribeConfigurationAggregatorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConfigurationAggregatorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the current status of the specified configuration recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchConfigurationRecorderException} <p>You have specified a configuration recorder that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConfigurationRecorderStatus(
    args: DescribeConfigurationRecorderStatusInput
  ): Promise<DescribeConfigurationRecorderStatusOutput>;
  public describeConfigurationRecorderStatus(
    args: DescribeConfigurationRecorderStatusInput,
    cb: (err: any, data?: DescribeConfigurationRecorderStatusOutput) => void
  ): void;
  public describeConfigurationRecorderStatus(
    args: DescribeConfigurationRecorderStatusInput,
    cb?: (err: any, data?: DescribeConfigurationRecorderStatusOutput) => void
  ): Promise<DescribeConfigurationRecorderStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConfigurationRecorderStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchConfigurationRecorderException} <p>You have specified a configuration recorder that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConfigurationRecorders(
    args: DescribeConfigurationRecordersInput
  ): Promise<DescribeConfigurationRecordersOutput>;
  public describeConfigurationRecorders(
    args: DescribeConfigurationRecordersInput,
    cb: (err: any, data?: DescribeConfigurationRecordersOutput) => void
  ): void;
  public describeConfigurationRecorders(
    args: DescribeConfigurationRecordersInput,
    cb?: (err: any, data?: DescribeConfigurationRecordersOutput) => void
  ): Promise<DescribeConfigurationRecordersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConfigurationRecordersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchDeliveryChannelException} <p>You have specified a delivery channel that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDeliveryChannelStatus(
    args: DescribeDeliveryChannelStatusInput
  ): Promise<DescribeDeliveryChannelStatusOutput>;
  public describeDeliveryChannelStatus(
    args: DescribeDeliveryChannelStatusInput,
    cb: (err: any, data?: DescribeDeliveryChannelStatusOutput) => void
  ): void;
  public describeDeliveryChannelStatus(
    args: DescribeDeliveryChannelStatusInput,
    cb?: (err: any, data?: DescribeDeliveryChannelStatusOutput) => void
  ): Promise<DescribeDeliveryChannelStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDeliveryChannelStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchDeliveryChannelException} <p>You have specified a delivery channel that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDeliveryChannels(
    args: DescribeDeliveryChannelsInput
  ): Promise<DescribeDeliveryChannelsOutput>;
  public describeDeliveryChannels(
    args: DescribeDeliveryChannelsInput,
    cb: (err: any, data?: DescribeDeliveryChannelsOutput) => void
  ): void;
  public describeDeliveryChannels(
    args: DescribeDeliveryChannelsInput,
    cb?: (err: any, data?: DescribeDeliveryChannelsOutput) => void
  ): Promise<DescribeDeliveryChannelsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDeliveryChannelsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * DescribeOrganizationConfigRuleStatuses operation
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchOrganizationConfigRuleException} NoSuchOrganizationConfigRuleException shape
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {OrganizationAccessDeniedException} <p>No permission to call the EnableAWSServiceAccess API.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOrganizationConfigRuleStatuses(
    args: DescribeOrganizationConfigRuleStatusesInput
  ): Promise<DescribeOrganizationConfigRuleStatusesOutput>;
  public describeOrganizationConfigRuleStatuses(
    args: DescribeOrganizationConfigRuleStatusesInput,
    cb: (err: any, data?: DescribeOrganizationConfigRuleStatusesOutput) => void
  ): void;
  public describeOrganizationConfigRuleStatuses(
    args: DescribeOrganizationConfigRuleStatusesInput,
    cb?: (err: any, data?: DescribeOrganizationConfigRuleStatusesOutput) => void
  ): Promise<DescribeOrganizationConfigRuleStatusesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOrganizationConfigRuleStatusesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * DescribeOrganizationConfigRules operation
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchOrganizationConfigRuleException} NoSuchOrganizationConfigRuleException shape
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {OrganizationAccessDeniedException} <p>No permission to call the EnableAWSServiceAccess API.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOrganizationConfigRules(
    args: DescribeOrganizationConfigRulesInput
  ): Promise<DescribeOrganizationConfigRulesOutput>;
  public describeOrganizationConfigRules(
    args: DescribeOrganizationConfigRulesInput,
    cb: (err: any, data?: DescribeOrganizationConfigRulesOutput) => void
  ): void;
  public describeOrganizationConfigRules(
    args: DescribeOrganizationConfigRulesInput,
    cb?: (err: any, data?: DescribeOrganizationConfigRulesOutput) => void
  ): Promise<DescribeOrganizationConfigRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOrganizationConfigRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of all pending aggregation requests.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePendingAggregationRequests(
    args: DescribePendingAggregationRequestsInput
  ): Promise<DescribePendingAggregationRequestsOutput>;
  public describePendingAggregationRequests(
    args: DescribePendingAggregationRequestsInput,
    cb: (err: any, data?: DescribePendingAggregationRequestsOutput) => void
  ): void;
  public describePendingAggregationRequests(
    args: DescribePendingAggregationRequestsInput,
    cb?: (err: any, data?: DescribePendingAggregationRequestsOutput) => void
  ): Promise<DescribePendingAggregationRequestsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePendingAggregationRequestsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the details of one or more remediation configurations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRemediationConfigurations(
    args: DescribeRemediationConfigurationsInput
  ): Promise<DescribeRemediationConfigurationsOutput>;
  public describeRemediationConfigurations(
    args: DescribeRemediationConfigurationsInput,
    cb: (err: any, data?: DescribeRemediationConfigurationsOutput) => void
  ): void;
  public describeRemediationConfigurations(
    args: DescribeRemediationConfigurationsInput,
    cb?: (err: any, data?: DescribeRemediationConfigurationsOutput) => void
  ): Promise<DescribeRemediationConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRemediationConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchRemediationConfigurationException} <p>You specified an AWS Config rule without a remediation configuration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRemediationExecutionStatus(
    args: DescribeRemediationExecutionStatusInput
  ): Promise<DescribeRemediationExecutionStatusOutput>;
  public describeRemediationExecutionStatus(
    args: DescribeRemediationExecutionStatusInput,
    cb: (err: any, data?: DescribeRemediationExecutionStatusOutput) => void
  ): void;
  public describeRemediationExecutionStatus(
    args: DescribeRemediationExecutionStatusInput,
    cb?: (err: any, data?: DescribeRemediationExecutionStatusOutput) => void
  ): Promise<DescribeRemediationExecutionStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRemediationExecutionStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, AWS Config supports only one retention configuration per region in your account.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {NoSuchRetentionConfigurationException} <p>You have specified a retention configuration that does not exist.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRetentionConfigurations(
    args: DescribeRetentionConfigurationsInput
  ): Promise<DescribeRetentionConfigurationsOutput>;
  public describeRetentionConfigurations(
    args: DescribeRetentionConfigurationsInput,
    cb: (err: any, data?: DescribeRetentionConfigurationsOutput) => void
  ): void;
  public describeRetentionConfigurations(
    args: DescribeRetentionConfigurationsInput,
    cb?: (err: any, data?: DescribeRetentionConfigurationsOutput) => void
  ): Promise<DescribeRetentionConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRetentionConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the evaluation results for the specified AWS Config rule for a specific resource in a rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a nextToken, the results are displayed on the next page.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {NoSuchConfigurationAggregatorException} <p>You have specified a configuration aggregator that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAggregateComplianceDetailsByConfigRule(
    args: GetAggregateComplianceDetailsByConfigRuleInput
  ): Promise<GetAggregateComplianceDetailsByConfigRuleOutput>;
  public getAggregateComplianceDetailsByConfigRule(
    args: GetAggregateComplianceDetailsByConfigRuleInput,
    cb: (
      err: any,
      data?: GetAggregateComplianceDetailsByConfigRuleOutput
    ) => void
  ): void;
  public getAggregateComplianceDetailsByConfigRule(
    args: GetAggregateComplianceDetailsByConfigRuleInput,
    cb?: (
      err: any,
      data?: GetAggregateComplianceDetailsByConfigRuleOutput
    ) => void
  ): Promise<GetAggregateComplianceDetailsByConfigRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAggregateComplianceDetailsByConfigRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {NoSuchConfigurationAggregatorException} <p>You have specified a configuration aggregator that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAggregateConfigRuleComplianceSummary(
    args: GetAggregateConfigRuleComplianceSummaryInput
  ): Promise<GetAggregateConfigRuleComplianceSummaryOutput>;
  public getAggregateConfigRuleComplianceSummary(
    args: GetAggregateConfigRuleComplianceSummaryInput,
    cb: (err: any, data?: GetAggregateConfigRuleComplianceSummaryOutput) => void
  ): void;
  public getAggregateConfigRuleComplianceSummary(
    args: GetAggregateConfigRuleComplianceSummaryInput,
    cb?: (
      err: any,
      data?: GetAggregateConfigRuleComplianceSummaryOutput
    ) => void
  ): Promise<GetAggregateConfigRuleComplianceSummaryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAggregateConfigRuleComplianceSummaryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the resource counts across accounts and regions that are present in your AWS Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p> <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {NoSuchConfigurationAggregatorException} <p>You have specified a configuration aggregator that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAggregateDiscoveredResourceCounts(
    args: GetAggregateDiscoveredResourceCountsInput
  ): Promise<GetAggregateDiscoveredResourceCountsOutput>;
  public getAggregateDiscoveredResourceCounts(
    args: GetAggregateDiscoveredResourceCountsInput,
    cb: (err: any, data?: GetAggregateDiscoveredResourceCountsOutput) => void
  ): void;
  public getAggregateDiscoveredResourceCounts(
    args: GetAggregateDiscoveredResourceCountsInput,
    cb?: (err: any, data?: GetAggregateDiscoveredResourceCountsOutput) => void
  ): Promise<GetAggregateDiscoveredResourceCountsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAggregateDiscoveredResourceCountsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns configuration item that is aggregated for your specific resource in a specific source account and region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {NoSuchConfigurationAggregatorException} <p>You have specified a configuration aggregator that does not exist.</p>
   *   - {OversizedConfigurationItemException} <p>The configuration item size is outside the allowable range.</p>
   *   - {ResourceNotDiscoveredException} <p>You have specified a resource that is either unknown or has not been discovered.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAggregateResourceConfig(
    args: GetAggregateResourceConfigInput
  ): Promise<GetAggregateResourceConfigOutput>;
  public getAggregateResourceConfig(
    args: GetAggregateResourceConfigInput,
    cb: (err: any, data?: GetAggregateResourceConfigOutput) => void
  ): void;
  public getAggregateResourceConfig(
    args: GetAggregateResourceConfigInput,
    cb?: (err: any, data?: GetAggregateResourceConfigOutput) => void
  ): Promise<GetAggregateResourceConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAggregateResourceConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the evaluation results for the specified AWS Config rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {NoSuchConfigRuleException} <p>One or more AWS Config rules in the request are invalid. Verify that the rule names are correct and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getComplianceDetailsByConfigRule(
    args: GetComplianceDetailsByConfigRuleInput
  ): Promise<GetComplianceDetailsByConfigRuleOutput>;
  public getComplianceDetailsByConfigRule(
    args: GetComplianceDetailsByConfigRuleInput,
    cb: (err: any, data?: GetComplianceDetailsByConfigRuleOutput) => void
  ): void;
  public getComplianceDetailsByConfigRule(
    args: GetComplianceDetailsByConfigRuleInput,
    cb?: (err: any, data?: GetComplianceDetailsByConfigRuleOutput) => void
  ): Promise<GetComplianceDetailsByConfigRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetComplianceDetailsByConfigRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the evaluation results for the specified AWS resource. The results indicate which AWS Config rules were used to evaluate the resource, when each rule was last used, and whether the resource complies with each rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getComplianceDetailsByResource(
    args: GetComplianceDetailsByResourceInput
  ): Promise<GetComplianceDetailsByResourceOutput>;
  public getComplianceDetailsByResource(
    args: GetComplianceDetailsByResourceInput,
    cb: (err: any, data?: GetComplianceDetailsByResourceOutput) => void
  ): void;
  public getComplianceDetailsByResource(
    args: GetComplianceDetailsByResourceInput,
    cb?: (err: any, data?: GetComplianceDetailsByResourceOutput) => void
  ): Promise<GetComplianceDetailsByResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetComplianceDetailsByResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the number of AWS Config rules that are compliant and noncompliant, up to a maximum of 25 for each.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getComplianceSummaryByConfigRule(
    args: GetComplianceSummaryByConfigRuleInput
  ): Promise<GetComplianceSummaryByConfigRuleOutput>;
  public getComplianceSummaryByConfigRule(
    args: GetComplianceSummaryByConfigRuleInput,
    cb: (err: any, data?: GetComplianceSummaryByConfigRuleOutput) => void
  ): void;
  public getComplianceSummaryByConfigRule(
    args: GetComplianceSummaryByConfigRuleInput,
    cb?: (err: any, data?: GetComplianceSummaryByConfigRuleOutput) => void
  ): Promise<GetComplianceSummaryByConfigRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetComplianceSummaryByConfigRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getComplianceSummaryByResourceType(
    args: GetComplianceSummaryByResourceTypeInput
  ): Promise<GetComplianceSummaryByResourceTypeOutput>;
  public getComplianceSummaryByResourceType(
    args: GetComplianceSummaryByResourceTypeInput,
    cb: (err: any, data?: GetComplianceSummaryByResourceTypeOutput) => void
  ): void;
  public getComplianceSummaryByResourceType(
    args: GetComplianceSummaryByResourceTypeInput,
    cb?: (err: any, data?: GetComplianceSummaryByResourceTypeOutput) => void
  ): Promise<GetComplianceSummaryByResourceTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetComplianceSummaryByResourceTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in this region for your AWS account. </p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>AWS Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>AWS Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, AWS Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new AWS Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for AWS Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDiscoveredResourceCounts(
    args: GetDiscoveredResourceCountsInput
  ): Promise<GetDiscoveredResourceCountsOutput>;
  public getDiscoveredResourceCounts(
    args: GetDiscoveredResourceCountsInput,
    cb: (err: any, data?: GetDiscoveredResourceCountsOutput) => void
  ): void;
  public getDiscoveredResourceCounts(
    args: GetDiscoveredResourceCountsInput,
    cb?: (err: any, data?: GetDiscoveredResourceCountsOutput) => void
  ): Promise<GetDiscoveredResourceCountsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDiscoveredResourceCountsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * GetOrganizationConfigRuleDetailedStatus operation
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchOrganizationConfigRuleException} NoSuchOrganizationConfigRuleException shape
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {OrganizationAccessDeniedException} <p>No permission to call the EnableAWSServiceAccess API.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOrganizationConfigRuleDetailedStatus(
    args: GetOrganizationConfigRuleDetailedStatusInput
  ): Promise<GetOrganizationConfigRuleDetailedStatusOutput>;
  public getOrganizationConfigRuleDetailedStatus(
    args: GetOrganizationConfigRuleDetailedStatusInput,
    cb: (err: any, data?: GetOrganizationConfigRuleDetailedStatusOutput) => void
  ): void;
  public getOrganizationConfigRuleDetailedStatus(
    args: GetOrganizationConfigRuleDetailedStatusInput,
    cb?: (
      err: any,
      data?: GetOrganizationConfigRuleDetailedStatusOutput
    ) => void
  ): Promise<GetOrganizationConfigRuleDetailedStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOrganizationConfigRuleDetailedStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of configuration items for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), AWS Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, AWS Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {InvalidTimeRangeException} <p>The specified time range is not valid. The earlier time is not chronologically before the later time.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {NoAvailableConfigurationRecorderException} <p>There are no configuration recorders available to provide the role needed to describe your resources. Create a configuration recorder.</p>
   *   - {ResourceNotDiscoveredException} <p>You have specified a resource that is either unknown or has not been discovered.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResourceConfigHistory(
    args: GetResourceConfigHistoryInput
  ): Promise<GetResourceConfigHistoryOutput>;
  public getResourceConfigHistory(
    args: GetResourceConfigHistoryInput,
    cb: (err: any, data?: GetResourceConfigHistoryOutput) => void
  ): void;
  public getResourceConfigHistory(
    args: GetResourceConfigHistoryInput,
    cb?: (err: any, data?: GetResourceConfigHistoryOutput) => void
  ): Promise<GetResourceConfigHistoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourceConfigHistoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p> <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {NoSuchConfigurationAggregatorException} <p>You have specified a configuration aggregator that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAggregateDiscoveredResources(
    args: ListAggregateDiscoveredResourcesInput
  ): Promise<ListAggregateDiscoveredResourcesOutput>;
  public listAggregateDiscoveredResources(
    args: ListAggregateDiscoveredResourcesInput,
    cb: (err: any, data?: ListAggregateDiscoveredResourcesOutput) => void
  ): void;
  public listAggregateDiscoveredResources(
    args: ListAggregateDiscoveredResourcesInput,
    cb?: (err: any, data?: ListAggregateDiscoveredResourcesOutput) => void
  ): Promise<ListAggregateDiscoveredResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAggregateDiscoveredResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that AWS Config has discovered, including those that AWS Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, AWS Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {NoAvailableConfigurationRecorderException} <p>There are no configuration recorders available to provide the role needed to describe your resources. Create a configuration recorder.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDiscoveredResources(
    args: ListDiscoveredResourcesInput
  ): Promise<ListDiscoveredResourcesOutput>;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesInput,
    cb: (err: any, data?: ListDiscoveredResourcesOutput) => void
  ): void;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesInput,
    cb?: (err: any, data?: ListDiscoveredResourcesOutput) => void
  ): Promise<ListDiscoveredResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDiscoveredResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the tags for AWS Config resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>You have specified a resource that does not exist.</p>
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Authorizes the aggregator account and region to collect data from the source account and region. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putAggregationAuthorization(
    args: PutAggregationAuthorizationInput
  ): Promise<PutAggregationAuthorizationOutput>;
  public putAggregationAuthorization(
    args: PutAggregationAuthorizationInput,
    cb: (err: any, data?: PutAggregationAuthorizationOutput) => void
  ): void;
  public putAggregationAuthorization(
    args: PutAggregationAuthorizationInput,
    cb?: (err: any, data?: PutAggregationAuthorizationOutput) => void
  ): Promise<PutAggregationAuthorizationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutAggregationAuthorizationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates an AWS Config rule for evaluating whether your AWS resources comply with your desired configurations.</p> <p>You can use this action for custom AWS Config rules and AWS managed Config rules. A custom AWS Config rule is a rule that you develop and maintain. An AWS managed Config rule is a customizable, predefined rule that AWS Config provides.</p> <p>If you are adding a new custom AWS Config rule, you must first create the AWS Lambda function that the rule invokes to evaluate your resources. When you use the <code>PutConfigRule</code> action to add the rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function. Specify the ARN for the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>If you are adding an AWS managed Config rule, specify the rule's identifier for the <code>SourceIdentifier</code> key. To reference AWS managed Config rule identifiers, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">About AWS Managed Config Rules</a>.</p> <p>For any new rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by AWS Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>The maximum number of rules that AWS Config supports is 150.</p> <p>For information about requesting a rule limit increase, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config">AWS Config Limits</a> in the <i>AWS General Reference Guide</i>.</p> <p>For more information about developing and using AWS Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {MaxNumberOfConfigRulesExceededException} <p>Failed to add the AWS Config rule because the account already contains the maximum number of 150 rules. Consider deleting any deactivated rules before you add new rules.</p>
   *   - {ResourceInUseException} <p>The rule is currently being deleted or the rule is deleting your evaluation results. Try your request again later.</p>
   *   - {InsufficientPermissionsException} <p>Indicates one of the following errors:</p> <ul> <li> <p>The rule cannot be created because the IAM role assigned to AWS Config lacks permissions to perform the config:Put* action.</p> </li> <li> <p>The AWS Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p> </li> </ul>
   *   - {NoAvailableConfigurationRecorderException} <p>There are no configuration recorders available to provide the role needed to describe your resources. Create a configuration recorder.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putConfigRule(args: PutConfigRuleInput): Promise<PutConfigRuleOutput>;
  public putConfigRule(
    args: PutConfigRuleInput,
    cb: (err: any, data?: PutConfigRuleOutput) => void
  ): void;
  public putConfigRule(
    args: PutConfigRuleInput,
    cb?: (err: any, data?: PutConfigRuleOutput) => void
  ): Promise<PutConfigRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutConfigRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <note> <p>AWS Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the master account and all features must be enabled in your organization. AWS Config calls <code>EnableAwsServiceAccess</code> API to enable integration between AWS Config and AWS Organizations. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {LimitExceededException} <p>For <code>StartConfigRulesEvaluation</code> API, this exception is thrown if an evaluation is in progress or if you call the <a>StartConfigRulesEvaluation</a> API more than once per minute.</p> <p>For <code>PutConfigurationAggregator</code> API, this exception is thrown if the number of accounts and aggregators exceeds the limit.</p>
   *   - {InvalidRoleException} <p>You have provided a null or empty role ARN.</p>
   *   - {OrganizationAccessDeniedException} <p>No permission to call the EnableAWSServiceAccess API.</p>
   *   - {NoAvailableOrganizationException} <p>Organization does is no longer available.</p>
   *   - {OrganizationAllFeaturesNotEnabledException} <p>The configuration aggregator cannot be created because organization does not have all features enabled.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putConfigurationAggregator(
    args: PutConfigurationAggregatorInput
  ): Promise<PutConfigurationAggregatorOutput>;
  public putConfigurationAggregator(
    args: PutConfigurationAggregatorInput,
    cb: (err: any, data?: PutConfigurationAggregatorOutput) => void
  ): void;
  public putConfigurationAggregator(
    args: PutConfigurationAggregatorInput,
    cb?: (err: any, data?: PutConfigurationAggregatorOutput) => void
  ): Promise<PutConfigurationAggregatorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutConfigurationAggregatorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new configuration recorder to record the selected resource configurations.</p> <p>You can use this action to change the role <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> <p>If <code>ConfigurationRecorder</code> does not have the <b>recordingGroup</b> parameter specified, the default is to record all supported resource types.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {MaxNumberOfConfigurationRecordersExceededException} <p>You have reached the limit of the number of recorders you can create.</p>
   *   - {InvalidConfigurationRecorderNameException} <p>You have provided a configuration recorder name that is not valid.</p>
   *   - {InvalidRoleException} <p>You have provided a null or empty role ARN.</p>
   *   - {InvalidRecordingGroupException} <p>AWS Config throws an exception if the recording group does not contain a valid list of resource types. Invalid values might also be incorrectly formatted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putConfigurationRecorder(
    args: PutConfigurationRecorderInput
  ): Promise<PutConfigurationRecorderOutput>;
  public putConfigurationRecorder(
    args: PutConfigurationRecorderInput,
    cb: (err: any, data?: PutConfigurationRecorderOutput) => void
  ): void;
  public putConfigurationRecorder(
    args: PutConfigurationRecorderInput,
    cb?: (err: any, data?: PutConfigurationRecorderOutput) => void
  ): Promise<PutConfigurationRecorderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutConfigurationRecorderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.</p> <p>Before you can create a delivery channel, you must create a configuration recorder.</p> <p>You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.</p> <note> <p>You can have only one delivery channel per region in your account.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {MaxNumberOfDeliveryChannelsExceededException} <p>You have reached the limit of the number of delivery channels you can create.</p>
   *   - {NoAvailableConfigurationRecorderException} <p>There are no configuration recorders available to provide the role needed to describe your resources. Create a configuration recorder.</p>
   *   - {InvalidDeliveryChannelNameException} <p>The specified delivery channel name is not valid.</p>
   *   - {NoSuchBucketException} <p>The specified Amazon S3 bucket does not exist.</p>
   *   - {InvalidS3KeyPrefixException} <p>The specified Amazon S3 key prefix is not valid.</p>
   *   - {InvalidSNSTopicARNException} <p>The specified Amazon SNS topic does not exist.</p>
   *   - {InsufficientDeliveryPolicyException} <p>Your Amazon S3 bucket policy does not permit AWS Config to write to it.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putDeliveryChannel(
    args: PutDeliveryChannelInput
  ): Promise<PutDeliveryChannelOutput>;
  public putDeliveryChannel(
    args: PutDeliveryChannelInput,
    cb: (err: any, data?: PutDeliveryChannelOutput) => void
  ): void;
  public putDeliveryChannel(
    args: PutDeliveryChannelInput,
    cb?: (err: any, data?: PutDeliveryChannelOutput) => void
  ): Promise<PutDeliveryChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutDeliveryChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by an AWS Lambda function to deliver evaluation results to AWS Config. This action is required in every AWS Lambda function that is invoked by an AWS Config rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {InvalidResultTokenException} <p>The specified <code>ResultToken</code> is invalid.</p>
   *   - {NoSuchConfigRuleException} <p>One or more AWS Config rules in the request are invalid. Verify that the rule names are correct and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putEvaluations(
    args: PutEvaluationsInput
  ): Promise<PutEvaluationsOutput>;
  public putEvaluations(
    args: PutEvaluationsInput,
    cb: (err: any, data?: PutEvaluationsOutput) => void
  ): void;
  public putEvaluations(
    args: PutEvaluationsInput,
    cb?: (err: any, data?: PutEvaluationsOutput) => void
  ): Promise<PutEvaluationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutEvaluationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * PutOrganizationConfigRule operation
   *
   * This operation may fail with one of the following errors:
   *   - {MaxNumberOfOrganizationConfigRulesExceededException} MaxNumberOfOrganizationConfigRulesExceededException shape
   *   - {ResourceInUseException} <p>The rule is currently being deleted or the rule is deleting your evaluation results. Try your request again later.</p>
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {OrganizationAccessDeniedException} <p>No permission to call the EnableAWSServiceAccess API.</p>
   *   - {NoAvailableOrganizationException} <p>Organization does is no longer available.</p>
   *   - {OrganizationAllFeaturesNotEnabledException} <p>The configuration aggregator cannot be created because organization does not have all features enabled.</p>
   *   - {InsufficientPermissionsException} <p>Indicates one of the following errors:</p> <ul> <li> <p>The rule cannot be created because the IAM role assigned to AWS Config lacks permissions to perform the config:Put* action.</p> </li> <li> <p>The AWS Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putOrganizationConfigRule(
    args: PutOrganizationConfigRuleInput
  ): Promise<PutOrganizationConfigRuleOutput>;
  public putOrganizationConfigRule(
    args: PutOrganizationConfigRuleInput,
    cb: (err: any, data?: PutOrganizationConfigRuleOutput) => void
  ): void;
  public putOrganizationConfigRule(
    args: PutOrganizationConfigRuleInput,
    cb?: (err: any, data?: PutOrganizationConfigRuleOutput) => void
  ): Promise<PutOrganizationConfigRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutOrganizationConfigRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates the remediation configuration with a specific AWS Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the AWS Config rule. The AWS Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPermissionsException} <p>Indicates one of the following errors:</p> <ul> <li> <p>The rule cannot be created because the IAM role assigned to AWS Config lacks permissions to perform the config:Put* action.</p> </li> <li> <p>The AWS Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p> </li> </ul>
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putRemediationConfigurations(
    args: PutRemediationConfigurationsInput
  ): Promise<PutRemediationConfigurationsOutput>;
  public putRemediationConfigurations(
    args: PutRemediationConfigurationsInput,
    cb: (err: any, data?: PutRemediationConfigurationsOutput) => void
  ): void;
  public putRemediationConfigurations(
    args: PutRemediationConfigurationsInput,
    cb?: (err: any, data?: PutRemediationConfigurationsOutput) => void
  ): Promise<PutRemediationConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutRemediationConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates and updates the retention configuration with details about retention period (number of days) that AWS Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, AWS Config supports only one retention configuration per region in your account.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {MaxNumberOfRetentionConfigurationsExceededException} <p>Failed to add the retention configuration because a retention configuration with that name already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putRetentionConfiguration(
    args: PutRetentionConfigurationInput
  ): Promise<PutRetentionConfigurationOutput>;
  public putRetentionConfiguration(
    args: PutRetentionConfigurationInput,
    cb: (err: any, data?: PutRetentionConfigurationOutput) => void
  ): void;
  public putRetentionConfiguration(
    args: PutRetentionConfigurationInput,
    cb?: (err: any, data?: PutRetentionConfigurationOutput) => void
  ): Promise<PutRetentionConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutRetentionConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the AWS Config Developer Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidExpressionException} <p>The syntax of the query is incorrect.</p>
   *   - {InvalidLimitException} <p>The specified limit is outside the allowable range.</p>
   *   - {InvalidNextTokenException} <p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public selectResourceConfig(
    args: SelectResourceConfigInput
  ): Promise<SelectResourceConfigOutput>;
  public selectResourceConfig(
    args: SelectResourceConfigInput,
    cb: (err: any, data?: SelectResourceConfigOutput) => void
  ): void;
  public selectResourceConfig(
    args: SelectResourceConfigInput,
    cb?: (err: any, data?: SelectResourceConfigOutput) => void
  ): Promise<SelectResourceConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SelectResourceConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Runs an on-demand evaluation for the specified AWS Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 AWS Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have AWS Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, AWS Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>AWS Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchConfigRuleException} <p>One or more AWS Config rules in the request are invalid. Verify that the rule names are correct and try again.</p>
   *   - {LimitExceededException} <p>For <code>StartConfigRulesEvaluation</code> API, this exception is thrown if an evaluation is in progress or if you call the <a>StartConfigRulesEvaluation</a> API more than once per minute.</p> <p>For <code>PutConfigurationAggregator</code> API, this exception is thrown if the number of accounts and aggregators exceeds the limit.</p>
   *   - {ResourceInUseException} <p>The rule is currently being deleted or the rule is deleting your evaluation results. Try your request again later.</p>
   *   - {InvalidParameterValueException} <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startConfigRulesEvaluation(
    args: StartConfigRulesEvaluationInput
  ): Promise<StartConfigRulesEvaluationOutput>;
  public startConfigRulesEvaluation(
    args: StartConfigRulesEvaluationInput,
    cb: (err: any, data?: StartConfigRulesEvaluationOutput) => void
  ): void;
  public startConfigRulesEvaluation(
    args: StartConfigRulesEvaluationInput,
    cb?: (err: any, data?: StartConfigRulesEvaluationOutput) => void
  ): Promise<StartConfigRulesEvaluationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartConfigRulesEvaluationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts recording configurations of the AWS resources you have selected to record in your AWS account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchConfigurationRecorderException} <p>You have specified a configuration recorder that does not exist.</p>
   *   - {NoAvailableDeliveryChannelException} <p>There is no delivery channel available to record configurations.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startConfigurationRecorder(
    args: StartConfigurationRecorderInput
  ): Promise<StartConfigurationRecorderOutput>;
  public startConfigurationRecorder(
    args: StartConfigurationRecorderInput,
    cb: (err: any, data?: StartConfigurationRecorderOutput) => void
  ): void;
  public startConfigurationRecorder(
    args: StartConfigurationRecorderInput,
    cb?: (err: any, data?: StartConfigurationRecorderOutput) => void
  ): Promise<StartConfigurationRecorderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartConfigurationRecorderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Runs an on-demand remediation for the specified AWS Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p> <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientPermissionsException} <p>Indicates one of the following errors:</p> <ul> <li> <p>The rule cannot be created because the IAM role assigned to AWS Config lacks permissions to perform the config:Put* action.</p> </li> <li> <p>The AWS Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p> </li> </ul>
   *   - {NoSuchRemediationConfigurationException} <p>You specified an AWS Config rule without a remediation configuration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startRemediationExecution(
    args: StartRemediationExecutionInput
  ): Promise<StartRemediationExecutionOutput>;
  public startRemediationExecution(
    args: StartRemediationExecutionInput,
    cb: (err: any, data?: StartRemediationExecutionOutput) => void
  ): void;
  public startRemediationExecution(
    args: StartRemediationExecutionInput,
    cb?: (err: any, data?: StartRemediationExecutionOutput) => void
  ): Promise<StartRemediationExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartRemediationExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops recording configurations of the AWS resources you have selected to record in your AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchConfigurationRecorderException} <p>You have specified a configuration recorder that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopConfigurationRecorder(
    args: StopConfigurationRecorderInput
  ): Promise<StopConfigurationRecorderOutput>;
  public stopConfigurationRecorder(
    args: StopConfigurationRecorderInput,
    cb: (err: any, data?: StopConfigurationRecorderOutput) => void
  ): void;
  public stopConfigurationRecorder(
    args: StopConfigurationRecorderInput,
    cb?: (err: any, data?: StopConfigurationRecorderOutput) => void
  ): Promise<StopConfigurationRecorderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopConfigurationRecorderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {ResourceNotFoundException} <p>You have specified a resource that does not exist.</p>
   *   - {TooManyTagsException} <p>You have reached the limit of the number of tags you can use. You have more than 50 tags.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes specified tags from a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The requested action is not valid.</p>
   *   - {ResourceNotFoundException} <p>You have specified a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
