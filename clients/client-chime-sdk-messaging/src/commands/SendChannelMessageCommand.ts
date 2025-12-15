// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SendChannelMessageRequest, SendChannelMessageResponse } from "../models/models_0";
import { SendChannelMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendChannelMessageCommand}.
 */
export interface SendChannelMessageCommandInput extends SendChannelMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendChannelMessageCommand}.
 */
export interface SendChannelMessageCommandOutput extends SendChannelMessageResponse, __MetadataBearer {}

/**
 * <p>Sends a message to a particular channel that the member is a part of.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *             <p>Also, <code>STANDARD</code> messages can be up to 4KB in size and contain metadata. Metadata is arbitrary,
 *             and you can use it in a variety of ways, such as containing a link to an attachment.</p>
 *             <p>
 *                <code>CONTROL</code> messages are limited to 30 bytes and do not contain metadata.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, SendChannelMessageCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, SendChannelMessageCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // SendChannelMessageRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   Content: "STRING_VALUE", // required
 *   Type: "STANDARD" || "CONTROL", // required
 *   Persistence: "PERSISTENT" || "NON_PERSISTENT", // required
 *   Metadata: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 *   PushNotification: { // PushNotificationConfiguration
 *     Title: "STRING_VALUE",
 *     Body: "STRING_VALUE",
 *     Type: "DEFAULT" || "VOIP",
 *   },
 *   MessageAttributes: { // MessageAttributeMap
 *     "<keys>": { // MessageAttributeValue
 *       StringValues: [ // MessageAttributeStringValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   SubChannelId: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
 *   Target: [ // TargetList
 *     { // Target
 *       MemberArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new SendChannelMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendChannelMessageResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   MessageId: "STRING_VALUE",
 * //   Status: { // ChannelMessageStatusStructure
 * //     Value: "SENT" || "PENDING" || "FAILED" || "DENIED",
 * //     Detail: "STRING_VALUE",
 * //   },
 * //   SubChannelId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendChannelMessageCommandInput - {@link SendChannelMessageCommandInput}
 * @returns {@link SendChannelMessageCommandOutput}
 * @see {@link SendChannelMessageCommandInput} for command's `input` shape.
 * @see {@link SendChannelMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMessagingServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMessaging service.</p>
 *
 *
 * @public
 */
export class SendChannelMessageCommand extends $Command
  .classBuilder<
    SendChannelMessageCommandInput,
    SendChannelMessageCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "SendChannelMessage", {})
  .n("ChimeSDKMessagingClient", "SendChannelMessageCommand")
  .sc(SendChannelMessage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendChannelMessageRequest;
      output: SendChannelMessageResponse;
    };
    sdk: {
      input: SendChannelMessageCommandInput;
      output: SendChannelMessageCommandOutput;
    };
  };
}
