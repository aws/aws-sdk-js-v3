// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDbBackupsInput, ListDbBackupsOutput } from "../models/models_0";
import { ListDbBackups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDbBackupsCommand}.
 */
export interface ListDbBackupsCommandInput extends ListDbBackupsInput {}
/**
 * @public
 *
 * The output of {@link ListDbBackupsCommand}.
 */
export interface ListDbBackupsCommandOutput extends ListDbBackupsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of Timestream for InfluxDB backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, ListDbBackupsCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, ListDbBackupsCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // ListDbBackupsInput
 *   dbResourceId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDbBackupsCommand(input);
 * const response = await client.send(command);
 * // { // ListDbBackupsOutput
 * //   items: [ // DbBackupSummaryList // required
 * //     { // DbBackupSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE", // required
 * //       status: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "DELETING" || "DELETED",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       expiresAfter: "STRING_VALUE",
 * //       dbResourceId: "STRING_VALUE",
 * //       type: "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY" || "CUSTOM_SCHEDULE" || "ON_DEMAND" || "CONTINUOUS",
 * //       engineType: "INFLUXDB_V2" || "INFLUXDB_V3_CORE" || "INFLUXDB_V3_ENTERPRISE",
 * //       deploymentType: "SINGLE_AZ" || "WITH_MULTIAZ_STANDBY" || "MULTI_NODE_READ_REPLICAS",
 * //       kmsKeyId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDbBackupsCommandInput - {@link ListDbBackupsCommandInput}
 * @returns {@link ListDbBackupsCommandOutput}
 * @see {@link ListDbBackupsCommandInput} for command's `input` shape.
 * @see {@link ListDbBackupsCommandOutput} for command's `response` shape.
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
export class ListDbBackupsCommand extends command<ListDbBackupsCommandInput, ListDbBackupsCommandOutput>(
  _ep0,
  _mw0,
  "ListDbBackups",
  ListDbBackups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDbBackupsInput;
      output: ListDbBackupsOutput;
    };
    sdk: {
      input: ListDbBackupsCommandInput;
      output: ListDbBackupsCommandOutput;
    };
  };
}
