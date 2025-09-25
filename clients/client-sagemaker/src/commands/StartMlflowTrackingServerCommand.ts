// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartMlflowTrackingServerRequest, StartMlflowTrackingServerResponse } from "../models/models_5";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StartMlflowTrackingServer } from "../schemas/schemas_32_Tracking";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMlflowTrackingServerCommand}.
 */
export interface StartMlflowTrackingServerCommandInput extends StartMlflowTrackingServerRequest {}
/**
 * @public
 *
 * The output of {@link StartMlflowTrackingServerCommand}.
 */
export interface StartMlflowTrackingServerCommandOutput extends StartMlflowTrackingServerResponse, __MetadataBearer {}

/**
 * <p>Programmatically start an MLflow Tracking Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StartMlflowTrackingServerCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StartMlflowTrackingServerCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StartMlflowTrackingServerRequest
 *   TrackingServerName: "STRING_VALUE", // required
 * };
 * const command = new StartMlflowTrackingServerCommand(input);
 * const response = await client.send(command);
 * // { // StartMlflowTrackingServerResponse
 * //   TrackingServerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMlflowTrackingServerCommandInput - {@link StartMlflowTrackingServerCommandInput}
 * @returns {@link StartMlflowTrackingServerCommandOutput}
 * @see {@link StartMlflowTrackingServerCommandInput} for command's `input` shape.
 * @see {@link StartMlflowTrackingServerCommandOutput} for command's `response` shape.
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
export class StartMlflowTrackingServerCommand extends $Command
  .classBuilder<
    StartMlflowTrackingServerCommandInput,
    StartMlflowTrackingServerCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "StartMlflowTrackingServer", {})
  .n("SageMakerClient", "StartMlflowTrackingServerCommand")
  .sc(StartMlflowTrackingServer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMlflowTrackingServerRequest;
      output: StartMlflowTrackingServerResponse;
    };
    sdk: {
      input: StartMlflowTrackingServerCommandInput;
      output: StartMlflowTrackingServerCommandOutput;
    };
  };
}
