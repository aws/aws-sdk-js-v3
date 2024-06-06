// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutImageRequest, PutImageResponse } from "../models/models_0";
import { de_PutImageCommand, se_PutImageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates or updates the image manifest and tags that are associated with an image.</p>
 *          <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is
 *          called once to create or update the image manifest and the tags that are associated with
 *          the image.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, PutImageCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, PutImageCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
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
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link ImageAlreadyExistsException} (client fault)
 *  <p>The specified image has already been pushed, and there were no changes to the manifest
 *          or image tag after the last push.</p>
 *
 * @throws {@link ImageDigestDoesNotMatchException} (client fault)
 *  <p>The specified image digest doesn't match the digest that Amazon ECR calculated for the
 *          image.</p>
 *
 * @throws {@link ImageTagAlreadyExistsException} (client fault)
 *  <p>The specified image is tagged with a tag that already exists. The repository is
 *          configured for tag immutability.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 *
 * @throws {@link LayersNotFoundException} (client fault)
 *  <p>The specified layers can't be found, or the specified layer isn't valid for this
 *          repository.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation didn't succeed because it would have exceeded a service limit for your
 *          account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR Service Quotas</a> in the
 *          Amazon Elastic Container Registry User Guide.</p>
 *
 * @throws {@link ReferencedImagesNotFoundException} (client fault)
 *  <p>The manifest list is referencing an image that doesn't exist.</p>
 *
 * @throws {@link RegistryNotFoundException} (client fault)
 *  <p>The registry doesn't exist.</p>
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
 * @public
 */
export class PutImageCommand extends $Command
  .classBuilder<
    PutImageCommandInput,
    PutImageCommandOutput,
    ECRPUBLICClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ECRPUBLICClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SpencerFrontendService", "PutImage", {})
  .n("ECRPUBLICClient", "PutImageCommand")
  .f(void 0, void 0)
  .ser(se_PutImageCommand)
  .de(de_PutImageCommand)
  .build() {}
