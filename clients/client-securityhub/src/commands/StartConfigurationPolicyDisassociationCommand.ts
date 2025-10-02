// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartConfigurationPolicyDisassociationRequest,
  StartConfigurationPolicyDisassociationResponse,
} from "../models/models_3";
import {
  de_StartConfigurationPolicyDisassociationCommand,
  se_StartConfigurationPolicyDisassociationCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartConfigurationPolicyDisassociationCommand}.
 */
export interface StartConfigurationPolicyDisassociationCommandInput
  extends StartConfigurationPolicyDisassociationRequest {}
/**
 * @public
 *
 * The output of {@link StartConfigurationPolicyDisassociationCommand}.
 */
export interface StartConfigurationPolicyDisassociationCommandOutput
  extends StartConfigurationPolicyDisassociationResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Disassociates a target account, organizational unit, or the root from a specified configuration. When you
 *             disassociate a configuration from its target, the target inherits the configuration of the closest parent. If there’s no
 *             configuration to inherit, the target retains its settings but becomes a self-managed account. A target can be disassociated from
 *             a configuration policy or self-managed behavior. Only the Security Hub delegated administrator can invoke this
 *             operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, StartConfigurationPolicyDisassociationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, StartConfigurationPolicyDisassociationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // StartConfigurationPolicyDisassociationRequest
 *   Target: { // Target Union: only one key present
 *     AccountId: "STRING_VALUE",
 *     OrganizationalUnitId: "STRING_VALUE",
 *     RootId: "STRING_VALUE",
 *   },
 *   ConfigurationPolicyIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartConfigurationPolicyDisassociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartConfigurationPolicyDisassociationCommandInput - {@link StartConfigurationPolicyDisassociationCommandInput}
 * @returns {@link StartConfigurationPolicyDisassociationCommandOutput}
 * @see {@link StartConfigurationPolicyDisassociationCommandInput} for command's `input` shape.
 * @see {@link StartConfigurationPolicyDisassociationCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To disassociate a configuration from a target
 * ```javascript
 * // This operation disassociates a configuration policy or self-managed behavior from the target account, organizational unit, or the root.
 * const input = {
 *   ConfigurationPolicyIdentifier: "SELF_MANAGED_SECURITY_HUB",
 *   Target: {
 *     RootId: "r-f6g7h8i9j0example"
 *   }
 * };
 * const command = new StartConfigurationPolicyDisassociationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class StartConfigurationPolicyDisassociationCommand extends $Command
  .classBuilder<
    StartConfigurationPolicyDisassociationCommandInput,
    StartConfigurationPolicyDisassociationCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "StartConfigurationPolicyDisassociation", {})
  .n("SecurityHubClient", "StartConfigurationPolicyDisassociationCommand")
  .f(void 0, void 0)
  .ser(se_StartConfigurationPolicyDisassociationCommand)
  .de(de_StartConfigurationPolicyDisassociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartConfigurationPolicyDisassociationRequest;
      output: {};
    };
    sdk: {
      input: StartConfigurationPolicyDisassociationCommandInput;
      output: StartConfigurationPolicyDisassociationCommandOutput;
    };
  };
}
