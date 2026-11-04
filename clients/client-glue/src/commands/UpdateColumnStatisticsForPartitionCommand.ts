// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateColumnStatisticsForPartitionRequest,
  UpdateColumnStatisticsForPartitionResponse,
} from "../models/models_3";
import { UpdateColumnStatisticsForPartition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateColumnStatisticsForPartitionCommand}.
 */
export interface UpdateColumnStatisticsForPartitionCommandInput extends UpdateColumnStatisticsForPartitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateColumnStatisticsForPartitionCommand}.
 */
export interface UpdateColumnStatisticsForPartitionCommandOutput extends UpdateColumnStatisticsForPartitionResponse, __MetadataBearer {}

/**
 * Creates or updates partition statistics of columns.
 *
 * The Identity and Access Management (IAM) permission required for this operation is `UpdatePartition`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateColumnStatisticsForPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateColumnStatisticsForPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateColumnStatisticsForPartitionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionValues: [ // ValueStringList // required
 *     "STRING_VALUE",
 *   ],
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
 * const command = new UpdateColumnStatisticsForPartitionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateColumnStatisticsForPartitionResponse
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
 * @param UpdateColumnStatisticsForPartitionCommandInput - {@link UpdateColumnStatisticsForPartitionCommandInput}
 * @returns {@link UpdateColumnStatisticsForPartitionCommandOutput}
 * @see {@link UpdateColumnStatisticsForPartitionCommandInput} for command's `input` shape.
 * @see {@link UpdateColumnStatisticsForPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *
 * An encryption operation failed.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class UpdateColumnStatisticsForPartitionCommand extends command<UpdateColumnStatisticsForPartitionCommandInput, UpdateColumnStatisticsForPartitionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateColumnStatisticsForPartition",
  UpdateColumnStatisticsForPartition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateColumnStatisticsForPartitionRequest;
      output: UpdateColumnStatisticsForPartitionResponse;
    };
    sdk: {
      input: UpdateColumnStatisticsForPartitionCommandInput;
      output: UpdateColumnStatisticsForPartitionCommandOutput;
    };
  };
}
