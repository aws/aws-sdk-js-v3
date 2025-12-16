import {
  AccountSendingPausedException,
  AccountSendingPausedException$,
  AddHeaderAction$,
  AlreadyExistsException,
  AlreadyExistsException$,
  BehaviorOnMXFailure,
  Body$,
  BounceAction$,
  BounceType,
  BouncedRecipientInfo$,
  BulkEmailDestination$,
  BulkEmailDestinationStatus$,
  BulkEmailStatus,
  CannotDeleteException,
  CannotDeleteException$,
  CloneReceiptRuleSet$,
  CloneReceiptRuleSetCommand,
  CloneReceiptRuleSetRequest$,
  CloneReceiptRuleSetResponse$,
  CloudWatchDestination$,
  CloudWatchDimensionConfiguration$,
  ConfigurationSet$,
  ConfigurationSetAlreadyExistsException,
  ConfigurationSetAlreadyExistsException$,
  ConfigurationSetAttribute,
  ConfigurationSetDoesNotExistException,
  ConfigurationSetDoesNotExistException$,
  ConfigurationSetSendingPausedException,
  ConfigurationSetSendingPausedException$,
  ConnectAction$,
  Content$,
  CreateConfigurationSet$,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestination$,
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetEventDestinationRequest$,
  CreateConfigurationSetEventDestinationResponse$,
  CreateConfigurationSetRequest$,
  CreateConfigurationSetResponse$,
  CreateConfigurationSetTrackingOptions$,
  CreateConfigurationSetTrackingOptionsCommand,
  CreateConfigurationSetTrackingOptionsRequest$,
  CreateConfigurationSetTrackingOptionsResponse$,
  CreateCustomVerificationEmailTemplate$,
  CreateCustomVerificationEmailTemplateCommand,
  CreateCustomVerificationEmailTemplateRequest$,
  CreateReceiptFilter$,
  CreateReceiptFilterCommand,
  CreateReceiptFilterRequest$,
  CreateReceiptFilterResponse$,
  CreateReceiptRule$,
  CreateReceiptRuleCommand,
  CreateReceiptRuleRequest$,
  CreateReceiptRuleResponse$,
  CreateReceiptRuleSet$,
  CreateReceiptRuleSetCommand,
  CreateReceiptRuleSetRequest$,
  CreateReceiptRuleSetResponse$,
  CreateTemplate$,
  CreateTemplateCommand,
  CreateTemplateRequest$,
  CreateTemplateResponse$,
  CustomMailFromStatus,
  CustomVerificationEmailInvalidContentException,
  CustomVerificationEmailInvalidContentException$,
  CustomVerificationEmailTemplate$,
  CustomVerificationEmailTemplateAlreadyExistsException,
  CustomVerificationEmailTemplateAlreadyExistsException$,
  CustomVerificationEmailTemplateDoesNotExistException,
  CustomVerificationEmailTemplateDoesNotExistException$,
  DeleteConfigurationSet$,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestination$,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetEventDestinationRequest$,
  DeleteConfigurationSetEventDestinationResponse$,
  DeleteConfigurationSetRequest$,
  DeleteConfigurationSetResponse$,
  DeleteConfigurationSetTrackingOptions$,
  DeleteConfigurationSetTrackingOptionsCommand,
  DeleteConfigurationSetTrackingOptionsRequest$,
  DeleteConfigurationSetTrackingOptionsResponse$,
  DeleteCustomVerificationEmailTemplate$,
  DeleteCustomVerificationEmailTemplateCommand,
  DeleteCustomVerificationEmailTemplateRequest$,
  DeleteIdentity$,
  DeleteIdentityCommand,
  DeleteIdentityPolicy$,
  DeleteIdentityPolicyCommand,
  DeleteIdentityPolicyRequest$,
  DeleteIdentityPolicyResponse$,
  DeleteIdentityRequest$,
  DeleteIdentityResponse$,
  DeleteReceiptFilter$,
  DeleteReceiptFilterCommand,
  DeleteReceiptFilterRequest$,
  DeleteReceiptFilterResponse$,
  DeleteReceiptRule$,
  DeleteReceiptRuleCommand,
  DeleteReceiptRuleRequest$,
  DeleteReceiptRuleResponse$,
  DeleteReceiptRuleSet$,
  DeleteReceiptRuleSetCommand,
  DeleteReceiptRuleSetRequest$,
  DeleteReceiptRuleSetResponse$,
  DeleteTemplate$,
  DeleteTemplateCommand,
  DeleteTemplateRequest$,
  DeleteTemplateResponse$,
  DeleteVerifiedEmailAddress$,
  DeleteVerifiedEmailAddressCommand,
  DeleteVerifiedEmailAddressRequest$,
  DeliveryOptions$,
  DescribeActiveReceiptRuleSet$,
  DescribeActiveReceiptRuleSetCommand,
  DescribeActiveReceiptRuleSetRequest$,
  DescribeActiveReceiptRuleSetResponse$,
  DescribeConfigurationSet$,
  DescribeConfigurationSetCommand,
  DescribeConfigurationSetRequest$,
  DescribeConfigurationSetResponse$,
  DescribeReceiptRule$,
  DescribeReceiptRuleCommand,
  DescribeReceiptRuleRequest$,
  DescribeReceiptRuleResponse$,
  DescribeReceiptRuleSet$,
  DescribeReceiptRuleSetCommand,
  DescribeReceiptRuleSetRequest$,
  DescribeReceiptRuleSetResponse$,
  Destination$,
  DimensionValueSource,
  DsnAction,
  EventDestination$,
  EventDestinationAlreadyExistsException,
  EventDestinationAlreadyExistsException$,
  EventDestinationDoesNotExistException,
  EventDestinationDoesNotExistException$,
  EventType,
  ExtensionField$,
  FromEmailAddressNotVerifiedException,
  FromEmailAddressNotVerifiedException$,
  GetAccountSendingEnabled$,
  GetAccountSendingEnabledCommand,
  GetAccountSendingEnabledResponse$,
  GetCustomVerificationEmailTemplate$,
  GetCustomVerificationEmailTemplateCommand,
  GetCustomVerificationEmailTemplateRequest$,
  GetCustomVerificationEmailTemplateResponse$,
  GetIdentityDkimAttributes$,
  GetIdentityDkimAttributesCommand,
  GetIdentityDkimAttributesRequest$,
  GetIdentityDkimAttributesResponse$,
  GetIdentityMailFromDomainAttributes$,
  GetIdentityMailFromDomainAttributesCommand,
  GetIdentityMailFromDomainAttributesRequest$,
  GetIdentityMailFromDomainAttributesResponse$,
  GetIdentityNotificationAttributes$,
  GetIdentityNotificationAttributesCommand,
  GetIdentityNotificationAttributesRequest$,
  GetIdentityNotificationAttributesResponse$,
  GetIdentityPolicies$,
  GetIdentityPoliciesCommand,
  GetIdentityPoliciesRequest$,
  GetIdentityPoliciesResponse$,
  GetIdentityVerificationAttributes$,
  GetIdentityVerificationAttributesCommand,
  GetIdentityVerificationAttributesRequest$,
  GetIdentityVerificationAttributesResponse$,
  GetSendQuota$,
  GetSendQuotaCommand,
  GetSendQuotaResponse$,
  GetSendStatistics$,
  GetSendStatisticsCommand,
  GetSendStatisticsResponse$,
  GetTemplate$,
  GetTemplateCommand,
  GetTemplateRequest$,
  GetTemplateResponse$,
  IdentityDkimAttributes$,
  IdentityMailFromDomainAttributes$,
  IdentityNotificationAttributes$,
  IdentityType,
  IdentityVerificationAttributes$,
  InvalidCloudWatchDestinationException,
  InvalidCloudWatchDestinationException$,
  InvalidConfigurationSetException,
  InvalidConfigurationSetException$,
  InvalidDeliveryOptionsException,
  InvalidDeliveryOptionsException$,
  InvalidFirehoseDestinationException,
  InvalidFirehoseDestinationException$,
  InvalidLambdaFunctionException,
  InvalidLambdaFunctionException$,
  InvalidPolicyException,
  InvalidPolicyException$,
  InvalidRenderingParameterException,
  InvalidRenderingParameterException$,
  InvalidS3ConfigurationException,
  InvalidS3ConfigurationException$,
  InvalidSNSDestinationException,
  InvalidSNSDestinationException$,
  InvalidSnsTopicException,
  InvalidSnsTopicException$,
  InvalidTemplateException,
  InvalidTemplateException$,
  InvalidTrackingOptionsException,
  InvalidTrackingOptionsException$,
  InvocationType,
  KinesisFirehoseDestination$,
  LambdaAction$,
  LimitExceededException,
  LimitExceededException$,
  ListConfigurationSets$,
  ListConfigurationSetsCommand,
  ListConfigurationSetsRequest$,
  ListConfigurationSetsResponse$,
  ListCustomVerificationEmailTemplates$,
  ListCustomVerificationEmailTemplatesCommand,
  ListCustomVerificationEmailTemplatesRequest$,
  ListCustomVerificationEmailTemplatesResponse$,
  ListIdentities$,
  ListIdentitiesCommand,
  ListIdentitiesRequest$,
  ListIdentitiesResponse$,
  ListIdentityPolicies$,
  ListIdentityPoliciesCommand,
  ListIdentityPoliciesRequest$,
  ListIdentityPoliciesResponse$,
  ListReceiptFilters$,
  ListReceiptFiltersCommand,
  ListReceiptFiltersRequest$,
  ListReceiptFiltersResponse$,
  ListReceiptRuleSets$,
  ListReceiptRuleSetsCommand,
  ListReceiptRuleSetsRequest$,
  ListReceiptRuleSetsResponse$,
  ListTemplates$,
  ListTemplatesCommand,
  ListTemplatesRequest$,
  ListTemplatesResponse$,
  ListVerifiedEmailAddresses$,
  ListVerifiedEmailAddressesCommand,
  ListVerifiedEmailAddressesResponse$,
  MailFromDomainNotVerifiedException,
  MailFromDomainNotVerifiedException$,
  Message$,
  MessageDsn$,
  MessageRejected,
  MessageRejected$,
  MessageTag$,
  MissingRenderingAttributeException,
  MissingRenderingAttributeException$,
  NotificationType,
  ProductionAccessNotGrantedException,
  ProductionAccessNotGrantedException$,
  PutConfigurationSetDeliveryOptions$,
  PutConfigurationSetDeliveryOptionsCommand,
  PutConfigurationSetDeliveryOptionsRequest$,
  PutConfigurationSetDeliveryOptionsResponse$,
  PutIdentityPolicy$,
  PutIdentityPolicyCommand,
  PutIdentityPolicyRequest$,
  PutIdentityPolicyResponse$,
  RawMessage$,
  ReceiptAction$,
  ReceiptFilter$,
  ReceiptFilterPolicy,
  ReceiptIpFilter$,
  ReceiptRule$,
  ReceiptRuleSetMetadata$,
  RecipientDsnFields$,
  ReorderReceiptRuleSet$,
  ReorderReceiptRuleSetCommand,
  ReorderReceiptRuleSetRequest$,
  ReorderReceiptRuleSetResponse$,
  ReputationOptions$,
  RuleDoesNotExistException,
  RuleDoesNotExistException$,
  RuleSetDoesNotExistException,
  RuleSetDoesNotExistException$,
  S3Action$,
  SES,
  SESClient,
  SESServiceException,
  SNSAction$,
  SNSActionEncoding,
  SNSDestination$,
  SendBounce$,
  SendBounceCommand,
  SendBounceRequest$,
  SendBounceResponse$,
  SendBulkTemplatedEmail$,
  SendBulkTemplatedEmailCommand,
  SendBulkTemplatedEmailRequest$,
  SendBulkTemplatedEmailResponse$,
  SendCustomVerificationEmail$,
  SendCustomVerificationEmailCommand,
  SendCustomVerificationEmailRequest$,
  SendCustomVerificationEmailResponse$,
  SendDataPoint$,
  SendEmail$,
  SendEmailCommand,
  SendEmailRequest$,
  SendEmailResponse$,
  SendRawEmail$,
  SendRawEmailCommand,
  SendRawEmailRequest$,
  SendRawEmailResponse$,
  SendTemplatedEmail$,
  SendTemplatedEmailCommand,
  SendTemplatedEmailRequest$,
  SendTemplatedEmailResponse$,
  SetActiveReceiptRuleSet$,
  SetActiveReceiptRuleSetCommand,
  SetActiveReceiptRuleSetRequest$,
  SetActiveReceiptRuleSetResponse$,
  SetIdentityDkimEnabled$,
  SetIdentityDkimEnabledCommand,
  SetIdentityDkimEnabledRequest$,
  SetIdentityDkimEnabledResponse$,
  SetIdentityFeedbackForwardingEnabled$,
  SetIdentityFeedbackForwardingEnabledCommand,
  SetIdentityFeedbackForwardingEnabledRequest$,
  SetIdentityFeedbackForwardingEnabledResponse$,
  SetIdentityHeadersInNotificationsEnabled$,
  SetIdentityHeadersInNotificationsEnabledCommand,
  SetIdentityHeadersInNotificationsEnabledRequest$,
  SetIdentityHeadersInNotificationsEnabledResponse$,
  SetIdentityMailFromDomain$,
  SetIdentityMailFromDomainCommand,
  SetIdentityMailFromDomainRequest$,
  SetIdentityMailFromDomainResponse$,
  SetIdentityNotificationTopic$,
  SetIdentityNotificationTopicCommand,
  SetIdentityNotificationTopicRequest$,
  SetIdentityNotificationTopicResponse$,
  SetReceiptRulePosition$,
  SetReceiptRulePositionCommand,
  SetReceiptRulePositionRequest$,
  SetReceiptRulePositionResponse$,
  StopAction$,
  StopScope,
  Template$,
  TemplateDoesNotExistException,
  TemplateDoesNotExistException$,
  TemplateMetadata$,
  TestRenderTemplate$,
  TestRenderTemplateCommand,
  TestRenderTemplateRequest$,
  TestRenderTemplateResponse$,
  TlsPolicy,
  TrackingOptions$,
  TrackingOptionsAlreadyExistsException,
  TrackingOptionsAlreadyExistsException$,
  TrackingOptionsDoesNotExistException,
  TrackingOptionsDoesNotExistException$,
  UpdateAccountSendingEnabled$,
  UpdateAccountSendingEnabledCommand,
  UpdateAccountSendingEnabledRequest$,
  UpdateConfigurationSetEventDestination$,
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetEventDestinationRequest$,
  UpdateConfigurationSetEventDestinationResponse$,
  UpdateConfigurationSetReputationMetricsEnabled$,
  UpdateConfigurationSetReputationMetricsEnabledCommand,
  UpdateConfigurationSetReputationMetricsEnabledRequest$,
  UpdateConfigurationSetSendingEnabled$,
  UpdateConfigurationSetSendingEnabledCommand,
  UpdateConfigurationSetSendingEnabledRequest$,
  UpdateConfigurationSetTrackingOptions$,
  UpdateConfigurationSetTrackingOptionsCommand,
  UpdateConfigurationSetTrackingOptionsRequest$,
  UpdateConfigurationSetTrackingOptionsResponse$,
  UpdateCustomVerificationEmailTemplate$,
  UpdateCustomVerificationEmailTemplateCommand,
  UpdateCustomVerificationEmailTemplateRequest$,
  UpdateReceiptRule$,
  UpdateReceiptRuleCommand,
  UpdateReceiptRuleRequest$,
  UpdateReceiptRuleResponse$,
  UpdateTemplate$,
  UpdateTemplateCommand,
  UpdateTemplateRequest$,
  UpdateTemplateResponse$,
  VerificationStatus,
  VerifyDomainDkim$,
  VerifyDomainDkimCommand,
  VerifyDomainDkimRequest$,
  VerifyDomainDkimResponse$,
  VerifyDomainIdentity$,
  VerifyDomainIdentityCommand,
  VerifyDomainIdentityRequest$,
  VerifyDomainIdentityResponse$,
  VerifyEmailAddress$,
  VerifyEmailAddressCommand,
  VerifyEmailAddressRequest$,
  VerifyEmailIdentity$,
  VerifyEmailIdentityCommand,
  VerifyEmailIdentityRequest$,
  VerifyEmailIdentityResponse$,
  WorkmailAction$,
  paginateListCustomVerificationEmailTemplates,
  paginateListIdentities,
  waitForIdentityExists,
  waitUntilIdentityExists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SESClient === "function");
