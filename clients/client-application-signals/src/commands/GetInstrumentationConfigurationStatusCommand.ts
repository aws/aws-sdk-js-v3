// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetInstrumentationConfigurationStatusRequest,
  GetInstrumentationConfigurationStatusResponse,
} from "../models/models_0";
import { GetInstrumentationConfigurationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetInstrumentationConfigurationStatusCommand}.
 */
export interface GetInstrumentationConfigurationStatusCommandInput extends GetInstrumentationConfigurationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetInstrumentationConfigurationStatusCommand}.
 */
export interface GetInstrumentationConfigurationStatusCommandOutput extends GetInstrumentationConfigurationStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the status history for a single instrumentation configuration during a specified time range. The response lists when the configuration was ACTIVE, READY, ERROR, or DISABLED.</p> <p>If no status or time window is provided, the operation defaults to ACTIVE events from the last hour.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, GetInstrumentationConfigurationStatusCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, GetInstrumentationConfigurationStatusCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // GetInstrumentationConfigurationStatusRequest
 *   InstrumentationType: "BREAKPOINT" || "PROBE", // required
 *   Service: "STRING_VALUE", // required
 *   Environment: "STRING_VALUE", // required
 *   SignalType: "SNAPSHOT", // required
 *   LocationIdentifier: { // LocationIdentifier Union: only one key present
 *     CodeLocation: { // CodeLocation
 *       Language: "Java" || "Python" || "Javascript", // required
 *       CodeUnit: "STRING_VALUE",
 *       ClassName: "STRING_VALUE",
 *       MethodName: "STRING_VALUE",
 *       FilePath: "STRING_VALUE", // required
 *       LineNumber: Number("int"),
 *     },
 *     LocationHash: "STRING_VALUE",
 *   },
 *   Status: "READY" || "ERROR" || "ACTIVE" || "DISABLED",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetInstrumentationConfigurationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetInstrumentationConfigurationStatusResponse
 * //   Service: "STRING_VALUE", // required
 * //   Environment: "STRING_VALUE", // required
 * //   SignalType: "SNAPSHOT", // required
 * //   Location: { // Location Union: only one key present
 * //     CodeLocation: { // CodeLocation
 * //       Language: "Java" || "Python" || "Javascript", // required
 * //       CodeUnit: "STRING_VALUE",
 * //       ClassName: "STRING_VALUE",
 * //       MethodName: "STRING_VALUE",
 * //       FilePath: "STRING_VALUE", // required
 * //       LineNumber: Number("int"),
 * //     },
 * //   },
 * //   Status: "READY" || "ERROR" || "ACTIVE" || "DISABLED", // required
 * //   Events: [ // InstrumentationStatusEventList // required
 * //     { // InstrumentationStatusEvent
 * //       Time: new Date("TIMESTAMP"), // required
 * //       ErrorCause: "FILE_NOT_FOUND" || "METHOD_NOT_FOUND" || "LINE_NOT_EXECUTABLE" || "OVERLOADED_METHODS" || "LANGUAGE_MISMATCH" || "RUNTIME_ERROR",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInstrumentationConfigurationStatusCommandInput - {@link GetInstrumentationConfigurationStatusCommandInput}
 * @returns {@link GetInstrumentationConfigurationStatusCommandOutput}
 * @see {@link GetInstrumentationConfigurationStatusCommandInput} for command's `input` shape.
 * @see {@link GetInstrumentationConfigurationStatusCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
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
export class GetInstrumentationConfigurationStatusCommand extends command<GetInstrumentationConfigurationStatusCommandInput, GetInstrumentationConfigurationStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetInstrumentationConfigurationStatus",
  GetInstrumentationConfigurationStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstrumentationConfigurationStatusRequest;
      output: GetInstrumentationConfigurationStatusResponse;
    };
    sdk: {
      input: GetInstrumentationConfigurationStatusCommandInput;
      output: GetInstrumentationConfigurationStatusCommandOutput;
    };
  };
}
