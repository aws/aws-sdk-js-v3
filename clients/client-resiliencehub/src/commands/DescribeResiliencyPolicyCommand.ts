// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeResiliencyPolicyRequest, DescribeResiliencyPolicyResponse } from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { DescribeResiliencyPolicy } from "../schemas/schemas_3_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResiliencyPolicyCommand}.
 */
export interface DescribeResiliencyPolicyCommandInput extends DescribeResiliencyPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResiliencyPolicyCommand}.
 */
export interface DescribeResiliencyPolicyCommandOutput extends DescribeResiliencyPolicyResponse, __MetadataBearer {}

/**
 * <p>Describes a specified resiliency policy for an Resilience Hub application. The
 *       returned policy object includes creation time, data location constraints, the Amazon Resource
 *       Name (ARN) for the policy, tags, tier, and more.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeResiliencyPolicyCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeResiliencyPolicyCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeResiliencyPolicyRequest
 *   policyArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeResiliencyPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResiliencyPolicyResponse
 * //   policy: { // ResiliencyPolicy
 * //     policyArn: "STRING_VALUE",
 * //     policyName: "STRING_VALUE",
 * //     policyDescription: "STRING_VALUE",
 * //     dataLocationConstraint: "AnyLocation" || "SameContinent" || "SameCountry",
 * //     tier: "MissionCritical" || "Critical" || "Important" || "CoreServices" || "NonCritical" || "NotApplicable",
 * //     estimatedCostTier: "L1" || "L2" || "L3" || "L4",
 * //     policy: { // DisruptionPolicy
 * //       "<keys>": { // FailurePolicy
 * //         rtoInSecs: Number("int"), // required
 * //         rpoInSecs: Number("int"), // required
 * //       },
 * //     },
 * //     creationTime: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeResiliencyPolicyCommandInput - {@link DescribeResiliencyPolicyCommandInput}
 * @returns {@link DescribeResiliencyPolicyCommandOutput}
 * @see {@link DescribeResiliencyPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeResiliencyPolicyCommandOutput} for command's `response` shape.
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
export class DescribeResiliencyPolicyCommand extends $Command
  .classBuilder<
    DescribeResiliencyPolicyCommandInput,
    DescribeResiliencyPolicyCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "DescribeResiliencyPolicy", {})
  .n("ResiliencehubClient", "DescribeResiliencyPolicyCommand")
  .sc(DescribeResiliencyPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResiliencyPolicyRequest;
      output: DescribeResiliencyPolicyResponse;
    };
    sdk: {
      input: DescribeResiliencyPolicyCommandInput;
      output: DescribeResiliencyPolicyCommandOutput;
    };
  };
}
