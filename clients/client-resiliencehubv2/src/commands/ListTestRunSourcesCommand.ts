// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTestRunSourcesRequest, ListTestRunSourcesResponse } from "../models/models_0";
import { ListTestRunSources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTestRunSourcesCommand}.
 */
export interface ListTestRunSourcesCommandInput extends ListTestRunSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListTestRunSourcesCommand}.
 */
export interface ListTestRunSourcesCommandOutput extends ListTestRunSourcesResponse, __MetadataBearer {}

/**
 * <p>Lists the monitoring source snapshots captured for a test run, optionally filtered by type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListTestRunSourcesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListTestRunSourcesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListTestRunSourcesRequest
 *   testRunId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 *   type: "SUCCESS_CRITERIA" || "OBSERVABILITY",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestRunSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListTestRunSourcesResponse
 * //   testRunSources: [ // TestRunSourceSummaryList // required
 * //     { // TestRunSourceSummary Union: only one key present
 * //       successCriteriaAlarm: { // TestRunSuccessCriteriaAlarmSummary
 * //         alarmArn: "STRING_VALUE", // required
 * //         alarmName: "STRING_VALUE", // required
 * //         region: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE", // required
 * //         outcome: "PASSED" || "FAILED" || "ERROR",
 * //         outcomeReason: "STRING_VALUE",
 * //       },
 * //       observabilityAlarm: { // TestRunObservabilityAlarmSummary
 * //         alarmArn: "STRING_VALUE", // required
 * //         alarmName: "STRING_VALUE", // required
 * //         region: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestRunSourcesCommandInput - {@link ListTestRunSourcesCommandInput}
 * @returns {@link ListTestRunSourcesCommandOutput}
 * @see {@link ListTestRunSourcesCommandInput} for command's `input` shape.
 * @see {@link ListTestRunSourcesCommandOutput} for command's `response` shape.
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
export class ListTestRunSourcesCommand extends command<ListTestRunSourcesCommandInput, ListTestRunSourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListTestRunSources",
  ListTestRunSources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestRunSourcesRequest;
      output: ListTestRunSourcesResponse;
    };
    sdk: {
      input: ListTestRunSourcesCommandInput;
      output: ListTestRunSourcesCommandOutput;
    };
  };
}
