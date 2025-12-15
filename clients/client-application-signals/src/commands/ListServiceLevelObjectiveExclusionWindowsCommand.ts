// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListServiceLevelObjectiveExclusionWindowsInput,
  ListServiceLevelObjectiveExclusionWindowsOutput,
} from "../models/models_0";
import { ListServiceLevelObjectiveExclusionWindows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceLevelObjectiveExclusionWindowsCommand}.
 */
export interface ListServiceLevelObjectiveExclusionWindowsCommandInput
  extends ListServiceLevelObjectiveExclusionWindowsInput {}
/**
 * @public
 *
 * The output of {@link ListServiceLevelObjectiveExclusionWindowsCommand}.
 */
export interface ListServiceLevelObjectiveExclusionWindowsCommandOutput
  extends ListServiceLevelObjectiveExclusionWindowsOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves all exclusion windows configured for a specific SLO.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ListServiceLevelObjectiveExclusionWindowsCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ListServiceLevelObjectiveExclusionWindowsCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ListServiceLevelObjectiveExclusionWindowsInput
 *   Id: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceLevelObjectiveExclusionWindowsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceLevelObjectiveExclusionWindowsOutput
 * //   ExclusionWindows: [ // ExclusionWindows // required
 * //     { // ExclusionWindow
 * //       Window: { // Window
 * //         DurationUnit: "MINUTE" || "HOUR" || "DAY" || "MONTH", // required
 * //         Duration: Number("int"), // required
 * //       },
 * //       StartTime: new Date("TIMESTAMP"),
 * //       RecurrenceRule: { // RecurrenceRule
 * //         Expression: "STRING_VALUE", // required
 * //       },
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceLevelObjectiveExclusionWindowsCommandInput - {@link ListServiceLevelObjectiveExclusionWindowsCommandInput}
 * @returns {@link ListServiceLevelObjectiveExclusionWindowsCommandOutput}
 * @see {@link ListServiceLevelObjectiveExclusionWindowsCommandInput} for command's `input` shape.
 * @see {@link ListServiceLevelObjectiveExclusionWindowsCommandOutput} for command's `response` shape.
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
export class ListServiceLevelObjectiveExclusionWindowsCommand extends $Command
  .classBuilder<
    ListServiceLevelObjectiveExclusionWindowsCommandInput,
    ListServiceLevelObjectiveExclusionWindowsCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationSignals", "ListServiceLevelObjectiveExclusionWindows", {})
  .n("ApplicationSignalsClient", "ListServiceLevelObjectiveExclusionWindowsCommand")
  .sc(ListServiceLevelObjectiveExclusionWindows$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceLevelObjectiveExclusionWindowsInput;
      output: ListServiceLevelObjectiveExclusionWindowsOutput;
    };
    sdk: {
      input: ListServiceLevelObjectiveExclusionWindowsCommandInput;
      output: ListServiceLevelObjectiveExclusionWindowsCommandOutput;
    };
  };
}
