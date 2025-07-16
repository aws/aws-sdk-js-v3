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
  CreateCodeInterpreterRequest,
  CreateCodeInterpreterRequestFilterSensitiveLog,
  CreateCodeInterpreterResponse,
} from "../models/models_0";
import { de_CreateCodeInterpreterCommand, se_CreateCodeInterpreterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCodeInterpreterCommand}.
 */
export interface CreateCodeInterpreterCommandInput extends CreateCodeInterpreterRequest {}
/**
 * @public
 *
 * The output of {@link CreateCodeInterpreterCommand}.
 */
export interface CreateCodeInterpreterCommandOutput extends CreateCodeInterpreterResponse, __MetadataBearer {}

/**
 * <p>Creates a custom code interpreter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateCodeInterpreterCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateCodeInterpreterCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateCodeInterpreterRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   executionRoleArn: "STRING_VALUE",
 *   networkConfiguration: { // CodeInterpreterNetworkConfiguration
 *     networkMode: "PUBLIC" || "SANDBOX", // required
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateCodeInterpreterCommand(input);
 * const response = await client.send(command);
 * // { // CreateCodeInterpreterResponse
 * //   codeInterpreterId: "STRING_VALUE", // required
 * //   codeInterpreterArn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "CREATE_FAILED" || "READY" || "DELETING" || "DELETE_FAILED" || "DELETED", // required
 * // };
 *
 * ```
 *
 * @param CreateCodeInterpreterCommandInput - {@link CreateCodeInterpreterCommandInput}
 * @returns {@link CreateCodeInterpreterCommandOutput}
 * @see {@link CreateCodeInterpreterCommandInput} for command's `input` shape.
 * @see {@link CreateCodeInterpreterCommandOutput} for command's `response` shape.
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
export class CreateCodeInterpreterCommand extends $Command
  .classBuilder<
    CreateCodeInterpreterCommandInput,
    CreateCodeInterpreterCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "CreateCodeInterpreter", {})
  .n("BedrockAgentCoreControlClient", "CreateCodeInterpreterCommand")
  .f(CreateCodeInterpreterRequestFilterSensitiveLog, void 0)
  .ser(se_CreateCodeInterpreterCommand)
  .de(de_CreateCodeInterpreterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCodeInterpreterRequest;
      output: CreateCodeInterpreterResponse;
    };
    sdk: {
      input: CreateCodeInterpreterCommandInput;
      output: CreateCodeInterpreterCommandOutput;
    };
  };
}
