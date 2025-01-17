// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListManagedNotificationConfigurationsRequest,
  ListManagedNotificationConfigurationsResponse,
} from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import {
  de_ListManagedNotificationConfigurationsCommand,
  se_ListManagedNotificationConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedNotificationConfigurationsCommand}.
 */
export interface ListManagedNotificationConfigurationsCommandInput
  extends ListManagedNotificationConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedNotificationConfigurationsCommand}.
 */
export interface ListManagedNotificationConfigurationsCommandOutput
  extends ListManagedNotificationConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of Managed Notification Configurations according to specified filters, ordered by creation time in reverse chronological order (newest first).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, ListManagedNotificationConfigurationsCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, ListManagedNotificationConfigurationsCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * const client = new NotificationsClient(config);
 * const input = { // ListManagedNotificationConfigurationsRequest
 *   channelIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedNotificationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedNotificationConfigurationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   managedNotificationConfigurations: [ // ManagedNotificationConfigurations // required
 * //     { // ManagedNotificationConfigurationStructure
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListManagedNotificationConfigurationsCommandInput - {@link ListManagedNotificationConfigurationsCommandInput}
 * @returns {@link ListManagedNotificationConfigurationsCommandOutput}
 * @see {@link ListManagedNotificationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListManagedNotificationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
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
 * @public
 */
export class ListManagedNotificationConfigurationsCommand extends $Command
  .classBuilder<
    ListManagedNotificationConfigurationsCommandInput,
    ListManagedNotificationConfigurationsCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Notifications", "ListManagedNotificationConfigurations", {})
  .n("NotificationsClient", "ListManagedNotificationConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListManagedNotificationConfigurationsCommand)
  .de(de_ListManagedNotificationConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedNotificationConfigurationsRequest;
      output: ListManagedNotificationConfigurationsResponse;
    };
    sdk: {
      input: ListManagedNotificationConfigurationsCommandInput;
      output: ListManagedNotificationConfigurationsCommandOutput;
    };
  };
}
