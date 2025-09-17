// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteImageRequest, BatchDeleteImageResponse } from "../models/models_0";
import { de_BatchDeleteImageCommand, se_BatchDeleteImageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteImageCommand}.
 */
export interface BatchDeleteImageCommandInput extends BatchDeleteImageRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteImageCommand}.
 */
export interface BatchDeleteImageCommandOutput extends BatchDeleteImageResponse, __MetadataBearer {}

/**
 * <p>Deletes a list of specified images within a repository. Images are specified with
 *             either an <code>imageTag</code> or <code>imageDigest</code>.</p>
 *          <p>You can remove a tag from an image by specifying the image's tag in your request. When
 *             you remove the last tag from an image, the image is deleted from your repository.</p>
 *          <p>You can completely delete an image (and all of its tags) by specifying the image's
 *             digest in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchDeleteImageCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchDeleteImageCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // BatchDeleteImageRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageIds: [ // ImageIdentifierList // required
 *     { // ImageIdentifier
 *       imageDigest: "STRING_VALUE",
 *       imageTag: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchDeleteImageCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteImageResponse
 * //   imageIds: [ // ImageIdentifierList
 * //     { // ImageIdentifier
 * //       imageDigest: "STRING_VALUE",
 * //       imageTag: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failures: [ // ImageFailureList
 * //     { // ImageFailure
 * //       imageId: {
 * //         imageDigest: "STRING_VALUE",
 * //         imageTag: "STRING_VALUE",
 * //       },
 * //       failureCode: "InvalidImageDigest" || "InvalidImageTag" || "ImageTagDoesNotMatchDigest" || "ImageNotFound" || "MissingDigestAndTag" || "ImageReferencedByManifestList" || "KmsError" || "UpstreamAccessDenied" || "UpstreamTooManyRequests" || "UpstreamUnavailable",
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteImageCommandInput - {@link BatchDeleteImageCommandInput}
 * @returns {@link BatchDeleteImageCommandOutput}
 * @see {@link BatchDeleteImageCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteImageCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @example To delete multiple images
 * ```javascript
 * // This example deletes images with the tags precise and trusty in a repository called ubuntu in the default registry for an account.
 * const input = {
 *   imageIds: [
 *     {
 *       imageTag: "precise"
 *     }
 *   ],
 *   repositoryName: "ubuntu"
 * };
 * const command = new BatchDeleteImageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failures:   [],
 *   imageIds: [
 *     {
 *       imageDigest: "sha256:examplee6d1e504117a17000003d3753086354a38375961f2e665416ef4b1b2f",
 *       imageTag: "precise"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchDeleteImageCommand extends $Command
  .classBuilder<
    BatchDeleteImageCommandInput,
    BatchDeleteImageCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "BatchDeleteImage", {})
  .n("ECRClient", "BatchDeleteImageCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteImageCommand)
  .de(de_BatchDeleteImageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteImageRequest;
      output: BatchDeleteImageResponse;
    };
    sdk: {
      input: BatchDeleteImageCommandInput;
      output: BatchDeleteImageCommandOutput;
    };
  };
}
