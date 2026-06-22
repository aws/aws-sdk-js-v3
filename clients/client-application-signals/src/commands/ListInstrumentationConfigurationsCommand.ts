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
import type { InstrumentationConfigurationsPage, ListInstrumentationConfigurationsRequest } from "../models/models_0";
import { ListInstrumentationConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInstrumentationConfigurationsCommand}.
 */
export interface ListInstrumentationConfigurationsCommandInput extends ListInstrumentationConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListInstrumentationConfigurationsCommand}.
 */
export interface ListInstrumentationConfigurationsCommandOutput extends InstrumentationConfigurationsPage, __MetadataBearer {}

/**
 * <p>Returns all active instrumentation configurations for a service and environment. SDKs use this operation to sync configurations and apply client-side filters locally.</p> <p>Include the previous <code>SyncedAt</code> value to perform incremental syncs. When no changes are detected, the response sets <code>Changed</code> to <code>false</code> and omits configuration details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ListInstrumentationConfigurationsCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ListInstrumentationConfigurationsCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ListInstrumentationConfigurationsRequest
 *   Service: "STRING_VALUE", // required
 *   Environment: "STRING_VALUE", // required
 *   InstrumentationType: "BREAKPOINT" || "PROBE", // required
 *   SyncedAt: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInstrumentationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // InstrumentationConfigurationsPage
 * //   Service: "STRING_VALUE", // required
 * //   Environment: "STRING_VALUE", // required
 * //   Changed: true || false, // required
 * //   LatestConfigurations: [ // InstrumentationConfigurationsWithoutServiceEnv
 * //     { // InstrumentationConfigurationWithoutServiceEnv
 * //       InstrumentationType: "BREAKPOINT" || "PROBE", // required
 * //       SignalType: "SNAPSHOT", // required
 * //       Location: { // Location Union: only one key present
 * //         CodeLocation: { // CodeLocation
 * //           Language: "Java" || "Python" || "Javascript", // required
 * //           CodeUnit: "STRING_VALUE",
 * //           ClassName: "STRING_VALUE",
 * //           MethodName: "STRING_VALUE",
 * //           FilePath: "STRING_VALUE", // required
 * //           LineNumber: Number("int"),
 * //         },
 * //       },
 * //       LocationHash: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       ExpiresAt: new Date("TIMESTAMP"),
 * //       AttributeFilters: [ // DynamicInstrumentationAttributeFilters
 * //         { // DynamicInstrumentationAttributeFilterGroup
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       ],
 * //       CaptureConfiguration: { // CaptureConfiguration Union: only one key present
 * //         CodeCapture: { // CodeCaptureConfiguration
 * //           CaptureArguments: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           CaptureReturn: true || false,
 * //           CaptureStackTrace: true || false,
 * //           CaptureLocals: [
 * //             "STRING_VALUE",
 * //           ],
 * //           CaptureLimits: { // CaptureLimitsConfig
 * //             MaxHits: Number("int"),
 * //             MaxStringLength: Number("int"),
 * //             MaxCollectionWidth: Number("int"),
 * //             MaxCollectionDepth: Number("int"),
 * //             MaxStackFrames: Number("int"),
 * //             MaxStackTraceSize: Number("int"),
 * //             MaxObjectDepth: Number("int"),
 * //             MaxFieldsPerObject: Number("int"),
 * //           },
 * //         },
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       ARN: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   SyncedAt: new Date("TIMESTAMP"), // required
 * //   SyncInterval: Number("int"), // required
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstrumentationConfigurationsCommandInput - {@link ListInstrumentationConfigurationsCommandInput}
 * @returns {@link ListInstrumentationConfigurationsCommandOutput}
 * @see {@link ListInstrumentationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListInstrumentationConfigurationsCommandOutput} for command's `response` shape.
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
export class ListInstrumentationConfigurationsCommand extends $Command
  .classBuilder<
    ListInstrumentationConfigurationsCommandInput,
    ListInstrumentationConfigurationsCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationSignals", "ListInstrumentationConfigurations", {})
  .n("ApplicationSignalsClient", "ListInstrumentationConfigurationsCommand")
  .sc(ListInstrumentationConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstrumentationConfigurationsRequest;
      output: InstrumentationConfigurationsPage;
    };
    sdk: {
      input: ListInstrumentationConfigurationsCommandInput;
      output: ListInstrumentationConfigurationsCommandOutput;
    };
  };
}
