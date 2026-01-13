// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MachineLearningClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MachineLearningClient";
import type { AddTagsInput, AddTagsOutput } from "../models/models_0";
import { AddTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddTagsCommand}.
 */
export interface AddTagsCommandInput extends AddTagsInput {}
/**
 * @public
 *
 * The output of {@link AddTagsCommand}.
 */
export interface AddTagsCommandOutput extends AddTagsOutput, __MetadataBearer {}

/**
 * <p>Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key
 * 		    and an optional value. If you add a tag using a key that is already associated with the ML object,
 * 			<code>AddTags</code> updates the tag's value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, AddTagsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, AddTagsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // AddTagsInput
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ResourceId: "STRING_VALUE", // required
 *   ResourceType: "BatchPrediction" || "DataSource" || "Evaluation" || "MLModel", // required
 * };
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * // { // AddTagsOutput
 * //   ResourceId: "STRING_VALUE",
 * //   ResourceType: "BatchPrediction" || "DataSource" || "Evaluation" || "MLModel",
 * // };
 *
 * ```
 *
 * @param AddTagsCommandInput - {@link AddTagsCommandInput}
 * @returns {@link AddTagsCommandOutput}
 * @see {@link AddTagsCommandInput} for command's `input` shape.
 * @see {@link AddTagsCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource cannot be located.</p>
 *
 * @throws {@link TagLimitExceededException} (client fault)
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 *
 * @public
 */
export class AddTagsCommand extends $Command
  .classBuilder<
    AddTagsCommandInput,
    AddTagsCommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonML_20141212", "AddTags", {})
  .n("MachineLearningClient", "AddTagsCommand")
  .sc(AddTags$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddTagsInput;
      output: AddTagsOutput;
    };
    sdk: {
      input: AddTagsCommandInput;
      output: AddTagsCommandOutput;
    };
  };
}
