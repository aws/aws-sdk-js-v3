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
import {
  ListAgentRuntimeVersionsRequest,
  ListAgentRuntimeVersionsResponse,
  ListAgentRuntimeVersionsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListAgentRuntimeVersionsCommand, se_ListAgentRuntimeVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAgentRuntimeVersionsCommand}.
 */
export interface ListAgentRuntimeVersionsCommandInput extends ListAgentRuntimeVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentRuntimeVersionsCommand}.
 */
export interface ListAgentRuntimeVersionsCommandOutput extends ListAgentRuntimeVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists all versions of a specific Amazon Secure Agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListAgentRuntimeVersionsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListAgentRuntimeVersionsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListAgentRuntimeVersionsRequest
 *   agentRuntimeId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentRuntimeVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentRuntimeVersionsResponse
 * //   agentRuntimes: [ // Agents // required
 * //     { // Agent
 * //       agentRuntimeArn: "STRING_VALUE", // required
 * //       agentRuntimeId: "STRING_VALUE", // required
 * //       agentRuntimeVersion: "STRING_VALUE", // required
 * //       agentRuntimeName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentRuntimeVersionsCommandInput - {@link ListAgentRuntimeVersionsCommandInput}
 * @returns {@link ListAgentRuntimeVersionsCommandOutput}
 * @see {@link ListAgentRuntimeVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAgentRuntimeVersionsCommandOutput} for command's `response` shape.
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
export class ListAgentRuntimeVersionsCommand extends $Command
  .classBuilder<
    ListAgentRuntimeVersionsCommandInput,
    ListAgentRuntimeVersionsCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "ListAgentRuntimeVersions", {})
  .n("BedrockAgentCoreControlClient", "ListAgentRuntimeVersionsCommand")
  .f(void 0, ListAgentRuntimeVersionsResponseFilterSensitiveLog)
  .ser(se_ListAgentRuntimeVersionsCommand)
  .de(de_ListAgentRuntimeVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentRuntimeVersionsRequest;
      output: ListAgentRuntimeVersionsResponse;
    };
    sdk: {
      input: ListAgentRuntimeVersionsCommandInput;
      output: ListAgentRuntimeVersionsCommandOutput;
    };
  };
}
