// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetColumnStatisticsForPartitionRequest, GetColumnStatisticsForPartitionResponse } from "../models/models_2";
import {
  de_GetColumnStatisticsForPartitionCommand,
  se_GetColumnStatisticsForPartitionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetColumnStatisticsForPartitionCommand}.
 */
export interface GetColumnStatisticsForPartitionCommandInput extends GetColumnStatisticsForPartitionRequest {}
/**
 * @public
 *
 * The output of {@link GetColumnStatisticsForPartitionCommand}.
 */
export interface GetColumnStatisticsForPartitionCommandOutput
  extends GetColumnStatisticsForPartitionResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves partition statistics of columns.</p>
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsForPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsForPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetColumnStatisticsForPartitionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionValues: [ // ValueStringList // required
 *     "STRING_VALUE",
 *   ],
 *   ColumnNames: [ // GetColumnNamesList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetColumnStatisticsForPartitionCommand(input);
 * const response = await client.send(command);
 * // { // GetColumnStatisticsForPartitionResponse
 * //   ColumnStatisticsList: [ // ColumnStatisticsList
 * //     { // ColumnStatistics
 * //       ColumnName: "STRING_VALUE", // required
 * //       ColumnType: "STRING_VALUE", // required
 * //       AnalyzedTime: new Date("TIMESTAMP"), // required
 * //       StatisticsData: { // ColumnStatisticsData
 * //         Type: "BOOLEAN" || "DATE" || "DECIMAL" || "DOUBLE" || "LONG" || "STRING" || "BINARY", // required
 * //         BooleanColumnStatisticsData: { // BooleanColumnStatisticsData
 * //           NumberOfTrues: Number("long"), // required
 * //           NumberOfFalses: Number("long"), // required
 * //           NumberOfNulls: Number("long"), // required
 * //         },
 * //         DateColumnStatisticsData: { // DateColumnStatisticsData
 * //           MinimumValue: new Date("TIMESTAMP"),
 * //           MaximumValue: new Date("TIMESTAMP"),
 * //           NumberOfNulls: Number("long"), // required
 * //           NumberOfDistinctValues: Number("long"), // required
 * //         },
 * //         DecimalColumnStatisticsData: { // DecimalColumnStatisticsData
 * //           MinimumValue: { // DecimalNumber
 * //             UnscaledValue: new Uint8Array(), // required
 * //             Scale: Number("int"), // required
 * //           },
 * //           MaximumValue: {
 * //             UnscaledValue: new Uint8Array(), // required
 * //             Scale: Number("int"), // required
 * //           },
 * //           NumberOfNulls: Number("long"), // required
 * //           NumberOfDistinctValues: Number("long"), // required
 * //         },
 * //         DoubleColumnStatisticsData: { // DoubleColumnStatisticsData
 * //           MinimumValue: Number("double"),
 * //           MaximumValue: Number("double"),
 * //           NumberOfNulls: Number("long"), // required
 * //           NumberOfDistinctValues: Number("long"), // required
 * //         },
 * //         LongColumnStatisticsData: { // LongColumnStatisticsData
 * //           MinimumValue: Number("long"),
 * //           MaximumValue: Number("long"),
 * //           NumberOfNulls: Number("long"), // required
 * //           NumberOfDistinctValues: Number("long"), // required
 * //         },
 * //         StringColumnStatisticsData: { // StringColumnStatisticsData
 * //           MaximumLength: Number("long"), // required
 * //           AverageLength: Number("double"), // required
 * //           NumberOfNulls: Number("long"), // required
 * //           NumberOfDistinctValues: Number("long"), // required
 * //         },
 * //         BinaryColumnStatisticsData: { // BinaryColumnStatisticsData
 * //           MaximumLength: Number("long"), // required
 * //           AverageLength: Number("double"), // required
 * //           NumberOfNulls: Number("long"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Errors: [ // ColumnErrors
 * //     { // ColumnError
 * //       ColumnName: "STRING_VALUE",
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
 * @param GetColumnStatisticsForPartitionCommandInput - {@link GetColumnStatisticsForPartitionCommandInput}
 * @returns {@link GetColumnStatisticsForPartitionCommandOutput}
 * @see {@link GetColumnStatisticsForPartitionCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsForPartitionCommandOutput} for command's `response` shape.
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
export class GetColumnStatisticsForPartitionCommand extends $Command
  .classBuilder<
    GetColumnStatisticsForPartitionCommandInput,
    GetColumnStatisticsForPartitionCommandOutput,
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
  .s("AWSGlue", "GetColumnStatisticsForPartition", {})
  .n("GlueClient", "GetColumnStatisticsForPartitionCommand")
  .f(void 0, void 0)
  .ser(se_GetColumnStatisticsForPartitionCommand)
  .de(de_GetColumnStatisticsForPartitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetColumnStatisticsForPartitionRequest;
      output: GetColumnStatisticsForPartitionResponse;
    };
    sdk: {
      input: GetColumnStatisticsForPartitionCommandInput;
      output: GetColumnStatisticsForPartitionCommandOutput;
    };
  };
}
