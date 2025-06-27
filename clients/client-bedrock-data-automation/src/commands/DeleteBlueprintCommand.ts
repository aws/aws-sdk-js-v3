// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockDataAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBlueprintRequest, DeleteBlueprintResponse } from "../models/models_0";
import { de_DeleteBlueprintCommand, se_DeleteBlueprintCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBlueprintCommand}.
 */
export interface DeleteBlueprintCommandInput extends DeleteBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBlueprintCommand}.
 */
export interface DeleteBlueprintCommandOutput extends DeleteBlueprintResponse, __MetadataBearer {}

/**
 * Deletes an existing Amazon Bedrock Data Automation Blueprint
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, DeleteBlueprintCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, DeleteBlueprintCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // DeleteBlueprintRequest
 *   blueprintArn: "STRING_VALUE", // required
 *   blueprintVersion: "STRING_VALUE",
 * };
 * const command = new DeleteBlueprintCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBlueprintCommandInput - {@link DeleteBlueprintCommandInput}
 * @returns {@link DeleteBlueprintCommandOutput}
 * @see {@link DeleteBlueprintCommandInput} for command's `input` shape.
 * @see {@link DeleteBlueprintCommandOutput} for command's `response` shape.
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
export class DeleteBlueprintCommand extends $Command
  .classBuilder<
    DeleteBlueprintCommandInput,
    DeleteBlueprintCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "DeleteBlueprint", {})
  .n("BedrockDataAutomationClient", "DeleteBlueprintCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBlueprintCommand)
  .de(de_DeleteBlueprintCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBlueprintRequest;
      output: {};
    };
    sdk: {
      input: DeleteBlueprintCommandInput;
      output: DeleteBlueprintCommandOutput;
    };
  };
}
