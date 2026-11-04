// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEnabledBaselinesInput, ListEnabledBaselinesOutput } from "../models/models_0";
import { ListEnabledBaselines$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnabledBaselinesCommand}.
 */
export interface ListEnabledBaselinesCommandInput extends ListEnabledBaselinesInput {}
/**
 * @public
 *
 * The output of {@link ListEnabledBaselinesCommand}.
 */
export interface ListEnabledBaselinesCommandOutput extends ListEnabledBaselinesOutput, __MetadataBearer {}

/**
 * Returns a list of summaries describing `EnabledBaseline` resources. You can filter the list by the corresponding `Baseline` or `Target` of the `EnabledBaseline` resources. For usage examples, see [*the Amazon Web Services Control Tower User Guide*](https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ListEnabledBaselinesCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ListEnabledBaselinesCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // ListEnabledBaselinesInput
 *   filter: { // EnabledBaselineFilter
 *     targetIdentifiers: [ // EnabledBaselineTargetIdentifiers
 *       "STRING_VALUE",
 *     ],
 *     baselineIdentifiers: [ // EnabledBaselineBaselineIdentifiers
 *       "STRING_VALUE",
 *     ],
 *     parentIdentifiers: [ // EnabledBaselineParentIdentifiers
 *       "STRING_VALUE",
 *     ],
 *     statuses: [ // EnabledBaselineEnablementStatuses
 *       "SUCCEEDED" || "FAILED" || "UNDER_CHANGE",
 *     ],
 *     inheritanceDriftStatuses: [ // EnabledBaselineDriftStatuses
 *       "IN_SYNC" || "DRIFTED",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   includeChildren: true || false,
 * };
 * const command = new ListEnabledBaselinesCommand(input);
 * const response = await client.send(command);
 * // { // ListEnabledBaselinesOutput
 * //   enabledBaselines: [ // EnabledBaselines // required
 * //     { // EnabledBaselineSummary
 * //       arn: "STRING_VALUE", // required
 * //       baselineIdentifier: "STRING_VALUE", // required
 * //       baselineVersion: "STRING_VALUE",
 * //       driftStatusSummary: { // EnabledBaselineDriftStatusSummary
 * //         types: { // EnabledBaselineDriftTypes
 * //           inheritance: { // EnabledBaselineInheritanceDrift
 * //             status: "IN_SYNC" || "DRIFTED",
 * //           },
 * //         },
 * //       },
 * //       targetIdentifier: "STRING_VALUE", // required
 * //       parentIdentifier: "STRING_VALUE",
 * //       statusSummary: { // EnablementStatusSummary
 * //         status: "SUCCEEDED" || "FAILED" || "UNDER_CHANGE",
 * //         lastOperationIdentifier: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnabledBaselinesCommandInput - {@link ListEnabledBaselinesCommandInput}
 * @returns {@link ListEnabledBaselinesCommandOutput}
 * @see {@link ListEnabledBaselinesCommandInput} for command's `input` shape.
 * @see {@link ListEnabledBaselinesCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during processing of a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link ControlTowerServiceException}
 *
 * Base exception class for all service exceptions from ControlTower service.
 *
 * @public
 */
export class ListEnabledBaselinesCommand extends command<ListEnabledBaselinesCommandInput, ListEnabledBaselinesCommandOutput>(
  _ep0,
  _mw0,
  "ListEnabledBaselines",
  ListEnabledBaselines$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnabledBaselinesInput;
      output: ListEnabledBaselinesOutput;
    };
    sdk: {
      input: ListEnabledBaselinesCommandInput;
      output: ListEnabledBaselinesCommandOutput;
    };
  };
}
