// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDatasetExamplesRequest, UpdateDatasetExamplesResponse } from "../models/models_0";
import { UpdateDatasetExamples$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatasetExamplesCommand}.
 */
export interface UpdateDatasetExamplesCommandInput extends UpdateDatasetExamplesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetExamplesCommand}.
 */
export interface UpdateDatasetExamplesCommandOutput extends UpdateDatasetExamplesResponse, __MetadataBearer {}

/**
 * <p> Updates multiple existing examples in-place on DRAFT. All examples are validated against the dataset's schema type before any writes occur. If any example fails validation, the entire batch is rejected (all-or-nothing semantics). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateDatasetExamplesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateDatasetExamplesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateDatasetExamplesRequest
 *   datasetId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   examples: [ // DatasetExampleList // required
 *     "DOCUMENT_VALUE",
 *   ],
 * };
 * const command = new UpdateDatasetExamplesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDatasetExamplesResponse
 * //   datasetArn: "STRING_VALUE", // required
 * //   datasetId: "STRING_VALUE", // required
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   updatedCount: Number("long"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateDatasetExamplesCommandInput - {@link UpdateDatasetExamplesCommandInput}
 * @returns {@link UpdateDatasetExamplesCommandOutput}
 * @see {@link UpdateDatasetExamplesCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetExamplesCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class UpdateDatasetExamplesCommand extends $Command
  .classBuilder<
    UpdateDatasetExamplesCommandInput,
    UpdateDatasetExamplesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "UpdateDatasetExamples", {})
  .n("BedrockAgentCoreControlClient", "UpdateDatasetExamplesCommand")
  .sc(UpdateDatasetExamples$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDatasetExamplesRequest;
      output: UpdateDatasetExamplesResponse;
    };
    sdk: {
      input: UpdateDatasetExamplesCommandInput;
      output: UpdateDatasetExamplesCommandOutput;
    };
  };
}
