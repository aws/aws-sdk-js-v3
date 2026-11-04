// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RedactChannelMessageRequest, RedactChannelMessageResponse } from "../models/models_0";
import { RedactChannelMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RedactChannelMessageCommand}.
 */
export interface RedactChannelMessageCommandInput extends RedactChannelMessageRequest {}
/**
 * @public
 *
 * The output of {@link RedactChannelMessageCommand}.
 */
export interface RedactChannelMessageCommandOutput extends RedactChannelMessageResponse, __MetadataBearer {}

/**
 * Redacts message content and metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted.
 *
 * > **Note:** The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, RedactChannelMessageCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, RedactChannelMessageCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // RedactChannelMessageRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MessageId: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 *   SubChannelId: "STRING_VALUE",
 * };
 * const command = new RedactChannelMessageCommand(input);
 * const response = await client.send(command);
 * // { // RedactChannelMessageResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   MessageId: "STRING_VALUE",
 * //   SubChannelId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RedactChannelMessageCommandInput - {@link RedactChannelMessageCommandInput}
 * @returns {@link RedactChannelMessageCommandOutput}
 * @see {@link RedactChannelMessageCommandInput} for command's `input` shape.
 * @see {@link RedactChannelMessageCommandOutput} for command's `response` shape.
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
export class RedactChannelMessageCommand extends command<RedactChannelMessageCommandInput, RedactChannelMessageCommandOutput>(
  _ep0,
  _mw0,
  "RedactChannelMessage",
  RedactChannelMessage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RedactChannelMessageRequest;
      output: RedactChannelMessageResponse;
    };
    sdk: {
      input: RedactChannelMessageCommandInput;
      output: RedactChannelMessageCommandOutput;
    };
  };
}
