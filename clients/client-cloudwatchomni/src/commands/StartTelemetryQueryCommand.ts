// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartTelemetryQueryRequest, StartTelemetryQueryResponse } from "../models/models_0";
import { StartTelemetryQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartTelemetryQueryCommand}.
 */
export interface StartTelemetryQueryCommandInput extends StartTelemetryQueryRequest {}
/**
 * @public
 *
 * The output of {@link StartTelemetryQueryCommand}.
 */
export interface StartTelemetryQueryCommandOutput extends StartTelemetryQueryResponse, __MetadataBearer {}

/**
 * Starts a telemetry query within a session.
 *
 * Submits the provided query string for execution in the specified
 * session. Use GetTelemetryQueryResults to poll for results and check
 * query status.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, StartTelemetryQueryCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, StartTelemetryQueryCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // StartTelemetryQueryRequest
 *   queryString: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new StartTelemetryQueryCommand(input);
 * const response = await client.send(command);
 * // { // StartTelemetryQueryResponse
 * //   queryId: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartTelemetryQueryCommandInput - {@link StartTelemetryQueryCommandInput}
 * @returns {@link StartTelemetryQueryCommandOutput}
 * @see {@link StartTelemetryQueryCommandInput} for command's `input` shape.
 * @see {@link StartTelemetryQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
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
 * @example Start a telemetry query
 * ```javascript
 * // The following example submits a SQL query within a session and returns the query ID used to poll for results. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   queryString: `SELECT `@timestamp`, `@message` FROM "logs.default" WHERE `@timestamp` BETWEEN NOW() - INTERVAL '1 HOUR' AND NOW() ORDER BY `@timestamp` DESC LIMIT 100`,
 *   sessionId: "9f8c7d6e-5b4a-4c3d-9e2f-1a0b2c3d4e5f"
 * };
 * const command = new StartTelemetryQueryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   queryId: "3b2a1c0d-7e6f-4a5b-8c9d-0e1f2a3b4c5d",
 *   sessionId: "9f8c7d6e-5b4a-4c3d-9e2f-1a0b2c3d4e5f"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartTelemetryQueryCommand extends command<StartTelemetryQueryCommandInput, StartTelemetryQueryCommandOutput>(
  _ep0,
  _mw0,
  "StartTelemetryQuery",
  StartTelemetryQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTelemetryQueryRequest;
      output: StartTelemetryQueryResponse;
    };
    sdk: {
      input: StartTelemetryQueryCommandInput;
      output: StartTelemetryQueryCommandOutput;
    };
  };
}
