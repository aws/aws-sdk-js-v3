// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ChimeSDKVoiceServiceException as __BaseException } from "./ChimeSDKVoiceServiceException";

export enum ErrorCode {
  AccessDenied = "AccessDenied",
  BadRequest = "BadRequest",
  Conflict = "Conflict",
  Forbidden = "Forbidden",
  Gone = "Gone",
  NotFound = "NotFound",
  PhoneNumberAssociationsExist = "PhoneNumberAssociationsExist",
  PreconditionFailed = "PreconditionFailed",
  ResourceLimitExceeded = "ResourceLimitExceeded",
  ServiceFailure = "ServiceFailure",
  ServiceUnavailable = "ServiceUnavailable",
  Throttled = "Throttled",
  Throttling = "Throttling",
  Unauthorized = "Unauthorized",
  Unprocessable = "Unprocessable",
  VoiceConnectorGroupAssociationsExist = "VoiceConnectorGroupAssociationsExist",
}

export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export interface Address {
  streetName?: string;
  streetSuffix?: string;
  postDirectional?: string;
  preDirectional?: string;
  streetNumber?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  postalCodePlus4?: string;
  country?: string;
}

export enum AlexaSkillStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  VoiceConnectorId: string | undefined;
  E164PhoneNumbers: string[] | undefined;
  ForceAssociate?: boolean;
}

export interface PhoneNumberError {
  PhoneNumberId?: string;
  ErrorCode?: ErrorCode | string;
  ErrorMessage?: string;
}

export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}

