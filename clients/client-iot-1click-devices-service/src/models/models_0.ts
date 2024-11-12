// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoT1ClickDevicesServiceServiceException as __BaseException } from "./IoT1ClickDevicesServiceServiceException";

/**
 * @public
 */
export interface DeviceDescription {
  /**
   * <p>The ARN of the device.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>An array of zero or more elements of DeviceAttribute objects providing
   *  user specified device attributes.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p>A Boolean value indicating whether or not the device is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>A value between 0 and 1 inclusive, representing the fraction of life remaining for the
   *  device.</p>
   * @public
   */
  RemainingLife?: number | undefined;

  /**
   * <p>The type of the device, such as "button".</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The tags currently associated with the AWS IoT 1-Click device.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface Attributes {}

/**
 * @public
 */
export interface Device {
  /**
   * <p>The user specified attributes associated with the device for an event.</p>
   * @public
   */
  Attributes?: Attributes | undefined;

  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p>The device type, such as "button".</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * @public
 */
export interface DeviceEvent {
  /**
   * <p>An object representing the device associated with the event.</p>
   * @public
   */
  Device?: Device | undefined;

  /**
   * <p>A serialized JSON object representing the device-type specific event.</p>
   * @public
   */
  StdEvent?: string | undefined;
}

/**
 * @public
 */
export interface DeviceMethod {
  /**
   * <p>The type of the device, such as "button".</p>
   * @public
   */
  DeviceType?: string | undefined;

  /**
   * <p>The name of the method applicable to the deviceType.</p>
   * @public
   */
  MethodName?: string | undefined;
}

/**
 * @public
 */
export interface ClaimDevicesByClaimCodeRequest {
  /**
   * <p>The claim code, starting with "C-", as provided by the device manufacturer.</p>
   * @public
   */
  ClaimCode: string | undefined;
}

/**
 * @public
 */
export interface ClaimDevicesByClaimCodeResponse {
  /**
   * <p>The claim code provided by the device manufacturer.</p>
   * @public
   */
  ClaimCode?: string | undefined;

  /**
   * <p>The total number of devices associated with the claim code that has been processed in
   *  the claim request.</p>
   * @public
   */
  Total?: number | undefined;
}

/**
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * <p>403</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The 403 error message returned by the web server.</p>
   * @public
   */
  Message?: string | undefined;
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
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * <p>500</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The 500 error message returned by the web server.</p>
   * @public
   */
  Message?: string | undefined;
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

/**
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>400</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The 400 error message returned by the web server.</p>
   * @public
   */
  Message?: string | undefined;
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

/**
 * @public
 */
export interface DescribeDeviceRequest {
  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceResponse {
  /**
   * <p>Device details.</p>
   * @public
   */
  DeviceDescription?: DeviceDescription | undefined;
}

/**
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>404</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The requested device could not be found.</p>
   * @public
   */
  Message?: string | undefined;
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

/**
 * @public
 */
export interface FinalizeDeviceClaimRequest {
  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>A collection of key/value pairs defining the resource tags. For example, \{
   *  "tags": \{"key1": "value1", "key2": "value2"\} \}. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
   *  Tagging Strategies</a>.</p><p>
   *
   *  </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface FinalizeDeviceClaimResponse {
  /**
   * <p>The device's final claim state.</p>
   * @public
   */
  State?: string | undefined;
}

/**
 * @public
 */
export class PreconditionFailedException extends __BaseException {
  readonly name: "PreconditionFailedException" = "PreconditionFailedException";
  readonly $fault: "client" = "client";
  /**
   * <p>412</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>An error message explaining the error or its remedy.</p>
   * @public
   */
  Message?: string | undefined;
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

/**
 * @public
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>409</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>An error message explaining the error or its remedy.</p>
   * @public
   */
  Message?: string | undefined;
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

/**
 * @public
 */
export interface GetDeviceMethodsRequest {
  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceMethodsResponse {
  /**
   * <p>List of available device APIs.</p>
   * @public
   */
  DeviceMethods?: DeviceMethod[] | undefined;
}

/**
 * @public
 */
export interface InitiateDeviceClaimRequest {
  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface InitiateDeviceClaimResponse {
  /**
   * <p>The device's final claim state.</p>
   * @public
   */
  State?: string | undefined;
}

/**
 * @public
 */
export interface InvokeDeviceMethodRequest {
  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>The device method to invoke.</p>
   * @public
   */
  DeviceMethod?: DeviceMethod | undefined;

  /**
   * <p>A JSON encoded string containing the device method request parameters.</p>
   * @public
   */
  DeviceMethodParameters?: string | undefined;
}

/**
 * @public
 */
export interface InvokeDeviceMethodResponse {
  /**
   * <p>A JSON encoded string containing the device method response.</p>
   * @public
   */
  DeviceMethodResponse?: string | undefined;
}

/**
 * @public
 */
export class RangeNotSatisfiableException extends __BaseException {
  readonly name: "RangeNotSatisfiableException" = "RangeNotSatisfiableException";
  readonly $fault: "client" = "client";
  /**
   * <p>416</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The requested number of results specified by nextToken cannot be
   *  satisfied.</p>
   * @public
   */
  Message?: string | undefined;
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

/**
 * @public
 */
export interface ListDeviceEventsRequest {
  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>The start date for the device event query, in ISO8061 format. For example,
   *  2018-03-28T15:45:12.880Z
   *  </p>
   * @public
   */
  FromTimeStamp: Date | undefined;

  /**
   * <p>The maximum number of results to return per request. If not set, a default value of
   *  100 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The end date for the device event query, in ISO8061 format. For example,
   *  2018-03-28T15:45:12.880Z
   *  </p>
   * @public
   */
  ToTimeStamp: Date | undefined;
}

/**
 * @public
 */
export interface ListDeviceEventsResponse {
  /**
   * <p>An array of zero or more elements describing the event(s) associated with the
   *  device.</p>
   * @public
   */
  Events?: DeviceEvent[] | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * <p>The type of the device, such as "button".</p>
   * @public
   */
  DeviceType?: string | undefined;

  /**
   * <p>The maximum number of results to return per request. If not set, a default value of
   *  100 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * <p>A list of devices.</p>
   * @public
   */
  Devices?: DeviceDescription[] | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A collection of key/value pairs defining the resource tags. For example, \{
   *  "tags": \{"key1": "value1", "key2": "value2"\} \}. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
   *  Tagging Strategies</a>.</p><p>
   *
   *  </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A collection of key/value pairs defining the resource tags. For example, \{
   *  "tags": \{"key1": "value1", "key2": "value2"\} \}. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
   *  Tagging Strategies</a>.</p><p>
   *
   *  </p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UnclaimDeviceRequest {
  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface UnclaimDeviceResponse {
  /**
   * <p>The device's final claim state.</p>
   * @public
   */
  State?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A collections of tag keys. For example, \{"key1","key2"\}</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDeviceStateRequest {
  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>If true, the device is enabled. If false, the device is
   *  disabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDeviceStateResponse {}
