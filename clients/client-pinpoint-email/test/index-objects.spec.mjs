import {
  AccountSuspendedException,
  AccountSuspendedException$,
  AlreadyExistsException,
  AlreadyExistsException$,
  BadRequestException,
  BadRequestException$,
  BehaviorOnMxFailure,
  BlacklistEntry$,
  Body$,
  CloudWatchDestination$,
  CloudWatchDimensionConfiguration$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  Content$,
  CreateConfigurationSet$,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestination$,
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetEventDestinationRequest$,
  CreateConfigurationSetEventDestinationResponse$,
  CreateConfigurationSetRequest$,
  CreateConfigurationSetResponse$,
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
  CreateEmailIdentityRequest$,
  CreateEmailIdentityResponse$,
  DailyVolume$,
  DedicatedIp$,
  DeleteConfigurationSet$,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestination$,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetEventDestinationRequest$,
  DeleteConfigurationSetEventDestinationResponse$,
  DeleteConfigurationSetRequest$,
  DeleteConfigurationSetResponse$,
  DeleteDedicatedIpPool$,
  DeleteDedicatedIpPoolCommand,
  DeleteDedicatedIpPoolRequest$,
  DeleteDedicatedIpPoolResponse$,
  DeleteEmailIdentity$,
  DeleteEmailIdentityCommand,
  DeleteEmailIdentityRequest$,
  DeleteEmailIdentityResponse$,
  DeliverabilityDashboardAccountStatus,
  DeliverabilityTestReport$,
  DeliverabilityTestStatus,
  DeliveryOptions$,
  Destination$,
  DimensionValueSource,
  DkimAttributes$,
  DkimStatus,
  DomainDeliverabilityCampaign$,
  DomainDeliverabilityTrackingOption$,
  DomainIspPlacement$,
  EmailContent$,
  EventDestination$,
  EventDestinationDefinition$,
  EventType,
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
  GetDedicatedIp$,
  GetDedicatedIpCommand,
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
  GetEmailIdentityRequest$,
  GetEmailIdentityResponse$,
  IdentityInfo$,
  IdentityType,
  InboxPlacementTrackingOption$,
  IspPlacement$,
  KinesisFirehoseDestination$,
  LimitExceededException,
  LimitExceededException$,
  ListConfigurationSets$,
  ListConfigurationSetsCommand,
  ListConfigurationSetsRequest$,
  ListConfigurationSetsResponse$,
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
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MailFromAttributes$,
  MailFromDomainNotVerifiedException,
  MailFromDomainNotVerifiedException$,
  MailFromDomainStatus,
  Message$,
  MessageRejected,
  MessageRejected$,
  MessageTag$,
  NotFoundException,
  NotFoundException$,
  OverallVolume$,
  PinpointDestination$,
  PinpointEmail,
  PinpointEmailClient,
  PinpointEmailServiceException,
  PlacementStatistics$,
  PutAccountDedicatedIpWarmupAttributes$,
  PutAccountDedicatedIpWarmupAttributesCommand,
  PutAccountDedicatedIpWarmupAttributesRequest$,
  PutAccountDedicatedIpWarmupAttributesResponse$,
  PutAccountSendingAttributes$,
  PutAccountSendingAttributesCommand,
  PutAccountSendingAttributesRequest$,
  PutAccountSendingAttributesResponse$,
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
  PutConfigurationSetTrackingOptions$,
  PutConfigurationSetTrackingOptionsCommand,
  PutConfigurationSetTrackingOptionsRequest$,
  PutConfigurationSetTrackingOptionsResponse$,
  PutDedicatedIpInPool$,
  PutDedicatedIpInPoolCommand,
  PutDedicatedIpInPoolRequest$,
  PutDedicatedIpInPoolResponse$,
  PutDedicatedIpWarmupAttributes$,
  PutDedicatedIpWarmupAttributesCommand,
  PutDedicatedIpWarmupAttributesRequest$,
  PutDedicatedIpWarmupAttributesResponse$,
  PutDeliverabilityDashboardOption$,
  PutDeliverabilityDashboardOptionCommand,
  PutDeliverabilityDashboardOptionRequest$,
  PutDeliverabilityDashboardOptionResponse$,
  PutEmailIdentityDkimAttributes$,
  PutEmailIdentityDkimAttributesCommand,
  PutEmailIdentityDkimAttributesRequest$,
  PutEmailIdentityDkimAttributesResponse$,
  PutEmailIdentityFeedbackAttributes$,
  PutEmailIdentityFeedbackAttributesCommand,
  PutEmailIdentityFeedbackAttributesRequest$,
  PutEmailIdentityFeedbackAttributesResponse$,
  PutEmailIdentityMailFromAttributes$,
  PutEmailIdentityMailFromAttributesCommand,
  PutEmailIdentityMailFromAttributesRequest$,
  PutEmailIdentityMailFromAttributesResponse$,
  RawMessage$,
  ReputationOptions$,
  SendEmail$,
  SendEmailCommand,
  SendEmailRequest$,
  SendEmailResponse$,
  SendQuota$,
  SendingOptions$,
  SendingPausedException,
  SendingPausedException$,
  SnsDestination$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Template$,
  TlsPolicy,
  TooManyRequestsException,
  TooManyRequestsException$,
  TrackingOptions$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateConfigurationSetEventDestination$,
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetEventDestinationRequest$,
  UpdateConfigurationSetEventDestinationResponse$,
  VolumeStatistics$,
  WarmupStatus,
  paginateGetDedicatedIps,
  paginateListConfigurationSets,
  paginateListDedicatedIpPools,
  paginateListDeliverabilityTestReports,
  paginateListDomainDeliverabilityCampaigns,
  paginateListEmailIdentities,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PinpointEmailClient === "function");
