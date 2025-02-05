// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SendChatIntegrationEventRequest, SendChatIntegrationEventResponse } from "../models/models_2";
import { de_SendChatIntegrationEventCommand, se_SendChatIntegrationEventCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendChatIntegrationEventCommand}.
 */
export interface SendChatIntegrationEventCommandInput extends SendChatIntegrationEventRequest {}
/**
 * @public
 *
 * The output of {@link SendChatIntegrationEventCommand}.
 */
export interface SendChatIntegrationEventCommandOutput extends SendChatIntegrationEventResponse, __MetadataBearer {}

/**
 * <p>Processes chat integration events from Amazon Web Services or external integrations to
 *     Amazon Connect. A chat integration event includes:</p>
 *          <ul>
 *             <li>
 *                <p>SourceId, DestinationId, and Subtype: a set of identifiers, uniquely representing a
 *      chat</p>
 *             </li>
 *             <li>
 *                <p> ChatEvent: details of the chat action to perform such as sending a message, event, or
 *      disconnecting from a chat</p>
 *             </li>
 *          </ul>
 *          <p>When a chat integration event is sent with chat identifiers that do not map to an active
 *    chat contact, a new chat contact is also created before handling chat action. </p>
 *          <p>Access to this API is currently restricted to Amazon Web Services End User Messaging for
 *    supporting SMS integration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SendChatIntegrationEventCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SendChatIntegrationEventCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // SendChatIntegrationEventRequest
 *   SourceId: "STRING_VALUE", // required
 *   DestinationId: "STRING_VALUE", // required
 *   Subtype: "STRING_VALUE",
 *   Event: { // ChatEvent
 *     Type: "DISCONNECT" || "MESSAGE" || "EVENT", // required
 *     ContentType: "STRING_VALUE",
 *     Content: "STRING_VALUE",
 *   },
 *   NewSessionDetails: { // NewSessionDetails
 *     SupportedMessagingContentTypes: [ // SupportedMessagingContentTypes
 *       "STRING_VALUE",
 *     ],
 *     ParticipantDetails: { // ParticipantDetails
 *       DisplayName: "STRING_VALUE", // required
 *     },
 *     Attributes: { // Attributes
 *       "<keys>": "STRING_VALUE",
 *     },
 *     StreamingConfiguration: { // ChatStreamingConfiguration
 *       StreamingEndpointArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new SendChatIntegrationEventCommand(input);
 * const response = await client.send(command);
 * // { // SendChatIntegrationEventResponse
 * //   InitialContactId: "STRING_VALUE",
 * //   NewChatCreated: true || false,
 * // };
 *
 * ```
 *
 * @param SendChatIntegrationEventCommandInput - {@link SendChatIntegrationEventCommandInput}
 * @returns {@link SendChatIntegrationEventCommandOutput}
 * @see {@link SendChatIntegrationEventCommandInput} for command's `input` shape.
 * @see {@link SendChatIntegrationEventCommandOutput} for command's `response` shape.
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
 * @public
 */
export class SendChatIntegrationEventCommand extends $Command
  .classBuilder<
    SendChatIntegrationEventCommandInput,
    SendChatIntegrationEventCommandOutput,
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
  .s("AmazonConnectService", "SendChatIntegrationEvent", {})
  .n("ConnectClient", "SendChatIntegrationEventCommand")
  .f(void 0, void 0)
  .ser(se_SendChatIntegrationEventCommand)
  .de(de_SendChatIntegrationEventCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendChatIntegrationEventRequest;
      output: SendChatIntegrationEventResponse;
    };
    sdk: {
      input: SendChatIntegrationEventCommandInput;
      output: SendChatIntegrationEventCommandOutput;
    };
  };
}
