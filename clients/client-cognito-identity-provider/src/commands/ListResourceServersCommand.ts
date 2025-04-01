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
import { ListResourceServersRequest, ListResourceServersResponse } from "../models/models_1";
import { de_ListResourceServersCommand, se_ListResourceServersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceServersCommand}.
 */
export interface ListResourceServersCommandInput extends ListResourceServersRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceServersCommand}.
 */
export interface ListResourceServersCommandOutput extends ListResourceServersResponse, __MetadataBearer {}

/**
 * <p>Given a user pool ID, returns all resource servers and their details. For more
 *             information about resource servers, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-define-resource-servers.html">Access control with resource servers</a>.</p>
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
 * import { CognitoIdentityProviderClient, ListResourceServersCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListResourceServersCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListResourceServersRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceServersCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceServersResponse
 * //   ResourceServers: [ // ResourceServersListType // required
 * //     { // ResourceServerType
 * //       UserPoolId: "STRING_VALUE",
 * //       Identifier: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Scopes: [ // ResourceServerScopeListType
 * //         { // ResourceServerScopeType
 * //           ScopeName: "STRING_VALUE", // required
 * //           ScopeDescription: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceServersCommandInput - {@link ListResourceServersCommandInput}
 * @returns {@link ListResourceServersCommandOutput}
 * @see {@link ListResourceServersCommandInput} for command's `input` shape.
 * @see {@link ListResourceServersCommandOutput} for command's `response` shape.
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
export class ListResourceServersCommand extends $Command
  .classBuilder<
    ListResourceServersCommandInput,
    ListResourceServersCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "ListResourceServers", {})
  .n("CognitoIdentityProviderClient", "ListResourceServersCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceServersCommand)
  .de(de_ListResourceServersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceServersRequest;
      output: ListResourceServersResponse;
    };
    sdk: {
      input: ListResourceServersCommandInput;
      output: ListResourceServersCommandOutput;
    };
  };
}
