// smithy-typescript generated code
import type { InternalStreamFailure, ModelStreamError } from "./errors";

/**
 * The request for InvokeGlobalInferenceGateway.
 * @public
 */
export interface InvokeGlobalInferenceGatewayInput {
  /**
   * The ID of the Global Inference Gateway to invoke. IAM policies refer to the
   * gateway by its ARN,
   * `arn:<partition>:sagemaker:<region>:<account>:global-inference-gateway/<id>`.
   * @public
   */
  GatewayId: string | undefined;

  /**
   * The MIME type you want for the response. It is passed to the model server.
   * @public
   */
  Accept?: string | undefined;

  /**
   * The MIME type of the request body. Pass `application/json` (parameters
   * such as `charset=utf-8` are allowed): the body is one OpenAI JSON object.
   * The Global Inference Gateway rejects other content types with a 415 error.
   * @public
   */
  ContentType: string | undefined;

  /**
   * Per-caller customer identity token (a JWT), forwarded unchanged to the
   * inference gateway, which validates it. The gateway does not use it to
   * authorize the request. Include it in the SigV4 signed headers so it
   * cannot be altered in transit. Redacted from logs, metrics and traces.
   * @public
   */
  CustomerIdentityToken?: string | undefined;

  /**
   * The inference request body: one OpenAI JSON object, at most 10 MiB. Its
   * content is passed to the model server unchanged, except that the request
   * is always sent with `"stream": false`: this operation returns one JSON
   * document, so a `"stream": true` in the body is overridden (use
   * InvokeGlobalInferenceGatewayWithResponseStream to stream). A body that is
   * not one JSON object, or that repeats the top-level `model` key with
   * different values, is rejected with a 400 validation error. A body larger
   * than 10 MiB is rejected with PayloadTooLargeException (413). The gateway
   * reads only `model` and `stream`, and does not store the body.
   * @public
   */
  Body: Uint8Array | undefined;
}

/**
 * The response from InvokeGlobalInferenceGateway.
 * @public
 */
export interface InvokeGlobalInferenceGatewayOutput {
  /**
   * The model server's OpenAI completion JSON, returned unchanged. A response
   * larger than 10 MiB fails with BadGatewayException (502).
   * @public
   */
  Body?: Uint8Array | undefined;
}

/**
 * The request for InvokeGlobalInferenceGatewayWithResponseStream. It has the
 * same members as the InvokeGlobalInferenceGateway request.
 * @public
 */
export interface InvokeGlobalInferenceGatewayWithResponseStreamInput {
  /**
   * The ID of the Global Inference Gateway to invoke, as for
   * InvokeGlobalInferenceGateway.
   * @public
   */
  GatewayId: string | undefined;

  /**
   * The MIME type you want for the response. It is passed to the model server.
   * @public
   */
  Accept?: string | undefined;

  /**
   * The MIME type of the request body, as for InvokeGlobalInferenceGateway.
   * Pass `application/json`.
   * @public
   */
  ContentType: string | undefined;

  /**
   * The customer identity token (a JWT), as for InvokeGlobalInferenceGateway.
   * It is passed unchanged to the inference gateway, which validates it.
   * @public
   */
  CustomerIdentityToken?: string | undefined;

  /**
   * The inference request body, as for InvokeGlobalInferenceGateway, except
   * that the request is always sent with `"stream": true`: this operation
   * returns an event stream, so a `"stream": false` in the body (or no
   * `stream` key) is overridden. A body larger than 10 MiB is rejected with
   * PayloadTooLargeException (413).
   * @public
   */
  Body: Uint8Array | undefined;
}

/**
 * A part of the streamed response.
 * @public
 */
export interface PayloadPart {
  /**
   * The bytes of this part: a chunk of the model server's server-sent event
   * (SSE) stream.
   * @public
   */
  Bytes?: Uint8Array | undefined;
}

/**
 * The events in the response stream. The response arrives as PayloadPart
 * events. A failure after the stream starts arrives as one
 * InternalStreamFailure event, and then the stream ends.
 * @public
 */
export type ResponseStream =
  | ResponseStream.InternalStreamFailureMember
  | ResponseStream.ModelStreamErrorMember
  | ResponseStream.PayloadPartMember
  | ResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace ResponseStream {
  /**
   * A part of the model server's response.
   * @public
   */
  export interface PayloadPartMember {
    PayloadPart: PayloadPart;
    ModelStreamError?: never;
    InternalStreamFailure?: never;
    $unknown?: never;
  }

  /**
   * Reserved for a model error during the stream. Not currently sent.
   * @public
   */
  export interface ModelStreamErrorMember {
    PayloadPart?: never;
    ModelStreamError: ModelStreamError;
    InternalStreamFailure?: never;
    $unknown?: never;
  }

  /**
   * A failure after the stream started. The stream ends after this event.
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
    PayloadPart: (value: PayloadPart) => T;
    ModelStreamError: (value: ModelStreamError) => T;
    InternalStreamFailure: (value: InternalStreamFailure) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The response from InvokeGlobalInferenceGatewayWithResponseStream.
 * @public
 */
export interface InvokeGlobalInferenceGatewayWithResponseStreamOutput {
  /**
   * The response as an AWS event stream (application/vnd.amazon.eventstream).
   * @public
   */
  Body?: AsyncIterable<ResponseStream> | undefined;
}
