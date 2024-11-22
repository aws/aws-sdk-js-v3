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
import {
  ListUsersInGroupRequest,
  ListUsersInGroupResponse,
  ListUsersInGroupResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_ListUsersInGroupCommand, se_ListUsersInGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUsersInGroupCommand}.
 */
export interface ListUsersInGroupCommandInput extends ListUsersInGroupRequest {}
/**
 * @public
 *
 * The output of {@link ListUsersInGroupCommand}.
 */
export interface ListUsersInGroupCommandOutput extends ListUsersInGroupResponse, __MetadataBearer {}

/**
 * <p>Lists the users in the specified group.</p>
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
 * import { CognitoIdentityProviderClient, ListUsersInGroupCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUsersInGroupCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListUsersInGroupRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   GroupName: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListUsersInGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListUsersInGroupResponse
 * //   Users: [ // UsersListType
 * //     { // UserType
 * //       Username: "STRING_VALUE",
 * //       Attributes: [ // AttributeListType
 * //         { // AttributeType
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       UserCreateDate: new Date("TIMESTAMP"),
 * //       UserLastModifiedDate: new Date("TIMESTAMP"),
 * //       Enabled: true || false,
 * //       UserStatus: "UNCONFIRMED" || "CONFIRMED" || "ARCHIVED" || "COMPROMISED" || "UNKNOWN" || "RESET_REQUIRED" || "FORCE_CHANGE_PASSWORD" || "EXTERNAL_PROVIDER",
 * //       MFAOptions: [ // MFAOptionListType
 * //         { // MFAOptionType
 * //           DeliveryMedium: "SMS" || "EMAIL",
 * //           AttributeName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsersInGroupCommandInput - {@link ListUsersInGroupCommandInput}
 * @returns {@link ListUsersInGroupCommandOutput}
 * @see {@link ListUsersInGroupCommandInput} for command's `input` shape.
 * @see {@link ListUsersInGroupCommandOutput} for command's `response` shape.
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
export class ListUsersInGroupCommand extends $Command
  .classBuilder<
    ListUsersInGroupCommandInput,
    ListUsersInGroupCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "ListUsersInGroup", {})
  .n("CognitoIdentityProviderClient", "ListUsersInGroupCommand")
  .f(void 0, ListUsersInGroupResponseFilterSensitiveLog)
  .ser(se_ListUsersInGroupCommand)
  .de(de_ListUsersInGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsersInGroupRequest;
      output: ListUsersInGroupResponse;
    };
    sdk: {
      input: ListUsersInGroupCommandInput;
      output: ListUsersInGroupCommandOutput;
    };
  };
}
