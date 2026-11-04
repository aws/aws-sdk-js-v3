// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RebootDbClusterInput, RebootDbClusterOutput } from "../models/models_0";
import { RebootDbCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RebootDbClusterCommand}.
 */
export interface RebootDbClusterCommandInput extends RebootDbClusterInput {}
/**
 * @public
 *
 * The output of {@link RebootDbClusterCommand}.
 */
export interface RebootDbClusterCommandOutput extends RebootDbClusterOutput, __MetadataBearer {}

/**
 * Reboots a Timestream for InfluxDB cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, RebootDbClusterCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, RebootDbClusterCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // RebootDbClusterInput
 *   dbClusterId: "STRING_VALUE", // required
 *   instanceIds: [ // DbInstanceIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RebootDbClusterCommand(input);
 * const response = await client.send(command);
 * // { // RebootDbClusterOutput
 * //   dbClusterStatus: "CREATING" || "UPDATING" || "DELETING" || "AVAILABLE" || "FAILED" || "DELETED" || "MAINTENANCE" || "UPDATING_INSTANCE_TYPE" || "REBOOTING" || "REBOOT_FAILED" || "PARTIALLY_AVAILABLE" || "RESTORING" || "RESTORE_FAILED",
 * // };
 *
 * ```
 *
 * @param RebootDbClusterCommandInput - {@link RebootDbClusterCommandInput}
 * @returns {@link RebootDbClusterCommandOutput}
 * @see {@link RebootDbClusterCommandInput} for command's `input` shape.
 * @see {@link RebootDbClusterCommandOutput} for command's `response` shape.
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
export class RebootDbClusterCommand extends command<RebootDbClusterCommandInput, RebootDbClusterCommandOutput>(
  _ep0,
  _mw0,
  "RebootDbCluster",
  RebootDbCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RebootDbClusterInput;
      output: RebootDbClusterOutput;
    };
    sdk: {
      input: RebootDbClusterCommandInput;
      output: RebootDbClusterCommandOutput;
    };
  };
}
