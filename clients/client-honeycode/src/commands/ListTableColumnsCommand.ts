// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { ListTableColumnsRequest, ListTableColumnsResult } from "../models/models_0";
import { de_ListTableColumnsCommand, se_ListTableColumnsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTableColumnsCommand}.
 */
export interface ListTableColumnsCommandInput extends ListTableColumnsRequest {}
/**
 * @public
 *
 * The output of {@link ListTableColumnsCommand}.
 */
export interface ListTableColumnsCommandOutput extends ListTableColumnsResult, __MetadataBearer {}

/**
 * <p>
 *             The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, ListTableColumnsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, ListTableColumnsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const input = { // ListTableColumnsRequest
 *   workbookId: "STRING_VALUE", // required
 *   tableId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTableColumnsCommand(input);
 * const response = await client.send(command);
 * // { // ListTableColumnsResult
 * //   tableColumns: [ // TableColumns // required
 * //     { // TableColumn
 * //       tableColumnId: "STRING_VALUE",
 * //       tableColumnName: "STRING_VALUE",
 * //       format: "AUTO" || "NUMBER" || "CURRENCY" || "DATE" || "TIME" || "DATE_TIME" || "PERCENTAGE" || "TEXT" || "ACCOUNTING" || "CONTACT" || "ROWLINK" || "ROWSET",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   workbookCursor: Number("long"),
 * // };
 *
 * ```
 *
 * @param ListTableColumnsCommandInput - {@link ListTableColumnsCommandInput}
 * @returns {@link ListTableColumnsCommandOutput}
 * @see {@link ListTableColumnsCommandInput} for command's `input` shape.
 * @see {@link ListTableColumnsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListTableColumnsCommand extends $Command
  .classBuilder<
    ListTableColumnsCommandInput,
    ListTableColumnsCommandOutput,
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
  .s("SheetsPublicApiService", "ListTableColumns", {})
  .n("HoneycodeClient", "ListTableColumnsCommand")
  .f(void 0, void 0)
  .ser(se_ListTableColumnsCommand)
  .de(de_ListTableColumnsCommand)
  .build() {}
