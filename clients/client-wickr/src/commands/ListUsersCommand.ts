// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListUsersRequest, ListUsersResponse } from "../models/models_0";
import { ListUsers$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUsersCommand}.
 */
export interface ListUsersCommandInput extends ListUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListUsersCommand}.
 */
export interface ListUsersCommandOutput extends ListUsersResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of users in a specified Wickr network. You can filter and sort the results based on various criteria such as name, status, or security group membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, ListUsersCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, ListUsersCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // ListUsersRequest
 *   networkId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   sortFields: "STRING_VALUE",
 *   sortDirection: "ASC" || "DESC",
 *   firstName: "STRING_VALUE",
 *   lastName: "STRING_VALUE",
 *   username: "STRING_VALUE",
 *   status: 1 || 2,
 *   groupId: "STRING_VALUE",
 * };
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListUsersResponse
 * //   nextToken: "STRING_VALUE",
 * //   users: [ // Users
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
 * // };
 *
 * ```
 *
 * @param ListUsersCommandInput - {@link ListUsersCommandInput}
 * @returns {@link ListUsersCommandOutput}
 * @see {@link ListUsersCommandInput} for command's `input` shape.
 * @see {@link ListUsersCommandOutput} for command's `response` shape.
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
 * @example Get paginated list of users
 * ```javascript
 * //
 * const input = {
 *   maxResults: 20,
 *   networkId: "12345678",
 *   sortDirection: "ASC",
 *   sortFields: "username"
 * };
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "v1:pagination:6ba7b810-9dad-11d1-80b4-00c04fd430c8",
 *   users: [
 *     {
 *       firstName: "Alice",
 *       isAdmin: false,
 *       lastName: "Anderson",
 *       status: 2,
 *       suspended: false,
 *       type: "user",
 *       username: "alice.anderson@example.com"
 *     },
 *     {
 *       firstName: "Bob",
 *       isAdmin: false,
 *       lastName: "Brown",
 *       status: 2,
 *       suspended: false,
 *       type: "user",
 *       username: "bob.brown@example.com"
 *     },
 *     {
 *       firstName: "Charlie",
 *       isAdmin: true,
 *       lastName: "Chen",
 *       status: 2,
 *       suspended: false,
 *       type: "user",
 *       username: "charlie.chen@example.com"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Filter by status and group
 * ```javascript
 * //
 * const input = {
 *   groupId: "BCTY8Qhe",
 *   maxResults: 10,
 *   networkId: "12345678",
 *   status: 1
 * };
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   users: [
 *     {
 *       firstName: "David",
 *       inviteCode: "INVITE789",
 *       isAdmin: false,
 *       isInviteExpired: false,
 *       lastName: "Davis",
 *       status: 1,
 *       suspended: false,
 *       type: "user",
 *       username: "david.davis@example.com"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Empty user list for network with no users
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678"
 * };
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   users:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListUsersCommand extends $Command
  .classBuilder<
    ListUsersCommandInput,
    ListUsersCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "ListUsers", {})
  .n("WickrClient", "ListUsersCommand")
  .sc(ListUsers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsersRequest;
      output: ListUsersResponse;
    };
    sdk: {
      input: ListUsersCommandInput;
      output: ListUsersCommandOutput;
    };
  };
}
