// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFirewallPolicyRequest, DeleteFirewallPolicyResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_DeleteFirewallPolicyCommand, se_DeleteFirewallPolicyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFirewallPolicyCommand}.
 */
export interface DeleteFirewallPolicyCommandInput extends DeleteFirewallPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFirewallPolicyCommand}.
 */
export interface DeleteFirewallPolicyCommandOutput extends DeleteFirewallPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified <a>FirewallPolicy</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteFirewallPolicyRequest
 *   FirewallPolicyName: "STRING_VALUE",
 *   FirewallPolicyArn: "STRING_VALUE",
 * };
 * const command = new DeleteFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFirewallPolicyResponse
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
 * @param DeleteFirewallPolicyCommandInput - {@link DeleteFirewallPolicyCommandInput}
 * @returns {@link DeleteFirewallPolicyCommandOutput}
 * @see {@link DeleteFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because it's not valid. For example, you might have tried to delete
 *          a rule group or firewall policy that's in use.</p>
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
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation you requested isn't supported by Network Firewall. </p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class DeleteFirewallPolicyCommand extends $Command
  .classBuilder<
    DeleteFirewallPolicyCommandInput,
    DeleteFirewallPolicyCommandOutput,
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
  .s("NetworkFirewall_20201112", "DeleteFirewallPolicy", {})
  .n("NetworkFirewallClient", "DeleteFirewallPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFirewallPolicyCommand)
  .de(de_DeleteFirewallPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFirewallPolicyRequest;
      output: DeleteFirewallPolicyResponse;
    };
    sdk: {
      input: DeleteFirewallPolicyCommandInput;
      output: DeleteFirewallPolicyCommandOutput;
    };
  };
}
