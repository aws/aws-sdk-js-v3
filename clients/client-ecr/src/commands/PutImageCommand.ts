// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutImageRequest, PutImageResponse } from "../models/models_0";
import { PutImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutImageCommand}.
 */
export interface PutImageCommandInput extends PutImageRequest {}
/**
 * @public
 *
 * The output of {@link PutImageCommand}.
 */
export interface PutImageCommandOutput extends PutImageResponse, __MetadataBearer {}

/**
 * Creates or updates the image manifest and tags associated with an image.
 *
 * When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.
 *
 * > **Note:** This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutImageCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutImageCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // PutImageRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageManifest: "STRING_VALUE", // required
 *   imageManifestMediaType: "STRING_VALUE",
 *   imageTag: "STRING_VALUE",
 *   imageDigest: "STRING_VALUE",
 * };
 * const command = new PutImageCommand(input);
 * const response = await client.send(command);
 * // { // PutImageResponse
 * //   image: { // Image
 * //     registryId: "STRING_VALUE",
 * //     repositoryName: "STRING_VALUE",
 * //     imageId: { // ImageIdentifier
 * //       imageDigest: "STRING_VALUE",
 * //       imageTag: "STRING_VALUE",
 * //     },
 * //     imageManifest: "STRING_VALUE",
 * //     imageManifestMediaType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutImageCommandInput - {@link PutImageCommandInput}
 * @returns {@link PutImageCommandOutput}
 * @see {@link PutImageCommandInput} for command's `input` shape.
 * @see {@link PutImageCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link ImageAlreadyExistsException} (client fault)
 *
 * The specified image has already been pushed, and there were no changes to the manifest or image tag after the last push.
 *
 * @throws {@link ImageDigestDoesNotMatchException} (client fault)
 *
 * The specified image digest does not match the digest that Amazon ECR calculated for the image.
 *
 * @throws {@link ImageTagAlreadyExistsException} (client fault)
 *
 * The specified image is tagged with a tag that already exists. The repository is configured for tag immutability.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link KmsException} (client fault)
 *
 * The operation failed due to a KMS exception.
 *
 * @throws {@link LayersNotFoundException} (client fault)
 *
 * The specified layers could not be found, or the specified layer is not valid for this repository.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation did not succeed because it would have exceeded a service limit for your account. For more information, see [Amazon ECR service quotas](https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html) in the Amazon Elastic Container Registry User Guide.
 *
 * @throws {@link ReferencedImagesNotFoundException} (client fault)
 *
 * The manifest list is referencing an image that does not exist.
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
export class PutImageCommand extends command<PutImageCommandInput, PutImageCommandOutput>(
  _ep0,
  _mw0,
  "PutImage",
  PutImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutImageRequest;
      output: PutImageResponse;
    };
    sdk: {
      input: PutImageCommandInput;
      output: PutImageCommandOutput;
    };
  };
}
