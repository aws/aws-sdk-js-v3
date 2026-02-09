// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBrowserProfileRequest, DeleteBrowserProfileResponse } from "../models/models_0";
import { DeleteBrowserProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBrowserProfileCommand}.
 */
export interface DeleteBrowserProfileCommandInput extends DeleteBrowserProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBrowserProfileCommand}.
 */
export interface DeleteBrowserProfileCommandOutput extends DeleteBrowserProfileResponse, __MetadataBearer {}

/**
 * <p>Deletes a browser profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteBrowserProfileCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteBrowserProfileCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteBrowserProfileRequest
 *   profileId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteBrowserProfileCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBrowserProfileResponse
 * //   profileId: "STRING_VALUE", // required
 * //   profileArn: "STRING_VALUE", // required
 * //   status: "READY" || "DELETING" || "DELETED" || "SAVING", // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   lastSavedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DeleteBrowserProfileCommandInput - {@link DeleteBrowserProfileCommandInput}
 * @returns {@link DeleteBrowserProfileCommandOutput}
 * @see {@link DeleteBrowserProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteBrowserProfileCommandOutput} for command's `response` shape.
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
export class DeleteBrowserProfileCommand extends $Command
  .classBuilder<
    DeleteBrowserProfileCommandInput,
    DeleteBrowserProfileCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "DeleteBrowserProfile", {})
  .n("BedrockAgentCoreControlClient", "DeleteBrowserProfileCommand")
  .sc(DeleteBrowserProfile$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBrowserProfileRequest;
      output: DeleteBrowserProfileResponse;
    };
    sdk: {
      input: DeleteBrowserProfileCommandInput;
      output: DeleteBrowserProfileCommandOutput;
    };
  };
}
