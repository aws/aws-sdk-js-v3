// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendOutboundWebNotificationRequest, SendOutboundWebNotificationResponse } from "../models/models_3";
import { SendOutboundWebNotification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendOutboundWebNotificationCommand}.
 */
export interface SendOutboundWebNotificationCommandInput extends SendOutboundWebNotificationRequest {}
/**
 * @public
 *
 * The output of {@link SendOutboundWebNotificationCommand}.
 */
export interface SendOutboundWebNotificationCommandOutput extends SendOutboundWebNotificationResponse, __MetadataBearer {}

/**
 * <p>Sends an outbound web notification to a customer's web browser for outbound campaigns. For more information
 *    about outbound campaigns, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html">Set up Connect Customer outbound
 *     campaigns</a>.</p>
 *          <note>
 *             <p>Only the Connect Customer outbound campaigns service principal is allowed to assume a role in your account
 *     and call this API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SendOutboundWebNotificationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SendOutboundWebNotificationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SendOutboundWebNotificationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   BrowserId: "STRING_VALUE", // required
 *   SessionId: "STRING_VALUE", // required
 *   ExpiresAt: new Date("TIMESTAMP"), // required
 *   Source: { // WebNotificationSource
 *     SourceCampaign: { // SourceCampaign
 *       CampaignId: "STRING_VALUE",
 *       OutboundRequestId: "STRING_VALUE",
 *     },
 *   },
 *   Destination: { // WidgetDestination
 *     WidgetId: "STRING_VALUE", // required
 *     ProfileId: "STRING_VALUE", // required
 *   },
 *   Content: { // WebNotificationContent
 *     Type: "WIDGET_VIEW" || "WIDGET_ACTION", // required
 *     ViewArn: "STRING_VALUE",
 *     Attributes: { // ContentAttributes
 *       RecommenderConfig: { // RecommenderConfig
 *         DomainName: "STRING_VALUE", // required
 *         RecommenderName: "STRING_VALUE", // required
 *         Context: { // RecommenderContext
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new SendOutboundWebNotificationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendOutboundWebNotificationCommandInput - {@link SendOutboundWebNotificationCommandInput}
 * @returns {@link SendOutboundWebNotificationCommandOutput}
 * @see {@link SendOutboundWebNotificationCommandInput} for command's `input` shape.
 * @see {@link SendOutboundWebNotificationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
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
export class SendOutboundWebNotificationCommand extends command<SendOutboundWebNotificationCommandInput, SendOutboundWebNotificationCommandOutput>(
  _ep0,
  _mw0,
  "SendOutboundWebNotification",
  SendOutboundWebNotification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendOutboundWebNotificationRequest;
      output: {};
    };
    sdk: {
      input: SendOutboundWebNotificationCommandInput;
      output: SendOutboundWebNotificationCommandOutput;
    };
  };
}
