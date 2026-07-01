// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteHubContentRequest } from "../models/models_2";
import { DeleteHubContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteHubContentCommand}.
 */
export interface DeleteHubContentCommandInput extends DeleteHubContentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHubContentCommand}.
 */
export interface DeleteHubContentCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete the contents of a hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteHubContentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteHubContentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteHubContentRequest
 *   HubName: "STRING_VALUE", // required
 *   HubContentType: "Model" || "Notebook" || "ModelReference" || "DataSet" || "JsonDoc", // required
 *   HubContentName: "STRING_VALUE", // required
 *   HubContentVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteHubContentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHubContentCommandInput - {@link DeleteHubContentCommandInput}
 * @returns {@link DeleteHubContentCommandOutput}
 * @see {@link DeleteHubContentCommandInput} for command's `input` shape.
 * @see {@link DeleteHubContentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
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
export class DeleteHubContentCommand extends command<DeleteHubContentCommandInput, DeleteHubContentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteHubContent",
  DeleteHubContent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHubContentRequest;
      output: {};
    };
    sdk: {
      input: DeleteHubContentCommandInput;
      output: DeleteHubContentCommandOutput;
    };
  };
}
