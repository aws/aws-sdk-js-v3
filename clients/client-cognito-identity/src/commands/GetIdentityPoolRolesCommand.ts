// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIdentityPoolRolesInput, GetIdentityPoolRolesResponse } from "../models/models_0";
import { de_GetIdentityPoolRolesCommand, se_GetIdentityPoolRolesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityPoolRolesCommand}.
 */
export interface GetIdentityPoolRolesCommandInput extends GetIdentityPoolRolesInput {}
/**
 * @public
 *
 * The output of {@link GetIdentityPoolRolesCommand}.
 */
export interface GetIdentityPoolRolesCommandOutput extends GetIdentityPoolRolesResponse, __MetadataBearer {}

/**
 * <p>Gets the roles for an identity pool.</p>
 *          <p>You must use Amazon Web Services developer credentials to call this
 *          operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetIdentityPoolRolesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetIdentityPoolRolesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // GetIdentityPoolRolesInput
 *   IdentityPoolId: "STRING_VALUE", // required
 * };
 * const command = new GetIdentityPoolRolesCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityPoolRolesResponse
 * //   IdentityPoolId: "STRING_VALUE",
 * //   Roles: { // RolesMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   RoleMappings: { // RoleMappingMap
 * //     "<keys>": { // RoleMapping
 * //       Type: "Token" || "Rules", // required
 * //       AmbiguousRoleResolution: "AuthenticatedRole" || "Deny",
 * //       RulesConfiguration: { // RulesConfigurationType
 * //         Rules: [ // MappingRulesList // required
 * //           { // MappingRule
 * //             Claim: "STRING_VALUE", // required
 * //             MatchType: "Equals" || "Contains" || "StartsWith" || "NotEqual", // required
 * //             Value: "STRING_VALUE", // required
 * //             RoleARN: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityPoolRolesCommandInput - {@link GetIdentityPoolRolesCommandInput}
 * @returns {@link GetIdentityPoolRolesCommandOutput}
 * @see {@link GetIdentityPoolRolesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityPoolRolesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
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
export class GetIdentityPoolRolesCommand extends $Command
  .classBuilder<
    GetIdentityPoolRolesCommandInput,
    GetIdentityPoolRolesCommandOutput,
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
  .s("AWSCognitoIdentityService", "GetIdentityPoolRoles", {})
  .n("CognitoIdentityClient", "GetIdentityPoolRolesCommand")
  .f(void 0, void 0)
  .ser(se_GetIdentityPoolRolesCommand)
  .de(de_GetIdentityPoolRolesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdentityPoolRolesInput;
      output: GetIdentityPoolRolesResponse;
    };
    sdk: {
      input: GetIdentityPoolRolesCommandInput;
      output: GetIdentityPoolRolesCommandOutput;
    };
  };
}
