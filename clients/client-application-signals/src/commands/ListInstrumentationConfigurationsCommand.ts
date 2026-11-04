// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InstrumentationConfigurationsPage, ListInstrumentationConfigurationsRequest } from "../models/models_0";
import { ListInstrumentationConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns all active instrumentation configurations for a service and environment. SDKs use this operation to sync configurations and apply client-side filters locally.
 *
 * Include the previous `SyncedAt` value to perform incremental syncs. When no changes are detected, the response sets `Changed` to `false` and omits configuration details.
 *
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
 *
 * Resource not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The resource is not valid.
 *
 * @throws {@link ApplicationSignalsServiceException}
 *
 * Base exception class for all service exceptions from ApplicationSignals service.
 *
 * @public
 */
export class ListInstrumentationConfigurationsCommand extends command<ListInstrumentationConfigurationsCommandInput, ListInstrumentationConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListInstrumentationConfigurations",
  ListInstrumentationConfigurations$
) {
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
