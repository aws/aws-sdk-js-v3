// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DeleteTagsInput, DeleteTagsOutput } from "../models/models_0";
import { de_DeleteTagsCommand, se_DeleteTagsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTagsCommand}.
 */
export interface DeleteTagsCommandInput extends DeleteTagsInput {}
/**
 * @public
 *
 * The output of {@link DeleteTagsCommand}.
 */
export interface DeleteTagsCommandOutput extends DeleteTagsOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p>
 * 		       <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteTagsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteTagsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MachineLearningClient(config);
 * const input = { // DeleteTagsInput
 *   TagKeys: [ // TagKeyList // required
 *     "STRING_VALUE",
 *   ],
 *   ResourceId: "STRING_VALUE", // required
 *   ResourceType: "BatchPrediction" || "DataSource" || "Evaluation" || "MLModel", // required
 * };
 * const command = new DeleteTagsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTagsOutput
 * //   ResourceId: "STRING_VALUE",
 * //   ResourceType: "BatchPrediction" || "DataSource" || "Evaluation" || "MLModel",
 * // };
 *
 * ```
 *
 * @param DeleteTagsCommandInput - {@link DeleteTagsCommandInput}
 * @returns {@link DeleteTagsCommandOutput}
 * @see {@link DeleteTagsCommandInput} for command's `input` shape.
 * @see {@link DeleteTagsCommandOutput} for command's `response` shape.
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
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 * @public
 */
export class DeleteTagsCommand extends $Command
  .classBuilder<
    DeleteTagsCommandInput,
    DeleteTagsCommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonML_20141212", "DeleteTags", {})
  .n("MachineLearningClient", "DeleteTagsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTagsCommand)
  .de(de_DeleteTagsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTagsInput;
      output: DeleteTagsOutput;
    };
    sdk: {
      input: DeleteTagsCommandInput;
      output: DeleteTagsCommandOutput;
    };
  };
}
