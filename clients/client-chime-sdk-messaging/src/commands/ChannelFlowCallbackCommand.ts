// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ChannelFlowCallbackRequest, ChannelFlowCallbackResponse } from "../models/models_0";
import { ChannelFlowCallback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ChannelFlowCallbackCommand}.
 */
export interface ChannelFlowCallbackCommandInput extends ChannelFlowCallbackRequest {}
/**
 * @public
 *
 * The output of {@link ChannelFlowCallbackCommand}.
 */
export interface ChannelFlowCallbackCommandOutput extends ChannelFlowCallbackResponse, __MetadataBearer {}

/**
 * Calls back Amazon Chime SDK messaging with a processing response message. This should be invoked from the processor Lambda. This is a developer API.
 *
 * You can return one of the following processing responses:
 *
 * - Update message content or metadata
 * - Deny a message
 * - Make no changes to the message
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ChannelFlowCallbackCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ChannelFlowCallbackCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ChannelFlowCallbackRequest
 *   CallbackId: "STRING_VALUE", // required
 *   ChannelArn: "STRING_VALUE", // required
 *   DeleteResource: true || false,
 *   ChannelMessage: { // ChannelMessageCallback
 *     MessageId: "STRING_VALUE", // required
 *     Content: "STRING_VALUE",
 *     Metadata: "STRING_VALUE",
 *     PushNotification: { // PushNotificationConfiguration
 *       Title: "STRING_VALUE",
 *       Body: "STRING_VALUE",
 *       Type: "DEFAULT" || "VOIP",
 *     },
 *     MessageAttributes: { // MessageAttributeMap
 *       "<keys>": { // MessageAttributeValue
 *         StringValues: [ // MessageAttributeStringValues
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     SubChannelId: "STRING_VALUE",
 *     ContentType: "STRING_VALUE",
 *   },
 * };
 * const command = new ChannelFlowCallbackCommand(input);
 * const response = await client.send(command);
 * // { // ChannelFlowCallbackResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   CallbackId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ChannelFlowCallbackCommandInput - {@link ChannelFlowCallbackCommandInput}
 * @returns {@link ChannelFlowCallbackCommandOutput}
 * @see {@link ChannelFlowCallbackCommandInput} for command's `input` shape.
 * @see {@link ChannelFlowCallbackCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKMessagingServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKMessaging service.
 *
 * @public
 */
export class ChannelFlowCallbackCommand extends command<ChannelFlowCallbackCommandInput, ChannelFlowCallbackCommandOutput>(
  _ep0,
  _mw0,
  "ChannelFlowCallback",
  ChannelFlowCallback$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ChannelFlowCallbackRequest;
      output: ChannelFlowCallbackResponse;
    };
    sdk: {
      input: ChannelFlowCallbackCommandInput;
      output: ChannelFlowCallbackCommandOutput;
    };
  };
}
