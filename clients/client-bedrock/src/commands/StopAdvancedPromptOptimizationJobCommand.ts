// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  StopAdvancedPromptOptimizationJobRequest,
  StopAdvancedPromptOptimizationJobResponse,
} from "../models/models_0";
import { StopAdvancedPromptOptimizationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopAdvancedPromptOptimizationJobCommand}.
 */
export interface StopAdvancedPromptOptimizationJobCommandInput extends StopAdvancedPromptOptimizationJobRequest {}
/**
 * @public
 *
 * The output of {@link StopAdvancedPromptOptimizationJobCommand}.
 */
export interface StopAdvancedPromptOptimizationJobCommandOutput extends StopAdvancedPromptOptimizationJobResponse, __MetadataBearer {}

/**
 * Stops an in-progress advanced prompt optimization job.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, StopAdvancedPromptOptimizationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, StopAdvancedPromptOptimizationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // StopAdvancedPromptOptimizationJobRequest
 *   jobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StopAdvancedPromptOptimizationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAdvancedPromptOptimizationJobCommandInput - {@link StopAdvancedPromptOptimizationJobCommandInput}
 * @returns {@link StopAdvancedPromptOptimizationJobCommandOutput}
 * @see {@link StopAdvancedPromptOptimizationJobCommandInput} for command's `input` shape.
 * @see {@link StopAdvancedPromptOptimizationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class StopAdvancedPromptOptimizationJobCommand extends $Command
  .classBuilder<
    StopAdvancedPromptOptimizationJobCommandInput,
    StopAdvancedPromptOptimizationJobCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockControlPlaneService", "StopAdvancedPromptOptimizationJob", {})
  .n("BedrockClient", "StopAdvancedPromptOptimizationJobCommand")
  .sc(StopAdvancedPromptOptimizationJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopAdvancedPromptOptimizationJobRequest;
      output: {};
    };
    sdk: {
      input: StopAdvancedPromptOptimizationJobCommandInput;
      output: StopAdvancedPromptOptimizationJobCommandOutput;
    };
  };
}
