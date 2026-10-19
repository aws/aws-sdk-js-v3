// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SampleTrainingSessionInput, SampleTrainingSessionOutput } from "../models/models_0";
import { SampleTrainingSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 */
export type SampleTrainingSessionCommandInputType = Omit<SampleTrainingSessionInput, "body"> & {
  body?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link SampleTrainingSessionCommand}.
 */
export interface SampleTrainingSessionCommandInput extends SampleTrainingSessionCommandInputType {}
/**
 * @public
 */
export type SampleTrainingSessionCommandOutputType = Omit<SampleTrainingSessionOutput, "body"> & {
  body: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link SampleTrainingSessionCommand}.
 */
export interface SampleTrainingSessionCommandOutput extends SampleTrainingSessionCommandOutputType, __MetadataBearer {}

/**
 * <p>Sends an inference request to the model associated with the specified training session and returns the response synchronously. The service passes the request and response bodies to and from the model without modification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerTrainingSessionRuntimeClient, SampleTrainingSessionCommand } from "@aws-sdk/client-sagemakertrainingsessionruntime"; // ES Modules import
 * // const { SageMakerTrainingSessionRuntimeClient, SampleTrainingSessionCommand } = require("@aws-sdk/client-sagemakertrainingsessionruntime"); // CommonJS import
 * // import type { SageMakerTrainingSessionRuntimeClientConfig } from "@aws-sdk/client-sagemakertrainingsessionruntime";
 * const config = {}; // type is SageMakerTrainingSessionRuntimeClientConfig
 * const client = new SageMakerTrainingSessionRuntimeClient(config);
 * const input = { // SampleTrainingSessionInput
 *   trainingSessionName: "STRING_VALUE", // required
 *   contentType: "STRING_VALUE",
 *   accept: "STRING_VALUE",
 *   modelPackageArn: "STRING_VALUE",
 *   body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new SampleTrainingSessionCommand(input);
 * const response = await client.send(command);
 * // { // SampleTrainingSessionOutput
 * //   contentType: "STRING_VALUE",
 * //   body: new Uint8Array(), // required
 * // };
 *
 * ```
 *
 * @param SampleTrainingSessionCommandInput - {@link SampleTrainingSessionCommandInput}
 * @returns {@link SampleTrainingSessionCommandOutput}
 * @see {@link SampleTrainingSessionCommandInput} for command's `input` shape.
 * @see {@link SampleTrainingSessionCommandOutput} for command's `response` shape.
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
 * @example Sample from a training session
 * ```javascript
 * // Sends a chat completion request to the session's current weights and receives the complete response in a single payload.
 * const input = {
 *   accept: "application/json",
 *   body: "eyJtZXNzYWdlcyI6W3sicm9sZSI6InVzZXIiLCJjb250ZW50IjoiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBGcmFuY2U/In1dLCJtYXhfdG9rZW5zIjoxMjh9",
 *   contentType: "application/json",
 *   trainingSessionName: "my-training-session"
 * };
 * const command = new SampleTrainingSessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   body: "eyJjaG9pY2VzIjpbeyJtZXNzYWdlIjp7InJvbGUiOiJhc3Npc3RhbnQiLCJjb250ZW50IjoiUGFyaXMifSwiZmluaXNoX3JlYXNvbiI6InN0b3AifV19",
 *   contentType: "application/json"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SampleTrainingSessionCommand extends command<SampleTrainingSessionCommandInput, SampleTrainingSessionCommandOutput>(
  _ep0,
  _mw0,
  "SampleTrainingSession",
  SampleTrainingSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SampleTrainingSessionInput;
      output: SampleTrainingSessionOutput;
    };
    sdk: {
      input: SampleTrainingSessionCommandInput;
      output: SampleTrainingSessionCommandOutput;
    };
  };
}
