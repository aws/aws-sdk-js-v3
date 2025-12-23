// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EnableNotificationsAccessForOrganizationRequest,
  EnableNotificationsAccessForOrganizationResponse,
} from "../models/models_0";
import type { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { EnableNotificationsAccessForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableNotificationsAccessForOrganizationCommand}.
 */
export interface EnableNotificationsAccessForOrganizationCommandInput extends EnableNotificationsAccessForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link EnableNotificationsAccessForOrganizationCommand}.
 */
export interface EnableNotificationsAccessForOrganizationCommandOutput extends EnableNotificationsAccessForOrganizationResponse, __MetadataBearer {}

/**
 * <p>Enables service trust between User Notifications and Amazon Web Services Organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, EnableNotificationsAccessForOrganizationCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, EnableNotificationsAccessForOrganizationCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = {};
 * const command = new EnableNotificationsAccessForOrganizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableNotificationsAccessForOrganizationCommandInput - {@link EnableNotificationsAccessForOrganizationCommandInput}
 * @returns {@link EnableNotificationsAccessForOrganizationCommandOutput}
 * @see {@link EnableNotificationsAccessForOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableNotificationsAccessForOrganizationCommandOutput} for command's `response` shape.
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
export class EnableNotificationsAccessForOrganizationCommand extends $Command
  .classBuilder<
    EnableNotificationsAccessForOrganizationCommandInput,
    EnableNotificationsAccessForOrganizationCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "EnableNotificationsAccessForOrganization", {})
  .n("NotificationsClient", "EnableNotificationsAccessForOrganizationCommand")
  .sc(EnableNotificationsAccessForOrganization$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EnableNotificationsAccessForOrganizationCommandInput;
      output: EnableNotificationsAccessForOrganizationCommandOutput;
    };
  };
}
