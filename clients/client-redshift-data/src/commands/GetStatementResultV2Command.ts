// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetStatementResultV2Request, GetStatementResultV2Response } from "../models/models_0";
import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";
import { GetStatementResultV2 } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStatementResultV2Command}.
 */
export interface GetStatementResultV2CommandInput extends GetStatementResultV2Request {}
/**
 * @public
 *
 * The output of {@link GetStatementResultV2Command}.
 */
export interface GetStatementResultV2CommandOutput extends GetStatementResultV2Response, __MetadataBearer {}

/**
 * <p>Fetches the temporarily cached result of an SQL statement in CSV format.
 *       The <code>ExecuteStatement</code> or <code>BatchExecuteStatement</code> operation that ran the SQL statement must have specified <code>ResultFormat</code> as <code>CSV</code>.
 *       A token is returned to page through the statement results.</p>
 *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
 *       <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
 *       <i>Amazon Redshift Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, GetStatementResultV2Command } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, GetStatementResultV2Command } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * // import type { RedshiftDataClientConfig } from "@aws-sdk/client-redshift-data";
 * const config = {}; // type is RedshiftDataClientConfig
 * const client = new RedshiftDataClient(config);
 * const input = { // GetStatementResultV2Request
 *   Id: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetStatementResultV2Command(input);
 * const response = await client.send(command);
 * // { // GetStatementResultV2Response
 * //   Records: [ // FormattedSqlRecords // required
 * //     { // QueryRecords Union: only one key present
 * //       CSVRecords: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ColumnMetadata: [ // ColumnMetadataList
 * //     { // ColumnMetadata
 * //       isCaseSensitive: true || false,
 * //       isCurrency: true || false,
 * //       isSigned: true || false,
 * //       label: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       nullable: Number("int"),
 * //       precision: Number("int"),
 * //       scale: Number("int"),
 * //       schemaName: "STRING_VALUE",
 * //       tableName: "STRING_VALUE",
 * //       typeName: "STRING_VALUE",
 * //       length: Number("int"),
 * //       columnDefault: "STRING_VALUE",
 * //     },
 * //   ],
 * //   TotalNumRows: Number("long"),
 * //   ResultFormat: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetStatementResultV2CommandInput - {@link GetStatementResultV2CommandInput}
 * @returns {@link GetStatementResultV2CommandOutput}
 * @see {@link GetStatementResultV2CommandInput} for command's `input` shape.
 * @see {@link GetStatementResultV2CommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to a missing resource. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link RedshiftDataServiceException}
 * <p>Base exception class for all service exceptions from RedshiftData service.</p>
 *
 *
 * @public
 */
export class GetStatementResultV2Command extends $Command
  .classBuilder<
    GetStatementResultV2CommandInput,
    GetStatementResultV2CommandOutput,
    RedshiftDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftData", "GetStatementResultV2", {})
  .n("RedshiftDataClient", "GetStatementResultV2Command")
  .sc(GetStatementResultV2)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStatementResultV2Request;
      output: GetStatementResultV2Response;
    };
    sdk: {
      input: GetStatementResultV2CommandInput;
      output: GetStatementResultV2CommandOutput;
    };
  };
}
