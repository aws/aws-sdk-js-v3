// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserNotificationStatusRequest, UpdateUserNotificationStatusResponse } from "../models/models_3";
import { UpdateUserNotificationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUserNotificationStatusCommand}.
 */
export interface UpdateUserNotificationStatusCommandInput extends UpdateUserNotificationStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserNotificationStatusCommand}.
 */
export interface UpdateUserNotificationStatusCommandOutput extends UpdateUserNotificationStatusResponse, __MetadataBearer {}

/**
 * <p>Updates the status of a notification for a specific user, such as marking it as read or hidden. Users can only update notification status for notifications that have been sent to them. READ status deprioritizes the notification and greys it out, while HIDDEN status removes it from the notification widget.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserNotificationStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserNotificationStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserNotificationStatusRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NotificationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   Status: "READ" || "UNREAD" || "HIDDEN", // required
 *   LastModifiedTime: new Date("TIMESTAMP"),
 *   LastModifiedRegion: "STRING_VALUE",
 * };
 * const command = new UpdateUserNotificationStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserNotificationStatusCommandInput - {@link UpdateUserNotificationStatusCommandInput}
 * @returns {@link UpdateUserNotificationStatusCommandOutput}
 * @see {@link UpdateUserNotificationStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateUserNotificationStatusCommandOutput} for command's `response` shape.
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
export class UpdateUserNotificationStatusCommand extends command<UpdateUserNotificationStatusCommandInput, UpdateUserNotificationStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserNotificationStatus",
  UpdateUserNotificationStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserNotificationStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserNotificationStatusCommandInput;
      output: UpdateUserNotificationStatusCommandOutput;
    };
  };
}
