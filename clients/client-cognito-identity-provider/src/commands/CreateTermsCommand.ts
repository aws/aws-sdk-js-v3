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
import { CreateTermsRequest, CreateTermsResponse } from "../models/models_0";
import { CreateTerms } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTermsCommand}.
 */
export interface CreateTermsCommandInput extends CreateTermsRequest {}
/**
 * @public
 *
 * The output of {@link CreateTermsCommand}.
 */
export interface CreateTermsCommandOutput extends CreateTermsResponse, __MetadataBearer {}

/**
 * <p>Creates terms documents for the requested app client. When Terms and conditions and
 *             Privacy policy documents are configured, the app client displays links to them in the
 *             sign-up page of managed login for the app client.</p>
 *          <p>You can provide URLs for terms documents in the languages that are supported by <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-localization">managed login localization</a>. Amazon Cognito directs users to the terms documents for
 *             their current language, with fallback to <code>default</code> if no document exists for
 *             the language.</p>
 *          <p>Each request accepts one type of terms document and a map of language-to-link for that
 *             document type. You must provide both types of terms documents in at least one language
 *             before Amazon Cognito displays your terms documents. Supply each type in separate
 *             requests.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-terms-documents">Terms documents</a>.</p>
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
 * import { CognitoIdentityProviderClient, CreateTermsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateTermsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // CreateTermsRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 *   TermsName: "STRING_VALUE", // required
 *   TermsSource: "LINK", // required
 *   Enforcement: "NONE", // required
 *   Links: { // LinksType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTermsCommand(input);
 * const response = await client.send(command);
 * // { // CreateTermsResponse
 * //   Terms: { // TermsType
 * //     TermsId: "STRING_VALUE", // required
 * //     UserPoolId: "STRING_VALUE", // required
 * //     ClientId: "STRING_VALUE", // required
 * //     TermsName: "STRING_VALUE", // required
 * //     TermsSource: "LINK", // required
 * //     Enforcement: "NONE", // required
 * //     Links: { // LinksType // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreationDate: new Date("TIMESTAMP"), // required
 * //     LastModifiedDate: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateTermsCommandInput - {@link CreateTermsCommandInput}
 * @returns {@link CreateTermsCommandOutput}
 * @see {@link CreateTermsCommandInput} for command's `input` shape.
 * @see {@link CreateTermsCommandOutput} for command's `response` shape.
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
 * @throws {@link TermsExistsException} (client fault)
 *  <p>Terms document names must be unique to the app client. This exception is thrown when
 *             you attempt to create terms documents with a duplicate <code>TermsName</code>.</p>
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
export class CreateTermsCommand extends $Command
  .classBuilder<
    CreateTermsCommandInput,
    CreateTermsCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "CreateTerms", {})
  .n("CognitoIdentityProviderClient", "CreateTermsCommand")
  .sc(CreateTerms)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTermsRequest;
      output: CreateTermsResponse;
    };
    sdk: {
      input: CreateTermsCommandInput;
      output: CreateTermsCommandOutput;
    };
  };
}
