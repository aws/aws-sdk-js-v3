// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopTelemetryQuerySessionRequest, StopTelemetryQuerySessionResponse } from "../models/models_0";
import { StopTelemetryQuerySession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopTelemetryQuerySessionCommand}.
 */
export interface StopTelemetryQuerySessionCommandInput extends StopTelemetryQuerySessionRequest {}
/**
 * @public
 *
 * The output of {@link StopTelemetryQuerySessionCommand}.
 */
export interface StopTelemetryQuerySessionCommandOutput extends StopTelemetryQuerySessionResponse, __MetadataBearer {}

/**
 * Stops a telemetry query session.
 *
 * Terminates the specified session. After a session is stopped it cannot
 * be reused.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, StopTelemetryQuerySessionCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, StopTelemetryQuerySessionCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // StopTelemetryQuerySessionRequest
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new StopTelemetryQuerySessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTelemetryQuerySessionCommandInput - {@link StopTelemetryQuerySessionCommandInput}
 * @returns {@link StopTelemetryQuerySessionCommandOutput}
 * @see {@link StopTelemetryQuerySessionCommandInput} for command's `input` shape.
 * @see {@link StopTelemetryQuerySessionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
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
 * @example Stop a telemetry query session
 * ```javascript
 * // The following example terminates the specified session. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   sessionId: "9f8c7d6e-5b4a-4c3d-9e2f-1a0b2c3d4e5f"
 * };
 * const command = new StopTelemetryQuerySessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class StopTelemetryQuerySessionCommand extends command<StopTelemetryQuerySessionCommandInput, StopTelemetryQuerySessionCommandOutput>(
  _ep0,
  _mw0,
  "StopTelemetryQuerySession",
  StopTelemetryQuerySession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTelemetryQuerySessionRequest;
      output: {};
    };
    sdk: {
      input: StopTelemetryQuerySessionCommandInput;
      output: StopTelemetryQuerySessionCommandOutput;
    };
  };
}
