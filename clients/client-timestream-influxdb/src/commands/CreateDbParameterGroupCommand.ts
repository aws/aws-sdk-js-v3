// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDbParameterGroupInput, CreateDbParameterGroupOutput } from "../models/models_0";
import { de_CreateDbParameterGroupCommand, se_CreateDbParameterGroupCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link CreateDbParameterGroupCommand}.
 */
export interface CreateDbParameterGroupCommandInput extends CreateDbParameterGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateDbParameterGroupCommand}.
 */
export interface CreateDbParameterGroupCommandOutput extends CreateDbParameterGroupOutput, __MetadataBearer {}

/**
 * <p>Creates a new Timestream for InfluxDB DB parameter group to associate with DB instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, CreateDbParameterGroupCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, CreateDbParameterGroupCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // CreateDbParameterGroupInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   parameters: { // Parameters Union: only one key present
 *     InfluxDBv2: { // InfluxDBv2Parameters
 *       fluxLogEnabled: true || false,
 *       logLevel: "debug" || "info" || "error",
 *       noTasks: true || false,
 *       queryConcurrency: Number("int"),
 *       queryQueueSize: Number("int"),
 *       tracingType: "log" || "jaeger",
 *       metricsDisabled: true || false,
 *     },
 *   },
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDbParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDbParameterGroupOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   parameters: { // Parameters Union: only one key present
 * //     InfluxDBv2: { // InfluxDBv2Parameters
 * //       fluxLogEnabled: true || false,
 * //       logLevel: "debug" || "info" || "error",
 * //       noTasks: true || false,
 * //       queryConcurrency: Number("int"),
 * //       queryQueueSize: Number("int"),
 * //       tracingType: "log" || "jaeger",
 * //       metricsDisabled: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDbParameterGroupCommandInput - {@link CreateDbParameterGroupCommandInput}
 * @returns {@link CreateDbParameterGroupCommandOutput}
 * @see {@link CreateDbParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDbParameterGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds the service quota.</p>
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
export class CreateDbParameterGroupCommand extends $Command
  .classBuilder<
    CreateDbParameterGroupCommandInput,
    CreateDbParameterGroupCommandOutput,
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
  .s("AmazonTimestreamInfluxDB", "CreateDbParameterGroup", {})
  .n("TimestreamInfluxDBClient", "CreateDbParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateDbParameterGroupCommand)
  .de(de_CreateDbParameterGroupCommand)
  .build() {}
