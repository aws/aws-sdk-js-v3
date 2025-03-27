// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDbClustersInput, ListDbClustersOutput } from "../models/models_0";
import { de_ListDbClustersCommand, se_ListDbClustersCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link ListDbClustersCommand}.
 */
export interface ListDbClustersCommandInput extends ListDbClustersInput {}
/**
 * @public
 *
 * The output of {@link ListDbClustersCommand}.
 */
export interface ListDbClustersCommandOutput extends ListDbClustersOutput, __MetadataBearer {}

/**
 * <p>Returns a list of Timestream for InfluxDB DB clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, ListDbClustersCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, ListDbClustersCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // ListDbClustersInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDbClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListDbClustersOutput
 * //   items: [ // DbClusterSummaryList // required
 * //     { // DbClusterSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       status: "CREATING" || "UPDATING" || "DELETING" || "AVAILABLE" || "FAILED" || "DELETED",
 * //       endpoint: "STRING_VALUE",
 * //       readerEndpoint: "STRING_VALUE",
 * //       port: Number("int"),
 * //       deploymentType: "MULTI_NODE_READ_REPLICAS",
 * //       dbInstanceType: "db.influx.medium" || "db.influx.large" || "db.influx.xlarge" || "db.influx.2xlarge" || "db.influx.4xlarge" || "db.influx.8xlarge" || "db.influx.12xlarge" || "db.influx.16xlarge",
 * //       networkType: "IPV4" || "DUAL",
 * //       dbStorageType: "InfluxIOIncludedT1" || "InfluxIOIncludedT2" || "InfluxIOIncludedT3",
 * //       allocatedStorage: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDbClustersCommandInput - {@link ListDbClustersCommandInput}
 * @returns {@link ListDbClustersCommandOutput}
 * @see {@link ListDbClustersCommandInput} for command's `input` shape.
 * @see {@link ListDbClustersCommandOutput} for command's `response` shape.
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
export class ListDbClustersCommand extends $Command
  .classBuilder<
    ListDbClustersCommandInput,
    ListDbClustersCommandOutput,
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
  .s("AmazonTimestreamInfluxDB", "ListDbClusters", {})
  .n("TimestreamInfluxDBClient", "ListDbClustersCommand")
  .f(void 0, void 0)
  .ser(se_ListDbClustersCommand)
  .de(de_ListDbClustersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDbClustersInput;
      output: ListDbClustersOutput;
    };
    sdk: {
      input: ListDbClustersCommandInput;
      output: ListDbClustersCommandOutput;
    };
  };
}
