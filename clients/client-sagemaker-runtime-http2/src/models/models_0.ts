// smithy-typescript generated code
import type { InternalStreamFailure, ModelStreamError } from "./errors";

/**
 * Request payload part structure.
 *
 * @public
 */
export interface RequestPayloadPart {
  /**
   * The payload bytes.
   *
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * Data type header. Can be one of these possible values: "UTF8", "BINARY".
   *
   * @public
   */
  DataType?: string | undefined;

  /**
   * Completion state header. Can be one of these possible values: "PARTIAL", "COMPLETE".
   *
   * @public
   */
  CompletionState?: string | undefined;

  /**
   * Padding string for alignment.
   *
   * @public
   */
  P?: string | undefined;
}

/**
 * Request stream event union.
 *
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
   * Payload part event.
   *
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
   * The name of the endpoint to invoke.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The request payload stream.
   *
   * @public
   */
  Body: AsyncIterable<RequestStreamEvent> | undefined;

  /**
   * Target variant for the request.
   *
   * @public
   */
  TargetVariant?: string | undefined;

  /**
   * Model invocation path.
   *
   * @public
   */
  ModelInvocationPath?: string | undefined;

  /**
   * Model query string.
   *
   * @public
   */
  ModelQueryString?: string | undefined;
}

/**
 * Response payload part structure.
 *
 * @public
 */
export interface ResponsePayloadPart {
  /**
   * The payload bytes.
   *
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * Data type header. Can be one of these possible values: "UTF8", "BINARY".
   *
   * @public
   */
  DataType?: string | undefined;

  /**
   * Completion state header. Can be one of these possible values: "PARTIAL", "COMPLETE".
   *
   * @public
   */
  CompletionState?: string | undefined;

  /**
   * Padding string for alignment.
   *
   * @public
   */
  P?: string | undefined;
}

/**
 * Response stream event union.
 *
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
   * Payload part event.
   *
   * @public
   */
  export interface PayloadPartMember {
    PayloadPart: ResponsePayloadPart;
    ModelStreamError?: never;
    InternalStreamFailure?: never;
    $unknown?: never;
  }

  /**
   * Model stream error event.
   *
   * @public
   */
  export interface ModelStreamErrorMember {
    PayloadPart?: never;
    ModelStreamError: ModelStreamError;
    InternalStreamFailure?: never;
    $unknown?: never;
  }

  /**
   * Internal stream failure event.
   *
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
   * The response payload stream.
   *
   * @public
   */
  Body: AsyncIterable<ResponseStreamEvent> | undefined;

  /**
   * The invoked production variant.
   *
   * @public
   */
  InvokedProductionVariant?: string | undefined;
}
