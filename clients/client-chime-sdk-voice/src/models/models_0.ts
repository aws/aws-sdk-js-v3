// smithy-typescript generated code
import type {
  AlexaSkillStatus,
  CallDistributionType,
  CallingNameStatus,
  CallLegType,
  Capability,
  ContactCenterSystemType,
  ErrorCode,
  GeoMatchLevel,
  LanguageCode,
  NetworkType,
  NotificationTarget,
  NumberSelectionBehavior,
  OrderedPhoneNumberStatus,
  OriginationRouteProtocol,
  PhoneNumberAssociationName,
  PhoneNumberOrderStatus,
  PhoneNumberOrderType,
  PhoneNumberProductType,
  PhoneNumberStatus,
  PhoneNumberType,
  ProxySessionStatus,
  SessionBorderControllerType,
  SipRuleTriggerType,
  VoiceConnectorAwsRegion,
  VoiceConnectorIntegrationType,
} from "./enums";

/**
 * A validated address.
 *
 * @public
 */
export interface Address {
  /**
   * The address street, such as `8th Avenue`.
   *
   * @public
   */
  streetName?: string | undefined;

  /**
   * The address suffix, such as the `N` in `8th Avenue N`.
   *
   * @public
   */
  streetSuffix?: string | undefined;

  /**
   * An address suffix location, such as the `S. Unit A` in `Central Park S. Unit A`.
   *
   * @public
   */
  postDirectional?: string | undefined;

  /**
   * An address prefix location, such as the `N` in `N. Third St.`
   *
   * @public
   */
  preDirectional?: string | undefined;

  /**
   * The numeric portion of an address.
   *
   * @public
   */
  streetNumber?: string | undefined;

  /**
   * The city of an address.
   *
   * @public
   */
  city?: string | undefined;

  /**
   * The state of an address.
   *
   * @public
   */
  state?: string | undefined;

  /**
   * The postal code of an address.
   *
   * @public
   */
  postalCode?: string | undefined;

  /**
   * The zip + 4 or postal code + 4 of an address.
   *
   * @public
   */
  postalCodePlus4?: string | undefined;

  /**
   * The country of an address.
   *
   * @public
   */
  country?: string | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * List of phone numbers, in E.164 format.
   *
   * @public
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * If true, associates the provided phone numbers with the provided Amazon Chime SDK Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.
   *
   * @public
   */
  ForceAssociate?: boolean | undefined;
}

/**
 * If a phone number action fails for one or more of the phone numbers in a request, a list of the failed phone numbers is returned, along with error codes and error messages.
 *
 * @public
 */
