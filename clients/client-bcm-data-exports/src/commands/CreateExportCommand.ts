// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BCMDataExportsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMDataExportsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateExportRequest, CreateExportResponse } from "../models/models_0";
import { CreateExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateExportCommand}.
 */
export interface CreateExportCommandInput extends CreateExportRequest {}
/**
 * @public
 *
 * The output of {@link CreateExportCommand}.
 */
export interface CreateExportCommandOutput extends CreateExportResponse, __MetadataBearer {}

/**
 * <p>Creates a data export and specifies the data query, the delivery preference, and any
 *       optional resource tags.</p>
 *          <p>A <code>DataQuery</code> consists of both a <code>QueryStatement</code> and
 *         <code>TableConfigurations</code>.</p>
 *          <p>The <code>QueryStatement</code> is an SQL statement. Data Exports only supports a limited
 *       subset of the SQL syntax. For more information on the SQL syntax that is supported, see <a href="https://docs.aws.amazon.com/cur/latest/userguide/de-data-query.html">Data query</a>. To
 *       view the available tables and columns, see the <a href="https://docs.aws.amazon.com/cur/latest/userguide/de-table-dictionary.html">Data Exports table
 *         dictionary</a>.</p>
 *          <p>The <code>TableConfigurations</code> is a collection of specified
 *         <code>TableProperties</code> for the table being queried in the <code>QueryStatement</code>.
 *       TableProperties are additional configurations you can provide to change the data and schema of
 *       a table. Each table can have different TableProperties. However, tables are not required to
 *       have any TableProperties. Each table property has a default value that it assumes if not
 *       specified. For more information on table configurations, see <a href="https://docs.aws.amazon.com/cur/latest/userguide/de-data-query.html">Data query</a>. To
 *       view the table properties available for each table, see the <a href="https://docs.aws.amazon.com/cur/latest/userguide/de-table-dictionary.html">Data Exports table
 *         dictionary</a> or use the <code>ListTables</code> API to get a response of all tables
 *       and their available properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDataExportsClient, CreateExportCommand } from "@aws-sdk/client-bcm-data-exports"; // ES Modules import
 * // const { BCMDataExportsClient, CreateExportCommand } = require("@aws-sdk/client-bcm-data-exports"); // CommonJS import
 * // import type { BCMDataExportsClientConfig } from "@aws-sdk/client-bcm-data-exports";
 * const config = {}; // type is BCMDataExportsClientConfig
 * const client = new BCMDataExportsClient(config);
 * const input = { // CreateExportRequest
 *   Export: { // Export
 *     ExportArn: "STRING_VALUE",
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     DataQuery: { // DataQuery
 *       QueryStatement: "STRING_VALUE", // required
 *       TableConfigurations: { // TableConfigurations
 *         "<keys>": { // TableProperties
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *     DestinationConfigurations: { // DestinationConfigurations
 *       S3Destination: { // S3Destination
 *         S3Bucket: "STRING_VALUE", // required
 *         S3Prefix: "STRING_VALUE", // required
 *         S3Region: "STRING_VALUE", // required
 *         S3OutputConfigurations: { // S3OutputConfigurations
 *           OutputType: "CUSTOM", // required
 *           Format: "TEXT_OR_CSV" || "PARQUET", // required
 *           Compression: "GZIP" || "PARQUET", // required
 *           Overwrite: "CREATE_NEW_REPORT" || "OVERWRITE_REPORT", // required
 *         },
 *       },
 *     },
 *     RefreshCadence: { // RefreshCadence
 *       Frequency: "SYNCHRONOUS", // required
 *     },
 *   },
 *   ResourceTags: [ // ResourceTagList
 *     { // ResourceTag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateExportCommand(input);
 * const response = await client.send(command);
 * // { // CreateExportResponse
 * //   ExportArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateExportCommandInput - {@link CreateExportCommandInput}
 * @returns {@link CreateExportCommandOutput}
 * @see {@link CreateExportCommandInput} for command's `input` shape.
 * @see {@link CreateExportCommandOutput} for command's `response` shape.
 * @see {@link BCMDataExportsClientResolvedConfig | config} for BCMDataExportsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've reached the limit on the number of resources you can create, or exceeded the size
 *       of an individual resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link BCMDataExportsServiceException}
 * <p>Base exception class for all service exceptions from BCMDataExports service.</p>
 *
 *
 * @public
 */
export class CreateExportCommand extends $Command
  .classBuilder<
    CreateExportCommandInput,
    CreateExportCommandOutput,
    BCMDataExportsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDataExportsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBillingAndCostManagementDataExports", "CreateExport", {})
  .n("BCMDataExportsClient", "CreateExportCommand")
  .sc(CreateExport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExportRequest;
      output: CreateExportResponse;
    };
    sdk: {
      input: CreateExportCommandInput;
      output: CreateExportCommandOutput;
    };
  };
}
