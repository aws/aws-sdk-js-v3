// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  GetColumnStatisticsTaskSettingsRequest,
  GetColumnStatisticsTaskSettingsResponse,
} from "../models/models_1";
import { GetColumnStatisticsTaskSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetColumnStatisticsTaskSettingsCommand}.
 */
export interface GetColumnStatisticsTaskSettingsCommandInput extends GetColumnStatisticsTaskSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetColumnStatisticsTaskSettingsCommand}.
 */
export interface GetColumnStatisticsTaskSettingsCommandOutput extends GetColumnStatisticsTaskSettingsResponse, __MetadataBearer {}

/**
 * <p>Gets settings for a column statistics task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsTaskSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsTaskSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetColumnStatisticsTaskSettingsRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new GetColumnStatisticsTaskSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetColumnStatisticsTaskSettingsResponse
 * //   ColumnStatisticsTaskSettings: { // ColumnStatisticsTaskSettings
 * //     DatabaseName: "STRING_VALUE",
 * //     TableName: "STRING_VALUE",
 * //     Schedule: { // Schedule
 * //       ScheduleExpression: "STRING_VALUE",
 * //       State: "SCHEDULED" || "NOT_SCHEDULED" || "TRANSITIONING",
 * //     },
 * //     ColumnNameList: [ // ColumnNameList
 * //       "STRING_VALUE",
 * //     ],
 * //     CatalogID: "STRING_VALUE",
 * //     Role: "STRING_VALUE",
 * //     SampleSize: Number("double"),
 * //     SecurityConfiguration: "STRING_VALUE",
 * //     ScheduleType: "CRON" || "AUTO",
 * //     SettingSource: "CATALOG" || "TABLE",
 * //     LastExecutionAttempt: { // ExecutionAttempt
 * //       Status: "FAILED" || "STARTED",
 * //       ColumnStatisticsTaskRunId: "STRING_VALUE",
 * //       ExecutionTimestamp: new Date("TIMESTAMP"),
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetColumnStatisticsTaskSettingsCommandInput - {@link GetColumnStatisticsTaskSettingsCommandInput}
 * @returns {@link GetColumnStatisticsTaskSettingsCommandOutput}
 * @see {@link GetColumnStatisticsTaskSettingsCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsTaskSettingsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetColumnStatisticsTaskSettingsCommand extends $Command
  .classBuilder<
    GetColumnStatisticsTaskSettingsCommandInput,
    GetColumnStatisticsTaskSettingsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetColumnStatisticsTaskSettings", {})
  .n("GlueClient", "GetColumnStatisticsTaskSettingsCommand")
  .sc(GetColumnStatisticsTaskSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetColumnStatisticsTaskSettingsRequest;
      output: GetColumnStatisticsTaskSettingsResponse;
    };
    sdk: {
      input: GetColumnStatisticsTaskSettingsCommandInput;
      output: GetColumnStatisticsTaskSettingsCommandOutput;
    };
  };
}
