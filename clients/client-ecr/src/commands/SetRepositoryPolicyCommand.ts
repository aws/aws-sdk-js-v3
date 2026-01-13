// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SetRepositoryPolicyRequest, SetRepositoryPolicyResponse } from "../models/models_0";
import { SetRepositoryPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetRepositoryPolicyCommand}.
 */
export interface SetRepositoryPolicyCommandInput extends SetRepositoryPolicyRequest {}
/**
 * @public
 *
 * The output of {@link SetRepositoryPolicyCommand}.
 */
export interface SetRepositoryPolicyCommandOutput extends SetRepositoryPolicyResponse, __MetadataBearer {}

/**
 * <p>Applies a repository policy to the specified repository to control access permissions.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository
 *                 policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, SetRepositoryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, SetRepositoryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // SetRepositoryPolicyRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   policyText: "STRING_VALUE", // required
 *   force: true || false,
 * };
 * const command = new SetRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * // { // SetRepositoryPolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   policyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetRepositoryPolicyCommandInput - {@link SetRepositoryPolicyCommandInput}
 * @returns {@link SetRepositoryPolicyCommandOutput}
 * @see {@link SetRepositoryPolicyCommandInput} for command's `input` shape.
 * @see {@link SetRepositoryPolicyCommandOutput} for command's `response` shape.
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
 * @public
 */
export class SetRepositoryPolicyCommand extends $Command
  .classBuilder<
    SetRepositoryPolicyCommandInput,
    SetRepositoryPolicyCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "SetRepositoryPolicy", {})
  .n("ECRClient", "SetRepositoryPolicyCommand")
  .sc(SetRepositoryPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetRepositoryPolicyRequest;
      output: SetRepositoryPolicyResponse;
    };
    sdk: {
      input: SetRepositoryPolicyCommandInput;
      output: SetRepositoryPolicyCommandOutput;
    };
  };
}
