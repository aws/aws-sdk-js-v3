// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListChannelsRequest, ListChannelsResponse } from "../models/models_0";
import type { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { ListChannels } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandInput extends ListChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandOutput extends ListChannelsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Channels for a <code>NotificationConfiguration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, ListChannelsCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, ListChannelsCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // ListChannelsRequest
 *   notificationConfigurationArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelsResponse
 * //   nextToken: "STRING_VALUE",
 * //   channels: [ // Channels // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListChannelsCommandInput - {@link ListChannelsCommandInput}
 * @returns {@link ListChannelsCommandOutput}
 * @see {@link ListChannelsCommandInput} for command's `input` shape.
 * @see {@link ListChannelsCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception is thrown when the notification event fails validation.</p>
 *
 * @throws {@link NotificationsServiceException}
 * <p>Base exception class for all service exceptions from Notifications service.</p>
 *
 *
 * @public
 */
export class ListChannelsCommand extends $Command
  .classBuilder<
    ListChannelsCommandInput,
    ListChannelsCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "ListChannels", {})
  .n("NotificationsClient", "ListChannelsCommand")
  .sc(ListChannels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelsRequest;
      output: ListChannelsResponse;
    };
    sdk: {
      input: ListChannelsCommandInput;
      output: ListChannelsCommandOutput;
    };
  };
}
