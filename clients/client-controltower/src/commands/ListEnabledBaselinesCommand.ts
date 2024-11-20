// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEnabledBaselinesInput, ListEnabledBaselinesOutput } from "../models/models_0";
import { de_ListEnabledBaselinesCommand, se_ListEnabledBaselinesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of summaries describing <code>EnabledBaseline</code> resources. You can filter the list by the corresponding <code>Baseline</code> or <code>Target</code> of the <code>EnabledBaseline</code> resources. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html">
 *                <i>the Amazon Web Services Control Tower User Guide</i>
 *             </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ListEnabledBaselinesCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ListEnabledBaselinesCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 * @public
 */
export class ListEnabledBaselinesCommand extends $Command
  .classBuilder<
    ListEnabledBaselinesCommandInput,
    ListEnabledBaselinesCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSControlTowerApis", "ListEnabledBaselines", {})
  .n("ControlTowerClient", "ListEnabledBaselinesCommand")
  .f(void 0, void 0)
  .ser(se_ListEnabledBaselinesCommand)
  .de(de_ListEnabledBaselinesCommand)
  .build() {
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
