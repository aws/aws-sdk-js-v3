// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopMlflowTrackingServerRequest, StopMlflowTrackingServerResponse } from "../models/models_5";
import { de_StopMlflowTrackingServerCommand, se_StopMlflowTrackingServerCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopMlflowTrackingServerCommand}.
 */
export interface StopMlflowTrackingServerCommandInput extends StopMlflowTrackingServerRequest {}
/**
 * @public
 *
 * The output of {@link StopMlflowTrackingServerCommand}.
 */
export interface StopMlflowTrackingServerCommandOutput extends StopMlflowTrackingServerResponse, __MetadataBearer {}

/**
 * <p>Programmatically stop an MLflow Tracking Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopMlflowTrackingServerCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopMlflowTrackingServerCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // StopMlflowTrackingServerRequest
 *   TrackingServerName: "STRING_VALUE", // required
 * };
 * const command = new StopMlflowTrackingServerCommand(input);
 * const response = await client.send(command);
 * // { // StopMlflowTrackingServerResponse
 * //   TrackingServerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopMlflowTrackingServerCommandInput - {@link StopMlflowTrackingServerCommandInput}
 * @returns {@link StopMlflowTrackingServerCommandOutput}
 * @see {@link StopMlflowTrackingServerCommandInput} for command's `input` shape.
 * @see {@link StopMlflowTrackingServerCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
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
export class StopMlflowTrackingServerCommand extends $Command
  .classBuilder<
    StopMlflowTrackingServerCommandInput,
    StopMlflowTrackingServerCommandOutput,
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
  .s("SageMaker", "StopMlflowTrackingServer", {})
  .n("SageMakerClient", "StopMlflowTrackingServerCommand")
  .f(void 0, void 0)
  .ser(se_StopMlflowTrackingServerCommand)
  .de(de_StopMlflowTrackingServerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopMlflowTrackingServerRequest;
      output: StopMlflowTrackingServerResponse;
    };
    sdk: {
      input: StopMlflowTrackingServerCommandInput;
      output: StopMlflowTrackingServerCommandOutput;
    };
  };
}
