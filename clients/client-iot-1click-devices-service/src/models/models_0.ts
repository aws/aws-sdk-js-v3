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
  Attributes?: { [key: string]: string };

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
  Tags?: { [key: string]: string };
}

export namespace DeviceDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceDescription): any => ({
    ...obj,
  });
}

export interface Attributes {}

export namespace Attributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attributes): any => ({
    ...obj,
  });
}

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

export namespace Device {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj,
  });
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

export namespace DeviceEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceEvent): any => ({
    ...obj,
  });
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

export namespace DeviceMethod {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceMethod): any => ({
    ...obj,
  });
}

export interface ClaimDevicesByClaimCodeRequest {
  /**
   * <p>The claim code, starting with "C-", as provided by the device manufacturer.</p>
   */
  ClaimCode: string | undefined;
}

export namespace ClaimDevicesByClaimCodeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClaimDevicesByClaimCodeRequest): any => ({
    ...obj,
  });
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

export namespace ClaimDevicesByClaimCodeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClaimDevicesByClaimCodeResponse): any => ({
    ...obj,
  });
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

export namespace DescribeDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceRequest): any => ({
    ...obj,
  });
}

export interface DescribeDeviceResponse {
  /**
   * <p>Device details.</p>
   */
  DeviceDescription?: DeviceDescription;
}

export namespace DescribeDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceResponse): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace FinalizeDeviceClaimRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FinalizeDeviceClaimRequest): any => ({
    ...obj,
  });
}

export interface FinalizeDeviceClaimResponse {
  /**
   * <p>The device's final claim state.</p>
   */
  State?: string;
}

export namespace FinalizeDeviceClaimResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FinalizeDeviceClaimResponse): any => ({
    ...obj,
  });
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

export namespace GetDeviceMethodsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeviceMethodsRequest): any => ({
    ...obj,
  });
}

export interface GetDeviceMethodsResponse {
  /**
   * <p>List of available device APIs.</p>
   */
  DeviceMethods?: DeviceMethod[];
}

export namespace GetDeviceMethodsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeviceMethodsResponse): any => ({
    ...obj,
  });
}

export interface InitiateDeviceClaimRequest {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

export namespace InitiateDeviceClaimRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InitiateDeviceClaimRequest): any => ({
    ...obj,
  });
}

export interface InitiateDeviceClaimResponse {
  /**
   * <p>The device's final claim state.</p>
   */
  State?: string;
}

export namespace InitiateDeviceClaimResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InitiateDeviceClaimResponse): any => ({
    ...obj,
  });
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

export namespace InvokeDeviceMethodRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvokeDeviceMethodRequest): any => ({
    ...obj,
  });
}

export interface InvokeDeviceMethodResponse {
  /**
   * <p>A JSON encoded string containing the device method response.</p>
   */
  DeviceMethodResponse?: string;
}

export namespace InvokeDeviceMethodResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvokeDeviceMethodResponse): any => ({
    ...obj,
  });
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

export namespace ListDeviceEventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeviceEventsRequest): any => ({
    ...obj,
  });
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

export namespace ListDeviceEventsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeviceEventsResponse): any => ({
    ...obj,
  });
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

export namespace ListDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevicesRequest): any => ({
    ...obj,
  });
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

export namespace ListDevicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevicesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A collection of key/value pairs defining the resource tags. For example, {
   *  "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
   *  Tagging Strategies</a>.</p><p>
   *
   *  </p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UnclaimDeviceRequest {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

export namespace UnclaimDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnclaimDeviceRequest): any => ({
    ...obj,
  });
}

export interface UnclaimDeviceResponse {
  /**
   * <p>The device's final claim state.</p>
   */
  State?: string;
}

export namespace UnclaimDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnclaimDeviceResponse): any => ({
    ...obj,
  });
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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
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

export namespace UpdateDeviceStateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeviceStateRequest): any => ({
    ...obj,
  });
}

export interface UpdateDeviceStateResponse {}

export namespace UpdateDeviceStateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeviceStateResponse): any => ({
    ...obj,
  });
}
