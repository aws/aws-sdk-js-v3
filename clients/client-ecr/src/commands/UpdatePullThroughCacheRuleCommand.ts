// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePullThroughCacheRuleRequest, UpdatePullThroughCacheRuleResponse } from "../models/models_0";
import { UpdatePullThroughCacheRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePullThroughCacheRuleCommand}.
 */
export interface UpdatePullThroughCacheRuleCommandInput extends UpdatePullThroughCacheRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePullThroughCacheRuleCommand}.
 */
export interface UpdatePullThroughCacheRuleCommandOutput extends UpdatePullThroughCacheRuleResponse, __MetadataBearer {}

/**
 * <p>Updates an existing pull through cache rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, UpdatePullThroughCacheRuleCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, UpdatePullThroughCacheRuleCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // UpdatePullThroughCacheRuleRequest
 *   registryId: "STRING_VALUE",
 *   ecrRepositoryPrefix: "STRING_VALUE", // required
 *   credentialArn: "STRING_VALUE",
 *   customRoleArn: "STRING_VALUE",
 * };
 * const command = new UpdatePullThroughCacheRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePullThroughCacheRuleResponse
 * //   ecrRepositoryPrefix: "STRING_VALUE",
 * //   registryId: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   credentialArn: "STRING_VALUE",
 * //   customRoleArn: "STRING_VALUE",
 * //   upstreamRepositoryPrefix: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePullThroughCacheRuleCommandInput - {@link UpdatePullThroughCacheRuleCommandInput}
 * @returns {@link UpdatePullThroughCacheRuleCommandOutput}
 * @see {@link UpdatePullThroughCacheRuleCommandInput} for command's `input` shape.
 * @see {@link UpdatePullThroughCacheRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @public
 */
export class UpdatePullThroughCacheRuleCommand extends $Command
  .classBuilder<
    UpdatePullThroughCacheRuleCommandInput,
    UpdatePullThroughCacheRuleCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "UpdatePullThroughCacheRule", {})
  .n("ECRClient", "UpdatePullThroughCacheRuleCommand")
  .sc(UpdatePullThroughCacheRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePullThroughCacheRuleRequest;
      output: UpdatePullThroughCacheRuleResponse;
    };
    sdk: {
      input: UpdatePullThroughCacheRuleCommandInput;
      output: UpdatePullThroughCacheRuleCommandOutput;
    };
  };
}
