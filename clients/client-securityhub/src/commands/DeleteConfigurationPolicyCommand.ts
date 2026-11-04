// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConfigurationPolicyRequest, DeleteConfigurationPolicyResponse } from "../models/models_2";
import { DeleteConfigurationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a configuration policy. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region. For the deletion to succeed, you must first disassociate a configuration policy from target accounts, organizational units, or the root by invoking the `StartConfigurationPolicyDisassociation` operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteConfigurationPolicyCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteConfigurationPolicyCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
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
 *
 * You don't have permission to perform the action specified in the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link InvalidAccessException} (client fault)
 *
 * The account doesn't have permission to perform this action.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because you supplied an invalid or out-of-range value for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account or throttling limits. The error code describes the limit exceeded.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The resource specified in the request conflicts with an existing resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because we can't find the specified resource.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @example To delete a configuration policy
 * ```javascript
 * // This operation deletes the specified configuration policy.
 * const input = {
 *   Identifier: "arn:aws:securityhub:us-east-1:123456789012:configuration-policy/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new DeleteConfigurationPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteConfigurationPolicyCommand extends command<DeleteConfigurationPolicyCommandInput, DeleteConfigurationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConfigurationPolicy",
  DeleteConfigurationPolicy$
) {
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
