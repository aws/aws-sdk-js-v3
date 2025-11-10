// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListGatewayTargetsRequest, ListGatewayTargetsResponse } from "../models/models_0";
import { ListGatewayTargets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGatewayTargetsCommand}.
 */
export interface ListGatewayTargetsCommandInput extends ListGatewayTargetsRequest {}
/**
 * @public
 *
 * The output of {@link ListGatewayTargetsCommand}.
 */
export interface ListGatewayTargetsCommandOutput extends ListGatewayTargetsResponse, __MetadataBearer {}

/**
 * <p>Lists all targets for a specific gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListGatewayTargetsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListGatewayTargetsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListGatewayTargetsRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListGatewayTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListGatewayTargetsResponse
 * //   items: [ // TargetSummaries // required
 * //     { // TargetSummary
 * //       targetId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "CREATING" || "UPDATING" || "UPDATE_UNSUCCESSFUL" || "DELETING" || "READY" || "FAILED" || "SYNCHRONIZING" || "SYNCHRONIZE_UNSUCCESSFUL", // required
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGatewayTargetsCommandInput - {@link ListGatewayTargetsCommandInput}
 * @returns {@link ListGatewayTargetsCommandOutput}
 * @see {@link ListGatewayTargetsCommandInput} for command's `input` shape.
 * @see {@link ListGatewayTargetsCommandOutput} for command's `response` shape.
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
export class ListGatewayTargetsCommand extends $Command
  .classBuilder<
    ListGatewayTargetsCommandInput,
    ListGatewayTargetsCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListGatewayTargets", {})
  .n("BedrockAgentCoreControlClient", "ListGatewayTargetsCommand")
  .sc(ListGatewayTargets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGatewayTargetsRequest;
      output: ListGatewayTargetsResponse;
    };
    sdk: {
      input: ListGatewayTargetsCommandInput;
      output: ListGatewayTargetsCommandOutput;
    };
  };
}
