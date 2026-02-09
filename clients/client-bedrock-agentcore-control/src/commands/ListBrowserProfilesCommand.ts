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
import type { ListBrowserProfilesRequest, ListBrowserProfilesResponse } from "../models/models_0";
import { ListBrowserProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBrowserProfilesCommand}.
 */
export interface ListBrowserProfilesCommandInput extends ListBrowserProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListBrowserProfilesCommand}.
 */
export interface ListBrowserProfilesCommandOutput extends ListBrowserProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists all browser profiles in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListBrowserProfilesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListBrowserProfilesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListBrowserProfilesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBrowserProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListBrowserProfilesResponse
 * //   profileSummaries: [ // BrowserProfileSummaries // required
 * //     { // BrowserProfileSummary
 * //       profileId: "STRING_VALUE", // required
 * //       profileArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "READY" || "DELETING" || "DELETED" || "SAVING", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       lastSavedAt: new Date("TIMESTAMP"),
 * //       lastSavedBrowserSessionId: "STRING_VALUE",
 * //       lastSavedBrowserId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBrowserProfilesCommandInput - {@link ListBrowserProfilesCommandInput}
 * @returns {@link ListBrowserProfilesCommandOutput}
 * @see {@link ListBrowserProfilesCommandInput} for command's `input` shape.
 * @see {@link ListBrowserProfilesCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
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
export class ListBrowserProfilesCommand extends $Command
  .classBuilder<
    ListBrowserProfilesCommandInput,
    ListBrowserProfilesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListBrowserProfiles", {})
  .n("BedrockAgentCoreControlClient", "ListBrowserProfilesCommand")
  .sc(ListBrowserProfiles$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBrowserProfilesRequest;
      output: ListBrowserProfilesResponse;
    };
    sdk: {
      input: ListBrowserProfilesCommandInput;
      output: ListBrowserProfilesCommandOutput;
    };
  };
}
