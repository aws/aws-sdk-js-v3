// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGatewayRuleRequest, CreateGatewayRuleResponse } from "../models/models_0";
import { CreateGatewayRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGatewayRuleCommand}.
 */
export interface CreateGatewayRuleCommandInput extends CreateGatewayRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateGatewayRuleCommand}.
 */
export interface CreateGatewayRuleCommandOutput extends CreateGatewayRuleResponse, __MetadataBearer {}

/**
 * <p>Creates a rule for a gateway. Rules define conditions and actions that control how requests are routed and processed through the gateway, including principal-based access control and path-based routing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateGatewayRuleCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateGatewayRuleCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateGatewayRuleRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   priority: Number("int"), // required
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
 *   actions: [ // Actions // required
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
 * const command = new CreateGatewayRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateGatewayRuleResponse
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
 * // };
 *
 * ```
 *
 * @param CreateGatewayRuleCommandInput - {@link CreateGatewayRuleCommandInput}
 * @returns {@link CreateGatewayRuleCommandOutput}
 * @see {@link CreateGatewayRuleCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
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
export class CreateGatewayRuleCommand extends command<CreateGatewayRuleCommandInput, CreateGatewayRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreateGatewayRule",
  CreateGatewayRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGatewayRuleRequest;
      output: CreateGatewayRuleResponse;
    };
    sdk: {
      input: CreateGatewayRuleCommandInput;
      output: CreateGatewayRuleCommandOutput;
    };
  };
}
