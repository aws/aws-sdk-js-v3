// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ChimeSDKVoiceServiceException as __BaseException } from "./ChimeSDKVoiceServiceException";

/**
 * @public
 */
export const ErrorCode = {
  AccessDenied: "AccessDenied",
  BadRequest: "BadRequest",
  Conflict: "Conflict",
  Forbidden: "Forbidden",
  Gone: "Gone",
  NotFound: "NotFound",
  PhoneNumberAssociationsExist: "PhoneNumberAssociationsExist",
  PreconditionFailed: "PreconditionFailed",
  ResourceLimitExceeded: "ResourceLimitExceeded",
  ServiceFailure: "ServiceFailure",
  ServiceUnavailable: "ServiceUnavailable",
  Throttled: "Throttled",
  Throttling: "Throttling",
  Unauthorized: "Unauthorized",
  Unprocessable: "Unprocessable",
  VoiceConnectorGroupAssociationsExist: "VoiceConnectorGroupAssociationsExist",
};

/**
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Code?: keyof typeof ErrorCode | string;
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

/**
 * @public
 */
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

/**
 * @public
 */
export const AlexaSkillStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
};

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  VoiceConnectorId: string | undefined;
  E164PhoneNumbers: string[] | undefined;
  ForceAssociate?: boolean;
}

/**
 * @public
 */
