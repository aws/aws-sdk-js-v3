// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteGatewayTargetRequest, DeleteGatewayTargetResponse } from "../models/models_0";
import { DeleteGatewayTarget$ } from "../schemas/schemas_0";

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
 * <p>Deletes a gateway target.</p> <p>You cannot delete a target that is in a pending authorization state (<code>CREATE_PENDING_AUTH</code>, <code>UPDATE_PENDING_AUTH</code>, or <code>SYNCHRONIZE_PENDING_AUTH</code>). Wait for the authorization to complete or fail before deleting the target.</p>
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
 * //   status: "CREATING" || "UPDATING" || "UPDATE_UNSUCCESSFUL" || "DELETING" || "READY" || "FAILED" || "SYNCHRONIZING" || "SYNCHRONIZE_UNSUCCESSFUL" || "CREATE_PENDING_AUTH" || "UPDATE_PENDING_AUTH" || "SYNCHRONIZE_PENDING_AUTH", // required
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "DeleteGatewayTarget", {})
  .n("BedrockAgentCoreControlClient", "DeleteGatewayTargetCommand")
  .sc(DeleteGatewayTarget$)
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
