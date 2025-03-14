// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetIdentityPoolRolesInput } from "../models/models_0";
import { de_SetIdentityPoolRolesCommand, se_SetIdentityPoolRolesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetIdentityPoolRolesCommand}.
 */
export interface SetIdentityPoolRolesCommandInput extends SetIdentityPoolRolesInput {}
/**
 * @public
 *
 * The output of {@link SetIdentityPoolRolesCommand}.
 */
export interface SetIdentityPoolRolesCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p>
 *          <p>You must use Amazon Web Services developer credentials to call this
 *          operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, SetIdentityPoolRolesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, SetIdentityPoolRolesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // SetIdentityPoolRolesInput
 *   IdentityPoolId: "STRING_VALUE", // required
 *   Roles: { // RolesMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RoleMappings: { // RoleMappingMap
 *     "<keys>": { // RoleMapping
 *       Type: "Token" || "Rules", // required
 *       AmbiguousRoleResolution: "AuthenticatedRole" || "Deny",
 *       RulesConfiguration: { // RulesConfigurationType
 *         Rules: [ // MappingRulesList // required
 *           { // MappingRule
 *             Claim: "STRING_VALUE", // required
 *             MatchType: "Equals" || "Contains" || "StartsWith" || "NotEqual", // required
 *             Value: "STRING_VALUE", // required
 *             RoleARN: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new SetIdentityPoolRolesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetIdentityPoolRolesCommandInput - {@link SetIdentityPoolRolesCommandInput}
 * @returns {@link SetIdentityPoolRolesCommandOutput}
 * @see {@link SetIdentityPoolRolesCommandInput} for command's `input` shape.
 * @see {@link SetIdentityPoolRolesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Thrown if there are parallel requests to modify a resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Thrown when a user is not authorized to access the requested resource.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>Thrown when a user tries to use a login which is already linked to another
 *          account.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Thrown when a request is throttled.</p>
 *
 * @throws {@link CognitoIdentityServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentity service.</p>
 *
 * @public
 */
export class SetIdentityPoolRolesCommand extends $Command
  .classBuilder<
    SetIdentityPoolRolesCommandInput,
    SetIdentityPoolRolesCommandOutput,
    CognitoIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityService", "SetIdentityPoolRoles", {})
  .n("CognitoIdentityClient", "SetIdentityPoolRolesCommand")
  .f(void 0, void 0)
  .ser(se_SetIdentityPoolRolesCommand)
  .de(de_SetIdentityPoolRolesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetIdentityPoolRolesInput;
      output: {};
    };
    sdk: {
      input: SetIdentityPoolRolesCommandInput;
      output: SetIdentityPoolRolesCommandOutput;
    };
  };
}
