// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchCreateUserRequest, BatchCreateUserResponse } from "../models/models_0";
import { BatchCreateUser$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateUserCommand}.
 */
export interface BatchCreateUserCommandInput extends BatchCreateUserRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateUserCommand}.
 */
export interface BatchCreateUserCommandOutput extends BatchCreateUserResponse, __MetadataBearer {}

/**
 * <p>Creates multiple users in a specified Wickr network. This operation allows you to provision multiple user accounts simultaneously, optionally specifying security groups, and validation requirements for each user.</p> <note> <p> <code>codeValidation</code>, <code>inviteCode</code>, and <code>inviteCodeTtl</code> are restricted to networks under preview only.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, BatchCreateUserCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, BatchCreateUserCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // BatchCreateUserRequest
 *   networkId: "STRING_VALUE", // required
 *   users: [ // BatchCreateUserRequestItems // required
 *     { // BatchCreateUserRequestItem
 *       firstName: "STRING_VALUE",
 *       lastName: "STRING_VALUE",
 *       securityGroupIds: [ // SecurityGroupIdList // required
 *         "STRING_VALUE",
 *       ],
 *       username: "STRING_VALUE", // required
 *       inviteCode: "STRING_VALUE",
 *       inviteCodeTtl: Number("int"),
 *       codeValidation: true || false,
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchCreateUserCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateUserResponse
 * //   message: "STRING_VALUE",
 * //   successful: [ // Users
 * //     { // User
 * //       userId: "STRING_VALUE",
 * //       firstName: "STRING_VALUE",
 * //       lastName: "STRING_VALUE",
 * //       username: "STRING_VALUE",
 * //       securityGroups: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       isAdmin: true || false,
 * //       suspended: true || false,
 * //       status: Number("int"),
 * //       otpEnabled: true || false,
 * //       scimId: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       cell: "STRING_VALUE",
 * //       countryCode: "STRING_VALUE",
 * //       challengeFailures: Number("int"),
 * //       isInviteExpired: true || false,
 * //       isUser: true || false,
 * //       inviteCode: "STRING_VALUE",
 * //       codeValidation: true || false,
 * //       uname: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failed: [ // BatchUserErrorResponseItems
 * //     { // BatchUserErrorResponseItem
 * //       field: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       userId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateUserCommandInput - {@link BatchCreateUserCommandInput}
 * @returns {@link BatchCreateUserCommandOutput}
 * @see {@link BatchCreateUserCommandInput} for command's `input` shape.
 * @see {@link BatchCreateUserCommandOutput} for command's `response` shape.
 * @see {@link WickrClientResolvedConfig | config} for WickrClient's `config` shape.
 *
 * @throws {@link BadRequestError} (client fault)
 *  <p>The request was invalid or malformed. This error occurs when the request parameters do not meet the API requirements, such as invalid field values, missing required parameters, or improperly formatted data.</p>
 *
 * @throws {@link ForbiddenError} (client fault)
 *  <p>Access to the requested resource is forbidden. This error occurs when the authenticated user does not have the necessary permissions to perform the requested operation, even though they are authenticated.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An unexpected error occurred on the server while processing the request. This indicates a problem with the Wickr service itself rather than with the request. If this error persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link RateLimitError} (client fault)
 *  <p>The request was throttled because too many requests were sent in a short period of time. Wait a moment and retry the request. Consider implementing exponential backoff in your application.</p>
 *
 * @throws {@link ResourceNotFoundError} (client fault)
 *  <p>The requested resource could not be found. This error occurs when you try to access or modify a network, user, bot, security group, or other resource that doesn't exist or has been deleted.</p>
 *
 * @throws {@link UnauthorizedError} (client fault)
 *  <p>The request was not authenticated or the authentication credentials were invalid. This error occurs when the request lacks valid authentication credentials or the credentials have expired.</p>
 *
 * @throws {@link ValidationError} (client fault)
 *  <p>One or more fields in the request failed validation. This error provides detailed information about which fields were invalid and why, allowing you to correct the request and retry.</p>
 *
 * @throws {@link WickrServiceException}
 * <p>Base exception class for all service exceptions from Wickr service.</p>
 *
 *
 * @example Create multiple users
 * ```javascript
 * //
 * const input = {
 *   clientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   networkId: "12345678",
 *   users: [
 *     {
 *       codeValidation: true,
 *       firstName: "John",
 *       inviteCode: "INVITE123",
 *       inviteCodeTtl: 7,
 *       lastName: "Doe",
 *       securityGroupIds: [
 *         "BCTY8Qhe"
 *       ],
 *       username: "john.doe@example.com"
 *     },
 *     {
 *       firstName: "Jane",
 *       lastName: "Smith",
 *       securityGroupIds: [
 *         "BCTY8Qhe"
 *       ],
 *       username: "jane.smith@example.com"
 *     }
 *   ]
 * };
 * const command = new BatchCreateUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failed:   [],
 *   successful: [
 *     {
 *       codeValidation: true,
 *       firstName: "John",
 *       inviteCode: "INVITE123",
 *       isInviteExpired: false,
 *       lastName: "Doe",
 *       status: 1,
 *       userId: "123",
 *       username: "john.doe@example.com"
 *     },
 *     {
 *       codeValidation: false,
 *       firstName: "Jane",
 *       inviteCode: "AUTOGEN456",
 *       isInviteExpired: false,
 *       lastName: "Smith",
 *       status: 1,
 *       userId: "456",
 *       username: "jane.smith@example.com"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Partial failure - duplicate user
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   users: [
 *     {
 *       firstName: "Alice",
 *       lastName: "Johnson",
 *       securityGroupIds: [
 *         "BCTY8Qhe"
 *       ],
 *       username: "alice.johnson@example.com"
 *     },
 *     {
 *       firstName: "Bob",
 *       lastName: "Wilson",
 *       securityGroupIds: [
 *         "BCTY8Qhe"
 *       ],
 *       username: "existing.user@example.com"
 *     }
 *   ]
 * };
 * const command = new BatchCreateUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failed: [
 *     {
 *       field: "username",
 *       reason: "User already exists",
 *       userId: "0"
 *     }
 *   ],
 *   successful: [
 *     {
 *       codeValidation: false,
 *       firstName: "Alice",
 *       inviteCode: "AUTOGEN789",
 *       isInviteExpired: false,
 *       lastName: "Johnson",
 *       status: 1,
 *       userId: "678",
 *       username: "alice.johnson@example.com"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchCreateUserCommand extends $Command
  .classBuilder<
    BatchCreateUserCommandInput,
    BatchCreateUserCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "BatchCreateUser", {})
  .n("WickrClient", "BatchCreateUserCommand")
  .sc(BatchCreateUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateUserRequest;
      output: BatchCreateUserResponse;
    };
    sdk: {
      input: BatchCreateUserCommandInput;
      output: BatchCreateUserCommandOutput;
    };
  };
}
