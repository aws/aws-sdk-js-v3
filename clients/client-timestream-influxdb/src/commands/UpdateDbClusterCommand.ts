// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDbClusterInput, UpdateDbClusterOutput } from "../models/models_0";
import { UpdateDbCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a Timestream for InfluxDB cluster.
 *
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
 *   deploymentConfiguration: { // DeploymentConfiguration Union: only one key present
 *     InfluxDBv3Enterprise: { // InfluxDBv3EnterpriseDeploymentConfiguration
 *       nodeGroups: [ // NodeGroupList // required
 *         { // NodeGroup
 *           instanceModes: [ // InstanceModeList // required
 *             "PRIMARY" || "STANDBY" || "REPLICA" || "INGEST" || "QUERY" || "COMPACT" || "PROCESS",
 *           ],
 *           instanceType: "db.influx.medium" || "db.influx.large" || "db.influx.xlarge" || "db.influx.2xlarge" || "db.influx.4xlarge" || "db.influx.8xlarge" || "db.influx.12xlarge" || "db.influx.16xlarge" || "db.influx.24xlarge", // required
 *           count: Number("int"), // required
 *         },
 *       ],
 *     },
 *   },
 *   failoverMode: "AUTOMATIC" || "NO_FAILOVER",
 *   maintenanceSchedule: { // MaintenanceSchedule
 *     timezone: "STRING_VALUE", // required
 *     preferredMaintenanceWindow: "STRING_VALUE", // required
 *   },
 *   dbBackupConfigurations: [ // DbBackupConfigurationInputList
 *     { // DbBackupConfiguration
 *       type: "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY" || "CUSTOM_SCHEDULE" || "CONTINUOUS", // required
 *       retentionDays: Number("int"), // required
 *       enabled: true || false, // required
 *       customSchedule: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateDbClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDbClusterOutput
 * //   dbClusterStatus: "CREATING" || "UPDATING" || "DELETING" || "AVAILABLE" || "FAILED" || "DELETED" || "MAINTENANCE" || "UPDATING_INSTANCE_TYPE" || "REBOOTING" || "REBOOT_FAILED" || "PARTIALLY_AVAILABLE" || "RESTORING" || "RESTORE_FAILED",
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with an existing resource in Timestream for InfluxDB.
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
export class UpdateDbClusterCommand extends command<UpdateDbClusterCommandInput, UpdateDbClusterCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDbCluster",
  UpdateDbCluster$
) {
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
