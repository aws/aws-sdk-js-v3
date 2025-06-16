// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
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
 * <p>Returns metadata about the images in a repository.</p>
 *          <note>
 *             <p>Starting with Docker version 1.9, the Docker client compresses image layers before
 *                 pushing them to a V2 Docker registry. The output of the <code>docker images</code>
 *                 command shows the uncompressed image size. Therefore, Docker might return a larger
 *                 image than the image shown in the Amazon Web Services Management Console.</p>
 *          </note>
 *          <important>
 *             <p>The new version of Amazon ECR <i>Basic Scanning</i> doesn't use the
 *                 <a>ImageDetail$imageScanFindingsSummary</a> and
 *                 <a>ImageDetail$imageScanStatus</a>
 *                 attributes from the API response to return scan results.
 *                 Use the <a>DescribeImageScanFindings</a> API instead. For more
 *                 information about Amazon Web Services native basic scanning, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html"> Scan images for software
 *                     vulnerabilities in Amazon ECR</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeImagesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeImagesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
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
 *   filter: { // DescribeImagesFilter
 *     tagStatus: "TAGGED" || "UNTAGGED" || "ANY",
 *   },
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
 * //       imageScanStatus: { // ImageScanStatus
 * //         status: "IN_PROGRESS" || "COMPLETE" || "FAILED" || "UNSUPPORTED_IMAGE" || "ACTIVE" || "PENDING" || "SCAN_ELIGIBILITY_EXPIRED" || "FINDINGS_UNAVAILABLE" || "LIMIT_EXCEEDED",
 * //         description: "STRING_VALUE",
 * //       },
 * //       imageScanFindingsSummary: { // ImageScanFindingsSummary
 * //         imageScanCompletedAt: new Date("TIMESTAMP"),
 * //         vulnerabilitySourceUpdatedAt: new Date("TIMESTAMP"),
 * //         findingSeverityCounts: { // FindingSeverityCounts
 * //           "<keys>": Number("int"),
 * //         },
 * //       },
 * //       imageManifestMediaType: "STRING_VALUE",
 * //       artifactMediaType: "STRING_VALUE",
 * //       lastRecordedPullTime: new Date("TIMESTAMP"),
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
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link ImageNotFoundException} (client fault)
 *  <p>The image requested does not exist in the specified repository.</p>
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
 * @public
 */
export class DescribeImagesCommand extends $Command
  .classBuilder<
    DescribeImagesCommandInput,
    DescribeImagesCommandOutput,
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
  .s("AmazonEC2ContainerRegistry_V20150921", "DescribeImages", {})
  .n("ECRClient", "DescribeImagesCommand")
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
