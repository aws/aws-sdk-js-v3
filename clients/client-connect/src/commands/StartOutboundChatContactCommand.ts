// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartOutboundChatContactResponse } from "../models/models_2";
import { StartOutboundChatContactRequest } from "../models/models_3";
import { de_StartOutboundChatContactCommand, se_StartOutboundChatContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartOutboundChatContactCommand}.
 */
export interface StartOutboundChatContactCommandInput extends StartOutboundChatContactRequest {}
/**
 * @public
 *
 * The output of {@link StartOutboundChatContactCommand}.
 */
export interface StartOutboundChatContactCommandOutput extends StartOutboundChatContactResponse, __MetadataBearer {}

/**
 * <p>Initiates a new outbound SMS contact to a customer. Response of this API provides the
 *     <code>ContactId</code> of the outbound SMS contact created.</p>
 *          <p>
 *             <b>SourceEndpoint</b> only supports Endpoints with
 *     <code>CONNECT_PHONENUMBER_ARN</code> as Type and <b>DestinationEndpoint</b> only supports Endpoints with <code>TELEPHONE_NUMBER</code> as
 *    Type. <b>ContactFlowId</b> initiates the flow to manage the new SMS
 *    contact created.</p>
 *          <p>This API can be used to initiate outbound SMS contacts for an agent, or it can also deflect
 *    an ongoing contact to an outbound SMS contact by using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundChatContact.html">StartOutboundChatContact</a> Flow Action.</p>
 *          <p>For more information about using SMS in Amazon Connect, see the following topics in the
 *      <i>Amazon Connect Administrator Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-sms-messaging.html">Set
 *       up SMS messaging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/adminguide/sms-number.html">Request an
 *       SMS-enabled phone number through AWS End User Messaging SMS</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartOutboundChatContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartOutboundChatContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartOutboundChatContactRequest
 *   SourceEndpoint: { // Endpoint
 *     Type: "TELEPHONE_NUMBER" || "VOIP" || "CONTACT_FLOW" || "CONNECT_PHONENUMBER_ARN" || "EMAIL_ADDRESS",
 *     Address: "STRING_VALUE",
 *   },
 *   DestinationEndpoint: {
 *     Type: "TELEPHONE_NUMBER" || "VOIP" || "CONTACT_FLOW" || "CONNECT_PHONENUMBER_ARN" || "EMAIL_ADDRESS",
 *     Address: "STRING_VALUE",
 *   },
 *   InstanceId: "STRING_VALUE", // required
 *   SegmentAttributes: { // SegmentAttributes // required
 *     "<keys>": { // SegmentAttributeValue
 *       ValueString: "STRING_VALUE",
 *       ValueMap: { // SegmentAttributeValueMap
 *         "<keys>": {
 *           ValueString: "STRING_VALUE",
 *           ValueMap: {
 *             "<keys>": "<SegmentAttributeValue>",
 *           },
 *           ValueInteger: Number("int"),
 *           ValueList: [ // SegmentAttributeValueList
 *             "<SegmentAttributeValue>",
 *           ],
 *           ValueArn: "STRING_VALUE",
 *         },
 *       },
 *       ValueInteger: Number("int"),
 *       ValueList: [
 *         "<SegmentAttributeValue>",
 *       ],
 *       ValueArn: "STRING_VALUE",
 *     },
 *   },
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ContactFlowId: "STRING_VALUE", // required
 *   ChatDurationInMinutes: Number("int"),
 *   ParticipantDetails: { // ParticipantDetails
 *     DisplayName: "STRING_VALUE", // required
 *   },
 *   InitialSystemMessage: { // ChatMessage
 *     ContentType: "STRING_VALUE", // required
 *     Content: "STRING_VALUE", // required
 *   },
 *   RelatedContactId: "STRING_VALUE",
 *   SupportedMessagingContentTypes: [ // SupportedMessagingContentTypes
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartOutboundChatContactCommand(input);
 * const response = await client.send(command);
 * // { // StartOutboundChatContactResponse
 * //   ContactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartOutboundChatContactCommandInput - {@link StartOutboundChatContactCommandInput}
 * @returns {@link StartOutboundChatContactCommandOutput}
 * @see {@link StartOutboundChatContactCommandInput} for command's `input` shape.
 * @see {@link StartOutboundChatContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Operation cannot be performed at this time as there is a conflict with another operation or
 *    contact state.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class StartOutboundChatContactCommand extends $Command
  .classBuilder<
    StartOutboundChatContactCommandInput,
    StartOutboundChatContactCommandOutput,
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
  .s("AmazonConnectService", "StartOutboundChatContact", {})
  .n("ConnectClient", "StartOutboundChatContactCommand")
  .f(void 0, void 0)
  .ser(se_StartOutboundChatContactCommand)
  .de(de_StartOutboundChatContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartOutboundChatContactRequest;
      output: StartOutboundChatContactResponse;
    };
    sdk: {
      input: StartOutboundChatContactCommandInput;
      output: StartOutboundChatContactCommandOutput;
    };
  };
}
