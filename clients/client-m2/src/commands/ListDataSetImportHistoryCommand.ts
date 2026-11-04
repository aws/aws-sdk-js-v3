// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataSetImportHistoryRequest, ListDataSetImportHistoryResponse } from "../models/models_0";
import { ListDataSetImportHistory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataSetImportHistoryCommand}.
 */
export interface ListDataSetImportHistoryCommandInput extends ListDataSetImportHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListDataSetImportHistoryCommand}.
 */
export interface ListDataSetImportHistoryCommandOutput extends ListDataSetImportHistoryResponse, __MetadataBearer {}

/**
 * Lists the data set imports for the specified application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListDataSetImportHistoryCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListDataSetImportHistoryCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // ListDataSetImportHistoryRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new ListDataSetImportHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSetImportHistoryResponse
 * //   dataSetImportTasks: [ // DataSetImportTaskList // required
 * //     { // DataSetImportTask
 * //       taskId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       summary: { // DataSetImportSummary
 * //         total: Number("int"), // required
 * //         succeeded: Number("int"), // required
 * //         failed: Number("int"), // required
 * //         pending: Number("int"), // required
 * //         inProgress: Number("int"), // required
 * //       },
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSetImportHistoryCommandInput - {@link ListDataSetImportHistoryCommandInput}
 * @returns {@link ListDataSetImportHistoryCommandOutput}
 * @see {@link ListDataSetImportHistoryCommandInput} for command's `input` shape.
 * @see {@link ListDataSetImportHistoryCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The account or role doesn't have the right permissions to make the request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests made exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One or more parameters provided in the request is not valid.
 *
 * @throws {@link M2ServiceException}
 *
 * Base exception class for all service exceptions from M2 service.
 *
 * @public
 */
export class ListDataSetImportHistoryCommand extends command<ListDataSetImportHistoryCommandInput, ListDataSetImportHistoryCommandOutput>(
  _ep0,
  _mw0,
  "ListDataSetImportHistory",
  ListDataSetImportHistory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataSetImportHistoryRequest;
      output: ListDataSetImportHistoryResponse;
    };
    sdk: {
      input: ListDataSetImportHistoryCommandInput;
      output: ListDataSetImportHistoryCommandOutput;
    };
  };
}
