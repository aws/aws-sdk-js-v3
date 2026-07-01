// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetInstrumentationConfigurationRequest,
  GetInstrumentationConfigurationResponse,
} from "../models/models_0";
import { GetInstrumentationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetInstrumentationConfigurationCommand}.
 */
export interface GetInstrumentationConfigurationCommandInput extends GetInstrumentationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetInstrumentationConfigurationCommand}.
 */
export interface GetInstrumentationConfigurationCommandOutput extends GetInstrumentationConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns the details of a single instrumentation configuration identified by service, environment, signal type, and location. Use this to audit or display configuration details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, GetInstrumentationConfigurationCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, GetInstrumentationConfigurationCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // GetInstrumentationConfigurationRequest
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
 * };
 * const command = new GetInstrumentationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetInstrumentationConfigurationResponse
 * //   Configuration: { // InstrumentationConfiguration
 * //     InstrumentationType: "BREAKPOINT" || "PROBE", // required
 * //     Service: "STRING_VALUE", // required
 * //     Environment: "STRING_VALUE", // required
 * //     SignalType: "SNAPSHOT", // required
 * //     Location: { // Location Union: only one key present
 * //       CodeLocation: { // CodeLocation
 * //         Language: "Java" || "Python" || "Javascript", // required
 * //         CodeUnit: "STRING_VALUE",
 * //         ClassName: "STRING_VALUE",
 * //         MethodName: "STRING_VALUE",
 * //         FilePath: "STRING_VALUE", // required
 * //         LineNumber: Number("int"),
 * //       },
 * //     },
 * //     LocationHash: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     ExpiresAt: new Date("TIMESTAMP"),
 * //     AttributeFilters: [ // DynamicInstrumentationAttributeFilters
 * //       { // DynamicInstrumentationAttributeFilterGroup
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     ],
 * //     CaptureConfiguration: { // CaptureConfiguration Union: only one key present
 * //       CodeCapture: { // CodeCaptureConfiguration
 * //         CaptureArguments: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         CaptureReturn: true || false,
 * //         CaptureStackTrace: true || false,
 * //         CaptureLocals: [
 * //           "STRING_VALUE",
 * //         ],
 * //         CaptureLimits: { // CaptureLimitsConfig
 * //           MaxHits: Number("int"),
 * //           MaxStringLength: Number("int"),
 * //           MaxCollectionWidth: Number("int"),
 * //           MaxCollectionDepth: Number("int"),
 * //           MaxStackFrames: Number("int"),
 * //           MaxStackTraceSize: Number("int"),
 * //           MaxObjectDepth: Number("int"),
 * //           MaxFieldsPerObject: Number("int"),
 * //         },
 * //       },
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     ARN: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInstrumentationConfigurationCommandInput - {@link GetInstrumentationConfigurationCommandInput}
 * @returns {@link GetInstrumentationConfigurationCommandOutput}
 * @see {@link GetInstrumentationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetInstrumentationConfigurationCommandOutput} for command's `response` shape.
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
export class GetInstrumentationConfigurationCommand extends command<GetInstrumentationConfigurationCommandInput, GetInstrumentationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetInstrumentationConfiguration",
  GetInstrumentationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstrumentationConfigurationRequest;
      output: GetInstrumentationConfigurationResponse;
    };
    sdk: {
      input: GetInstrumentationConfigurationCommandInput;
      output: GetInstrumentationConfigurationCommandOutput;
    };
  };
}
