// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GenerateRecommendedPolicyV2Request, GenerateRecommendedPolicyV2Response } from "../models/models_2";
import { GenerateRecommendedPolicyV2$ } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateRecommendedPolicyV2Command}.
 */
export interface GenerateRecommendedPolicyV2CommandInput extends GenerateRecommendedPolicyV2Request {}
/**
 * @public
 *
 * The output of {@link GenerateRecommendedPolicyV2Command}.
 */
export interface GenerateRecommendedPolicyV2CommandOutput extends GenerateRecommendedPolicyV2Response, __MetadataBearer {}

/**
 * <p>Begins the recommended policy generation to remediate a Security Hub finding.
 *          <code>GenerateRecommendedPolicyV2</code> only supports findings for unused permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GenerateRecommendedPolicyV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GenerateRecommendedPolicyV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GenerateRecommendedPolicyV2Request
 *   MetadataUid: "STRING_VALUE", // required
 * };
 * const command = new GenerateRecommendedPolicyV2Command(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param GenerateRecommendedPolicyV2CommandInput - {@link GenerateRecommendedPolicyV2CommandInput}
 * @returns {@link GenerateRecommendedPolicyV2CommandOutput}
 * @see {@link GenerateRecommendedPolicyV2CommandInput} for command's `input` shape.
 * @see {@link GenerateRecommendedPolicyV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class GenerateRecommendedPolicyV2Command extends $Command
  .classBuilder<
    GenerateRecommendedPolicyV2CommandInput,
    GenerateRecommendedPolicyV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "GenerateRecommendedPolicyV2", {})
  .n("SecurityHubClient", "GenerateRecommendedPolicyV2Command")
  .sc(GenerateRecommendedPolicyV2$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateRecommendedPolicyV2Request;
      output: {};
    };
    sdk: {
      input: GenerateRecommendedPolicyV2CommandInput;
      output: GenerateRecommendedPolicyV2CommandOutput;
    };
  };
}
