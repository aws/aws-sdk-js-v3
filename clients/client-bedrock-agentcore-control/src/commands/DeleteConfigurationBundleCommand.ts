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
import type { DeleteConfigurationBundleRequest, DeleteConfigurationBundleResponse } from "../models/models_0";
import { DeleteConfigurationBundle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationBundleCommand}.
 */
export interface DeleteConfigurationBundleCommandInput extends DeleteConfigurationBundleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationBundleCommand}.
 */
export interface DeleteConfigurationBundleCommandOutput extends DeleteConfigurationBundleResponse, __MetadataBearer {}

/**
 * <p>Deletes a configuration bundle and all of its versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteConfigurationBundleCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteConfigurationBundleCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteConfigurationBundleRequest
 *   bundleId: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigurationBundleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteConfigurationBundleResponse
 * //   bundleId: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param DeleteConfigurationBundleCommandInput - {@link DeleteConfigurationBundleCommandInput}
 * @returns {@link DeleteConfigurationBundleCommandOutput}
 * @see {@link DeleteConfigurationBundleCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationBundleCommandOutput} for command's `response` shape.
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
export class DeleteConfigurationBundleCommand extends $Command
  .classBuilder<
    DeleteConfigurationBundleCommandInput,
    DeleteConfigurationBundleCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "DeleteConfigurationBundle", {})
  .n("BedrockAgentCoreControlClient", "DeleteConfigurationBundleCommand")
  .sc(DeleteConfigurationBundle$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfigurationBundleRequest;
      output: DeleteConfigurationBundleResponse;
    };
    sdk: {
      input: DeleteConfigurationBundleCommandInput;
      output: DeleteConfigurationBundleCommandOutput;
    };
  };
}
