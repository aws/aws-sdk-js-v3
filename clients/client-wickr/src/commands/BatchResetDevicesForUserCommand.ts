// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchResetDevicesForUserRequest, BatchResetDevicesForUserResponse } from "../models/models_0";
import { BatchResetDevicesForUser$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchResetDevicesForUserCommand}.
 */
export interface BatchResetDevicesForUserCommandInput extends BatchResetDevicesForUserRequest {}
/**
 * @public
 *
 * The output of {@link BatchResetDevicesForUserCommand}.
 */
export interface BatchResetDevicesForUserCommandOutput extends BatchResetDevicesForUserResponse, __MetadataBearer {}

/**
 * <p>Resets multiple devices for a specific user in a Wickr network. This operation forces the selected devices to log out and requires users to re-authenticate, which is useful for security purposes or when devices need to be revoked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, BatchResetDevicesForUserCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, BatchResetDevicesForUserCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // BatchResetDevicesForUserRequest
 *   networkId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   appIds: [ // AppIds // required
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchResetDevicesForUserCommand(input);
 * const response = await client.send(command);
 * // { // BatchResetDevicesForUserResponse
 * //   message: "STRING_VALUE",
 * //   successful: [ // BatchDeviceSuccessResponseItems
 * //     { // BatchDeviceSuccessResponseItem
 * //       appId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   failed: [ // BatchDeviceErrorResponseItems
 * //     { // BatchDeviceErrorResponseItem
 * //       field: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       appId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchResetDevicesForUserCommandInput - {@link BatchResetDevicesForUserCommandInput}
 * @returns {@link BatchResetDevicesForUserCommandOutput}
 * @see {@link BatchResetDevicesForUserCommandInput} for command's `input` shape.
 * @see {@link BatchResetDevicesForUserCommandOutput} for command's `response` shape.
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
 * @example Successful device reset
 * ```javascript
 * //
 * const input = {
 *   appIds: [
 *     "d3135a42dcb6437780b16c3ca9581fe64e6822773cd6b965d25fc9929c89aca6",
 *     "e4246b53edc7548891c27d4da0692fe75f7933884de7c076e36gca030d90bdb7"
 *   ],
 *   networkId: "12345678",
 *   userId: "12345"
 * };
 * const command = new BatchResetDevicesForUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failed:   [],
 *   message: "success",
 *   successful: [
 *     {
 *       appId: "d3135a42dcb6437780b16c3ca9581fe64e6822773cd6b965d25fc9929c89aca6"
 *     },
 *     {
 *       appId: "e4246b53edc7548891c27d4da0692fe75f7933884de7c076e36gca030d90bdb7"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Partial failure device reset
 * ```javascript
 * //
 * const input = {
 *   appIds: [
 *     "d3135a42dcb6437780b16c3ca9581fe64e6822773cd6b965d25fc9929c89aca6",
 *     "invalid-app-id"
 *   ],
 *   networkId: "12345678",
 *   userId: "12345"
 * };
 * const command = new BatchResetDevicesForUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failed: [
 *     {
 *       appId: "invalid-app-id",
 *       field: "appId",
 *       reason: "Invalid app ID."
 *     }
 *   ],
 *   message: "partial success",
 *   successful: [
 *     {
 *       appId: "d3135a42dcb6437780b16c3ca9581fe64e6822773cd6b965d25fc9929c89aca6"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Invalid network ID error
 * ```javascript
 * //
 * const input = {
 *   appIds: [
 *     "d3135a42dcb6437780b16c3ca9581fe64e6822773cd6b965d25fc9929c89aca6"
 *   ],
 *   networkId: "00000000",
 *   userId: "12345"
 * };
 * const command = new BatchResetDevicesForUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class BatchResetDevicesForUserCommand extends $Command
  .classBuilder<
    BatchResetDevicesForUserCommandInput,
    BatchResetDevicesForUserCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "BatchResetDevicesForUser", {})
  .n("WickrClient", "BatchResetDevicesForUserCommand")
  .sc(BatchResetDevicesForUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchResetDevicesForUserRequest;
      output: BatchResetDevicesForUserResponse;
    };
    sdk: {
      input: BatchResetDevicesForUserCommandInput;
      output: BatchResetDevicesForUserCommandOutput;
    };
  };
}
