// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateManagedNotificationAccountContactRequest,
  AssociateManagedNotificationAccountContactResponse,
} from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import {
  de_AssociateManagedNotificationAccountContactCommand,
  se_AssociateManagedNotificationAccountContactCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateManagedNotificationAccountContactCommand}.
 */
export interface AssociateManagedNotificationAccountContactCommandInput
  extends AssociateManagedNotificationAccountContactRequest {}
/**
 * @public
 *
 * The output of {@link AssociateManagedNotificationAccountContactCommand}.
 */
export interface AssociateManagedNotificationAccountContactCommandOutput
  extends AssociateManagedNotificationAccountContactResponse,
    __MetadataBearer {}

/**
 * <p>Associates an Account Contact with a particular <code>ManagedNotificationConfiguration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, AssociateManagedNotificationAccountContactCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, AssociateManagedNotificationAccountContactCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // AssociateManagedNotificationAccountContactRequest
 *   contactIdentifier: "STRING_VALUE", // required
 *   managedNotificationConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateManagedNotificationAccountContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateManagedNotificationAccountContactCommandInput - {@link AssociateManagedNotificationAccountContactCommandInput}
 * @returns {@link AssociateManagedNotificationAccountContactCommandOutput}
 * @see {@link AssociateManagedNotificationAccountContactCommandInput} for command's `input` shape.
 * @see {@link AssociateManagedNotificationAccountContactCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
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
export class AssociateManagedNotificationAccountContactCommand extends $Command
  .classBuilder<
    AssociateManagedNotificationAccountContactCommandInput,
    AssociateManagedNotificationAccountContactCommandOutput,
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
  .s("Notifications", "AssociateManagedNotificationAccountContact", {})
  .n("NotificationsClient", "AssociateManagedNotificationAccountContactCommand")
  .f(void 0, void 0)
  .ser(se_AssociateManagedNotificationAccountContactCommand)
  .de(de_AssociateManagedNotificationAccountContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateManagedNotificationAccountContactRequest;
      output: {};
    };
    sdk: {
      input: AssociateManagedNotificationAccountContactCommandInput;
      output: AssociateManagedNotificationAccountContactCommandOutput;
    };
  };
}
