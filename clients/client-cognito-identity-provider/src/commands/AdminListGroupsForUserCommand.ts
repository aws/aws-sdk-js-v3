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
import type { AdminListGroupsForUserRequest, AdminListGroupsForUserResponse } from "../models/models_0";
import { AdminListGroupsForUser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AdminListGroupsForUserCommand}.
 */
export interface AdminListGroupsForUserCommandInput extends AdminListGroupsForUserRequest {}
/**
 * @public
 *
 * The output of {@link AdminListGroupsForUserCommand}.
 */
export interface AdminListGroupsForUserCommandOutput extends AdminListGroupsForUserResponse, __MetadataBearer {}

/**
 * <p>Lists the groups that a user belongs to. User pool groups are identifiers that you can
 *             reference from the contents of ID and access tokens, and set preferred IAM roles for
 *             identity-pool authentication. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-user-groups.html">Adding groups to a user pool</a>.</p>
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
 * import { CognitoIdentityProviderClient, AdminListGroupsForUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminListGroupsForUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminListGroupsForUserRequest
 *   Username: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new AdminListGroupsForUserCommand(input);
 * const response = await client.send(command);
 * // { // AdminListGroupsForUserResponse
 * //   Groups: [ // GroupListType
 * //     { // GroupType
 * //       GroupName: "STRING_VALUE",
 * //       UserPoolId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       Precedence: Number("int"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       CreationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AdminListGroupsForUserCommandInput - {@link AdminListGroupsForUserCommandInput}
 * @returns {@link AdminListGroupsForUserCommandOutput}
 * @see {@link AdminListGroupsForUserCommandInput} for command's `input` shape.
 * @see {@link AdminListGroupsForUserCommandOutput} for command's `response` shape.
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
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class AdminListGroupsForUserCommand extends $Command
  .classBuilder<
    AdminListGroupsForUserCommandInput,
    AdminListGroupsForUserCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "AdminListGroupsForUser", {})
  .n("CognitoIdentityProviderClient", "AdminListGroupsForUserCommand")
  .sc(AdminListGroupsForUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminListGroupsForUserRequest;
      output: AdminListGroupsForUserResponse;
    };
    sdk: {
      input: AdminListGroupsForUserCommandInput;
      output: AdminListGroupsForUserCommandOutput;
    };
  };
}
