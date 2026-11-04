// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendChannelMessageRequest, SendChannelMessageResponse } from "../models/models_0";
import { SendChannelMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sends a message to a particular channel that the member is a part of.
 *
 * > **Note:**
 * >
 * > The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 * >
 * > Also, `STANDARD` messages can be up to 4KB in size and contain metadata. Metadata is arbitrary, and you can use it in a variety of ways, such as containing a link to an attachment.
 * >
 * > `CONTROL` messages are limited to 30 bytes and do not contain metadata.
 *
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
export class SendChannelMessageCommand extends command<SendChannelMessageCommandInput, SendChannelMessageCommandOutput>(
  _ep0,
  _mw0,
  "SendChannelMessage",
  SendChannelMessage$
) {
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
