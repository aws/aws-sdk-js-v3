import {
  AccountDetails$,
  AccountSuspendedException,
  AccountSuspendedException$,
  AlreadyExistsException,
  AlreadyExistsException$,
  ArchivingOptions$,
  Attachment$,
  AttachmentContentDisposition,
  AttachmentContentTransferEncoding,
  BadRequestException,
  BadRequestException$,
  BatchGetMetricData$,
  BatchGetMetricDataCommand,
  BatchGetMetricDataQuery$,
  BatchGetMetricDataRequest$,
  BatchGetMetricDataResponse$,
  BehaviorOnMxFailure,
  BlacklistEntry$,
  Body$,
  Bounce$,
  BounceType,
  BulkEmailContent$,
  BulkEmailEntry$,
  BulkEmailEntryResult$,
  BulkEmailStatus,
  CancelExportJob$,
  CancelExportJobCommand,
  CancelExportJobRequest$,
  CancelExportJobResponse$,
  CloudWatchDestination$,
  CloudWatchDimensionConfiguration$,
  Complaint$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConflictException,
  ConflictException$,
  Contact$,
  ContactLanguage,
  ContactList$,
  ContactListDestination$,
  ContactListImportAction,
  Content$,
  CreateConfigurationSet$,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestination$,
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetEventDestinationRequest$,
  CreateConfigurationSetEventDestinationResponse$,
  CreateConfigurationSetRequest$,
  CreateConfigurationSetResponse$,
  CreateContact$,
  CreateContactCommand,
  CreateContactList$,
  CreateContactListCommand,
  CreateContactListRequest$,
  CreateContactListResponse$,
  CreateContactRequest$,
  CreateContactResponse$,
  CreateCustomVerificationEmailTemplate$,
  CreateCustomVerificationEmailTemplateCommand,
  CreateCustomVerificationEmailTemplateRequest$,
  CreateCustomVerificationEmailTemplateResponse$,
  CreateDedicatedIpPool$,
  CreateDedicatedIpPoolCommand,
  CreateDedicatedIpPoolRequest$,
  CreateDedicatedIpPoolResponse$,
  CreateDeliverabilityTestReport$,
  CreateDeliverabilityTestReportCommand,
  CreateDeliverabilityTestReportRequest$,
  CreateDeliverabilityTestReportResponse$,
  CreateEmailIdentity$,
  CreateEmailIdentityCommand,
  CreateEmailIdentityPolicy$,
  CreateEmailIdentityPolicyCommand,
  CreateEmailIdentityPolicyRequest$,
  CreateEmailIdentityPolicyResponse$,
  CreateEmailIdentityRequest$,
  CreateEmailIdentityResponse$,
  CreateEmailTemplate$,
  CreateEmailTemplateCommand,
  CreateEmailTemplateRequest$,
  CreateEmailTemplateResponse$,
  CreateExportJob$,
  CreateExportJobCommand,
  CreateExportJobRequest$,
  CreateExportJobResponse$,
  CreateImportJob$,
  CreateImportJobCommand,
  CreateImportJobRequest$,
  CreateImportJobResponse$,
  CreateMultiRegionEndpoint$,
  CreateMultiRegionEndpointCommand,
  CreateMultiRegionEndpointRequest$,
  CreateMultiRegionEndpointResponse$,
  CreateTenant$,
  CreateTenantCommand,
  CreateTenantRequest$,
  CreateTenantResourceAssociation$,
  CreateTenantResourceAssociationCommand,
  CreateTenantResourceAssociationRequest$,
  CreateTenantResourceAssociationResponse$,
  CreateTenantResponse$,
  CustomVerificationEmailTemplateMetadata$,
  DailyVolume$,
  DashboardAttributes$,
  DashboardOptions$,
  DataFormat,
  DedicatedIp$,
  DedicatedIpPool$,
  DeleteConfigurationSet$,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestination$,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetEventDestinationRequest$,
  DeleteConfigurationSetEventDestinationResponse$,
  DeleteConfigurationSetRequest$,
  DeleteConfigurationSetResponse$,
  DeleteContact$,
  DeleteContactCommand,
  DeleteContactList$,
  DeleteContactListCommand,
  DeleteContactListRequest$,
  DeleteContactListResponse$,
  DeleteContactRequest$,
  DeleteContactResponse$,
  DeleteCustomVerificationEmailTemplate$,
  DeleteCustomVerificationEmailTemplateCommand,
  DeleteCustomVerificationEmailTemplateRequest$,
  DeleteCustomVerificationEmailTemplateResponse$,
  DeleteDedicatedIpPool$,
  DeleteDedicatedIpPoolCommand,
  DeleteDedicatedIpPoolRequest$,
  DeleteDedicatedIpPoolResponse$,
  DeleteEmailIdentity$,
  DeleteEmailIdentityCommand,
  DeleteEmailIdentityPolicy$,
  DeleteEmailIdentityPolicyCommand,
  DeleteEmailIdentityPolicyRequest$,
  DeleteEmailIdentityPolicyResponse$,
  DeleteEmailIdentityRequest$,
  DeleteEmailIdentityResponse$,
  DeleteEmailTemplate$,
  DeleteEmailTemplateCommand,
  DeleteEmailTemplateRequest$,
  DeleteEmailTemplateResponse$,
  DeleteMultiRegionEndpoint$,
  DeleteMultiRegionEndpointCommand,
  DeleteMultiRegionEndpointRequest$,
  DeleteMultiRegionEndpointResponse$,
  DeleteSuppressedDestination$,
  DeleteSuppressedDestinationCommand,
  DeleteSuppressedDestinationRequest$,
  DeleteSuppressedDestinationResponse$,
  DeleteTenant$,
  DeleteTenantCommand,
  DeleteTenantRequest$,
  DeleteTenantResourceAssociation$,
  DeleteTenantResourceAssociationCommand,
  DeleteTenantResourceAssociationRequest$,
  DeleteTenantResourceAssociationResponse$,
  DeleteTenantResponse$,
  DeliverabilityDashboardAccountStatus,
  DeliverabilityTestReport$,
  DeliverabilityTestStatus,
  DeliveryEventType,
  DeliveryOptions$,
  Destination$,
  Details$,
  DimensionValueSource,
  DkimAttributes$,
  DkimSigningAttributes$,
  DkimSigningAttributesOrigin,
  DkimSigningKeyLength,
  DkimStatus,
  DomainDeliverabilityCampaign$,
  DomainDeliverabilityTrackingOption$,
  DomainIspPlacement$,
  EmailContent$,
  EmailInsights$,
  EmailTemplateContent$,
  EmailTemplateMetadata$,
  EngagementEventType,
  EventBridgeDestination$,
  EventDestination$,
  EventDestinationDefinition$,
  EventDetails$,
  EventType,
  ExportDataSource$,
  ExportDestination$,
  ExportJobSummary$,
  ExportMetric$,
  ExportSourceType,
  ExportStatistics$,
  FailureInfo$,
  FeatureStatus,
  GetAccount$,
  GetAccountCommand,
  GetAccountRequest$,
  GetAccountResponse$,
  GetBlacklistReports$,
  GetBlacklistReportsCommand,
  GetBlacklistReportsRequest$,
  GetBlacklistReportsResponse$,
  GetConfigurationSet$,
  GetConfigurationSetCommand,
  GetConfigurationSetEventDestinations$,
  GetConfigurationSetEventDestinationsCommand,
  GetConfigurationSetEventDestinationsRequest$,
  GetConfigurationSetEventDestinationsResponse$,
  GetConfigurationSetRequest$,
  GetConfigurationSetResponse$,
  GetContact$,
  GetContactCommand,
  GetContactList$,
  GetContactListCommand,
  GetContactListRequest$,
  GetContactListResponse$,
  GetContactRequest$,
  GetContactResponse$,
  GetCustomVerificationEmailTemplate$,
  GetCustomVerificationEmailTemplateCommand,
  GetCustomVerificationEmailTemplateRequest$,
  GetCustomVerificationEmailTemplateResponse$,
  GetDedicatedIp$,
  GetDedicatedIpCommand,
  GetDedicatedIpPool$,
  GetDedicatedIpPoolCommand,
  GetDedicatedIpPoolRequest$,
  GetDedicatedIpPoolResponse$,
  GetDedicatedIpRequest$,
  GetDedicatedIpResponse$,
  GetDedicatedIps$,
  GetDedicatedIpsCommand,
  GetDedicatedIpsRequest$,
  GetDedicatedIpsResponse$,
  GetDeliverabilityDashboardOptions$,
  GetDeliverabilityDashboardOptionsCommand,
  GetDeliverabilityDashboardOptionsRequest$,
  GetDeliverabilityDashboardOptionsResponse$,
  GetDeliverabilityTestReport$,
  GetDeliverabilityTestReportCommand,
  GetDeliverabilityTestReportRequest$,
  GetDeliverabilityTestReportResponse$,
  GetDomainDeliverabilityCampaign$,
  GetDomainDeliverabilityCampaignCommand,
  GetDomainDeliverabilityCampaignRequest$,
  GetDomainDeliverabilityCampaignResponse$,
  GetDomainStatisticsReport$,
  GetDomainStatisticsReportCommand,
  GetDomainStatisticsReportRequest$,
  GetDomainStatisticsReportResponse$,
  GetEmailIdentity$,
  GetEmailIdentityCommand,
  GetEmailIdentityPolicies$,
  GetEmailIdentityPoliciesCommand,
  GetEmailIdentityPoliciesRequest$,
  GetEmailIdentityPoliciesResponse$,
  GetEmailIdentityRequest$,
  GetEmailIdentityResponse$,
  GetEmailTemplate$,
  GetEmailTemplateCommand,
  GetEmailTemplateRequest$,
  GetEmailTemplateResponse$,
  GetExportJob$,
  GetExportJobCommand,
  GetExportJobRequest$,
  GetExportJobResponse$,
  GetImportJob$,
  GetImportJobCommand,
  GetImportJobRequest$,
  GetImportJobResponse$,
  GetMessageInsights$,
  GetMessageInsightsCommand,
  GetMessageInsightsRequest$,
  GetMessageInsightsResponse$,
  GetMultiRegionEndpoint$,
  GetMultiRegionEndpointCommand,
  GetMultiRegionEndpointRequest$,
  GetMultiRegionEndpointResponse$,
  GetReputationEntity$,
  GetReputationEntityCommand,
  GetReputationEntityRequest$,
  GetReputationEntityResponse$,
  GetSuppressedDestination$,
  GetSuppressedDestinationCommand,
  GetSuppressedDestinationRequest$,
  GetSuppressedDestinationResponse$,
  GetTenant$,
  GetTenantCommand,
  GetTenantRequest$,
  GetTenantResponse$,
  GuardianAttributes$,
  GuardianOptions$,
  HttpsPolicy,
  IdentityInfo$,
  IdentityType,
  ImportDataSource$,
  ImportDestination$,
  ImportDestinationType,
  ImportJobSummary$,
  InboxPlacementTrackingOption$,
  InsightsEvent$,
  InternalServiceErrorException,
  InternalServiceErrorException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  IspPlacement$,
  JobStatus,
  KinesisFirehoseDestination$,
  LimitExceededException,
  LimitExceededException$,
  ListConfigurationSets$,
  ListConfigurationSetsCommand,
  ListConfigurationSetsRequest$,
  ListConfigurationSetsResponse$,
  ListContactLists$,
  ListContactListsCommand,
  ListContactListsRequest$,
  ListContactListsResponse$,
  ListContacts$,
  ListContactsCommand,
  ListContactsFilter$,
  ListContactsRequest$,
  ListContactsResponse$,
  ListCustomVerificationEmailTemplates$,
  ListCustomVerificationEmailTemplatesCommand,
  ListCustomVerificationEmailTemplatesRequest$,
  ListCustomVerificationEmailTemplatesResponse$,
  ListDedicatedIpPools$,
  ListDedicatedIpPoolsCommand,
  ListDedicatedIpPoolsRequest$,
  ListDedicatedIpPoolsResponse$,
  ListDeliverabilityTestReports$,
  ListDeliverabilityTestReportsCommand,
  ListDeliverabilityTestReportsRequest$,
  ListDeliverabilityTestReportsResponse$,
  ListDomainDeliverabilityCampaigns$,
  ListDomainDeliverabilityCampaignsCommand,
  ListDomainDeliverabilityCampaignsRequest$,
  ListDomainDeliverabilityCampaignsResponse$,
  ListEmailIdentities$,
  ListEmailIdentitiesCommand,
  ListEmailIdentitiesRequest$,
  ListEmailIdentitiesResponse$,
  ListEmailTemplates$,
  ListEmailTemplatesCommand,
  ListEmailTemplatesRequest$,
  ListEmailTemplatesResponse$,
  ListExportJobs$,
  ListExportJobsCommand,
  ListExportJobsRequest$,
  ListExportJobsResponse$,
  ListImportJobs$,
  ListImportJobsCommand,
  ListImportJobsRequest$,
  ListImportJobsResponse$,
  ListManagementOptions$,
  ListMultiRegionEndpoints$,
  ListMultiRegionEndpointsCommand,
  ListMultiRegionEndpointsRequest$,
  ListMultiRegionEndpointsResponse$,
  ListRecommendations$,
  ListRecommendationsCommand,
  ListRecommendationsFilterKey,
  ListRecommendationsRequest$,
  ListRecommendationsResponse$,
  ListReputationEntities$,
  ListReputationEntitiesCommand,
  ListReputationEntitiesRequest$,
  ListReputationEntitiesResponse$,
  ListResourceTenants$,
  ListResourceTenantsCommand,
  ListResourceTenantsRequest$,
  ListResourceTenantsResponse$,
  ListSuppressedDestinations$,
  ListSuppressedDestinationsCommand,
  ListSuppressedDestinationsRequest$,
  ListSuppressedDestinationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTenantResources$,
  ListTenantResourcesCommand,
  ListTenantResourcesFilterKey,
  ListTenantResourcesRequest$,
  ListTenantResourcesResponse$,
  ListTenants$,
  ListTenantsCommand,
  ListTenantsRequest$,
  ListTenantsResponse$,
  MailFromAttributes$,
  MailFromDomainNotVerifiedException,
  MailFromDomainNotVerifiedException$,
  MailFromDomainStatus,
  MailType,
  Message$,
  MessageHeader$,
  MessageInsightsDataSource$,
  MessageInsightsFilters$,
  MessageRejected,
  MessageRejected$,
  MessageTag$,
  Metric,
  MetricAggregation,
  MetricDataError$,
  MetricDataResult$,
  MetricDimensionName,
  MetricNamespace,
  MetricsDataSource$,
  MultiRegionEndpoint$,
  NotFoundException,
  NotFoundException$,
  OverallVolume$,
  PinpointDestination$,
  PlacementStatistics$,
  PutAccountDedicatedIpWarmupAttributes$,
  PutAccountDedicatedIpWarmupAttributesCommand,
  PutAccountDedicatedIpWarmupAttributesRequest$,
  PutAccountDedicatedIpWarmupAttributesResponse$,
  PutAccountDetails$,
  PutAccountDetailsCommand,
  PutAccountDetailsRequest$,
  PutAccountDetailsResponse$,
  PutAccountSendingAttributes$,
  PutAccountSendingAttributesCommand,
  PutAccountSendingAttributesRequest$,
  PutAccountSendingAttributesResponse$,
  PutAccountSuppressionAttributes$,
  PutAccountSuppressionAttributesCommand,
  PutAccountSuppressionAttributesRequest$,
  PutAccountSuppressionAttributesResponse$,
  PutAccountVdmAttributes$,
  PutAccountVdmAttributesCommand,
  PutAccountVdmAttributesRequest$,
  PutAccountVdmAttributesResponse$,
  PutConfigurationSetArchivingOptions$,
  PutConfigurationSetArchivingOptionsCommand,
  PutConfigurationSetArchivingOptionsRequest$,
  PutConfigurationSetArchivingOptionsResponse$,
  PutConfigurationSetDeliveryOptions$,
  PutConfigurationSetDeliveryOptionsCommand,
  PutConfigurationSetDeliveryOptionsRequest$,
  PutConfigurationSetDeliveryOptionsResponse$,
  PutConfigurationSetReputationOptions$,
  PutConfigurationSetReputationOptionsCommand,
  PutConfigurationSetReputationOptionsRequest$,
  PutConfigurationSetReputationOptionsResponse$,
  PutConfigurationSetSendingOptions$,
  PutConfigurationSetSendingOptionsCommand,
  PutConfigurationSetSendingOptionsRequest$,
  PutConfigurationSetSendingOptionsResponse$,
  PutConfigurationSetSuppressionOptions$,
  PutConfigurationSetSuppressionOptionsCommand,
  PutConfigurationSetSuppressionOptionsRequest$,
  PutConfigurationSetSuppressionOptionsResponse$,
  PutConfigurationSetTrackingOptions$,
  PutConfigurationSetTrackingOptionsCommand,
  PutConfigurationSetTrackingOptionsRequest$,
  PutConfigurationSetTrackingOptionsResponse$,
  PutConfigurationSetVdmOptions$,
  PutConfigurationSetVdmOptionsCommand,
  PutConfigurationSetVdmOptionsRequest$,
  PutConfigurationSetVdmOptionsResponse$,
  PutDedicatedIpInPool$,
  PutDedicatedIpInPoolCommand,
  PutDedicatedIpInPoolRequest$,
  PutDedicatedIpInPoolResponse$,
  PutDedicatedIpPoolScalingAttributes$,
  PutDedicatedIpPoolScalingAttributesCommand,
  PutDedicatedIpPoolScalingAttributesRequest$,
  PutDedicatedIpPoolScalingAttributesResponse$,
  PutDedicatedIpWarmupAttributes$,
  PutDedicatedIpWarmupAttributesCommand,
  PutDedicatedIpWarmupAttributesRequest$,
  PutDedicatedIpWarmupAttributesResponse$,
  PutDeliverabilityDashboardOption$,
  PutDeliverabilityDashboardOptionCommand,
  PutDeliverabilityDashboardOptionRequest$,
  PutDeliverabilityDashboardOptionResponse$,
  PutEmailIdentityConfigurationSetAttributes$,
  PutEmailIdentityConfigurationSetAttributesCommand,
  PutEmailIdentityConfigurationSetAttributesRequest$,
  PutEmailIdentityConfigurationSetAttributesResponse$,
  PutEmailIdentityDkimAttributes$,
  PutEmailIdentityDkimAttributesCommand,
  PutEmailIdentityDkimAttributesRequest$,
  PutEmailIdentityDkimAttributesResponse$,
  PutEmailIdentityDkimSigningAttributes$,
  PutEmailIdentityDkimSigningAttributesCommand,
  PutEmailIdentityDkimSigningAttributesRequest$,
  PutEmailIdentityDkimSigningAttributesResponse$,
  PutEmailIdentityFeedbackAttributes$,
  PutEmailIdentityFeedbackAttributesCommand,
  PutEmailIdentityFeedbackAttributesRequest$,
  PutEmailIdentityFeedbackAttributesResponse$,
  PutEmailIdentityMailFromAttributes$,
  PutEmailIdentityMailFromAttributesCommand,
  PutEmailIdentityMailFromAttributesRequest$,
  PutEmailIdentityMailFromAttributesResponse$,
  PutSuppressedDestination$,
  PutSuppressedDestinationCommand,
  PutSuppressedDestinationRequest$,
  PutSuppressedDestinationResponse$,
  QueryErrorCode,
  RawMessage$,
  Recommendation$,
  RecommendationImpact,
  RecommendationStatus,
  RecommendationType,
  ReplacementEmailContent$,
  ReplacementTemplate$,
  ReputationEntity$,
  ReputationEntityFilterKey,
  ReputationEntityType,
  ReputationOptions$,
  ResourceTenantMetadata$,
  ResourceType,
  ReviewDetails$,
  ReviewStatus,
  Route$,
  RouteDetails$,
  SESv2,
  SESv2Client,
  SESv2ServiceException,
  SOARecord$,
  ScalingMode,
  SendBulkEmail$,
  SendBulkEmailCommand,
  SendBulkEmailRequest$,
  SendBulkEmailResponse$,
  SendCustomVerificationEmail$,
  SendCustomVerificationEmailCommand,
  SendCustomVerificationEmailRequest$,
  SendCustomVerificationEmailResponse$,
  SendEmail$,
  SendEmailCommand,
  SendEmailRequest$,
  SendEmailResponse$,
  SendQuota$,
  SendingOptions$,
  SendingPausedException,
  SendingPausedException$,
  SendingStatus,
  SnsDestination$,
  Status,
  StatusRecord$,
  SubscriptionStatus,
  SuppressedDestination$,
  SuppressedDestinationAttributes$,
  SuppressedDestinationSummary$,
  SuppressionAttributes$,
  SuppressionListDestination$,
  SuppressionListImportAction,
  SuppressionListReason,
  SuppressionOptions$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Template$,
  Tenant$,
  TenantInfo$,
  TenantResource$,
  TestRenderEmailTemplate$,
  TestRenderEmailTemplateCommand,
  TestRenderEmailTemplateRequest$,
  TestRenderEmailTemplateResponse$,
  TlsPolicy,
  TooManyRequestsException,
  TooManyRequestsException$,
  Topic$,
  TopicFilter$,
  TopicPreference$,
  TrackingOptions$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateConfigurationSetEventDestination$,
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetEventDestinationRequest$,
  UpdateConfigurationSetEventDestinationResponse$,
  UpdateContact$,
  UpdateContactCommand,
  UpdateContactList$,
  UpdateContactListCommand,
  UpdateContactListRequest$,
  UpdateContactListResponse$,
  UpdateContactRequest$,
  UpdateContactResponse$,
  UpdateCustomVerificationEmailTemplate$,
  UpdateCustomVerificationEmailTemplateCommand,
  UpdateCustomVerificationEmailTemplateRequest$,
  UpdateCustomVerificationEmailTemplateResponse$,
  UpdateEmailIdentityPolicy$,
  UpdateEmailIdentityPolicyCommand,
  UpdateEmailIdentityPolicyRequest$,
  UpdateEmailIdentityPolicyResponse$,
  UpdateEmailTemplate$,
  UpdateEmailTemplateCommand,
  UpdateEmailTemplateRequest$,
  UpdateEmailTemplateResponse$,
  UpdateReputationEntityCustomerManagedStatus$,
  UpdateReputationEntityCustomerManagedStatusCommand,
  UpdateReputationEntityCustomerManagedStatusRequest$,
  UpdateReputationEntityCustomerManagedStatusResponse$,
  UpdateReputationEntityPolicy$,
  UpdateReputationEntityPolicyCommand,
  UpdateReputationEntityPolicyRequest$,
  UpdateReputationEntityPolicyResponse$,
  VdmAttributes$,
  VdmOptions$,
  VerificationError,
  VerificationInfo$,
  VerificationStatus,
  VolumeStatistics$,
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
assert(typeof BatchGetMetricData$ === "object");
assert(typeof CancelExportJobCommand === "function");
assert(typeof CancelExportJob$ === "object");
assert(typeof CreateConfigurationSetCommand === "function");
assert(typeof CreateConfigurationSet$ === "object");
assert(typeof CreateConfigurationSetEventDestinationCommand === "function");
assert(typeof CreateConfigurationSetEventDestination$ === "object");
assert(typeof CreateContactCommand === "function");
assert(typeof CreateContact$ === "object");
assert(typeof CreateContactListCommand === "function");
assert(typeof CreateContactList$ === "object");
assert(typeof CreateCustomVerificationEmailTemplateCommand === "function");
assert(typeof CreateCustomVerificationEmailTemplate$ === "object");
assert(typeof CreateDedicatedIpPoolCommand === "function");
assert(typeof CreateDedicatedIpPool$ === "object");
assert(typeof CreateDeliverabilityTestReportCommand === "function");
assert(typeof CreateDeliverabilityTestReport$ === "object");
assert(typeof CreateEmailIdentityCommand === "function");
assert(typeof CreateEmailIdentity$ === "object");
assert(typeof CreateEmailIdentityPolicyCommand === "function");
assert(typeof CreateEmailIdentityPolicy$ === "object");
assert(typeof CreateEmailTemplateCommand === "function");
assert(typeof CreateEmailTemplate$ === "object");
assert(typeof CreateExportJobCommand === "function");
assert(typeof CreateExportJob$ === "object");
assert(typeof CreateImportJobCommand === "function");
assert(typeof CreateImportJob$ === "object");
assert(typeof CreateMultiRegionEndpointCommand === "function");
assert(typeof CreateMultiRegionEndpoint$ === "object");
assert(typeof CreateTenantCommand === "function");
assert(typeof CreateTenant$ === "object");
assert(typeof CreateTenantResourceAssociationCommand === "function");
assert(typeof CreateTenantResourceAssociation$ === "object");
assert(typeof DeleteConfigurationSetCommand === "function");
assert(typeof DeleteConfigurationSet$ === "object");
assert(typeof DeleteConfigurationSetEventDestinationCommand === "function");
assert(typeof DeleteConfigurationSetEventDestination$ === "object");
assert(typeof DeleteContactCommand === "function");
assert(typeof DeleteContact$ === "object");
assert(typeof DeleteContactListCommand === "function");
assert(typeof DeleteContactList$ === "object");
assert(typeof DeleteCustomVerificationEmailTemplateCommand === "function");
assert(typeof DeleteCustomVerificationEmailTemplate$ === "object");
assert(typeof DeleteDedicatedIpPoolCommand === "function");
assert(typeof DeleteDedicatedIpPool$ === "object");
assert(typeof DeleteEmailIdentityCommand === "function");
assert(typeof DeleteEmailIdentity$ === "object");
assert(typeof DeleteEmailIdentityPolicyCommand === "function");
assert(typeof DeleteEmailIdentityPolicy$ === "object");
assert(typeof DeleteEmailTemplateCommand === "function");
assert(typeof DeleteEmailTemplate$ === "object");
assert(typeof DeleteMultiRegionEndpointCommand === "function");
assert(typeof DeleteMultiRegionEndpoint$ === "object");
assert(typeof DeleteSuppressedDestinationCommand === "function");
assert(typeof DeleteSuppressedDestination$ === "object");
assert(typeof DeleteTenantCommand === "function");
assert(typeof DeleteTenant$ === "object");
assert(typeof DeleteTenantResourceAssociationCommand === "function");
assert(typeof DeleteTenantResourceAssociation$ === "object");
assert(typeof GetAccountCommand === "function");
assert(typeof GetAccount$ === "object");
assert(typeof GetBlacklistReportsCommand === "function");
assert(typeof GetBlacklistReports$ === "object");
assert(typeof GetConfigurationSetCommand === "function");
assert(typeof GetConfigurationSet$ === "object");
assert(typeof GetConfigurationSetEventDestinationsCommand === "function");
assert(typeof GetConfigurationSetEventDestinations$ === "object");
assert(typeof GetContactCommand === "function");
assert(typeof GetContact$ === "object");
assert(typeof GetContactListCommand === "function");
assert(typeof GetContactList$ === "object");
assert(typeof GetCustomVerificationEmailTemplateCommand === "function");
assert(typeof GetCustomVerificationEmailTemplate$ === "object");
assert(typeof GetDedicatedIpCommand === "function");
assert(typeof GetDedicatedIp$ === "object");
assert(typeof GetDedicatedIpPoolCommand === "function");
assert(typeof GetDedicatedIpPool$ === "object");
assert(typeof GetDedicatedIpsCommand === "function");
assert(typeof GetDedicatedIps$ === "object");
assert(typeof GetDeliverabilityDashboardOptionsCommand === "function");
assert(typeof GetDeliverabilityDashboardOptions$ === "object");
assert(typeof GetDeliverabilityTestReportCommand === "function");
assert(typeof GetDeliverabilityTestReport$ === "object");
assert(typeof GetDomainDeliverabilityCampaignCommand === "function");
assert(typeof GetDomainDeliverabilityCampaign$ === "object");
assert(typeof GetDomainStatisticsReportCommand === "function");
assert(typeof GetDomainStatisticsReport$ === "object");
assert(typeof GetEmailIdentityCommand === "function");
assert(typeof GetEmailIdentity$ === "object");
assert(typeof GetEmailIdentityPoliciesCommand === "function");
assert(typeof GetEmailIdentityPolicies$ === "object");
assert(typeof GetEmailTemplateCommand === "function");
assert(typeof GetEmailTemplate$ === "object");
assert(typeof GetExportJobCommand === "function");
assert(typeof GetExportJob$ === "object");
assert(typeof GetImportJobCommand === "function");
assert(typeof GetImportJob$ === "object");
assert(typeof GetMessageInsightsCommand === "function");
assert(typeof GetMessageInsights$ === "object");
assert(typeof GetMultiRegionEndpointCommand === "function");
assert(typeof GetMultiRegionEndpoint$ === "object");
assert(typeof GetReputationEntityCommand === "function");
assert(typeof GetReputationEntity$ === "object");
assert(typeof GetSuppressedDestinationCommand === "function");
assert(typeof GetSuppressedDestination$ === "object");
assert(typeof GetTenantCommand === "function");
assert(typeof GetTenant$ === "object");
assert(typeof ListConfigurationSetsCommand === "function");
assert(typeof ListConfigurationSets$ === "object");
assert(typeof ListContactListsCommand === "function");
assert(typeof ListContactLists$ === "object");
assert(typeof ListContactsCommand === "function");
assert(typeof ListContacts$ === "object");
assert(typeof ListCustomVerificationEmailTemplatesCommand === "function");
assert(typeof ListCustomVerificationEmailTemplates$ === "object");
assert(typeof ListDedicatedIpPoolsCommand === "function");
assert(typeof ListDedicatedIpPools$ === "object");
assert(typeof ListDeliverabilityTestReportsCommand === "function");
assert(typeof ListDeliverabilityTestReports$ === "object");
assert(typeof ListDomainDeliverabilityCampaignsCommand === "function");
assert(typeof ListDomainDeliverabilityCampaigns$ === "object");
assert(typeof ListEmailIdentitiesCommand === "function");
assert(typeof ListEmailIdentities$ === "object");
assert(typeof ListEmailTemplatesCommand === "function");
assert(typeof ListEmailTemplates$ === "object");
assert(typeof ListExportJobsCommand === "function");
assert(typeof ListExportJobs$ === "object");
assert(typeof ListImportJobsCommand === "function");
assert(typeof ListImportJobs$ === "object");
assert(typeof ListMultiRegionEndpointsCommand === "function");
assert(typeof ListMultiRegionEndpoints$ === "object");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof ListRecommendations$ === "object");
assert(typeof ListReputationEntitiesCommand === "function");
assert(typeof ListReputationEntities$ === "object");
assert(typeof ListResourceTenantsCommand === "function");
assert(typeof ListResourceTenants$ === "object");
assert(typeof ListSuppressedDestinationsCommand === "function");
assert(typeof ListSuppressedDestinations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTenantResourcesCommand === "function");
assert(typeof ListTenantResources$ === "object");
assert(typeof ListTenantsCommand === "function");
assert(typeof ListTenants$ === "object");
assert(typeof PutAccountDedicatedIpWarmupAttributesCommand === "function");
assert(typeof PutAccountDedicatedIpWarmupAttributes$ === "object");
assert(typeof PutAccountDetailsCommand === "function");
assert(typeof PutAccountDetails$ === "object");
assert(typeof PutAccountSendingAttributesCommand === "function");
assert(typeof PutAccountSendingAttributes$ === "object");
assert(typeof PutAccountSuppressionAttributesCommand === "function");
assert(typeof PutAccountSuppressionAttributes$ === "object");
assert(typeof PutAccountVdmAttributesCommand === "function");
assert(typeof PutAccountVdmAttributes$ === "object");
assert(typeof PutConfigurationSetArchivingOptionsCommand === "function");
assert(typeof PutConfigurationSetArchivingOptions$ === "object");
assert(typeof PutConfigurationSetDeliveryOptionsCommand === "function");
assert(typeof PutConfigurationSetDeliveryOptions$ === "object");
assert(typeof PutConfigurationSetReputationOptionsCommand === "function");
assert(typeof PutConfigurationSetReputationOptions$ === "object");
assert(typeof PutConfigurationSetSendingOptionsCommand === "function");
assert(typeof PutConfigurationSetSendingOptions$ === "object");
assert(typeof PutConfigurationSetSuppressionOptionsCommand === "function");
assert(typeof PutConfigurationSetSuppressionOptions$ === "object");
assert(typeof PutConfigurationSetTrackingOptionsCommand === "function");
assert(typeof PutConfigurationSetTrackingOptions$ === "object");
assert(typeof PutConfigurationSetVdmOptionsCommand === "function");
assert(typeof PutConfigurationSetVdmOptions$ === "object");
assert(typeof PutDedicatedIpInPoolCommand === "function");
assert(typeof PutDedicatedIpInPool$ === "object");
assert(typeof PutDedicatedIpPoolScalingAttributesCommand === "function");
assert(typeof PutDedicatedIpPoolScalingAttributes$ === "object");
assert(typeof PutDedicatedIpWarmupAttributesCommand === "function");
assert(typeof PutDedicatedIpWarmupAttributes$ === "object");
assert(typeof PutDeliverabilityDashboardOptionCommand === "function");
assert(typeof PutDeliverabilityDashboardOption$ === "object");
assert(typeof PutEmailIdentityConfigurationSetAttributesCommand === "function");
assert(typeof PutEmailIdentityConfigurationSetAttributes$ === "object");
assert(typeof PutEmailIdentityDkimAttributesCommand === "function");
assert(typeof PutEmailIdentityDkimAttributes$ === "object");
assert(typeof PutEmailIdentityDkimSigningAttributesCommand === "function");
assert(typeof PutEmailIdentityDkimSigningAttributes$ === "object");
assert(typeof PutEmailIdentityFeedbackAttributesCommand === "function");
assert(typeof PutEmailIdentityFeedbackAttributes$ === "object");
assert(typeof PutEmailIdentityMailFromAttributesCommand === "function");
assert(typeof PutEmailIdentityMailFromAttributes$ === "object");
assert(typeof PutSuppressedDestinationCommand === "function");
assert(typeof PutSuppressedDestination$ === "object");
assert(typeof SendBulkEmailCommand === "function");
assert(typeof SendBulkEmail$ === "object");
assert(typeof SendCustomVerificationEmailCommand === "function");
assert(typeof SendCustomVerificationEmail$ === "object");
assert(typeof SendEmailCommand === "function");
assert(typeof SendEmail$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestRenderEmailTemplateCommand === "function");
assert(typeof TestRenderEmailTemplate$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateConfigurationSetEventDestinationCommand === "function");
assert(typeof UpdateConfigurationSetEventDestination$ === "object");
assert(typeof UpdateContactCommand === "function");
assert(typeof UpdateContact$ === "object");
assert(typeof UpdateContactListCommand === "function");
assert(typeof UpdateContactList$ === "object");
assert(typeof UpdateCustomVerificationEmailTemplateCommand === "function");
assert(typeof UpdateCustomVerificationEmailTemplate$ === "object");
assert(typeof UpdateEmailIdentityPolicyCommand === "function");
assert(typeof UpdateEmailIdentityPolicy$ === "object");
assert(typeof UpdateEmailTemplateCommand === "function");
assert(typeof UpdateEmailTemplate$ === "object");
assert(typeof UpdateReputationEntityCustomerManagedStatusCommand === "function");
assert(typeof UpdateReputationEntityCustomerManagedStatus$ === "object");
assert(typeof UpdateReputationEntityPolicyCommand === "function");
assert(typeof UpdateReputationEntityPolicy$ === "object");
// structural schemas
assert(typeof AccountDetails$ === "object");
assert(typeof ArchivingOptions$ === "object");
assert(typeof Attachment$ === "object");
assert(typeof BatchGetMetricDataQuery$ === "object");
assert(typeof BatchGetMetricDataRequest$ === "object");
assert(typeof BatchGetMetricDataResponse$ === "object");
assert(typeof BlacklistEntry$ === "object");
assert(typeof Body$ === "object");
assert(typeof Bounce$ === "object");
assert(typeof BulkEmailContent$ === "object");
assert(typeof BulkEmailEntry$ === "object");
assert(typeof BulkEmailEntryResult$ === "object");
assert(typeof CancelExportJobRequest$ === "object");
assert(typeof CancelExportJobResponse$ === "object");
assert(typeof CloudWatchDestination$ === "object");
assert(typeof CloudWatchDimensionConfiguration$ === "object");
assert(typeof Complaint$ === "object");
assert(typeof Contact$ === "object");
assert(typeof ContactList$ === "object");
assert(typeof ContactListDestination$ === "object");
assert(typeof Content$ === "object");
assert(typeof CreateConfigurationSetEventDestinationRequest$ === "object");
assert(typeof CreateConfigurationSetEventDestinationResponse$ === "object");
assert(typeof CreateConfigurationSetRequest$ === "object");
assert(typeof CreateConfigurationSetResponse$ === "object");
assert(typeof CreateContactListRequest$ === "object");
assert(typeof CreateContactListResponse$ === "object");
assert(typeof CreateContactRequest$ === "object");
assert(typeof CreateContactResponse$ === "object");
assert(typeof CreateCustomVerificationEmailTemplateRequest$ === "object");
assert(typeof CreateCustomVerificationEmailTemplateResponse$ === "object");
assert(typeof CreateDedicatedIpPoolRequest$ === "object");
assert(typeof CreateDedicatedIpPoolResponse$ === "object");
assert(typeof CreateDeliverabilityTestReportRequest$ === "object");
assert(typeof CreateDeliverabilityTestReportResponse$ === "object");
assert(typeof CreateEmailIdentityPolicyRequest$ === "object");
assert(typeof CreateEmailIdentityPolicyResponse$ === "object");
assert(typeof CreateEmailIdentityRequest$ === "object");
assert(typeof CreateEmailIdentityResponse$ === "object");
assert(typeof CreateEmailTemplateRequest$ === "object");
assert(typeof CreateEmailTemplateResponse$ === "object");
assert(typeof CreateExportJobRequest$ === "object");
assert(typeof CreateExportJobResponse$ === "object");
assert(typeof CreateImportJobRequest$ === "object");
assert(typeof CreateImportJobResponse$ === "object");
assert(typeof CreateMultiRegionEndpointRequest$ === "object");
assert(typeof CreateMultiRegionEndpointResponse$ === "object");
assert(typeof CreateTenantRequest$ === "object");
assert(typeof CreateTenantResourceAssociationRequest$ === "object");
assert(typeof CreateTenantResourceAssociationResponse$ === "object");
assert(typeof CreateTenantResponse$ === "object");
assert(typeof CustomVerificationEmailTemplateMetadata$ === "object");
assert(typeof DailyVolume$ === "object");
assert(typeof DashboardAttributes$ === "object");
assert(typeof DashboardOptions$ === "object");
assert(typeof DedicatedIp$ === "object");
assert(typeof DedicatedIpPool$ === "object");
assert(typeof DeleteConfigurationSetEventDestinationRequest$ === "object");
assert(typeof DeleteConfigurationSetEventDestinationResponse$ === "object");
assert(typeof DeleteConfigurationSetRequest$ === "object");
assert(typeof DeleteConfigurationSetResponse$ === "object");
assert(typeof DeleteContactListRequest$ === "object");
assert(typeof DeleteContactListResponse$ === "object");
assert(typeof DeleteContactRequest$ === "object");
assert(typeof DeleteContactResponse$ === "object");
assert(typeof DeleteCustomVerificationEmailTemplateRequest$ === "object");
assert(typeof DeleteCustomVerificationEmailTemplateResponse$ === "object");
assert(typeof DeleteDedicatedIpPoolRequest$ === "object");
assert(typeof DeleteDedicatedIpPoolResponse$ === "object");
assert(typeof DeleteEmailIdentityPolicyRequest$ === "object");
assert(typeof DeleteEmailIdentityPolicyResponse$ === "object");
assert(typeof DeleteEmailIdentityRequest$ === "object");
assert(typeof DeleteEmailIdentityResponse$ === "object");
assert(typeof DeleteEmailTemplateRequest$ === "object");
assert(typeof DeleteEmailTemplateResponse$ === "object");
assert(typeof DeleteMultiRegionEndpointRequest$ === "object");
assert(typeof DeleteMultiRegionEndpointResponse$ === "object");
assert(typeof DeleteSuppressedDestinationRequest$ === "object");
assert(typeof DeleteSuppressedDestinationResponse$ === "object");
assert(typeof DeleteTenantRequest$ === "object");
assert(typeof DeleteTenantResourceAssociationRequest$ === "object");
assert(typeof DeleteTenantResourceAssociationResponse$ === "object");
assert(typeof DeleteTenantResponse$ === "object");
assert(typeof DeliverabilityTestReport$ === "object");
assert(typeof DeliveryOptions$ === "object");
assert(typeof Destination$ === "object");
assert(typeof Details$ === "object");
assert(typeof DkimAttributes$ === "object");
assert(typeof DkimSigningAttributes$ === "object");
assert(typeof DomainDeliverabilityCampaign$ === "object");
assert(typeof DomainDeliverabilityTrackingOption$ === "object");
assert(typeof DomainIspPlacement$ === "object");
assert(typeof EmailContent$ === "object");
assert(typeof EmailInsights$ === "object");
assert(typeof EmailTemplateContent$ === "object");
assert(typeof EmailTemplateMetadata$ === "object");
assert(typeof EventBridgeDestination$ === "object");
assert(typeof EventDestination$ === "object");
assert(typeof EventDestinationDefinition$ === "object");
assert(typeof EventDetails$ === "object");
assert(typeof ExportDataSource$ === "object");
assert(typeof ExportDestination$ === "object");
assert(typeof ExportJobSummary$ === "object");
assert(typeof ExportMetric$ === "object");
assert(typeof ExportStatistics$ === "object");
assert(typeof FailureInfo$ === "object");
assert(typeof GetAccountRequest$ === "object");
assert(typeof GetAccountResponse$ === "object");
assert(typeof GetBlacklistReportsRequest$ === "object");
assert(typeof GetBlacklistReportsResponse$ === "object");
assert(typeof GetConfigurationSetEventDestinationsRequest$ === "object");
assert(typeof GetConfigurationSetEventDestinationsResponse$ === "object");
assert(typeof GetConfigurationSetRequest$ === "object");
assert(typeof GetConfigurationSetResponse$ === "object");
assert(typeof GetContactListRequest$ === "object");
assert(typeof GetContactListResponse$ === "object");
assert(typeof GetContactRequest$ === "object");
assert(typeof GetContactResponse$ === "object");
assert(typeof GetCustomVerificationEmailTemplateRequest$ === "object");
assert(typeof GetCustomVerificationEmailTemplateResponse$ === "object");
assert(typeof GetDedicatedIpPoolRequest$ === "object");
assert(typeof GetDedicatedIpPoolResponse$ === "object");
assert(typeof GetDedicatedIpRequest$ === "object");
assert(typeof GetDedicatedIpResponse$ === "object");
assert(typeof GetDedicatedIpsRequest$ === "object");
assert(typeof GetDedicatedIpsResponse$ === "object");
assert(typeof GetDeliverabilityDashboardOptionsRequest$ === "object");
assert(typeof GetDeliverabilityDashboardOptionsResponse$ === "object");
assert(typeof GetDeliverabilityTestReportRequest$ === "object");
assert(typeof GetDeliverabilityTestReportResponse$ === "object");
assert(typeof GetDomainDeliverabilityCampaignRequest$ === "object");
assert(typeof GetDomainDeliverabilityCampaignResponse$ === "object");
assert(typeof GetDomainStatisticsReportRequest$ === "object");
assert(typeof GetDomainStatisticsReportResponse$ === "object");
assert(typeof GetEmailIdentityPoliciesRequest$ === "object");
assert(typeof GetEmailIdentityPoliciesResponse$ === "object");
assert(typeof GetEmailIdentityRequest$ === "object");
assert(typeof GetEmailIdentityResponse$ === "object");
assert(typeof GetEmailTemplateRequest$ === "object");
assert(typeof GetEmailTemplateResponse$ === "object");
assert(typeof GetExportJobRequest$ === "object");
assert(typeof GetExportJobResponse$ === "object");
assert(typeof GetImportJobRequest$ === "object");
assert(typeof GetImportJobResponse$ === "object");
assert(typeof GetMessageInsightsRequest$ === "object");
assert(typeof GetMessageInsightsResponse$ === "object");
assert(typeof GetMultiRegionEndpointRequest$ === "object");
assert(typeof GetMultiRegionEndpointResponse$ === "object");
assert(typeof GetReputationEntityRequest$ === "object");
assert(typeof GetReputationEntityResponse$ === "object");
assert(typeof GetSuppressedDestinationRequest$ === "object");
assert(typeof GetSuppressedDestinationResponse$ === "object");
assert(typeof GetTenantRequest$ === "object");
assert(typeof GetTenantResponse$ === "object");
assert(typeof GuardianAttributes$ === "object");
assert(typeof GuardianOptions$ === "object");
assert(typeof IdentityInfo$ === "object");
assert(typeof ImportDataSource$ === "object");
assert(typeof ImportDestination$ === "object");
assert(typeof ImportJobSummary$ === "object");
assert(typeof InboxPlacementTrackingOption$ === "object");
assert(typeof InsightsEvent$ === "object");
assert(typeof IspPlacement$ === "object");
assert(typeof KinesisFirehoseDestination$ === "object");
assert(typeof ListConfigurationSetsRequest$ === "object");
assert(typeof ListConfigurationSetsResponse$ === "object");
assert(typeof ListContactListsRequest$ === "object");
assert(typeof ListContactListsResponse$ === "object");
assert(typeof ListContactsFilter$ === "object");
assert(typeof ListContactsRequest$ === "object");
assert(typeof ListContactsResponse$ === "object");
assert(typeof ListCustomVerificationEmailTemplatesRequest$ === "object");
assert(typeof ListCustomVerificationEmailTemplatesResponse$ === "object");
assert(typeof ListDedicatedIpPoolsRequest$ === "object");
assert(typeof ListDedicatedIpPoolsResponse$ === "object");
assert(typeof ListDeliverabilityTestReportsRequest$ === "object");
assert(typeof ListDeliverabilityTestReportsResponse$ === "object");
assert(typeof ListDomainDeliverabilityCampaignsRequest$ === "object");
assert(typeof ListDomainDeliverabilityCampaignsResponse$ === "object");
assert(typeof ListEmailIdentitiesRequest$ === "object");
assert(typeof ListEmailIdentitiesResponse$ === "object");
assert(typeof ListEmailTemplatesRequest$ === "object");
assert(typeof ListEmailTemplatesResponse$ === "object");
assert(typeof ListExportJobsRequest$ === "object");
assert(typeof ListExportJobsResponse$ === "object");
assert(typeof ListImportJobsRequest$ === "object");
assert(typeof ListImportJobsResponse$ === "object");
assert(typeof ListManagementOptions$ === "object");
assert(typeof ListMultiRegionEndpointsRequest$ === "object");
assert(typeof ListMultiRegionEndpointsResponse$ === "object");
assert(typeof ListRecommendationsRequest$ === "object");
assert(typeof ListRecommendationsResponse$ === "object");
assert(typeof ListReputationEntitiesRequest$ === "object");
assert(typeof ListReputationEntitiesResponse$ === "object");
assert(typeof ListResourceTenantsRequest$ === "object");
assert(typeof ListResourceTenantsResponse$ === "object");
assert(typeof ListSuppressedDestinationsRequest$ === "object");
assert(typeof ListSuppressedDestinationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTenantResourcesRequest$ === "object");
assert(typeof ListTenantResourcesResponse$ === "object");
assert(typeof ListTenantsRequest$ === "object");
assert(typeof ListTenantsResponse$ === "object");
assert(typeof MailFromAttributes$ === "object");
assert(typeof Message$ === "object");
assert(typeof MessageHeader$ === "object");
assert(typeof MessageInsightsDataSource$ === "object");
assert(typeof MessageInsightsFilters$ === "object");
assert(typeof MessageTag$ === "object");
assert(typeof MetricDataError$ === "object");
assert(typeof MetricDataResult$ === "object");
assert(typeof MetricsDataSource$ === "object");
assert(typeof MultiRegionEndpoint$ === "object");
assert(typeof OverallVolume$ === "object");
assert(typeof PinpointDestination$ === "object");
assert(typeof PlacementStatistics$ === "object");
assert(typeof PutAccountDedicatedIpWarmupAttributesRequest$ === "object");
assert(typeof PutAccountDedicatedIpWarmupAttributesResponse$ === "object");
assert(typeof PutAccountDetailsRequest$ === "object");
assert(typeof PutAccountDetailsResponse$ === "object");
assert(typeof PutAccountSendingAttributesRequest$ === "object");
assert(typeof PutAccountSendingAttributesResponse$ === "object");
assert(typeof PutAccountSuppressionAttributesRequest$ === "object");
assert(typeof PutAccountSuppressionAttributesResponse$ === "object");
assert(typeof PutAccountVdmAttributesRequest$ === "object");
assert(typeof PutAccountVdmAttributesResponse$ === "object");
assert(typeof PutConfigurationSetArchivingOptionsRequest$ === "object");
assert(typeof PutConfigurationSetArchivingOptionsResponse$ === "object");
assert(typeof PutConfigurationSetDeliveryOptionsRequest$ === "object");
assert(typeof PutConfigurationSetDeliveryOptionsResponse$ === "object");
assert(typeof PutConfigurationSetReputationOptionsRequest$ === "object");
assert(typeof PutConfigurationSetReputationOptionsResponse$ === "object");
assert(typeof PutConfigurationSetSendingOptionsRequest$ === "object");
assert(typeof PutConfigurationSetSendingOptionsResponse$ === "object");
assert(typeof PutConfigurationSetSuppressionOptionsRequest$ === "object");
assert(typeof PutConfigurationSetSuppressionOptionsResponse$ === "object");
assert(typeof PutConfigurationSetTrackingOptionsRequest$ === "object");
assert(typeof PutConfigurationSetTrackingOptionsResponse$ === "object");
assert(typeof PutConfigurationSetVdmOptionsRequest$ === "object");
assert(typeof PutConfigurationSetVdmOptionsResponse$ === "object");
assert(typeof PutDedicatedIpInPoolRequest$ === "object");
assert(typeof PutDedicatedIpInPoolResponse$ === "object");
assert(typeof PutDedicatedIpPoolScalingAttributesRequest$ === "object");
assert(typeof PutDedicatedIpPoolScalingAttributesResponse$ === "object");
assert(typeof PutDedicatedIpWarmupAttributesRequest$ === "object");
assert(typeof PutDedicatedIpWarmupAttributesResponse$ === "object");
assert(typeof PutDeliverabilityDashboardOptionRequest$ === "object");
assert(typeof PutDeliverabilityDashboardOptionResponse$ === "object");
assert(typeof PutEmailIdentityConfigurationSetAttributesRequest$ === "object");
assert(typeof PutEmailIdentityConfigurationSetAttributesResponse$ === "object");
assert(typeof PutEmailIdentityDkimAttributesRequest$ === "object");
assert(typeof PutEmailIdentityDkimAttributesResponse$ === "object");
assert(typeof PutEmailIdentityDkimSigningAttributesRequest$ === "object");
assert(typeof PutEmailIdentityDkimSigningAttributesResponse$ === "object");
assert(typeof PutEmailIdentityFeedbackAttributesRequest$ === "object");
assert(typeof PutEmailIdentityFeedbackAttributesResponse$ === "object");
assert(typeof PutEmailIdentityMailFromAttributesRequest$ === "object");
assert(typeof PutEmailIdentityMailFromAttributesResponse$ === "object");
assert(typeof PutSuppressedDestinationRequest$ === "object");
assert(typeof PutSuppressedDestinationResponse$ === "object");
assert(typeof RawMessage$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof ReplacementEmailContent$ === "object");
assert(typeof ReplacementTemplate$ === "object");
assert(typeof ReputationEntity$ === "object");
assert(typeof ReputationOptions$ === "object");
assert(typeof ResourceTenantMetadata$ === "object");
assert(typeof ReviewDetails$ === "object");
assert(typeof Route$ === "object");
assert(typeof RouteDetails$ === "object");
assert(typeof SendBulkEmailRequest$ === "object");
assert(typeof SendBulkEmailResponse$ === "object");
assert(typeof SendCustomVerificationEmailRequest$ === "object");
assert(typeof SendCustomVerificationEmailResponse$ === "object");
assert(typeof SendEmailRequest$ === "object");
assert(typeof SendEmailResponse$ === "object");
assert(typeof SendingOptions$ === "object");
assert(typeof SendQuota$ === "object");
assert(typeof SnsDestination$ === "object");
assert(typeof SOARecord$ === "object");
assert(typeof StatusRecord$ === "object");
assert(typeof SuppressedDestination$ === "object");
assert(typeof SuppressedDestinationAttributes$ === "object");
assert(typeof SuppressedDestinationSummary$ === "object");
assert(typeof SuppressionAttributes$ === "object");
assert(typeof SuppressionListDestination$ === "object");
assert(typeof SuppressionOptions$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Template$ === "object");
assert(typeof Tenant$ === "object");
assert(typeof TenantInfo$ === "object");
assert(typeof TenantResource$ === "object");
assert(typeof TestRenderEmailTemplateRequest$ === "object");
assert(typeof TestRenderEmailTemplateResponse$ === "object");
assert(typeof Topic$ === "object");
assert(typeof TopicFilter$ === "object");
assert(typeof TopicPreference$ === "object");
assert(typeof TrackingOptions$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateConfigurationSetEventDestinationRequest$ === "object");
assert(typeof UpdateConfigurationSetEventDestinationResponse$ === "object");
assert(typeof UpdateContactListRequest$ === "object");
assert(typeof UpdateContactListResponse$ === "object");
assert(typeof UpdateContactRequest$ === "object");
assert(typeof UpdateContactResponse$ === "object");
assert(typeof UpdateCustomVerificationEmailTemplateRequest$ === "object");
assert(typeof UpdateCustomVerificationEmailTemplateResponse$ === "object");
assert(typeof UpdateEmailIdentityPolicyRequest$ === "object");
assert(typeof UpdateEmailIdentityPolicyResponse$ === "object");
assert(typeof UpdateEmailTemplateRequest$ === "object");
assert(typeof UpdateEmailTemplateResponse$ === "object");
assert(typeof UpdateReputationEntityCustomerManagedStatusRequest$ === "object");
assert(typeof UpdateReputationEntityCustomerManagedStatusResponse$ === "object");
assert(typeof UpdateReputationEntityPolicyRequest$ === "object");
assert(typeof UpdateReputationEntityPolicyResponse$ === "object");
assert(typeof VdmAttributes$ === "object");
assert(typeof VdmOptions$ === "object");
assert(typeof VerificationInfo$ === "object");
assert(typeof VolumeStatistics$ === "object");
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
assert(typeof AccountSuspendedException$ === "object");
assert(AlreadyExistsException.prototype instanceof SESv2ServiceException);
assert(typeof AlreadyExistsException$ === "object");
assert(BadRequestException.prototype instanceof SESv2ServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConcurrentModificationException.prototype instanceof SESv2ServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConflictException.prototype instanceof SESv2ServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServiceErrorException.prototype instanceof SESv2ServiceException);
assert(typeof InternalServiceErrorException$ === "object");
assert(InvalidNextTokenException.prototype instanceof SESv2ServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(LimitExceededException.prototype instanceof SESv2ServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MailFromDomainNotVerifiedException.prototype instanceof SESv2ServiceException);
assert(typeof MailFromDomainNotVerifiedException$ === "object");
assert(MessageRejected.prototype instanceof SESv2ServiceException);
assert(typeof MessageRejected$ === "object");
assert(NotFoundException.prototype instanceof SESv2ServiceException);
assert(typeof NotFoundException$ === "object");
assert(SendingPausedException.prototype instanceof SESv2ServiceException);
assert(typeof SendingPausedException$ === "object");
assert(TooManyRequestsException.prototype instanceof SESv2ServiceException);
assert(typeof TooManyRequestsException$ === "object");
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
