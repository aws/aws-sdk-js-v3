// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTermsByClientRequest, DescribeTermsByClientResponse } from "../models/models_0";
import { DescribeTermsByClient$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTermsByClientCommand}.
 */
export interface DescribeTermsByClientCommandInput extends DescribeTermsByClientRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTermsByClientCommand}.
 */
export interface DescribeTermsByClientCommandOutput extends DescribeTermsByClientResponse, __MetadataBearer {}

/**
 * Returns details for the terms documents that are associated with an app client, identified by the app client ID, user pool ID, and terms name. For more information, see [Terms documents](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-terms-documents).
 *
 * To call `DescribeTermsByClient`, you must have the `cognito-idp:DescribeTermsByClient` Identity and Access Management (IAM) permission. An IAM policy that denies `cognito-idp:DescribeTerms` also denies requests to `DescribeTermsByClient`.
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
 * import { CognitoIdentityProviderClient, DescribeTermsByClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeTermsByClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DescribeTermsByClientRequest
 *   ClientId: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 *   TermsName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTermsByClientCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTermsByClientResponse
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
 * @param DescribeTermsByClientCommandInput - {@link DescribeTermsByClientCommandInput}
 * @returns {@link DescribeTermsByClientCommandOutput}
 * @see {@link DescribeTermsByClientCommandInput} for command's `input` shape.
 * @see {@link DescribeTermsByClientCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
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
export class DescribeTermsByClientCommand extends command<DescribeTermsByClientCommandInput, DescribeTermsByClientCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTermsByClient",
  DescribeTermsByClient$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTermsByClientRequest;
      output: DescribeTermsByClientResponse;
    };
    sdk: {
      input: DescribeTermsByClientCommandInput;
      output: DescribeTermsByClientCommandOutput;
    };
  };
}
