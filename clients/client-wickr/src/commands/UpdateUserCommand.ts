// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateUserRequest, UpdateUserResponse } from "../models/models_0";
import { UpdateUser$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserCommand}.
 */
export interface UpdateUserCommandInput extends UpdateUserRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserCommand}.
 */
export interface UpdateUserCommandOutput extends UpdateUserResponse, __MetadataBearer {}

/**
 * <p>Updates the properties of an existing user in a Wickr network. This operation allows you to modify the user's name, password, security group membership, and invite code settings.</p> <note> <p> <code>codeValidation</code>, <code>inviteCode</code>, and <code>inviteCodeTtl</code> are restricted to networks under preview only.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, UpdateUserCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, UpdateUserCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // UpdateUserRequest
 *   networkId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   userDetails: { // UpdateUserDetails
 *     firstName: "STRING_VALUE",
 *     lastName: "STRING_VALUE",
 *     username: "STRING_VALUE",
 *     securityGroupIds: [ // SecurityGroupIdList
 *       "STRING_VALUE",
 *     ],
 *     inviteCode: "STRING_VALUE",
 *     inviteCodeTtl: Number("int"),
 *     codeValidation: true || false,
 *   },
 * };
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserResponse
 * //   userId: "STRING_VALUE", // required
 * //   networkId: "STRING_VALUE", // required
 * //   securityGroupIds: [ // SecurityGroupIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   firstName: "STRING_VALUE",
 * //   lastName: "STRING_VALUE",
 * //   middleName: "STRING_VALUE",
 * //   suspended: true || false, // required
 * //   modified: Number("int"),
 * //   status: Number("int"),
 * //   inviteCode: "STRING_VALUE",
 * //   inviteExpiration: Number("int"),
 * //   codeValidation: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateUserCommandInput - {@link UpdateUserCommandInput}
 * @returns {@link UpdateUserCommandOutput}
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
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
 * @example Update user information
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   userDetails: {
 *     firstName: "Jonathan",
 *     lastName: "Doe",
 *     securityGroupIds: [
 *       "BCTY8Qhe",
 *       "DEPT001"
 *     ],
 *     username: "john.doe@example.com"
 *   },
 *   userId: "12345"
 * };
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   firstName: "Jonathan",
 *   lastName: "Doe",
 *   modified: 1705500000,
 *   networkId: "12345678",
 *   securityGroupIds: [
 *     "BCTY8Qhe",
 *     "DEPT001"
 *   ],
 *   status: 2,
 *   suspended: false,
 *   userId: "12345"
 * }
 * *\/
 * ```
 *
 * @example Update user with invite code
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   userDetails: {
 *     codeValidation: true,
 *     firstName: "Jane",
 *     inviteCode: "NEWINVITE789",
 *     inviteCodeTtl: 14,
 *     lastName: "Smith",
 *     username: "jane.smith@example.com"
 *   },
 *   userId: "12345"
 * };
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   codeValidation: true,
 *   firstName: "Jane",
 *   inviteCode: "NEWINVITE789",
 *   inviteExpiration: 1706709600,
 *   lastName: "Smith",
 *   modified: 1705500100,
 *   networkId: "12345678",
 *   status: 2,
 *   suspended: false,
 *   userId: "12345"
 * }
 * *\/
 * ```
 *
 * @example User not found error
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   userDetails: {
 *     firstName: "Non",
 *     lastName: "Existent",
 *     username: "nonexistent@example.com"
 *   },
 *   userId: "99999"
 * };
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Invalid userId error
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   userDetails: {
 *     firstName: "John",
 *     lastName: "Doe",
 *     securityGroupIds: [
 *       "BCTY8Qhe"
 *     ],
 *     username: "john.doe@example.com"
 *   },
 *   userId: "99999"
 * };
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateUserCommand extends $Command
  .classBuilder<
    UpdateUserCommandInput,
    UpdateUserCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "UpdateUser", {})
  .n("WickrClient", "UpdateUserCommand")
  .sc(UpdateUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserRequest;
      output: UpdateUserResponse;
    };
    sdk: {
      input: UpdateUserCommandInput;
      output: UpdateUserCommandOutput;
    };
  };
}
