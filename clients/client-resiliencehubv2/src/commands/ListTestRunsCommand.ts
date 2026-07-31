// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTestRunsRequest, ListTestRunsResponse } from "../models/models_0";
import { ListTestRuns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTestRunsCommand}.
 */
export interface ListTestRunsCommandInput extends ListTestRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestRunsCommand}.
 */
export interface ListTestRunsCommandOutput extends ListTestRunsResponse, __MetadataBearer {}

/**
 * <p>Lists the runs of a test, or all test runs for a service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListTestRunsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListTestRunsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListTestRunsRequest
 *   serviceArn: "STRING_VALUE", // required
 *   testId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestRunsResponse
 * //   testRuns: [ // TestRunSummaryList // required
 * //     { // TestRunSummary
 * //       testRunId: "STRING_VALUE", // required
 * //       status: "INITIALIZING" || "RUNNING" || "STOPPING" || "PASSED" || "FAILED" || "STOPPED" || "ERROR", // required
 * //       startedAt: new Date("TIMESTAMP"), // required
 * //       endedAt: new Date("TIMESTAMP"),
 * //       testTemplateArn: "STRING_VALUE", // required
 * //       serviceArn: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       accountTargeting: "SINGLE_ACCOUNT" || "MULTI_ACCOUNT",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestRunsCommandInput - {@link ListTestRunsCommandInput}
 * @returns {@link ListTestRunsCommandOutput}
 * @see {@link ListTestRunsCommandInput} for command's `input` shape.
 * @see {@link ListTestRunsCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class ListTestRunsCommand extends command<ListTestRunsCommandInput, ListTestRunsCommandOutput>(
  _ep0,
  _mw0,
  "ListTestRuns",
  ListTestRuns$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestRunsRequest;
      output: ListTestRunsResponse;
    };
    sdk: {
      input: ListTestRunsCommandInput;
      output: ListTestRunsCommandOutput;
    };
  };
}
