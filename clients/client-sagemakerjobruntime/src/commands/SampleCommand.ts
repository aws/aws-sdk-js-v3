// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SampleRequest, SampleResponse } from "../models/models_0";
import type {
  SagemakerJobRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SagemakerJobRuntimeClient";
import { Sample$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type SampleCommandInputType = Omit<SampleRequest, "Body"> & {
  Body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link SampleCommand}.
 */
export interface SampleCommandInput extends SampleCommandInputType {}
/**
 * @public
 */
export type SampleCommandOutputType = Omit<SampleResponse, "Body"> & {
  Body: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link SampleCommand}.
 */
export interface SampleCommandOutput extends SampleCommandOutputType, __MetadataBearer {}

/**
 * Sends an inference request to the model during a job execution. The request
 * and response bodies are forwarded to and from the model without modification.
 * Each turn (prompt and response) is captured for later use.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerJobRuntimeClient, SampleCommand } from "@aws-sdk/client-sagemakerjobruntime"; // ES Modules import
 * // const { SagemakerJobRuntimeClient, SampleCommand } = require("@aws-sdk/client-sagemakerjobruntime"); // CommonJS import
 * // import type { SagemakerJobRuntimeClientConfig } from "@aws-sdk/client-sagemakerjobruntime";
 * const config = {}; // type is SagemakerJobRuntimeClientConfig
 * const client = new SagemakerJobRuntimeClient(config);
 * const input = { // SampleRequest
 *   JobArn: "STRING_VALUE", // required
 *   TrajectoryId: "STRING_VALUE", // required
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new SampleCommand(input);
 * const response = await client.send(command);
 * // { // SampleResponse
 * //   ContentType: "STRING_VALUE",
 * //   Body: new Uint8Array(), // required
 * // };
 *
 * ```
 *
 * @param SampleCommandInput - {@link SampleCommandInput}
 * @returns {@link SampleCommandOutput}
 * @see {@link SampleCommandInput} for command's `input` shape.
 * @see {@link SampleCommandOutput} for command's `response` shape.
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
 * @example Invoke Sample
 * ```javascript
 * // Sends an inference request to the model and receives the response.
 * const input = {
 *   Body: "eyJtb2RlbCI6Im15LW1vZGVsIiwibWVzc2FnZXMiOlt7InJvbGUiOiJ1c2VyIiwiY29udGVudCI6IkhlbGxvIn1dfQ==",
 *   JobArn: "arn:aws:sagemaker:us-east-1:123456789012:job/AgentRFT/my-training-job",
 *   TrajectoryId: "trajectory-001"
 * };
 * const command = new SampleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SampleCommand extends $Command
  .classBuilder<
    SampleCommandInput,
    SampleCommandOutput,
    SagemakerJobRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SagemakerJobRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AgenticRFTRuntimeService", "Sample", {})
  .n("SagemakerJobRuntimeClient", "SampleCommand")
  .sc(Sample$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SampleRequest;
      output: SampleResponse;
    };
    sdk: {
      input: SampleCommandInput;
      output: SampleCommandOutput;
    };
  };
}
