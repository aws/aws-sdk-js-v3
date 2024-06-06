// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateChannelMessageRequest,
  UpdateChannelMessageRequestFilterSensitiveLog,
  UpdateChannelMessageResponse,
} from "../models/models_0";
import { de_UpdateChannelMessageCommand, se_UpdateChannelMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChannelMessageCommand}.
 */
export interface UpdateChannelMessageCommandInput extends UpdateChannelMessageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChannelMessageCommand}.
 */
export interface UpdateChannelMessageCommandOutput extends UpdateChannelMessageResponse, __MetadataBearer {}

/**
 * <p>Updates the content of a message.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, UpdateChannelMessageCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, UpdateChannelMessageCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // UpdateChannelMessageRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MessageId: "STRING_VALUE", // required
 *   Content: "STRING_VALUE", // required
 *   Metadata: "STRING_VALUE",
 *   ChimeBearer: "STRING_VALUE", // required
 *   SubChannelId: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
 * };
 * const command = new UpdateChannelMessageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChannelMessageResponse
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
 * @param UpdateChannelMessageCommandInput - {@link UpdateChannelMessageCommandInput}
 * @returns {@link UpdateChannelMessageCommandOutput}
 * @see {@link UpdateChannelMessageCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelMessageCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateChannelMessageCommand extends $Command
  .classBuilder<
    UpdateChannelMessageCommandInput,
    UpdateChannelMessageCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeMessagingService", "UpdateChannelMessage", {})
  .n("ChimeSDKMessagingClient", "UpdateChannelMessageCommand")
  .f(UpdateChannelMessageRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateChannelMessageCommand)
  .de(de_UpdateChannelMessageCommand)
  .build() {}
