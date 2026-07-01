// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ReportInstrumentationConfigurationStatusRequest,
  ReportInstrumentationConfigurationStatusResponse,
} from "../models/models_0";
import { ReportInstrumentationConfigurationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ReportInstrumentationConfigurationStatusCommand}.
 */
export interface ReportInstrumentationConfigurationStatusCommandInput extends ReportInstrumentationConfigurationStatusRequest {}
/**
 * @public
 *
 * The output of {@link ReportInstrumentationConfigurationStatusCommand}.
 */
export interface ReportInstrumentationConfigurationStatusCommandOutput extends ReportInstrumentationConfigurationStatusResponse, __MetadataBearer {}

/**
 * <p>Reports the status of one or more instrumentation configurations from SDK instances. Use this to record when configurations become ready, hit errors, become active, or are disabled by limits.</p> <p>Report <code>READY</code>, <code>ERROR</code>, and <code>DISABLED</code> when the status changes. Report <code>ACTIVE</code> periodically (for example, every minute) while instrumentation is running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ReportInstrumentationConfigurationStatusCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ReportInstrumentationConfigurationStatusCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ReportInstrumentationConfigurationStatusRequest
 *   Service: "STRING_VALUE", // required
 *   Environment: "STRING_VALUE", // required
 *   Configurations: [ // InstrumentationConfigurationStatusList // required
 *     { // InstrumentationConfigurationStatusReport
 *       InstrumentationType: "BREAKPOINT" || "PROBE", // required
 *       SignalType: "SNAPSHOT", // required
 *       LocationHash: "STRING_VALUE", // required
 *       Status: "READY" || "ERROR" || "ACTIVE" || "DISABLED", // required
 *       Time: new Date("TIMESTAMP"), // required
 *       ErrorCause: "FILE_NOT_FOUND" || "METHOD_NOT_FOUND" || "LINE_NOT_EXECUTABLE" || "OVERLOADED_METHODS" || "LANGUAGE_MISMATCH" || "RUNTIME_ERROR",
 *     },
 *   ],
 * };
 * const command = new ReportInstrumentationConfigurationStatusCommand(input);
 * const response = await client.send(command);
 * // { // ReportInstrumentationConfigurationStatusResponse
 * //   Service: "STRING_VALUE", // required
 * //   Environment: "STRING_VALUE", // required
 * //   UnprocessedStatusEvents: [ // UnprocessedStatusEventList // required
 * //     { // UnprocessedStatusEvent
 * //       InstrumentationType: "BREAKPOINT" || "PROBE", // required
 * //       SignalType: "SNAPSHOT", // required
 * //       LocationHash: "STRING_VALUE", // required
 * //       Status: "READY" || "ERROR" || "ACTIVE" || "DISABLED", // required
 * //       Time: new Date("TIMESTAMP"), // required
 * //       FailedReason: "THROTTLED" || "INTERNAL_ERROR" || "VALIDATION_ERROR", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ReportInstrumentationConfigurationStatusCommandInput - {@link ReportInstrumentationConfigurationStatusCommandInput}
 * @returns {@link ReportInstrumentationConfigurationStatusCommandOutput}
 * @see {@link ReportInstrumentationConfigurationStatusCommandInput} for command's `input` shape.
 * @see {@link ReportInstrumentationConfigurationStatusCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource is not valid.</p>
 *
 * @throws {@link ApplicationSignalsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationSignals service.</p>
 *
 *
 * @public
 */
export class ReportInstrumentationConfigurationStatusCommand extends command<ReportInstrumentationConfigurationStatusCommandInput, ReportInstrumentationConfigurationStatusCommandOutput>(
  _ep0,
  _mw0,
  "ReportInstrumentationConfigurationStatus",
  ReportInstrumentationConfigurationStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReportInstrumentationConfigurationStatusRequest;
      output: ReportInstrumentationConfigurationStatusResponse;
    };
    sdk: {
      input: ReportInstrumentationConfigurationStatusCommandInput;
      output: ReportInstrumentationConfigurationStatusCommandOutput;
    };
  };
}
