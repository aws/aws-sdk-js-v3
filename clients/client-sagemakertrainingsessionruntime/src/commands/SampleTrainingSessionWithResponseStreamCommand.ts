// smithy-typescript generated code
import type {
  BlobPayloadInputTypes,
  MetadataBearer as __MetadataBearer,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SampleTrainingSessionWithResponseStreamInput,
  SampleTrainingSessionWithResponseStreamOutput,
} from "../models/models_0";
import { SampleTrainingSessionWithResponseStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 */
export type SampleTrainingSessionWithResponseStreamCommandInputType = Omit<SampleTrainingSessionWithResponseStreamInput, "body"> & {
  body?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link SampleTrainingSessionWithResponseStreamCommand}.
 */
export interface SampleTrainingSessionWithResponseStreamCommandInput extends SampleTrainingSessionWithResponseStreamCommandInputType {}
/**
 * @public
 *
 * The output of {@link SampleTrainingSessionWithResponseStreamCommand}.
 */
export interface SampleTrainingSessionWithResponseStreamCommandOutput extends Omit<SampleTrainingSessionWithResponseStreamOutput, "body">, __MetadataBearer {
  body: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Streams inference responses from the model associated with the specified training session. Use this operation for real-time token-by-token generation. The service passes the request body to the model without modification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerTrainingSessionRuntimeClient, SampleTrainingSessionWithResponseStreamCommand } from "@aws-sdk/client-sagemakertrainingsessionruntime"; // ES Modules import
 * // const { SageMakerTrainingSessionRuntimeClient, SampleTrainingSessionWithResponseStreamCommand } = require("@aws-sdk/client-sagemakertrainingsessionruntime"); // CommonJS import
 * // import type { SageMakerTrainingSessionRuntimeClientConfig } from "@aws-sdk/client-sagemakertrainingsessionruntime";
 * const config = {}; // type is SageMakerTrainingSessionRuntimeClientConfig
 * const client = new SageMakerTrainingSessionRuntimeClient(config);
 * const input = { // SampleTrainingSessionWithResponseStreamInput
 *   trainingSessionName: "STRING_VALUE", // required
 *   contentType: "STRING_VALUE",
 *   accept: "STRING_VALUE",
 *   modelPackageArn: "STRING_VALUE",
 *   body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new SampleTrainingSessionWithResponseStreamCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.body.transformToByteArray();
 * // const str = await response.body.transformToString();
 * // response.body.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // SampleTrainingSessionWithResponseStreamOutput
 * //   contentType: "STRING_VALUE",
 * //   body: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes // required
 * // };
 *
 * ```
 *
 * @param SampleTrainingSessionWithResponseStreamCommandInput - {@link SampleTrainingSessionWithResponseStreamCommandInput}
 * @returns {@link SampleTrainingSessionWithResponseStreamCommandOutput}
 * @see {@link SampleTrainingSessionWithResponseStreamCommandInput} for command's `input` shape.
 * @see {@link SampleTrainingSessionWithResponseStreamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerTrainingSessionRuntimeClientResolvedConfig | config} for SageMakerTrainingSessionRuntimeClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The training session is in a state that cannot accept new operations. The session must be in <code>Running</code> or <code>Blocked</code> state to accept requests.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Retry the request using exponential backoff.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified training session or operation does not exist, or the operation does not belong to the specified training session.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Retry the request after a brief wait using exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is not valid. Check the request syntax and parameters. Examples include invalid sequence numbers, malformed client tokens, missing required fields, or invalid operation configuration.</p>
 *
 * @throws {@link SageMakerTrainingSessionRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerTrainingSessionRuntime service.</p>
 *
 *
 * @example Stream samples from a training session
 * ```javascript
 * // Sends a chat completion request to the session's current weights and receives the response as a stream of payload chunks.
 * const input = {
 *   accept: "application/json",
 *   body: "eyJtZXNzYWdlcyI6W3sicm9sZSI6InVzZXIiLCJjb250ZW50IjoiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBGcmFuY2U/In1dLCJtYXhfdG9rZW5zIjoxMjgsInN0cmVhbSI6dHJ1ZX0=",
 *   contentType: "application/json",
 *   trainingSessionName: "my-training-session"
 * };
 * const command = new SampleTrainingSessionWithResponseStreamCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.body.transformToByteArray();
 * // const str = await response.body.transformToString();
 * // response.body.destroy(); // only applicable to Node.js Readable streams.
 *
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SampleTrainingSessionWithResponseStreamCommand extends command<SampleTrainingSessionWithResponseStreamCommandInput, SampleTrainingSessionWithResponseStreamCommandOutput>(
  _ep0,
  _mw0,
  "SampleTrainingSessionWithResponseStream",
  SampleTrainingSessionWithResponseStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SampleTrainingSessionWithResponseStreamInput;
      output: SampleTrainingSessionWithResponseStreamOutput;
    };
    sdk: {
      input: SampleTrainingSessionWithResponseStreamCommandInput;
      output: SampleTrainingSessionWithResponseStreamCommandOutput;
    };
  };
}
