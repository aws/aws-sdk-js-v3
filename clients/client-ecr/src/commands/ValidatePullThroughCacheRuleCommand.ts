// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ValidatePullThroughCacheRuleRequest, ValidatePullThroughCacheRuleResponse } from "../models/models_0";
import { ValidatePullThroughCacheRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ValidatePullThroughCacheRuleCommandOutput extends ValidatePullThroughCacheRuleResponse, __MetadataBearer {}

/**
 * Validates an existing pull through cache rule for an upstream registry that requires authentication. This will retrieve the contents of the Amazon Web Services Secrets Manager secret, verify the syntax, and then validate that authentication to the upstream registry is successful.
 *
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
export class ValidatePullThroughCacheRuleCommand extends command<ValidatePullThroughCacheRuleCommandInput, ValidatePullThroughCacheRuleCommandOutput>(
  _ep0,
  _mw0,
  "ValidatePullThroughCacheRule",
  ValidatePullThroughCacheRule$
) {
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
