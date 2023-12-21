// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { BatchDeleteTableRowsRequest, BatchDeleteTableRowsResult } from "../models/models_0";
import { de_BatchDeleteTableRowsCommand, se_BatchDeleteTableRowsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteTableRowsCommand}.
 */
export interface BatchDeleteTableRowsCommandInput extends BatchDeleteTableRowsRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteTableRowsCommand}.
 */
export interface BatchDeleteTableRowsCommandOutput extends BatchDeleteTableRowsResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook.
 *             You need to specify the ids of the rows that you want to delete from the table.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchDeleteTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchDeleteTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const input = { // BatchDeleteTableRowsRequest
 *   workbookId: "STRING_VALUE", // required
 *   tableId: "STRING_VALUE", // required
 *   rowIds: [ // RowIdList // required
 *     "STRING_VALUE",
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new BatchDeleteTableRowsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteTableRowsResult
 * //   workbookCursor: Number("long"), // required
 * //   failedBatchItems: [ // FailedBatchItems
 * //     { // FailedBatchItem
 * //       id: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteTableRowsCommandInput - {@link BatchDeleteTableRowsCommandInput}
 * @returns {@link BatchDeleteTableRowsCommandOutput}
 * @see {@link BatchDeleteTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteTableRowsCommandOutput} for command's `response` shape.
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
export class BatchDeleteTableRowsCommand extends $Command
  .classBuilder<
    BatchDeleteTableRowsCommandInput,
    BatchDeleteTableRowsCommandOutput,
    HoneycodeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: HoneycodeClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SheetsPublicApiService", "BatchDeleteTableRows", {})
  .n("HoneycodeClient", "BatchDeleteTableRowsCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteTableRowsCommand)
  .de(de_BatchDeleteTableRowsCommand)
  .build() {}
