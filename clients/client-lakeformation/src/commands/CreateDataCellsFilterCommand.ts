// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataCellsFilterRequest, CreateDataCellsFilterResponse } from "../models/models_0";
import { CreateDataCellsFilter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a data cell filter to allow one to grant access to certain columns on certain rows.
 *
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class CreateDataCellsFilterCommand extends command<CreateDataCellsFilterCommandInput, CreateDataCellsFilterCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataCellsFilter",
  CreateDataCellsFilter$
) {
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
