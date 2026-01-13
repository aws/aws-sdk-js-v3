// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDevicesForUserRequest, ListDevicesForUserResponse } from "../models/models_0";
import { ListDevicesForUser$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDevicesForUserCommand}.
 */
export interface ListDevicesForUserCommandInput extends ListDevicesForUserRequest {}
/**
 * @public
 *
 * The output of {@link ListDevicesForUserCommand}.
 */
export interface ListDevicesForUserCommandOutput extends ListDevicesForUserResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of devices associated with a specific user in a Wickr network. This operation returns information about all devices where the user has logged into Wickr.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, ListDevicesForUserCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, ListDevicesForUserCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // ListDevicesForUserRequest
 *   networkId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   sortFields: "STRING_VALUE",
 *   sortDirection: "ASC" || "DESC",
 * };
 * const command = new ListDevicesForUserCommand(input);
 * const response = await client.send(command);
 * // { // ListDevicesForUserResponse
 * //   nextToken: "STRING_VALUE",
 * //   devices: [ // Devices // required
 * //     { // BasicDeviceObject
 * //       appId: "STRING_VALUE",
 * //       created: "STRING_VALUE",
 * //       lastLogin: "STRING_VALUE",
 * //       statusText: "STRING_VALUE",
 * //       suspend: true || false,
 * //       type: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDevicesForUserCommandInput - {@link ListDevicesForUserCommandInput}
 * @returns {@link ListDevicesForUserCommandOutput}
 * @see {@link ListDevicesForUserCommandInput} for command's `input` shape.
 * @see {@link ListDevicesForUserCommandOutput} for command's `response` shape.
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
 * @example Successful device list retrieval
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10,
 *   networkId: "12345678",
 *   sortDirection: "DESC",
 *   sortFields: "appId",
 *   userId: "12345"
 * };
 * const command = new ListDevicesForUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   devices: [
 *     {
 *       appId: "d3135a42dcb6437780b16c3ca9581fe64e6822773cd6b965d25fc9929c89aca6",
 *       created: "January 15th 2024, 2:30:45 pm",
 *       lastLogin: "January 20th 2024, 9:15:30 am",
 *       statusText: "Active",
 *       suspend: false,
 *       type: "mobile"
 *     },
 *     {
 *       appId: "e4246b53edc7548891c27d4da0692fe75f7933884de7c076e36gca030d90bdb7",
 *       created: "December 10th 2023, 11:45:20 am",
 *       lastLogin: "January 18th 2024, 4:20:15 pm",
 *       statusText: "Suspended",
 *       suspend: true,
 *       type: "desktop"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Retrieving subsequent page of devices
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10,
 *   networkId: "12345678",
 *   nextToken: "v1:pagination:6ba7b810-9dad-11d1-80b4-00c04fd430c8",
 *   userId: "12345"
 * };
 * const command = new ListDevicesForUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   devices: [
 *     {
 *       appId: "f5357c64fde8659002c38e5db1804gf86g8044995ef8d187f47hdb141e01dce8",
 *       created: "January 1st 2024, 12:00:00 pm",
 *       lastLogin: "January 21st 2024, 8:22:00 am",
 *       statusText: "Active",
 *       suspend: false,
 *       type: "web"
 *     },
 *     {
 *       appId: "g6468d75gef9760113d49f6ec2915hg97h9155aa6fg9e298g58iec252f12edf9",
 *       created: "December 24th 2023, 4:00:00 pm",
 *       lastLogin: "January 20th 2024, 9:15:30 am",
 *       statusText: "Active",
 *       suspend: false,
 *       type: "mobile"
 *     }
 *   ],
 *   nextToken: "v1:pagination:7cb8c921-aebe-22e2-91c5-11d05fe541d9"
 * }
 * *\/
 * ```
 *
 * @example Invalid userId error
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10,
 *   networkId: "12345678",
 *   userId: "99999"
 * };
 * const command = new ListDevicesForUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ListDevicesForUserCommand extends $Command
  .classBuilder<
    ListDevicesForUserCommandInput,
    ListDevicesForUserCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "ListDevicesForUser", {})
  .n("WickrClient", "ListDevicesForUserCommand")
  .sc(ListDevicesForUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDevicesForUserRequest;
      output: ListDevicesForUserResponse;
    };
    sdk: {
      input: ListDevicesForUserCommandInput;
      output: ListDevicesForUserCommandOutput;
    };
  };
}
