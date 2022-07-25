// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { IoT1ClickDevicesServiceServiceException as __BaseException } from "./IoT1ClickDevicesServiceServiceException";

export interface DeviceDescription {
  /**
   * <p>The ARN of the device.</p>
   */
  Arn?: string;

  /**
   * <p>An array of zero or more elements of DeviceAttribute objects providing
   *  user specified device attributes.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>A Boolean value indicating whether or not the device is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A value between 0 and 1 inclusive, representing the fraction of life remaining for the
   *  device.</p>
   */
  RemainingLife?: number;

  /**
   * <p>The type of the device, such as "button".</p>
   */
  Type?: string;

  /**
   * <p>The tags currently associated with the AWS IoT 1-Click device.</p>
   */
  Tags?: Record<string, string>;
}

export interface Attributes {}

export interface Device {
  /**
   * <p>The user specified attributes associated with the device for an event.</p>
   */
  Attributes?: Attributes;

  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The device type, such as "button".</p>
   */
  Type?: string;
}

export interface DeviceEvent {
  /**
   * <p>An object representing the device associated with the event.</p>
   */
  Device?: Device;

  /**
   * <p>A serialized JSON object representing the device-type specific event.</p>
   */
  StdEvent?: string;
}

export interface DeviceMethod {
  /**
   * <p>The type of the device, such as "button".</p>
   */
  DeviceType?: string;

  /**
   * <p>The name of the method applicable to the deviceType.</p>
   */
  MethodName?: string;
}

export interface ClaimDevicesByClaimCodeRequest {
  /**
   * <p>The claim code, starting with "C-", as provided by the device manufacturer.</p>
   */
  ClaimCode: string | undefined;
}

export interface ClaimDevicesByClaimCodeResponse {
  /**
   * <p>The claim code provided by the device manufacturer.</p>
   */
  ClaimCode?: string;

  /**
   * <p>The total number of devices associated with the claim code that has been processed in
   *  the claim request.</p>
   */
  Total?: number;
}

export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * <p>403</p>
   */
  Code?: string;

  /**
   * <p>The 403 error message returned by the web server.</p>
   */
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

export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * <p>500</p>
   */
  Code?: string;

  /**
   * <p>The 500 error message returned by the web server.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>400</p>
   */
  Code?: string;

  /**
   * <p>The 400 error message returned by the web server.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export interface DescribeDeviceRequest {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

export interface DescribeDeviceResponse {
  /**
   * <p>Device details.</p>
   */
  DeviceDescription?: DeviceDescription;
}

