// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { ListTableRowsRequest, ListTableRowsResult, ListTableRowsResultFilterSensitiveLog } from "../models/models_0";
import { de_ListTableRowsCommand, se_ListTableRowsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTableRowsCommand}.
 */
export interface ListTableRowsCommandInput extends ListTableRowsRequest {}
/**
 * @public
 *
 * The output of {@link ListTableRowsCommand}.
 */
export interface ListTableRowsCommandOutput extends ListTableRowsResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, ListTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, ListTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const input = { // ListTableRowsRequest
 *   workbookId: "STRING_VALUE", // required
 *   tableId: "STRING_VALUE", // required
 *   rowIds: [ // RowIdList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTableRowsCommand(input);
 * const response = await client.send(command);
 * // { // ListTableRowsResult
 * //   columnIds: [ // ResourceIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   rows: [ // TableRows // required
 * //     { // TableRow
 * //       rowId: "STRING_VALUE", // required
 * //       cells: [ // Cells // required
 * //         { // Cell
 * //           formula: "STRING_VALUE",
 * //           format: "AUTO" || "NUMBER" || "CURRENCY" || "DATE" || "TIME" || "DATE_TIME" || "PERCENTAGE" || "TEXT" || "ACCOUNTING" || "CONTACT" || "ROWLINK" || "ROWSET",
 * //           rawValue: "STRING_VALUE",
 * //           formattedValue: "STRING_VALUE",
 * //           formattedValues: [ // FormattedValuesList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   rowIdsNotFound: [ // RowIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   workbookCursor: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param ListTableRowsCommandInput - {@link ListTableRowsCommandInput}
 * @returns {@link ListTableRowsCommandOutput}
 * @see {@link ListTableRowsCommandInput} for command's `input` shape.
 * @see {@link ListTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for HoneycodeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *             You do not have sufficient access to perform this action. Check that the workbook is owned by you and your
 *             IAM policy allows access to the resource in the request.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There were unexpected errors from the server.</p>
 *
 * @throws {@link RequestTimeoutException} (server fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A Workbook, Table, App, Screen or Screen Automation was not found with the given ID.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Remote service is unreachable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Tps(transactions per second) rate reached.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *             Request is invalid. The message in the response contains details on why the request is invalid.
 *         </p>
 *
 * @throws {@link HoneycodeServiceException}
 * <p>Base exception class for all service exceptions from Honeycode service.</p>
 *
 */
export class ListTableRowsCommand extends $Command
  .classBuilder<
    ListTableRowsCommandInput,
    ListTableRowsCommandOutput,
    HoneycodeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: HoneycodeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SheetsPublicApiService", "ListTableRows", {})
  .n("HoneycodeClient", "ListTableRowsCommand")
  .f(void 0, ListTableRowsResultFilterSensitiveLog)
  .ser(se_ListTableRowsCommand)
  .de(de_ListTableRowsCommand)
  .build() {}
