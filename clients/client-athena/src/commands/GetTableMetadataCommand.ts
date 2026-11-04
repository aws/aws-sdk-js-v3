// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableMetadataInput, GetTableMetadataOutput } from "../models/models_0";
import { GetTableMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTableMetadataCommand}.
 */
export interface GetTableMetadataCommandInput extends GetTableMetadataInput {}
/**
 * @public
 *
 * The output of {@link GetTableMetadataCommand}.
 */
export interface GetTableMetadataCommandOutput extends GetTableMetadataOutput, __MetadataBearer {}

/**
 * Returns table metadata for the specified catalog, database, and table.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetTableMetadataCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetTableMetadataCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetTableMetadataInput
 *   CatalogName: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   WorkGroup: "STRING_VALUE",
 * };
 * const command = new GetTableMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetTableMetadataOutput
 * //   TableMetadata: { // TableMetadata
 * //     Name: "STRING_VALUE", // required
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     LastAccessTime: new Date("TIMESTAMP"),
 * //     TableType: "STRING_VALUE",
 * //     Columns: [ // ColumnList
 * //       { // Column
 * //         Name: "STRING_VALUE", // required
 * //         Type: "STRING_VALUE",
 * //         Comment: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PartitionKeys: [
 * //       {
 * //         Name: "STRING_VALUE", // required
 * //         Type: "STRING_VALUE",
 * //         Comment: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Parameters: { // ParametersMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableMetadataCommandInput - {@link GetTableMetadataCommandInput}
 * @returns {@link GetTableMetadataCommandOutput}
 * @see {@link GetTableMetadataCommandInput} for command's `input` shape.
 * @see {@link GetTableMetadataCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates a platform issue, which may be due to a transient condition or outage.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.
 *
 * @throws {@link MetadataException} (client fault)
 *
 * An exception that Athena received when it called a custom metastore. Occurs if the error is not caused by user input (`InvalidRequestException`) or from the Athena platform (`InternalServerException`). For example, if a user-created Lambda function is missing permissions, the Lambda `4XX` exception is returned in a `MetadataException`.
 *
 * @throws {@link AthenaServiceException}
 *
 * Base exception class for all service exceptions from Athena service.
 *
 * @public
 */
export class GetTableMetadataCommand extends command<GetTableMetadataCommandInput, GetTableMetadataCommandOutput>(
  _ep0,
  _mw0,
  "GetTableMetadata",
  GetTableMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableMetadataInput;
      output: GetTableMetadataOutput;
    };
    sdk: {
      input: GetTableMetadataCommandInput;
      output: GetTableMetadataCommandOutput;
    };
  };
}
