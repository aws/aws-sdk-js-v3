// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDbInstancesInput, ListDbInstancesOutput } from "../models/models_0";
import { ListDbInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of Timestream for InfluxDB DB instances.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, ListDbInstancesCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, ListDbInstancesCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
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
 * //       status: "CREATING" || "AVAILABLE" || "DELETING" || "MODIFYING" || "UPDATING" || "DELETED" || "FAILED" || "UPDATING_DEPLOYMENT_TYPE" || "UPDATING_INSTANCE_TYPE" || "MAINTENANCE" || "REBOOTING" || "REBOOT_FAILED" || "RESTORING" || "RESTORE_FAILED",
 * //       endpoint: "STRING_VALUE",
 * //       port: Number("int"),
 * //       networkType: "IPV4" || "DUAL",
 * //       dbInstanceType: "db.influx.medium" || "db.influx.large" || "db.influx.xlarge" || "db.influx.2xlarge" || "db.influx.4xlarge" || "db.influx.8xlarge" || "db.influx.12xlarge" || "db.influx.16xlarge" || "db.influx.24xlarge",
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
export class ListDbInstancesCommand extends command<ListDbInstancesCommandInput, ListDbInstancesCommandOutput>(
  _ep0,
  _mw0,
  "ListDbInstances",
  ListDbInstances$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDbInstancesInput;
      output: ListDbInstancesOutput;
    };
    sdk: {
      input: ListDbInstancesCommandInput;
      output: ListDbInstancesCommandOutput;
    };
  };
}