export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFailureException, __BaseException>) {
    super({
      name: "ServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFailureException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export class ThrottledClientException extends __BaseException {
  readonly name: "ThrottledClientException" = "ThrottledClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledClientException, __BaseException>) {
    super({
      name: "ThrottledClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledClientException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException" = "UnauthorizedClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedClientException, __BaseException>) {
    super({
      name: "UnauthorizedClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string | undefined;
  E164PhoneNumbers: string[] | undefined;
  ForceAssociate?: boolean;
}

export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}

export interface BatchDeletePhoneNumberRequest {
  PhoneNumberIds: string[] | undefined;
}

export interface BatchDeletePhoneNumberResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}

export enum PhoneNumberProductType {
  SipMediaApplicationDialIn = "SipMediaApplicationDialIn",
  VoiceConnector = "VoiceConnector",
}

export interface UpdatePhoneNumberRequestItem {
  PhoneNumberId: string | undefined;
  ProductType?: PhoneNumberProductType | string;
  CallingName?: string;
}

export interface BatchUpdatePhoneNumberRequest {
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

export interface BatchUpdatePhoneNumberResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}

export enum CallingNameStatus {
  Unassigned = "Unassigned",
  UpdateFailed = "UpdateFailed",
  UpdateInProgress = "UpdateInProgress",
  UpdateSucceeded = "UpdateSucceeded",
}

export interface CandidateAddress {
  streetInfo?: string;
  streetNumber?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  postalCodePlus4?: string;
  country?: string;
}

export enum Capability {
  SMS = "SMS",
  Voice = "Voice",
}

export interface CreatePhoneNumberOrderRequest {
  ProductType: PhoneNumberProductType | string | undefined;
  E164PhoneNumbers: string[] | undefined;
}

export enum OrderedPhoneNumberStatus {
  Acquired = "Acquired",
  Failed = "Failed",
  Processing = "Processing",
}

export interface OrderedPhoneNumber {
  E164PhoneNumber?: string;
  Status?: OrderedPhoneNumberStatus | string;
}

export enum PhoneNumberOrderType {
  New = "New",
  Porting = "Porting",
}

export enum PhoneNumberOrderStatus {
  CancelRequested = "CancelRequested",
  Cancelled = "Cancelled",
  ChangeRequested = "ChangeRequested",
  Exception = "Exception",
  FOC = "FOC",
  Failed = "Failed",
  Partial = "Partial",
  PendingDocuments = "PendingDocuments",
  Processing = "Processing",
  Submitted = "Submitted",
  Successful = "Successful",
}

export interface PhoneNumberOrder {
  PhoneNumberOrderId?: string;
  ProductType?: PhoneNumberProductType | string;
  Status?: PhoneNumberOrderStatus | string;
  OrderType?: PhoneNumberOrderType | string;
  OrderedPhoneNumbers?: OrderedPhoneNumber[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}

export interface CreatePhoneNumberOrderResponse {
  PhoneNumberOrder?: PhoneNumberOrder;
}

export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export enum GeoMatchLevel {
  AreaCode = "AreaCode",
  Country = "Country",
}

export interface GeoMatchParams {
  Country: string | undefined;
  AreaCode: string | undefined;
}

export enum NumberSelectionBehavior {
  AvoidSticky = "AvoidSticky",
  PreferSticky = "PreferSticky",
}

export interface CreateProxySessionRequest {
  VoiceConnectorId: string | undefined;
  ParticipantPhoneNumbers: string[] | undefined;
  Name?: string;
  ExpiryMinutes?: number;
  Capabilities: (Capability | string)[] | undefined;
  NumberSelectionBehavior?: NumberSelectionBehavior | string;
  GeoMatchLevel?: GeoMatchLevel | string;
  GeoMatchParams?: GeoMatchParams;
}

export interface Participant {
  PhoneNumber?: string;
  ProxyPhoneNumber?: string;
}

export enum ProxySessionStatus {
  Closed = "Closed",
  InProgress = "InProgress",
  Open = "Open",
}

export interface ProxySession {
  VoiceConnectorId?: string;
  ProxySessionId?: string;
  Name?: string;
  Status?: ProxySessionStatus | string;
  ExpiryMinutes?: number;
  Capabilities?: (Capability | string)[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  EndedTimestamp?: Date;
  Participants?: Participant[];
  NumberSelectionBehavior?: NumberSelectionBehavior | string;
  GeoMatchLevel?: GeoMatchLevel | string;
  GeoMatchParams?: GeoMatchParams;
}

export interface CreateProxySessionResponse {
  ProxySession?: ProxySession;
}

export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export interface SipMediaApplicationEndpoint {
  LambdaArn?: string;
}

export interface CreateSipMediaApplicationRequest {
  AwsRegion: string | undefined;
  Name: string | undefined;
  Endpoints: SipMediaApplicationEndpoint[] | undefined;
}

export interface SipMediaApplication {
  SipMediaApplicationId?: string;
  AwsRegion?: string;
  Name?: string;
  Endpoints?: SipMediaApplicationEndpoint[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}

export interface CreateSipMediaApplicationResponse {
  SipMediaApplication?: SipMediaApplication;
}

export interface CreateSipMediaApplicationCallRequest {
  FromPhoneNumber: string | undefined;
  ToPhoneNumber: string | undefined;
  SipMediaApplicationId: string | undefined;
  SipHeaders?: Record<string, string>;
  ArgumentsMap?: Record<string, string>;
}

export interface SipMediaApplicationCall {
  TransactionId?: string;
}

export interface CreateSipMediaApplicationCallResponse {
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

export interface SipRuleTargetApplication {
  SipMediaApplicationId?: string;
  Priority?: number;
  AwsRegion?: string;
}

export enum SipRuleTriggerType {
  RequestUriHostname = "RequestUriHostname",
  ToPhoneNumber = "ToPhoneNumber",
}

export interface CreateSipRuleRequest {
  Name: string | undefined;
  TriggerType: SipRuleTriggerType | string | undefined;
  TriggerValue: string | undefined;
  Disabled?: boolean;
  TargetApplications?: SipRuleTargetApplication[];
}

export interface SipRule {
  SipRuleId?: string;
  Name?: string;
  Disabled?: boolean;
  TriggerType?: SipRuleTriggerType | string;
  TriggerValue?: string;
  TargetApplications?: SipRuleTargetApplication[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}

export interface CreateSipRuleResponse {
  SipRule?: SipRule;
}

export enum VoiceConnectorAwsRegion {
  AP_NORTHEAST_1 = "ap-northeast-1",
  AP_NORTHEAST_2 = "ap-northeast-2",
  AP_SOUTHEAST_1 = "ap-southeast-1",
  AP_SOUTHEAST_2 = "ap-southeast-2",
  CA_CENTRAL_1 = "ca-central-1",
  EU_CENTRAL_1 = "eu-central-1",
  EU_WEST_1 = "eu-west-1",
  EU_WEST_2 = "eu-west-2",
  US_EAST_1 = "us-east-1",
  US_WEST_2 = "us-west-2",
}

export interface CreateVoiceConnectorRequest {
  Name: string | undefined;
  AwsRegion?: VoiceConnectorAwsRegion | string;
  RequireEncryption: boolean | undefined;
}

export interface VoiceConnector {
  VoiceConnectorId?: string;
  AwsRegion?: VoiceConnectorAwsRegion | string;
  Name?: string;
  OutboundHostName?: string;
  RequireEncryption?: boolean;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  VoiceConnectorArn?: string;
}

export interface CreateVoiceConnectorResponse {
  VoiceConnector?: VoiceConnector;
}

export interface VoiceConnectorItem {
  VoiceConnectorId: string | undefined;
  Priority: number | undefined;
}

export interface CreateVoiceConnectorGroupRequest {
  Name: string | undefined;
  VoiceConnectorItems?: VoiceConnectorItem[];
}

export interface VoiceConnectorGroup {
  VoiceConnectorGroupId?: string;
  Name?: string;
  VoiceConnectorItems?: VoiceConnectorItem[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  VoiceConnectorGroupArn?: string;
}

export interface CreateVoiceConnectorGroupResponse {
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export interface DeletePhoneNumberRequest {
  PhoneNumberId: string | undefined;
}

export interface DeleteProxySessionRequest {
  VoiceConnectorId: string | undefined;
  ProxySessionId: string | undefined;
}

export interface DeleteSipMediaApplicationRequest {
  SipMediaApplicationId: string | undefined;
}

export interface DeleteSipRuleRequest {
  SipRuleId: string | undefined;
}

export interface DeleteVoiceConnectorRequest {
  VoiceConnectorId: string | undefined;
}

export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  VoiceConnectorId: string | undefined;
}

export interface DeleteVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string | undefined;
}

export interface DeleteVoiceConnectorOriginationRequest {
  VoiceConnectorId: string | undefined;
}

export interface DeleteVoiceConnectorProxyRequest {
  VoiceConnectorId: string | undefined;
}

export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  VoiceConnectorId: string | undefined;
}

export interface DeleteVoiceConnectorTerminationRequest {
  VoiceConnectorId: string | undefined;
}

export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  VoiceConnectorId: string | undefined;
  Usernames: string[] | undefined;
}

export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  VoiceConnectorId: string | undefined;
  E164PhoneNumbers: string[] | undefined;
}

export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}

export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string | undefined;
  E164PhoneNumbers: string[] | undefined;
}

export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}

export interface VoiceConnectorSettings {
  CdrBucket?: string;
}

export interface GetGlobalSettingsResponse {
  VoiceConnector?: VoiceConnectorSettings;
}

export interface GetPhoneNumberRequest {
  PhoneNumberId: string | undefined;
}

export enum PhoneNumberAssociationName {
  SipRuleId = "SipRuleId",
  VoiceConnectorGroupId = "VoiceConnectorGroupId",
  VoiceConnectorId = "VoiceConnectorId",
}

export interface PhoneNumberAssociation {
  Value?: string;
  Name?: PhoneNumberAssociationName | string;
  AssociatedTimestamp?: Date;
}

export interface PhoneNumberCapabilities {
  InboundCall?: boolean;
  OutboundCall?: boolean;
  InboundSMS?: boolean;
  OutboundSMS?: boolean;
  InboundMMS?: boolean;
  OutboundMMS?: boolean;
}

export enum PhoneNumberStatus {
  AcquireFailed = "AcquireFailed",
  AcquireInProgress = "AcquireInProgress",
  Assigned = "Assigned",
  Cancelled = "Cancelled",
  DeleteFailed = "DeleteFailed",
  DeleteInProgress = "DeleteInProgress",
  PortinCancelRequested = "PortinCancelRequested",
  PortinInProgress = "PortinInProgress",
  ReleaseFailed = "ReleaseFailed",
  ReleaseInProgress = "ReleaseInProgress",
  Unassigned = "Unassigned",
}

export enum PhoneNumberType {
  Local = "Local",
  TollFree = "TollFree",
}

export interface PhoneNumber {
  PhoneNumberId?: string;
  E164PhoneNumber?: string;
  Country?: string;
  Type?: PhoneNumberType | string;
  ProductType?: PhoneNumberProductType | string;
  Status?: PhoneNumberStatus | string;
  Capabilities?: PhoneNumberCapabilities;
  Associations?: PhoneNumberAssociation[];
  CallingName?: string;
  CallingNameStatus?: CallingNameStatus | string;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  DeletionTimestamp?: Date;
  OrderId?: string;
}

export interface GetPhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}

export interface GetPhoneNumberOrderRequest {
  PhoneNumberOrderId: string | undefined;
}

export interface GetPhoneNumberOrderResponse {
  PhoneNumberOrder?: PhoneNumberOrder;
}

export interface GetPhoneNumberSettingsResponse {
  CallingName?: string;
  CallingNameUpdatedTimestamp?: Date;
}

export interface GetProxySessionRequest {
  VoiceConnectorId: string | undefined;
  ProxySessionId: string | undefined;
}

export interface GetProxySessionResponse {
  ProxySession?: ProxySession;
}

export interface GetSipMediaApplicationRequest {
  SipMediaApplicationId: string | undefined;
}

export interface GetSipMediaApplicationResponse {
  SipMediaApplication?: SipMediaApplication;
}

export interface GetSipMediaApplicationAlexaSkillConfigurationRequest {
  SipMediaApplicationId: string | undefined;
}

export interface SipMediaApplicationAlexaSkillConfiguration {
  AlexaSkillStatus: AlexaSkillStatus | string | undefined;
  AlexaSkillIds: string[] | undefined;
}

export interface GetSipMediaApplicationAlexaSkillConfigurationResponse {
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}

export interface GetSipMediaApplicationLoggingConfigurationRequest {
  SipMediaApplicationId: string | undefined;
}

export interface SipMediaApplicationLoggingConfiguration {
  EnableSipMediaApplicationMessageLogs?: boolean;
}

export interface GetSipMediaApplicationLoggingConfigurationResponse {
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

export interface GetSipRuleRequest {
  SipRuleId: string | undefined;
}

export interface GetSipRuleResponse {
  SipRule?: SipRule;
}

export interface GetVoiceConnectorRequest {
  VoiceConnectorId: string | undefined;
}

export interface GetVoiceConnectorResponse {
  VoiceConnector?: VoiceConnector;
}

export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  VoiceConnectorId: string | undefined;
}

export interface DNISEmergencyCallingConfiguration {
  EmergencyPhoneNumber: string | undefined;
  TestPhoneNumber?: string;
  CallingCountry: string | undefined;
}

export interface EmergencyCallingConfiguration {
  DNIS?: DNISEmergencyCallingConfiguration[];
}

export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

export interface GetVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string | undefined;
}

export interface GetVoiceConnectorGroupResponse {
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export interface GetVoiceConnectorLoggingConfigurationRequest {
  VoiceConnectorId: string | undefined;
}

export interface LoggingConfiguration {
  EnableSIPLogs?: boolean;
}

export interface GetVoiceConnectorLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}

export interface GetVoiceConnectorOriginationRequest {
  VoiceConnectorId: string | undefined;
}

export enum OriginationRouteProtocol {
  TCP = "TCP",
  UDP = "UDP",
}

export interface OriginationRoute {
  Host?: string;
  Port?: number;
  Protocol?: OriginationRouteProtocol | string;
  Priority?: number;
  Weight?: number;
}

export interface Origination {
  Routes?: OriginationRoute[];
  Disabled?: boolean;
}

export interface GetVoiceConnectorOriginationResponse {
  Origination?: Origination;
}

export interface GetVoiceConnectorProxyRequest {
  VoiceConnectorId: string | undefined;
}

export interface Proxy {
  DefaultSessionExpiryMinutes?: number;
  Disabled?: boolean;
  FallBackPhoneNumber?: string;
  PhoneNumberCountries?: string[];
}

export interface GetVoiceConnectorProxyResponse {
  Proxy?: Proxy;
}

export interface GetVoiceConnectorStreamingConfigurationRequest {
  VoiceConnectorId: string | undefined;
}

export enum NotificationTarget {
  EventBridge = "EventBridge",
  SNS = "SNS",
  SQS = "SQS",
}

export interface StreamingNotificationTarget {
  NotificationTarget?: NotificationTarget | string;
}

export interface StreamingConfiguration {
  DataRetentionInHours: number | undefined;
  Disabled: boolean | undefined;
  StreamingNotificationTargets?: StreamingNotificationTarget[];
}

export interface GetVoiceConnectorStreamingConfigurationResponse {
  StreamingConfiguration?: StreamingConfiguration;
}

export interface GetVoiceConnectorTerminationRequest {
  VoiceConnectorId: string | undefined;
}

export interface Termination {
  CpsLimit?: number;
  DefaultPhoneNumber?: string;
  CallingRegions?: string[];
  CidrAllowedList?: string[];
  Disabled?: boolean;
}

export interface GetVoiceConnectorTerminationResponse {
  Termination?: Termination;
}

export interface GetVoiceConnectorTerminationHealthRequest {
  VoiceConnectorId: string | undefined;
}

export interface TerminationHealth {
  Timestamp?: Date;
  Source?: string;
}

export interface GetVoiceConnectorTerminationHealthResponse {
  TerminationHealth?: TerminationHealth;
}

export interface ListAvailableVoiceConnectorRegionsResponse {
  VoiceConnectorRegions?: (VoiceConnectorAwsRegion | string)[];
}

export interface ListPhoneNumberOrdersRequest {
  NextToken?: string;
  MaxResults?: number;
}

export interface ListPhoneNumberOrdersResponse {
  PhoneNumberOrders?: PhoneNumberOrder[];
  NextToken?: string;
}

export interface ListPhoneNumbersRequest {
  Status?: string;
  ProductType?: PhoneNumberProductType | string;
  FilterName?: PhoneNumberAssociationName | string;
  FilterValue?: string;
  MaxResults?: number;
  NextToken?: string;
}

export interface ListPhoneNumbersResponse {
  PhoneNumbers?: PhoneNumber[];
  NextToken?: string;
}

export interface ListProxySessionsRequest {
  VoiceConnectorId: string | undefined;
  Status?: ProxySessionStatus | string;
  NextToken?: string;
  MaxResults?: number;
}

export interface ListProxySessionsResponse {
  ProxySessions?: ProxySession[];
  NextToken?: string;
}

export interface ListSipMediaApplicationsRequest {
  MaxResults?: number;
  NextToken?: string;
}

export interface ListSipMediaApplicationsResponse {
  SipMediaApplications?: SipMediaApplication[];
  NextToken?: string;
}

export interface ListSipRulesRequest {
  SipMediaApplicationId?: string;
  MaxResults?: number;
  NextToken?: string;
}

export interface ListSipRulesResponse {
  SipRules?: SipRule[];
  NextToken?: string;
}

export interface ListSupportedPhoneNumberCountriesRequest {
  ProductType: PhoneNumberProductType | string | undefined;
}

export interface PhoneNumberCountry {
  CountryCode?: string;
  SupportedPhoneNumberTypes?: (PhoneNumberType | string)[];
}

export interface ListSupportedPhoneNumberCountriesResponse {
  PhoneNumberCountries?: PhoneNumberCountry[];
}

export interface ListVoiceConnectorGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
}

