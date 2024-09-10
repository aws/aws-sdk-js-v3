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
 * <p>You don't have the permissions needed to run this action.</p>
 * @public
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
 * <p>A validated address.</p>
 * @public
 */
export interface Address {
  /**
   * <p>The address street, such as <code>8th Avenue</code>.</p>
   * @public
   */
  streetName?: string;

  /**
   * <p>The address suffix, such as the <code>N</code> in <code>8th Avenue N</code>.</p>
   * @public
   */
  streetSuffix?: string;

  /**
   * <p>An address suffix location, such as the <code>S. Unit A</code> in
   *          <code>Central Park S. Unit A</code>.</p>
   * @public
   */
  postDirectional?: string;

  /**
   * <p>An address prefix location, such as the <code>N</code> in <code>N. Third St.</code>
   *          </p>
   * @public
   */
  preDirectional?: string;

  /**
   * <p>The numeric portion of an address.</p>
   * @public
   */
  streetNumber?: string;

  /**
   * <p>The city of an address.</p>
   * @public
   */
  city?: string;

  /**
   * <p>The state of an address.</p>
   * @public
   */
  state?: string;

  /**
   * <p>The postal code of an address.</p>
   * @public
   */
  postalCode?: string;

  /**
   * <p>The zip + 4 or postal code + 4 of an address.</p>
   * @public
   */
  postalCodePlus4?: string;

  /**
   * <p>The country of an address.</p>
   * @public
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
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   * @public
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime SDK Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   * @public
   */
  ForceAssociate?: boolean;
}

/**
 * <p>If a phone number action fails for one or more of the phone numbers in a request,
 *          a list of the failed phone numbers is returned, along with error codes and error messages.</p>
 * @public
 */
