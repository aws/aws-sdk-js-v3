// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFirewallPolicyRequest, CreateFirewallPolicyResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { CreateFirewallPolicy } from "../schemas/schemas_1_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFirewallPolicyCommand}.
 */
export interface CreateFirewallPolicyCommandInput extends CreateFirewallPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateFirewallPolicyCommand}.
 */
export interface CreateFirewallPolicyCommandOutput extends CreateFirewallPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates the firewall policy for the firewall according to the specifications. </p>
 *          <p>An Network Firewall firewall policy defines the behavior of a firewall, in a collection of
 *          stateless and stateful rule groups and other settings. You can use one firewall policy for
 *          multiple firewalls. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // CreateFirewallPolicyRequest
 *   FirewallPolicyName: "STRING_VALUE", // required
 *   FirewallPolicy: { // FirewallPolicy
 *     StatelessRuleGroupReferences: [ // StatelessRuleGroupReferences
 *       { // StatelessRuleGroupReference
 *         ResourceArn: "STRING_VALUE", // required
 *         Priority: Number("int"), // required
 *       },
 *     ],
 *     StatelessDefaultActions: [ // StatelessActions // required
 *       "STRING_VALUE",
 *     ],
 *     StatelessFragmentDefaultActions: [ // required
 *       "STRING_VALUE",
 *     ],
 *     StatelessCustomActions: [ // CustomActions
 *       { // CustomAction
 *         ActionName: "STRING_VALUE", // required
 *         ActionDefinition: { // ActionDefinition
 *           PublishMetricAction: { // PublishMetricAction
 *             Dimensions: [ // Dimensions // required
 *               { // Dimension
 *                 Value: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     ],
 *     StatefulRuleGroupReferences: [ // StatefulRuleGroupReferences
 *       { // StatefulRuleGroupReference
 *         ResourceArn: "STRING_VALUE", // required
 *         Priority: Number("int"),
 *         Override: { // StatefulRuleGroupOverride
 *           Action: "DROP_TO_ALERT",
 *         },
 *         DeepThreatInspection: true || false,
 *       },
 *     ],
 *     StatefulDefaultActions: [ // StatefulActions
 *       "STRING_VALUE",
 *     ],
 *     StatefulEngineOptions: { // StatefulEngineOptions
 *       RuleOrder: "DEFAULT_ACTION_ORDER" || "STRICT_ORDER",
 *       StreamExceptionPolicy: "DROP" || "CONTINUE" || "REJECT",
 *       FlowTimeouts: { // FlowTimeouts
 *         TcpIdleTimeoutSeconds: Number("int"),
 *       },
 *     },
 *     TLSInspectionConfigurationArn: "STRING_VALUE",
 *     PolicyVariables: { // PolicyVariables
 *       RuleVariables: { // IPSets
 *         "<keys>": { // IPSet
 *           Definition: [ // VariableDefinitionList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *     EnableTLSSessionHolding: true || false,
 *   },
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DryRun: true || false,
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KeyId: "STRING_VALUE",
 *     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 *   },
 * };
 * const command = new CreateFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateFirewallPolicyResponse
 * //   UpdateToken: "STRING_VALUE", // required
 * //   FirewallPolicyResponse: { // FirewallPolicyResponse
 * //     FirewallPolicyName: "STRING_VALUE", // required
 * //     FirewallPolicyArn: "STRING_VALUE", // required
 * //     FirewallPolicyId: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     FirewallPolicyStatus: "ACTIVE" || "DELETING" || "ERROR",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ConsumedStatelessRuleCapacity: Number("int"),
 * //     ConsumedStatefulRuleCapacity: Number("int"),
 * //     NumberOfAssociations: Number("int"),
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       KeyId: "STRING_VALUE",
 * //       Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 * //     },
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateFirewallPolicyCommandInput - {@link CreateFirewallPolicyCommandInput}
 * @returns {@link CreateFirewallPolicyCommandOutput}
 * @see {@link CreateFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InsufficientCapacityException} (server fault)
 *  <p>Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your
 *          request later. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Unable to perform the operation because doing so would violate a limit setting. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class CreateFirewallPolicyCommand extends $Command
  .classBuilder<
    CreateFirewallPolicyCommandInput,
    CreateFirewallPolicyCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "CreateFirewallPolicy", {})
  .n("NetworkFirewallClient", "CreateFirewallPolicyCommand")
  .sc(CreateFirewallPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFirewallPolicyRequest;
      output: CreateFirewallPolicyResponse;
    };
    sdk: {
      input: CreateFirewallPolicyCommandInput;
      output: CreateFirewallPolicyCommandOutput;
    };
  };
}
