// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTableMetadataInput, GetTableMetadataOutput } from "../models/models_0";
import { de_GetTableMetadataCommand, se_GetTableMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns table metadata for the specified catalog, database, and table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetTableMetadataCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetTableMetadataCommand } = require("@aws-sdk/client-athena"); // CommonJS import
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
 * @public
 */
export class GetTableMetadataCommand extends $Command
  .classBuilder<
    GetTableMetadataCommandInput,
    GetTableMetadataCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "GetTableMetadata", {})
  .n("AthenaClient", "GetTableMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetTableMetadataCommand)
  .de(de_GetTableMetadataCommand)
  .build() {}
