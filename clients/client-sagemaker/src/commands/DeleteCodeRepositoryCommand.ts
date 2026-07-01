// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCodeRepositoryInput } from "../models/models_2";
import { DeleteCodeRepository$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCodeRepositoryCommand}.
 */
export interface DeleteCodeRepositoryCommandInput extends DeleteCodeRepositoryInput {}
/**
 * @public
 *
 * The output of {@link DeleteCodeRepositoryCommand}.
 */
export interface DeleteCodeRepositoryCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified Git repository from your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteCodeRepositoryInput
 *   CodeRepositoryName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCodeRepositoryCommandInput - {@link DeleteCodeRepositoryCommandInput}
 * @returns {@link DeleteCodeRepositoryCommandOutput}
 * @see {@link DeleteCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteCodeRepositoryCommand extends command<DeleteCodeRepositoryCommandInput, DeleteCodeRepositoryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCodeRepository",
  DeleteCodeRepository$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCodeRepositoryInput;
      output: {};
    };
    sdk: {
      input: DeleteCodeRepositoryCommandInput;
      output: DeleteCodeRepositoryCommandOutput;
    };
  };
}
