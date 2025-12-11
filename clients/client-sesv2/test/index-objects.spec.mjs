import {
  AccountSuspendedException,
  AlreadyExistsException,
  AttachmentContentDisposition,
  AttachmentContentTransferEncoding,
  BadRequestException,
  BatchGetMetricDataCommand,
  BehaviorOnMxFailure,
  BounceType,
  BulkEmailStatus,
  CancelExportJobCommand,
  ConcurrentModificationException,
  ConflictException,
  ContactLanguage,
  ContactListImportAction,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  CreateContactCommand,
  CreateContactListCommand,
  CreateCustomVerificationEmailTemplateCommand,
  CreateDedicatedIpPoolCommand,
  CreateDeliverabilityTestReportCommand,
  CreateEmailIdentityCommand,
  CreateEmailIdentityPolicyCommand,
  CreateEmailTemplateCommand,
  CreateExportJobCommand,
  CreateImportJobCommand,
  CreateMultiRegionEndpointCommand,
  CreateTenantCommand,
  CreateTenantResourceAssociationCommand,
  DataFormat,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteContactCommand,
  DeleteContactListCommand,
  DeleteCustomVerificationEmailTemplateCommand,
  DeleteDedicatedIpPoolCommand,
  DeleteEmailIdentityCommand,
  DeleteEmailIdentityPolicyCommand,
  DeleteEmailTemplateCommand,
  DeleteMultiRegionEndpointCommand,
  DeleteSuppressedDestinationCommand,
  DeleteTenantCommand,
  DeleteTenantResourceAssociationCommand,
  DeliverabilityDashboardAccountStatus,
  DeliverabilityTestStatus,
  DeliveryEventType,
  DimensionValueSource,
  DkimSigningAttributesOrigin,
  DkimSigningKeyLength,
  DkimStatus,
  EngagementEventType,
  EventType,
  ExportSourceType,
  FeatureStatus,
  GetAccountCommand,
  GetBlacklistReportsCommand,
  GetConfigurationSetCommand,
  GetConfigurationSetEventDestinationsCommand,
  GetContactCommand,
  GetContactListCommand,
  GetCustomVerificationEmailTemplateCommand,
  GetDedicatedIpCommand,
  GetDedicatedIpPoolCommand,
  GetDedicatedIpsCommand,
  GetDeliverabilityDashboardOptionsCommand,
  GetDeliverabilityTestReportCommand,
  GetDomainDeliverabilityCampaignCommand,
  GetDomainStatisticsReportCommand,
  GetEmailIdentityCommand,
  GetEmailIdentityPoliciesCommand,
  GetEmailTemplateCommand,
  GetExportJobCommand,
  GetImportJobCommand,
  GetMessageInsightsCommand,
  GetMultiRegionEndpointCommand,
  GetReputationEntityCommand,
  GetSuppressedDestinationCommand,
  GetTenantCommand,
  HttpsPolicy,
  IdentityType,
  ImportDestinationType,
  InternalServiceErrorException,
  InvalidNextTokenException,
  JobStatus,
  LimitExceededException,
  ListConfigurationSetsCommand,
  ListContactListsCommand,
  ListContactsCommand,
  ListCustomVerificationEmailTemplatesCommand,
  ListDedicatedIpPoolsCommand,
  ListDeliverabilityTestReportsCommand,
  ListDomainDeliverabilityCampaignsCommand,
  ListEmailIdentitiesCommand,
  ListEmailTemplatesCommand,
  ListExportJobsCommand,
  ListImportJobsCommand,
  ListMultiRegionEndpointsCommand,
  ListRecommendationsCommand,
  ListRecommendationsFilterKey,
  ListReputationEntitiesCommand,
  ListResourceTenantsCommand,
  ListSuppressedDestinationsCommand,
  ListTagsForResourceCommand,
  ListTenantResourcesCommand,
  ListTenantResourcesFilterKey,
  ListTenantsCommand,
  MailFromDomainNotVerifiedException,
  MailFromDomainStatus,
  MailType,
  MessageRejected,
  Metric,
  MetricAggregation,
  MetricDimensionName,
  MetricNamespace,
  NotFoundException,
  PutAccountDedicatedIpWarmupAttributesCommand,
  PutAccountDetailsCommand,
  PutAccountSendingAttributesCommand,
  PutAccountSuppressionAttributesCommand,
  PutAccountVdmAttributesCommand,
  PutConfigurationSetArchivingOptionsCommand,
  PutConfigurationSetDeliveryOptionsCommand,
  PutConfigurationSetReputationOptionsCommand,
  PutConfigurationSetSendingOptionsCommand,
  PutConfigurationSetSuppressionOptionsCommand,
  PutConfigurationSetTrackingOptionsCommand,
  PutConfigurationSetVdmOptionsCommand,
  PutDedicatedIpInPoolCommand,
  PutDedicatedIpPoolScalingAttributesCommand,
  PutDedicatedIpWarmupAttributesCommand,
  PutDeliverabilityDashboardOptionCommand,
  PutEmailIdentityConfigurationSetAttributesCommand,
  PutEmailIdentityDkimAttributesCommand,
  PutEmailIdentityDkimSigningAttributesCommand,
  PutEmailIdentityFeedbackAttributesCommand,
  PutEmailIdentityMailFromAttributesCommand,
  PutSuppressedDestinationCommand,
  QueryErrorCode,
  RecommendationImpact,
  RecommendationStatus,
  RecommendationType,
  ReputationEntityFilterKey,
  ReputationEntityType,
  ResourceType,
  ReviewStatus,
  SESv2,
  SESv2Client,
  SESv2ServiceException,
  ScalingMode,
  SendBulkEmailCommand,
  SendCustomVerificationEmailCommand,
  SendEmailCommand,
  SendingPausedException,
  SendingStatus,
  Status,
  SubscriptionStatus,
  SuppressionListImportAction,
  SuppressionListReason,
  TagResourceCommand,
  TestRenderEmailTemplateCommand,
  TlsPolicy,
  TooManyRequestsException,
  UntagResourceCommand,
  UpdateConfigurationSetEventDestinationCommand,
  UpdateContactCommand,
  UpdateContactListCommand,
  UpdateCustomVerificationEmailTemplateCommand,
  UpdateEmailIdentityPolicyCommand,
  UpdateEmailTemplateCommand,
  UpdateReputationEntityCustomerManagedStatusCommand,
  UpdateReputationEntityPolicyCommand,
  VerificationError,
  VerificationStatus,
  WarmupStatus,
  paginateGetDedicatedIps,
  paginateListConfigurationSets,
  paginateListContactLists,
  paginateListContacts,
  paginateListCustomVerificationEmailTemplates,
  paginateListDedicatedIpPools,
  paginateListDeliverabilityTestReports,
  paginateListDomainDeliverabilityCampaigns,
  paginateListEmailIdentities,
  paginateListEmailTemplates,
  paginateListExportJobs,
  paginateListImportJobs,
  paginateListMultiRegionEndpoints,
  paginateListRecommendations,
  paginateListReputationEntities,
  paginateListResourceTenants,
  paginateListSuppressedDestinations,
  paginateListTenantResources,
  paginateListTenants,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SESv2Client === "function");
