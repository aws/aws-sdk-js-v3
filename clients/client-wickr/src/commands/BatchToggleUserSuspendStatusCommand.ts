// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchToggleUserSuspendStatusRequest, BatchToggleUserSuspendStatusResponse } from "../models/models_0";
import { BatchToggleUserSuspendStatus$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchToggleUserSuspendStatusCommand}.
 */
export interface BatchToggleUserSuspendStatusCommandInput extends BatchToggleUserSuspendStatusRequest {}
/**
 * @public
 *
 * The output of {@link BatchToggleUserSuspendStatusCommand}.
 */
export interface BatchToggleUserSuspendStatusCommandOutput
  extends BatchToggleUserSuspendStatusResponse,
    __MetadataBearer {}

/**
 * <p>Suspends or unsuspends multiple users in a Wickr network. Suspended users cannot access the network until they are unsuspended. This operation is useful for temporarily restricting access without deleting user accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, BatchToggleUserSuspendStatusCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, BatchToggleUserSuspendStatusCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // BatchToggleUserSuspendStatusRequest
 *   networkId: "STRING_VALUE", // required
 *   suspend: true || false, // required
 *   userIds: [ // UserIds // required
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchToggleUserSuspendStatusCommand(input);
 * const response = await client.send(command);
 * // { // BatchToggleUserSuspendStatusResponse
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
 * @param BatchToggleUserSuspendStatusCommandInput - {@link BatchToggleUserSuspendStatusCommandInput}
 * @returns {@link BatchToggleUserSuspendStatusCommandOutput}
 * @see {@link BatchToggleUserSuspendStatusCommandInput} for command's `input` shape.
 * @see {@link BatchToggleUserSuspendStatusCommandOutput} for command's `response` shape.
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
 * @example Suspend multiple users
 * ```javascript
 * //
 * const input = {
 *   clientToken: "6ba7b815-9dad-11d1-80b4-00c04fd430c8",
 *   networkId: "12345678",
 *   suspend: true,
 *   userIds: [
 *     "123",
 *     "456"
 *   ]
 * };
 * const command = new BatchToggleUserSuspendStatusCommand(input);
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
 * @example Unsuspend users with partial failure
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   suspend: false,
 *   userIds: [
 *     "123",
 *     "456"
 *   ]
 * };
 * const command = new BatchToggleUserSuspendStatusCommand(input);
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
export class BatchToggleUserSuspendStatusCommand extends $Command
  .classBuilder<
    BatchToggleUserSuspendStatusCommandInput,
    BatchToggleUserSuspendStatusCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "BatchToggleUserSuspendStatus", {})
  .n("WickrClient", "BatchToggleUserSuspendStatusCommand")
  .sc(BatchToggleUserSuspendStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchToggleUserSuspendStatusRequest;
      output: BatchToggleUserSuspendStatusResponse;
    };
    sdk: {
      input: BatchToggleUserSuspendStatusCommandInput;
      output: BatchToggleUserSuspendStatusCommandOutput;
    };
  };
}
