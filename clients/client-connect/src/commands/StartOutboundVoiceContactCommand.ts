// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartOutboundVoiceContactRequest, StartOutboundVoiceContactResponse } from "../models/models_3";
import { StartOutboundVoiceContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartOutboundVoiceContactCommand}.
 */
export interface StartOutboundVoiceContactCommandInput extends StartOutboundVoiceContactRequest {}
/**
 * @public
 *
 * The output of {@link StartOutboundVoiceContactCommand}.
 */
export interface StartOutboundVoiceContactCommandOutput extends StartOutboundVoiceContactResponse, __MetadataBearer {}

/**
 * Places an outbound call to a contact, and then initiates the flow. It performs the actions in the flow that's specified (in `ContactFlowId`).
 *
 * Agents do not initiate the outbound API, which means that they do not dial the contact. If the flow places an outbound call to a contact, and then puts the contact in queue, the call is then routed to the agent, like any other inbound case.
 *
 * Dialing timeout for this operation can be configured with the “RingTimeoutInSeconds” parameter. If not specified, the default dialing timeout will be 60 seconds which means if the call is not connected within 60 seconds, it fails.
 *
 * > **Note:** UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK mobile numbers, you must submit a service quota increase request. For more information, see [Connect Customer Service Quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html) in the *Connect Customer Administrator Guide*.
 *
 * > **Note:** Campaign calls are not allowed by default. Before you can make a call with `TrafficType` = `CAMPAIGN`, you must submit a service quota increase request to the quota [Connect Customer campaigns](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#outbound-communications-quotas).
 *
 * > **Note:** For Preview dialing mode, only the Amazon Connect outbound campaigns service principal is allowed to assume a role in your account and call this API with OutboundStrategy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartOutboundVoiceContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartOutboundVoiceContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartOutboundVoiceContactRequest
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   References: { // ContactReferences
 *     "<keys>": { // Reference
 *       Value: "STRING_VALUE",
 *       Type: "URL" || "ATTACHMENT" || "CONTACT_ANALYSIS" || "NUMBER" || "STRING" || "DATE" || "EMAIL" || "EMAIL_MESSAGE" || "EMAIL_MESSAGE_PLAIN_TEXT" || "EMAIL_MESSAGE_PLAIN_TEXT_REDACTED" || "EMAIL_MESSAGE_REDACTED", // required
 *       Status: "AVAILABLE" || "DELETED" || "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED" || "DRAFTING",
 *       Arn: "STRING_VALUE",
 *       StatusReason: "STRING_VALUE",
 *     },
 *   },
 *   RelatedContactId: "STRING_VALUE",
 *   DestinationPhoneNumber: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   SourcePhoneNumber: "STRING_VALUE",
 *   QueueId: "STRING_VALUE",
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AnswerMachineDetectionConfig: { // AnswerMachineDetectionConfig
 *     EnableAnswerMachineDetection: true || false,
 *     AwaitAnswerMachinePrompt: true || false,
 *   },
 *   CampaignId: "STRING_VALUE",
 *   TrafficType: "GENERAL" || "CAMPAIGN",
 *   OutboundStrategy: { // OutboundStrategy
 *     Type: "AGENT_FIRST", // required
 *     Config: { // OutboundStrategyConfig
 *       AgentFirst: { // AgentFirst
 *         Preview: { // Preview
 *           PostAcceptTimeoutConfig: { // PostAcceptTimeoutConfig
 *             DurationInSeconds: Number("int"), // required
 *           },
 *           AllowedUserActions: [ // AllowedUserActions // required
 *             "CALL" || "DISCARD",
 *           ],
 *         },
 *       },
 *     },
 *   },
 *   RingTimeoutInSeconds: Number("int"),
 * };
 * const command = new StartOutboundVoiceContactCommand(input);
 * const response = await client.send(command);
 * // { // StartOutboundVoiceContactResponse
 * //   ContactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartOutboundVoiceContactCommandInput - {@link StartOutboundVoiceContactCommandInput}
 * @returns {@link StartOutboundVoiceContactCommandOutput}
 * @see {@link StartOutboundVoiceContactCommandInput} for command's `input` shape.
 * @see {@link StartOutboundVoiceContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DestinationNotAllowedException} (client fault)
 *
 * Outbound calls to the destination number are not allowed.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
 *
 * @throws {@link OutboundContactNotPermittedException} (client fault)
 *
 * The contact is not permitted.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class StartOutboundVoiceContactCommand extends command<StartOutboundVoiceContactCommandInput, StartOutboundVoiceContactCommandOutput>(
  _ep0,
  _mw0,
  "StartOutboundVoiceContact",
  StartOutboundVoiceContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartOutboundVoiceContactRequest;
      output: StartOutboundVoiceContactResponse;
    };
    sdk: {
      input: StartOutboundVoiceContactCommandInput;
      output: StartOutboundVoiceContactCommandOutput;
    };
  };
}
