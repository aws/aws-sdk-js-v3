import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface Attributes {
    __type?: "Attributes";
}
export declare namespace Attributes {
    function isa(o: any): o is Attributes;
}
export interface ClaimDevicesByClaimCodeRequest {
    __type?: "ClaimDevicesByClaimCodeRequest";
    /**
     * <p>The claim code, starting with "C-", as provided by the device manufacturer.</p>
     */
    ClaimCode: string | undefined;
}
export declare namespace ClaimDevicesByClaimCodeRequest {
    function isa(o: any): o is ClaimDevicesByClaimCodeRequest;
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
export declare namespace ClaimDevicesByClaimCodeResponse {
    function isa(o: any): o is ClaimDevicesByClaimCodeResponse;
}
export interface DescribeDeviceRequest {
    __type?: "DescribeDeviceRequest";
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId: string | undefined;
}
export declare namespace DescribeDeviceRequest {
    function isa(o: any): o is DescribeDeviceRequest;
}
export interface DescribeDeviceResponse {
    __type?: "DescribeDeviceResponse";
    /**
     * <p>Device details.</p>
     */
    DeviceDescription?: DeviceDescription;
}
export declare namespace DescribeDeviceResponse {
    function isa(o: any): o is DescribeDeviceResponse;
}
export interface Device {
    __type?: "Device";
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
export declare namespace Device {
    function isa(o: any): o is Device;
}
export interface DeviceDescription {
    __type?: "DeviceDescription";
    /**
     * <p>The ARN of the device.</p>
     */
    Arn?: string;
    /**
     * <p>An array of zero or more elements of DeviceAttribute objects providing
     *  user specified device attributes.</p>
     */
    Attributes?: {
        [key: string]: string;
    };
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
     * <p>The tags currently associated with the AWS IoT 1-Click device.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The type of the device, such as "button".</p>
     */
    Type?: string;
}
export declare namespace DeviceDescription {
    function isa(o: any): o is DeviceDescription;
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
export declare namespace DeviceEvent {
    function isa(o: any): o is DeviceEvent;
}
export interface DeviceMethod {
    __type?: "DeviceMethod";
    /**
     * <p>The type of the device, such as "button".</p>
     */
    DeviceType?: string;
    /**
     * <p>The name of the method applicable to the deviceType.</p>
     */
    MethodName?: string;
}
export declare namespace DeviceMethod {
    function isa(o: any): o is DeviceMethod;
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
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace FinalizeDeviceClaimRequest {
    function isa(o: any): o is FinalizeDeviceClaimRequest;
}
export interface FinalizeDeviceClaimResponse {
    __type?: "FinalizeDeviceClaimResponse";
    /**
     * <p>The device's final claim state.</p>
     */
    State?: string;
}
export declare namespace FinalizeDeviceClaimResponse {
    function isa(o: any): o is FinalizeDeviceClaimResponse;
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
export declare namespace ForbiddenException {
    function isa(o: any): o is ForbiddenException;
}
export interface GetDeviceMethodsRequest {
    __type?: "GetDeviceMethodsRequest";
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId: string | undefined;
}
export declare namespace GetDeviceMethodsRequest {
    function isa(o: any): o is GetDeviceMethodsRequest;
}
export interface GetDeviceMethodsResponse {
    __type?: "GetDeviceMethodsResponse";
    /**
     * <p>List of available device APIs.</p>
     */
    DeviceMethods?: Array<DeviceMethod>;
}
export declare namespace GetDeviceMethodsResponse {
    function isa(o: any): o is GetDeviceMethodsResponse;
}
export interface InitiateDeviceClaimRequest {
    __type?: "InitiateDeviceClaimRequest";
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId: string | undefined;
}
export declare namespace InitiateDeviceClaimRequest {
    function isa(o: any): o is InitiateDeviceClaimRequest;
}
export interface InitiateDeviceClaimResponse {
    __type?: "InitiateDeviceClaimResponse";
    /**
     * <p>The device's final claim state.</p>
     */
    State?: string;
}
export declare namespace InitiateDeviceClaimResponse {
    function isa(o: any): o is InitiateDeviceClaimResponse;
}
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
    name: "InternalFailureException";
    $fault: "server";
    /**
     * <p>500</p>
     */
    Code?: string;
    /**
     * <p>The 500 error message returned by the web server.</p>
     */
    Message?: string;
}
export declare namespace InternalFailureException {
    function isa(o: any): o is InternalFailureException;
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
export declare namespace InvalidRequestException {
    function isa(o: any): o is InvalidRequestException;
}
export interface InvokeDeviceMethodRequest {
    __type?: "InvokeDeviceMethodRequest";
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
export declare namespace InvokeDeviceMethodRequest {
    function isa(o: any): o is InvokeDeviceMethodRequest;
}
export interface InvokeDeviceMethodResponse {
    __type?: "InvokeDeviceMethodResponse";
    /**
     * <p>A JSON encoded string containing the device method response.</p>
     */
    DeviceMethodResponse?: string;
}
export declare namespace InvokeDeviceMethodResponse {
    function isa(o: any): o is InvokeDeviceMethodResponse;
}
export interface ListDeviceEventsRequest {
    __type?: "ListDeviceEventsRequest";
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
export declare namespace ListDeviceEventsRequest {
    function isa(o: any): o is ListDeviceEventsRequest;
}
export interface ListDeviceEventsResponse {
    __type?: "ListDeviceEventsResponse";
    /**
     * <p>An array of zero or more elements describing the event(s) associated with the
     *  device.</p>
     */
    Events?: Array<DeviceEvent>;
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListDeviceEventsResponse {
    function isa(o: any): o is ListDeviceEventsResponse;
}
export interface ListDevicesRequest {
    __type?: "ListDevicesRequest";
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
export declare namespace ListDevicesRequest {
    function isa(o: any): o is ListDevicesRequest;
}
export interface ListDevicesResponse {
    __type?: "ListDevicesResponse";
    /**
     * <p>A list of devices.</p>
     */
    Devices?: Array<DeviceDescription>;
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListDevicesResponse {
    function isa(o: any): o is ListDevicesResponse;
}
export interface ListTagsForResourceRequest {
    __type?: "ListTagsForResourceRequest";
    /**
     * <p>The ARN of the resource.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    function isa(o: any): o is ListTagsForResourceRequest;
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
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    function isa(o: any): o is ListTagsForResourceResponse;
}
export interface PreconditionFailedException extends __SmithyException, $MetadataBearer {
    name: "PreconditionFailedException";
    $fault: "client";
    /**
     * <p>412</p>
     */
    Code?: string;
    /**
     * <p>An error message explaining the error or its remedy.</p>
     */
    Message?: string;
}
export declare namespace PreconditionFailedException {
    function isa(o: any): o is PreconditionFailedException;
}
export interface RangeNotSatisfiableException extends __SmithyException, $MetadataBearer {
    name: "RangeNotSatisfiableException";
    $fault: "client";
    /**
     * <p>416</p>
     */
    Code?: string;
    /**
     * <p>The requested number of results specified by nextToken cannot be
     *  satisfied.</p>
     */
    Message?: string;
}
export declare namespace RangeNotSatisfiableException {
    function isa(o: any): o is RangeNotSatisfiableException;
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
export declare namespace ResourceConflictException {
    function isa(o: any): o is ResourceConflictException;
}
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    /**
     * <p>404</p>
     */
    Code?: string;
    /**
     * <p>The requested device could not be found.</p>
     */
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    function isa(o: any): o is ResourceNotFoundException;
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
    Tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    function isa(o: any): o is TagResourceRequest;
}
export interface UnclaimDeviceRequest {
    __type?: "UnclaimDeviceRequest";
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId: string | undefined;
}
export declare namespace UnclaimDeviceRequest {
    function isa(o: any): o is UnclaimDeviceRequest;
}
export interface UnclaimDeviceResponse {
    __type?: "UnclaimDeviceResponse";
    /**
     * <p>The device's final claim state.</p>
     */
    State?: string;
}
export declare namespace UnclaimDeviceResponse {
    function isa(o: any): o is UnclaimDeviceResponse;
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
    TagKeys: Array<string> | undefined;
}
export declare namespace UntagResourceRequest {
    function isa(o: any): o is UntagResourceRequest;
}
export interface UpdateDeviceStateRequest {
    __type?: "UpdateDeviceStateRequest";
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
export declare namespace UpdateDeviceStateRequest {
    function isa(o: any): o is UpdateDeviceStateRequest;
}
export interface UpdateDeviceStateResponse {
    __type?: "UpdateDeviceStateResponse";
}
export declare namespace UpdateDeviceStateResponse {
    function isa(o: any): o is UpdateDeviceStateResponse;
}
