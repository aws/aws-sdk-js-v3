// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchDeleteUserRequest, BatchDeleteUserResponse } from "../models/models_0";
import { BatchDeleteUser$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteUserCommand}.
 */
export interface BatchDeleteUserCommandInput extends BatchDeleteUserRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteUserCommand}.
 */
export interface BatchDeleteUserCommandOutput extends BatchDeleteUserResponse, __MetadataBearer {}

/**
 * <p>Deletes multiple users from a specified Wickr network. This operation permanently removes user accounts and their associated data from the network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, BatchDeleteUserCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, BatchDeleteUserCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // BatchDeleteUserRequest
 *   networkId: "STRING_VALUE", // required
 *   userIds: [ // UserIds // required
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchDeleteUserCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteUserResponse
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
 * @param BatchDeleteUserCommandInput - {@link BatchDeleteUserCommandInput}
 * @returns {@link BatchDeleteUserCommandOutput}
 * @see {@link BatchDeleteUserCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteUserCommandOutput} for command's `response` shape.
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
 * @example Delete multiple users
 * ```javascript
 * //
 * const input = {
 *   clientToken: "6ba7b814-9dad-11d1-80b4-00c04fd430c8",
 *   networkId: "12345678",
 *   userIds: [
 *     "123",
 *     "456"
 *   ]
 * };
 * const command = new BatchDeleteUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failed:   [],
 *   message: "success",
 *   successful: [
 *     {
 *       userId: "123"
 *     },
 *     {
 *       userId: "456"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Partial failure - user not found
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   userIds: [
 *     "123",
 *     "456"
 *   ]
 * };
 * const command = new BatchDeleteUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failed: [
 *     {
 *       field: "username",
 *       reason: "User not found",
 *       userId: "456"
 *     }
 *   ],
 *   message: "partial success",
 *   successful: [
 *     {
 *       userId: "123"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchDeleteUserCommand extends $Command
  .classBuilder<
    BatchDeleteUserCommandInput,
    BatchDeleteUserCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "BatchDeleteUser", {})
  .n("WickrClient", "BatchDeleteUserCommand")
  .sc(BatchDeleteUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteUserRequest;
      output: BatchDeleteUserResponse;
    };
    sdk: {
      input: BatchDeleteUserCommandInput;
      output: BatchDeleteUserCommandOutput;
    };
  };
}
