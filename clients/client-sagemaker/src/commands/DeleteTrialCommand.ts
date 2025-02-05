// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTrialRequest, DeleteTrialResponse } from "../models/models_2";
import { de_DeleteTrialCommand, se_DeleteTrialCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrialCommand}.
 */
export interface DeleteTrialCommandInput extends DeleteTrialRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrialCommand}.
 */
export interface DeleteTrialCommandOutput extends DeleteTrialResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified trial. All trial components that make up the trial must be deleted
 *       first. Use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrialComponent.html">DescribeTrialComponent</a> API to get the list of trial
 *       components.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteTrialCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteTrialCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // DeleteTrialRequest
 *   TrialName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrialCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTrialResponse
 * //   TrialArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTrialCommandInput - {@link DeleteTrialCommandInput}
 * @returns {@link DeleteTrialCommandOutput}
 * @see {@link DeleteTrialCommandInput} for command's `input` shape.
 * @see {@link DeleteTrialCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DeleteTrialCommand extends $Command
  .classBuilder<
    DeleteTrialCommandInput,
    DeleteTrialCommandOutput,
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
  .s("SageMaker", "DeleteTrial", {})
  .n("SageMakerClient", "DeleteTrialCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTrialCommand)
  .de(de_DeleteTrialCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrialRequest;
      output: DeleteTrialResponse;
    };
    sdk: {
      input: DeleteTrialCommandInput;
      output: DeleteTrialCommandOutput;
    };
  };
}