assert(typeof SES === "function");
// commands
assert(typeof CloneReceiptRuleSetCommand === "function");
assert(typeof CloneReceiptRuleSet$ === "object");
assert(typeof CreateConfigurationSetCommand === "function");
assert(typeof CreateConfigurationSet$ === "object");
assert(typeof CreateConfigurationSetEventDestinationCommand === "function");
assert(typeof CreateConfigurationSetEventDestination$ === "object");
assert(typeof CreateConfigurationSetTrackingOptionsCommand === "function");
assert(typeof CreateConfigurationSetTrackingOptions$ === "object");
assert(typeof CreateCustomVerificationEmailTemplateCommand === "function");
assert(typeof CreateCustomVerificationEmailTemplate$ === "object");
assert(typeof CreateReceiptFilterCommand === "function");
assert(typeof CreateReceiptFilter$ === "object");
assert(typeof CreateReceiptRuleCommand === "function");
assert(typeof CreateReceiptRule$ === "object");
assert(typeof CreateReceiptRuleSetCommand === "function");
assert(typeof CreateReceiptRuleSet$ === "object");
assert(typeof CreateTemplateCommand === "function");
assert(typeof CreateTemplate$ === "object");
assert(typeof DeleteConfigurationSetCommand === "function");
assert(typeof DeleteConfigurationSet$ === "object");
assert(typeof DeleteConfigurationSetEventDestinationCommand === "function");
assert(typeof DeleteConfigurationSetEventDestination$ === "object");
assert(typeof DeleteConfigurationSetTrackingOptionsCommand === "function");
assert(typeof DeleteConfigurationSetTrackingOptions$ === "object");
assert(typeof DeleteCustomVerificationEmailTemplateCommand === "function");
assert(typeof DeleteCustomVerificationEmailTemplate$ === "object");
assert(typeof DeleteIdentityCommand === "function");
assert(typeof DeleteIdentity$ === "object");
assert(typeof DeleteIdentityPolicyCommand === "function");
assert(typeof DeleteIdentityPolicy$ === "object");
assert(typeof DeleteReceiptFilterCommand === "function");
assert(typeof DeleteReceiptFilter$ === "object");
assert(typeof DeleteReceiptRuleCommand === "function");
assert(typeof DeleteReceiptRule$ === "object");
assert(typeof DeleteReceiptRuleSetCommand === "function");
assert(typeof DeleteReceiptRuleSet$ === "object");
assert(typeof DeleteTemplateCommand === "function");
assert(typeof DeleteTemplate$ === "object");
assert(typeof DeleteVerifiedEmailAddressCommand === "function");
assert(typeof DeleteVerifiedEmailAddress$ === "object");
assert(typeof DescribeActiveReceiptRuleSetCommand === "function");
assert(typeof DescribeActiveReceiptRuleSet$ === "object");
assert(typeof DescribeConfigurationSetCommand === "function");
assert(typeof DescribeConfigurationSet$ === "object");
assert(typeof DescribeReceiptRuleCommand === "function");
assert(typeof DescribeReceiptRule$ === "object");
assert(typeof DescribeReceiptRuleSetCommand === "function");
assert(typeof DescribeReceiptRuleSet$ === "object");
assert(typeof GetAccountSendingEnabledCommand === "function");
assert(typeof GetAccountSendingEnabled$ === "object");
assert(typeof GetCustomVerificationEmailTemplateCommand === "function");
assert(typeof GetCustomVerificationEmailTemplate$ === "object");
assert(typeof GetIdentityDkimAttributesCommand === "function");
assert(typeof GetIdentityDkimAttributes$ === "object");
assert(typeof GetIdentityMailFromDomainAttributesCommand === "function");
assert(typeof GetIdentityMailFromDomainAttributes$ === "object");
assert(typeof GetIdentityNotificationAttributesCommand === "function");
assert(typeof GetIdentityNotificationAttributes$ === "object");
assert(typeof GetIdentityPoliciesCommand === "function");
assert(typeof GetIdentityPolicies$ === "object");
assert(typeof GetIdentityVerificationAttributesCommand === "function");
assert(typeof GetIdentityVerificationAttributes$ === "object");
assert(typeof GetSendQuotaCommand === "function");
assert(typeof GetSendQuota$ === "object");
assert(typeof GetSendStatisticsCommand === "function");
assert(typeof GetSendStatistics$ === "object");
assert(typeof GetTemplateCommand === "function");
assert(typeof GetTemplate$ === "object");
assert(typeof ListConfigurationSetsCommand === "function");
assert(typeof ListConfigurationSets$ === "object");
assert(typeof ListCustomVerificationEmailTemplatesCommand === "function");
assert(typeof ListCustomVerificationEmailTemplates$ === "object");
assert(typeof ListIdentitiesCommand === "function");
assert(typeof ListIdentities$ === "object");
assert(typeof ListIdentityPoliciesCommand === "function");
assert(typeof ListIdentityPolicies$ === "object");
assert(typeof ListReceiptFiltersCommand === "function");
assert(typeof ListReceiptFilters$ === "object");
assert(typeof ListReceiptRuleSetsCommand === "function");
assert(typeof ListReceiptRuleSets$ === "object");
assert(typeof ListTemplatesCommand === "function");
assert(typeof ListTemplates$ === "object");
assert(typeof ListVerifiedEmailAddressesCommand === "function");
assert(typeof ListVerifiedEmailAddresses$ === "object");
assert(typeof PutConfigurationSetDeliveryOptionsCommand === "function");
assert(typeof PutConfigurationSetDeliveryOptions$ === "object");
assert(typeof PutIdentityPolicyCommand === "function");
assert(typeof PutIdentityPolicy$ === "object");
assert(typeof ReorderReceiptRuleSetCommand === "function");
assert(typeof ReorderReceiptRuleSet$ === "object");
assert(typeof SendBounceCommand === "function");
assert(typeof SendBounce$ === "object");
assert(typeof SendBulkTemplatedEmailCommand === "function");
assert(typeof SendBulkTemplatedEmail$ === "object");
assert(typeof SendCustomVerificationEmailCommand === "function");
assert(typeof SendCustomVerificationEmail$ === "object");
assert(typeof SendEmailCommand === "function");
assert(typeof SendEmail$ === "object");
assert(typeof SendRawEmailCommand === "function");
assert(typeof SendRawEmail$ === "object");
assert(typeof SendTemplatedEmailCommand === "function");
assert(typeof SendTemplatedEmail$ === "object");
assert(typeof SetActiveReceiptRuleSetCommand === "function");
assert(typeof SetActiveReceiptRuleSet$ === "object");
assert(typeof SetIdentityDkimEnabledCommand === "function");
assert(typeof SetIdentityDkimEnabled$ === "object");
assert(typeof SetIdentityFeedbackForwardingEnabledCommand === "function");
assert(typeof SetIdentityFeedbackForwardingEnabled$ === "object");
assert(typeof SetIdentityHeadersInNotificationsEnabledCommand === "function");
assert(typeof SetIdentityHeadersInNotificationsEnabled$ === "object");
assert(typeof SetIdentityMailFromDomainCommand === "function");
assert(typeof SetIdentityMailFromDomain$ === "object");
assert(typeof SetIdentityNotificationTopicCommand === "function");
assert(typeof SetIdentityNotificationTopic$ === "object");
assert(typeof SetReceiptRulePositionCommand === "function");
assert(typeof SetReceiptRulePosition$ === "object");
assert(typeof TestRenderTemplateCommand === "function");
assert(typeof TestRenderTemplate$ === "object");
assert(typeof UpdateAccountSendingEnabledCommand === "function");
assert(typeof UpdateAccountSendingEnabled$ === "object");
assert(typeof UpdateConfigurationSetEventDestinationCommand === "function");
assert(typeof UpdateConfigurationSetEventDestination$ === "object");
assert(typeof UpdateConfigurationSetReputationMetricsEnabledCommand === "function");
assert(typeof UpdateConfigurationSetReputationMetricsEnabled$ === "object");
assert(typeof UpdateConfigurationSetSendingEnabledCommand === "function");
assert(typeof UpdateConfigurationSetSendingEnabled$ === "object");
assert(typeof UpdateConfigurationSetTrackingOptionsCommand === "function");
assert(typeof UpdateConfigurationSetTrackingOptions$ === "object");
assert(typeof UpdateCustomVerificationEmailTemplateCommand === "function");
assert(typeof UpdateCustomVerificationEmailTemplate$ === "object");
assert(typeof UpdateReceiptRuleCommand === "function");
assert(typeof UpdateReceiptRule$ === "object");
assert(typeof UpdateTemplateCommand === "function");
assert(typeof UpdateTemplate$ === "object");
assert(typeof VerifyDomainDkimCommand === "function");
assert(typeof VerifyDomainDkim$ === "object");
assert(typeof VerifyDomainIdentityCommand === "function");
assert(typeof VerifyDomainIdentity$ === "object");
assert(typeof VerifyEmailAddressCommand === "function");
assert(typeof VerifyEmailAddress$ === "object");
assert(typeof VerifyEmailIdentityCommand === "function");
assert(typeof VerifyEmailIdentity$ === "object");
// structural schemas
assert(typeof AddHeaderAction$ === "object");
assert(typeof Body$ === "object");
assert(typeof BounceAction$ === "object");
assert(typeof BouncedRecipientInfo$ === "object");
assert(typeof BulkEmailDestination$ === "object");
assert(typeof BulkEmailDestinationStatus$ === "object");
assert(typeof CloneReceiptRuleSetRequest$ === "object");
assert(typeof CloneReceiptRuleSetResponse$ === "object");
assert(typeof CloudWatchDestination$ === "object");
assert(typeof CloudWatchDimensionConfiguration$ === "object");
assert(typeof ConfigurationSet$ === "object");
assert(typeof ConnectAction$ === "object");
assert(typeof Content$ === "object");
assert(typeof CreateConfigurationSetEventDestinationRequest$ === "object");
assert(typeof CreateConfigurationSetEventDestinationResponse$ === "object");
assert(typeof CreateConfigurationSetRequest$ === "object");
assert(typeof CreateConfigurationSetResponse$ === "object");
assert(typeof CreateConfigurationSetTrackingOptionsRequest$ === "object");
assert(typeof CreateConfigurationSetTrackingOptionsResponse$ === "object");
assert(typeof CreateCustomVerificationEmailTemplateRequest$ === "object");
assert(typeof CreateReceiptFilterRequest$ === "object");
assert(typeof CreateReceiptFilterResponse$ === "object");
assert(typeof CreateReceiptRuleRequest$ === "object");
assert(typeof CreateReceiptRuleResponse$ === "object");
assert(typeof CreateReceiptRuleSetRequest$ === "object");
assert(typeof CreateReceiptRuleSetResponse$ === "object");
assert(typeof CreateTemplateRequest$ === "object");
assert(typeof CreateTemplateResponse$ === "object");
assert(typeof CustomVerificationEmailTemplate$ === "object");
assert(typeof DeleteConfigurationSetEventDestinationRequest$ === "object");
assert(typeof DeleteConfigurationSetEventDestinationResponse$ === "object");
assert(typeof DeleteConfigurationSetRequest$ === "object");
assert(typeof DeleteConfigurationSetResponse$ === "object");
assert(typeof DeleteConfigurationSetTrackingOptionsRequest$ === "object");
assert(typeof DeleteConfigurationSetTrackingOptionsResponse$ === "object");
assert(typeof DeleteCustomVerificationEmailTemplateRequest$ === "object");
assert(typeof DeleteIdentityPolicyRequest$ === "object");
assert(typeof DeleteIdentityPolicyResponse$ === "object");
assert(typeof DeleteIdentityRequest$ === "object");
assert(typeof DeleteIdentityResponse$ === "object");
assert(typeof DeleteReceiptFilterRequest$ === "object");
assert(typeof DeleteReceiptFilterResponse$ === "object");
assert(typeof DeleteReceiptRuleRequest$ === "object");
assert(typeof DeleteReceiptRuleResponse$ === "object");
assert(typeof DeleteReceiptRuleSetRequest$ === "object");
assert(typeof DeleteReceiptRuleSetResponse$ === "object");
assert(typeof DeleteTemplateRequest$ === "object");
assert(typeof DeleteTemplateResponse$ === "object");
assert(typeof DeleteVerifiedEmailAddressRequest$ === "object");
assert(typeof DeliveryOptions$ === "object");
assert(typeof DescribeActiveReceiptRuleSetRequest$ === "object");
assert(typeof DescribeActiveReceiptRuleSetResponse$ === "object");
assert(typeof DescribeConfigurationSetRequest$ === "object");
assert(typeof DescribeConfigurationSetResponse$ === "object");
assert(typeof DescribeReceiptRuleRequest$ === "object");
assert(typeof DescribeReceiptRuleResponse$ === "object");
assert(typeof DescribeReceiptRuleSetRequest$ === "object");
assert(typeof DescribeReceiptRuleSetResponse$ === "object");
assert(typeof Destination$ === "object");
assert(typeof EventDestination$ === "object");
assert(typeof ExtensionField$ === "object");
assert(typeof GetAccountSendingEnabledResponse$ === "object");
assert(typeof GetCustomVerificationEmailTemplateRequest$ === "object");
assert(typeof GetCustomVerificationEmailTemplateResponse$ === "object");
assert(typeof GetIdentityDkimAttributesRequest$ === "object");
assert(typeof GetIdentityDkimAttributesResponse$ === "object");
assert(typeof GetIdentityMailFromDomainAttributesRequest$ === "object");
assert(typeof GetIdentityMailFromDomainAttributesResponse$ === "object");
assert(typeof GetIdentityNotificationAttributesRequest$ === "object");
assert(typeof GetIdentityNotificationAttributesResponse$ === "object");
assert(typeof GetIdentityPoliciesRequest$ === "object");
assert(typeof GetIdentityPoliciesResponse$ === "object");
assert(typeof GetIdentityVerificationAttributesRequest$ === "object");
assert(typeof GetIdentityVerificationAttributesResponse$ === "object");
assert(typeof GetSendQuotaResponse$ === "object");
assert(typeof GetSendStatisticsResponse$ === "object");
assert(typeof GetTemplateRequest$ === "object");
assert(typeof GetTemplateResponse$ === "object");
assert(typeof IdentityDkimAttributes$ === "object");
assert(typeof IdentityMailFromDomainAttributes$ === "object");
assert(typeof IdentityNotificationAttributes$ === "object");
assert(typeof IdentityVerificationAttributes$ === "object");
assert(typeof KinesisFirehoseDestination$ === "object");
assert(typeof LambdaAction$ === "object");
assert(typeof ListConfigurationSetsRequest$ === "object");
assert(typeof ListConfigurationSetsResponse$ === "object");
assert(typeof ListCustomVerificationEmailTemplatesRequest$ === "object");
assert(typeof ListCustomVerificationEmailTemplatesResponse$ === "object");
assert(typeof ListIdentitiesRequest$ === "object");
assert(typeof ListIdentitiesResponse$ === "object");
assert(typeof ListIdentityPoliciesRequest$ === "object");
assert(typeof ListIdentityPoliciesResponse$ === "object");
assert(typeof ListReceiptFiltersRequest$ === "object");
assert(typeof ListReceiptFiltersResponse$ === "object");
assert(typeof ListReceiptRuleSetsRequest$ === "object");
assert(typeof ListReceiptRuleSetsResponse$ === "object");
assert(typeof ListTemplatesRequest$ === "object");
assert(typeof ListTemplatesResponse$ === "object");
assert(typeof ListVerifiedEmailAddressesResponse$ === "object");
assert(typeof Message$ === "object");
assert(typeof MessageDsn$ === "object");
assert(typeof MessageTag$ === "object");
assert(typeof PutConfigurationSetDeliveryOptionsRequest$ === "object");
assert(typeof PutConfigurationSetDeliveryOptionsResponse$ === "object");
assert(typeof PutIdentityPolicyRequest$ === "object");
assert(typeof PutIdentityPolicyResponse$ === "object");
assert(typeof RawMessage$ === "object");
assert(typeof ReceiptAction$ === "object");
assert(typeof ReceiptFilter$ === "object");
assert(typeof ReceiptIpFilter$ === "object");
assert(typeof ReceiptRule$ === "object");
assert(typeof ReceiptRuleSetMetadata$ === "object");
assert(typeof RecipientDsnFields$ === "object");
assert(typeof ReorderReceiptRuleSetRequest$ === "object");
assert(typeof ReorderReceiptRuleSetResponse$ === "object");
assert(typeof ReputationOptions$ === "object");
assert(typeof S3Action$ === "object");
assert(typeof SendBounceRequest$ === "object");
assert(typeof SendBounceResponse$ === "object");
assert(typeof SendBulkTemplatedEmailRequest$ === "object");
assert(typeof SendBulkTemplatedEmailResponse$ === "object");
assert(typeof SendCustomVerificationEmailRequest$ === "object");
assert(typeof SendCustomVerificationEmailResponse$ === "object");
assert(typeof SendDataPoint$ === "object");
assert(typeof SendEmailRequest$ === "object");
assert(typeof SendEmailResponse$ === "object");
assert(typeof SendRawEmailRequest$ === "object");
assert(typeof SendRawEmailResponse$ === "object");
assert(typeof SendTemplatedEmailRequest$ === "object");
assert(typeof SendTemplatedEmailResponse$ === "object");
assert(typeof SetActiveReceiptRuleSetRequest$ === "object");
assert(typeof SetActiveReceiptRuleSetResponse$ === "object");
assert(typeof SetIdentityDkimEnabledRequest$ === "object");
assert(typeof SetIdentityDkimEnabledResponse$ === "object");
assert(typeof SetIdentityFeedbackForwardingEnabledRequest$ === "object");
assert(typeof SetIdentityFeedbackForwardingEnabledResponse$ === "object");
assert(typeof SetIdentityHeadersInNotificationsEnabledRequest$ === "object");
assert(typeof SetIdentityHeadersInNotificationsEnabledResponse$ === "object");
assert(typeof SetIdentityMailFromDomainRequest$ === "object");
assert(typeof SetIdentityMailFromDomainResponse$ === "object");
assert(typeof SetIdentityNotificationTopicRequest$ === "object");
assert(typeof SetIdentityNotificationTopicResponse$ === "object");
assert(typeof SetReceiptRulePositionRequest$ === "object");
assert(typeof SetReceiptRulePositionResponse$ === "object");
assert(typeof SNSAction$ === "object");
assert(typeof SNSDestination$ === "object");
assert(typeof StopAction$ === "object");
assert(typeof Template$ === "object");
assert(typeof TemplateMetadata$ === "object");
assert(typeof TestRenderTemplateRequest$ === "object");
assert(typeof TestRenderTemplateResponse$ === "object");
assert(typeof TrackingOptions$ === "object");
assert(typeof UpdateAccountSendingEnabledRequest$ === "object");
assert(typeof UpdateConfigurationSetEventDestinationRequest$ === "object");
assert(typeof UpdateConfigurationSetEventDestinationResponse$ === "object");
assert(typeof UpdateConfigurationSetReputationMetricsEnabledRequest$ === "object");
assert(typeof UpdateConfigurationSetSendingEnabledRequest$ === "object");
assert(typeof UpdateConfigurationSetTrackingOptionsRequest$ === "object");
assert(typeof UpdateConfigurationSetTrackingOptionsResponse$ === "object");
assert(typeof UpdateCustomVerificationEmailTemplateRequest$ === "object");
assert(typeof UpdateReceiptRuleRequest$ === "object");
assert(typeof UpdateReceiptRuleResponse$ === "object");
assert(typeof UpdateTemplateRequest$ === "object");
assert(typeof UpdateTemplateResponse$ === "object");
assert(typeof VerifyDomainDkimRequest$ === "object");
assert(typeof VerifyDomainDkimResponse$ === "object");
assert(typeof VerifyDomainIdentityRequest$ === "object");
assert(typeof VerifyDomainIdentityResponse$ === "object");
assert(typeof VerifyEmailAddressRequest$ === "object");
assert(typeof VerifyEmailIdentityRequest$ === "object");
assert(typeof VerifyEmailIdentityResponse$ === "object");
assert(typeof WorkmailAction$ === "object");
// enums
assert(typeof BehaviorOnMXFailure === "object");
assert(typeof BounceType === "object");
assert(typeof BulkEmailStatus === "object");
assert(typeof ConfigurationSetAttribute === "object");
assert(typeof CustomMailFromStatus === "object");
assert(typeof DimensionValueSource === "object");
assert(typeof DsnAction === "object");
assert(typeof EventType === "object");
assert(typeof IdentityType === "object");
assert(typeof InvocationType === "object");
assert(typeof NotificationType === "object");
assert(typeof ReceiptFilterPolicy === "object");
assert(typeof SNSActionEncoding === "object");
assert(typeof StopScope === "object");
assert(typeof TlsPolicy === "object");
assert(typeof VerificationStatus === "object");
// errors
assert(AccountSendingPausedException.prototype instanceof SESServiceException);
assert(typeof AccountSendingPausedException$ === "object");
assert(AlreadyExistsException.prototype instanceof SESServiceException);
assert(typeof AlreadyExistsException$ === "object");
assert(CannotDeleteException.prototype instanceof SESServiceException);
assert(typeof CannotDeleteException$ === "object");
assert(ConfigurationSetAlreadyExistsException.prototype instanceof SESServiceException);
assert(typeof ConfigurationSetAlreadyExistsException$ === "object");
assert(ConfigurationSetDoesNotExistException.prototype instanceof SESServiceException);
assert(typeof ConfigurationSetDoesNotExistException$ === "object");
assert(ConfigurationSetSendingPausedException.prototype instanceof SESServiceException);
assert(typeof ConfigurationSetSendingPausedException$ === "object");
assert(CustomVerificationEmailInvalidContentException.prototype instanceof SESServiceException);
assert(typeof CustomVerificationEmailInvalidContentException$ === "object");
assert(CustomVerificationEmailTemplateAlreadyExistsException.prototype instanceof SESServiceException);
assert(typeof CustomVerificationEmailTemplateAlreadyExistsException$ === "object");
assert(CustomVerificationEmailTemplateDoesNotExistException.prototype instanceof SESServiceException);
assert(typeof CustomVerificationEmailTemplateDoesNotExistException$ === "object");
assert(EventDestinationAlreadyExistsException.prototype instanceof SESServiceException);
assert(typeof EventDestinationAlreadyExistsException$ === "object");
assert(EventDestinationDoesNotExistException.prototype instanceof SESServiceException);
assert(typeof EventDestinationDoesNotExistException$ === "object");
assert(FromEmailAddressNotVerifiedException.prototype instanceof SESServiceException);
assert(typeof FromEmailAddressNotVerifiedException$ === "object");
assert(InvalidCloudWatchDestinationException.prototype instanceof SESServiceException);
assert(typeof InvalidCloudWatchDestinationException$ === "object");
assert(InvalidConfigurationSetException.prototype instanceof SESServiceException);
assert(typeof InvalidConfigurationSetException$ === "object");
assert(InvalidDeliveryOptionsException.prototype instanceof SESServiceException);
assert(typeof InvalidDeliveryOptionsException$ === "object");
assert(InvalidFirehoseDestinationException.prototype instanceof SESServiceException);
assert(typeof InvalidFirehoseDestinationException$ === "object");
assert(InvalidLambdaFunctionException.prototype instanceof SESServiceException);
assert(typeof InvalidLambdaFunctionException$ === "object");
assert(InvalidPolicyException.prototype instanceof SESServiceException);
assert(typeof InvalidPolicyException$ === "object");
assert(InvalidRenderingParameterException.prototype instanceof SESServiceException);
assert(typeof InvalidRenderingParameterException$ === "object");
assert(InvalidS3ConfigurationException.prototype instanceof SESServiceException);
assert(typeof InvalidS3ConfigurationException$ === "object");
assert(InvalidSNSDestinationException.prototype instanceof SESServiceException);
assert(typeof InvalidSNSDestinationException$ === "object");
assert(InvalidSnsTopicException.prototype instanceof SESServiceException);
assert(typeof InvalidSnsTopicException$ === "object");
assert(InvalidTemplateException.prototype instanceof SESServiceException);
assert(typeof InvalidTemplateException$ === "object");
assert(InvalidTrackingOptionsException.prototype instanceof SESServiceException);
assert(typeof InvalidTrackingOptionsException$ === "object");
assert(LimitExceededException.prototype instanceof SESServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MailFromDomainNotVerifiedException.prototype instanceof SESServiceException);
assert(typeof MailFromDomainNotVerifiedException$ === "object");
assert(MessageRejected.prototype instanceof SESServiceException);
assert(typeof MessageRejected$ === "object");
assert(MissingRenderingAttributeException.prototype instanceof SESServiceException);
assert(typeof MissingRenderingAttributeException$ === "object");
assert(ProductionAccessNotGrantedException.prototype instanceof SESServiceException);
assert(typeof ProductionAccessNotGrantedException$ === "object");
assert(RuleDoesNotExistException.prototype instanceof SESServiceException);
assert(typeof RuleDoesNotExistException$ === "object");
assert(RuleSetDoesNotExistException.prototype instanceof SESServiceException);
assert(typeof RuleSetDoesNotExistException$ === "object");
assert(TemplateDoesNotExistException.prototype instanceof SESServiceException);
assert(typeof TemplateDoesNotExistException$ === "object");
assert(TrackingOptionsAlreadyExistsException.prototype instanceof SESServiceException);
assert(typeof TrackingOptionsAlreadyExistsException$ === "object");
assert(TrackingOptionsDoesNotExistException.prototype instanceof SESServiceException);
assert(typeof TrackingOptionsDoesNotExistException$ === "object");
assert(SESServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForIdentityExists === "function");
assert(typeof waitUntilIdentityExists === "function");
// paginators
assert(typeof paginateListCustomVerificationEmailTemplates === "function");
assert(typeof paginateListIdentities === "function");
console.log(`SES index test passed.`);
