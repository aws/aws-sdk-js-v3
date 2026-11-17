// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
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
 *          <p>This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a <code>LimitExceededException</code>.</p>
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
 *  <p>The request failed validation. For example, a parameter value is not valid, a
 *             combination of parameters is not supported, or the operation is not supported for the
 *             stream's capacity mode. The error message describes the specific reason.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class ListChannelsCommand extends command<ListChannelsCommandInput, ListChannelsCommandOutput>(
  _ep2,
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
