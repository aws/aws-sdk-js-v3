// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDbClusterInput, DeleteDbClusterOutput } from "../models/models_0";
import { de_DeleteDbClusterCommand, se_DeleteDbClusterCommand } from "../protocols/Aws_json1_0";
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
 * <p>Deletes a Timestream for InfluxDB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, DeleteDbClusterCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, DeleteDbClusterCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // DeleteDbClusterInput
 *   dbClusterId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDbClusterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDbClusterOutput
 * //   dbClusterStatus: "CREATING" || "UPDATING" || "DELETING" || "AVAILABLE" || "FAILED" || "DELETED",
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
 * @public
 */
export class DeleteDbClusterCommand extends $Command
  .classBuilder<
    DeleteDbClusterCommandInput,
    DeleteDbClusterCommandOutput,
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
  .s("AmazonTimestreamInfluxDB", "DeleteDbCluster", {})
  .n("TimestreamInfluxDBClient", "DeleteDbClusterCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDbClusterCommand)
  .de(de_DeleteDbClusterCommand)
  .build() {
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
