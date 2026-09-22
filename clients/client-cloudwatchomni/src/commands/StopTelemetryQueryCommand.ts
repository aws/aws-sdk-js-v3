// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopTelemetryQueryRequest, StopTelemetryQueryResponse } from "../models/models_0";
import { StopTelemetryQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopTelemetryQueryCommand}.
 */
export interface StopTelemetryQueryCommandInput extends StopTelemetryQueryRequest {}
/**
 * @public
 *
 * The output of {@link StopTelemetryQueryCommand}.
 */
export interface StopTelemetryQueryCommandOutput extends StopTelemetryQueryResponse, __MetadataBearer {}

/**
 * Stops a running telemetry query.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, StopTelemetryQueryCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, StopTelemetryQueryCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // StopTelemetryQueryRequest
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new StopTelemetryQueryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTelemetryQueryCommandInput - {@link StopTelemetryQueryCommandInput}
 * @returns {@link StopTelemetryQueryCommandOutput}
 * @see {@link StopTelemetryQueryCommandInput} for command's `input` shape.
 * @see {@link StopTelemetryQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
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
 * @example Stop a running telemetry query
 * ```javascript
 * // The following example stops a running query by its ID. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   queryId: "3b2a1c0d-7e6f-4a5b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new StopTelemetryQueryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class StopTelemetryQueryCommand extends command<StopTelemetryQueryCommandInput, StopTelemetryQueryCommandOutput>(
  _ep0,
  _mw0,
  "StopTelemetryQuery",
  StopTelemetryQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTelemetryQueryRequest;
      output: {};
    };
    sdk: {
      input: StopTelemetryQueryCommandInput;
      output: StopTelemetryQueryCommandOutput;
    };
  };
}
