// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInferenceExperimentRequest, DeleteInferenceExperimentResponse } from "../models/models_2";
import { de_DeleteInferenceExperimentCommand, se_DeleteInferenceExperimentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInferenceExperimentCommand}.
 */
export interface DeleteInferenceExperimentCommandInput extends DeleteInferenceExperimentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInferenceExperimentCommand}.
 */
export interface DeleteInferenceExperimentCommandOutput extends DeleteInferenceExperimentResponse, __MetadataBearer {}

/**
 * <p>Deletes an inference experiment.</p>
 *          <note>
 *             <p>
 *                This operation does not delete your endpoint, variants, or any underlying resources. This operation only
 *                deletes the metadata of your experiment.
 *            </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteInferenceExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteInferenceExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteInferenceExperimentRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteInferenceExperimentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInferenceExperimentResponse
 * //   InferenceExperimentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteInferenceExperimentCommandInput - {@link DeleteInferenceExperimentCommandInput}
 * @returns {@link DeleteInferenceExperimentCommandOutput}
 * @see {@link DeleteInferenceExperimentCommandInput} for command's `input` shape.
 * @see {@link DeleteInferenceExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DeleteInferenceExperimentCommand extends $Command
  .classBuilder<
    DeleteInferenceExperimentCommandInput,
    DeleteInferenceExperimentCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DeleteInferenceExperiment", {})
  .n("SageMakerClient", "DeleteInferenceExperimentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteInferenceExperimentCommand)
  .de(de_DeleteInferenceExperimentCommand)
  .build() {}
