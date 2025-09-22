// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StreamJournalToKinesisRequest, StreamJournalToKinesisResponse } from "../models/models_0";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { StreamJournalToKinesis } from "../schemas/schemas_2_Journal";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StreamJournalToKinesisCommand}.
 */
export interface StreamJournalToKinesisCommandInput extends StreamJournalToKinesisRequest {}
/**
 * @public
 *
 * The output of {@link StreamJournalToKinesisCommand}.
 */
export interface StreamJournalToKinesisCommandOutput extends StreamJournalToKinesisResponse, __MetadataBearer {}

/**
 * <p>Creates a journal stream for a given Amazon QLDB ledger. The stream captures every
 *          document revision that is committed to the ledger's journal and delivers the data to a
 *          specified Amazon Kinesis Data Streams resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, StreamJournalToKinesisCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, StreamJournalToKinesisCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * // import type { QLDBClientConfig } from "@aws-sdk/client-qldb";
 * const config = {}; // type is QLDBClientConfig
 * const client = new QLDBClient(config);
 * const input = { // StreamJournalToKinesisRequest
 *   LedgerName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   InclusiveStartTime: new Date("TIMESTAMP"), // required
 *   ExclusiveEndTime: new Date("TIMESTAMP"),
 *   KinesisConfiguration: { // KinesisConfiguration
 *     StreamArn: "STRING_VALUE", // required
 *     AggregationEnabled: true || false,
 *   },
 *   StreamName: "STRING_VALUE", // required
 * };
 * const command = new StreamJournalToKinesisCommand(input);
 * const response = await client.send(command);
 * // { // StreamJournalToKinesisResponse
 * //   StreamId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StreamJournalToKinesisCommandInput - {@link StreamJournalToKinesisCommandInput}
 * @returns {@link StreamJournalToKinesisCommandOutput}
 * @see {@link StreamJournalToKinesisCommandInput} for command's `input` shape.
 * @see {@link StreamJournalToKinesisCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in the request aren't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ResourcePreconditionNotMetException} (client fault)
 *  <p>The operation failed because a condition wasn't satisfied in advance.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 *
 * @public
 */
export class StreamJournalToKinesisCommand extends $Command
  .classBuilder<
    StreamJournalToKinesisCommandInput,
    StreamJournalToKinesisCommandOutput,
    QLDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QLDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonQLDB", "StreamJournalToKinesis", {})
  .n("QLDBClient", "StreamJournalToKinesisCommand")
  .sc(StreamJournalToKinesis)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StreamJournalToKinesisRequest;
      output: StreamJournalToKinesisResponse;
    };
    sdk: {
      input: StreamJournalToKinesisCommandInput;
      output: StreamJournalToKinesisCommandOutput;
    };
  };
}
