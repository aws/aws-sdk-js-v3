// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateNotificationRequest, CreateNotificationResponse } from "../models/models_0";
import { CreateNotification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNotificationCommand}.
 */
export interface CreateNotificationCommandInput extends CreateNotificationRequest {}
/**
 * @public
 *
 * The output of {@link CreateNotificationCommand}.
 */
export interface CreateNotificationCommandOutput extends CreateNotificationResponse, __MetadataBearer {}

/**
 * Creates a new notification to be delivered to specified recipients. Notifications can include localized content with links, and an optional expiration time. Recipients can be specified as individual user ARNs or instance ARNs to target all users in an instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateNotificationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateNotificationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateNotificationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ExpiresAt: new Date("TIMESTAMP"),
 *   Recipients: [ // RecipientList // required
 *     "STRING_VALUE",
 *   ],
 *   Priority: "HIGH" || "LOW",
 *   Content: { // NotificationContent // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PredefinedNotificationId: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateNotificationCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotificationResponse
 * //   NotificationId: "STRING_VALUE", // required
 * //   NotificationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateNotificationCommandInput - {@link CreateNotificationCommandInput}
 * @returns {@link CreateNotificationCommandOutput}
 * @see {@link CreateNotificationCommandInput} for command's `input` shape.
 * @see {@link CreateNotificationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class CreateNotificationCommand extends command<CreateNotificationCommandInput, CreateNotificationCommandOutput>(
  _ep0,
  _mw0,
  "CreateNotification",
  CreateNotification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNotificationRequest;
      output: CreateNotificationResponse;
    };
    sdk: {
      input: CreateNotificationCommandInput;
      output: CreateNotificationCommandOutput;
    };
  };
}
