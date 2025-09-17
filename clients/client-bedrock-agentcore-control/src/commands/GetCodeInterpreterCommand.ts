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
import {
  GetCodeInterpreterRequest,
  GetCodeInterpreterResponse,
  GetCodeInterpreterResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetCodeInterpreterCommand, se_GetCodeInterpreterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCodeInterpreterCommand}.
 */
export interface GetCodeInterpreterCommandInput extends GetCodeInterpreterRequest {}
/**
 * @public
 *
 * The output of {@link GetCodeInterpreterCommand}.
 */
export interface GetCodeInterpreterCommandOutput extends GetCodeInterpreterResponse, __MetadataBearer {}

/**
 * <p>Gets information about a custom code interpreter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetCodeInterpreterCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetCodeInterpreterCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetCodeInterpreterRequest
 *   codeInterpreterId: "STRING_VALUE", // required
 * };
 * const command = new GetCodeInterpreterCommand(input);
 * const response = await client.send(command);
 * // { // GetCodeInterpreterResponse
 * //   codeInterpreterId: "STRING_VALUE", // required
 * //   codeInterpreterArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   executionRoleArn: "STRING_VALUE",
 * //   networkConfiguration: { // CodeInterpreterNetworkConfiguration
 * //     networkMode: "PUBLIC" || "SANDBOX", // required
 * //   },
 * //   status: "CREATING" || "CREATE_FAILED" || "READY" || "DELETING" || "DELETE_FAILED" || "DELETED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetCodeInterpreterCommandInput - {@link GetCodeInterpreterCommandInput}
 * @returns {@link GetCodeInterpreterCommandOutput}
 * @see {@link GetCodeInterpreterCommandInput} for command's `input` shape.
 * @see {@link GetCodeInterpreterCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
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
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class GetCodeInterpreterCommand extends $Command
  .classBuilder<
    GetCodeInterpreterCommandInput,
    GetCodeInterpreterCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "GetCodeInterpreter", {})
  .n("BedrockAgentCoreControlClient", "GetCodeInterpreterCommand")
  .f(void 0, GetCodeInterpreterResponseFilterSensitiveLog)
  .ser(se_GetCodeInterpreterCommand)
  .de(de_GetCodeInterpreterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCodeInterpreterRequest;
      output: GetCodeInterpreterResponse;
    };
    sdk: {
      input: GetCodeInterpreterCommandInput;
      output: GetCodeInterpreterCommandOutput;
    };
  };
}
