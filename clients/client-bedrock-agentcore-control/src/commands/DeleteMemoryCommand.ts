// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMemoryInput, DeleteMemoryOutput } from "../models/models_0";
import { de_DeleteMemoryCommand, se_DeleteMemoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMemoryCommand}.
 */
export interface DeleteMemoryCommandInput extends DeleteMemoryInput {}
/**
 * @public
 *
 * The output of {@link DeleteMemoryCommand}.
 */
export interface DeleteMemoryCommandOutput extends DeleteMemoryOutput, __MetadataBearer {}

/**
 * <p>Deletes a memory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteMemoryCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteMemoryCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteMemoryInput
 *   clientToken: "STRING_VALUE",
 *   memoryId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMemoryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMemoryOutput
 * //   memoryId: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "FAILED" || "DELETING",
 * // };
 *
 * ```
 *
 * @param DeleteMemoryCommandInput - {@link DeleteMemoryCommandInput}
 * @returns {@link DeleteMemoryCommandOutput}
 * @see {@link DeleteMemoryCommandInput} for command's `input` shape.
 * @see {@link DeleteMemoryCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>API rate limit has been exceeded.</p>
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
export class DeleteMemoryCommand extends $Command
  .classBuilder<
    DeleteMemoryCommandInput,
    DeleteMemoryCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCoreControl", "DeleteMemory", {})
  .n("BedrockAgentCoreControlClient", "DeleteMemoryCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMemoryCommand)
  .de(de_DeleteMemoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMemoryInput;
      output: DeleteMemoryOutput;
    };
    sdk: {
      input: DeleteMemoryCommandInput;
      output: DeleteMemoryCommandOutput;
    };
  };
}