export interface ListVoiceConnectorGroupsResponse {
  VoiceConnectorGroups?: VoiceConnectorGroup[];
  NextToken?: string;
}

export interface ListVoiceConnectorsRequest {
  NextToken?: string;
  MaxResults?: number;
}

export interface ListVoiceConnectorsResponse {
  VoiceConnectors?: VoiceConnector[];
  NextToken?: string;
}

export interface ListVoiceConnectorTerminationCredentialsRequest {
  VoiceConnectorId: string | undefined;
}

export interface ListVoiceConnectorTerminationCredentialsResponse {
  Usernames?: string[];
}

export interface PutSipMediaApplicationAlexaSkillConfigurationRequest {
  SipMediaApplicationId: string | undefined;
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}

export interface PutSipMediaApplicationAlexaSkillConfigurationResponse {
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}

export interface PutSipMediaApplicationLoggingConfigurationRequest {
  SipMediaApplicationId: string | undefined;
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

export interface PutSipMediaApplicationLoggingConfigurationResponse {
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  VoiceConnectorId: string | undefined;
  EmergencyCallingConfiguration: EmergencyCallingConfiguration | undefined;
}

export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

export interface PutVoiceConnectorLoggingConfigurationRequest {
  VoiceConnectorId: string | undefined;
  LoggingConfiguration: LoggingConfiguration | undefined;
}

export interface PutVoiceConnectorLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}

