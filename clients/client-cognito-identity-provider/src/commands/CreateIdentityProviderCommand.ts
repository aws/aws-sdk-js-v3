// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIdentityProviderRequest, CreateIdentityProviderResponse } from "../models/models_0";
import { de_CreateIdentityProviderCommand, se_CreateIdentityProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIdentityProviderCommand}.
 */
export interface CreateIdentityProviderCommandInput extends CreateIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateIdentityProviderCommand}.
 */
export interface CreateIdentityProviderCommandOutput extends CreateIdentityProviderResponse, __MetadataBearer {}

/**
 * <p>Adds a configuration and trust relationship between a third-party identity provider
 *             (IdP) and a user pool.</p>
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
 * import { CognitoIdentityProviderClient, CreateIdentityProviderCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateIdentityProviderCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // CreateIdentityProviderRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ProviderName: "STRING_VALUE", // required
 *   ProviderType: "SAML" || "Facebook" || "Google" || "LoginWithAmazon" || "SignInWithApple" || "OIDC", // required
 *   ProviderDetails: { // ProviderDetailsType // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AttributeMapping: { // AttributeMappingType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   IdpIdentifiers: [ // IdpIdentifiersListType
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateIdentityProviderResponse
 * //   IdentityProvider: { // IdentityProviderType
 * //     UserPoolId: "STRING_VALUE",
 * //     ProviderName: "STRING_VALUE",
 * //     ProviderType: "SAML" || "Facebook" || "Google" || "LoginWithAmazon" || "SignInWithApple" || "OIDC",
 * //     ProviderDetails: { // ProviderDetailsType
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     AttributeMapping: { // AttributeMappingType
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     IdpIdentifiers: [ // IdpIdentifiersListType
 * //       "STRING_VALUE",
 * //     ],
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     CreationDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateIdentityProviderCommandInput - {@link CreateIdentityProviderCommandInput}
 * @returns {@link CreateIdentityProviderCommandOutput}
 * @see {@link CreateIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link CreateIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link DuplicateProviderException} (client fault)
 *  <p>This exception is thrown when the provider is already supported by the user
 *             pool.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
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
 * @public
 */
export class CreateIdentityProviderCommand extends $Command
  .classBuilder<
    CreateIdentityProviderCommandInput,
    CreateIdentityProviderCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityProviderService", "CreateIdentityProvider", {})
  .n("CognitoIdentityProviderClient", "CreateIdentityProviderCommand")
  .f(void 0, void 0)
  .ser(se_CreateIdentityProviderCommand)
  .de(de_CreateIdentityProviderCommand)
  .build() {}
