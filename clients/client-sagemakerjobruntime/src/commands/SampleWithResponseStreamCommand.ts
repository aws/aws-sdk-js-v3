// smithy-typescript generated code
import type {
  BlobPayloadInputTypes,
  MetadataBearer as __MetadataBearer,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SampleWithResponseStreamRequest, SampleWithResponseStreamResponse } from "../models/models_0";
import { SampleWithResponseStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 */
export type SampleWithResponseStreamCommandInputType = Omit<SampleWithResponseStreamRequest, "Body"> & {
  Body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link SampleWithResponseStreamCommand}.
 */
export interface SampleWithResponseStreamCommandInput extends SampleWithResponseStreamCommandInputType {}
/**
 * @public
 *
 * The output of {@link SampleWithResponseStreamCommand}.
 */
export interface SampleWithResponseStreamCommandOutput extends Omit<SampleWithResponseStreamResponse, "Body">, __MetadataBearer {
  Body: StreamingBlobPayloadOutputTypes;
}

/**
 * Sends a streaming inference request to the model during a job execution.
 * Returns the response as a stream of payload chunks. Each turn is captured
 * for later use.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerJobRuntimeClient, SampleWithResponseStreamCommand } from "@aws-sdk/client-sagemakerjobruntime"; // ES Modules import
 * // const { SagemakerJobRuntimeClient, SampleWithResponseStreamCommand } = require("@aws-sdk/client-sagemakerjobruntime"); // CommonJS import
 * // import type { SagemakerJobRuntimeClientConfig } from "@aws-sdk/client-sagemakerjobruntime";
 * const config = {}; // type is SagemakerJobRuntimeClientConfig
 * const client = new SagemakerJobRuntimeClient(config);
 * const input = { // SampleWithResponseStreamRequest
 *   JobArn: "STRING_VALUE", // required
 *   TrajectoryId: "STRING_VALUE", // required
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new SampleWithResponseStreamCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.Body.transformToByteArray();
 * // const str = await response.Body.transformToString();
 * // response.Body.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // SampleWithResponseStreamResponse
 * //   ContentType: "STRING_VALUE",
 * //   Body: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes // required
 * // };
 *
 * ```
 *
 * @param SampleWithResponseStreamCommandInput - {@link SampleWithResponseStreamCommandInput}
 * @returns {@link SampleWithResponseStreamCommandOutput}
 * @see {@link SampleWithResponseStreamCommandInput} for command's `input` shape.
 * @see {@link SampleWithResponseStreamCommandOutput} for command's `response` shape.
 * @see {@link SagemakerJobRuntimeClientResolvedConfig | config} for SagemakerJobRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  An internal service error occurred. Retry the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  You have exceeded a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled. Retry the request after a brief wait.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request is not valid. Check the request syntax and parameters
 *
 * @throws {@link SagemakerJobRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SagemakerJobRuntime service.</p>
 *
 *
 * @example Invoke SampleWithResponseStream
 * ```javascript
 * // Sends a streaming inference request and receives the response as a stream of payload chunks.
 * const input = {
 *   Body: "eyJtb2RlbCI6Im15LW1vZGVsIiwibWVzc2FnZXMiOlt7InJvbGUiOiJ1c2VyIiwiY29udGVudCI6IkhlbGxvIn1dfQ==",
 *   JobArn: "arn:aws:sagemaker:us-east-1:123456789012:job/AgentRFT/my-training-job",
 *   TrajectoryId: "trajectory-001"
 * };
 * const command = new SampleWithResponseStreamCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.Body.transformToByteArray();
 * // const str = await response.Body.transformToString();
 * // response.Body.destroy(); // only applicable to Node.js Readable streams.
 *
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SampleWithResponseStreamCommand extends command<SampleWithResponseStreamCommandInput, SampleWithResponseStreamCommandOutput>(
  _ep0,
  _mw0,
  "SampleWithResponseStream",
  SampleWithResponseStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SampleWithResponseStreamRequest;
      output: SampleWithResponseStreamResponse;
    };
    sdk: {
      input: SampleWithResponseStreamCommandInput;
      output: SampleWithResponseStreamCommandOutput;
    };
  };
}
