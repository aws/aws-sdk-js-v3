// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetNotificationsAccessForOrganizationRequest,
  GetNotificationsAccessForOrganizationResponse,
} from "../models/models_0";
import type { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { GetNotificationsAccessForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNotificationsAccessForOrganizationCommand}.
 */
export interface GetNotificationsAccessForOrganizationCommandInput extends GetNotificationsAccessForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link GetNotificationsAccessForOrganizationCommand}.
 */
export interface GetNotificationsAccessForOrganizationCommandOutput extends GetNotificationsAccessForOrganizationResponse, __MetadataBearer {}

/**
 * <p>Returns the AccessStatus of Service Trust Enablement for User Notifications and Amazon Web Services Organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, GetNotificationsAccessForOrganizationCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, GetNotificationsAccessForOrganizationCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = {};
 * const command = new GetNotificationsAccessForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // GetNotificationsAccessForOrganizationResponse
 * //   notificationsAccessForOrganization: { // NotificationsAccessForOrganization
 * //     accessStatus: "ENABLED" || "DISABLED" || "PENDING" || "FAILED", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNotificationsAccessForOrganizationCommandInput - {@link GetNotificationsAccessForOrganizationCommandInput}
 * @returns {@link GetNotificationsAccessForOrganizationCommandOutput}
 * @see {@link GetNotificationsAccessForOrganizationCommandInput} for command's `input` shape.
 * @see {@link GetNotificationsAccessForOrganizationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetNotificationsAccessForOrganizationCommand extends $Command
  .classBuilder<
    GetNotificationsAccessForOrganizationCommandInput,
    GetNotificationsAccessForOrganizationCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "GetNotificationsAccessForOrganization", {})
  .n("NotificationsClient", "GetNotificationsAccessForOrganizationCommand")
  .sc(GetNotificationsAccessForOrganization$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetNotificationsAccessForOrganizationResponse;
    };
    sdk: {
      input: GetNotificationsAccessForOrganizationCommandInput;
      output: GetNotificationsAccessForOrganizationCommandOutput;
    };
  };
}
