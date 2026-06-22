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
  DeleteInstrumentationConfigurationRequest,
  DeleteInstrumentationConfigurationResponse,
} from "../models/models_0";
import { DeleteInstrumentationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInstrumentationConfigurationCommand}.
 */
export interface DeleteInstrumentationConfigurationCommandInput extends DeleteInstrumentationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInstrumentationConfigurationCommand}.
 */
export interface DeleteInstrumentationConfigurationCommandOutput extends DeleteInstrumentationConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified instrumentation configuration. SDKs remove the instrumentation during their next sync after the configuration is deleted or expires.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, DeleteInstrumentationConfigurationCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, DeleteInstrumentationConfigurationCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // DeleteInstrumentationConfigurationRequest
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
 * const command = new DeleteInstrumentationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInstrumentationConfigurationResponse
 * //   DeletionStatus: "DELETED", // required
 * // };
 *
 * ```
 *
 * @param DeleteInstrumentationConfigurationCommandInput - {@link DeleteInstrumentationConfigurationCommandInput}
 * @returns {@link DeleteInstrumentationConfigurationCommandOutput}
 * @see {@link DeleteInstrumentationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteInstrumentationConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteInstrumentationConfigurationCommand extends $Command
  .classBuilder<
    DeleteInstrumentationConfigurationCommandInput,
    DeleteInstrumentationConfigurationCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationSignals", "DeleteInstrumentationConfiguration", {})
  .n("ApplicationSignalsClient", "DeleteInstrumentationConfigurationCommand")
  .sc(DeleteInstrumentationConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInstrumentationConfigurationRequest;
      output: DeleteInstrumentationConfigurationResponse;
    };
    sdk: {
      input: DeleteInstrumentationConfigurationCommandInput;
      output: DeleteInstrumentationConfigurationCommandOutput;
    };
  };
}
