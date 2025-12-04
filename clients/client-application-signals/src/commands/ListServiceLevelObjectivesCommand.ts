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
import type { ListServiceLevelObjectivesInput, ListServiceLevelObjectivesOutput } from "../models/models_0";
import { ListServiceLevelObjectives } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceLevelObjectivesCommand}.
 */
export interface ListServiceLevelObjectivesCommandInput extends ListServiceLevelObjectivesInput {}
/**
 * @public
 *
 * The output of {@link ListServiceLevelObjectivesCommand}.
 */
export interface ListServiceLevelObjectivesCommandOutput extends ListServiceLevelObjectivesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of SLOs created in this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ListServiceLevelObjectivesCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ListServiceLevelObjectivesCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ListServiceLevelObjectivesInput
 *   KeyAttributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   OperationName: "STRING_VALUE",
 *   DependencyConfig: { // DependencyConfig
 *     DependencyKeyAttributes: { // required
 *       "<keys>": "STRING_VALUE",
 *     },
 *     DependencyOperationName: "STRING_VALUE", // required
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   IncludeLinkedAccounts: true || false,
 *   SloOwnerAwsAccountId: "STRING_VALUE",
 *   MetricSourceTypes: [ // MetricSourceTypes
 *     "ServiceOperation" || "CloudWatchMetric" || "ServiceDependency",
 *   ],
 * };
 * const command = new ListServiceLevelObjectivesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceLevelObjectivesOutput
 * //   SloSummaries: [ // ServiceLevelObjectiveSummaries
 * //     { // ServiceLevelObjectiveSummary
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       KeyAttributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       OperationName: "STRING_VALUE",
 * //       DependencyConfig: { // DependencyConfig
 * //         DependencyKeyAttributes: { // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         DependencyOperationName: "STRING_VALUE", // required
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       EvaluationType: "PeriodBased" || "RequestBased",
 * //       MetricSourceType: "ServiceOperation" || "CloudWatchMetric" || "ServiceDependency",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceLevelObjectivesCommandInput - {@link ListServiceLevelObjectivesCommandInput}
 * @returns {@link ListServiceLevelObjectivesCommandOutput}
 * @see {@link ListServiceLevelObjectivesCommandInput} for command's `input` shape.
 * @see {@link ListServiceLevelObjectivesCommandOutput} for command's `response` shape.
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
export class ListServiceLevelObjectivesCommand extends $Command
  .classBuilder<
    ListServiceLevelObjectivesCommandInput,
    ListServiceLevelObjectivesCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationSignals", "ListServiceLevelObjectives", {})
  .n("ApplicationSignalsClient", "ListServiceLevelObjectivesCommand")
  .sc(ListServiceLevelObjectives)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceLevelObjectivesInput;
      output: ListServiceLevelObjectivesOutput;
    };
    sdk: {
      input: ListServiceLevelObjectivesCommandInput;
      output: ListServiceLevelObjectivesCommandOutput;
    };
  };
}
