// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoT1ClickDevicesServiceServiceException as __BaseException } from "./IoT1ClickDevicesServiceServiceException";

/**
 * @public
 */
export interface DeviceDescription {
  /**
   * @public
   * <p>The ARN of the device.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>An array of zero or more elements of DeviceAttribute objects providing
   *  user specified device attributes.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>The unique identifier of the device.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>A Boolean value indicating whether or not the device is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>A value between 0 and 1 inclusive, representing the fraction of life remaining for the
   *  device.</p>
   */
  RemainingLife?: number;

  /**
   * @public
   * <p>The type of the device, such as "button".</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The tags currently associated with the AWS IoT 1-Click device.</p>
   */
  Tags?: Record<string, string>;
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
   * @public
   * <p>The user specified attributes associated with the device for an event.</p>
   */
  Attributes?: Attributes;

  /**
   * @public
   * <p>The unique identifier of the device.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The device type, such as "button".</p>
   */
  Type?: string;
}

/**
 * @public
 */
export interface DeviceEvent {
  /**
   * @public
   * <p>An object representing the device associated with the event.</p>
   */
  Device?: Device;

  /**
   * @public
   * <p>A serialized JSON object representing the device-type specific event.</p>
   */
  StdEvent?: string;
}

/**
 * @public
 */
export interface DeviceMethod {
  /**
   * @public
   * <p>The type of the device, such as "button".</p>
   */
  DeviceType?: string;

  /**
   * @public
   * <p>The name of the method applicable to the deviceType.</p>
   */
  MethodName?: string;
}

/**
 * @public
 */
export interface ClaimDevicesByClaimCodeRequest {
  /**
   * @public
   * <p>The claim code, starting with "C-", as provided by the device manufacturer.</p>
   */
  ClaimCode: string | undefined;
}

/**
 * @public
 */
export interface ClaimDevicesByClaimCodeResponse {
  /**
   * @public
   * <p>The claim code provided by the device manufacturer.</p>
   */
  ClaimCode?: string;

  /**
   * @public
   * <p>The total number of devices associated with the claim code that has been processed in
   *  the claim request.</p>
   */
  Total?: number;
}

/**
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>403</p>
   */
  Code?: string;

  /**
   * @public
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

/**
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>500</p>
   */
  Code?: string;

  /**
   * @public
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

/**
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>400</p>
   */
  Code?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface DescribeDeviceRequest {
  /**
   * @public
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceResponse {
  /**
   * @public
   * <p>Device details.</p>
   */
  DeviceDescription?: DeviceDescription;
}

/**
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>404</p>
   */
  Code?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface FinalizeDeviceClaimRequest {
  /**
   * @public
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>A collection of key/value pairs defining the resource tags. For example, \{
   *  "tags": \{"key1": "value1", "key2": "value2"\} \}. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
   *  Tagging Strategies</a>.</p><p>
   *
   *  </p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface FinalizeDeviceClaimResponse {
  /**
   * @public
   * <p>The device's final claim state.</p>
   */
  State?: string;
}

/**
 * @public
 */
export class PreconditionFailedException extends __BaseException {
  readonly name: "PreconditionFailedException" = "PreconditionFailedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>412</p>
   */
  Code?: string;

  /**
   * @public
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

/**
 * @public
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>409</p>
   */
  Code?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface GetDeviceMethodsRequest {
  /**
   * @public
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceMethodsResponse {
  /**
   * @public
   * <p>List of available device APIs.</p>
   */
  DeviceMethods?: DeviceMethod[];
}

/**
 * @public
 */
export interface InitiateDeviceClaimRequest {
  /**
   * @public
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface InitiateDeviceClaimResponse {
  /**
   * @public
   * <p>The device's final claim state.</p>
   */
  State?: string;
}

/**
 * @public
 */
export interface InvokeDeviceMethodRequest {
  /**
   * @public
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The device method to invoke.</p>
   */
  DeviceMethod?: DeviceMethod;

  /**
   * @public
   * <p>A JSON encoded string containing the device method request parameters.</p>
   */
  DeviceMethodParameters?: string;
}

/**
 * @public
 */
export interface InvokeDeviceMethodResponse {
  /**
   * @public
   * <p>A JSON encoded string containing the device method response.</p>
   */
  DeviceMethodResponse?: string;
}

/**
 * @public
 */
export class RangeNotSatisfiableException extends __BaseException {
  readonly name: "RangeNotSatisfiableException" = "RangeNotSatisfiableException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>416</p>
   */
  Code?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface ListDeviceEventsRequest {
  /**
   * @public
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The start date for the device event query, in ISO8061 format. For example,
   *  2018-03-28T15:45:12.880Z
   *  </p>
   */
  FromTimeStamp: Date | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per request. If not set, a default value of
   *  100 is used.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The end date for the device event query, in ISO8061 format. For example,
   *  2018-03-28T15:45:12.880Z
   *  </p>
   */
  ToTimeStamp: Date | undefined;
}

/**
 * @public
 */
export interface ListDeviceEventsResponse {
  /**
   * @public
   * <p>An array of zero or more elements describing the event(s) associated with the
   *  device.</p>
   */
  Events?: DeviceEvent[];

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * @public
   * <p>The type of the device, such as "button".</p>
   */
  DeviceType?: string;

  /**
   * @public
   * <p>The maximum number of results to return per request. If not set, a default value of
   *  100 is used.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * @public
   * <p>A list of devices.</p>
   */
  Devices?: DeviceDescription[];

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A collection of key/value pairs defining the resource tags. For example, \{
   *  "tags": \{"key1": "value1", "key2": "value2"\} \}. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
   *  Tagging Strategies</a>.</p><p>
   *
   *  </p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A collection of key/value pairs defining the resource tags. For example, \{
   *  "tags": \{"key1": "value1", "key2": "value2"\} \}. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
   *  Tagging Strategies</a>.</p><p>
   *
   *  </p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UnclaimDeviceRequest {
  /**
   * @public
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface UnclaimDeviceResponse {
  /**
   * @public
   * <p>The device's final claim state.</p>
   */
  State?: string;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A collections of tag keys. For example, \{"key1","key2"\}</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDeviceStateRequest {
  /**
   * @public
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>If true, the device is enabled. If false, the device is
   *  disabled.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 */
export interface UpdateDeviceStateResponse {}
