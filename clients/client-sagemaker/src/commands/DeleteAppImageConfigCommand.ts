// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAppImageConfigRequest } from "../models/models_2";
import { DeleteAppImageConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAppImageConfigCommand}.
 */
export interface DeleteAppImageConfigCommandInput extends DeleteAppImageConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppImageConfigCommand}.
 */
export interface DeleteAppImageConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an AppImageConfig.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteAppImageConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteAppImageConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteAppImageConfigRequest
 *   AppImageConfigName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppImageConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppImageConfigCommandInput - {@link DeleteAppImageConfigCommandInput}
 * @returns {@link DeleteAppImageConfigCommandOutput}
 * @see {@link DeleteAppImageConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteAppImageConfigCommandOutput} for command's `response` shape.
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
export class DeleteAppImageConfigCommand extends command<DeleteAppImageConfigCommandInput, DeleteAppImageConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAppImageConfig",
  DeleteAppImageConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppImageConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppImageConfigCommandInput;
      output: DeleteAppImageConfigCommandOutput;
    };
  };
}