assert(typeof PinpointEmail === "function");
// commands
assert(typeof CreateConfigurationSetCommand === "function");
assert(typeof CreateConfigurationSet$ === "object");
assert(typeof CreateConfigurationSetEventDestinationCommand === "function");
assert(typeof CreateConfigurationSetEventDestination$ === "object");
assert(typeof CreateDedicatedIpPoolCommand === "function");
assert(typeof CreateDedicatedIpPool$ === "object");
assert(typeof CreateDeliverabilityTestReportCommand === "function");
assert(typeof CreateDeliverabilityTestReport$ === "object");
assert(typeof CreateEmailIdentityCommand === "function");
assert(typeof CreateEmailIdentity$ === "object");
assert(typeof DeleteConfigurationSetCommand === "function");
assert(typeof DeleteConfigurationSet$ === "object");
assert(typeof DeleteConfigurationSetEventDestinationCommand === "function");
assert(typeof DeleteConfigurationSetEventDestination$ === "object");
assert(typeof DeleteDedicatedIpPoolCommand === "function");
assert(typeof DeleteDedicatedIpPool$ === "object");
assert(typeof DeleteEmailIdentityCommand === "function");
assert(typeof DeleteEmailIdentity$ === "object");
assert(typeof GetAccountCommand === "function");
assert(typeof GetAccount$ === "object");
assert(typeof GetBlacklistReportsCommand === "function");
assert(typeof GetBlacklistReports$ === "object");
assert(typeof GetConfigurationSetCommand === "function");
assert(typeof GetConfigurationSet$ === "object");
assert(typeof GetConfigurationSetEventDestinationsCommand === "function");
assert(typeof GetConfigurationSetEventDestinations$ === "object");
assert(typeof GetDedicatedIpCommand === "function");
assert(typeof GetDedicatedIp$ === "object");
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
assert(typeof ListConfigurationSetsCommand === "function");
assert(typeof ListConfigurationSets$ === "object");
assert(typeof ListDedicatedIpPoolsCommand === "function");
assert(typeof ListDedicatedIpPools$ === "object");
assert(typeof ListDeliverabilityTestReportsCommand === "function");
assert(typeof ListDeliverabilityTestReports$ === "object");
assert(typeof ListDomainDeliverabilityCampaignsCommand === "function");
assert(typeof ListDomainDeliverabilityCampaigns$ === "object");
assert(typeof ListEmailIdentitiesCommand === "function");
assert(typeof ListEmailIdentities$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutAccountDedicatedIpWarmupAttributesCommand === "function");
assert(typeof PutAccountDedicatedIpWarmupAttributes$ === "object");
assert(typeof PutAccountSendingAttributesCommand === "function");
assert(typeof PutAccountSendingAttributes$ === "object");
assert(typeof PutConfigurationSetDeliveryOptionsCommand === "function");
assert(typeof PutConfigurationSetDeliveryOptions$ === "object");
assert(typeof PutConfigurationSetReputationOptionsCommand === "function");
assert(typeof PutConfigurationSetReputationOptions$ === "object");
assert(typeof PutConfigurationSetSendingOptionsCommand === "function");
assert(typeof PutConfigurationSetSendingOptions$ === "object");
assert(typeof PutConfigurationSetTrackingOptionsCommand === "function");
assert(typeof PutConfigurationSetTrackingOptions$ === "object");
assert(typeof PutDedicatedIpInPoolCommand === "function");
assert(typeof PutDedicatedIpInPool$ === "object");
assert(typeof PutDedicatedIpWarmupAttributesCommand === "function");
assert(typeof PutDedicatedIpWarmupAttributes$ === "object");
assert(typeof PutDeliverabilityDashboardOptionCommand === "function");
assert(typeof PutDeliverabilityDashboardOption$ === "object");
assert(typeof PutEmailIdentityDkimAttributesCommand === "function");
assert(typeof PutEmailIdentityDkimAttributes$ === "object");
assert(typeof PutEmailIdentityFeedbackAttributesCommand === "function");
assert(typeof PutEmailIdentityFeedbackAttributes$ === "object");
assert(typeof PutEmailIdentityMailFromAttributesCommand === "function");
assert(typeof PutEmailIdentityMailFromAttributes$ === "object");
assert(typeof SendEmailCommand === "function");
assert(typeof SendEmail$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateConfigurationSetEventDestinationCommand === "function");
assert(typeof UpdateConfigurationSetEventDestination$ === "object");
// structural schemas
assert(typeof BlacklistEntry$ === "object");
assert(typeof Body$ === "object");
assert(typeof CloudWatchDestination$ === "object");
assert(typeof CloudWatchDimensionConfiguration$ === "object");
assert(typeof Content$ === "object");
assert(typeof CreateConfigurationSetEventDestinationRequest$ === "object");
assert(typeof CreateConfigurationSetEventDestinationResponse$ === "object");
assert(typeof CreateConfigurationSetRequest$ === "object");
assert(typeof CreateConfigurationSetResponse$ === "object");
assert(typeof CreateDedicatedIpPoolRequest$ === "object");
assert(typeof CreateDedicatedIpPoolResponse$ === "object");
assert(typeof CreateDeliverabilityTestReportRequest$ === "object");
assert(typeof CreateDeliverabilityTestReportResponse$ === "object");
assert(typeof CreateEmailIdentityRequest$ === "object");
assert(typeof CreateEmailIdentityResponse$ === "object");
assert(typeof DailyVolume$ === "object");
assert(typeof DedicatedIp$ === "object");
assert(typeof DeleteConfigurationSetEventDestinationRequest$ === "object");
assert(typeof DeleteConfigurationSetEventDestinationResponse$ === "object");
assert(typeof DeleteConfigurationSetRequest$ === "object");
assert(typeof DeleteConfigurationSetResponse$ === "object");
assert(typeof DeleteDedicatedIpPoolRequest$ === "object");
assert(typeof DeleteDedicatedIpPoolResponse$ === "object");
assert(typeof DeleteEmailIdentityRequest$ === "object");
assert(typeof DeleteEmailIdentityResponse$ === "object");
assert(typeof DeliverabilityTestReport$ === "object");
assert(typeof DeliveryOptions$ === "object");
assert(typeof Destination$ === "object");
assert(typeof DkimAttributes$ === "object");
assert(typeof DomainDeliverabilityCampaign$ === "object");
assert(typeof DomainDeliverabilityTrackingOption$ === "object");
assert(typeof DomainIspPlacement$ === "object");
assert(typeof EmailContent$ === "object");
assert(typeof EventDestination$ === "object");
assert(typeof EventDestinationDefinition$ === "object");
assert(typeof GetAccountRequest$ === "object");
assert(typeof GetAccountResponse$ === "object");
assert(typeof GetBlacklistReportsRequest$ === "object");
assert(typeof GetBlacklistReportsResponse$ === "object");
assert(typeof GetConfigurationSetEventDestinationsRequest$ === "object");
assert(typeof GetConfigurationSetEventDestinationsResponse$ === "object");
assert(typeof GetConfigurationSetRequest$ === "object");
assert(typeof GetConfigurationSetResponse$ === "object");
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
assert(typeof GetEmailIdentityRequest$ === "object");
assert(typeof GetEmailIdentityResponse$ === "object");
assert(typeof IdentityInfo$ === "object");
assert(typeof InboxPlacementTrackingOption$ === "object");
assert(typeof IspPlacement$ === "object");
assert(typeof KinesisFirehoseDestination$ === "object");
assert(typeof ListConfigurationSetsRequest$ === "object");
assert(typeof ListConfigurationSetsResponse$ === "object");
assert(typeof ListDedicatedIpPoolsRequest$ === "object");
assert(typeof ListDedicatedIpPoolsResponse$ === "object");
assert(typeof ListDeliverabilityTestReportsRequest$ === "object");
assert(typeof ListDeliverabilityTestReportsResponse$ === "object");
assert(typeof ListDomainDeliverabilityCampaignsRequest$ === "object");
assert(typeof ListDomainDeliverabilityCampaignsResponse$ === "object");
assert(typeof ListEmailIdentitiesRequest$ === "object");
assert(typeof ListEmailIdentitiesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MailFromAttributes$ === "object");
assert(typeof Message$ === "object");
assert(typeof MessageTag$ === "object");
assert(typeof OverallVolume$ === "object");
assert(typeof PinpointDestination$ === "object");
assert(typeof PlacementStatistics$ === "object");
assert(typeof PutAccountDedicatedIpWarmupAttributesRequest$ === "object");
assert(typeof PutAccountDedicatedIpWarmupAttributesResponse$ === "object");
assert(typeof PutAccountSendingAttributesRequest$ === "object");
assert(typeof PutAccountSendingAttributesResponse$ === "object");
assert(typeof PutConfigurationSetDeliveryOptionsRequest$ === "object");
assert(typeof PutConfigurationSetDeliveryOptionsResponse$ === "object");
assert(typeof PutConfigurationSetReputationOptionsRequest$ === "object");
assert(typeof PutConfigurationSetReputationOptionsResponse$ === "object");
assert(typeof PutConfigurationSetSendingOptionsRequest$ === "object");
assert(typeof PutConfigurationSetSendingOptionsResponse$ === "object");
assert(typeof PutConfigurationSetTrackingOptionsRequest$ === "object");
assert(typeof PutConfigurationSetTrackingOptionsResponse$ === "object");
assert(typeof PutDedicatedIpInPoolRequest$ === "object");
assert(typeof PutDedicatedIpInPoolResponse$ === "object");
assert(typeof PutDedicatedIpWarmupAttributesRequest$ === "object");
assert(typeof PutDedicatedIpWarmupAttributesResponse$ === "object");
assert(typeof PutDeliverabilityDashboardOptionRequest$ === "object");
assert(typeof PutDeliverabilityDashboardOptionResponse$ === "object");
assert(typeof PutEmailIdentityDkimAttributesRequest$ === "object");
assert(typeof PutEmailIdentityDkimAttributesResponse$ === "object");
assert(typeof PutEmailIdentityFeedbackAttributesRequest$ === "object");
assert(typeof PutEmailIdentityFeedbackAttributesResponse$ === "object");
assert(typeof PutEmailIdentityMailFromAttributesRequest$ === "object");
assert(typeof PutEmailIdentityMailFromAttributesResponse$ === "object");
assert(typeof RawMessage$ === "object");
assert(typeof ReputationOptions$ === "object");
assert(typeof SendEmailRequest$ === "object");
assert(typeof SendEmailResponse$ === "object");
assert(typeof SendingOptions$ === "object");
assert(typeof SendQuota$ === "object");
assert(typeof SnsDestination$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Template$ === "object");
assert(typeof TrackingOptions$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateConfigurationSetEventDestinationRequest$ === "object");
assert(typeof UpdateConfigurationSetEventDestinationResponse$ === "object");
assert(typeof VolumeStatistics$ === "object");
// enums
assert(typeof BehaviorOnMxFailure === "object");
assert(typeof DeliverabilityDashboardAccountStatus === "object");
assert(typeof DeliverabilityTestStatus === "object");
assert(typeof DimensionValueSource === "object");
assert(typeof DkimStatus === "object");
assert(typeof EventType === "object");
assert(typeof IdentityType === "object");
assert(typeof MailFromDomainStatus === "object");
assert(typeof TlsPolicy === "object");
assert(typeof WarmupStatus === "object");
// errors
assert(AccountSuspendedException.prototype instanceof PinpointEmailServiceException);
assert(typeof AccountSuspendedException$ === "object");
assert(AlreadyExistsException.prototype instanceof PinpointEmailServiceException);
assert(typeof AlreadyExistsException$ === "object");
assert(BadRequestException.prototype instanceof PinpointEmailServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConcurrentModificationException.prototype instanceof PinpointEmailServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(LimitExceededException.prototype instanceof PinpointEmailServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MailFromDomainNotVerifiedException.prototype instanceof PinpointEmailServiceException);
assert(typeof MailFromDomainNotVerifiedException$ === "object");
assert(MessageRejected.prototype instanceof PinpointEmailServiceException);
assert(typeof MessageRejected$ === "object");
assert(NotFoundException.prototype instanceof PinpointEmailServiceException);
assert(typeof NotFoundException$ === "object");
assert(SendingPausedException.prototype instanceof PinpointEmailServiceException);
assert(typeof SendingPausedException$ === "object");
assert(TooManyRequestsException.prototype instanceof PinpointEmailServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(PinpointEmailServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetDedicatedIps === "function");
assert(typeof paginateListConfigurationSets === "function");
assert(typeof paginateListDedicatedIpPools === "function");
assert(typeof paginateListDeliverabilityTestReports === "function");
assert(typeof paginateListDomainDeliverabilityCampaigns === "function");
assert(typeof paginateListEmailIdentities === "function");
console.log(`PinpointEmail index test passed.`);
