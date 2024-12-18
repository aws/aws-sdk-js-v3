// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartChatContactResponse } from "../models/models_2";
import { StartChatContactRequest, StartChatContactRequestFilterSensitiveLog } from "../models/models_3";
import { de_StartChatContactCommand, se_StartChatContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartChatContactCommand}.
 */
export interface StartChatContactCommandInput extends StartChatContactRequest {}
/**
 * @public
 *
 * The output of {@link StartChatContactCommand}.
 */
export interface StartChatContactCommandOutput extends StartChatContactResponse, __MetadataBearer {}

/**
 * <p>Initiates a flow to start a new chat for the customer. Response of this API provides a token
 *    required to obtain credentials from the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API in the Amazon Connect Participant Service.</p>
 *          <p>When a new chat contact is successfully created, clients must subscribe to the participant’s
 *    connection for the created chat within 5 minutes. This is achieved by invoking <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> with WEBSOCKET and CONNECTION_CREDENTIALS. </p>
 *          <p>A 429 error occurs in the following situations:</p>
 *          <ul>
 *             <li>
 *                <p>API rate limit is exceeded. API TPS throttling returns a <code>TooManyRequests</code>
 *      exception.</p>
 *             </li>
 *             <li>
 *                <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">quota for concurrent active
 *       chats</a> is exceeded. Active chat throttling returns a
 *       <code>LimitExceededException</code>.</p>
 *             </li>
 *          </ul>
 *          <p>If you use the <code>ChatDurationInMinutes</code> parameter and receive a 400 error, your
 *    account may not support the ability to configure custom chat durations. For more information,
 *    contact Amazon Web Services Support. </p>
 *          <p>For more information about chat, see the following topics in the <i>Amazon Connect
 *    Administrator Guide</i>: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/adminguide/web-and-mobile-chat.html">Concepts: Web and mobile messaging capabilities in Amazon Connect</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat">Amazon Connect Chat security best practices</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartChatContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartChatContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // StartChatContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ParticipantDetails: { // ParticipantDetails
 *     DisplayName: "STRING_VALUE", // required
 *   },
 *   InitialMessage: { // ChatMessage
 *     ContentType: "STRING_VALUE", // required
 *     Content: "STRING_VALUE", // required
 *   },
 *   ClientToken: "STRING_VALUE",
 *   ChatDurationInMinutes: Number("int"),
 *   SupportedMessagingContentTypes: [ // SupportedMessagingContentTypes
 *     "STRING_VALUE",
 *   ],
 *   PersistentChat: { // PersistentChat
 *     RehydrationType: "ENTIRE_PAST_SESSION" || "FROM_SEGMENT",
 *     SourceContactId: "STRING_VALUE",
 *   },
 *   RelatedContactId: "STRING_VALUE",
 *   SegmentAttributes: { // SegmentAttributes
 *     "<keys>": { // SegmentAttributeValue
 *       ValueString: "STRING_VALUE",
 *       ValueMap: { // SegmentAttributeValueMap
 *         "<keys>": {
 *           ValueString: "STRING_VALUE",
 *           ValueMap: {
 *             "<keys>": "<SegmentAttributeValue>",
 *           },
 *           ValueInteger: Number("int"),
 *         },
 *       },
 *       ValueInteger: Number("int"),
 *     },
 *   },
 *   CustomerId: "STRING_VALUE",
 * };
 * const command = new StartChatContactCommand(input);
 * const response = await client.send(command);
 * // { // StartChatContactResponse
 * //   ContactId: "STRING_VALUE",
 * //   ParticipantId: "STRING_VALUE",
 * //   ParticipantToken: "STRING_VALUE",
 * //   ContinuedFromContactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartChatContactCommandInput - {@link StartChatContactCommandInput}
 * @returns {@link StartChatContactCommandOutput}
 * @see {@link StartChatContactCommandInput} for command's `input` shape.
 * @see {@link StartChatContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class StartChatContactCommand extends $Command
  .classBuilder<
    StartChatContactCommandInput,
    StartChatContactCommandOutput,
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
  .s("AmazonConnectService", "StartChatContact", {})
  .n("ConnectClient", "StartChatContactCommand")
  .f(StartChatContactRequestFilterSensitiveLog, void 0)
  .ser(se_StartChatContactCommand)
  .de(de_StartChatContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartChatContactRequest;
      output: StartChatContactResponse;
    };
    sdk: {
      input: StartChatContactCommandInput;
      output: StartChatContactCommandOutput;
    };
  };
}
