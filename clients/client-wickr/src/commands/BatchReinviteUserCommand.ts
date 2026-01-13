// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchReinviteUserRequest, BatchReinviteUserResponse } from "../models/models_0";
import { BatchReinviteUser$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchReinviteUserCommand}.
 */
export interface BatchReinviteUserCommandInput extends BatchReinviteUserRequest {}
/**
 * @public
 *
 * The output of {@link BatchReinviteUserCommand}.
 */
export interface BatchReinviteUserCommandOutput extends BatchReinviteUserResponse, __MetadataBearer {}

/**
 * <p>Resends invitation codes to multiple users who have pending invitations in a Wickr network. This operation is useful when users haven't accepted their initial invitations or when invitations have expired.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, BatchReinviteUserCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, BatchReinviteUserCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // BatchReinviteUserRequest
 *   networkId: "STRING_VALUE", // required
 *   userIds: [ // UserIds // required
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchReinviteUserCommand(input);
 * const response = await client.send(command);
 * // { // BatchReinviteUserResponse
 * //   message: "STRING_VALUE",
 * //   successful: [ // BatchUserSuccessResponseItems
 * //     { // BatchUserSuccessResponseItem
 * //       userId: "STRING_VALUE", // required
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
 * @param BatchReinviteUserCommandInput - {@link BatchReinviteUserCommandInput}
 * @returns {@link BatchReinviteUserCommandOutput}
 * @see {@link BatchReinviteUserCommandInput} for command's `input` shape.
 * @see {@link BatchReinviteUserCommandOutput} for command's `response` shape.
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
 * @example Batch reinvite users successfully
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   userIds: [
 *     "12345",
 *     "67890"
 *   ]
 * };
 * const command = new BatchReinviteUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failed:   [],
 *   successful: [
 *     {
 *       userId: "12345"
 *     },
 *     {
 *       userId: "67890"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Batch reinvite users - partial success
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   userIds: [
 *     "12345",
 *     "99999"
 *   ]
 * };
 * const command = new BatchReinviteUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failed: [
 *     {
 *       reason: "user not found in current network",
 *       userId: "99999"
 *     }
 *   ],
 *   successful: [
 *     {
 *       userId: "12345"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Batch reinvite users - cannot reinvite
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   userIds: [
 *     "54321"
 *   ]
 * };
 * const command = new BatchReinviteUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failed: [
 *     {
 *       reason: "user cannot be reinvited",
 *       userId: "54321"
 *     }
 *   ],
 *   successful:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchReinviteUserCommand extends $Command
  .classBuilder<
    BatchReinviteUserCommandInput,
    BatchReinviteUserCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "BatchReinviteUser", {})
  .n("WickrClient", "BatchReinviteUserCommand")
  .sc(BatchReinviteUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchReinviteUserRequest;
      output: BatchReinviteUserResponse;
    };
    sdk: {
      input: BatchReinviteUserCommandInput;
      output: BatchReinviteUserCommandOutput;
    };
  };
}
