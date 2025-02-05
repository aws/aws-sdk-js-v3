// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetConfigurationPolicyAssociationRequest,
  GetConfigurationPolicyAssociationResponse,
} from "../models/models_2";
import {
  de_GetConfigurationPolicyAssociationCommand,
  se_GetConfigurationPolicyAssociationCommand,
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
 * The input for {@link GetConfigurationPolicyAssociationCommand}.
 */
export interface GetConfigurationPolicyAssociationCommandInput extends GetConfigurationPolicyAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationPolicyAssociationCommand}.
 */
export interface GetConfigurationPolicyAssociationCommandOutput
  extends GetConfigurationPolicyAssociationResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Returns the association between a configuration and a target account, organizational unit, or the root. The
 *             configuration can be a configuration policy or self-managed behavior. Only the Security Hub delegated administrator can
 *             invoke this operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetConfigurationPolicyAssociationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetConfigurationPolicyAssociationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SecurityHubClient(config);
 * const input = { // GetConfigurationPolicyAssociationRequest
 *   Target: { // Target Union: only one key present
 *     AccountId: "STRING_VALUE",
 *     OrganizationalUnitId: "STRING_VALUE",
 *     RootId: "STRING_VALUE",
 *   },
 * };
 * const command = new GetConfigurationPolicyAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationPolicyAssociationResponse
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
 * @param GetConfigurationPolicyAssociationCommandInput - {@link GetConfigurationPolicyAssociationCommandInput}
 * @returns {@link GetConfigurationPolicyAssociationCommandOutput}
 * @see {@link GetConfigurationPolicyAssociationCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationPolicyAssociationCommandOutput} for command's `response` shape.
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
 * @example To get details about a configuration association
 * ```javascript
 * // This operation provides details about configuration associations for a specific target account, organizational unit, or the root.
 * const input = {
 *   "Target": {
 *     "AccountId": "111122223333"
 *   }
 * };
 * const command = new GetConfigurationPolicyAssociationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AssociationStatus": "FAILED",
 *   "AssociationStatusMessage": "Configuration Policy a1b2c3d4-5678-90ab-cdef-EXAMPLE11111 couldn’t be applied to account 111122223333 in us-east-1 Region. Retry your request.",
 *   "AssociationType": "INHERITED",
 *   "ConfigurationPolicyId": "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "TargetId": "111122223333",
 *   "TargetType": "ACCOUNT",
 *   "UpdatedAt": "2023-01-11T06:17:17.154Z"
 * }
 * *\/
 * // example id: to-get-details-about-a-configuration-association-1695177816371
 * ```
 *
 */
export class GetConfigurationPolicyAssociationCommand extends $Command
  .classBuilder<
    GetConfigurationPolicyAssociationCommandInput,
    GetConfigurationPolicyAssociationCommandOutput,
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
  .s("SecurityHubAPIService", "GetConfigurationPolicyAssociation", {})
  .n("SecurityHubClient", "GetConfigurationPolicyAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetConfigurationPolicyAssociationCommand)
  .de(de_GetConfigurationPolicyAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfigurationPolicyAssociationRequest;
      output: GetConfigurationPolicyAssociationResponse;
    };
    sdk: {
      input: GetConfigurationPolicyAssociationCommandInput;
      output: GetConfigurationPolicyAssociationCommandOutput;
    };
  };
}
