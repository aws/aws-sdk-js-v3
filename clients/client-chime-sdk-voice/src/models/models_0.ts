// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ChimeSDKVoiceServiceException as __BaseException } from "./ChimeSDKVoiceServiceException";

/**
 * @public
 * @enum
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
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * <p>You don't have the permissions needed to run this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
 * <p>A validated address.</p>
 */
export interface Address {
  /**
   * @public
   * <p>The address street, such as <code>8th Avenue</code>.</p>
   */
  streetName?: string;

  /**
   * @public
   * <p>The address suffix, such as the <code>N</code> in <code>8th Avenue N</code>.</p>
   */
  streetSuffix?: string;

  /**
   * @public
   * <p>An address suffix location, such as the <code>S. Unit A</code> in
   *          <code>Central Park S. Unit A</code>.</p>
   */
  postDirectional?: string;

  /**
   * @public
   * <p>An address prefix location, such as the <code>N</code> in <code>N. Third St.</code>
   *          </p>
   */
  preDirectional?: string;

  /**
   * @public
   * <p>The numeric portion of an address.</p>
   */
  streetNumber?: string;

  /**
   * @public
   * <p>The city of an address.</p>
   */
  city?: string;

  /**
   * @public
   * <p>The state of an address.</p>
   */
  state?: string;

  /**
   * @public
   * <p>The postal code of an address.</p>
   */
  postalCode?: string;

  /**
   * @public
   * <p>The zip + 4 or postal code + 4 of an address.</p>
   */
  postalCodePlus4?: string;

  /**
   * @public
   * <p>The country of an address.</p>
   */
  country?: string;
}

/**
 * @public
 * @enum
 */
export const AlexaSkillStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type AlexaSkillStatus = (typeof AlexaSkillStatus)[keyof typeof AlexaSkillStatus];

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * @public
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime SDK Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;
}

/**
 * @public
 * <p>If a phone number action fails for one or more of the phone numbers in a request,
 *          a list of the failed phone numbers is returned, along with error codes and error messages.</p>
 */
