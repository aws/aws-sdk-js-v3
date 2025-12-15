// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutImageScanningConfigurationRequest, PutImageScanningConfigurationResponse } from "../models/models_0";
import { PutImageScanningConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutImageScanningConfigurationCommand}.
 */
export interface PutImageScanningConfigurationCommandInput extends PutImageScanningConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutImageScanningConfigurationCommand}.
 */
export interface PutImageScanningConfigurationCommandOutput
  extends PutImageScanningConfigurationResponse,
    __MetadataBearer {}

/**
 * <important>
 *             <p>The <code>PutImageScanningConfiguration</code> API is being deprecated, in favor
 *                 of specifying the image scanning configuration at the registry level. For more
 *                 information, see <a>PutRegistryScanningConfiguration</a>.</p>
 *          </important>
 *          <p>Updates the image scanning configuration for the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutImageScanningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutImageScanningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // PutImageScanningConfigurationRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageScanningConfiguration: { // ImageScanningConfiguration
 *     scanOnPush: true || false,
 *   },
 * };
 * const command = new PutImageScanningConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutImageScanningConfigurationResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   imageScanningConfiguration: { // ImageScanningConfiguration
 * //     scanOnPush: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param PutImageScanningConfigurationCommandInput - {@link PutImageScanningConfigurationCommandInput}
 * @returns {@link PutImageScanningConfigurationCommandOutput}
 * @see {@link PutImageScanningConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutImageScanningConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @public
 */
export class PutImageScanningConfigurationCommand extends $Command
  .classBuilder<
    PutImageScanningConfigurationCommandInput,
    PutImageScanningConfigurationCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "PutImageScanningConfiguration", {})
  .n("ECRClient", "PutImageScanningConfigurationCommand")
  .sc(PutImageScanningConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutImageScanningConfigurationRequest;
      output: PutImageScanningConfigurationResponse;
    };
    sdk: {
      input: PutImageScanningConfigurationCommandInput;
      output: PutImageScanningConfigurationCommandOutput;
    };
  };
}
