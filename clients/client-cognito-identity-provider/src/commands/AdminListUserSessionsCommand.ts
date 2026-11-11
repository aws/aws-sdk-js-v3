// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminListUserSessionsRequest, AdminListUserSessionsResponse } from "../models/models_0";
import { AdminListUserSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AdminListUserSessionsCommand}.
 */
export interface AdminListUserSessionsCommandInput extends AdminListUserSessionsRequest {}
/**
 * @public
 *
 * The output of {@link AdminListUserSessionsCommand}.
 */
export interface AdminListUserSessionsCommandOutput extends AdminListUserSessionsResponse, __MetadataBearer {}

/**
 * <p>Lists the active sessions for a specified user as an administrator. The response
 *             includes both token sessions and SSO sessions. Only active sessions are returned;
 *             revoked and expired sessions aren't included. Amazon Cognito returns all of a user's sessions in
 *             a single page of up to 125 sessions. The results are eventually consistent, and new
 *             sessions are typically included within a few seconds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminListUserSessionsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminListUserSessionsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminListUserSessionsRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new AdminListUserSessionsCommand(input);
 * const response = await client.send(command);
 * // { // AdminListUserSessionsResponse
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
 * @param AdminListUserSessionsCommandInput - {@link AdminListUserSessionsCommandInput}
 * @returns {@link AdminListUserSessionsCommandOutput}
 * @see {@link AdminListUserSessionsCommandInput} for command's `input` shape.
 * @see {@link AdminListUserSessionsCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationNotEnabledException} (client fault)
 *  <p>This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.</p>
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
 * @example Example list the active sessions of a user as an administrator
 * ```javascript
 * // The following example lists the active sessions for the user testuser. The response contains one token session that originated from an SSO session, and the SSO session it came through.
 * const input = {
 *   UserPoolId: "us-east-1_EXAMPLE",
 *   Username: "testuser"
 * };
 * const command = new AdminListUserSessionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Sessions: [
 *     {
 *       ClientId: "1example23456789",
 *       CreateDate: 1.792454400117E9,
 *       DeviceType: "Chrome 125 / macOS 15.0",
 *       IsCurrentSession: false,
 *       LastActiveDate: 1.792540800234E9,
 *       LastIPAddress: "192.0.2.42",
 *       LastLocation: {
 *         City: "Seattle",
 *         Country: "United States"
 *       },
 *       OriginSessionId: "ssoq4r8s2t6u9v3w7x1y5z0a2b4c",
 *       SessionId: "tkna7b3c9d2e5f8g1h4j6k0m2n5p",
 *       SessionType: "TOKEN"
 *     },
 *     {
 *       ClientId: "1example23456789",
 *       CreateDate: 1.792368000351E9,
 *       DeviceType: "Chrome 125 / macOS 15.0",
 *       IsCurrentSession: false,
 *       LastActiveDate: 1.792537200468E9,
 *       LastIPAddress: "192.0.2.42",
 *       LastLocation: {
 *         City: "Seattle",
 *         Country: "United States"
 *       },
 *       SessionId: "ssoq4r8s2t6u9v3w7x1y5z0a2b4c",
 *       SessionType: "SSO"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AdminListUserSessionsCommand extends command<AdminListUserSessionsCommandInput, AdminListUserSessionsCommandOutput>(
  _ep0,
  _mw0,
  "AdminListUserSessions",
  AdminListUserSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminListUserSessionsRequest;
      output: AdminListUserSessionsResponse;
    };
    sdk: {
      input: AdminListUserSessionsCommandInput;
      output: AdminListUserSessionsCommandOutput;
    };
  };
}
