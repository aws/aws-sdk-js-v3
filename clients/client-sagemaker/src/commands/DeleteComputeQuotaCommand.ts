// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteComputeQuotaRequest } from "../models/models_2";
import { de_DeleteComputeQuotaCommand, se_DeleteComputeQuotaCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteComputeQuotaCommand}.
 */
export interface DeleteComputeQuotaCommandInput extends DeleteComputeQuotaRequest {}
/**
 * @public
 *
 * The output of {@link DeleteComputeQuotaCommand}.
 */
export interface DeleteComputeQuotaCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the compute allocation from the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteComputeQuotaCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteComputeQuotaCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteComputeQuotaRequest
 *   ComputeQuotaId: "STRING_VALUE", // required
 * };
 * const command = new DeleteComputeQuotaCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteComputeQuotaCommandInput - {@link DeleteComputeQuotaCommandInput}
 * @returns {@link DeleteComputeQuotaCommandOutput}
 * @see {@link DeleteComputeQuotaCommandInput} for command's `input` shape.
 * @see {@link DeleteComputeQuotaCommandOutput} for command's `response` shape.
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
export class DeleteComputeQuotaCommand extends $Command
  .classBuilder<
    DeleteComputeQuotaCommandInput,
    DeleteComputeQuotaCommandOutput,
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
  .s("SageMaker", "DeleteComputeQuota", {})
  .n("SageMakerClient", "DeleteComputeQuotaCommand")
  .f(void 0, void 0)
  .ser(se_DeleteComputeQuotaCommand)
  .de(de_DeleteComputeQuotaCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteComputeQuotaRequest;
      output: {};
    };
    sdk: {
      input: DeleteComputeQuotaCommandInput;
      output: DeleteComputeQuotaCommandOutput;
    };
  };
}