export interface PhoneNumberError {
  /**
   * The phone number ID for which the action failed.
   *
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
   *
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  /**
   * The Amazon Chime SDK Voice Connector group ID.
   *
   * @public
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * List of phone numbers, in E.164 format.
   *
   * @public
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * If true, associates the provided phone numbers with the provided Amazon Chime SDK Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.
   *
   * @public
   */
  ForceAssociate?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
   *
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberRequest {
  /**
   * List of phone number IDs.
   *
   * @public
   */
  PhoneNumberIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberResponse {
  /**
   * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
   *
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * The phone number ID, product type, or calling name fields to update, used with the BatchUpdatePhoneNumber and UpdatePhoneNumber actions.
 *
 * @public
 */
export interface UpdatePhoneNumberRequestItem {
  /**
   * The phone number ID to update.
   *
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * The product type to update.
   *
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * The outbound calling name to update.
   *
   * @public
   */
  CallingName?: string | undefined;

  /**
   * The name of the phone number.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberRequest {
  /**
   * Lists the phone numbers in the update request.
   *
   * @public
   */
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberResponse {
  /**
   * A list of failed phone numbers and their error messages.
   *
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * The details of an Amazon Chime SDK Voice Connector call.
 *
 * @public
 */
export interface CallDetails {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId?: string | undefined;

  /**
   * The transaction ID of a Voice Connector call.
   *
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * Identifies a person as the caller or the callee.
   *
   * @public
   */
  IsCaller?: boolean | undefined;
}

/**
 * A suggested address.
 *
 * @public
 */
export interface CandidateAddress {
  /**
   * The street information of the candidate address.
   *
   * @public
   */
  streetInfo?: string | undefined;

  /**
   * The numeric portion of the candidate address.
   *
   * @public
   */
  streetNumber?: string | undefined;

  /**
   * The city of the candidate address.
   *
   * @public
   */
  city?: string | undefined;

  /**
   * The state of the candidate address.
   *
   * @public
   */
  state?: string | undefined;

  /**
   * The postal code of the candidate address.
   *
   * @public
   */
  postalCode?: string | undefined;

  /**
   * The zip + 4 or postal code +4 of the candidate address.
   *
   * @public
   */
  postalCodePlus4?: string | undefined;

  /**
   * The country of the candidate address.
   *
   * @public
   */
  country?: string | undefined;
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderRequest {
  /**
   * The phone number product type.
   *
   * @public
   */
  ProductType: PhoneNumberProductType | undefined;

  /**
   * List of phone numbers, in E.164 format.
   *
   * @public
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * Specifies the name assigned to one or more phone numbers.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * A phone number for which an order has been placed.
 *
 * @public
 */
export interface OrderedPhoneNumber {
  /**
   * The phone number, in E.164 format.
   *
   * @public
   */
  E164PhoneNumber?: string | undefined;

  /**
   * The phone number status.
   *
   * @public
   */
  Status?: OrderedPhoneNumberStatus | undefined;
}

/**
 * The details of an Amazon Chime SDK phone number order.
 *
 * @public
 */
export interface PhoneNumberOrder {
  /**
   * The ID of the phone order.
   *
   * @public
   */
  PhoneNumberOrderId?: string | undefined;

  /**
   * The phone number order product type.
   *
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * The status of the phone number order.
   *
   * @public
   */
  Status?: PhoneNumberOrderStatus | undefined;

  /**
   * The type of phone number being ordered, local or toll-free.
   *
   * @public
   */
  OrderType?: PhoneNumberOrderType | undefined;

  /**
   * The ordered phone number details, such as the phone number in E.164 format and the phone number status.
   *
   * @public
   */
  OrderedPhoneNumbers?: OrderedPhoneNumber[] | undefined;

  /**
   * The phone number order creation time stamp, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The updated phone number order time stamp, in ISO 8601 format.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The Firm Order Commitment (FOC) date for phone number porting orders. This field is null if a phone number order is not a porting order.
   *
   * @public
   */
  FocDate?: string | undefined;
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderResponse {
  /**
   * The phone number order details.
   *
   * @public
   */
  PhoneNumberOrder?: PhoneNumberOrder | undefined;
}

/**
 * The country and area code for a proxy phone number in a proxy phone session.
 *
 * @public
 */
export interface GeoMatchParams {
  /**
   * The country.
   *
   * @public
   */
  Country: string | undefined;

  /**
   * The area code.
   *
   * @public
   */
  AreaCode: string | undefined;
}

/**
 * @public
 */
export interface CreateProxySessionRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The participant phone numbers.
   *
   * @public
   */
  ParticipantPhoneNumbers: string[] | undefined;

  /**
   * The name of the proxy session.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of minutes allowed for the proxy session.
   *
   * @public
   */
  ExpiryMinutes?: number | undefined;

  /**
   * The proxy session's capabilities.
   *
   * @public
   */
  Capabilities: Capability[] | undefined;

  /**
   * The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.
   *
   * @public
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | undefined;

  /**
   * The preference for matching the country or area code of the proxy phone number with that of the first participant.
   *
   * @public
   */
  GeoMatchLevel?: GeoMatchLevel | undefined;

  /**
   * The country and area code for the proxy phone number.
   *
   * @public
   */
  GeoMatchParams?: GeoMatchParams | undefined;
}

/**
 * The phone number and proxy phone number for a participant in an Amazon Chime SDK Voice Connector proxy session.
 *
 * @public
 */
export interface Participant {
  /**
   * The participant's phone number.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The participant's proxy phone number.
   *
   * @public
   */
  ProxyPhoneNumber?: string | undefined;
}

/**
 * The proxy session for an Amazon Chime SDK Voice Connector.
 *
 * @public
 */
export interface ProxySession {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId?: string | undefined;

  /**
   * The proxy session ID.
   *
   * @public
   */
  ProxySessionId?: string | undefined;

  /**
   * The proxy session name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The proxy session status.
   *
   * @public
   */
  Status?: ProxySessionStatus | undefined;

  /**
   * The number of minutes allowed for the proxy session.
   *
   * @public
   */
  ExpiryMinutes?: number | undefined;

  /**
   * The proxy session capabilities.
   *
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * The created time stamp, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The updated time stamp, in ISO 8601 format.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The ended time stamp, in ISO 8601 format.
   *
   * @public
   */
  EndedTimestamp?: Date | undefined;

  /**
   * The proxy session participants.
   *
   * @public
   */
  Participants?: Participant[] | undefined;

  /**
   * The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.
   *
   * @public
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | undefined;

  /**
   * The preference for matching the country or area code of the proxy phone number with that of the first participant.
   *
   * @public
   */
  GeoMatchLevel?: GeoMatchLevel | undefined;

  /**
   * The country and area code for the proxy phone number.
   *
   * @public
   */
  GeoMatchParams?: GeoMatchParams | undefined;
}

/**
 * @public
 */
export interface CreateProxySessionResponse {
  /**
   * The proxy session details.
   *
   * @public
   */
  ProxySession?: ProxySession | undefined;
}

/**
 * The endpoint assigned to a SIP media application.
 *
 * @public
 */
export interface SipMediaApplicationEndpoint {
  /**
   * Valid Amazon Resource Name (ARN) of the Lambda function, version, or alias. The function must be created in the same AWS Region as the SIP media application.
   *
   * @public
   */
  LambdaArn?: string | undefined;
}

/**
 * Describes a tag applied to a resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag's key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The tag's value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationRequest {
  /**
   * The AWS Region assigned to the SIP media application.
   *
   * @public
   */
  AwsRegion: string | undefined;

  /**
   * The SIP media application's name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * List of endpoints (Lambda ARNs) specified for the SIP media application.
   *
   * @public
   */
  Endpoints: SipMediaApplicationEndpoint[] | undefined;

  /**
   * The tags assigned to the SIP media application.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The details of the SIP media application, including name and endpoints. An AWS account can have multiple SIP media applications.
 *
 * @public
 */
export interface SipMediaApplication {
  /**
   * A SIP media application's ID.
   *
   * @public
   */
  SipMediaApplicationId?: string | undefined;

  /**
   * The AWS Region in which the SIP media application is created.
   *
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * The SIP media application's name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * List of endpoints for a SIP media application. Currently, only one endpoint per SIP media application is permitted.
   *
   * @public
   */
  Endpoints?: SipMediaApplicationEndpoint[] | undefined;

  /**
   * The SIP media application creation timestamp, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the SIP media application was updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The ARN of the SIP media application.
   *
   * @public
   */
  SipMediaApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationResponse {
  /**
   * The SIP media application details.
   *
   * @public
   */
  SipMediaApplication?: SipMediaApplication | undefined;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationCallRequest {
  /**
   * The phone number that a user calls from. This is a phone number in your Amazon Chime SDK phone number inventory.
   *
   * @public
   */
  FromPhoneNumber: string | undefined;

  /**
   * The phone number that the service should call.
   *
   * @public
   */
  ToPhoneNumber: string | undefined;

  /**
   * The ID of the SIP media application.
   *
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * The SIP headers added to an outbound call leg.
   *
   * @public
   */
  SipHeaders?: Record<string, string> | undefined;

  /**
   * Context passed to a CreateSipMediaApplication API call. For example, you could pass key-value pairs such as: `"FirstName": "John", "LastName": "Doe"`
   *
   * @public
   */
  ArgumentsMap?: Record<string, string> | undefined;
}

/**
 * A `Call` instance for a SIP media application.
 *
 * @public
 */
export interface SipMediaApplicationCall {
  /**
   * The call's transaction ID.
   *
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationCallResponse {
  /**
   * The actual call.
   *
   * @public
   */
  SipMediaApplicationCall?: SipMediaApplicationCall | undefined;
}

/**
 * A target SIP media application and other details, such as priority and AWS Region, to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided.
 *
 * @public
 */
export interface SipRuleTargetApplication {
  /**
   * The ID of a rule's target SIP media application.
   *
   * @public
   */
  SipMediaApplicationId?: string | undefined;

  /**
   * The priority setting of a rule's target SIP media application.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The AWS Region of a rule's target SIP media application.
   *
   * @public
   */
  AwsRegion?: string | undefined;
}

/**
 * @public
 */
export interface CreateSipRuleRequest {
  /**
   * The name of the SIP rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of trigger assigned to the SIP rule in `TriggerValue`, currently `RequestUriHostname` or `ToPhoneNumber`.
   *
   * @public
   */
  TriggerType: SipRuleTriggerType | undefined;

  /**
   * If `TriggerType` is `RequestUriHostname`, the value can be the outbound host name of a Voice Connector. If `TriggerType` is `ToPhoneNumber`, the value can be a customer-owned phone number in the E164 format. The `SipMediaApplication` specified in the `SipRule` is triggered if the request URI in an incoming SIP request matches the `RequestUriHostname`, or if the `To` header in the incoming SIP request matches the `ToPhoneNumber` value.
   *
   * @public
   */
  TriggerValue: string | undefined;

  /**
   * Disables or enables a SIP rule. You must disable SIP rules before you can delete them.
   *
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * List of SIP media applications, with priority and AWS Region. Only one SIP application per AWS Region can be used.
   *
   * @public
   */
  TargetApplications: SipRuleTargetApplication[] | undefined;
}

/**
 * The details of a SIP rule, including name, triggers, and target applications. An AWS account can have multiple SIP rules.
 *
 * @public
 */
export interface SipRule {
  /**
   * A SIP rule's ID.
   *
   * @public
   */
  SipRuleId?: string | undefined;

  /**
   * A SIP rule's name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Indicates whether the SIP rule is enabled or disabled. You must disable a rule before you can delete it.
   *
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * The type of trigger set for a SIP rule, either a phone number or a URI request host name.
   *
   * @public
   */
  TriggerType?: SipRuleTriggerType | undefined;

  /**
   * The value set for a SIP rule's trigger type. Either a phone number or a URI hostname.
   *
   * @public
   */
  TriggerValue?: string | undefined;

  /**
   * The target SIP media application and other details, such as priority and AWS Region, to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided.
   *
   * @public
   */
  TargetApplications?: SipRuleTargetApplication[] | undefined;

  /**
   * The time at which the SIP rule was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the SIP rule was updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateSipRuleResponse {
  /**
   * The SIP rule information, including the rule ID, triggers, and target applications.
   *
   * @public
   */
  SipRule?: SipRule | undefined;
}

/**
 * @public
 */
export interface CreateVoiceConnectorRequest {
  /**
   * The name of the Voice Connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The AWS Region in which the Amazon Chime SDK Voice Connector is created. Default value: `us-east-1` .
   *
   * @public
   */
  AwsRegion?: VoiceConnectorAwsRegion | undefined;

  /**
   * Enables or disables encryption for the Voice Connector.
   *
   * @public
   */
  RequireEncryption: boolean | undefined;

  /**
   * The tags assigned to the Voice Connector.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The connectors for use with Connect Customer.
   *
   * The following options are available:
   *
   * - `CONNECT_CALL_TRANSFER_CONNECTOR` - Enables enterprises to integrate Connect Customer with other voice systems to directly transfer voice calls and metadata without using the public telephone network. They can use Connect Customer telephony and Interactive Voice Response (IVR) with their existing voice systems to modernize the IVR experience of their existing contact center and their enterprise and branch voice systems. Additionally, enterprises migrating their contact center to Connect Customer can start with Connect telephony and IVR for immediate modernization ahead of agent migration.
   *
   *   > **Note:** This integration is a gated feature. Please reach out to your account team to discuss this feature with a Connect Specialist.
   * - `CONNECT_ANALYTICS_CONNECTOR` - Enables enterprises to integrate Connect Customer with other voice systems for real-time and post-call analytics. They can use Connect Customer Contact Lens with their existing voice systems to provides call recordings, conversational analytics (including contact transcript, sensitive data redaction, content categorization, theme detection, sentiment analysis, real-time alerts, and post-contact summary), and agent performance evaluations (including evaluation forms, automated evaluation, supervisor review) with a rich user experience to display, search and filter customer interactions, and programmatic access to data streams and the data lake. Additionally, enterprises migrating their contact center to Connect Customer can start with Contact Lens analytics and performance insights ahead of agent migration.
   *
   * @public
   */
  IntegrationType?: VoiceConnectorIntegrationType | undefined;

  /**
   * The type of network for the Voice Connector.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * The Amazon Chime SDK Voice Connector configuration, including outbound host name and encryption settings.
 *
 * @public
 */
export interface VoiceConnector {
  /**
   * The Voice Connector's ID.
   *
   * @public
   */
  VoiceConnectorId?: string | undefined;

  /**
   * The AWS Region in which the Voice Connector is created. Default: us-east-1.
   *
   * @public
   */
  AwsRegion?: VoiceConnectorAwsRegion | undefined;

  /**
   * The Voice Connector's name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The outbound host name for the Voice Connector.
   *
   * @public
   */
  OutboundHostName?: string | undefined;

  /**
   * Enables or disables encryption for the Voice Connector.
   *
   * @public
   */
  RequireEncryption?: boolean | undefined;

  /**
   * The Voice Connector's creation timestamp, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The Voice Connector's updated timestamp, in ISO 8601 format.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The ARN of the Voice Connector.
   *
   * @public
   */
  VoiceConnectorArn?: string | undefined;

  /**
   * The connectors for use with Connect Customer.
   *
   * @public
   */
  IntegrationType?: VoiceConnectorIntegrationType | undefined;

  /**
   * The type of network for the Voice Connector.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * @public
 */
export interface CreateVoiceConnectorResponse {
  /**
   * The details of the Voice Connector.
   *
   * @public
   */
  VoiceConnector?: VoiceConnector | undefined;
}

/**
 * For Amazon Chime SDK Voice Connector groups, the Amazon Chime SDK Voice Connectors to which you route inbound calls. Includes priority configuration settings. Limit: 3 VoiceConnectorItems per Voice Connector group.
 *
 * @public
 */
export interface VoiceConnectorItem {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The priority setting of a Voice Connector item. Calls are routed to hosts in priority order, with 1 as the highest priority. When hosts have equal priority, the system distributes calls among them based on their relative weight.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * @public
 */
export interface CreateVoiceConnectorGroupRequest {
  /**
   * The name of the Voice Connector group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Lists the Voice Connectors that inbound calls are routed to.
   *
   * @public
   */
  VoiceConnectorItems?: VoiceConnectorItem[] | undefined;

  CallDistributionType?: CallDistributionType | undefined;
}

/**
 * The Amazon Chime SDK Voice Connector group configuration, including associated Voice Connectors. You can include Voice Connectors from different AWS Regions in a group. This creates a fault tolerant mechanism for fallback in case of availability events.
 *
 * @public
 */
export interface VoiceConnectorGroup {
  /**
   * The ID of a Voice Connector group.
   *
   * @public
   */
  VoiceConnectorGroupId?: string | undefined;

  /**
   * The name of a Voice Connector group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Voice Connectors to which you route inbound calls.
   *
   * @public
   */
  VoiceConnectorItems?: VoiceConnectorItem[] | undefined;

  /**
   * The Voice Connector group's creation time stamp, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The Voice Connector group's creation time stamp, in ISO 8601 format.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The ARN of the Voice Connector group.
   *
   * @public
   */
  VoiceConnectorGroupArn?: string | undefined;

  CallDistributionType?: CallDistributionType | undefined;
}

/**
 * @public
 */
export interface CreateVoiceConnectorGroupResponse {
  /**
   * The details of the Voice Connector group.
   *
   * @public
   */
  VoiceConnectorGroup?: VoiceConnectorGroup | undefined;
}

/**
 * @public
 */
export interface CreateVoiceProfileRequest {
  /**
   * The ID of the speaker search task.
   *
   * @public
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * The combination of a voice print and caller ID.
 *
 * @public
 */
export interface VoiceProfile {
  /**
   * The ID of the voice profile.
   *
   * @public
   */
  VoiceProfileId?: string | undefined;

  /**
   * The ARN of the voice profile.
   *
   * @public
   */
  VoiceProfileArn?: string | undefined;

  /**
   * The ID of the domain that contains the voice profile.
   *
   * @public
   */
  VoiceProfileDomainId?: string | undefined;

  /**
   * The time at which the voice profile was created and enrolled.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the voice profile was last updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The time at which a voice profile expires unless you re-enroll the caller via the `UpdateVoiceProfile` API.
   *
   * @public
   */
  ExpirationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateVoiceProfileResponse {
  /**
   * The requested voice profile.
   *
   * @public
   */
  VoiceProfile?: VoiceProfile | undefined;
}

/**
 * A structure that contains the configuration settings for server-side encryption.
 *
 * > **Note:** We only support symmetric keys. Do not use asymmetric or HMAC keys, or KMS aliases.
 *
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * The ARN of the KMS key used to encrypt the enrollment data in a voice profile domain. Asymmetric customer managed keys are not supported.
   *
   * @public
   */
  KmsKeyArn: string | undefined;
}

/**
 * @public
 */
export interface CreateVoiceProfileDomainRequest {
  /**
   * The name of the voice profile domain.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the voice profile domain.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The server-side encryption configuration for the request.
   *
   * @public
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;

  /**
   * The unique identifier for the client request. Use a different token for different domain creation requests.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags assigned to the domain.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A collection of voice profiles.
 *
 * @public
 */
export interface VoiceProfileDomain {
  /**
   * The ID of the voice profile domain.
   *
   * @public
   */
  VoiceProfileDomainId?: string | undefined;

  /**
   * The voice profile domain's Amazon Resource Number (ARN).
   *
   * @public
   */
  VoiceProfileDomainArn?: string | undefined;

  /**
   * The name of the voice profile domain.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the voice profile domain.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A structure that contains the configuration settings for server-side encryption.
   *
   * @public
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The time at which the voice profile domain was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the voice profile was last updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateVoiceProfileDomainResponse {
  /**
   * The requested voice profile domain.
   *
   * @public
   */
  VoiceProfileDomain?: VoiceProfileDomain | undefined;
}

/**
 * @public
 */
export interface DeletePhoneNumberRequest {
  /**
   * The phone number ID.
   *
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxySessionRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The proxy session ID.
   *
   * @public
   */
  ProxySessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSipMediaApplicationRequest {
  /**
   * The SIP media application ID.
   *
   * @public
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSipRuleRequest {
  /**
   * The SIP rule ID.
   *
   * @public
   */
  SipRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorExternalSystemsConfigurationRequest {
  /**
   * The ID of the Voice Connector for which to delete the external system configuration.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorGroupRequest {
  /**
   * The Voice Connector Group ID.
   *
   * @public
   */
  VoiceConnectorGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorOriginationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorProxyRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorTerminationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.
   *
   * @public
   */
  Usernames: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceProfileRequest {
  /**
   * The voice profile ID.
   *
   * @public
   */
  VoiceProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceProfileDomainRequest {
  /**
   * The voice profile domain ID.
   *
   * @public
   */
  VoiceProfileDomainId: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * List of phone numbers, in E.164 format.
   *
   * @public
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
   *
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * The Voice Connector group ID.
   *
   * @public
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * The list of phone numbers, in E.164 format.
   *
   * @public
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
   *
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * The Amazon Chime SDK Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records.
 *
 * @public
 */
export interface VoiceConnectorSettings {
  /**
   * The S3 bucket that stores the Voice Connector's call detail records.
   *
   * @public
   */
  CdrBucket?: string | undefined;
}

/**
 * @public
 */
export interface GetGlobalSettingsResponse {
  /**
   * The Voice Connector settings.
   *
   * @public
   */
  VoiceConnector?: VoiceConnectorSettings | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberRequest {
  /**
   * The phone number ID.
   *
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * The phone number associations, such as an Amazon Chime SDK account ID, user ID, Voice Connector ID, or Voice Connector group ID.
 *
 * @public
 */
export interface PhoneNumberAssociation {
  /**
   * Contains the ID for the entity specified in Name.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Defines the association with an Amazon Chime SDK account ID, user ID, Voice Connector ID, or Voice Connector group ID.
   *
   * @public
   */
  Name?: PhoneNumberAssociationName | undefined;

  /**
   * The timestamp of the phone number association, in ISO 8601 format.
   *
   * @public
   */
  AssociatedTimestamp?: Date | undefined;
}

/**
 * The phone number capabilities for Amazon Chime SDK phone numbers, such as enabled inbound and outbound calling, and text messaging.
 *
 * @public
 */
export interface PhoneNumberCapabilities {
  /**
   * Allows or denies inbound calling for the specified phone number.
   *
   * @public
   */
  InboundCall?: boolean | undefined;

  /**
   * Allows or denies outbound calling for the specified phone number.
   *
   * @public
   */
  OutboundCall?: boolean | undefined;

  /**
   * Allows or denies inbound SMS messaging for the specified phone number.
   *
   * @public
   */
  InboundSMS?: boolean | undefined;

  /**
   * Allows or denies outbound SMS messaging for the specified phone number.
   *
   * @public
   */
  OutboundSMS?: boolean | undefined;

  /**
   * Allows or denies inbound MMS messaging for the specified phone number.
   *
   * @public
   */
  InboundMMS?: boolean | undefined;

  /**
   * Allows or denies inbound MMS messaging for the specified phone number.
   *
   * @public
   */
  OutboundMMS?: boolean | undefined;
}

/**
 * A phone number used to call an Amazon Chime SDK Voice Connector.
 *
 * @public
 */
export interface PhoneNumber {
  /**
   * The phone number's ID.
   *
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * The phone number, in E.164 format.
   *
   * @public
   */
  E164PhoneNumber?: string | undefined;

  PhoneNumberArn?: string | undefined;
  /**
   * The phone number's country. Format: ISO 3166-1 alpha-2.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The phone number's type.
   *
   * @public
   */
  Type?: PhoneNumberType | undefined;

  /**
   * The phone number's product type.
   *
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * The phone number's status.
   *
   * @public
   */
  Status?: PhoneNumberStatus | undefined;

  /**
   * The phone number's capabilities.
   *
   * @public
   */
  Capabilities?: PhoneNumberCapabilities | undefined;

  /**
   * The phone number's associations.
   *
   * @public
   */
  Associations?: PhoneNumberAssociation[] | undefined;

  /**
   * The outbound calling name associated with the phone number.
   *
   * @public
   */
  CallingName?: string | undefined;

  /**
   * The outbound calling name status.
   *
   * @public
   */
  CallingNameStatus?: CallingNameStatus | undefined;

  /**
   * The phone number creation timestamp, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The updated phone number timestamp, in ISO 8601 format.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The deleted phone number timestamp, in ISO 8601 format.
   *
   * @public
   */
  DeletionTimestamp?: Date | undefined;

  /**
   * The phone number's order ID.
   *
   * @public
   */
  OrderId?: string | undefined;

  /**
   * The name of the phone number.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberResponse {
  /**
   * The phone number details.
   *
   * @public
   */
  PhoneNumber?: PhoneNumber | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderRequest {
  /**
   * The ID of the phone number order .
   *
   * @public
   */
  PhoneNumberOrderId: string | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderResponse {
  /**
   * The phone number order details.
   *
   * @public
   */
  PhoneNumberOrder?: PhoneNumberOrder | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberSettingsResponse {
  /**
   * The default outbound calling name for the account.
   *
   * @public
   */
  CallingName?: string | undefined;

  /**
   * The updated outbound calling name timestamp, in ISO 8601 format.
   *
   * @public
   */
  CallingNameUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetProxySessionRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The proxy session ID.
   *
   * @public
   */
  ProxySessionId: string | undefined;
}

/**
 * @public
 */
export interface GetProxySessionResponse {
  /**
   * The proxy session details.
   *
   * @public
   */
  ProxySession?: ProxySession | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationRequest {
  /**
   * The SIP media application ID .
   *
   * @public
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationResponse {
  /**
   * The details of the SIP media application.
   *
   * @public
   */
  SipMediaApplication?: SipMediaApplication | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationAlexaSkillConfigurationRequest {
  /**
   * The SIP media application ID.
   *
   * @public
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * The Alexa Skill configuration of a SIP media application.
 *
 * > **Important:** Due to changes made by the Amazon Alexa service, this data type is no longer available for use. For more information, refer to the [Alexa Smart Properties](https://developer.amazon.com/en-US/alexa/alexasmartproperties) page.
 *
 * @public
 */
export interface SipMediaApplicationAlexaSkillConfiguration {
  /**
   * The status of the Alexa Skill configuration.
   *
   * @public
   */
  AlexaSkillStatus: AlexaSkillStatus | undefined;

  /**
   * The ID of the Alexa Skill configuration.
   *
   * @public
   */
  AlexaSkillIds: string[] | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationAlexaSkillConfigurationResponse {
  /**
   * Returns the Alexa Skill configuration.
   *
   * @public
   */
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * The SIP media application ID.
   *
   * @public
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * The logging configuration of a SIP media application.
 *
 * @public
 */
export interface SipMediaApplicationLoggingConfiguration {
  /**
   * Enables message logging for the specified SIP media application.
   *
   * @public
   */
  EnableSipMediaApplicationMessageLogs?: boolean | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * The actual logging configuration.
   *
   * @public
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSipRuleRequest {
  /**
   * The SIP rule ID.
   *
   * @public
   */
  SipRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetSipRuleResponse {
  /**
   * The SIP rule details.
   *
   * @public
   */
  SipRule?: SipRule | undefined;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The ID of the speaker search task.
   *
   * @public
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * The result of a speaker search analysis.
 *
 * @public
 */
export interface SpeakerSearchResult {
  /**
   * The confidence score in the speaker search analysis.
   *
   * @public
   */
  ConfidenceScore?: number | undefined;

  /**
   * The voice profile ID.
   *
   * @public
   */
  VoiceProfileId?: string | undefined;
}

/**
 * The details of a speaker search task.
 *
 * @public
 */
export interface SpeakerSearchDetails {
  /**
   * The result value in the speaker search details.
   *
   * @public
   */
  Results?: SpeakerSearchResult[] | undefined;

  /**
   * The status of a voice print generation operation, `VoiceprintGenerationSuccess` or `VoiceprintGenerationFailure`..
   *
   * @public
   */
  VoiceprintGenerationStatus?: string | undefined;
}

/**
 * A representation of an asynchronous request to perform speaker search analysis on a Voice Connector call.
 *
 * @public
 */
export interface SpeakerSearchTask {
  /**
   * The speaker search task ID.
   *
   * @public
   */
  SpeakerSearchTaskId?: string | undefined;

  /**
   * The status of the speaker search task, `IN_QUEUE`, `IN_PROGRESS`, `PARTIAL_SUCCESS`, `SUCCEEDED`, `FAILED`, or `STOPPED`.
   *
   * @public
   */
  SpeakerSearchTaskStatus?: string | undefined;

  /**
   * The call details of a speaker search task.
   *
   * @public
   */
  CallDetails?: CallDetails | undefined;

  /**
   * The details of a speaker search task.
   *
   * @public
   */
  SpeakerSearchDetails?: SpeakerSearchDetails | undefined;

  /**
   * The time at which a speaker search task was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which a speaker search task was updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The time at which the speaker search task began.
   *
   * @public
   */
  StartedTimestamp?: Date | undefined;

  /**
   * A detailed message about the status of a speaker search.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskResponse {
  /**
   * The details of the speaker search task.
   *
   * @public
   */
  SpeakerSearchTask?: SpeakerSearchTask | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorResponse {
  /**
   * The Voice Connector details.
   *
   * @public
   */
  VoiceConnector?: VoiceConnector | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime SDK Voice Connector's emergency calling configuration.
 *
 * @public
 */
export interface DNISEmergencyCallingConfiguration {
  /**
   * The DNIS phone number that you route emergency calls to, in E.164 format.
   *
   * @public
   */
  EmergencyPhoneNumber: string | undefined;

  /**
   * The DNIS phone number for routing test emergency calls to, in E.164 format.
   *
   * @public
   */
  TestPhoneNumber?: string | undefined;

  /**
   * The country from which emergency calls are allowed, in ISO 3166-1 alpha-2 format.
   *
   * @public
   */
  CallingCountry: string | undefined;
}

/**
 * The emergency calling configuration details associated with an Amazon Chime SDK Voice Connector.
 *
 * @public
 */
export interface EmergencyCallingConfiguration {
  /**
   * The Dialed Number Identification Service (DNIS) emergency calling configuration details.
   *
   * @public
   */
  DNIS?: DNISEmergencyCallingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * The details of the emergency calling configuration.
   *
   * @public
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorExternalSystemsConfigurationRequest {
  /**
   * The ID of the Voice Connector for which to return information about the external system configuration.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * Contains information about an external systems configuration for a Voice Connector.
 *
 * @public
 */
export interface ExternalSystemsConfiguration {
  /**
   * The session border controllers.
   *
   * @public
   */
  SessionBorderControllerTypes?: SessionBorderControllerType[] | undefined;

  /**
   * The contact center system.
   *
   * @public
   */
  ContactCenterSystemTypes?: ContactCenterSystemType[] | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorExternalSystemsConfigurationResponse {
  /**
   * An object that contains information about an external systems configuration for a Voice Connector.
   *
   * @public
   */
  ExternalSystemsConfiguration?: ExternalSystemsConfiguration | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorGroupRequest {
  /**
   * The Voice Connector group ID.
   *
   * @public
   */
  VoiceConnectorGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorGroupResponse {
  /**
   * The details of the Voice Connector group.
   *
   * @public
   */
  VoiceConnectorGroup?: VoiceConnectorGroup | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorLoggingConfigurationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * The logging configuration associated with an Amazon Chime SDK Voice Connector. Specifies whether SIP message logs can be sent to Amazon CloudWatch Logs.
 *
 * @public
 */
export interface LoggingConfiguration {
  /**
   * Boolean that enables sending SIP message logs to Amazon CloudWatch.
   *
   * @public
   */
  EnableSIPLogs?: boolean | undefined;

  /**
   * Enables or disables media metrics logging.
   *
   * @public
   */
  EnableMediaMetricLogs?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorLoggingConfigurationResponse {
  /**
   * The logging configuration details .
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorOriginationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * Origination routes define call distribution properties for your SIP hosts to receive inbound calls using an Amazon Chime SDK Voice Connector. Limit: Ten origination routes for each Voice Connector.
 *
 * > **Note:** The parameters listed below are not required, but you must use at least one.
 *
 * @public
 */
export interface OriginationRoute {
  /**
   * The FQDN or IP address to contact for origination traffic.
   *
   * @public
   */
  Host?: string | undefined;

  /**
   * The designated origination route port. Defaults to 5060.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The protocol to use for the origination route. Encryption-enabled Amazon Chime SDK Voice Connectors use TCP protocol by default.
   *
   * @public
   */
  Protocol?: OriginationRouteProtocol | undefined;

  /**
   * The priority associated with the host, with 1 being the highest priority. Higher priority hosts are attempted first.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The weight assigned to an origination route. When hosts have equal priority, calls are distributed between them based on their relative weights.
   *
   * @public
   */
  Weight?: number | undefined;
}

/**
 * Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime SDK Voice Connector.
 *
 * > **Note:** The parameters listed below are not required, but you must use at least one.
 *
 * @public
 */
export interface Origination {
  /**
   * The call distribution properties defined for your SIP hosts. Valid range: Minimum value of 1. Maximum value of 20. This parameter is not required, but you must specify this parameter or `Disabled`.
   *
   * @public
   */
  Routes?: OriginationRoute[] | undefined;

  /**
   * When origination settings are disabled, inbound calls are not enabled for your Amazon Chime SDK Voice Connector. This parameter is not required, but you must specify this parameter or `Routes`.
   *
   * @public
   */
  Disabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorOriginationResponse {
  /**
   * The origination setting details.
   *
   * @public
   */
  Origination?: Origination | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorProxyRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * The proxy configuration for an Amazon Chime SDK Voice Connector.
 *
 * @public
 */
export interface Proxy {
  /**
   * The default number of minutes allowed for proxy sessions.
   *
   * @public
   */
  DefaultSessionExpiryMinutes?: number | undefined;

  /**
   * When true, stops proxy sessions from being created on the specified Amazon Chime SDK Voice Connector.
   *
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * The phone number to route calls to after a proxy session expires.
   *
   * @public
   */
  FallBackPhoneNumber?: string | undefined;

  /**
   * The countries for proxy phone numbers to be selected from.
   *
   * @public
   */
  PhoneNumberCountries?: string[] | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorProxyResponse {
  /**
   * The proxy configuration details.
   *
   * @public
   */
  Proxy?: Proxy | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorStreamingConfigurationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * The configuration for a call analytics task.
 *
 * @public
 */
export interface MediaInsightsConfiguration {
  /**
   * Denotes the configuration as enabled or disabled.
   *
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * The configuration's ARN.
   *
   * @public
   */
  ConfigurationArn?: string | undefined;
}

/**
 * The target recipient for a streaming configuration notification.
 *
 * @public
 */
export interface StreamingNotificationTarget {
  /**
   * The streaming notification target.
   *
   * @public
   */
  NotificationTarget?: NotificationTarget | undefined;
}

/**
 * The streaming configuration associated with an Amazon Chime SDK Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.
 *
 * @public
 */
export interface StreamingConfiguration {
  /**
   * The amount of time, in hours, to the Kinesis data.
   *
   * @public
   */
  DataRetentionInHours: number | undefined;

  /**
   * When true, streaming to Kinesis is off.
   *
   * @public
   */
  Disabled: boolean | undefined;

  /**
   * The streaming notification targets.
   *
   * @public
   */
  StreamingNotificationTargets?: StreamingNotificationTarget[] | undefined;

  /**
   * The call analytics configuration.
   *
   * @public
   */
  MediaInsightsConfiguration?: MediaInsightsConfiguration | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorStreamingConfigurationResponse {
  /**
   * The details of the streaming configuration.
   *
   * @public
   */
  StreamingConfiguration?: StreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * Termination settings enable SIP hosts to make outbound calls using an Amazon Chime SDK Voice Connector.
 *
 * @public
 */
export interface Termination {
  /**
   * The limit on calls per second. Max value based on account service quota. Default value of 1.
   *
   * @public
   */
  CpsLimit?: number | undefined;

  /**
   * The default outbound calling number.
   *
   * @public
   */
  DefaultPhoneNumber?: string | undefined;

  /**
   * The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.
   *
   * @public
   */
  CallingRegions?: string[] | undefined;

  /**
   * The IP addresses allowed to make calls, in CIDR format.
   *
   * @public
   */
  CidrAllowedList?: string[] | undefined;

  /**
   * When termination is disabled, outbound calls cannot be made.
   *
   * @public
   */
  Disabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationResponse {
  /**
   * The termination setting details.
   *
   * @public
   */
  Termination?: Termination | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationHealthRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * The termination health details, including the source IP address and timestamp of the last successful `SIP OPTIONS` message from your SIP infrastructure.
 *
 * @public
 */
export interface TerminationHealth {
  /**
   * The timestamp, in ISO 8601 format.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The source IP address.
   *
   * @public
   */
  Source?: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationHealthResponse {
  /**
   * The termination health details.
   *
   * @public
   */
  TerminationHealth?: TerminationHealth | undefined;
}

/**
 * @public
 */
export interface GetVoiceProfileRequest {
  /**
   * The voice profile ID.
   *
   * @public
   */
  VoiceProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceProfileResponse {
  /**
   * The voice profile details.
   *
   * @public
   */
  VoiceProfile?: VoiceProfile | undefined;
}

/**
 * @public
 */
export interface GetVoiceProfileDomainRequest {
  /**
   * The voice profile domain ID.
   *
   * @public
   */
  VoiceProfileDomainId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceProfileDomainResponse {
  /**
   * The details of the voice profile domain.
   *
   * @public
   */
  VoiceProfileDomain?: VoiceProfileDomain | undefined;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The ID of the voice tone analysis task.
   *
   * @public
   */
  VoiceToneAnalysisTaskId: string | undefined;

  /**
   * Specifies whether the voice being analyzed is the caller (originator) or the callee (responder).
   *
   * @public
   */
  IsCaller: boolean | undefined;
}

/**
 * A representation of an asynchronous request to perform voice tone analysis on a Voice Connector call.
 *
 * @public
 */
export interface VoiceToneAnalysisTask {
  /**
   * The ID of the voice tone analysis task.
   *
   * @public
   */
  VoiceToneAnalysisTaskId?: string | undefined;

  /**
   * The status of a voice tone analysis task, `IN_QUEUE`, `IN_PROGRESS`, `PARTIAL_SUCCESS`, `SUCCEEDED`, `FAILED`, or `STOPPED`.
   *
   * @public
   */
  VoiceToneAnalysisTaskStatus?: string | undefined;

  /**
   * The call details of a voice tone analysis task.
   *
   * @public
   */
  CallDetails?: CallDetails | undefined;

  /**
   * The time at which a voice tone analysis task was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which a voice tone analysis task was updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The time at which a voice tone analysis task started.
   *
   * @public
   */
  StartedTimestamp?: Date | undefined;

  /**
   * The status of a voice tone analysis task.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskResponse {
  /**
   * The details of the voice tone analysis task.
   *
   * @public
   */
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask | undefined;
}

/**
 * @public
 */
export interface ListAvailableVoiceConnectorRegionsResponse {
  /**
   * The list of AWS Regions.
   *
   * @public
   */
  VoiceConnectorRegions?: VoiceConnectorAwsRegion[] | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersRequest {
  /**
   * The token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersResponse {
  /**
   * The phone number order details.
   *
   * @public
   */
  PhoneNumberOrders?: PhoneNumberOrder[] | undefined;

  /**
   * The token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * The status of your organization's phone numbers.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The phone number product types.
   *
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * The filter to limit the number of results.
   *
   * @public
   */
  FilterName?: PhoneNumberAssociationName | undefined;

  /**
   * The filter value.
   *
   * @public
   */
  FilterValue?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * The phone number details.
   *
   * @public
   */
  PhoneNumbers?: PhoneNumber[] | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProxySessionsRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The proxy session status.
   *
   * @public
   */
  Status?: ProxySessionStatus | undefined;

  /**
   * The token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListProxySessionsResponse {
  /**
   * The proxy sessions' details.
   *
   * @public
   */
  ProxySessions?: ProxySession[] | undefined;

  /**
   * The token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSipMediaApplicationsRequest {
  /**
   * The maximum number of results to return in a single call. Defaults to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSipMediaApplicationsResponse {
  /**
   * The list of SIP media applications and application details.
   *
   * @public
   */
  SipMediaApplications?: SipMediaApplication[] | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSipRulesRequest {
  /**
   * The SIP media application ID.
   *
   * @public
   */
  SipMediaApplicationId?: string | undefined;

  /**
   * The maximum number of results to return in a single call. Defaults to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSipRulesResponse {
  /**
   * The list of SIP rules and details.
   *
   * @public
   */
  SipRules?: SipRule[] | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesRequest {
  /**
   * The phone number product type.
   *
   * @public
   */
  ProductType: PhoneNumberProductType | undefined;
}

/**
 * The phone number's country.
 *
 * @public
 */
export interface PhoneNumberCountry {
  /**
   * The phone number country code. Format: ISO 3166-1 alpha-2.
   *
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * The supported phone number types.
   *
   * @public
   */
  SupportedPhoneNumberTypes?: PhoneNumberType[] | undefined;
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesResponse {
  /**
   * The supported phone number countries.
   *
   * @public
   */
  PhoneNumberCountries?: PhoneNumberCountry[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The resource ARN.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags in the list.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorGroupsRequest {
  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorGroupsResponse {
  /**
   * The details of the Voice Connector groups.
   *
   * @public
   */
  VoiceConnectorGroups?: VoiceConnectorGroup[] | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorsRequest {
  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorsResponse {
  /**
   * The details of the Voice Connectors.
   *
   * @public
   */
  VoiceConnectors?: VoiceConnector[] | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorTerminationCredentialsRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorTerminationCredentialsResponse {
  /**
   * A list of user names.
   *
   * @public
   */
  Usernames?: string[] | undefined;
}

/**
 * @public
 */
export interface ListVoiceProfileDomainsRequest {
  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A high-level overview of a voice profile domain.
 *
 * @public
 */
export interface VoiceProfileDomainSummary {
  /**
   * The ID of the voice profile domain summary.
   *
   * @public
   */
  VoiceProfileDomainId?: string | undefined;

  /**
   * The ARN of a voice profile in a voice profile domain summary.
   *
   * @public
   */
  VoiceProfileDomainArn?: string | undefined;

  /**
   * The name of the voice profile domain summary.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Describes the voice profile domain summary.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The time at which the voice profile domain summary was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the voice profile domain summary was last updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListVoiceProfileDomainsResponse {
  /**
   * The list of voice profile domains.
   *
   * @public
   */
  VoiceProfileDomains?: VoiceProfileDomainSummary[] | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVoiceProfilesRequest {
  /**
   * The ID of the voice profile domain.
   *
   * @public
   */
  VoiceProfileDomainId: string | undefined;

  /**
   * The token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results in the request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A high-level summary of a voice profile.
 *
 * @public
 */
export interface VoiceProfileSummary {
  /**
   * The ID of the voice profile in a voice profile summary.
   *
   * @public
   */
  VoiceProfileId?: string | undefined;

  /**
   * The ARN of the voice profile in a voice profile summary.
   *
   * @public
   */
  VoiceProfileArn?: string | undefined;

  /**
   * The ID of the voice profile domain in a voice profile summary.
   *
   * @public
   */
  VoiceProfileDomainId?: string | undefined;

  /**
   * The time at which a voice profile summary was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which a voice profile summary was last updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * Extends the life of the voice profile. You can use `UpdateVoiceProfile` to refresh an existing voice profile's voice print and extend the life of the summary.
   *
   * @public
   */
  ExpirationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListVoiceProfilesResponse {
  /**
   * The list of voice profiles.
   *
   * @public
   */
  VoiceProfiles?: VoiceProfileSummary[] | undefined;

  /**
   * The token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutSipMediaApplicationAlexaSkillConfigurationRequest {
  /**
   * The SIP media application ID.
   *
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * The Alexa Skill configuration.
   *
   * @public
   */
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration | undefined;
}

/**
 * @public
 */
export interface PutSipMediaApplicationAlexaSkillConfigurationResponse {
  /**
   * Returns the Alexa Skill configuration.
   *
   * @public
   */
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration | undefined;
}

/**
 * @public
 */
export interface PutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * The SIP media application ID.
   *
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * The logging configuration for the specified SIP media application.
   *
   * @public
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * The updated logging configuration for the specified SIP media application.
   *
   * @public
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The configuration being updated.
   *
   * @public
   */
  EmergencyCallingConfiguration: EmergencyCallingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * The updated configuration.
   *
   * @public
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorExternalSystemsConfigurationRequest {
  /**
   * The ID of the Voice Connector for which to add the external system configuration.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The session border controllers to use.
   *
   * @public
   */
  SessionBorderControllerTypes?: SessionBorderControllerType[] | undefined;

  /**
   * The contact center system to use.
   *
   * @public
   */
  ContactCenterSystemTypes?: ContactCenterSystemType[] | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorExternalSystemsConfigurationResponse {
  /**
   * An object that contains information about an external systems configuration for a Voice Connector.
   *
   * @public
   */
  ExternalSystemsConfiguration?: ExternalSystemsConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorLoggingConfigurationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The logging configuration being updated.
   *
   * @public
   */
  LoggingConfiguration: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorLoggingConfigurationResponse {
  /**
   * The updated logging configuration.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorOriginationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The origination settings being updated.
   *
   * @public
   */
  Origination: Origination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorOriginationResponse {
  /**
   * The updated origination settings.
   *
   * @public
   */
  Origination?: Origination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorProxyRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The default number of minutes allowed for proxy session.
   *
   * @public
   */
  DefaultSessionExpiryMinutes: number | undefined;

  /**
   * The countries for proxy phone numbers to be selected from.
   *
   * @public
   */
  PhoneNumberPoolCountries: string[] | undefined;

  /**
   * The phone number to route calls to after a proxy session expires.
   *
   * @public
   */
  FallBackPhoneNumber?: string | undefined;

  /**
   * When true, stops proxy sessions from being created on the specified Amazon Chime SDK Voice Connector.
   *
   * @public
   */
  Disabled?: boolean | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorProxyResponse {
  /**
   * The proxy configuration details.
   *
   * @public
   */
  Proxy?: Proxy | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorStreamingConfigurationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The streaming settings being updated.
   *
   * @public
   */
  StreamingConfiguration: StreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorStreamingConfigurationResponse {
  /**
   * The updated streaming settings.
   *
   * @public
   */
  StreamingConfiguration?: StreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The termination settings to be updated.
   *
   * @public
   */
  Termination: Termination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationResponse {
  /**
   * The updated termination settings.
   *
   * @public
   */
  Termination?: Termination | undefined;
}

/**
 * The SIP credentials used to authenticate requests to an Amazon Chime SDK Voice Connector.
 *
 * @public
 */
export interface Credential {
  /**
   * The RFC2617 compliant user name associated with the SIP credentials, in US-ASCII format.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The RFC2617 compliant password associated with the SIP credentials, in US-ASCII format.
   *
   * @public
   */
  Password?: string | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationCredentialsRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The termination credentials being updated.
   *
   * @public
   */
  Credentials?: Credential[] | undefined;
}

/**
 * @public
 */
export interface RestorePhoneNumberRequest {
  /**
   * The ID of the phone number being restored.
   *
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface RestorePhoneNumberResponse {
  /**
   * The restored phone number.
   *
   * @public
   */
  PhoneNumber?: PhoneNumber | undefined;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * Confines a search to just the phone numbers associated with the specified area code.
   *
   * @public
   */
  AreaCode?: string | undefined;

  /**
   * Confines a search to just the phone numbers associated with the specified city.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * Confines a search to just the phone numbers associated with the specified country.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * Confines a search to just the phone numbers associated with the specified state.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * Confines a search to just the phone numbers associated with the specified toll-free prefix.
   *
   * @public
   */
  TollFreePrefix?: string | undefined;

  /**
   * Confines a search to just the phone numbers associated with the specified phone number type, either **local** or **toll-free**.
   *
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * Confines a search to just the phone numbers in the E.164 format.
   *
   * @public
   */
  E164PhoneNumbers?: string[] | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The transaction ID of the call being analyzed.
   *
   * @public
   */
  TransactionId: string | undefined;

  /**
   * The ID of the voice profile domain that will store the voice profile.
   *
   * @public
   */
  VoiceProfileDomainId: string | undefined;

  /**
   * The unique identifier for the client request. Use a different token for different speaker search tasks.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Specifies which call leg to stream for speaker search.
   *
   * @public
   */
  CallLeg?: CallLegType | undefined;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskResponse {
  /**
   * The details of the speaker search task.
   *
   * @public
   */
  SpeakerSearchTask?: SpeakerSearchTask | undefined;
}

/**
 * @public
 */
export interface StartVoiceToneAnalysisTaskRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The transaction ID.
   *
   * @public
   */
  TransactionId: string | undefined;

  /**
   * The language code.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * The unique identifier for the client request. Use a different token for different voice tone analysis tasks.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartVoiceToneAnalysisTaskResponse {
  /**
   * The details of the voice tone analysis task.
   *
   * @public
   */
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask | undefined;
}

/**
 * @public
 */
export interface StopSpeakerSearchTaskRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The speaker search task ID.
   *
   * @public
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface StopVoiceToneAnalysisTaskRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The ID of the voice tone analysis task.
   *
   * @public
   */
  VoiceToneAnalysisTaskId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource being tagged.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of the tags being added to the resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource having its tags removed.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The keys of the tags being removed from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsRequest {
  /**
   * The Voice Connector settings.
   *
   * @public
   */
  VoiceConnector: VoiceConnectorSettings | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * The phone number ID.
   *
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * The product type.
   *
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * The outbound calling name associated with the phone number.
   *
   * @public
   */
  CallingName?: string | undefined;

  /**
   * Specifies the updated name assigned to one or more phone numbers.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResponse {
  /**
   * The updated phone number details.
   *
   * @public
   */
  PhoneNumber?: PhoneNumber | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberSettingsRequest {
  /**
   * The default outbound calling name for the account.
   *
   * @public
   */
  CallingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxySessionRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The proxy session ID.
   *
   * @public
   */
  ProxySessionId: string | undefined;

  /**
   * The proxy session capabilities.
   *
   * @public
   */
  Capabilities: Capability[] | undefined;

  /**
   * The number of minutes allowed for the proxy session.
   *
   * @public
   */
  ExpiryMinutes?: number | undefined;
}

/**
 * @public
 */
export interface UpdateProxySessionResponse {
  /**
   * The updated proxy session details.
   *
   * @public
   */
  ProxySession?: ProxySession | undefined;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationRequest {
  /**
   * The SIP media application ID.
   *
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * The new name for the specified SIP media application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The new set of endpoints for the specified SIP media application.
   *
   * @public
   */
  Endpoints?: SipMediaApplicationEndpoint[] | undefined;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationResponse {
  /**
   * The updated SIP media application’s details.
   *
   * @public
   */
  SipMediaApplication?: SipMediaApplication | undefined;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationCallRequest {
  /**
   * The ID of the SIP media application handling the call.
   *
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * The ID of the call transaction.
   *
   * @public
   */
  TransactionId: string | undefined;

  /**
   * Arguments made available to the Lambda function as part of the `CALL_UPDATE_REQUESTED` event. Can contain 0-20 key-value pairs.
   *
   * @public
   */
  Arguments: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationCallResponse {
  /**
   * A `Call` instance for a SIP media application.
   *
   * @public
   */
  SipMediaApplicationCall?: SipMediaApplicationCall | undefined;
}

/**
 * @public
 */
export interface UpdateSipRuleRequest {
  /**
   * The SIP rule ID.
   *
   * @public
   */
  SipRuleId: string | undefined;

  /**
   * The new name for the specified SIP rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The new value that indicates whether the rule is disabled.
   *
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * The new list of target applications.
   *
   * @public
   */
  TargetApplications?: SipRuleTargetApplication[] | undefined;
}

/**
 * @public
 */
export interface UpdateSipRuleResponse {
  /**
   * The updated SIP rule details.
   *
   * @public
   */
  SipRule?: SipRule | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * The name of the Voice Connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * When enabled, requires encryption for the Voice Connector.
   *
   * @public
   */
  RequireEncryption: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorResponse {
  /**
   * The updated Voice Connector details.
   *
   * @public
   */
  VoiceConnector?: VoiceConnector | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorGroupRequest {
  /**
   * The Voice Connector ID.
   *
   * @public
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * The name of the Voice Connector group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The `VoiceConnectorItems` to associate with the Voice Connector group.
   *
   * @public
   */
  VoiceConnectorItems: VoiceConnectorItem[] | undefined;

  CallDistributionType?: CallDistributionType | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorGroupResponse {
  /**
   * The updated Voice Connector group.
   *
   * @public
   */
  VoiceConnectorGroup?: VoiceConnectorGroup | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceProfileRequest {
  /**
   * The profile ID.
   *
   * @public
   */
  VoiceProfileId: string | undefined;

  /**
   * The ID of the speaker search task.
   *
   * @public
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceProfileResponse {
  /**
   * The updated voice profile settings.
   *
   * @public
   */
  VoiceProfile?: VoiceProfile | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceProfileDomainRequest {
  /**
   * The domain ID.
   *
   * @public
   */
  VoiceProfileDomainId: string | undefined;

  /**
   * The name of the voice profile domain.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the voice profile domain.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceProfileDomainResponse {
  /**
   * The updated details of the voice profile domain.
   *
   * @public
   */
  VoiceProfileDomain?: VoiceProfileDomain | undefined;
}

/**
 * @public
 */
export interface ValidateE911AddressRequest {
  /**
   * The AWS account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The address street number, such as `200` or `2121`.
   *
   * @public
   */
  StreetNumber: string | undefined;

  /**
   * The address street information, such as `8th Avenue`.
   *
   * @public
   */
  StreetInfo: string | undefined;

  /**
   * The address city, such as `Portland`.
   *
   * @public
   */
  City: string | undefined;

  /**
   * The address state, such as `ME`.
   *
   * @public
   */
  State: string | undefined;

  /**
   * The country in the address being validated as two-letter country code in ISO 3166-1 alpha-2 format, such as `US`. For more information, see [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) in Wikipedia.
   *
   * @public
   */
  Country: string | undefined;

  /**
   * The dress postal code, such `04352`.
   *
   * @public
   */
  PostalCode: string | undefined;
}

/**
 * @public
 */
export interface ValidateE911AddressResponse {
  /**
   * Number indicating the result of address validation.
   *
   * Each possible result is defined as follows:
   *
   * - `0` - Address validation succeeded.
   * - `1` - Address validation succeeded. The address was a close enough match and has been corrected as part of the address object.
   * - `2` - Address validation failed. You should re-submit the validation request with candidates from the `CandidateAddressList` result, if it's a close match.
   *
   * @public
   */
  ValidationResult?: number | undefined;

  /**
   * The ID that represents the address.
   *
   * @public
   */
  AddressExternalId?: string | undefined;

  /**
   * The validated address.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * The list of address suggestions..
   *
   * @public
   */
  CandidateAddressList?: CandidateAddress[] | undefined;
}
