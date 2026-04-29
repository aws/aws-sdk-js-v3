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
import type { UpdateGatewayRuleRequest, UpdateGatewayRuleResponse } from "../models/models_0";
import { UpdateGatewayRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGatewayRuleCommand}.
 */
export interface UpdateGatewayRuleCommandInput extends UpdateGatewayRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGatewayRuleCommand}.
 */
export interface UpdateGatewayRuleCommandOutput extends UpdateGatewayRuleResponse, __MetadataBearer {}

/**
 * <p>Updates a gateway rule's priority, conditions, actions, or description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateGatewayRuleCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateGatewayRuleCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateGatewayRuleRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   ruleId: "STRING_VALUE", // required
 *   priority: Number("int"),
 *   conditions: [ // Conditions
 *     { // Condition Union: only one key present
 *       matchPrincipals: { // MatchPrincipals
 *         anyOf: [ // MatchPrincipalEntries // required
 *           { // MatchPrincipalEntry Union: only one key present
 *             iamPrincipal: { // IamPrincipal
 *               arn: "STRING_VALUE", // required
 *               operator: "StringEquals" || "StringLike",
 *             },
 *           },
 *         ],
 *       },
 *       matchPaths: { // MatchPaths
 *         anyOf: [ // MatchPathPatterns // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   actions: [ // Actions
 *     { // Action Union: only one key present
 *       configurationBundle: { // ConfigurationBundleAction Union: only one key present
 *         staticOverride: { // StaticOverride
 *           bundleArn: "STRING_VALUE", // required
 *           bundleVersion: "STRING_VALUE", // required
 *         },
 *         weightedOverride: { // WeightedOverride
 *           trafficSplit: [ // TrafficSplitEntries // required
 *             { // TrafficSplitEntry
 *               name: "STRING_VALUE", // required
 *               weight: Number("int"), // required
 *               configurationBundle: { // ConfigurationBundleReference
 *                 bundleArn: "STRING_VALUE", // required
 *                 bundleVersion: "STRING_VALUE", // required
 *               },
 *               description: "STRING_VALUE",
 *               metadata: { // TrafficSplitMetadataMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *           ],
 *         },
 *       },
 *       routeToTarget: { // RouteToTargetAction Union: only one key present
 *         staticRoute: { // StaticRoute
 *           targetName: "STRING_VALUE", // required
 *         },
 *         weightedRoute: { // WeightedRoute
 *           trafficSplit: [ // TargetTrafficSplitEntries // required
 *             { // TargetTrafficSplitEntry
 *               name: "STRING_VALUE", // required
 *               weight: Number("int"), // required
 *               targetName: "STRING_VALUE", // required
 *               description: "STRING_VALUE",
 *               metadata: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *           ],
 *         },
 *       },
 *     },
 *   ],
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateGatewayRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewayRuleResponse
 * //   ruleId: "STRING_VALUE", // required
 * //   gatewayArn: "STRING_VALUE", // required
 * //   priority: Number("int"), // required
 * //   conditions: [ // Conditions
 * //     { // Condition Union: only one key present
 * //       matchPrincipals: { // MatchPrincipals
 * //         anyOf: [ // MatchPrincipalEntries // required
 * //           { // MatchPrincipalEntry Union: only one key present
 * //             iamPrincipal: { // IamPrincipal
 * //               arn: "STRING_VALUE", // required
 * //               operator: "StringEquals" || "StringLike",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       matchPaths: { // MatchPaths
 * //         anyOf: [ // MatchPathPatterns // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   actions: [ // Actions // required
 * //     { // Action Union: only one key present
 * //       configurationBundle: { // ConfigurationBundleAction Union: only one key present
 * //         staticOverride: { // StaticOverride
 * //           bundleArn: "STRING_VALUE", // required
 * //           bundleVersion: "STRING_VALUE", // required
 * //         },
 * //         weightedOverride: { // WeightedOverride
 * //           trafficSplit: [ // TrafficSplitEntries // required
 * //             { // TrafficSplitEntry
 * //               name: "STRING_VALUE", // required
 * //               weight: Number("int"), // required
 * //               configurationBundle: { // ConfigurationBundleReference
 * //                 bundleArn: "STRING_VALUE", // required
 * //                 bundleVersion: "STRING_VALUE", // required
 * //               },
 * //               description: "STRING_VALUE",
 * //               metadata: { // TrafficSplitMetadataMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       routeToTarget: { // RouteToTargetAction Union: only one key present
 * //         staticRoute: { // StaticRoute
 * //           targetName: "STRING_VALUE", // required
 * //         },
 * //         weightedRoute: { // WeightedRoute
 * //           trafficSplit: [ // TargetTrafficSplitEntries // required
 * //             { // TargetTrafficSplitEntry
 * //               name: "STRING_VALUE", // required
 * //               weight: Number("int"), // required
 * //               targetName: "STRING_VALUE", // required
 * //               description: "STRING_VALUE",
 * //               metadata: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING", // required
 * //   system: { // SystemManagedBlock
 * //     managedBy: "STRING_VALUE", // required
 * //   },
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateGatewayRuleCommandInput - {@link UpdateGatewayRuleCommandInput}
 * @returns {@link UpdateGatewayRuleCommandOutput}
 * @see {@link UpdateGatewayRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayRuleCommandOutput} for command's `response` shape.
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
export class UpdateGatewayRuleCommand extends $Command
  .classBuilder<
    UpdateGatewayRuleCommandInput,
    UpdateGatewayRuleCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "UpdateGatewayRule", {})
  .n("BedrockAgentCoreControlClient", "UpdateGatewayRuleCommand")
  .sc(UpdateGatewayRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGatewayRuleRequest;
      output: UpdateGatewayRuleResponse;
    };
    sdk: {
      input: UpdateGatewayRuleCommandInput;
      output: UpdateGatewayRuleCommandOutput;
    };
  };
}
