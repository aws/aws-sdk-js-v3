// smithy-typescript generated code
import { InternalStreamFailure, ModelStreamError } from "./errors";

/**
 * <p>Request payload part structure.</p>
 * @public
 */
export interface RequestPayloadPart {
  /**
   * <p>The payload bytes.</p>
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * <p>Data type header. Can be one of these possible values: "UTF8", "BINARY".</p>
   * @public
   */
  DataType?: string | undefined;

  /**
   * <p>Completion state header. Can be one of these possible values: "PARTIAL", "COMPLETE".</p>
   * @public
   */
  CompletionState?: string | undefined;

  /**
   * <p>Padding string for alignment.</p>
   * @public
   */
  P?: string | undefined;
}

/**
 * <p>Request stream event union.</p>
 * @public
 */
export type RequestStreamEvent =
  | RequestStreamEvent.PayloadPartMember
  | RequestStreamEvent.$UnknownMember;

/**
 * @public
 */
export namespace RequestStreamEvent {
  /**
   * <p>Payload part event.</p>
   * @public
   */
  export interface PayloadPartMember {
    PayloadPart: RequestPayloadPart;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PayloadPart?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PayloadPart: (value: RequestPayloadPart) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeEndpointWithBidirectionalStreamInput {
  /**
   * <p>The name of the endpoint to invoke.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The request payload stream.</p>
   * @public
   */
  Body: AsyncIterable<RequestStreamEvent> | undefined;

  /**
   * <p>Target variant for the request.</p>
   * @public
   */
  TargetVariant?: string | undefined;

  /**
   * <p>Model invocation path.</p>
   * @public
   */
  ModelInvocationPath?: string | undefined;

  /**
   * <p>Model query string.</p>
   * @public
   */
  ModelQueryString?: string | undefined;
}

/**
 * <p>Response payload part structure.</p>
 * @public
 */
export interface ResponsePayloadPart {
  /**
   * <p>The payload bytes.</p>
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * <p>Data type header. Can be one of these possible values: "UTF8", "BINARY".</p>
   * @public
   */
  DataType?: string | undefined;

  /**
   * <p>Completion state header. Can be one of these possible values: "PARTIAL", "COMPLETE".</p>
   * @public
   */
  CompletionState?: string | undefined;

  /**
   * <p>Padding string for alignment.</p>
   * @public
   */
  P?: string | undefined;
}

/**
 * <p>Response stream event union.</p>
 * @public
 */
export type ResponseStreamEvent =
  | ResponseStreamEvent.InternalStreamFailureMember
  | ResponseStreamEvent.ModelStreamErrorMember
  | ResponseStreamEvent.PayloadPartMember
  | ResponseStreamEvent.$UnknownMember;

/**
 * @public
 */
export namespace ResponseStreamEvent {
  /**
   * <p>Payload part event.</p>
   * @public
   */
  export interface PayloadPartMember {
    PayloadPart: ResponsePayloadPart;
    ModelStreamError?: never;
    InternalStreamFailure?: never;
    $unknown?: never;
  }

  /**
   * <p>Model stream error event.</p>
   * @public
   */
  export interface ModelStreamErrorMember {
    PayloadPart?: never;
    ModelStreamError: ModelStreamError;
    InternalStreamFailure?: never;
    $unknown?: never;
  }

  /**
   * <p>Internal stream failure event.</p>
   * @public
   */
  export interface InternalStreamFailureMember {
    PayloadPart?: never;
    ModelStreamError?: never;
    InternalStreamFailure: InternalStreamFailure;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PayloadPart?: never;
    ModelStreamError?: never;
    InternalStreamFailure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PayloadPart: (value: ResponsePayloadPart) => T;
    ModelStreamError: (value: ModelStreamError) => T;
    InternalStreamFailure: (value: InternalStreamFailure) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeEndpointWithBidirectionalStreamOutput {
  /**
   * <p>The response payload stream.</p>
   * @public
   */
  Body: AsyncIterable<ResponseStreamEvent> | undefined;

  /**
   * <p>The invoked production variant.</p>
   * @public
   */
  InvokedProductionVariant?: string | undefined;
}