export interface PhoneNumberError {
  /**
   * @public
   * <p>The phone number ID for which the action failed.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode;

  /**
   * @public
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * @public
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and
   *          error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 * <p>The input parameters don't match the service's restrictions.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
 * <p>The client is permanently forbidden from making the request.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
 * <p>The requested resource couldn't be found.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
 * <p>The service encountered an unexpected error.</p>
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode;
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
 * <p>The service is currently unavailable.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode;
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
 * <p>The number of customer requests exceeds the request rate limit.</p>
 */
export class ThrottledClientException extends __BaseException {
  readonly name: "ThrottledClientException" = "ThrottledClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
 * <p>The client isn't authorized to request a resource.</p>
 */
export class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException" = "UnauthorizedClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
  /**
   * @public
   * <p>The Amazon Chime SDK Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * @public
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * @public
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime SDK Voice Connector Group and removes any previously existing associations.
   *          If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * @public
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberRequest {
  /**
   * @public
   * <p>List of phone number IDs.</p>
   */
  PhoneNumberIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberResponse {
  /**
   * @public
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 * @enum
 */
export const PhoneNumberProductType = {
  SipMediaApplicationDialIn: "SipMediaApplicationDialIn",
  VoiceConnector: "VoiceConnector",
} as const;

/**
 * @public
 */
export type PhoneNumberProductType = (typeof PhoneNumberProductType)[keyof typeof PhoneNumberProductType];

/**
 * @public
 * <p>The phone number ID, product type, or calling name fields to update,
 *          used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.</p>
 */
export interface UpdatePhoneNumberRequestItem {
  /**
   * @public
   * <p>The phone number ID to update.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * @public
   * <p>The product type to update.</p>
   */
  ProductType?: PhoneNumberProductType;

  /**
   * @public
   * <p>The outbound calling name to update.</p>
   */
  CallingName?: string;

  /**
   * @public
   * <p>The name of the phone number.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberRequest {
  /**
   * @public
   * <p>Lists the phone numbers in the update request.</p>
   */
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberResponse {
  /**
   * @public
   * <p>A list of failed phone numbers and their error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 * <p>The details of an Amazon Chime SDK Voice Connector call.</p>
 */
export interface CallDetails {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId?: string;

  /**
   * @public
   * <p>The transaction ID of a Voice Connector call.</p>
   */
  TransactionId?: string;

  /**
   * @public
   * <p>Identifies a person as the caller or the callee.</p>
   */
  IsCaller?: boolean;
}

/**
 * @public
 * @enum
 */
export const CallingNameStatus = {
  Unassigned: "Unassigned",
  UpdateFailed: "UpdateFailed",
  UpdateInProgress: "UpdateInProgress",
  UpdateSucceeded: "UpdateSucceeded",
} as const;

/**
 * @public
 */
export type CallingNameStatus = (typeof CallingNameStatus)[keyof typeof CallingNameStatus];

/**
 * @public
 * @enum
 */
export const CallLegType = {
  CALLEE: "Callee",
  CALLER: "Caller",
} as const;

/**
 * @public
 */
export type CallLegType = (typeof CallLegType)[keyof typeof CallLegType];

/**
 * @public
 * <p>A suggested address.</p>
 */
export interface CandidateAddress {
  /**
   * @public
   * <p>The street information of the candidate address.</p>
   */
  streetInfo?: string;

  /**
   * @public
   * <p>The numeric portion of the candidate address.</p>
   */
  streetNumber?: string;

  /**
   * @public
   * <p>The city of the candidate address.</p>
   */
  city?: string;

  /**
   * @public
   * <p>The state of the candidate address.</p>
   */
  state?: string;

  /**
   * @public
   * <p>The postal code of the candidate address.</p>
   */
  postalCode?: string;

  /**
   * @public
   * <p>The zip + 4 or postal code +4 of the candidate address.</p>
   */
  postalCodePlus4?: string;

  /**
   * @public
   * <p>The country of the candidate address.</p>
   */
  country?: string;
}

/**
 * @public
 * @enum
 */
export const Capability = {
  SMS: "SMS",
  Voice: "Voice",
} as const;

/**
 * @public
 */
export type Capability = (typeof Capability)[keyof typeof Capability];

/**
 * @public
 */
export interface CreatePhoneNumberOrderRequest {
  /**
   * @public
   * <p>The phone number product type.</p>
   */
  ProductType: PhoneNumberProductType | undefined;

  /**
   * @public
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * @public
   * <p>Specifies the name assigned to one or more phone numbers.</p>
   */
  Name?: string;
}

/**
 * @public
 * @enum
 */
export const OrderedPhoneNumberStatus = {
  Acquired: "Acquired",
  Failed: "Failed",
  Processing: "Processing",
} as const;

/**
 * @public
 */
export type OrderedPhoneNumberStatus = (typeof OrderedPhoneNumberStatus)[keyof typeof OrderedPhoneNumberStatus];

/**
 * @public
 * <p>A phone number for which an order has been placed.</p>
 */
export interface OrderedPhoneNumber {
  /**
   * @public
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;

  /**
   * @public
   * <p>The phone number status.</p>
   */
  Status?: OrderedPhoneNumberStatus;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberOrderType = {
  New: "New",
  Porting: "Porting",
} as const;

/**
 * @public
 */
export type PhoneNumberOrderType = (typeof PhoneNumberOrderType)[keyof typeof PhoneNumberOrderType];

/**
 * @public
 * @enum
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
} as const;

/**
 * @public
 */
export type PhoneNumberOrderStatus = (typeof PhoneNumberOrderStatus)[keyof typeof PhoneNumberOrderStatus];

/**
 * @public
 * <p>The details of an Amazon Chime SDK phone number order.</p>
 */
export interface PhoneNumberOrder {
  /**
   * @public
   * <p>The ID of the phone order.</p>
   */
  PhoneNumberOrderId?: string;

  /**
   * @public
   * <p>The phone number order product type.</p>
   */
  ProductType?: PhoneNumberProductType;

  /**
   * @public
   * <p>The status of the phone number order.</p>
   */
  Status?: PhoneNumberOrderStatus;

  /**
   * @public
   * <p>The type of phone number being ordered, local or toll-free.</p>
   */
  OrderType?: PhoneNumberOrderType;

  /**
   * @public
   * <p>The ordered phone number details, such as the phone number in E.164 format
   *          and the phone number status.</p>
   */
  OrderedPhoneNumbers?: OrderedPhoneNumber[];

  /**
   * @public
   * <p>The phone number order creation time stamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The updated phone number order time stamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderResponse {
  /**
   * @public
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

/**
 * @public
 * <p>The request exceeds the resource limit.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
 * @enum
 */
export const GeoMatchLevel = {
  AreaCode: "AreaCode",
  Country: "Country",
} as const;

/**
 * @public
 */
export type GeoMatchLevel = (typeof GeoMatchLevel)[keyof typeof GeoMatchLevel];

/**
 * @public
 * <p>The country and area code for a proxy phone number in a proxy phone session.</p>
 */
export interface GeoMatchParams {
  /**
   * @public
   * <p>The country.</p>
   */
  Country: string | undefined;

  /**
   * @public
   * <p>The area code.</p>
   */
  AreaCode: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NumberSelectionBehavior = {
  AvoidSticky: "AvoidSticky",
  PreferSticky: "PreferSticky",
} as const;

/**
 * @public
 */
export type NumberSelectionBehavior = (typeof NumberSelectionBehavior)[keyof typeof NumberSelectionBehavior];

/**
 * @public
 */
export interface CreateProxySessionRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The participant phone numbers.</p>
   */
  ParticipantPhoneNumbers: string[] | undefined;

  /**
   * @public
   * <p>The name of the proxy session.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;

  /**
   * @public
   * <p>The proxy session's capabilities.</p>
   */
  Capabilities: Capability[] | undefined;

  /**
   * @public
   * <p>The preference for proxy phone number reuse, or stickiness, between the same
   *             participants across sessions.</p>
   */
  NumberSelectionBehavior?: NumberSelectionBehavior;

  /**
   * @public
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   */
  GeoMatchLevel?: GeoMatchLevel;

  /**
   * @public
   * <p>The country and area code for the proxy phone number.</p>
   */
  GeoMatchParams?: GeoMatchParams;
}

/**
 * @public
 * <p>The phone number and proxy phone number for a participant in an Amazon Chime SDK Voice Connector proxy session.</p>
 */
export interface Participant {
  /**
   * @public
   * <p>The participant's phone number.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The participant's proxy phone number.</p>
   */
  ProxyPhoneNumber?: string;
}

/**
 * @public
 * @enum
 */
export const ProxySessionStatus = {
  Closed: "Closed",
  InProgress: "InProgress",
  Open: "Open",
} as const;

/**
 * @public
 */
export type ProxySessionStatus = (typeof ProxySessionStatus)[keyof typeof ProxySessionStatus];

/**
 * @public
 * <p>The proxy session for an Amazon Chime SDK Voice Connector.</p>
 */
export interface ProxySession {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId?: string;

  /**
   * @public
   * <p>The proxy session ID.</p>
   */
  ProxySessionId?: string;

  /**
   * @public
   * <p>The proxy session name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The proxy session status.</p>
   */
  Status?: ProxySessionStatus;

  /**
   * @public
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;

  /**
   * @public
   * <p>The proxy session capabilities.</p>
   */
  Capabilities?: Capability[];

  /**
   * @public
   * <p>The created time stamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The updated time stamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The ended time stamp, in ISO 8601 format.</p>
   */
  EndedTimestamp?: Date;

  /**
   * @public
   * <p>The proxy session participants.</p>
   */
  Participants?: Participant[];

  /**
   * @public
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   */
  NumberSelectionBehavior?: NumberSelectionBehavior;

  /**
   * @public
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   */
  GeoMatchLevel?: GeoMatchLevel;

  /**
   * @public
   * <p>The country and area code for the proxy phone number.</p>
   */
  GeoMatchParams?: GeoMatchParams;
}

/**
 * @public
 */
export interface CreateProxySessionResponse {
  /**
   * @public
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

/**
 * @public
 * <p>Multiple instances of the same request were made simultaneously.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
 * <p>The endpoint assigned to a SIP media application.</p>
 */
export interface SipMediaApplicationEndpoint {
  /**
   * @public
   * <p>Valid Amazon Resource Name (ARN) of the Lambda function, version, or alias.
   *          The function must be created in the same AWS Region as the SIP media application.</p>
   */
  LambdaArn?: string;
}

/**
 * @public
 * <p>Describes a tag applied to a resource.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The tag's key.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The tag's value.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationRequest {
  /**
   * @public
   * <p>The AWS Region assigned to the SIP media application.</p>
   */
  AwsRegion: string | undefined;

  /**
   * @public
   * <p>The SIP media application's name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>List of endpoints (Lambda ARNs) specified for the SIP media application.</p>
   */
  Endpoints: SipMediaApplicationEndpoint[] | undefined;

  /**
   * @public
   * <p>The tags assigned to the SIP media application.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The details of the SIP media application, including name and endpoints.
 *          An AWS account can have multiple SIP media applications.</p>
 */
export interface SipMediaApplication {
  /**
   * @public
   * <p>A SIP media application's ID.</p>
   */
  SipMediaApplicationId?: string;

  /**
   * @public
   * <p>The AWS Region in which the SIP media application is created.</p>
   */
  AwsRegion?: string;

  /**
   * @public
   * <p>The SIP media application's name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>List of endpoints for a SIP media application. Currently, only one endpoint per
   *          SIP media application is permitted.</p>
   */
  Endpoints?: SipMediaApplicationEndpoint[];

  /**
   * @public
   * <p>The SIP media application creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the SIP media application was updated.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The ARN of the SIP media application.</p>
   */
  SipMediaApplicationArn?: string;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationResponse {
  /**
   * @public
   * <p>The SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationCallRequest {
  /**
   * @public
   * <p>The phone number that a user calls from. This is a phone number in your
   *          Amazon Chime SDK phone number inventory.</p>
   */
  FromPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The phone number that the service should call.</p>
   */
  ToPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The ID of the SIP media application.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * @public
   * <p>The SIP headers added to an outbound call leg.</p>
   */
  SipHeaders?: Record<string, string>;

  /**
   * @public
   * <p>Context passed to a CreateSipMediaApplication API call. For example, you could pass
   *             key-value pairs such as: <code>"FirstName": "John", "LastName": "Doe"</code>
   *          </p>
   */
  ArgumentsMap?: Record<string, string>;
}

/**
 * @public
 * <p>A <code>Call</code> instance for a SIP media application.</p>
 */
export interface SipMediaApplicationCall {
  /**
   * @public
   * <p>The call's transaction ID.</p>
   */
  TransactionId?: string;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationCallResponse {
  /**
   * @public
   * <p>The actual call.</p>
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

/**
 * @public
 * <p>A target SIP media application and other details, such as priority and AWS Region,
 *          to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
 */
export interface SipRuleTargetApplication {
  /**
   * @public
   * <p>The ID of a rule's target SIP media application.</p>
   */
  SipMediaApplicationId?: string;

  /**
   * @public
   * <p>The priority setting of a rule's target SIP media application.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The AWS Region of a rule's target SIP media application.</p>
   */
  AwsRegion?: string;
}

/**
 * @public
 * @enum
 */
export const SipRuleTriggerType = {
  RequestUriHostname: "RequestUriHostname",
  ToPhoneNumber: "ToPhoneNumber",
} as const;

/**
 * @public
 */
export type SipRuleTriggerType = (typeof SipRuleTriggerType)[keyof typeof SipRuleTriggerType];

/**
 * @public
 */
export interface CreateSipRuleRequest {
  /**
   * @public
   * <p>The name of the SIP rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of trigger assigned to the SIP rule in <code>TriggerValue</code>,
   *          currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.</p>
   */
  TriggerType: SipRuleTriggerType | undefined;

  /**
   * @public
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code>, the
   *          value can be the outbound host name of a Voice Connector. If
   *          <code>TriggerType</code> is <code>ToPhoneNumber</code>, the value can
   *          be a customer-owned phone number in the E164 format. The
   *          <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered
   *          if the request URI in an incoming SIP request matches the
   *          <code>RequestUriHostname</code>, or if the <code>To</code> header in the
   *          incoming SIP request matches the <code>ToPhoneNumber</code> value.</p>
   */
  TriggerValue: string | undefined;

  /**
   * @public
   * <p>Disables or enables a SIP rule. You must disable SIP rules
   *          before you can delete them.</p>
   */
  Disabled?: boolean;

  /**
   * @public
   * <p>List of SIP media applications, with priority and AWS Region. Only one SIP
   *          application per AWS Region can be used.</p>
   */
  TargetApplications?: SipRuleTargetApplication[];
}

/**
 * @public
 * <p>The details of a SIP rule, including name, triggers, and target applications.
 *          An AWS account can have multiple SIP rules.</p>
 */
export interface SipRule {
  /**
   * @public
   * <p>A SIP rule's ID.</p>
   */
  SipRuleId?: string;

  /**
   * @public
   * <p>A SIP rule's name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Indicates whether the SIP rule is enabled or disabled. You must disable a rule before you can delete it.</p>
   */
  Disabled?: boolean;

  /**
   * @public
   * <p>The type of trigger set for a SIP rule, either a phone number or a URI request host name.</p>
   */
  TriggerType?: SipRuleTriggerType;

  /**
   * @public
   * <p>The value set for a SIP rule's trigger type. Either a phone number or a URI hostname.</p>
   */
  TriggerValue?: string;

  /**
   * @public
   * <p>The target SIP media application and other details, such as priority and AWS Region,
   *          to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
   */
  TargetApplications?: SipRuleTargetApplication[];

  /**
   * @public
   * <p>The time at which the SIP rule was created, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the SIP rule was updated, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateSipRuleResponse {
  /**
   * @public
   * <p>The SIP rule information, including the rule ID, triggers, and target applications.</p>
   */
  SipRule?: SipRule;
}

/**
 * @public
 * @enum
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
} as const;

/**
 * @public
 */
export type VoiceConnectorAwsRegion = (typeof VoiceConnectorAwsRegion)[keyof typeof VoiceConnectorAwsRegion];

/**
 * @public
 */
export interface CreateVoiceConnectorRequest {
  /**
   * @public
   * <p>The name of the Voice Connector.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The AWS Region in which the Amazon Chime SDK Voice Connector is created. Default value:
   *          <code>us-east-1</code> .</p>
   */
  AwsRegion?: VoiceConnectorAwsRegion;

  /**
   * @public
   * <p>Enables or disables encryption for the Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;

  /**
   * @public
   * <p>The tags assigned to the Voice Connector.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The Amazon Chime SDK Voice Connector configuration, including outbound
 *          host name and encryption settings.</p>
 */
export interface VoiceConnector {
  /**
   * @public
   * <p>The Voice Connector's ID.</p>
   */
  VoiceConnectorId?: string;

  /**
   * @public
   * <p>The AWS Region in which the Voice Connector is created.
   *          Default: us-east-1.</p>
   */
  AwsRegion?: VoiceConnectorAwsRegion;

  /**
   * @public
   * <p>The Voice Connector's name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The outbound host name for the Voice Connector.</p>
   */
  OutboundHostName?: string;

  /**
   * @public
   * <p>Enables or disables encryption for the Voice Connector.</p>
   */
  RequireEncryption?: boolean;

  /**
   * @public
   * <p>The Voice Connector's creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The Voice Connector's updated timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The ARN of the Voice Connector.</p>
   */
  VoiceConnectorArn?: string;
}

/**
 * @public
 */
export interface CreateVoiceConnectorResponse {
  /**
   * @public
   * <p>The details of the Voice Connector.</p>
   */
  VoiceConnector?: VoiceConnector;
}

/**
 * @public
 * <p>For Amazon Chime SDK Voice Connector groups, the Amazon Chime SDK Voice
 *          Connectors to which you route inbound calls. Includes priority configuration
 *          settings. Limit: 3 VoiceConnectorItems per Voice Connector group.</p>
 */
export interface VoiceConnectorItem {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The priority setting of a Voice Connector item. Calls are routed to hosts
   *            in priority order, with 1 as the highest priority. When hosts have equal priority,
   *            the system distributes calls among them based on their relative weight.</p>
   */
  Priority: number | undefined;
}

/**
 * @public
 */
export interface CreateVoiceConnectorGroupRequest {
  /**
   * @public
   * <p>The name of the Voice Connector group.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Lists the Voice Connectors that inbound calls are routed to.</p>
   */
  VoiceConnectorItems?: VoiceConnectorItem[];
}

/**
 * @public
 * <p>The Amazon Chime SDK Voice Connector group configuration, including
 *          associated Voice Connectors. You can include Voice Connectors from different
 *          AWS Regions in a group. This creates a fault tolerant mechanism for
 *          fallback in case of availability events.</p>
 */
export interface VoiceConnectorGroup {
  /**
   * @public
   * <p>The ID of a Voice Connector group.</p>
   */
  VoiceConnectorGroupId?: string;

  /**
   * @public
   * <p>The name of a Voice Connector group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Voice Connectors to which you route inbound calls.</p>
   */
  VoiceConnectorItems?: VoiceConnectorItem[];

  /**
   * @public
   * <p>The Voice Connector group's creation time stamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The Voice Connector group's creation time stamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The ARN of the Voice Connector group.</p>
   */
  VoiceConnectorGroupArn?: string;
}

/**
 * @public
 */
export interface CreateVoiceConnectorGroupResponse {
  /**
   * @public
   * <p>The details of the Voice Connector group.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

/**
 * @public
 */
export interface CreateVoiceProfileRequest {
  /**
   * @public
   * <p>The ID of the speaker search task.</p>
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 * <p>The combination of a voice print and caller ID.</p>
 */
export interface VoiceProfile {
  /**
   * @public
   * <p>The ID of the voice profile.</p>
   */
  VoiceProfileId?: string;

  /**
   * @public
   * <p>The ARN of the voice profile.</p>
   */
  VoiceProfileArn?: string;

  /**
   * @public
   * <p>The ID of the domain that contains the voice profile.</p>
   */
  VoiceProfileDomainId?: string;

  /**
   * @public
   * <p>The time at which the voice profile was created and enrolled.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the voice profile was last updated.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a voice profile expires unless you re-enroll the caller via the
   *          <code>UpdateVoiceProfile</code> API.</p>
   */
  ExpirationTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateVoiceProfileResponse {
  /**
   * @public
   * <p>The requested voice profile.</p>
   */
  VoiceProfile?: VoiceProfile;
}

/**
 * @public
 * <p>Access to the target resource is no longer available at the origin server. This condition is likely to be permanent.</p>
 */
export class GoneException extends __BaseException {
  readonly name: "GoneException" = "GoneException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
 * <p>A structure that contains the configuration settings for server-side encryption.</p>
 *          <note>
 *             <p>We only support symmetric keys. Do not use asymmetric or HMAC keys, or KMS aliases.</p>
 *          </note>
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * @public
   * <p>The ARN of the KMS key used to encrypt the enrollment data in a voice profile domain.
   *          Asymmetric customer managed keys are not supported.</p>
   */
  KmsKeyArn: string | undefined;
}

/**
 * @public
 */
export interface CreateVoiceProfileDomainRequest {
  /**
   * @public
   * <p>The name of the voice profile domain.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the voice profile domain.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The server-side encryption configuration for the request.</p>
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;

  /**
   * @public
   * <p>The unique identifier for the client request. Use a different token for different domain creation requests.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags assigned to the domain.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A collection of voice profiles.</p>
 */
export interface VoiceProfileDomain {
  /**
   * @public
   * <p>The ID of the voice profile domain.</p>
   */
  VoiceProfileDomainId?: string;

  /**
   * @public
   * <p>The voice profile domain's Amazon Resource Number (ARN).</p>
   */
  VoiceProfileDomainArn?: string;

  /**
   * @public
   * <p>The name of the voice profile domain.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the voice profile domain.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A structure that contains the configuration settings for server-side encryption.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * <p>The time at which the voice profile domain was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the voice profile was last updated.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateVoiceProfileDomainResponse {
  /**
   * @public
   * <p>The requested voice profile domain.</p>
   */
  VoiceProfileDomain?: VoiceProfileDomain;
}

/**
 * @public
 */
export interface DeletePhoneNumberRequest {
  /**
   * @public
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxySessionRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSipMediaApplicationRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSipRuleRequest {
  /**
   * @public
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorGroupRequest {
  /**
   * @public
   * <p>The Voice Connector Group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorOriginationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorProxyRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorTerminationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The RFC2617 compliant username associated with the SIP credentials,
   *          in US-ASCII format.</p>
   */
  Usernames: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceProfileRequest {
  /**
   * @public
   * <p>The voice profile ID.</p>
   */
  VoiceProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceProfileDomainRequest {
  /**
   * @public
   * <p>The voice profile domain ID.</p>
   */
  VoiceProfileDomainId: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * @public
   * <p>If the action fails for one or more of the phone numbers in the request, a
   *          list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * @public
   * <p>The Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * @public
   * <p>The list of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * @public
   * <p>If the action fails for one or more of the phone numbers in the request,
   *          a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 * <p>The Amazon Chime SDK Voice Connector settings. Includes any Amazon
 *          S3 buckets designated for storing call detail records.</p>
 */
export interface VoiceConnectorSettings {
  /**
   * @public
   * <p>The S3 bucket that stores the Voice Connector's call detail records.</p>
   */
  CdrBucket?: string;
}

/**
 * @public
 */
export interface GetGlobalSettingsResponse {
  /**
   * @public
   * <p>The Voice Connector settings.</p>
   */
  VoiceConnector?: VoiceConnectorSettings;
}

/**
 * @public
 */
export interface GetPhoneNumberRequest {
  /**
   * @public
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberAssociationName = {
  SipRuleId: "SipRuleId",
  VoiceConnectorGroupId: "VoiceConnectorGroupId",
  VoiceConnectorId: "VoiceConnectorId",
} as const;

/**
 * @public
 */
export type PhoneNumberAssociationName = (typeof PhoneNumberAssociationName)[keyof typeof PhoneNumberAssociationName];

/**
 * @public
 * <p>The phone number associations, such as an Amazon Chime SDK account ID, user ID,
 *          Voice Connector ID, or Voice Connector group ID.</p>
 */
export interface PhoneNumberAssociation {
  /**
   * @public
   * <p>Contains the ID for the entity specified in Name.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>Defines the association with an Amazon Chime SDK account ID, user ID, Voice Connector ID, or Voice Connector group ID.</p>
   */
  Name?: PhoneNumberAssociationName;

  /**
   * @public
   * <p>The timestamp of the phone number association, in ISO 8601 format.</p>
   */
  AssociatedTimestamp?: Date;
}

/**
 * @public
 * <p>The phone number capabilities for Amazon Chime SDK phone numbers,
 *          such as enabled inbound and outbound calling, and text messaging.</p>
 */
export interface PhoneNumberCapabilities {
  /**
   * @public
   * <p>Allows or denies inbound calling for the specified phone number.</p>
   */
  InboundCall?: boolean;

  /**
   * @public
   * <p>Allows or denies outbound calling for the specified phone number.</p>
   */
  OutboundCall?: boolean;

  /**
   * @public
   * <p>Allows or denies inbound SMS messaging for the specified phone number.</p>
   */
  InboundSMS?: boolean;

  /**
   * @public
   * <p>Allows or denies outbound SMS messaging for the specified phone number.</p>
   */
  OutboundSMS?: boolean;

  /**
   * @public
   * <p>Allows or denies inbound MMS messaging for the specified phone number.</p>
   */
  InboundMMS?: boolean;

  /**
   * @public
   * <p>Allows or denies inbound MMS messaging for the specified phone number.</p>
   */
  OutboundMMS?: boolean;
}

/**
 * @public
 * @enum
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
} as const;

/**
 * @public
 */
export type PhoneNumberStatus = (typeof PhoneNumberStatus)[keyof typeof PhoneNumberStatus];

/**
 * @public
 * @enum
 */
export const PhoneNumberType = {
  Local: "Local",
  TollFree: "TollFree",
} as const;

/**
 * @public
 */
export type PhoneNumberType = (typeof PhoneNumberType)[keyof typeof PhoneNumberType];

/**
 * @public
 * <p>A phone number used to call an Amazon
 *          Chime SDK Voice Connector.</p>
 */
export interface PhoneNumber {
  /**
   * @public
   * <p>The phone number's ID.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;

  /**
   * @public
   * <p>The phone number's country. Format: ISO 3166-1 alpha-2.</p>
   */
  Country?: string;

  /**
   * @public
   * <p>The phone number's type.</p>
   */
  Type?: PhoneNumberType;

  /**
   * @public
   * <p>The phone number's product type.</p>
   */
  ProductType?: PhoneNumberProductType;

  /**
   * @public
   * <p>The phone number's status.</p>
   */
  Status?: PhoneNumberStatus;

  /**
   * @public
   * <p>The phone number's capabilities.</p>
   */
  Capabilities?: PhoneNumberCapabilities;

  /**
   * @public
   * <p>The phone number's associations.</p>
   */
  Associations?: PhoneNumberAssociation[];

  /**
   * @public
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;

  /**
   * @public
   * <p>The outbound calling name status.</p>
   */
  CallingNameStatus?: CallingNameStatus;

  /**
   * @public
   * <p>The phone number creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The updated phone number timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The deleted phone number timestamp, in ISO 8601 format.</p>
   */
  DeletionTimestamp?: Date;

  /**
   * @public
   * <p>The phone number's order ID.</p>
   */
  OrderId?: string;

  /**
   * @public
   * <p>The name of the phone number.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface GetPhoneNumberResponse {
  /**
   * @public
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderRequest {
  /**
   * @public
   * <p>The ID of the phone number order .</p>
   */
  PhoneNumberOrderId: string | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderResponse {
  /**
   * @public
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

/**
 * @public
 */
export interface GetPhoneNumberSettingsResponse {
  /**
   * @public
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName?: string;

  /**
   * @public
   * <p>The updated outbound calling name timestamp, in ISO 8601 format.</p>
   */
  CallingNameUpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface GetProxySessionRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;
}

/**
 * @public
 */
export interface GetProxySessionResponse {
  /**
   * @public
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

/**
 * @public
 */
export interface GetSipMediaApplicationRequest {
  /**
   * @public
   * <p>The SIP media application ID .</p>
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationResponse {
  /**
   * @public
   * <p>The details of the SIP media application.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

/**
 * @public
 */
export interface GetSipMediaApplicationAlexaSkillConfigurationRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 * <p>The Alexa Skill configuration of a SIP media application.</p>
 */
export interface SipMediaApplicationAlexaSkillConfiguration {
  /**
   * @public
   * <p>The status of the Alexa Skill configuration.</p>
   */
  AlexaSkillStatus: AlexaSkillStatus | undefined;

  /**
   * @public
   * <p>The ID of the Alexa Skill configuration.</p>
   */
  AlexaSkillIds: string[] | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationAlexaSkillConfigurationResponse {
  /**
   * @public
   * <p>Returns the Alexa Skill configuration.</p>
   */
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}

/**
 * @public
 */
export interface GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 * <p>The logging configuration of a SIP media application.</p>
 */
export interface SipMediaApplicationLoggingConfiguration {
  /**
   * @public
   * <p>Enables message logging for the specified SIP media application.</p>
   */
  EnableSipMediaApplicationMessageLogs?: boolean;
}

/**
 * @public
 */
export interface GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @public
   * <p>The actual logging configuration.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

/**
 * @public
 */
export interface GetSipRuleRequest {
  /**
   * @public
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetSipRuleResponse {
  /**
   * @public
   * <p>The SIP rule details.</p>
   */
  SipRule?: SipRule;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The ID of the speaker search task.</p>
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 * <p>The result of a speaker search analysis.</p>
 */
export interface SpeakerSearchResult {
  /**
   * @public
   * <p>The confidence score in the speaker search analysis.</p>
   */
  ConfidenceScore?: number;

  /**
   * @public
   * <p>The voice profile ID.</p>
   */
  VoiceProfileId?: string;
}

/**
 * @public
 * <p>The details of a speaker search task.</p>
 */
export interface SpeakerSearchDetails {
  /**
   * @public
   * <p>The result value in the speaker search details.</p>
   */
  Results?: SpeakerSearchResult[];

  /**
   * @public
   * <p>The status of a voice print generation operation, <code>VoiceprintGenerationSuccess</code> or <code>VoiceprintGenerationFailure</code>..</p>
   */
  VoiceprintGenerationStatus?: string;
}

/**
 * @public
 * <p>A representation of an asynchronous request to perform speaker search analysis on a
 *          Voice Connector call.</p>
 */
export interface SpeakerSearchTask {
  /**
   * @public
   * <p>The speaker search task ID.</p>
   */
  SpeakerSearchTaskId?: string;

  /**
   * @public
   * <p>The status of the speaker search task, <code>IN_QUEUE</code>, <code>IN_PROGRESS</code>, <code>PARTIAL_SUCCESS</code>, <code>SUCCEEDED</code>,
   *          <code>FAILED</code>, or <code>STOPPED</code>.</p>
   */
  SpeakerSearchTaskStatus?: string;

  /**
   * @public
   * <p>The call details of a speaker search task.</p>
   */
  CallDetails?: CallDetails;

  /**
   * @public
   * <p>The details of a speaker search task.</p>
   */
  SpeakerSearchDetails?: SpeakerSearchDetails;

  /**
   * @public
   * <p>The time at which a speaker search task was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a speaker search task was updated.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the speaker search task began.</p>
   */
  StartedTimestamp?: Date;

  /**
   * @public
   * <p>A detailed message about the status of a speaker search.</p>
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskResponse {
  /**
   * @public
   * <p>The details of the speaker search task.</p>
   */
  SpeakerSearchTask?: SpeakerSearchTask;
}

/**
 * @public
 */
export interface GetVoiceConnectorRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorResponse {
  /**
   * @public
   * <p>The Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

/**
 * @public
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration
 *          details associated with an Amazon Chime SDK Voice Connector's emergency calling
 *          configuration.</p>
 */
export interface DNISEmergencyCallingConfiguration {
  /**
   * @public
   * <p>The DNIS phone number that you route emergency calls to, in E.164 format.</p>
   */
  EmergencyPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The DNIS phone number for routing test emergency calls to, in E.164 format.</p>
   */
  TestPhoneNumber?: string;

  /**
   * @public
   * <p>The country from which emergency calls are allowed, in ISO 3166-1 alpha-2 format.</p>
   */
  CallingCountry: string | undefined;
}

/**
 * @public
 * <p>The emergency calling configuration details associated with an Amazon Chime SDK
 *          Voice Connector.</p>
 */
export interface EmergencyCallingConfiguration {
  /**
   * @public
   * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration
   *          details.</p>
   */
  DNIS?: DNISEmergencyCallingConfiguration[];
}

/**
 * @public
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @public
   * <p>The details of the emergency calling configuration.</p>
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorGroupRequest {
  /**
   * @public
   * <p>The Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorGroupResponse {
  /**
   * @public
   * <p>The details of the Voice Connector group.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

/**
 * @public
 */
export interface GetVoiceConnectorLoggingConfigurationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * <p>The logging configuration associated with an Amazon Chime SDK Voice Connector.
 *          Specifies whether SIP message logs can be sent to Amazon CloudWatch Logs.</p>
 */
export interface LoggingConfiguration {
  /**
   * @public
   * <p>Boolean that enables sending SIP message logs to Amazon CloudWatch.</p>
   */
  EnableSIPLogs?: boolean;

  /**
   * @public
   * <p>Enables or disables media metrics logging.</p>
   */
  EnableMediaMetricLogs?: boolean;
}

/**
 * @public
 */
export interface GetVoiceConnectorLoggingConfigurationResponse {
  /**
   * @public
   * <p>The logging configuration details .</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorOriginationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OriginationRouteProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;

/**
 * @public
 */
export type OriginationRouteProtocol = (typeof OriginationRouteProtocol)[keyof typeof OriginationRouteProtocol];

/**
 * @public
 * <p>Origination routes define call distribution properties for your SIP hosts to
 *          receive inbound calls using an Amazon Chime SDK Voice Connector. Limit: Ten origination
 *          routes for each Voice Connector.</p>
 *          <note>
 *             <p>The parameters listed below are not required, but you must use at least one.</p>
 *          </note>
 */
export interface OriginationRoute {
  /**
   * @public
   * <p>The FQDN or IP address to contact for origination traffic.</p>
   */
  Host?: string;

  /**
   * @public
   * <p>The designated origination route port. Defaults to 5060.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The protocol to use for the origination route. Encryption-enabled Amazon Chime SDK Voice Connectors use
   *          TCP protocol by default.</p>
   */
  Protocol?: OriginationRouteProtocol;

  /**
   * @public
   * <p>The priority associated with the host, with 1 being the highest priority. Higher
   *          priority hosts are attempted first.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The weight assigned to an origination route. When hosts have equal priority,
   *          calls are distributed between them based on their relative weights.</p>
   */
  Weight?: number;
}

/**
 * @public
 * <p>Origination settings enable your SIP hosts to receive inbound calls using your
 *          Amazon Chime SDK Voice Connector.</p>
 *          <note>
 *             <p>The parameters listed below are not required, but you must use at least
 *          one.</p>
 *          </note>
 */
export interface Origination {
  /**
   * @public
   * <p>The call distribution properties defined for your SIP hosts. Valid range: Minimum
   *          value of 1. Maximum value of 20. This parameter is not required, but you must specify
   *          this parameter or <code>Disabled</code>.</p>
   */
  Routes?: OriginationRoute[];

  /**
   * @public
   * <p>When origination settings are disabled, inbound calls are not enabled for your
   *          Amazon Chime SDK Voice Connector.
   *          This parameter is not required, but you must specify this parameter or
   *          <code>Routes</code>.</p>
   */
  Disabled?: boolean;
}

/**
 * @public
 */
export interface GetVoiceConnectorOriginationResponse {
  /**
   * @public
   * <p>The origination setting details.</p>
   */
  Origination?: Origination;
}

/**
 * @public
 */
export interface GetVoiceConnectorProxyRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * <p>The proxy configuration for an Amazon Chime SDK Voice Connector.</p>
 */
export interface Proxy {
  /**
   * @public
   * <p>The default number of minutes allowed for proxy sessions.</p>
   */
  DefaultSessionExpiryMinutes?: number;

  /**
   * @public
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime SDK Voice Connector.</p>
   */
  Disabled?: boolean;

  /**
   * @public
   * <p>The phone number to route calls to after a proxy session expires.</p>
   */
  FallBackPhoneNumber?: string;

  /**
   * @public
   * <p>The countries for proxy phone numbers to be selected from.</p>
   */
  PhoneNumberCountries?: string[];
}

/**
 * @public
 */
export interface GetVoiceConnectorProxyResponse {
  /**
   * @public
   * <p>The proxy configuration details.</p>
   */
  Proxy?: Proxy;
}

/**
 * @public
 */
export interface GetVoiceConnectorStreamingConfigurationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * <p>The configuration for a call analytics task.</p>
 */
export interface MediaInsightsConfiguration {
  /**
   * @public
   * <p>Denotes the configration as enabled or disabled.</p>
   */
  Disabled?: boolean;

  /**
   * @public
   * <p>The configuration's ARN.</p>
   */
  ConfigurationArn?: string;
}

/**
 * @public
 * @enum
 */
export const NotificationTarget = {
  EventBridge: "EventBridge",
  SNS: "SNS",
  SQS: "SQS",
} as const;

/**
 * @public
 */
export type NotificationTarget = (typeof NotificationTarget)[keyof typeof NotificationTarget];

/**
 * @public
 * <p>The target recipient for a streaming configuration notification.</p>
 */
export interface StreamingNotificationTarget {
  /**
   * @public
   * <p>The streaming notification target.</p>
   */
  NotificationTarget?: NotificationTarget;
}

/**
 * @public
 * <p>The streaming configuration associated with an Amazon Chime SDK Voice Connector.
 *          Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention
 *          period for the Amazon Kinesis data, in hours.</p>
 */
export interface StreamingConfiguration {
  /**
   * @public
   * <p>The amount of time, in hours, to the Kinesis data.</p>
   */
  DataRetentionInHours: number | undefined;

  /**
   * @public
   * <p>When true, streaming to Kinesis is off.</p>
   */
  Disabled: boolean | undefined;

  /**
   * @public
   * <p>The streaming notification targets.</p>
   */
  StreamingNotificationTargets?: StreamingNotificationTarget[];

  /**
   * @public
   * <p>The call analytics configuration.</p>
   */
  MediaInsightsConfiguration?: MediaInsightsConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorStreamingConfigurationResponse {
  /**
   * @public
   * <p>The details of the streaming configuration.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * <p>Termination settings enable SIP hosts to make outbound calls using an Amazon Chime SDK Voice Connector.</p>
 */
export interface Termination {
  /**
   * @public
   * <p>The limit on calls per second. Max value based on account service quota. Default value of 1.</p>
   */
  CpsLimit?: number;

  /**
   * @public
   * <p>The default outbound calling number.</p>
   */
  DefaultPhoneNumber?: string;

  /**
   * @public
   * <p>The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.</p>
   */
  CallingRegions?: string[];

  /**
   * @public
   * <p>The IP addresses allowed to make calls, in CIDR format.</p>
   */
  CidrAllowedList?: string[];

  /**
   * @public
   * <p>When termination is disabled, outbound calls cannot be made.</p>
   */
  Disabled?: boolean;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationResponse {
  /**
   * @public
   * <p>The termination setting details.</p>
   */
  Termination?: Termination;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationHealthRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * <p>The termination health details, including the source IP address and timestamp of the last successful <code>SIP OPTIONS</code> message from your SIP infrastructure.</p>
 */
export interface TerminationHealth {
  /**
   * @public
   * <p>The timestamp, in ISO 8601 format.</p>
   */
  Timestamp?: Date;

  /**
   * @public
   * <p>The source IP address.</p>
   */
  Source?: string;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationHealthResponse {
  /**
   * @public
   * <p>The termination health details.</p>
   */
  TerminationHealth?: TerminationHealth;
}

/**
 * @public
 */
export interface GetVoiceProfileRequest {
  /**
   * @public
   * <p>The voice profile ID.</p>
   */
  VoiceProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceProfileResponse {
  /**
   * @public
   * <p>The voice profile details.</p>
   */
  VoiceProfile?: VoiceProfile;
}

/**
 * @public
 */
export interface GetVoiceProfileDomainRequest {
  /**
   * @public
   * <p>The voice profile domain ID.</p>
   */
  VoiceProfileDomainId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceProfileDomainResponse {
  /**
   * @public
   * <p>The details of the voice profile domain.</p>
   */
  VoiceProfileDomain?: VoiceProfileDomain;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The ID of the voice tone anlysis task.</p>
   */
  VoiceToneAnalysisTaskId: string | undefined;

  /**
   * @public
   * <p>Specifies whether the voice being analyzed is the caller (originator) or the callee (responder).</p>
   */
  IsCaller: boolean | undefined;
}

/**
 * @public
 * <p>A representation of an asynchronous request to perform voice tone analysis on a Voice Connector call.</p>
 */
export interface VoiceToneAnalysisTask {
  /**
   * @public
   * <p>The ID of the voice tone analysis task.</p>
   */
  VoiceToneAnalysisTaskId?: string;

  /**
   * @public
   * <p>The status of a voice tone analysis task, <code>IN_QUEUE</code>, <code>IN_PROGRESS</code>, <code>PARTIAL_SUCCESS</code>, <code>SUCCEEDED</code>,
   *          <code>FAILED</code>, or <code>STOPPED</code>.</p>
   */
  VoiceToneAnalysisTaskStatus?: string;

  /**
   * @public
   * <p>The call details of a voice tone analysis task.</p>
   */
  CallDetails?: CallDetails;

  /**
   * @public
   * <p>The time at which a voice tone analysis task was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a voice tone analysis task was updated.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a voice tone analysis task started.</p>
   */
  StartedTimestamp?: Date;

  /**
   * @public
   * <p>The status of a voice tone analysis task.</p>
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskResponse {
  /**
   * @public
   * <p>The details of the voice tone analysis task.</p>
   */
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}

/**
 * @public
 */
export interface ListAvailableVoiceConnectorRegionsResponse {
  /**
   * @public
   * <p>The list of AWS Regions.</p>
   */
  VoiceConnectorRegions?: VoiceConnectorAwsRegion[];
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersRequest {
  /**
   * @public
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersResponse {
  /**
   * @public
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrders?: PhoneNumberOrder[];

  /**
   * @public
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * @public
   * <p>The status of your organization's phone numbers.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The phone number product types.</p>
   */
  ProductType?: PhoneNumberProductType;

  /**
   * @public
   * <p>The filter to limit the number of results.</p>
   */
  FilterName?: PhoneNumberAssociationName;

  /**
   * @public
   * <p>The filter value.</p>
   */
  FilterValue?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * @public
   * <p>The phone number details.</p>
   */
  PhoneNumbers?: PhoneNumber[];

  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProxySessionsRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The proxy session status.</p>
   */
  Status?: ProxySessionStatus;

  /**
   * @public
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListProxySessionsResponse {
  /**
   * @public
   * <p>The proxy sessions' details.</p>
   */
  ProxySessions?: ProxySession[];

  /**
   * @public
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipMediaApplicationsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipMediaApplicationsResponse {
  /**
   * @public
   * <p>The list of SIP media applications and application details.</p>
   */
  SipMediaApplications?: SipMediaApplication[];

  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipRulesRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipRulesResponse {
  /**
   * @public
   * <p>The list of SIP rules and details.</p>
   */
  SipRules?: SipRule[];

  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesRequest {
  /**
   * @public
   * <p>The phone number product type.</p>
   */
  ProductType: PhoneNumberProductType | undefined;
}

/**
 * @public
 * <p>The phone number's country.</p>
 */
export interface PhoneNumberCountry {
  /**
   * @public
   * <p>The phone number country code. Format: ISO 3166-1 alpha-2.</p>
   */
  CountryCode?: string;

  /**
   * @public
   * <p>The supported phone number types.</p>
   */
  SupportedPhoneNumberTypes?: PhoneNumberType[];
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesResponse {
  /**
   * @public
   * <p>The supported phone number countries.</p>
   */
  PhoneNumberCountries?: PhoneNumberCountry[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags in the list.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListVoiceConnectorGroupsRequest {
  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.  </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListVoiceConnectorGroupsResponse {
  /**
   * @public
   * <p>The details of the Voice Connector groups.</p>
   */
  VoiceConnectorGroups?: VoiceConnectorGroup[];

  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVoiceConnectorsRequest {
  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListVoiceConnectorsResponse {
  /**
   * @public
   * <p>The details of the Voice Connectors.</p>
   */
  VoiceConnectors?: VoiceConnector[];

  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVoiceConnectorTerminationCredentialsRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorTerminationCredentialsResponse {
  /**
   * @public
   * <p>A list of user names.</p>
   */
  Usernames?: string[];
}

/**
 * @public
 */
export interface ListVoiceProfileDomainsRequest {
  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A high-level overview of a voice profile domain.</p>
 */
export interface VoiceProfileDomainSummary {
  /**
   * @public
   * <p>The ID of the voice profile domain summary.</p>
   */
  VoiceProfileDomainId?: string;

  /**
   * @public
   * <p>The ARN of a voice profile in a voice profile domain summary.</p>
   */
  VoiceProfileDomainArn?: string;

  /**
   * @public
   * <p>The name of the voice profile domain summary.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Describes the voice profile domain summary.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The time at which the voice profile domain summary was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the voice profile domain summary was last updated.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface ListVoiceProfileDomainsResponse {
  /**
   * @public
   * <p>The list of voice profile domains.</p>
   */
  VoiceProfileDomains?: VoiceProfileDomainSummary[];

  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVoiceProfilesRequest {
  /**
   * @public
   * <p>The ID of the voice profile domain.</p>
   */
  VoiceProfileDomainId: string | undefined;

  /**
   * @public
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results in the request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A high-level summary of a voice profile.</p>
 */
export interface VoiceProfileSummary {
  /**
   * @public
   * <p>The ID of the voice profile in a voice profile summary.</p>
   */
  VoiceProfileId?: string;

  /**
   * @public
   * <p>The ARN of the voice profile in a voice profile summary.</p>
   */
  VoiceProfileArn?: string;

  /**
   * @public
   * <p>The ID of the voice profile domain in a voice profile summary.</p>
   */
  VoiceProfileDomainId?: string;

  /**
   * @public
   * <p>The time at which a voice profile summary was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a voice profile summary was last updated.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>Extends the life of the voice profile. You can use <code>UpdateVoiceProfile</code> to refresh an existing voice profile's voice print and extend the life of the summary.</p>
   */
  ExpirationTimestamp?: Date;
}

/**
 * @public
 */
export interface ListVoiceProfilesResponse {
  /**
   * @public
   * <p>The list of voice profiles.</p>
   */
  VoiceProfiles?: VoiceProfileSummary[];

  /**
   * @public
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutSipMediaApplicationAlexaSkillConfigurationRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * @public
   * <p>The Alexa Skill configuration.</p>
   */
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}

/**
 * @public
 */
export interface PutSipMediaApplicationAlexaSkillConfigurationResponse {
  /**
   * @public
   * <p>Returns the Alexa Skill configuration.</p>
   */
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}

/**
 * @public
 */
export interface PutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * @public
   * <p>The logging configuration for the specified SIP media application.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

/**
 * @public
 */
export interface PutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @public
   * <p>The updated logging configuration for the specified SIP media application.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The configuration being updated.</p>
   */
  EmergencyCallingConfiguration: EmergencyCallingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @public
   * <p>The updated configuration.</p>
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorLoggingConfigurationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The logging configuration being updated.</p>
   */
  LoggingConfiguration: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorLoggingConfigurationResponse {
  /**
   * @public
   * <p>The updated logging configuration.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorOriginationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The origination settings being updated.</p>
   */
  Origination: Origination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorOriginationResponse {
  /**
   * @public
   * <p>The updated origination settings.</p>
   */
  Origination?: Origination;
}

/**
 * @public
 */
export interface PutVoiceConnectorProxyRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The default number of minutes allowed for proxy session.</p>
   */
  DefaultSessionExpiryMinutes: number | undefined;

  /**
   * @public
   * <p>The countries for proxy phone numbers to be selected from.</p>
   */
  PhoneNumberPoolCountries: string[] | undefined;

  /**
   * @public
   * <p>The phone number to route calls to after a proxy session expires.</p>
   */
  FallBackPhoneNumber?: string;

  /**
   * @public
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime SDK Voice Connector.</p>
   */
  Disabled?: boolean;
}

/**
 * @public
 */
export interface PutVoiceConnectorProxyResponse {
  /**
   * @public
   * <p>The proxy configuration details.</p>
   */
  Proxy?: Proxy;
}

/**
 * @public
 */
export interface PutVoiceConnectorStreamingConfigurationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The streaming settings being updated.</p>
   */
  StreamingConfiguration: StreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorStreamingConfigurationResponse {
  /**
   * @public
   * <p>The updated streaming settings.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The termination settings to be updated.</p>
   */
  Termination: Termination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationResponse {
  /**
   * @public
   * <p>The updated termination settings.</p>
   */
  Termination?: Termination;
}

/**
 * @public
 * <p>The SIP credentials used to authenticate requests to an Amazon Chime SDK Voice Connector.</p>
 */
export interface Credential {
  /**
   * @public
   * <p>The RFC2617 compliant user name associated with the SIP credentials, in
   *          US-ASCII format.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The RFC2617 compliant password associated with the SIP credentials, in US-ASCII format.</p>
   */
  Password?: string;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationCredentialsRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The termination credentials being updated.</p>
   */
  Credentials?: Credential[];
}

/**
 * @public
 */
export interface RestorePhoneNumberRequest {
  /**
   * @public
   * <p>The ID of the phone number being restored.</p>
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface RestorePhoneNumberResponse {
  /**
   * @public
   * <p>The restored phone number.</p>
   */
  PhoneNumber?: PhoneNumber;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * @public
   * <p>Confines a search to just the phone numbers associated with the specified area code.</p>
   */
  AreaCode?: string;

  /**
   * @public
   * <p>Confines a search to just the phone numbers associated with the specified city.</p>
   */
  City?: string;

  /**
   * @public
   * <p>Confines a search to just the phone numbers associated with the specified country.</p>
   */
  Country?: string;

  /**
   * @public
   * <p>Confines a search to just the phone numbers associated with the specified state.</p>
   */
  State?: string;

  /**
   * @public
   * <p>Confines a search to just the phone numbers associated with the specified toll-free prefix.</p>
   */
  TollFreePrefix?: string;

  /**
   * @public
   * <p>Confines a search to just the phone numbers associated with the specified phone number type, either <b>local</b> or <b>toll-free</b>.</p>
   */
  PhoneNumberType?: PhoneNumberType;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * @public
   * <p>Confines a search to just the phone numbers in the E.164 format.</p>
   */
  E164PhoneNumbers?: string[];

  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The transaction ID of the call being analyzed.</p>
   */
  TransactionId: string | undefined;

  /**
   * @public
   * <p>The ID of the voice profile domain that will store the voice profile.</p>
   */
  VoiceProfileDomainId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the client request. Use a different token for different speaker search tasks.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Specifies which call leg to stream for speaker search.</p>
   */
  CallLeg?: CallLegType;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskResponse {
  /**
   * @public
   * <p>The details of the speaker search task.</p>
   */
  SpeakerSearchTask?: SpeakerSearchTask;
}

/**
 * @public
 * <p>A well-formed request couldn't be followed due to semantic errors.</p>
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
 * @enum
 */
export const LanguageCode = {
  EN_US: "en-US",
} as const;

/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 */
export interface StartVoiceToneAnalysisTaskRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The transaction ID.</p>
   */
  TransactionId: string | undefined;

  /**
   * @public
   * <p>The language code.</p>
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * @public
   * <p>The unique identifier for the client request. Use a different token for different voice tone analysis
   *          tasks.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StartVoiceToneAnalysisTaskResponse {
  /**
   * @public
   * <p>The details of the voice tone analysis task.</p>
   */
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}

/**
 * @public
 */
export interface StopSpeakerSearchTaskRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The speaker search task ID.</p>
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface StopVoiceToneAnalysisTaskRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The ID of the voice tone analysis task.</p>
   */
  VoiceToneAnalysisTaskId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource being tagged. </p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A list of the tags being added to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource having its tags removed.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The keys of the tags being removed from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsRequest {
  /**
   * @public
   * <p>The Voice Connector settings.</p>
   */
  VoiceConnector?: VoiceConnectorSettings;
}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * @public
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * @public
   * <p>The product type.</p>
   */
  ProductType?: PhoneNumberProductType;

  /**
   * @public
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;

  /**
   * @public
   * <p>Specifies the name assigned to one or more phone numbers.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResponse {
  /**
   * @public
   * <p>The updated phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

/**
 * @public
 */
export interface UpdatePhoneNumberSettingsRequest {
  /**
   * @public
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxySessionRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;

  /**
   * @public
   * <p>The proxy session capabilities.</p>
   */
  Capabilities: Capability[] | undefined;

  /**
   * @public
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;
}

/**
 * @public
 */
export interface UpdateProxySessionResponse {
  /**
   * @public
   * <p>The updated proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * @public
   * <p>The new name for the specified SIP media application.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The new set of endpoints for the specified SIP media application.</p>
   */
  Endpoints?: SipMediaApplicationEndpoint[];
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationResponse {
  /**
   * @public
   * <p>The updated SIP media application’s details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationCallRequest {
  /**
   * @public
   * <p>The ID of the SIP media application handling the call.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * @public
   * <p>The ID of the call transaction.</p>
   */
  TransactionId: string | undefined;

  /**
   * @public
   * <p>Arguments made available to the Lambda function as part of the
   *          <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.</p>
   */
  Arguments: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationCallResponse {
  /**
   * @public
   * <p>A <code>Call</code> instance for a SIP media application.</p>
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

/**
 * @public
 */
export interface UpdateSipRuleRequest {
  /**
   * @public
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;

  /**
   * @public
   * <p>The new name for the specified SIP rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The new value that indicates whether the rule is disabled.</p>
   */
  Disabled?: boolean;

  /**
   * @public
   * <p>The new list of target applications.</p>
   */
  TargetApplications?: SipRuleTargetApplication[];
}

/**
 * @public
 */
export interface UpdateSipRuleResponse {
  /**
   * @public
   * <p>The updated SIP rule details.</p>
   */
  SipRule?: SipRule;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The name of the Voice Connector.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>When enabled, requires encryption for the Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorResponse {
  /**
   * @public
   * <p>The updated Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorGroupRequest {
  /**
   * @public
   * <p>The Voice Connector ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * @public
   * <p>The name of the Voice Connector group.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The <code>VoiceConnectorItems</code> to associate with the Voice Connector
   *          group.</p>
   */
  VoiceConnectorItems: VoiceConnectorItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorGroupResponse {
  /**
   * @public
   * <p>The updated Voice Connector group.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

/**
 * @public
 */
export interface UpdateVoiceProfileRequest {
  /**
   * @public
   * <p>The profile ID.</p>
   */
  VoiceProfileId: string | undefined;

  /**
   * @public
   * <p>The ID of the speaker search task.</p>
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceProfileResponse {
  /**
   * @public
   * <p>The updated voice profile settings.</p>
   */
  VoiceProfile?: VoiceProfile;
}

/**
 * @public
 */
export interface UpdateVoiceProfileDomainRequest {
  /**
   * @public
   * <p>The domain ID.</p>
   */
  VoiceProfileDomainId: string | undefined;

  /**
   * @public
   * <p>The name of the voice profile domain.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the voice profile domain.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateVoiceProfileDomainResponse {
  /**
   * @public
   * <p>The updated details of the voice profile domain.</p>
   */
  VoiceProfileDomain?: VoiceProfileDomain;
}

/**
 * @public
 */
export interface ValidateE911AddressRequest {
  /**
   * @public
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The address street number, such as <code>200</code> or <code>2121</code>.</p>
   */
  StreetNumber: string | undefined;

  /**
   * @public
   * <p>The address street information, such as <code>8th Avenue</code>.</p>
   */
  StreetInfo: string | undefined;

  /**
   * @public
   * <p>The address city, such as <code>Portland</code>.</p>
   */
  City: string | undefined;

  /**
   * @public
   * <p>The address state, such as <code>ME</code>.</p>
   */
  State: string | undefined;

  /**
   * @public
   * <p>The country in the address being validated.</p>
   */
  Country: string | undefined;

  /**
   * @public
   * <p>The dress postal code, such <code>04352</code>.</p>
   */
  PostalCode: string | undefined;
}

/**
 * @public
 */
export interface ValidateE911AddressResponse {
  /**
   * @public
   * <p>Number indicating the result of address validation. <code>0</code> means the
   *          address was perfect as-is and successfully validated. <code>1</code> means the
   *          address was corrected. <code>2</code> means the address sent was not close
   *          enough and was not validated.</p>
   */
  ValidationResult?: number;

  /**
   * @public
   * <p>The ID that represents the address.</p>
   */
  AddressExternalId?: string;

  /**
   * @public
   * <p>The validated address.</p>
   */
  Address?: Address;

  /**
   * @public
   * <p>The list of address suggestions..</p>
   */
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
  ...(obj.Name && { Name: SENSITIVE_STRING }),
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
  ...(obj.Name && { Name: SENSITIVE_STRING }),
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
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSipMediaApplicationRequestFilterSensitiveLog = (obj: CreateSipMediaApplicationRequest): any => ({
  ...obj,
  ...(obj.Endpoints && { Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpointFilterSensitiveLog(item)) }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
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
export const CreateVoiceConnectorRequestFilterSensitiveLog = (obj: CreateVoiceConnectorRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
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
  ...(obj.Name && { Name: SENSITIVE_STRING }),
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
  ...(obj.Name && { Name: SENSITIVE_STRING }),
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
