// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateFirewallEncryptionConfigurationRequest,
  UpdateFirewallEncryptionConfigurationResponse,
} from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  de_UpdateFirewallEncryptionConfigurationCommand,
  se_UpdateFirewallEncryptionConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFirewallEncryptionConfigurationCommand}.
 */
export interface UpdateFirewallEncryptionConfigurationCommandInput
  extends UpdateFirewallEncryptionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallEncryptionConfigurationCommand}.
 */
export interface UpdateFirewallEncryptionConfigurationCommandOutput
  extends UpdateFirewallEncryptionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>A complex type that contains settings for encryption of your firewall resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallEncryptionConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallEncryptionConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateFirewallEncryptionConfigurationRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KeyId: "STRING_VALUE",
 *     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 *   },
 * };
 * const command = new UpdateFirewallEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallEncryptionConfigurationResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   UpdateToken: "STRING_VALUE",
 * //   EncryptionConfiguration: { // EncryptionConfiguration
 * //     KeyId: "STRING_VALUE",
 * //     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFirewallEncryptionConfigurationCommandInput - {@link UpdateFirewallEncryptionConfigurationCommandInput}
 * @returns {@link UpdateFirewallEncryptionConfigurationCommandOutput}
 * @see {@link UpdateFirewallEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallEncryptionConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>The token you provided is stale or isn't valid for the operation. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ResourceOwnerCheckException} (client fault)
 *  <p>Unable to change the resource because your account doesn't own it. </p>
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
export class UpdateFirewallEncryptionConfigurationCommand extends $Command
  .classBuilder<
    UpdateFirewallEncryptionConfigurationCommandInput,
    UpdateFirewallEncryptionConfigurationCommandOutput,
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
  .s("NetworkFirewall_20201112", "UpdateFirewallEncryptionConfiguration", {})
  .n("NetworkFirewallClient", "UpdateFirewallEncryptionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFirewallEncryptionConfigurationCommand)
  .de(de_UpdateFirewallEncryptionConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFirewallEncryptionConfigurationRequest;
      output: UpdateFirewallEncryptionConfigurationResponse;
    };
    sdk: {
      input: UpdateFirewallEncryptionConfigurationCommandInput;
      output: UpdateFirewallEncryptionConfigurationCommandOutput;
    };
  };
}
