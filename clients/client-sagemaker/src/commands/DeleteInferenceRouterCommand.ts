// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInferenceRouterInput } from "../models/models_2";
import { DeleteInferenceRouter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteInferenceRouterCommand}.
 */
export interface DeleteInferenceRouterCommandInput extends DeleteInferenceRouterInput {}
/**
 * @public
 *
 * The output of {@link DeleteInferenceRouterCommand}.
 */
export interface DeleteInferenceRouterCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an inference router. The endpoints and inference components that the router sends requests to aren't deleted.</p> <p>If the router is being created, updated, or deleted, you get a <code>ConflictException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteInferenceRouterCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteInferenceRouterCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteInferenceRouterInput
 *   InferenceRouterName: "STRING_VALUE", // required
 * };
 * const command = new DeleteInferenceRouterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInferenceRouterCommandInput - {@link DeleteInferenceRouterCommandInput}
 * @returns {@link DeleteInferenceRouterCommandOutput}
 * @see {@link DeleteInferenceRouterCommandInput} for command's `input` shape.
 * @see {@link DeleteInferenceRouterCommandOutput} for command's `response` shape.
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
export class DeleteInferenceRouterCommand extends command<DeleteInferenceRouterCommandInput, DeleteInferenceRouterCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInferenceRouter",
  DeleteInferenceRouter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInferenceRouterInput;
      output: {};
    };
    sdk: {
      input: DeleteInferenceRouterCommandInput;
      output: DeleteInferenceRouterCommandOutput;
    };
  };
}
