// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCodeScansInput, ListCodeScansOutput } from "../models/models_0";
import { ListCodeScans$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCodeScansCommand}.
 */
export interface ListCodeScansCommandInput extends ListCodeScansInput {}
/**
 * @public
 *
 * The output of {@link ListCodeScansCommand}.
 */
export interface ListCodeScansCommandOutput extends ListCodeScansOutput, __MetadataBearer {}

/**
 * Lists customer-visible scans for one environment in descending scanRunId order.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, ListCodeScansCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, ListCodeScansCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // ListCodeScansInput
 *   environmentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCodeScansCommand(input);
 * const response = await client.send(command);
 * // { // ListCodeScansOutput
 * //   scans: [ // CodeScanSummaries // required
 * //     { // CodeScanSummary
 * //       scanRunId: "STRING_VALUE", // required
 * //       status: "SUBMITTED" || "WAITING_FOR_BUILD" || "BUILDING" || "WAITING_FOR_SCAN" || "SCANNING" || "SUCCEEDED" || "FAILED", // required
 * //       origin: "MANUAL" || "SCHEDULED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       completedAt: new Date("TIMESTAMP"),
 * //       failureMessage: "STRING_VALUE",
 * //       failureStage: "SUBMITTED" || "WAITING_FOR_BUILD" || "BUILDING" || "WAITING_FOR_SCAN" || "SCANNING",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCodeScansCommandInput - {@link ListCodeScansCommandInput}
 * @returns {@link ListCodeScansCommandOutput}
 * @see {@link ListCodeScansCommandInput} for command's `input` shape.
 * @see {@link ListCodeScansCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class ListCodeScansCommand extends command<ListCodeScansCommandInput, ListCodeScansCommandOutput>(
  _ep0,
  _mw0,
  "ListCodeScans",
  ListCodeScans$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCodeScansInput;
      output: ListCodeScansOutput;
    };
    sdk: {
      input: ListCodeScansCommandInput;
      output: ListCodeScansCommandOutput;
    };
  };
}
