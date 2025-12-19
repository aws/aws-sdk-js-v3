// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateBotRequest, UpdateBotResponse } from "../models/models_0";
import { UpdateBot$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBotCommand}.
 */
export interface UpdateBotCommandInput extends UpdateBotRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBotCommand}.
 */
export interface UpdateBotCommandOutput extends UpdateBotResponse, __MetadataBearer {}

/**
 * <p>Updates the properties of an existing bot in a Wickr network. This operation allows you to modify the bot's display name, security group, password, or suspension status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, UpdateBotCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, UpdateBotCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // UpdateBotRequest
 *   networkId: "STRING_VALUE", // required
 *   botId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   groupId: "STRING_VALUE",
 *   challenge: "STRING_VALUE",
 *   suspend: true || false,
 * };
 * const command = new UpdateBotCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBotResponse
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBotCommandInput - {@link UpdateBotCommandInput}
 * @returns {@link UpdateBotCommandOutput}
 * @see {@link UpdateBotCommandInput} for command's `input` shape.
 * @see {@link UpdateBotCommandOutput} for command's `response` shape.
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
 * @example Update bot successfully
 * ```javascript
 * //
 * const input = {
 *   botId: "98765",
 *   displayName: "Updated Support Bot",
 *   groupId: "support_group",
 *   networkId: "12345678"
 * };
 * const command = new UpdateBotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   message: "success"
 * }
 * *\/
 * ```
 *
 * @example Update bot - bot not found
 * ```javascript
 * //
 * const input = {
 *   botId: "99999",
 *   displayName: "Updated Bot",
 *   networkId: "12345678"
 * };
 * const command = new UpdateBotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateBotCommand extends $Command
  .classBuilder<
    UpdateBotCommandInput,
    UpdateBotCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "UpdateBot", {})
  .n("WickrClient", "UpdateBotCommand")
  .sc(UpdateBot$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBotRequest;
      output: UpdateBotResponse;
    };
    sdk: {
      input: UpdateBotCommandInput;
      output: UpdateBotCommandOutput;
    };
  };
}
