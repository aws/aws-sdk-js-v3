// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendPipelineExecutionStepFailureRequest, SendPipelineExecutionStepFailureResponse } from "../models/models_5";
import {
  de_SendPipelineExecutionStepFailureCommand,
  se_SendPipelineExecutionStepFailureCommand,
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
 * The input for {@link SendPipelineExecutionStepFailureCommand}.
 */
export interface SendPipelineExecutionStepFailureCommandInput extends SendPipelineExecutionStepFailureRequest {}
/**
 * @public
 *
 * The output of {@link SendPipelineExecutionStepFailureCommand}.
 */
export interface SendPipelineExecutionStepFailureCommandOutput
  extends SendPipelineExecutionStepFailureResponse,
    __MetadataBearer {}

/**
 * <p>Notifies the pipeline that the execution of a callback step failed, along with a message describing why. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, SendPipelineExecutionStepFailureCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, SendPipelineExecutionStepFailureCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // SendPipelineExecutionStepFailureRequest
 *   CallbackToken: "STRING_VALUE", // required
 *   FailureReason: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new SendPipelineExecutionStepFailureCommand(input);
 * const response = await client.send(command);
 * // { // SendPipelineExecutionStepFailureResponse
 * //   PipelineExecutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendPipelineExecutionStepFailureCommandInput - {@link SendPipelineExecutionStepFailureCommandInput}
 * @returns {@link SendPipelineExecutionStepFailureCommandOutput}
 * @see {@link SendPipelineExecutionStepFailureCommandInput} for command's `input` shape.
 * @see {@link SendPipelineExecutionStepFailureCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
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
export class SendPipelineExecutionStepFailureCommand extends $Command
  .classBuilder<
    SendPipelineExecutionStepFailureCommandInput,
    SendPipelineExecutionStepFailureCommandOutput,
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
  .s("SageMaker", "SendPipelineExecutionStepFailure", {})
  .n("SageMakerClient", "SendPipelineExecutionStepFailureCommand")
  .f(void 0, void 0)
  .ser(se_SendPipelineExecutionStepFailureCommand)
  .de(de_SendPipelineExecutionStepFailureCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendPipelineExecutionStepFailureRequest;
      output: SendPipelineExecutionStepFailureResponse;
    };
    sdk: {
      input: SendPipelineExecutionStepFailureCommandInput;
      output: SendPipelineExecutionStepFailureCommandOutput;
    };
  };
}
