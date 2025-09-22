// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ValidatePullThroughCacheRuleRequest, ValidatePullThroughCacheRuleResponse } from "../models/models_0";
import { ValidatePullThroughCacheRule } from "../schemas/schemas_5_Pull";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ValidatePullThroughCacheRuleCommand}.
 */
export interface ValidatePullThroughCacheRuleCommandInput extends ValidatePullThroughCacheRuleRequest {}
/**
 * @public
 *
 * The output of {@link ValidatePullThroughCacheRuleCommand}.
 */
export interface ValidatePullThroughCacheRuleCommandOutput
  extends ValidatePullThroughCacheRuleResponse,
    __MetadataBearer {}

/**
 * <p>Validates an existing pull through cache rule for an upstream registry that requires
 *             authentication. This will retrieve the contents of the Amazon Web Services Secrets Manager secret, verify the
 *             syntax, and then validate that authentication to the upstream registry is
 *             successful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, ValidatePullThroughCacheRuleCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, ValidatePullThroughCacheRuleCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // ValidatePullThroughCacheRuleRequest
 *   ecrRepositoryPrefix: "STRING_VALUE", // required
 *   registryId: "STRING_VALUE",
 * };
 * const command = new ValidatePullThroughCacheRuleCommand(input);
 * const response = await client.send(command);
 * // { // ValidatePullThroughCacheRuleResponse
 * //   ecrRepositoryPrefix: "STRING_VALUE",
 * //   registryId: "STRING_VALUE",
 * //   upstreamRegistryUrl: "STRING_VALUE",
 * //   credentialArn: "STRING_VALUE",
 * //   customRoleArn: "STRING_VALUE",
 * //   upstreamRepositoryPrefix: "STRING_VALUE",
 * //   isValid: true || false,
 * //   failure: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ValidatePullThroughCacheRuleCommandInput - {@link ValidatePullThroughCacheRuleCommandInput}
 * @returns {@link ValidatePullThroughCacheRuleCommandOutput}
 * @see {@link ValidatePullThroughCacheRuleCommandInput} for command's `input` shape.
 * @see {@link ValidatePullThroughCacheRuleCommandOutput} for command's `response` shape.
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
export class ValidatePullThroughCacheRuleCommand extends $Command
  .classBuilder<
    ValidatePullThroughCacheRuleCommandInput,
    ValidatePullThroughCacheRuleCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "ValidatePullThroughCacheRule", {})
  .n("ECRClient", "ValidatePullThroughCacheRuleCommand")
  .sc(ValidatePullThroughCacheRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidatePullThroughCacheRuleRequest;
      output: ValidatePullThroughCacheRuleResponse;
    };
    sdk: {
      input: ValidatePullThroughCacheRuleCommandInput;
      output: ValidatePullThroughCacheRuleCommandOutput;
    };
  };
}
