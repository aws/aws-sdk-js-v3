// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateGuestUserRequest, UpdateGuestUserResponse } from "../models/models_0";
import { UpdateGuestUser$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGuestUserCommand}.
 */
export interface UpdateGuestUserCommandInput extends UpdateGuestUserRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGuestUserCommand}.
 */
export interface UpdateGuestUserCommandOutput extends UpdateGuestUserResponse, __MetadataBearer {}

/**
 * <p>Updates the block status of a guest user in a Wickr network. This operation allows you to block or unblock a guest user from accessing the network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, UpdateGuestUserCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, UpdateGuestUserCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // UpdateGuestUserRequest
 *   networkId: "STRING_VALUE", // required
 *   usernameHash: "STRING_VALUE", // required
 *   block: true || false, // required
 * };
 * const command = new UpdateGuestUserCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGuestUserResponse
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGuestUserCommandInput - {@link UpdateGuestUserCommandInput}
 * @returns {@link UpdateGuestUserCommandOutput}
 * @see {@link UpdateGuestUserCommandInput} for command's `input` shape.
 * @see {@link UpdateGuestUserCommandOutput} for command's `response` shape.
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
 * @example Block a guest user
 * ```javascript
 * //
 * const input = {
 *   block: true,
 *   networkId: "12345678",
 *   usernameHash: "032c36d5623781204592a69269ed9480d604484269c8a4c2d39528885a56470d"
 * };
 * const command = new UpdateGuestUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   message: "success"
 * }
 * *\/
 * ```
 *
 * @example Unblock a guest user
 * ```javascript
 * //
 * const input = {
 *   block: false,
 *   networkId: "12345678",
 *   usernameHash: "032c36d5623781204592a69269ed9480d604484269c8a4c2d39528885a56470d"
 * };
 * const command = new UpdateGuestUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   message: "success"
 * }
 * *\/
 * ```
 *
 * @example User already blocked error
 * ```javascript
 * //
 * const input = {
 *   block: true,
 *   networkId: "12345678",
 *   usernameHash: "032c36d5623781204592a69269ed9480d604484269c8a4c2d39528885a56470d"
 * };
 * const command = new UpdateGuestUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateGuestUserCommand extends $Command
  .classBuilder<
    UpdateGuestUserCommandInput,
    UpdateGuestUserCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "UpdateGuestUser", {})
  .n("WickrClient", "UpdateGuestUserCommand")
  .sc(UpdateGuestUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGuestUserRequest;
      output: UpdateGuestUserResponse;
    };
    sdk: {
      input: UpdateGuestUserCommandInput;
      output: UpdateGuestUserCommandOutput;
    };
  };
}
