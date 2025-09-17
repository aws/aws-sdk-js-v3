// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { ListDataCellsFilterRequest, ListDataCellsFilterResponse } from "../models/models_0";
import { de_ListDataCellsFilterCommand, se_ListDataCellsFilterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataCellsFilterCommand}.
 */
export interface ListDataCellsFilterCommandInput extends ListDataCellsFilterRequest {}
/**
 * @public
 *
 * The output of {@link ListDataCellsFilterCommand}.
 */
export interface ListDataCellsFilterCommandOutput extends ListDataCellsFilterResponse, __MetadataBearer {}

/**
 * <p>Lists all the data cell filters on a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListDataCellsFilterCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListDataCellsFilterCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // ListDataCellsFilterRequest
 *   Table: { // TableResource
 *     CatalogId: "STRING_VALUE",
 *     DatabaseName: "STRING_VALUE", // required
 *     Name: "STRING_VALUE",
 *     TableWildcard: {},
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataCellsFilterCommand(input);
 * const response = await client.send(command);
 * // { // ListDataCellsFilterResponse
 * //   DataCellsFilters: [ // DataCellsFilterList
 * //     { // DataCellsFilter
 * //       TableCatalogId: "STRING_VALUE", // required
 * //       DatabaseName: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       RowFilter: { // RowFilter
 * //         FilterExpression: "STRING_VALUE",
 * //         AllRowsWildcard: {},
 * //       },
 * //       ColumnNames: [ // ColumnNames
 * //         "STRING_VALUE",
 * //       ],
 * //       ColumnWildcard: { // ColumnWildcard
 * //         ExcludedColumnNames: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       VersionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataCellsFilterCommandInput - {@link ListDataCellsFilterCommandInput}
 * @returns {@link ListDataCellsFilterCommandOutput}
 * @see {@link ListDataCellsFilterCommandInput} for command's `input` shape.
 * @see {@link ListDataCellsFilterCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class ListDataCellsFilterCommand extends $Command
  .classBuilder<
    ListDataCellsFilterCommandInput,
    ListDataCellsFilterCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "ListDataCellsFilter", {})
  .n("LakeFormationClient", "ListDataCellsFilterCommand")
  .f(void 0, void 0)
  .ser(se_ListDataCellsFilterCommand)
  .de(de_ListDataCellsFilterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataCellsFilterRequest;
      output: ListDataCellsFilterResponse;
    };
    sdk: {
      input: ListDataCellsFilterCommandInput;
      output: ListDataCellsFilterCommandOutput;
    };
  };
}
