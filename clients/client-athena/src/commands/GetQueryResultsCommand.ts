// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetQueryResultsInput, GetQueryResultsOutput } from "../models/models_0";
import { de_GetQueryResultsCommand, se_GetQueryResultsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryResultsCommand}.
 */
export interface GetQueryResultsCommandInput extends GetQueryResultsInput {}
/**
 * @public
 *
 * The output of {@link GetQueryResultsCommand}.
 */
export interface GetQueryResultsCommandOutput extends GetQueryResultsOutput, __MetadataBearer {}

/**
 * <p>Streams the results of a single query execution specified by
 *                 <code>QueryExecutionId</code> from the Athena query results location in
 *                 Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and
 *                 output files</a> in the <i>Amazon Athena User Guide</i>.
 *             This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p>
 *          <p>To stream query results successfully, the IAM principal with permission to call
 *                 <code>GetQueryResults</code> also must have permissions to the Amazon S3
 *             <code>GetObject</code> action for the Athena query results location.</p>
 *          <important>
 *             <p>IAM principals with permission to the Amazon S3
 *                 <code>GetObject</code> action for the query results location are able to retrieve
 *                 query results from Amazon S3 even if permission to the
 *                     <code>GetQueryResults</code> action is denied. To restrict user or role access,
 *                 ensure that Amazon S3 permissions to the Athena query location
 *                 are denied.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetQueryResultsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetQueryResultsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetQueryResultsInput
 *   QueryExecutionId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   QueryResultType: "DATA_MANIFEST" || "DATA_ROWS",
 * };
 * const command = new GetQueryResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryResultsOutput
 * //   UpdateCount: Number("long"),
 * //   ResultSet: { // ResultSet
 * //     Rows: [ // RowList
 * //       { // Row
 * //         Data: [ // datumList
 * //           { // Datum
 * //             VarCharValue: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ResultSetMetadata: { // ResultSetMetadata
 * //       ColumnInfo: [ // ColumnInfoList
 * //         { // ColumnInfo
 * //           CatalogName: "STRING_VALUE",
 * //           SchemaName: "STRING_VALUE",
 * //           TableName: "STRING_VALUE",
 * //           Name: "STRING_VALUE", // required
 * //           Label: "STRING_VALUE",
 * //           Type: "STRING_VALUE", // required
 * //           Precision: Number("int"),
 * //           Scale: Number("int"),
 * //           Nullable: "NOT_NULL" || "NULLABLE" || "UNKNOWN",
 * //           CaseSensitive: true || false,
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueryResultsCommandInput - {@link GetQueryResultsCommandInput}
 * @returns {@link GetQueryResultsCommandOutput}
 * @see {@link GetQueryResultsCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class GetQueryResultsCommand extends $Command
  .classBuilder<
    GetQueryResultsCommandInput,
    GetQueryResultsCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "GetQueryResults", {})
  .n("AthenaClient", "GetQueryResultsCommand")
  .f(void 0, void 0)
  .ser(se_GetQueryResultsCommand)
  .de(de_GetQueryResultsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryResultsInput;
      output: GetQueryResultsOutput;
    };
    sdk: {
      input: GetQueryResultsCommandInput;
      output: GetQueryResultsCommandOutput;
    };
  };
}
