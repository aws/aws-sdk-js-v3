// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAnalysisLogExportsInput, ListAnalysisLogExportsOutput } from "../models/models_1";
import { ListAnalysisLogExports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAnalysisLogExportsCommand}.
 */
export interface ListAnalysisLogExportsCommandInput extends ListAnalysisLogExportsInput {}
/**
 * @public
 *
 * The output of {@link ListAnalysisLogExportsCommand}.
 */
export interface ListAnalysisLogExportsCommandOutput extends ListAnalysisLogExportsOutput, __MetadataBearer {}

/**
 * Lists analysis log exports, sorted by the most recent export. Results are paginated. Use the `nextToken` parameter to retrieve additional results.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListAnalysisLogExportsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListAnalysisLogExportsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListAnalysisLogExportsInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   analysisIdentifier: "STRING_VALUE",
 *   status: "IN_PROGRESS" || "SUCCESS" || "FAILED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAnalysisLogExportsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnalysisLogExportsOutput
 * //   nextToken: "STRING_VALUE",
 * //   analysisLogExports: [ // AnalysisLogExportSummaryList // required
 * //     { // AnalysisLogExportSummary
 * //       analysisLogExportId: "STRING_VALUE", // required
 * //       analysisId: "STRING_VALUE", // required
 * //       analysisType: "PROTECTED_QUERY", // required
 * //       status: "IN_PROGRESS" || "SUCCESS" || "FAILED", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAnalysisLogExportsCommandInput - {@link ListAnalysisLogExportsCommandInput}
 * @returns {@link ListAnalysisLogExportsCommandOutput}
 * @see {@link ListAnalysisLogExportsCommandInput} for command's `input` shape.
 * @see {@link ListAnalysisLogExportsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class ListAnalysisLogExportsCommand extends command<ListAnalysisLogExportsCommandInput, ListAnalysisLogExportsCommandOutput>(
  _ep0,
  _mw0,
  "ListAnalysisLogExports",
  ListAnalysisLogExports$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnalysisLogExportsInput;
      output: ListAnalysisLogExportsOutput;
    };
    sdk: {
      input: ListAnalysisLogExportsCommandInput;
      output: ListAnalysisLogExportsCommandOutput;
    };
  };
}
