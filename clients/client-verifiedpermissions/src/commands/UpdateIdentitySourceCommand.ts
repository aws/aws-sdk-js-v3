// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateIdentitySourceInput,
  UpdateIdentitySourceInputFilterSensitiveLog,
  UpdateIdentitySourceOutput,
} from "../models/models_0";
import { de_UpdateIdentitySourceCommand, se_UpdateIdentitySourceCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link UpdateIdentitySourceCommand}.
 */
export interface UpdateIdentitySourceCommandInput extends UpdateIdentitySourceInput {}
/**
 * @public
 *
 * The output of {@link UpdateIdentitySourceCommand}.
 */
export interface UpdateIdentitySourceCommandOutput extends UpdateIdentitySourceOutput, __MetadataBearer {}

/**
 * <p>Updates the specified identity source to use a new identity provider (IdP), or to change the mapping of identities from the IdP to a different principal entity type.</p> <note> <p>Verified Permissions is <i> <a href="https://wikipedia.org/wiki/Eventual_consistency">eventually consistent</a> </i>. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, UpdateIdentitySourceCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, UpdateIdentitySourceCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // UpdateIdentitySourceInput
 *   policyStoreId: "STRING_VALUE", // required
 *   identitySourceId: "STRING_VALUE", // required
 *   updateConfiguration: { // UpdateConfiguration Union: only one key present
 *     cognitoUserPoolConfiguration: { // UpdateCognitoUserPoolConfiguration
 *       userPoolArn: "STRING_VALUE", // required
 *       clientIds: [ // ClientIds
 *         "STRING_VALUE",
 *       ],
 *       groupConfiguration: { // UpdateCognitoGroupConfiguration
 *         groupEntityType: "STRING_VALUE", // required
 *       },
 *     },
 *     openIdConnectConfiguration: { // UpdateOpenIdConnectConfiguration
 *       issuer: "STRING_VALUE", // required
 *       entityIdPrefix: "STRING_VALUE",
 *       groupConfiguration: { // UpdateOpenIdConnectGroupConfiguration
 *         groupClaim: "STRING_VALUE", // required
 *         groupEntityType: "STRING_VALUE", // required
 *       },
 *       tokenSelection: { // UpdateOpenIdConnectTokenSelection Union: only one key present
 *         accessTokenOnly: { // UpdateOpenIdConnectAccessTokenConfiguration
 *           principalIdClaim: "STRING_VALUE",
 *           audiences: [ // Audiences
 *             "STRING_VALUE",
 *           ],
 *         },
 *         identityTokenOnly: { // UpdateOpenIdConnectIdentityTokenConfiguration
 *           principalIdClaim: "STRING_VALUE",
 *           clientIds: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *   },
 *   principalEntityType: "STRING_VALUE",
 * };
 * const command = new UpdateIdentitySourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIdentitySourceOutput
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   identitySourceId: "STRING_VALUE", // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * //   policyStoreId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateIdentitySourceCommandInput - {@link UpdateIdentitySourceCommandInput}
 * @returns {@link UpdateIdentitySourceCommandOutput}
 * @see {@link UpdateIdentitySourceCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentitySourceCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because another request to modify a resource occurred at the same.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request failed because it references a resource that doesn't exist.</p>
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
 * @example UpdateIdentitySource
 * ```javascript
 * // The following example updates the configuration of the specified identity source with a new configuration.
 * const input = {
 *   identitySourceId: "ISEXAMPLEabcdefg111111",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   updateConfiguration: {
 *     cognitoUserPoolConfiguration: {
 *       clientIds: [
 *         "a1b2c3d4e5f6g7h8i9j0kalbmc"
 *       ],
 *       userPoolArn: "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5"
 *     }
 *   }
 * };
 * const command = new UpdateIdentitySourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdDate: "2023-05-19T20:30:28.173926Z",
 *   identitySourceId: "ISEXAMPLEabcdefg111111",
 *   lastUpdatedDate: "2023-05-22T20:45:59.962216Z",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateIdentitySourceCommand extends $Command
  .classBuilder<
    UpdateIdentitySourceCommandInput,
    UpdateIdentitySourceCommandOutput,
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
  .s("VerifiedPermissions", "UpdateIdentitySource", {})
  .n("VerifiedPermissionsClient", "UpdateIdentitySourceCommand")
  .f(UpdateIdentitySourceInputFilterSensitiveLog, void 0)
  .ser(se_UpdateIdentitySourceCommand)
  .de(de_UpdateIdentitySourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIdentitySourceInput;
      output: UpdateIdentitySourceOutput;
    };
    sdk: {
      input: UpdateIdentitySourceCommandInput;
      output: UpdateIdentitySourceCommandOutput;
    };
  };
}
