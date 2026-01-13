// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListBotsRequest, ListBotsResponse } from "../models/models_0";
import { ListBots$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBotsCommand}.
 */
export interface ListBotsCommandInput extends ListBotsRequest {}
/**
 * @public
 *
 * The output of {@link ListBotsCommand}.
 */
export interface ListBotsCommandOutput extends ListBotsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of bots in a specified Wickr network. You can filter and sort the results based on various criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, ListBotsCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, ListBotsCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // ListBotsRequest
 *   networkId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   sortFields: "STRING_VALUE",
 *   sortDirection: "ASC" || "DESC",
 *   displayName: "STRING_VALUE",
 *   username: "STRING_VALUE",
 *   status: 1 || 2,
 *   groupId: "STRING_VALUE",
 * };
 * const command = new ListBotsCommand(input);
 * const response = await client.send(command);
 * // { // ListBotsResponse
 * //   bots: [ // Bots // required
 * //     { // Bot
 * //       botId: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       username: "STRING_VALUE",
 * //       uname: "STRING_VALUE",
 * //       pubkey: "STRING_VALUE",
 * //       status: 1 || 2,
 * //       groupId: "STRING_VALUE",
 * //       hasChallenge: true || false,
 * //       suspended: true || false,
 * //       lastLogin: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBotsCommandInput - {@link ListBotsCommandInput}
 * @returns {@link ListBotsCommandOutput}
 * @see {@link ListBotsCommandInput} for command's `input` shape.
 * @see {@link ListBotsCommandOutput} for command's `response` shape.
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
 * @example List bots with pagination
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10,
 *   networkId: "12345678",
 *   sortDirection: "ASC",
 *   sortFields: "username"
 * };
 * const command = new ListBotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   bots: [
 *     {
 *       botId: "98765",
 *       displayName: "Analytics Bot",
 *       groupId: "analytics_group",
 *       hasChallenge: true,
 *       lastLogin: "1704067200",
 *       pubkey: "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUF4",
 *       status: 2,
 *       suspended: false,
 *       uname: "abc123def456",
 *       username: "analytics_bot"
 *     },
 *     {
 *       botId: "98766",
 *       displayName: "Support Bot",
 *       groupId: "support_group",
 *       hasChallenge: true,
 *       lastLogin: "1704153600",
 *       pubkey: "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUF5",
 *       status: 2,
 *       suspended: false,
 *       uname: "def456ghi789",
 *       username: "support_bot"
 *     }
 *   ],
 *   nextToken: "eyJzdGFydEluZGV4IjoxMH0="
 * }
 * *\/
 * ```
 *
 * @example List bots with filters
 * ```javascript
 * //
 * const input = {
 *   displayName: "Support",
 *   maxResults: 10,
 *   networkId: "12345678",
 *   status: 2
 * };
 * const command = new ListBotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   bots: [
 *     {
 *       botId: "98766",
 *       displayName: "Support Bot",
 *       groupId: "support_group",
 *       hasChallenge: true,
 *       lastLogin: "1704153600",
 *       pubkey: "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUF5",
 *       status: 2,
 *       suspended: false,
 *       uname: "def456ghi789",
 *       username: "support_bot"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListBotsCommand extends $Command
  .classBuilder<
    ListBotsCommandInput,
    ListBotsCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "ListBots", {})
  .n("WickrClient", "ListBotsCommand")
  .sc(ListBots$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBotsRequest;
      output: ListBotsResponse;
    };
    sdk: {
      input: ListBotsCommandInput;
      output: ListBotsCommandOutput;
    };
  };
}
