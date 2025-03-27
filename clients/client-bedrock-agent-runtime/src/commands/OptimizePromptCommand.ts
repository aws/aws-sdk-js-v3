// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  OptimizePromptRequest,
  OptimizePromptRequestFilterSensitiveLog,
  OptimizePromptResponse,
  OptimizePromptResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_OptimizePromptCommand, se_OptimizePromptCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OptimizePromptCommand}.
 */
export interface OptimizePromptCommandInput extends OptimizePromptRequest {}
/**
 * @public
 *
 * The output of {@link OptimizePromptCommand}.
 */
export interface OptimizePromptCommandOutput extends OptimizePromptResponse, __MetadataBearer {}

/**
 * <p>Optimizes a prompt for the task that you specify. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-optimize.html">Optimize a prompt</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, OptimizePromptCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, OptimizePromptCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // OptimizePromptRequest
 *   input: { // InputPrompt Union: only one key present
 *     textPrompt: { // TextPrompt
 *       text: "STRING_VALUE", // required
 *     },
 *   },
 *   targetModelId: "STRING_VALUE", // required
 * };
 * const command = new OptimizePromptCommand(input);
 * const response = await client.send(command);
 * // { // OptimizePromptResponse
 * //   optimizedPrompt: { // OptimizedPromptStream Union: only one key present
 * //     optimizedPromptEvent: { // OptimizedPromptEvent
 * //       optimizedPrompt: { // OptimizedPrompt Union: only one key present
 * //         textPrompt: { // TextPrompt
 * //           text: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //     analyzePromptEvent: { // AnalyzePromptEvent
 * //       message: "STRING_VALUE",
 * //     },
 * //     internalServerException: { // InternalServerException
 * //       message: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //     },
 * //     throttlingException: { // ThrottlingException
 * //       message: "STRING_VALUE",
 * //     },
 * //     validationException: { // ValidationException
 * //       message: "STRING_VALUE",
 * //     },
 * //     dependencyFailedException: { // DependencyFailedException
 * //       message: "STRING_VALUE",
 * //       resourceName: "STRING_VALUE",
 * //     },
 * //     accessDeniedException: { // AccessDeniedException
 * //       message: "STRING_VALUE",
 * //     },
 * //     badGatewayException: { // BadGatewayException
 * //       message: "STRING_VALUE",
 * //       resourceName: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param OptimizePromptCommandInput - {@link OptimizePromptCommandInput}
 * @returns {@link OptimizePromptCommandOutput}
 * @see {@link OptimizePromptCommandInput} for command's `input` shape.
 * @see {@link OptimizePromptCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 *
 * @throws {@link BadGatewayException} (server fault)
 *  <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
 *
 * @throws {@link DependencyFailedException} (client fault)
 *  <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
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
 * @throws {@link BedrockAgentRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentRuntime service.</p>
 *
 *
 * @public
 */
export class OptimizePromptCommand extends $Command
  .classBuilder<
    OptimizePromptCommandInput,
    OptimizePromptCommandOutput,
    BedrockAgentRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentRunTimeService", "OptimizePrompt", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("BedrockAgentRuntimeClient", "OptimizePromptCommand")
  .f(OptimizePromptRequestFilterSensitiveLog, OptimizePromptResponseFilterSensitiveLog)
  .ser(se_OptimizePromptCommand)
  .de(de_OptimizePromptCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OptimizePromptRequest;
      output: OptimizePromptResponse;
    };
    sdk: {
      input: OptimizePromptCommandInput;
      output: OptimizePromptCommandOutput;
    };
  };
}
