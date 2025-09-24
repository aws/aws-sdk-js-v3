// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateOrganizationalUnitRequest, DisassociateOrganizationalUnitResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { DisassociateOrganizationalUnit } from "../schemas/schemas_1_Notification";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateOrganizationalUnitCommand}.
 */
export interface DisassociateOrganizationalUnitCommandInput extends DisassociateOrganizationalUnitRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateOrganizationalUnitCommand}.
 */
export interface DisassociateOrganizationalUnitCommandOutput
  extends DisassociateOrganizationalUnitResponse,
    __MetadataBearer {}

/**
 * <p>Removes the association between an organizational unit and a notification configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, DisassociateOrganizationalUnitCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, DisassociateOrganizationalUnitCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // DisassociateOrganizationalUnitRequest
 *   organizationalUnitId: "STRING_VALUE", // required
 *   notificationConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateOrganizationalUnitCommandInput - {@link DisassociateOrganizationalUnitCommandInput}
 * @returns {@link DisassociateOrganizationalUnitCommandOutput}
 * @see {@link DisassociateOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link DisassociateOrganizationalUnitCommandOutput} for command's `response` shape.
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
export class DisassociateOrganizationalUnitCommand extends $Command
  .classBuilder<
    DisassociateOrganizationalUnitCommandInput,
    DisassociateOrganizationalUnitCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "DisassociateOrganizationalUnit", {})
  .n("NotificationsClient", "DisassociateOrganizationalUnitCommand")
  .sc(DisassociateOrganizationalUnit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateOrganizationalUnitRequest;
      output: {};
    };
    sdk: {
      input: DisassociateOrganizationalUnitCommandInput;
      output: DisassociateOrganizationalUnitCommandOutput;
    };
  };
}
