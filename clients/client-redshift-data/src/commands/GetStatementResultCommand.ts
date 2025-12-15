// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetStatementResultRequest, GetStatementResultResponse } from "../models/models_0";
import type { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";
import { GetStatementResult$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStatementResultCommand}.
 */
export interface GetStatementResultCommandInput extends GetStatementResultRequest {}
/**
 * @public
 *
 * The output of {@link GetStatementResultCommand}.
 */
export interface GetStatementResultCommandOutput extends GetStatementResultResponse, __MetadataBearer {}

/**
 * <p>Fetches the temporarily cached result of an SQL statement in JSON format. The <code>ExecuteStatement</code> or <code>BatchExecuteStatement</code> operation that ran the SQL statement must have specified <code>ResultFormat</code> as <code>JSON</code> , or let the format default to JSON. A token is returned to page through the statement results.</p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, GetStatementResultCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, GetStatementResultCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * // import type { RedshiftDataClientConfig } from "@aws-sdk/client-redshift-data";
 * const config = {}; // type is RedshiftDataClientConfig
 * const client = new RedshiftDataClient(config);
 * const input = { // GetStatementResultRequest
 *   Id: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetStatementResultCommand(input);
 * const response = await client.send(command);
 * // { // GetStatementResultResponse
 * //   Records: [ // SqlRecords // required
 * //     [ // FieldList
 * //       { // Field Union: only one key present
 * //         isNull: true || false,
 * //         booleanValue: true || false,
 * //         longValue: Number("long"),
 * //         doubleValue: Number("double"),
 * //         stringValue: "STRING_VALUE",
 * //         blobValue: new Uint8Array(),
 * //       },
 * //     ],
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
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetStatementResultCommandInput - {@link GetStatementResultCommandInput}
 * @returns {@link GetStatementResultCommandOutput}
 * @see {@link GetStatementResultCommandInput} for command's `input` shape.
 * @see {@link GetStatementResultCommandOutput} for command's `response` shape.
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
export class GetStatementResultCommand extends $Command
  .classBuilder<
    GetStatementResultCommandInput,
    GetStatementResultCommandOutput,
    RedshiftDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftData", "GetStatementResult", {})
  .n("RedshiftDataClient", "GetStatementResultCommand")
  .sc(GetStatementResult$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStatementResultRequest;
      output: GetStatementResultResponse;
    };
    sdk: {
      input: GetStatementResultCommandInput;
      output: GetStatementResultCommandOutput;
    };
  };
}
