// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePolicyStoreInput, DeletePolicyStoreOutput } from "../models/models_0";
import { de_DeletePolicyStoreCommand, se_DeletePolicyStoreCommand } from "../protocols/Aws_json1_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  VerifiedPermissionsClientResolvedConfig,
} from "../VerifiedPermissionsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePolicyStoreCommand}.
 */
export interface DeletePolicyStoreCommandInput extends DeletePolicyStoreInput {}
/**
 * @public
 *
 * The output of {@link DeletePolicyStoreCommand}.
 */
export interface DeletePolicyStoreCommandOutput extends DeletePolicyStoreOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified policy store.</p>
 *          <p>This operation is idempotent. If you specify a policy store that does not exist, the request
 *             response will still return a successful HTTP 200 status code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, DeletePolicyStoreCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, DeletePolicyStoreCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // DeletePolicyStoreInput
 *   policyStoreId: "STRING_VALUE", // required
 * };
 * const command = new DeletePolicyStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePolicyStoreCommandInput - {@link DeletePolicyStoreCommandInput}
 * @returns {@link DeletePolicyStoreCommandOutput}
 * @see {@link DeletePolicyStoreCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyStoreCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The policy store can't be deleted because deletion protection is enabled. To delete this policy store, disable deletion protection.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of an internal error. Try your request again later</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because it exceeded a throttling quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because one or more input parameters don't satisfy their constraint
 *             requirements. The output is provided as a list of fields and a reason for each field that
 *             isn't valid.</p>
 *          <p>The possible reasons include the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>UnrecognizedEntityType</b>
 *                </p>
 *                <p>The policy includes an entity type that isn't found in the schema.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnrecognizedActionId</b>
 *                </p>
 *                <p>The policy includes an action id that isn't found in the schema.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>InvalidActionApplication</b>
 *                </p>
 *                <p>The policy includes an action that, according to the schema, doesn't support
 *                     the specified principal and resource.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnexpectedType</b>
 *                </p>
 *                <p>The policy included an operand that isn't a valid type for the specified
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>IncompatibleTypes</b>
 *                </p>
 *                <p>The types of elements included in a <code>set</code>, or the types of
 *                     expressions used in an <code>if...then...else</code> clause aren't compatible in
 *                     this context.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>MissingAttribute</b>
 *                </p>
 *                <p>The policy attempts to access a record or entity attribute that isn't
 *                     specified in the schema. Test for the existence of the attribute first before
 *                     attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
 *                         <i>Cedar Policy Language Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnsafeOptionalAttributeAccess</b>
 *                </p>
 *                <p>The policy attempts to access a record or entity attribute that is optional
 *                     and isn't guaranteed to be present. Test for the existence of the attribute
 *                     first before attempting to access its value. For more information, see the
 *                         <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
 *                         <i>Cedar Policy Language Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>ImpossiblePolicy</b>
 *                </p>
 *                <p>Cedar has determined that a policy condition always evaluates to false. If
 *                     the policy is always false, it can never apply to any query, and so it can never
 *                     affect an authorization decision.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>WrongNumberArguments</b>
 *                </p>
 *                <p>The policy references an extension type with the wrong number of
 *                     arguments.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FunctionArgumentValidationError</b>
 *                </p>
 *                <p>Cedar couldn't parse the argument passed to an extension type. For example,
 *                     a string that is to be parsed as an IPv4 address can contain only digits and the
 *                     period character.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link VerifiedPermissionsServiceException}
 * <p>Base exception class for all service exceptions from VerifiedPermissions service.</p>
 *
 *
 * @example To delete a policy store
 * ```javascript
 * // The following example deletes the specified policy store.
 * const input = {
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new DeletePolicyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeletePolicyStoreCommand extends $Command
  .classBuilder<
    DeletePolicyStoreCommandInput,
    DeletePolicyStoreCommandOutput,
    VerifiedPermissionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VerifiedPermissionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("VerifiedPermissions", "DeletePolicyStore", {})
  .n("VerifiedPermissionsClient", "DeletePolicyStoreCommand")
  .f(void 0, void 0)
  .ser(se_DeletePolicyStoreCommand)
  .de(de_DeletePolicyStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePolicyStoreInput;
      output: {};
    };
    sdk: {
      input: DeletePolicyStoreCommandInput;
      output: DeletePolicyStoreCommandOutput;
    };
  };
}
