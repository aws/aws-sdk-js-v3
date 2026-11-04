// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetChannelMessageRequest, GetChannelMessageResponse } from "../models/models_0";
import { GetChannelMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the full details of a channel message.
 *
 * > **Note:** The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, GetChannelMessageCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, GetChannelMessageCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
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
export class GetChannelMessageCommand extends command<GetChannelMessageCommandInput, GetChannelMessageCommandOutput>(
  _ep0,
  _mw0,
  "GetChannelMessage",
  GetChannelMessage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChannelMessageRequest;
      output: GetChannelMessageResponse;
    };
    sdk: {
      input: GetChannelMessageCommandInput;
      output: GetChannelMessageCommandOutput;
    };
  };
}
