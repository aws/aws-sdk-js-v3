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
import { GetCSVHeaderRequest, GetCSVHeaderResponse } from "../models/models_0";
import { de_GetCSVHeaderCommand, se_GetCSVHeaderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCSVHeaderCommand}.
 */
export interface GetCSVHeaderCommandInput extends GetCSVHeaderRequest {}
/**
 * @public
 *
 * The output of {@link GetCSVHeaderCommand}.
 */
export interface GetCSVHeaderCommandOutput extends GetCSVHeaderResponse, __MetadataBearer {}

/**
 * <p>Given a user pool ID, generates a comma-separated value (CSV) list populated with
 *             available user attributes in the user pool. This list is the header for the CSV file
 *             that determines the users in a user import job. Save the content of
 *                 <code>CSVHeader</code> in the response as a <code>.csv</code> file and populate it
 *             with the usernames and attributes of users that you want to import. For more information
 *             about CSV user import, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-using-import-tool.html">Importing users from a CSV file</a>.</p>
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
 * import { CognitoIdentityProviderClient, GetCSVHeaderCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetCSVHeaderCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetCSVHeaderRequest
 *   UserPoolId: "STRING_VALUE", // required
 * };
 * const command = new GetCSVHeaderCommand(input);
 * const response = await client.send(command);
 * // { // GetCSVHeaderResponse
 * //   UserPoolId: "STRING_VALUE",
 * //   CSVHeader: [ // ListOfStringTypes
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCSVHeaderCommandInput - {@link GetCSVHeaderCommandInput}
 * @returns {@link GetCSVHeaderCommandOutput}
 * @see {@link GetCSVHeaderCommandInput} for command's `input` shape.
 * @see {@link GetCSVHeaderCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetCSVHeaderCommand extends $Command
  .classBuilder<
    GetCSVHeaderCommandInput,
    GetCSVHeaderCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityProviderService", "GetCSVHeader", {})
  .n("CognitoIdentityProviderClient", "GetCSVHeaderCommand")
  .f(void 0, void 0)
  .ser(se_GetCSVHeaderCommand)
  .de(de_GetCSVHeaderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCSVHeaderRequest;
      output: GetCSVHeaderResponse;
    };
    sdk: {
      input: GetCSVHeaderCommandInput;
      output: GetCSVHeaderCommandOutput;
    };
  };
}
