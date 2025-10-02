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
import { DeleteGatewayTargetRequest, DeleteGatewayTargetResponse } from "../models/models_0";
import { de_DeleteGatewayTargetCommand, se_DeleteGatewayTargetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGatewayTargetCommand}.
 */
export interface DeleteGatewayTargetCommandInput extends DeleteGatewayTargetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGatewayTargetCommand}.
 */
export interface DeleteGatewayTargetCommandOutput extends DeleteGatewayTargetResponse, __MetadataBearer {}

/**
 * <p>Deletes a gateway target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteGatewayTargetCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteGatewayTargetCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteGatewayTargetRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   targetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteGatewayTargetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGatewayTargetResponse
 * //   gatewayArn: "STRING_VALUE", // required
 * //   targetId: "STRING_VALUE", // required
 * //   status: "CREATING" || "UPDATING" || "UPDATE_UNSUCCESSFUL" || "DELETING" || "READY" || "FAILED", // required
 * //   statusReasons: [ // StatusReasons
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteGatewayTargetCommandInput - {@link DeleteGatewayTargetCommandInput}
 * @returns {@link DeleteGatewayTargetCommandOutput}
 * @see {@link DeleteGatewayTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayTargetCommandOutput} for command's `response` shape.
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
export class DeleteGatewayTargetCommand extends $Command
  .classBuilder<
    DeleteGatewayTargetCommandInput,
    DeleteGatewayTargetCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "DeleteGatewayTarget", {})
  .n("BedrockAgentCoreControlClient", "DeleteGatewayTargetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteGatewayTargetCommand)
  .de(de_DeleteGatewayTargetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGatewayTargetRequest;
      output: DeleteGatewayTargetResponse;
    };
    sdk: {
      input: DeleteGatewayTargetCommandInput;
      output: DeleteGatewayTargetCommandOutput;
    };
  };
}
