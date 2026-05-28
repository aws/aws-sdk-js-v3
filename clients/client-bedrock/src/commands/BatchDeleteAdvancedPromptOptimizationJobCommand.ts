// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  BatchDeleteAdvancedPromptOptimizationJobRequest,
  BatchDeleteAdvancedPromptOptimizationJobResponse,
} from "../models/models_0";
import { BatchDeleteAdvancedPromptOptimizationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteAdvancedPromptOptimizationJobCommand}.
 */
export interface BatchDeleteAdvancedPromptOptimizationJobCommandInput extends BatchDeleteAdvancedPromptOptimizationJobRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteAdvancedPromptOptimizationJobCommand}.
 */
export interface BatchDeleteAdvancedPromptOptimizationJobCommandOutput extends BatchDeleteAdvancedPromptOptimizationJobResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more advanced prompt optimization jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, BatchDeleteAdvancedPromptOptimizationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, BatchDeleteAdvancedPromptOptimizationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // BatchDeleteAdvancedPromptOptimizationJobRequest
 *   jobIdentifiers: [ // AdvancedPromptOptimizationJobIdentifiers // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteAdvancedPromptOptimizationJobCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteAdvancedPromptOptimizationJobResponse
 * //   errors: [ // BatchDeleteAdvancedPromptOptimizationJobErrors // required
 * //     { // BatchDeleteAdvancedPromptOptimizationJobError
 * //       jobIdentifier: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   advancedPromptOptimizationJobs: [ // BatchDeleteAdvancedPromptOptimizationJobItems // required
 * //     { // BatchDeleteAdvancedPromptOptimizationJobItem
 * //       jobIdentifier: "STRING_VALUE", // required
 * //       jobStatus: "InProgress" || "Completed" || "Failed" || "PartiallyCompleted" || "Stopping" || "Stopped" || "Deleting", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteAdvancedPromptOptimizationJobCommandInput - {@link BatchDeleteAdvancedPromptOptimizationJobCommandInput}
 * @returns {@link BatchDeleteAdvancedPromptOptimizationJobCommandOutput}
 * @see {@link BatchDeleteAdvancedPromptOptimizationJobCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteAdvancedPromptOptimizationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
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
export class BatchDeleteAdvancedPromptOptimizationJobCommand extends $Command
  .classBuilder<
    BatchDeleteAdvancedPromptOptimizationJobCommandInput,
    BatchDeleteAdvancedPromptOptimizationJobCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockControlPlaneService", "BatchDeleteAdvancedPromptOptimizationJob", {})
  .n("BedrockClient", "BatchDeleteAdvancedPromptOptimizationJobCommand")
  .sc(BatchDeleteAdvancedPromptOptimizationJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteAdvancedPromptOptimizationJobRequest;
      output: BatchDeleteAdvancedPromptOptimizationJobResponse;
    };
    sdk: {
      input: BatchDeleteAdvancedPromptOptimizationJobCommandInput;
      output: BatchDeleteAdvancedPromptOptimizationJobCommandOutput;
    };
  };
}
