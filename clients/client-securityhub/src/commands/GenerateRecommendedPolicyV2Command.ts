// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GenerateRecommendedPolicyV2Request, GenerateRecommendedPolicyV2Response } from "../models/models_2";
import { GenerateRecommendedPolicyV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Begins the recommended policy generation to remediate a Security Hub finding. `GenerateRecommendedPolicyV2` only supports findings for unused permissions.
 *
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
 *
 * You don't have permission to perform the action specified in the request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the service.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because you supplied an invalid or out-of-range value for an input parameter.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because we can't find the specified resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it's missing required fields or has invalid inputs.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @public
 */
export class GenerateRecommendedPolicyV2Command extends command<GenerateRecommendedPolicyV2CommandInput, GenerateRecommendedPolicyV2CommandOutput>(
  _ep0,
  _mw0,
  "GenerateRecommendedPolicyV2",
  GenerateRecommendedPolicyV2$
) {
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
