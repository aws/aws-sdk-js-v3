import { IoTClient } from "./IoTClient";
import { AcceptCertificateTransferInput } from "./types/AcceptCertificateTransferInput";
import { AcceptCertificateTransferOutput } from "./types/AcceptCertificateTransferOutput";
import { AddThingToBillingGroupInput } from "./types/AddThingToBillingGroupInput";
import { AddThingToBillingGroupOutput } from "./types/AddThingToBillingGroupOutput";
import { AddThingToThingGroupInput } from "./types/AddThingToThingGroupInput";
import { AddThingToThingGroupOutput } from "./types/AddThingToThingGroupOutput";
import { AssociateTargetsWithJobInput } from "./types/AssociateTargetsWithJobInput";
import { AssociateTargetsWithJobOutput } from "./types/AssociateTargetsWithJobOutput";
import { AttachPolicyInput } from "./types/AttachPolicyInput";
import { AttachPolicyOutput } from "./types/AttachPolicyOutput";
import { AttachPrincipalPolicyInput } from "./types/AttachPrincipalPolicyInput";
import { AttachPrincipalPolicyOutput } from "./types/AttachPrincipalPolicyOutput";
import { AttachSecurityProfileInput } from "./types/AttachSecurityProfileInput";
import { AttachSecurityProfileOutput } from "./types/AttachSecurityProfileOutput";
import { AttachThingPrincipalInput } from "./types/AttachThingPrincipalInput";
import { AttachThingPrincipalOutput } from "./types/AttachThingPrincipalOutput";
import { CancelAuditMitigationActionsTaskInput } from "./types/CancelAuditMitigationActionsTaskInput";
import { CancelAuditMitigationActionsTaskOutput } from "./types/CancelAuditMitigationActionsTaskOutput";
import { CancelAuditTaskInput } from "./types/CancelAuditTaskInput";
import { CancelAuditTaskOutput } from "./types/CancelAuditTaskOutput";
import { CancelCertificateTransferInput } from "./types/CancelCertificateTransferInput";
import { CancelCertificateTransferOutput } from "./types/CancelCertificateTransferOutput";
import { CancelJobExecutionInput } from "./types/CancelJobExecutionInput";
import { CancelJobExecutionOutput } from "./types/CancelJobExecutionOutput";
import { CancelJobInput } from "./types/CancelJobInput";
import { CancelJobOutput } from "./types/CancelJobOutput";
import { CertificateConflictException } from "./types/CertificateConflictException";
import { CertificateStateException } from "./types/CertificateStateException";
import { CertificateValidationException } from "./types/CertificateValidationException";
import { ClearDefaultAuthorizerInput } from "./types/ClearDefaultAuthorizerInput";
import { ClearDefaultAuthorizerOutput } from "./types/ClearDefaultAuthorizerOutput";
import { ConflictingResourceUpdateException } from "./types/ConflictingResourceUpdateException";
import { CreateAuthorizerInput } from "./types/CreateAuthorizerInput";
import { CreateAuthorizerOutput } from "./types/CreateAuthorizerOutput";
import { CreateBillingGroupInput } from "./types/CreateBillingGroupInput";
import { CreateBillingGroupOutput } from "./types/CreateBillingGroupOutput";
import { CreateCertificateFromCsrInput } from "./types/CreateCertificateFromCsrInput";
import { CreateCertificateFromCsrOutput } from "./types/CreateCertificateFromCsrOutput";
import { CreateDynamicThingGroupInput } from "./types/CreateDynamicThingGroupInput";
import { CreateDynamicThingGroupOutput } from "./types/CreateDynamicThingGroupOutput";
import { CreateJobInput } from "./types/CreateJobInput";
import { CreateJobOutput } from "./types/CreateJobOutput";
import { CreateKeysAndCertificateInput } from "./types/CreateKeysAndCertificateInput";
import { CreateKeysAndCertificateOutput } from "./types/CreateKeysAndCertificateOutput";
import { CreateMitigationActionInput } from "./types/CreateMitigationActionInput";
import { CreateMitigationActionOutput } from "./types/CreateMitigationActionOutput";
import { CreateOTAUpdateInput } from "./types/CreateOTAUpdateInput";
import { CreateOTAUpdateOutput } from "./types/CreateOTAUpdateOutput";
import { CreatePolicyInput } from "./types/CreatePolicyInput";
import { CreatePolicyOutput } from "./types/CreatePolicyOutput";
import { CreatePolicyVersionInput } from "./types/CreatePolicyVersionInput";
import { CreatePolicyVersionOutput } from "./types/CreatePolicyVersionOutput";
import { CreateRoleAliasInput } from "./types/CreateRoleAliasInput";
import { CreateRoleAliasOutput } from "./types/CreateRoleAliasOutput";
import { CreateScheduledAuditInput } from "./types/CreateScheduledAuditInput";
import { CreateScheduledAuditOutput } from "./types/CreateScheduledAuditOutput";
import { CreateSecurityProfileInput } from "./types/CreateSecurityProfileInput";
import { CreateSecurityProfileOutput } from "./types/CreateSecurityProfileOutput";
import { CreateStreamInput } from "./types/CreateStreamInput";
import { CreateStreamOutput } from "./types/CreateStreamOutput";
import { CreateThingGroupInput } from "./types/CreateThingGroupInput";
import { CreateThingGroupOutput } from "./types/CreateThingGroupOutput";
import { CreateThingInput } from "./types/CreateThingInput";
import { CreateThingOutput } from "./types/CreateThingOutput";
import { CreateThingTypeInput } from "./types/CreateThingTypeInput";
import { CreateThingTypeOutput } from "./types/CreateThingTypeOutput";
import { CreateTopicRuleInput } from "./types/CreateTopicRuleInput";
import { CreateTopicRuleOutput } from "./types/CreateTopicRuleOutput";
import { DeleteAccountAuditConfigurationInput } from "./types/DeleteAccountAuditConfigurationInput";
import { DeleteAccountAuditConfigurationOutput } from "./types/DeleteAccountAuditConfigurationOutput";
import { DeleteAuthorizerInput } from "./types/DeleteAuthorizerInput";
import { DeleteAuthorizerOutput } from "./types/DeleteAuthorizerOutput";
import { DeleteBillingGroupInput } from "./types/DeleteBillingGroupInput";
import { DeleteBillingGroupOutput } from "./types/DeleteBillingGroupOutput";
import { DeleteCACertificateInput } from "./types/DeleteCACertificateInput";
import { DeleteCACertificateOutput } from "./types/DeleteCACertificateOutput";
import { DeleteCertificateInput } from "./types/DeleteCertificateInput";
import { DeleteCertificateOutput } from "./types/DeleteCertificateOutput";
import { DeleteConflictException } from "./types/DeleteConflictException";
import { DeleteDynamicThingGroupInput } from "./types/DeleteDynamicThingGroupInput";
import { DeleteDynamicThingGroupOutput } from "./types/DeleteDynamicThingGroupOutput";
import { DeleteJobExecutionInput } from "./types/DeleteJobExecutionInput";
import { DeleteJobExecutionOutput } from "./types/DeleteJobExecutionOutput";
import { DeleteJobInput } from "./types/DeleteJobInput";
import { DeleteJobOutput } from "./types/DeleteJobOutput";
import { DeleteMitigationActionInput } from "./types/DeleteMitigationActionInput";
import { DeleteMitigationActionOutput } from "./types/DeleteMitigationActionOutput";
import { DeleteOTAUpdateInput } from "./types/DeleteOTAUpdateInput";
import { DeleteOTAUpdateOutput } from "./types/DeleteOTAUpdateOutput";
import { DeletePolicyInput } from "./types/DeletePolicyInput";
import { DeletePolicyOutput } from "./types/DeletePolicyOutput";
import { DeletePolicyVersionInput } from "./types/DeletePolicyVersionInput";
import { DeletePolicyVersionOutput } from "./types/DeletePolicyVersionOutput";
import { DeleteRegistrationCodeInput } from "./types/DeleteRegistrationCodeInput";
import { DeleteRegistrationCodeOutput } from "./types/DeleteRegistrationCodeOutput";
import { DeleteRoleAliasInput } from "./types/DeleteRoleAliasInput";
import { DeleteRoleAliasOutput } from "./types/DeleteRoleAliasOutput";
import { DeleteScheduledAuditInput } from "./types/DeleteScheduledAuditInput";
import { DeleteScheduledAuditOutput } from "./types/DeleteScheduledAuditOutput";
import { DeleteSecurityProfileInput } from "./types/DeleteSecurityProfileInput";
import { DeleteSecurityProfileOutput } from "./types/DeleteSecurityProfileOutput";
import { DeleteStreamInput } from "./types/DeleteStreamInput";
import { DeleteStreamOutput } from "./types/DeleteStreamOutput";
import { DeleteThingGroupInput } from "./types/DeleteThingGroupInput";
import { DeleteThingGroupOutput } from "./types/DeleteThingGroupOutput";
import { DeleteThingInput } from "./types/DeleteThingInput";
import { DeleteThingOutput } from "./types/DeleteThingOutput";
import { DeleteThingTypeInput } from "./types/DeleteThingTypeInput";
import { DeleteThingTypeOutput } from "./types/DeleteThingTypeOutput";
import { DeleteTopicRuleInput } from "./types/DeleteTopicRuleInput";
import { DeleteTopicRuleOutput } from "./types/DeleteTopicRuleOutput";
import { DeleteV2LoggingLevelInput } from "./types/DeleteV2LoggingLevelInput";
import { DeleteV2LoggingLevelOutput } from "./types/DeleteV2LoggingLevelOutput";
import { DeprecateThingTypeInput } from "./types/DeprecateThingTypeInput";
import { DeprecateThingTypeOutput } from "./types/DeprecateThingTypeOutput";
import { DescribeAccountAuditConfigurationInput } from "./types/DescribeAccountAuditConfigurationInput";
import { DescribeAccountAuditConfigurationOutput } from "./types/DescribeAccountAuditConfigurationOutput";
import { DescribeAuditFindingInput } from "./types/DescribeAuditFindingInput";
import { DescribeAuditFindingOutput } from "./types/DescribeAuditFindingOutput";
import { DescribeAuditMitigationActionsTaskInput } from "./types/DescribeAuditMitigationActionsTaskInput";
import { DescribeAuditMitigationActionsTaskOutput } from "./types/DescribeAuditMitigationActionsTaskOutput";
import { DescribeAuditTaskInput } from "./types/DescribeAuditTaskInput";
import { DescribeAuditTaskOutput } from "./types/DescribeAuditTaskOutput";
import { DescribeAuthorizerInput } from "./types/DescribeAuthorizerInput";
import { DescribeAuthorizerOutput } from "./types/DescribeAuthorizerOutput";
import { DescribeBillingGroupInput } from "./types/DescribeBillingGroupInput";
import { DescribeBillingGroupOutput } from "./types/DescribeBillingGroupOutput";
import { DescribeCACertificateInput } from "./types/DescribeCACertificateInput";
import { DescribeCACertificateOutput } from "./types/DescribeCACertificateOutput";
import { DescribeCertificateInput } from "./types/DescribeCertificateInput";
import { DescribeCertificateOutput } from "./types/DescribeCertificateOutput";
import { DescribeDefaultAuthorizerInput } from "./types/DescribeDefaultAuthorizerInput";
import { DescribeDefaultAuthorizerOutput } from "./types/DescribeDefaultAuthorizerOutput";
import { DescribeEndpointInput } from "./types/DescribeEndpointInput";
import { DescribeEndpointOutput } from "./types/DescribeEndpointOutput";
import { DescribeEventConfigurationsInput } from "./types/DescribeEventConfigurationsInput";
import { DescribeEventConfigurationsOutput } from "./types/DescribeEventConfigurationsOutput";
import { DescribeIndexInput } from "./types/DescribeIndexInput";
import { DescribeIndexOutput } from "./types/DescribeIndexOutput";
import { DescribeJobExecutionInput } from "./types/DescribeJobExecutionInput";
import { DescribeJobExecutionOutput } from "./types/DescribeJobExecutionOutput";
import { DescribeJobInput } from "./types/DescribeJobInput";
import { DescribeJobOutput } from "./types/DescribeJobOutput";
import { DescribeMitigationActionInput } from "./types/DescribeMitigationActionInput";
import { DescribeMitigationActionOutput } from "./types/DescribeMitigationActionOutput";
import { DescribeRoleAliasInput } from "./types/DescribeRoleAliasInput";
import { DescribeRoleAliasOutput } from "./types/DescribeRoleAliasOutput";
import { DescribeScheduledAuditInput } from "./types/DescribeScheduledAuditInput";
import { DescribeScheduledAuditOutput } from "./types/DescribeScheduledAuditOutput";
import { DescribeSecurityProfileInput } from "./types/DescribeSecurityProfileInput";
import { DescribeSecurityProfileOutput } from "./types/DescribeSecurityProfileOutput";
import { DescribeStreamInput } from "./types/DescribeStreamInput";
import { DescribeStreamOutput } from "./types/DescribeStreamOutput";
import { DescribeThingGroupInput } from "./types/DescribeThingGroupInput";
import { DescribeThingGroupOutput } from "./types/DescribeThingGroupOutput";
import { DescribeThingInput } from "./types/DescribeThingInput";
import { DescribeThingOutput } from "./types/DescribeThingOutput";
import { DescribeThingRegistrationTaskInput } from "./types/DescribeThingRegistrationTaskInput";
import { DescribeThingRegistrationTaskOutput } from "./types/DescribeThingRegistrationTaskOutput";
import { DescribeThingTypeInput } from "./types/DescribeThingTypeInput";
import { DescribeThingTypeOutput } from "./types/DescribeThingTypeOutput";
import { DetachPolicyInput } from "./types/DetachPolicyInput";
import { DetachPolicyOutput } from "./types/DetachPolicyOutput";
import { DetachPrincipalPolicyInput } from "./types/DetachPrincipalPolicyInput";
import { DetachPrincipalPolicyOutput } from "./types/DetachPrincipalPolicyOutput";
import { DetachSecurityProfileInput } from "./types/DetachSecurityProfileInput";
import { DetachSecurityProfileOutput } from "./types/DetachSecurityProfileOutput";
import { DetachThingPrincipalInput } from "./types/DetachThingPrincipalInput";
import { DetachThingPrincipalOutput } from "./types/DetachThingPrincipalOutput";
import { DisableTopicRuleInput } from "./types/DisableTopicRuleInput";
import { DisableTopicRuleOutput } from "./types/DisableTopicRuleOutput";
import { EnableTopicRuleInput } from "./types/EnableTopicRuleInput";
import { EnableTopicRuleOutput } from "./types/EnableTopicRuleOutput";
import { GetEffectivePoliciesInput } from "./types/GetEffectivePoliciesInput";
import { GetEffectivePoliciesOutput } from "./types/GetEffectivePoliciesOutput";
import { GetIndexingConfigurationInput } from "./types/GetIndexingConfigurationInput";
import { GetIndexingConfigurationOutput } from "./types/GetIndexingConfigurationOutput";
import { GetJobDocumentInput } from "./types/GetJobDocumentInput";
import { GetJobDocumentOutput } from "./types/GetJobDocumentOutput";
import { GetLoggingOptionsInput } from "./types/GetLoggingOptionsInput";
import { GetLoggingOptionsOutput } from "./types/GetLoggingOptionsOutput";
import { GetOTAUpdateInput } from "./types/GetOTAUpdateInput";
import { GetOTAUpdateOutput } from "./types/GetOTAUpdateOutput";
import { GetPolicyInput } from "./types/GetPolicyInput";
import { GetPolicyOutput } from "./types/GetPolicyOutput";
import { GetPolicyVersionInput } from "./types/GetPolicyVersionInput";
import { GetPolicyVersionOutput } from "./types/GetPolicyVersionOutput";
import { GetRegistrationCodeInput } from "./types/GetRegistrationCodeInput";
import { GetRegistrationCodeOutput } from "./types/GetRegistrationCodeOutput";
import { GetStatisticsInput } from "./types/GetStatisticsInput";
import { GetStatisticsOutput } from "./types/GetStatisticsOutput";
import { GetTopicRuleInput } from "./types/GetTopicRuleInput";
import { GetTopicRuleOutput } from "./types/GetTopicRuleOutput";
import { GetV2LoggingOptionsInput } from "./types/GetV2LoggingOptionsInput";
import { GetV2LoggingOptionsOutput } from "./types/GetV2LoggingOptionsOutput";
import { IndexNotReadyException } from "./types/IndexNotReadyException";
import { InternalException } from "./types/InternalException";
import { InternalFailureException } from "./types/InternalFailureException";
import { InvalidAggregationException } from "./types/InvalidAggregationException";
import { InvalidQueryException } from "./types/InvalidQueryException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { InvalidResponseException } from "./types/InvalidResponseException";
import { InvalidStateTransitionException } from "./types/InvalidStateTransitionException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListActiveViolationsInput } from "./types/ListActiveViolationsInput";
import { ListActiveViolationsOutput } from "./types/ListActiveViolationsOutput";
import { ListAttachedPoliciesInput } from "./types/ListAttachedPoliciesInput";
import { ListAttachedPoliciesOutput } from "./types/ListAttachedPoliciesOutput";
import { ListAuditFindingsInput } from "./types/ListAuditFindingsInput";
import { ListAuditFindingsOutput } from "./types/ListAuditFindingsOutput";
import { ListAuditMitigationActionsExecutionsInput } from "./types/ListAuditMitigationActionsExecutionsInput";
import { ListAuditMitigationActionsExecutionsOutput } from "./types/ListAuditMitigationActionsExecutionsOutput";
import { ListAuditMitigationActionsTasksInput } from "./types/ListAuditMitigationActionsTasksInput";
import { ListAuditMitigationActionsTasksOutput } from "./types/ListAuditMitigationActionsTasksOutput";
import { ListAuditTasksInput } from "./types/ListAuditTasksInput";
import { ListAuditTasksOutput } from "./types/ListAuditTasksOutput";
import { ListAuthorizersInput } from "./types/ListAuthorizersInput";
import { ListAuthorizersOutput } from "./types/ListAuthorizersOutput";
import { ListBillingGroupsInput } from "./types/ListBillingGroupsInput";
import { ListBillingGroupsOutput } from "./types/ListBillingGroupsOutput";
import { ListCACertificatesInput } from "./types/ListCACertificatesInput";
import { ListCACertificatesOutput } from "./types/ListCACertificatesOutput";
import { ListCertificatesByCAInput } from "./types/ListCertificatesByCAInput";
import { ListCertificatesByCAOutput } from "./types/ListCertificatesByCAOutput";
import { ListCertificatesInput } from "./types/ListCertificatesInput";
import { ListCertificatesOutput } from "./types/ListCertificatesOutput";
import { ListIndicesInput } from "./types/ListIndicesInput";
import { ListIndicesOutput } from "./types/ListIndicesOutput";
import { ListJobExecutionsForJobInput } from "./types/ListJobExecutionsForJobInput";
import { ListJobExecutionsForJobOutput } from "./types/ListJobExecutionsForJobOutput";
import { ListJobExecutionsForThingInput } from "./types/ListJobExecutionsForThingInput";
import { ListJobExecutionsForThingOutput } from "./types/ListJobExecutionsForThingOutput";
import { ListJobsInput } from "./types/ListJobsInput";
import { ListJobsOutput } from "./types/ListJobsOutput";
import { ListMitigationActionsInput } from "./types/ListMitigationActionsInput";
import { ListMitigationActionsOutput } from "./types/ListMitigationActionsOutput";
import { ListOTAUpdatesInput } from "./types/ListOTAUpdatesInput";
import { ListOTAUpdatesOutput } from "./types/ListOTAUpdatesOutput";
import { ListOutgoingCertificatesInput } from "./types/ListOutgoingCertificatesInput";
import { ListOutgoingCertificatesOutput } from "./types/ListOutgoingCertificatesOutput";
import { ListPoliciesInput } from "./types/ListPoliciesInput";
import { ListPoliciesOutput } from "./types/ListPoliciesOutput";
import { ListPolicyPrincipalsInput } from "./types/ListPolicyPrincipalsInput";
import { ListPolicyPrincipalsOutput } from "./types/ListPolicyPrincipalsOutput";
import { ListPolicyVersionsInput } from "./types/ListPolicyVersionsInput";
import { ListPolicyVersionsOutput } from "./types/ListPolicyVersionsOutput";
import { ListPrincipalPoliciesInput } from "./types/ListPrincipalPoliciesInput";
import { ListPrincipalPoliciesOutput } from "./types/ListPrincipalPoliciesOutput";
import { ListPrincipalThingsInput } from "./types/ListPrincipalThingsInput";
import { ListPrincipalThingsOutput } from "./types/ListPrincipalThingsOutput";
import { ListRoleAliasesInput } from "./types/ListRoleAliasesInput";
import { ListRoleAliasesOutput } from "./types/ListRoleAliasesOutput";
import { ListScheduledAuditsInput } from "./types/ListScheduledAuditsInput";
import { ListScheduledAuditsOutput } from "./types/ListScheduledAuditsOutput";
import { ListSecurityProfilesForTargetInput } from "./types/ListSecurityProfilesForTargetInput";
import { ListSecurityProfilesForTargetOutput } from "./types/ListSecurityProfilesForTargetOutput";
import { ListSecurityProfilesInput } from "./types/ListSecurityProfilesInput";
import { ListSecurityProfilesOutput } from "./types/ListSecurityProfilesOutput";
import { ListStreamsInput } from "./types/ListStreamsInput";
import { ListStreamsOutput } from "./types/ListStreamsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListTargetsForPolicyInput } from "./types/ListTargetsForPolicyInput";
import { ListTargetsForPolicyOutput } from "./types/ListTargetsForPolicyOutput";
import { ListTargetsForSecurityProfileInput } from "./types/ListTargetsForSecurityProfileInput";
import { ListTargetsForSecurityProfileOutput } from "./types/ListTargetsForSecurityProfileOutput";
import { ListThingGroupsForThingInput } from "./types/ListThingGroupsForThingInput";
import { ListThingGroupsForThingOutput } from "./types/ListThingGroupsForThingOutput";
import { ListThingGroupsInput } from "./types/ListThingGroupsInput";
import { ListThingGroupsOutput } from "./types/ListThingGroupsOutput";
import { ListThingPrincipalsInput } from "./types/ListThingPrincipalsInput";
import { ListThingPrincipalsOutput } from "./types/ListThingPrincipalsOutput";
import { ListThingRegistrationTaskReportsInput } from "./types/ListThingRegistrationTaskReportsInput";
import { ListThingRegistrationTaskReportsOutput } from "./types/ListThingRegistrationTaskReportsOutput";
import { ListThingRegistrationTasksInput } from "./types/ListThingRegistrationTasksInput";
import { ListThingRegistrationTasksOutput } from "./types/ListThingRegistrationTasksOutput";
import { ListThingTypesInput } from "./types/ListThingTypesInput";
import { ListThingTypesOutput } from "./types/ListThingTypesOutput";
import { ListThingsInBillingGroupInput } from "./types/ListThingsInBillingGroupInput";
import { ListThingsInBillingGroupOutput } from "./types/ListThingsInBillingGroupOutput";
import { ListThingsInThingGroupInput } from "./types/ListThingsInThingGroupInput";
import { ListThingsInThingGroupOutput } from "./types/ListThingsInThingGroupOutput";
import { ListThingsInput } from "./types/ListThingsInput";
import { ListThingsOutput } from "./types/ListThingsOutput";
import { ListTopicRulesInput } from "./types/ListTopicRulesInput";
import { ListTopicRulesOutput } from "./types/ListTopicRulesOutput";
import { ListV2LoggingLevelsInput } from "./types/ListV2LoggingLevelsInput";
import { ListV2LoggingLevelsOutput } from "./types/ListV2LoggingLevelsOutput";
import { ListViolationEventsInput } from "./types/ListViolationEventsInput";
import { ListViolationEventsOutput } from "./types/ListViolationEventsOutput";
import { MalformedPolicyException } from "./types/MalformedPolicyException";
import { NotConfiguredException } from "./types/NotConfiguredException";
import { RegisterCACertificateInput } from "./types/RegisterCACertificateInput";
import { RegisterCACertificateOutput } from "./types/RegisterCACertificateOutput";
import { RegisterCertificateInput } from "./types/RegisterCertificateInput";
import { RegisterCertificateOutput } from "./types/RegisterCertificateOutput";
import { RegisterThingInput } from "./types/RegisterThingInput";
import { RegisterThingOutput } from "./types/RegisterThingOutput";
import { RegistrationCodeValidationException } from "./types/RegistrationCodeValidationException";
import { RejectCertificateTransferInput } from "./types/RejectCertificateTransferInput";
import { RejectCertificateTransferOutput } from "./types/RejectCertificateTransferOutput";
import { RemoveThingFromBillingGroupInput } from "./types/RemoveThingFromBillingGroupInput";
import { RemoveThingFromBillingGroupOutput } from "./types/RemoveThingFromBillingGroupOutput";
import { RemoveThingFromThingGroupInput } from "./types/RemoveThingFromThingGroupInput";
import { RemoveThingFromThingGroupOutput } from "./types/RemoveThingFromThingGroupOutput";
import { ReplaceTopicRuleInput } from "./types/ReplaceTopicRuleInput";
import { ReplaceTopicRuleOutput } from "./types/ReplaceTopicRuleOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ResourceRegistrationFailureException } from "./types/ResourceRegistrationFailureException";
import { SearchIndexInput } from "./types/SearchIndexInput";
import { SearchIndexOutput } from "./types/SearchIndexOutput";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { SetDefaultAuthorizerInput } from "./types/SetDefaultAuthorizerInput";
import { SetDefaultAuthorizerOutput } from "./types/SetDefaultAuthorizerOutput";
import { SetDefaultPolicyVersionInput } from "./types/SetDefaultPolicyVersionInput";
import { SetDefaultPolicyVersionOutput } from "./types/SetDefaultPolicyVersionOutput";
import { SetLoggingOptionsInput } from "./types/SetLoggingOptionsInput";
import { SetLoggingOptionsOutput } from "./types/SetLoggingOptionsOutput";
import { SetV2LoggingLevelInput } from "./types/SetV2LoggingLevelInput";
import { SetV2LoggingLevelOutput } from "./types/SetV2LoggingLevelOutput";
import { SetV2LoggingOptionsInput } from "./types/SetV2LoggingOptionsInput";
import { SetV2LoggingOptionsOutput } from "./types/SetV2LoggingOptionsOutput";
import { SqlParseException } from "./types/SqlParseException";
import { StartAuditMitigationActionsTaskInput } from "./types/StartAuditMitigationActionsTaskInput";
import { StartAuditMitigationActionsTaskOutput } from "./types/StartAuditMitigationActionsTaskOutput";
import { StartOnDemandAuditTaskInput } from "./types/StartOnDemandAuditTaskInput";
import { StartOnDemandAuditTaskOutput } from "./types/StartOnDemandAuditTaskOutput";
import { StartThingRegistrationTaskInput } from "./types/StartThingRegistrationTaskInput";
import { StartThingRegistrationTaskOutput } from "./types/StartThingRegistrationTaskOutput";
import { StopThingRegistrationTaskInput } from "./types/StopThingRegistrationTaskInput";
import { StopThingRegistrationTaskOutput } from "./types/StopThingRegistrationTaskOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TaskAlreadyExistsException } from "./types/TaskAlreadyExistsException";
import { TestAuthorizationInput } from "./types/TestAuthorizationInput";
import { TestAuthorizationOutput } from "./types/TestAuthorizationOutput";
import { TestInvokeAuthorizerInput } from "./types/TestInvokeAuthorizerInput";
import { TestInvokeAuthorizerOutput } from "./types/TestInvokeAuthorizerOutput";
import { ThrottlingException } from "./types/ThrottlingException";
import { TransferAlreadyCompletedException } from "./types/TransferAlreadyCompletedException";
import { TransferCertificateInput } from "./types/TransferCertificateInput";
import { TransferCertificateOutput } from "./types/TransferCertificateOutput";
import { TransferConflictException } from "./types/TransferConflictException";
import { UnauthorizedException } from "./types/UnauthorizedException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateAccountAuditConfigurationInput } from "./types/UpdateAccountAuditConfigurationInput";
import { UpdateAccountAuditConfigurationOutput } from "./types/UpdateAccountAuditConfigurationOutput";
import { UpdateAuthorizerInput } from "./types/UpdateAuthorizerInput";
import { UpdateAuthorizerOutput } from "./types/UpdateAuthorizerOutput";
import { UpdateBillingGroupInput } from "./types/UpdateBillingGroupInput";
import { UpdateBillingGroupOutput } from "./types/UpdateBillingGroupOutput";
import { UpdateCACertificateInput } from "./types/UpdateCACertificateInput";
import { UpdateCACertificateOutput } from "./types/UpdateCACertificateOutput";
import { UpdateCertificateInput } from "./types/UpdateCertificateInput";
import { UpdateCertificateOutput } from "./types/UpdateCertificateOutput";
import { UpdateDynamicThingGroupInput } from "./types/UpdateDynamicThingGroupInput";
import { UpdateDynamicThingGroupOutput } from "./types/UpdateDynamicThingGroupOutput";
import { UpdateEventConfigurationsInput } from "./types/UpdateEventConfigurationsInput";
import { UpdateEventConfigurationsOutput } from "./types/UpdateEventConfigurationsOutput";
import { UpdateIndexingConfigurationInput } from "./types/UpdateIndexingConfigurationInput";
import { UpdateIndexingConfigurationOutput } from "./types/UpdateIndexingConfigurationOutput";
import { UpdateJobInput } from "./types/UpdateJobInput";
import { UpdateJobOutput } from "./types/UpdateJobOutput";
import { UpdateMitigationActionInput } from "./types/UpdateMitigationActionInput";
import { UpdateMitigationActionOutput } from "./types/UpdateMitigationActionOutput";
import { UpdateRoleAliasInput } from "./types/UpdateRoleAliasInput";
import { UpdateRoleAliasOutput } from "./types/UpdateRoleAliasOutput";
import { UpdateScheduledAuditInput } from "./types/UpdateScheduledAuditInput";
import { UpdateScheduledAuditOutput } from "./types/UpdateScheduledAuditOutput";
import { UpdateSecurityProfileInput } from "./types/UpdateSecurityProfileInput";
import { UpdateSecurityProfileOutput } from "./types/UpdateSecurityProfileOutput";
import { UpdateStreamInput } from "./types/UpdateStreamInput";
import { UpdateStreamOutput } from "./types/UpdateStreamOutput";
import { UpdateThingGroupInput } from "./types/UpdateThingGroupInput";
import { UpdateThingGroupOutput } from "./types/UpdateThingGroupOutput";
import { UpdateThingGroupsForThingInput } from "./types/UpdateThingGroupsForThingInput";
import { UpdateThingGroupsForThingOutput } from "./types/UpdateThingGroupsForThingOutput";
import { UpdateThingInput } from "./types/UpdateThingInput";
import { UpdateThingOutput } from "./types/UpdateThingOutput";
import { ValidateSecurityProfileBehaviorsInput } from "./types/ValidateSecurityProfileBehaviorsInput";
import { ValidateSecurityProfileBehaviorsOutput } from "./types/ValidateSecurityProfileBehaviorsOutput";
import { VersionConflictException } from "./types/VersionConflictException";
import { VersionsLimitExceededException } from "./types/VersionsLimitExceededException";
import { AcceptCertificateTransferCommand } from "./commands/AcceptCertificateTransferCommand";
import { AddThingToBillingGroupCommand } from "./commands/AddThingToBillingGroupCommand";
import { AddThingToThingGroupCommand } from "./commands/AddThingToThingGroupCommand";
import { AssociateTargetsWithJobCommand } from "./commands/AssociateTargetsWithJobCommand";
import { AttachPolicyCommand } from "./commands/AttachPolicyCommand";
import { AttachPrincipalPolicyCommand } from "./commands/AttachPrincipalPolicyCommand";
import { AttachSecurityProfileCommand } from "./commands/AttachSecurityProfileCommand";
import { AttachThingPrincipalCommand } from "./commands/AttachThingPrincipalCommand";
import { CancelAuditMitigationActionsTaskCommand } from "./commands/CancelAuditMitigationActionsTaskCommand";
import { CancelAuditTaskCommand } from "./commands/CancelAuditTaskCommand";
import { CancelCertificateTransferCommand } from "./commands/CancelCertificateTransferCommand";
import { CancelJobCommand } from "./commands/CancelJobCommand";
import { CancelJobExecutionCommand } from "./commands/CancelJobExecutionCommand";
import { ClearDefaultAuthorizerCommand } from "./commands/ClearDefaultAuthorizerCommand";
import { CreateAuthorizerCommand } from "./commands/CreateAuthorizerCommand";
import { CreateBillingGroupCommand } from "./commands/CreateBillingGroupCommand";
import { CreateCertificateFromCsrCommand } from "./commands/CreateCertificateFromCsrCommand";
import { CreateDynamicThingGroupCommand } from "./commands/CreateDynamicThingGroupCommand";
import { CreateJobCommand } from "./commands/CreateJobCommand";
import { CreateKeysAndCertificateCommand } from "./commands/CreateKeysAndCertificateCommand";
import { CreateMitigationActionCommand } from "./commands/CreateMitigationActionCommand";
import { CreateOTAUpdateCommand } from "./commands/CreateOTAUpdateCommand";
import { CreatePolicyCommand } from "./commands/CreatePolicyCommand";
import { CreatePolicyVersionCommand } from "./commands/CreatePolicyVersionCommand";
import { CreateRoleAliasCommand } from "./commands/CreateRoleAliasCommand";
import { CreateScheduledAuditCommand } from "./commands/CreateScheduledAuditCommand";
import { CreateSecurityProfileCommand } from "./commands/CreateSecurityProfileCommand";
import { CreateStreamCommand } from "./commands/CreateStreamCommand";
import { CreateThingCommand } from "./commands/CreateThingCommand";
import { CreateThingGroupCommand } from "./commands/CreateThingGroupCommand";
import { CreateThingTypeCommand } from "./commands/CreateThingTypeCommand";
import { CreateTopicRuleCommand } from "./commands/CreateTopicRuleCommand";
import { DeleteAccountAuditConfigurationCommand } from "./commands/DeleteAccountAuditConfigurationCommand";
import { DeleteAuthorizerCommand } from "./commands/DeleteAuthorizerCommand";
import { DeleteBillingGroupCommand } from "./commands/DeleteBillingGroupCommand";
import { DeleteCACertificateCommand } from "./commands/DeleteCACertificateCommand";
import { DeleteCertificateCommand } from "./commands/DeleteCertificateCommand";
import { DeleteDynamicThingGroupCommand } from "./commands/DeleteDynamicThingGroupCommand";
import { DeleteJobCommand } from "./commands/DeleteJobCommand";
import { DeleteJobExecutionCommand } from "./commands/DeleteJobExecutionCommand";
import { DeleteMitigationActionCommand } from "./commands/DeleteMitigationActionCommand";
import { DeleteOTAUpdateCommand } from "./commands/DeleteOTAUpdateCommand";
import { DeletePolicyCommand } from "./commands/DeletePolicyCommand";
import { DeletePolicyVersionCommand } from "./commands/DeletePolicyVersionCommand";
import { DeleteRegistrationCodeCommand } from "./commands/DeleteRegistrationCodeCommand";
import { DeleteRoleAliasCommand } from "./commands/DeleteRoleAliasCommand";
import { DeleteScheduledAuditCommand } from "./commands/DeleteScheduledAuditCommand";
import { DeleteSecurityProfileCommand } from "./commands/DeleteSecurityProfileCommand";
import { DeleteStreamCommand } from "./commands/DeleteStreamCommand";
import { DeleteThingCommand } from "./commands/DeleteThingCommand";
import { DeleteThingGroupCommand } from "./commands/DeleteThingGroupCommand";
import { DeleteThingTypeCommand } from "./commands/DeleteThingTypeCommand";
import { DeleteTopicRuleCommand } from "./commands/DeleteTopicRuleCommand";
import { DeleteV2LoggingLevelCommand } from "./commands/DeleteV2LoggingLevelCommand";
import { DeprecateThingTypeCommand } from "./commands/DeprecateThingTypeCommand";
import { DescribeAccountAuditConfigurationCommand } from "./commands/DescribeAccountAuditConfigurationCommand";
import { DescribeAuditFindingCommand } from "./commands/DescribeAuditFindingCommand";
import { DescribeAuditMitigationActionsTaskCommand } from "./commands/DescribeAuditMitigationActionsTaskCommand";
import { DescribeAuditTaskCommand } from "./commands/DescribeAuditTaskCommand";
import { DescribeAuthorizerCommand } from "./commands/DescribeAuthorizerCommand";
import { DescribeBillingGroupCommand } from "./commands/DescribeBillingGroupCommand";
import { DescribeCACertificateCommand } from "./commands/DescribeCACertificateCommand";
import { DescribeCertificateCommand } from "./commands/DescribeCertificateCommand";
import { DescribeDefaultAuthorizerCommand } from "./commands/DescribeDefaultAuthorizerCommand";
import { DescribeEndpointCommand } from "./commands/DescribeEndpointCommand";
import { DescribeEventConfigurationsCommand } from "./commands/DescribeEventConfigurationsCommand";
import { DescribeIndexCommand } from "./commands/DescribeIndexCommand";
import { DescribeJobCommand } from "./commands/DescribeJobCommand";
import { DescribeJobExecutionCommand } from "./commands/DescribeJobExecutionCommand";
import { DescribeMitigationActionCommand } from "./commands/DescribeMitigationActionCommand";
import { DescribeRoleAliasCommand } from "./commands/DescribeRoleAliasCommand";
import { DescribeScheduledAuditCommand } from "./commands/DescribeScheduledAuditCommand";
import { DescribeSecurityProfileCommand } from "./commands/DescribeSecurityProfileCommand";
import { DescribeStreamCommand } from "./commands/DescribeStreamCommand";
import { DescribeThingCommand } from "./commands/DescribeThingCommand";
import { DescribeThingGroupCommand } from "./commands/DescribeThingGroupCommand";
import { DescribeThingRegistrationTaskCommand } from "./commands/DescribeThingRegistrationTaskCommand";
import { DescribeThingTypeCommand } from "./commands/DescribeThingTypeCommand";
import { DetachPolicyCommand } from "./commands/DetachPolicyCommand";
import { DetachPrincipalPolicyCommand } from "./commands/DetachPrincipalPolicyCommand";
import { DetachSecurityProfileCommand } from "./commands/DetachSecurityProfileCommand";
import { DetachThingPrincipalCommand } from "./commands/DetachThingPrincipalCommand";
import { DisableTopicRuleCommand } from "./commands/DisableTopicRuleCommand";
import { EnableTopicRuleCommand } from "./commands/EnableTopicRuleCommand";
import { GetEffectivePoliciesCommand } from "./commands/GetEffectivePoliciesCommand";
import { GetIndexingConfigurationCommand } from "./commands/GetIndexingConfigurationCommand";
import { GetJobDocumentCommand } from "./commands/GetJobDocumentCommand";
import { GetLoggingOptionsCommand } from "./commands/GetLoggingOptionsCommand";
import { GetOTAUpdateCommand } from "./commands/GetOTAUpdateCommand";
import { GetPolicyCommand } from "./commands/GetPolicyCommand";
import { GetPolicyVersionCommand } from "./commands/GetPolicyVersionCommand";
import { GetRegistrationCodeCommand } from "./commands/GetRegistrationCodeCommand";
import { GetStatisticsCommand } from "./commands/GetStatisticsCommand";
import { GetTopicRuleCommand } from "./commands/GetTopicRuleCommand";
import { GetV2LoggingOptionsCommand } from "./commands/GetV2LoggingOptionsCommand";
import { ListActiveViolationsCommand } from "./commands/ListActiveViolationsCommand";
import { ListAttachedPoliciesCommand } from "./commands/ListAttachedPoliciesCommand";
import { ListAuditFindingsCommand } from "./commands/ListAuditFindingsCommand";
import { ListAuditMitigationActionsExecutionsCommand } from "./commands/ListAuditMitigationActionsExecutionsCommand";
import { ListAuditMitigationActionsTasksCommand } from "./commands/ListAuditMitigationActionsTasksCommand";
import { ListAuditTasksCommand } from "./commands/ListAuditTasksCommand";
import { ListAuthorizersCommand } from "./commands/ListAuthorizersCommand";
import { ListBillingGroupsCommand } from "./commands/ListBillingGroupsCommand";
import { ListCACertificatesCommand } from "./commands/ListCACertificatesCommand";
import { ListCertificatesByCACommand } from "./commands/ListCertificatesByCACommand";
import { ListCertificatesCommand } from "./commands/ListCertificatesCommand";
import { ListIndicesCommand } from "./commands/ListIndicesCommand";
import { ListJobExecutionsForJobCommand } from "./commands/ListJobExecutionsForJobCommand";
import { ListJobExecutionsForThingCommand } from "./commands/ListJobExecutionsForThingCommand";
import { ListJobsCommand } from "./commands/ListJobsCommand";
import { ListMitigationActionsCommand } from "./commands/ListMitigationActionsCommand";
import { ListOTAUpdatesCommand } from "./commands/ListOTAUpdatesCommand";
import { ListOutgoingCertificatesCommand } from "./commands/ListOutgoingCertificatesCommand";
import { ListPoliciesCommand } from "./commands/ListPoliciesCommand";
import { ListPolicyPrincipalsCommand } from "./commands/ListPolicyPrincipalsCommand";
import { ListPolicyVersionsCommand } from "./commands/ListPolicyVersionsCommand";
import { ListPrincipalPoliciesCommand } from "./commands/ListPrincipalPoliciesCommand";
import { ListPrincipalThingsCommand } from "./commands/ListPrincipalThingsCommand";
import { ListRoleAliasesCommand } from "./commands/ListRoleAliasesCommand";
import { ListScheduledAuditsCommand } from "./commands/ListScheduledAuditsCommand";
import { ListSecurityProfilesCommand } from "./commands/ListSecurityProfilesCommand";
import { ListSecurityProfilesForTargetCommand } from "./commands/ListSecurityProfilesForTargetCommand";
import { ListStreamsCommand } from "./commands/ListStreamsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListTargetsForPolicyCommand } from "./commands/ListTargetsForPolicyCommand";
import { ListTargetsForSecurityProfileCommand } from "./commands/ListTargetsForSecurityProfileCommand";
import { ListThingGroupsCommand } from "./commands/ListThingGroupsCommand";
import { ListThingGroupsForThingCommand } from "./commands/ListThingGroupsForThingCommand";
import { ListThingPrincipalsCommand } from "./commands/ListThingPrincipalsCommand";
import { ListThingRegistrationTaskReportsCommand } from "./commands/ListThingRegistrationTaskReportsCommand";
import { ListThingRegistrationTasksCommand } from "./commands/ListThingRegistrationTasksCommand";
import { ListThingTypesCommand } from "./commands/ListThingTypesCommand";
import { ListThingsCommand } from "./commands/ListThingsCommand";
import { ListThingsInBillingGroupCommand } from "./commands/ListThingsInBillingGroupCommand";
import { ListThingsInThingGroupCommand } from "./commands/ListThingsInThingGroupCommand";
import { ListTopicRulesCommand } from "./commands/ListTopicRulesCommand";
import { ListV2LoggingLevelsCommand } from "./commands/ListV2LoggingLevelsCommand";
import { ListViolationEventsCommand } from "./commands/ListViolationEventsCommand";
import { RegisterCACertificateCommand } from "./commands/RegisterCACertificateCommand";
import { RegisterCertificateCommand } from "./commands/RegisterCertificateCommand";
import { RegisterThingCommand } from "./commands/RegisterThingCommand";
import { RejectCertificateTransferCommand } from "./commands/RejectCertificateTransferCommand";
import { RemoveThingFromBillingGroupCommand } from "./commands/RemoveThingFromBillingGroupCommand";
import { RemoveThingFromThingGroupCommand } from "./commands/RemoveThingFromThingGroupCommand";
import { ReplaceTopicRuleCommand } from "./commands/ReplaceTopicRuleCommand";
import { SearchIndexCommand } from "./commands/SearchIndexCommand";
import { SetDefaultAuthorizerCommand } from "./commands/SetDefaultAuthorizerCommand";
import { SetDefaultPolicyVersionCommand } from "./commands/SetDefaultPolicyVersionCommand";
import { SetLoggingOptionsCommand } from "./commands/SetLoggingOptionsCommand";
import { SetV2LoggingLevelCommand } from "./commands/SetV2LoggingLevelCommand";
import { SetV2LoggingOptionsCommand } from "./commands/SetV2LoggingOptionsCommand";
import { StartAuditMitigationActionsTaskCommand } from "./commands/StartAuditMitigationActionsTaskCommand";
import { StartOnDemandAuditTaskCommand } from "./commands/StartOnDemandAuditTaskCommand";
import { StartThingRegistrationTaskCommand } from "./commands/StartThingRegistrationTaskCommand";
import { StopThingRegistrationTaskCommand } from "./commands/StopThingRegistrationTaskCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestAuthorizationCommand } from "./commands/TestAuthorizationCommand";
import { TestInvokeAuthorizerCommand } from "./commands/TestInvokeAuthorizerCommand";
import { TransferCertificateCommand } from "./commands/TransferCertificateCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateAccountAuditConfigurationCommand } from "./commands/UpdateAccountAuditConfigurationCommand";
import { UpdateAuthorizerCommand } from "./commands/UpdateAuthorizerCommand";
import { UpdateBillingGroupCommand } from "./commands/UpdateBillingGroupCommand";
import { UpdateCACertificateCommand } from "./commands/UpdateCACertificateCommand";
import { UpdateCertificateCommand } from "./commands/UpdateCertificateCommand";
import { UpdateDynamicThingGroupCommand } from "./commands/UpdateDynamicThingGroupCommand";
import { UpdateEventConfigurationsCommand } from "./commands/UpdateEventConfigurationsCommand";
import { UpdateIndexingConfigurationCommand } from "./commands/UpdateIndexingConfigurationCommand";
import { UpdateJobCommand } from "./commands/UpdateJobCommand";
import { UpdateMitigationActionCommand } from "./commands/UpdateMitigationActionCommand";
import { UpdateRoleAliasCommand } from "./commands/UpdateRoleAliasCommand";
import { UpdateScheduledAuditCommand } from "./commands/UpdateScheduledAuditCommand";
import { UpdateSecurityProfileCommand } from "./commands/UpdateSecurityProfileCommand";
import { UpdateStreamCommand } from "./commands/UpdateStreamCommand";
import { UpdateThingCommand } from "./commands/UpdateThingCommand";
import { UpdateThingGroupCommand } from "./commands/UpdateThingGroupCommand";
import { UpdateThingGroupsForThingCommand } from "./commands/UpdateThingGroupsForThingCommand";
import { ValidateSecurityProfileBehaviorsCommand } from "./commands/ValidateSecurityProfileBehaviorsCommand";

