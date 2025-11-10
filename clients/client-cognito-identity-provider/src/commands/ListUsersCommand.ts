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
import { ListUsersRequest, ListUsersResponse } from "../models/models_1";
import { ListUsers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUsersCommand}.
 */
export interface ListUsersCommandInput extends ListUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListUsersCommand}.
 */
export interface ListUsersCommandOutput extends ListUsersResponse, __MetadataBearer {}

/**
 * <p>Given a user pool ID, returns a list of users and their basic details in a user
 *             pool.</p>
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
 * import { CognitoIdentityProviderClient, ListUsersCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUsersCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListUsersRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   AttributesToGet: [ // SearchedAttributeNamesListType
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   PaginationToken: "STRING_VALUE",
 *   Filter: "STRING_VALUE",
 * };
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListUsersResponse
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
 * //   PaginationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsersCommandInput - {@link ListUsersCommandInput}
 * @returns {@link ListUsersCommandOutput}
 * @see {@link ListUsersCommandInput} for command's `input` shape.
 * @see {@link ListUsersCommandOutput} for command's `response` shape.
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
 * @example A ListUsers request for the next 3 users whose email address starts with "testuser."
 * ```javascript
 * // This request submits a value for all possible parameters for ListUsers. By iterating the PaginationToken, you can page through and collect all users in a user pool.
 * const input = {
 *   AttributesToGet: [
 *     "email",
 *     "sub"
 *   ],
 *   Filter: `"email"^="testuser"`,
 *   Limit: 3,
 *   PaginationToken: "abcd1234EXAMPLE",
 *   UserPoolId: "us-east-1_EXAMPLE"
 * };
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   PaginationToken: "efgh5678EXAMPLE",
 *   Users: [
 *     {
 *       Attributes: [
 *         {
 *           Name: "sub",
 *           Value: "eaad0219-2117-439f-8d46-4db20e59268f"
 *         },
 *         {
 *           Name: "email",
 *           Value: "testuser@example.com"
 *         }
 *       ],
 *       Enabled: true,
 *       UserCreateDate: 1.682955829578E9,
 *       UserLastModifiedDate: 1.68903018163E9,
 *       UserStatus: "CONFIRMED",
 *       Username: "testuser"
 *     },
 *     {
 *       Attributes: [
 *         {
 *           Name: "sub",
 *           Value: "3b994cfd-0b07-4581-be46-3c82f9a70c90"
 *         },
 *         {
 *           Name: "email",
 *           Value: "testuser2@example.com"
 *         }
 *       ],
 *       Enabled: true,
 *       UserCreateDate: 1.684427979201E9,
 *       UserLastModifiedDate: 1.684427979201E9,
 *       UserStatus: "UNCONFIRMED",
 *       Username: "testuser2"
 *     },
 *     {
 *       Attributes: [
 *         {
 *           Name: "sub",
 *           Value: "5929e0d1-4c34-42d1-9b79-a5ecacfe66f7"
 *         },
 *         {
 *           Name: "email",
 *           Value: "testuser3@example.com"
 *         }
 *       ],
 *       Enabled: true,
 *       UserCreateDate: 1.684427823641E9,
 *       UserLastModifiedDate: 1.684427823641E9,
 *       UserStatus: "UNCONFIRMED",
 *       Username: "testuser3@example.com"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListUsersCommand extends $Command
  .classBuilder<
    ListUsersCommandInput,
    ListUsersCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "ListUsers", {})
  .n("CognitoIdentityProviderClient", "ListUsersCommand")
  .sc(ListUsers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsersRequest;
      output: ListUsersResponse;
    };
    sdk: {
      input: ListUsersCommandInput;
      output: ListUsersCommandOutput;
    };
  };
}
