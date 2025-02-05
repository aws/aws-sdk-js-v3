// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteHyperParameterTuningJobRequest } from "../models/models_2";
import {
  de_DeleteHyperParameterTuningJobCommand,
  se_DeleteHyperParameterTuningJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteHyperParameterTuningJobCommand}.
 */
export interface DeleteHyperParameterTuningJobCommandInput extends DeleteHyperParameterTuningJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHyperParameterTuningJobCommand}.
 */
export interface DeleteHyperParameterTuningJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a hyperparameter tuning job. The <code>DeleteHyperParameterTuningJob</code>
 *             API deletes only the tuning job entry that was created in SageMaker when you called the
 *                 <code>CreateHyperParameterTuningJob</code> API. It does not delete training jobs,
 *             artifacts, or the IAM role that you specified when creating the model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // DeleteHyperParameterTuningJobRequest
 *   HyperParameterTuningJobName: "STRING_VALUE", // required
 * };
 * const command = new DeleteHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHyperParameterTuningJobCommandInput - {@link DeleteHyperParameterTuningJobCommandInput}
 * @returns {@link DeleteHyperParameterTuningJobCommandOutput}
 * @see {@link DeleteHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link DeleteHyperParameterTuningJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DeleteHyperParameterTuningJobCommand extends $Command
  .classBuilder<
    DeleteHyperParameterTuningJobCommandInput,
    DeleteHyperParameterTuningJobCommandOutput,
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
  .s("SageMaker", "DeleteHyperParameterTuningJob", {})
  .n("SageMakerClient", "DeleteHyperParameterTuningJobCommand")
  .f(void 0, void 0)
  .ser(se_DeleteHyperParameterTuningJobCommand)
  .de(de_DeleteHyperParameterTuningJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHyperParameterTuningJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteHyperParameterTuningJobCommandInput;
      output: DeleteHyperParameterTuningJobCommandOutput;
    };
  };
}
