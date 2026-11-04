// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetImageRequest, BatchGetImageResponse } from "../models/models_0";
import { BatchGetImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetImageCommand}.
 */
export interface BatchGetImageCommandInput extends BatchGetImageRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetImageCommand}.
 */
export interface BatchGetImageCommandOutput extends BatchGetImageResponse, __MetadataBearer {}

/**
 * Gets detailed information for an image. Images are specified with either an `imageTag` or `imageDigest`.
 *
 * When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchGetImageCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchGetImageCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // BatchGetImageRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageIds: [ // ImageIdentifierList // required
 *     { // ImageIdentifier
 *       imageDigest: "STRING_VALUE",
 *       imageTag: "STRING_VALUE",
 *     },
 *   ],
 *   acceptedMediaTypes: [ // MediaTypeList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetImageCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetImageResponse
 * //   images: [ // ImageList
 * //     { // Image
 * //       registryId: "STRING_VALUE",
 * //       repositoryName: "STRING_VALUE",
 * //       imageId: { // ImageIdentifier
 * //         imageDigest: "STRING_VALUE",
 * //         imageTag: "STRING_VALUE",
 * //       },
 * //       imageManifest: "STRING_VALUE",
 * //       imageManifestMediaType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failures: [ // ImageFailureList
 * //     { // ImageFailure
 * //       imageId: {
 * //         imageDigest: "STRING_VALUE",
 * //         imageTag: "STRING_VALUE",
 * //       },
 * //       failureCode: "InvalidImageDigest" || "InvalidImageTag" || "ImageTagDoesNotMatchDigest" || "ImageNotFound" || "MissingDigestAndTag" || "ImageReferencedByManifestList" || "KmsError" || "UpstreamAccessDenied" || "UpstreamTooManyRequests" || "UpstreamUnavailable" || "ImageInaccessible",
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetImageCommandInput - {@link BatchGetImageCommandInput}
 * @returns {@link BatchGetImageCommandOutput}
 * @see {@link BatchGetImageCommandInput} for command's `input` shape.
 * @see {@link BatchGetImageCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation did not succeed because it would have exceeded a service limit for your account. For more information, see [Amazon ECR service quotas](https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html) in the Amazon Elastic Container Registry User Guide.
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *
 * The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link UnableToGetUpstreamImageException} (client fault)
 *
 * The image or images were unable to be pulled using the pull through cache rule. This is usually caused because of an issue with the Secrets Manager secret containing the credentials for the upstream registry.
 *
 * @throws {@link ECRServiceException}
 *
 * Base exception class for all service exceptions from ECR service.
 *
 * @example To obtain multiple images in a single request
 * ```javascript
 * // This example obtains information for an image with a specified image digest ID from the repository named ubuntu in the current account.
 * const input = {
 *   imageIds: [
 *     {
 *       imageTag: "precise"
 *     }
 *   ],
 *   repositoryName: "ubuntu"
 * };
 * const command = new BatchGetImageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failures:   [],
 *   images: [
 *     {
 *       imageId: {
 *         imageDigest: "sha256:example76bdff6d83a09ba2a818f0d00000063724a9ac3ba5019c56f74ebf42a",
 *         imageTag: "precise"
 *       },
 *       imageManifest: `{
 *  "schemaVersion": 1,
 *  "name": "ubuntu",
 *  "tag": "precise",
 * ...`,
 *       registryId: "244698725403",
 *       repositoryName: "ubuntu"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetImageCommand extends command<BatchGetImageCommandInput, BatchGetImageCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetImage",
  BatchGetImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetImageRequest;
      output: BatchGetImageResponse;
    };
    sdk: {
      input: BatchGetImageCommandInput;
      output: BatchGetImageCommandOutput;
    };
  };
}
