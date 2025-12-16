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
import type { ListUserPoolsRequest, ListUserPoolsResponse } from "../models/models_0";
import { ListUserPools$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUserPoolsCommand}.
 */
export interface ListUserPoolsCommandInput extends ListUserPoolsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserPoolsCommand}.
 */
export interface ListUserPoolsCommandOutput extends ListUserPoolsResponse, __MetadataBearer {}

/**
 * <p>Lists user pools and their details in the current Amazon Web Services account.</p>
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
 * import { CognitoIdentityProviderClient, ListUserPoolsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUserPoolsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListUserPoolsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"), // required
 * };
 * const command = new ListUserPoolsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserPoolsResponse
 * //   UserPools: [ // UserPoolListType
 * //     { // UserPoolDescriptionType
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       LambdaConfig: { // LambdaConfigType
 * //         PreSignUp: "STRING_VALUE",
 * //         CustomMessage: "STRING_VALUE",
 * //         PostConfirmation: "STRING_VALUE",
 * //         PreAuthentication: "STRING_VALUE",
 * //         PostAuthentication: "STRING_VALUE",
 * //         DefineAuthChallenge: "STRING_VALUE",
 * //         CreateAuthChallenge: "STRING_VALUE",
 * //         VerifyAuthChallengeResponse: "STRING_VALUE",
 * //         PreTokenGeneration: "STRING_VALUE",
 * //         UserMigration: "STRING_VALUE",
 * //         PreTokenGenerationConfig: { // PreTokenGenerationVersionConfigType
 * //           LambdaVersion: "V1_0" || "V2_0" || "V3_0", // required
 * //           LambdaArn: "STRING_VALUE", // required
 * //         },
 * //         CustomSMSSender: { // CustomSMSLambdaVersionConfigType
 * //           LambdaVersion: "V1_0", // required
 * //           LambdaArn: "STRING_VALUE", // required
 * //         },
 * //         CustomEmailSender: { // CustomEmailLambdaVersionConfigType
 * //           LambdaVersion: "V1_0", // required
 * //           LambdaArn: "STRING_VALUE", // required
 * //         },
 * //         KMSKeyID: "STRING_VALUE",
 * //       },
 * //       Status: "Enabled" || "Disabled",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       CreationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserPoolsCommandInput - {@link ListUserPoolsCommandInput}
 * @returns {@link ListUserPoolsCommandOutput}
 * @see {@link ListUserPoolsCommandInput} for command's `input` shape.
 * @see {@link ListUserPoolsCommandOutput} for command's `response` shape.
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
export class ListUserPoolsCommand extends $Command
  .classBuilder<
    ListUserPoolsCommandInput,
    ListUserPoolsCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "ListUserPools", {})
  .n("CognitoIdentityProviderClient", "ListUserPoolsCommand")
  .sc(ListUserPools$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserPoolsRequest;
      output: ListUserPoolsResponse;
    };
    sdk: {
      input: ListUserPoolsCommandInput;
      output: ListUserPoolsCommandOutput;
    };
  };
}
