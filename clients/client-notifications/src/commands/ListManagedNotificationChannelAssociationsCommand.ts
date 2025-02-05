// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListManagedNotificationChannelAssociationsRequest,
  ListManagedNotificationChannelAssociationsResponse,
} from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import {
  de_ListManagedNotificationChannelAssociationsCommand,
  se_ListManagedNotificationChannelAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedNotificationChannelAssociationsCommand}.
 */
export interface ListManagedNotificationChannelAssociationsCommandInput
  extends ListManagedNotificationChannelAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedNotificationChannelAssociationsCommand}.
 */
export interface ListManagedNotificationChannelAssociationsCommandOutput
  extends ListManagedNotificationChannelAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of Account contacts and Channels associated with a <code>ManagedNotificationConfiguration</code>, in paginated format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, ListManagedNotificationChannelAssociationsCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, ListManagedNotificationChannelAssociationsCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NotificationsClient(config);
 * const input = { // ListManagedNotificationChannelAssociationsRequest
 *   managedNotificationConfigurationArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedNotificationChannelAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedNotificationChannelAssociationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   channelAssociations: [ // ManagedNotificationChannelAssociations // required
 * //     { // ManagedNotificationChannelAssociationSummary
 * //       channelIdentifier: "STRING_VALUE", // required
 * //       channelType: "STRING_VALUE", // required
 * //       overrideOption: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListManagedNotificationChannelAssociationsCommandInput - {@link ListManagedNotificationChannelAssociationsCommandInput}
 * @returns {@link ListManagedNotificationChannelAssociationsCommandOutput}
 * @see {@link ListManagedNotificationChannelAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListManagedNotificationChannelAssociationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListManagedNotificationChannelAssociationsCommand extends $Command
  .classBuilder<
    ListManagedNotificationChannelAssociationsCommandInput,
    ListManagedNotificationChannelAssociationsCommandOutput,
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
  .s("Notifications", "ListManagedNotificationChannelAssociations", {})
  .n("NotificationsClient", "ListManagedNotificationChannelAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListManagedNotificationChannelAssociationsCommand)
  .de(de_ListManagedNotificationChannelAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedNotificationChannelAssociationsRequest;
      output: ListManagedNotificationChannelAssociationsResponse;
    };
    sdk: {
      input: ListManagedNotificationChannelAssociationsCommandInput;
      output: ListManagedNotificationChannelAssociationsCommandOutput;
    };
  };
}
