// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFeatureGroupRequest } from "../models/models_2";
import { DeleteFeatureGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFeatureGroupCommand}.
 */
export interface DeleteFeatureGroupCommandInput extends DeleteFeatureGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFeatureGroupCommand}.
 */
export interface DeleteFeatureGroupCommandOutput extends __MetadataBearer {}

/**
 * Delete the `FeatureGroup` and any data that was written to the `OnlineStore` of the `FeatureGroup`. Data cannot be accessed from the `OnlineStore` immediately after `DeleteFeatureGroup` is called.
 *
 * Data written into the `OfflineStore` will not be deleted. The Amazon Web Services Glue database and tables that are automatically created for your `OfflineStore` are not deleted.
 *
 * Note that it can take approximately 10-15 minutes to delete an `OnlineStore` `FeatureGroup` with the `InMemory` `StorageType`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteFeatureGroupRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteFeatureGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFeatureGroupCommandInput - {@link DeleteFeatureGroupCommandInput}
 * @returns {@link DeleteFeatureGroupCommandOutput}
 * @see {@link DeleteFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteFeatureGroupCommandOutput} for command's `response` shape.
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
export class DeleteFeatureGroupCommand extends command<DeleteFeatureGroupCommandInput, DeleteFeatureGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFeatureGroup",
  DeleteFeatureGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFeatureGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteFeatureGroupCommandInput;
      output: DeleteFeatureGroupCommandOutput;
    };
  };
}
