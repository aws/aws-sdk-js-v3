// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetLifecyclePolicyRequest, GetLifecyclePolicyResponse } from "../models/models_0";
import { GetLifecyclePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLifecyclePolicyCommand}.
 */
export interface GetLifecyclePolicyCommandInput extends GetLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetLifecyclePolicyCommand}.
 */
export interface GetLifecyclePolicyCommandOutput extends GetLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the lifecycle policy for the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetLifecyclePolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetLifecyclePolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // GetLifecyclePolicyRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new GetLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetLifecyclePolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   lifecyclePolicyText: "STRING_VALUE",
 * //   lastEvaluatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetLifecyclePolicyCommandInput - {@link GetLifecyclePolicyCommandInput}
 * @returns {@link GetLifecyclePolicyCommandOutput}
 * @see {@link GetLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link LifecyclePolicyNotFoundException} (client fault)
 *  <p>The lifecycle policy could not be found, and no policy is set to the
 *             repository.</p>
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
export class GetLifecyclePolicyCommand extends $Command
  .classBuilder<
    GetLifecyclePolicyCommandInput,
    GetLifecyclePolicyCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "GetLifecyclePolicy", {})
  .n("ECRClient", "GetLifecyclePolicyCommand")
  .sc(GetLifecyclePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLifecyclePolicyRequest;
      output: GetLifecyclePolicyResponse;
    };
    sdk: {
      input: GetLifecyclePolicyCommandInput;
      output: GetLifecyclePolicyCommandOutput;
    };
  };
}
