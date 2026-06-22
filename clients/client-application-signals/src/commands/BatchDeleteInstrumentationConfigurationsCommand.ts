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
  BatchDeleteInstrumentationConfigurationsRequest,
  BatchDeleteInstrumentationConfigurationsResponse,
} from "../models/models_0";
import { BatchDeleteInstrumentationConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteInstrumentationConfigurationsCommand}.
 */
export interface BatchDeleteInstrumentationConfigurationsCommandInput extends BatchDeleteInstrumentationConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteInstrumentationConfigurationsCommand}.
 */
export interface BatchDeleteInstrumentationConfigurationsCommandOutput extends BatchDeleteInstrumentationConfigurationsResponse, __MetadataBearer {}

/**
 * Deletes multiple instrumentation configurations in a single request.
 * Supports two mutually exclusive selection methods:
 * - By scope: Delete all configurations matching a Service + Environment + InstrumentationType
 * - By ARN list: Delete specific configurations by providing a list of resource ARNs
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, BatchDeleteInstrumentationConfigurationsCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, BatchDeleteInstrumentationConfigurationsCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // BatchDeleteInstrumentationConfigurationsRequest
 *   DeletionTarget: { // BatchDeleteDeletionTarget Union: only one key present
 *     Scope: { // BatchDeleteScope
 *       Service: "STRING_VALUE", // required
 *       Environment: "STRING_VALUE", // required
 *       InstrumentationType: "BREAKPOINT" || "PROBE", // required
 *     },
 *     ResourceArns: { // BatchDeleteByResourceArns
 *       ResourceArns: [ // BatchDeleteResourceArnList // required
 *         "STRING_VALUE",
 *       ],
 *       InstrumentationType: "BREAKPOINT" || "PROBE", // required
 *     },
 *   },
 * };
 * const command = new BatchDeleteInstrumentationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteInstrumentationConfigurationsResponse
 * //   DeletedCount: Number("int"), // required
 * //   SuccessfulDeletions: [ // BatchDeleteSuccessfulDeletionList // required
 * //     { // BatchDeleteSuccessfulDeletion
 * //       ResourceArn: "STRING_VALUE",
 * //       SignalType: "STRING_VALUE",
 * //       LocationHash: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Errors: [ // BatchDeleteErrorList // required
 * //     { // BatchDeleteError
 * //       ResourceArn: "STRING_VALUE", // required
 * //       Code: "ResourceNotFoundException" || "AccessDeniedException" || "InternalServiceException", // required
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteInstrumentationConfigurationsCommandInput - {@link BatchDeleteInstrumentationConfigurationsCommandInput}
 * @returns {@link BatchDeleteInstrumentationConfigurationsCommandOutput}
 * @see {@link BatchDeleteInstrumentationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteInstrumentationConfigurationsCommandOutput} for command's `response` shape.
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
export class BatchDeleteInstrumentationConfigurationsCommand extends $Command
  .classBuilder<
    BatchDeleteInstrumentationConfigurationsCommandInput,
    BatchDeleteInstrumentationConfigurationsCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationSignals", "BatchDeleteInstrumentationConfigurations", {})
  .n("ApplicationSignalsClient", "BatchDeleteInstrumentationConfigurationsCommand")
  .sc(BatchDeleteInstrumentationConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteInstrumentationConfigurationsRequest;
      output: BatchDeleteInstrumentationConfigurationsResponse;
    };
    sdk: {
      input: BatchDeleteInstrumentationConfigurationsCommandInput;
      output: BatchDeleteInstrumentationConfigurationsCommandOutput;
    };
  };
}
