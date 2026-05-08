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
import type { ListRegistriesRequest, ListRegistriesResponse } from "../models/models_1";
import { ListRegistries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRegistriesCommand}.
 */
export interface ListRegistriesCommandInput extends ListRegistriesRequest {}
/**
 * @public
 *
 * The output of {@link ListRegistriesCommand}.
 */
export interface ListRegistriesCommandOutput extends ListRegistriesResponse, __MetadataBearer {}

/**
 * <p>Lists all registries in the account. You can optionally filter results by status using the <code>status</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListRegistriesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListRegistriesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListRegistriesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   status: "CREATING" || "READY" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * };
 * const command = new ListRegistriesCommand(input);
 * const response = await client.send(command);
 * // { // ListRegistriesResponse
 * //   registries: [ // RegistrySummaryList // required
 * //     { // RegistrySummary
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       registryId: "STRING_VALUE", // required
 * //       registryArn: "STRING_VALUE", // required
 * //       authorizerType: "CUSTOM_JWT" || "AWS_IAM",
 * //       status: "CREATING" || "READY" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED", // required
 * //       statusReason: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRegistriesCommandInput - {@link ListRegistriesCommandInput}
 * @returns {@link ListRegistriesCommandOutput}
 * @see {@link ListRegistriesCommandInput} for command's `input` shape.
 * @see {@link ListRegistriesCommandOutput} for command's `response` shape.
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
export class ListRegistriesCommand extends $Command
  .classBuilder<
    ListRegistriesCommandInput,
    ListRegistriesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListRegistries", {})
  .n("BedrockAgentCoreControlClient", "ListRegistriesCommand")
  .sc(ListRegistries$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegistriesRequest;
      output: ListRegistriesResponse;
    };
    sdk: {
      input: ListRegistriesCommandInput;
      output: ListRegistriesCommandOutput;
    };
  };
}
