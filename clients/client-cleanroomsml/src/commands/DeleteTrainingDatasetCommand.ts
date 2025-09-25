// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTrainingDatasetRequest } from "../models/models_0";
import { DeleteTrainingDataset } from "../schemas/schemas_2_Training";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrainingDatasetCommand}.
 */
export interface DeleteTrainingDatasetCommandInput extends DeleteTrainingDatasetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrainingDatasetCommand}.
 */
export interface DeleteTrainingDatasetCommandOutput extends __MetadataBearer {}

/**
 * <p>Specifies a training dataset that you want to delete. You can't delete a training dataset if there are any audience models that depend on the training dataset. In Clean Rooms ML, the <code>TrainingDataset</code> is metadata that points to a Glue table, which is read only during <code>AudienceModel</code> creation. This action deletes the metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteTrainingDatasetCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteTrainingDatasetCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteTrainingDatasetRequest
 *   trainingDatasetArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrainingDatasetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrainingDatasetCommandInput - {@link DeleteTrainingDatasetCommandInput}
 * @returns {@link DeleteTrainingDatasetCommandOutput}
 * @see {@link DeleteTrainingDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteTrainingDatasetCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't complete this action because another resource depends on this resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class DeleteTrainingDatasetCommand extends $Command
  .classBuilder<
    DeleteTrainingDatasetCommandInput,
    DeleteTrainingDatasetCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "DeleteTrainingDataset", {})
  .n("CleanRoomsMLClient", "DeleteTrainingDatasetCommand")
  .sc(DeleteTrainingDataset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrainingDatasetRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrainingDatasetCommandInput;
      output: DeleteTrainingDatasetCommandOutput;
    };
  };
}
