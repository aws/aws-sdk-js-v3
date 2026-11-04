// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopMlflowTrackingServerRequest, StopMlflowTrackingServerResponse } from "../models/models_4";
import { StopMlflowTrackingServer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Programmatically stop an MLflow Tracking Server.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopMlflowTrackingServerCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopMlflowTrackingServerCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
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
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class StopMlflowTrackingServerCommand extends command<StopMlflowTrackingServerCommandInput, StopMlflowTrackingServerCommandOutput>(
  _ep0,
  _mw0,
  "StopMlflowTrackingServer",
  StopMlflowTrackingServer$
) {
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
