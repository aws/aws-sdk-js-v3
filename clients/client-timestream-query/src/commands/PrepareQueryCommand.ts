// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PrepareQueryRequest, PrepareQueryResponse } from "../models/models_0";
import { PrepareQuery$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  TimestreamQueryClientResolvedConfig,
} from "../TimestreamQueryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PrepareQueryCommand}.
 */
export interface PrepareQueryCommandInput extends PrepareQueryRequest {}
/**
 * @public
 *
 * The output of {@link PrepareQueryCommand}.
 */
export interface PrepareQueryCommandOutput extends PrepareQueryResponse, __MetadataBearer {}

/**
 * <p>A synchronous operation that allows you to submit a query with parameters to be stored
 *             by Timestream for later running. Timestream only supports using this operation with
 *                 <code>ValidateOnly</code> set to <code>true</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, PrepareQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, PrepareQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * // import type { TimestreamQueryClientConfig } from "@aws-sdk/client-timestream-query";
 * const config = {}; // type is TimestreamQueryClientConfig
 * const client = new TimestreamQueryClient(config);
 * const input = { // PrepareQueryRequest
 *   QueryString: "STRING_VALUE", // required
 *   ValidateOnly: true || false,
 * };
 * const command = new PrepareQueryCommand(input);
 * const response = await client.send(command);
 * // { // PrepareQueryResponse
 * //   QueryString: "STRING_VALUE", // required
 * //   Columns: [ // SelectColumnList // required
 * //     { // SelectColumn
 * //       Name: "STRING_VALUE",
 * //       Type: { // Type
 * //         ScalarType: "VARCHAR" || "BOOLEAN" || "BIGINT" || "DOUBLE" || "TIMESTAMP" || "DATE" || "TIME" || "INTERVAL_DAY_TO_SECOND" || "INTERVAL_YEAR_TO_MONTH" || "UNKNOWN" || "INTEGER",
 * //         ArrayColumnInfo: { // ColumnInfo
 * //           Name: "STRING_VALUE",
 * //           Type: {
 * //             ScalarType: "VARCHAR" || "BOOLEAN" || "BIGINT" || "DOUBLE" || "TIMESTAMP" || "DATE" || "TIME" || "INTERVAL_DAY_TO_SECOND" || "INTERVAL_YEAR_TO_MONTH" || "UNKNOWN" || "INTEGER",
 * //             ArrayColumnInfo: {
 * //               Name: "STRING_VALUE",
 * //               Type: "<Type>", // required
 * //             },
 * //             TimeSeriesMeasureValueColumnInfo: {
 * //               Name: "STRING_VALUE",
 * //               Type: "<Type>", // required
 * //             },
 * //             RowColumnInfo: [ // ColumnInfoList
 * //               "<ColumnInfo>",
 * //             ],
 * //           },
 * //         },
 * //         TimeSeriesMeasureValueColumnInfo: "<ColumnInfo>",
 * //         RowColumnInfo: [
 * //           "<ColumnInfo>",
 * //         ],
 * //       },
 * //       DatabaseName: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       Aliased: true || false,
 * //     },
 * //   ],
 * //   Parameters: [ // ParameterMappingList // required
 * //     { // ParameterMapping
 * //       Name: "STRING_VALUE", // required
 * //       Type: "<Type>", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PrepareQueryCommandInput - {@link PrepareQueryCommandInput}
 * @returns {@link PrepareQueryCommandOutput}
 * @see {@link PrepareQueryCommandInput} for command's `input` shape.
 * @see {@link PrepareQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the necessary permissions to access the account settings.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to excessive requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Invalid or malformed request. </p>
 *
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 *
 * @public
 */
export class PrepareQueryCommand extends $Command
  .classBuilder<
    PrepareQueryCommandInput,
    PrepareQueryCommandOutput,
    TimestreamQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamQueryClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, {
        clientStack: cs,
        isDiscoveredEndpointRequired: true,
        options: o,
      }),
    ];
  })
  .s("Timestream_20181101", "PrepareQuery", {})
  .n("TimestreamQueryClient", "PrepareQueryCommand")
  .sc(PrepareQuery$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PrepareQueryRequest;
      output: PrepareQueryResponse;
    };
    sdk: {
      input: PrepareQueryCommandInput;
      output: PrepareQueryCommandOutput;
    };
  };
}
