// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePullThroughCacheRulesRequest, DescribePullThroughCacheRulesResponse } from "../models/models_0";
import {
  de_DescribePullThroughCacheRulesCommand,
  se_DescribePullThroughCacheRulesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePullThroughCacheRulesCommand}.
 */
export interface DescribePullThroughCacheRulesCommandInput extends DescribePullThroughCacheRulesRequest {}
/**
 * @public
 *
 * The output of {@link DescribePullThroughCacheRulesCommand}.
 */
export interface DescribePullThroughCacheRulesCommandOutput
  extends DescribePullThroughCacheRulesResponse,
    __MetadataBearer {}

/**
 * <p>Returns the pull through cache rules for a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribePullThroughCacheRulesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribePullThroughCacheRulesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ECRClient(config);
 * const input = { // DescribePullThroughCacheRulesRequest
 *   registryId: "STRING_VALUE",
 *   ecrRepositoryPrefixes: [ // PullThroughCacheRuleRepositoryPrefixList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribePullThroughCacheRulesCommand(input);
 * const response = await client.send(command);
 * // { // DescribePullThroughCacheRulesResponse
 * //   pullThroughCacheRules: [ // PullThroughCacheRuleList
 * //     { // PullThroughCacheRule
 * //       ecrRepositoryPrefix: "STRING_VALUE",
 * //       upstreamRegistryUrl: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       registryId: "STRING_VALUE",
 * //       credentialArn: "STRING_VALUE",
 * //       upstreamRegistry: "ecr-public" || "quay" || "k8s" || "docker-hub" || "github-container-registry" || "azure-container-registry" || "gitlab-container-registry",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePullThroughCacheRulesCommandInput - {@link DescribePullThroughCacheRulesCommandInput}
 * @returns {@link DescribePullThroughCacheRulesCommandOutput}
 * @see {@link DescribePullThroughCacheRulesCommandInput} for command's `input` shape.
 * @see {@link DescribePullThroughCacheRulesCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link PullThroughCacheRuleNotFoundException} (client fault)
 *  <p>The pull through cache rule was not found. Specify a valid pull through cache rule and
 *             try again.</p>
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
 * @public
 */
export class DescribePullThroughCacheRulesCommand extends $Command
  .classBuilder<
    DescribePullThroughCacheRulesCommandInput,
    DescribePullThroughCacheRulesCommandOutput,
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
  .s("AmazonEC2ContainerRegistry_V20150921", "DescribePullThroughCacheRules", {})
  .n("ECRClient", "DescribePullThroughCacheRulesCommand")
  .f(void 0, void 0)
  .ser(se_DescribePullThroughCacheRulesCommand)
  .de(de_DescribePullThroughCacheRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePullThroughCacheRulesRequest;
      output: DescribePullThroughCacheRulesResponse;
    };
    sdk: {
      input: DescribePullThroughCacheRulesCommandInput;
      output: DescribePullThroughCacheRulesCommandOutput;
    };
  };
}
