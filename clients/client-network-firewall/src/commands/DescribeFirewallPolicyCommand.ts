// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFirewallPolicyRequest, DescribeFirewallPolicyResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_DescribeFirewallPolicyCommand, se_DescribeFirewallPolicyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFirewallPolicyCommand}.
 */
export interface DescribeFirewallPolicyCommandInput extends DescribeFirewallPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFirewallPolicyCommand}.
 */
export interface DescribeFirewallPolicyCommandOutput extends DescribeFirewallPolicyResponse, __MetadataBearer {}

/**
 * <p>Returns the data objects for the specified firewall policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeFirewallPolicyRequest
 *   FirewallPolicyName: "STRING_VALUE",
 *   FirewallPolicyArn: "STRING_VALUE",
 * };
 * const command = new DescribeFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFirewallPolicyResponse
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
 * //   FirewallPolicy: { // FirewallPolicy
 * //     StatelessRuleGroupReferences: [ // StatelessRuleGroupReferences
 * //       { // StatelessRuleGroupReference
 * //         ResourceArn: "STRING_VALUE", // required
 * //         Priority: Number("int"), // required
 * //       },
 * //     ],
 * //     StatelessDefaultActions: [ // StatelessActions // required
 * //       "STRING_VALUE",
 * //     ],
 * //     StatelessFragmentDefaultActions: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     StatelessCustomActions: [ // CustomActions
 * //       { // CustomAction
 * //         ActionName: "STRING_VALUE", // required
 * //         ActionDefinition: { // ActionDefinition
 * //           PublishMetricAction: { // PublishMetricAction
 * //             Dimensions: [ // Dimensions // required
 * //               { // Dimension
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     StatefulRuleGroupReferences: [ // StatefulRuleGroupReferences
 * //       { // StatefulRuleGroupReference
 * //         ResourceArn: "STRING_VALUE", // required
 * //         Priority: Number("int"),
 * //         Override: { // StatefulRuleGroupOverride
 * //           Action: "DROP_TO_ALERT",
 * //         },
 * //       },
 * //     ],
 * //     StatefulDefaultActions: [ // StatefulActions
 * //       "STRING_VALUE",
 * //     ],
 * //     StatefulEngineOptions: { // StatefulEngineOptions
 * //       RuleOrder: "DEFAULT_ACTION_ORDER" || "STRICT_ORDER",
 * //       StreamExceptionPolicy: "DROP" || "CONTINUE" || "REJECT",
 * //       FlowTimeouts: { // FlowTimeouts
 * //         TcpIdleTimeoutSeconds: Number("int"),
 * //       },
 * //     },
 * //     TLSInspectionConfigurationArn: "STRING_VALUE",
 * //     PolicyVariables: { // PolicyVariables
 * //       RuleVariables: { // IPSets
 * //         "<keys>": { // IPSet
 * //           Definition: [ // VariableDefinitionList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFirewallPolicyCommandInput - {@link DescribeFirewallPolicyCommandInput}
 * @returns {@link DescribeFirewallPolicyCommandOutput}
 * @see {@link DescribeFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 * @public
 */
export class DescribeFirewallPolicyCommand extends $Command
  .classBuilder<
    DescribeFirewallPolicyCommandInput,
    DescribeFirewallPolicyCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFirewall_20201112", "DescribeFirewallPolicy", {})
  .n("NetworkFirewallClient", "DescribeFirewallPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFirewallPolicyCommand)
  .de(de_DescribeFirewallPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFirewallPolicyRequest;
      output: DescribeFirewallPolicyResponse;
    };
    sdk: {
      input: DescribeFirewallPolicyCommandInput;
      output: DescribeFirewallPolicyCommandOutput;
    };
  };
}
