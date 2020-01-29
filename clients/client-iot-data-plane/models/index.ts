import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An unexpected error has occurred.</p>
 */
export interface InternalFailureException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalFailureException";
  name: "InternalFailureException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InternalFailureException {
  export function isa(o: any): o is InternalFailureException {
    return _smithy.isa(o, "InternalFailureException");
  }
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidRequestException";
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return _smithy.isa(o, "InvalidRequestException");
  }
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundException";
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface ServiceUnavailableException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ServiceUnavailableException";
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return _smithy.isa(o, "ServiceUnavailableException");
  }
}

/**
 * <p>The rate exceeds the limit.</p>
 */
export interface ThrottlingException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ThrottlingException";
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return _smithy.isa(o, "ThrottlingException");
  }
}

/**
 * <p>You are not authorized to perform this operation.</p>
 */
export interface UnauthorizedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnauthorizedException";
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace UnauthorizedException {
  export function isa(o: any): o is UnauthorizedException {
    return _smithy.isa(o, "UnauthorizedException");
  }
}

/**
 * <p>The document encoding is not supported.</p>
 */
export interface UnsupportedDocumentEncodingException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnsupportedDocumentEncodingException";
  name: "UnsupportedDocumentEncodingException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace UnsupportedDocumentEncodingException {
  export function isa(o: any): o is UnsupportedDocumentEncodingException {
    return _smithy.isa(o, "UnsupportedDocumentEncodingException");
  }
}

/**
 * <p>The specified version does not match the version of the document.</p>
 */
export interface ConflictException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ConflictException";
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ConflictException {
  export function isa(o: any): o is ConflictException {
    return _smithy.isa(o, "ConflictException");
  }
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
  export function isa(o: any): o is DeleteThingShadowRequest {
    return _smithy.isa(o, "DeleteThingShadowRequest");
  }
}

/**
 * <p>The output from the DeleteThingShadow operation.</p>
 */
export interface DeleteThingShadowResponse extends $MetadataBearer {
  __type?: "DeleteThingShadowResponse";
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload: Uint8Array | undefined;
}

export namespace DeleteThingShadowResponse {
  export function isa(o: any): o is DeleteThingShadowResponse {
    return _smithy.isa(o, "DeleteThingShadowResponse");
  }
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
  export function isa(o: any): o is GetThingShadowRequest {
    return _smithy.isa(o, "GetThingShadowRequest");
  }
}

/**
 * <p>The output from the GetThingShadow operation.</p>
 */
export interface GetThingShadowResponse extends $MetadataBearer {
  __type?: "GetThingShadowResponse";
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload?: Uint8Array;
}

export namespace GetThingShadowResponse {
  export function isa(o: any): o is GetThingShadowResponse {
    return _smithy.isa(o, "GetThingShadowResponse");
  }
}

/**
 * <p>The specified combination of HTTP verb and URI is not supported.</p>
 */
export interface MethodNotAllowedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "MethodNotAllowedException";
  name: "MethodNotAllowedException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace MethodNotAllowedException {
  export function isa(o: any): o is MethodNotAllowedException {
    return _smithy.isa(o, "MethodNotAllowedException");
  }
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
  export function isa(o: any): o is PublishRequest {
    return _smithy.isa(o, "PublishRequest");
  }
}

/**
 * <p>The payload exceeds the maximum size allowed.</p>
 */
export interface RequestEntityTooLargeException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "RequestEntityTooLargeException";
  name: "RequestEntityTooLargeException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace RequestEntityTooLargeException {
  export function isa(o: any): o is RequestEntityTooLargeException {
    return _smithy.isa(o, "RequestEntityTooLargeException");
  }
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
  export function isa(o: any): o is UpdateThingShadowRequest {
    return _smithy.isa(o, "UpdateThingShadowRequest");
  }
}

/**
 * <p>The output from the UpdateThingShadow operation.</p>
 */
export interface UpdateThingShadowResponse extends $MetadataBearer {
  __type?: "UpdateThingShadowResponse";
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload?: Uint8Array;
}

export namespace UpdateThingShadowResponse {
  export function isa(o: any): o is UpdateThingShadowResponse {
    return _smithy.isa(o, "UpdateThingShadowResponse");
  }
}
