// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeletePullThroughCacheRuleRequest, DeletePullThroughCacheRuleResponse } from "../models/models_0";
import { DeletePullThroughCacheRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePullThroughCacheRuleCommand}.
 */
export interface DeletePullThroughCacheRuleCommandInput extends DeletePullThroughCacheRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeletePullThroughCacheRuleCommand}.
 */
export interface DeletePullThroughCacheRuleCommandOutput extends DeletePullThroughCacheRuleResponse, __MetadataBearer {}

/**
 * <p>Deletes a pull through cache rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeletePullThroughCacheRuleCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeletePullThroughCacheRuleCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // DeletePullThroughCacheRuleRequest
 *   ecrRepositoryPrefix: "STRING_VALUE", // required
 *   registryId: "STRING_VALUE",
 * };
 * const command = new DeletePullThroughCacheRuleCommand(input);
 * const response = await client.send(command);
 * // { // DeletePullThroughCacheRuleResponse
 * //   ecrRepositoryPrefix: "STRING_VALUE",
 * //   upstreamRegistryUrl: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   registryId: "STRING_VALUE",
 * //   credentialArn: "STRING_VALUE",
 * //   customRoleArn: "STRING_VALUE",
 * //   upstreamRepositoryPrefix: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePullThroughCacheRuleCommandInput - {@link DeletePullThroughCacheRuleCommandInput}
 * @returns {@link DeletePullThroughCacheRuleCommandOutput}
 * @see {@link DeletePullThroughCacheRuleCommandInput} for command's `input` shape.
 * @see {@link DeletePullThroughCacheRuleCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeletePullThroughCacheRuleCommand extends $Command
  .classBuilder<
    DeletePullThroughCacheRuleCommandInput,
    DeletePullThroughCacheRuleCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "DeletePullThroughCacheRule", {})
  .n("ECRClient", "DeletePullThroughCacheRuleCommand")
  .sc(DeletePullThroughCacheRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePullThroughCacheRuleRequest;
      output: DeletePullThroughCacheRuleResponse;
    };
    sdk: {
      input: DeletePullThroughCacheRuleCommandInput;
      output: DeletePullThroughCacheRuleCommandOutput;
    };
  };
}
