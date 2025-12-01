// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetArchitectureRecommendationsRequest, GetArchitectureRecommendationsResponse } from "../models/models_0";
import type {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";
import { GetArchitectureRecommendations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetArchitectureRecommendationsCommand}.
 */
export interface GetArchitectureRecommendationsCommandInput extends GetArchitectureRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetArchitectureRecommendationsCommand}.
 */
export interface GetArchitectureRecommendationsCommandOutput
  extends GetArchitectureRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Gets recommendations about architecture designs for improving resiliency for an application, based on a recovery group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetArchitectureRecommendationsCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetArchitectureRecommendationsCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // GetArchitectureRecommendationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RecoveryGroupName: "STRING_VALUE", // required
 * };
 * const command = new GetArchitectureRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetArchitectureRecommendationsResponse
 * //   LastAuditTimestamp: new Date("TIMESTAMP"),
 * //   NextToken: "STRING_VALUE",
 * //   Recommendations: [ // __listOfRecommendation
 * //     { // Recommendation
 * //       RecommendationText: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetArchitectureRecommendationsCommandInput - {@link GetArchitectureRecommendationsCommandInput}
 * @returns {@link GetArchitectureRecommendationsCommandOutput}
 * @see {@link GetArchitectureRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetArchitectureRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link Route53RecoveryReadinessServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryReadiness service.</p>
 *
 *
 * @public
 */
export class GetArchitectureRecommendationsCommand extends $Command
  .classBuilder<
    GetArchitectureRecommendationsCommandInput,
    GetArchitectureRecommendationsCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryReadiness", "GetArchitectureRecommendations", {})
  .n("Route53RecoveryReadinessClient", "GetArchitectureRecommendationsCommand")
  .sc(GetArchitectureRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetArchitectureRecommendationsRequest;
      output: GetArchitectureRecommendationsResponse;
    };
    sdk: {
      input: GetArchitectureRecommendationsCommandInput;
      output: GetArchitectureRecommendationsCommandOutput;
    };
  };
}
