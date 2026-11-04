// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTagsInput, DeleteTagsOutput } from "../models/models_0";
import { DeleteTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.
 *
 * If you specify a tag that doesn't exist, Amazon ML ignores it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteTagsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteTagsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
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
 *
 * An error on the server occurred when trying to process a request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * An error on the client occurred. Typically, the cause is an invalid input value.
 *
 * @throws {@link InvalidTagException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource cannot be located.
 *
 * @throws {@link MachineLearningServiceException}
 *
 * Base exception class for all service exceptions from MachineLearning service.
 *
 * @public
 */
export class DeleteTagsCommand extends command<DeleteTagsCommandInput, DeleteTagsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTags",
  DeleteTags$
) {
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
