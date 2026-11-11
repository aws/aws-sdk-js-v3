// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUserSessionsRequest, ListUserSessionsResponse } from "../models/models_0";
import { ListUserSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListUserSessionsCommand}.
 */
export interface ListUserSessionsCommandInput extends ListUserSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserSessionsCommand}.
 */
export interface ListUserSessionsCommandOutput extends ListUserSessionsResponse, __MetadataBearer {}

/**
 * <p>Lists the active sessions for the currently signed-in user. Amazon Cognito authorizes this
 *             operation with the user's access token and returns all of the user's active sessions
 *             across every app client in the user pool, including both token sessions and SSO
 *             sessions. The <code>IsCurrentSession</code> field identifies the session that the
 *             calling access token belongs to. The results are eventually consistent, and new
 *             sessions are typically included within a few seconds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListUserSessionsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUserSessionsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListUserSessionsRequest
 *   AccessToken: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListUserSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserSessionsResponse
 * //   Sessions: [ // SessionsListType
 * //     { // SessionDescriptionType
 * //       SessionId: "STRING_VALUE",
 * //       SessionType: "TOKEN" || "SSO",
 * //       ClientId: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       LastActiveDate: new Date("TIMESTAMP"),
 * //       DeviceType: "STRING_VALUE",
 * //       LastIPAddress: "STRING_VALUE",
 * //       LastLocation: { // SessionLocationType
 * //         City: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //       },
 * //       OriginSessionId: "STRING_VALUE",
 * //       IsCurrentSession: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserSessionsCommandInput - {@link ListUserSessionsCommandInput}
 * @returns {@link ListUserSessionsCommandOutput}
 * @see {@link ListUserSessionsCommandInput} for command's `input` shape.
 * @see {@link ListUserSessionsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>This exception is thrown when WAF doesn't allow your request based on a web
 *             ACL that's associated with your user pool.</p>
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
 * @throws {@link OperationNotEnabledException} (client fault)
 *  <p>This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.</p>
 *
 * @throws {@link PasswordResetRequiredException} (client fault)
 *  <p>This exception is thrown when a password reset is required.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserNotConfirmedException} (client fault)
 *  <p>This exception is thrown when a user isn't confirmed successfully.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @example Example list a user's own active sessions
 * ```javascript
 * // The following example lists the active sessions for the user who owns the provided access token. The IsCurrentSession field identifies the session that the access token belongs to.
 * const input = {
 *   AccessToken: "eyJra456defEXAMPLE"
 * };
 * const command = new ListUserSessionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Sessions: [
 *     {
 *       ClientId: "1example23456789",
 *       CreateDate: 1.792454400117E9,
 *       DeviceType: "Chrome 125 / macOS 15.0",
 *       IsCurrentSession: true,
 *       LastActiveDate: 1.792540800234E9,
 *       LastIPAddress: "192.0.2.42",
 *       LastLocation: {
 *         City: "Seattle",
 *         Country: "United States"
 *       },
 *       SessionId: "tknb8c4d0e6f2g8h4j0k6m2n8p4q",
 *       SessionType: "TOKEN"
 *     },
 *     {
 *       ClientId: "1example23456789",
 *       CreateDate: 1.792195200351E9,
 *       DeviceType: "Chrome 125 / Windows 11",
 *       IsCurrentSession: false,
 *       LastActiveDate: 1.792281600468E9,
 *       LastIPAddress: "198.51.100.17",
 *       LastLocation: {
 *         City: "Portland",
 *         Country: "United States"
 *       },
 *       SessionId: "tknm5k9p2q7r4s8t1v6w3x0y5z2b",
 *       SessionType: "TOKEN"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListUserSessionsCommand extends command<ListUserSessionsCommandInput, ListUserSessionsCommandOutput>(
  _ep0,
  _mw0,
  "ListUserSessions",
  ListUserSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserSessionsRequest;
      output: ListUserSessionsResponse;
    };
    sdk: {
      input: ListUserSessionsCommandInput;
      output: ListUserSessionsCommandOutput;
    };
  };
}
