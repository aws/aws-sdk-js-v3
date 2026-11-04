// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListChannelMessagesRequest, ListChannelMessagesResponse } from "../models/models_0";
import { ListChannelMessages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListChannelMessagesCommand}.
 */
export interface ListChannelMessagesCommandInput extends ListChannelMessagesRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelMessagesCommand}.
 */
export interface ListChannelMessagesCommandOutput extends ListChannelMessagesResponse, __MetadataBearer {}

/**
 * List all the messages in a channel. Returns a paginated list of `ChannelMessages`. By default, sorted by creation timestamp in descending order.
 *
 * > **Note:**
 * >
 * > Redacted messages appear in the results as empty, since they are only redacted, not deleted. Deleted messages do not appear in the results. This action always returns the latest version of an edited message.
 * >
 * > Also, the `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelMessagesCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelMessagesCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ListChannelMessagesRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   NotBefore: new Date("TIMESTAMP"),
 *   NotAfter: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ChimeBearer: "STRING_VALUE", // required
 *   SubChannelId: "STRING_VALUE",
 * };
 * const command = new ListChannelMessagesCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelMessagesResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   ChannelMessages: [ // ChannelMessageSummaryList
 * //     { // ChannelMessageSummary
 * //       MessageId: "STRING_VALUE",
 * //       Content: "STRING_VALUE",
 * //       Metadata: "STRING_VALUE",
 * //       Type: "STANDARD" || "CONTROL",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //       LastEditedTimestamp: new Date("TIMESTAMP"),
 * //       Sender: { // Identity
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //       Redacted: true || false,
 * //       Status: { // ChannelMessageStatusStructure
 * //         Value: "SENT" || "PENDING" || "FAILED" || "DENIED",
 * //         Detail: "STRING_VALUE",
 * //       },
 * //       MessageAttributes: { // MessageAttributeMap
 * //         "<keys>": { // MessageAttributeValue
 * //           StringValues: [ // MessageAttributeStringValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       ContentType: "STRING_VALUE",
 * //       Target: [ // TargetList
 * //         { // Target
 * //           MemberArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   SubChannelId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelMessagesCommandInput - {@link ListChannelMessagesCommandInput}
 * @returns {@link ListChannelMessagesCommandOutput}
 * @see {@link ListChannelMessagesCommandInput} for command's `input` shape.
 * @see {@link ListChannelMessagesCommandOutput} for command's `response` shape.
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
export class ListChannelMessagesCommand extends command<ListChannelMessagesCommandInput, ListChannelMessagesCommandOutput>(
  _ep0,
  _mw0,
  "ListChannelMessages",
  ListChannelMessages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelMessagesRequest;
      output: ListChannelMessagesResponse;
    };
    sdk: {
      input: ListChannelMessagesCommandInput;
      output: ListChannelMessagesCommandOutput;
    };
  };
}
