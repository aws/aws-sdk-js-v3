// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUpdateRequest, GetUpdateResponse } from "../models/models_0";
import { GetUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUpdateCommand}.
 */
export interface GetUpdateCommandInput extends GetUpdateRequest {}
/**
 * @public
 *
 * The output of {@link GetUpdateCommand}.
 */
export interface GetUpdateCommandOutput extends GetUpdateResponse, __MetadataBearer {}

/**
 * <p>Returns ResourceNotFoundException for an updateId past the 90-day retention window, indistinguishable in the response from an id that never existed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, GetUpdateCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, GetUpdateCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // GetUpdateRequest
 *   gatewayId: "STRING_VALUE", // required
 *   updateId: "STRING_VALUE", // required
 * };
 * const command = new GetUpdateCommand(input);
 * const response = await client.send(command);
 * // { // GetUpdateResponse
 * //   update: { // Update
 * //     updateId: "STRING_VALUE", // required
 * //     type: "GATEWAY_CONFIG_UPDATE" || "LINK_CONFIG_UPDATE" || "LINK_FLOW_UPDATE" || "ROUTING_RULE_UPDATE", // required
 * //     status: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED", // required
 * //     target: { // UpdateTarget Union: only one key present
 * //       gateway: {},
 * //       link: { // LinkTarget
 * //         linkId: "STRING_VALUE", // required
 * //       },
 * //       routingRule: { // RoutingRuleTarget
 * //         linkId: "STRING_VALUE", // required
 * //         ruleId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     parameters: { // UpdateParameters Union: only one key present
 * //       responderGatewayConfig: { // ResponderGatewayConfigParameters
 * //         description: "STRING_VALUE",
 * //         clientRoutingPolicy: "AVAILABILITY_ZONE_AFFINITY" || "ANY_AVAILABILITY_ZONE",
 * //         domainName: "STRING_VALUE",
 * //         port: Number("int"), // required
 * //         protocol: "HTTP" || "HTTPS", // required
 * //         listenerConfig: { // ListenerConfig
 * //           protocols: [ // ProtocolList // required
 * //             "HTTP" || "HTTPS",
 * //           ],
 * //         },
 * //         trustStoreConfiguration: { // TrustStoreConfiguration
 * //           certificateAuthorityCertificates: [ // CertificateAuthorityCertificates // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         managedEndpointConfiguration: { // ManagedEndpointConfiguration Union: only one key present
 * //           autoScalingGroups: { // AutoScalingGroupsConfiguration
 * //             autoScalingGroupNames: [ // AutoScalingGroupNameList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             roleArn: "STRING_VALUE", // required
 * //             healthCheckConfig: { // HealthCheckConfig
 * //               port: Number("int"), // required
 * //               path: "STRING_VALUE", // required
 * //               protocol: "HTTP" || "HTTPS",
 * //               timeoutMs: Number("int"),
 * //               intervalSeconds: Number("int"),
 * //               statusCodeMatcher: "STRING_VALUE",
 * //               healthyThresholdCount: Number("int"),
 * //               unhealthyThresholdCount: Number("int"),
 * //             },
 * //           },
 * //           eksEndpoints: { // EksEndpointsConfiguration
 * //             endpointsResourceName: "STRING_VALUE", // required
 * //             endpointsResourceNamespace: "STRING_VALUE", // required
 * //             clusterApiServerEndpointUri: "STRING_VALUE", // required
 * //             clusterApiServerCaCertificateChain: "STRING_VALUE", // required
 * //             clusterName: "STRING_VALUE", // required
 * //             roleArn: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //       linkConfig: { // LinkConfigParameters
 * //         logSettings: { // LinkLogSettings
 * //           applicationLogs: { // LinkApplicationLogConfiguration
 * //             sampling: { // LinkApplicationLogSampling
 * //               errorLog: Number("double"), // required
 * //               filterLog: Number("double"), // required
 * //             },
 * //           },
 * //         },
 * //         timeoutInMillis: Number("long"),
 * //       },
 * //       linkFlow: { // LinkFlowParameters Union: only one key present
 * //         modules: [ // ModuleConfigurationList
 * //           { // ModuleConfiguration
 * //             version: "STRING_VALUE",
 * //             name: "STRING_VALUE", // required
 * //             dependsOn: [ // FlowModuleNameList
 * //               "STRING_VALUE",
 * //             ],
 * //             moduleParameters: { // ModuleParameters Union: only one key present
 * //               noBid: { // NoBidModuleParameters
 * //                 reason: "STRING_VALUE",
 * //                 reasonCode: Number("int"),
 * //                 passThroughPercentage: Number("float"),
 * //               },
 * //               openRtbAttribute: { // OpenRtbAttributeModuleParameters
 * //                 filterType: "INCLUDE" || "EXCLUDE", // required
 * //                 filterConfiguration: [ // FilterConfiguration // required
 * //                   { // Filter
 * //                     criteria: [ // FilterCriteria // required
 * //                       { // FilterCriterion
 * //                         path: "STRING_VALUE", // required
 * //                         values: [ // ValueList // required
 * //                           "STRING_VALUE",
 * //                         ],
 * //                       },
 * //                     ],
 * //                   },
 * //                 ],
 * //                 action: { // Action Union: only one key present
 * //                   noBid: { // NoBidAction
 * //                     noBidReasonCode: Number("int"),
 * //                   },
 * //                   headerTag: { // HeaderTagAction
 * //                     name: "STRING_VALUE", // required
 * //                     value: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //                 holdbackPercentage: Number("float"), // required
 * //               },
 * //               rateLimiter: { // RateLimiterModuleParameters
 * //                 tps: Number("float"),
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         flows: [ // FlowList
 * //           { // Flow
 * //             name: "STRING_VALUE", // required
 * //             pipeline: { // FlowPipeline Union: only one key present
 * //               sequential: { // SequentialPipeline
 * //                 modules: [ // FlowModuleList // required
 * //                   { // FlowModule
 * //                     name: "STRING_VALUE", // required
 * //                     moduleVersionArn: "STRING_VALUE", // required
 * //                     selectedActions: [ // SelectedActionList
 * //                       "FILTER" || "ENRICH_REQUEST_EXT" || "ENRICH_REQUEST_HEADERS" || "OBSERVE",
 * //                     ],
 * //                     failureMode: "OPEN" || "CLOSED",
 * //                     activationPercentage: Number("float"),
 * //                     configurationValues: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               phased: { // PhasedPipeline
 * //                 phases: [ // FlowPhaseList // required
 * //                   { // FlowPhase
 * //                     modules: [ // required
 * //                       {
 * //                         name: "STRING_VALUE", // required
 * //                         moduleVersionArn: "STRING_VALUE", // required
 * //                         selectedActions: [
 * //                           "FILTER" || "ENRICH_REQUEST_EXT" || "ENRICH_REQUEST_HEADERS" || "OBSERVE",
 * //                         ],
 * //                         failureMode: "OPEN" || "CLOSED",
 * //                         activationPercentage: Number("float"),
 * //                         configurationValues: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       routingRule: { // RoutingRuleParameters
 * //         priority: Number("int"), // required
 * //         conditions: { // RuleCondition
 * //           hostHeader: "STRING_VALUE",
 * //           hostHeaderWildcard: "STRING_VALUE",
 * //           pathPrefix: "STRING_VALUE",
 * //           pathExact: "STRING_VALUE",
 * //           queryStringEquals: { // QueryStringKeyValuePair
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //           queryStringExists: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     errorDetails: [ // ErrorDetails
 * //       { // ErrorDetail
 * //         code: "VPC_NOT_FOUND" || "EC2_SUBNET_NOT_FOUND" || "EC2_SECURITY_GROUP_NOT_FOUND" || "EC2_SUBNET_IP_EXHAUSTION" || "IAM_ASSUME_ROLE_ACCESS_DENIED" || "INTERNAL_ERROR", // required
 * //         message: "STRING_VALUE", // required
 * //         resourceIds: [ // AwsResourceIdList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUpdateCommandInput - {@link GetUpdateCommandInput}
 * @returns {@link GetUpdateCommandOutput}
 * @see {@link GetUpdateCommandInput} for command's `input` shape.
 * @see {@link GetUpdateCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example Get an update
 * ```javascript
 * // Get one routing rule update on a responder gateway
 * const input = {
 *   gatewayId: "rtb-gw-12345678",
 *   updateId: "update-1a2b3c4d5e6f"
 * };
 * const command = new GetUpdateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   update: {
 *     createdAt: "2026-10-01T12:00:00Z",
 *     parameters: {
 *       routingRule: {
 *         conditions: {
 *           hostHeader: "api.customer.com"
 *         },
 *         priority: 20
 *       }
 *     },
 *     status: "SUCCESSFUL",
 *     target: {
 *       routingRule: {
 *         linkId: "link-87654321",
 *         ruleId: "rule-abc123def456"
 *       }
 *     },
 *     type: "ROUTING_RULE_UPDATE",
 *     updateId: "update-1a2b3c4d5e6f"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetUpdateCommand extends command<GetUpdateCommandInput, GetUpdateCommandOutput>(
  _ep0,
  _mw0,
  "GetUpdate",
  GetUpdate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUpdateRequest;
      output: GetUpdateResponse;
    };
    sdk: {
      input: GetUpdateCommandInput;
      output: GetUpdateCommandOutput;
    };
  };
}
