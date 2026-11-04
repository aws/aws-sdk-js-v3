// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InitiateLayerUploadRequest, InitiateLayerUploadResponse } from "../models/models_0";
import { InitiateLayerUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InitiateLayerUploadCommand}.
 */
export interface InitiateLayerUploadCommandInput extends InitiateLayerUploadRequest {}
/**
 * @public
 *
 * The output of {@link InitiateLayerUploadCommand}.
 */
export interface InitiateLayerUploadCommandOutput extends InitiateLayerUploadResponse, __MetadataBearer {}

/**
 * Notifies Amazon ECR that you intend to upload an image layer.
 *
 * When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.
 *
 * > **Note:** This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, InitiateLayerUploadCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, InitiateLayerUploadCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // InitiateLayerUploadRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new InitiateLayerUploadCommand(input);
 * const response = await client.send(command);
 * // { // InitiateLayerUploadResponse
 * //   uploadId: "STRING_VALUE",
 * //   partSize: Number("long"),
 * // };
 *
 * ```
 *
 * @param InitiateLayerUploadCommandInput - {@link InitiateLayerUploadCommandInput}
 * @returns {@link InitiateLayerUploadCommandOutput}
 * @see {@link InitiateLayerUploadCommandInput} for command's `input` shape.
 * @see {@link InitiateLayerUploadCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link KmsException} (client fault)
 *
 * The operation failed due to a KMS exception.
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *
 * The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ECRServiceException}
 *
 * Base exception class for all service exceptions from ECR service.
 *
 * @public
 */
export class InitiateLayerUploadCommand extends command<InitiateLayerUploadCommandInput, InitiateLayerUploadCommandOutput>(
  _ep0,
  _mw0,
  "InitiateLayerUpload",
  InitiateLayerUpload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InitiateLayerUploadRequest;
      output: InitiateLayerUploadResponse;
    };
    sdk: {
      input: InitiateLayerUploadCommandInput;
      output: InitiateLayerUploadCommandOutput;
    };
  };
}