export interface PhoneNumberError {
  PhoneNumberId?: string;
  ErrorCode?: keyof typeof ErrorCode | string;
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: keyof typeof ErrorCode | string;
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

/**
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: keyof typeof ErrorCode | string;
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

/**
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Code?: keyof typeof ErrorCode | string;
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

/**
 * @public
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  Code?: keyof typeof ErrorCode | string;
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

/**
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: keyof typeof ErrorCode | string;
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

/**
 * @public
 */
export class ThrottledClientException extends __BaseException {
  readonly name: "ThrottledClientException" = "ThrottledClientException";
  readonly $fault: "client" = "client";
  Code?: keyof typeof ErrorCode | string;
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

/**
 * @public
 */
export class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException" = "UnauthorizedClientException";
  readonly $fault: "client" = "client";
  Code?: keyof typeof ErrorCode | string;
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

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string | undefined;
  E164PhoneNumbers: string[] | undefined;
  ForceAssociate?: boolean;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberRequest {
  PhoneNumberIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export const PhoneNumberProductType = {
  SipMediaApplicationDialIn: "SipMediaApplicationDialIn",
  VoiceConnector: "VoiceConnector",
};

/**
 * @public
 */
export interface UpdatePhoneNumberRequestItem {
  PhoneNumberId: string | undefined;
  ProductType?: keyof typeof PhoneNumberProductType | string;
  CallingName?: string;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberRequest {
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export interface CallDetails {
  VoiceConnectorId?: string;
  TransactionId?: string;
  IsCaller?: boolean;
}

/**
 * @public
 */
export const CallingNameStatus = {
  Unassigned: "Unassigned",
  UpdateFailed: "UpdateFailed",
  UpdateInProgress: "UpdateInProgress",
  UpdateSucceeded: "UpdateSucceeded",
};

/**
 * @public
 */
export interface CandidateAddress {
  streetInfo?: string;
  streetNumber?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  postalCodePlus4?: string;
  country?: string;
}

/**
 * @public
 */
export const Capability = {
  SMS: "SMS",
  Voice: "Voice",
};

/**
 * @public
 */
export interface CreatePhoneNumberOrderRequest {
  ProductType: keyof typeof PhoneNumberProductType | string | undefined;
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export const OrderedPhoneNumberStatus = {
  Acquired: "Acquired",
  Failed: "Failed",
  Processing: "Processing",
};

/**
 * @public
 */
export interface OrderedPhoneNumber {
  E164PhoneNumber?: string;
  Status?: keyof typeof OrderedPhoneNumberStatus | string;
}

/**
 * @public
 */
export const PhoneNumberOrderType = {
  New: "New",
  Porting: "Porting",
};

/**
 * @public
 */
export const PhoneNumberOrderStatus = {
  CancelRequested: "CancelRequested",
  Cancelled: "Cancelled",
  ChangeRequested: "ChangeRequested",
  Exception: "Exception",
  FOC: "FOC",
  Failed: "Failed",
  Partial: "Partial",
  PendingDocuments: "PendingDocuments",
  Processing: "Processing",
  Submitted: "Submitted",
  Successful: "Successful",
};

/**
 * @public
 */
export interface PhoneNumberOrder {
  PhoneNumberOrderId?: string;
  ProductType?: keyof typeof PhoneNumberProductType | string;
  Status?: keyof typeof PhoneNumberOrderStatus | string;
  OrderType?: keyof typeof PhoneNumberOrderType | string;
  OrderedPhoneNumbers?: OrderedPhoneNumber[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderResponse {
  PhoneNumberOrder?: PhoneNumberOrder;
}

/**
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Code?: keyof typeof ErrorCode | string;
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

/**
 * @public
 */
export const GeoMatchLevel = {
  AreaCode: "AreaCode",
  Country: "Country",
};

/**
 * @public
 */
export interface GeoMatchParams {
  Country: string | undefined;
  AreaCode: string | undefined;
}

/**
 * @public
 */
export const NumberSelectionBehavior = {
  AvoidSticky: "AvoidSticky",
  PreferSticky: "PreferSticky",
};

/**
 * @public
 */
export interface CreateProxySessionRequest {
  VoiceConnectorId: string | undefined;
  ParticipantPhoneNumbers: string[] | undefined;
  Name?: string;
  ExpiryMinutes?: number;
  Capabilities: (keyof typeof Capability | string)[] | undefined;
  NumberSelectionBehavior?: keyof typeof NumberSelectionBehavior | string;
  GeoMatchLevel?: keyof typeof GeoMatchLevel | string;
  GeoMatchParams?: GeoMatchParams;
}

/**
 * @public
 */
export interface Participant {
  PhoneNumber?: string;
  ProxyPhoneNumber?: string;
}

/**
 * @public
 */
export const ProxySessionStatus = {
  Closed: "Closed",
  InProgress: "InProgress",
  Open: "Open",
};

/**
 * @public
 */
export interface ProxySession {
  VoiceConnectorId?: string;
  ProxySessionId?: string;
  Name?: string;
  Status?: keyof typeof ProxySessionStatus | string;
  ExpiryMinutes?: number;
  Capabilities?: (keyof typeof Capability | string)[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  EndedTimestamp?: Date;
  Participants?: Participant[];
  NumberSelectionBehavior?: keyof typeof NumberSelectionBehavior | string;
  GeoMatchLevel?: keyof typeof GeoMatchLevel | string;
  GeoMatchParams?: GeoMatchParams;
}

/**
 * @public
 */
export interface CreateProxySessionResponse {
  ProxySession?: ProxySession;
}

/**
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: keyof typeof ErrorCode | string;
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

/**
 * @public
 */
export interface SipMediaApplicationEndpoint {
  LambdaArn?: string;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationRequest {
  AwsRegion: string | undefined;
  Name: string | undefined;
  Endpoints: SipMediaApplicationEndpoint[] | undefined;
}

/**
 * @public
 */
export interface SipMediaApplication {
  SipMediaApplicationId?: string;
  AwsRegion?: string;
  Name?: string;
  Endpoints?: SipMediaApplicationEndpoint[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationResponse {
  SipMediaApplication?: SipMediaApplication;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationCallRequest {
  FromPhoneNumber: string | undefined;
  ToPhoneNumber: string | undefined;
  SipMediaApplicationId: string | undefined;
  SipHeaders?: Record<string, string>;
  ArgumentsMap?: Record<string, string>;
}

/**
 * @public
 */
export interface SipMediaApplicationCall {
  TransactionId?: string;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationCallResponse {
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

/**
 * @public
 */
export interface SipRuleTargetApplication {
  SipMediaApplicationId?: string;
  Priority?: number;
  AwsRegion?: string;
}

/**
 * @public
 */
export const SipRuleTriggerType = {
  RequestUriHostname: "RequestUriHostname",
  ToPhoneNumber: "ToPhoneNumber",
};

/**
 * @public
 */
export interface CreateSipRuleRequest {
  Name: string | undefined;
  TriggerType: keyof typeof SipRuleTriggerType | string | undefined;
  TriggerValue: string | undefined;
  Disabled?: boolean;
  TargetApplications?: SipRuleTargetApplication[];
}

/**
 * @public
 */
export interface SipRule {
  SipRuleId?: string;
  Name?: string;
  Disabled?: boolean;
  TriggerType?: keyof typeof SipRuleTriggerType | string;
  TriggerValue?: string;
  TargetApplications?: SipRuleTargetApplication[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateSipRuleResponse {
  SipRule?: SipRule;
}

/**
 * @public
 */
export const VoiceConnectorAwsRegion = {
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_SOUTHEAST_1: "ap-southeast-1",
  AP_SOUTHEAST_2: "ap-southeast-2",
  CA_CENTRAL_1: "ca-central-1",
  EU_CENTRAL_1: "eu-central-1",
  EU_WEST_1: "eu-west-1",
  EU_WEST_2: "eu-west-2",
  US_EAST_1: "us-east-1",
  US_WEST_2: "us-west-2",
};

/**
 * @public
 */
export interface CreateVoiceConnectorRequest {
  Name: string | undefined;
  AwsRegion?: keyof typeof VoiceConnectorAwsRegion | string;
  RequireEncryption: boolean | undefined;
}

/**
 * @public
 */
export interface VoiceConnector {
  VoiceConnectorId?: string;
  AwsRegion?: keyof typeof VoiceConnectorAwsRegion | string;
  Name?: string;
  OutboundHostName?: string;
  RequireEncryption?: boolean;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  VoiceConnectorArn?: string;
}

/**
 * @public
 */
export interface CreateVoiceConnectorResponse {
  VoiceConnector?: VoiceConnector;
}

/**
 * @public
 */
export interface VoiceConnectorItem {
  VoiceConnectorId: string | undefined;
  Priority: number | undefined;
}

/**
 * @public
 */
export interface CreateVoiceConnectorGroupRequest {
  Name: string | undefined;
  VoiceConnectorItems?: VoiceConnectorItem[];
}

/**
 * @public
 */
export interface VoiceConnectorGroup {
  VoiceConnectorGroupId?: string;
  Name?: string;
  VoiceConnectorItems?: VoiceConnectorItem[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  VoiceConnectorGroupArn?: string;
}

/**
 * @public
 */
export interface CreateVoiceConnectorGroupResponse {
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

/**
 * @public
 */
export interface CreateVoiceProfileRequest {
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface VoiceProfile {
  VoiceProfileId?: string;
  VoiceProfileArn?: string;
  VoiceProfileDomainId?: string;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  ExpirationTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateVoiceProfileResponse {
  VoiceProfile?: VoiceProfile;
}

/**
 * @public
 */
export class GoneException extends __BaseException {
  readonly name: "GoneException" = "GoneException";
  readonly $fault: "client" = "client";
  Code?: keyof typeof ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GoneException, __BaseException>) {
    super({
      name: "GoneException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GoneException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  KmsKeyArn: string | undefined;
}

/**
 * @public
 */
export interface Tag {
  Key: string | undefined;
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateVoiceProfileDomainRequest {
  Name: string | undefined;
  Description?: string;
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;
  ClientRequestToken?: string;
  Tags?: Tag[];
}

/**
 * @public
 */
export interface VoiceProfileDomain {
  VoiceProfileDomainId?: string;
  VoiceProfileDomainArn?: string;
  Name?: string;
  Description?: string;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateVoiceProfileDomainResponse {
  VoiceProfileDomain?: VoiceProfileDomain;
}

/**
 * @public
 */
export interface DeletePhoneNumberRequest {
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxySessionRequest {
  VoiceConnectorId: string | undefined;
  ProxySessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSipMediaApplicationRequest {
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSipRuleRequest {
  SipRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorOriginationRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorProxyRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorTerminationRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  VoiceConnectorId: string | undefined;
  Usernames: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceProfileRequest {
  VoiceProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceProfileDomainRequest {
  VoiceProfileDomainId: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  VoiceConnectorId: string | undefined;
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string | undefined;
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export interface VoiceConnectorSettings {
  CdrBucket?: string;
}

/**
 * @public
 */
export interface GetGlobalSettingsResponse {
  VoiceConnector?: VoiceConnectorSettings;
}

/**
 * @public
 */
export interface GetPhoneNumberRequest {
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export const PhoneNumberAssociationName = {
  SipRuleId: "SipRuleId",
  VoiceConnectorGroupId: "VoiceConnectorGroupId",
  VoiceConnectorId: "VoiceConnectorId",
};

/**
 * @public
 */
export interface PhoneNumberAssociation {
  Value?: string;
  Name?: keyof typeof PhoneNumberAssociationName | string;
  AssociatedTimestamp?: Date;
}

/**
 * @public
 */
export interface PhoneNumberCapabilities {
  InboundCall?: boolean;
  OutboundCall?: boolean;
  InboundSMS?: boolean;
  OutboundSMS?: boolean;
  InboundMMS?: boolean;
  OutboundMMS?: boolean;
}

/**
 * @public
 */
export const PhoneNumberStatus = {
  AcquireFailed: "AcquireFailed",
  AcquireInProgress: "AcquireInProgress",
  Assigned: "Assigned",
  Cancelled: "Cancelled",
  DeleteFailed: "DeleteFailed",
  DeleteInProgress: "DeleteInProgress",
  PortinCancelRequested: "PortinCancelRequested",
  PortinInProgress: "PortinInProgress",
  ReleaseFailed: "ReleaseFailed",
  ReleaseInProgress: "ReleaseInProgress",
  Unassigned: "Unassigned",
};

/**
 * @public
 */
export const PhoneNumberType = {
  Local: "Local",
  TollFree: "TollFree",
};

/**
 * @public
 */
export interface PhoneNumber {
  PhoneNumberId?: string;
  E164PhoneNumber?: string;
  Country?: string;
  Type?: keyof typeof PhoneNumberType | string;
  ProductType?: keyof typeof PhoneNumberProductType | string;
  Status?: keyof typeof PhoneNumberStatus | string;
  Capabilities?: PhoneNumberCapabilities;
  Associations?: PhoneNumberAssociation[];
  CallingName?: string;
  CallingNameStatus?: keyof typeof CallingNameStatus | string;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  DeletionTimestamp?: Date;
  OrderId?: string;
}

/**
 * @public
 */
export interface GetPhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderRequest {
  PhoneNumberOrderId: string | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderResponse {
  PhoneNumberOrder?: PhoneNumberOrder;
}

/**
 * @public
 */
export interface GetPhoneNumberSettingsResponse {
  CallingName?: string;
  CallingNameUpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface GetProxySessionRequest {
  VoiceConnectorId: string | undefined;
  ProxySessionId: string | undefined;
}

/**
 * @public
 */
export interface GetProxySessionResponse {
  ProxySession?: ProxySession;
}

/**
 * @public
 */
export interface GetSipMediaApplicationRequest {
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationResponse {
  SipMediaApplication?: SipMediaApplication;
}

/**
 * @public
 */
export interface GetSipMediaApplicationAlexaSkillConfigurationRequest {
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface SipMediaApplicationAlexaSkillConfiguration {
  AlexaSkillStatus: keyof typeof AlexaSkillStatus | string | undefined;
  AlexaSkillIds: string[] | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationAlexaSkillConfigurationResponse {
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}

/**
 * @public
 */
export interface GetSipMediaApplicationLoggingConfigurationRequest {
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface SipMediaApplicationLoggingConfiguration {
  EnableSipMediaApplicationMessageLogs?: boolean;
}

/**
 * @public
 */
export interface GetSipMediaApplicationLoggingConfigurationResponse {
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

/**
 * @public
 */
export interface GetSipRuleRequest {
  SipRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetSipRuleResponse {
  SipRule?: SipRule;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskRequest {
  VoiceConnectorId: string | undefined;
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface SpeakerSearchResult {
  ConfidenceScore?: number;
  VoiceProfileId?: string;
}

/**
 * @public
 */
export interface SpeakerSearchDetails {
  Results?: SpeakerSearchResult[];
  VoiceprintGenerationStatus?: string;
}

/**
 * @public
 */
export interface SpeakerSearchTask {
  SpeakerSearchTaskId?: string;
  SpeakerSearchTaskStatus?: string;
  CallDetails?: CallDetails;
  SpeakerSearchDetails?: SpeakerSearchDetails;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  StartedTimestamp?: Date;
  StatusMessage?: string;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskResponse {
  SpeakerSearchTask?: SpeakerSearchTask;
}

/**
 * @public
 */
export interface GetVoiceConnectorRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorResponse {
  VoiceConnector?: VoiceConnector;
}

/**
 * @public
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DNISEmergencyCallingConfiguration {
  EmergencyPhoneNumber: string | undefined;
  TestPhoneNumber?: string;
  CallingCountry: string | undefined;
}

/**
 * @public
 */
export interface EmergencyCallingConfiguration {
  DNIS?: DNISEmergencyCallingConfiguration[];
}

/**
 * @public
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorGroupResponse {
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

/**
 * @public
 */
export interface GetVoiceConnectorLoggingConfigurationRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface LoggingConfiguration {
  EnableSIPLogs?: boolean;
  EnableMediaMetricLogs?: boolean;
}

/**
 * @public
 */
export interface GetVoiceConnectorLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorOriginationRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export const OriginationRouteProtocol = {
  TCP: "TCP",
  UDP: "UDP",
};

/**
 * @public
 */
export interface OriginationRoute {
  Host?: string;
  Port?: number;
  Protocol?: keyof typeof OriginationRouteProtocol | string;
  Priority?: number;
  Weight?: number;
}

/**
 * @public
 */
export interface Origination {
  Routes?: OriginationRoute[];
  Disabled?: boolean;
}

/**
 * @public
 */
export interface GetVoiceConnectorOriginationResponse {
  Origination?: Origination;
}

/**
 * @public
 */
export interface GetVoiceConnectorProxyRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface Proxy {
  DefaultSessionExpiryMinutes?: number;
  Disabled?: boolean;
  FallBackPhoneNumber?: string;
  PhoneNumberCountries?: string[];
}

/**
 * @public
 */
export interface GetVoiceConnectorProxyResponse {
  Proxy?: Proxy;
}

/**
 * @public
 */
export interface GetVoiceConnectorStreamingConfigurationRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface MediaInsightsConfiguration {
  Disabled?: boolean;
  ConfigurationArn?: string;
}

/**
 * @public
 */
export const NotificationTarget = {
  EventBridge: "EventBridge",
  SNS: "SNS",
  SQS: "SQS",
};

/**
 * @public
 */
export interface StreamingNotificationTarget {
  NotificationTarget?: keyof typeof NotificationTarget | string;
}

/**
 * @public
 */
export interface StreamingConfiguration {
  DataRetentionInHours: number | undefined;
  Disabled: boolean | undefined;
  StreamingNotificationTargets?: StreamingNotificationTarget[];
  MediaInsightsConfiguration?: MediaInsightsConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorStreamingConfigurationResponse {
  StreamingConfiguration?: StreamingConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface Termination {
  CpsLimit?: number;
  DefaultPhoneNumber?: string;
  CallingRegions?: string[];
  CidrAllowedList?: string[];
  Disabled?: boolean;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationResponse {
  Termination?: Termination;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationHealthRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface TerminationHealth {
  Timestamp?: Date;
  Source?: string;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationHealthResponse {
  TerminationHealth?: TerminationHealth;
}

/**
 * @public
 */
export interface GetVoiceProfileRequest {
  VoiceProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceProfileResponse {
  VoiceProfile?: VoiceProfile;
}

/**
 * @public
 */
export interface GetVoiceProfileDomainRequest {
  VoiceProfileDomainId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceProfileDomainResponse {
  VoiceProfileDomain?: VoiceProfileDomain;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskRequest {
  VoiceConnectorId: string | undefined;
  VoiceToneAnalysisTaskId: string | undefined;
  IsCaller: boolean | undefined;
}

/**
 * @public
 */
export interface VoiceToneAnalysisTask {
  VoiceToneAnalysisTaskId?: string;
  VoiceToneAnalysisTaskStatus?: string;
  CallDetails?: CallDetails;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  StartedTimestamp?: Date;
  StatusMessage?: string;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskResponse {
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}

/**
 * @public
 */
export interface ListAvailableVoiceConnectorRegionsResponse {
  VoiceConnectorRegions?: (keyof typeof VoiceConnectorAwsRegion | string)[];
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersRequest {
  NextToken?: string;
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersResponse {
  PhoneNumberOrders?: PhoneNumberOrder[];
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  Status?: string;
  ProductType?: keyof typeof PhoneNumberProductType | string;
  FilterName?: keyof typeof PhoneNumberAssociationName | string;
  FilterValue?: string;
  MaxResults?: number;
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  PhoneNumbers?: PhoneNumber[];
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProxySessionsRequest {
  VoiceConnectorId: string | undefined;
  Status?: keyof typeof ProxySessionStatus | string;
  NextToken?: string;
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListProxySessionsResponse {
  ProxySessions?: ProxySession[];
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipMediaApplicationsRequest {
  MaxResults?: number;
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipMediaApplicationsResponse {
  SipMediaApplications?: SipMediaApplication[];
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipRulesRequest {
  SipMediaApplicationId?: string;
  MaxResults?: number;
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipRulesResponse {
  SipRules?: SipRule[];
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesRequest {
  ProductType: keyof typeof PhoneNumberProductType | string | undefined;
}

/**
 * @public
 */
export interface PhoneNumberCountry {
  CountryCode?: string;
  SupportedPhoneNumberTypes?: (keyof typeof PhoneNumberType | string)[];
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesResponse {
  PhoneNumberCountries?: PhoneNumberCountry[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListVoiceConnectorGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListVoiceConnectorGroupsResponse {
  VoiceConnectorGroups?: VoiceConnectorGroup[];
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVoiceConnectorsRequest {
  NextToken?: string;
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListVoiceConnectorsResponse {
  VoiceConnectors?: VoiceConnector[];
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVoiceConnectorTerminationCredentialsRequest {
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorTerminationCredentialsResponse {
  Usernames?: string[];
}

/**
 * @public
 */
export interface ListVoiceProfileDomainsRequest {
  NextToken?: string;
  MaxResults?: number;
}

/**
 * @public
 */
export interface VoiceProfileDomainSummary {
  VoiceProfileDomainId?: string;
  VoiceProfileDomainArn?: string;
  Name?: string;
  Description?: string;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface ListVoiceProfileDomainsResponse {
  VoiceProfileDomains?: VoiceProfileDomainSummary[];
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVoiceProfilesRequest {
  VoiceProfileDomainId: string | undefined;
  NextToken?: string;
  MaxResults?: number;
}

/**
 * @public
 */
export interface VoiceProfileSummary {
  VoiceProfileId?: string;
  VoiceProfileArn?: string;
  VoiceProfileDomainId?: string;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  ExpirationTimestamp?: Date;
}

/**
 * @public
 */
export interface ListVoiceProfilesResponse {
  VoiceProfiles?: VoiceProfileSummary[];
  NextToken?: string;
}

/**
 * @public
 */
export interface PutSipMediaApplicationAlexaSkillConfigurationRequest {
  SipMediaApplicationId: string | undefined;
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}

/**
 * @public
 */
export interface PutSipMediaApplicationAlexaSkillConfigurationResponse {
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}

/**
 * @public
 */
export interface PutSipMediaApplicationLoggingConfigurationRequest {
  SipMediaApplicationId: string | undefined;
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

/**
 * @public
 */
export interface PutSipMediaApplicationLoggingConfigurationResponse {
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  VoiceConnectorId: string | undefined;
  EmergencyCallingConfiguration: EmergencyCallingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorLoggingConfigurationRequest {
  VoiceConnectorId: string | undefined;
  LoggingConfiguration: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorOriginationRequest {
  VoiceConnectorId: string | undefined;
  Origination: Origination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorOriginationResponse {
  Origination?: Origination;
}

/**
 * @public
 */
export interface PutVoiceConnectorProxyRequest {
  VoiceConnectorId: string | undefined;
  DefaultSessionExpiryMinutes: number | undefined;
  PhoneNumberPoolCountries: string[] | undefined;
  FallBackPhoneNumber?: string;
  Disabled?: boolean;
}

/**
 * @public
 */
export interface PutVoiceConnectorProxyResponse {
  Proxy?: Proxy;
}

/**
 * @public
 */
export interface PutVoiceConnectorStreamingConfigurationRequest {
  VoiceConnectorId: string | undefined;
  StreamingConfiguration: StreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorStreamingConfigurationResponse {
  StreamingConfiguration?: StreamingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationRequest {
  VoiceConnectorId: string | undefined;
  Termination: Termination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationResponse {
  Termination?: Termination;
}

/**
 * @public
 */
export interface Credential {
  Username?: string;
  Password?: string;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationCredentialsRequest {
  VoiceConnectorId: string | undefined;
  Credentials?: Credential[];
}

/**
 * @public
 */
export interface RestorePhoneNumberRequest {
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface RestorePhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  AreaCode?: string;
  City?: string;
  Country?: string;
  State?: string;
  TollFreePrefix?: string;
  PhoneNumberType?: keyof typeof PhoneNumberType | string;
  MaxResults?: number;
  NextToken?: string;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  E164PhoneNumbers?: string[];
  NextToken?: string;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskRequest {
  VoiceConnectorId: string | undefined;
  TransactionId: string | undefined;
  VoiceProfileDomainId: string | undefined;
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskResponse {
  SpeakerSearchTask?: SpeakerSearchTask;
}

/**
 * @public
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  Code?: keyof typeof ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnprocessableEntityException, __BaseException>) {
    super({
      name: "UnprocessableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnprocessableEntityException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export const LanguageCode = {
  EN_US: "en-US",
};

/**
 * @public
 */
export interface StartVoiceToneAnalysisTaskRequest {
  VoiceConnectorId: string | undefined;
  TransactionId: string | undefined;
  LanguageCode: keyof typeof LanguageCode | string | undefined;
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StartVoiceToneAnalysisTaskResponse {
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}

/**
 * @public
 */
export interface StopSpeakerSearchTaskRequest {
  VoiceConnectorId: string | undefined;
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface StopVoiceToneAnalysisTaskRequest {
  VoiceConnectorId: string | undefined;
  VoiceToneAnalysisTaskId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  ResourceARN: string | undefined;
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  ResourceARN: string | undefined;
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsRequest {
  VoiceConnector?: VoiceConnectorSettings;
}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  PhoneNumberId: string | undefined;
  ProductType?: keyof typeof PhoneNumberProductType | string;
  CallingName?: string;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}

/**
 * @public
 */
export interface UpdatePhoneNumberSettingsRequest {
  CallingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxySessionRequest {
  VoiceConnectorId: string | undefined;
  ProxySessionId: string | undefined;
  Capabilities: (keyof typeof Capability | string)[] | undefined;
  ExpiryMinutes?: number;
}

/**
 * @public
 */
export interface UpdateProxySessionResponse {
  ProxySession?: ProxySession;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationRequest {
  SipMediaApplicationId: string | undefined;
  Name?: string;
  Endpoints?: SipMediaApplicationEndpoint[];
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationResponse {
  SipMediaApplication?: SipMediaApplication;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationCallRequest {
  SipMediaApplicationId: string | undefined;
  TransactionId: string | undefined;
  Arguments: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationCallResponse {
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

/**
 * @public
 */
export interface UpdateSipRuleRequest {
  SipRuleId: string | undefined;
  Name: string | undefined;
  Disabled?: boolean;
  TargetApplications?: SipRuleTargetApplication[];
}

/**
 * @public
 */
export interface UpdateSipRuleResponse {
  SipRule?: SipRule;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorRequest {
  VoiceConnectorId: string | undefined;
  Name: string | undefined;
  RequireEncryption: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorResponse {
  VoiceConnector?: VoiceConnector;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string | undefined;
  Name: string | undefined;
  VoiceConnectorItems: VoiceConnectorItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorGroupResponse {
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

/**
 * @public
 */
export interface UpdateVoiceProfileRequest {
  VoiceProfileId: string | undefined;
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceProfileResponse {
  VoiceProfile?: VoiceProfile;
}

/**
 * @public
 */
export interface UpdateVoiceProfileDomainRequest {
  VoiceProfileDomainId: string | undefined;
  Name?: string;
  Description?: string;
}

/**
 * @public
 */
export interface UpdateVoiceProfileDomainResponse {
  VoiceProfileDomain?: VoiceProfileDomain;
}

/**
 * @public
 */
export interface ValidateE911AddressRequest {
  AwsAccountId: string | undefined;
  StreetNumber: string | undefined;
  StreetInfo: string | undefined;
  City: string | undefined;
  State: string | undefined;
  Country: string | undefined;
  PostalCode: string | undefined;
}

/**
 * @public
 */
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
export const VoiceProfileFilterSensitiveLog = (obj: VoiceProfile): any => ({
  ...obj,
  ...(obj.VoiceProfileArn && { VoiceProfileArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateVoiceProfileResponseFilterSensitiveLog = (obj: CreateVoiceProfileResponse): any => ({
  ...obj,
  ...(obj.VoiceProfile && { VoiceProfile: VoiceProfileFilterSensitiveLog(obj.VoiceProfile) }),
});

/**
 * @internal
 */
export const ServerSideEncryptionConfigurationFilterSensitiveLog = (obj: ServerSideEncryptionConfiguration): any => ({
  ...obj,
  ...(obj.KmsKeyArn && { KmsKeyArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateVoiceProfileDomainRequestFilterSensitiveLog = (obj: CreateVoiceProfileDomainRequest): any => ({
  ...obj,
  ...(obj.ServerSideEncryptionConfiguration && {
    ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationFilterSensitiveLog(
      obj.ServerSideEncryptionConfiguration
    ),
  }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const VoiceProfileDomainFilterSensitiveLog = (obj: VoiceProfileDomain): any => ({
  ...obj,
  ...(obj.VoiceProfileDomainArn && { VoiceProfileDomainArn: SENSITIVE_STRING }),
  ...(obj.ServerSideEncryptionConfiguration && {
    ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationFilterSensitiveLog(
      obj.ServerSideEncryptionConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const CreateVoiceProfileDomainResponseFilterSensitiveLog = (obj: CreateVoiceProfileDomainResponse): any => ({
  ...obj,
  ...(obj.VoiceProfileDomain && { VoiceProfileDomain: VoiceProfileDomainFilterSensitiveLog(obj.VoiceProfileDomain) }),
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
export const GetPhoneNumberRequestFilterSensitiveLog = (obj: GetPhoneNumberRequest): any => ({
  ...obj,
  ...(obj.PhoneNumberId && { PhoneNumberId: SENSITIVE_STRING }),
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
export const GetProxySessionResponseFilterSensitiveLog = (obj: GetProxySessionResponse): any => ({
  ...obj,
  ...(obj.ProxySession && { ProxySession: ProxySessionFilterSensitiveLog(obj.ProxySession) }),
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
export const MediaInsightsConfigurationFilterSensitiveLog = (obj: MediaInsightsConfiguration): any => ({
  ...obj,
  ...(obj.ConfigurationArn && { ConfigurationArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StreamingConfigurationFilterSensitiveLog = (obj: StreamingConfiguration): any => ({
  ...obj,
  ...(obj.MediaInsightsConfiguration && {
    MediaInsightsConfiguration: MediaInsightsConfigurationFilterSensitiveLog(obj.MediaInsightsConfiguration),
  }),
});

/**
 * @internal
 */
export const GetVoiceConnectorStreamingConfigurationResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorStreamingConfigurationResponse
): any => ({
  ...obj,
  ...(obj.StreamingConfiguration && {
    StreamingConfiguration: StreamingConfigurationFilterSensitiveLog(obj.StreamingConfiguration),
  }),
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
export const GetVoiceProfileResponseFilterSensitiveLog = (obj: GetVoiceProfileResponse): any => ({
  ...obj,
  ...(obj.VoiceProfile && { VoiceProfile: VoiceProfileFilterSensitiveLog(obj.VoiceProfile) }),
});

/**
 * @internal
 */
export const GetVoiceProfileDomainResponseFilterSensitiveLog = (obj: GetVoiceProfileDomainResponse): any => ({
  ...obj,
  ...(obj.VoiceProfileDomain && { VoiceProfileDomain: VoiceProfileDomainFilterSensitiveLog(obj.VoiceProfileDomain) }),
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
export const ListPhoneNumbersResponseFilterSensitiveLog = (obj: ListPhoneNumbersResponse): any => ({
  ...obj,
  ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumberFilterSensitiveLog(item)) }),
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
export const ListSipMediaApplicationsResponseFilterSensitiveLog = (obj: ListSipMediaApplicationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
  ...(obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
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
export const VoiceProfileDomainSummaryFilterSensitiveLog = (obj: VoiceProfileDomainSummary): any => ({
  ...obj,
  ...(obj.VoiceProfileDomainArn && { VoiceProfileDomainArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListVoiceProfileDomainsResponseFilterSensitiveLog = (obj: ListVoiceProfileDomainsResponse): any => ({
  ...obj,
  ...(obj.VoiceProfileDomains && {
    VoiceProfileDomains: obj.VoiceProfileDomains.map((item) => VoiceProfileDomainSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const VoiceProfileSummaryFilterSensitiveLog = (obj: VoiceProfileSummary): any => ({
  ...obj,
  ...(obj.VoiceProfileArn && { VoiceProfileArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListVoiceProfilesResponseFilterSensitiveLog = (obj: ListVoiceProfilesResponse): any => ({
  ...obj,
  ...(obj.VoiceProfiles && {
    VoiceProfiles: obj.VoiceProfiles.map((item) => VoiceProfileSummaryFilterSensitiveLog(item)),
  }),
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
  ...(obj.StreamingConfiguration && {
    StreamingConfiguration: StreamingConfigurationFilterSensitiveLog(obj.StreamingConfiguration),
  }),
});

/**
 * @internal
 */
export const PutVoiceConnectorStreamingConfigurationResponseFilterSensitiveLog = (
  obj: PutVoiceConnectorStreamingConfigurationResponse
): any => ({
  ...obj,
  ...(obj.StreamingConfiguration && {
    StreamingConfiguration: StreamingConfigurationFilterSensitiveLog(obj.StreamingConfiguration),
  }),
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
export const SearchAvailablePhoneNumbersResponseFilterSensitiveLog = (
  obj: SearchAvailablePhoneNumbersResponse
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
  ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
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
export const UpdateVoiceProfileResponseFilterSensitiveLog = (obj: UpdateVoiceProfileResponse): any => ({
  ...obj,
  ...(obj.VoiceProfile && { VoiceProfile: VoiceProfileFilterSensitiveLog(obj.VoiceProfile) }),
});

/**
 * @internal
 */
export const UpdateVoiceProfileDomainResponseFilterSensitiveLog = (obj: UpdateVoiceProfileDomainResponse): any => ({
  ...obj,
  ...(obj.VoiceProfileDomain && { VoiceProfileDomain: VoiceProfileDomainFilterSensitiveLog(obj.VoiceProfileDomain) }),
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
