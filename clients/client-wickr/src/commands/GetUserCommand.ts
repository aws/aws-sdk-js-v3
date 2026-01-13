// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetUserRequest, GetUserResponse } from "../models/models_0";
import { GetUser$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUserCommand}.
 */
export interface GetUserCommandInput extends GetUserRequest {}
/**
 * @public
 *
 * The output of {@link GetUserCommand}.
 */
export interface GetUserCommandOutput extends GetUserResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific user in a Wickr network, including their profile, status, and activity history.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, GetUserCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, GetUserCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // GetUserRequest
 *   networkId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 * };
 * const command = new GetUserCommand(input);
 * const response = await client.send(command);
 * // { // GetUserResponse
 * //   userId: "STRING_VALUE", // required
 * //   firstName: "STRING_VALUE",
 * //   lastName: "STRING_VALUE",
 * //   username: "STRING_VALUE",
 * //   isAdmin: true || false,
 * //   suspended: true || false,
 * //   status: Number("int"),
 * //   lastActivity: Number("int"),
 * //   lastLogin: Number("int"),
 * //   securityGroupIds: [ // SecurityGroupIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetUserCommandInput - {@link GetUserCommandInput}
 * @returns {@link GetUserCommandOutput}
 * @see {@link GetUserCommandInput} for command's `input` shape.
 * @see {@link GetUserCommandOutput} for command's `response` shape.
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
 * @example Get user information
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   userId: "12345"
 * };
 * const command = new GetUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   firstName: "John",
 *   isAdmin: false,
 *   lastActivity: 1705500000,
 *   lastLogin: 1705499000,
 *   lastName: "Doe",
 *   securityGroupIds: [
 *     "BCTY8Qhe"
 *   ],
 *   status: 2,
 *   suspended: false,
 *   userId: "12345",
 *   username: "john.doe@example.com"
 * }
 * *\/
 * ```
 *
 * @example Get user info with activity time range
 * ```javascript
 * //
 * const input = {
 *   endTime: 1705500000,
 *   networkId: "12345678",
 *   startTime: 1704067200,
 *   userId: "12345"
 * };
 * const command = new GetUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   firstName: "Jane",
 *   isAdmin: true,
 *   lastActivity: 1705400000,
 *   lastLogin: 1705350000,
 *   lastName: "Admin",
 *   securityGroupIds: [
 *     "BCTY8Qhe",
 *     "ADMIN001"
 *   ],
 *   status: 2,
 *   suspended: false,
 *   userId: "12345",
 *   username: "jane.admin@example.com"
 * }
 * *\/
 * ```
 *
 * @example User not found error
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   userId: "99999"
 * };
 * const command = new GetUserCommand(input);
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
 *   userId: "99999"
 * };
 * const command = new GetUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetUserCommand extends $Command
  .classBuilder<
    GetUserCommandInput,
    GetUserCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "GetUser", {})
  .n("WickrClient", "GetUserCommand")
  .sc(GetUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserRequest;
      output: GetUserResponse;
    };
    sdk: {
      input: GetUserCommandInput;
      output: GetUserCommandOutput;
    };
  };
}
