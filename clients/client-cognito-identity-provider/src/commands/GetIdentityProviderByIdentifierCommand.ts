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
import { GetIdentityProviderByIdentifierRequest, GetIdentityProviderByIdentifierResponse } from "../models/models_0";
import { GetIdentityProviderByIdentifier } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityProviderByIdentifierCommand}.
 */
export interface GetIdentityProviderByIdentifierCommandInput extends GetIdentityProviderByIdentifierRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityProviderByIdentifierCommand}.
 */
export interface GetIdentityProviderByIdentifierCommandOutput
  extends GetIdentityProviderByIdentifierResponse,
    __MetadataBearer {}

/**
 * <p>Given the identifier of an identity provider (IdP), for example
 *                 <code>examplecorp</code>, returns information about the user pool configuration for
 *             that IdP. For more information about IdPs, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html">Third-party IdP sign-in</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetIdentityProviderByIdentifierCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetIdentityProviderByIdentifierCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetIdentityProviderByIdentifierRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   IdpIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetIdentityProviderByIdentifierCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityProviderByIdentifierResponse
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
 * @param GetIdentityProviderByIdentifierCommandInput - {@link GetIdentityProviderByIdentifierCommandInput}
 * @returns {@link GetIdentityProviderByIdentifierCommandOutput}
 * @see {@link GetIdentityProviderByIdentifierCommandInput} for command's `input` shape.
 * @see {@link GetIdentityProviderByIdentifierCommandOutput} for command's `response` shape.
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
export class GetIdentityProviderByIdentifierCommand extends $Command
  .classBuilder<
    GetIdentityProviderByIdentifierCommandInput,
    GetIdentityProviderByIdentifierCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "GetIdentityProviderByIdentifier", {})
  .n("CognitoIdentityProviderClient", "GetIdentityProviderByIdentifierCommand")
  .sc(GetIdentityProviderByIdentifier)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdentityProviderByIdentifierRequest;
      output: GetIdentityProviderByIdentifierResponse;
    };
    sdk: {
      input: GetIdentityProviderByIdentifierCommandInput;
      output: GetIdentityProviderByIdentifierCommandOutput;
    };
  };
}
