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
  GetChannelMessageRequest,
  GetChannelMessageResponse,
  GetChannelMessageResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetChannelMessageCommand, se_GetChannelMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChannelMessageCommand}.
 */
export interface GetChannelMessageCommandInput extends GetChannelMessageRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelMessageCommand}.
 */
export interface GetChannelMessageCommandOutput extends GetChannelMessageResponse, __MetadataBearer {}

/**
 * <p>Gets the full details of a channel message.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, GetChannelMessageCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, GetChannelMessageCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // GetChannelMessageRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MessageId: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 *   SubChannelId: "STRING_VALUE",
 * };
 * const command = new GetChannelMessageCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelMessageResponse
 * //   ChannelMessage: { // ChannelMessage
 * //     ChannelArn: "STRING_VALUE",
 * //     MessageId: "STRING_VALUE",
 * //     Content: "STRING_VALUE",
 * //     Metadata: "STRING_VALUE",
 * //     Type: "STANDARD" || "CONTROL",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     LastEditedTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     Sender: { // Identity
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     Redacted: true || false,
 * //     Persistence: "PERSISTENT" || "NON_PERSISTENT",
 * //     Status: { // ChannelMessageStatusStructure
 * //       Value: "SENT" || "PENDING" || "FAILED" || "DENIED",
 * //       Detail: "STRING_VALUE",
 * //     },
 * //     MessageAttributes: { // MessageAttributeMap
 * //       "<keys>": { // MessageAttributeValue
 * //         StringValues: [ // MessageAttributeStringValues
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     SubChannelId: "STRING_VALUE",
 * //     ContentType: "STRING_VALUE",
 * //     Target: [ // TargetList
 * //       { // Target
 * //         MemberArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChannelMessageCommandInput - {@link GetChannelMessageCommandInput}
 * @returns {@link GetChannelMessageCommandOutput}
 * @see {@link GetChannelMessageCommandInput} for command's `input` shape.
 * @see {@link GetChannelMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
export class GetChannelMessageCommand extends $Command
  .classBuilder<
    GetChannelMessageCommandInput,
    GetChannelMessageCommandOutput,
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
  .s("ChimeMessagingService", "GetChannelMessage", {})
  .n("ChimeSDKMessagingClient", "GetChannelMessageCommand")
  .f(void 0, GetChannelMessageResponseFilterSensitiveLog)
  .ser(se_GetChannelMessageCommand)
  .de(de_GetChannelMessageCommand)
  .build() {}
