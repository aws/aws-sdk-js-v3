// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { LocationServiceException as __BaseException } from "./LocationServiceException";

/**
 * @public
 * <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export type Status = "Active" | "Expired";

/**
 * @public
 * <p>Options for filtering API keys.</p>
 */
export interface ApiKeyFilter {
  /**
   * @public
   * <p>Filter on <code>Active</code> or <code>Expired</code> API keys.</p>
   */
  KeyStatus?: Status | string;
}

/**
 * @public
 * <p>The request was unsuccessful because of a conflict.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>API Restrictions on the allowed actions, resources, and referers for an API key
 *             resource.</p>
 */
export interface ApiKeyRestrictions {
  /**
   * @public
   * <p>A list of allowed actions that an API key resource grants permissions to
   *             perform. You must have at least one action for each type of resource. For example,
   *             if you have a place resource, you must include at least one place action.</p>
   *          <p>The following are valid values for the actions.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Map actions</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>geo:GetMap*</code> - Allows all actions needed for map rendering.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Place actions</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>geo:SearchPlaceIndexForText</code> - Allows geocoding.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>geo:SearchPlaceIndexForPosition</code> - Allows reverse
   *                             geocoding.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>geo:SearchPlaceIndexForSuggestions</code> - Allows generating
   *                             suggestions from text.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>GetPlace</code> - Allows finding a place by place ID.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Route actions</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>geo:CalculateRoute</code> - Allows point to point routing.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>geo:CalculateRouteMatrix</code> - Allows calculating a matrix of
   *                             routes.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>You must use these strings exactly. For example, to provide access to map
   *                 rendering, the only valid action is <code>geo:GetMap*</code> as an input to
   *                 the list. <code>["geo:GetMap*"]</code> is valid but
   *                     <code>["geo:GetMapTile"]</code> is not. Similarly, you cannot use
   *                 <code>["geo:SearchPlaceIndexFor*"]</code> - you must list each of the Place
   *                 actions separately.</p>
   *          </note>
   */
  AllowActions: string[] | undefined;

  /**
   * @public
   * <p>A list of allowed resource ARNs that a API key bearer can perform actions on.</p>
   *          <ul>
   *             <li>
   *                <p>The ARN must be the correct ARN for a map, place, or route ARN. You may
   *                     include wildcards in the resource-id to match multiple resources of the
   *                     same type.</p>
   *             </li>
   *             <li>
   *                <p>The resources must be in the same <code>partition</code>,
   *                     <code>region</code>, and <code>account-id</code> as the key that is being
   *                     created.</p>
   *             </li>
   *             <li>
   *                <p>Other than wildcards, you must include the full ARN, including the
   *                     <code>arn</code>, <code>partition</code>, <code>service</code>,
   *                     <code>region</code>, <code>account-id</code> and <code>resource-id</code>,
   *                     delimited by colons (:).</p>
   *             </li>
   *             <li>
   *                <p>No spaces allowed, even with wildcards. For example,
   *                     <code>arn:aws:geo:region:<i>account-id</i>:map/ExampleMap*</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names
   *             (ARNs)</a>.</p>
   */
  AllowResources: string[] | undefined;

  /**
   * @public
   * <p>An optional list of allowed HTTP referers for which requests must originate from.
   *             Requests using this API key from other domains will not be allowed.</p>
   *          <p>Requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Contain only alphanumeric characters (A–Z, a–z, 0–9) or any symbols in this
   *                     list <code>$\-._+!*`(),;/?:@=&amp;</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>May contain a percent (%) if followed by 2 hexadecimal digits (A-F, a-f, 0-9);
   *                     this is used for URL encoding purposes.</p>
   *             </li>
   *             <li>
   *                <p>May contain wildcard characters question mark (?) and asterisk (*).</p>
   *                <p>Question mark (?) will replace any single character (including hexadecimal
   *                     digits).</p>
   *                <p>Asterisk (*) will replace any multiple characters (including multiple
   *                     hexadecimal digits).</p>
   *             </li>
   *             <li>
   *                <p>No spaces allowed. For example, <code>https://example.com</code>.</p>
   *             </li>
   *          </ul>
   */
  AllowReferers?: string[];
}

/**
 * @public
 */
export interface CreateKeyRequest {
  /**
   * @public
   * <p>A custom name for the API key resource.</p>
   *          <p>Requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods
   *                     (.), and underscores (_). </p>
   *             </li>
   *             <li>
   *                <p>Must be a unique API key name.</p>
   *             </li>
   *             <li>
   *                <p>No spaces allowed. For example, <code>ExampleAPIKey</code>.</p>
   *             </li>
   *          </ul>
   */
  KeyName: string | undefined;

  /**
   * @public
   * <p>The API key restrictions for the API key resource.</p>
   */
  Restrictions: ApiKeyRestrictions | undefined;

  /**
   * @public
   * <p>An optional description for the API key resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The optional timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. One of <code>NoExpiry</code> or
   *                 <code>ExpireTime</code> must be set.</p>
   */
  ExpireTime?: Date;

  /**
   * @public
   * <p>Optionally set to <code>true</code> to set no expiration time for the API key. One of
   *                 <code>NoExpiry</code> or <code>ExpireTime</code> must be set.</p>
   */
  NoExpiry?: boolean;

  /**
   * @public
   * <p>Applies one or more tags to the map resource. A tag is a key-value pair that helps
   *             manage, identify, search, and filter your resources by labelling them.</p>
   *          <p>Format: <code>"key" : "value"</code>
   *          </p>
   *          <p>Restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum 50 tags per resource</p>
   *             </li>
   *             <li>
   *                <p>Each resource tag must be unique with a maximum of one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length: 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length: 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters:
   *                     + - = . _ : / @. </p>
   *             </li>
   *             <li>
   *                <p>Cannot use "aws:" as a prefix for a key.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateKeyResponse {
  /**
   * @public
   * <p>The key value/string of an API key. This value is used when making API calls to
   *             authorize the call. For example, see <a href="https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapGlyphs.html">GetMapGlyphs</a>.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the API key resource. Used when you need to specify
   *             a resource across all Amazon Web Services.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                     <code>arn:aws:geo:region:account-id:key/ExampleKey</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KeyArn: string | undefined;

  /**
   * @public
   * <p>The name of the API key resource.</p>
   */
  KeyName: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the API key resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;
}

/**
 * @public
 * <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The operation was denied because the request would exceed the maximum <a href="https://docs.aws.amazon.com/location/latest/developerguide/location-quotas.html">quota</a>
 *       set for Amazon Location Service.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message with the reason for the service quota exceeded exception error.</p>
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request was denied because of request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The input failed to meet the constraints specified by the AWS service in a specified
 *       field. </p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The field name where the invalid entry was detected.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A message with the reason for the validation exception error.</p>
   */
  Message: string | undefined;
}

/**
 * @public
 */
export type ValidationExceptionReason =
  | "CannotParse"
  | "FieldValidationFailed"
  | "Missing"
  | "Other"
  | "UnknownOperation";

/**
 * @public
 * <p>The input failed to meet the constraints specified by the AWS service. </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>A message with the reason for the validation exception error.</p>
   */
  Reason: ValidationExceptionReason | string | undefined;

  /**
   * @public
   * <p>The field where the invalid entry was detected.</p>
   */
  FieldList: ValidationExceptionField[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.FieldList = opts.FieldList;
  }
}

/**
 * @public
 */
export interface DeleteKeyRequest {
  /**
   * @public
   * <p>The name of the API key to delete.</p>
   */
  KeyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeyResponse {}

/**
 * @public
 * <p>The resource that you've entered was not found in your AWS account.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeKeyRequest {
  /**
   * @public
   * <p>The name of the API key resource.</p>
   */
  KeyName: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyResponse {
  /**
   * @public
   * <p>The key value/string of an API key.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the API key resource. Used when you need to specify
   *             a resource across all Amazon Web Services.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                     <code>arn:aws:geo:region:account-id:key/ExampleKey</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KeyArn: string | undefined;

  /**
   * @public
   * <p>The name of the API key resource.</p>
   */
  KeyName: string | undefined;

  /**
   * @public
   * <p>API Restrictions on the allowed actions, resources, and referers for an API key
   *             resource.</p>
   */
  Restrictions: ApiKeyRestrictions | undefined;

  /**
   * @public
   * <p>The timestamp for when the API key resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  ExpireTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the API key resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;

  /**
   * @public
   * <p>The optional description for the API key resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Tags associated with the API key resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListKeysRequest {
  /**
   * @public
   * <p>An optional limit for the number of resources returned in a single call. </p>
   *          <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page. </p>
   *          <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Optionally filter the list to only <code>Active</code> or <code>Expired</code> API
   *             keys.</p>
   */
  Filter?: ApiKeyFilter;
}

/**
 * @public
 * <p>An API key resource listed in your Amazon Web Services account.</p>
 */
export interface ListKeysResponseEntry {
  /**
   * @public
   * <p>The name of the API key resource.</p>
   */
  KeyName: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the API key resource will expire, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  ExpireTime: Date | undefined;

  /**
   * @public
   * <p>The optional description for the API key resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>API Restrictions on the allowed actions, resources, and referers for an API key
   *             resource.</p>
   */
  Restrictions: ApiKeyRestrictions | undefined;

  /**
   * @public
   * <p>The timestamp of when the API key was created, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the API key was last updated, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListKeysResponse {
  /**
   * @public
   * <p>Contains API key resources in your Amazon Web Services account. Details include API key
   *             name, allowed referers and timestamp for when the API key will expire.</p>
   */
  Entries: ListKeysResponseEntry[] | undefined;

  /**
   * @public
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a following request to fetch the next set of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface UpdateKeyRequest {
  /**
   * @public
   * <p>The name of the API key resource to update.</p>
   */
  KeyName: string | undefined;

  /**
   * @public
   * <p>Updates the description for the API key resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Updates the timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  ExpireTime?: Date;

  /**
   * @public
   * <p>Whether the API key should expire. Set to <code>true</code> to set the API key to have
   *             no expiration time.</p>
   */
  NoExpiry?: boolean;

  /**
   * @public
   * <p>The boolean flag to be included for updating <code>ExpireTime</code> or
   *                 <code>Restrictions</code> details.</p>
   *          <p>Must be set to <code>true</code> to update an API key resource that has been used in
   *             the past 7 days.</p>
   *          <p>
   *             <code>False</code> if force update is not preferred</p>
   *          <p>Default value: <code>False</code>
   *          </p>
   */
  ForceUpdate?: boolean;

  /**
   * @public
   * <p>Updates the API key restrictions for the API key resource.</p>
   */
  Restrictions?: ApiKeyRestrictions;
}

/**
 * @public
 */
export interface UpdateKeyResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the API key resource. Used when you need to specify
   *             a resource across all Amazon Web Services.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                     <code>arn:aws:geo:region:account-id:key/ExampleKey</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KeyArn: string | undefined;

