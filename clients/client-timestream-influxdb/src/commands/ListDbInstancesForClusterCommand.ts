// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDbInstancesForClusterInput, ListDbInstancesForClusterOutput } from "../models/models_0";
import { ListDbInstancesForCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDbInstancesForClusterCommand}.
 */
export interface ListDbInstancesForClusterCommandInput extends ListDbInstancesForClusterInput {}
/**
 * @public
 *
 * The output of {@link ListDbInstancesForClusterCommand}.
 */
export interface ListDbInstancesForClusterCommandOutput extends ListDbInstancesForClusterOutput, __MetadataBearer {}

/**
 * Returns a list of Timestream for InfluxDB clusters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, ListDbInstancesForClusterCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, ListDbInstancesForClusterCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // ListDbInstancesForClusterInput
 *   dbClusterId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDbInstancesForClusterCommand(input);
 * const response = await client.send(command);
 * // { // ListDbInstancesForClusterOutput
 * //   items: [ // DbInstanceForClusterSummaryList // required
 * //     { // DbInstanceForClusterSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       status: "CREATING" || "AVAILABLE" || "DELETING" || "MODIFYING" || "UPDATING" || "DELETED" || "FAILED" || "UPDATING_DEPLOYMENT_TYPE" || "UPDATING_INSTANCE_TYPE" || "MAINTENANCE" || "REBOOTING" || "REBOOT_FAILED" || "RESTORING" || "RESTORE_FAILED",
 * //       endpoint: "STRING_VALUE",
 * //       port: Number("int"),
 * //       networkType: "IPV4" || "DUAL",
 * //       dbInstanceType: "db.influx.medium" || "db.influx.large" || "db.influx.xlarge" || "db.influx.2xlarge" || "db.influx.4xlarge" || "db.influx.8xlarge" || "db.influx.12xlarge" || "db.influx.16xlarge" || "db.influx.24xlarge",
 * //       dbStorageType: "InfluxIOIncludedT1" || "InfluxIOIncludedT2" || "InfluxIOIncludedT3",
 * //       allocatedStorage: Number("int"),
 * //       deploymentType: "SINGLE_AZ" || "WITH_MULTIAZ_STANDBY",
 * //       instanceMode: "PRIMARY" || "STANDBY" || "REPLICA" || "INGEST" || "QUERY" || "COMPACT" || "PROCESS",
 * //       instanceModes: [ // InstanceModeList
 * //         "PRIMARY" || "STANDBY" || "REPLICA" || "INGEST" || "QUERY" || "COMPACT" || "PROCESS",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDbInstancesForClusterCommandInput - {@link ListDbInstancesForClusterCommandInput}
 * @returns {@link ListDbInstancesForClusterCommandOutput}
 * @see {@link ListDbInstancesForClusterCommandInput} for command's `input` shape.
 * @see {@link ListDbInstancesForClusterCommandOutput} for command's `response` shape.
 * @see {@link TimestreamInfluxDBClientResolvedConfig | config} for TimestreamInfluxDBClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found or does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Timestream for InfluxDB.
 *
 * @throws {@link TimestreamInfluxDBServiceException}
 *
 * Base exception class for all service exceptions from TimestreamInfluxDB service.
 *
 * @public
 */
export class ListDbInstancesForClusterCommand extends command<ListDbInstancesForClusterCommandInput, ListDbInstancesForClusterCommandOutput>(
  _ep0,
  _mw0,
  "ListDbInstancesForCluster",
  ListDbInstancesForCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDbInstancesForClusterInput;
      output: ListDbInstancesForClusterOutput;
    };
    sdk: {
      input: ListDbInstancesForClusterCommandInput;
      output: ListDbInstancesForClusterCommandOutput;
    };
  };
}
