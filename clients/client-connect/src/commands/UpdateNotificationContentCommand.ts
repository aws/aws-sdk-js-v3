// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateNotificationContentRequest, UpdateNotificationContentResponse } from "../models/models_3";
import { UpdateNotificationContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateNotificationContentCommand}.
 */
export interface UpdateNotificationContentCommandInput extends UpdateNotificationContentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNotificationContentCommand}.
 */
export interface UpdateNotificationContentCommandOutput extends UpdateNotificationContentResponse, __MetadataBearer {}

/**
 * <p>Updates the localized content of an existing notification. This operation applies to all users for whom the notification was sent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateNotificationContentCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateNotificationContentCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateNotificationContentRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NotificationId: "STRING_VALUE", // required
 *   Content: { // NotificationContent // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateNotificationContentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNotificationContentCommandInput - {@link UpdateNotificationContentCommandInput}
 * @returns {@link UpdateNotificationContentCommandOutput}
 * @see {@link UpdateNotificationContentCommandInput} for command's `input` shape.
 * @see {@link UpdateNotificationContentCommandOutput} for command's `response` shape.
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
export class UpdateNotificationContentCommand extends command<UpdateNotificationContentCommandInput, UpdateNotificationContentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateNotificationContent",
  UpdateNotificationContent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNotificationContentRequest;
      output: {};
    };
    sdk: {
      input: UpdateNotificationContentCommandInput;
      output: UpdateNotificationContentCommandOutput;
    };
  };
}
