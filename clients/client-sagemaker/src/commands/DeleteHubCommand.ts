// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteHubRequest } from "../models/models_2";
import { DeleteHub$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteHubCommand}.
 */
export interface DeleteHubCommandInput extends DeleteHubRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHubCommand}.
 */
export interface DeleteHubCommandOutput extends __MetadataBearer {}

/**
 * Delete a hub.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteHubCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteHubCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteHubRequest
 *   HubName: "STRING_VALUE", // required
 * };
 * const command = new DeleteHubCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHubCommandInput - {@link DeleteHubCommandInput}
 * @returns {@link DeleteHubCommandOutput}
 * @see {@link DeleteHubCommandInput} for command's `input` shape.
 * @see {@link DeleteHubCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *
 * Resource being accessed is in use.
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
export class DeleteHubCommand extends command<DeleteHubCommandInput, DeleteHubCommandOutput>(
  _ep0,
  _mw0,
  "DeleteHub",
  DeleteHub$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHubRequest;
      output: {};
    };
    sdk: {
      input: DeleteHubCommandInput;
      output: DeleteHubCommandOutput;
    };
  };
}
