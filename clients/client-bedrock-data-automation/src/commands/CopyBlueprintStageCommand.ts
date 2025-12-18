// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockDataAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CopyBlueprintStageRequest, CopyBlueprintStageResponse } from "../models/models_0";
import { CopyBlueprintStage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyBlueprintStageCommand}.
 */
export interface CopyBlueprintStageCommandInput extends CopyBlueprintStageRequest {}
/**
 * @public
 *
 * The output of {@link CopyBlueprintStageCommand}.
 */
export interface CopyBlueprintStageCommandOutput extends CopyBlueprintStageResponse, __MetadataBearer {}

/**
 * Copies a Blueprint from one stage to another
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, CopyBlueprintStageCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, CopyBlueprintStageCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // CopyBlueprintStageRequest
 *   blueprintArn: "STRING_VALUE", // required
 *   sourceStage: "DEVELOPMENT" || "LIVE", // required
 *   targetStage: "DEVELOPMENT" || "LIVE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CopyBlueprintStageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CopyBlueprintStageCommandInput - {@link CopyBlueprintStageCommandInput}
 * @returns {@link CopyBlueprintStageCommandOutput}
 * @see {@link CopyBlueprintStageCommandInput} for command's `input` shape.
 * @see {@link CopyBlueprintStageCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockDataAutomationServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomation service.</p>
 *
 *
 * @public
 */
export class CopyBlueprintStageCommand extends $Command
  .classBuilder<
    CopyBlueprintStageCommandInput,
    CopyBlueprintStageCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "CopyBlueprintStage", {})
  .n("BedrockDataAutomationClient", "CopyBlueprintStageCommand")
  .sc(CopyBlueprintStage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyBlueprintStageRequest;
      output: {};
    };
    sdk: {
      input: CopyBlueprintStageCommandInput;
      output: CopyBlueprintStageCommandOutput;
    };
  };
}