export interface PhoneNumberError {
  /**
   * <p>The phone number ID for which the action failed.</p>
   * @public
   */
  PhoneNumberId?: string;

  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: ErrorCode;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and
   *          error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * <p>The input parameters don't match the service's restrictions.</p>
 * @public
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
 * <p>The client is permanently forbidden from making the request.</p>
 * @public
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
 * <p>The requested resource couldn't be found.</p>
 * @public
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
 * <p>The service encountered an unexpected error.</p>
 * @public
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
 * <p>The service is currently unavailable.</p>
 * @public
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
 * <p>The number of customer requests exceeds the request rate limit.</p>
 * @public
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
 * <p>The client isn't authorized to request a resource.</p>
 * @public
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
   * <p>The Amazon Chime SDK Voice Connector group ID.</p>
   * @public
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   * @public
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime SDK Voice Connector Group and removes any previously existing associations.
   *          If false, does not associate any phone numbers that have previously existing associations.</p>
   * @public
   */
  ForceAssociate?: boolean;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberRequest {
  /**
   * <p>List of phone number IDs.</p>
   * @public
   */
  PhoneNumberIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   * @public
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
 * <p>The phone number ID, product type, or calling name fields to update,
 *          used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.</p>
 * @public
 */
export interface UpdatePhoneNumberRequestItem {
  /**
   * <p>The phone number ID to update.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The product type to update.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType;

  /**
   * <p>The outbound calling name to update.</p>
   * @public
   */
  CallingName?: string;

  /**
   * <p>The name of the phone number.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberRequest {
  /**
   * <p>Lists the phone numbers in the update request.</p>
   * @public
   */
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberResponse {
  /**
   * <p>A list of failed phone numbers and their error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * <p>The details of an Amazon Chime SDK Voice Connector call.</p>
 * @public
 */
export interface CallDetails {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId?: string;

  /**
   * <p>The transaction ID of a Voice Connector call.</p>
   * @public
   */
  TransactionId?: string;

  /**
   * <p>Identifies a person as the caller or the callee.</p>
   * @public
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
 * <p>A suggested address.</p>
 * @public
 */
export interface CandidateAddress {
  /**
   * <p>The street information of the candidate address.</p>
   * @public
   */
  streetInfo?: string;

  /**
   * <p>The numeric portion of the candidate address.</p>
   * @public
   */
  streetNumber?: string;

  /**
   * <p>The city of the candidate address.</p>
   * @public
   */
  city?: string;

  /**
   * <p>The state of the candidate address.</p>
   * @public
   */
  state?: string;

  /**
   * <p>The postal code of the candidate address.</p>
   * @public
   */
  postalCode?: string;

  /**
   * <p>The zip + 4 or postal code +4 of the candidate address.</p>
   * @public
   */
  postalCodePlus4?: string;

  /**
   * <p>The country of the candidate address.</p>
   * @public
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
   * <p>The phone number product type.</p>
   * @public
   */
  ProductType: PhoneNumberProductType | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   * @public
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * <p>Specifies the name assigned to one or more phone numbers.</p>
   * @public
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
 * <p>A phone number for which an order has been placed.</p>
 * @public
 */
export interface OrderedPhoneNumber {
  /**
   * <p>The phone number, in E.164 format.</p>
   * @public
   */
  E164PhoneNumber?: string;

  /**
   * <p>The phone number status.</p>
   * @public
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
 * <p>The details of an Amazon Chime SDK phone number order.</p>
 * @public
 */
export interface PhoneNumberOrder {
  /**
   * <p>The ID of the phone order.</p>
   * @public
   */
  PhoneNumberOrderId?: string;

  /**
   * <p>The phone number order product type.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType;

  /**
   * <p>The status of the phone number order.</p>
   * @public
   */
  Status?: PhoneNumberOrderStatus;

  /**
   * <p>The type of phone number being ordered, local or toll-free.</p>
   * @public
   */
  OrderType?: PhoneNumberOrderType;

  /**
   * <p>The ordered phone number details, such as the phone number in E.164 format
   *          and the phone number status.</p>
   * @public
   */
  OrderedPhoneNumbers?: OrderedPhoneNumber[];

  /**
   * <p>The phone number order creation time stamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated phone number order time stamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   * @public
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

/**
 * <p>The request exceeds the resource limit.</p>
 * @public
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
 * <p>The country and area code for a proxy phone number in a proxy phone session.</p>
 * @public
 */
export interface GeoMatchParams {
  /**
   * <p>The country.</p>
   * @public
   */
  Country: string | undefined;

  /**
   * <p>The area code.</p>
   * @public
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
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The participant phone numbers.</p>
   * @public
   */
  ParticipantPhoneNumbers: string[] | undefined;

  /**
   * <p>The name of the proxy session.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   * @public
   */
  ExpiryMinutes?: number;

  /**
   * <p>The proxy session's capabilities.</p>
   * @public
   */
  Capabilities: Capability[] | undefined;

  /**
   * <p>The preference for proxy phone number reuse, or stickiness, between the same
   *             participants across sessions.</p>
   * @public
   */
  NumberSelectionBehavior?: NumberSelectionBehavior;

  /**
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   * @public
   */
  GeoMatchLevel?: GeoMatchLevel;

  /**
   * <p>The country and area code for the proxy phone number.</p>
   * @public
   */
  GeoMatchParams?: GeoMatchParams;
}

/**
 * <p>The phone number and proxy phone number for a participant in an Amazon Chime SDK Voice Connector proxy session.</p>
 * @public
 */
export interface Participant {
  /**
   * <p>The participant's phone number.</p>
   * @public
   */
  PhoneNumber?: string;

  /**
   * <p>The participant's proxy phone number.</p>
   * @public
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
 * <p>The proxy session for an Amazon Chime SDK Voice Connector.</p>
 * @public
 */
export interface ProxySession {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId?: string;

  /**
   * <p>The proxy session ID.</p>
   * @public
   */
  ProxySessionId?: string;

  /**
   * <p>The proxy session name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The proxy session status.</p>
   * @public
   */
  Status?: ProxySessionStatus;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   * @public
   */
  ExpiryMinutes?: number;

  /**
   * <p>The proxy session capabilities.</p>
   * @public
   */
  Capabilities?: Capability[];

  /**
   * <p>The created time stamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated time stamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The ended time stamp, in ISO 8601 format.</p>
   * @public
   */
  EndedTimestamp?: Date;

  /**
   * <p>The proxy session participants.</p>
   * @public
   */
  Participants?: Participant[];

  /**
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   * @public
   */
  NumberSelectionBehavior?: NumberSelectionBehavior;

  /**
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   * @public
   */
  GeoMatchLevel?: GeoMatchLevel;

  /**
   * <p>The country and area code for the proxy phone number.</p>
   * @public
   */
  GeoMatchParams?: GeoMatchParams;
}

/**
 * @public
 */
export interface CreateProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   * @public
   */
  ProxySession?: ProxySession;
}

/**
 * <p>Multiple instances of the same request were made simultaneously.</p>
 * @public
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
 * <p>The endpoint assigned to a SIP media application.</p>
 * @public
 */
export interface SipMediaApplicationEndpoint {
  /**
   * <p>Valid Amazon Resource Name (ARN) of the Lambda function, version, or alias.
   *          The function must be created in the same AWS Region as the SIP media application.</p>
   * @public
   */
  LambdaArn?: string;
}

/**
 * <p>Describes a tag applied to a resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationRequest {
  /**
   * <p>The AWS Region assigned to the SIP media application.</p>
   * @public
   */
  AwsRegion: string | undefined;

  /**
   * <p>The SIP media application's name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>List of endpoints (Lambda ARNs) specified for the SIP media application.</p>
   * @public
   */
  Endpoints: SipMediaApplicationEndpoint[] | undefined;

  /**
   * <p>The tags assigned to the SIP media application.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>The details of the SIP media application, including name and endpoints.
 *          An AWS account can have multiple SIP media applications.</p>
 * @public
 */
export interface SipMediaApplication {
  /**
   * <p>A SIP media application's ID.</p>
   * @public
   */
  SipMediaApplicationId?: string;

  /**
   * <p>The AWS Region in which the SIP media application is created.</p>
   * @public
   */
  AwsRegion?: string;

  /**
   * <p>The SIP media application's name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>List of endpoints for a SIP media application. Currently, only one endpoint per
   *          SIP media application is permitted.</p>
   * @public
   */
  Endpoints?: SipMediaApplicationEndpoint[];

  /**
   * <p>The SIP media application creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which the SIP media application was updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The ARN of the SIP media application.</p>
   * @public
   */
  SipMediaApplicationArn?: string;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationResponse {
  /**
   * <p>The SIP media application details.</p>
   * @public
   */
  SipMediaApplication?: SipMediaApplication;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationCallRequest {
  /**
   * <p>The phone number that a user calls from. This is a phone number in your
   *          Amazon Chime SDK phone number inventory.</p>
   * @public
   */
  FromPhoneNumber: string | undefined;

  /**
   * <p>The phone number that the service should call.</p>
   * @public
   */
  ToPhoneNumber: string | undefined;

  /**
   * <p>The ID of the SIP media application.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The SIP headers added to an outbound call leg.</p>
   * @public
   */
  SipHeaders?: Record<string, string>;

  /**
   * <p>Context passed to a CreateSipMediaApplication API call. For example, you could pass
   *             key-value pairs such as: <code>"FirstName": "John", "LastName": "Doe"</code>
   *          </p>
   * @public
   */
  ArgumentsMap?: Record<string, string>;
}

/**
 * <p>A <code>Call</code> instance for a SIP media application.</p>
 * @public
 */
export interface SipMediaApplicationCall {
  /**
   * <p>The call's transaction ID.</p>
   * @public
   */
  TransactionId?: string;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationCallResponse {
  /**
   * <p>The actual call.</p>
   * @public
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

/**
 * <p>A target SIP media application and other details, such as priority and AWS Region,
 *          to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
 * @public
 */
export interface SipRuleTargetApplication {
  /**
   * <p>The ID of a rule's target SIP media application.</p>
   * @public
   */
  SipMediaApplicationId?: string;

  /**
   * <p>The priority setting of a rule's target SIP media application.</p>
   * @public
   */
  Priority?: number;

  /**
   * <p>The AWS Region of a rule's target SIP media application.</p>
   * @public
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
   * <p>The name of the SIP rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of trigger assigned to the SIP rule in <code>TriggerValue</code>,
   *          currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.</p>
   * @public
   */
  TriggerType: SipRuleTriggerType | undefined;

  /**
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code>, the
   *          value can be the outbound host name of a Voice Connector. If
   *          <code>TriggerType</code> is <code>ToPhoneNumber</code>, the value can
   *          be a customer-owned phone number in the E164 format. The
   *          <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered
   *          if the request URI in an incoming SIP request matches the
   *          <code>RequestUriHostname</code>, or if the <code>To</code> header in the
   *          incoming SIP request matches the <code>ToPhoneNumber</code> value.</p>
   * @public
   */
  TriggerValue: string | undefined;

  /**
   * <p>Disables or enables a SIP rule. You must disable SIP rules
   *          before you can delete them.</p>
   * @public
   */
  Disabled?: boolean;

  /**
   * <p>List of SIP media applications, with priority and AWS Region. Only one SIP
   *          application per AWS Region can be used.</p>
   * @public
   */
  TargetApplications?: SipRuleTargetApplication[];
}

/**
 * <p>The details of a SIP rule, including name, triggers, and target applications.
 *          An AWS account can have multiple SIP rules.</p>
 * @public
 */
export interface SipRule {
  /**
   * <p>A SIP rule's ID.</p>
   * @public
   */
  SipRuleId?: string;

  /**
   * <p>A SIP rule's name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Indicates whether the SIP rule is enabled or disabled. You must disable a rule before you can delete it.</p>
   * @public
   */
  Disabled?: boolean;

  /**
   * <p>The type of trigger set for a SIP rule, either a phone number or a URI request host name.</p>
   * @public
   */
  TriggerType?: SipRuleTriggerType;

  /**
   * <p>The value set for a SIP rule's trigger type. Either a phone number or a URI hostname.</p>
   * @public
   */
  TriggerValue?: string;

  /**
   * <p>The target SIP media application and other details, such as priority and AWS Region,
   *          to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
   * @public
   */
  TargetApplications?: SipRuleTargetApplication[];

  /**
   * <p>The time at which the SIP rule was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which the SIP rule was updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateSipRuleResponse {
  /**
   * <p>The SIP rule information, including the rule ID, triggers, and target applications.</p>
   * @public
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
   * <p>The name of the Voice Connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The AWS Region in which the Amazon Chime SDK Voice Connector is created. Default value:
   *          <code>us-east-1</code> .</p>
   * @public
   */
  AwsRegion?: VoiceConnectorAwsRegion;

  /**
   * <p>Enables or disables encryption for the Voice Connector.</p>
   * @public
   */
  RequireEncryption: boolean | undefined;

  /**
   * <p>The tags assigned to the Voice Connector.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>The Amazon Chime SDK Voice Connector configuration, including outbound
 *          host name and encryption settings.</p>
 * @public
 */
export interface VoiceConnector {
  /**
   * <p>The Voice Connector's ID.</p>
   * @public
   */
  VoiceConnectorId?: string;

  /**
   * <p>The AWS Region in which the Voice Connector is created.
   *          Default: us-east-1.</p>
   * @public
   */
  AwsRegion?: VoiceConnectorAwsRegion;

  /**
   * <p>The Voice Connector's name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The outbound host name for the Voice Connector.</p>
   * @public
   */
  OutboundHostName?: string;

  /**
   * <p>Enables or disables encryption for the Voice Connector.</p>
   * @public
   */
  RequireEncryption?: boolean;

  /**
   * <p>The Voice Connector's creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The Voice Connector's updated timestamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The ARN of the Voice Connector.</p>
   * @public
   */
  VoiceConnectorArn?: string;
}

/**
 * @public
 */
export interface CreateVoiceConnectorResponse {
  /**
   * <p>The details of the Voice Connector.</p>
   * @public
   */
  VoiceConnector?: VoiceConnector;
}

/**
 * <p>For Amazon Chime SDK Voice Connector groups, the Amazon Chime SDK Voice
 *          Connectors to which you route inbound calls. Includes priority configuration
 *          settings. Limit: 3 VoiceConnectorItems per Voice Connector group.</p>
 * @public
 */
export interface VoiceConnectorItem {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The priority setting of a Voice Connector item. Calls are routed to hosts
   *            in priority order, with 1 as the highest priority. When hosts have equal priority,
   *            the system distributes calls among them based on their relative weight.</p>
   * @public
   */
  Priority: number | undefined;
}

/**
 * @public
 */
export interface CreateVoiceConnectorGroupRequest {
  /**
   * <p>The name of the Voice Connector group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Lists the Voice Connectors that inbound calls are routed to.</p>
   * @public
   */
  VoiceConnectorItems?: VoiceConnectorItem[];
}

/**
 * <p>The Amazon Chime SDK Voice Connector group configuration, including
 *          associated Voice Connectors. You can include Voice Connectors from different
 *          AWS Regions in a group. This creates a fault tolerant mechanism for
 *          fallback in case of availability events.</p>
 * @public
 */
export interface VoiceConnectorGroup {
  /**
   * <p>The ID of a Voice Connector group.</p>
   * @public
   */
  VoiceConnectorGroupId?: string;

  /**
   * <p>The name of a Voice Connector group.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Voice Connectors to which you route inbound calls.</p>
   * @public
   */
  VoiceConnectorItems?: VoiceConnectorItem[];

  /**
   * <p>The Voice Connector group's creation time stamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The Voice Connector group's creation time stamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The ARN of the Voice Connector group.</p>
   * @public
   */
  VoiceConnectorGroupArn?: string;
}

/**
 * @public
 */
export interface CreateVoiceConnectorGroupResponse {
  /**
   * <p>The details of the Voice Connector group.</p>
   * @public
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

/**
 * @public
 */
export interface CreateVoiceProfileRequest {
  /**
   * <p>The ID of the speaker search task.</p>
   * @public
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * <p>The combination of a voice print and caller ID.</p>
 * @public
 */
export interface VoiceProfile {
  /**
   * <p>The ID of the voice profile.</p>
   * @public
   */
  VoiceProfileId?: string;

  /**
   * <p>The ARN of the voice profile.</p>
   * @public
   */
  VoiceProfileArn?: string;

  /**
   * <p>The ID of the domain that contains the voice profile.</p>
   * @public
   */
  VoiceProfileDomainId?: string;

  /**
   * <p>The time at which the voice profile was created and enrolled.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which the voice profile was last updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The time at which a voice profile expires unless you re-enroll the caller via the
   *          <code>UpdateVoiceProfile</code> API.</p>
   * @public
   */
  ExpirationTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateVoiceProfileResponse {
  /**
   * <p>The requested voice profile.</p>
   * @public
   */
  VoiceProfile?: VoiceProfile;
}

/**
 * <p>Access to the target resource is no longer available at the origin server. This condition is likely to be permanent.</p>
 * @public
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
 * <p>A structure that contains the configuration settings for server-side encryption.</p>
 *          <note>
 *             <p>We only support symmetric keys. Do not use asymmetric or HMAC keys, or KMS aliases.</p>
 *          </note>
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * <p>The ARN of the KMS key used to encrypt the enrollment data in a voice profile domain.
   *          Asymmetric customer managed keys are not supported.</p>
   * @public
   */
  KmsKeyArn: string | undefined;
}

/**
 * @public
 */
export interface CreateVoiceProfileDomainRequest {
  /**
   * <p>The name of the voice profile domain.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the voice profile domain.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The server-side encryption configuration for the request.</p>
   * @public
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The unique identifier for the client request. Use a different token for different domain creation requests.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags assigned to the domain.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>A collection of voice profiles.</p>
 * @public
 */
export interface VoiceProfileDomain {
  /**
   * <p>The ID of the voice profile domain.</p>
   * @public
   */
  VoiceProfileDomainId?: string;

  /**
   * <p>The voice profile domain's Amazon Resource Number (ARN).</p>
   * @public
   */
  VoiceProfileDomainArn?: string;

  /**
   * <p>The name of the voice profile domain.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the voice profile domain.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A structure that contains the configuration settings for server-side encryption.</p>
   * @public
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The time at which the voice profile domain was created.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which the voice profile was last updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateVoiceProfileDomainResponse {
  /**
   * <p>The requested voice profile domain.</p>
   * @public
   */
  VoiceProfileDomain?: VoiceProfileDomain;
}

/**
 * @public
 */
export interface DeletePhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxySessionRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   * @public
   */
  ProxySessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   * @public
   */
  SipRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorGroupRequest {
  /**
   * <p>The Voice Connector Group ID.</p>
   * @public
   */
  VoiceConnectorGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorOriginationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorProxyRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorTerminationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The RFC2617 compliant username associated with the SIP credentials,
   *          in US-ASCII format.</p>
   * @public
   */
  Usernames: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceProfileRequest {
  /**
   * <p>The voice profile ID.</p>
   * @public
   */
  VoiceProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceProfileDomainRequest {
  /**
   * <p>The voice profile domain ID.</p>
   * @public
   */
  VoiceProfileDomainId: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   * @public
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a
   *          list of the phone numbers is returned, along with error codes and error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * <p>The Voice Connector group ID.</p>
   * @public
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>The list of phone numbers, in E.164 format.</p>
   * @public
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request,
   *          a list of the phone numbers is returned, along with error codes and error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * <p>The Amazon Chime SDK Voice Connector settings. Includes any Amazon
 *          S3 buckets designated for storing call detail records.</p>
 * @public
 */
export interface VoiceConnectorSettings {
  /**
   * <p>The S3 bucket that stores the Voice Connector's call detail records.</p>
   * @public
   */
  CdrBucket?: string;
}

/**
 * @public
 */
export interface GetGlobalSettingsResponse {
  /**
   * <p>The Voice Connector settings.</p>
   * @public
   */
  VoiceConnector?: VoiceConnectorSettings;
}

/**
 * @public
 */
export interface GetPhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   * @public
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
 * <p>The phone number associations, such as an Amazon Chime SDK account ID, user ID,
 *          Voice Connector ID, or Voice Connector group ID.</p>
 * @public
 */
export interface PhoneNumberAssociation {
  /**
   * <p>Contains the ID for the entity specified in Name.</p>
   * @public
   */
  Value?: string;

  /**
   * <p>Defines the association with an Amazon Chime SDK account ID, user ID, Voice Connector ID, or Voice Connector group ID.</p>
   * @public
   */
  Name?: PhoneNumberAssociationName;

  /**
   * <p>The timestamp of the phone number association, in ISO 8601 format.</p>
   * @public
   */
  AssociatedTimestamp?: Date;
}

/**
 * <p>The phone number capabilities for Amazon Chime SDK phone numbers,
 *          such as enabled inbound and outbound calling, and text messaging.</p>
 * @public
 */
export interface PhoneNumberCapabilities {
  /**
   * <p>Allows or denies inbound calling for the specified phone number.</p>
   * @public
   */
  InboundCall?: boolean;

  /**
   * <p>Allows or denies outbound calling for the specified phone number.</p>
   * @public
   */
  OutboundCall?: boolean;

  /**
   * <p>Allows or denies inbound SMS messaging for the specified phone number.</p>
   * @public
   */
  InboundSMS?: boolean;

  /**
   * <p>Allows or denies outbound SMS messaging for the specified phone number.</p>
   * @public
   */
  OutboundSMS?: boolean;

  /**
   * <p>Allows or denies inbound MMS messaging for the specified phone number.</p>
   * @public
   */
  InboundMMS?: boolean;

  /**
   * <p>Allows or denies inbound MMS messaging for the specified phone number.</p>
   * @public
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
 * <p>A phone number used to call an Amazon
 *          Chime SDK Voice Connector.</p>
 * @public
 */
export interface PhoneNumber {
  /**
   * <p>The phone number's ID.</p>
   * @public
   */
  PhoneNumberId?: string;

  /**
   * <p>The phone number, in E.164 format.</p>
   * @public
   */
  E164PhoneNumber?: string;

  /**
   * <p>The phone number's country. Format: ISO 3166-1 alpha-2.</p>
   * @public
   */
  Country?: string;

  /**
   * <p>The phone number's type.</p>
   * @public
   */
  Type?: PhoneNumberType;

  /**
   * <p>The phone number's product type.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType;

  /**
   * <p>The phone number's status.</p>
   * @public
   */
  Status?: PhoneNumberStatus;

  /**
   * <p>The phone number's capabilities.</p>
   * @public
   */
  Capabilities?: PhoneNumberCapabilities;

  /**
   * <p>The phone number's associations.</p>
   * @public
   */
  Associations?: PhoneNumberAssociation[];

  /**
   * <p>The outbound calling name associated with the phone number.</p>
   * @public
   */
  CallingName?: string;

  /**
   * <p>The outbound calling name status.</p>
   * @public
   */
  CallingNameStatus?: CallingNameStatus;

  /**
   * <p>The phone number creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated phone number timestamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The deleted phone number timestamp, in ISO 8601 format.</p>
   * @public
   */
  DeletionTimestamp?: Date;

  /**
   * <p>The phone number's order ID.</p>
   * @public
   */
  OrderId?: string;

  /**
   * <p>The name of the phone number.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface GetPhoneNumberResponse {
  /**
   * <p>The phone number details.</p>
   * @public
   */
  PhoneNumber?: PhoneNumber;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderRequest {
  /**
   * <p>The ID of the phone number order .</p>
   * @public
   */
  PhoneNumberOrderId: string | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   * @public
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

/**
 * @public
 */
export interface GetPhoneNumberSettingsResponse {
  /**
   * <p>The default outbound calling name for the account.</p>
   * @public
   */
  CallingName?: string;

  /**
   * <p>The updated outbound calling name timestamp, in ISO 8601 format.</p>
   * @public
   */
  CallingNameUpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface GetProxySessionRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   * @public
   */
  ProxySessionId: string | undefined;
}

/**
 * @public
 */
export interface GetProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   * @public
   */
  ProxySession?: ProxySession;
}

/**
 * @public
 */
export interface GetSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID .</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationResponse {
  /**
   * <p>The details of the SIP media application.</p>
   * @public
   */
  SipMediaApplication?: SipMediaApplication;
}

/**
 * @public
 */
export interface GetSipMediaApplicationAlexaSkillConfigurationRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * <p>The Alexa Skill configuration of a SIP media application.</p>
 *          <important>
 *             <p>Due to changes made by the Amazon Alexa service, this data type is no longer available for use. For more information, refer to
 *          the <a href="https://developer.amazon.com/en-US/alexa/alexasmartproperties">Alexa Smart Properties</a> page.</p>
 *          </important>
 * @public
 */
export interface SipMediaApplicationAlexaSkillConfiguration {
  /**
   * <p>The status of the Alexa Skill configuration.</p>
   * @public
   */
  AlexaSkillStatus: AlexaSkillStatus | undefined;

  /**
   * <p>The ID of the Alexa Skill configuration.</p>
   * @public
   */
  AlexaSkillIds: string[] | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationAlexaSkillConfigurationResponse {
  /**
   * <p>Returns the Alexa Skill configuration.</p>
   * @public
   */
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}

/**
 * @public
 */
export interface GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * <p>The logging configuration of a SIP media application.</p>
 * @public
 */
export interface SipMediaApplicationLoggingConfiguration {
  /**
   * <p>Enables message logging for the specified SIP media application.</p>
   * @public
   */
  EnableSipMediaApplicationMessageLogs?: boolean;
}

/**
 * @public
 */
export interface GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * <p>The actual logging configuration.</p>
   * @public
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

/**
 * @public
 */
export interface GetSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   * @public
   */
  SipRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetSipRuleResponse {
  /**
   * <p>The SIP rule details.</p>
   * @public
   */
  SipRule?: SipRule;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The ID of the speaker search task.</p>
   * @public
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * <p>The result of a speaker search analysis.</p>
 * @public
 */
export interface SpeakerSearchResult {
  /**
   * <p>The confidence score in the speaker search analysis.</p>
   * @public
   */
  ConfidenceScore?: number;

  /**
   * <p>The voice profile ID.</p>
   * @public
   */
  VoiceProfileId?: string;
}

/**
 * <p>The details of a speaker search task.</p>
 * @public
 */
export interface SpeakerSearchDetails {
  /**
   * <p>The result value in the speaker search details.</p>
   * @public
   */
  Results?: SpeakerSearchResult[];

  /**
   * <p>The status of a voice print generation operation, <code>VoiceprintGenerationSuccess</code> or <code>VoiceprintGenerationFailure</code>..</p>
   * @public
   */
  VoiceprintGenerationStatus?: string;
}

/**
 * <p>A representation of an asynchronous request to perform speaker search analysis on a
 *          Voice Connector call.</p>
 * @public
 */
export interface SpeakerSearchTask {
  /**
   * <p>The speaker search task ID.</p>
   * @public
   */
  SpeakerSearchTaskId?: string;

  /**
   * <p>The status of the speaker search task, <code>IN_QUEUE</code>, <code>IN_PROGRESS</code>, <code>PARTIAL_SUCCESS</code>, <code>SUCCEEDED</code>,
   *          <code>FAILED</code>, or <code>STOPPED</code>.</p>
   * @public
   */
  SpeakerSearchTaskStatus?: string;

  /**
   * <p>The call details of a speaker search task.</p>
   * @public
   */
  CallDetails?: CallDetails;

  /**
   * <p>The details of a speaker search task.</p>
   * @public
   */
  SpeakerSearchDetails?: SpeakerSearchDetails;

  /**
   * <p>The time at which a speaker search task was created.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which a speaker search task was updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The time at which the speaker search task began.</p>
   * @public
   */
  StartedTimestamp?: Date;

  /**
   * <p>A detailed message about the status of a speaker search.</p>
   * @public
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskResponse {
  /**
   * <p>The details of the speaker search task.</p>
   * @public
   */
  SpeakerSearchTask?: SpeakerSearchTask;
}

/**
 * @public
 */
export interface GetVoiceConnectorRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorResponse {
  /**
   * <p>The Voice Connector details.</p>
   * @public
   */
  VoiceConnector?: VoiceConnector;
}

/**
 * @public
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration
 *          details associated with an Amazon Chime SDK Voice Connector's emergency calling
 *          configuration.</p>
 * @public
 */
export interface DNISEmergencyCallingConfiguration {
  /**
   * <p>The DNIS phone number that you route emergency calls to, in E.164 format.</p>
   * @public
   */
  EmergencyPhoneNumber: string | undefined;

  /**
   * <p>The DNIS phone number for routing test emergency calls to, in E.164 format.</p>
   * @public
   */
  TestPhoneNumber?: string;

  /**
   * <p>The country from which emergency calls are allowed, in ISO 3166-1 alpha-2 format.</p>
   * @public
   */
  CallingCountry: string | undefined;
}

/**
 * <p>The emergency calling configuration details associated with an Amazon Chime SDK
 *          Voice Connector.</p>
 * @public
 */
export interface EmergencyCallingConfiguration {
  /**
   * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration
   *          details.</p>
   * @public
   */
  DNIS?: DNISEmergencyCallingConfiguration[];
}

/**
 * @public
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * <p>The details of the emergency calling configuration.</p>
   * @public
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorGroupRequest {
  /**
   * <p>The Voice Connector group ID.</p>
   * @public
   */
  VoiceConnectorGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorGroupResponse {
  /**
   * <p>The details of the Voice Connector group.</p>
   * @public
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

/**
 * @public
 */
export interface GetVoiceConnectorLoggingConfigurationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>The logging configuration associated with an Amazon Chime SDK Voice Connector.
 *          Specifies whether SIP message logs can be sent to Amazon CloudWatch Logs.</p>
 * @public
 */
export interface LoggingConfiguration {
  /**
   * <p>Boolean that enables sending SIP message logs to Amazon CloudWatch.</p>
   * @public
   */
  EnableSIPLogs?: boolean;

  /**
   * <p>Enables or disables media metrics logging.</p>
   * @public
   */
  EnableMediaMetricLogs?: boolean;
}

/**
 * @public
 */
export interface GetVoiceConnectorLoggingConfigurationResponse {
  /**
   * <p>The logging configuration details .</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorOriginationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
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
 * <p>Origination routes define call distribution properties for your SIP hosts to
 *          receive inbound calls using an Amazon Chime SDK Voice Connector. Limit: Ten origination
 *          routes for each Voice Connector.</p>
 *          <note>
 *             <p>The parameters listed below are not required, but you must use at least one.</p>
 *          </note>
 * @public
 */
export interface OriginationRoute {
  /**
   * <p>The FQDN or IP address to contact for origination traffic.</p>
   * @public
   */
  Host?: string;

  /**
   * <p>The designated origination route port. Defaults to 5060.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>The protocol to use for the origination route. Encryption-enabled Amazon Chime SDK Voice Connectors use
   *          TCP protocol by default.</p>
   * @public
   */
  Protocol?: OriginationRouteProtocol;

  /**
   * <p>The priority associated with the host, with 1 being the highest priority. Higher
   *          priority hosts are attempted first.</p>
   * @public
   */
  Priority?: number;

  /**
   * <p>The weight assigned to an origination route. When hosts have equal priority,
   *          calls are distributed between them based on their relative weights.</p>
   * @public
   */
  Weight?: number;
}

/**
 * <p>Origination settings enable your SIP hosts to receive inbound calls using your
 *          Amazon Chime SDK Voice Connector.</p>
 *          <note>
 *             <p>The parameters listed below are not required, but you must use at least
 *          one.</p>
 *          </note>
 * @public
 */
export interface Origination {
  /**
   * <p>The call distribution properties defined for your SIP hosts. Valid range: Minimum
   *          value of 1. Maximum value of 20. This parameter is not required, but you must specify
   *          this parameter or <code>Disabled</code>.</p>
   * @public
   */
  Routes?: OriginationRoute[];

  /**
   * <p>When origination settings are disabled, inbound calls are not enabled for your
   *          Amazon Chime SDK Voice Connector.
   *          This parameter is not required, but you must specify this parameter or
   *          <code>Routes</code>.</p>
   * @public
   */
  Disabled?: boolean;
}

/**
 * @public
 */
export interface GetVoiceConnectorOriginationResponse {
  /**
   * <p>The origination setting details.</p>
   * @public
   */
  Origination?: Origination;
}

/**
 * @public
 */
export interface GetVoiceConnectorProxyRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>The proxy configuration for an Amazon Chime SDK Voice Connector.</p>
 * @public
 */
export interface Proxy {
  /**
   * <p>The default number of minutes allowed for proxy sessions.</p>
   * @public
   */
  DefaultSessionExpiryMinutes?: number;

  /**
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime SDK Voice Connector.</p>
   * @public
   */
  Disabled?: boolean;

  /**
   * <p>The phone number to route calls to after a proxy session expires.</p>
   * @public
   */
  FallBackPhoneNumber?: string;

  /**
   * <p>The countries for proxy phone numbers to be selected from.</p>
   * @public
   */
  PhoneNumberCountries?: string[];
}

/**
 * @public
 */
export interface GetVoiceConnectorProxyResponse {
  /**
   * <p>The proxy configuration details.</p>
   * @public
   */
  Proxy?: Proxy;
}

/**
 * @public
 */
export interface GetVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>The configuration for a call analytics task.</p>
 * @public
 */
export interface MediaInsightsConfiguration {
  /**
   * <p>Denotes the configuration as enabled or disabled.</p>
   * @public
   */
  Disabled?: boolean;

  /**
   * <p>The configuration's ARN.</p>
   * @public
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
 * <p>The target recipient for a streaming configuration notification.</p>
 * @public
 */
export interface StreamingNotificationTarget {
  /**
   * <p>The streaming notification target.</p>
   * @public
   */
  NotificationTarget?: NotificationTarget;
}

/**
 * <p>The streaming configuration associated with an Amazon Chime SDK Voice Connector.
 *          Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention
 *          period for the Amazon Kinesis data, in hours.</p>
 * @public
 */
export interface StreamingConfiguration {
  /**
   * <p>The amount of time, in hours, to the Kinesis data.</p>
   * @public
   */
  DataRetentionInHours: number | undefined;

  /**
   * <p>When true, streaming to Kinesis is off.</p>
   * @public
   */
  Disabled: boolean | undefined;

  /**
   * <p>The streaming notification targets.</p>
   * @public
   */
  StreamingNotificationTargets?: StreamingNotificationTarget[];

  /**
   * <p>The call analytics configuration.</p>
   * @public
   */
  MediaInsightsConfiguration?: MediaInsightsConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorStreamingConfigurationResponse {
  /**
   * <p>The details of the streaming configuration.</p>
   * @public
   */
  StreamingConfiguration?: StreamingConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>Termination settings enable SIP hosts to make outbound calls using an Amazon Chime SDK Voice Connector.</p>
 * @public
 */
export interface Termination {
  /**
   * <p>The limit on calls per second. Max value based on account service quota. Default value of 1.</p>
   * @public
   */
  CpsLimit?: number;

  /**
   * <p>The default outbound calling number.</p>
   * @public
   */
  DefaultPhoneNumber?: string;

  /**
   * <p>The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.</p>
   * @public
   */
  CallingRegions?: string[];

  /**
   * <p>The IP addresses allowed to make calls, in CIDR format.</p>
   * @public
   */
  CidrAllowedList?: string[];

  /**
   * <p>When termination is disabled, outbound calls cannot be made.</p>
   * @public
   */
  Disabled?: boolean;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationResponse {
  /**
   * <p>The termination setting details.</p>
   * @public
   */
  Termination?: Termination;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationHealthRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>The termination health details, including the source IP address and timestamp of the last successful <code>SIP OPTIONS</code> message from your SIP infrastructure.</p>
 * @public
 */
export interface TerminationHealth {
  /**
   * <p>The timestamp, in ISO 8601 format.</p>
   * @public
   */
  Timestamp?: Date;

  /**
   * <p>The source IP address.</p>
   * @public
   */
  Source?: string;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationHealthResponse {
  /**
   * <p>The termination health details.</p>
   * @public
   */
  TerminationHealth?: TerminationHealth;
}

/**
 * @public
 */
export interface GetVoiceProfileRequest {
  /**
   * <p>The voice profile ID.</p>
   * @public
   */
  VoiceProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceProfileResponse {
  /**
   * <p>The voice profile details.</p>
   * @public
   */
  VoiceProfile?: VoiceProfile;
}

/**
 * @public
 */
export interface GetVoiceProfileDomainRequest {
  /**
   * <p>The voice profile domain ID.</p>
   * @public
   */
  VoiceProfileDomainId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceProfileDomainResponse {
  /**
   * <p>The details of the voice profile domain.</p>
   * @public
   */
  VoiceProfileDomain?: VoiceProfileDomain;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The ID of the voice tone analysis task.</p>
   * @public
   */
  VoiceToneAnalysisTaskId: string | undefined;

  /**
   * <p>Specifies whether the voice being analyzed is the caller (originator) or the callee (responder).</p>
   * @public
   */
  IsCaller: boolean | undefined;
}

/**
 * <p>A representation of an asynchronous request to perform voice tone analysis on a Voice Connector call.</p>
 * @public
 */
export interface VoiceToneAnalysisTask {
  /**
   * <p>The ID of the voice tone analysis task.</p>
   * @public
   */
  VoiceToneAnalysisTaskId?: string;

  /**
   * <p>The status of a voice tone analysis task, <code>IN_QUEUE</code>, <code>IN_PROGRESS</code>, <code>PARTIAL_SUCCESS</code>, <code>SUCCEEDED</code>,
   *          <code>FAILED</code>, or <code>STOPPED</code>.</p>
   * @public
   */
  VoiceToneAnalysisTaskStatus?: string;

  /**
   * <p>The call details of a voice tone analysis task.</p>
   * @public
   */
  CallDetails?: CallDetails;

  /**
   * <p>The time at which a voice tone analysis task was created.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which a voice tone analysis task was updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The time at which a voice tone analysis task started.</p>
   * @public
   */
  StartedTimestamp?: Date;

  /**
   * <p>The status of a voice tone analysis task.</p>
   * @public
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskResponse {
  /**
   * <p>The details of the voice tone analysis task.</p>
   * @public
   */
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}

/**
 * @public
 */
export interface ListAvailableVoiceConnectorRegionsResponse {
  /**
   * <p>The list of AWS Regions.</p>
   * @public
   */
  VoiceConnectorRegions?: VoiceConnectorAwsRegion[];
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersRequest {
  /**
   * <p>The token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersResponse {
  /**
   * <p>The phone number order details.</p>
   * @public
   */
  PhoneNumberOrders?: PhoneNumberOrder[];

  /**
   * <p>The token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * <p>The status of your organization's phone numbers.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The phone number product types.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType;

  /**
   * <p>The filter to limit the number of results.</p>
   * @public
   */
  FilterName?: PhoneNumberAssociationName;

  /**
   * <p>The filter value.</p>
   * @public
   */
  FilterValue?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * <p>The phone number details.</p>
   * @public
   */
  PhoneNumbers?: PhoneNumber[];

  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProxySessionsRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session status.</p>
   * @public
   */
  Status?: ProxySessionStatus;

  /**
   * <p>The token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListProxySessionsResponse {
  /**
   * <p>The proxy sessions' details.</p>
   * @public
   */
  ProxySessions?: ProxySession[];

  /**
   * <p>The token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipMediaApplicationsRequest {
  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipMediaApplicationsResponse {
  /**
   * <p>The list of SIP media applications and application details.</p>
   * @public
   */
  SipMediaApplications?: SipMediaApplication[];

  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipRulesRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId?: string;

  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipRulesResponse {
  /**
   * <p>The list of SIP rules and details.</p>
   * @public
   */
  SipRules?: SipRule[];

  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesRequest {
  /**
   * <p>The phone number product type.</p>
   * @public
   */
  ProductType: PhoneNumberProductType | undefined;
}

/**
 * <p>The phone number's country.</p>
 * @public
 */
export interface PhoneNumberCountry {
  /**
   * <p>The phone number country code. Format: ISO 3166-1 alpha-2.</p>
   * @public
   */
  CountryCode?: string;

  /**
   * <p>The supported phone number types.</p>
   * @public
   */
  SupportedPhoneNumberTypes?: PhoneNumberType[];
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesResponse {
  /**
   * <p>The supported phone number countries.</p>
   * @public
   */
  PhoneNumberCountries?: PhoneNumberCountry[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags in the list.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListVoiceConnectorGroupsRequest {
  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.  </p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListVoiceConnectorGroupsResponse {
  /**
   * <p>The details of the Voice Connector groups.</p>
   * @public
   */
  VoiceConnectorGroups?: VoiceConnectorGroup[];

  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVoiceConnectorsRequest {
  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListVoiceConnectorsResponse {
  /**
   * <p>The details of the Voice Connectors.</p>
   * @public
   */
  VoiceConnectors?: VoiceConnector[];

  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorTerminationCredentialsResponse {
  /**
   * <p>A list of user names.</p>
   * @public
   */
  Usernames?: string[];
}

/**
 * @public
 */
export interface ListVoiceProfileDomainsRequest {
  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A high-level overview of a voice profile domain.</p>
 * @public
 */
export interface VoiceProfileDomainSummary {
  /**
   * <p>The ID of the voice profile domain summary.</p>
   * @public
   */
  VoiceProfileDomainId?: string;

  /**
   * <p>The ARN of a voice profile in a voice profile domain summary.</p>
   * @public
   */
  VoiceProfileDomainArn?: string;

  /**
   * <p>The name of the voice profile domain summary.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Describes the voice profile domain summary.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The time at which the voice profile domain summary was created.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which the voice profile domain summary was last updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface ListVoiceProfileDomainsResponse {
  /**
   * <p>The list of voice profile domains.</p>
   * @public
   */
  VoiceProfileDomains?: VoiceProfileDomainSummary[];

  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVoiceProfilesRequest {
  /**
   * <p>The ID of the voice profile domain.</p>
   * @public
   */
  VoiceProfileDomainId: string | undefined;

  /**
   * <p>The token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results in the request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A high-level summary of a voice profile.</p>
 * @public
 */
export interface VoiceProfileSummary {
  /**
   * <p>The ID of the voice profile in a voice profile summary.</p>
   * @public
   */
  VoiceProfileId?: string;

  /**
   * <p>The ARN of the voice profile in a voice profile summary.</p>
   * @public
   */
  VoiceProfileArn?: string;

  /**
   * <p>The ID of the voice profile domain in a voice profile summary.</p>
   * @public
   */
  VoiceProfileDomainId?: string;

  /**
   * <p>The time at which a voice profile summary was created.</p>
   * @public
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which a voice profile summary was last updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>Extends the life of the voice profile. You can use <code>UpdateVoiceProfile</code> to refresh an existing voice profile's voice print and extend the life of the summary.</p>
   * @public
   */
  ExpirationTimestamp?: Date;
}

/**
 * @public
 */
export interface ListVoiceProfilesResponse {
  /**
   * <p>The list of voice profiles.</p>
   * @public
   */
  VoiceProfiles?: VoiceProfileSummary[];

  /**
   * <p>The token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutSipMediaApplicationAlexaSkillConfigurationRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The Alexa Skill configuration.</p>
   * @public
   */
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}

/**
 * @public
 */
export interface PutSipMediaApplicationAlexaSkillConfigurationResponse {
  /**
   * <p>Returns the Alexa Skill configuration.</p>
   * @public
   */
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}

/**
 * @public
 */
export interface PutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The logging configuration for the specified SIP media application.</p>
   * @public
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

/**
 * @public
 */
export interface PutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * <p>The updated logging configuration for the specified SIP media application.</p>
   * @public
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The configuration being updated.</p>
   * @public
   */
  EmergencyCallingConfiguration: EmergencyCallingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * <p>The updated configuration.</p>
   * @public
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorLoggingConfigurationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The logging configuration being updated.</p>
   * @public
   */
  LoggingConfiguration: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorLoggingConfigurationResponse {
  /**
   * <p>The updated logging configuration.</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorOriginationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The origination settings being updated.</p>
   * @public
   */
  Origination: Origination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorOriginationResponse {
  /**
   * <p>The updated origination settings.</p>
   * @public
   */
  Origination?: Origination;
}

/**
 * @public
 */
export interface PutVoiceConnectorProxyRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The default number of minutes allowed for proxy session.</p>
   * @public
   */
  DefaultSessionExpiryMinutes: number | undefined;

  /**
   * <p>The countries for proxy phone numbers to be selected from.</p>
   * @public
   */
  PhoneNumberPoolCountries: string[] | undefined;

  /**
   * <p>The phone number to route calls to after a proxy session expires.</p>
   * @public
   */
  FallBackPhoneNumber?: string;

  /**
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime SDK Voice Connector.</p>
   * @public
   */
  Disabled?: boolean;
}

/**
 * @public
 */
export interface PutVoiceConnectorProxyResponse {
  /**
   * <p>The proxy configuration details.</p>
   * @public
   */
  Proxy?: Proxy;
}

/**
 * @public
 */
export interface PutVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The streaming settings being updated.</p>
   * @public
   */
  StreamingConfiguration: StreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorStreamingConfigurationResponse {
  /**
   * <p>The updated streaming settings.</p>
   * @public
   */
  StreamingConfiguration?: StreamingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The termination settings to be updated.</p>
   * @public
   */
  Termination: Termination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationResponse {
  /**
   * <p>The updated termination settings.</p>
   * @public
   */
  Termination?: Termination;
}

/**
 * <p>The SIP credentials used to authenticate requests to an Amazon Chime SDK Voice Connector.</p>
 * @public
 */
export interface Credential {
  /**
   * <p>The RFC2617 compliant user name associated with the SIP credentials, in
   *          US-ASCII format.</p>
   * @public
   */
  Username?: string;

  /**
   * <p>The RFC2617 compliant password associated with the SIP credentials, in US-ASCII format.</p>
   * @public
   */
  Password?: string;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The termination credentials being updated.</p>
   * @public
   */
  Credentials?: Credential[];
}

/**
 * @public
 */
export interface RestorePhoneNumberRequest {
  /**
   * <p>The ID of the phone number being restored.</p>
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface RestorePhoneNumberResponse {
  /**
   * <p>The restored phone number.</p>
   * @public
   */
  PhoneNumber?: PhoneNumber;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * <p>Confines a search to just the phone numbers associated with the specified area code.</p>
   * @public
   */
  AreaCode?: string;

  /**
   * <p>Confines a search to just the phone numbers associated with the specified city.</p>
   * @public
   */
  City?: string;

  /**
   * <p>Confines a search to just the phone numbers associated with the specified country.</p>
   * @public
   */
  Country?: string;

  /**
   * <p>Confines a search to just the phone numbers associated with the specified state.</p>
   * @public
   */
  State?: string;

  /**
   * <p>Confines a search to just the phone numbers associated with the specified toll-free prefix.</p>
   * @public
   */
  TollFreePrefix?: string;

  /**
   * <p>Confines a search to just the phone numbers associated with the specified phone number type, either <b>local</b> or <b>toll-free</b>.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * <p>Confines a search to just the phone numbers in the E.164 format.</p>
   * @public
   */
  E164PhoneNumbers?: string[];

  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The transaction ID of the call being analyzed.</p>
   * @public
   */
  TransactionId: string | undefined;

  /**
   * <p>The ID of the voice profile domain that will store the voice profile.</p>
   * @public
   */
  VoiceProfileDomainId: string | undefined;

  /**
   * <p>The unique identifier for the client request. Use a different token for different speaker search tasks.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>Specifies which call leg to stream for speaker search.</p>
   * @public
   */
  CallLeg?: CallLegType;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskResponse {
  /**
   * <p>The details of the speaker search task.</p>
   * @public
   */
  SpeakerSearchTask?: SpeakerSearchTask;
}

/**
 * <p>A well-formed request couldn't be followed due to semantic errors.</p>
 * @public
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
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The transaction ID.</p>
   * @public
   */
  TransactionId: string | undefined;

  /**
   * <p>The language code.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>The unique identifier for the client request. Use a different token for different voice tone analysis
   *          tasks.</p>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StartVoiceToneAnalysisTaskResponse {
  /**
   * <p>The details of the voice tone analysis task.</p>
   * @public
   */
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}

/**
 * @public
 */
export interface StopSpeakerSearchTaskRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The speaker search task ID.</p>
   * @public
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface StopVoiceToneAnalysisTaskRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The ID of the voice tone analysis task.</p>
   * @public
   */
  VoiceToneAnalysisTaskId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource being tagged. </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of the tags being added to the resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource having its tags removed.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The keys of the tags being removed from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsRequest {
  /**
   * <p>The Voice Connector settings.</p>
   * @public
   */
  VoiceConnector?: VoiceConnectorSettings;
}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The product type.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType;

  /**
   * <p>The outbound calling name associated with the phone number.</p>
   * @public
   */
  CallingName?: string;

  /**
   * <p>Specifies the updated name assigned to one or more phone numbers.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResponse {
  /**
   * <p>The updated phone number details.</p>
   * @public
   */
  PhoneNumber?: PhoneNumber;
}

/**
 * @public
 */
export interface UpdatePhoneNumberSettingsRequest {
  /**
   * <p>The default outbound calling name for the account.</p>
   * @public
   */
  CallingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxySessionRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   * @public
   */
  ProxySessionId: string | undefined;

  /**
   * <p>The proxy session capabilities.</p>
   * @public
   */
  Capabilities: Capability[] | undefined;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   * @public
   */
  ExpiryMinutes?: number;
}

/**
 * @public
 */
export interface UpdateProxySessionResponse {
  /**
   * <p>The updated proxy session details.</p>
   * @public
   */
  ProxySession?: ProxySession;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The new name for the specified SIP media application.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The new set of endpoints for the specified SIP media application.</p>
   * @public
   */
  Endpoints?: SipMediaApplicationEndpoint[];
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationResponse {
  /**
   * <p>The updated SIP media application’s details.</p>
   * @public
   */
  SipMediaApplication?: SipMediaApplication;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationCallRequest {
  /**
   * <p>The ID of the SIP media application handling the call.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The ID of the call transaction.</p>
   * @public
   */
  TransactionId: string | undefined;

  /**
   * <p>Arguments made available to the Lambda function as part of the
   *          <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.</p>
   * @public
   */
  Arguments: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationCallResponse {
  /**
   * <p>A <code>Call</code> instance for a SIP media application.</p>
   * @public
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

/**
 * @public
 */
export interface UpdateSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   * @public
   */
  SipRuleId: string | undefined;

  /**
   * <p>The new name for the specified SIP rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The new value that indicates whether the rule is disabled.</p>
   * @public
   */
  Disabled?: boolean;

  /**
   * <p>The new list of target applications.</p>
   * @public
   */
  TargetApplications?: SipRuleTargetApplication[];
}

/**
 * @public
 */
export interface UpdateSipRuleResponse {
  /**
   * <p>The updated SIP rule details.</p>
   * @public
   */
  SipRule?: SipRule;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The name of the Voice Connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>When enabled, requires encryption for the Voice Connector.</p>
   * @public
   */
  RequireEncryption: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorResponse {
  /**
   * <p>The updated Voice Connector details.</p>
   * @public
   */
  VoiceConnector?: VoiceConnector;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorGroupRequest {
  /**
   * <p>The Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>The name of the Voice Connector group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The <code>VoiceConnectorItems</code> to associate with the Voice Connector
   *          group.</p>
   * @public
   */
  VoiceConnectorItems: VoiceConnectorItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorGroupResponse {
  /**
   * <p>The updated Voice Connector group.</p>
   * @public
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

/**
 * @public
 */
export interface UpdateVoiceProfileRequest {
  /**
   * <p>The profile ID.</p>
   * @public
   */
  VoiceProfileId: string | undefined;

  /**
   * <p>The ID of the speaker search task.</p>
   * @public
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceProfileResponse {
  /**
   * <p>The updated voice profile settings.</p>
   * @public
   */
  VoiceProfile?: VoiceProfile;
}

/**
 * @public
 */
export interface UpdateVoiceProfileDomainRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  VoiceProfileDomainId: string | undefined;

  /**
   * <p>The name of the voice profile domain.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the voice profile domain.</p>
   * @public
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateVoiceProfileDomainResponse {
  /**
   * <p>The updated details of the voice profile domain.</p>
   * @public
   */
  VoiceProfileDomain?: VoiceProfileDomain;
}

/**
 * @public
 */
export interface ValidateE911AddressRequest {
  /**
   * <p>The AWS account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The address street number, such as <code>200</code> or <code>2121</code>.</p>
   * @public
   */
  StreetNumber: string | undefined;

  /**
   * <p>The address street information, such as <code>8th Avenue</code>.</p>
   * @public
   */
  StreetInfo: string | undefined;

  /**
   * <p>The address city, such as <code>Portland</code>.</p>
   * @public
   */
  City: string | undefined;

  /**
   * <p>The address state, such as <code>ME</code>.</p>
   * @public
   */
  State: string | undefined;

  /**
   * <p>The country in the address being validated as two-letter country code in ISO 3166-1
   *          alpha-2 format, such as <code>US</code>. For more information, see <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a> in
   *          Wikipedia.</p>
   * @public
   */
  Country: string | undefined;

  /**
   * <p>The dress postal code, such <code>04352</code>.</p>
   * @public
   */
  PostalCode: string | undefined;
}

/**
 * @public
 */
export interface ValidateE911AddressResponse {
  /**
   * <p>Number indicating the result of address validation.</p>
   *          <p>Each possible result is defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>0</code> - Address validation succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1</code> - Address validation succeeded. The address was a close enough
   *                match and has been corrected as part of the address object.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2</code> - Address validation failed. You should re-submit the validation
   *                request with candidates from the <code>CandidateAddressList</code> result, if it's a
   *                close match.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValidationResult?: number;

  /**
   * <p>The ID that represents the address.</p>
   * @public
   */
  AddressExternalId?: string;

  /**
   * <p>The validated address.</p>
   * @public
   */
  Address?: Address;

  /**
   * <p>The list of address suggestions..</p>
   * @public
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
