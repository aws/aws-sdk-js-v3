// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCodeInterpreterRequest, DeleteCodeInterpreterResponse } from "../models/models_0";
import { DeleteCodeInterpreter } from "../schemas/schemas_7_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCodeInterpreterCommand}.
 */
export interface DeleteCodeInterpreterCommandInput extends DeleteCodeInterpreterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCodeInterpreterCommand}.
 */
export interface DeleteCodeInterpreterCommandOutput extends DeleteCodeInterpreterResponse, __MetadataBearer {}

/**
 * <p>Deletes a custom code interpreter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteCodeInterpreterCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteCodeInterpreterCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteCodeInterpreterRequest
 *   codeInterpreterId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteCodeInterpreterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCodeInterpreterResponse
 * //   codeInterpreterId: "STRING_VALUE", // required
 * //   status: "CREATING" || "CREATE_FAILED" || "READY" || "DELETING" || "DELETE_FAILED" || "DELETED", // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DeleteCodeInterpreterCommandInput - {@link DeleteCodeInterpreterCommandInput}
 * @returns {@link DeleteCodeInterpreterCommandOutput}
 * @see {@link DeleteCodeInterpreterCommandInput} for command's `input` shape.
 * @see {@link DeleteCodeInterpreterCommandOutput} for command's `response` shape.
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
export class DeleteCodeInterpreterCommand extends $Command
  .classBuilder<
    DeleteCodeInterpreterCommandInput,
    DeleteCodeInterpreterCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "DeleteCodeInterpreter", {})
  .n("BedrockAgentCoreControlClient", "DeleteCodeInterpreterCommand")
  .sc(DeleteCodeInterpreter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCodeInterpreterRequest;
      output: DeleteCodeInterpreterResponse;
    };
    sdk: {
      input: DeleteCodeInterpreterCommandInput;
      output: DeleteCodeInterpreterCommandOutput;
    };
  };
}
