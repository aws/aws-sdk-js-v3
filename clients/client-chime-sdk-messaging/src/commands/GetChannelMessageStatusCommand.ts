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
import type { GetChannelMessageStatusRequest, GetChannelMessageStatusResponse } from "../models/models_0";
import { GetChannelMessageStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets message status for a specified <code>messageId</code>. Use this API to determine the intermediate status of messages going through channel flow processing. The API provides an alternative to
 *          retrieving message status if the event was not received because a client wasn't connected to a websocket. </p>
 *          <p>Messages can have any one of these statuses.</p>
 *          <dl>
 *             <dt>SENT</dt>
 *             <dd>
 *                <p>Message processed successfully</p>
 *             </dd>
 *             <dt>PENDING</dt>
 *             <dd>
 *                <p>Ongoing processing</p>
 *             </dd>
 *             <dt>FAILED</dt>
 *             <dd>
 *                <p>Processing failed</p>
 *             </dd>
 *             <dt>DENIED</dt>
 *             <dd>
 *                <p>Message denied by the processor</p>
 *             </dd>
 *          </dl>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API does not return statuses for denied messages, because we don't store them once the processor denies them. </p>
 *                </li>
 *                <li>
 *                   <p>Only the message sender can invoke this API.</p>
 *                </li>
 *                <li>
 *                   <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *                </li>
 *             </ul>
 *          </note>
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
 *  <p>The input parameters don't match the service's restrictions.</p>
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
export class GetChannelMessageStatusCommand extends $Command
  .classBuilder<
    GetChannelMessageStatusCommandInput,
    GetChannelMessageStatusCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "GetChannelMessageStatus", {})
  .n("ChimeSDKMessagingClient", "GetChannelMessageStatusCommand")
  .sc(GetChannelMessageStatus)
  .build() {
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
