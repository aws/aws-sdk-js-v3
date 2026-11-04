// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateHubContentReferenceRequest, UpdateHubContentReferenceResponse } from "../models/models_5";
import { UpdateHubContentReference$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateHubContentReferenceCommand}.
 */
export interface UpdateHubContentReferenceCommandInput extends UpdateHubContentReferenceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHubContentReferenceCommand}.
 */
export interface UpdateHubContentReferenceCommandOutput extends UpdateHubContentReferenceResponse, __MetadataBearer {}

/**
 * Updates the contents of a SageMaker hub for a `ModelReference` resource. A `ModelReference` allows you to access public SageMaker JumpStart models from within your private hub.
 *
 * When using this API, you can update the `MinVersion` field for additional flexibility in the model version. You shouldn't update any additional fields when using this API, because the metadata in your private hub should match the public JumpStart model's metadata.
 *
 * > **Note:** If you want to update a `Model` or `Notebook` resource in your hub, use the `UpdateHubContent` API instead.
 *
 * For more information about adding model references to your hub, see [Add models to a private hub](https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-curated-hubs-admin-guide-add-models.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateHubContentReferenceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateHubContentReferenceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateHubContentReferenceRequest
 *   HubName: "STRING_VALUE", // required
 *   HubContentName: "STRING_VALUE", // required
 *   HubContentType: "Model" || "Notebook" || "ModelReference" || "DataSet" || "JsonDoc", // required
 *   MinVersion: "STRING_VALUE",
 * };
 * const command = new UpdateHubContentReferenceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateHubContentReferenceResponse
 * //   HubArn: "STRING_VALUE", // required
 * //   HubContentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateHubContentReferenceCommandInput - {@link UpdateHubContentReferenceCommandInput}
 * @returns {@link UpdateHubContentReferenceCommandOutput}
 * @see {@link UpdateHubContentReferenceCommandInput} for command's `input` shape.
 * @see {@link UpdateHubContentReferenceCommandOutput} for command's `response` shape.
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
export class UpdateHubContentReferenceCommand extends command<UpdateHubContentReferenceCommandInput, UpdateHubContentReferenceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateHubContentReference",
  UpdateHubContentReference$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHubContentReferenceRequest;
      output: UpdateHubContentReferenceResponse;
    };
    sdk: {
      input: UpdateHubContentReferenceCommandInput;
      output: UpdateHubContentReferenceCommandOutput;
    };
  };
}