export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>404</p>
   */
  Code?: string;

  /**
   * <p>The requested device could not be found.</p>
   */
  Message?: string;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export interface FinalizeDeviceClaimRequest {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>A collection of key/value pairs defining the resource tags. For example, {
   *  "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
   *  Tagging Strategies</a>.</p><p>
   *
   *  </p>
   */
  Tags?: Record<string, string>;
}

export interface FinalizeDeviceClaimResponse {
  /**
   * <p>The device's final claim state.</p>
   */
  State?: string;
}

export class PreconditionFailedException extends __BaseException {
  readonly name: "PreconditionFailedException" = "PreconditionFailedException";
  readonly $fault: "client" = "client";
  /**
   * <p>412</p>
   */
  Code?: string;

  /**
   * <p>An error message explaining the error or its remedy.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionFailedException, __BaseException>) {
    super({
      name: "PreconditionFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionFailedException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>409</p>
   */
  Code?: string;

  /**
   * <p>An error message explaining the error or its remedy.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export interface GetDeviceMethodsRequest {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

export interface GetDeviceMethodsResponse {
  /**
   * <p>List of available device APIs.</p>
   */
  DeviceMethods?: DeviceMethod[];
}

export interface InitiateDeviceClaimRequest {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

export interface InitiateDeviceClaimResponse {
  /**
   * <p>The device's final claim state.</p>
   */
  State?: string;
}

export interface InvokeDeviceMethodRequest {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The device method to invoke.</p>
   */
  DeviceMethod?: DeviceMethod;

  /**
   * <p>A JSON encoded string containing the device method request parameters.</p>
   */
  DeviceMethodParameters?: string;
}

export interface InvokeDeviceMethodResponse {
  /**
   * <p>A JSON encoded string containing the device method response.</p>
   */
  DeviceMethodResponse?: string;
}

export class RangeNotSatisfiableException extends __BaseException {
  readonly name: "RangeNotSatisfiableException" = "RangeNotSatisfiableException";
  readonly $fault: "client" = "client";
  /**
   * <p>416</p>
   */
  Code?: string;

  /**
   * <p>The requested number of results specified by nextToken cannot be
   *  satisfied.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RangeNotSatisfiableException, __BaseException>) {
    super({
      name: "RangeNotSatisfiableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RangeNotSatisfiableException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export interface ListDeviceEventsRequest {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The start date for the device event query, in ISO8061 format. For example,
   *  2018-03-28T15:45:12.880Z
   *  </p>
   */
  FromTimeStamp: Date | undefined;

  /**
   * <p>The maximum number of results to return per request. If not set, a default value of
   *  100 is used.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The end date for the device event query, in ISO8061 format. For example,
   *  2018-03-28T15:45:12.880Z
   *  </p>
   */
  ToTimeStamp: Date | undefined;
}

export interface ListDeviceEventsResponse {
  /**
   * <p>An array of zero or more elements describing the event(s) associated with the
   *  device.</p>
   */
  Events?: DeviceEvent[];

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListDevicesRequest {
  /**
   * <p>The type of the device, such as "button".</p>
   */
  DeviceType?: string;

  /**
   * <p>The maximum number of results to return per request. If not set, a default value of
   *  100 is used.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListDevicesResponse {
  /**
   * <p>A list of devices.</p>
   */
  Devices?: DeviceDescription[];

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A collection of key/value pairs defining the resource tags. For example, {
   *  "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
   *  Tagging Strategies</a>.</p><p>
   *
   *  </p>
   */
  Tags?: Record<string, string>;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A collection of key/value pairs defining the resource tags. For example, {
   *  "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
   *  Tagging Strategies</a>.</p><p>
   *
   *  </p>
   */
  Tags: Record<string, string> | undefined;
}

export interface UnclaimDeviceRequest {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

export interface UnclaimDeviceResponse {
  /**
   * <p>The device's final claim state.</p>
   */
  State?: string;
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A collections of tag keys. For example, {"key1","key2"}</p>
   */
  TagKeys: string[] | undefined;
}

export interface UpdateDeviceStateRequest {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>If true, the device is enabled. If false, the device is
   *  disabled.</p>
   */
  Enabled?: boolean;
}

export interface UpdateDeviceStateResponse {}

/**
 * @internal
 */
export const DeviceDescriptionFilterSensitiveLog = (obj: DeviceDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributesFilterSensitiveLog = (obj: Attributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceFilterSensitiveLog = (obj: Device): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceEventFilterSensitiveLog = (obj: DeviceEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceMethodFilterSensitiveLog = (obj: DeviceMethod): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClaimDevicesByClaimCodeRequestFilterSensitiveLog = (obj: ClaimDevicesByClaimCodeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClaimDevicesByClaimCodeResponseFilterSensitiveLog = (obj: ClaimDevicesByClaimCodeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceRequestFilterSensitiveLog = (obj: DescribeDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceResponseFilterSensitiveLog = (obj: DescribeDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FinalizeDeviceClaimRequestFilterSensitiveLog = (obj: FinalizeDeviceClaimRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FinalizeDeviceClaimResponseFilterSensitiveLog = (obj: FinalizeDeviceClaimResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceMethodsRequestFilterSensitiveLog = (obj: GetDeviceMethodsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceMethodsResponseFilterSensitiveLog = (obj: GetDeviceMethodsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InitiateDeviceClaimRequestFilterSensitiveLog = (obj: InitiateDeviceClaimRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InitiateDeviceClaimResponseFilterSensitiveLog = (obj: InitiateDeviceClaimResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvokeDeviceMethodRequestFilterSensitiveLog = (obj: InvokeDeviceMethodRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvokeDeviceMethodResponseFilterSensitiveLog = (obj: InvokeDeviceMethodResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceEventsRequestFilterSensitiveLog = (obj: ListDeviceEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceEventsResponseFilterSensitiveLog = (obj: ListDeviceEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevicesRequestFilterSensitiveLog = (obj: ListDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevicesResponseFilterSensitiveLog = (obj: ListDevicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnclaimDeviceRequestFilterSensitiveLog = (obj: UnclaimDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnclaimDeviceResponseFilterSensitiveLog = (obj: UnclaimDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDeviceStateRequestFilterSensitiveLog = (obj: UpdateDeviceStateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDeviceStateResponseFilterSensitiveLog = (obj: UpdateDeviceStateResponse): any => ({
  ...obj,
});
