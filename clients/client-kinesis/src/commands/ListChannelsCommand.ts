// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { ListChannelsInput, ListChannelsOutput } from "../models/models_0";
import { ListChannels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandInput extends ListChannelsInput {}
/**
 * @public
 *
 * The output of {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandOutput extends ListChannelsOutput, __MetadataBearer {}

/**
 * <p>Lists the channels in your account. You can filter the results by source stream. The results are paginated. Use the <code>NextToken</code> value returned in the response to retrieve additional results.</p>
 *          <p>Use this operation to find channels before deleting a stream, or to audit the channels configured in an Amazon Web Services Region.</p>
 *          <p>This API has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a <code>LimitExceededException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ListChannelsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ListChannelsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // ListChannelsInput
 *   StreamFilter: [ // StreamFilterList
 *     { // StreamFilter
 *       StreamARN: "STRING_VALUE", // required
 *       StreamCreationTimestamp: new Date("TIMESTAMP"),
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelsOutput
 * //   ChannelSummaries: [ // ChannelSummaryList // required
 * //     { // ChannelSummary
 * //       ChannelName: "STRING_VALUE", // required
 * //       ChannelARN: "STRING_VALUE", // required
 * //       ChannelId: "STRING_VALUE", // required
 * //       ChannelStatus: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //       ChannelStatusReason: "STRING_VALUE",
 * //       ChannelCreationTimestamp: new Date("TIMESTAMP"), // required
 * //       ChannelDestinationType: "S3" || "S3_TABLES", // required
 * //       Streams: [ // ChannelStreamIdentifierList // required
 * //         { // ChannelStreamIdentifier
 * //           StreamARN: "STRING_VALUE", // required
 * //           StreamCreationTimestamp: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelsCommandInput - {@link ListChannelsCommandInput}
 * @returns {@link ListChannelsCommandOutput}
 * @see {@link ListChannelsCommandInput} for command's `input` shape.
 * @see {@link ListChannelsCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link ExpiredNextTokenException} (client fault)
 *  <p>The pagination token passed to the operation is expired.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Specifies that you tried to invoke this API for a data stream with the on-demand
 *             capacity mode. This API is only supported for data streams with the provisioned capacity
 *             mode. </p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @example To list channels
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChannelSummaries: [
 *     {
 *       ChannelARN: "arn:aws:kinesis:us-east-1:123456789012:channel/my-channel-id",
 *       ChannelCreationTimestamp: "2024-07-02T00:00:00Z",
 *       ChannelDestinationType: "S3",
 *       ChannelId: "my-channel-id",
 *       ChannelName: "my-channel-name",
 *       ChannelStatus: "ACTIVE",
 *       Streams: [
 *         {
 *           StreamARN: "arn:aws:kinesis:us-east-1:123456789012:stream/my-stream-name",
 *           StreamCreationTimestamp: "2024-07-01T00:00:00Z"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To list channels filtered by stream
 * ```javascript
 * //
 * const input = {
 *   MaxResults: 10,
 *   StreamFilter: [
 *     {
 *       StreamARN: "arn:aws:kinesis:us-east-1:123456789012:stream/my-stream-name"
 *     }
 *   ]
 * };
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChannelSummaries: [
 *     {
 *       ChannelARN: "arn:aws:kinesis:us-east-1:123456789012:channel/my-channel-id",
 *       ChannelCreationTimestamp: "2024-07-02T00:00:00Z",
 *       ChannelDestinationType: "S3",
 *       ChannelId: "my-channel-id",
 *       ChannelName: "my-channel-name",
 *       ChannelStatus: "ACTIVE",
 *       Streams: [
 *         {
 *           StreamARN: "arn:aws:kinesis:us-east-1:123456789012:stream/my-stream-name",
 *           StreamCreationTimestamp: "2024-07-01T00:00:00Z"
 *         }
 *       ]
 *     }
 *   ],
 *   NextToken: "AAAAAgAAAAEAAAABbXktbmV4dC1wYWdlLXRva2Vu"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListChannelsCommand extends command<ListChannelsCommandInput, ListChannelsCommandOutput>(
  _ep1,
  _mw0,
  "ListChannels",
  ListChannels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelsInput;
      output: ListChannelsOutput;
    };
    sdk: {
      input: ListChannelsCommandInput;
      output: ListChannelsCommandOutput;
    };
  };
}
