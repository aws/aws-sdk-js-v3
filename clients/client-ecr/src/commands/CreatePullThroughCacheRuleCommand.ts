// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePullThroughCacheRuleRequest, CreatePullThroughCacheRuleResponse } from "../models/models_0";
import { CreatePullThroughCacheRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePullThroughCacheRuleCommand}.
 */
export interface CreatePullThroughCacheRuleCommandInput extends CreatePullThroughCacheRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreatePullThroughCacheRuleCommand}.
 */
export interface CreatePullThroughCacheRuleCommandOutput extends CreatePullThroughCacheRuleResponse, __MetadataBearer {}

/**
 * <p>Creates a pull through cache rule. A pull through cache rule provides a way to cache
 *             images from an upstream registry source in your Amazon ECR private registry. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/pull-through-cache.html">Using pull through cache
 *                 rules</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, CreatePullThroughCacheRuleCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, CreatePullThroughCacheRuleCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // CreatePullThroughCacheRuleRequest
 *   ecrRepositoryPrefix: "STRING_VALUE", // required
 *   upstreamRegistryUrl: "STRING_VALUE", // required
 *   registryId: "STRING_VALUE",
 *   upstreamRegistry: "ecr" || "ecr-public" || "quay" || "k8s" || "docker-hub" || "github-container-registry" || "azure-container-registry" || "gitlab-container-registry",
 *   credentialArn: "STRING_VALUE",
 *   customRoleArn: "STRING_VALUE",
 *   upstreamRepositoryPrefix: "STRING_VALUE",
 * };
 * const command = new CreatePullThroughCacheRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreatePullThroughCacheRuleResponse
 * //   ecrRepositoryPrefix: "STRING_VALUE",
 * //   upstreamRegistryUrl: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   registryId: "STRING_VALUE",
 * //   upstreamRegistry: "ecr" || "ecr-public" || "quay" || "k8s" || "docker-hub" || "github-container-registry" || "azure-container-registry" || "gitlab-container-registry",
 * //   credentialArn: "STRING_VALUE",
 * //   customRoleArn: "STRING_VALUE",
 * //   upstreamRepositoryPrefix: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePullThroughCacheRuleCommandInput - {@link CreatePullThroughCacheRuleCommandInput}
 * @returns {@link CreatePullThroughCacheRuleCommandOutput}
 * @see {@link CreatePullThroughCacheRuleCommandInput} for command's `input` shape.
 * @see {@link CreatePullThroughCacheRuleCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
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
 * @throws {@link PullThroughCacheRuleAlreadyExistsException} (client fault)
 *  <p>A pull through cache rule with these settings already exists for the private
 *             registry.</p>
 *
 * @throws {@link SecretNotFoundException} (client fault)
 *  <p>The ARN of the secret specified in the pull through cache rule was not found. Update
 *             the pull through cache rule with a valid secret ARN and try again.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnableToAccessSecretException} (client fault)
 *  <p>The secret is unable to be accessed. Verify the resource permissions for the secret
 *             and try again.</p>
 *
 * @throws {@link UnableToDecryptSecretValueException} (client fault)
 *  <p>The secret is accessible but is unable to be decrypted. Verify the resource
 *             permisisons and try again.</p>
 *
 * @throws {@link UnsupportedUpstreamRegistryException} (client fault)
 *  <p>The specified upstream registry isn't supported.</p>
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
export class CreatePullThroughCacheRuleCommand extends $Command
  .classBuilder<
    CreatePullThroughCacheRuleCommandInput,
    CreatePullThroughCacheRuleCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "CreatePullThroughCacheRule", {})
  .n("ECRClient", "CreatePullThroughCacheRuleCommand")
  .sc(CreatePullThroughCacheRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePullThroughCacheRuleRequest;
      output: CreatePullThroughCacheRuleResponse;
    };
    sdk: {
      input: CreatePullThroughCacheRuleCommandInput;
      output: CreatePullThroughCacheRuleCommandOutput;
    };
  };
}
