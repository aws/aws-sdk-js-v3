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
import type { CreateBrowserProfileRequest, CreateBrowserProfileResponse } from "../models/models_0";
import { CreateBrowserProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBrowserProfileCommand}.
 */
export interface CreateBrowserProfileCommandInput extends CreateBrowserProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateBrowserProfileCommand}.
 */
export interface CreateBrowserProfileCommandOutput extends CreateBrowserProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a browser profile in Amazon Bedrock AgentCore. A browser profile stores persistent browser data such as cookies, local storage, session storage, and browsing history that can be saved from browser sessions and reused in subsequent sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateBrowserProfileCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateBrowserProfileCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateBrowserProfileRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateBrowserProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateBrowserProfileResponse
 * //   profileId: "STRING_VALUE", // required
 * //   profileArn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   status: "READY" || "DELETING" || "DELETED" || "SAVING", // required
 * // };
 *
 * ```
 *
 * @param CreateBrowserProfileCommandInput - {@link CreateBrowserProfileCommandInput}
 * @returns {@link CreateBrowserProfileCommandOutput}
 * @see {@link CreateBrowserProfileCommandInput} for command's `input` shape.
 * @see {@link CreateBrowserProfileCommandOutput} for command's `response` shape.
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
export class CreateBrowserProfileCommand extends $Command
  .classBuilder<
    CreateBrowserProfileCommandInput,
    CreateBrowserProfileCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateBrowserProfile", {})
  .n("BedrockAgentCoreControlClient", "CreateBrowserProfileCommand")
  .sc(CreateBrowserProfile$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBrowserProfileRequest;
      output: CreateBrowserProfileResponse;
    };
    sdk: {
      input: CreateBrowserProfileCommandInput;
      output: CreateBrowserProfileCommandOutput;
    };
  };
}
