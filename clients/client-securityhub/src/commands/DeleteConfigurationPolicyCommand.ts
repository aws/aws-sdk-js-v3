// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfigurationPolicyRequest, DeleteConfigurationPolicyResponse } from "../models/models_2";
import { de_DeleteConfigurationPolicyCommand, se_DeleteConfigurationPolicyCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationPolicyCommand}.
 */
export interface DeleteConfigurationPolicyCommandInput extends DeleteConfigurationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationPolicyCommand}.
 */
export interface DeleteConfigurationPolicyCommandOutput extends DeleteConfigurationPolicyResponse, __MetadataBearer {}

/**
 * <p>
 *             Deletes a configuration policy. Only the Security Hub delegated administrator can invoke this operation
 *             from the home Region. For the deletion to succeed, you must first disassociate a configuration policy from target accounts,
 *             organizational units, or the root by invoking the <code>StartConfigurationPolicyDisassociation</code> operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteConfigurationPolicyCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteConfigurationPolicyCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SecurityHubClient(config);
 * const input = { // DeleteConfigurationPolicyRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigurationPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfigurationPolicyCommandInput - {@link DeleteConfigurationPolicyCommandInput}
 * @returns {@link DeleteConfigurationPolicyCommandOutput}
 * @see {@link DeleteConfigurationPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 * @example To delete a configuration policy
 * ```javascript
 * // This operation deletes the specified configuration policy.
 * const input = {
 *   "Identifier": "arn:aws:securityhub:us-east-1:123456789012:configuration-policy/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new DeleteConfigurationPolicyCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-configuration-policy-1695174614062
 * ```
 *
 */
export class DeleteConfigurationPolicyCommand extends $Command
  .classBuilder<
    DeleteConfigurationPolicyCommandInput,
    DeleteConfigurationPolicyCommandOutput,
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
  .s("SecurityHubAPIService", "DeleteConfigurationPolicy", {})
  .n("SecurityHubClient", "DeleteConfigurationPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfigurationPolicyCommand)
  .de(de_DeleteConfigurationPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfigurationPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfigurationPolicyCommandInput;
      output: DeleteConfigurationPolicyCommandOutput;
    };
  };
}
