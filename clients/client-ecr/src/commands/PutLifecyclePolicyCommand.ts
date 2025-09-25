// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutLifecyclePolicyRequest, PutLifecyclePolicyResponse } from "../models/models_0";
import { PutLifecyclePolicy } from "../schemas/schemas_8_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutLifecyclePolicyCommand}.
 */
export interface PutLifecyclePolicyCommandInput extends PutLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutLifecyclePolicyCommand}.
 */
export interface PutLifecyclePolicyCommandOutput extends PutLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Creates or updates the lifecycle policy for the specified repository. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy
 *                 template</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutLifecyclePolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutLifecyclePolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // PutLifecyclePolicyRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   lifecyclePolicyText: "STRING_VALUE", // required
 * };
 * const command = new PutLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutLifecyclePolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   lifecyclePolicyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutLifecyclePolicyCommandInput - {@link PutLifecyclePolicyCommandInput}
 * @returns {@link PutLifecyclePolicyCommandOutput}
 * @see {@link PutLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link PutLifecyclePolicyCommandOutput} for command's `response` shape.
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
export class PutLifecyclePolicyCommand extends $Command
  .classBuilder<
    PutLifecyclePolicyCommandInput,
    PutLifecyclePolicyCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "PutLifecyclePolicy", {})
  .n("ECRClient", "PutLifecyclePolicyCommand")
  .sc(PutLifecyclePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLifecyclePolicyRequest;
      output: PutLifecyclePolicyResponse;
    };
    sdk: {
      input: PutLifecyclePolicyCommandInput;
      output: PutLifecyclePolicyCommandOutput;
    };
  };
}
