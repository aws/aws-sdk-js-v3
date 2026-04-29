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
import type { ListGatewayRulesRequest, ListGatewayRulesResponse } from "../models/models_0";
import { ListGatewayRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGatewayRulesCommand}.
 */
export interface ListGatewayRulesCommandInput extends ListGatewayRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListGatewayRulesCommand}.
 */
export interface ListGatewayRulesCommandOutput extends ListGatewayRulesResponse, __MetadataBearer {}

/**
 * <p>Lists all rules for a gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListGatewayRulesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListGatewayRulesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListGatewayRulesRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListGatewayRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListGatewayRulesResponse
 * //   gatewayRules: [ // GatewayRules // required
 * //     { // GatewayRuleDetail
 * //       ruleId: "STRING_VALUE", // required
 * //       gatewayArn: "STRING_VALUE", // required
 * //       priority: Number("int"), // required
 * //       conditions: [ // Conditions
 * //         { // Condition Union: only one key present
 * //           matchPrincipals: { // MatchPrincipals
 * //             anyOf: [ // MatchPrincipalEntries // required
 * //               { // MatchPrincipalEntry Union: only one key present
 * //                 iamPrincipal: { // IamPrincipal
 * //                   arn: "STRING_VALUE", // required
 * //                   operator: "StringEquals" || "StringLike",
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           matchPaths: { // MatchPaths
 * //             anyOf: [ // MatchPathPatterns // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       actions: [ // Actions // required
 * //         { // Action Union: only one key present
 * //           configurationBundle: { // ConfigurationBundleAction Union: only one key present
 * //             staticOverride: { // StaticOverride
 * //               bundleArn: "STRING_VALUE", // required
 * //               bundleVersion: "STRING_VALUE", // required
 * //             },
 * //             weightedOverride: { // WeightedOverride
 * //               trafficSplit: [ // TrafficSplitEntries // required
 * //                 { // TrafficSplitEntry
 * //                   name: "STRING_VALUE", // required
 * //                   weight: Number("int"), // required
 * //                   configurationBundle: { // ConfigurationBundleReference
 * //                     bundleArn: "STRING_VALUE", // required
 * //                     bundleVersion: "STRING_VALUE", // required
 * //                   },
 * //                   description: "STRING_VALUE",
 * //                   metadata: { // TrafficSplitMetadataMap
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //           routeToTarget: { // RouteToTargetAction Union: only one key present
 * //             staticRoute: { // StaticRoute
 * //               targetName: "STRING_VALUE", // required
 * //             },
 * //             weightedRoute: { // WeightedRoute
 * //               trafficSplit: [ // TargetTrafficSplitEntries // required
 * //                 { // TargetTrafficSplitEntry
 * //                   name: "STRING_VALUE", // required
 * //                   weight: Number("int"), // required
 * //                   targetName: "STRING_VALUE", // required
 * //                   description: "STRING_VALUE",
 * //                   metadata: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING", // required
 * //       system: { // SystemManagedBlock
 * //         managedBy: "STRING_VALUE", // required
 * //       },
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGatewayRulesCommandInput - {@link ListGatewayRulesCommandInput}
 * @returns {@link ListGatewayRulesCommandOutput}
 * @see {@link ListGatewayRulesCommandInput} for command's `input` shape.
 * @see {@link ListGatewayRulesCommandOutput} for command's `response` shape.
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
export class ListGatewayRulesCommand extends $Command
  .classBuilder<
    ListGatewayRulesCommandInput,
    ListGatewayRulesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListGatewayRules", {})
  .n("BedrockAgentCoreControlClient", "ListGatewayRulesCommand")
  .sc(ListGatewayRules$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGatewayRulesRequest;
      output: ListGatewayRulesResponse;
    };
    sdk: {
      input: ListGatewayRulesCommandInput;
      output: ListGatewayRulesCommandOutput;
    };
  };
}
