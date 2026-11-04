// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePullThroughCacheRulesRequest, DescribePullThroughCacheRulesResponse } from "../models/models_0";
import { DescribePullThroughCacheRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribePullThroughCacheRulesCommandOutput extends DescribePullThroughCacheRulesResponse, __MetadataBearer {}

/**
 * Returns the pull through cache rules for a registry.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribePullThroughCacheRulesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribePullThroughCacheRulesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
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
 * //       customRoleArn: "STRING_VALUE",
 * //       upstreamRepositoryPrefix: "STRING_VALUE",
 * //       upstreamRegistry: "ecr" || "ecr-public" || "quay" || "k8s" || "docker-hub" || "github-container-registry" || "azure-container-registry" || "gitlab-container-registry" || "chainguard",
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
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link PullThroughCacheRuleNotFoundException} (client fault)
 *
 * The pull through cache rule was not found. Specify a valid pull through cache rule and try again.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There was an exception validating this request.
 *
 * @throws {@link ECRServiceException}
 *
 * Base exception class for all service exceptions from ECR service.
 *
 * @public
 */
export class DescribePullThroughCacheRulesCommand extends command<DescribePullThroughCacheRulesCommandInput, DescribePullThroughCacheRulesCommandOutput>(
  _ep0,
  _mw0,
  "DescribePullThroughCacheRules",
  DescribePullThroughCacheRules$
) {
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
