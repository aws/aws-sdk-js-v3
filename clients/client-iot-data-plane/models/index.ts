import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
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

export namespace DeleteThingShadowRequest {
  export const filterSensitiveLog = (obj: DeleteThingShadowRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteThingShadowRequest =>
    __isa(o, "DeleteThingShadowRequest");
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

export namespace DeleteThingShadowResponse {
  export const filterSensitiveLog = (obj: DeleteThingShadowResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteThingShadowResponse =>
    __isa(o, "DeleteThingShadowResponse");
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

export namespace GetThingShadowRequest {
  export const filterSensitiveLog = (obj: GetThingShadowRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetThingShadowRequest =>
    __isa(o, "GetThingShadowRequest");
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

export namespace GetThingShadowResponse {
  export const filterSensitiveLog = (obj: GetThingShadowResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetThingShadowResponse =>
    __isa(o, "GetThingShadowResponse");
}

/**
 * <p>An unexpected error has occurred.</p>
 */
export interface InternalFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalFailureException =>
    __isa(o, "InternalFailureException");
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRequestException =>
    __isa(o, "InvalidRequestException");
}

/**
 * <p>The specified combination of HTTP verb and URI is not supported.</p>
 */
export interface MethodNotAllowedException
  extends __SmithyException,
    $MetadataBearer {
  name: "MethodNotAllowedException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace MethodNotAllowedException {
  export const filterSensitiveLog = (obj: MethodNotAllowedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is MethodNotAllowedException =>
    __isa(o, "MethodNotAllowedException");
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

export namespace PublishRequest {
  export const filterSensitiveLog = (obj: PublishRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PublishRequest =>
    __isa(o, "PublishRequest");
}

/**
 * <p>The payload exceeds the maximum size allowed.</p>
 */
export interface RequestEntityTooLargeException
  extends __SmithyException,
    $MetadataBearer {
  name: "RequestEntityTooLargeException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace RequestEntityTooLargeException {
  export const filterSensitiveLog = (
    obj: RequestEntityTooLargeException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestEntityTooLargeException =>
    __isa(o, "RequestEntityTooLargeException");
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (
    obj: ServiceUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUnavailableException =>
    __isa(o, "ServiceUnavailableException");
}

/**
 * <p>The rate exceeds the limit.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThrottlingException =>
    __isa(o, "ThrottlingException");
}

/**
 * <p>You are not authorized to perform this operation.</p>
 */
export interface UnauthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnauthorizedException =>
    __isa(o, "UnauthorizedException");
}

/**
 * <p>The document encoding is not supported.</p>
 */
export interface UnsupportedDocumentEncodingException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedDocumentEncodingException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace UnsupportedDocumentEncodingException {
  export const filterSensitiveLog = (
    obj: UnsupportedDocumentEncodingException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedDocumentEncodingException =>
    __isa(o, "UnsupportedDocumentEncodingException");
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

export namespace UpdateThingShadowRequest {
  export const filterSensitiveLog = (obj: UpdateThingShadowRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateThingShadowRequest =>
    __isa(o, "UpdateThingShadowRequest");
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

export namespace UpdateThingShadowResponse {
  export const filterSensitiveLog = (obj: UpdateThingShadowResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateThingShadowResponse =>
    __isa(o, "UpdateThingShadowResponse");
}
