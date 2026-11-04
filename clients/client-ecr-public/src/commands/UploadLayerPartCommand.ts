// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UploadLayerPartRequest, UploadLayerPartResponse } from "../models/models_0";
import { UploadLayerPart$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UploadLayerPartCommand}.
 */
export interface UploadLayerPartCommandInput extends UploadLayerPartRequest {}
/**
 * @public
 *
 * The output of {@link UploadLayerPartCommand}.
 */
export interface UploadLayerPartCommandOutput extends UploadLayerPartResponse, __MetadataBearer {}

/**
 * Uploads an image layer part to Amazon ECR.
 *
 * When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (about 20MB). The UploadLayerPart API is called once for each new image layer part.
 *
 * > **Note:** This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, UploadLayerPartCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, UploadLayerPartCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = { // UploadLayerPartRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   partFirstByte: Number("long"), // required
 *   partLastByte: Number("long"), // required
 *   layerPartBlob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new UploadLayerPartCommand(input);
 * const response = await client.send(command);
 * // { // UploadLayerPartResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   uploadId: "STRING_VALUE",
 * //   lastByteReceived: Number("long"),
 * // };
 *
 * ```
 *
 * @param UploadLayerPartCommandInput - {@link UploadLayerPartCommandInput}
 * @returns {@link UploadLayerPartCommandOutput}
 * @see {@link UploadLayerPartCommandInput} for command's `input` shape.
 * @see {@link UploadLayerPartCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidLayerPartException} (client fault)
 *
 * The layer part size isn't valid, or the first byte specified isn't consecutive to the last byte of a previous layer part upload.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation didn't succeed because it would have exceeded a service limit for your account. For more information, see [Amazon ECR Service Quotas](https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html) in the Amazon Elastic Container Registry User Guide.
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
export class UploadLayerPartCommand extends command<UploadLayerPartCommandInput, UploadLayerPartCommandOutput>(
  _ep0,
  _mw0,
  "UploadLayerPart",
  UploadLayerPart$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UploadLayerPartRequest;
      output: UploadLayerPartResponse;
    };
    sdk: {
      input: UploadLayerPartCommandInput;
      output: UploadLayerPartCommandOutput;
    };
  };
}