  /**
   * @public
   * <p>The name of the API key resource.</p>
   */
  KeyName: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the API key resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface AssociateTrackerConsumerRequest {
  /**
   * @public
   * <p>The name of the tracker resource to be associated with a geofence collection.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker
   *             resource. Used when you need to specify a resource across all Amazon Web Services.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ConsumerArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrackerConsumerResponse {}

/**
 * @public
 */
export interface BatchDeleteDevicePositionHistoryRequest {
  /**
   * @public
   * <p>The name of the tracker resource to delete the device position history from.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>Devices whose position history you want to delete.</p>
   *          <ul>
   *             <li>
   *                <p>For example, for two devices:
   *                    <code>“DeviceIds” : [DeviceId1,DeviceId2]</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DeviceIds: string[] | undefined;
}

/**
 * @public
 */
export type BatchItemErrorCode =
  | "AccessDeniedError"
  | "ConflictError"
  | "InternalServerError"
  | "ResourceNotFoundError"
  | "ThrottlingError"
  | "ValidationError";

/**
 * @public
 * <p>Contains the batch request error details associated with the request.</p>
 */
export interface BatchItemError {
  /**
   * @public
   * <p>The error code associated with the batch request error.</p>
   */
  Code?: BatchItemErrorCode | string;

  /**
   * @public
   * <p>A message with the reason for the batch request error.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Contains the tracker resource details.</p>
 */
export interface BatchDeleteDevicePositionHistoryError {
  /**
   * @public
   * <p>The ID of the device for this position.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>Contains the batch request error details associated with the request.</p>
   */
  Error: BatchItemError | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDevicePositionHistoryResponse {
  /**
   * @public
   * <p>Contains error details for each device history that failed to delete.</p>
   */
  Errors: BatchDeleteDevicePositionHistoryError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteGeofenceRequest {
  /**
   * @public
   * <p>The geofence collection storing the geofences to be deleted.</p>
   */
  CollectionName: string | undefined;

  /**
   * @public
   * <p>The batch of geofences to be deleted.</p>
   */
  GeofenceIds: string[] | undefined;
}

/**
 * @public
 * <p>Contains error details for each geofence that failed to delete from the geofence
 *             collection.</p>
 */
export interface BatchDeleteGeofenceError {
  /**
   * @public
   * <p>The geofence associated with the error message.</p>
   */
  GeofenceId: string | undefined;

  /**
   * @public
   * <p>Contains details associated to the batch error.</p>
   */
  Error: BatchItemError | undefined;
}

/**
 * @public
 */
export interface BatchDeleteGeofenceResponse {
  /**
   * @public
   * <p>Contains error details for each geofence that failed to delete.</p>
   */
  Errors: BatchDeleteGeofenceError[] | undefined;
}

/**
 * @public
 * <p>Defines the level of certainty of the position.</p>
 */
export interface PositionalAccuracy {
  /**
   * @public
   * <p>Estimated maximum distance, in meters, between the measured position and the true
   *             position of a device, along the Earth's surface.</p>
   */
  Horizontal: number | undefined;
}

/**
 * @public
 * <p>Contains the position update details for a device.</p>
 */
export interface DevicePositionUpdate {
  /**
   * @public
   * <p>The device associated to the position update.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The timestamp at which the device's position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  SampleTime: Date | undefined;

  /**
   * @public
   * <p>The latest device position defined in <a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;action=wgs84">WGS 84</a> format:
   *             <code>[X or longitude, Y or latitude]</code>.</p>
   */
  Position: number[] | undefined;

  /**
   * @public
   * <p>The accuracy of the device position.</p>
   */
  Accuracy?: PositionalAccuracy;

  /**
   * @public
   * <p>Associates one of more properties with the position update. A property is a key-value
   *             pair stored with the position update and added to any geofence event the update may
   *             trigger.</p>
   *          <p>Format: <code>"key" : "value"</code>
   *          </p>
   */
  PositionProperties?: Record<string, string>;
}

/**
 * @public
 */
export interface BatchEvaluateGeofencesRequest {
  /**
   * @public
   * <p>The geofence collection used in evaluating the position of devices against its
   *             geofences.</p>
   */
  CollectionName: string | undefined;

  /**
   * @public
   * <p>Contains device details for each device to be evaluated against the given geofence
   *             collection.</p>
   */
  DevicePositionUpdates: DevicePositionUpdate[] | undefined;
}

/**
 * @public
 * <p>Contains error details for each device that failed to evaluate its position against
 *             the geofences in a given geofence collection.</p>
 */
export interface BatchEvaluateGeofencesError {
  /**
   * @public
   * <p>The device associated with the position evaluation error.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>Specifies a timestamp for when the error occurred in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  SampleTime: Date | undefined;

  /**
   * @public
   * <p>Contains details associated to the batch error.</p>
   */
  Error: BatchItemError | undefined;
}

/**
 * @public
 */
export interface BatchEvaluateGeofencesResponse {
  /**
   * @public
   * <p>Contains error details for each device that failed to evaluate its position against
   *             the given geofence collection.</p>
   */
  Errors: BatchEvaluateGeofencesError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetDevicePositionRequest {
  /**
   * @public
   * <p>The tracker resource retrieving the device position.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>Devices whose position you want to retrieve.</p>
   *          <ul>
   *             <li>
   *                <p>For example, for two devices:
   *                    <code>device-ids=DeviceId1&amp;device-ids=DeviceId2</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DeviceIds: string[] | undefined;
}

/**
 * @public
 * <p>Contains the device position details.</p>
 */
export interface DevicePosition {
  /**
   * @public
   * <p>The device whose position you retrieved.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The timestamp at which the device's position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  SampleTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the tracker resource received the device position in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  ReceivedTime: Date | undefined;

  /**
   * @public
   * <p>The last known device position.</p>
   */
  Position: number[] | undefined;

  /**
   * @public
   * <p>The accuracy of the device position.</p>
   */
  Accuracy?: PositionalAccuracy;

  /**
   * @public
   * <p>The properties associated with the position.</p>
   */
  PositionProperties?: Record<string, string>;
}

/**
 * @public
 * <p>Contains error details for each device that didn't return a position.</p>
 */
export interface BatchGetDevicePositionError {
  /**
   * @public
   * <p>The ID of the device that didn't return a position.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>Contains details related to the error code.</p>
   */
  Error: BatchItemError | undefined;
}

/**
 * @public
 */
export interface BatchGetDevicePositionResponse {
  /**
   * @public
   * <p>Contains  error details for each device that failed to send its position to the tracker
   *             resource.</p>
   */
  Errors: BatchGetDevicePositionError[] | undefined;

  /**
   * @public
   * <p>Contains device position details such as the device ID, position, and timestamps for
   *             when the position was received and sampled.</p>
   */
  DevicePositions: DevicePosition[] | undefined;
}

/**
 * @public
 * <p>A circle on the earth, as defined by a center point and a radius.</p>
 */
export interface Circle {
  /**
   * @public
   * <p>A single point geometry, specifying the center of the circle, using <a href="https://gisgeography.com/wgs84-world-geodetic-system/">WGS 84</a>
   *             coordinates, in the form <code>[longitude, latitude]</code>.</p>
   */
  Center: number[] | undefined;

  /**
   * @public
   * <p>The radius of the circle in meters. Must be greater than zero and no
   *             larger than 100,000 (100 kilometers).</p>
   */
  Radius: number | undefined;
}

/**
 * @public
 * <p>Contains the geofence geometry details.</p>
 *          <p>A geofence geometry is made up of either a polygon or a circle. Can be either a
 *             polygon or a circle. Including both will return a validation error.</p>
 *          <note>
 *             <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons
 *                 that are wound clockwise, or that cross the antimeridian. </p>
 *          </note>
 */
export interface GeofenceGeometry {
  /**
   * @public
   * <p>A polygon is a list of linear rings which are each made up of a list of
   *             vertices.</p>
   *          <p>Each vertex is a 2-dimensional point of the form: <code>[longitude, latitude]</code>.
   *             This is represented as an array of doubles of length 2 (so <code>[double,
   *             double]</code>).</p>
   *          <p>An array of 4 or more vertices, where the first and last vertex are the same (to form
   *             a closed boundary), is called a linear ring. The linear ring vertices must be listed in
   *             counter-clockwise order around the ring’s interior. The linear ring is represented as an
   *             array of vertices, or an array of arrays of doubles (<code>[[double, double], ...]</code>).</p>
   *          <p>A geofence consists of a single linear ring. To allow for future expansion, the
   *             Polygon parameter takes an array of linear rings, which is represented as an array of
   *             arrays of arrays of doubles (<code>[[[double, double], ...], ...]</code>).</p>
   *          <p>A linear ring for use in geofences can consist of between 4 and 1,000 vertices.</p>
   */
  Polygon?: number[][][];

  /**
   * @public
   * <p>A circle on the earth, as defined by a center point and a radius.</p>
   */
  Circle?: Circle;
}

/**
 * @public
 * <p>Contains geofence geometry details. </p>
 */
export interface BatchPutGeofenceRequestEntry {
  /**
   * @public
   * <p>The identifier for the geofence to be stored in a given geofence collection.</p>
   */
  GeofenceId: string | undefined;

  /**
   * @public
   * <p>Contains the details of the position of the geofence. Can be either a
   *             polygon or a circle. Including both will return a validation error.</p>
   *          <note>
   *             <p>Each <a href="https://docs.aws.amazon.com/location-geofences/latest/APIReference/API_GeofenceGeometry.html">
   *                 geofence polygon</a> can have a maximum of 1,000 vertices.</p>
   *          </note>
   */
  Geometry: GeofenceGeometry | undefined;

  /**
   * @public
   * <p>Associates one of more properties with the geofence. A property is a key-value
   *             pair stored with the geofence and added to any geofence event triggered with that
   *             geofence.</p>
   *          <p>Format: <code>"key" : "value"</code>
   *          </p>
   */
  GeofenceProperties?: Record<string, string>;
}

/**
 * @public
 */
export interface BatchPutGeofenceRequest {
  /**
   * @public
   * <p>The geofence collection storing the geofences.</p>
   */
  CollectionName: string | undefined;

  /**
   * @public
   * <p>The batch of geofences to be stored in a geofence collection.</p>
   */
  Entries: BatchPutGeofenceRequestEntry[] | undefined;
}

/**
 * @public
 * <p>Contains error details for each geofence that failed to be stored in a given geofence
 *             collection.</p>
 */
export interface BatchPutGeofenceError {
  /**
   * @public
   * <p>The geofence associated with the error message.</p>
   */
  GeofenceId: string | undefined;

  /**
   * @public
   * <p>Contains details associated to the batch error.</p>
   */
  Error: BatchItemError | undefined;
}

/**
 * @public
 * <p>Contains a summary of each geofence that was successfully stored in a given geofence
 *             collection.</p>
 */
export interface BatchPutGeofenceSuccess {
  /**
   * @public
   * <p>The geofence successfully stored in a geofence collection.</p>
   */
  GeofenceId: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the geofence was stored in a geofence collection in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the geofence was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface BatchPutGeofenceResponse {
  /**
   * @public
   * <p>Contains each geofence that was successfully stored in a geofence collection.</p>
   */
  Successes: BatchPutGeofenceSuccess[] | undefined;

  /**
   * @public
   * <p>Contains additional error details for each geofence that failed to be stored in a
   *             geofence collection.</p>
   */
  Errors: BatchPutGeofenceError[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateDevicePositionRequest {
  /**
   * @public
   * <p>The name of the tracker resource to update.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>Contains the position update details for each device, up to 10 devices.</p>
   */
  Updates: DevicePositionUpdate[] | undefined;
}

/**
 * @public
 * <p>Contains  error details for each device that failed to update its position.</p>
 */
export interface BatchUpdateDevicePositionError {
  /**
   * @public
   * <p>The device associated with the failed location update.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The timestamp at which the device position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  SampleTime: Date | undefined;

  /**
   * @public
   * <p>Contains details related to the error code such as the error code and error
   *             message.</p>
   */
  Error: BatchItemError | undefined;
}

/**
 * @public
 */
export interface BatchUpdateDevicePositionResponse {
  /**
   * @public
   * <p>Contains  error details for each device that failed to update its position.</p>
   */
  Errors: BatchUpdateDevicePositionError[] | undefined;
}

/**
 * @public
 * <p>Contains details about additional route preferences for requests that specify
 *                 <code>TravelMode</code> as <code>Car</code>.</p>
 */
export interface CalculateRouteCarModeOptions {
  /**
   * @public
   * <p>Avoids ferries when calculating routes.</p>
   *          <p>Default Value: <code>false</code>
   *          </p>
   *          <p>Valid Values: <code>false</code> | <code>true</code>
   *          </p>
   */
  AvoidFerries?: boolean;

  /**
   * @public
   * <p>Avoids tolls when calculating routes.</p>
   *          <p>Default Value: <code>false</code>
   *          </p>
   *          <p>Valid Values: <code>false</code> | <code>true</code>
   *          </p>
   */
  AvoidTolls?: boolean;
}

/**
 * @public
 */
export type DistanceUnit = "Kilometers" | "Miles";

/**
 * @public
 */
export type TravelMode = "Bicycle" | "Car" | "Motorcycle" | "Truck" | "Walking";

/**
 * @public
 */
export type DimensionUnit = "Feet" | "Meters";

/**
 * @public
 * <p>Contains details about the truck dimensions in the unit of measurement that you
 *             specify. Used to filter out roads that can't support or allow the specified dimensions
 *             for requests that specify <code>TravelMode</code> as <code>Truck</code>.</p>
 */
export interface TruckDimensions {
  /**
   * @public
   * <p>The length of the truck.</p>
   *          <ul>
   *             <li>
   *                <p>For example, <code>15.5</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                 For routes calculated with a HERE resource, this value must be between 0 and 300 meters.
   *             </p>
   *          </note>
   */
  Length?: number;

  /**
   * @public
   * <p>The height of the truck.</p>
   *          <ul>
   *             <li>
   *                <p>For example, <code>4.5</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                 For routes calculated with a HERE resource, this value must be between 0 and 50 meters.
   *             </p>
   *          </note>
   */
  Height?: number;

  /**
   * @public
   * <p>The width of the truck.</p>
   *          <ul>
   *             <li>
   *                <p>For example, <code>4.5</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                 For routes calculated with a HERE resource, this value must be between 0 and 50 meters.
   *             </p>
   *          </note>
   */
  Width?: number;

  /**
   * @public
   * <p> Specifies the unit of measurement for the truck dimensions.</p>
   *          <p>Default Value: <code>Meters</code>
   *          </p>
   */
  Unit?: DimensionUnit | string;
}

/**
 * @public
 */
export type VehicleWeightUnit = "Kilograms" | "Pounds";

/**
 * @public
 * <p>Contains details about the truck's weight specifications. Used to avoid roads that
 *             can't support or allow the total weight for requests that specify
 *                 <code>TravelMode</code> as <code>Truck</code>.</p>
 */
export interface TruckWeight {
  /**
   * @public
   * <p>The total weight of the truck. </p>
   *          <ul>
   *             <li>
   *                <p>For example, <code>3500</code>.</p>
   *             </li>
   *          </ul>
   */
  Total?: number;

  /**
   * @public
   * <p>The unit of measurement to use for the truck weight.</p>
   *          <p>Default Value: <code>Kilograms</code>
   *          </p>
   */
  Unit?: VehicleWeightUnit | string;
}

/**
 * @public
 * <p>Contains details about additional route preferences for requests that specify
 *                 <code>TravelMode</code> as <code>Truck</code>.</p>
 */
export interface CalculateRouteTruckModeOptions {
  /**
   * @public
   * <p>Avoids ferries when calculating routes.</p>
   *          <p>Default Value: <code>false</code>
   *          </p>
   *          <p>Valid Values: <code>false</code> | <code>true</code>
   *          </p>
   */
  AvoidFerries?: boolean;

  /**
   * @public
   * <p>Avoids tolls when calculating routes.</p>
   *          <p>Default Value: <code>false</code>
   *          </p>
   *          <p>Valid Values: <code>false</code> | <code>true</code>
   *          </p>
   */
  AvoidTolls?: boolean;

  /**
   * @public
   * <p>Specifies the truck's dimension specifications including length, height, width, and
   *             unit of measurement. Used to avoid roads that can't support the truck's
   *             dimensions.</p>
   */
  Dimensions?: TruckDimensions;

  /**
   * @public
   * <p>Specifies the truck's weight specifications including total weight and unit of
   *             measurement. Used to avoid roads that can't support the truck's weight.</p>
   */
  Weight?: TruckWeight;
}

/**
 * @public
 */
export interface CalculateRouteRequest {
  /**
   * @public
   * <p>The name of the route calculator resource that you want to use to calculate the route.
   *         </p>
   */
  CalculatorName: string | undefined;

  /**
   * @public
   * <p>The start position for the route. Defined in <a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;action=wgs84">World Geodetic
   *             System (WGS 84)</a> format:
   *                 <code>[longitude, latitude]</code>.</p>
   *          <ul>
   *             <li>
   *                <p>For example, <code>[-123.115, 49.285]</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If you specify a departure that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position
   *                     to the nearest road</a>. If Esri is the provider for your route calculator,
   *                 specifying a route that is longer than 400 km returns a <code>400
   *                     RoutesValidationException</code> error.</p>
   *          </note>
   *          <p>Valid Values: <code>[-180 to 180,-90 to 90]</code>
   *          </p>
   */
  DeparturePosition: number[] | undefined;

  /**
   * @public
   * <p>The finish position for the route. Defined in <a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;action=wgs84">World Geodetic
   *             System (WGS 84)</a> format:
   *                 <code>[longitude, latitude]</code>.</p>
   *          <ul>
   *             <li>
   *                <p> For example, <code>[-122.339, 47.615]</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If you specify a destination that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position
   *                     to the nearest road</a>. </p>
   *          </note>
   *          <p>Valid Values: <code>[-180 to 180,-90 to 90]</code>
   *          </p>
   */
  DestinationPosition: number[] | undefined;

  /**
   * @public
   * <p>Specifies an ordered list of up to 23 intermediate positions to include along a route
   *             between the departure position and destination position. </p>
   *          <ul>
   *             <li>
   *                <p>For example, from the <code>DeparturePosition</code>
   *                   <code>[-123.115, 49.285]</code>, the route follows the order that the waypoint
   *                     positions are given <code>[[-122.757, 49.0021],[-122.349, 47.620]]</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If you specify a waypoint position that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position
   *                     to the nearest road</a>. </p>
   *             <p>Specifying more than 23 waypoints returns a <code>400 ValidationException</code>
   *                 error.</p>
   *             <p>If Esri is the provider for your route calculator, specifying a route that is
   *                 longer than 400 km returns a <code>400 RoutesValidationException</code>
   *                 error.</p>
   *          </note>
   *          <p>Valid Values: <code>[-180 to 180,-90 to 90]</code>
   *          </p>
   */
  WaypointPositions?: number[][];

  /**
   * @public
   * <p>Specifies the mode of transport when calculating a route. Used in estimating the speed
   *             of travel and road compatibility. You can choose <code>Car</code>, <code>Truck</code>,
   *             <code>Walking</code>, <code>Bicycle</code> or <code>Motorcycle</code> as options for
   *             the <code>TravelMode</code>.</p>
   *          <note>
   *             <p>
   *                <code>Bicycle</code> and <code>Motorcycle</code> are only valid when using Grab as
   *                 a data provider, and only within Southeast Asia.</p>
   *             <p>
   *                <code>Truck</code> is not available for Grab.</p>
   *             <p>For more details on the using Grab for routing, including areas of coverage, see
   *                     <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> in the <i>Amazon Location Service Developer Guide</i>.</p>
   *          </note>
   *          <p>The <code>TravelMode</code> you specify also determines how you specify route
   *             preferences: </p>
   *          <ul>
   *             <li>
   *                <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code>
   *                     parameter.</p>
   *             </li>
   *             <li>
   *                <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code>
   *                     parameter.</p>
   *             </li>
   *          </ul>
   *          <p>Default Value: <code>Car</code>
   *          </p>
   */
  TravelMode?: TravelMode | string;

  /**
   * @public
   * <p>Specifies the desired time of departure. Uses the given time to calculate the route.
   *             Otherwise, the best time of day to travel with the best traffic conditions is used to
   *             calculate the route.</p>
   *          <note>
   *             <p>Setting a departure time in the past returns a <code>400
   *                     ValidationException</code> error.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO
   *                         8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example,
   *                         <code>2020–07-2T12:15:20.000Z+01:00</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DepartureTime?: Date;

  /**
   * @public
   * <p>Sets the time of departure as the current time. Uses the current time to calculate a
   *             route. Otherwise, the best time of day to travel with the best traffic conditions is
   *             used to calculate the route.</p>
   *          <p>Default Value: <code>false</code>
   *          </p>
   *          <p>Valid Values: <code>false</code> | <code>true</code>
   *          </p>
   */
  DepartNow?: boolean;

  /**
   * @public
   * <p>Set the unit system to specify the distance.</p>
   *          <p>Default Value: <code>Kilometers</code>
   *          </p>
   */
  DistanceUnit?: DistanceUnit | string;

  /**
   * @public
   * <p>Set to include the geometry details in the result for each path between a pair of
   *             positions.</p>
   *          <p>Default Value: <code>false</code>
   *          </p>
   *          <p>Valid Values: <code>false</code> | <code>true</code>
   *          </p>
   */
  IncludeLegGeometry?: boolean;

  /**
   * @public
   * <p>Specifies route preferences when traveling by <code>Car</code>, such as avoiding
   *             routes that use ferries or tolls.</p>
   *          <p>Requirements: <code>TravelMode</code> must be specified as <code>Car</code>.</p>
   */
  CarModeOptions?: CalculateRouteCarModeOptions;

  /**
   * @public
   * <p>Specifies route preferences when traveling by <code>Truck</code>, such as avoiding
   *             routes that use ferries or tolls, and truck specifications to consider when choosing an
   *             optimal road.</p>
   *          <p>Requirements: <code>TravelMode</code> must be specified as <code>Truck</code>.</p>
   */
  TruckModeOptions?: CalculateRouteTruckModeOptions;

  /**
   * @public
   * <p>The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize
   *             the request.</p>
   */
  Key?: string;
}

/**
 * @public
 * <p>Contains the geometry details for each path between a pair of positions. Used in
 *             plotting a route leg on a map.</p>
 */
export interface LegGeometry {
  /**
   * @public
   * <p>An ordered list of positions used to plot a route on a map. </p>
   *          <p>The first position is closest to the start position for the leg, and the last position
   *             is the closest to the end position for the leg.</p>
   *          <ul>
   *             <li>
   *                <p>For example, <code>[[-123.117, 49.284],[-123.115, 49.285],[-123.115,
   *                         49.285]]</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  LineString?: number[][];
}

/**
 * @public
 * <p> Represents an element of a leg within a route. A step contains instructions for how
 *             to move to the next step in the leg. </p>
 */
export interface Step {
  /**
   * @public
   * <p>The starting position of a step. If the position is the first step in the leg, this
   *             position is the same as the start position of the leg.</p>
   */
  StartPosition: number[] | undefined;

  /**
   * @public
   * <p>The end position of a step. If the position the last step in the leg, this position is
   *             the same as the end position of the leg.</p>
   */
  EndPosition: number[] | undefined;

  /**
   * @public
   * <p>The travel distance between the step's <code>StartPosition</code> and
   *                 <code>EndPosition</code>.</p>
   */
  Distance: number | undefined;

  /**
   * @public
   * <p>The estimated travel time, in seconds, from the step's <code>StartPosition</code> to
   *             the <code>EndPosition</code>. . The travel mode and departure time that you specify in
   *             the request determines the calculated time.</p>
   */
  DurationSeconds: number | undefined;

  /**
   * @public
   * <p>Represents the start position, or index, in a sequence of steps within the leg's line
   *             string geometry. For example, the index of the first step in a leg geometry is
   *                 <code>0</code>. </p>
   *          <p>Included in the response for queries that set <code>IncludeLegGeometry</code> to
   *                 <code>True</code>. </p>
   */
  GeometryOffset?: number;
}

/**
 * @public
 * <p>Contains the calculated route's details for each path between a pair of positions. The
 *             number of legs returned corresponds to one fewer than the total number of positions in
 *             the request. </p>
 *          <p>For example, a route with a departure position and destination position returns one
 *             leg with the positions <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">snapped to a nearby
 *                 road</a>:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>StartPosition</code> is the departure position.</p>
 *             </li>
 *             <li>
 *                <p>The <code>EndPosition</code> is the destination position.</p>
 *             </li>
 *          </ul>
 *          <p>A route with a waypoint between the departure and destination position returns two
 *             legs with the positions snapped to a nearby road:</p>
 *          <ul>
 *             <li>
 *                <p>Leg 1: The <code>StartPosition</code> is the departure position . The
 *                         <code>EndPosition</code> is the waypoint positon.</p>
 *             </li>
 *             <li>
 *                <p>Leg 2: The <code>StartPosition</code> is the waypoint position. The
 *                         <code>EndPosition</code> is the destination position.</p>
 *             </li>
 *          </ul>
 */
export interface Leg {
  /**
   * @public
   * <p>The starting position of the leg. Follows the format
   *             <code>[longitude,latitude]</code>.</p>
   *          <note>
   *             <p>If the <code>StartPosition</code> isn't located on a road, it's <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">snapped to a
   *                     nearby road</a>. </p>
   *          </note>
   */
  StartPosition: number[] | undefined;

  /**
   * @public
   * <p>The terminating position of the leg. Follows the format
   *                 <code>[longitude,latitude]</code>.</p>
   *          <note>
   *             <p>If the <code>EndPosition</code> isn't located on a road, it's <a href="https://docs.aws.amazon.com/location/latest/developerguide/nap-to-nearby-road.html">snapped to a nearby
   *                     road</a>. </p>
   *          </note>
   */
  EndPosition: number[] | undefined;

  /**
   * @public
   * <p>The distance between the leg's <code>StartPosition</code> and <code>EndPosition</code>
   *             along a calculated route. </p>
   *          <ul>
   *             <li>
   *                <p>The default measurement is <code>Kilometers</code> unless the request
   *                     specifies a <code>DistanceUnit</code> of <code>Miles</code>.</p>
   *             </li>
   *          </ul>
   */
  Distance: number | undefined;

  /**
   * @public
   * <p>The estimated travel time between the leg's <code>StartPosition</code> and
   *                 <code>EndPosition</code>. The travel mode and departure time that you specify in the
   *             request determines the calculated time.</p>
   */
  DurationSeconds: number | undefined;

  /**
   * @public
   * <p>Contains the calculated route's path as a linestring geometry.</p>
   */
  Geometry?: LegGeometry;

  /**
   * @public
   * <p>Contains a list of steps, which represent subsections of a leg. Each step provides
   *             instructions for how to move to the next step in the leg such as the step's start
   *             position, end position, travel distance, travel duration, and geometry offset.</p>
   */
  Steps: Step[] | undefined;
}

/**
 * @public
 * <p>A summary of the calculated route.</p>
 */
export interface CalculateRouteSummary {
  /**
   * @public
   * <p>Specifies a geographical box surrounding a route. Used to zoom into a route when
   *             displaying it in a map. For example, <code>[min x, min y, max x, max y]</code>.</p>
   *          <p>The first 2 <code>bbox</code> parameters describe the lower southwest corner: </p>
   *          <ul>
   *             <li>
   *                <p>The first <code>bbox</code> position is the X coordinate or longitude of the
   *                     lower southwest corner. </p>
   *             </li>
   *             <li>
   *                <p>The second <code>bbox</code> position is the Y coordinate or latitude of the
   *                     lower southwest corner. </p>
   *             </li>
   *          </ul>
   *          <p>The next 2 <code>bbox</code> parameters describe the upper northeast corner: </p>
   *          <ul>
   *             <li>
   *                <p>The third <code>bbox</code> position is the X coordinate, or longitude of the
   *                     upper northeast corner. </p>
   *             </li>
   *             <li>
   *                <p>The fourth <code>bbox</code> position is the Y coordinate, or latitude of the
   *                     upper northeast corner. </p>
   *             </li>
   *          </ul>
   */
  RouteBBox: number[] | undefined;

  /**
   * @public
   * <p>The data provider of traffic and road network data used to calculate the route.
   *             Indicates one of the available providers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Esri</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Grab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Here</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * <p>The total distance covered by the route. The sum of the distance travelled between
   *             every stop on the route.</p>
   *          <note>
   *             <p>If Esri is the data source for the route calculator, the route distance can’t be
   *                 greater than 400 km. If the route exceeds 400 km, the response is a <code>400
   *                     RoutesValidationException</code> error.</p>
   *          </note>
   */
  Distance: number | undefined;

  /**
   * @public
   * <p>The total travel time for the route measured in seconds. The sum of the travel time
   *             between every stop on the
   *             route.</p>
   */
  DurationSeconds: number | undefined;

  /**
   * @public
   * <p>The unit of measurement for route distances.</p>
   */
  DistanceUnit: DistanceUnit | string | undefined;
}

/**
 * @public
 * <p>Returns the result of the route calculation. Metadata includes legs and route
 *             summary.</p>
 */
export interface CalculateRouteResponse {
  /**
   * @public
   * <p>Contains details about each path between a pair of positions included along a route
   *             such as: <code>StartPosition</code>, <code>EndPosition</code>, <code>Distance</code>,
   *                 <code>DurationSeconds</code>, <code>Geometry</code>, and <code>Steps</code>. The
   *             number of legs returned corresponds to one fewer than the total number of positions in
   *             the request. </p>
   *          <p>For example, a route with a departure position and destination position returns one
   *             leg with the positions <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">snapped to a nearby
   *                 road</a>:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>StartPosition</code> is the departure position.</p>
   *             </li>
   *             <li>
   *                <p>The <code>EndPosition</code> is the destination position.</p>
   *             </li>
   *          </ul>
   *          <p>A route with a waypoint between the departure and destination position returns two
   *             legs with the positions snapped to a nearby road:</p>
   *          <ul>
   *             <li>
   *                <p>Leg 1: The <code>StartPosition</code> is the departure position . The
   *                         <code>EndPosition</code> is the waypoint positon.</p>
   *             </li>
   *             <li>
   *                <p>Leg 2: The <code>StartPosition</code> is the waypoint position. The
   *                         <code>EndPosition</code> is the destination position.</p>
   *             </li>
   *          </ul>
   */
  Legs: Leg[] | undefined;

  /**
   * @public
   * <p>Contains information about the whole route, such as: <code>RouteBBox</code>,
   *                 <code>DataSource</code>, <code>Distance</code>, <code>DistanceUnit</code>, and
   *                 <code>DurationSeconds</code>.</p>
   */
  Summary: CalculateRouteSummary | undefined;
}

/**
 * @public
 */
export interface CalculateRouteMatrixRequest {
  /**
   * @public
   * <p>The name of the route calculator resource that you want to use to calculate the route
   *             matrix. </p>
   */
  CalculatorName: string | undefined;

  /**
   * @public
   * <p>The list of departure (origin) positions for the route matrix. An array of points,
   *             each of which is itself a 2-value array defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format:
   *                 <code>[longitude, latitude]</code>. For example, <code>[-123.115,
   *             49.285]</code>.</p>
   *          <important>
   *             <p>Depending on the data provider selected in the route calculator resource there may
   *                 be additional restrictions on the inputs you can choose. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html#matrix-routing-position-limits"> Position restrictions</a> in the <i>Amazon Location Service Developer
   *                     Guide</i>.</p>
   *          </important>
   *          <note>
   *             <p>For route calculators that use Esri as the data provider, if you specify a
   *                 departure that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"> moves the
   *                     position to the nearest road</a>. The snapped value is available in the
   *                 result in <code>SnappedDeparturePositions</code>.</p>
   *          </note>
   *          <p>Valid Values: <code>[-180 to 180,-90 to 90]</code>
   *          </p>
   */
  DeparturePositions: number[][] | undefined;

  /**
   * @public
   * <p>The list of destination positions for the route matrix. An array of points, each of
   *             which is itself a 2-value array defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format:
   *                 <code>[longitude, latitude]</code>. For example, <code>[-122.339,
   *             47.615]</code>
   *          </p>
   *          <important>
   *             <p>Depending on the data provider selected in the route calculator resource there may
   *                 be additional restrictions on the inputs you can choose. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html#matrix-routing-position-limits"> Position restrictions</a> in the <i>Amazon Location Service Developer
   *                     Guide</i>.</p>
   *          </important>
   *          <note>
   *             <p>For route calculators that use Esri as the data provider, if you specify a
   *                 destination that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"> moves the
   *                     position to the nearest road</a>. The snapped value is available in the
   *                 result in <code>SnappedDestinationPositions</code>.</p>
   *          </note>
   *          <p>Valid Values: <code>[-180 to 180,-90 to 90]</code>
   *          </p>
   */
  DestinationPositions: number[][] | undefined;

  /**
   * @public
   * <p>Specifies the mode of transport when calculating a route. Used in estimating the speed
   *             of travel and road compatibility.</p>
   *          <p>The <code>TravelMode</code> you specify also determines how you specify route
   *             preferences: </p>
   *          <ul>
   *             <li>
   *                <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code>
   *                     parameter.</p>
   *             </li>
   *             <li>
   *                <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code>
   *                     parameter.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                <code>Bicycle</code> or <code>Motorcycle</code> are only valid when using
   *                     <code>Grab</code> as a data provider, and only within Southeast Asia.</p>
   *             <p>
   *                <code>Truck</code> is not available for Grab.</p>
   *             <p>For more information about using Grab as a data provider, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> in the <i>Amazon Location Service Developer Guide</i>.</p>
   *          </note>
   *          <p>Default Value: <code>Car</code>
   *          </p>
   */
  TravelMode?: TravelMode | string;

  /**
   * @public
   * <p>Specifies the desired time of departure. Uses the given time to calculate the route
   *             matrix. You can't set both <code>DepartureTime</code> and <code>DepartNow</code>. If
   *             neither is set, the best time of day to travel with the best traffic conditions is used
   *             to calculate the route matrix.</p>
   *          <note>
   *             <p>Setting a departure time in the past returns a <code>400
   *                     ValidationException</code> error.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO
   *                         8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example,
   *                         <code>2020–07-2T12:15:20.000Z+01:00</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DepartureTime?: Date;

  /**
   * @public
   * <p>Sets the time of departure as the current time. Uses the current time to calculate the
   *             route matrix. You can't set both <code>DepartureTime</code> and <code>DepartNow</code>.
   *             If neither is set, the best time of day to travel with the best traffic conditions is
   *             used to calculate the route matrix.</p>
   *          <p>Default Value: <code>false</code>
   *          </p>
   *          <p>Valid Values: <code>false</code> | <code>true</code>
   *          </p>
   */
  DepartNow?: boolean;

  /**
   * @public
   * <p>Set the unit system to specify the distance.</p>
   *          <p>Default Value: <code>Kilometers</code>
   *          </p>
   */
  DistanceUnit?: DistanceUnit | string;

  /**
   * @public
   * <p>Specifies route preferences when traveling by <code>Car</code>, such as avoiding
   *             routes that use ferries or tolls.</p>
   *          <p>Requirements: <code>TravelMode</code> must be specified as <code>Car</code>.</p>
   */
  CarModeOptions?: CalculateRouteCarModeOptions;

  /**
   * @public
   * <p>Specifies route preferences when traveling by <code>Truck</code>, such as avoiding
   *             routes that use ferries or tolls, and truck specifications to consider when choosing an
   *             optimal road.</p>
   *          <p>Requirements: <code>TravelMode</code> must be specified as <code>Truck</code>.</p>
   */
  TruckModeOptions?: CalculateRouteTruckModeOptions;

  /**
   * @public
   * <p>The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize
   *             the request.</p>
   */
  Key?: string;
}

/**
 * @public
 */
export type RouteMatrixErrorCode =
  | "DeparturePositionNotFound"
  | "DestinationPositionNotFound"
  | "OtherValidationError"
  | "PositionsNotFound"
  | "RouteNotFound"
  | "RouteTooLong";

/**
 * @public
 * <p>An error corresponding to the calculation of a route between the
 *                 <code>DeparturePosition</code> and <code>DestinationPosition</code>.</p>
 *          <p>The error code can be one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>RouteNotFound</code> - Unable to find a valid route with the given
 *                     parameters.</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>RouteTooLong</code> - Route calculation went beyond the maximum size of
 *                     a route and was terminated before completion.</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PositionsNotFound</code> - One or more of the input positions were not
 *                     found on the route network.</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DestinationPositionNotFound</code> - The destination position was not
 *                     found on the route network.</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DeparturePositionNotFound</code> - The departure position was not found
 *                     on the route network.</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>OtherValidationError</code> - The given inputs were not valid or a route
 *                     was not found. More information is given in the error
 *                     <code>Message</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface RouteMatrixEntryError {
  /**
   * @public
   * <p>The type of error which occurred for the route calculation.</p>
   */
  Code: RouteMatrixErrorCode | string | undefined;

  /**
   * @public
   * <p>A message about the error that occurred for the route calculation.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The result for the calculated route of one <code>DeparturePosition</code>
 *             <code>DestinationPosition</code> pair.</p>
 */
export interface RouteMatrixEntry {
  /**
   * @public
   * <p>The total distance of travel for the route.</p>
   */
  Distance?: number;

  /**
   * @public
   * <p>The expected duration of travel for the route.</p>
   */
  DurationSeconds?: number;

  /**
   * @public
   * <p>An error corresponding to the calculation of a route between the
   *                 <code>DeparturePosition</code> and <code>DestinationPosition</code>.</p>
   */
  Error?: RouteMatrixEntryError;
}

/**
 * @public
 * <p>A summary of the calculated route matrix.</p>
 */
export interface CalculateRouteMatrixSummary {
  /**
   * @public
   * <p>The data provider of traffic and road network data used to calculate the routes.
   *             Indicates one of the available providers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Esri</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Grab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Here</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data
   *                 providers</a>.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * <p>The count of cells in the route matrix. Equal to the number of
   *                 <code>DeparturePositions</code> multiplied by the number of
   *                 <code>DestinationPositions</code>.</p>
   */
  RouteCount: number | undefined;

  /**
   * @public
   * <p>The count of error results in the route matrix. If this number is 0, all routes were
   *             calculated successfully.</p>
   */
  ErrorCount: number | undefined;

  /**
   * @public
   * <p>The unit of measurement for route distances.</p>
   */
  DistanceUnit: DistanceUnit | string | undefined;
}

/**
 * @public
 * <p>Returns the result of the route matrix calculation.</p>
 */
export interface CalculateRouteMatrixResponse {
  /**
   * @public
   * <p>The calculated route matrix containing the results for all pairs of
   *                 <code>DeparturePositions</code> to <code>DestinationPositions</code>. Each row
   *             corresponds to one entry in <code>DeparturePositions</code>. Each entry in the row
   *             corresponds to the route from that entry in <code>DeparturePositions</code> to an entry
   *             in <code>DestinationPositions</code>. </p>
   */
  RouteMatrix: RouteMatrixEntry[][] | undefined;

  /**
   * @public
   * <p>For routes calculated using an Esri route calculator resource, departure positions are
   *             snapped to the closest road. For Esri route calculator resources, this returns the list
   *             of departure/origin positions used for calculation of the
   *             <code>RouteMatrix</code>.</p>
   */
  SnappedDeparturePositions?: number[][];

  /**
   * @public
   * <p>The list of destination positions for the route matrix used for calculation of the
   *                 <code>RouteMatrix</code>.</p>
   */
  SnappedDestinationPositions?: number[][];

  /**
   * @public
   * <p>Contains information about the route matrix, <code>DataSource</code>,
   *                 <code>DistanceUnit</code>, <code>RouteCount</code> and
   *             <code>ErrorCount</code>.</p>
   */
  Summary: CalculateRouteMatrixSummary | undefined;
}

/**
 * @public
 */
export type PricingPlan = "MobileAssetManagement" | "MobileAssetTracking" | "RequestBasedUsage";

/**
 * @public
 */
export interface CreateGeofenceCollectionRequest {
  /**
   * @public
   * <p>A custom name for the geofence collection.</p>
   *          <p>Requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods
   *                     (.), and underscores (_). </p>
   *             </li>
   *             <li>
   *                <p>Must be a unique geofence collection name.</p>
   *             </li>
   *             <li>
   *                <p>No spaces allowed. For example, <code>ExampleGeofenceCollection</code>.</p>
   *             </li>
   *          </ul>
   */
  CollectionName: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. If included, the only allowed value is
   *             <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * @deprecated
   *
   * <p>This parameter is no longer used.</p>
   */
  PricingPlanDataSource?: string;

  /**
   * @public
   * <p>An optional description for the geofence collection.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Applies one or more tags to the geofence collection. A tag is a key-value pair helps
   *             manage, identify, search, and filter your resources by labelling them.</p>
   *          <p>Format: <code>"key" : "value"</code>
   *          </p>
   *          <p>Restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum 50 tags per resource</p>
   *             </li>
   *             <li>
   *                <p>Each resource tag must be unique with a maximum of one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length: 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length: 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters:
   *                     + - = . _ : / @. </p>
   *             </li>
   *             <li>
   *                <p>Cannot use "aws:" as a prefix for a key.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A key identifier for an
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services
   *                 KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN.
   * 	</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 */
export interface CreateGeofenceCollectionResponse {
  /**
   * @public
   * <p>The name for the geofence collection.</p>
   */
  CollectionName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the geofence collection resource. Used when you
   *             need to specify a resource across all Amazon Web Services. </p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CollectionArn: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the geofence collection was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;
}

/**
 * @public
 * <p>Specifies the map tile style selected from an available provider.</p>
 */
export interface MapConfiguration {
  /**
   * @public
   * <p>Specifies the map style selected from an available data provider.</p>
   *          <p>Valid <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri map styles</a>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VectorEsriDarkGrayCanvas</code> – The Esri Dark Gray Canvas map style. A
   *                     vector basemap with a dark gray, neutral background with minimal colors, labels,
   *                     and features that's designed to draw attention to your thematic content. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RasterEsriImagery</code> – The Esri Imagery map style. A raster basemap
   *                     that provides one meter or better satellite and aerial imagery in many parts of
   *                     the world and lower resolution satellite imagery worldwide. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VectorEsriLightGrayCanvas</code> – The Esri Light Gray Canvas map style,
   *                     which provides a detailed vector basemap with a light gray, neutral background
   *                     style with minimal colors, labels, and features that's designed to draw
   *                     attention to your thematic content. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VectorEsriTopographic</code> – The Esri Light map style, which provides
   *                     a detailed vector basemap with a classic Esri map style.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VectorEsriStreets</code> – The Esri Street Map style, which
   *                     provides a detailed vector basemap for the world symbolized with a classic Esri
   *                     street map style. The vector tile layer is similar in content and style to the
   *                     World Street Map raster map.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VectorEsriNavigation</code> – The Esri Navigation map style, which
   *                     provides a detailed basemap for the world symbolized with a custom navigation
   *                     map style that's designed for use during the day in mobile devices.</p>
   *             </li>
   *          </ul>
   *          <p>Valid <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE
   *                 Technologies map styles</a>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VectorHereContrast</code> – The HERE Contrast (Berlin) map style is a
   *                     high contrast
   *                     detailed base map of the world that blends 3D and 2D rendering.</p>
   *                <note>
   *                   <p>The <code>VectorHereContrast</code> style has been renamed from
   *                     <code>VectorHereBerlin</code>.
   *                     <code>VectorHereBerlin</code> has been deprecated, but will continue to work in
   *                     applications that use it.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VectorHereExplore</code> – A default HERE map style containing a
   *                     neutral, global map and its features including roads, buildings, landmarks,
   *                     and water features. It also now includes a fully designed map of Japan.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VectorHereExploreTruck</code> – A global map containing truck
   *                     restrictions and attributes (e.g. width / height / HAZMAT) symbolized with
   *                     highlighted segments and icons on top of HERE Explore to support use cases
   *                     within transport and logistics.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RasterHereExploreSatellite</code> – A global map containing high
   *                     resolution satellite imagery.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HybridHereExploreSatellite</code> – A global map displaying the road
   *                     network, street names, and city labels over satellite imagery. This style
   *                     will automatically retrieve both raster and vector tiles, and your charges
   *                     will be based on total tiles retrieved.</p>
   *                <note>
   *                   <p>Hybrid styles use both vector and raster tiles when rendering the
   *                     map that you see. This means that more tiles are retrieved than when using
   *                     either vector or raster tiles alone. Your charges will include all tiles
   *                     retrieved.</p>
   *                </note>
   *             </li>
   *          </ul>
   *          <p>Valid <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps map styles</a>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VectorGrabStandardLight</code> – The Grab Standard Light
   *                     map style provides a basemap with detailed land use coloring,
   *                     area names, roads, landmarks, and points of interest covering
   *                     Southeast Asia.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VectorGrabStandardDark</code> – The Grab Standard Dark
   *                     map style provides a dark variation of the standard basemap
   *                     covering Southeast Asia.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Grab provides maps only for countries in Southeast Asia, and is only available
   *                 in the Asia Pacific (Singapore) Region (<code>ap-southeast-1</code>).
   *                 For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and area covered</a>.</p>
   *          </note>
   *          <p>Valid <a href="https://docs.aws.amazon.com/location/latest/developerguide/open-data.html">Open Data map styles</a>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VectorOpenDataStandardLight</code> – The Open Data Standard Light
   *                     map style provides a detailed basemap for the world suitable for
   *                     website and mobile application use. The map includes highways major roads,
   *                     minor roads, railways, water features, cities, parks, landmarks, building
   *                     footprints, and administrative boundaries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VectorOpenDataStandardDark</code> – Open Data Standard Dark is a
   *                     dark-themed map style that provides a detailed basemap for the world
   *                     suitable for website and mobile application use. The map includes highways
   *                     major roads, minor roads, railways, water features, cities, parks,
   *                     landmarks, building footprints, and administrative boundaries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VectorOpenDataVisualizationLight</code> – The Open Data
   *                     Visualization Light map style is a light-themed style with muted colors and
   *                     fewer features that aids in understanding overlaid data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VectorOpenDataVisualizationDark</code> – The Open Data
   *                     Visualization Dark map style is a dark-themed style with muted colors and
   *                     fewer features that aids in understanding overlaid data.</p>
   *             </li>
   *          </ul>
   */
  Style: string | undefined;

  /**
   * @public
   * <p>Specifies the political view for the style. Leave unset to not use a political
   *             view, or, for styles that support specific political views, you can choose a view,
   *             such as <code>IND</code> for the Indian view.</p>
   *          <p>Default is unset.</p>
   *          <note>
   *             <p>Not all map resources or styles support political view styles. See
   *                 <a href="https://docs.aws.amazon.com/location/latest/developerguide/map-concepts.html#political-views">Political
   *                     views</a>
   *                 for more information.</p>
   *          </note>
   */
  PoliticalView?: string;
}

/**
 * @public
 */
export interface CreateMapRequest {
  /**
   * @public
   * <p>The name for the map resource.</p>
   *          <p>Requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p>
   *             </li>
   *             <li>
   *                <p>Must be a unique map resource name. </p>
   *             </li>
   *             <li>
   *                <p>No spaces allowed. For example, <code>ExampleMap</code>.</p>
   *             </li>
   *          </ul>
   */
  MapName: string | undefined;

  /**
   * @public
   * <p>Specifies the <code>MapConfiguration</code>, including the map style, for the
   *             map resource that you create. The map style defines the look of maps and the data
   *             provider for your map resource.</p>
   */
  Configuration: MapConfiguration | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. If included, the only allowed value is
   *             <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>An optional description for the map resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Applies one or more tags to the map resource. A tag is a key-value pair helps manage,
   *             identify, search, and filter your resources by labelling them.</p>
   *          <p>Format: <code>"key" : "value"</code>
   *          </p>
   *          <p>Restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum 50 tags per resource</p>
   *             </li>
   *             <li>
   *                <p>Each resource tag must be unique with a maximum of one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length: 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length:  256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : /
   *                     @. </p>
   *             </li>
   *             <li>
   *                <p>Cannot use "aws:" as a prefix for a key.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateMapResponse {
  /**
   * @public
   * <p>The name of the map resource.</p>
   */
  MapName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the map resource. Used to specify a resource across
   *             all Amazon Web Services.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                     <code>arn:aws:geo:region:account-id:map/ExampleMap</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  MapArn: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the map resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  CreateTime: Date | undefined;
}

/**
 * @public
 */
export type IntendedUse = "SingleUse" | "Storage";

/**
 * @public
 * <p>Specifies the data storage option chosen for requesting Places.</p>
 *          <important>
 *             <p>When using Amazon Location Places:</p>
 *             <ul>
 *                <li>
 *                   <p>If using HERE Technologies as a data provider, you can't store results for
 *                         locations in Japan by setting <code>IntendedUse</code> to
 *                             <code>Storage</code>. parameter.</p>
 *                </li>
 *                <li>
 *                   <p>Under the <code>MobileAssetTracking</code> or
 *                             <code>MobilAssetManagement</code> pricing plan, you can't store results
 *                         from your place index resources by setting <code>IntendedUse</code> to
 *                             <code>Storage</code>. This returns a validation exception error.</p>
 *                </li>
 *             </ul>
 *             <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p>
 *          </important>
 */
export interface DataSourceConfiguration {
  /**
   * @public
   * <p>Specifies how the results of an operation will be stored by the caller. </p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SingleUse</code> specifies that the results won't be stored. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage</code> specifies that the result can be cached or stored in a
   *                     database.</p>
   *             </li>
   *          </ul>
   *          <p>Default value: <code>SingleUse</code>
   *          </p>
   */
  IntendedUse?: IntendedUse | string;
}

/**
 * @public
 */
export interface CreatePlaceIndexRequest {
  /**
   * @public
   * <p>The name of the place index resource. </p>
   *          <p>Requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods
   *                     (.), and underscores (_).</p>
   *             </li>
   *             <li>
   *                <p>Must be a unique place index resource name.</p>
   *             </li>
   *             <li>
   *                <p>No spaces allowed. For example, <code>ExamplePlaceIndex</code>.</p>
   *             </li>
   *          </ul>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>Specifies the geospatial data provider for the new place index.</p>
   *          <note>
   *             <p>This field is case-sensitive. Enter the valid values as shown. For example,
   *                 entering <code>HERE</code> returns an error.</p>
   *          </note>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Esri</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a>'s coverage in your region of interest, see <a href="https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm">Esri details on geocoding coverage</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Grab</code> – Grab provides place index functionality for Southeast
   *                     Asia. For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a>' coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and areas covered</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Here</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE
   *                         Technologies</a>' coverage in your region of interest, see <a href="https://developer.here.com/documentation/geocoder/dev_guide/topics/coverage-geocoder.html">HERE details on goecoding coverage</a>.</p>
   *                <important>
   *                   <p>If you specify HERE Technologies (<code>Here</code>) as the data provider,
   *                         you may not <a href="https://docs.aws.amazon.com/location-places/latest/APIReference/API_DataSourceConfiguration.html">store results</a> for locations in Japan. For more information, see
   *                         the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services Service
   *                             Terms</a> for Amazon Location Service.</p>
   *                </important>
   *             </li>
   *          </ul>
   *          <p>For additional information , see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Data
   *                 providers</a> on the <i>Amazon Location Service Developer Guide</i>.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. If included, the only allowed value is
   *             <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>The optional description for the place index resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies the data storage option requesting Places.</p>
   */
  DataSourceConfiguration?: DataSourceConfiguration;

  /**
   * @public
   * <p>Applies one or more tags to the place index resource. A tag is a key-value pair that
   *             helps you manage, identify, search, and filter your resources.</p>
   *          <p>Format: <code>"key" : "value"</code>
   *          </p>
   *          <p>Restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum 50 tags per resource.</p>
   *             </li>
   *             <li>
   *                <p>Each tag key must be unique and must have exactly one associated value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length: 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length: 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters:
   *                     + - = . _ : / @</p>
   *             </li>
   *             <li>
   *                <p>Cannot use "aws:" as a prefix for a key.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePlaceIndexResponse {
  /**
   * @public
   * <p>The name for the place index resource.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the place index resource. Used to specify a
   *             resource across Amazon Web Services. </p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:place-index/ExamplePlaceIndex</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  IndexArn: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the place index resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateRouteCalculatorRequest {
  /**
   * @public
   * <p>The name of the route calculator resource. </p>
   *          <p>Requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Can use alphanumeric characters (A–Z, a–z, 0–9) , hyphens (-), periods (.),
   *                     and underscores (_).</p>
   *             </li>
   *             <li>
   *                <p>Must be a unique Route calculator resource name.</p>
   *             </li>
   *             <li>
   *                <p>No spaces allowed. For example, <code>ExampleRouteCalculator</code>.</p>
   *             </li>
   *          </ul>
   */
  CalculatorName: string | undefined;

  /**
   * @public
   * <p>Specifies the data provider of traffic and road network data.</p>
   *          <note>
   *             <p>This field is case-sensitive. Enter the valid values as shown. For example,
   *                 entering <code>HERE</code> returns an error.</p>
   *          </note>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Esri</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a>'s coverage in your region of interest, see <a href="https://doc.arcgis.com/en/arcgis-online/reference/network-coverage.htm">Esri details on street networks and traffic coverage</a>.</p>
   *                <p>Route calculators that use Esri as a
   *                     data source only calculate routes that are shorter than 400 km.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Grab</code> – Grab provides routing functionality for Southeast Asia.
   *                     For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a>' coverage,
   *                     see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps
   *                         countries and areas covered</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Here</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE
   *                         Technologies</a>' coverage in your region of interest, see <a href="https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/car-routing.html">HERE car routing coverage</a> and <a href="https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/truck-routing.html">HERE truck routing coverage</a>.</p>
   *             </li>
   *          </ul>
   *          <p>For additional information , see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Data
   *                 providers</a> on the <i>Amazon Location Service Developer Guide</i>.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. If included, the only allowed value is
   *             <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>The optional description for the route calculator resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Applies one or more tags to the route calculator resource. A tag is a key-value pair
   *             helps manage, identify, search, and filter your resources by labelling them.</p>
   *          <ul>
   *             <li>
   *                <p>For example: \{ <code>"tag1" : "value1"</code>, <code>"tag2" :
   *                     "value2"</code>\}</p>
   *             </li>
   *          </ul>
   *          <p>Format: <code>"key" : "value"</code>
   *          </p>
   *          <p>Restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum 50 tags per resource</p>
   *             </li>
   *             <li>
   *                <p>Each resource tag must be unique with a maximum of one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length: 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length: 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters:
   *                     + - = . _ : / @. </p>
   *             </li>
   *             <li>
   *                <p>Cannot use "aws:" as a prefix for a key.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRouteCalculatorResponse {
  /**
   * @public
   * <p>The name of the route calculator resource. </p>
   *          <ul>
   *             <li>
   *                <p>For example, <code>ExampleRouteCalculator</code>.</p>
   *             </li>
   *          </ul>
   */
  CalculatorName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the route calculator resource. Use the ARN when you
   *             specify a resource across all Amazon Web Services.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:route-calculator/ExampleCalculator</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CalculatorArn: string | undefined;

  /**
   * @public
   * <p>The timestamp when the route calculator resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   *          <ul>
   *             <li>
   *                <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CreateTime: Date | undefined;
}

/**
 * @public
 */
export type PositionFiltering = "AccuracyBased" | "DistanceBased" | "TimeBased";

/**
 * @public
 */
export interface CreateTrackerRequest {
  /**
   * @public
   * <p>The name for the tracker resource.</p>
   *          <p>Requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).</p>
   *             </li>
   *             <li>
   *                <p>Must be a unique tracker resource name.</p>
   *             </li>
   *             <li>
   *                <p>No spaces allowed. For example, <code>ExampleTracker</code>.</p>
   *             </li>
   *          </ul>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. If included, the only allowed value is
   *            <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>A key identifier for an
   *            <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services
   *                KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>This parameter is no longer used.</p>
   */
  PricingPlanDataSource?: string;

  /**
   * @public
   * <p>An optional description for the tracker resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Applies one or more tags to the tracker resource. A tag is a key-value pair helps
   *             manage, identify, search, and filter your resources by labelling them.</p>
   *          <p>Format: <code>"key" : "value"</code>
   *          </p>
   *          <p>Restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum 50 tags per resource</p>
   *             </li>
   *             <li>
   *                <p>Each resource tag must be unique with a maximum of one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length: 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length: 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters:
   *                     + - = . _ : / @. </p>
   *             </li>
   *             <li>
   *                <p>Cannot use "aws:" as a prefix for a key.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>Specifies the position filtering for the tracker resource.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TimeBased</code> - Location updates are evaluated against linked geofence collections,
   *                     but not every location update is stored. If your update frequency is more often than 30 seconds,
   *                     only one update per 30 seconds is stored for each unique device ID.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DistanceBased</code> - If the device has moved less than 30 m (98.4 ft), location updates are
   *                     ignored. Location updates within this area are neither evaluated against linked geofence collections, nor stored.
   *                     This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through.
   *                     Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AccuracyBased</code> - If the device has moved less than the measured accuracy,
   *                     location updates are ignored. For example, if two consecutive updates from a device
   *                     have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device
   *                     has moved less than 15 m. Ignored location updates are neither evaluated against
   *                     linked geofence collections, nor stored. This can reduce the effects of GPS noise
   *                     when displaying device trajectories on a map, and can help control your costs by reducing the
   *                     number of geofence evaluations.
   *                 </p>
   *             </li>
   *          </ul>
   *          <p>This field is optional. If not specified, the default value is <code>TimeBased</code>.</p>
   */
  PositionFiltering?: PositionFiltering | string;

  /**
   * @public
   * <p>Whether to enable position <code>UPDATE</code> events from this tracker to be sent to
   *             EventBridge.</p>
   *          <note>
   *             <p>You do not need enable this feature to get <code>ENTER</code> and
   *                 <code>EXIT</code> events for geofences with this tracker. Those events are
   *                 always sent to EventBridge.</p>
   *          </note>
   */
  EventBridgeEnabled?: boolean;
}

/**
 * @public
 */
export interface CreateTrackerResponse {
  /**
   * @public
   * <p>The name of the tracker resource.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify
   *             a resource across all Amazon Web Services.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:tracker/ExampleTracker</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  TrackerArn: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the tracker resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteGeofenceCollectionRequest {
  /**
   * @public
   * <p>The name of the geofence collection to be deleted.</p>
   */
  CollectionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteGeofenceCollectionResponse {}

/**
 * @public
 */
export interface DeleteMapRequest {
  /**
   * @public
   * <p>The name of the map resource to be deleted.</p>
   */
  MapName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMapResponse {}

/**
 * @public
 */
export interface DeletePlaceIndexRequest {
  /**
   * @public
   * <p>The name of the place index resource to be deleted.</p>
   */
  IndexName: string | undefined;
}

/**
 * @public
 */
export interface DeletePlaceIndexResponse {}

/**
 * @public
 */
export interface DeleteRouteCalculatorRequest {
  /**
   * @public
   * <p>The name of the route calculator resource to be deleted.</p>
   */
  CalculatorName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteCalculatorResponse {}

/**
 * @public
 */
export interface DeleteTrackerRequest {
  /**
   * @public
   * <p>The name of the tracker resource to be deleted.</p>
   */
  TrackerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrackerResponse {}

/**
 * @public
 */
export interface DescribeGeofenceCollectionRequest {
  /**
   * @public
   * <p>The name of the geofence collection.</p>
   */
  CollectionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeGeofenceCollectionResponse {
  /**
   * @public
   * <p>The name of the geofence collection.</p>
   */
  CollectionName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the geofence collection resource. Used when you
   *             need to specify a resource across all Amazon Web Services. </p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CollectionArn: string | undefined;

  /**
   * @public
   * <p>The optional description for the geofence collection.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. Always returns <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. Always returns an empty string.</p>
   */
  PricingPlanDataSource?: string;

  /**
   * @public
   * <p>A key identifier for an
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services
   *                 KMS customer managed key</a> assigned to the Amazon Location resource</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Displays the key, value pairs of tags associated with this resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The timestamp for when the geofence resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the geofence collection was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeMapRequest {
  /**
   * @public
   * <p>The name of the map resource.</p>
   */
  MapName: string | undefined;
}

/**
 * @public
 */
export interface DescribeMapResponse {
  /**
   * @public
   * <p>The map style selected from an available provider.</p>
   */
  MapName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the map resource. Used to specify a resource across
   *             all Amazon Web Services.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                     <code>arn:aws:geo:region:account-id:map/ExampleMap</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  MapArn: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. Always returns <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>Specifies the data provider for the associated map tiles.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * <p>Specifies the map tile style selected from a partner data provider.</p>
   */
  Configuration: MapConfiguration | undefined;

  /**
   * @public
   * <p>The optional description for the map resource.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>Tags associated with the map resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The timestamp for when the map resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the map resource was last update in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribePlaceIndexRequest {
  /**
   * @public
   * <p>The name of the place index resource.</p>
   */
  IndexName: string | undefined;
}

/**
 * @public
 */
export interface DescribePlaceIndexResponse {
  /**
   * @public
   * <p>The name of the place index resource being described.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the place index resource. Used to specify a
   *             resource across Amazon Web Services. </p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:place-index/ExamplePlaceIndex</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  IndexArn: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. Always returns <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>The optional description for the place index resource.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the place index resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the place index resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;

  /**
   * @public
   * <p>The data provider of geospatial data. Values can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Esri</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Grab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Here</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * <p>The specified data storage option for requesting Places.</p>
   */
  DataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * @public
   * <p>Tags associated with place index resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeRouteCalculatorRequest {
  /**
   * @public
   * <p>The name of the route calculator resource.</p>
   */
  CalculatorName: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouteCalculatorResponse {
  /**
   * @public
   * <p>The name of the route calculator resource being described.</p>
   */
  CalculatorName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the Route calculator resource. Use the ARN when you
   *             specify a resource across Amazon Web Services.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:route-calculator/ExampleCalculator</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CalculatorArn: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>Always returns <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>The optional description of the route calculator resource.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The timestamp when the route calculator resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   *          <ul>
   *             <li>
   *                <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp when the route calculator resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   *          <ul>
   *             <li>
   *                <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  UpdateTime: Date | undefined;

  /**
   * @public
   * <p>The data provider of traffic and road network data. Indicates one of the available
   *             providers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Esri</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Grab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Here</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * <p>Tags associated with route calculator resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeTrackerRequest {
  /**
   * @public
   * <p>The name of the tracker resource.</p>
   */
  TrackerName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrackerResponse {
  /**
   * @public
   * <p>The name of the tracker resource.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify
   *             a resource across all Amazon Web Services.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:tracker/ExampleTracker</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  TrackerArn: string | undefined;

  /**
   * @public
   * <p>The optional description for the tracker resource.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>Always returns <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. Always returns an empty string.</p>
   */
  PricingPlanDataSource?: string;

  /**
   * @public
   * <p>The tags associated with the tracker resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The timestamp for when the tracker resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the tracker resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;

  /**
   * @public
   * <p>A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services
   *             KMS customer managed key</a> assigned to the Amazon Location resource.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The position filtering method of the tracker resource.</p>
   */
  PositionFiltering?: PositionFiltering | string;

  /**
   * @public
   * <p>Whether <code>UPDATE</code> events from this tracker in EventBridge are
   *             enabled. If set to <code>true</code> these events will be sent to EventBridge.</p>
   */
  EventBridgeEnabled?: boolean;
}

/**
 * @public
 */
export interface DisassociateTrackerConsumerRequest {
  /**
   * @public
   * <p>The name of the tracker resource to be dissociated from the consumer.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the geofence collection to be disassociated from
   *             the tracker resource. Used when you need to specify a resource across all Amazon Web Services. </p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ConsumerArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrackerConsumerResponse {}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>Tags that have been applied to the specified resource. Tags are mapped from the tag
   *             key to the tag value: <code>"TagKey" : "TagValue"</code>.</p>
   *          <ul>
   *             <li>
   *                <p>Format example: <code>\{"tag1" : "value1", "tag2" : "value2"\} </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to update.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Applies one or more tags to specific resource. A tag is a key-value pair that helps
   *             you manage, identify, search, and filter your resources.</p>
   *          <p>Format: <code>"key" : "value"</code>
   *          </p>
   *          <p>Restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum 50 tags per resource.</p>
   *             </li>
   *             <li>
   *                <p>Each tag key must be unique and must have exactly one associated value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length: 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length: 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters:
   *                     + - = . _ : / @</p>
   *             </li>
   *             <li>
   *                <p>Cannot use "aws:" as a prefix for a key.</p>
   *             </li>
   *          </ul>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource from which you want to remove
   *             tags.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tag keys to remove from the specified resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface GetGeofenceRequest {
  /**
   * @public
   * <p>The geofence collection storing the target geofence.</p>
   */
  CollectionName: string | undefined;

  /**
   * @public
   * <p>The geofence you're retrieving details for.</p>
   */
  GeofenceId: string | undefined;
}

/**
 * @public
 */
export interface GetGeofenceResponse {
  /**
   * @public
   * <p>The geofence identifier.</p>
   */
  GeofenceId: string | undefined;

  /**
   * @public
   * <p>Contains the geofence geometry details describing a polygon or a circle.</p>
   */
  Geometry: GeofenceGeometry | undefined;

  /**
   * @public
   * <p>Identifies the state of the geofence. A geofence will hold one of the following
   *             states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> — The geofence has been indexed by the system. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> — The geofence is being processed by the system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> — The geofence failed to be indexed by the system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> — The geofence has been deleted from the system
   *                     index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> — The geofence is being deleted from the system
   *                     index.</p>
   *             </li>
   *          </ul>
   */
  Status: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the geofence collection was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the geofence collection was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;

  /**
   * @public
   * <p>User defined properties of the geofence. A property is a key-value
   *             pair stored with the geofence and added to any geofence event triggered with that
   *             geofence.</p>
   *          <p>Format: <code>"key" : "value"</code>
   *          </p>
   */
  GeofenceProperties?: Record<string, string>;
}

/**
 * @public
 */
export interface ListGeofenceCollectionsRequest {
  /**
   * @public
   * <p>An optional limit for the number of resources returned in a single call. </p>
   *          <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page. </p>
   *          <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the geofence collection details.</p>
 */
export interface ListGeofenceCollectionsResponseEntry {
  /**
   * @public
   * <p>The name of the geofence collection.</p>
   */
  CollectionName: string | undefined;

  /**
   * @public
   * <p>The description for the geofence collection</p>
   */
  Description: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. Always returns <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. Always returns an empty string.</p>
   */
  PricingPlanDataSource?: string;

  /**
   * @public
   * <p>The timestamp for when the geofence collection was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>Specifies a timestamp for when the resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListGeofenceCollectionsResponse {
  /**
   * @public
   * <p>Lists the geofence collections that exist in your Amazon Web Services account.</p>
   */
  Entries: ListGeofenceCollectionsResponseEntry[] | undefined;

  /**
   * @public
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a following request to fetch the next set of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGeofencesRequest {
  /**
   * @public
   * <p>The name of the geofence collection storing the list of geofences.</p>
   */
  CollectionName: string | undefined;

  /**
   * @public
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page. </p>
   *          <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An optional limit for the number of geofences returned in a single call. </p>
   *          <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains a list of geofences stored in a given geofence collection.</p>
 */
export interface ListGeofenceResponseEntry {
  /**
   * @public
   * <p>The geofence identifier.</p>
   */
  GeofenceId: string | undefined;

  /**
   * @public
   * <p>Contains the geofence geometry details describing a polygon or a circle.</p>
   */
  Geometry: GeofenceGeometry | undefined;

  /**
   * @public
   * <p>Identifies the state of the geofence. A geofence will hold one of the following
   *             states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> — The geofence has been indexed by the system. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> — The geofence is being processed by the system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> — The geofence failed to be indexed by the system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> — The geofence has been deleted from the system
   *                     index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> — The geofence is being deleted from the system
   *                     index.</p>
   *             </li>
   *          </ul>
   */
  Status: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the geofence was stored in a geofence collection in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the geofence was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;

  /**
   * @public
   * <p>User defined properties of the geofence. A property is a key-value
   *             pair stored with the geofence and added to any geofence event triggered with that
   *             geofence.</p>
   *          <p>Format: <code>"key" : "value"</code>
   *          </p>
   */
  GeofenceProperties?: Record<string, string>;
}

/**
 * @public
 */
export interface ListGeofencesResponse {
  /**
   * @public
   * <p>Contains a list of geofences stored in the geofence collection.</p>
   */
  Entries: ListGeofenceResponseEntry[] | undefined;

  /**
   * @public
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a following request to fetch the next set of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutGeofenceRequest {
  /**
   * @public
   * <p>The geofence collection to store the geofence in.</p>
   */
  CollectionName: string | undefined;

  /**
   * @public
   * <p>An identifier for the geofence. For example, <code>ExampleGeofence-1</code>.</p>
   */
  GeofenceId: string | undefined;

  /**
   * @public
   * <p>Contains the details to specify the position of the geofence. Can be either a
   *             polygon or a circle. Including both will return a validation error.</p>
   *          <note>
   *             <p>Each <a href="https://docs.aws.amazon.com/location-geofences/latest/APIReference/API_GeofenceGeometry.html">
   *                 geofence polygon</a> can have a maximum of 1,000 vertices.</p>
   *          </note>
   */
  Geometry: GeofenceGeometry | undefined;

  /**
   * @public
   * <p>Associates one of more properties with the geofence. A property is a key-value
   *             pair stored with the geofence and added to any geofence event triggered with that
   *             geofence.</p>
   *          <p>Format: <code>"key" : "value"</code>
   *          </p>
   */
  GeofenceProperties?: Record<string, string>;
}

/**
 * @public
 */
export interface PutGeofenceResponse {
  /**
   * @public
   * <p>The geofence identifier entered in the request.</p>
   */
  GeofenceId: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the geofence was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the geofence was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateGeofenceCollectionRequest {
  /**
   * @public
   * <p>The name of the geofence collection to update.</p>
   */
  CollectionName: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. If included, the only allowed value is
   *             <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * @deprecated
   *
   * <p>This parameter is no longer used.</p>
   */
  PricingPlanDataSource?: string;

  /**
   * @public
   * <p>Updates the description for the geofence collection.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateGeofenceCollectionResponse {
  /**
   * @public
   * <p>The name of the updated geofence collection.</p>
   */
  CollectionName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated geofence collection. Used to specify a
   *             resource across Amazon Web Services.</p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                         <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CollectionArn: string | undefined;

  /**
   * @public
   * <p>The time when the geofence collection was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface GetDevicePositionRequest {
  /**
   * @public
   * <p>The tracker resource receiving the position update.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>The device whose position you want to retrieve.</p>
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface GetDevicePositionResponse {
  /**
   * @public
   * <p>The device whose position you retrieved.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The timestamp at which the device's position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601 </a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  SampleTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the tracker resource received the device position in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601 </a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  ReceivedTime: Date | undefined;

  /**
   * @public
   * <p>The last known device position.</p>
   */
  Position: number[] | undefined;

  /**
   * @public
   * <p>The accuracy of the device position.</p>
   */
  Accuracy?: PositionalAccuracy;

  /**
   * @public
   * <p>The properties associated with the position.</p>
   */
  PositionProperties?: Record<string, string>;
}

/**
 * @public
 */
export interface GetDevicePositionHistoryRequest {
  /**
   * @public
   * <p>The tracker resource receiving the request for the device position history.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>The device whose position history you want to retrieve.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page. </p>
   *          <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specify the start time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be 24 hours
   *             prior to the time that the request is made.</p>
   *          <p>Requirement:</p>
   *          <ul>
   *             <li>
   *                <p>The time specified for <code>StartTimeInclusive</code> must be before
   *                         <code>EndTimeExclusive</code>.</p>
   *             </li>
   *          </ul>
   */
  StartTimeInclusive?: Date;

  /**
   * @public
   * <p>Specify the end time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be the time
   *             that the request is made.</p>
   *          <p>Requirement:</p>
   *          <ul>
   *             <li>
   *                <p>The time specified for <code>EndTimeExclusive</code> must be after the time for
   *                         <code>StartTimeInclusive</code>.</p>
   *             </li>
   *          </ul>
   */
  EndTimeExclusive?: Date;

  /**
   * @public
   * <p>An optional limit for the number of device positions returned in a single call.</p>
   *          <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetDevicePositionHistoryResponse {
  /**
   * @public
   * <p>Contains the position history details for the requested device.</p>
   */
  DevicePositions: DevicePosition[] | undefined;

  /**
   * @public
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a following request to fetch the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetMapGlyphsRequest {
  /**
   * @public
   * <p>The map resource associated with the glyph ﬁle.</p>
   */
  MapName: string | undefined;

  /**
   * @public
   * <p>A comma-separated list of fonts to load glyphs from in order of preference. For
   *             example, <code>Noto Sans Regular, Arial Unicode</code>.</p>
   *          <p>Valid fonts stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a> styles: </p>
   *          <ul>
   *             <li>
   *                <p>VectorEsriDarkGrayCanvas – <code>Ubuntu Medium Italic</code> | <code>Ubuntu
   *                         Medium</code> | <code>Ubuntu Italic</code> | <code>Ubuntu Regular</code> |
   *                         <code>Ubuntu Bold</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>VectorEsriLightGrayCanvas – <code>Ubuntu Italic</code> | <code>Ubuntu
   *                         Regular</code> | <code>Ubuntu Light</code> | <code>Ubuntu Bold</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>VectorEsriTopographic – <code>Noto Sans Italic</code> | <code>Noto Sans
   *                         Regular</code> | <code>Noto Sans Bold</code> | <code>Noto Serif
   *                         Regular</code> | <code>Roboto Condensed Light Italic</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>VectorEsriStreets – <code>Arial Regular</code> | <code>Arial Italic</code> |
   *                         <code>Arial Bold</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>VectorEsriNavigation – <code>Arial Regular</code> | <code>Arial Italic</code>
   *                     | <code>Arial Bold</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Valid font stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a> styles:</p>
   *          <ul>
   *             <li>
   *                <p>VectorHereContrast – <code>Fira
   *                     GO Regular</code> | <code>Fira GO Bold</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>VectorHereExplore, VectorHereExploreTruck, HybridHereExploreSatellite –
   *                     <code>Fira GO Italic</code> | <code>Fira GO Map</code> |
   *                     <code>Fira GO Map Bold</code> | <code>Noto Sans CJK JP Bold</code> |
   *                     <code>Noto Sans CJK JP Light</code> |
   *                     <code>Noto Sans CJK JP Regular</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Valid font stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> styles:</p>
   *          <ul>
   *             <li>
   *                <p>VectorGrabStandardLight, VectorGrabStandardDark –
   *                     <code>Noto Sans Regular</code> |
   *                     <code>Noto Sans Medium</code> |
   *                     <code>Noto Sans Bold</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Valid font stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/open-data.html">Open Data</a> styles:</p>
   *          <ul>
   *             <li>
   *                <p>VectorOpenDataStandardLight, VectorOpenDataStandardDark,
   *                     VectorOpenDataVisualizationLight, VectorOpenDataVisualizationDark –
   *                     <code>Amazon Ember Regular,Noto Sans Regular</code> |
   *                     <code>Amazon Ember Bold,Noto Sans Bold</code> |
   *                     <code>Amazon Ember Medium,Noto Sans Medium</code> |
   *                     <code>Amazon Ember Regular Italic,Noto Sans Italic</code> |
   *                     <code>Amazon Ember Condensed RC Regular,Noto Sans Regular</code> |
   *                     <code>Amazon Ember Condensed RC Bold,Noto Sans Bold</code> |
   *                     <code>Amazon Ember Regular,Noto Sans Regular,Noto Sans Arabic Regular</code> |
   *                     <code>Amazon Ember Condensed RC Bold,Noto Sans Bold,Noto Sans Arabic
   *                         Condensed Bold</code> |
   *                     <code>Amazon Ember Bold,Noto Sans Bold,Noto Sans Arabic Bold</code> |
   *                     <code>Amazon Ember Regular Italic,Noto Sans Italic,Noto Sans Arabic
   *                         Regular</code> |
   *                     <code>Amazon Ember Condensed RC Regular,Noto Sans Regular,Noto Sans Arabic
   *                         Condensed Regular</code> |
   *                     <code>Amazon Ember Medium,Noto Sans Medium,Noto Sans Arabic Medium</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The fonts used by the Open Data map styles are combined fonts
   *                 that use <code>Amazon Ember</code> for most glyphs but <code>Noto Sans</code>
   *                 for glyphs unsupported by <code>Amazon Ember</code>.</p>
   *          </note>
   */
  FontStack: string | undefined;

  /**
   * @public
   * <p>A Unicode range of characters to download glyphs for. Each response will contain 256
   *             characters. For example, 0–255 includes all characters from range <code>U+0000</code> to
   *                 <code>00FF</code>. Must be aligned to multiples of 256.</p>
   */
  FontUnicodeRange: string | undefined;

  /**
   * @public
   * <p>The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize
   *             the request.</p>
   */
  Key?: string;
}

/**
 * @public
 */
export interface GetMapGlyphsResponse {
  /**
   * @public
   * <p>The glyph, as binary blob.</p>
   */
  Blob?: Uint8Array;

  /**
   * @public
   * <p>The map glyph content type. For example, <code>application/octet-stream</code>.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The HTTP Cache-Control directive for the value.</p>
   */
  CacheControl?: string;
}

/**
 * @public
 */
export interface GetMapSpritesRequest {
  /**
   * @public
   * <p>The map resource associated with the sprite ﬁle.</p>
   */
  MapName: string | undefined;

  /**
   * @public
   * <p>The name of the sprite ﬁle. Use the following ﬁle names for the sprite sheet:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>sprites.png</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sprites@2x.png</code> for high pixel density displays</p>
   *             </li>
   *          </ul>
   *          <p>For the JSON document containing image offsets. Use the following ﬁle names:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>sprites.json</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sprites@2x.json</code> for high pixel density displays</p>
   *             </li>
   *          </ul>
   */
  FileName: string | undefined;

  /**
   * @public
   * <p>The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize
   *             the request.</p>
   */
  Key?: string;
}

/**
 * @public
 */
export interface GetMapSpritesResponse {
  /**
   * @public
   * <p>Contains the body of the sprite sheet or JSON offset ﬁle.</p>
   */
  Blob?: Uint8Array;

  /**
   * @public
   * <p>The content type of the sprite sheet and offsets. For example, the sprite sheet
   *             content type is <code>image/png</code>, and the sprite offset JSON document is
   *                 <code>application/json</code>. </p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The HTTP Cache-Control directive for the value.</p>
   */
  CacheControl?: string;
}

/**
 * @public
 */
export interface GetMapStyleDescriptorRequest {
  /**
   * @public
   * <p>The map resource to retrieve the style descriptor from.</p>
   */
  MapName: string | undefined;

  /**
   * @public
   * <p>The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize
   *             the request.</p>
   */
  Key?: string;
}

/**
 * @public
 */
export interface GetMapStyleDescriptorResponse {
  /**
   * @public
   * <p>Contains the body of the style descriptor.</p>
   */
  Blob?: Uint8Array;

  /**
   * @public
   * <p>The style descriptor's content type. For example,
   *             <code>application/json</code>.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The HTTP Cache-Control directive for the value.</p>
   */
  CacheControl?: string;
}

/**
 * @public
 */
export interface GetMapTileRequest {
  /**
   * @public
   * <p>The map resource to retrieve the map tiles from.</p>
   */
  MapName: string | undefined;

  /**
   * @public
   * <p>The zoom value for the map tile.</p>
   */
  Z: string | undefined;

  /**
   * @public
   * <p>The X axis value for the map tile.</p>
   */
  X: string | undefined;

  /**
   * @public
   * <p>The Y axis value for the map tile. </p>
   */
  Y: string | undefined;

  /**
   * @public
   * <p>The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize
   *             the request.</p>
   */
  Key?: string;
}

/**
 * @public
 */
export interface GetMapTileResponse {
  /**
   * @public
   * <p>Contains Mapbox Vector Tile (MVT) data.</p>
   */
  Blob?: Uint8Array;

  /**
   * @public
   * <p>The map tile's content type. For example,
   *                 <code>application/vnd.mapbox-vector-tile</code>.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The HTTP Cache-Control directive for the value.</p>
   */
  CacheControl?: string;
}

/**
 * @public
 */
export interface GetPlaceRequest {
  /**
   * @public
   * <p>The name of the place index resource that you want to use for the search.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>The identifier of the place to find.</p>
   */
  PlaceId: string | undefined;

  /**
   * @public
   * <p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example,
   *                 <code>en</code> for English.</p>
   *          <p>This setting affects the languages used in the results, but not the results
   *             themselves. If no language is specified, or not supported for a particular result, the
   *             partner automatically chooses a language for the result.</p>
   *          <p>For an example, we'll use the Greek language. You search for a location around Athens,
   *             Greece, with the <code>language</code> parameter set to <code>en</code>. The
   *                 <code>city</code> in the results will most likely be returned as
   *             <code>Athens</code>.</p>
   *          <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the
   *                 <code>city</code> in the results will more likely be returned as
   *             <code>Αθήνα</code>.</p>
   *          <p>If the data provider does not have a value for Greek, the result will be in a language
   *             that the provider does support.</p>
   */
  Language?: string;

  /**
   * @public
   * <p>The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize
   *             the request.</p>
   */
  Key?: string;
}

/**
 * @public
 * <p>Places uses a point geometry to specify a location or a Place.</p>
 */
export interface PlaceGeometry {
  /**
   * @public
   * <p>A single point geometry specifies a location for a Place using <a href="https://gisgeography.com/wgs84-world-geodetic-system/">WGS 84</a>
   *             coordinates:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>x</i> — Specifies the x coordinate or longitude. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>y</i> — Specifies the y coordinate or latitude. </p>
   *             </li>
   *          </ul>
   */
  Point?: number[];
}

/**
 * @public
 * <p>Information about a time zone. Includes the name of the time zone and the offset from
 *             UTC in seconds.</p>
 */
export interface TimeZone {
  /**
   * @public
   * <p>The name of the time zone, following the <a href="https://www.iana.org/time-zones">
   *                 IANA time zone standard</a>. For example,
   *             <code>America/Los_Angeles</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The time zone's offset, in seconds, from UTC.</p>
   */
  Offset?: number;
}

/**
 * @public
 * <p>Contains details about addresses or points of interest that match the search
 *             criteria.</p>
 *          <p>Not all details are included with all responses. Some details may only be returned by
 *             specific data partners.</p>
 */
export interface Place {
  /**
   * @public
   * <p>The full name and address of the point of interest such as a city, region, or country.
   *             For example, <code>123 Any Street, Any Town, USA</code>.</p>
   */
  Label?: string;

  /**
   * @public
   * <p>Places uses a point geometry to specify a location or a Place.</p>
   */
  Geometry: PlaceGeometry | undefined;

  /**
   * @public
   * <p>The numerical portion of an address, such as a building number. </p>
   */
  AddressNumber?: string;

  /**
   * @public
   * <p>The name for a street or a road to identify a location. For example, <code>Main
   *                 Street</code>.</p>
   */
  Street?: string;

  /**
   * @public
   * <p>The name of a community district. For example, <code>Downtown</code>.</p>
   */
  Neighborhood?: string;

  /**
   * @public
   * <p>A name for a local area, such as a city or town name. For example,
   *                 <code>Toronto</code>.</p>
   */
  Municipality?: string;

  /**
   * @public
   * <p>A county, or an area that's part of a larger region. For example, <code>Metro
   *                 Vancouver</code>.</p>
   */
  SubRegion?: string;

  /**
   * @public
   * <p>A name for an area or geographical division, such as a province or state name. For
   *             example, <code>British Columbia</code>.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>A country/region specified using <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit
   *             country/region code. For example, <code>CAN</code>.</p>
   */
  Country?: string;

  /**
   * @public
   * <p>A group of numbers and letters in a country-specific format, which accompanies the
   *             address for the purpose of identifying a location. </p>
   */
  PostalCode?: string;

  /**
   * @public
   * <p>
   *             <code>True</code> if the result is interpolated from other known places.</p>
   *          <p>
   *             <code>False</code> if the Place is a known place.</p>
   *          <p>Not returned when the partner does not provide the information.</p>
   *          <p>For example, returns <code>False</code> for an address location that is found in the
   *             partner data, but returns <code>True</code> if an address does not exist in the partner
   *             data and its location is calculated by interpolating between other known addresses.
   *         </p>
   */
  Interpolated?: boolean;

  /**
   * @public
   * <p>The time zone in which the <code>Place</code> is located. Returned only when using
   *             HERE or Grab as the selected partner.</p>
   */
  TimeZone?: TimeZone;

  /**
   * @public
   * <p>For addresses with a <code>UnitNumber</code>, the type of unit. For example,
   *                 <code>Apartment</code>.</p>
   *          <note>
   *             <p>Returned only for a place index that uses Esri as a data provider.</p>
   *          </note>
   */
  UnitType?: string;

  /**
   * @public
   * <p>For addresses with multiple units, the unit identifier. Can include numbers and
   *             letters, for example <code>3B</code> or <code>Unit 123</code>.</p>
   *          <note>
   *             <p>Returned only for a place index that uses Esri or Grab as a data provider. Is
   *                 not returned for <code>SearchPlaceIndexForPosition</code>.</p>
   *          </note>
   */
  UnitNumber?: string;

  /**
   * @public
   * <p>The Amazon Location categories that describe this Place.</p>
   *          <p>For more information about using categories, including a list of Amazon Location
   *             categories, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/category-filtering.html">Categories and filtering</a>, in the <i>Amazon Location Service Developer
   *                 Guide</i>.</p>
   */
  Categories?: string[];

  /**
   * @public
   * <p>Categories from the data provider that describe the Place that are not mapped
   *             to any Amazon Location categories.</p>
   */
  SupplementalCategories?: string[];
}

/**
 * @public
 */
export interface GetPlaceResponse {
  /**
   * @public
   * <p>Details about the result, such as its address and position.</p>
   */
  Place: Place | undefined;
}

/**
 * @public
 */
export interface ListDevicePositionsRequest {
  /**
   * @public
   * <p>The tracker resource containing the requested devices.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>An optional limit for the number of entries returned in a single call.</p>
   *          <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page.</p>
   *          <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the tracker resource details.</p>
 */
export interface ListDevicePositionsResponseEntry {
  /**
   * @public
   * <p>The ID of the device for this position.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The timestamp at which the device position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  SampleTime: Date | undefined;

  /**
   * @public
   * <p>The last known device position. Empty if no positions currently stored.</p>
   */
  Position: number[] | undefined;

  /**
   * @public
   * <p>The accuracy of the device position.</p>
   */
  Accuracy?: PositionalAccuracy;

  /**
   * @public
   * <p>The properties associated with the position.</p>
   */
  PositionProperties?: Record<string, string>;
}

/**
 * @public
 */
export interface ListDevicePositionsResponse {
  /**
   * @public
   * <p>Contains details about each device's last known position. These details includes the device ID,
   *             the time when the position was sampled on the device, the time that the service received the update, and the most recent coordinates.</p>
   */
  Entries: ListDevicePositionsResponseEntry[] | undefined;

  /**
   * @public
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a following request to fetch the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMapsRequest {
  /**
   * @public
   * <p>An optional limit for the number of resources returned in a single call. </p>
   *          <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page.</p>
   *          <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains details of an existing map resource in your Amazon Web Services account.</p>
 */
export interface ListMapsResponseEntry {
  /**
   * @public
   * <p>The name of the associated map resource.</p>
   */
  MapName: string | undefined;

  /**
   * @public
   * <p>The description for the map resource.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>Specifies the data provider for the associated map tiles.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. Always returns <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>The timestamp for when the map resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the map resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListMapsResponse {
  /**
   * @public
   * <p>Contains a list of maps in your Amazon Web Services account</p>
   */
  Entries: ListMapsResponseEntry[] | undefined;

  /**
   * @public
   * <p>A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPlaceIndexesRequest {
  /**
   * @public
   * <p>An optional limit for the maximum number of results returned in a single call.</p>
   *          <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page.</p>
   *          <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A place index resource listed in your Amazon Web Services account.</p>
 */
export interface ListPlaceIndexesResponseEntry {
  /**
   * @public
   * <p>The name of the place index resource.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>The optional description for the place index resource.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The data provider of geospatial data. Values can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Esri</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Grab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Here</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. Always returns <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>The timestamp for when the place index resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the place index resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPlaceIndexesResponse {
  /**
   * @public
   * <p>Lists the place index resources that exist in your Amazon Web Services account</p>
   */
  Entries: ListPlaceIndexesResponseEntry[] | undefined;

  /**
   * @public
   * <p>A pagination token indicating that there are additional pages available. You can use
   *             the token in a new request to fetch the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRouteCalculatorsRequest {
  /**
   * @public
   * <p>An optional maximum number of results returned in a single call.</p>
   *          <p>Default Value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page.</p>
   *          <p>Default Value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A route calculator resource listed in your Amazon Web Services account.</p>
 */
export interface ListRouteCalculatorsResponseEntry {
  /**
   * @public
   * <p>The name of the route calculator resource.</p>
   */
  CalculatorName: string | undefined;

  /**
   * @public
   * <p>The optional description of the route calculator resource.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The data provider of traffic and road network data. Indicates one of the available
   *             providers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Esri</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Grab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Here</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>Always returns <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>The timestamp when the route calculator resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   *          <ul>
   *             <li>
   *                <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp when the route calculator resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   *          <ul>
   *             <li>
   *                <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListRouteCalculatorsResponse {
  /**
   * @public
   * <p>Lists the route calculator resources that exist in your Amazon Web Services account</p>
   */
  Entries: ListRouteCalculatorsResponseEntry[] | undefined;

  /**
   * @public
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a subsequent request to fetch the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTrackerConsumersRequest {
  /**
   * @public
   * <p>The tracker resource whose associated geofence collections you want to list.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>An optional limit for the number of resources returned in a single call. </p>
   *          <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page. </p>
   *          <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTrackerConsumersResponse {
  /**
   * @public
   * <p>Contains the list of geofence collection ARNs associated to the tracker resource.</p>
   */
  ConsumerArns: string[] | undefined;

  /**
   * @public
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a following request to fetch the next set of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTrackersRequest {
  /**
   * @public
   * <p>An optional limit for the number of resources returned in a single call. </p>
   *          <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page. </p>
   *          <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the tracker resource details.</p>
 */
export interface ListTrackersResponseEntry {
  /**
   * @public
   * <p>The name of the tracker resource.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>The description for the tracker resource.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>Always returns <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. Always returns an empty string.</p>
   */
  PricingPlanDataSource?: string;

  /**
   * @public
   * <p>The timestamp for when the tracker resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp at which the device's position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListTrackersResponse {
  /**
   * @public
   * <p>Contains tracker resources in your Amazon Web Services account. Details include tracker name,
   *             description and timestamps for when the tracker was created and last updated.</p>
   */
  Entries: ListTrackersResponseEntry[] | undefined;

  /**
   * @public
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a following request to fetch the next set of results.  </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Specifies the political view for the style.</p>
 */
export interface MapConfigurationUpdate {
  /**
   * @public
   * <p>Specifies the political view for the style. Set to an empty string to not use a
   *             political view, or, for styles that support specific political views, you can choose a
   *             view, such as <code>IND</code> for the Indian view.</p>
   *          <note>
   *             <p>Not all map resources or styles support political view styles. See
   *                 <a href="https://docs.aws.amazon.com/location/latest/developerguide/map-concepts.html#political-views">Political
   *                     views</a>
   *                 for more information.</p>
   *          </note>
   */
  PoliticalView?: string;
}

/**
 * @public
 */
export interface UpdateMapRequest {
  /**
   * @public
   * <p>The name of the map resource to update.</p>
   */
  MapName: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. If included, the only allowed value is
   *             <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>Updates the description for the map resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Updates the parts of the map configuration that can be updated, including the
   *             political view.</p>
   */
  ConfigurationUpdate?: MapConfigurationUpdate;
}

/**
 * @public
 */
export interface UpdateMapResponse {
  /**
   * @public
   * <p>The name of the updated map resource.</p>
   */
  MapName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated map resource. Used to specify a resource
   *             across AWS.</p>
   *          <ul>
   *             <li>
   *                <p>Format example: <code>arn:aws:geo:region:account-id:map/ExampleMap</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  MapArn: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the map resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface SearchPlaceIndexForPositionRequest {
  /**
   * @public
   * <p>The name of the place index resource you want to use for the search.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>Specifies the longitude and latitude of the position to query.</p>
   *          <p> This parameter must contain a pair of numbers. The first number represents the X
   *             coordinate, or longitude; the second number represents the Y coordinate, or
   *             latitude.</p>
   *          <p>For example, <code>[-123.1174, 49.2847]</code> represents a position with longitude
   *                 <code>-123.1174</code> and latitude <code>49.2847</code>.</p>
   */
  Position: number[] | undefined;

  /**
   * @public
   * <p>An optional parameter. The maximum number of results returned per request.</p>
   *          <p>Default value: <code>50</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example,
   *                 <code>en</code> for English.</p>
   *          <p>This setting affects the languages used in the results, but not the results
   *             themselves. If no language is specified, or not supported for a particular result, the
   *             partner automatically chooses a language for the result.</p>
   *          <p>For an example, we'll use the Greek language. You search for a location around Athens,
   *             Greece, with the <code>language</code> parameter set to <code>en</code>. The
   *                 <code>city</code> in the results will most likely be returned as
   *             <code>Athens</code>.</p>
   *          <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the
   *                 <code>city</code> in the results will more likely be returned as
   *             <code>Αθήνα</code>.</p>
   *          <p>If the data provider does not have a value for Greek, the result will be in a language
   *             that the provider does support.</p>
   */
  Language?: string;

  /**
   * @public
   * <p>The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize
   *             the request.</p>
   */
  Key?: string;
}

/**
 * @public
 * <p>Contains a search result from a position search query that is run on a place index
 *             resource.</p>
 */
export interface SearchForPositionResult {
  /**
   * @public
   * <p>Details about the search result, such as its address and position.</p>
   */
  Place: Place | undefined;

  /**
   * @public
   * <p>The distance in meters of a great-circle arc between the query position and the
   *             result.</p>
   *          <note>
   *             <p>A great-circle arc is the shortest path on a sphere, in this case the Earth. This
   *                 returns the shortest distance between two locations.</p>
   *          </note>
   */
  Distance: number | undefined;

  /**
   * @public
   * <p>The unique identifier of the place. You can use this with the <code>GetPlace</code>
   *             operation to find the place again later.</p>
   *          <note>
   *             <p>For <code>SearchPlaceIndexForPosition</code> operations, the <code>PlaceId</code>
   *                 is returned only by place indexes that use HERE or Grab as a data provider.</p>
   *          </note>
   */
  PlaceId?: string;
}

/**
 * @public
 * <p>A summary of the request sent by using
 *             <code>SearchPlaceIndexForPosition</code>.</p>
 */
export interface SearchPlaceIndexForPositionSummary {
  /**
   * @public
   * <p>The position specified in the request.</p>
   */
  Position: number[] | undefined;

  /**
   * @public
   * <p>Contains the optional result count limit that is specified in the request.</p>
   *          <p>Default value: <code>50</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The geospatial data provider attached to the place index resource specified in the
   *             request. Values can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Esri</p>
   *             </li>
   *             <li>
   *                <p>Grab</p>
   *             </li>
   *             <li>
   *                <p>Here</p>
   *             </li>
   *          </ul>
   *          <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * <p>The preferred language used to return results. Matches the language in the request.
   *             The value is a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a>
   *             language tag, for example, <code>en</code> for English.</p>
   */
  Language?: string;
}

/**
 * @public
 */
export interface SearchPlaceIndexForPositionResponse {
  /**
   * @public
   * <p>Contains a summary of the request. Echoes the input values for <code>Position</code>,
   *                 <code>Language</code>, <code>MaxResults</code>, and the <code>DataSource</code> of
   *             the place index. </p>
   */
  Summary: SearchPlaceIndexForPositionSummary | undefined;

  /**
   * @public
   * <p>Returns a list of Places closest to the specified position. Each result contains
   *             additional information about the Places returned.</p>
   */
  Results: SearchForPositionResult[] | undefined;
}

/**
 * @public
 */
export interface SearchPlaceIndexForSuggestionsRequest {
  /**
   * @public
   * <p>The name of the place index resource you want to use for the search.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>The free-form partial text to use to generate place suggestions. For example,
   *                 <code>eiffel tow</code>.</p>
   */
  Text: string | undefined;

  /**
   * @public
   * <p>An optional parameter that indicates a preference for place suggestions that are
   *             closer to a specified position.</p>
   *          <p> If provided, this parameter must contain a pair of numbers. The first number
   *             represents the X coordinate, or longitude; the second number represents the Y
   *             coordinate, or latitude.</p>
   *          <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude
   *                 <code>-123.1174</code> and latitude <code>49.2847</code>.</p>
   *          <note>
   *             <p>
   *                <code>BiasPosition</code> and <code>FilterBBox</code> are mutually exclusive.
   *                 Specifying both options results in an error. </p>
   *          </note>
   */
  BiasPosition?: number[];

  /**
   * @public
   * <p>An optional parameter that limits the search results by returning only suggestions
   *             within a specified bounding box.</p>
   *          <p> If provided, this parameter must contain a total of four consecutive numbers in two
   *             pairs. The first pair of numbers represents the X and Y coordinates (longitude and
   *             latitude, respectively) of the southwest corner of the bounding box; the second pair of
   *             numbers represents the X and Y coordinates (longitude and latitude, respectively) of the
   *             northeast corner of the bounding box.</p>
   *          <p>For example, <code>[-12.7935, -37.4835, -12.0684, -36.9542]</code> represents a
   *             bounding box where the southwest corner has longitude <code>-12.7935</code> and latitude
   *                 <code>-37.4835</code>, and the northeast corner has longitude <code>-12.0684</code>
   *             and latitude <code>-36.9542</code>.</p>
   *          <note>
   *             <p>
   *                <code>FilterBBox</code> and <code>BiasPosition</code> are mutually exclusive.
   *                 Specifying both options results in an error. </p>
   *          </note>
   */
  FilterBBox?: number[];

  /**
   * @public
   * <p>An optional parameter that limits the search results by returning only suggestions
   *             within the provided list of countries.</p>
   *          <ul>
   *             <li>
   *                <p>Use the <a href="https://www.iso.org/iso-3166-country-codes.html">ISO
   *                         3166</a> 3-digit country code. For example, Australia uses three
   *                     upper-case characters: <code>AUS</code>.</p>
   *             </li>
   *          </ul>
   */
  FilterCountries?: string[];

  /**
   * @public
   * <p>An optional parameter. The maximum number of results returned per request. </p>
   *          <p>The default: <code>5</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example,
   *                 <code>en</code> for English.</p>
   *          <p>This setting affects the languages used in the results. If no language is specified,
   *             or not supported for a particular result, the partner automatically chooses a language
   *             for the result.</p>
   *          <p>For an example, we'll use the Greek language. You search for <code>Athens, Gr</code>
   *             to get suggestions with the <code>language</code> parameter set to <code>en</code>. The
   *             results found will most likely be returned as <code>Athens, Greece</code>.</p>
   *          <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the
   *             result found will more likely be returned as <code>Αθήνα, Ελλάδα</code>.</p>
   *          <p>If the data provider does not have a value for Greek, the result will be in a language
   *             that the provider does support.</p>
   */
  Language?: string;

  /**
   * @public
   * <p>A list of one or more Amazon Location categories to filter the returned places. If you
   *             include more than one category, the results will include results that match
   *             <i>any</i> of the categories listed.</p>
   *          <p>For more information about using categories, including a list of Amazon Location
   *             categories, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/category-filtering.html">Categories and filtering</a>, in the <i>Amazon Location Service Developer
   *                     Guide</i>.</p>
   */
  FilterCategories?: string[];

  /**
   * @public
   * <p>The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize
   *             the request.</p>
   */
  Key?: string;
}

/**
 * @public
 * <p>Contains a place suggestion resulting from a place suggestion query that is run on a
 *             place index resource.</p>
 */
export interface SearchForSuggestionsResult {
  /**
   * @public
   * <p>The text of the place suggestion, typically formatted as an address string.</p>
   */
  Text: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the Place. You can use this with the <code>GetPlace</code>
   *             operation to find the place again later, or to get full information for the Place.</p>
   *          <p>The <code>GetPlace</code> request must use the same <code>PlaceIndex</code>
   *             resource as the <code>SearchPlaceIndexForSuggestions</code> that generated the Place
   *             ID.</p>
   *          <note>
   *             <p>For <code>SearchPlaceIndexForSuggestions</code> operations, the
   *                     <code>PlaceId</code> is returned by place indexes that use Esri, Grab, or HERE
   *                 as data providers.</p>
   *          </note>
   */
  PlaceId?: string;

  /**
   * @public
   * <p>The Amazon Location categories that describe the Place.</p>
   *          <p>For more information about using categories, including a list of Amazon Location
   *             categories, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/category-filtering.html">Categories and filtering</a>, in the <i>Amazon Location Service Developer
   *                     Guide</i>.</p>
   */
  Categories?: string[];

  /**
   * @public
   * <p>Categories from the data provider that describe the Place that are not mapped
   *             to any Amazon Location categories.</p>
   */
  SupplementalCategories?: string[];
}

/**
 * @public
 * <p>A summary of the request sent by using
 *             <code>SearchPlaceIndexForSuggestions</code>.</p>
 */
export interface SearchPlaceIndexForSuggestionsSummary {
  /**
   * @public
   * <p>The free-form partial text input specified in the request.</p>
   */
  Text: string | undefined;

  /**
   * @public
   * <p>Contains the coordinates for the optional bias position specified in the
   *             request.</p>
   *          <p>This parameter contains a pair of numbers. The first number represents the X
   *             coordinate, or longitude; the second number represents the Y coordinate, or
   *             latitude.</p>
   *          <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude
   *                 <code>-123.1174</code> and latitude <code>49.2847</code>.</p>
   */
  BiasPosition?: number[];

  /**
   * @public
   * <p>Contains the coordinates for the optional bounding box specified in the
   *             request.</p>
   */
  FilterBBox?: number[];

  /**
   * @public
   * <p>Contains the optional country filter specified in the request.</p>
   */
  FilterCountries?: string[];

  /**
   * @public
   * <p>Contains the optional result count limit specified in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The geospatial data provider attached to the place index resource specified in the
   *             request. Values can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Esri</p>
   *             </li>
   *             <li>
   *                <p>Grab</p>
   *             </li>
   *             <li>
   *                <p>Here</p>
   *             </li>
   *          </ul>
   *          <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * <p>The preferred language used to return results. Matches the language in the request.
   *             The value is a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a>
   *             language tag, for example, <code>en</code> for English.</p>
   */
  Language?: string;

  /**
   * @public
   * <p>The optional category filter specified in the request.</p>
   */
  FilterCategories?: string[];
}

/**
 * @public
 */
export interface SearchPlaceIndexForSuggestionsResponse {
  /**
   * @public
   * <p>Contains a summary of the request. Echoes the input values for
   *                 <code>BiasPosition</code>, <code>FilterBBox</code>, <code>FilterCountries</code>,
   *                 <code>Language</code>, <code>MaxResults</code>, and <code>Text</code>. Also includes
   *             the <code>DataSource</code> of the place index. </p>
   */
  Summary: SearchPlaceIndexForSuggestionsSummary | undefined;

  /**
   * @public
   * <p>A list of place suggestions that best match the search text.</p>
   */
  Results: SearchForSuggestionsResult[] | undefined;
}

/**
 * @public
 */
export interface SearchPlaceIndexForTextRequest {
  /**
   * @public
   * <p>The name of the place index resource you want to use for the search.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>The address, name, city, or region to be used in the search in free-form text format.
   *             For example, <code>123 Any Street</code>.</p>
   */
  Text: string | undefined;

  /**
   * @public
   * <p>An optional parameter that indicates a preference for places that are closer to a
   *             specified position.</p>
   *          <p> If provided, this parameter must contain a pair of numbers. The first number
   *             represents the X coordinate, or longitude; the second number represents the Y
   *             coordinate, or latitude.</p>
   *          <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude
   *                 <code>-123.1174</code> and latitude <code>49.2847</code>.</p>
   *          <note>
   *             <p>
   *                <code>BiasPosition</code> and <code>FilterBBox</code> are mutually exclusive.
   *                 Specifying both options results in an error. </p>
   *          </note>
   */
  BiasPosition?: number[];

  /**
   * @public
   * <p>An optional parameter that limits the search results by returning only places that are
   *             within the provided bounding box.</p>
   *          <p> If provided, this parameter must contain a total of four consecutive numbers in two
   *             pairs. The first pair of numbers represents the X and Y coordinates (longitude and
   *             latitude, respectively) of the southwest corner of the bounding box; the second pair of
   *             numbers represents the X and Y coordinates (longitude and latitude, respectively) of the
   *             northeast corner of the bounding box.</p>
   *          <p>For example, <code>[-12.7935, -37.4835, -12.0684, -36.9542]</code> represents a
   *             bounding box where the southwest corner has longitude <code>-12.7935</code> and latitude
   *                 <code>-37.4835</code>, and the northeast corner has longitude <code>-12.0684</code>
   *             and latitude <code>-36.9542</code>.</p>
   *          <note>
   *             <p>
   *                <code>FilterBBox</code> and <code>BiasPosition</code> are mutually exclusive.
   *                 Specifying both options results in an error. </p>
   *          </note>
   */
  FilterBBox?: number[];

  /**
   * @public
   * <p>An optional parameter that limits the search results by returning only places that are
   *             in a specified list of countries.</p>
   *          <ul>
   *             <li>
   *                <p>Valid values include <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a>
   *                     3-digit country codes. For example, Australia uses three upper-case characters:
   *                         <code>AUS</code>.</p>
   *             </li>
   *          </ul>
   */
  FilterCountries?: string[];

  /**
   * @public
   * <p>An optional parameter. The maximum number of results returned per request. </p>
   *          <p>The default: <code>50</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example,
   *                 <code>en</code> for English.</p>
   *          <p>This setting affects the languages used in the results, but not the results
   *             themselves. If no language is specified, or not supported for a particular result, the
   *             partner automatically chooses a language for the result.</p>
   *          <p>For an example, we'll use the Greek language. You search for <code>Athens,
   *                 Greece</code>, with the <code>language</code> parameter set to <code>en</code>. The
   *             result found will most likely be returned as <code>Athens</code>.</p>
   *          <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the
   *             result found will more likely be returned as <code>Αθήνα</code>.</p>
   *          <p>If the data provider does not have a value for Greek, the result will be in a language
   *             that the provider does support.</p>
   */
  Language?: string;

  /**
   * @public
   * <p>A list of one or more Amazon Location categories to filter the returned places. If you
   *             include more than one category, the results will include results that match
   *             <i>any</i> of the categories listed.</p>
   *          <p>For more information about using categories, including a list of Amazon Location
   *             categories, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/category-filtering.html">Categories and filtering</a>, in the <i>Amazon Location Service Developer
   *                     Guide</i>.</p>
   */
  FilterCategories?: string[];

  /**
   * @public
   * <p>The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize
   *             the request.</p>
   */
  Key?: string;
}

/**
 * @public
 * <p>Contains a search result from a text search query that is run on a place index
 *             resource.</p>
 */
export interface SearchForTextResult {
  /**
   * @public
   * <p>Details about the search result, such as its address and position.</p>
   */
  Place: Place | undefined;

  /**
   * @public
   * <p>The distance in meters of a great-circle arc between the bias position specified and
   *             the result. <code>Distance</code> will be returned only if a bias position was specified
   *             in the query.</p>
   *          <note>
   *             <p>A great-circle arc is the shortest path on a sphere, in this case the Earth. This
   *                 returns the shortest distance between two locations.</p>
   *          </note>
   */
  Distance?: number;

  /**
   * @public
   * <p>The relative confidence in the match for a result among the results returned. For
   *             example, if more fields for an address match (including house number, street, city,
   *             country/region, and postal code), the relevance score is closer to 1.</p>
   *          <p>Returned only when the partner selected is Esri or Grab.</p>
   */
  Relevance?: number;

  /**
   * @public
   * <p>The unique identifier of the place. You can use this with the <code>GetPlace</code>
   *             operation to find the place again later.</p>
   *          <note>
   *             <p>For <code>SearchPlaceIndexForText</code> operations, the <code>PlaceId</code> is
   *                 returned only by place indexes that use HERE or Grab as a data provider.</p>
   *          </note>
   */
  PlaceId?: string;
}

/**
 * @public
 * <p>A summary of the request sent by using <code>SearchPlaceIndexForText</code>.</p>
 */
export interface SearchPlaceIndexForTextSummary {
  /**
   * @public
   * <p>The search text specified in the request.</p>
   */
  Text: string | undefined;

  /**
   * @public
   * <p>Contains the coordinates for the optional bias position specified in the
   *             request.</p>
   *          <p>This parameter contains a pair of numbers. The first number represents the X
   *             coordinate, or longitude; the second number represents the Y coordinate, or
   *             latitude.</p>
   *          <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude
   *                 <code>-123.1174</code> and latitude <code>49.2847</code>.</p>
   */
  BiasPosition?: number[];

  /**
   * @public
   * <p>Contains the coordinates for the optional bounding box specified in the
   *             request.</p>
   */
  FilterBBox?: number[];

  /**
   * @public
   * <p>Contains the optional country filter specified in the request.</p>
   */
  FilterCountries?: string[];

  /**
   * @public
   * <p>Contains the optional result count limit specified in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The bounding box that fully contains all search results.</p>
   *          <note>
   *             <p>If you specified the optional <code>FilterBBox</code> parameter in the request,
   *                     <code>ResultBBox</code> is contained within <code>FilterBBox</code>.</p>
   *          </note>
   */
  ResultBBox?: number[];

  /**
   * @public
   * <p>The geospatial data provider attached to the place index resource specified in the
   *             request. Values can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Esri</p>
   *             </li>
   *             <li>
   *                <p>Grab</p>
   *             </li>
   *             <li>
   *                <p>Here</p>
   *             </li>
   *          </ul>
   *          <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>
   */
  DataSource: string | undefined;

  /**
   * @public
   * <p>The preferred language used to return results. Matches the language in the request.
   *             The value is a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a>
   *             language tag, for example, <code>en</code> for English.</p>
   */
  Language?: string;

  /**
   * @public
   * <p>The optional category filter specified in the request.</p>
   */
  FilterCategories?: string[];
}

/**
 * @public
 */
export interface SearchPlaceIndexForTextResponse {
  /**
   * @public
   * <p>Contains a summary of the request. Echoes the input values for
   *                 <code>BiasPosition</code>, <code>FilterBBox</code>, <code>FilterCountries</code>,
   *                 <code>Language</code>, <code>MaxResults</code>, and <code>Text</code>. Also includes
   *             the <code>DataSource</code> of the place index and the bounding box,
   *                 <code>ResultBBox</code>, which surrounds the search results. </p>
   */
  Summary: SearchPlaceIndexForTextSummary | undefined;

  /**
   * @public
   * <p>A list of Places matching the input text. Each result contains additional information
   *             about the specific point of interest. </p>
   *          <p>Not all response properties are included with all responses. Some properties may only
   *             be returned by specific data partners.</p>
   */
  Results: SearchForTextResult[] | undefined;
}

/**
 * @public
 */
export interface UpdatePlaceIndexRequest {
  /**
   * @public
   * <p>The name of the place index resource to update.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. If included, the only allowed value is
   *             <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>Updates the description for the place index resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Updates the data storage option for the place index resource.</p>
   */
  DataSourceConfiguration?: DataSourceConfiguration;
}

/**
 * @public
 */
export interface UpdatePlaceIndexResponse {
  /**
   * @public
   * <p>The name of the updated place index resource.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the upated place index resource. Used to specify a
   *             resource across Amazon Web Services.</p>
   *          <ul>
   *             <li>
   *                <p>Format example: <code>arn:aws:geo:region:account-id:place-
   *                         index/ExamplePlaceIndex</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  IndexArn: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the place index resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateRouteCalculatorRequest {
  /**
   * @public
   * <p>The name of the route calculator resource to update.</p>
   */
  CalculatorName: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. If included, the only allowed value is
   *             <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * <p>Updates the description for the route calculator resource.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateRouteCalculatorResponse {
  /**
   * @public
   * <p>The name of the updated route calculator resource.</p>
   */
  CalculatorName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated route calculator resource. Used to
   *             specify a resource across AWS.</p>
   *          <ul>
   *             <li>
   *                <p>Format example: <code>arn:aws:geo:region:account-id:route-
   *                         calculator/ExampleCalculator</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CalculatorArn: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the route calculator was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateTrackerRequest {
  /**
   * @public
   * <p>The name of the tracker resource to update.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>No longer used. If included, the only allowed value is
   *             <code>RequestBasedUsage</code>.</p>
   */
  PricingPlan?: PricingPlan | string;

  /**
   * @public
   * @deprecated
   *
   * <p>This parameter is no longer used.</p>
   */
  PricingPlanDataSource?: string;

  /**
   * @public
   * <p>Updates the description for the tracker resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Updates the position filtering for the tracker resource.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TimeBased</code> - Location updates are evaluated against linked geofence collections,
   *                     but not every location update is stored. If your update frequency is more often than 30 seconds,
   *                     only one update per 30 seconds is stored for each unique device ID.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DistanceBased</code> - If the device has moved less than 30 m (98.4 ft), location updates are
   *                     ignored. Location updates within this distance are neither evaluated against linked geofence collections, nor stored.
   *                     This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through.
   *                     Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AccuracyBased</code> - If the device has moved less than the measured accuracy,
   *                     location updates are ignored. For example, if two consecutive updates from a device
   *                     have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device
   *                     has moved less than 15 m. Ignored location updates are neither evaluated against
   *                     linked geofence collections, nor stored. This helps educe the effects of GPS noise
   *                     when displaying device trajectories on a map, and can help control costs by reducing the
   *                     number of geofence evaluations.
   *                 </p>
   *             </li>
   *          </ul>
   */
  PositionFiltering?: PositionFiltering | string;

  /**
   * @public
   * <p>Whether to enable position <code>UPDATE</code> events from this tracker to be sent to
   *             EventBridge.</p>
   *          <note>
   *             <p>You do not need enable this feature to get <code>ENTER</code> and
   *                 <code>EXIT</code> events for geofences with this tracker. Those events are
   *                 always sent to EventBridge.</p>
   *          </note>
   */
  EventBridgeEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdateTrackerResponse {
  /**
   * @public
   * <p>The name of the updated tracker resource.</p>
   */
  TrackerName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated tracker resource. Used to specify a resource across
   *             AWS.</p>
   *          <ul>
   *             <li>
   *                <p>Format example: <code>arn:aws:geo:region:account-id:tracker/ExampleTracker</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  TrackerArn: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the tracker resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;
}

/**
 * @internal
 */
export const CreateKeyResponseFilterSensitiveLog = (obj: CreateKeyResponse): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeKeyResponseFilterSensitiveLog = (obj: DescribeKeyResponse): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DevicePositionUpdateFilterSensitiveLog = (obj: DevicePositionUpdate): any => ({
  ...obj,
  ...(obj.Position && { Position: SENSITIVE_STRING }),
  ...(obj.PositionProperties && { PositionProperties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchEvaluateGeofencesRequestFilterSensitiveLog = (obj: BatchEvaluateGeofencesRequest): any => ({
  ...obj,
  ...(obj.DevicePositionUpdates && {
    DevicePositionUpdates: obj.DevicePositionUpdates.map((item) => DevicePositionUpdateFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DevicePositionFilterSensitiveLog = (obj: DevicePosition): any => ({
  ...obj,
  ...(obj.Position && { Position: SENSITIVE_STRING }),
  ...(obj.PositionProperties && { PositionProperties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchGetDevicePositionResponseFilterSensitiveLog = (obj: BatchGetDevicePositionResponse): any => ({
  ...obj,
  ...(obj.DevicePositions && {
    DevicePositions: obj.DevicePositions.map((item) => DevicePositionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CircleFilterSensitiveLog = (obj: Circle): any => ({
  ...obj,
  ...(obj.Center && { Center: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GeofenceGeometryFilterSensitiveLog = (obj: GeofenceGeometry): any => ({
  ...obj,
  ...(obj.Polygon && { Polygon: obj.Polygon.map((item) => SENSITIVE_STRING) }),
  ...(obj.Circle && { Circle: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchPutGeofenceRequestEntryFilterSensitiveLog = (obj: BatchPutGeofenceRequestEntry): any => ({
  ...obj,
  ...(obj.Geometry && { Geometry: GeofenceGeometryFilterSensitiveLog(obj.Geometry) }),
  ...(obj.GeofenceProperties && { GeofenceProperties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchPutGeofenceRequestFilterSensitiveLog = (obj: BatchPutGeofenceRequest): any => ({
  ...obj,
  ...(obj.Entries && { Entries: obj.Entries.map((item) => BatchPutGeofenceRequestEntryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BatchUpdateDevicePositionRequestFilterSensitiveLog = (obj: BatchUpdateDevicePositionRequest): any => ({
  ...obj,
  ...(obj.Updates && { Updates: obj.Updates.map((item) => DevicePositionUpdateFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CalculateRouteRequestFilterSensitiveLog = (obj: CalculateRouteRequest): any => ({
  ...obj,
  ...(obj.DeparturePosition && { DeparturePosition: SENSITIVE_STRING }),
  ...(obj.DestinationPosition && { DestinationPosition: SENSITIVE_STRING }),
  ...(obj.WaypointPositions && { WaypointPositions: SENSITIVE_STRING }),
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LegGeometryFilterSensitiveLog = (obj: LegGeometry): any => ({
  ...obj,
  ...(obj.LineString && { LineString: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StepFilterSensitiveLog = (obj: Step): any => ({
  ...obj,
  ...(obj.StartPosition && { StartPosition: SENSITIVE_STRING }),
  ...(obj.EndPosition && { EndPosition: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LegFilterSensitiveLog = (obj: Leg): any => ({
  ...obj,
  ...(obj.StartPosition && { StartPosition: SENSITIVE_STRING }),
  ...(obj.EndPosition && { EndPosition: SENSITIVE_STRING }),
  ...(obj.Geometry && { Geometry: LegGeometryFilterSensitiveLog(obj.Geometry) }),
  ...(obj.Steps && { Steps: obj.Steps.map((item) => StepFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CalculateRouteSummaryFilterSensitiveLog = (obj: CalculateRouteSummary): any => ({
  ...obj,
  ...(obj.RouteBBox && { RouteBBox: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CalculateRouteResponseFilterSensitiveLog = (obj: CalculateRouteResponse): any => ({
  ...obj,
  ...(obj.Legs && { Legs: obj.Legs.map((item) => LegFilterSensitiveLog(item)) }),
  ...(obj.Summary && { Summary: CalculateRouteSummaryFilterSensitiveLog(obj.Summary) }),
});

/**
 * @internal
 */
export const CalculateRouteMatrixRequestFilterSensitiveLog = (obj: CalculateRouteMatrixRequest): any => ({
  ...obj,
  ...(obj.DeparturePositions && { DeparturePositions: SENSITIVE_STRING }),
  ...(obj.DestinationPositions && { DestinationPositions: SENSITIVE_STRING }),
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CalculateRouteMatrixResponseFilterSensitiveLog = (obj: CalculateRouteMatrixResponse): any => ({
  ...obj,
  ...(obj.SnappedDeparturePositions && { SnappedDeparturePositions: SENSITIVE_STRING }),
  ...(obj.SnappedDestinationPositions && { SnappedDestinationPositions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetGeofenceResponseFilterSensitiveLog = (obj: GetGeofenceResponse): any => ({
  ...obj,
  ...(obj.Geometry && { Geometry: GeofenceGeometryFilterSensitiveLog(obj.Geometry) }),
  ...(obj.GeofenceProperties && { GeofenceProperties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListGeofenceResponseEntryFilterSensitiveLog = (obj: ListGeofenceResponseEntry): any => ({
  ...obj,
  ...(obj.Geometry && { Geometry: GeofenceGeometryFilterSensitiveLog(obj.Geometry) }),
  ...(obj.GeofenceProperties && { GeofenceProperties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListGeofencesResponseFilterSensitiveLog = (obj: ListGeofencesResponse): any => ({
  ...obj,
  ...(obj.Entries && { Entries: obj.Entries.map((item) => ListGeofenceResponseEntryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PutGeofenceRequestFilterSensitiveLog = (obj: PutGeofenceRequest): any => ({
  ...obj,
  ...(obj.Geometry && { Geometry: GeofenceGeometryFilterSensitiveLog(obj.Geometry) }),
  ...(obj.GeofenceProperties && { GeofenceProperties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDevicePositionResponseFilterSensitiveLog = (obj: GetDevicePositionResponse): any => ({
  ...obj,
  ...(obj.Position && { Position: SENSITIVE_STRING }),
  ...(obj.PositionProperties && { PositionProperties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDevicePositionHistoryResponseFilterSensitiveLog = (obj: GetDevicePositionHistoryResponse): any => ({
  ...obj,
  ...(obj.DevicePositions && {
    DevicePositions: obj.DevicePositions.map((item) => DevicePositionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetMapGlyphsRequestFilterSensitiveLog = (obj: GetMapGlyphsRequest): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetMapSpritesRequestFilterSensitiveLog = (obj: GetMapSpritesRequest): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetMapStyleDescriptorRequestFilterSensitiveLog = (obj: GetMapStyleDescriptorRequest): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetMapTileRequestFilterSensitiveLog = (obj: GetMapTileRequest): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPlaceRequestFilterSensitiveLog = (obj: GetPlaceRequest): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PlaceGeometryFilterSensitiveLog = (obj: PlaceGeometry): any => ({
  ...obj,
  ...(obj.Point && { Point: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PlaceFilterSensitiveLog = (obj: Place): any => ({
  ...obj,
  ...(obj.Geometry && { Geometry: PlaceGeometryFilterSensitiveLog(obj.Geometry) }),
});

/**
 * @internal
 */
export const GetPlaceResponseFilterSensitiveLog = (obj: GetPlaceResponse): any => ({
  ...obj,
  ...(obj.Place && { Place: PlaceFilterSensitiveLog(obj.Place) }),
});

/**
 * @internal
 */
export const ListDevicePositionsResponseEntryFilterSensitiveLog = (obj: ListDevicePositionsResponseEntry): any => ({
  ...obj,
  ...(obj.Position && { Position: SENSITIVE_STRING }),
  ...(obj.PositionProperties && { PositionProperties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDevicePositionsResponseFilterSensitiveLog = (obj: ListDevicePositionsResponse): any => ({
  ...obj,
  ...(obj.Entries && { Entries: obj.Entries.map((item) => ListDevicePositionsResponseEntryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchPlaceIndexForPositionRequestFilterSensitiveLog = (obj: SearchPlaceIndexForPositionRequest): any => ({
  ...obj,
  ...(obj.Position && { Position: SENSITIVE_STRING }),
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchForPositionResultFilterSensitiveLog = (obj: SearchForPositionResult): any => ({
  ...obj,
  ...(obj.Place && { Place: PlaceFilterSensitiveLog(obj.Place) }),
});

/**
 * @internal
 */
export const SearchPlaceIndexForPositionSummaryFilterSensitiveLog = (obj: SearchPlaceIndexForPositionSummary): any => ({
  ...obj,
  ...(obj.Position && { Position: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchPlaceIndexForPositionResponseFilterSensitiveLog = (
  obj: SearchPlaceIndexForPositionResponse
): any => ({
  ...obj,
  ...(obj.Summary && { Summary: SearchPlaceIndexForPositionSummaryFilterSensitiveLog(obj.Summary) }),
  ...(obj.Results && { Results: obj.Results.map((item) => SearchForPositionResultFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchPlaceIndexForSuggestionsRequestFilterSensitiveLog = (
  obj: SearchPlaceIndexForSuggestionsRequest
): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
  ...(obj.BiasPosition && { BiasPosition: SENSITIVE_STRING }),
  ...(obj.FilterBBox && { FilterBBox: SENSITIVE_STRING }),
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchPlaceIndexForSuggestionsSummaryFilterSensitiveLog = (
  obj: SearchPlaceIndexForSuggestionsSummary
): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
  ...(obj.BiasPosition && { BiasPosition: SENSITIVE_STRING }),
  ...(obj.FilterBBox && { FilterBBox: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchPlaceIndexForSuggestionsResponseFilterSensitiveLog = (
  obj: SearchPlaceIndexForSuggestionsResponse
): any => ({
  ...obj,
  ...(obj.Summary && { Summary: SearchPlaceIndexForSuggestionsSummaryFilterSensitiveLog(obj.Summary) }),
});

/**
 * @internal
 */
export const SearchPlaceIndexForTextRequestFilterSensitiveLog = (obj: SearchPlaceIndexForTextRequest): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
  ...(obj.BiasPosition && { BiasPosition: SENSITIVE_STRING }),
  ...(obj.FilterBBox && { FilterBBox: SENSITIVE_STRING }),
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchForTextResultFilterSensitiveLog = (obj: SearchForTextResult): any => ({
  ...obj,
  ...(obj.Place && { Place: PlaceFilterSensitiveLog(obj.Place) }),
});

/**
 * @internal
 */
export const SearchPlaceIndexForTextSummaryFilterSensitiveLog = (obj: SearchPlaceIndexForTextSummary): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
  ...(obj.BiasPosition && { BiasPosition: SENSITIVE_STRING }),
  ...(obj.FilterBBox && { FilterBBox: SENSITIVE_STRING }),
  ...(obj.ResultBBox && { ResultBBox: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchPlaceIndexForTextResponseFilterSensitiveLog = (obj: SearchPlaceIndexForTextResponse): any => ({
  ...obj,
  ...(obj.Summary && { Summary: SearchPlaceIndexForTextSummaryFilterSensitiveLog(obj.Summary) }),
  ...(obj.Results && { Results: obj.Results.map((item) => SearchForTextResultFilterSensitiveLog(item)) }),
});
