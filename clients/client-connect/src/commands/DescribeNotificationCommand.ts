// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeNotificationRequest, DescribeNotificationResponse } from "../models/models_1";
import { DescribeNotification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeNotificationCommand}.
 */
export interface DescribeNotificationCommandInput extends DescribeNotificationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNotificationCommand}.
 */
export interface DescribeNotificationCommandOutput extends DescribeNotificationResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific notification, including its content, priority, recipients, and metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeNotificationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeNotificationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeNotificationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NotificationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeNotificationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotificationResponse
 * //   Notification: { // Notification
 * //     Content: { // NotificationContent
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Id: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Priority: "URGENT" || "HIGH" || "LOW",
 * //     Recipients: [ // RecipientList
 * //       "STRING_VALUE",
 * //     ],
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     ExpiresAt: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeNotificationCommandInput - {@link DescribeNotificationCommandInput}
 * @returns {@link DescribeNotificationCommandOutput}
 * @see {@link DescribeNotificationCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationCommandOutput} for command's `response` shape.
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
export class DescribeNotificationCommand extends command<DescribeNotificationCommandInput, DescribeNotificationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeNotification",
  DescribeNotification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNotificationRequest;
      output: DescribeNotificationResponse;
    };
    sdk: {
      input: DescribeNotificationCommandInput;
      output: DescribeNotificationCommandOutput;
    };
  };
}
