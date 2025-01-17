// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateManagedNotificationAccountContactRequest,
  DisassociateManagedNotificationAccountContactResponse,
} from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import {
  de_DisassociateManagedNotificationAccountContactCommand,
  se_DisassociateManagedNotificationAccountContactCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateManagedNotificationAccountContactCommand}.
 */
export interface DisassociateManagedNotificationAccountContactCommandInput
  extends DisassociateManagedNotificationAccountContactRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateManagedNotificationAccountContactCommand}.
 */
export interface DisassociateManagedNotificationAccountContactCommandOutput
  extends DisassociateManagedNotificationAccountContactResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates an Account Contact with a particular <code>ManagedNotificationConfiguration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, DisassociateManagedNotificationAccountContactCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, DisassociateManagedNotificationAccountContactCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * const client = new NotificationsClient(config);
 * const input = { // DisassociateManagedNotificationAccountContactRequest
 *   contactIdentifier: "STRING_VALUE", // required
 *   managedNotificationConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateManagedNotificationAccountContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateManagedNotificationAccountContactCommandInput - {@link DisassociateManagedNotificationAccountContactCommandInput}
 * @returns {@link DisassociateManagedNotificationAccountContactCommandOutput}
 * @see {@link DisassociateManagedNotificationAccountContactCommandInput} for command's `input` shape.
 * @see {@link DisassociateManagedNotificationAccountContactCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
export class DisassociateManagedNotificationAccountContactCommand extends $Command
  .classBuilder<
    DisassociateManagedNotificationAccountContactCommandInput,
    DisassociateManagedNotificationAccountContactCommandOutput,
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
  .s("Notifications", "DisassociateManagedNotificationAccountContact", {})
  .n("NotificationsClient", "DisassociateManagedNotificationAccountContactCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateManagedNotificationAccountContactCommand)
  .de(de_DisassociateManagedNotificationAccountContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateManagedNotificationAccountContactRequest;
      output: {};
    };
    sdk: {
      input: DisassociateManagedNotificationAccountContactCommandInput;
      output: DisassociateManagedNotificationAccountContactCommandOutput;
    };
  };
}
