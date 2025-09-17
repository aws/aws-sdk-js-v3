// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { CreateDataCellsFilterRequest, CreateDataCellsFilterResponse } from "../models/models_0";
import { de_CreateDataCellsFilterCommand, se_CreateDataCellsFilterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataCellsFilterCommand}.
 */
export interface CreateDataCellsFilterCommandInput extends CreateDataCellsFilterRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataCellsFilterCommand}.
 */
export interface CreateDataCellsFilterCommandOutput extends CreateDataCellsFilterResponse, __MetadataBearer {}

/**
 * <p>Creates a data cell filter to allow one to grant access to certain columns on certain rows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CreateDataCellsFilterCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CreateDataCellsFilterCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // CreateDataCellsFilterRequest
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
 * const command = new CreateDataCellsFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateDataCellsFilterCommandInput - {@link CreateDataCellsFilterCommandInput}
 * @returns {@link CreateDataCellsFilterCommandOutput}
 * @see {@link CreateDataCellsFilterCommandInput} for command's `input` shape.
 * @see {@link CreateDataCellsFilterCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class CreateDataCellsFilterCommand extends $Command
  .classBuilder<
    CreateDataCellsFilterCommandInput,
    CreateDataCellsFilterCommandOutput,
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
  .s("AWSLakeFormation", "CreateDataCellsFilter", {})
  .n("LakeFormationClient", "CreateDataCellsFilterCommand")
  .f(void 0, void 0)
  .ser(se_CreateDataCellsFilterCommand)
  .de(de_CreateDataCellsFilterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataCellsFilterRequest;
      output: {};
    };
    sdk: {
      input: CreateDataCellsFilterCommandInput;
      output: CreateDataCellsFilterCommandOutput;
    };
  };
}
