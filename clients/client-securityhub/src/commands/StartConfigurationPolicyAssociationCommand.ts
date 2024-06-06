// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartConfigurationPolicyAssociationRequest,
  StartConfigurationPolicyAssociationResponse,
} from "../models/models_2";
import {
  de_StartConfigurationPolicyAssociationCommand,
  se_StartConfigurationPolicyAssociationCommand,
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
 * The input for {@link StartConfigurationPolicyAssociationCommand}.
 */
export interface StartConfigurationPolicyAssociationCommandInput extends StartConfigurationPolicyAssociationRequest {}
/**
 * @public
 *
 * The output of {@link StartConfigurationPolicyAssociationCommand}.
 */
export interface StartConfigurationPolicyAssociationCommandOutput
  extends StartConfigurationPolicyAssociationResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Associates a target account, organizational unit, or the root with a specified configuration. The target can be
 *             associated with a configuration policy or self-managed behavior. Only the Security Hub delegated administrator can
 *             invoke this operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, StartConfigurationPolicyAssociationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, StartConfigurationPolicyAssociationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // StartConfigurationPolicyAssociationRequest
 *   ConfigurationPolicyIdentifier: "STRING_VALUE", // required
 *   Target: { // Target Union: only one key present
 *     AccountId: "STRING_VALUE",
 *     OrganizationalUnitId: "STRING_VALUE",
 *     RootId: "STRING_VALUE",
 *   },
 * };
 * const command = new StartConfigurationPolicyAssociationCommand(input);
 * const response = await client.send(command);
 * // { // StartConfigurationPolicyAssociationResponse
 * //   ConfigurationPolicyId: "STRING_VALUE",
 * //   TargetId: "STRING_VALUE",
 * //   TargetType: "ACCOUNT" || "ORGANIZATIONAL_UNIT" || "ROOT",
 * //   AssociationType: "INHERITED" || "APPLIED",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   AssociationStatus: "PENDING" || "SUCCESS" || "FAILED",
 * //   AssociationStatusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartConfigurationPolicyAssociationCommandInput - {@link StartConfigurationPolicyAssociationCommandInput}
 * @returns {@link StartConfigurationPolicyAssociationCommandOutput}
 * @see {@link StartConfigurationPolicyAssociationCommandInput} for command's `input` shape.
 * @see {@link StartConfigurationPolicyAssociationCommandOutput} for command's `response` shape.
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
 * @public
 * @example To associate a configuration with a target
 * ```javascript
 * // This operation associates a configuration policy or self-managed behavior with the target account, organizational unit, or the root.
 * const input = {
 *   "ConfigurationPolicyIdentifier": "arn:aws:securityhub:us-east-1:123456789012:configuration-policy/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "Target": {
 *     "AccountId": "111122223333"
 *   }
 * };
 * const command = new StartConfigurationPolicyAssociationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AssociationStatus": "SUCCESS",
 *   "AssociationStatusMessage": "This field is populated only if the association fails",
 *   "AssociationType": "APPLIED",
 *   "ConfigurationPolicyId": "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "TargetId": "111122223333",
 *   "TargetType": "ACCOUNT",
 *   "UpdatedAt": "2023-01-11T06:17:17.154Z"
 * }
 * *\/
 * // example id: to-associate-a-configuration-with-a-target-1695176455638
 * ```
 *
 */
export class StartConfigurationPolicyAssociationCommand extends $Command
  .classBuilder<
    StartConfigurationPolicyAssociationCommandInput,
    StartConfigurationPolicyAssociationCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "StartConfigurationPolicyAssociation", {})
  .n("SecurityHubClient", "StartConfigurationPolicyAssociationCommand")
  .f(void 0, void 0)
  .ser(se_StartConfigurationPolicyAssociationCommand)
  .de(de_StartConfigurationPolicyAssociationCommand)
  .build() {}
