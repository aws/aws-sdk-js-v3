// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTestRunSourceEventsRequest, ListTestRunSourceEventsResponse } from "../models/models_0";
import { ListTestRunSourceEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTestRunSourceEventsCommand}.
 */
export interface ListTestRunSourceEventsCommandInput extends ListTestRunSourceEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestRunSourceEventsCommand}.
 */
export interface ListTestRunSourceEventsCommandOutput extends ListTestRunSourceEventsResponse, __MetadataBearer {}

/**
 * <p>Lists the state-change events observed for a test run monitoring source. Events are returned for one source per call, in chronological order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListTestRunSourceEventsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListTestRunSourceEventsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListTestRunSourceEventsRequest
 *   testRunId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 *   sourceArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestRunSourceEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestRunSourceEventsResponse
 * //   testRunSourceEvents: [ // TestRunSourceEventList // required
 * //     { // TestRunSourceEvent
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       sourceArn: "STRING_VALUE", // required
 * //       eventType: "ALARM", // required
 * //       detail: { // TestRunSourceEventDetail Union: only one key present
 * //         alarmStateChange: { // AlarmStateChangeDetail
 * //           state: "OK" || "ALARM" || "INSUFFICIENT_DATA", // required
 * //           previousState: "OK" || "ALARM" || "INSUFFICIENT_DATA",
 * //           reason: "STRING_VALUE",
 * //         },
 * //         error: { // TestRunSourceEventError
 * //           errorCode: "ACCESS_DENIED" || "INTERNAL_ERROR", // required
 * //           errorMessage: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestRunSourceEventsCommandInput - {@link ListTestRunSourceEventsCommandInput}
 * @returns {@link ListTestRunSourceEventsCommandOutput}
 * @see {@link ListTestRunSourceEventsCommandInput} for command's `input` shape.
 * @see {@link ListTestRunSourceEventsCommandOutput} for command's `response` shape.
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
export class ListTestRunSourceEventsCommand extends command<ListTestRunSourceEventsCommandInput, ListTestRunSourceEventsCommandOutput>(
  _ep0,
  _mw0,
  "ListTestRunSourceEvents",
  ListTestRunSourceEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestRunSourceEventsRequest;
      output: ListTestRunSourceEventsResponse;
    };
    sdk: {
      input: ListTestRunSourceEventsCommandInput;
      output: ListTestRunSourceEventsCommandOutput;
    };
  };
}
