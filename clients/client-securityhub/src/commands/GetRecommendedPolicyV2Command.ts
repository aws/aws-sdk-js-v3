// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetRecommendedPolicyV2Request, GetRecommendedPolicyV2Response } from "../models/models_2";
import { GetRecommendedPolicyV2$ } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendedPolicyV2Command}.
 */
export interface GetRecommendedPolicyV2CommandInput extends GetRecommendedPolicyV2Request {}
/**
 * @public
 *
 * The output of {@link GetRecommendedPolicyV2Command}.
 */
export interface GetRecommendedPolicyV2CommandOutput extends GetRecommendedPolicyV2Response, __MetadataBearer {}

/**
 * <p>Retrieves the recommended policy to remediate a Security Hub finding.
 *          <code>GetRecommendedPolicyV2</code> only supports findings for unused permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetRecommendedPolicyV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetRecommendedPolicyV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetRecommendedPolicyV2Request
 *   MetadataUid: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetRecommendedPolicyV2Command(input);
 * const response = await client.send(command);
 * // { // GetRecommendedPolicyV2Response
 * //   NextToken: "STRING_VALUE",
 * //   RecommendationType: "UNUSED_PERMISSION_RECOMMENDATION",
 * //   RecommendationSteps: [ // RecommendationSteps
 * //     { // RecommendationStep Union: only one key present
 * //       UnusedPermissions: { // UnusedPermissionsRecommendationStep
 * //         RecommendedAction: "STRING_VALUE",
 * //         ExistingPolicy: "STRING_VALUE",
 * //         ExistingPolicyId: "STRING_VALUE",
 * //         PolicyUpdatedAt: new Date("TIMESTAMP"),
 * //         RecommendedPolicy: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Error: { // RecommendationError
 * //     Code: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   Status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //   ResourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRecommendedPolicyV2CommandInput - {@link GetRecommendedPolicyV2CommandInput}
 * @returns {@link GetRecommendedPolicyV2CommandOutput}
 * @see {@link GetRecommendedPolicyV2CommandInput} for command's `input` shape.
 * @see {@link GetRecommendedPolicyV2CommandOutput} for command's `response` shape.
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
export class GetRecommendedPolicyV2Command extends $Command
  .classBuilder<
    GetRecommendedPolicyV2CommandInput,
    GetRecommendedPolicyV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "GetRecommendedPolicyV2", {})
  .n("SecurityHubClient", "GetRecommendedPolicyV2Command")
  .sc(GetRecommendedPolicyV2$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommendedPolicyV2Request;
      output: GetRecommendedPolicyV2Response;
    };
    sdk: {
      input: GetRecommendedPolicyV2CommandInput;
      output: GetRecommendedPolicyV2CommandOutput;
    };
  };
}
