// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { InitiateLayerUploadRequest, InitiateLayerUploadResponse } from "../models/models_0";
import { InitiateLayerUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InitiateLayerUploadCommand}.
 */
export interface InitiateLayerUploadCommandInput extends InitiateLayerUploadRequest {}
/**
 * @public
 *
 * The output of {@link InitiateLayerUploadCommand}.
 */
export interface InitiateLayerUploadCommandOutput extends InitiateLayerUploadResponse, __MetadataBearer {}

/**
 * <p>Notifies Amazon ECR that you intend to upload an image layer.</p>
 *          <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer
 *          that hasn't already been uploaded. Whether an image layer uploads is determined by the
 *          BatchCheckLayerAvailability API action.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, InitiateLayerUploadCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, InitiateLayerUploadCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = { // InitiateLayerUploadRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new InitiateLayerUploadCommand(input);
 * const response = await client.send(command);
 * // { // InitiateLayerUploadResponse
 * //   uploadId: "STRING_VALUE",
 * //   partSize: Number("long"),
 * // };
 *
 * ```
 *
 * @param InitiateLayerUploadCommandInput - {@link InitiateLayerUploadCommandInput}
 * @returns {@link InitiateLayerUploadCommandOutput}
 * @see {@link InitiateLayerUploadCommandInput} for command's `input` shape.
 * @see {@link InitiateLayerUploadCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
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
 *
 * @public
 */
export class InitiateLayerUploadCommand extends $Command
  .classBuilder<
    InitiateLayerUploadCommandInput,
    InitiateLayerUploadCommandOutput,
    ECRPUBLICClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRPUBLICClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SpencerFrontendService", "InitiateLayerUpload", {})
  .n("ECRPUBLICClient", "InitiateLayerUploadCommand")
  .sc(InitiateLayerUpload$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InitiateLayerUploadRequest;
      output: InitiateLayerUploadResponse;
    };
    sdk: {
      input: InitiateLayerUploadCommandInput;
      output: InitiateLayerUploadCommandOutput;
    };
  };
}
