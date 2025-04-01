// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataCatalogsInput, ListDataCatalogsOutput } from "../models/models_0";
import { de_ListDataCatalogsCommand, se_ListDataCatalogsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataCatalogsCommand}.
 */
export interface ListDataCatalogsCommandInput extends ListDataCatalogsInput {}
/**
 * @public
 *
 * The output of {@link ListDataCatalogsCommand}.
 */
export interface ListDataCatalogsCommandOutput extends ListDataCatalogsOutput, __MetadataBearer {}

/**
 * <p>Lists the data catalogs in the current Amazon Web Services account.</p>
 *          <note>
 *             <p>In the Athena console, data catalogs are listed as "data sources" on
 *                 the <b>Data sources</b> page under the <b>Data source name</b> column.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListDataCatalogsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListDataCatalogsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // ListDataCatalogsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   WorkGroup: "STRING_VALUE",
 * };
 * const command = new ListDataCatalogsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataCatalogsOutput
 * //   DataCatalogsSummary: [ // DataCatalogSummaryList
 * //     { // DataCatalogSummary
 * //       CatalogName: "STRING_VALUE",
 * //       Type: "LAMBDA" || "GLUE" || "HIVE" || "FEDERATED",
 * //       Status: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "CREATE_FAILED_CLEANUP_IN_PROGRESS" || "CREATE_FAILED_CLEANUP_COMPLETE" || "CREATE_FAILED_CLEANUP_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED",
 * //       ConnectionType: "DYNAMODB" || "MYSQL" || "POSTGRESQL" || "REDSHIFT" || "ORACLE" || "SYNAPSE" || "SQLSERVER" || "DB2" || "OPENSEARCH" || "BIGQUERY" || "GOOGLECLOUDSTORAGE" || "HBASE" || "DOCUMENTDB" || "CMDB" || "TPCDS" || "TIMESTREAM" || "SAPHANA" || "SNOWFLAKE" || "DATALAKEGEN2" || "DB2AS400",
 * //       Error: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataCatalogsCommandInput - {@link ListDataCatalogsCommandInput}
 * @returns {@link ListDataCatalogsCommandOutput}
 * @see {@link ListDataCatalogsCommandInput} for command's `input` shape.
 * @see {@link ListDataCatalogsCommandOutput} for command's `response` shape.
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
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class ListDataCatalogsCommand extends $Command
  .classBuilder<
    ListDataCatalogsCommandInput,
    ListDataCatalogsCommandOutput,
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
  .s("AmazonAthena", "ListDataCatalogs", {})
  .n("AthenaClient", "ListDataCatalogsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataCatalogsCommand)
  .de(de_ListDataCatalogsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataCatalogsInput;
      output: ListDataCatalogsOutput;
    };
    sdk: {
      input: ListDataCatalogsCommandInput;
      output: ListDataCatalogsCommandOutput;
    };
  };
}
