// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMlflowTrackingServerRequest, DeleteMlflowTrackingServerResponse } from "../models/models_2";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteMlflowTrackingServer } from "../schemas/schemas_32_Tracking";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMlflowTrackingServerCommand}.
 */
export interface DeleteMlflowTrackingServerCommandInput extends DeleteMlflowTrackingServerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMlflowTrackingServerCommand}.
 */
export interface DeleteMlflowTrackingServerCommandOutput extends DeleteMlflowTrackingServerResponse, __MetadataBearer {}

/**
 * <p>Deletes an MLflow Tracking Server. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/mlflow-cleanup.html.html">Clean up MLflow resources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteMlflowTrackingServerCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteMlflowTrackingServerCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteMlflowTrackingServerRequest
 *   TrackingServerName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMlflowTrackingServerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMlflowTrackingServerResponse
 * //   TrackingServerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteMlflowTrackingServerCommandInput - {@link DeleteMlflowTrackingServerCommandInput}
 * @returns {@link DeleteMlflowTrackingServerCommandOutput}
 * @see {@link DeleteMlflowTrackingServerCommandInput} for command's `input` shape.
 * @see {@link DeleteMlflowTrackingServerCommandOutput} for command's `response` shape.
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
export class DeleteMlflowTrackingServerCommand extends $Command
  .classBuilder<
    DeleteMlflowTrackingServerCommandInput,
    DeleteMlflowTrackingServerCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteMlflowTrackingServer", {})
  .n("SageMakerClient", "DeleteMlflowTrackingServerCommand")
  .sc(DeleteMlflowTrackingServer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMlflowTrackingServerRequest;
      output: DeleteMlflowTrackingServerResponse;
    };
    sdk: {
      input: DeleteMlflowTrackingServerCommandInput;
      output: DeleteMlflowTrackingServerCommandOutput;
    };
  };
}
