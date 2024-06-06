// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetOpenIdTokenInput, GetOpenIdTokenResponse } from "../models/models_0";
import { de_GetOpenIdTokenCommand, se_GetOpenIdTokenCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOpenIdTokenCommand}.
 */
export interface GetOpenIdTokenCommandInput extends GetOpenIdTokenInput {}
/**
 * @public
 *
 * The output of {@link GetOpenIdTokenCommand}.
 */
export interface GetOpenIdTokenCommandOutput extends GetOpenIdTokenResponse, __MetadataBearer {}

/**
 * <p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by
 *             <a>GetId</a>. You can optionally add additional logins for the identity.
 *          Supplying multiple logins creates an implicit link.</p>
 *          <p>The OpenID token is valid for 10 minutes.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetOpenIdTokenCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetOpenIdTokenCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // GetOpenIdTokenInput
 *   IdentityId: "STRING_VALUE", // required
 *   Logins: { // LoginsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetOpenIdTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetOpenIdTokenResponse
 * //   IdentityId: "STRING_VALUE",
 * //   Token: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOpenIdTokenCommandInput - {@link GetOpenIdTokenCommandInput}
 * @returns {@link GetOpenIdTokenCommandOutput}
 * @see {@link GetOpenIdTokenCommandInput} for command's `input` shape.
 * @see {@link GetOpenIdTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link ExternalServiceException} (client fault)
 *  <p>An exception thrown when a dependent service such as Facebook or Twitter is not
 *          responding</p>
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
export class GetOpenIdTokenCommand extends $Command
  .classBuilder<
    GetOpenIdTokenCommandInput,
    GetOpenIdTokenCommandOutput,
    CognitoIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityService", "GetOpenIdToken", {})
  .n("CognitoIdentityClient", "GetOpenIdTokenCommand")
  .f(void 0, void 0)
  .ser(se_GetOpenIdTokenCommand)
  .de(de_GetOpenIdTokenCommand)
  .build() {}
