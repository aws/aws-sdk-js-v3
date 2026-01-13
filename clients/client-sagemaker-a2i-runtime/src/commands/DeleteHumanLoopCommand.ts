// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteHumanLoopRequest, DeleteHumanLoopResponse } from "../models/models_0";
import type {
  SageMakerA2IRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerA2IRuntimeClient";
import { DeleteHumanLoop$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteHumanLoopCommand}.
 */
export interface DeleteHumanLoopCommandInput extends DeleteHumanLoopRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHumanLoopCommand}.
 */
export interface DeleteHumanLoopCommandOutput extends DeleteHumanLoopResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified human loop for a flow definition.</p>
 *          <p>If the human loop was deleted, this operation will return a
 *         <code>ResourceNotFoundException</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, DeleteHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, DeleteHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * // import type { SageMakerA2IRuntimeClientConfig } from "@aws-sdk/client-sagemaker-a2i-runtime";
 * const config = {}; // type is SageMakerA2IRuntimeClientConfig
 * const client = new SageMakerA2IRuntimeClient(config);
 * const input = { // DeleteHumanLoopRequest
 *   HumanLoopName: "STRING_VALUE", // required
 * };
 * const command = new DeleteHumanLoopCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHumanLoopCommandInput - {@link DeleteHumanLoopCommandInput}
 * @returns {@link DeleteHumanLoopCommandOutput}
 * @see {@link DeleteHumanLoopCommandInput} for command's `input` shape.
 * @see {@link DeleteHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for SageMakerA2IRuntimeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same AWS Region as your request, and try your request again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded
 *       the
 *       maximum number of requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The
 *       request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link SageMakerA2IRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerA2IRuntime service.</p>
 *
 *
 * @public
 */
export class DeleteHumanLoopCommand extends $Command
  .classBuilder<
    DeleteHumanLoopCommandInput,
    DeleteHumanLoopCommandOutput,
    SageMakerA2IRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerA2IRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSageMakerA2IRuntime", "DeleteHumanLoop", {})
  .n("SageMakerA2IRuntimeClient", "DeleteHumanLoopCommand")
  .sc(DeleteHumanLoop$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHumanLoopRequest;
      output: {};
    };
    sdk: {
      input: DeleteHumanLoopCommandInput;
      output: DeleteHumanLoopCommandOutput;
    };
  };
}
