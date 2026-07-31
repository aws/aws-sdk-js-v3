// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTestRunEventsRequest, ListTestRunEventsResponse } from "../models/models_0";
import { ListTestRunEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTestRunEventsCommand}.
 */
export interface ListTestRunEventsCommandInput extends ListTestRunEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestRunEventsCommand}.
 */
export interface ListTestRunEventsCommandOutput extends ListTestRunEventsResponse, __MetadataBearer {}

/**
 * <p>Lists the events in a test run's timeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListTestRunEventsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListTestRunEventsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListTestRunEventsRequest
 *   testRunId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 *   startedAt: new Date("TIMESTAMP"),
 *   endedAt: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestRunEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestRunEventsResponse
 * //   events: [ // TestRunEventList // required
 * //     { // TestRunEvent
 * //       eventId: "STRING_VALUE", // required
 * //       eventType: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       attributes: { // TestRunEventAttributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestRunEventsCommandInput - {@link ListTestRunEventsCommandInput}
 * @returns {@link ListTestRunEventsCommandOutput}
 * @see {@link ListTestRunEventsCommandInput} for command's `input` shape.
 * @see {@link ListTestRunEventsCommandOutput} for command's `response` shape.
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
export class ListTestRunEventsCommand extends command<ListTestRunEventsCommandInput, ListTestRunEventsCommandOutput>(
  _ep0,
  _mw0,
  "ListTestRunEvents",
  ListTestRunEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestRunEventsRequest;
      output: ListTestRunEventsResponse;
    };
    sdk: {
      input: ListTestRunEventsCommandInput;
      output: ListTestRunEventsCommandOutput;
    };
  };
}
