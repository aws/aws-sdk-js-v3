import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface Attributes {
  __type?: "Attributes";
}

export namespace Attributes {
  export const filterSensitiveLog = (obj: Attributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Attributes => __isa(o, "Attributes");
}

export interface ClaimDevicesByClaimCodeRequest {
  __type?: "ClaimDevicesByClaimCodeRequest";
  /**
   * <p>The claim code, starting with "C-", as provided by the device manufacturer.</p>
   */
  ClaimCode: string | undefined;
}

export namespace ClaimDevicesByClaimCodeRequest {
  export const filterSensitiveLog = (obj: ClaimDevicesByClaimCodeRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClaimDevicesByClaimCodeRequest => __isa(o, "ClaimDevicesByClaimCodeRequest");
}

export interface ClaimDevicesByClaimCodeResponse {
  __type?: "ClaimDevicesByClaimCodeResponse";
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
  export const filterSensitiveLog = (obj: ClaimDevicesByClaimCodeResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClaimDevicesByClaimCodeResponse => __isa(o, "ClaimDevicesByClaimCodeResponse");
}

export interface DescribeDeviceRequest {
  __type?: "DescribeDeviceRequest";
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

export namespace DescribeDeviceRequest {
  export const filterSensitiveLog = (obj: DescribeDeviceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDeviceRequest => __isa(o, "DescribeDeviceRequest");
}

export interface DescribeDeviceResponse {
  __type?: "DescribeDeviceResponse";
  /**
   * <p>Device details.</p>
   */
  DeviceDescription?: DeviceDescription;
}

export namespace DescribeDeviceResponse {
  export const filterSensitiveLog = (obj: DescribeDeviceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDeviceResponse => __isa(o, "DescribeDeviceResponse");
}

export interface Device {
  __type?: "Device";
  /**
   * <p>The device type, such as "button".</p>
   */
  Type?: string;

  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The user specified attributes associated with the device for an event.</p>
   */
  Attributes?: Attributes;
}

export namespace Device {
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Device => __isa(o, "Device");
}

export interface DeviceDescription {
  __type?: "DeviceDescription";
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId?: string;

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
   * <p>A Boolean value indicating whether or not the device is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A value between 0 and 1 inclusive, representing the fraction of life remaining for the
   *  device.</p>
   */
  RemainingLife?: number;

  /**
   * <p>The tags currently associated with the AWS IoT 1-Click device.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The type of the device, such as "button".</p>
   */
  Type?: string;
}

export namespace DeviceDescription {
  export const filterSensitiveLog = (obj: DeviceDescription): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeviceDescription => __isa(o, "DeviceDescription");
}

export interface DeviceEvent {
  __type?: "DeviceEvent";
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
  export const filterSensitiveLog = (obj: DeviceEvent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeviceEvent => __isa(o, "DeviceEvent");
}

export interface DeviceMethod {
  __type?: "DeviceMethod";
  /**
   * <p>The name of the method applicable to the deviceType.</p>
   */
  MethodName?: string;

  /**
   * <p>The type of the device, such as "button".</p>
   */
  DeviceType?: string;
}

export namespace DeviceMethod {
  export const filterSensitiveLog = (obj: DeviceMethod): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeviceMethod => __isa(o, "DeviceMethod");
}

export interface FinalizeDeviceClaimRequest {
  __type?: "FinalizeDeviceClaimRequest";
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
  export const filterSensitiveLog = (obj: FinalizeDeviceClaimRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FinalizeDeviceClaimRequest => __isa(o, "FinalizeDeviceClaimRequest");
}

export interface FinalizeDeviceClaimResponse {
  __type?: "FinalizeDeviceClaimResponse";
  /**
   * <p>The device's final claim state.</p>
   */
  State?: string;
}

export namespace FinalizeDeviceClaimResponse {
  export const filterSensitiveLog = (obj: FinalizeDeviceClaimResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FinalizeDeviceClaimResponse => __isa(o, "FinalizeDeviceClaimResponse");
}

export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  /**
   * <p>403</p>
   */
  Code?: string;

