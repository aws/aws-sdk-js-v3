// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { UpdateDataCellsFilterRequest, UpdateDataCellsFilterResponse } from "../models/models_0";
import { UpdateDataCellsFilter } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataCellsFilterCommand}.
 */
export interface UpdateDataCellsFilterCommandInput extends UpdateDataCellsFilterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataCellsFilterCommand}.
 */
export interface UpdateDataCellsFilterCommandOutput extends UpdateDataCellsFilterResponse, __MetadataBearer {}

/**
 * <p>Updates a data cell filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateDataCellsFilterCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateDataCellsFilterCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // UpdateDataCellsFilterRequest
 *   TableData: { // DataCellsFilter
 *     TableCatalogId: "STRING_VALUE", // required
 *     DatabaseName: "STRING_VALUE", // required
 *     TableName: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     RowFilter: { // RowFilter
 *       FilterExpression: "STRING_VALUE",
 *       AllRowsWildcard: {},
 *     },
 *     ColumnNames: [ // ColumnNames
 *       "STRING_VALUE",
 *     ],
 *     ColumnWildcard: { // ColumnWildcard
 *       ExcludedColumnNames: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     VersionId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateDataCellsFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDataCellsFilterCommandInput - {@link UpdateDataCellsFilterCommandInput}
 * @returns {@link UpdateDataCellsFilterCommandOutput}
 * @see {@link UpdateDataCellsFilterCommandInput} for command's `input` shape.
 * @see {@link UpdateDataCellsFilterCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
export class UpdateDataCellsFilterCommand extends $Command
  .classBuilder<
    UpdateDataCellsFilterCommandInput,
    UpdateDataCellsFilterCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "UpdateDataCellsFilter", {})
  .n("LakeFormationClient", "UpdateDataCellsFilterCommand")
  .sc(UpdateDataCellsFilter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataCellsFilterRequest;
      output: {};
    };
    sdk: {
      input: UpdateDataCellsFilterCommandInput;
      output: UpdateDataCellsFilterCommandOutput;
    };
  };
}
