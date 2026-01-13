// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RebootDbClusterInput, RebootDbClusterOutput } from "../models/models_0";
import { RebootDbCluster$ } from "../schemas/schemas_0";
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
 * <p>Reboots a Timestream for InfluxDB cluster.</p>
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
 * //   dbClusterStatus: "CREATING" || "UPDATING" || "DELETING" || "AVAILABLE" || "FAILED" || "DELETED" || "MAINTENANCE" || "UPDATING_INSTANCE_TYPE" || "REBOOTING" || "REBOOT_FAILED" || "PARTIALLY_AVAILABLE",
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
export class RebootDbClusterCommand extends $Command
  .classBuilder<
    RebootDbClusterCommandInput,
    RebootDbClusterCommandOutput,
    TimestreamInfluxDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamInfluxDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonTimestreamInfluxDB", "RebootDbCluster", {})
  .n("TimestreamInfluxDBClient", "RebootDbClusterCommand")
  .sc(RebootDbCluster$)
  .build() {
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
