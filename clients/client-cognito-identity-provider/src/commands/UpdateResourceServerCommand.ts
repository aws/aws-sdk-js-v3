// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateResourceServerRequest, UpdateResourceServerResponse } from "../models/models_0";
import { UpdateResourceServer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResourceServerCommand}.
 */
export interface UpdateResourceServerCommandInput extends UpdateResourceServerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceServerCommand}.
 */
export interface UpdateResourceServerCommandOutput extends UpdateResourceServerResponse, __MetadataBearer {}

/**
 * <p>Updates the name and scopes of a resource server. All other fields are read-only. For
 *             more information about resource servers, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-define-resource-servers.html">Access control with resource servers</a>.</p>
 *          <important>
 *             <p>If you don't provide a value for an attribute, it is set to the default
 *                 value.</p>
 *          </important>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you must use IAM credentials to authorize requests, and you must
 *     grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateResourceServerCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateResourceServerCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateResourceServerRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Scopes: [ // ResourceServerScopeListType
 *     { // ResourceServerScopeType
 *       ScopeName: "STRING_VALUE", // required
 *       ScopeDescription: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateResourceServerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResourceServerResponse
 * //   ResourceServer: { // ResourceServerType
 * //     UserPoolId: "STRING_VALUE",
 * //     Identifier: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Scopes: [ // ResourceServerScopeListType
 * //       { // ResourceServerScopeType
 * //         ScopeName: "STRING_VALUE", // required
 * //         ScopeDescription: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateResourceServerCommandInput - {@link UpdateResourceServerCommandInput}
 * @returns {@link UpdateResourceServerCommandOutput}
 * @see {@link UpdateResourceServerCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceServerCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class UpdateResourceServerCommand extends $Command
  .classBuilder<
    UpdateResourceServerCommandInput,
    UpdateResourceServerCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "UpdateResourceServer", {})
  .n("CognitoIdentityProviderClient", "UpdateResourceServerCommand")
  .sc(UpdateResourceServer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceServerRequest;
      output: UpdateResourceServerResponse;
    };
    sdk: {
      input: UpdateResourceServerCommandInput;
      output: UpdateResourceServerCommandOutput;
    };
  };
}