  /**
   * <p>The 403 error message returned by the web server.</p>
   */
  Message?: string;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ForbiddenException => __isa(o, "ForbiddenException");
}

export interface GetDeviceMethodsRequest {
  __type?: "GetDeviceMethodsRequest";
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

export namespace GetDeviceMethodsRequest {
  export const filterSensitiveLog = (obj: GetDeviceMethodsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDeviceMethodsRequest => __isa(o, "GetDeviceMethodsRequest");
}

export interface GetDeviceMethodsResponse {
  __type?: "GetDeviceMethodsResponse";
  /**
   * <p>List of available device APIs.</p>
   */
  DeviceMethods?: DeviceMethod[];
}

export namespace GetDeviceMethodsResponse {
  export const filterSensitiveLog = (obj: GetDeviceMethodsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDeviceMethodsResponse => __isa(o, "GetDeviceMethodsResponse");
}

export interface InitiateDeviceClaimRequest {
  __type?: "InitiateDeviceClaimRequest";
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

export namespace InitiateDeviceClaimRequest {
  export const filterSensitiveLog = (obj: InitiateDeviceClaimRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InitiateDeviceClaimRequest => __isa(o, "InitiateDeviceClaimRequest");
}

export interface InitiateDeviceClaimResponse {
  __type?: "InitiateDeviceClaimResponse";
  /**
   * <p>The device's final claim state.</p>
   */
  State?: string;
}

export namespace InitiateDeviceClaimResponse {
  export const filterSensitiveLog = (obj: InitiateDeviceClaimResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InitiateDeviceClaimResponse => __isa(o, "InitiateDeviceClaimResponse");
}

export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  /**
   * <p>The 500 error message returned by the web server.</p>
   */
  Message?: string;

  /**
   * <p>500</p>
   */
  Code?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalFailureException => __isa(o, "InternalFailureException");
}

export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>400</p>
   */
  Code?: string;

  /**
   * <p>The 400 error message returned by the web server.</p>
   */
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidRequestException => __isa(o, "InvalidRequestException");
}

export interface InvokeDeviceMethodRequest {
  __type?: "InvokeDeviceMethodRequest";
  /**
   * <p>The device method to invoke.</p>
   */
  DeviceMethod?: DeviceMethod;

  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>A JSON encoded string containing the device method request parameters.</p>
   */
  DeviceMethodParameters?: string;
}

export namespace InvokeDeviceMethodRequest {
  export const filterSensitiveLog = (obj: InvokeDeviceMethodRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvokeDeviceMethodRequest => __isa(o, "InvokeDeviceMethodRequest");
}

export interface InvokeDeviceMethodResponse {
  __type?: "InvokeDeviceMethodResponse";
  /**
   * <p>A JSON encoded string containing the device method response.</p>
   */
  DeviceMethodResponse?: string;
}

export namespace InvokeDeviceMethodResponse {
  export const filterSensitiveLog = (obj: InvokeDeviceMethodResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvokeDeviceMethodResponse => __isa(o, "InvokeDeviceMethodResponse");
}

export interface ListDeviceEventsRequest {
  __type?: "ListDeviceEventsRequest";
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The maximum number of results to return per request. If not set, a default value of
   *  100 is used.</p>
   */
  MaxResults?: number;

  /**
   * <p>The start date for the device event query, in ISO8061 format. For example,
   *  2018-03-28T15:45:12.880Z
   *  </p>
   */
  FromTimeStamp: Date | undefined;

