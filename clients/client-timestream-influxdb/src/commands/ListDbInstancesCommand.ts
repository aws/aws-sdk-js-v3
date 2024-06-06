// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDbInstancesInput, ListDbInstancesOutput } from "../models/models_0";
import { de_ListDbInstancesCommand, se_ListDbInstancesCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link ListDbInstancesCommand}.
 */
export interface ListDbInstancesCommandInput extends ListDbInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListDbInstancesCommand}.
 */
export interface ListDbInstancesCommandOutput extends ListDbInstancesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of Timestream for InfluxDB DB instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, ListDbInstancesCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, ListDbInstancesCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // ListDbInstancesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDbInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListDbInstancesOutput
 * //   items: [ // DbInstanceSummaryList // required
 * //     { // DbInstanceSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       status: "CREATING" || "AVAILABLE" || "DELETING" || "MODIFYING" || "UPDATING" || "DELETED" || "FAILED",
 * //       endpoint: "STRING_VALUE",
 * //       dbInstanceType: "db.influx.medium" || "db.influx.large" || "db.influx.xlarge" || "db.influx.2xlarge" || "db.influx.4xlarge" || "db.influx.8xlarge" || "db.influx.12xlarge" || "db.influx.16xlarge",
 * //       dbStorageType: "InfluxIOIncludedT1" || "InfluxIOIncludedT2" || "InfluxIOIncludedT3",
 * //       allocatedStorage: Number("int"),
 * //       deploymentType: "SINGLE_AZ" || "WITH_MULTIAZ_STANDBY",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDbInstancesCommandInput - {@link ListDbInstancesCommandInput}
 * @returns {@link ListDbInstancesCommandOutput}
 * @see {@link ListDbInstancesCommandInput} for command's `input` shape.
 * @see {@link ListDbInstancesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListDbInstancesCommand extends $Command
  .classBuilder<
    ListDbInstancesCommandInput,
    ListDbInstancesCommandOutput,
    TimestreamInfluxDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TimestreamInfluxDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonTimestreamInfluxDB", "ListDbInstances", {})
  .n("TimestreamInfluxDBClient", "ListDbInstancesCommand")
  .f(void 0, void 0)
  .ser(se_ListDbInstancesCommand)
  .de(de_ListDbInstancesCommand)
  .build() {}
