// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreatePushNotificationRegistrationRequest,
  CreatePushNotificationRegistrationResponse,
} from "../models/models_0";
import { CreatePushNotificationRegistration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePushNotificationRegistrationCommand}.
 */
export interface CreatePushNotificationRegistrationCommandInput extends CreatePushNotificationRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link CreatePushNotificationRegistrationCommand}.
 */
export interface CreatePushNotificationRegistrationCommandOutput
  extends CreatePushNotificationRegistrationResponse,
    __MetadataBearer {}

/**
 * <p>Creates registration for a device token and a chat contact to receive real-time push notifications. For more
 *    information about push notifications, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-push-notifications-for-mobile-chat.html">Set up push notifications in Amazon Connect for mobile chat</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreatePushNotificationRegistrationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreatePushNotificationRegistrationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreatePushNotificationRegistrationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   PinpointAppArn: "STRING_VALUE", // required
 *   DeviceToken: "STRING_VALUE", // required
 *   DeviceType: "GCM" || "APNS" || "APNS_SANDBOX", // required
 *   ContactConfiguration: { // ContactConfiguration
 *     ContactId: "STRING_VALUE", // required
 *     ParticipantRole: "AGENT" || "CUSTOMER" || "SYSTEM" || "CUSTOM_BOT" || "SUPERVISOR",
 *     IncludeRawMessage: true || false,
 *   },
 * };
 * const command = new CreatePushNotificationRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // CreatePushNotificationRegistrationResponse
 * //   RegistrationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreatePushNotificationRegistrationCommandInput - {@link CreatePushNotificationRegistrationCommandInput}
 * @returns {@link CreatePushNotificationRegistrationCommandOutput}
 * @see {@link CreatePushNotificationRegistrationCommandInput} for command's `input` shape.
 * @see {@link CreatePushNotificationRegistrationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class CreatePushNotificationRegistrationCommand extends $Command
  .classBuilder<
    CreatePushNotificationRegistrationCommandInput,
    CreatePushNotificationRegistrationCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreatePushNotificationRegistration", {})
  .n("ConnectClient", "CreatePushNotificationRegistrationCommand")
  .sc(CreatePushNotificationRegistration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePushNotificationRegistrationRequest;
      output: CreatePushNotificationRegistrationResponse;
    };
    sdk: {
      input: CreatePushNotificationRegistrationCommandInput;
      output: CreatePushNotificationRegistrationCommandOutput;
    };
  };
}
