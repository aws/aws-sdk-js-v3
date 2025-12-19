// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateBotRequest, CreateBotResponse } from "../models/models_0";
import { CreateBot$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBotCommand}.
 */
export interface CreateBotCommandInput extends CreateBotRequest {}
/**
 * @public
 *
 * The output of {@link CreateBotCommand}.
 */
export interface CreateBotCommandOutput extends CreateBotResponse, __MetadataBearer {}

/**
 * <p>Creates a new bot in a specified Wickr network. Bots are automated accounts that can send and receive messages, enabling integration with external systems and automation of tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, CreateBotCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, CreateBotCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // CreateBotRequest
 *   networkId: "STRING_VALUE", // required
 *   username: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   groupId: "STRING_VALUE", // required
 *   challenge: "STRING_VALUE", // required
 * };
 * const command = new CreateBotCommand(input);
 * const response = await client.send(command);
 * // { // CreateBotResponse
 * //   message: "STRING_VALUE",
 * //   botId: "STRING_VALUE", // required
 * //   networkId: "STRING_VALUE",
 * //   username: "STRING_VALUE",
 * //   displayName: "STRING_VALUE",
 * //   groupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBotCommandInput - {@link CreateBotCommandInput}
 * @returns {@link CreateBotCommandOutput}
 * @see {@link CreateBotCommandInput} for command's `input` shape.
 * @see {@link CreateBotCommandOutput} for command's `response` shape.
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
 * @example Create bot successfully
 * ```javascript
 * //
 * const input = {
 *   challenge: "SecureP@ssw0rd123",
 *   displayName: "Analytics Bot",
 *   groupId: "analytics_group",
 *   networkId: "12345678",
 *   username: "analytics_bot"
 * };
 * const command = new CreateBotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   botId: "98766",
 *   displayName: "Analytics Bot",
 *   groupId: "analytics_group",
 *   networkId: "12345678",
 *   username: "analytics_bot"
 * }
 * *\/
 * ```
 *
 * @example Create bot - username unavailable
 * ```javascript
 * //
 * const input = {
 *   challenge: "SecureP@ssw0rd123",
 *   displayName: "Support Bot",
 *   groupId: "default_group",
 *   networkId: "12345678",
 *   username: "support_bot"
 * };
 * const command = new CreateBotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Create bot - invalid username format
 * ```javascript
 * //
 * const input = {
 *   challenge: "SecureP@ssw0rd123",
 *   displayName: "Test Bot",
 *   groupId: "default_group",
 *   networkId: "12345678",
 *   username: "bot@invalid"
 * };
 * const command = new CreateBotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateBotCommand extends $Command
  .classBuilder<
    CreateBotCommandInput,
    CreateBotCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "CreateBot", {})
  .n("WickrClient", "CreateBotCommand")
  .sc(CreateBot$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBotRequest;
      output: CreateBotResponse;
    };
    sdk: {
      input: CreateBotCommandInput;
      output: CreateBotCommandOutput;
    };
  };
}
