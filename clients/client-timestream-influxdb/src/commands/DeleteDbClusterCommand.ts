// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDbClusterInput, DeleteDbClusterOutput } from "../models/models_0";
import { DeleteDbCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDbClusterCommand}.
 */
export interface DeleteDbClusterCommandInput extends DeleteDbClusterInput {}
/**
 * @public
 *
 * The output of {@link DeleteDbClusterCommand}.
 */
export interface DeleteDbClusterCommandOutput extends DeleteDbClusterOutput, __MetadataBearer {}

/**
 * Deletes a Timestream for InfluxDB cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, DeleteDbClusterCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, DeleteDbClusterCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // DeleteDbClusterInput
 *   dbClusterId: "STRING_VALUE", // required
 *   retainAutomatedBackups: true || false,
 * };
 * const command = new DeleteDbClusterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDbClusterOutput
 * //   dbClusterStatus: "CREATING" || "UPDATING" || "DELETING" || "AVAILABLE" || "FAILED" || "DELETED" || "MAINTENANCE" || "UPDATING_INSTANCE_TYPE" || "REBOOTING" || "REBOOT_FAILED" || "PARTIALLY_AVAILABLE" || "RESTORING" || "RESTORE_FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteDbClusterCommandInput - {@link DeleteDbClusterCommandInput}
 * @returns {@link DeleteDbClusterCommandOutput}
 * @see {@link DeleteDbClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteDbClusterCommandOutput} for command's `response` shape.
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
export class DeleteDbClusterCommand extends command<DeleteDbClusterCommandInput, DeleteDbClusterCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDbCluster",
  DeleteDbCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDbClusterInput;
      output: DeleteDbClusterOutput;
    };
    sdk: {
      input: DeleteDbClusterCommandInput;
      output: DeleteDbClusterCommandOutput;
    };
  };
}
