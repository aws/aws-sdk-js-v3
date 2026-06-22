// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateInstrumentationConfigurationRequest,
  CreateInstrumentationConfigurationResponse,
} from "../models/models_0";
import { CreateInstrumentationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInstrumentationConfigurationCommand}.
 */
export interface CreateInstrumentationConfigurationCommandInput extends CreateInstrumentationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateInstrumentationConfigurationCommand}.
 */
export interface CreateInstrumentationConfigurationCommandOutput extends CreateInstrumentationConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a dynamic instrumentation configuration for a specific code or endpoint location within a service and environment. Configurations are immutable after creation.</p> <p>For <code>BREAKPOINT</code> type configurations, they expire after 24 hours unless a shorter expiration is provided. For <code>PROBE</code> type configurations, they persist until explicitly deleted; an expiration cannot be set for <code>PROBE</code> configurations.</p> <p>If a configuration already exists for the same service, environment, signal type, and location, this operation returns a conflict instead of overwriting it. Use attribute filters and capture settings to control where the instrumentation runs and which data is collected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, CreateInstrumentationConfigurationCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, CreateInstrumentationConfigurationCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // CreateInstrumentationConfigurationRequest
 *   InstrumentationType: "BREAKPOINT" || "PROBE", // required
 *   Service: "STRING_VALUE", // required
 *   Environment: "STRING_VALUE", // required
 *   SignalType: "SNAPSHOT", // required
 *   Location: { // Location Union: only one key present
 *     CodeLocation: { // CodeLocation
 *       Language: "Java" || "Python" || "Javascript", // required
 *       CodeUnit: "STRING_VALUE",
 *       ClassName: "STRING_VALUE",
 *       MethodName: "STRING_VALUE",
 *       FilePath: "STRING_VALUE", // required
 *       LineNumber: Number("int"),
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   ExpiresAt: new Date("TIMESTAMP"),
 *   AttributeFilters: [ // DynamicInstrumentationAttributeFilters
 *     { // DynamicInstrumentationAttributeFilterGroup
 *       "<keys>": "STRING_VALUE",
 *     },
 *   ],
 *   CaptureConfiguration: { // CaptureConfiguration Union: only one key present
 *     CodeCapture: { // CodeCaptureConfiguration
 *       CaptureArguments: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       CaptureReturn: true || false,
 *       CaptureStackTrace: true || false,
 *       CaptureLocals: [
 *         "STRING_VALUE",
 *       ],
 *       CaptureLimits: { // CaptureLimitsConfig
 *         MaxHits: Number("int"),
 *         MaxStringLength: Number("int"),
 *         MaxCollectionWidth: Number("int"),
 *         MaxCollectionDepth: Number("int"),
 *         MaxStackFrames: Number("int"),
 *         MaxStackTraceSize: Number("int"),
 *         MaxObjectDepth: Number("int"),
 *         MaxFieldsPerObject: Number("int"),
 *       },
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInstrumentationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateInstrumentationConfigurationResponse
 * //   InstrumentationType: "BREAKPOINT" || "PROBE", // required
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
 * //   LocationHash: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   ExpiresAt: new Date("TIMESTAMP"),
 * //   AttributeFilters: [ // DynamicInstrumentationAttributeFilters
 * //     { // DynamicInstrumentationAttributeFilterGroup
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * //   CaptureConfiguration: { // CaptureConfiguration Union: only one key present
 * //     CodeCapture: { // CodeCaptureConfiguration
 * //       CaptureArguments: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       CaptureReturn: true || false,
 * //       CaptureStackTrace: true || false,
 * //       CaptureLocals: [
 * //         "STRING_VALUE",
 * //       ],
 * //       CaptureLimits: { // CaptureLimitsConfig
 * //         MaxHits: Number("int"),
 * //         MaxStringLength: Number("int"),
 * //         MaxCollectionWidth: Number("int"),
 * //         MaxCollectionDepth: Number("int"),
 * //         MaxStackFrames: Number("int"),
 * //         MaxStackTraceSize: Number("int"),
 * //         MaxObjectDepth: Number("int"),
 * //         MaxFieldsPerObject: Number("int"),
 * //       },
 * //     },
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   ARN: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateInstrumentationConfigurationCommandInput - {@link CreateInstrumentationConfigurationCommandInput}
 * @returns {@link CreateInstrumentationConfigurationCommandOutput}
 * @see {@link CreateInstrumentationConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateInstrumentationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
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
export class CreateInstrumentationConfigurationCommand extends $Command
  .classBuilder<
    CreateInstrumentationConfigurationCommandInput,
    CreateInstrumentationConfigurationCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationSignals", "CreateInstrumentationConfiguration", {})
  .n("ApplicationSignalsClient", "CreateInstrumentationConfigurationCommand")
  .sc(CreateInstrumentationConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInstrumentationConfigurationRequest;
      output: CreateInstrumentationConfigurationResponse;
    };
    sdk: {
      input: CreateInstrumentationConfigurationCommandInput;
      output: CreateInstrumentationConfigurationCommandOutput;
    };
  };
}
