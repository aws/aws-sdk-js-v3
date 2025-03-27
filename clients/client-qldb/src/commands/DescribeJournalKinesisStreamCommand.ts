// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeJournalKinesisStreamRequest, DescribeJournalKinesisStreamResponse } from "../models/models_0";
import {
  de_DescribeJournalKinesisStreamCommand,
  se_DescribeJournalKinesisStreamCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJournalKinesisStreamCommand}.
 */
export interface DescribeJournalKinesisStreamCommandInput extends DescribeJournalKinesisStreamRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJournalKinesisStreamCommand}.
 */
export interface DescribeJournalKinesisStreamCommandOutput
  extends DescribeJournalKinesisStreamResponse,
    __MetadataBearer {}

/**
 * <p>Returns detailed information about a given Amazon QLDB journal stream. The output
 *          includes the Amazon Resource Name (ARN), stream name, current status, creation time, and
 *          the parameters of the original stream creation request.</p>
 *          <p>This action does not return any expired journal streams. For more information, see
 *             <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/streams.create.html#streams.create.states.expiration">Expiration for terminal streams</a> in the <i>Amazon QLDB Developer
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, DescribeJournalKinesisStreamCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, DescribeJournalKinesisStreamCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const input = { // DescribeJournalKinesisStreamRequest
 *   LedgerName: "STRING_VALUE", // required
 *   StreamId: "STRING_VALUE", // required
 * };
 * const command = new DescribeJournalKinesisStreamCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJournalKinesisStreamResponse
 * //   Stream: { // JournalKinesisStreamDescription
 * //     LedgerName: "STRING_VALUE", // required
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     InclusiveStartTime: new Date("TIMESTAMP"),
 * //     ExclusiveEndTime: new Date("TIMESTAMP"),
 * //     RoleArn: "STRING_VALUE", // required
 * //     StreamId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE",
 * //     Status: "ACTIVE" || "COMPLETED" || "CANCELED" || "FAILED" || "IMPAIRED", // required
 * //     KinesisConfiguration: { // KinesisConfiguration
 * //       StreamArn: "STRING_VALUE", // required
 * //       AggregationEnabled: true || false,
 * //     },
 * //     ErrorCause: "KINESIS_STREAM_NOT_FOUND" || "IAM_PERMISSION_REVOKED",
 * //     StreamName: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJournalKinesisStreamCommandInput - {@link DescribeJournalKinesisStreamCommandInput}
 * @returns {@link DescribeJournalKinesisStreamCommandOutput}
 * @see {@link DescribeJournalKinesisStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeJournalKinesisStreamCommandOutput} for command's `response` shape.
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
export class DescribeJournalKinesisStreamCommand extends $Command
  .classBuilder<
    DescribeJournalKinesisStreamCommandInput,
    DescribeJournalKinesisStreamCommandOutput,
    QLDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QLDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonQLDB", "DescribeJournalKinesisStream", {})
  .n("QLDBClient", "DescribeJournalKinesisStreamCommand")
  .f(void 0, void 0)
  .ser(se_DescribeJournalKinesisStreamCommand)
  .de(de_DescribeJournalKinesisStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJournalKinesisStreamRequest;
      output: DescribeJournalKinesisStreamResponse;
    };
    sdk: {
      input: DescribeJournalKinesisStreamCommandInput;
      output: DescribeJournalKinesisStreamCommandOutput;
    };
  };
}
