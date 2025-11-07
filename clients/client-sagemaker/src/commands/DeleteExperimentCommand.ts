// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteExperimentRequest, DeleteExperimentResponse } from "../models/models_2";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteExperiment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteExperimentCommand}.
 */
export interface DeleteExperimentCommandInput extends DeleteExperimentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExperimentCommand}.
 */
export interface DeleteExperimentCommandOutput extends DeleteExperimentResponse, __MetadataBearer {}

/**
 * <p>Deletes an SageMaker experiment. All trials associated with the experiment must be deleted first. Use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API to get a list of the trials associated with the experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteExperimentRequest
 *   ExperimentName: "STRING_VALUE", // required
 * };
 * const command = new DeleteExperimentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteExperimentResponse
 * //   ExperimentArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteExperimentCommandInput - {@link DeleteExperimentCommandInput}
 * @returns {@link DeleteExperimentCommandOutput}
 * @see {@link DeleteExperimentCommandInput} for command's `input` shape.
 * @see {@link DeleteExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteExperimentCommand extends $Command
  .classBuilder<
    DeleteExperimentCommandInput,
    DeleteExperimentCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteExperiment", {})
  .n("SageMakerClient", "DeleteExperimentCommand")
  .sc(DeleteExperiment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExperimentRequest;
      output: DeleteExperimentResponse;
    };
    sdk: {
      input: DeleteExperimentCommandInput;
      output: DeleteExperimentCommandOutput;
    };
  };
}
