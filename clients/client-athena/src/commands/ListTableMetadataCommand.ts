// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTableMetadataInput, ListTableMetadataOutput } from "../models/models_0";
import { ListTableMetadata } from "../schemas/schemas_7_Data";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTableMetadataCommand}.
 */
export interface ListTableMetadataCommandInput extends ListTableMetadataInput {}
/**
 * @public
 *
 * The output of {@link ListTableMetadataCommand}.
 */
export interface ListTableMetadataCommandOutput extends ListTableMetadataOutput, __MetadataBearer {}

/**
 * <p>Lists the metadata for the tables in the specified data catalog database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListTableMetadataCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListTableMetadataCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // ListTableMetadataInput
 *   CatalogName: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   Expression: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   WorkGroup: "STRING_VALUE",
 * };
 * const command = new ListTableMetadataCommand(input);
 * const response = await client.send(command);
 * // { // ListTableMetadataOutput
 * //   TableMetadataList: [ // TableMetadataList
 * //     { // TableMetadata
 * //       Name: "STRING_VALUE", // required
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       LastAccessTime: new Date("TIMESTAMP"),
 * //       TableType: "STRING_VALUE",
 * //       Columns: [ // ColumnList
 * //         { // Column
 * //           Name: "STRING_VALUE", // required
 * //           Type: "STRING_VALUE",
 * //           Comment: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PartitionKeys: [
 * //         {
 * //           Name: "STRING_VALUE", // required
 * //           Type: "STRING_VALUE",
 * //           Comment: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Parameters: { // ParametersMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTableMetadataCommandInput - {@link ListTableMetadataCommandInput}
 * @returns {@link ListTableMetadataCommandOutput}
 * @see {@link ListTableMetadataCommandInput} for command's `input` shape.
 * @see {@link ListTableMetadataCommandOutput} for command's `response` shape.
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
 * @throws {@link MetadataException} (client fault)
 *  <p>An exception that Athena received when it called a custom metastore.
 *             Occurs if the error is not caused by user input (<code>InvalidRequestException</code>)
 *             or from the Athena platform (<code>InternalServerException</code>). For
 *             example, if a user-created Lambda function is missing permissions, the
 *                 Lambda
 *             <code>4XX</code> exception is returned in a <code>MetadataException</code>.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class ListTableMetadataCommand extends $Command
  .classBuilder<
    ListTableMetadataCommandInput,
    ListTableMetadataCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "ListTableMetadata", {})
  .n("AthenaClient", "ListTableMetadataCommand")
  .sc(ListTableMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTableMetadataInput;
      output: ListTableMetadataOutput;
    };
    sdk: {
      input: ListTableMetadataCommandInput;
      output: ListTableMetadataCommandOutput;
    };
  };
}
