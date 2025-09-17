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
import { ListBrowsersRequest, ListBrowsersResponse, ListBrowsersResponseFilterSensitiveLog } from "../models/models_0";
import { de_ListBrowsersCommand, se_ListBrowsersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBrowsersCommand}.
 */
export interface ListBrowsersCommandInput extends ListBrowsersRequest {}
/**
 * @public
 *
 * The output of {@link ListBrowsersCommand}.
 */
export interface ListBrowsersCommandOutput extends ListBrowsersResponse, __MetadataBearer {}

/**
 * <p>Lists all custom browsers in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListBrowsersCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListBrowsersCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListBrowsersRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   type: "SYSTEM" || "CUSTOM",
 * };
 * const command = new ListBrowsersCommand(input);
 * const response = await client.send(command);
 * // { // ListBrowsersResponse
 * //   browserSummaries: [ // BrowserSummaries // required
 * //     { // BrowserSummary
 * //       browserId: "STRING_VALUE", // required
 * //       browserArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "CREATING" || "CREATE_FAILED" || "READY" || "DELETING" || "DELETE_FAILED" || "DELETED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBrowsersCommandInput - {@link ListBrowsersCommandInput}
 * @returns {@link ListBrowsersCommandOutput}
 * @see {@link ListBrowsersCommandInput} for command's `input` shape.
 * @see {@link ListBrowsersCommandOutput} for command's `response` shape.
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
export class ListBrowsersCommand extends $Command
  .classBuilder<
    ListBrowsersCommandInput,
    ListBrowsersCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "ListBrowsers", {})
  .n("BedrockAgentCoreControlClient", "ListBrowsersCommand")
  .f(void 0, ListBrowsersResponseFilterSensitiveLog)
  .ser(se_ListBrowsersCommand)
  .de(de_ListBrowsersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBrowsersRequest;
      output: ListBrowsersResponse;
    };
    sdk: {
      input: ListBrowsersCommandInput;
      output: ListBrowsersCommandOutput;
    };
  };
}
