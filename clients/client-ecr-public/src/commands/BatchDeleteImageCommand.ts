// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
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
 * <p>Deletes a list of specified images that are within a repository in a public registry.
 *          Images are specified with either an <code>imageTag</code> or
 *          <code>imageDigest</code>.</p>
 *          <p>You can remove a tag from an image by specifying the image's tag in your request. When
 *          you remove the last tag from an image, the image is deleted from your repository.</p>
 *          <p>You can completely delete an image (and all of its tags) by specifying the digest of the
 *          image in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, BatchDeleteImageCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, BatchDeleteImageCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
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
 * //       failureCode: "InvalidImageDigest" || "InvalidImageTag" || "ImageTagDoesNotMatchDigest" || "ImageNotFound" || "MissingDigestAndTag" || "ImageReferencedByManifestList" || "KmsError",
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
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository can't be found. Check the spelling of the specified repository
 *          and ensure that you're performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *  <p>The action isn't supported in this Region.</p>
 *
 * @throws {@link ECRPUBLICServiceException}
 * <p>Base exception class for all service exceptions from ECRPUBLIC service.</p>
 *
 *
 * @public
 */
export class BatchDeleteImageCommand extends $Command
  .classBuilder<
    BatchDeleteImageCommandInput,
    BatchDeleteImageCommandOutput,
    ECRPUBLICClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRPUBLICClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SpencerFrontendService", "BatchDeleteImage", {})
  .n("ECRPUBLICClient", "BatchDeleteImageCommand")
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
