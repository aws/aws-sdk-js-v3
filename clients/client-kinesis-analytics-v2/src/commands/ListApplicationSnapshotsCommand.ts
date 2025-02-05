// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { ListApplicationSnapshotsRequest, ListApplicationSnapshotsResponse } from "../models/models_0";
import { de_ListApplicationSnapshotsCommand, se_ListApplicationSnapshotsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationSnapshotsCommand}.
 */
export interface ListApplicationSnapshotsCommandInput extends ListApplicationSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationSnapshotsCommand}.
 */
export interface ListApplicationSnapshotsCommandOutput extends ListApplicationSnapshotsResponse, __MetadataBearer {}

/**
 * <p>Lists information about the current application snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, ListApplicationSnapshotsCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, ListApplicationSnapshotsCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // ListApplicationSnapshotsRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationSnapshotsResponse
 * //   SnapshotSummaries: [ // SnapshotSummaries
 * //     { // SnapshotDetails
 * //       SnapshotName: "STRING_VALUE", // required
 * //       SnapshotStatus: "CREATING" || "READY" || "DELETING" || "FAILED", // required
 * //       ApplicationVersionId: Number("long"), // required
 * //       SnapshotCreationTimestamp: new Date("TIMESTAMP"),
 * //       RuntimeEnvironment: "SQL-1_0" || "FLINK-1_6" || "FLINK-1_8" || "ZEPPELIN-FLINK-1_0" || "FLINK-1_11" || "FLINK-1_13" || "ZEPPELIN-FLINK-2_0" || "FLINK-1_15" || "ZEPPELIN-FLINK-3_0" || "FLINK-1_18" || "FLINK-1_19" || "FLINK-1_20",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationSnapshotsCommandInput - {@link ListApplicationSnapshotsCommandInput}
 * @returns {@link ListApplicationSnapshotsCommandOutput}
 * @see {@link ListApplicationSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this
 *       operation. </p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 * @public
 */
export class ListApplicationSnapshotsCommand extends $Command
  .classBuilder<
    ListApplicationSnapshotsCommandInput,
    ListApplicationSnapshotsCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisAnalytics_20180523", "ListApplicationSnapshots", {})
  .n("KinesisAnalyticsV2Client", "ListApplicationSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationSnapshotsCommand)
  .de(de_ListApplicationSnapshotsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationSnapshotsRequest;
      output: ListApplicationSnapshotsResponse;
    };
    sdk: {
      input: ListApplicationSnapshotsCommandInput;
      output: ListApplicationSnapshotsCommandOutput;
    };
  };
}
