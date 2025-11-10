// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AcceptResourceGroupingRecommendationsRequest,
  AcceptResourceGroupingRecommendationsResponse,
} from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { AcceptResourceGroupingRecommendations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptResourceGroupingRecommendationsCommand}.
 */
export interface AcceptResourceGroupingRecommendationsCommandInput
  extends AcceptResourceGroupingRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link AcceptResourceGroupingRecommendationsCommand}.
 */
export interface AcceptResourceGroupingRecommendationsCommandOutput
  extends AcceptResourceGroupingRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Accepts the resource grouping recommendations suggested by Resilience Hub for your application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, AcceptResourceGroupingRecommendationsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, AcceptResourceGroupingRecommendationsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // AcceptResourceGroupingRecommendationsRequest
 *   appArn: "STRING_VALUE", // required
 *   entries: [ // AcceptGroupingRecommendationEntries // required
 *     { // AcceptGroupingRecommendationEntry
 *       groupingRecommendationId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AcceptResourceGroupingRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // AcceptResourceGroupingRecommendationsResponse
 * //   appArn: "STRING_VALUE", // required
 * //   failedEntries: [ // FailedGroupingRecommendationEntries // required
 * //     { // FailedGroupingRecommendationEntry
 * //       groupingRecommendationId: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AcceptResourceGroupingRecommendationsCommandInput - {@link AcceptResourceGroupingRecommendationsCommandInput}
 * @returns {@link AcceptResourceGroupingRecommendationsCommandOutput}
 * @see {@link AcceptResourceGroupingRecommendationsCommandInput} for command's `input` shape.
 * @see {@link AcceptResourceGroupingRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class AcceptResourceGroupingRecommendationsCommand extends $Command
  .classBuilder<
    AcceptResourceGroupingRecommendationsCommandInput,
    AcceptResourceGroupingRecommendationsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "AcceptResourceGroupingRecommendations", {})
  .n("ResiliencehubClient", "AcceptResourceGroupingRecommendationsCommand")
  .sc(AcceptResourceGroupingRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptResourceGroupingRecommendationsRequest;
      output: AcceptResourceGroupingRecommendationsResponse;
    };
    sdk: {
      input: AcceptResourceGroupingRecommendationsCommandInput;
      output: AcceptResourceGroupingRecommendationsCommandOutput;
    };
  };
}
