// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetChannelMessageStatusRequest, GetChannelMessageStatusResponse } from "../models/models_0";
import { GetChannelMessageStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetChannelMessageStatusCommand}.
 */
export interface GetChannelMessageStatusCommandInput extends GetChannelMessageStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelMessageStatusCommand}.
 */
export interface GetChannelMessageStatusCommandOutput extends GetChannelMessageStatusResponse, __MetadataBearer {}

/**
 * Gets message status for a specified `messageId`. Use this API to determine the intermediate status of messages going through channel flow processing. The API provides an alternative to retrieving message status if the event was not received because a client wasn't connected to a websocket.
 *
 * Messages can have any one of these statuses.
 *
 * - **SENT**
 *
 *   Message processed successfully
 *
 * - **PENDING**
 *
 *   Ongoing processing
 *
 * - **FAILED**
 *
 *   Processing failed
 *
 * - **DENIED**
 *
 *   Message denied by the processor
 *
 * > **Note:**
 * >
 * > - This API does not return statuses for denied messages, because we don't store them once the processor denies them.
 * > - Only the message sender can invoke this API.
 * > - The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, GetChannelMessageStatusCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, GetChannelMessageStatusCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // GetChannelMessageStatusRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MessageId: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 *   SubChannelId: "STRING_VALUE",
 * };
 * const command = new GetChannelMessageStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelMessageStatusResponse
 * //   Status: { // ChannelMessageStatusStructure
 * //     Value: "SENT" || "PENDING" || "FAILED" || "DENIED",
 * //     Detail: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChannelMessageStatusCommandInput - {@link GetChannelMessageStatusCommandInput}
 * @returns {@link GetChannelMessageStatusCommandOutput}
 * @see {@link GetChannelMessageStatusCommandInput} for command's `input` shape.
 * @see {@link GetChannelMessageStatusCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
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
export class GetChannelMessageStatusCommand extends command<GetChannelMessageStatusCommandInput, GetChannelMessageStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetChannelMessageStatus",
  GetChannelMessageStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChannelMessageStatusRequest;
      output: GetChannelMessageStatusResponse;
    };
    sdk: {
      input: GetChannelMessageStatusCommandInput;
      output: GetChannelMessageStatusCommandOutput;
    };
  };
}
