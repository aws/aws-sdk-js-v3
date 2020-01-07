import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>An unexpected error has occurred.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
    name: "InternalFailureException";
    $fault: "server";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace InternalFailureException {
    function isa(o: any): o is InternalFailureException;
}
/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
    name: "InvalidRequestException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidRequestException {
    function isa(o: any): o is InvalidRequestException;
}
/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace ResourceNotFoundException {
    function isa(o: any): o is ResourceNotFoundException;
}
/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
    name: "ServiceUnavailableException";
    $fault: "server";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace ServiceUnavailableException {
    function isa(o: any): o is ServiceUnavailableException;
}
/**
 * <p>The rate exceeds the limit.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace ThrottlingException {
    function isa(o: any): o is ThrottlingException;
}
/**
 * <p>You are not authorized to perform this operation.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
    name: "UnauthorizedException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace UnauthorizedException {
    function isa(o: any): o is UnauthorizedException;
}
/**
 * <p>The document encoding is not supported.</p>
 */
export interface UnsupportedDocumentEncodingException extends __SmithyException, $MetadataBearer {
    name: "UnsupportedDocumentEncodingException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace UnsupportedDocumentEncodingException {
    function isa(o: any): o is UnsupportedDocumentEncodingException;
}
/**
 * <p>The specified version does not match the version of the document.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace ConflictException {
    function isa(o: any): o is ConflictException;
}
/**
 * <p>The input for the DeleteThingShadow operation.</p>
 */
export interface DeleteThingShadowRequest {
    __type?: "DeleteThingShadowRequest";
    /**
     * <p>The name of the thing.</p>
     */
    thingName: string | undefined;
}
export declare namespace DeleteThingShadowRequest {
    function isa(o: any): o is DeleteThingShadowRequest;
}
/**
 * <p>The output from the DeleteThingShadow operation.</p>
 */
export interface DeleteThingShadowResponse {
    __type?: "DeleteThingShadowResponse";
    /**
     * <p>The state information, in JSON format.</p>
     */
    payload: Uint8Array | undefined;
}
export declare namespace DeleteThingShadowResponse {
    function isa(o: any): o is DeleteThingShadowResponse;
}
/**
 * <p>The input for the GetThingShadow operation.</p>
 */
export interface GetThingShadowRequest {
    __type?: "GetThingShadowRequest";
    /**
     * <p>The name of the thing.</p>
     */
    thingName: string | undefined;
}
export declare namespace GetThingShadowRequest {
    function isa(o: any): o is GetThingShadowRequest;
}
/**
 * <p>The output from the GetThingShadow operation.</p>
 */
export interface GetThingShadowResponse {
    __type?: "GetThingShadowResponse";
    /**
     * <p>The state information, in JSON format.</p>
     */
    payload?: Uint8Array;
}
export declare namespace GetThingShadowResponse {
    function isa(o: any): o is GetThingShadowResponse;
}
/**
 * <p>The specified combination of HTTP verb and URI is not supported.</p>
 */
export interface MethodNotAllowedException extends __SmithyException, $MetadataBearer {
    name: "MethodNotAllowedException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace MethodNotAllowedException {
    function isa(o: any): o is MethodNotAllowedException;
}
/**
 * <p>The input for the Publish operation.</p>
 */
export interface PublishRequest {
    __type?: "PublishRequest";
    /**
     * <p>The state information, in JSON format.</p>
     */
    payload?: Uint8Array;
    /**
     * <p>The Quality of Service (QoS) level.</p>
     */
    qos?: number;
    /**
     * <p>The name of the MQTT topic.</p>
     */
    topic: string | undefined;
}
export declare namespace PublishRequest {
    function isa(o: any): o is PublishRequest;
}
/**
 * <p>The payload exceeds the maximum size allowed.</p>
 */
export interface RequestEntityTooLargeException extends __SmithyException, $MetadataBearer {
    name: "RequestEntityTooLargeException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace RequestEntityTooLargeException {
    function isa(o: any): o is RequestEntityTooLargeException;
}
/**
 * <p>The input for the UpdateThingShadow operation.</p>
 */
export interface UpdateThingShadowRequest {
    __type?: "UpdateThingShadowRequest";
    /**
     * <p>The state information, in JSON format.</p>
     */
    payload: Uint8Array | undefined;
    /**
     * <p>The name of the thing.</p>
     */
    thingName: string | undefined;
}
export declare namespace UpdateThingShadowRequest {
    function isa(o: any): o is UpdateThingShadowRequest;
}
/**
 * <p>The output from the UpdateThingShadow operation.</p>
 */
export interface UpdateThingShadowResponse {
    __type?: "UpdateThingShadowResponse";
    /**
     * <p>The state information, in JSON format.</p>
     */
    payload?: Uint8Array;
}
export declare namespace UpdateThingShadowResponse {
    function isa(o: any): o is UpdateThingShadowResponse;
}
