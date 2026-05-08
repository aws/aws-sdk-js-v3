// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteNotificationRequest, DeleteNotificationResponse } from "../models/models_1";
import { DeleteNotification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNotificationCommand}.
 */
export interface DeleteNotificationCommandInput extends DeleteNotificationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNotificationCommand}.
 */
export interface DeleteNotificationCommandOutput extends DeleteNotificationResponse, __MetadataBearer {}

/**
 * <p>Deletes a notification. Once deleted, the notification is no longer visible to all users and cannot be managed through the Admin Website or APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteNotificationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteNotificationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteNotificationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NotificationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNotificationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNotificationCommandInput - {@link DeleteNotificationCommandInput}
 * @returns {@link DeleteNotificationCommandOutput}
 * @see {@link DeleteNotificationCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
 *
 * @public
 */
export class DeleteNotificationCommand extends $Command
  .classBuilder<
    DeleteNotificationCommandInput,
    DeleteNotificationCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteNotification", {})
  .n("ConnectClient", "DeleteNotificationCommand")
  .sc(DeleteNotification$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNotificationRequest;
      output: {};
    };
    sdk: {
      input: DeleteNotificationCommandInput;
      output: DeleteNotificationCommandOutput;
    };
  };
}
