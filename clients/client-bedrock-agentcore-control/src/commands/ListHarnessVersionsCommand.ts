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
import type { ListHarnessVersionsRequest, ListHarnessVersionsResponse } from "../models/models_1";
import { ListHarnessVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHarnessVersionsCommand}.
 */
export interface ListHarnessVersionsCommandInput extends ListHarnessVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListHarnessVersionsCommand}.
 */
export interface ListHarnessVersionsCommandOutput extends ListHarnessVersionsResponse, __MetadataBearer {}

/**
 * <p>Operation to list the versions of a Harness.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListHarnessVersionsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListHarnessVersionsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListHarnessVersionsRequest
 *   harnessId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListHarnessVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListHarnessVersionsResponse
 * //   harnessVersions: [ // HarnessVersionSummaries // required
 * //     { // HarnessVersionSummary
 * //       harnessId: "STRING_VALUE", // required
 * //       harnessName: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       harnessVersion: "STRING_VALUE", // required
 * //       status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING" || "DELETE_FAILED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHarnessVersionsCommandInput - {@link ListHarnessVersionsCommandInput}
 * @returns {@link ListHarnessVersionsCommandOutput}
 * @see {@link ListHarnessVersionsCommandInput} for command's `input` shape.
 * @see {@link ListHarnessVersionsCommandOutput} for command's `response` shape.
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
export class ListHarnessVersionsCommand extends $Command
  .classBuilder<
    ListHarnessVersionsCommandInput,
    ListHarnessVersionsCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListHarnessVersions", {})
  .n("BedrockAgentCoreControlClient", "ListHarnessVersionsCommand")
  .sc(ListHarnessVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHarnessVersionsRequest;
      output: ListHarnessVersionsResponse;
    };
    sdk: {
      input: ListHarnessVersionsCommandInput;
      output: ListHarnessVersionsCommandOutput;
    };
  };
}