export class IoT extends IoTClient {
  /**
   * <p>Accepts a pending certificate transfer. The default state of the certificate is INACTIVE.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {TransferAlreadyCompletedException} <p>You can't revert the certificate transfer because the transfer is already complete.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acceptCertificateTransfer(
    args: AcceptCertificateTransferInput
  ): Promise<AcceptCertificateTransferOutput>;
  public acceptCertificateTransfer(
    args: AcceptCertificateTransferInput,
    cb: (err: any, data?: AcceptCertificateTransferOutput) => void
  ): void;
  public acceptCertificateTransfer(
    args: AcceptCertificateTransferInput,
    cb?: (err: any, data?: AcceptCertificateTransferOutput) => void
  ): Promise<AcceptCertificateTransferOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcceptCertificateTransferCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a thing to a billing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addThingToBillingGroup(
    args: AddThingToBillingGroupInput
  ): Promise<AddThingToBillingGroupOutput>;
  public addThingToBillingGroup(
    args: AddThingToBillingGroupInput,
    cb: (err: any, data?: AddThingToBillingGroupOutput) => void
  ): void;
  public addThingToBillingGroup(
    args: AddThingToBillingGroupInput,
    cb?: (err: any, data?: AddThingToBillingGroupOutput) => void
  ): Promise<AddThingToBillingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddThingToBillingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a thing to a thing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addThingToThingGroup(
    args: AddThingToThingGroupInput
  ): Promise<AddThingToThingGroupOutput>;
  public addThingToThingGroup(
    args: AddThingToThingGroupInput,
    cb: (err: any, data?: AddThingToThingGroupOutput) => void
  ): void;
  public addThingToThingGroup(
    args: AddThingToThingGroupInput,
    cb?: (err: any, data?: AddThingToThingGroupOutput) => void
  ): Promise<AddThingToThingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddThingToThingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a group with a continuous job. The following criteria must be met: </p> <ul> <li> <p>The job must have been created with the <code>targetSelection</code> field set to "CONTINUOUS".</p> </li> <li> <p>The job status must currently be "IN_PROGRESS".</p> </li> <li> <p>The total number of targets associated with a job must not exceed 100.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateTargetsWithJob(
    args: AssociateTargetsWithJobInput
  ): Promise<AssociateTargetsWithJobOutput>;
  public associateTargetsWithJob(
    args: AssociateTargetsWithJobInput,
    cb: (err: any, data?: AssociateTargetsWithJobOutput) => void
  ): void;
  public associateTargetsWithJob(
    args: AssociateTargetsWithJobInput,
    cb?: (err: any, data?: AssociateTargetsWithJobOutput) => void
  ): Promise<AssociateTargetsWithJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateTargetsWithJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches a policy to the specified target.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachPolicy(args: AttachPolicyInput): Promise<AttachPolicyOutput>;
  public attachPolicy(
    args: AttachPolicyInput,
    cb: (err: any, data?: AttachPolicyOutput) => void
  ): void;
  public attachPolicy(
    args: AttachPolicyInput,
    cb?: (err: any, data?: AttachPolicyOutput) => void
  ): Promise<AttachPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p> <b>Note:</b> This API is deprecated. Please use <a>AttachPolicy</a> instead.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachPrincipalPolicy(
    args: AttachPrincipalPolicyInput
  ): Promise<AttachPrincipalPolicyOutput>;
  public attachPrincipalPolicy(
    args: AttachPrincipalPolicyInput,
    cb: (err: any, data?: AttachPrincipalPolicyOutput) => void
  ): void;
  public attachPrincipalPolicy(
    args: AttachPrincipalPolicyInput,
    cb?: (err: any, data?: AttachPrincipalPolicyOutput) => void
  ): Promise<AttachPrincipalPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachPrincipalPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachSecurityProfile(
    args: AttachSecurityProfileInput
  ): Promise<AttachSecurityProfileOutput>;
  public attachSecurityProfile(
    args: AttachSecurityProfileInput,
    cb: (err: any, data?: AttachSecurityProfileOutput) => void
  ): void;
  public attachSecurityProfile(
    args: AttachSecurityProfileInput,
    cb?: (err: any, data?: AttachSecurityProfileOutput) => void
  ): Promise<AttachSecurityProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachSecurityProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches the specified principal to the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachThingPrincipal(
    args: AttachThingPrincipalInput
  ): Promise<AttachThingPrincipalOutput>;
  public attachThingPrincipal(
    args: AttachThingPrincipalInput,
    cb: (err: any, data?: AttachThingPrincipalOutput) => void
  ): void;
  public attachThingPrincipal(
    args: AttachThingPrincipalInput,
    cb?: (err: any, data?: AttachThingPrincipalOutput) => void
  ): Promise<AttachThingPrincipalOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachThingPrincipalCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelAuditMitigationActionsTask(
    args: CancelAuditMitigationActionsTaskInput
  ): Promise<CancelAuditMitigationActionsTaskOutput>;
  public cancelAuditMitigationActionsTask(
    args: CancelAuditMitigationActionsTaskInput,
    cb: (err: any, data?: CancelAuditMitigationActionsTaskOutput) => void
  ): void;
  public cancelAuditMitigationActionsTask(
    args: CancelAuditMitigationActionsTaskInput,
    cb?: (err: any, data?: CancelAuditMitigationActionsTaskOutput) => void
  ): Promise<CancelAuditMitigationActionsTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelAuditMitigationActionsTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels an audit that is in progress. The audit can be either scheduled or on-demand. If the audit is not in progress, an "InvalidRequestException" occurs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelAuditTask(
    args: CancelAuditTaskInput
  ): Promise<CancelAuditTaskOutput>;
  public cancelAuditTask(
    args: CancelAuditTaskInput,
    cb: (err: any, data?: CancelAuditTaskOutput) => void
  ): void;
  public cancelAuditTask(
    args: CancelAuditTaskInput,
    cb?: (err: any, data?: CancelAuditTaskOutput) => void
  ): Promise<CancelAuditTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelAuditTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels a pending transfer for the specified certificate.</p> <p> <b>Note</b> Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, AWS IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled.</p> <p>After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {TransferAlreadyCompletedException} <p>You can't revert the certificate transfer because the transfer is already complete.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelCertificateTransfer(
    args: CancelCertificateTransferInput
  ): Promise<CancelCertificateTransferOutput>;
  public cancelCertificateTransfer(
    args: CancelCertificateTransferInput,
    cb: (err: any, data?: CancelCertificateTransferOutput) => void
  ): void;
  public cancelCertificateTransfer(
    args: CancelCertificateTransferInput,
    cb?: (err: any, data?: CancelCertificateTransferOutput) => void
  ): Promise<CancelCertificateTransferOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelCertificateTransferCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels a job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelJob(args: CancelJobInput): Promise<CancelJobOutput>;
  public cancelJob(
    args: CancelJobInput,
    cb: (err: any, data?: CancelJobOutput) => void
  ): void;
  public cancelJob(
    args: CancelJobInput,
    cb?: (err: any, data?: CancelJobOutput) => void
  ): Promise<CancelJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels the execution of a job for a given thing.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidStateTransitionException} <p>An attempt was made to change to an invalid state, for example by deleting a job or a job execution which is "IN_PROGRESS" without setting the <code>force</code> parameter.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelJobExecution(
    args: CancelJobExecutionInput
  ): Promise<CancelJobExecutionOutput>;
  public cancelJobExecution(
    args: CancelJobExecutionInput,
    cb: (err: any, data?: CancelJobExecutionOutput) => void
  ): void;
  public cancelJobExecution(
    args: CancelJobExecutionInput,
    cb?: (err: any, data?: CancelJobExecutionOutput) => void
  ): Promise<CancelJobExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelJobExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Clears the default authorizer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public clearDefaultAuthorizer(
    args: ClearDefaultAuthorizerInput
  ): Promise<ClearDefaultAuthorizerOutput>;
  public clearDefaultAuthorizer(
    args: ClearDefaultAuthorizerInput,
    cb: (err: any, data?: ClearDefaultAuthorizerOutput) => void
  ): void;
  public clearDefaultAuthorizer(
    args: ClearDefaultAuthorizerInput,
    cb?: (err: any, data?: ClearDefaultAuthorizerOutput) => void
  ): Promise<ClearDefaultAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ClearDefaultAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an authorizer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAuthorizer(
    args: CreateAuthorizerInput
  ): Promise<CreateAuthorizerOutput>;
  public createAuthorizer(
    args: CreateAuthorizerInput,
    cb: (err: any, data?: CreateAuthorizerOutput) => void
  ): void;
  public createAuthorizer(
    args: CreateAuthorizerInput,
    cb?: (err: any, data?: CreateAuthorizerOutput) => void
  ): Promise<CreateAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a billing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBillingGroup(
    args: CreateBillingGroupInput
  ): Promise<CreateBillingGroupOutput>;
  public createBillingGroup(
    args: CreateBillingGroupInput,
    cb: (err: any, data?: CreateBillingGroupOutput) => void
  ): void;
  public createBillingGroup(
    args: CreateBillingGroupInput,
    cb?: (err: any, data?: CreateBillingGroupOutput) => void
  ): Promise<CreateBillingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBillingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an X.509 certificate using the specified certificate signing request.</p> <p> <b>Note:</b> The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384 curves. </p> <p> <b>Note:</b> Reusing the same certificate signing request (CSR) results in a distinct certificate.</p> <p>You can create multiple certificates in a batch by creating a directory, copying multiple .csr files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs.</p> <p>Assuming a set of CSRs are located inside of the directory my-csr-directory:</p> <p>On Linux and OS X, the command is:</p> <p>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</p> <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the aws iot create-certificate-from-csr AWS CLI command to create a certificate for the corresponding CSR.</p> <p>The aws iot create-certificate-from-csr part of the command can also be run in parallel to speed up the certificate creation process:</p> <p>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</p> <p>On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is:</p> <p>&gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_}</p> <p>On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is:</p> <p>&gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path"</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCertificateFromCsr(
    args: CreateCertificateFromCsrInput
  ): Promise<CreateCertificateFromCsrOutput>;
  public createCertificateFromCsr(
    args: CreateCertificateFromCsrInput,
    cb: (err: any, data?: CreateCertificateFromCsrOutput) => void
  ): void;
  public createCertificateFromCsr(
    args: CreateCertificateFromCsrInput,
    cb?: (err: any, data?: CreateCertificateFromCsrOutput) => void
  ): Promise<CreateCertificateFromCsrOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCertificateFromCsrCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a dynamic thing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {InvalidQueryException} <p>The query is invalid.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDynamicThingGroup(
    args: CreateDynamicThingGroupInput
  ): Promise<CreateDynamicThingGroupOutput>;
  public createDynamicThingGroup(
    args: CreateDynamicThingGroupInput,
    cb: (err: any, data?: CreateDynamicThingGroupOutput) => void
  ): void;
  public createDynamicThingGroup(
    args: CreateDynamicThingGroupInput,
    cb?: (err: any, data?: CreateDynamicThingGroupOutput) => void
  ): Promise<CreateDynamicThingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDynamicThingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createJob(args: CreateJobInput): Promise<CreateJobOutput>;
  public createJob(
    args: CreateJobInput,
    cb: (err: any, data?: CreateJobOutput) => void
  ): void;
  public createJob(
    args: CreateJobInput,
    cb?: (err: any, data?: CreateJobOutput) => void
  ): Promise<CreateJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key.</p> <p> <b>Note</b> This is the only time AWS IoT issues the private key for this certificate, so it is important to keep it in a secure location.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createKeysAndCertificate(
    args: CreateKeysAndCertificateInput
  ): Promise<CreateKeysAndCertificateOutput>;
  public createKeysAndCertificate(
    args: CreateKeysAndCertificateInput,
    cb: (err: any, data?: CreateKeysAndCertificateOutput) => void
  ): void;
  public createKeysAndCertificate(
    args: CreateKeysAndCertificateInput,
    cb?: (err: any, data?: CreateKeysAndCertificateOutput) => void
  ): Promise<CreateKeysAndCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateKeysAndCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Each mitigation action can apply only one type of change.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createMitigationAction(
    args: CreateMitigationActionInput
  ): Promise<CreateMitigationActionOutput>;
  public createMitigationAction(
    args: CreateMitigationActionInput,
    cb: (err: any, data?: CreateMitigationActionOutput) => void
  ): void;
  public createMitigationAction(
    args: CreateMitigationActionInput,
    cb?: (err: any, data?: CreateMitigationActionOutput) => void
  ): Promise<CreateMitigationActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateMitigationActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an AWS IoT OTAUpdate on a target group of things or groups.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createOTAUpdate(
    args: CreateOTAUpdateInput
  ): Promise<CreateOTAUpdateOutput>;
  public createOTAUpdate(
    args: CreateOTAUpdateInput,
    cb: (err: any, data?: CreateOTAUpdateOutput) => void
  ): void;
  public createOTAUpdate(
    args: CreateOTAUpdateInput,
    cb?: (err: any, data?: CreateOTAUpdateOutput) => void
  ): Promise<CreateOTAUpdateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateOTAUpdateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an AWS IoT policy.</p> <p>The created policy is the default version for the policy. This operation creates a policy version with a version identifier of <b>1</b> and sets <b>1</b> as the policy's default version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {MalformedPolicyException} <p>The policy documentation is not valid.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPolicy(args: CreatePolicyInput): Promise<CreatePolicyOutput>;
  public createPolicy(
    args: CreatePolicyInput,
    cb: (err: any, data?: CreatePolicyOutput) => void
  ): void;
  public createPolicy(
    args: CreatePolicyInput,
    cb?: (err: any, data?: CreatePolicyOutput) => void
  ): Promise<CreatePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new version of the specified AWS IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use <a>DeletePolicyVersion</a> to delete an existing version before you create a new one.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {MalformedPolicyException} <p>The policy documentation is not valid.</p>
   *   - {VersionsLimitExceededException} <p>The number of policy versions exceeds the limit.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPolicyVersion(
    args: CreatePolicyVersionInput
  ): Promise<CreatePolicyVersionOutput>;
  public createPolicyVersion(
    args: CreatePolicyVersionInput,
    cb: (err: any, data?: CreatePolicyVersionOutput) => void
  ): void;
  public createPolicyVersion(
    args: CreatePolicyVersionInput,
    cb?: (err: any, data?: CreatePolicyVersionOutput) => void
  ): Promise<CreatePolicyVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePolicyVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a role alias.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRoleAlias(
    args: CreateRoleAliasInput
  ): Promise<CreateRoleAliasOutput>;
  public createRoleAlias(
    args: CreateRoleAliasInput,
    cb: (err: any, data?: CreateRoleAliasOutput) => void
  ): void;
  public createRoleAlias(
    args: CreateRoleAliasInput,
    cb?: (err: any, data?: CreateRoleAliasOutput) => void
  ): Promise<CreateRoleAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRoleAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a scheduled audit that is run at a specified time interval.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createScheduledAudit(
    args: CreateScheduledAuditInput
  ): Promise<CreateScheduledAuditOutput>;
  public createScheduledAudit(
    args: CreateScheduledAuditInput,
    cb: (err: any, data?: CreateScheduledAuditOutput) => void
  ): void;
  public createScheduledAudit(
    args: CreateScheduledAuditInput,
    cb?: (err: any, data?: CreateScheduledAuditOutput) => void
  ): Promise<CreateScheduledAuditOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateScheduledAuditCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Device Defender security profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSecurityProfile(
    args: CreateSecurityProfileInput
  ): Promise<CreateSecurityProfileOutput>;
  public createSecurityProfile(
    args: CreateSecurityProfileInput,
    cb: (err: any, data?: CreateSecurityProfileOutput) => void
  ): void;
  public createSecurityProfile(
    args: CreateSecurityProfileInput,
    cb?: (err: any, data?: CreateSecurityProfileOutput) => void
  ): Promise<CreateSecurityProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSecurityProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream. The total size of a file associated with the stream cannot exceed more than 2 MB. The stream will be created with version 0. If a stream is created with the same streamID as a stream that existed and was deleted within last 90 days, we will resurrect that old stream by incrementing the version by 1.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStream(args: CreateStreamInput): Promise<CreateStreamOutput>;
  public createStream(
    args: CreateStreamInput,
    cb: (err: any, data?: CreateStreamOutput) => void
  ): void;
  public createStream(
    args: CreateStreamInput,
    cb?: (err: any, data?: CreateStreamOutput) => void
  ): Promise<CreateStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a <code>ResourceAlreadyExistsException</code> is thrown.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createThing(args: CreateThingInput): Promise<CreateThingOutput>;
  public createThing(
    args: CreateThingInput,
    cb: (err: any, data?: CreateThingOutput) => void
  ): void;
  public createThing(
    args: CreateThingInput,
    cb?: (err: any, data?: CreateThingOutput) => void
  ): Promise<CreateThingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateThingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a thing group.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createThingGroup(
    args: CreateThingGroupInput
  ): Promise<CreateThingGroupOutput>;
  public createThingGroup(
    args: CreateThingGroupInput,
    cb: (err: any, data?: CreateThingGroupOutput) => void
  ): void;
  public createThingGroup(
    args: CreateThingGroupInput,
    cb?: (err: any, data?: CreateThingGroupOutput) => void
  ): Promise<CreateThingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateThingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new thing type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createThingType(
    args: CreateThingTypeInput
  ): Promise<CreateThingTypeOutput>;
  public createThingType(
    args: CreateThingTypeInput,
    cb: (err: any, data?: CreateThingTypeOutput) => void
  ): void;
  public createThingType(
    args: CreateThingTypeInput,
    cb?: (err: any, data?: CreateThingTypeOutput) => void
  ): Promise<CreateThingTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateThingTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SqlParseException} <p>The Rule-SQL expression can't be parsed correctly.</p>
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ConflictingResourceUpdateException} <p>A conflicting resource update exception. This exception is thrown when two pending updates cause a conflict.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTopicRule(
    args: CreateTopicRuleInput
  ): Promise<CreateTopicRuleOutput>;
  public createTopicRule(
    args: CreateTopicRuleInput,
    cb: (err: any, data?: CreateTopicRuleOutput) => void
  ): void;
  public createTopicRule(
    args: CreateTopicRuleInput,
    cb?: (err: any, data?: CreateTopicRuleOutput) => void
  ): Promise<CreateTopicRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTopicRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAccountAuditConfiguration(
    args: DeleteAccountAuditConfigurationInput
  ): Promise<DeleteAccountAuditConfigurationOutput>;
  public deleteAccountAuditConfiguration(
    args: DeleteAccountAuditConfigurationInput,
    cb: (err: any, data?: DeleteAccountAuditConfigurationOutput) => void
  ): void;
  public deleteAccountAuditConfiguration(
    args: DeleteAccountAuditConfigurationInput,
    cb?: (err: any, data?: DeleteAccountAuditConfigurationOutput) => void
  ): Promise<DeleteAccountAuditConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAccountAuditConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an authorizer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DeleteConflictException} <p>You can't delete the resource because it is attached to one or more resources.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAuthorizer(
    args: DeleteAuthorizerInput
  ): Promise<DeleteAuthorizerOutput>;
  public deleteAuthorizer(
    args: DeleteAuthorizerInput,
    cb: (err: any, data?: DeleteAuthorizerOutput) => void
  ): void;
  public deleteAuthorizer(
    args: DeleteAuthorizerInput,
    cb?: (err: any, data?: DeleteAuthorizerOutput) => void
  ): Promise<DeleteAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the billing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBillingGroup(
    args: DeleteBillingGroupInput
  ): Promise<DeleteBillingGroupOutput>;
  public deleteBillingGroup(
    args: DeleteBillingGroupInput,
    cb: (err: any, data?: DeleteBillingGroupOutput) => void
  ): void;
  public deleteBillingGroup(
    args: DeleteBillingGroupInput,
    cb?: (err: any, data?: DeleteBillingGroupOutput) => void
  ): Promise<DeleteBillingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBillingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a registered CA certificate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {CertificateStateException} <p>The certificate operation is not allowed.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCACertificate(
    args: DeleteCACertificateInput
  ): Promise<DeleteCACertificateOutput>;
  public deleteCACertificate(
    args: DeleteCACertificateInput,
    cb: (err: any, data?: DeleteCACertificateOutput) => void
  ): void;
  public deleteCACertificate(
    args: DeleteCACertificateInput,
    cb?: (err: any, data?: DeleteCACertificateOutput) => void
  ): Promise<DeleteCACertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCACertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified certificate.</p> <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPrincipalPolicy</a> API to detach all policies. Next, use the <a>UpdateCertificate</a> API to set the certificate to the INACTIVE status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CertificateStateException} <p>The certificate operation is not allowed.</p>
   *   - {DeleteConflictException} <p>You can't delete the resource because it is attached to one or more resources.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCertificate(
    args: DeleteCertificateInput
  ): Promise<DeleteCertificateOutput>;
  public deleteCertificate(
    args: DeleteCertificateInput,
    cb: (err: any, data?: DeleteCertificateOutput) => void
  ): void;
  public deleteCertificate(
    args: DeleteCertificateInput,
    cb?: (err: any, data?: DeleteCertificateOutput) => void
  ): Promise<DeleteCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a dynamic thing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDynamicThingGroup(
    args: DeleteDynamicThingGroupInput
  ): Promise<DeleteDynamicThingGroupOutput>;
  public deleteDynamicThingGroup(
    args: DeleteDynamicThingGroupInput,
    cb: (err: any, data?: DeleteDynamicThingGroupOutput) => void
  ): void;
  public deleteDynamicThingGroup(
    args: DeleteDynamicThingGroupInput,
    cb?: (err: any, data?: DeleteDynamicThingGroupOutput) => void
  ): Promise<DeleteDynamicThingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDynamicThingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a job and its related job executions.</p> <p>Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status is already "DELETION_IN_PROGRESS" will result in an error.</p> <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a LimitExceededException will occur.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidStateTransitionException} <p>An attempt was made to change to an invalid state, for example by deleting a job or a job execution which is "IN_PROGRESS" without setting the <code>force</code> parameter.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteJob(args: DeleteJobInput): Promise<DeleteJobOutput>;
  public deleteJob(
    args: DeleteJobInput,
    cb: (err: any, data?: DeleteJobOutput) => void
  ): void;
  public deleteJob(
    args: DeleteJobInput,
    cb?: (err: any, data?: DeleteJobOutput) => void
  ): Promise<DeleteJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a job execution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidStateTransitionException} <p>An attempt was made to change to an invalid state, for example by deleting a job or a job execution which is "IN_PROGRESS" without setting the <code>force</code> parameter.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteJobExecution(
    args: DeleteJobExecutionInput
  ): Promise<DeleteJobExecutionOutput>;
  public deleteJobExecution(
    args: DeleteJobExecutionInput,
    cb: (err: any, data?: DeleteJobExecutionOutput) => void
  ): void;
  public deleteJobExecution(
    args: DeleteJobExecutionInput,
    cb?: (err: any, data?: DeleteJobExecutionOutput) => void
  ): Promise<DeleteJobExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteJobExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a defined mitigation action from your AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteMitigationAction(
    args: DeleteMitigationActionInput
  ): Promise<DeleteMitigationActionOutput>;
  public deleteMitigationAction(
    args: DeleteMitigationActionInput,
    cb: (err: any, data?: DeleteMitigationActionOutput) => void
  ): void;
  public deleteMitigationAction(
    args: DeleteMitigationActionInput,
    cb?: (err: any, data?: DeleteMitigationActionOutput) => void
  ): Promise<DeleteMitigationActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteMitigationActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete an OTA update.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteOTAUpdate(
    args: DeleteOTAUpdateInput
  ): Promise<DeleteOTAUpdateOutput>;
  public deleteOTAUpdate(
    args: DeleteOTAUpdateInput,
    cb: (err: any, data?: DeleteOTAUpdateOutput) => void
  ): void;
  public deleteOTAUpdate(
    args: DeleteOTAUpdateInput,
    cb?: (err: any, data?: DeleteOTAUpdateOutput) => void
  ): Promise<DeleteOTAUpdateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteOTAUpdateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified policy.</p> <p>A policy cannot be deleted if it has non-default versions or it is attached to any certificate.</p> <p>To delete a policy, use the DeletePolicyVersion API to delete all non-default versions of the policy; use the DetachPrincipalPolicy API to detach the policy from any certificate; and then use the DeletePolicy API to delete the policy.</p> <p>When a policy is deleted using DeletePolicy, its default version is deleted with it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DeleteConflictException} <p>You can't delete the resource because it is attached to one or more resources.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePolicy(args: DeletePolicyInput): Promise<DeletePolicyOutput>;
  public deletePolicy(
    args: DeletePolicyInput,
    cb: (err: any, data?: DeletePolicyOutput) => void
  ): void;
  public deletePolicy(
    args: DeletePolicyInput,
    cb?: (err: any, data?: DeletePolicyOutput) => void
  ): Promise<DeletePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this API. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use ListPolicyVersions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DeleteConflictException} <p>You can't delete the resource because it is attached to one or more resources.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePolicyVersion(
    args: DeletePolicyVersionInput
  ): Promise<DeletePolicyVersionOutput>;
  public deletePolicyVersion(
    args: DeletePolicyVersionInput,
    cb: (err: any, data?: DeletePolicyVersionOutput) => void
  ): void;
  public deletePolicyVersion(
    args: DeletePolicyVersionInput,
    cb?: (err: any, data?: DeletePolicyVersionOutput) => void
  ): Promise<DeletePolicyVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePolicyVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a CA certificate registration code.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRegistrationCode(
    args: DeleteRegistrationCodeInput
  ): Promise<DeleteRegistrationCodeOutput>;
  public deleteRegistrationCode(
    args: DeleteRegistrationCodeInput,
    cb: (err: any, data?: DeleteRegistrationCodeOutput) => void
  ): void;
  public deleteRegistrationCode(
    args: DeleteRegistrationCodeInput,
    cb?: (err: any, data?: DeleteRegistrationCodeOutput) => void
  ): Promise<DeleteRegistrationCodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRegistrationCodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a role alias</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DeleteConflictException} <p>You can't delete the resource because it is attached to one or more resources.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRoleAlias(
    args: DeleteRoleAliasInput
  ): Promise<DeleteRoleAliasOutput>;
  public deleteRoleAlias(
    args: DeleteRoleAliasInput,
    cb: (err: any, data?: DeleteRoleAliasOutput) => void
  ): void;
  public deleteRoleAlias(
    args: DeleteRoleAliasInput,
    cb?: (err: any, data?: DeleteRoleAliasOutput) => void
  ): Promise<DeleteRoleAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRoleAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a scheduled audit.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteScheduledAudit(
    args: DeleteScheduledAuditInput
  ): Promise<DeleteScheduledAuditOutput>;
  public deleteScheduledAudit(
    args: DeleteScheduledAuditInput,
    cb: (err: any, data?: DeleteScheduledAuditOutput) => void
  ): void;
  public deleteScheduledAudit(
    args: DeleteScheduledAuditInput,
    cb?: (err: any, data?: DeleteScheduledAuditOutput) => void
  ): Promise<DeleteScheduledAuditOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteScheduledAuditCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a Device Defender security profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSecurityProfile(
    args: DeleteSecurityProfileInput
  ): Promise<DeleteSecurityProfileOutput>;
  public deleteSecurityProfile(
    args: DeleteSecurityProfileInput,
    cb: (err: any, data?: DeleteSecurityProfileOutput) => void
  ): void;
  public deleteSecurityProfile(
    args: DeleteSecurityProfileInput,
    cb?: (err: any, data?: DeleteSecurityProfileOutput) => void
  ): Promise<DeleteSecurityProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSecurityProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a stream.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {DeleteConflictException} <p>You can't delete the resource because it is attached to one or more resources.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteStream(args: DeleteStreamInput): Promise<DeleteStreamOutput>;
  public deleteStream(
    args: DeleteStreamInput,
    cb: (err: any, data?: DeleteStreamOutput) => void
  ): void;
  public deleteStream(
    args: DeleteStreamInput,
    cb?: (err: any, data?: DeleteStreamOutput) => void
  ): Promise<DeleteStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteThing(args: DeleteThingInput): Promise<DeleteThingOutput>;
  public deleteThing(
    args: DeleteThingInput,
    cb: (err: any, data?: DeleteThingOutput) => void
  ): void;
  public deleteThing(
    args: DeleteThingInput,
    cb?: (err: any, data?: DeleteThingOutput) => void
  ): Promise<DeleteThingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteThingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a thing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteThingGroup(
    args: DeleteThingGroupInput
  ): Promise<DeleteThingGroupOutput>;
  public deleteThingGroup(
    args: DeleteThingGroupInput,
    cb: (err: any, data?: DeleteThingGroupOutput) => void
  ): void;
  public deleteThingGroup(
    args: DeleteThingGroupInput,
    cb?: (err: any, data?: DeleteThingGroupOutput) => void
  ): Promise<DeleteThingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteThingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and finally use <a>DeleteThingType</a> to delete the thing type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteThingType(
    args: DeleteThingTypeInput
  ): Promise<DeleteThingTypeOutput>;
  public deleteThingType(
    args: DeleteThingTypeInput,
    cb: (err: any, data?: DeleteThingTypeOutput) => void
  ): void;
  public deleteThingType(
    args: DeleteThingTypeInput,
    cb?: (err: any, data?: DeleteThingTypeOutput) => void
  ): Promise<DeleteThingTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteThingTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ConflictingResourceUpdateException} <p>A conflicting resource update exception. This exception is thrown when two pending updates cause a conflict.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTopicRule(
    args: DeleteTopicRuleInput
  ): Promise<DeleteTopicRuleOutput>;
  public deleteTopicRule(
    args: DeleteTopicRuleInput,
    cb: (err: any, data?: DeleteTopicRuleOutput) => void
  ): void;
  public deleteTopicRule(
    args: DeleteTopicRuleInput,
    cb?: (err: any, data?: DeleteTopicRuleOutput) => void
  ): Promise<DeleteTopicRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTopicRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a logging level.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteV2LoggingLevel(
    args: DeleteV2LoggingLevelInput
  ): Promise<DeleteV2LoggingLevelOutput>;
  public deleteV2LoggingLevel(
    args: DeleteV2LoggingLevelInput,
    cb: (err: any, data?: DeleteV2LoggingLevelOutput) => void
  ): void;
  public deleteV2LoggingLevel(
    args: DeleteV2LoggingLevelInput,
    cb?: (err: any, data?: DeleteV2LoggingLevelOutput) => void
  ): Promise<DeleteV2LoggingLevelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteV2LoggingLevelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecates a thing type. You can not associate new things with deprecated thing type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deprecateThingType(
    args: DeprecateThingTypeInput
  ): Promise<DeprecateThingTypeOutput>;
  public deprecateThingType(
    args: DeprecateThingTypeInput,
    cb: (err: any, data?: DeprecateThingTypeOutput) => void
  ): void;
  public deprecateThingType(
    args: DeprecateThingTypeInput,
    cb?: (err: any, data?: DeprecateThingTypeOutput) => void
  ): Promise<DeprecateThingTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeprecateThingTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAccountAuditConfiguration(
    args: DescribeAccountAuditConfigurationInput
  ): Promise<DescribeAccountAuditConfigurationOutput>;
  public describeAccountAuditConfiguration(
    args: DescribeAccountAuditConfigurationInput,
    cb: (err: any, data?: DescribeAccountAuditConfigurationOutput) => void
  ): void;
  public describeAccountAuditConfiguration(
    args: DescribeAccountAuditConfigurationInput,
    cb?: (err: any, data?: DescribeAccountAuditConfigurationOutput) => void
  ): Promise<DescribeAccountAuditConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAccountAuditConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and when the audit that returned the finding was started.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAuditFinding(
    args: DescribeAuditFindingInput
  ): Promise<DescribeAuditFindingOutput>;
  public describeAuditFinding(
    args: DescribeAuditFindingInput,
    cb: (err: any, data?: DescribeAuditFindingOutput) => void
  ): void;
  public describeAuditFinding(
    args: DescribeAuditFindingInput,
    cb?: (err: any, data?: DescribeAuditFindingOutput) => void
  ): Promise<DescribeAuditFindingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAuditFindingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAuditMitigationActionsTask(
    args: DescribeAuditMitigationActionsTaskInput
  ): Promise<DescribeAuditMitigationActionsTaskOutput>;
  public describeAuditMitigationActionsTask(
    args: DescribeAuditMitigationActionsTaskInput,
    cb: (err: any, data?: DescribeAuditMitigationActionsTaskOutput) => void
  ): void;
  public describeAuditMitigationActionsTask(
    args: DescribeAuditMitigationActionsTaskInput,
    cb?: (err: any, data?: DescribeAuditMitigationActionsTaskOutput) => void
  ): Promise<DescribeAuditMitigationActionsTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAuditMitigationActionsTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a Device Defender audit.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAuditTask(
    args: DescribeAuditTaskInput
  ): Promise<DescribeAuditTaskOutput>;
  public describeAuditTask(
    args: DescribeAuditTaskInput,
    cb: (err: any, data?: DescribeAuditTaskOutput) => void
  ): void;
  public describeAuditTask(
    args: DescribeAuditTaskInput,
    cb?: (err: any, data?: DescribeAuditTaskOutput) => void
  ): Promise<DescribeAuditTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAuditTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an authorizer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAuthorizer(
    args: DescribeAuthorizerInput
  ): Promise<DescribeAuthorizerOutput>;
  public describeAuthorizer(
    args: DescribeAuthorizerInput,
    cb: (err: any, data?: DescribeAuthorizerOutput) => void
  ): void;
  public describeAuthorizer(
    args: DescribeAuthorizerInput,
    cb?: (err: any, data?: DescribeAuthorizerOutput) => void
  ): Promise<DescribeAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a billing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBillingGroup(
    args: DescribeBillingGroupInput
  ): Promise<DescribeBillingGroupOutput>;
  public describeBillingGroup(
    args: DescribeBillingGroupInput,
    cb: (err: any, data?: DescribeBillingGroupOutput) => void
  ): void;
  public describeBillingGroup(
    args: DescribeBillingGroupInput,
    cb?: (err: any, data?: DescribeBillingGroupOutput) => void
  ): Promise<DescribeBillingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBillingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a registered CA certificate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCACertificate(
    args: DescribeCACertificateInput
  ): Promise<DescribeCACertificateOutput>;
  public describeCACertificate(
    args: DescribeCACertificateInput,
    cb: (err: any, data?: DescribeCACertificateOutput) => void
  ): void;
  public describeCACertificate(
    args: DescribeCACertificateInput,
    cb?: (err: any, data?: DescribeCACertificateOutput) => void
  ): Promise<DescribeCACertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCACertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the specified certificate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCertificate(
    args: DescribeCertificateInput
  ): Promise<DescribeCertificateOutput>;
  public describeCertificate(
    args: DescribeCertificateInput,
    cb: (err: any, data?: DescribeCertificateOutput) => void
  ): void;
  public describeCertificate(
    args: DescribeCertificateInput,
    cb?: (err: any, data?: DescribeCertificateOutput) => void
  ): Promise<DescribeCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the default authorizer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDefaultAuthorizer(
    args: DescribeDefaultAuthorizerInput
  ): Promise<DescribeDefaultAuthorizerOutput>;
  public describeDefaultAuthorizer(
    args: DescribeDefaultAuthorizerInput,
    cb: (err: any, data?: DescribeDefaultAuthorizerOutput) => void
  ): void;
  public describeDefaultAuthorizer(
    args: DescribeDefaultAuthorizerInput,
    cb?: (err: any, data?: DescribeDefaultAuthorizerOutput) => void
  ): Promise<DescribeDefaultAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDefaultAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a unique endpoint specific to the AWS account making the call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEndpoint(
    args: DescribeEndpointInput
  ): Promise<DescribeEndpointOutput>;
  public describeEndpoint(
    args: DescribeEndpointInput,
    cb: (err: any, data?: DescribeEndpointOutput) => void
  ): void;
  public describeEndpoint(
    args: DescribeEndpointInput,
    cb?: (err: any, data?: DescribeEndpointOutput) => void
  ): Promise<DescribeEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes event configurations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEventConfigurations(
    args: DescribeEventConfigurationsInput
  ): Promise<DescribeEventConfigurationsOutput>;
  public describeEventConfigurations(
    args: DescribeEventConfigurationsInput,
    cb: (err: any, data?: DescribeEventConfigurationsOutput) => void
  ): void;
  public describeEventConfigurations(
    args: DescribeEventConfigurationsInput,
    cb?: (err: any, data?: DescribeEventConfigurationsOutput) => void
  ): Promise<DescribeEventConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a search index.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeIndex(args: DescribeIndexInput): Promise<DescribeIndexOutput>;
  public describeIndex(
    args: DescribeIndexInput,
    cb: (err: any, data?: DescribeIndexOutput) => void
  ): void;
  public describeIndex(
    args: DescribeIndexInput,
    cb?: (err: any, data?: DescribeIndexOutput) => void
  ): Promise<DescribeIndexOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeIndexCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeJob(args: DescribeJobInput): Promise<DescribeJobOutput>;
  public describeJob(
    args: DescribeJobInput,
    cb: (err: any, data?: DescribeJobOutput) => void
  ): void;
  public describeJob(
    args: DescribeJobInput,
    cb?: (err: any, data?: DescribeJobOutput) => void
  ): Promise<DescribeJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a job execution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeJobExecution(
    args: DescribeJobExecutionInput
  ): Promise<DescribeJobExecutionOutput>;
  public describeJobExecution(
    args: DescribeJobExecutionInput,
    cb: (err: any, data?: DescribeJobExecutionOutput) => void
  ): void;
  public describeJobExecution(
    args: DescribeJobExecutionInput,
    cb?: (err: any, data?: DescribeJobExecutionOutput) => void
  ): Promise<DescribeJobExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeJobExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a mitigation action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMitigationAction(
    args: DescribeMitigationActionInput
  ): Promise<DescribeMitigationActionOutput>;
  public describeMitigationAction(
    args: DescribeMitigationActionInput,
    cb: (err: any, data?: DescribeMitigationActionOutput) => void
  ): void;
  public describeMitigationAction(
    args: DescribeMitigationActionInput,
    cb?: (err: any, data?: DescribeMitigationActionOutput) => void
  ): Promise<DescribeMitigationActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMitigationActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a role alias.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRoleAlias(
    args: DescribeRoleAliasInput
  ): Promise<DescribeRoleAliasOutput>;
  public describeRoleAlias(
    args: DescribeRoleAliasInput,
    cb: (err: any, data?: DescribeRoleAliasOutput) => void
  ): void;
  public describeRoleAlias(
    args: DescribeRoleAliasInput,
    cb?: (err: any, data?: DescribeRoleAliasOutput) => void
  ): Promise<DescribeRoleAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRoleAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a scheduled audit.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeScheduledAudit(
    args: DescribeScheduledAuditInput
  ): Promise<DescribeScheduledAuditOutput>;
  public describeScheduledAudit(
    args: DescribeScheduledAuditInput,
    cb: (err: any, data?: DescribeScheduledAuditOutput) => void
  ): void;
  public describeScheduledAudit(
    args: DescribeScheduledAuditInput,
    cb?: (err: any, data?: DescribeScheduledAuditOutput) => void
  ): Promise<DescribeScheduledAuditOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeScheduledAuditCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a Device Defender security profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSecurityProfile(
    args: DescribeSecurityProfileInput
  ): Promise<DescribeSecurityProfileOutput>;
  public describeSecurityProfile(
    args: DescribeSecurityProfileInput,
    cb: (err: any, data?: DescribeSecurityProfileOutput) => void
  ): void;
  public describeSecurityProfile(
    args: DescribeSecurityProfileInput,
    cb?: (err: any, data?: DescribeSecurityProfileOutput) => void
  ): Promise<DescribeSecurityProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSecurityProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a stream.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStream(
    args: DescribeStreamInput
  ): Promise<DescribeStreamOutput>;
  public describeStream(
    args: DescribeStreamInput,
    cb: (err: any, data?: DescribeStreamOutput) => void
  ): void;
  public describeStream(
    args: DescribeStreamInput,
    cb?: (err: any, data?: DescribeStreamOutput) => void
  ): Promise<DescribeStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the specified thing.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeThing(args: DescribeThingInput): Promise<DescribeThingOutput>;
  public describeThing(
    args: DescribeThingInput,
    cb: (err: any, data?: DescribeThingOutput) => void
  ): void;
  public describeThing(
    args: DescribeThingInput,
    cb?: (err: any, data?: DescribeThingOutput) => void
  ): Promise<DescribeThingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeThingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describe a thing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeThingGroup(
    args: DescribeThingGroupInput
  ): Promise<DescribeThingGroupOutput>;
  public describeThingGroup(
    args: DescribeThingGroupInput,
    cb: (err: any, data?: DescribeThingGroupOutput) => void
  ): void;
  public describeThingGroup(
    args: DescribeThingGroupInput,
    cb?: (err: any, data?: DescribeThingGroupOutput) => void
  ): Promise<DescribeThingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeThingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a bulk thing provisioning task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeThingRegistrationTask(
    args: DescribeThingRegistrationTaskInput
  ): Promise<DescribeThingRegistrationTaskOutput>;
  public describeThingRegistrationTask(
    args: DescribeThingRegistrationTaskInput,
    cb: (err: any, data?: DescribeThingRegistrationTaskOutput) => void
  ): void;
  public describeThingRegistrationTask(
    args: DescribeThingRegistrationTaskInput,
    cb?: (err: any, data?: DescribeThingRegistrationTaskOutput) => void
  ): Promise<DescribeThingRegistrationTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeThingRegistrationTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the specified thing type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeThingType(
    args: DescribeThingTypeInput
  ): Promise<DescribeThingTypeOutput>;
  public describeThingType(
    args: DescribeThingTypeInput,
    cb: (err: any, data?: DescribeThingTypeOutput) => void
  ): void;
  public describeThingType(
    args: DescribeThingTypeInput,
    cb?: (err: any, data?: DescribeThingTypeOutput) => void
  ): Promise<DescribeThingTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeThingTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches a policy from the specified target.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachPolicy(args: DetachPolicyInput): Promise<DetachPolicyOutput>;
  public detachPolicy(
    args: DetachPolicyInput,
    cb: (err: any, data?: DetachPolicyOutput) => void
  ): void;
  public detachPolicy(
    args: DetachPolicyInput,
    cb?: (err: any, data?: DetachPolicyOutput) => void
  ): Promise<DetachPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified policy from the specified certificate.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>DetachPolicy</a> instead.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachPrincipalPolicy(
    args: DetachPrincipalPolicyInput
  ): Promise<DetachPrincipalPolicyOutput>;
  public detachPrincipalPolicy(
    args: DetachPrincipalPolicyInput,
    cb: (err: any, data?: DetachPrincipalPolicyOutput) => void
  ): void;
  public detachPrincipalPolicy(
    args: DetachPrincipalPolicyInput,
    cb?: (err: any, data?: DetachPrincipalPolicyOutput) => void
  ): Promise<DetachPrincipalPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachPrincipalPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a Device Defender security profile from a thing group or from this account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachSecurityProfile(
    args: DetachSecurityProfileInput
  ): Promise<DetachSecurityProfileOutput>;
  public detachSecurityProfile(
    args: DetachSecurityProfileInput,
    cb: (err: any, data?: DetachSecurityProfileOutput) => void
  ): void;
  public detachSecurityProfile(
    args: DetachSecurityProfileInput,
    cb?: (err: any, data?: DetachSecurityProfileOutput) => void
  ): Promise<DetachSecurityProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachSecurityProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachThingPrincipal(
    args: DetachThingPrincipalInput
  ): Promise<DetachThingPrincipalOutput>;
  public detachThingPrincipal(
    args: DetachThingPrincipalInput,
    cb: (err: any, data?: DetachThingPrincipalOutput) => void
  ): void;
  public detachThingPrincipal(
    args: DetachThingPrincipalInput,
    cb?: (err: any, data?: DetachThingPrincipalOutput) => void
  ): Promise<DetachThingPrincipalOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachThingPrincipalCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ConflictingResourceUpdateException} <p>A conflicting resource update exception. This exception is thrown when two pending updates cause a conflict.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableTopicRule(
    args: DisableTopicRuleInput
  ): Promise<DisableTopicRuleOutput>;
  public disableTopicRule(
    args: DisableTopicRuleInput,
    cb: (err: any, data?: DisableTopicRuleOutput) => void
  ): void;
  public disableTopicRule(
    args: DisableTopicRuleInput,
    cb?: (err: any, data?: DisableTopicRuleOutput) => void
  ): Promise<DisableTopicRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableTopicRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables the rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ConflictingResourceUpdateException} <p>A conflicting resource update exception. This exception is thrown when two pending updates cause a conflict.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableTopicRule(
    args: EnableTopicRuleInput
  ): Promise<EnableTopicRuleOutput>;
  public enableTopicRule(
    args: EnableTopicRuleInput,
    cb: (err: any, data?: EnableTopicRuleOutput) => void
  ): void;
  public enableTopicRule(
    args: EnableTopicRuleInput,
    cb?: (err: any, data?: EnableTopicRuleOutput) => void
  ): Promise<EnableTopicRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableTopicRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of the policies that have an effect on the authorization behavior of the specified device when it connects to the AWS IoT device gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEffectivePolicies(
    args: GetEffectivePoliciesInput
  ): Promise<GetEffectivePoliciesOutput>;
  public getEffectivePolicies(
    args: GetEffectivePoliciesInput,
    cb: (err: any, data?: GetEffectivePoliciesOutput) => void
  ): void;
  public getEffectivePolicies(
    args: GetEffectivePoliciesInput,
    cb?: (err: any, data?: GetEffectivePoliciesOutput) => void
  ): Promise<GetEffectivePoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEffectivePoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the search configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIndexingConfiguration(
    args: GetIndexingConfigurationInput
  ): Promise<GetIndexingConfigurationOutput>;
  public getIndexingConfiguration(
    args: GetIndexingConfigurationInput,
    cb: (err: any, data?: GetIndexingConfigurationOutput) => void
  ): void;
  public getIndexingConfiguration(
    args: GetIndexingConfigurationInput,
    cb?: (err: any, data?: GetIndexingConfigurationOutput) => void
  ): Promise<GetIndexingConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIndexingConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a job document.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJobDocument(
    args: GetJobDocumentInput
  ): Promise<GetJobDocumentOutput>;
  public getJobDocument(
    args: GetJobDocumentInput,
    cb: (err: any, data?: GetJobDocumentOutput) => void
  ): void;
  public getJobDocument(
    args: GetJobDocumentInput,
    cb?: (err: any, data?: GetJobDocumentOutput) => void
  ): Promise<GetJobDocumentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobDocumentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code> instead.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLoggingOptions(
    args: GetLoggingOptionsInput
  ): Promise<GetLoggingOptionsOutput>;
  public getLoggingOptions(
    args: GetLoggingOptionsInput,
    cb: (err: any, data?: GetLoggingOptionsOutput) => void
  ): void;
  public getLoggingOptions(
    args: GetLoggingOptionsInput,
    cb?: (err: any, data?: GetLoggingOptionsOutput) => void
  ): Promise<GetLoggingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLoggingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets an OTA update.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOTAUpdate(args: GetOTAUpdateInput): Promise<GetOTAUpdateOutput>;
  public getOTAUpdate(
    args: GetOTAUpdateInput,
    cb: (err: any, data?: GetOTAUpdateOutput) => void
  ): void;
  public getOTAUpdate(
    args: GetOTAUpdateInput,
    cb?: (err: any, data?: GetOTAUpdateOutput) => void
  ): Promise<GetOTAUpdateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOTAUpdateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the specified policy with the policy document of the default version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPolicy(args: GetPolicyInput): Promise<GetPolicyOutput>;
  public getPolicy(
    args: GetPolicyInput,
    cb: (err: any, data?: GetPolicyOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyInput,
    cb?: (err: any, data?: GetPolicyOutput) => void
  ): Promise<GetPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the specified policy version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPolicyVersion(
    args: GetPolicyVersionInput
  ): Promise<GetPolicyVersionOutput>;
  public getPolicyVersion(
    args: GetPolicyVersionInput,
    cb: (err: any, data?: GetPolicyVersionOutput) => void
  ): void;
  public getPolicyVersion(
    args: GetPolicyVersionInput,
    cb?: (err: any, data?: GetPolicyVersionOutput) => void
  ): Promise<GetPolicyVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPolicyVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a registration code used to register a CA certificate with AWS IoT.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRegistrationCode(
    args: GetRegistrationCodeInput
  ): Promise<GetRegistrationCodeOutput>;
  public getRegistrationCode(
    args: GetRegistrationCodeInput,
    cb: (err: any, data?: GetRegistrationCodeOutput) => void
  ): void;
  public getRegistrationCode(
    args: GetRegistrationCodeInput,
    cb?: (err: any, data?: GetRegistrationCodeOutput) => void
  ): Promise<GetRegistrationCodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRegistrationCodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets statistics about things that match the specified query.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidQueryException} <p>The query is invalid.</p>
   *   - {InvalidAggregationException} <p>The aggregation is invalid.</p>
   *   - {IndexNotReadyException} <p>The index is not ready.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getStatistics(args: GetStatisticsInput): Promise<GetStatisticsOutput>;
  public getStatistics(
    args: GetStatisticsInput,
    cb: (err: any, data?: GetStatisticsOutput) => void
  ): void;
  public getStatistics(
    args: GetStatisticsInput,
    cb?: (err: any, data?: GetStatisticsOutput) => void
  ): Promise<GetStatisticsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetStatisticsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTopicRule(args: GetTopicRuleInput): Promise<GetTopicRuleOutput>;
  public getTopicRule(
    args: GetTopicRuleInput,
    cb: (err: any, data?: GetTopicRuleOutput) => void
  ): void;
  public getTopicRule(
    args: GetTopicRuleInput,
    cb?: (err: any, data?: GetTopicRuleOutput) => void
  ): Promise<GetTopicRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTopicRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the fine grained logging options.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {NotConfiguredException} <p>The resource is not configured.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getV2LoggingOptions(
    args: GetV2LoggingOptionsInput
  ): Promise<GetV2LoggingOptionsOutput>;
  public getV2LoggingOptions(
    args: GetV2LoggingOptionsInput,
    cb: (err: any, data?: GetV2LoggingOptionsOutput) => void
  ): void;
  public getV2LoggingOptions(
    args: GetV2LoggingOptionsInput,
    cb?: (err: any, data?: GetV2LoggingOptionsOutput) => void
  ): Promise<GetV2LoggingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetV2LoggingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the active violations for a given Device Defender security profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listActiveViolations(
    args: ListActiveViolationsInput
  ): Promise<ListActiveViolationsOutput>;
  public listActiveViolations(
    args: ListActiveViolationsInput,
    cb: (err: any, data?: ListActiveViolationsOutput) => void
  ): void;
  public listActiveViolations(
    args: ListActiveViolationsInput,
    cb?: (err: any, data?: ListActiveViolationsOutput) => void
  ): Promise<ListActiveViolationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListActiveViolationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the policies attached to the specified thing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAttachedPolicies(
    args: ListAttachedPoliciesInput
  ): Promise<ListAttachedPoliciesOutput>;
  public listAttachedPolicies(
    args: ListAttachedPoliciesInput,
    cb: (err: any, data?: ListAttachedPoliciesOutput) => void
  ): void;
  public listAttachedPolicies(
    args: ListAttachedPoliciesInput,
    cb?: (err: any, data?: ListAttachedPoliciesOutput) => void
  ): Promise<ListAttachedPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAttachedPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 180 days.)</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAuditFindings(
    args: ListAuditFindingsInput
  ): Promise<ListAuditFindingsOutput>;
  public listAuditFindings(
    args: ListAuditFindingsInput,
    cb: (err: any, data?: ListAuditFindingsOutput) => void
  ): void;
  public listAuditFindings(
    args: ListAuditFindingsInput,
    cb?: (err: any, data?: ListAuditFindingsOutput) => void
  ): Promise<ListAuditFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAuditFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the status of audit mitigation action tasks that were executed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAuditMitigationActionsExecutions(
    args: ListAuditMitigationActionsExecutionsInput
  ): Promise<ListAuditMitigationActionsExecutionsOutput>;
  public listAuditMitigationActionsExecutions(
    args: ListAuditMitigationActionsExecutionsInput,
    cb: (err: any, data?: ListAuditMitigationActionsExecutionsOutput) => void
  ): void;
  public listAuditMitigationActionsExecutions(
    args: ListAuditMitigationActionsExecutionsInput,
    cb?: (err: any, data?: ListAuditMitigationActionsExecutionsOutput) => void
  ): Promise<ListAuditMitigationActionsExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAuditMitigationActionsExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of audit mitigation action tasks that match the specified filters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAuditMitigationActionsTasks(
    args: ListAuditMitigationActionsTasksInput
  ): Promise<ListAuditMitigationActionsTasksOutput>;
  public listAuditMitigationActionsTasks(
    args: ListAuditMitigationActionsTasksInput,
    cb: (err: any, data?: ListAuditMitigationActionsTasksOutput) => void
  ): void;
  public listAuditMitigationActionsTasks(
    args: ListAuditMitigationActionsTasksInput,
    cb?: (err: any, data?: ListAuditMitigationActionsTasksOutput) => void
  ): Promise<ListAuditMitigationActionsTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAuditMitigationActionsTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the Device Defender audits that have been performed during a given time period.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAuditTasks(
    args: ListAuditTasksInput
  ): Promise<ListAuditTasksOutput>;
  public listAuditTasks(
    args: ListAuditTasksInput,
    cb: (err: any, data?: ListAuditTasksOutput) => void
  ): void;
  public listAuditTasks(
    args: ListAuditTasksInput,
    cb?: (err: any, data?: ListAuditTasksOutput) => void
  ): Promise<ListAuditTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAuditTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the authorizers registered in your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAuthorizers(
    args: ListAuthorizersInput
  ): Promise<ListAuthorizersOutput>;
  public listAuthorizers(
    args: ListAuthorizersInput,
    cb: (err: any, data?: ListAuthorizersOutput) => void
  ): void;
  public listAuthorizers(
    args: ListAuthorizersInput,
    cb?: (err: any, data?: ListAuthorizersOutput) => void
  ): Promise<ListAuthorizersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAuthorizersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the billing groups you have created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBillingGroups(
    args: ListBillingGroupsInput
  ): Promise<ListBillingGroupsOutput>;
  public listBillingGroups(
    args: ListBillingGroupsInput,
    cb: (err: any, data?: ListBillingGroupsOutput) => void
  ): void;
  public listBillingGroups(
    args: ListBillingGroupsInput,
    cb?: (err: any, data?: ListBillingGroupsOutput) => void
  ): Promise<ListBillingGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBillingGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the CA certificates registered for your AWS account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCACertificates(
    args: ListCACertificatesInput
  ): Promise<ListCACertificatesOutput>;
  public listCACertificates(
    args: ListCACertificatesInput,
    cb: (err: any, data?: ListCACertificatesOutput) => void
  ): void;
  public listCACertificates(
    args: ListCACertificatesInput,
    cb?: (err: any, data?: ListCACertificatesOutput) => void
  ): Promise<ListCACertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCACertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the certificates registered in your AWS account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCertificates(
    args: ListCertificatesInput
  ): Promise<ListCertificatesOutput>;
  public listCertificates(
    args: ListCertificatesInput,
    cb: (err: any, data?: ListCertificatesOutput) => void
  ): void;
  public listCertificates(
    args: ListCertificatesInput,
    cb?: (err: any, data?: ListCertificatesOutput) => void
  ): Promise<ListCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the device certificates signed by the specified CA certificate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCertificatesByCA(
    args: ListCertificatesByCAInput
  ): Promise<ListCertificatesByCAOutput>;
  public listCertificatesByCA(
    args: ListCertificatesByCAInput,
    cb: (err: any, data?: ListCertificatesByCAOutput) => void
  ): void;
  public listCertificatesByCA(
    args: ListCertificatesByCAInput,
    cb?: (err: any, data?: ListCertificatesByCAOutput) => void
  ): Promise<ListCertificatesByCAOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCertificatesByCACommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the search indices.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listIndices(args: ListIndicesInput): Promise<ListIndicesOutput>;
  public listIndices(
    args: ListIndicesInput,
    cb: (err: any, data?: ListIndicesOutput) => void
  ): void;
  public listIndices(
    args: ListIndicesInput,
    cb?: (err: any, data?: ListIndicesOutput) => void
  ): Promise<ListIndicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListIndicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the job executions for a job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobExecutionsForJob(
    args: ListJobExecutionsForJobInput
  ): Promise<ListJobExecutionsForJobOutput>;
  public listJobExecutionsForJob(
    args: ListJobExecutionsForJobInput,
    cb: (err: any, data?: ListJobExecutionsForJobOutput) => void
  ): void;
  public listJobExecutionsForJob(
    args: ListJobExecutionsForJobInput,
    cb?: (err: any, data?: ListJobExecutionsForJobOutput) => void
  ): Promise<ListJobExecutionsForJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobExecutionsForJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the job executions for the specified thing.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobExecutionsForThing(
    args: ListJobExecutionsForThingInput
  ): Promise<ListJobExecutionsForThingOutput>;
  public listJobExecutionsForThing(
    args: ListJobExecutionsForThingInput,
    cb: (err: any, data?: ListJobExecutionsForThingOutput) => void
  ): void;
  public listJobExecutionsForThing(
    args: ListJobExecutionsForThingInput,
    cb?: (err: any, data?: ListJobExecutionsForThingOutput) => void
  ): Promise<ListJobExecutionsForThingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobExecutionsForThingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists jobs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobs(args: ListJobsInput): Promise<ListJobsOutput>;
  public listJobs(
    args: ListJobsInput,
    cb: (err: any, data?: ListJobsOutput) => void
  ): void;
  public listJobs(
    args: ListJobsInput,
    cb?: (err: any, data?: ListJobsOutput) => void
  ): Promise<ListJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of all mitigation actions that match the specified filter criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMitigationActions(
    args: ListMitigationActionsInput
  ): Promise<ListMitigationActionsOutput>;
  public listMitigationActions(
    args: ListMitigationActionsInput,
    cb: (err: any, data?: ListMitigationActionsOutput) => void
  ): void;
  public listMitigationActions(
    args: ListMitigationActionsInput,
    cb?: (err: any, data?: ListMitigationActionsOutput) => void
  ): Promise<ListMitigationActionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMitigationActionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists OTA updates.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOTAUpdates(
    args: ListOTAUpdatesInput
  ): Promise<ListOTAUpdatesOutput>;
  public listOTAUpdates(
    args: ListOTAUpdatesInput,
    cb: (err: any, data?: ListOTAUpdatesOutput) => void
  ): void;
  public listOTAUpdates(
    args: ListOTAUpdatesInput,
    cb?: (err: any, data?: ListOTAUpdatesOutput) => void
  ): Promise<ListOTAUpdatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOTAUpdatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists certificates that are being transferred but not yet accepted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOutgoingCertificates(
    args: ListOutgoingCertificatesInput
  ): Promise<ListOutgoingCertificatesOutput>;
  public listOutgoingCertificates(
    args: ListOutgoingCertificatesInput,
    cb: (err: any, data?: ListOutgoingCertificatesOutput) => void
  ): void;
  public listOutgoingCertificates(
    args: ListOutgoingCertificatesInput,
    cb?: (err: any, data?: ListOutgoingCertificatesOutput) => void
  ): Promise<ListOutgoingCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOutgoingCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists your policies.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPolicies(args: ListPoliciesInput): Promise<ListPoliciesOutput>;
  public listPolicies(
    args: ListPoliciesInput,
    cb: (err: any, data?: ListPoliciesOutput) => void
  ): void;
  public listPolicies(
    args: ListPoliciesInput,
    cb?: (err: any, data?: ListPoliciesOutput) => void
  ): Promise<ListPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the principals associated with the specified policy.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>ListTargetsForPolicy</a> instead.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPolicyPrincipals(
    args: ListPolicyPrincipalsInput
  ): Promise<ListPolicyPrincipalsOutput>;
  public listPolicyPrincipals(
    args: ListPolicyPrincipalsInput,
    cb: (err: any, data?: ListPolicyPrincipalsOutput) => void
  ): void;
  public listPolicyPrincipals(
    args: ListPolicyPrincipalsInput,
    cb?: (err: any, data?: ListPolicyPrincipalsOutput) => void
  ): Promise<ListPolicyPrincipalsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPolicyPrincipalsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the versions of the specified policy and identifies the default version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPolicyVersions(
    args: ListPolicyVersionsInput
  ): Promise<ListPolicyVersionsOutput>;
  public listPolicyVersions(
    args: ListPolicyVersionsInput,
    cb: (err: any, data?: ListPolicyVersionsOutput) => void
  ): void;
  public listPolicyVersions(
    args: ListPolicyVersionsInput,
    cb?: (err: any, data?: ListPolicyVersionsOutput) => void
  ): Promise<ListPolicyVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPolicyVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>ListAttachedPolicies</a> instead.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPrincipalPolicies(
    args: ListPrincipalPoliciesInput
  ): Promise<ListPrincipalPoliciesOutput>;
  public listPrincipalPolicies(
    args: ListPrincipalPoliciesInput,
    cb: (err: any, data?: ListPrincipalPoliciesOutput) => void
  ): void;
  public listPrincipalPolicies(
    args: ListPrincipalPoliciesInput,
    cb?: (err: any, data?: ListPrincipalPoliciesOutput) => void
  ): Promise<ListPrincipalPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPrincipalPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPrincipalThings(
    args: ListPrincipalThingsInput
  ): Promise<ListPrincipalThingsOutput>;
  public listPrincipalThings(
    args: ListPrincipalThingsInput,
    cb: (err: any, data?: ListPrincipalThingsOutput) => void
  ): void;
  public listPrincipalThings(
    args: ListPrincipalThingsInput,
    cb?: (err: any, data?: ListPrincipalThingsOutput) => void
  ): Promise<ListPrincipalThingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPrincipalThingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the role aliases registered in your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRoleAliases(
    args: ListRoleAliasesInput
  ): Promise<ListRoleAliasesOutput>;
  public listRoleAliases(
    args: ListRoleAliasesInput,
    cb: (err: any, data?: ListRoleAliasesOutput) => void
  ): void;
  public listRoleAliases(
    args: ListRoleAliasesInput,
    cb?: (err: any, data?: ListRoleAliasesOutput) => void
  ): Promise<ListRoleAliasesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRoleAliasesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all of your scheduled audits.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listScheduledAudits(
    args: ListScheduledAuditsInput
  ): Promise<ListScheduledAuditsOutput>;
  public listScheduledAudits(
    args: ListScheduledAuditsInput,
    cb: (err: any, data?: ListScheduledAuditsOutput) => void
  ): void;
  public listScheduledAudits(
    args: ListScheduledAuditsInput,
    cb?: (err: any, data?: ListScheduledAuditsOutput) => void
  ): Promise<ListScheduledAuditsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListScheduledAuditsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the Device Defender security profiles you have created. You can use filters to list only those security profiles associated with a thing group or only those associated with your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSecurityProfiles(
    args: ListSecurityProfilesInput
  ): Promise<ListSecurityProfilesOutput>;
  public listSecurityProfiles(
    args: ListSecurityProfilesInput,
    cb: (err: any, data?: ListSecurityProfilesOutput) => void
  ): void;
  public listSecurityProfiles(
    args: ListSecurityProfilesInput,
    cb?: (err: any, data?: ListSecurityProfilesOutput) => void
  ): Promise<ListSecurityProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSecurityProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the Device Defender security profiles attached to a target (thing group).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSecurityProfilesForTarget(
    args: ListSecurityProfilesForTargetInput
  ): Promise<ListSecurityProfilesForTargetOutput>;
  public listSecurityProfilesForTarget(
    args: ListSecurityProfilesForTargetInput,
    cb: (err: any, data?: ListSecurityProfilesForTargetOutput) => void
  ): void;
  public listSecurityProfilesForTarget(
    args: ListSecurityProfilesForTargetInput,
    cb?: (err: any, data?: ListSecurityProfilesForTargetOutput) => void
  ): Promise<ListSecurityProfilesForTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSecurityProfilesForTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all of the streams in your AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listStreams(args: ListStreamsInput): Promise<ListStreamsOutput>;
  public listStreams(
    args: ListStreamsInput,
    cb: (err: any, data?: ListStreamsOutput) => void
  ): void;
  public listStreams(
    args: ListStreamsInput,
    cb?: (err: any, data?: ListStreamsOutput) => void
  ): Promise<ListStreamsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListStreamsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags (metadata) you have assigned to the resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
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
   * <p>List targets for the specified policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTargetsForPolicy(
    args: ListTargetsForPolicyInput
  ): Promise<ListTargetsForPolicyOutput>;
  public listTargetsForPolicy(
    args: ListTargetsForPolicyInput,
    cb: (err: any, data?: ListTargetsForPolicyOutput) => void
  ): void;
  public listTargetsForPolicy(
    args: ListTargetsForPolicyInput,
    cb?: (err: any, data?: ListTargetsForPolicyOutput) => void
  ): Promise<ListTargetsForPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTargetsForPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTargetsForSecurityProfile(
    args: ListTargetsForSecurityProfileInput
  ): Promise<ListTargetsForSecurityProfileOutput>;
  public listTargetsForSecurityProfile(
    args: ListTargetsForSecurityProfileInput,
    cb: (err: any, data?: ListTargetsForSecurityProfileOutput) => void
  ): void;
  public listTargetsForSecurityProfile(
    args: ListTargetsForSecurityProfileInput,
    cb?: (err: any, data?: ListTargetsForSecurityProfileOutput) => void
  ): Promise<ListTargetsForSecurityProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTargetsForSecurityProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the thing groups in your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listThingGroups(
    args: ListThingGroupsInput
  ): Promise<ListThingGroupsOutput>;
  public listThingGroups(
    args: ListThingGroupsInput,
    cb: (err: any, data?: ListThingGroupsOutput) => void
  ): void;
  public listThingGroups(
    args: ListThingGroupsInput,
    cb?: (err: any, data?: ListThingGroupsOutput) => void
  ): Promise<ListThingGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListThingGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the thing groups to which the specified thing belongs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listThingGroupsForThing(
    args: ListThingGroupsForThingInput
  ): Promise<ListThingGroupsForThingOutput>;
  public listThingGroupsForThing(
    args: ListThingGroupsForThingInput,
    cb: (err: any, data?: ListThingGroupsForThingOutput) => void
  ): void;
  public listThingGroupsForThing(
    args: ListThingGroupsForThingInput,
    cb?: (err: any, data?: ListThingGroupsForThingOutput) => void
  ): Promise<ListThingGroupsForThingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListThingGroupsForThingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listThingPrincipals(
    args: ListThingPrincipalsInput
  ): Promise<ListThingPrincipalsOutput>;
  public listThingPrincipals(
    args: ListThingPrincipalsInput,
    cb: (err: any, data?: ListThingPrincipalsOutput) => void
  ): void;
  public listThingPrincipals(
    args: ListThingPrincipalsInput,
    cb?: (err: any, data?: ListThingPrincipalsOutput) => void
  ): Promise<ListThingPrincipalsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListThingPrincipalsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Information about the thing registration tasks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listThingRegistrationTaskReports(
    args: ListThingRegistrationTaskReportsInput
  ): Promise<ListThingRegistrationTaskReportsOutput>;
  public listThingRegistrationTaskReports(
    args: ListThingRegistrationTaskReportsInput,
    cb: (err: any, data?: ListThingRegistrationTaskReportsOutput) => void
  ): void;
  public listThingRegistrationTaskReports(
    args: ListThingRegistrationTaskReportsInput,
    cb?: (err: any, data?: ListThingRegistrationTaskReportsOutput) => void
  ): Promise<ListThingRegistrationTaskReportsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListThingRegistrationTaskReportsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List bulk thing provisioning tasks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listThingRegistrationTasks(
    args: ListThingRegistrationTasksInput
  ): Promise<ListThingRegistrationTasksOutput>;
  public listThingRegistrationTasks(
    args: ListThingRegistrationTasksInput,
    cb: (err: any, data?: ListThingRegistrationTasksOutput) => void
  ): void;
  public listThingRegistrationTasks(
    args: ListThingRegistrationTasksInput,
    cb?: (err: any, data?: ListThingRegistrationTasksOutput) => void
  ): Promise<ListThingRegistrationTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListThingRegistrationTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the existing thing types.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listThingTypes(
    args: ListThingTypesInput
  ): Promise<ListThingTypesOutput>;
  public listThingTypes(
    args: ListThingTypesInput,
    cb: (err: any, data?: ListThingTypesOutput) => void
  ): void;
  public listThingTypes(
    args: ListThingTypesInput,
    cb?: (err: any, data?: ListThingTypesOutput) => void
  ): Promise<ListThingTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListThingTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example, calling <code>ListThings</code> with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listThings(args: ListThingsInput): Promise<ListThingsOutput>;
  public listThings(
    args: ListThingsInput,
    cb: (err: any, data?: ListThingsOutput) => void
  ): void;
  public listThings(
    args: ListThingsInput,
    cb?: (err: any, data?: ListThingsOutput) => void
  ): Promise<ListThingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListThingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the things you have added to the given billing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listThingsInBillingGroup(
    args: ListThingsInBillingGroupInput
  ): Promise<ListThingsInBillingGroupOutput>;
  public listThingsInBillingGroup(
    args: ListThingsInBillingGroupInput,
    cb: (err: any, data?: ListThingsInBillingGroupOutput) => void
  ): void;
  public listThingsInBillingGroup(
    args: ListThingsInBillingGroupInput,
    cb?: (err: any, data?: ListThingsInBillingGroupOutput) => void
  ): Promise<ListThingsInBillingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListThingsInBillingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the things in the specified group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listThingsInThingGroup(
    args: ListThingsInThingGroupInput
  ): Promise<ListThingsInThingGroupOutput>;
  public listThingsInThingGroup(
    args: ListThingsInThingGroupInput,
    cb: (err: any, data?: ListThingsInThingGroupOutput) => void
  ): void;
  public listThingsInThingGroup(
    args: ListThingsInThingGroupInput,
    cb?: (err: any, data?: ListThingsInThingGroupOutput) => void
  ): Promise<ListThingsInThingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListThingsInThingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the rules for the specific topic.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTopicRules(
    args: ListTopicRulesInput
  ): Promise<ListTopicRulesOutput>;
  public listTopicRules(
    args: ListTopicRulesInput,
    cb: (err: any, data?: ListTopicRulesOutput) => void
  ): void;
  public listTopicRules(
    args: ListTopicRulesInput,
    cb?: (err: any, data?: ListTopicRulesOutput) => void
  ): Promise<ListTopicRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTopicRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists logging levels.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {NotConfiguredException} <p>The resource is not configured.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listV2LoggingLevels(
    args: ListV2LoggingLevelsInput
  ): Promise<ListV2LoggingLevelsOutput>;
  public listV2LoggingLevels(
    args: ListV2LoggingLevelsInput,
    cb: (err: any, data?: ListV2LoggingLevelsOutput) => void
  ): void;
  public listV2LoggingLevels(
    args: ListV2LoggingLevelsInput,
    cb?: (err: any, data?: ListV2LoggingLevelsOutput) => void
  ): Promise<ListV2LoggingLevelsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListV2LoggingLevelsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the Device Defender security profile violations discovered during the given time period. You can use filters to limit the results to those alerts issued for a particular security profile, behavior, or thing (device).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listViolationEvents(
    args: ListViolationEventsInput
  ): Promise<ListViolationEventsOutput>;
  public listViolationEvents(
    args: ListViolationEventsInput,
    cb: (err: any, data?: ListViolationEventsOutput) => void
  ): void;
  public listViolationEvents(
    args: ListViolationEventsInput,
    cb?: (err: any, data?: ListViolationEventsOutput) => void
  ): Promise<ListViolationEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListViolationEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign device certificates, which can be then registered with AWS IoT. You can register up to 10 CA certificates per AWS account that have the same subject field. This enables you to have up to 10 certificate authorities sign your device certificates. If you have more than one CA certificate registered, make sure you pass the CA certificate when you register your device certificates with the RegisterCertificate API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {RegistrationCodeValidationException} <p>The registration code is invalid.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {CertificateValidationException} <p>The certificate is invalid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerCACertificate(
    args: RegisterCACertificateInput
  ): Promise<RegisterCACertificateOutput>;
  public registerCACertificate(
    args: RegisterCACertificateInput,
    cb: (err: any, data?: RegisterCACertificateOutput) => void
  ): void;
  public registerCACertificate(
    args: RegisterCACertificateInput,
    cb?: (err: any, data?: RegisterCACertificateOutput) => void
  ): Promise<RegisterCACertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterCACertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a device certificate with AWS IoT. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {CertificateValidationException} <p>The certificate is invalid.</p>
   *   - {CertificateStateException} <p>The certificate operation is not allowed.</p>
   *   - {CertificateConflictException} <p>Unable to verify the CA certificate used to sign the device certificate you are attempting to register. This is happens when you have registered more than one CA certificate that has the same subject field and public key.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerCertificate(
    args: RegisterCertificateInput
  ): Promise<RegisterCertificateOutput>;
  public registerCertificate(
    args: RegisterCertificateInput,
    cb: (err: any, data?: RegisterCertificateOutput) => void
  ): void;
  public registerCertificate(
    args: RegisterCertificateInput,
    cb?: (err: any, data?: RegisterCertificateOutput) => void
  ): Promise<RegisterCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provisions a thing.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ConflictingResourceUpdateException} <p>A conflicting resource update exception. This exception is thrown when two pending updates cause a conflict.</p>
   *   - {ResourceRegistrationFailureException} <p>The resource registration failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerThing(args: RegisterThingInput): Promise<RegisterThingOutput>;
  public registerThing(
    args: RegisterThingInput,
    cb: (err: any, data?: RegisterThingOutput) => void
  ): void;
  public registerThing(
    args: RegisterThingInput,
    cb?: (err: any, data?: RegisterThingOutput) => void
  ): Promise<RegisterThingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterThingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer, the certificate status changes from <b>PENDING_TRANSFER</b> to <b>INACTIVE</b>.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {TransferAlreadyCompletedException} <p>You can't revert the certificate transfer because the transfer is already complete.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rejectCertificateTransfer(
    args: RejectCertificateTransferInput
  ): Promise<RejectCertificateTransferOutput>;
  public rejectCertificateTransfer(
    args: RejectCertificateTransferInput,
    cb: (err: any, data?: RejectCertificateTransferOutput) => void
  ): void;
  public rejectCertificateTransfer(
    args: RejectCertificateTransferInput,
    cb?: (err: any, data?: RejectCertificateTransferOutput) => void
  ): Promise<RejectCertificateTransferOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RejectCertificateTransferCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the given thing from the billing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeThingFromBillingGroup(
    args: RemoveThingFromBillingGroupInput
  ): Promise<RemoveThingFromBillingGroupOutput>;
  public removeThingFromBillingGroup(
    args: RemoveThingFromBillingGroupInput,
    cb: (err: any, data?: RemoveThingFromBillingGroupOutput) => void
  ): void;
  public removeThingFromBillingGroup(
    args: RemoveThingFromBillingGroupInput,
    cb?: (err: any, data?: RemoveThingFromBillingGroupOutput) => void
  ): Promise<RemoveThingFromBillingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveThingFromBillingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Remove the specified thing from the specified group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeThingFromThingGroup(
    args: RemoveThingFromThingGroupInput
  ): Promise<RemoveThingFromThingGroupOutput>;
  public removeThingFromThingGroup(
    args: RemoveThingFromThingGroupInput,
    cb: (err: any, data?: RemoveThingFromThingGroupOutput) => void
  ): void;
  public removeThingFromThingGroup(
    args: RemoveThingFromThingGroupInput,
    cb?: (err: any, data?: RemoveThingFromThingGroupOutput) => void
  ): Promise<RemoveThingFromThingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveThingFromThingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SqlParseException} <p>The Rule-SQL expression can't be parsed correctly.</p>
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ConflictingResourceUpdateException} <p>A conflicting resource update exception. This exception is thrown when two pending updates cause a conflict.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public replaceTopicRule(
    args: ReplaceTopicRuleInput
  ): Promise<ReplaceTopicRuleOutput>;
  public replaceTopicRule(
    args: ReplaceTopicRuleInput,
    cb: (err: any, data?: ReplaceTopicRuleOutput) => void
  ): void;
  public replaceTopicRule(
    args: ReplaceTopicRuleInput,
    cb?: (err: any, data?: ReplaceTopicRuleOutput) => void
  ): Promise<ReplaceTopicRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReplaceTopicRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The query search index.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidQueryException} <p>The query is invalid.</p>
   *   - {IndexNotReadyException} <p>The index is not ready.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchIndex(args: SearchIndexInput): Promise<SearchIndexOutput>;
  public searchIndex(
    args: SearchIndexInput,
    cb: (err: any, data?: SearchIndexOutput) => void
  ): void;
  public searchIndex(
    args: SearchIndexInput,
    cb?: (err: any, data?: SearchIndexOutput) => void
  ): Promise<SearchIndexOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchIndexCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setDefaultAuthorizer(
    args: SetDefaultAuthorizerInput
  ): Promise<SetDefaultAuthorizerOutput>;
  public setDefaultAuthorizer(
    args: SetDefaultAuthorizerInput,
    cb: (err: any, data?: SetDefaultAuthorizerOutput) => void
  ): void;
  public setDefaultAuthorizer(
    args: SetDefaultAuthorizerInput,
    cb?: (err: any, data?: SetDefaultAuthorizerOutput) => void
  ): Promise<SetDefaultAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetDefaultAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the ListPrincipalPolicy API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionInput
  ): Promise<SetDefaultPolicyVersionOutput>;
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionInput,
    cb: (err: any, data?: SetDefaultPolicyVersionOutput) => void
  ): void;
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionInput,
    cb?: (err: any, data?: SetDefaultPolicyVersionOutput) => void
  ): Promise<SetDefaultPolicyVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetDefaultPolicyVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code> instead.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setLoggingOptions(
    args: SetLoggingOptionsInput
  ): Promise<SetLoggingOptionsOutput>;
  public setLoggingOptions(
    args: SetLoggingOptionsInput,
    cb: (err: any, data?: SetLoggingOptionsOutput) => void
  ): void;
  public setLoggingOptions(
    args: SetLoggingOptionsInput,
    cb?: (err: any, data?: SetLoggingOptionsOutput) => void
  ): Promise<SetLoggingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetLoggingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the logging level.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {NotConfiguredException} <p>The resource is not configured.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setV2LoggingLevel(
    args: SetV2LoggingLevelInput
  ): Promise<SetV2LoggingLevelOutput>;
  public setV2LoggingLevel(
    args: SetV2LoggingLevelInput,
    cb: (err: any, data?: SetV2LoggingLevelOutput) => void
  ): void;
  public setV2LoggingLevel(
    args: SetV2LoggingLevelInput,
    cb?: (err: any, data?: SetV2LoggingLevelOutput) => void
  ): Promise<SetV2LoggingLevelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetV2LoggingLevelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the logging options for the V2 logging service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setV2LoggingOptions(
    args: SetV2LoggingOptionsInput
  ): Promise<SetV2LoggingOptionsOutput>;
  public setV2LoggingOptions(
    args: SetV2LoggingOptionsInput,
    cb: (err: any, data?: SetV2LoggingOptionsOutput) => void
  ): void;
  public setV2LoggingOptions(
    args: SetV2LoggingOptionsInput,
    cb?: (err: any, data?: SetV2LoggingOptionsOutput) => void
  ): Promise<SetV2LoggingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetV2LoggingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a task that applies a set of mitigation actions to the specified target.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {TaskAlreadyExistsException} <p>This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startAuditMitigationActionsTask(
    args: StartAuditMitigationActionsTaskInput
  ): Promise<StartAuditMitigationActionsTaskOutput>;
  public startAuditMitigationActionsTask(
    args: StartAuditMitigationActionsTaskInput,
    cb: (err: any, data?: StartAuditMitigationActionsTaskOutput) => void
  ): void;
  public startAuditMitigationActionsTask(
    args: StartAuditMitigationActionsTaskInput,
    cb?: (err: any, data?: StartAuditMitigationActionsTaskOutput) => void
  ): Promise<StartAuditMitigationActionsTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartAuditMitigationActionsTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an on-demand Device Defender audit.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startOnDemandAuditTask(
    args: StartOnDemandAuditTaskInput
  ): Promise<StartOnDemandAuditTaskOutput>;
  public startOnDemandAuditTask(
    args: StartOnDemandAuditTaskInput,
    cb: (err: any, data?: StartOnDemandAuditTaskOutput) => void
  ): void;
  public startOnDemandAuditTask(
    args: StartOnDemandAuditTaskInput,
    cb?: (err: any, data?: StartOnDemandAuditTaskOutput) => void
  ): Promise<StartOnDemandAuditTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartOnDemandAuditTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a bulk thing provisioning task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startThingRegistrationTask(
    args: StartThingRegistrationTaskInput
  ): Promise<StartThingRegistrationTaskOutput>;
  public startThingRegistrationTask(
    args: StartThingRegistrationTaskInput,
    cb: (err: any, data?: StartThingRegistrationTaskOutput) => void
  ): void;
  public startThingRegistrationTask(
    args: StartThingRegistrationTaskInput,
    cb?: (err: any, data?: StartThingRegistrationTaskOutput) => void
  ): Promise<StartThingRegistrationTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartThingRegistrationTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels a bulk thing provisioning task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopThingRegistrationTask(
    args: StopThingRegistrationTaskInput
  ): Promise<StopThingRegistrationTaskOutput>;
  public stopThingRegistrationTask(
    args: StopThingRegistrationTaskInput,
    cb: (err: any, data?: StopThingRegistrationTaskOutput) => void
  ): void;
  public stopThingRegistrationTask(
    args: StopThingRegistrationTaskInput,
    cb?: (err: any, data?: StopThingRegistrationTaskOutput) => void
  ): Promise<StopThingRegistrationTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopThingRegistrationTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
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
   * <p>Tests if a specified principal is authorized to perform an AWS IoT action on a specified resource. Use this to test and debug the authorization behavior of devices that connect to the AWS IoT device gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testAuthorization(
    args: TestAuthorizationInput
  ): Promise<TestAuthorizationOutput>;
  public testAuthorization(
    args: TestAuthorizationInput,
    cb: (err: any, data?: TestAuthorizationOutput) => void
  ): void;
  public testAuthorization(
    args: TestAuthorizationInput,
    cb?: (err: any, data?: TestAuthorizationOutput) => void
  ): Promise<TestAuthorizationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestAuthorizationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the AWS IoT device gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {InvalidResponseException} <p>The response is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerInput
  ): Promise<TestInvokeAuthorizerOutput>;
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerInput,
    cb: (err: any, data?: TestInvokeAuthorizerOutput) => void
  ): void;
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerInput,
    cb?: (err: any, data?: TestInvokeAuthorizerOutput) => void
  ): Promise<TestInvokeAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestInvokeAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Transfers the specified certificate to the specified AWS account.</p> <p>You can cancel the transfer until it is acknowledged by the recipient.</p> <p>No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target.</p> <p>The certificate being transferred must not be in the ACTIVE state. You can use the UpdateCertificate API to deactivate it.</p> <p>The certificate must not have any policies attached to it. You can use the DetachPrincipalPolicy API to detach them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {CertificateStateException} <p>The certificate operation is not allowed.</p>
   *   - {TransferConflictException} <p>You can't transfer the certificate because authorization policies are still attached.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public transferCertificate(
    args: TransferCertificateInput
  ): Promise<TransferCertificateOutput>;
  public transferCertificate(
    args: TransferCertificateInput,
    cb: (err: any, data?: TransferCertificateOutput) => void
  ): void;
  public transferCertificate(
    args: TransferCertificateInput,
    cb?: (err: any, data?: TransferCertificateOutput) => void
  ): Promise<TransferCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TransferCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the given tags (metadata) from the resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
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

  /**
   * <p>Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAccountAuditConfiguration(
    args: UpdateAccountAuditConfigurationInput
  ): Promise<UpdateAccountAuditConfigurationOutput>;
  public updateAccountAuditConfiguration(
    args: UpdateAccountAuditConfigurationInput,
    cb: (err: any, data?: UpdateAccountAuditConfigurationOutput) => void
  ): void;
  public updateAccountAuditConfiguration(
    args: UpdateAccountAuditConfigurationInput,
    cb?: (err: any, data?: UpdateAccountAuditConfigurationOutput) => void
  ): Promise<UpdateAccountAuditConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAccountAuditConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an authorizer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {LimitExceededException} <p>A limit has been exceeded.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAuthorizer(
    args: UpdateAuthorizerInput
  ): Promise<UpdateAuthorizerOutput>;
  public updateAuthorizer(
    args: UpdateAuthorizerInput,
    cb: (err: any, data?: UpdateAuthorizerOutput) => void
  ): void;
  public updateAuthorizer(
    args: UpdateAuthorizerInput,
    cb?: (err: any, data?: UpdateAuthorizerOutput) => void
  ): Promise<UpdateAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates information about the billing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateBillingGroup(
    args: UpdateBillingGroupInput
  ): Promise<UpdateBillingGroupOutput>;
  public updateBillingGroup(
    args: UpdateBillingGroupInput,
    cb: (err: any, data?: UpdateBillingGroupOutput) => void
  ): void;
  public updateBillingGroup(
    args: UpdateBillingGroupInput,
    cb?: (err: any, data?: UpdateBillingGroupOutput) => void
  ): Promise<UpdateBillingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateBillingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a registered CA certificate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCACertificate(
    args: UpdateCACertificateInput
  ): Promise<UpdateCACertificateOutput>;
  public updateCACertificate(
    args: UpdateCACertificateInput,
    cb: (err: any, data?: UpdateCACertificateOutput) => void
  ): void;
  public updateCACertificate(
    args: UpdateCACertificateInput,
    cb?: (err: any, data?: UpdateCACertificateOutput) => void
  ): Promise<UpdateCACertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCACertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the status of the specified certificate. This operation is idempotent.</p> <p>Moving a certificate from the ACTIVE state (including REVOKED) will not disconnect currently connected devices, but these devices will be unable to reconnect.</p> <p>The ACTIVE state is required to authenticate devices connecting to AWS IoT using a certificate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {CertificateStateException} <p>The certificate operation is not allowed.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCertificate(
    args: UpdateCertificateInput
  ): Promise<UpdateCertificateOutput>;
  public updateCertificate(
    args: UpdateCertificateInput,
    cb: (err: any, data?: UpdateCertificateOutput) => void
  ): void;
  public updateCertificate(
    args: UpdateCertificateInput,
    cb?: (err: any, data?: UpdateCertificateOutput) => void
  ): Promise<UpdateCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a dynamic thing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidQueryException} <p>The query is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDynamicThingGroup(
    args: UpdateDynamicThingGroupInput
  ): Promise<UpdateDynamicThingGroupOutput>;
  public updateDynamicThingGroup(
    args: UpdateDynamicThingGroupInput,
    cb: (err: any, data?: UpdateDynamicThingGroupOutput) => void
  ): void;
  public updateDynamicThingGroup(
    args: UpdateDynamicThingGroupInput,
    cb?: (err: any, data?: UpdateDynamicThingGroupOutput) => void
  ): Promise<UpdateDynamicThingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDynamicThingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the event configurations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateEventConfigurations(
    args: UpdateEventConfigurationsInput
  ): Promise<UpdateEventConfigurationsOutput>;
  public updateEventConfigurations(
    args: UpdateEventConfigurationsInput,
    cb: (err: any, data?: UpdateEventConfigurationsOutput) => void
  ): void;
  public updateEventConfigurations(
    args: UpdateEventConfigurationsInput,
    cb?: (err: any, data?: UpdateEventConfigurationsOutput) => void
  ): Promise<UpdateEventConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateEventConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the search configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateIndexingConfiguration(
    args: UpdateIndexingConfigurationInput
  ): Promise<UpdateIndexingConfigurationOutput>;
  public updateIndexingConfiguration(
    args: UpdateIndexingConfigurationInput,
    cb: (err: any, data?: UpdateIndexingConfigurationOutput) => void
  ): void;
  public updateIndexingConfiguration(
    args: UpdateIndexingConfigurationInput,
    cb?: (err: any, data?: UpdateIndexingConfigurationOutput) => void
  ): Promise<UpdateIndexingConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateIndexingConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates supported fields of the specified job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateJob(args: UpdateJobInput): Promise<UpdateJobOutput>;
  public updateJob(
    args: UpdateJobInput,
    cb: (err: any, data?: UpdateJobOutput) => void
  ): void;
  public updateJob(
    args: UpdateJobInput,
    cb?: (err: any, data?: UpdateJobOutput) => void
  ): Promise<UpdateJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the definition for the specified mitigation action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateMitigationAction(
    args: UpdateMitigationActionInput
  ): Promise<UpdateMitigationActionOutput>;
  public updateMitigationAction(
    args: UpdateMitigationActionInput,
    cb: (err: any, data?: UpdateMitigationActionOutput) => void
  ): void;
  public updateMitigationAction(
    args: UpdateMitigationActionInput,
    cb?: (err: any, data?: UpdateMitigationActionOutput) => void
  ): Promise<UpdateMitigationActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateMitigationActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a role alias.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRoleAlias(
    args: UpdateRoleAliasInput
  ): Promise<UpdateRoleAliasOutput>;
  public updateRoleAlias(
    args: UpdateRoleAliasInput,
    cb: (err: any, data?: UpdateRoleAliasOutput) => void
  ): void;
  public updateRoleAlias(
    args: UpdateRoleAliasInput,
    cb?: (err: any, data?: UpdateRoleAliasOutput) => void
  ): Promise<UpdateRoleAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRoleAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a scheduled audit, including which checks are performed and how often the audit takes place.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateScheduledAudit(
    args: UpdateScheduledAuditInput
  ): Promise<UpdateScheduledAuditOutput>;
  public updateScheduledAudit(
    args: UpdateScheduledAuditInput,
    cb: (err: any, data?: UpdateScheduledAuditOutput) => void
  ): void;
  public updateScheduledAudit(
    args: UpdateScheduledAuditInput,
    cb?: (err: any, data?: UpdateScheduledAuditOutput) => void
  ): Promise<UpdateScheduledAuditOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateScheduledAuditCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a Device Defender security profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSecurityProfile(
    args: UpdateSecurityProfileInput
  ): Promise<UpdateSecurityProfileOutput>;
  public updateSecurityProfile(
    args: UpdateSecurityProfileInput,
    cb: (err: any, data?: UpdateSecurityProfileOutput) => void
  ): void;
  public updateSecurityProfile(
    args: UpdateSecurityProfileInput,
    cb?: (err: any, data?: UpdateSecurityProfileOutput) => void
  ): Promise<UpdateSecurityProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSecurityProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing stream. The stream version will be incremented by one.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateStream(args: UpdateStreamInput): Promise<UpdateStreamOutput>;
  public updateStream(
    args: UpdateStreamInput,
    cb: (err: any, data?: UpdateStreamOutput) => void
  ): void;
  public updateStream(
    args: UpdateStreamInput,
    cb?: (err: any, data?: UpdateStreamOutput) => void
  ): Promise<UpdateStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the data for a thing.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateThing(args: UpdateThingInput): Promise<UpdateThingOutput>;
  public updateThing(
    args: UpdateThingInput,
    cb: (err: any, data?: UpdateThingOutput) => void
  ): void;
  public updateThing(
    args: UpdateThingInput,
    cb?: (err: any, data?: UpdateThingOutput) => void
  ): Promise<UpdateThingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateThingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update a thing group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {VersionConflictException} <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateThingGroup(
    args: UpdateThingGroupInput
  ): Promise<UpdateThingGroupOutput>;
  public updateThingGroup(
    args: UpdateThingGroupInput,
    cb: (err: any, data?: UpdateThingGroupOutput) => void
  ): void;
  public updateThingGroup(
    args: UpdateThingGroupInput,
    cb?: (err: any, data?: UpdateThingGroupOutput) => void
  ): Promise<UpdateThingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateThingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the groups to which the thing belongs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateThingGroupsForThing(
    args: UpdateThingGroupsForThingInput
  ): Promise<UpdateThingGroupsForThingOutput>;
  public updateThingGroupsForThing(
    args: UpdateThingGroupsForThingInput,
    cb: (err: any, data?: UpdateThingGroupsForThingOutput) => void
  ): void;
  public updateThingGroupsForThing(
    args: UpdateThingGroupsForThingInput,
    cb?: (err: any, data?: UpdateThingGroupsForThingOutput) => void
  ): Promise<UpdateThingGroupsForThingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateThingGroupsForThingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Validates a Device Defender security profile behaviors specification.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public validateSecurityProfileBehaviors(
    args: ValidateSecurityProfileBehaviorsInput
  ): Promise<ValidateSecurityProfileBehaviorsOutput>;
  public validateSecurityProfileBehaviors(
    args: ValidateSecurityProfileBehaviorsInput,
    cb: (err: any, data?: ValidateSecurityProfileBehaviorsOutput) => void
  ): void;
  public validateSecurityProfileBehaviors(
    args: ValidateSecurityProfileBehaviorsInput,
    cb?: (err: any, data?: ValidateSecurityProfileBehaviorsOutput) => void
  ): Promise<ValidateSecurityProfileBehaviorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ValidateSecurityProfileBehaviorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
