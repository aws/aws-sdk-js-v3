// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIdentityPoolRolesInput, GetIdentityPoolRolesResponse } from "../models/models_0";
import { GetIdentityPoolRoles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the roles for an identity pool.
 *
 * You must use Amazon Web Services developer credentials to call this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetIdentityPoolRolesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetIdentityPoolRolesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * // import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
 * const config = {}; // type is CognitoIdentityClientConfig
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
 *
 * Thrown when the service encounters an error during processing the request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Thrown for missing or bad input parameter(s).
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * Thrown when a user is not authorized to access the requested resource.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * Thrown when a user tries to use a login which is already linked to another account.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Thrown when the requested resource (for example, a dataset or record) does not exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Thrown when a request is throttled.
 *
 * @throws {@link CognitoIdentityServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentity service.
 *
 * @public
 */
export class GetIdentityPoolRolesCommand extends command<GetIdentityPoolRolesCommandInput, GetIdentityPoolRolesCommandOutput>(
  _ep0,
  _mw0,
  "GetIdentityPoolRoles",
  GetIdentityPoolRoles$
) {
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
