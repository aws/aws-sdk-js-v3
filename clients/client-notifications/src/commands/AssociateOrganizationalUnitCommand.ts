// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateOrganizationalUnitRequest, AssociateOrganizationalUnitResponse } from "../models/models_0";
import { AssociateOrganizationalUnit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateOrganizationalUnitCommand}.
 */
export interface AssociateOrganizationalUnitCommandInput extends AssociateOrganizationalUnitRequest {}
/**
 * @public
 *
 * The output of {@link AssociateOrganizationalUnitCommand}.
 */
export interface AssociateOrganizationalUnitCommandOutput extends AssociateOrganizationalUnitResponse, __MetadataBearer {}

/**
 * Associates an organizational unit with a notification configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, AssociateOrganizationalUnitCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, AssociateOrganizationalUnitCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // AssociateOrganizationalUnitRequest
 *   organizationalUnitId: "STRING_VALUE", // required
 *   notificationConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateOrganizationalUnitCommandInput - {@link AssociateOrganizationalUnitCommandInput}
 * @returns {@link AssociateOrganizationalUnitCommandOutput}
 * @see {@link AssociateOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link AssociateOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
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
export class AssociateOrganizationalUnitCommand extends command<AssociateOrganizationalUnitCommandInput, AssociateOrganizationalUnitCommandOutput>(
  _ep0,
  _mw0,
  "AssociateOrganizationalUnit",
  AssociateOrganizationalUnit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateOrganizationalUnitRequest;
      output: {};
    };
    sdk: {
      input: AssociateOrganizationalUnitCommandInput;
      output: AssociateOrganizationalUnitCommandOutput;
    };
  };
}
