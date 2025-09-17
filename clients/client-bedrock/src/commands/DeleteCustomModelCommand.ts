// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCustomModelRequest, DeleteCustomModelResponse } from "../models/models_0";
import { de_DeleteCustomModelCommand, se_DeleteCustomModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomModelCommand}.
 */
export interface DeleteCustomModelCommandInput extends DeleteCustomModelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomModelCommand}.
 */
export interface DeleteCustomModelCommandOutput extends DeleteCustomModelResponse, __MetadataBearer {}

/**
 * <p>Deletes a custom model that you created earlier. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteCustomModelCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteCustomModelCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // DeleteCustomModelRequest
 *   modelIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomModelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomModelCommandInput - {@link DeleteCustomModelCommandInput}
 * @returns {@link DeleteCustomModelCommandOutput}
 * @see {@link DeleteCustomModelCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomModelCommandOutput} for command's `response` shape.
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
export class DeleteCustomModelCommand extends $Command
  .classBuilder<
    DeleteCustomModelCommandInput,
    DeleteCustomModelCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "DeleteCustomModel", {})
  .n("BedrockClient", "DeleteCustomModelCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCustomModelCommand)
  .de(de_DeleteCustomModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomModelRequest;
      output: {};
    };
    sdk: {
      input: DeleteCustomModelCommandInput;
      output: DeleteCustomModelCommandOutput;
    };
  };
}
