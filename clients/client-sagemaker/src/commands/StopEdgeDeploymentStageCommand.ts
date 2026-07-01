// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopEdgeDeploymentStageRequest } from "../models/models_4";
import { StopEdgeDeploymentStage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopEdgeDeploymentStageCommand}.
 */
export interface StopEdgeDeploymentStageCommandInput extends StopEdgeDeploymentStageRequest {}
/**
 * @public
 *
 * The output of {@link StopEdgeDeploymentStageCommand}.
 */
export interface StopEdgeDeploymentStageCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a stage in an edge deployment plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopEdgeDeploymentStageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopEdgeDeploymentStageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StopEdgeDeploymentStageRequest
 *   EdgeDeploymentPlanName: "STRING_VALUE", // required
 *   StageName: "STRING_VALUE", // required
 * };
 * const command = new StopEdgeDeploymentStageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopEdgeDeploymentStageCommandInput - {@link StopEdgeDeploymentStageCommandInput}
 * @returns {@link StopEdgeDeploymentStageCommandOutput}
 * @see {@link StopEdgeDeploymentStageCommandInput} for command's `input` shape.
 * @see {@link StopEdgeDeploymentStageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class StopEdgeDeploymentStageCommand extends command<StopEdgeDeploymentStageCommandInput, StopEdgeDeploymentStageCommandOutput>(
  _ep0,
  _mw0,
  "StopEdgeDeploymentStage",
  StopEdgeDeploymentStage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopEdgeDeploymentStageRequest;
      output: {};
    };
    sdk: {
      input: StopEdgeDeploymentStageCommandInput;
      output: StopEdgeDeploymentStageCommandOutput;
    };
  };
}
