// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutSchemaInput,
  PutSchemaInputFilterSensitiveLog,
  PutSchemaOutput,
  PutSchemaOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_PutSchemaCommand, se_PutSchemaCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link PutSchemaCommand}.
 */
export interface PutSchemaCommandInput extends PutSchemaInput {}
/**
 * @public
 *
 * The output of {@link PutSchemaCommand}.
 */
export interface PutSchemaCommandOutput extends PutSchemaOutput, __MetadataBearer {}

/**
 * <p>Creates or updates the policy schema in the specified policy store. The schema is used to validate any Cedar policies and policy templates submitted to the policy store. Any changes to the schema validate only policies and templates submitted after the schema change. Existing policies and templates are not re-evaluated against the changed schema. If you later update a policy, then it is evaluated against the new schema at that time.</p> <note> <p>Verified Permissions is <i> <a href="https://wikipedia.org/wiki/Eventual_consistency">eventually consistent</a> </i>. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, PutSchemaCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, PutSchemaCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // PutSchemaInput
 *   policyStoreId: "STRING_VALUE", // required
 *   definition: { // SchemaDefinition Union: only one key present
 *     cedarJson: "STRING_VALUE",
 *   },
 * };
 * const command = new PutSchemaCommand(input);
 * const response = await client.send(command);
 * // { // PutSchemaOutput
 * //   policyStoreId: "STRING_VALUE", // required
 * //   namespaces: [ // NamespaceList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param PutSchemaCommandInput - {@link PutSchemaCommandInput}
 * @returns {@link PutSchemaCommandOutput}
 * @see {@link PutSchemaCommandInput} for command's `input` shape.
 * @see {@link PutSchemaCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because another request to modify a resource occurred at the same.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request failed because it references a resource that doesn't exist.</p>
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
 *  <p>The request failed because one or more input parameters don't satisfy their constraint requirements. The output is provided as a list of fields and a reason for each field that isn't valid.</p> <p>The possible reasons include the following:</p> <ul> <li> <p> <b>UnrecognizedEntityType</b> </p> <p>The policy includes an entity type that isn't found in the schema.</p> </li> <li> <p> <b>UnrecognizedActionId</b> </p> <p>The policy includes an action id that isn't found in the schema.</p> </li> <li> <p> <b>InvalidActionApplication</b> </p> <p>The policy includes an action that, according to the schema, doesn't support the specified principal and resource.</p> </li> <li> <p> <b>UnexpectedType</b> </p> <p>The policy included an operand that isn't a valid type for the specified operation.</p> </li> <li> <p> <b>IncompatibleTypes</b> </p> <p>The types of elements included in a <code>set</code>, or the types of expressions used in an <code>if...then...else</code> clause aren't compatible in this context.</p> </li> <li> <p> <b>MissingAttribute</b> </p> <p>The policy attempts to access a record or entity attribute that isn't specified in the schema. Test for the existence of the attribute first before attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the <i>Cedar Policy Language Guide</i>.</p> </li> <li> <p> <b>UnsafeOptionalAttributeAccess</b> </p> <p>The policy attempts to access a record or entity attribute that is optional and isn't guaranteed to be present. Test for the existence of the attribute first before attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the <i>Cedar Policy Language Guide</i>.</p> </li> <li> <p> <b>ImpossiblePolicy</b> </p> <p>Cedar has determined that a policy condition always evaluates to false. If the policy is always false, it can never apply to any query, and so it can never affect an authorization decision.</p> </li> <li> <p> <b>WrongNumberArguments</b> </p> <p>The policy references an extension type with the wrong number of arguments.</p> </li> <li> <p> <b>FunctionArgumentValidationError</b> </p> <p>Cedar couldn't parse the argument passed to an extension type. For example, a string that is to be parsed as an IPv4 address can contain only digits and the period character.</p> </li> </ul>
 *
 * @throws {@link VerifiedPermissionsServiceException}
 * <p>Base exception class for all service exceptions from VerifiedPermissions service.</p>
 *
 *
 * @example PutSchema
 * ```javascript
 * // The following example creates a new schema, or updates an existing schema, in the specified policy store. Note that the schema text is shown line wrapped for readability. You should submit the entire schema text as a single line of text.
 *
 * Note
 * The JSON in the parameters of this operation are strings that can contain embedded quotation marks (") within the outermost quotation mark pair. This requires that you stringify the JSON object by preceding all embedded quotation marks with a backslash character ( \" ) and combining all lines into a single text line with no line breaks.
 *
 * Example strings might be displayed wrapped across multiple lines here for readability, but the operation requires the parameters be submitted as single line strings.
 * const input = {
 *   definition: {
 *     cedarJson: `{"MySampleNamespace": {"actions": {"remoteAccess": {"appliesTo": {"principalTypes": ["Employee"]}}},"entityTypes": {"Employee": {"shape": {"attributes": {"jobLevel": {"type": "Long"},"name": {"type": "String"}},"type": "Record"}}}}}`
 *   },
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new PutSchemaCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdDate: "2023-06-13T19:28:06.003726Z",
 *   lastUpdatedDate: "2023-06-13T19:28:06.003726Z",
 *   namespaces: [
 *     "My::Sample::Namespace"
 *   ],
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutSchemaCommand extends $Command
  .classBuilder<
    PutSchemaCommandInput,
    PutSchemaCommandOutput,
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
  .s("VerifiedPermissions", "PutSchema", {})
  .n("VerifiedPermissionsClient", "PutSchemaCommand")
  .f(PutSchemaInputFilterSensitiveLog, PutSchemaOutputFilterSensitiveLog)
  .ser(se_PutSchemaCommand)
  .de(de_PutSchemaCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSchemaInput;
      output: PutSchemaOutput;
    };
    sdk: {
      input: PutSchemaCommandInput;
      output: PutSchemaCommandOutput;
    };
  };
}
