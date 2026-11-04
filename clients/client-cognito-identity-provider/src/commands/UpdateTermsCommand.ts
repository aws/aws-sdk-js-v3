// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTermsRequest, UpdateTermsResponse } from "../models/models_1";
import { UpdateTerms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTermsCommand}.
 */
export interface UpdateTermsCommandInput extends UpdateTermsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTermsCommand}.
 */
export interface UpdateTermsCommandOutput extends UpdateTermsResponse, __MetadataBearer {}

/**
 * Modifies existing terms documents for the requested app client. When Terms and conditions and Privacy policy documents are configured, the app client displays links to them in the sign-up page of managed login for the app client.
 *
 * You can provide URLs for terms documents in the languages that are supported by [managed login localization](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-localization). Amazon Cognito directs users to the terms documents for their current language, with fallback to `default` if no document exists for the language.
 *
 * Each request accepts one type of terms document and a map of language-to-link for that document type. You must provide both types of terms documents in at least one language before Amazon Cognito displays your terms documents. Supply each type in separate requests.
 *
 * For more information, see [Terms documents](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-terms-documents).
 *
 * > **Note:**
 * >
 * > Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.
 * >
 * > **Learn more**
 * >
 * > - [Signing Amazon Web Services API Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
 * > - [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateTermsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateTermsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateTermsRequest
 *   TermsId: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 *   TermsName: "STRING_VALUE",
 *   TermsSource: "LINK",
 *   Enforcement: "NONE",
 *   Links: { // LinksType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateTermsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTermsResponse
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
 * @param UpdateTermsCommandInput - {@link UpdateTermsCommandInput}
 * @returns {@link UpdateTermsCommandOutput}
 * @see {@link UpdateTermsCommandInput} for command's `input` shape.
 * @see {@link UpdateTermsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * This exception is thrown if two or more modifications are happening concurrently.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * This exception is thrown when a user isn't authorized.
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *
 * This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link TermsExistsException} (client fault)
 *
 * Terms document names must be unique to the app client. This exception is thrown when you attempt to create terms documents with a duplicate `TermsName`.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class UpdateTermsCommand extends command<UpdateTermsCommandInput, UpdateTermsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTerms",
  UpdateTerms$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTermsRequest;
      output: UpdateTermsResponse;
    };
    sdk: {
      input: UpdateTermsCommandInput;
      output: UpdateTermsCommandOutput;
    };
  };
}
