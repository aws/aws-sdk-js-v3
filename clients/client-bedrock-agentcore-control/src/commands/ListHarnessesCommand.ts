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
import type { ListHarnessesRequest, ListHarnessesResponse } from "../models/models_0";
import { ListHarnesses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHarnessesCommand}.
 */
export interface ListHarnessesCommandInput extends ListHarnessesRequest {}
/**
 * @public
 *
 * The output of {@link ListHarnessesCommand}.
 */
export interface ListHarnessesCommandOutput extends ListHarnessesResponse, __MetadataBearer {}

/**
 * <p>Operation to list Harnesses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListHarnessesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListHarnessesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListHarnessesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListHarnessesCommand(input);
 * const response = await client.send(command);
 * // { // ListHarnessesResponse
 * //   harnesses: [ // HarnessSummaries // required
 * //     { // HarnessSummary
 * //       harnessId: "STRING_VALUE", // required
 * //       harnessName: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING" || "DELETE_FAILED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHarnessesCommandInput - {@link ListHarnessesCommandInput}
 * @returns {@link ListHarnessesCommandOutput}
 * @see {@link ListHarnessesCommandInput} for command's `input` shape.
 * @see {@link ListHarnessesCommandOutput} for command's `response` shape.
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
export class ListHarnessesCommand extends $Command
  .classBuilder<
    ListHarnessesCommandInput,
    ListHarnessesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListHarnesses", {})
  .n("BedrockAgentCoreControlClient", "ListHarnessesCommand")
  .sc(ListHarnesses$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHarnessesRequest;
      output: ListHarnessesResponse;
    };
    sdk: {
      input: ListHarnessesCommandInput;
      output: ListHarnessesCommandOutput;
    };
  };
}
