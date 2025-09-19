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
import { ListMemoriesInput, ListMemoriesOutput } from "../models/models_0";
import { de_ListMemoriesCommand, se_ListMemoriesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMemoriesCommand}.
 */
export interface ListMemoriesCommandInput extends ListMemoriesInput {}
/**
 * @public
 *
 * The output of {@link ListMemoriesCommand}.
 */
export interface ListMemoriesCommandOutput extends ListMemoriesOutput, __MetadataBearer {}

/**
 * <p>Lists the available Amazon Bedrock AgentCore Memory resources in the current Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListMemoriesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListMemoriesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListMemoriesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMemoriesCommand(input);
 * const response = await client.send(command);
 * // { // ListMemoriesOutput
 * //   memories: [ // MemorySummaryList // required
 * //     { // MemorySummary
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       status: "CREATING" || "ACTIVE" || "FAILED" || "DELETING",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMemoriesCommandInput - {@link ListMemoriesCommandInput}
 * @returns {@link ListMemoriesCommandOutput}
 * @see {@link ListMemoriesCommandInput} for command's `input` shape.
 * @see {@link ListMemoriesCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>API rate limit has been exceeded.</p>
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
export class ListMemoriesCommand extends $Command
  .classBuilder<
    ListMemoriesCommandInput,
    ListMemoriesCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "ListMemories", {})
  .n("BedrockAgentCoreControlClient", "ListMemoriesCommand")
  .f(void 0, void 0)
  .ser(se_ListMemoriesCommand)
  .de(de_ListMemoriesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMemoriesInput;
      output: ListMemoriesOutput;
    };
    sdk: {
      input: ListMemoriesCommandInput;
      output: ListMemoriesCommandOutput;
    };
  };
}
