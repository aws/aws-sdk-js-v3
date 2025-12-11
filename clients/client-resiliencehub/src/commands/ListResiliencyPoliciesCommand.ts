// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListResiliencyPoliciesRequest, ListResiliencyPoliciesResponse } from "../models/models_0";
import type { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { ListResiliencyPolicies } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResiliencyPoliciesCommand}.
 */
export interface ListResiliencyPoliciesCommandInput extends ListResiliencyPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListResiliencyPoliciesCommand}.
 */
export interface ListResiliencyPoliciesCommandOutput extends ListResiliencyPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the resiliency policies for the Resilience Hub applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListResiliencyPoliciesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListResiliencyPoliciesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // ListResiliencyPoliciesRequest
 *   policyName: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListResiliencyPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListResiliencyPoliciesResponse
 * //   resiliencyPolicies: [ // ResiliencyPolicies // required
 * //     { // ResiliencyPolicy
 * //       policyArn: "STRING_VALUE",
 * //       policyName: "STRING_VALUE",
 * //       policyDescription: "STRING_VALUE",
 * //       dataLocationConstraint: "AnyLocation" || "SameContinent" || "SameCountry",
 * //       tier: "MissionCritical" || "Critical" || "Important" || "CoreServices" || "NonCritical" || "NotApplicable",
 * //       estimatedCostTier: "L1" || "L2" || "L3" || "L4",
 * //       policy: { // DisruptionPolicy
 * //         "<keys>": { // FailurePolicy
 * //           rtoInSecs: Number("int"), // required
 * //           rpoInSecs: Number("int"), // required
 * //         },
 * //       },
 * //       creationTime: new Date("TIMESTAMP"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResiliencyPoliciesCommandInput - {@link ListResiliencyPoliciesCommandInput}
 * @returns {@link ListResiliencyPoliciesCommandOutput}
 * @see {@link ListResiliencyPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListResiliencyPoliciesCommandOutput} for command's `response` shape.
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
export class ListResiliencyPoliciesCommand extends $Command
  .classBuilder<
    ListResiliencyPoliciesCommandInput,
    ListResiliencyPoliciesCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "ListResiliencyPolicies", {})
  .n("ResiliencehubClient", "ListResiliencyPoliciesCommand")
  .sc(ListResiliencyPolicies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResiliencyPoliciesRequest;
      output: ListResiliencyPoliciesResponse;
    };
    sdk: {
      input: ListResiliencyPoliciesCommandInput;
      output: ListResiliencyPoliciesCommandOutput;
    };
  };
}
