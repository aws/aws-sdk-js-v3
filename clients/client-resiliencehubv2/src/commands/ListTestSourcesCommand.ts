// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTestSourcesRequest, ListTestSourcesResponse } from "../models/models_0";
import { ListTestSources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTestSourcesCommand}.
 */
export interface ListTestSourcesCommandInput extends ListTestSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListTestSourcesCommand}.
 */
export interface ListTestSourcesCommandOutput extends ListTestSourcesResponse, __MetadataBearer {}

/**
 * <p>Lists the monitoring sources attached to a test, optionally filtered by type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListTestSourcesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListTestSourcesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListTestSourcesRequest
 *   testId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 *   type: "SUCCESS_CRITERIA" || "OBSERVABILITY",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListTestSourcesResponse
 * //   testSources: [ // TestSourceSummaryList // required
 * //     { // TestSourceSummary Union: only one key present
 * //       successCriteriaAlarm: { // SuccessCriteriaAlarmSummary
 * //         alarmArn: "STRING_VALUE", // required
 * //         alarmName: "STRING_VALUE", // required
 * //         region: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE", // required
 * //         createdAt: new Date("TIMESTAMP"),
 * //       },
 * //       observabilityAlarm: { // ObservabilityAlarmSummary
 * //         alarmArn: "STRING_VALUE", // required
 * //         alarmName: "STRING_VALUE", // required
 * //         region: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE", // required
 * //         createdAt: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestSourcesCommandInput - {@link ListTestSourcesCommandInput}
 * @returns {@link ListTestSourcesCommandOutput}
 * @see {@link ListTestSourcesCommandInput} for command's `input` shape.
 * @see {@link ListTestSourcesCommandOutput} for command's `response` shape.
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
export class ListTestSourcesCommand extends command<ListTestSourcesCommandInput, ListTestSourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListTestSources",
  ListTestSources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestSourcesRequest;
      output: ListTestSourcesResponse;
    };
    sdk: {
      input: ListTestSourcesCommandInput;
      output: ListTestSourcesCommandOutput;
    };
  };
}
