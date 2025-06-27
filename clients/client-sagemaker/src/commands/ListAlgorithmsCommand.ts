// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAlgorithmsInput, ListAlgorithmsOutput } from "../models/models_3";
import { de_ListAlgorithmsCommand, se_ListAlgorithmsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAlgorithmsCommand}.
 */
export interface ListAlgorithmsCommandInput extends ListAlgorithmsInput {}
/**
 * @public
 *
 * The output of {@link ListAlgorithmsCommand}.
 */
export interface ListAlgorithmsCommandOutput extends ListAlgorithmsOutput, __MetadataBearer {}

/**
 * <p>Lists the machine learning algorithms that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAlgorithmsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAlgorithmsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListAlgorithmsInput
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListAlgorithmsCommand(input);
 * const response = await client.send(command);
 * // { // ListAlgorithmsOutput
 * //   AlgorithmSummaryList: [ // AlgorithmSummaryList // required
 * //     { // AlgorithmSummary
 * //       AlgorithmName: "STRING_VALUE", // required
 * //       AlgorithmArn: "STRING_VALUE", // required
 * //       AlgorithmDescription: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       AlgorithmStatus: "Pending" || "InProgress" || "Completed" || "Failed" || "Deleting", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAlgorithmsCommandInput - {@link ListAlgorithmsCommandInput}
 * @returns {@link ListAlgorithmsCommandOutput}
 * @see {@link ListAlgorithmsCommandInput} for command's `input` shape.
 * @see {@link ListAlgorithmsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListAlgorithmsCommand extends $Command
  .classBuilder<
    ListAlgorithmsCommandInput,
    ListAlgorithmsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListAlgorithms", {})
  .n("SageMakerClient", "ListAlgorithmsCommand")
  .f(void 0, void 0)
  .ser(se_ListAlgorithmsCommand)
  .de(de_ListAlgorithmsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAlgorithmsInput;
      output: ListAlgorithmsOutput;
    };
    sdk: {
      input: ListAlgorithmsCommandInput;
      output: ListAlgorithmsCommandOutput;
    };
  };
}