export interface PutVoiceConnectorOriginationRequest {
  VoiceConnectorId: string | undefined;
  Origination: Origination | undefined;
}

export interface PutVoiceConnectorOriginationResponse {
  Origination?: Origination;
}

export interface PutVoiceConnectorProxyRequest {
  VoiceConnectorId: string | undefined;
  DefaultSessionExpiryMinutes: number | undefined;
  PhoneNumberPoolCountries: string[] | undefined;
  FallBackPhoneNumber?: string;
  Disabled?: boolean;
}

export interface PutVoiceConnectorProxyResponse {
  Proxy?: Proxy;
}

export interface PutVoiceConnectorStreamingConfigurationRequest {
  VoiceConnectorId: string | undefined;
  StreamingConfiguration: StreamingConfiguration | undefined;
}

export interface PutVoiceConnectorStreamingConfigurationResponse {
  StreamingConfiguration?: StreamingConfiguration;
}

export interface PutVoiceConnectorTerminationRequest {
  VoiceConnectorId: string | undefined;
  Termination: Termination | undefined;
}

export interface PutVoiceConnectorTerminationResponse {
  Termination?: Termination;
}

export interface Credential {
  Username?: string;
  Password?: string;
}

export interface PutVoiceConnectorTerminationCredentialsRequest {
  VoiceConnectorId: string | undefined;
  Credentials?: Credential[];
}

export interface RestorePhoneNumberRequest {
  PhoneNumberId: string | undefined;
}

export interface RestorePhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}

export interface SearchAvailablePhoneNumbersRequest {
  AreaCode?: string;
  City?: string;
  Country?: string;
  State?: string;
  TollFreePrefix?: string;
  PhoneNumberType?: PhoneNumberType | string;
  MaxResults?: number;
  NextToken?: string;
}

export interface SearchAvailablePhoneNumbersResponse {
  E164PhoneNumbers?: string[];
  NextToken?: string;
}

export interface UpdateGlobalSettingsRequest {
  VoiceConnector?: VoiceConnectorSettings;
}

export interface UpdatePhoneNumberRequest {
  PhoneNumberId: string | undefined;
  ProductType?: PhoneNumberProductType | string;
  CallingName?: string;
}

export interface UpdatePhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}

export interface UpdatePhoneNumberSettingsRequest {
  CallingName: string | undefined;
}

export interface UpdateProxySessionRequest {
  VoiceConnectorId: string | undefined;
  ProxySessionId: string | undefined;
  Capabilities: (Capability | string)[] | undefined;
  ExpiryMinutes?: number;
}

export interface UpdateProxySessionResponse {
  ProxySession?: ProxySession;
}

export interface UpdateSipMediaApplicationRequest {
  SipMediaApplicationId: string | undefined;
  Name?: string;
  Endpoints?: SipMediaApplicationEndpoint[];
}

export interface UpdateSipMediaApplicationResponse {
  SipMediaApplication?: SipMediaApplication;
}

export interface UpdateSipMediaApplicationCallRequest {
  SipMediaApplicationId: string | undefined;
  TransactionId: string | undefined;
  Arguments: Record<string, string> | undefined;
}

export interface UpdateSipMediaApplicationCallResponse {
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

export interface UpdateSipRuleRequest {
  SipRuleId: string | undefined;
  Name: string | undefined;
  Disabled?: boolean;
  TargetApplications?: SipRuleTargetApplication[];
}

export interface UpdateSipRuleResponse {
  SipRule?: SipRule;
}

export interface UpdateVoiceConnectorRequest {
  VoiceConnectorId: string | undefined;
  Name: string | undefined;
  RequireEncryption: boolean | undefined;
}

export interface UpdateVoiceConnectorResponse {
  VoiceConnector?: VoiceConnector;
}

export interface UpdateVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string | undefined;
  Name: string | undefined;
  VoiceConnectorItems: VoiceConnectorItem[] | undefined;
}

