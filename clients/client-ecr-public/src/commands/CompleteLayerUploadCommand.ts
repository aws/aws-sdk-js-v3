// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CompleteLayerUploadRequest, CompleteLayerUploadResponse } from "../models/models_0";
import { CompleteLayerUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CompleteLayerUploadCommand}.
 */
export interface CompleteLayerUploadCommandInput extends CompleteLayerUploadRequest {}
/**
 * @public
 *
 * The output of {@link CompleteLayerUploadCommand}.
 */
export interface CompleteLayerUploadCommandOutput extends CompleteLayerUploadResponse, __MetadataBearer {}

/**
 * Informs Amazon ECR that the image layer upload is complete for a specified public registry, repository name, and upload ID. You can optionally provide a `sha256` digest of the image layer for data validation purposes.
 *
 * When an image is pushed, the CompleteLayerUpload API is called once for each new image layer to verify that the upload is complete.
 *
 * > **Note:** This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, CompleteLayerUploadCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, CompleteLayerUploadCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = { // CompleteLayerUploadRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   layerDigests: [ // LayerDigestList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CompleteLayerUploadCommand(input);
 * const response = await client.send(command);
 * // { // CompleteLayerUploadResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   uploadId: "STRING_VALUE",
 * //   layerDigest: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CompleteLayerUploadCommandInput - {@link CompleteLayerUploadCommandInput}
 * @returns {@link CompleteLayerUploadCommandOutput}
 * @see {@link CompleteLayerUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteLayerUploadCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link EmptyUploadException} (client fault)
 *
 * The specified layer upload doesn't contain any layer parts.
 *
 * @throws {@link InvalidLayerException} (client fault)
 *
 * The layer digest calculation performed by Amazon ECR when the image layer doesn't match the digest specified.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link LayerAlreadyExistsException} (client fault)
 *
 * The image layer already exists in the associated repository.
 *
 * @throws {@link LayerPartTooSmallException} (client fault)
 *
 * Layer parts must be at least 5 MiB in size.
 *
 * @throws {@link RegistryNotFoundException} (client fault)
 *
 * The registry doesn't exist.
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *
 * The specified repository can't be found. Check the spelling of the specified repository and ensure that you're performing operations on the correct registry.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *
 * The action isn't supported in this Region.
 *
 * @throws {@link UploadNotFoundException} (client fault)
 *
 * The upload can't be found, or the specified upload ID isn't valid for this repository.
 *
 * @throws {@link ECRPUBLICServiceException}
 *
 * Base exception class for all service exceptions from ECRPUBLIC service.
 *
 * @public
 */
export class CompleteLayerUploadCommand extends command<CompleteLayerUploadCommandInput, CompleteLayerUploadCommandOutput>(
  _ep0,
  _mw0,
  "CompleteLayerUpload",
  CompleteLayerUpload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteLayerUploadRequest;
      output: CompleteLayerUploadResponse;
    };
    sdk: {
      input: CompleteLayerUploadCommandInput;
      output: CompleteLayerUploadCommandOutput;
    };
  };
}
