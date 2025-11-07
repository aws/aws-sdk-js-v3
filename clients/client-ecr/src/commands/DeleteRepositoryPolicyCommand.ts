// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRepositoryPolicyRequest, DeleteRepositoryPolicyResponse } from "../models/models_0";
import { DeleteRepositoryPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRepositoryPolicyCommand}.
 */
export interface DeleteRepositoryPolicyCommandInput extends DeleteRepositoryPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRepositoryPolicyCommand}.
 */
export interface DeleteRepositoryPolicyCommandOutput extends DeleteRepositoryPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the repository policy associated with the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteRepositoryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteRepositoryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // DeleteRepositoryPolicyRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRepositoryPolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   policyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteRepositoryPolicyCommandInput - {@link DeleteRepositoryPolicyCommandInput}
 * @returns {@link DeleteRepositoryPolicyCommandOutput}
 * @see {@link DeleteRepositoryPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link RepositoryPolicyNotFoundException} (client fault)
 *  <p>The specified repository and registry combination does not have an associated
 *             repository policy.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @example To delete the policy associated with a repository
 * ```javascript
 * // This example deletes the policy associated with the repository named ubuntu in the current account.
 * const input = {
 *   repositoryName: "ubuntu"
 * };
 * const command = new DeleteRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policyText: "{ ... }",
 *   registryId: "012345678901",
 *   repositoryName: "ubuntu"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteRepositoryPolicyCommand extends $Command
  .classBuilder<
    DeleteRepositoryPolicyCommandInput,
    DeleteRepositoryPolicyCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "DeleteRepositoryPolicy", {})
  .n("ECRClient", "DeleteRepositoryPolicyCommand")
  .sc(DeleteRepositoryPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRepositoryPolicyRequest;
      output: DeleteRepositoryPolicyResponse;
    };
    sdk: {
      input: DeleteRepositoryPolicyCommandInput;
      output: DeleteRepositoryPolicyCommandOutput;
    };
  };
}
