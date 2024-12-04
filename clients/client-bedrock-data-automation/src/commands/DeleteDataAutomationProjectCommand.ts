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
import { DeleteDataAutomationProjectRequest, DeleteDataAutomationProjectResponse } from "../models/models_0";
import {
  de_DeleteDataAutomationProjectCommand,
  se_DeleteDataAutomationProjectCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataAutomationProjectCommand}.
 */
export interface DeleteDataAutomationProjectCommandInput extends DeleteDataAutomationProjectRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataAutomationProjectCommand}.
 */
export interface DeleteDataAutomationProjectCommandOutput
  extends DeleteDataAutomationProjectResponse,
    __MetadataBearer {}

/**
 * Deletes an existing Amazon Bedrock Keystone DataAutomationProject
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, DeleteDataAutomationProjectCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, DeleteDataAutomationProjectCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // DeleteDataAutomationProjectRequest
 *   projectArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataAutomationProjectCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataAutomationProjectResponse
 * //   projectArn: "STRING_VALUE", // required
 * //   status: "COMPLETED" || "IN_PROGRESS" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteDataAutomationProjectCommandInput - {@link DeleteDataAutomationProjectCommandInput}
 * @returns {@link DeleteDataAutomationProjectCommandOutput}
 * @see {@link DeleteDataAutomationProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteDataAutomationProjectCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteDataAutomationProjectCommand extends $Command
  .classBuilder<
    DeleteDataAutomationProjectCommandInput,
    DeleteDataAutomationProjectCommandOutput,
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
  .s("AmazonBedrockKeystoneBuildTimeService", "DeleteDataAutomationProject", {})
  .n("BedrockDataAutomationClient", "DeleteDataAutomationProjectCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDataAutomationProjectCommand)
  .de(de_DeleteDataAutomationProjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataAutomationProjectRequest;
      output: DeleteDataAutomationProjectResponse;
    };
    sdk: {
      input: DeleteDataAutomationProjectCommandInput;
      output: DeleteDataAutomationProjectCommandOutput;
    };
  };
}