assert(typeof SESv2 === "function");
// commands
assert(typeof BatchGetMetricDataCommand === "function");
assert(typeof CancelExportJobCommand === "function");
assert(typeof CreateConfigurationSetCommand === "function");
assert(typeof CreateConfigurationSetEventDestinationCommand === "function");
assert(typeof CreateContactCommand === "function");
assert(typeof CreateContactListCommand === "function");
assert(typeof CreateCustomVerificationEmailTemplateCommand === "function");
assert(typeof CreateDedicatedIpPoolCommand === "function");
assert(typeof CreateDeliverabilityTestReportCommand === "function");
assert(typeof CreateEmailIdentityCommand === "function");
assert(typeof CreateEmailIdentityPolicyCommand === "function");
assert(typeof CreateEmailTemplateCommand === "function");
assert(typeof CreateExportJobCommand === "function");
assert(typeof CreateImportJobCommand === "function");
assert(typeof CreateMultiRegionEndpointCommand === "function");
assert(typeof CreateTenantCommand === "function");
assert(typeof CreateTenantResourceAssociationCommand === "function");
assert(typeof DeleteConfigurationSetCommand === "function");
assert(typeof DeleteConfigurationSetEventDestinationCommand === "function");
assert(typeof DeleteContactCommand === "function");
assert(typeof DeleteContactListCommand === "function");
assert(typeof DeleteCustomVerificationEmailTemplateCommand === "function");
assert(typeof DeleteDedicatedIpPoolCommand === "function");
assert(typeof DeleteEmailIdentityCommand === "function");
assert(typeof DeleteEmailIdentityPolicyCommand === "function");
assert(typeof DeleteEmailTemplateCommand === "function");
assert(typeof DeleteMultiRegionEndpointCommand === "function");
assert(typeof DeleteSuppressedDestinationCommand === "function");
assert(typeof DeleteTenantCommand === "function");
assert(typeof DeleteTenantResourceAssociationCommand === "function");
assert(typeof GetAccountCommand === "function");
assert(typeof GetBlacklistReportsCommand === "function");
assert(typeof GetConfigurationSetCommand === "function");
assert(typeof GetConfigurationSetEventDestinationsCommand === "function");
assert(typeof GetContactCommand === "function");
assert(typeof GetContactListCommand === "function");
assert(typeof GetCustomVerificationEmailTemplateCommand === "function");
assert(typeof GetDedicatedIpCommand === "function");
assert(typeof GetDedicatedIpPoolCommand === "function");
assert(typeof GetDedicatedIpsCommand === "function");
assert(typeof GetDeliverabilityDashboardOptionsCommand === "function");
assert(typeof GetDeliverabilityTestReportCommand === "function");
assert(typeof GetDomainDeliverabilityCampaignCommand === "function");
assert(typeof GetDomainStatisticsReportCommand === "function");
assert(typeof GetEmailIdentityCommand === "function");
assert(typeof GetEmailIdentityPoliciesCommand === "function");
assert(typeof GetEmailTemplateCommand === "function");
assert(typeof GetExportJobCommand === "function");
assert(typeof GetImportJobCommand === "function");
assert(typeof GetMessageInsightsCommand === "function");
assert(typeof GetMultiRegionEndpointCommand === "function");
assert(typeof GetReputationEntityCommand === "function");
assert(typeof GetSuppressedDestinationCommand === "function");
assert(typeof GetTenantCommand === "function");
assert(typeof ListConfigurationSetsCommand === "function");
assert(typeof ListContactListsCommand === "function");
assert(typeof ListContactsCommand === "function");
assert(typeof ListCustomVerificationEmailTemplatesCommand === "function");
assert(typeof ListDedicatedIpPoolsCommand === "function");
assert(typeof ListDeliverabilityTestReportsCommand === "function");
assert(typeof ListDomainDeliverabilityCampaignsCommand === "function");
assert(typeof ListEmailIdentitiesCommand === "function");
assert(typeof ListEmailTemplatesCommand === "function");
assert(typeof ListExportJobsCommand === "function");
assert(typeof ListImportJobsCommand === "function");
assert(typeof ListMultiRegionEndpointsCommand === "function");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof ListReputationEntitiesCommand === "function");
assert(typeof ListResourceTenantsCommand === "function");
assert(typeof ListSuppressedDestinationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTenantResourcesCommand === "function");
assert(typeof ListTenantsCommand === "function");
assert(typeof PutAccountDedicatedIpWarmupAttributesCommand === "function");
assert(typeof PutAccountDetailsCommand === "function");
assert(typeof PutAccountSendingAttributesCommand === "function");
assert(typeof PutAccountSuppressionAttributesCommand === "function");
assert(typeof PutAccountVdmAttributesCommand === "function");
assert(typeof PutConfigurationSetArchivingOptionsCommand === "function");
assert(typeof PutConfigurationSetDeliveryOptionsCommand === "function");
assert(typeof PutConfigurationSetReputationOptionsCommand === "function");
assert(typeof PutConfigurationSetSendingOptionsCommand === "function");
assert(typeof PutConfigurationSetSuppressionOptionsCommand === "function");
assert(typeof PutConfigurationSetTrackingOptionsCommand === "function");
assert(typeof PutConfigurationSetVdmOptionsCommand === "function");
assert(typeof PutDedicatedIpInPoolCommand === "function");
assert(typeof PutDedicatedIpPoolScalingAttributesCommand === "function");
assert(typeof PutDedicatedIpWarmupAttributesCommand === "function");
assert(typeof PutDeliverabilityDashboardOptionCommand === "function");
assert(typeof PutEmailIdentityConfigurationSetAttributesCommand === "function");
assert(typeof PutEmailIdentityDkimAttributesCommand === "function");
assert(typeof PutEmailIdentityDkimSigningAttributesCommand === "function");
assert(typeof PutEmailIdentityFeedbackAttributesCommand === "function");
assert(typeof PutEmailIdentityMailFromAttributesCommand === "function");
assert(typeof PutSuppressedDestinationCommand === "function");
assert(typeof SendBulkEmailCommand === "function");
assert(typeof SendCustomVerificationEmailCommand === "function");
assert(typeof SendEmailCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestRenderEmailTemplateCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateConfigurationSetEventDestinationCommand === "function");
assert(typeof UpdateContactCommand === "function");
assert(typeof UpdateContactListCommand === "function");
assert(typeof UpdateCustomVerificationEmailTemplateCommand === "function");
assert(typeof UpdateEmailIdentityPolicyCommand === "function");
assert(typeof UpdateEmailTemplateCommand === "function");
assert(typeof UpdateReputationEntityCustomerManagedStatusCommand === "function");
assert(typeof UpdateReputationEntityPolicyCommand === "function");
// enums
assert(typeof AttachmentContentDisposition === "object");
assert(typeof AttachmentContentTransferEncoding === "object");
assert(typeof BehaviorOnMxFailure === "object");
assert(typeof BounceType === "object");
assert(typeof BulkEmailStatus === "object");
assert(typeof ContactLanguage === "object");
assert(typeof ContactListImportAction === "object");
assert(typeof DataFormat === "object");
assert(typeof DeliverabilityDashboardAccountStatus === "object");
assert(typeof DeliverabilityTestStatus === "object");
assert(typeof DeliveryEventType === "object");
assert(typeof DimensionValueSource === "object");
assert(typeof DkimSigningAttributesOrigin === "object");
assert(typeof DkimSigningKeyLength === "object");
assert(typeof DkimStatus === "object");
assert(typeof EngagementEventType === "object");
assert(typeof EventType === "object");
assert(typeof ExportSourceType === "object");
assert(typeof FeatureStatus === "object");
assert(typeof HttpsPolicy === "object");
assert(typeof IdentityType === "object");
assert(typeof ImportDestinationType === "object");
assert(typeof JobStatus === "object");
assert(typeof ListRecommendationsFilterKey === "object");
assert(typeof ListTenantResourcesFilterKey === "object");
assert(typeof MailFromDomainStatus === "object");
assert(typeof MailType === "object");
assert(typeof Metric === "object");
assert(typeof MetricAggregation === "object");
assert(typeof MetricDimensionName === "object");
assert(typeof MetricNamespace === "object");
assert(typeof QueryErrorCode === "object");
assert(typeof RecommendationImpact === "object");
assert(typeof RecommendationStatus === "object");
assert(typeof RecommendationType === "object");
assert(typeof ReputationEntityFilterKey === "object");
assert(typeof ReputationEntityType === "object");
assert(typeof ResourceType === "object");
assert(typeof ReviewStatus === "object");
assert(typeof ScalingMode === "object");
assert(typeof SendingStatus === "object");
assert(typeof Status === "object");
assert(typeof SubscriptionStatus === "object");
assert(typeof SuppressionListImportAction === "object");
assert(typeof SuppressionListReason === "object");
assert(typeof TlsPolicy === "object");
assert(typeof VerificationError === "object");
assert(typeof VerificationStatus === "object");
assert(typeof WarmupStatus === "object");
// errors
assert(AccountSuspendedException.prototype instanceof SESv2ServiceException);
assert(AlreadyExistsException.prototype instanceof SESv2ServiceException);
assert(BadRequestException.prototype instanceof SESv2ServiceException);
assert(ConcurrentModificationException.prototype instanceof SESv2ServiceException);
assert(ConflictException.prototype instanceof SESv2ServiceException);
assert(InternalServiceErrorException.prototype instanceof SESv2ServiceException);
assert(InvalidNextTokenException.prototype instanceof SESv2ServiceException);
assert(LimitExceededException.prototype instanceof SESv2ServiceException);
assert(MailFromDomainNotVerifiedException.prototype instanceof SESv2ServiceException);
assert(MessageRejected.prototype instanceof SESv2ServiceException);
assert(NotFoundException.prototype instanceof SESv2ServiceException);
assert(SendingPausedException.prototype instanceof SESv2ServiceException);
assert(TooManyRequestsException.prototype instanceof SESv2ServiceException);
assert(SESv2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetDedicatedIps === "function");
assert(typeof paginateListConfigurationSets === "function");
assert(typeof paginateListContactLists === "function");
assert(typeof paginateListContacts === "function");
assert(typeof paginateListCustomVerificationEmailTemplates === "function");
assert(typeof paginateListDedicatedIpPools === "function");
assert(typeof paginateListDeliverabilityTestReports === "function");
assert(typeof paginateListDomainDeliverabilityCampaigns === "function");
assert(typeof paginateListEmailIdentities === "function");
assert(typeof paginateListEmailTemplates === "function");
assert(typeof paginateListExportJobs === "function");
assert(typeof paginateListImportJobs === "function");
assert(typeof paginateListMultiRegionEndpoints === "function");
assert(typeof paginateListRecommendations === "function");
assert(typeof paginateListReputationEntities === "function");
assert(typeof paginateListResourceTenants === "function");
assert(typeof paginateListSuppressedDestinations === "function");
assert(typeof paginateListTenantResources === "function");
assert(typeof paginateListTenants === "function");
console.log(`SESv2 index test passed.`);
