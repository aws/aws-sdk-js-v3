// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DescribeStreamSummaryInput, DescribeStreamSummaryOutput } from "../models/models_0";
import { DescribeStreamSummary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStreamSummaryCommand}.
 */
export interface DescribeStreamSummaryCommandInput extends DescribeStreamSummaryInput {}
/**
 * @public
 *
 * The output of {@link DescribeStreamSummaryCommand}.
 */
export interface DescribeStreamSummaryCommandOutput extends DescribeStreamSummaryOutput, __MetadataBearer {}

/**
 * <p>Provides a summarized description of the specified Kinesis data stream without the
 *             shard list.</p>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the
 *                     <code>StreamName</code> parameter, or both. It is recommended that you use the
 *                     <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 *          <p>The information returned includes the stream name, Amazon Resource Name (ARN), status,
 *             record retention period, approximate creation time, monitoring, encryption details, and
 *             open shard count. </p>
 *          <p>
 *             <a>DescribeStreamSummary</a> has a limit of 20 transactions per second per
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeStreamSummaryCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DescribeStreamSummaryCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // DescribeStreamSummaryInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DescribeStreamSummaryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStreamSummaryOutput
 * //   StreamDescriptionSummary: { // StreamDescriptionSummary
 * //     StreamName: "STRING_VALUE", // required
 * //     StreamARN: "STRING_VALUE", // required
 * //     StreamStatus: "CREATING" || "DELETING" || "ACTIVE" || "UPDATING", // required
 * //     StreamModeDetails: { // StreamModeDetails
 * //       StreamMode: "PROVISIONED" || "ON_DEMAND", // required
 * //     },
 * //     RetentionPeriodHours: Number("int"), // required
 * //     StreamCreationTimestamp: new Date("TIMESTAMP"), // required
 * //     EnhancedMonitoring: [ // EnhancedMonitoringList // required
 * //       { // EnhancedMetrics
 * //         ShardLevelMetrics: [ // MetricsNameList
 * //           "IncomingBytes" || "IncomingRecords" || "OutgoingBytes" || "OutgoingRecords" || "WriteProvisionedThroughputExceeded" || "ReadProvisionedThroughputExceeded" || "IteratorAgeMilliseconds" || "ALL",
 * //         ],
 * //       },
 * //     ],
 * //     EncryptionType: "NONE" || "KMS",
 * //     KeyId: "STRING_VALUE",
 * //     OpenShardCount: Number("int"), // required
 * //     ConsumerCount: Number("int"),
 * //     WarmThroughput: { // WarmThroughputObject
 * //       TargetMiBps: Number("int"),
 * //       CurrentMiBps: Number("int"),
 * //     },
 * //     MaxRecordSizeInKiB: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStreamSummaryCommandInput - {@link DescribeStreamSummaryCommandInput}
 * @returns {@link DescribeStreamSummaryCommandOutput}
 * @see {@link DescribeStreamSummaryCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamSummaryCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class DescribeStreamSummaryCommand extends $Command
  .classBuilder<
    DescribeStreamSummaryCommandInput,
    DescribeStreamSummaryCommandOutput,
    KinesisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    OperationType: { type: "staticContextParams", value: `control` },
    StreamARN: { type: "contextParams", name: "StreamARN" },
  })
  .m(function (this: any, Command: any, cs: any, config: KinesisClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kinesis_20131202", "DescribeStreamSummary", {})
  .n("KinesisClient", "DescribeStreamSummaryCommand")
  .sc(DescribeStreamSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStreamSummaryInput;
      output: DescribeStreamSummaryOutput;
    };
    sdk: {
      input: DescribeStreamSummaryCommandInput;
      output: DescribeStreamSummaryCommandOutput;
    };
  };
}
