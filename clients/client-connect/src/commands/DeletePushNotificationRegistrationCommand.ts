// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeletePushNotificationRegistrationRequest,
  DeletePushNotificationRegistrationResponse,
} from "../models/models_0";
import {
  de_DeletePushNotificationRegistrationCommand,
  se_DeletePushNotificationRegistrationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePushNotificationRegistrationCommand}.
 */
export interface DeletePushNotificationRegistrationCommandInput extends DeletePushNotificationRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link DeletePushNotificationRegistrationCommand}.
 */
export interface DeletePushNotificationRegistrationCommandOutput
  extends DeletePushNotificationRegistrationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes registration for a device token and a chat contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeletePushNotificationRegistrationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeletePushNotificationRegistrationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DeletePushNotificationRegistrationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RegistrationId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 * };
 * const command = new DeletePushNotificationRegistrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePushNotificationRegistrationCommandInput - {@link DeletePushNotificationRegistrationCommandInput}
 * @returns {@link DeletePushNotificationRegistrationCommandOutput}
 * @see {@link DeletePushNotificationRegistrationCommandInput} for command's `input` shape.
 * @see {@link DeletePushNotificationRegistrationCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class DeletePushNotificationRegistrationCommand extends $Command
  .classBuilder<
    DeletePushNotificationRegistrationCommandInput,
    DeletePushNotificationRegistrationCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DeletePushNotificationRegistration", {})
  .n("ConnectClient", "DeletePushNotificationRegistrationCommand")
  .f(void 0, void 0)
  .ser(se_DeletePushNotificationRegistrationCommand)
  .de(de_DeletePushNotificationRegistrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePushNotificationRegistrationRequest;
      output: {};
    };
    sdk: {
      input: DeletePushNotificationRegistrationCommandInput;
      output: DeletePushNotificationRegistrationCommandOutput;
    };
  };
}
