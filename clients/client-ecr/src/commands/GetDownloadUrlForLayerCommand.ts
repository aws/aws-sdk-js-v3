// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDownloadUrlForLayerRequest, GetDownloadUrlForLayerResponse } from "../models/models_0";
import { de_GetDownloadUrlForLayerCommand, se_GetDownloadUrlForLayerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDownloadUrlForLayerCommand}.
 */
export interface GetDownloadUrlForLayerCommandInput extends GetDownloadUrlForLayerRequest {}
/**
 * @public
 *
 * The output of {@link GetDownloadUrlForLayerCommand}.
 */
export interface GetDownloadUrlForLayerCommandOutput extends GetDownloadUrlForLayerResponse, __MetadataBearer {}

/**
 * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can
 *             only get URLs for image layers that are referenced in an image.</p>
 *          <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer
 *             that is not already cached.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetDownloadUrlForLayerCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetDownloadUrlForLayerCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ECRClient(config);
 * const input = { // GetDownloadUrlForLayerRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   layerDigest: "STRING_VALUE", // required
 * };
 * const command = new GetDownloadUrlForLayerCommand(input);
 * const response = await client.send(command);
 * // { // GetDownloadUrlForLayerResponse
 * //   downloadUrl: "STRING_VALUE",
 * //   layerDigest: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDownloadUrlForLayerCommandInput - {@link GetDownloadUrlForLayerCommandInput}
 * @returns {@link GetDownloadUrlForLayerCommandOutput}
 * @see {@link GetDownloadUrlForLayerCommandInput} for command's `input` shape.
 * @see {@link GetDownloadUrlForLayerCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link LayerInaccessibleException} (client fault)
 *  <p>The specified layer is not available because it is not associated with an image.
 *             Unassociated image layers may be cleaned up at any time.</p>
 *
 * @throws {@link LayersNotFoundException} (client fault)
 *  <p>The specified layers could not be found, or the specified layer is not valid for this
 *             repository.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnableToGetUpstreamLayerException} (client fault)
 *  <p>There was an issue getting the upstream layer matching the pull through cache
 *             rule.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 * @public
 */
export class GetDownloadUrlForLayerCommand extends $Command
  .classBuilder<
    GetDownloadUrlForLayerCommandInput,
    GetDownloadUrlForLayerCommandOutput,
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
  .s("AmazonEC2ContainerRegistry_V20150921", "GetDownloadUrlForLayer", {})
  .n("ECRClient", "GetDownloadUrlForLayerCommand")
  .f(void 0, void 0)
  .ser(se_GetDownloadUrlForLayerCommand)
  .de(de_GetDownloadUrlForLayerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDownloadUrlForLayerRequest;
      output: GetDownloadUrlForLayerResponse;
    };
    sdk: {
      input: GetDownloadUrlForLayerCommandInput;
      output: GetDownloadUrlForLayerCommandOutput;
    };
  };
}
