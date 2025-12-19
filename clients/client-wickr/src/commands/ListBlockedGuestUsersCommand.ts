// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListBlockedGuestUsersRequest, ListBlockedGuestUsersResponse } from "../models/models_0";
import { ListBlockedGuestUsers$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBlockedGuestUsersCommand}.
 */
export interface ListBlockedGuestUsersCommandInput extends ListBlockedGuestUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListBlockedGuestUsersCommand}.
 */
export interface ListBlockedGuestUsersCommandOutput extends ListBlockedGuestUsersResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of guest users who have been blocked from a Wickr network. You can filter and sort the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, ListBlockedGuestUsersCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, ListBlockedGuestUsersCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // ListBlockedGuestUsersRequest
 *   networkId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   sortDirection: "ASC" || "DESC",
 *   sortFields: "STRING_VALUE",
 *   username: "STRING_VALUE",
 *   admin: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBlockedGuestUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListBlockedGuestUsersResponse
 * //   nextToken: "STRING_VALUE",
 * //   blocklist: [ // BlockedGuestUserList // required
 * //     { // BlockedGuestUser
 * //       username: "STRING_VALUE", // required
 * //       admin: "STRING_VALUE", // required
 * //       modified: "STRING_VALUE", // required
 * //       usernameHash: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBlockedGuestUsersCommandInput - {@link ListBlockedGuestUsersCommandInput}
 * @returns {@link ListBlockedGuestUsersCommandOutput}
 * @see {@link ListBlockedGuestUsersCommandInput} for command's `input` shape.
 * @see {@link ListBlockedGuestUsersCommandOutput} for command's `response` shape.
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
 * @example Get paginated list of blocked guest users
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10,
 *   networkId: "12345678",
 *   sortDirection: "DESC",
 *   sortFields: "modified"
 * };
 * const command = new ListBlockedGuestUsersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   blocklist: [
 *     {
 *       admin: "admin@company.com",
 *       modified: "2024-01-15 10:30:00",
 *       username: "blocked.user1@example.com",
 *       usernameHash: "032c36d5623781204592a69269ed9480d604484269c8a4c2d39528885a56470d"
 *     },
 *     {
 *       admin: "admin@company.com",
 *       modified: "2024-01-10 14:20:00",
 *       username: "blocked.user2@example.com",
 *       usernameHash: "032c36d5623781204592a69269ed9480d604484269c8a4c2d39528885a56470d"
 *     },
 *     {
 *       admin: "security@company.com",
 *       modified: "2024-01-05 09:15:00",
 *       username: "blocked.user3@example.com",
 *       usernameHash: "032c36d5623781204592a69269ed9480d604484269c8a4c2d39528885a56470d"
 *     }
 *   ],
 *   nextToken: "v1:pagination:f47ac10b-58cc-4372-a567-0e02b2c3d479"
 * }
 * *\/
 * ```
 *
 * @example Filter by username
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   username: "john.doe@example.com"
 * };
 * const command = new ListBlockedGuestUsersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   blocklist: [
 *     {
 *       admin: "admin@company.com",
 *       modified: "2023-12-20 16:45:00",
 *       username: "john.doe@example.com",
 *       usernameHash: "032c36d5623781204592a69269ed9480d604484269c8a4c2d39528885a56470d"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Empty blocklist
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678"
 * };
 * const command = new ListBlockedGuestUsersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   blocklist:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListBlockedGuestUsersCommand extends $Command
  .classBuilder<
    ListBlockedGuestUsersCommandInput,
    ListBlockedGuestUsersCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "ListBlockedGuestUsers", {})
  .n("WickrClient", "ListBlockedGuestUsersCommand")
  .sc(ListBlockedGuestUsers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBlockedGuestUsersRequest;
      output: ListBlockedGuestUsersResponse;
    };
    sdk: {
      input: ListBlockedGuestUsersCommandInput;
      output: ListBlockedGuestUsersCommandOutput;
    };
  };
}
