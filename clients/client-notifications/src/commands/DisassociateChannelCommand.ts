// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateChannelRequest, DisassociateChannelResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { de_DisassociateChannelCommand, se_DisassociateChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateChannelCommand}.
 */
export interface DisassociateChannelCommandInput extends DisassociateChannelRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateChannelCommand}.
 */
export interface DisassociateChannelCommandOutput extends DisassociateChannelResponse, __MetadataBearer {}

/**
 * <p>Disassociates a Channel from a specified <code>NotificationConfiguration</code>. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, DisassociateChannelCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, DisassociateChannelCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // DisassociateChannelRequest
 *   arn: "STRING_VALUE", // required
 *   notificationConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateChannelCommandInput - {@link DisassociateChannelCommandInput}
 * @returns {@link DisassociateChannelCommandOutput}
 * @see {@link DisassociateChannelCommandInput} for command's `input` shape.
 * @see {@link DisassociateChannelCommandOutput} for command's `response` shape.
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
export class DisassociateChannelCommand extends $Command
  .classBuilder<
    DisassociateChannelCommandInput,
    DisassociateChannelCommandOutput,
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
  .s("Notifications", "DisassociateChannel", {})
  .n("NotificationsClient", "DisassociateChannelCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateChannelCommand)
  .de(de_DisassociateChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateChannelRequest;
      output: {};
    };
    sdk: {
      input: DisassociateChannelCommandInput;
      output: DisassociateChannelCommandOutput;
    };
  };
}
