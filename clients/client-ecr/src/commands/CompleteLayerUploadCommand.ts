// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CompleteLayerUploadRequest, CompleteLayerUploadResponse } from "../models/models_0";
import { de_CompleteLayerUploadCommand, se_CompleteLayerUploadCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CompleteLayerUploadCommand}.
 */
export interface CompleteLayerUploadCommandInput extends CompleteLayerUploadRequest {}
/**
 * @public
 *
 * The output of {@link CompleteLayerUploadCommand}.
 */
export interface CompleteLayerUploadCommandOutput extends CompleteLayerUploadResponse, __MetadataBearer {}

/**
 * <p>Informs Amazon ECR that the image layer upload has completed for a specified registry,
 *             repository name, and upload ID. You can optionally provide a <code>sha256</code> digest
 *             of the image layer for data validation purposes.</p>
 *          <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image
 *             layer to verify that the upload has completed.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, CompleteLayerUploadCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, CompleteLayerUploadCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ECRClient(config);
 * const input = { // CompleteLayerUploadRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   layerDigests: [ // LayerDigestList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CompleteLayerUploadCommand(input);
 * const response = await client.send(command);
 * // { // CompleteLayerUploadResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   uploadId: "STRING_VALUE",
 * //   layerDigest: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CompleteLayerUploadCommandInput - {@link CompleteLayerUploadCommandInput}
 * @returns {@link CompleteLayerUploadCommandOutput}
 * @see {@link CompleteLayerUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteLayerUploadCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link EmptyUploadException} (client fault)
 *  <p>The specified layer upload does not contain any layer parts.</p>
 *
 * @throws {@link InvalidLayerException} (client fault)
 *  <p>The layer digest calculation performed by Amazon ECR upon receipt of the image layer does
 *             not match the digest specified.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link KmsException} (client fault)
 *  <p>The operation failed due to a KMS exception.</p>
 *
 * @throws {@link LayerAlreadyExistsException} (client fault)
 *  <p>The image layer already exists in the associated repository.</p>
 *
 * @throws {@link LayerPartTooSmallException} (client fault)
 *  <p>Layer parts must be at least 5 MiB in size.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UploadNotFoundException} (client fault)
 *  <p>The upload could not be found, or the specified upload ID is not valid for this
 *             repository.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 * @public
 */
export class CompleteLayerUploadCommand extends $Command
  .classBuilder<
    CompleteLayerUploadCommandInput,
    CompleteLayerUploadCommandOutput,
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
  .s("AmazonEC2ContainerRegistry_V20150921", "CompleteLayerUpload", {})
  .n("ECRClient", "CompleteLayerUploadCommand")
  .f(void 0, void 0)
  .ser(se_CompleteLayerUploadCommand)
  .de(de_CompleteLayerUploadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteLayerUploadRequest;
      output: CompleteLayerUploadResponse;
    };
    sdk: {
      input: CompleteLayerUploadCommandInput;
      output: CompleteLayerUploadCommandOutput;
    };
  };
}
