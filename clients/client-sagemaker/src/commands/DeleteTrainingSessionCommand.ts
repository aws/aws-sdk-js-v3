// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTrainingSessionRequest, DeleteTrainingSessionResponse } from "../models/models_2";
import { DeleteTrainingSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTrainingSessionCommand}.
 */
export interface DeleteTrainingSessionCommandInput extends DeleteTrainingSessionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrainingSessionCommand}.
 */
export interface DeleteTrainingSessionCommandOutput extends DeleteTrainingSessionResponse, __MetadataBearer {}

/**
 * Deletes a training session. You must stop a running session before deleting it. Use the `StopTrainingSession` operation to stop the session first.
 *
 * The following operations are related to `DeleteTrainingSession`:
 *
 * - `CreateTrainingSession`
 * - `DescribeTrainingSession`
 * - `StopTrainingSession`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteTrainingSessionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteTrainingSessionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteTrainingSessionRequest
 *   TrainingSessionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrainingSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrainingSessionCommandInput - {@link DeleteTrainingSessionCommandInput}
 * @returns {@link DeleteTrainingSessionCommandOutput}
 * @see {@link DeleteTrainingSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteTrainingSessionCommandOutput} for command's `response` shape.
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
export class DeleteTrainingSessionCommand extends command<DeleteTrainingSessionCommandInput, DeleteTrainingSessionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTrainingSession",
  DeleteTrainingSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrainingSessionRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrainingSessionCommandInput;
      output: DeleteTrainingSessionCommandOutput;
    };
  };
}
