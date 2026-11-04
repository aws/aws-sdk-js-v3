// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExportRequest, CreateExportResponse } from "../models/models_0";
import { CreateExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a data export and specifies the data query, the delivery preference, and any optional resource tags.
 *
 * A `DataQuery` consists of both a `QueryStatement` and `TableConfigurations`.
 *
 * The `QueryStatement` is an SQL statement. Data Exports only supports a limited subset of the SQL syntax. For more information on the SQL syntax that is supported, see [Data query](https://docs.aws.amazon.com/cur/latest/userguide/de-data-query.html). To view the available tables and columns, see the [Data Exports table dictionary](https://docs.aws.amazon.com/cur/latest/userguide/de-table-dictionary.html).
 *
 * The `TableConfigurations` is a collection of specified `TableProperties` for the table being queried in the `QueryStatement`. TableProperties are additional configurations you can provide to change the data and schema of a table. Each table can have different TableProperties. However, tables are not required to have any TableProperties. Each table property has a default value that it assumes if not specified. For more information on table configurations, see [Data query](https://docs.aws.amazon.com/cur/latest/userguide/de-data-query.html). To view the table properties available for each table, see the [Data Exports table dictionary](https://docs.aws.amazon.com/cur/latest/userguide/de-table-dictionary.html) or use the `ListTables` API to get a response of all tables and their available properties.
 *
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
 *         S3BucketOwner: "STRING_VALUE",
 *         S3Prefix: "STRING_VALUE", // required
 *         S3Region: "STRING_VALUE", // required
 *         S3OutputConfigurations: { // S3OutputConfigurations
 *           OutputType: "CUSTOM" || "ATHENA" || "REDSHIFT", // required
 *           Format: "TEXT_OR_CSV" || "PARQUET", // required
 *           Compression: "GZIP" || "PARQUET" || "ZIP", // required
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
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An error on the server occurred during the processing of your request. Try again later.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You've reached the limit on the number of resources you can create, or exceeded the size of an individual resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link BCMDataExportsServiceException}
 *
 * Base exception class for all service exceptions from BCMDataExports service.
 *
 * @public
 */
export class CreateExportCommand extends command<CreateExportCommandInput, CreateExportCommandOutput>(
  _ep0,
  _mw0,
  "CreateExport",
  CreateExport$
) {
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
