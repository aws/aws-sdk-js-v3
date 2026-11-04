// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartOutboundChatContactResponse } from "../models/models_3";
import type { StartOutboundChatContactRequest } from "../models/models_4";
import { StartOutboundChatContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Initiates a new outbound SMS or WhatsApp contact to a customer. Response of this API provides the `ContactId` of the outbound SMS or WhatsApp contact created.
 *
 * **SourceEndpoint** only supports Endpoints with `CONNECT_PHONENUMBER_ARN` as Type and **DestinationEndpoint** only supports Endpoints with `TELEPHONE_NUMBER` as Type. **ContactFlowId** initiates the flow to manage the new contact created.
 *
 * This API can be used to initiate outbound SMS or WhatsApp contacts for an agent, or it can also deflect an ongoing contact to an outbound SMS or WhatsApp contact by using the [StartOutboundChatContact](https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundChatContact.html) Flow Action.
 *
 * For more information about using SMS or WhatsApp in Connect Customer, see the following topics in the *Connect Customer Administrator Guide*:
 *
 * - [Set up SMS messaging](https://docs.aws.amazon.com/connect/latest/adminguide/setup-sms-messaging.html)
 * - [Request an SMS-enabled phone number through Amazon Web Services End User Messaging SMS](https://docs.aws.amazon.com/connect/latest/adminguide/sms-number.html)
 * - [Set up WhatsApp Business messaging](https://docs.aws.amazon.com/connect/latest/adminguide/whatsapp-integration.html)
 *
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
 *   InitialTemplatedSystemMessage: { // TemplatedMessageConfig
 *     KnowledgeBaseId: "STRING_VALUE", // required
 *     MessageTemplateId: "STRING_VALUE", // required
 *     TemplateAttributes: { // TemplateAttributes
 *       CustomAttributes: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       CustomerProfileAttributes: "STRING_VALUE",
 *     },
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Operation cannot be performed at this time as there is a conflict with another operation or contact state.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
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
export class StartOutboundChatContactCommand extends command<StartOutboundChatContactCommandInput, StartOutboundChatContactCommandOutput>(
  _ep0,
  _mw0,
  "StartOutboundChatContact",
  StartOutboundChatContact$
) {
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
