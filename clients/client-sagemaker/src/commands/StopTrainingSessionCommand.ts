// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopTrainingSessionRequest, StopTrainingSessionResponse } from "../models/models_4";
import { StopTrainingSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopTrainingSessionCommand}.
 */
export interface StopTrainingSessionCommandInput extends StopTrainingSessionRequest {}
/**
 * @public
 *
 * The output of {@link StopTrainingSessionCommand}.
 */
export interface StopTrainingSessionCommandOutput extends StopTrainingSessionResponse, __MetadataBearer {}

/**
 * Stops a running training session and sets the session status to `Stopping`. After the session stops, the status changes to `Stopped`. To delete a stopped session, use the `DeleteTrainingSession` operation.
 *
 * The following operations are related to `StopTrainingSession`:
 *
 * - `CreateTrainingSession`
 * - `DescribeTrainingSession`
 * - `DeleteTrainingSession`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopTrainingSessionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopTrainingSessionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StopTrainingSessionRequest
 *   TrainingSessionName: "STRING_VALUE", // required
 * };
 * const command = new StopTrainingSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTrainingSessionCommandInput - {@link StopTrainingSessionCommandInput}
 * @returns {@link StopTrainingSessionCommandOutput}
 * @see {@link StopTrainingSessionCommandInput} for command's `input` shape.
 * @see {@link StopTrainingSessionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
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
export class StopTrainingSessionCommand extends command<StopTrainingSessionCommandInput, StopTrainingSessionCommandOutput>(
  _ep0,
  _mw0,
  "StopTrainingSession",
  StopTrainingSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTrainingSessionRequest;
      output: {};
    };
    sdk: {
      input: StopTrainingSessionCommandInput;
      output: StopTrainingSessionCommandOutput;
    };
  };
}
