// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDbParameterGroupInput, GetDbParameterGroupOutput } from "../models/models_0";
import { de_GetDbParameterGroupCommand, se_GetDbParameterGroupCommand } from "../protocols/Aws_json1_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  TimestreamInfluxDBClientResolvedConfig,
} from "../TimestreamInfluxDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDbParameterGroupCommand}.
 */
export interface GetDbParameterGroupCommandInput extends GetDbParameterGroupInput {}
/**
 * @public
 *
 * The output of {@link GetDbParameterGroupCommand}.
 */
export interface GetDbParameterGroupCommandOutput extends GetDbParameterGroupOutput, __MetadataBearer {}

/**
 * <p>Returns a Timestream for InfluxDB DB parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, GetDbParameterGroupCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, GetDbParameterGroupCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // GetDbParameterGroupInput
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetDbParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetDbParameterGroupOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   parameters: { // Parameters Union: only one key present
 * //     InfluxDBv2: { // InfluxDBv2Parameters
 * //       fluxLogEnabled: true || false,
 * //       logLevel: "debug" || "info" || "error",
 * //       noTasks: true || false,
 * //       queryConcurrency: Number("int"),
 * //       queryQueueSize: Number("int"),
 * //       tracingType: "log" || "jaeger",
 * //       metricsDisabled: true || false,
 * //       httpIdleTimeout: { // Duration
 * //         durationType: "hours" || "minutes" || "seconds" || "milliseconds", // required
 * //         value: Number("long"), // required
 * //       },
 * //       httpReadHeaderTimeout: {
 * //         durationType: "hours" || "minutes" || "seconds" || "milliseconds", // required
 * //         value: Number("long"), // required
 * //       },
 * //       httpReadTimeout: {
 * //         durationType: "hours" || "minutes" || "seconds" || "milliseconds", // required
 * //         value: Number("long"), // required
 * //       },
 * //       httpWriteTimeout: {
 * //         durationType: "hours" || "minutes" || "seconds" || "milliseconds", // required
 * //         value: Number("long"), // required
 * //       },
 * //       influxqlMaxSelectBuckets: Number("long"),
 * //       influxqlMaxSelectPoint: Number("long"),
 * //       influxqlMaxSelectSeries: Number("long"),
 * //       pprofDisabled: true || false,
 * //       queryInitialMemoryBytes: Number("long"),
 * //       queryMaxMemoryBytes: Number("long"),
 * //       queryMemoryBytes: Number("long"),
 * //       sessionLength: Number("int"),
 * //       sessionRenewDisabled: true || false,
 * //       storageCacheMaxMemorySize: Number("long"),
 * //       storageCacheSnapshotMemorySize: Number("long"),
 * //       storageCacheSnapshotWriteColdDuration: {
 * //         durationType: "hours" || "minutes" || "seconds" || "milliseconds", // required
 * //         value: Number("long"), // required
 * //       },
 * //       storageCompactFullWriteColdDuration: "<Duration>",
 * //       storageCompactThroughputBurst: Number("long"),
 * //       storageMaxConcurrentCompactions: Number("int"),
 * //       storageMaxIndexLogFileSize: Number("long"),
 * //       storageNoValidateFieldSize: true || false,
 * //       storageRetentionCheckInterval: "<Duration>",
 * //       storageSeriesFileMaxConcurrentSnapshotCompactions: Number("int"),
 * //       storageSeriesIdSetCacheSize: Number("long"),
 * //       storageWalMaxConcurrentWrites: Number("int"),
 * //       storageWalMaxWriteDelay: "<Duration>",
 * //       uiDisabled: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDbParameterGroupCommandInput - {@link GetDbParameterGroupCommandInput}
 * @returns {@link GetDbParameterGroupCommandOutput}
 * @see {@link GetDbParameterGroupCommandInput} for command's `input` shape.
 * @see {@link GetDbParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link TimestreamInfluxDBClientResolvedConfig | config} for TimestreamInfluxDBClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found or does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Timestream for InfluxDB.</p>
 *
 * @throws {@link TimestreamInfluxDBServiceException}
 * <p>Base exception class for all service exceptions from TimestreamInfluxDB service.</p>
 *
 *
 * @public
 */
export class GetDbParameterGroupCommand extends $Command
  .classBuilder<
    GetDbParameterGroupCommandInput,
    GetDbParameterGroupCommandOutput,
    TimestreamInfluxDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamInfluxDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonTimestreamInfluxDB", "GetDbParameterGroup", {})
  .n("TimestreamInfluxDBClient", "GetDbParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetDbParameterGroupCommand)
  .de(de_GetDbParameterGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDbParameterGroupInput;
      output: GetDbParameterGroupOutput;
    };
    sdk: {
      input: GetDbParameterGroupCommandInput;
      output: GetDbParameterGroupCommandOutput;
    };
  };
}
