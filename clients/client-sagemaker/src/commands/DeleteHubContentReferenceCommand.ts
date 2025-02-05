// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteHubContentReferenceRequest } from "../models/models_2";
import { de_DeleteHubContentReferenceCommand, se_DeleteHubContentReferenceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteHubContentReferenceCommand}.
 */
export interface DeleteHubContentReferenceCommandInput extends DeleteHubContentReferenceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHubContentReferenceCommand}.
 */
export interface DeleteHubContentReferenceCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a hub content reference in order to remove a model from a private hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteHubContentReferenceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteHubContentReferenceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // DeleteHubContentReferenceRequest
 *   HubName: "STRING_VALUE", // required
 *   HubContentType: "Model" || "Notebook" || "ModelReference", // required
 *   HubContentName: "STRING_VALUE", // required
 * };
 * const command = new DeleteHubContentReferenceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHubContentReferenceCommandInput - {@link DeleteHubContentReferenceCommandInput}
 * @returns {@link DeleteHubContentReferenceCommandOutput}
 * @see {@link DeleteHubContentReferenceCommandInput} for command's `input` shape.
 * @see {@link DeleteHubContentReferenceCommandOutput} for command's `response` shape.
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
export class DeleteHubContentReferenceCommand extends $Command
  .classBuilder<
    DeleteHubContentReferenceCommandInput,
    DeleteHubContentReferenceCommandOutput,
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
  .s("SageMaker", "DeleteHubContentReference", {})
  .n("SageMakerClient", "DeleteHubContentReferenceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteHubContentReferenceCommand)
  .de(de_DeleteHubContentReferenceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHubContentReferenceRequest;
      output: {};
    };
    sdk: {
      input: DeleteHubContentReferenceCommandInput;
      output: DeleteHubContentReferenceCommandOutput;
    };
  };
}
