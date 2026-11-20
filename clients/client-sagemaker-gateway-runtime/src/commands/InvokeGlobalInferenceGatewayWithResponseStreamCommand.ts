// smithy-typescript generated code
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  InvokeGlobalInferenceGatewayWithResponseStreamInput,
  InvokeGlobalInferenceGatewayWithResponseStreamOutput,
} from "../models/models_0";
import { InvokeGlobalInferenceGatewayWithResponseStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 */
export type InvokeGlobalInferenceGatewayWithResponseStreamCommandInputType = Omit<InvokeGlobalInferenceGatewayWithResponseStreamInput, "Body"> & {
  Body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeGlobalInferenceGatewayWithResponseStreamCommand}.
 */
export interface InvokeGlobalInferenceGatewayWithResponseStreamCommandInput extends InvokeGlobalInferenceGatewayWithResponseStreamCommandInputType {}
/**
 * @public
 *
 * The output of {@link InvokeGlobalInferenceGatewayWithResponseStreamCommand}.
 */
export interface InvokeGlobalInferenceGatewayWithResponseStreamCommandOutput extends InvokeGlobalInferenceGatewayWithResponseStreamOutput, __MetadataBearer {}

/**
 * Streaming inference. Returns an AWS event stream of PayloadPart events that
 * carry the model server's server-sent event (SSE) bytes, so SDKs decode the
 * stream into events for you.
 *
 * The errors listed for this operation, other than ModelStreamError and
 * InternalStreamFailure, are returned before the response starts (before the
 * 200 status), so they end the request, not the stream. None of them can
 * occur after the 200. ModelStreamError and InternalStreamFailure appear only
 * as events in the stream, after the 200. Once the 200 is sent, the stream
 * carries the response as PayloadPart events. If reading the inference
 * gateway's response fails, the stream carries one InternalStreamFailure
 * event and then ends. ModelStreamError is reserved and is not currently sent.
 *
 * Errors carry their origin in the `Message` prefix. Every typed error's text
 * is in the `Message` member (JSON key `Message`), and starts with one of these
 * prefixes:
 *
 * * `Global Inference Gateway: ` -- the gateway rejected or failed the request
 *   itself: validation, authorization, throttling, routing (the gateway or
 *   model was not found, or no capacity is available), a gateway limit or time
 *   limit, or failing to reach the inference gateway
 *   (`Global Inference Gateway: could not reach the inference gateway: <reason>`,
 *   or `Global Inference Gateway: timed out waiting for the inference gateway`).
 *   This includes the 400 for an invalid request and the 413 for a request
 *   body that is too large.
 * * `inference gateway: ` -- the inference gateway serving the model returned
 *   an error status. The message gives that status code and up to 256 bytes of
 *   its error message, for example `inference gateway: 503 <message>`.
 * * `inference gateway (<component>): ` -- the same, when the inference
 *   gateway reports which of its components produced the error, for example
 *   `inference gateway (model server): 502 <message>`. The component is one of:
 *   * `config` -- the inference gateway's configuration and proxy layer.
 *   * `scheduler` -- the inference gateway's request scheduler.
 *   * `model selector` -- the inference gateway's model selector.
 *   * `model server` -- the model server.
 *
 * An InternalStreamFailure event's `Message` uses the same prefixes, with the
 * same text the buffered operation uses for the same failure. Its
 * `inference gateway: ` message carries no status:
 * `inference gateway: response ended unexpectedly` when the inference
 * gateway's connection failed while it was sending the response.
 *
 * Every error status the inference gateway returns before the 200 is a typed
 * error, chosen by that status as for InvokeGlobalInferenceGateway:
 *
 * * 400 and any other 4xx not listed here -- a 400 validation error.
 * * 401 and 403 -- AccessDeniedException (403).
 * * 404 -- ResourceNotFoundException.
 * * 408 -- GatewayTimeoutException (504).
 * * 429 -- ThrottlingException, with the `Retry-After` header.
 * * 502, and 500, 503 or any other 5xx not listed here -- BadGatewayException
 *   (502). A 500 or 503 from the inference gateway comes after the request was
 *   dispatched, so it is not modeled as retryable, and the gateway may already
 *   have tried another inference gateway. Standard SDK retry modes may still
 *   retry a 5xx status; set max attempts to 1 if a repeated inference is
 *   unacceptable.
 * * 504 -- GatewayTimeoutException.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGatewayRuntimeClient, InvokeGlobalInferenceGatewayWithResponseStreamCommand } from "@aws-sdk/client-sagemaker-gateway-runtime"; // ES Modules import
 * // const { SageMakerGatewayRuntimeClient, InvokeGlobalInferenceGatewayWithResponseStreamCommand } = require("@aws-sdk/client-sagemaker-gateway-runtime"); // CommonJS import
 * // import type { SageMakerGatewayRuntimeClientConfig } from "@aws-sdk/client-sagemaker-gateway-runtime";
 * const config = {}; // type is SageMakerGatewayRuntimeClientConfig
 * const client = new SageMakerGatewayRuntimeClient(config);
 * const input = { // InvokeGlobalInferenceGatewayWithResponseStreamInput
 *   GatewayId: "STRING_VALUE", // required
 *   Accept: "STRING_VALUE",
 *   ContentType: "STRING_VALUE", // required
 *   CustomerIdentityToken: "STRING_VALUE",
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new InvokeGlobalInferenceGatewayWithResponseStreamCommand(input);
 * const response = await client.send(command);
 * // { // InvokeGlobalInferenceGatewayWithResponseStreamOutput
 * //   Body: { // ResponseStream Union: only one key present
 * //     PayloadPart: { // PayloadPart
 * //       Bytes: new Uint8Array(),
 * //     },
 * //     ModelStreamError: { // ModelStreamError
 * //       Message: "STRING_VALUE", // required
 * //       ErrorCode: "StreamBroken" || "ModelInvocationTimeExceeded",
 * //     },
 * //     InternalStreamFailure: { // InternalStreamFailure
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param InvokeGlobalInferenceGatewayWithResponseStreamCommandInput - {@link InvokeGlobalInferenceGatewayWithResponseStreamCommandInput}
 * @returns {@link InvokeGlobalInferenceGatewayWithResponseStreamCommandOutput}
 * @see {@link InvokeGlobalInferenceGatewayWithResponseStreamCommandInput} for command's `input` shape.
 * @see {@link InvokeGlobalInferenceGatewayWithResponseStreamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGatewayRuntimeClientResolvedConfig | config} for SageMakerGatewayRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to invoke this gateway. Invoking requires the
 * `sagemaker:InvokeGlobalInferenceGateway` permission, or
 * `sagemaker:InvokeGlobalInferenceGatewayWithResponseStream` for the streaming
 * operation, on the gateway ARN. A message starting `inference gateway` means
 * the inference gateway serving the model refused the request with a 401 or
 * 403, for example for its customer identity token. Its status code is in the
 * message (the response status is 403), and up to 256 bytes of its error
 * message are quoted.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  502 -- The gateway could not get a usable response from the inference
 * gateway. The `Message` prefix says why:
 *
 * * `Global Inference Gateway: could not reach the inference gateway: <reason>`
 *   -- the request could not be sent, or the connection closed before a
 *   response arrived (for example, the connection failed, or the inference
 *   gateway closed it after reading the request).
 * * `Global Inference Gateway: timed out waiting for the inference gateway`
 *   -- on the buffered operation, the inference gateway stopped sending
 *   partway through the response body and the gateway's read timeout expired.
 *   (The same text on a GatewayTimeoutException means no response arrived.)
 * * Any other `Global Inference Gateway: ` message -- the gateway ended a
 *   response before it was complete, for example because it exceeded the
 *   10 MiB limit of the buffered operation, the request exceeded its maximum
 *   duration, or the inference gateway was taken out of service.
 * * `inference gateway: <status> <message>` -- the inference gateway serving
 *   the model returned a 502, 500, 503 or another 5xx error. Its status code
 *   is in the message (the response status is 502), and up to 256 bytes of its
 *   error message are quoted.
 * * `inference gateway: response ended unexpectedly` -- the inference
 *   gateway's connection failed while it was sending the response.
 *
 * The inference gateway names a component in the prefix when it reports one:
 * `inference gateway (<component>): `, where the component is `config` (the
 * inference gateway's configuration and proxy layer), `scheduler` (its request
 * scheduler), `model selector` (its model selector) or `model server` (the
 * model server).
 *
 * Not modeled as retryable: a 502 can mean the inference already ran, and the
 * gateway may already have tried another inference gateway. Standard SDK retry
 * modes may still retry a 5xx status, which would run (and bill) the inference
 * again; set max attempts to 1 if a repeated inference is unacceptable.
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  504 -- The inference gateway did not respond in time. The `Message` prefix
 * says whose time limit expired:
 *
 * * `Global Inference Gateway: timed out waiting for the inference gateway`
 *   -- the gateway's limit on the wait for the first part of the response.
 * * `inference gateway: <status> <message>` -- the inference gateway serving
 *   the model returned a 504, or a 408 because it timed out waiting for the
 *   request to arrive. Its status code is
 *   in the message (the response status is 504), and up to 256 bytes of its
 *   error message are quoted.
 *
 * The inference gateway names a component in the prefix when it reports one:
 * `inference gateway (<component>): `, where the component is `config` (the
 * inference gateway's configuration and proxy layer), `scheduler` (its request
 * scheduler), `model selector` (its model selector) or `model server` (the
 * model server).
 *
 * Not modeled as retryable: a timeout does not prove the inference did not
 * run, and the gateway may already have tried another inference gateway.
 * Standard SDK retry modes may still retry a 5xx status, which could run (and
 * bill) the inference again; set max attempts to 1 if a repeated inference is
 * unacceptable.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected internal failure occurred.
 *
 * @throws {@link InternalStreamFailure} (server fault)
 *  A failure after the stream started. The `Message` says where it came from:
 * `Global Inference Gateway: ` when a gateway time limit expired or the
 * inference gateway was taken out of service, or
 * `inference gateway: response ended unexpectedly` when the inference
 * gateway's connection failed while it was sending the response. The stream
 * ends after this event.
 *
 * @throws {@link ModelStreamError} (client fault)
 *  Reserved for a model error during the stream. Not currently sent; a failure
 * after the stream starts is reported as InternalStreamFailure.
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  The request body exceeds the 10 MiB limit. Reduce the size of the payload
 * and send the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  No gateway with this ID exists in this account and Region, or no target of
 * the gateway serves the model named in the request body. A model that is
 * served but has no available target right now returns
 * ServiceUnavailableException instead. A message starting `inference gateway`
 * means the inference gateway serving the model returned a 404; up to 256
 * bytes of its error message are quoted.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  The service is temporarily unable to serve the request, for example because
 * no capacity is available for the requested model. The request was not
 * dispatched for inference. A 503 returned by the inference gateway serving
 * the model after dispatch is reported as BadGatewayException, with the 503
 * in its `Message`, not as this error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled before it was dispatched for inference. Retry the
 * request with backoff, after the `Retry-After` seconds when the response
 * carries one. A message starting `inference gateway` means the last
 * inference gateway tried for the model returned a 429. The gateway may have
 * tried others first, and they may have failed for other reasons. Up to 256
 * bytes of its error message are quoted.
 *
 * @throws {@link SageMakerGatewayRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerGatewayRuntime service.</p>
 *
 *
 * @public
 */
export class InvokeGlobalInferenceGatewayWithResponseStreamCommand extends command<InvokeGlobalInferenceGatewayWithResponseStreamCommandInput, InvokeGlobalInferenceGatewayWithResponseStreamCommandOutput>(
  _ep0,
  _mw0,
  "InvokeGlobalInferenceGatewayWithResponseStream",
  InvokeGlobalInferenceGatewayWithResponseStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeGlobalInferenceGatewayWithResponseStreamInput;
      output: InvokeGlobalInferenceGatewayWithResponseStreamOutput;
    };
    sdk: {
      input: InvokeGlobalInferenceGatewayWithResponseStreamCommandInput;
      output: InvokeGlobalInferenceGatewayWithResponseStreamCommandOutput;
    };
  };
}
