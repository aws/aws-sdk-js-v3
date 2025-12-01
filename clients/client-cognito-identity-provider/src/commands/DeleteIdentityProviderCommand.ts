// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteIdentityProviderRequest } from "../models/models_0";
import { DeleteIdentityProvider } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdentityProviderCommand}.
 */
export interface DeleteIdentityProviderCommandInput extends DeleteIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIdentityProviderCommand}.
 */
export interface DeleteIdentityProviderCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a user pool identity provider (IdP). After you delete an IdP, users can no
 *             longer sign in to your user pool through that IdP. For more information about user pool
 *             IdPs, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html">Third-party IdP sign-in</a>.</p>
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
 * import { CognitoIdentityProviderClient, DeleteIdentityProviderCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteIdentityProviderCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DeleteIdentityProviderRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ProviderName: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdentityProviderCommandInput - {@link DeleteIdentityProviderCommandInput}
 * @returns {@link DeleteIdentityProviderCommandOutput}
 * @see {@link DeleteIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>This exception is thrown if two or more modifications are happening
 *             concurrently.</p>
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
 * @throws {@link UnsupportedIdentityProviderException} (client fault)
 *  <p>This exception is thrown when the specified identifier isn't supported.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class DeleteIdentityProviderCommand extends $Command
  .classBuilder<
    DeleteIdentityProviderCommandInput,
    DeleteIdentityProviderCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "DeleteIdentityProvider", {})
  .n("CognitoIdentityProviderClient", "DeleteIdentityProviderCommand")
  .sc(DeleteIdentityProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdentityProviderRequest;
      output: {};
    };
    sdk: {
      input: DeleteIdentityProviderCommandInput;
      output: DeleteIdentityProviderCommandOutput;
    };
  };
}
