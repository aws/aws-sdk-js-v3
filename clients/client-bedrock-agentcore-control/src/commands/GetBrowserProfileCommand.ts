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
import type { GetBrowserProfileRequest, GetBrowserProfileResponse } from "../models/models_0";
import { GetBrowserProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBrowserProfileCommand}.
 */
export interface GetBrowserProfileCommandInput extends GetBrowserProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetBrowserProfileCommand}.
 */
export interface GetBrowserProfileCommandOutput extends GetBrowserProfileResponse, __MetadataBearer {}

/**
 * <p>Gets information about a browser profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetBrowserProfileCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetBrowserProfileCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetBrowserProfileRequest
 *   profileId: "STRING_VALUE", // required
 * };
 * const command = new GetBrowserProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetBrowserProfileResponse
 * //   profileId: "STRING_VALUE", // required
 * //   profileArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "READY" || "DELETING" || "DELETED" || "SAVING", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   lastSavedAt: new Date("TIMESTAMP"),
 * //   lastSavedBrowserSessionId: "STRING_VALUE",
 * //   lastSavedBrowserId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBrowserProfileCommandInput - {@link GetBrowserProfileCommandInput}
 * @returns {@link GetBrowserProfileCommandOutput}
 * @see {@link GetBrowserProfileCommandInput} for command's `input` shape.
 * @see {@link GetBrowserProfileCommandOutput} for command's `response` shape.
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
export class GetBrowserProfileCommand extends $Command
  .classBuilder<
    GetBrowserProfileCommandInput,
    GetBrowserProfileCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetBrowserProfile", {})
  .n("BedrockAgentCoreControlClient", "GetBrowserProfileCommand")
  .sc(GetBrowserProfile$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBrowserProfileRequest;
      output: GetBrowserProfileResponse;
    };
    sdk: {
      input: GetBrowserProfileCommandInput;
      output: GetBrowserProfileCommandOutput;
    };
  };
}