export interface UpdateVoiceConnectorGroupResponse {
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export interface ValidateE911AddressRequest {
  AwsAccountId: string | undefined;
  StreetNumber: string | undefined;
  StreetInfo: string | undefined;
  City: string | undefined;
  State: string | undefined;
  Country: string | undefined;
  PostalCode: string | undefined;
}

export interface ValidateE911AddressResponse {
  ValidationResult?: number;
  AddressExternalId?: string;
  Address?: Address;
  CandidateAddressList?: CandidateAddress[];
}

/**
 * @internal
 */
export const AddressFilterSensitiveLog = (obj: Address): any => ({
  ...obj,
  ...(obj.streetName && { streetName: SENSITIVE_STRING }),
  ...(obj.streetSuffix && { streetSuffix: SENSITIVE_STRING }),
  ...(obj.postDirectional && { postDirectional: SENSITIVE_STRING }),
  ...(obj.preDirectional && { preDirectional: SENSITIVE_STRING }),
  ...(obj.streetNumber && { streetNumber: SENSITIVE_STRING }),
  ...(obj.city && { city: SENSITIVE_STRING }),
  ...(obj.state && { state: SENSITIVE_STRING }),
  ...(obj.postalCode && { postalCode: SENSITIVE_STRING }),
  ...(obj.postalCodePlus4 && { postalCodePlus4: SENSITIVE_STRING }),
  ...(obj.country && { country: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssociatePhoneNumbersWithVoiceConnectorRequestFilterSensitiveLog = (
  obj: AssociatePhoneNumbersWithVoiceConnectorRequest
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PhoneNumberErrorFilterSensitiveLog = (obj: PhoneNumberError): any => ({
  ...obj,
  ...(obj.PhoneNumberId && { PhoneNumberId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssociatePhoneNumbersWithVoiceConnectorResponseFilterSensitiveLog = (
  obj: AssociatePhoneNumbersWithVoiceConnectorResponse
): any => ({
  ...obj,
  ...(obj.PhoneNumberErrors && {
    PhoneNumberErrors: obj.PhoneNumberErrors.map((item) => PhoneNumberErrorFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AssociatePhoneNumbersWithVoiceConnectorGroupRequestFilterSensitiveLog = (
  obj: AssociatePhoneNumbersWithVoiceConnectorGroupRequest
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssociatePhoneNumbersWithVoiceConnectorGroupResponseFilterSensitiveLog = (
  obj: AssociatePhoneNumbersWithVoiceConnectorGroupResponse
): any => ({
  ...obj,
  ...(obj.PhoneNumberErrors && {
    PhoneNumberErrors: obj.PhoneNumberErrors.map((item) => PhoneNumberErrorFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const BatchDeletePhoneNumberRequestFilterSensitiveLog = (obj: BatchDeletePhoneNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeletePhoneNumberResponseFilterSensitiveLog = (obj: BatchDeletePhoneNumberResponse): any => ({
  ...obj,
  ...(obj.PhoneNumberErrors && {
    PhoneNumberErrors: obj.PhoneNumberErrors.map((item) => PhoneNumberErrorFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdatePhoneNumberRequestItemFilterSensitiveLog = (obj: UpdatePhoneNumberRequestItem): any => ({
  ...obj,
  ...(obj.PhoneNumberId && { PhoneNumberId: SENSITIVE_STRING }),
  ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchUpdatePhoneNumberRequestFilterSensitiveLog = (obj: BatchUpdatePhoneNumberRequest): any => ({
  ...obj,
  ...(obj.UpdatePhoneNumberRequestItems && {
    UpdatePhoneNumberRequestItems: obj.UpdatePhoneNumberRequestItems.map((item) =>
      UpdatePhoneNumberRequestItemFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const BatchUpdatePhoneNumberResponseFilterSensitiveLog = (obj: BatchUpdatePhoneNumberResponse): any => ({
  ...obj,
  ...(obj.PhoneNumberErrors && {
    PhoneNumberErrors: obj.PhoneNumberErrors.map((item) => PhoneNumberErrorFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CandidateAddressFilterSensitiveLog = (obj: CandidateAddress): any => ({
  ...obj,
  ...(obj.streetInfo && { streetInfo: SENSITIVE_STRING }),
  ...(obj.streetNumber && { streetNumber: SENSITIVE_STRING }),
  ...(obj.city && { city: SENSITIVE_STRING }),
  ...(obj.state && { state: SENSITIVE_STRING }),
  ...(obj.postalCode && { postalCode: SENSITIVE_STRING }),
  ...(obj.postalCodePlus4 && { postalCodePlus4: SENSITIVE_STRING }),
  ...(obj.country && { country: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePhoneNumberOrderRequestFilterSensitiveLog = (obj: CreatePhoneNumberOrderRequest): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OrderedPhoneNumberFilterSensitiveLog = (obj: OrderedPhoneNumber): any => ({
  ...obj,
  ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PhoneNumberOrderFilterSensitiveLog = (obj: PhoneNumberOrder): any => ({
  ...obj,
  ...(obj.OrderedPhoneNumbers && {
    OrderedPhoneNumbers: obj.OrderedPhoneNumbers.map((item) => OrderedPhoneNumberFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreatePhoneNumberOrderResponseFilterSensitiveLog = (obj: CreatePhoneNumberOrderResponse): any => ({
  ...obj,
  ...(obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrderFilterSensitiveLog(obj.PhoneNumberOrder) }),
});

/**
 * @internal
 */
export const GeoMatchParamsFilterSensitiveLog = (obj: GeoMatchParams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProxySessionRequestFilterSensitiveLog = (obj: CreateProxySessionRequest): any => ({
  ...obj,
  ...(obj.ParticipantPhoneNumbers && { ParticipantPhoneNumbers: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ParticipantFilterSensitiveLog = (obj: Participant): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.ProxyPhoneNumber && { ProxyPhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ProxySessionFilterSensitiveLog = (obj: ProxySession): any => ({
  ...obj,
  ...(obj.Participants && { Participants: obj.Participants.map((item) => ParticipantFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateProxySessionResponseFilterSensitiveLog = (obj: CreateProxySessionResponse): any => ({
  ...obj,
  ...(obj.ProxySession && { ProxySession: ProxySessionFilterSensitiveLog(obj.ProxySession) }),
});

/**
 * @internal
 */
export const SipMediaApplicationEndpointFilterSensitiveLog = (obj: SipMediaApplicationEndpoint): any => ({
  ...obj,
  ...(obj.LambdaArn && { LambdaArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSipMediaApplicationRequestFilterSensitiveLog = (obj: CreateSipMediaApplicationRequest): any => ({
  ...obj,
  ...(obj.Endpoints && { Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpointFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SipMediaApplicationFilterSensitiveLog = (obj: SipMediaApplication): any => ({
  ...obj,
  ...(obj.Endpoints && { Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpointFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateSipMediaApplicationResponseFilterSensitiveLog = (obj: CreateSipMediaApplicationResponse): any => ({
  ...obj,
  ...(obj.SipMediaApplication && {
    SipMediaApplication: SipMediaApplicationFilterSensitiveLog(obj.SipMediaApplication),
  }),
});

/**
 * @internal
 */
export const CreateSipMediaApplicationCallRequestFilterSensitiveLog = (
  obj: CreateSipMediaApplicationCallRequest
): any => ({
  ...obj,
  ...(obj.FromPhoneNumber && { FromPhoneNumber: SENSITIVE_STRING }),
  ...(obj.ToPhoneNumber && { ToPhoneNumber: SENSITIVE_STRING }),
  ...(obj.SipHeaders && { SipHeaders: SENSITIVE_STRING }),
  ...(obj.ArgumentsMap && { ArgumentsMap: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SipMediaApplicationCallFilterSensitiveLog = (obj: SipMediaApplicationCall): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSipMediaApplicationCallResponseFilterSensitiveLog = (
  obj: CreateSipMediaApplicationCallResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SipRuleTargetApplicationFilterSensitiveLog = (obj: SipRuleTargetApplication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSipRuleRequestFilterSensitiveLog = (obj: CreateSipRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SipRuleFilterSensitiveLog = (obj: SipRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSipRuleResponseFilterSensitiveLog = (obj: CreateSipRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVoiceConnectorRequestFilterSensitiveLog = (obj: CreateVoiceConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoiceConnectorFilterSensitiveLog = (obj: VoiceConnector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVoiceConnectorResponseFilterSensitiveLog = (obj: CreateVoiceConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoiceConnectorItemFilterSensitiveLog = (obj: VoiceConnectorItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVoiceConnectorGroupRequestFilterSensitiveLog = (obj: CreateVoiceConnectorGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoiceConnectorGroupFilterSensitiveLog = (obj: VoiceConnectorGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVoiceConnectorGroupResponseFilterSensitiveLog = (obj: CreateVoiceConnectorGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePhoneNumberRequestFilterSensitiveLog = (obj: DeletePhoneNumberRequest): any => ({
  ...obj,
  ...(obj.PhoneNumberId && { PhoneNumberId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteProxySessionRequestFilterSensitiveLog = (obj: DeleteProxySessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSipMediaApplicationRequestFilterSensitiveLog = (obj: DeleteSipMediaApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSipRuleRequestFilterSensitiveLog = (obj: DeleteSipRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorRequestFilterSensitiveLog = (obj: DeleteVoiceConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorEmergencyCallingConfigurationRequestFilterSensitiveLog = (
  obj: DeleteVoiceConnectorEmergencyCallingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorGroupRequestFilterSensitiveLog = (obj: DeleteVoiceConnectorGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorOriginationRequestFilterSensitiveLog = (
  obj: DeleteVoiceConnectorOriginationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorProxyRequestFilterSensitiveLog = (obj: DeleteVoiceConnectorProxyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorStreamingConfigurationRequestFilterSensitiveLog = (
  obj: DeleteVoiceConnectorStreamingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorTerminationRequestFilterSensitiveLog = (
  obj: DeleteVoiceConnectorTerminationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorTerminationCredentialsRequestFilterSensitiveLog = (
  obj: DeleteVoiceConnectorTerminationCredentialsRequest
): any => ({
  ...obj,
  ...(obj.Usernames && { Usernames: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DisassociatePhoneNumbersFromVoiceConnectorRequestFilterSensitiveLog = (
  obj: DisassociatePhoneNumbersFromVoiceConnectorRequest
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DisassociatePhoneNumbersFromVoiceConnectorResponseFilterSensitiveLog = (
  obj: DisassociatePhoneNumbersFromVoiceConnectorResponse
): any => ({
  ...obj,
  ...(obj.PhoneNumberErrors && {
    PhoneNumberErrors: obj.PhoneNumberErrors.map((item) => PhoneNumberErrorFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DisassociatePhoneNumbersFromVoiceConnectorGroupRequestFilterSensitiveLog = (
  obj: DisassociatePhoneNumbersFromVoiceConnectorGroupRequest
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DisassociatePhoneNumbersFromVoiceConnectorGroupResponseFilterSensitiveLog = (
  obj: DisassociatePhoneNumbersFromVoiceConnectorGroupResponse
): any => ({
  ...obj,
  ...(obj.PhoneNumberErrors && {
    PhoneNumberErrors: obj.PhoneNumberErrors.map((item) => PhoneNumberErrorFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const VoiceConnectorSettingsFilterSensitiveLog = (obj: VoiceConnectorSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGlobalSettingsResponseFilterSensitiveLog = (obj: GetGlobalSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPhoneNumberRequestFilterSensitiveLog = (obj: GetPhoneNumberRequest): any => ({
  ...obj,
  ...(obj.PhoneNumberId && { PhoneNumberId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PhoneNumberAssociationFilterSensitiveLog = (obj: PhoneNumberAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhoneNumberCapabilitiesFilterSensitiveLog = (obj: PhoneNumberCapabilities): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhoneNumberFilterSensitiveLog = (obj: PhoneNumber): any => ({
  ...obj,
  ...(obj.PhoneNumberId && { PhoneNumberId: SENSITIVE_STRING }),
  ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
  ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPhoneNumberResponseFilterSensitiveLog = (obj: GetPhoneNumberResponse): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: PhoneNumberFilterSensitiveLog(obj.PhoneNumber) }),
});

/**
 * @internal
 */
export const GetPhoneNumberOrderRequestFilterSensitiveLog = (obj: GetPhoneNumberOrderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPhoneNumberOrderResponseFilterSensitiveLog = (obj: GetPhoneNumberOrderResponse): any => ({
  ...obj,
  ...(obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrderFilterSensitiveLog(obj.PhoneNumberOrder) }),
});

/**
 * @internal
 */
export const GetPhoneNumberSettingsResponseFilterSensitiveLog = (obj: GetPhoneNumberSettingsResponse): any => ({
  ...obj,
  ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetProxySessionRequestFilterSensitiveLog = (obj: GetProxySessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetProxySessionResponseFilterSensitiveLog = (obj: GetProxySessionResponse): any => ({
  ...obj,
  ...(obj.ProxySession && { ProxySession: ProxySessionFilterSensitiveLog(obj.ProxySession) }),
});

/**
 * @internal
 */
export const GetSipMediaApplicationRequestFilterSensitiveLog = (obj: GetSipMediaApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSipMediaApplicationResponseFilterSensitiveLog = (obj: GetSipMediaApplicationResponse): any => ({
  ...obj,
  ...(obj.SipMediaApplication && {
    SipMediaApplication: SipMediaApplicationFilterSensitiveLog(obj.SipMediaApplication),
  }),
});

/**
 * @internal
 */
export const GetSipMediaApplicationAlexaSkillConfigurationRequestFilterSensitiveLog = (
  obj: GetSipMediaApplicationAlexaSkillConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SipMediaApplicationAlexaSkillConfigurationFilterSensitiveLog = (
  obj: SipMediaApplicationAlexaSkillConfiguration
): any => ({
  ...obj,
  ...(obj.AlexaSkillIds && { AlexaSkillIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSipMediaApplicationAlexaSkillConfigurationResponseFilterSensitiveLog = (
  obj: GetSipMediaApplicationAlexaSkillConfigurationResponse
): any => ({
  ...obj,
  ...(obj.SipMediaApplicationAlexaSkillConfiguration && {
    SipMediaApplicationAlexaSkillConfiguration: SipMediaApplicationAlexaSkillConfigurationFilterSensitiveLog(
      obj.SipMediaApplicationAlexaSkillConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const GetSipMediaApplicationLoggingConfigurationRequestFilterSensitiveLog = (
  obj: GetSipMediaApplicationLoggingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SipMediaApplicationLoggingConfigurationFilterSensitiveLog = (
  obj: SipMediaApplicationLoggingConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSipMediaApplicationLoggingConfigurationResponseFilterSensitiveLog = (
  obj: GetSipMediaApplicationLoggingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSipRuleRequestFilterSensitiveLog = (obj: GetSipRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSipRuleResponseFilterSensitiveLog = (obj: GetSipRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorRequestFilterSensitiveLog = (obj: GetVoiceConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorResponseFilterSensitiveLog = (obj: GetVoiceConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorEmergencyCallingConfigurationRequestFilterSensitiveLog = (
  obj: GetVoiceConnectorEmergencyCallingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DNISEmergencyCallingConfigurationFilterSensitiveLog = (obj: DNISEmergencyCallingConfiguration): any => ({
  ...obj,
  ...(obj.EmergencyPhoneNumber && { EmergencyPhoneNumber: SENSITIVE_STRING }),
  ...(obj.TestPhoneNumber && { TestPhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EmergencyCallingConfigurationFilterSensitiveLog = (obj: EmergencyCallingConfiguration): any => ({
  ...obj,
  ...(obj.DNIS && { DNIS: obj.DNIS.map((item) => DNISEmergencyCallingConfigurationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetVoiceConnectorEmergencyCallingConfigurationResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorEmergencyCallingConfigurationResponse
): any => ({
  ...obj,
  ...(obj.EmergencyCallingConfiguration && {
    EmergencyCallingConfiguration: EmergencyCallingConfigurationFilterSensitiveLog(obj.EmergencyCallingConfiguration),
  }),
});

/**
 * @internal
 */
export const GetVoiceConnectorGroupRequestFilterSensitiveLog = (obj: GetVoiceConnectorGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorGroupResponseFilterSensitiveLog = (obj: GetVoiceConnectorGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorLoggingConfigurationRequestFilterSensitiveLog = (
  obj: GetVoiceConnectorLoggingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingConfigurationFilterSensitiveLog = (obj: LoggingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorLoggingConfigurationResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorLoggingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorOriginationRequestFilterSensitiveLog = (
  obj: GetVoiceConnectorOriginationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginationRouteFilterSensitiveLog = (obj: OriginationRoute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginationFilterSensitiveLog = (obj: Origination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorOriginationResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorOriginationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorProxyRequestFilterSensitiveLog = (obj: GetVoiceConnectorProxyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProxyFilterSensitiveLog = (obj: Proxy): any => ({
  ...obj,
  ...(obj.FallBackPhoneNumber && { FallBackPhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetVoiceConnectorProxyResponseFilterSensitiveLog = (obj: GetVoiceConnectorProxyResponse): any => ({
  ...obj,
  ...(obj.Proxy && { Proxy: ProxyFilterSensitiveLog(obj.Proxy) }),
});

/**
 * @internal
 */
export const GetVoiceConnectorStreamingConfigurationRequestFilterSensitiveLog = (
  obj: GetVoiceConnectorStreamingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamingNotificationTargetFilterSensitiveLog = (obj: StreamingNotificationTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamingConfigurationFilterSensitiveLog = (obj: StreamingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorStreamingConfigurationResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorStreamingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorTerminationRequestFilterSensitiveLog = (
  obj: GetVoiceConnectorTerminationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminationFilterSensitiveLog = (obj: Termination): any => ({
  ...obj,
  ...(obj.DefaultPhoneNumber && { DefaultPhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetVoiceConnectorTerminationResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorTerminationResponse
): any => ({
  ...obj,
  ...(obj.Termination && { Termination: TerminationFilterSensitiveLog(obj.Termination) }),
});

/**
 * @internal
 */
export const GetVoiceConnectorTerminationHealthRequestFilterSensitiveLog = (
  obj: GetVoiceConnectorTerminationHealthRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminationHealthFilterSensitiveLog = (obj: TerminationHealth): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorTerminationHealthResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorTerminationHealthResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAvailableVoiceConnectorRegionsResponseFilterSensitiveLog = (
  obj: ListAvailableVoiceConnectorRegionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPhoneNumberOrdersRequestFilterSensitiveLog = (obj: ListPhoneNumberOrdersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPhoneNumberOrdersResponseFilterSensitiveLog = (obj: ListPhoneNumberOrdersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPhoneNumbersRequestFilterSensitiveLog = (obj: ListPhoneNumbersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPhoneNumbersResponseFilterSensitiveLog = (obj: ListPhoneNumbersResponse): any => ({
  ...obj,
  ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumberFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListProxySessionsRequestFilterSensitiveLog = (obj: ListProxySessionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProxySessionsResponseFilterSensitiveLog = (obj: ListProxySessionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSipMediaApplicationsRequestFilterSensitiveLog = (obj: ListSipMediaApplicationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSipMediaApplicationsResponseFilterSensitiveLog = (obj: ListSipMediaApplicationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSipRulesRequestFilterSensitiveLog = (obj: ListSipRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSipRulesResponseFilterSensitiveLog = (obj: ListSipRulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSupportedPhoneNumberCountriesRequestFilterSensitiveLog = (
  obj: ListSupportedPhoneNumberCountriesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhoneNumberCountryFilterSensitiveLog = (obj: PhoneNumberCountry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSupportedPhoneNumberCountriesResponseFilterSensitiveLog = (
  obj: ListSupportedPhoneNumberCountriesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVoiceConnectorGroupsRequestFilterSensitiveLog = (obj: ListVoiceConnectorGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVoiceConnectorGroupsResponseFilterSensitiveLog = (obj: ListVoiceConnectorGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVoiceConnectorsRequestFilterSensitiveLog = (obj: ListVoiceConnectorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVoiceConnectorsResponseFilterSensitiveLog = (obj: ListVoiceConnectorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVoiceConnectorTerminationCredentialsRequestFilterSensitiveLog = (
  obj: ListVoiceConnectorTerminationCredentialsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVoiceConnectorTerminationCredentialsResponseFilterSensitiveLog = (
  obj: ListVoiceConnectorTerminationCredentialsResponse
): any => ({
  ...obj,
  ...(obj.Usernames && { Usernames: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutSipMediaApplicationAlexaSkillConfigurationRequestFilterSensitiveLog = (
  obj: PutSipMediaApplicationAlexaSkillConfigurationRequest
): any => ({
  ...obj,
  ...(obj.SipMediaApplicationAlexaSkillConfiguration && {
    SipMediaApplicationAlexaSkillConfiguration: SipMediaApplicationAlexaSkillConfigurationFilterSensitiveLog(
      obj.SipMediaApplicationAlexaSkillConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const PutSipMediaApplicationAlexaSkillConfigurationResponseFilterSensitiveLog = (
  obj: PutSipMediaApplicationAlexaSkillConfigurationResponse
): any => ({
  ...obj,
  ...(obj.SipMediaApplicationAlexaSkillConfiguration && {
    SipMediaApplicationAlexaSkillConfiguration: SipMediaApplicationAlexaSkillConfigurationFilterSensitiveLog(
      obj.SipMediaApplicationAlexaSkillConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const PutSipMediaApplicationLoggingConfigurationRequestFilterSensitiveLog = (
  obj: PutSipMediaApplicationLoggingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutSipMediaApplicationLoggingConfigurationResponseFilterSensitiveLog = (
  obj: PutSipMediaApplicationLoggingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVoiceConnectorEmergencyCallingConfigurationRequestFilterSensitiveLog = (
  obj: PutVoiceConnectorEmergencyCallingConfigurationRequest
): any => ({
  ...obj,
  ...(obj.EmergencyCallingConfiguration && {
    EmergencyCallingConfiguration: EmergencyCallingConfigurationFilterSensitiveLog(obj.EmergencyCallingConfiguration),
  }),
});

/**
 * @internal
 */
export const PutVoiceConnectorEmergencyCallingConfigurationResponseFilterSensitiveLog = (
  obj: PutVoiceConnectorEmergencyCallingConfigurationResponse
): any => ({
  ...obj,
  ...(obj.EmergencyCallingConfiguration && {
    EmergencyCallingConfiguration: EmergencyCallingConfigurationFilterSensitiveLog(obj.EmergencyCallingConfiguration),
  }),
});

/**
 * @internal
 */
export const PutVoiceConnectorLoggingConfigurationRequestFilterSensitiveLog = (
  obj: PutVoiceConnectorLoggingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVoiceConnectorLoggingConfigurationResponseFilterSensitiveLog = (
  obj: PutVoiceConnectorLoggingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVoiceConnectorOriginationRequestFilterSensitiveLog = (
  obj: PutVoiceConnectorOriginationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVoiceConnectorOriginationResponseFilterSensitiveLog = (
  obj: PutVoiceConnectorOriginationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVoiceConnectorProxyRequestFilterSensitiveLog = (obj: PutVoiceConnectorProxyRequest): any => ({
  ...obj,
  ...(obj.FallBackPhoneNumber && { FallBackPhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutVoiceConnectorProxyResponseFilterSensitiveLog = (obj: PutVoiceConnectorProxyResponse): any => ({
  ...obj,
  ...(obj.Proxy && { Proxy: ProxyFilterSensitiveLog(obj.Proxy) }),
});

/**
 * @internal
 */
export const PutVoiceConnectorStreamingConfigurationRequestFilterSensitiveLog = (
  obj: PutVoiceConnectorStreamingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVoiceConnectorStreamingConfigurationResponseFilterSensitiveLog = (
  obj: PutVoiceConnectorStreamingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVoiceConnectorTerminationRequestFilterSensitiveLog = (
  obj: PutVoiceConnectorTerminationRequest
): any => ({
  ...obj,
  ...(obj.Termination && { Termination: TerminationFilterSensitiveLog(obj.Termination) }),
});

/**
 * @internal
 */
export const PutVoiceConnectorTerminationResponseFilterSensitiveLog = (
  obj: PutVoiceConnectorTerminationResponse
): any => ({
  ...obj,
  ...(obj.Termination && { Termination: TerminationFilterSensitiveLog(obj.Termination) }),
});

/**
 * @internal
 */
export const CredentialFilterSensitiveLog = (obj: Credential): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutVoiceConnectorTerminationCredentialsRequestFilterSensitiveLog = (
  obj: PutVoiceConnectorTerminationCredentialsRequest
): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: obj.Credentials.map((item) => CredentialFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RestorePhoneNumberRequestFilterSensitiveLog = (obj: RestorePhoneNumberRequest): any => ({
  ...obj,
  ...(obj.PhoneNumberId && { PhoneNumberId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RestorePhoneNumberResponseFilterSensitiveLog = (obj: RestorePhoneNumberResponse): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: PhoneNumberFilterSensitiveLog(obj.PhoneNumber) }),
});

/**
 * @internal
 */
export const SearchAvailablePhoneNumbersRequestFilterSensitiveLog = (obj: SearchAvailablePhoneNumbersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchAvailablePhoneNumbersResponseFilterSensitiveLog = (
  obj: SearchAvailablePhoneNumbersResponse
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlobalSettingsRequestFilterSensitiveLog = (obj: UpdateGlobalSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePhoneNumberRequestFilterSensitiveLog = (obj: UpdatePhoneNumberRequest): any => ({
  ...obj,
  ...(obj.PhoneNumberId && { PhoneNumberId: SENSITIVE_STRING }),
  ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePhoneNumberResponseFilterSensitiveLog = (obj: UpdatePhoneNumberResponse): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: PhoneNumberFilterSensitiveLog(obj.PhoneNumber) }),
});

/**
 * @internal
 */
export const UpdatePhoneNumberSettingsRequestFilterSensitiveLog = (obj: UpdatePhoneNumberSettingsRequest): any => ({
  ...obj,
  ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateProxySessionRequestFilterSensitiveLog = (obj: UpdateProxySessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProxySessionResponseFilterSensitiveLog = (obj: UpdateProxySessionResponse): any => ({
  ...obj,
  ...(obj.ProxySession && { ProxySession: ProxySessionFilterSensitiveLog(obj.ProxySession) }),
});

/**
 * @internal
 */
export const UpdateSipMediaApplicationRequestFilterSensitiveLog = (obj: UpdateSipMediaApplicationRequest): any => ({
  ...obj,
  ...(obj.Endpoints && { Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpointFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateSipMediaApplicationResponseFilterSensitiveLog = (obj: UpdateSipMediaApplicationResponse): any => ({
  ...obj,
  ...(obj.SipMediaApplication && {
    SipMediaApplication: SipMediaApplicationFilterSensitiveLog(obj.SipMediaApplication),
  }),
});

/**
 * @internal
 */
export const UpdateSipMediaApplicationCallRequestFilterSensitiveLog = (
  obj: UpdateSipMediaApplicationCallRequest
): any => ({
  ...obj,
  ...(obj.Arguments && { Arguments: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSipMediaApplicationCallResponseFilterSensitiveLog = (
  obj: UpdateSipMediaApplicationCallResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSipRuleRequestFilterSensitiveLog = (obj: UpdateSipRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSipRuleResponseFilterSensitiveLog = (obj: UpdateSipRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVoiceConnectorRequestFilterSensitiveLog = (obj: UpdateVoiceConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVoiceConnectorResponseFilterSensitiveLog = (obj: UpdateVoiceConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVoiceConnectorGroupRequestFilterSensitiveLog = (obj: UpdateVoiceConnectorGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVoiceConnectorGroupResponseFilterSensitiveLog = (obj: UpdateVoiceConnectorGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidateE911AddressRequestFilterSensitiveLog = (obj: ValidateE911AddressRequest): any => ({
  ...obj,
  ...(obj.StreetNumber && { StreetNumber: SENSITIVE_STRING }),
  ...(obj.StreetInfo && { StreetInfo: SENSITIVE_STRING }),
  ...(obj.City && { City: SENSITIVE_STRING }),
  ...(obj.State && { State: SENSITIVE_STRING }),
  ...(obj.Country && { Country: SENSITIVE_STRING }),
  ...(obj.PostalCode && { PostalCode: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ValidateE911AddressResponseFilterSensitiveLog = (obj: ValidateE911AddressResponse): any => ({
  ...obj,
  ...(obj.Address && { Address: AddressFilterSensitiveLog(obj.Address) }),
  ...(obj.CandidateAddressList && {
    CandidateAddressList: obj.CandidateAddressList.map((item) => CandidateAddressFilterSensitiveLog(item)),
  }),
});
