// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateColumnStatisticsForTableRequest, UpdateColumnStatisticsForTableResponse } from "../models/models_3";
import {
  de_UpdateColumnStatisticsForTableCommand,
  se_UpdateColumnStatisticsForTableCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateColumnStatisticsForTableCommand}.
 */
export interface UpdateColumnStatisticsForTableCommandInput extends UpdateColumnStatisticsForTableRequest {}
/**
 * @public
 *
 * The output of {@link UpdateColumnStatisticsForTableCommand}.
 */
export interface UpdateColumnStatisticsForTableCommandOutput
  extends UpdateColumnStatisticsForTableResponse,
    __MetadataBearer {}

/**
 * <p>Creates or updates table statistics of columns.</p>
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateColumnStatisticsForTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateColumnStatisticsForTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // UpdateColumnStatisticsForTableRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   ColumnStatisticsList: [ // UpdateColumnStatisticsList // required
 *     { // ColumnStatistics
 *       ColumnName: "STRING_VALUE", // required
 *       ColumnType: "STRING_VALUE", // required
 *       AnalyzedTime: new Date("TIMESTAMP"), // required
 *       StatisticsData: { // ColumnStatisticsData
 *         Type: "BOOLEAN" || "DATE" || "DECIMAL" || "DOUBLE" || "LONG" || "STRING" || "BINARY", // required
 *         BooleanColumnStatisticsData: { // BooleanColumnStatisticsData
 *           NumberOfTrues: Number("long"), // required
 *           NumberOfFalses: Number("long"), // required
 *           NumberOfNulls: Number("long"), // required
 *         },
 *         DateColumnStatisticsData: { // DateColumnStatisticsData
 *           MinimumValue: new Date("TIMESTAMP"),
 *           MaximumValue: new Date("TIMESTAMP"),
 *           NumberOfNulls: Number("long"), // required
 *           NumberOfDistinctValues: Number("long"), // required
 *         },
 *         DecimalColumnStatisticsData: { // DecimalColumnStatisticsData
 *           MinimumValue: { // DecimalNumber
 *             UnscaledValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")             // required
 *             Scale: Number("int"), // required
 *           },
 *           MaximumValue: {
 *             UnscaledValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")             // required
 *             Scale: Number("int"), // required
 *           },
 *           NumberOfNulls: Number("long"), // required
 *           NumberOfDistinctValues: Number("long"), // required
 *         },
 *         DoubleColumnStatisticsData: { // DoubleColumnStatisticsData
 *           MinimumValue: Number("double"),
 *           MaximumValue: Number("double"),
 *           NumberOfNulls: Number("long"), // required
 *           NumberOfDistinctValues: Number("long"), // required
 *         },
 *         LongColumnStatisticsData: { // LongColumnStatisticsData
 *           MinimumValue: Number("long"),
 *           MaximumValue: Number("long"),
 *           NumberOfNulls: Number("long"), // required
 *           NumberOfDistinctValues: Number("long"), // required
 *         },
 *         StringColumnStatisticsData: { // StringColumnStatisticsData
 *           MaximumLength: Number("long"), // required
 *           AverageLength: Number("double"), // required
 *           NumberOfNulls: Number("long"), // required
 *           NumberOfDistinctValues: Number("long"), // required
 *         },
 *         BinaryColumnStatisticsData: { // BinaryColumnStatisticsData
 *           MaximumLength: Number("long"), // required
 *           AverageLength: Number("double"), // required
 *           NumberOfNulls: Number("long"), // required
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateColumnStatisticsForTableCommand(input);
 * const response = await client.send(command);
 * // { // UpdateColumnStatisticsForTableResponse
 * //   Errors: [ // ColumnStatisticsErrors
 * //     { // ColumnStatisticsError
 * //       ColumnStatistics: { // ColumnStatistics
 * //         ColumnName: "STRING_VALUE", // required
 * //         ColumnType: "STRING_VALUE", // required
 * //         AnalyzedTime: new Date("TIMESTAMP"), // required
 * //         StatisticsData: { // ColumnStatisticsData
 * //           Type: "BOOLEAN" || "DATE" || "DECIMAL" || "DOUBLE" || "LONG" || "STRING" || "BINARY", // required
 * //           BooleanColumnStatisticsData: { // BooleanColumnStatisticsData
 * //             NumberOfTrues: Number("long"), // required
 * //             NumberOfFalses: Number("long"), // required
 * //             NumberOfNulls: Number("long"), // required
 * //           },
 * //           DateColumnStatisticsData: { // DateColumnStatisticsData
 * //             MinimumValue: new Date("TIMESTAMP"),
 * //             MaximumValue: new Date("TIMESTAMP"),
 * //             NumberOfNulls: Number("long"), // required
 * //             NumberOfDistinctValues: Number("long"), // required
 * //           },
 * //           DecimalColumnStatisticsData: { // DecimalColumnStatisticsData
 * //             MinimumValue: { // DecimalNumber
 * //               UnscaledValue: new Uint8Array(), // required
 * //               Scale: Number("int"), // required
 * //             },
 * //             MaximumValue: {
 * //               UnscaledValue: new Uint8Array(), // required
 * //               Scale: Number("int"), // required
 * //             },
 * //             NumberOfNulls: Number("long"), // required
 * //             NumberOfDistinctValues: Number("long"), // required
 * //           },
 * //           DoubleColumnStatisticsData: { // DoubleColumnStatisticsData
 * //             MinimumValue: Number("double"),
 * //             MaximumValue: Number("double"),
 * //             NumberOfNulls: Number("long"), // required
 * //             NumberOfDistinctValues: Number("long"), // required
 * //           },
 * //           LongColumnStatisticsData: { // LongColumnStatisticsData
 * //             MinimumValue: Number("long"),
 * //             MaximumValue: Number("long"),
 * //             NumberOfNulls: Number("long"), // required
 * //             NumberOfDistinctValues: Number("long"), // required
 * //           },
 * //           StringColumnStatisticsData: { // StringColumnStatisticsData
 * //             MaximumLength: Number("long"), // required
 * //             AverageLength: Number("double"), // required
 * //             NumberOfNulls: Number("long"), // required
 * //             NumberOfDistinctValues: Number("long"), // required
 * //           },
 * //           BinaryColumnStatisticsData: { // BinaryColumnStatisticsData
 * //             MaximumLength: Number("long"), // required
 * //             AverageLength: Number("double"), // required
 * //             NumberOfNulls: Number("long"), // required
 * //           },
 * //         },
 * //       },
 * //       Error: { // ErrorDetail
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateColumnStatisticsForTableCommandInput - {@link UpdateColumnStatisticsForTableCommandInput}
 * @returns {@link UpdateColumnStatisticsForTableCommandOutput}
 * @see {@link UpdateColumnStatisticsForTableCommandInput} for command's `input` shape.
 * @see {@link UpdateColumnStatisticsForTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
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
export class UpdateColumnStatisticsForTableCommand extends $Command
  .classBuilder<
    UpdateColumnStatisticsForTableCommandInput,
    UpdateColumnStatisticsForTableCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "UpdateColumnStatisticsForTable", {})
  .n("GlueClient", "UpdateColumnStatisticsForTableCommand")
  .f(void 0, void 0)
  .ser(se_UpdateColumnStatisticsForTableCommand)
  .de(de_UpdateColumnStatisticsForTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateColumnStatisticsForTableRequest;
      output: UpdateColumnStatisticsForTableResponse;
    };
    sdk: {
      input: UpdateColumnStatisticsForTableCommandInput;
      output: UpdateColumnStatisticsForTableCommandOutput;
    };
  };
}
