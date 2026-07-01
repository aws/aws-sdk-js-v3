// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTagsInput, DescribeTagsOutput } from "../models/models_0";
import { DescribeTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTagsCommand}.
 */
export interface DescribeTagsCommandInput extends DescribeTagsInput {}
/**
 * @public
 *
 * The output of {@link DescribeTagsCommand}.
 */
export interface DescribeTagsCommandOutput extends DescribeTagsOutput, __MetadataBearer {}

/**
 * <p>Describes one or more of the tags for your Amazon ML object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeTagsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeTagsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // DescribeTagsInput
 *   ResourceId: "STRING_VALUE", // required
 *   ResourceType: "BatchPrediction" || "DataSource" || "Evaluation" || "MLModel", // required
 * };
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTagsOutput
 * //   ResourceId: "STRING_VALUE",
 * //   ResourceType: "BatchPrediction" || "DataSource" || "Evaluation" || "MLModel",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTagsCommandInput - {@link DescribeTagsCommandInput}
 * @returns {@link DescribeTagsCommandOutput}
 * @see {@link DescribeTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource cannot be located.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 *
 * @public
 */
export class DescribeTagsCommand extends command<DescribeTagsCommandInput, DescribeTagsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTags",
  DescribeTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTagsInput;
      output: DescribeTagsOutput;
    };
    sdk: {
      input: DescribeTagsCommandInput;
      output: DescribeTagsCommandOutput;
    };
  };
}
