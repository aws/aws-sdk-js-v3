// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendPipelineExecutionStepSuccessRequest, SendPipelineExecutionStepSuccessResponse } from "../models/models_5";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { SendPipelineExecutionStepSuccess } from "../schemas/schemas_95_Pipeline";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendPipelineExecutionStepSuccessCommand}.
 */
export interface SendPipelineExecutionStepSuccessCommandInput extends SendPipelineExecutionStepSuccessRequest {}
/**
 * @public
 *
 * The output of {@link SendPipelineExecutionStepSuccessCommand}.
 */
export interface SendPipelineExecutionStepSuccessCommandOutput
  extends SendPipelineExecutionStepSuccessResponse,
    __MetadataBearer {}

/**
 * <p>Notifies the pipeline that the execution of a callback step succeeded and provides a list of the step's output parameters. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, SendPipelineExecutionStepSuccessCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, SendPipelineExecutionStepSuccessCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // SendPipelineExecutionStepSuccessRequest
 *   CallbackToken: "STRING_VALUE", // required
 *   OutputParameters: [ // OutputParameterList
 *     { // OutputParameter
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new SendPipelineExecutionStepSuccessCommand(input);
 * const response = await client.send(command);
 * // { // SendPipelineExecutionStepSuccessResponse
 * //   PipelineExecutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendPipelineExecutionStepSuccessCommandInput - {@link SendPipelineExecutionStepSuccessCommandInput}
 * @returns {@link SendPipelineExecutionStepSuccessCommandOutput}
 * @see {@link SendPipelineExecutionStepSuccessCommandInput} for command's `input` shape.
 * @see {@link SendPipelineExecutionStepSuccessCommandOutput} for command's `response` shape.
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
export class SendPipelineExecutionStepSuccessCommand extends $Command
  .classBuilder<
    SendPipelineExecutionStepSuccessCommandInput,
    SendPipelineExecutionStepSuccessCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "SendPipelineExecutionStepSuccess", {})
  .n("SageMakerClient", "SendPipelineExecutionStepSuccessCommand")
  .sc(SendPipelineExecutionStepSuccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendPipelineExecutionStepSuccessRequest;
      output: SendPipelineExecutionStepSuccessResponse;
    };
    sdk: {
      input: SendPipelineExecutionStepSuccessCommandInput;
      output: SendPipelineExecutionStepSuccessCommandOutput;
    };
  };
}
