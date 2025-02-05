// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreatePolicyStoreInput,
  CreatePolicyStoreInputFilterSensitiveLog,
  CreatePolicyStoreOutput,
} from "../models/models_0";
import { de_CreatePolicyStoreCommand, se_CreatePolicyStoreCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link CreatePolicyStoreCommand}.
 */
export interface CreatePolicyStoreCommandInput extends CreatePolicyStoreInput {}
/**
 * @public
 *
 * The output of {@link CreatePolicyStoreCommand}.
 */
export interface CreatePolicyStoreCommandOutput extends CreatePolicyStoreOutput, __MetadataBearer {}

/**
 * <p>Creates a policy store. A policy store is a container for policy resources.</p>
 *          <note>
 *             <p>Although <a href="https://docs.cedarpolicy.com/schema/schema.html#namespace">Cedar supports multiple namespaces</a>, Verified Permissions currently supports only one
 *                 namespace per policy store.</p>
 *          </note>
 *          <note>
 *             <p>Verified Permissions is <i>
 *                   <a href="https://wikipedia.org/wiki/Eventual_consistency">eventually consistent</a>
 *                </i>. It can take a few seconds for a new or changed element to propagate through
 *     the service and be visible in the results of other Verified Permissions operations.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, CreatePolicyStoreCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, CreatePolicyStoreCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // CreatePolicyStoreInput
 *   clientToken: "STRING_VALUE",
 *   validationSettings: { // ValidationSettings
 *     mode: "OFF" || "STRICT", // required
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new CreatePolicyStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreatePolicyStoreOutput
 * //   policyStoreId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreatePolicyStoreCommandInput - {@link CreatePolicyStoreCommandInput}
 * @returns {@link CreatePolicyStoreCommandOutput}
 * @see {@link CreatePolicyStoreCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyStoreCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because another request to modify a resource occurred at the
 *             same.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because it would cause a service quota to be exceeded.</p>
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
 * @public
 * @example To create policy store
 * ```javascript
 * // The following example creates a new policy store with strict validation turned on.
 * const input = {
 *   "clientToken": "a1b2c3d4-e5f6-a1b2-c3d4-TOKEN1111111",
 *   "validationSettings": {
 *     "mode": "STRICT"
 *   }
 * };
 * const command = new CreatePolicyStoreCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "arn": "arn:aws:verifiedpermissions::123456789012:policy-store/C7v5xMplfFH3i3e4Jrzb1a",
 *   "createdDate": "2024-08-12T18:20:50.99Z",
 *   "lastUpdatedDate": "2024-08-12T18:20:50.99Z",
 *   "policyStoreId": "C7v5xMplfFH3i3e4Jrzb1a"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class CreatePolicyStoreCommand extends $Command
  .classBuilder<
    CreatePolicyStoreCommandInput,
    CreatePolicyStoreCommandOutput,
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
  .s("VerifiedPermissions", "CreatePolicyStore", {})
  .n("VerifiedPermissionsClient", "CreatePolicyStoreCommand")
  .f(CreatePolicyStoreInputFilterSensitiveLog, void 0)
  .ser(se_CreatePolicyStoreCommand)
  .de(de_CreatePolicyStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePolicyStoreInput;
      output: CreatePolicyStoreOutput;
    };
    sdk: {
      input: CreatePolicyStoreCommandInput;
      output: CreatePolicyStoreCommandOutput;
    };
  };
}
