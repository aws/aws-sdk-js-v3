// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import type { GetDataCellsFilterRequest, GetDataCellsFilterResponse } from "../models/models_0";
import { GetDataCellsFilter } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataCellsFilterCommand}.
 */
export interface GetDataCellsFilterCommandInput extends GetDataCellsFilterRequest {}
/**
 * @public
 *
 * The output of {@link GetDataCellsFilterCommand}.
 */
export interface GetDataCellsFilterCommandOutput extends GetDataCellsFilterResponse, __MetadataBearer {}

/**
 * <p>Returns a data cells filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetDataCellsFilterCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetDataCellsFilterCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // GetDataCellsFilterRequest
 *   TableCatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetDataCellsFilterCommand(input);
 * const response = await client.send(command);
 * // { // GetDataCellsFilterResponse
 * //   DataCellsFilter: { // DataCellsFilter
 * //     TableCatalogId: "STRING_VALUE", // required
 * //     DatabaseName: "STRING_VALUE", // required
 * //     TableName: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     RowFilter: { // RowFilter
 * //       FilterExpression: "STRING_VALUE",
 * //       AllRowsWildcard: {},
 * //     },
 * //     ColumnNames: [ // ColumnNames
 * //       "STRING_VALUE",
 * //     ],
 * //     ColumnWildcard: { // ColumnWildcard
 * //       ExcludedColumnNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     VersionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataCellsFilterCommandInput - {@link GetDataCellsFilterCommandInput}
 * @returns {@link GetDataCellsFilterCommandOutput}
 * @see {@link GetDataCellsFilterCommandInput} for command's `input` shape.
 * @see {@link GetDataCellsFilterCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
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
export class GetDataCellsFilterCommand extends $Command
  .classBuilder<
    GetDataCellsFilterCommandInput,
    GetDataCellsFilterCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "GetDataCellsFilter", {})
  .n("LakeFormationClient", "GetDataCellsFilterCommand")
  .sc(GetDataCellsFilter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataCellsFilterRequest;
      output: GetDataCellsFilterResponse;
    };
    sdk: {
      input: GetDataCellsFilterCommandInput;
      output: GetDataCellsFilterCommandOutput;
    };
  };
}
