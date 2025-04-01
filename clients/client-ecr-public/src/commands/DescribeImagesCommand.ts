// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImagesRequest, DescribeImagesResponse } from "../models/models_0";
import { de_DescribeImagesCommand, se_DescribeImagesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImagesCommand}.
 */
export interface DescribeImagesCommandInput extends DescribeImagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImagesCommand}.
 */
export interface DescribeImagesCommandOutput extends DescribeImagesResponse, __MetadataBearer {}

/**
 * <p>Returns metadata that's related to the images in a repository in a public
 *          registry.</p>
 *          <note>
 *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers before
 *             pushing them to a V2 Docker registry. The output of the <code>docker images</code>
 *             command shows the uncompressed image size. Therefore, it might return a larger image
 *             size than the image sizes that are returned by <a>DescribeImages</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, DescribeImagesCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, DescribeImagesCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const input = { // DescribeImagesRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageIds: [ // ImageIdentifierList
 *     { // ImageIdentifier
 *       imageDigest: "STRING_VALUE",
 *       imageTag: "STRING_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeImagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImagesResponse
 * //   imageDetails: [ // ImageDetailList
 * //     { // ImageDetail
 * //       registryId: "STRING_VALUE",
 * //       repositoryName: "STRING_VALUE",
 * //       imageDigest: "STRING_VALUE",
 * //       imageTags: [ // ImageTagList
 * //         "STRING_VALUE",
 * //       ],
 * //       imageSizeInBytes: Number("long"),
 * //       imagePushedAt: new Date("TIMESTAMP"),
 * //       imageManifestMediaType: "STRING_VALUE",
 * //       artifactMediaType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImagesCommandInput - {@link DescribeImagesCommandInput}
 * @returns {@link DescribeImagesCommandOutput}
 * @see {@link DescribeImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeImagesCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link ImageNotFoundException} (client fault)
 *  <p>The image requested doesn't exist in the specified repository.</p>
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
export class DescribeImagesCommand extends $Command
  .classBuilder<
    DescribeImagesCommandInput,
    DescribeImagesCommandOutput,
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
  .s("SpencerFrontendService", "DescribeImages", {})
  .n("ECRPUBLICClient", "DescribeImagesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImagesCommand)
  .de(de_DescribeImagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImagesRequest;
      output: DescribeImagesResponse;
    };
    sdk: {
      input: DescribeImagesCommandInput;
      output: DescribeImagesCommandOutput;
    };
  };
}
