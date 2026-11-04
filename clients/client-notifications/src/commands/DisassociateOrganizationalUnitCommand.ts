// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateOrganizationalUnitRequest, DisassociateOrganizationalUnitResponse } from "../models/models_0";
import { DisassociateOrganizationalUnit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DisassociateOrganizationalUnitCommandOutput extends DisassociateOrganizationalUnitResponse, __MetadataBearer {}

/**
 * Removes the association between an organizational unit and a notification configuration.
 *
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This exception is thrown when the notification event fails validation.
 *
 * @throws {@link NotificationsServiceException}
 *
 * Base exception class for all service exceptions from Notifications service.
 *
 * @public
 */
export class DisassociateOrganizationalUnitCommand extends command<DisassociateOrganizationalUnitCommandInput, DisassociateOrganizationalUnitCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateOrganizationalUnit",
  DisassociateOrganizationalUnit$
) {
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
