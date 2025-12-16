// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDbClusterInput, UpdateDbClusterOutput } from "../models/models_0";
import { UpdateDbCluster$ } from "../schemas/schemas_0";
import type {
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
 * The input for {@link UpdateDbClusterCommand}.
 */
export interface UpdateDbClusterCommandInput extends UpdateDbClusterInput {}
/**
 * @public
 *
 * The output of {@link UpdateDbClusterCommand}.
 */
export interface UpdateDbClusterCommandOutput extends UpdateDbClusterOutput, __MetadataBearer {}

/**
 * <p>Updates a Timestream for InfluxDB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, UpdateDbClusterCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, UpdateDbClusterCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // UpdateDbClusterInput
 *   dbClusterId: "STRING_VALUE", // required
 *   logDeliveryConfiguration: { // LogDeliveryConfiguration
 *     s3Configuration: { // S3Configuration
 *       bucketName: "STRING_VALUE", // required
 *       enabled: true || false, // required
 *     },
 *   },
 *   dbParameterGroupIdentifier: "STRING_VALUE",
 *   port: Number("int"),
 *   dbInstanceType: "db.influx.medium" || "db.influx.large" || "db.influx.xlarge" || "db.influx.2xlarge" || "db.influx.4xlarge" || "db.influx.8xlarge" || "db.influx.12xlarge" || "db.influx.16xlarge" || "db.influx.24xlarge",
 *   failoverMode: "AUTOMATIC" || "NO_FAILOVER",
 * };
 * const command = new UpdateDbClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDbClusterOutput
 * //   dbClusterStatus: "CREATING" || "UPDATING" || "DELETING" || "AVAILABLE" || "FAILED" || "DELETED" || "MAINTENANCE" || "UPDATING_INSTANCE_TYPE" || "REBOOTING" || "REBOOT_FAILED" || "PARTIALLY_AVAILABLE",
 * // };
 *
 * ```
 *
 * @param UpdateDbClusterCommandInput - {@link UpdateDbClusterCommandInput}
 * @returns {@link UpdateDbClusterCommandOutput}
 * @see {@link UpdateDbClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateDbClusterCommandOutput} for command's `response` shape.
 * @see {@link TimestreamInfluxDBClientResolvedConfig | config} for TimestreamInfluxDBClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource in Timestream for InfluxDB.</p>
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
export class UpdateDbClusterCommand extends $Command
  .classBuilder<
    UpdateDbClusterCommandInput,
    UpdateDbClusterCommandOutput,
    TimestreamInfluxDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamInfluxDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonTimestreamInfluxDB", "UpdateDbCluster", {})
  .n("TimestreamInfluxDBClient", "UpdateDbClusterCommand")
  .sc(UpdateDbCluster$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDbClusterInput;
      output: UpdateDbClusterOutput;
    };
    sdk: {
      input: UpdateDbClusterCommandInput;
      output: UpdateDbClusterCommandOutput;
    };
  };
}
