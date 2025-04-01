// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEnabledControlsInput, ListEnabledControlsOutput } from "../models/models_0";
import { de_ListEnabledControlsCommand, se_ListEnabledControlsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnabledControlsCommand}.
 */
export interface ListEnabledControlsCommandInput extends ListEnabledControlsInput {}
/**
 * @public
 *
 * The output of {@link ListEnabledControlsCommand}.
 */
export interface ListEnabledControlsCommandOutput extends ListEnabledControlsOutput, __MetadataBearer {}

/**
 * <p>Lists the controls enabled by Amazon Web Services Control Tower on the specified organizational unit and
 *          the accounts it contains. For usage examples, see the <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html">
 *                <i>Controls Reference Guide</i>
 *             </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ListEnabledControlsCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ListEnabledControlsCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // ListEnabledControlsInput
 *   targetIdentifier: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: { // EnabledControlFilter
 *     controlIdentifiers: [ // ControlIdentifiers
 *       "STRING_VALUE",
 *     ],
 *     statuses: [ // EnablementStatuses
 *       "SUCCEEDED" || "FAILED" || "UNDER_CHANGE",
 *     ],
 *     driftStatuses: [ // DriftStatuses
 *       "DRIFTED" || "IN_SYNC" || "NOT_CHECKING" || "UNKNOWN",
 *     ],
 *   },
 * };
 * const command = new ListEnabledControlsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnabledControlsOutput
 * //   enabledControls: [ // EnabledControls // required
 * //     { // EnabledControlSummary
 * //       controlIdentifier: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       targetIdentifier: "STRING_VALUE",
 * //       statusSummary: { // EnablementStatusSummary
 * //         status: "SUCCEEDED" || "FAILED" || "UNDER_CHANGE",
 * //         lastOperationIdentifier: "STRING_VALUE",
 * //       },
 * //       driftStatusSummary: { // DriftStatusSummary
 * //         driftStatus: "DRIFTED" || "IN_SYNC" || "NOT_CHECKING" || "UNKNOWN",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnabledControlsCommandInput - {@link ListEnabledControlsCommandInput}
 * @returns {@link ListEnabledControlsCommandOutput}
 * @see {@link ListEnabledControlsCommandInput} for command's `input` shape.
 * @see {@link ListEnabledControlsCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
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
 *
 * @public
 */
export class ListEnabledControlsCommand extends $Command
  .classBuilder<
    ListEnabledControlsCommandInput,
    ListEnabledControlsCommandOutput,
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
  .s("AWSControlTowerApis", "ListEnabledControls", {})
  .n("ControlTowerClient", "ListEnabledControlsCommand")
  .f(void 0, void 0)
  .ser(se_ListEnabledControlsCommand)
  .de(de_ListEnabledControlsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnabledControlsInput;
      output: ListEnabledControlsOutput;
    };
    sdk: {
      input: ListEnabledControlsCommandInput;
      output: ListEnabledControlsCommandOutput;
    };
  };
}
