// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartTelemetryQuerySessionRequest, StartTelemetryQuerySessionResponse } from "../models/models_0";
import { StartTelemetryQuerySession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartTelemetryQuerySessionCommand}.
 */
export interface StartTelemetryQuerySessionCommandInput extends StartTelemetryQuerySessionRequest {}
/**
 * @public
 *
 * The output of {@link StartTelemetryQuerySessionCommand}.
 */
export interface StartTelemetryQuerySessionCommandOutput extends StartTelemetryQuerySessionResponse, __MetadataBearer {}

/**
 * Starts a new telemetry query session.
 *
 * A session provides a logical grouping for one or more telemetry queries.
 * The returned session ID is required when starting queries via
 * StartTelemetryQuery.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, StartTelemetryQuerySessionCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, StartTelemetryQuerySessionCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // StartTelemetryQuerySessionRequest
 *   sessionName: "STRING_VALUE",
 * };
 * const command = new StartTelemetryQuerySessionCommand(input);
 * const response = await client.send(command);
 * // { // StartTelemetryQuerySessionResponse
 * //   sessionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartTelemetryQuerySessionCommandInput - {@link StartTelemetryQuerySessionCommandInput}
 * @returns {@link StartTelemetryQuerySessionCommandOutput}
 * @see {@link StartTelemetryQuerySessionCommandInput} for command's `input` shape.
 * @see {@link StartTelemetryQuerySessionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  The operation could not be completed because of a conflict with the current
 * state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  A service quota was exceeded.
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
 * @example Start a telemetry query session
 * ```javascript
 * // The following example starts a session for grouping telemetry queries and returns its session ID. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   sessionName: "prod-latency-investigation"
 * };
 * const command = new StartTelemetryQuerySessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sessionId: "9f8c7d6e-5b4a-4c3d-9e2f-1a0b2c3d4e5f"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartTelemetryQuerySessionCommand extends command<StartTelemetryQuerySessionCommandInput, StartTelemetryQuerySessionCommandOutput>(
  _ep0,
  _mw0,
  "StartTelemetryQuerySession",
  StartTelemetryQuerySession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTelemetryQuerySessionRequest;
      output: StartTelemetryQuerySessionResponse;
    };
    sdk: {
      input: StartTelemetryQuerySessionCommandInput;
      output: StartTelemetryQuerySessionCommandOutput;
    };
  };
}
