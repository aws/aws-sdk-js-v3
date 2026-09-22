// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTelemetryQuerySessionsRequest, ListTelemetryQuerySessionsResponse } from "../models/models_0";
import { ListTelemetryQuerySessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTelemetryQuerySessionsCommand}.
 */
export interface ListTelemetryQuerySessionsCommandInput extends ListTelemetryQuerySessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTelemetryQuerySessionsCommand}.
 */
export interface ListTelemetryQuerySessionsCommandOutput extends ListTelemetryQuerySessionsResponse, __MetadataBearer {}

/**
 * Lists telemetry query sessions.
 *
 * Returns a list of telemetry query sessions owned by the caller.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, ListTelemetryQuerySessionsCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, ListTelemetryQuerySessionsCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // ListTelemetryQuerySessionsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTelemetryQuerySessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTelemetryQuerySessionsResponse
 * //   sessions: [ // SessionSummaryList // required
 * //     { // SessionSummary
 * //       sessionId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastActivityAt: new Date("TIMESTAMP"),
 * //       sessionName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTelemetryQuerySessionsCommandInput - {@link ListTelemetryQuerySessionsCommandInput}
 * @returns {@link ListTelemetryQuerySessionsCommandOutput}
 * @see {@link ListTelemetryQuerySessionsCommandInput} for command's `input` shape.
 * @see {@link ListTelemetryQuerySessionsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example List telemetry query sessions
 * ```javascript
 * // The following example lists the query sessions owned by the caller. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   maxResults: 10
 * };
 * const command = new ListTelemetryQuerySessionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "eyJvZmZzZXQiOjEwfQ==",
 *   sessions: [
 *     {
 *       createdAt: "2026-09-16T00:00:00Z",
 *       lastActivityAt: "2026-09-16T00:05:00Z",
 *       sessionId: "9f8c7d6e-5b4a-4c3d-9e2f-1a0b2c3d4e5f",
 *       sessionName: "prod-latency-investigation"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListTelemetryQuerySessionsCommand extends command<ListTelemetryQuerySessionsCommandInput, ListTelemetryQuerySessionsCommandOutput>(
  _ep0,
  _mw0,
  "ListTelemetryQuerySessions",
  ListTelemetryQuerySessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTelemetryQuerySessionsRequest;
      output: ListTelemetryQuerySessionsResponse;
    };
    sdk: {
      input: ListTelemetryQuerySessionsCommandInput;
      output: ListTelemetryQuerySessionsCommandOutput;
    };
  };
}
