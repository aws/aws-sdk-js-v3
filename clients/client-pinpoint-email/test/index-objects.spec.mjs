import {
  AccountSuspendedException,
  AlreadyExistsException,
  BadRequestException,
  BehaviorOnMxFailure,
  ConcurrentModificationException,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  CreateDedicatedIpPoolCommand,
  CreateDeliverabilityTestReportCommand,
  CreateEmailIdentityCommand,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteDedicatedIpPoolCommand,
  DeleteEmailIdentityCommand,
  DeliverabilityDashboardAccountStatus,
  DeliverabilityTestStatus,
  DimensionValueSource,
  DkimStatus,
  EventType,
  GetAccountCommand,
  GetBlacklistReportsCommand,
  GetConfigurationSetCommand,
  GetConfigurationSetEventDestinationsCommand,
  GetDedicatedIpCommand,
  GetDedicatedIpsCommand,
  GetDeliverabilityDashboardOptionsCommand,
  GetDeliverabilityTestReportCommand,
  GetDomainDeliverabilityCampaignCommand,
  GetDomainStatisticsReportCommand,
  GetEmailIdentityCommand,
  IdentityType,
  LimitExceededException,
  ListConfigurationSetsCommand,
  ListDedicatedIpPoolsCommand,
  ListDeliverabilityTestReportsCommand,
  ListDomainDeliverabilityCampaignsCommand,
  ListEmailIdentitiesCommand,
  ListTagsForResourceCommand,
  MailFromDomainNotVerifiedException,
  MailFromDomainStatus,
  MessageRejected,
  NotFoundException,
  PinpointEmail,
  PinpointEmailClient,
  PinpointEmailServiceException,
  PutAccountDedicatedIpWarmupAttributesCommand,
  PutAccountSendingAttributesCommand,
  PutConfigurationSetDeliveryOptionsCommand,
  PutConfigurationSetReputationOptionsCommand,
  PutConfigurationSetSendingOptionsCommand,
  PutConfigurationSetTrackingOptionsCommand,
  PutDedicatedIpInPoolCommand,
  PutDedicatedIpWarmupAttributesCommand,
  PutDeliverabilityDashboardOptionCommand,
  PutEmailIdentityDkimAttributesCommand,
  PutEmailIdentityFeedbackAttributesCommand,
  PutEmailIdentityMailFromAttributesCommand,
  SendEmailCommand,
  SendingPausedException,
  TagResourceCommand,
  TlsPolicy,
  TooManyRequestsException,
  UntagResourceCommand,
  UpdateConfigurationSetEventDestinationCommand,
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
assert(typeof CreateConfigurationSetEventDestinationCommand === "function");
assert(typeof CreateDedicatedIpPoolCommand === "function");
assert(typeof CreateDeliverabilityTestReportCommand === "function");
assert(typeof CreateEmailIdentityCommand === "function");
assert(typeof DeleteConfigurationSetCommand === "function");
assert(typeof DeleteConfigurationSetEventDestinationCommand === "function");
assert(typeof DeleteDedicatedIpPoolCommand === "function");
assert(typeof DeleteEmailIdentityCommand === "function");
assert(typeof GetAccountCommand === "function");
assert(typeof GetBlacklistReportsCommand === "function");
assert(typeof GetConfigurationSetCommand === "function");
assert(typeof GetConfigurationSetEventDestinationsCommand === "function");
assert(typeof GetDedicatedIpCommand === "function");
assert(typeof GetDedicatedIpsCommand === "function");
assert(typeof GetDeliverabilityDashboardOptionsCommand === "function");
assert(typeof GetDeliverabilityTestReportCommand === "function");
assert(typeof GetDomainDeliverabilityCampaignCommand === "function");
assert(typeof GetDomainStatisticsReportCommand === "function");
assert(typeof GetEmailIdentityCommand === "function");
assert(typeof ListConfigurationSetsCommand === "function");
assert(typeof ListDedicatedIpPoolsCommand === "function");
assert(typeof ListDeliverabilityTestReportsCommand === "function");
assert(typeof ListDomainDeliverabilityCampaignsCommand === "function");
assert(typeof ListEmailIdentitiesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutAccountDedicatedIpWarmupAttributesCommand === "function");
assert(typeof PutAccountSendingAttributesCommand === "function");
assert(typeof PutConfigurationSetDeliveryOptionsCommand === "function");
assert(typeof PutConfigurationSetReputationOptionsCommand === "function");
assert(typeof PutConfigurationSetSendingOptionsCommand === "function");
assert(typeof PutConfigurationSetTrackingOptionsCommand === "function");
assert(typeof PutDedicatedIpInPoolCommand === "function");
assert(typeof PutDedicatedIpWarmupAttributesCommand === "function");
assert(typeof PutDeliverabilityDashboardOptionCommand === "function");
assert(typeof PutEmailIdentityDkimAttributesCommand === "function");
assert(typeof PutEmailIdentityFeedbackAttributesCommand === "function");
assert(typeof PutEmailIdentityMailFromAttributesCommand === "function");
assert(typeof SendEmailCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateConfigurationSetEventDestinationCommand === "function");
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
assert(AlreadyExistsException.prototype instanceof PinpointEmailServiceException);
assert(BadRequestException.prototype instanceof PinpointEmailServiceException);
assert(ConcurrentModificationException.prototype instanceof PinpointEmailServiceException);
assert(LimitExceededException.prototype instanceof PinpointEmailServiceException);
assert(MailFromDomainNotVerifiedException.prototype instanceof PinpointEmailServiceException);
assert(MessageRejected.prototype instanceof PinpointEmailServiceException);
assert(NotFoundException.prototype instanceof PinpointEmailServiceException);
assert(SendingPausedException.prototype instanceof PinpointEmailServiceException);
assert(TooManyRequestsException.prototype instanceof PinpointEmailServiceException);
assert(PinpointEmailServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetDedicatedIps === "function");
assert(typeof paginateListConfigurationSets === "function");
assert(typeof paginateListDedicatedIpPools === "function");
assert(typeof paginateListDeliverabilityTestReports === "function");
assert(typeof paginateListDomainDeliverabilityCampaigns === "function");
assert(typeof paginateListEmailIdentities === "function");
console.log(`PinpointEmail index test passed.`);
