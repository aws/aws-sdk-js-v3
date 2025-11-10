// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchUpdateExclusionWindowsInput, BatchUpdateExclusionWindowsOutput } from "../models/models_0";
import { BatchUpdateExclusionWindows } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateExclusionWindowsCommand}.
 */
export interface BatchUpdateExclusionWindowsCommandInput extends BatchUpdateExclusionWindowsInput {}
/**
 * @public
 *
 * The output of {@link BatchUpdateExclusionWindowsCommand}.
 */
export interface BatchUpdateExclusionWindowsCommandOutput extends BatchUpdateExclusionWindowsOutput, __MetadataBearer {}

/**
 * <p>Add or remove time window exclusions for one or more Service Level Objectives (SLOs).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, BatchUpdateExclusionWindowsCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, BatchUpdateExclusionWindowsCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // BatchUpdateExclusionWindowsInput
 *   SloIds: [ // ServiceLevelObjectiveIds // required
 *     "STRING_VALUE",
 *   ],
 *   AddExclusionWindows: [ // ExclusionWindows
 *     { // ExclusionWindow
 *       Window: { // Window
 *         DurationUnit: "MINUTE" || "HOUR" || "DAY" || "MONTH", // required
 *         Duration: Number("int"), // required
 *       },
 *       StartTime: new Date("TIMESTAMP"),
 *       RecurrenceRule: { // RecurrenceRule
 *         Expression: "STRING_VALUE", // required
 *       },
 *       Reason: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveExclusionWindows: [
 *     {
 *       Window: {
 *         DurationUnit: "MINUTE" || "HOUR" || "DAY" || "MONTH", // required
 *         Duration: Number("int"), // required
 *       },
 *       StartTime: new Date("TIMESTAMP"),
 *       RecurrenceRule: {
 *         Expression: "STRING_VALUE", // required
 *       },
 *       Reason: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchUpdateExclusionWindowsCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateExclusionWindowsOutput
 * //   SloIds: [ // ServiceLevelObjectiveIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   Errors: [ // BatchUpdateExclusionWindowsErrors // required
 * //     { // BatchUpdateExclusionWindowsError
 * //       SloId: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateExclusionWindowsCommandInput - {@link BatchUpdateExclusionWindowsCommandInput}
 * @returns {@link BatchUpdateExclusionWindowsCommandOutput}
 * @see {@link BatchUpdateExclusionWindowsCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateExclusionWindowsCommandOutput} for command's `response` shape.
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
export class BatchUpdateExclusionWindowsCommand extends $Command
  .classBuilder<
    BatchUpdateExclusionWindowsCommandInput,
    BatchUpdateExclusionWindowsCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationSignals", "BatchUpdateExclusionWindows", {})
  .n("ApplicationSignalsClient", "BatchUpdateExclusionWindowsCommand")
  .sc(BatchUpdateExclusionWindows)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateExclusionWindowsInput;
      output: BatchUpdateExclusionWindowsOutput;
    };
    sdk: {
      input: BatchUpdateExclusionWindowsCommandInput;
      output: BatchUpdateExclusionWindowsCommandOutput;
    };
  };
}
