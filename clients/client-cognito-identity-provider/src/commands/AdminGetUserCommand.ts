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
import type { AdminGetUserRequest, AdminGetUserResponse } from "../models/models_0";
import { AdminGetUser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AdminGetUserCommand}.
 */
export interface AdminGetUserCommandInput extends AdminGetUserRequest {}
/**
 * @public
 *
 * The output of {@link AdminGetUserCommand}.
 */
export interface AdminGetUserCommandOutput extends AdminGetUserResponse, __MetadataBearer {}

/**
 * <p>Given a username, returns details about a user profile in a user pool. You can specify
 *             alias attributes in the <code>Username</code> request parameter.</p>
 *          <p>This operation contributes to your monthly active user (MAU) count for the purpose of
 *             billing.</p>
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
 * import { CognitoIdentityProviderClient, AdminGetUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminGetUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminGetUserRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 * };
 * const command = new AdminGetUserCommand(input);
 * const response = await client.send(command);
 * // { // AdminGetUserResponse
 * //   Username: "STRING_VALUE", // required
 * //   UserAttributes: [ // AttributeListType
 * //     { // AttributeType
 * //       Name: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UserCreateDate: new Date("TIMESTAMP"),
 * //   UserLastModifiedDate: new Date("TIMESTAMP"),
 * //   Enabled: true || false,
 * //   UserStatus: "UNCONFIRMED" || "CONFIRMED" || "ARCHIVED" || "COMPROMISED" || "UNKNOWN" || "RESET_REQUIRED" || "FORCE_CHANGE_PASSWORD" || "EXTERNAL_PROVIDER",
 * //   MFAOptions: [ // MFAOptionListType
 * //     { // MFAOptionType
 * //       DeliveryMedium: "SMS" || "EMAIL",
 * //       AttributeName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PreferredMfaSetting: "STRING_VALUE",
 * //   UserMFASettingList: [ // UserMFASettingListType
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AdminGetUserCommandInput - {@link AdminGetUserCommandInput}
 * @returns {@link AdminGetUserCommandOutput}
 * @see {@link AdminGetUserCommandInput} for command's `input` shape.
 * @see {@link AdminGetUserCommandOutput} for command's `response` shape.
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
export class AdminGetUserCommand extends $Command
  .classBuilder<
    AdminGetUserCommandInput,
    AdminGetUserCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "AdminGetUser", {})
  .n("CognitoIdentityProviderClient", "AdminGetUserCommand")
  .sc(AdminGetUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminGetUserRequest;
      output: AdminGetUserResponse;
    };
    sdk: {
      input: AdminGetUserCommandInput;
      output: AdminGetUserCommandOutput;
    };
  };
}
