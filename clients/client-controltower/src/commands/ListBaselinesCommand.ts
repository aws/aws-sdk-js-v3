// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBaselinesInput, ListBaselinesOutput } from "../models/models_0";
import { de_ListBaselinesCommand, se_ListBaselinesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBaselinesCommand}.
 */
export interface ListBaselinesCommandInput extends ListBaselinesInput {}
/**
 * @public
 *
 * The output of {@link ListBaselinesCommand}.
 */
export interface ListBaselinesCommandOutput extends ListBaselinesOutput, __MetadataBearer {}

/**
 * <p>Returns a summary list of all available baselines. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html"> <i>the Amazon Web Services Control Tower User Guide</i> </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ListBaselinesCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ListBaselinesCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // ListBaselinesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBaselinesCommand(input);
 * const response = await client.send(command);
 * // { // ListBaselinesOutput
 * //   baselines: [ // Baselines // required
 * //     { // BaselineSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBaselinesCommandInput - {@link ListBaselinesCommandInput}
 * @returns {@link ListBaselinesCommandOutput}
 * @see {@link ListBaselinesCommandInput} for command's `input` shape.
 * @see {@link ListBaselinesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListBaselinesCommand extends $Command
  .classBuilder<
    ListBaselinesCommandInput,
    ListBaselinesCommandOutput,
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
  .s("AWSControlTowerApis", "ListBaselines", {})
  .n("ControlTowerClient", "ListBaselinesCommand")
  .f(void 0, void 0)
  .ser(se_ListBaselinesCommand)
  .de(de_ListBaselinesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBaselinesInput;
      output: ListBaselinesOutput;
    };
    sdk: {
      input: ListBaselinesCommandInput;
      output: ListBaselinesCommandOutput;
    };
  };
}
