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
import type { DeleteRegistryRequest, DeleteRegistryResponse } from "../models/models_1";
import { DeleteRegistry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRegistryCommand}.
 */
export interface DeleteRegistryCommandInput extends DeleteRegistryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRegistryCommand}.
 */
export interface DeleteRegistryCommandOutput extends DeleteRegistryResponse, __MetadataBearer {}

/**
 * <p>Deletes a registry. The registry must contain zero records before it can be deleted. This operation initiates the deletion process asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteRegistryCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteRegistryCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteRegistryRequest
 *   registryId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRegistryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRegistryResponse
 * //   status: "CREATING" || "READY" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param DeleteRegistryCommandInput - {@link DeleteRegistryCommandInput}
 * @returns {@link DeleteRegistryCommandOutput}
 * @see {@link DeleteRegistryCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistryCommandOutput} for command's `response` shape.
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
export class DeleteRegistryCommand extends $Command
  .classBuilder<
    DeleteRegistryCommandInput,
    DeleteRegistryCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "DeleteRegistry", {})
  .n("BedrockAgentCoreControlClient", "DeleteRegistryCommand")
  .sc(DeleteRegistry$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRegistryRequest;
      output: DeleteRegistryResponse;
    };
    sdk: {
      input: DeleteRegistryCommandInput;
      output: DeleteRegistryCommandOutput;
    };
  };
}
