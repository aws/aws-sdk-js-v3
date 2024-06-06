// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartImageScanRequest, StartImageScanResponse } from "../models/models_0";
import { de_StartImageScanCommand, se_StartImageScanCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartImageScanCommand}.
 */
export interface StartImageScanCommandInput extends StartImageScanRequest {}
/**
 * @public
 *
 * The output of {@link StartImageScanCommand}.
 */
export interface StartImageScanCommandOutput extends StartImageScanResponse, __MetadataBearer {}

/**
 * <p>Starts an image vulnerability scan. An image scan can only be started once per 24
 *             hours on an individual image. This limit includes if an image was scanned on initial
 *             push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the
 *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, StartImageScanCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, StartImageScanCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // StartImageScanRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageId: { // ImageIdentifier
 *     imageDigest: "STRING_VALUE",
 *     imageTag: "STRING_VALUE",
 *   },
 * };
 * const command = new StartImageScanCommand(input);
 * const response = await client.send(command);
 * // { // StartImageScanResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   imageId: { // ImageIdentifier
 * //     imageDigest: "STRING_VALUE",
 * //     imageTag: "STRING_VALUE",
 * //   },
 * //   imageScanStatus: { // ImageScanStatus
 * //     status: "IN_PROGRESS" || "COMPLETE" || "FAILED" || "UNSUPPORTED_IMAGE" || "ACTIVE" || "PENDING" || "SCAN_ELIGIBILITY_EXPIRED" || "FINDINGS_UNAVAILABLE",
 * //     description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartImageScanCommandInput - {@link StartImageScanCommandInput}
 * @returns {@link StartImageScanCommandOutput}
 * @see {@link StartImageScanCommandInput} for command's `input` shape.
 * @see {@link StartImageScanCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link ImageNotFoundException} (client fault)
 *  <p>The image requested does not exist in the specified repository.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedImageTypeException} (client fault)
 *  <p>The image is of a type that cannot be scanned.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 * @public
 */
export class StartImageScanCommand extends $Command
  .classBuilder<
    StartImageScanCommandInput,
    StartImageScanCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "StartImageScan", {})
  .n("ECRClient", "StartImageScanCommand")
  .f(void 0, void 0)
  .ser(se_StartImageScanCommand)
  .de(de_StartImageScanCommand)
  .build() {}