  /**
   * <p>The end date for the device event query, in ISO8061 format. For example,
   *  2018-03-28T15:45:12.880Z
   *  </p>
   */
  ToTimeStamp: Date | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListDeviceEventsRequest {
  export const filterSensitiveLog = (obj: ListDeviceEventsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDeviceEventsRequest => __isa(o, "ListDeviceEventsRequest");
}

export interface ListDeviceEventsResponse {
  __type?: "ListDeviceEventsResponse";
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
  export const filterSensitiveLog = (obj: ListDeviceEventsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDeviceEventsResponse => __isa(o, "ListDeviceEventsResponse");
}

export interface ListDevicesRequest {
  __type?: "ListDevicesRequest";
  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The type of the device, such as "button".</p>
   */
  DeviceType?: string;

  /**
   * <p>The maximum number of results to return per request. If not set, a default value of
   *  100 is used.</p>
   */
  MaxResults?: number;
}

export namespace ListDevicesRequest {
  export const filterSensitiveLog = (obj: ListDevicesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDevicesRequest => __isa(o, "ListDevicesRequest");
}

export interface ListDevicesResponse {
  __type?: "ListDevicesResponse";
  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of devices.</p>
   */
  Devices?: DeviceDescription[];
}

export namespace ListDevicesResponse {
  export const filterSensitiveLog = (obj: ListDevicesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDevicesResponse => __isa(o, "ListDevicesResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
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
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

export interface PreconditionFailedException extends __SmithyException, $MetadataBearer {
  name: "PreconditionFailedException";
  $fault: "client";
  /**
   * <p>An error message explaining the error or its remedy.</p>
   */
  Message?: string;

  /**
   * <p>412</p>
   */
  Code?: string;
}

export namespace PreconditionFailedException {
  export const filterSensitiveLog = (obj: PreconditionFailedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PreconditionFailedException => __isa(o, "PreconditionFailedException");
}

export interface RangeNotSatisfiableException extends __SmithyException, $MetadataBearer {
  name: "RangeNotSatisfiableException";
  $fault: "client";
  /**
   * <p>The requested number of results specified by nextToken cannot be
   *  satisfied.</p>
   */
  Message?: string;

  /**
   * <p>416</p>
   */
  Code?: string;
}

export namespace RangeNotSatisfiableException {
  export const filterSensitiveLog = (obj: RangeNotSatisfiableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RangeNotSatisfiableException => __isa(o, "RangeNotSatisfiableException");
}

export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  /**
   * <p>409</p>
   */
  Code?: string;

  /**
   * <p>An error message explaining the error or its remedy.</p>
   */
  Message?: string;
}

export namespace ResourceConflictException {
  export const filterSensitiveLog = (obj: ResourceConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceConflictException => __isa(o, "ResourceConflictException");
}

export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The requested device could not be found.</p>
   */
  Message?: string;

  /**
   * <p>404</p>
   */
  Code?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface UnclaimDeviceRequest {
  __type?: "UnclaimDeviceRequest";
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

export namespace UnclaimDeviceRequest {
  export const filterSensitiveLog = (obj: UnclaimDeviceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnclaimDeviceRequest => __isa(o, "UnclaimDeviceRequest");
}

export interface UnclaimDeviceResponse {
  __type?: "UnclaimDeviceResponse";
  /**
   * <p>The device's final claim state.</p>
   */
  State?: string;
}

export namespace UnclaimDeviceResponse {
  export const filterSensitiveLog = (obj: UnclaimDeviceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnclaimDeviceResponse => __isa(o, "UnclaimDeviceResponse");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UpdateDeviceStateRequest {
  __type?: "UpdateDeviceStateRequest";
  /**
   * <p>If true, the device is enabled. If false, the device is
   *  disabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId: string | undefined;
}

export namespace UpdateDeviceStateRequest {
  export const filterSensitiveLog = (obj: UpdateDeviceStateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDeviceStateRequest => __isa(o, "UpdateDeviceStateRequest");
}

export interface UpdateDeviceStateResponse {
  __type?: "UpdateDeviceStateResponse";
}

export namespace UpdateDeviceStateResponse {
  export const filterSensitiveLog = (obj: UpdateDeviceStateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDeviceStateResponse => __isa(o, "UpdateDeviceStateResponse");
}
