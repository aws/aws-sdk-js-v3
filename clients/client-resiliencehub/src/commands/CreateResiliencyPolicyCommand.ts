// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateResiliencyPolicyRequest, CreateResiliencyPolicyResponse } from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { CreateResiliencyPolicy } from "../schemas/schemas_4_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateResiliencyPolicyCommand}.
 */
export interface CreateResiliencyPolicyCommandInput extends CreateResiliencyPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateResiliencyPolicyCommand}.
 */
export interface CreateResiliencyPolicyCommandOutput extends CreateResiliencyPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates a resiliency policy for an application.</p>
 *          <note>
 *             <p>Resilience Hub allows you to provide a value of zero for <code>rtoInSecs</code>
 *         and <code>rpoInSecs</code> of your resiliency policy. But, while assessing your application,
 *         the lowest possible assessment result is near zero. Hence, if you provide value zero for
 *           <code>rtoInSecs</code> and <code>rpoInSecs</code>, the estimated workload RTO and
 *         estimated workload RPO result will be near zero and the <b>Compliance
 *           status</b> for your application will be set to <b>Policy
 *           breached</b>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, CreateResiliencyPolicyCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, CreateResiliencyPolicyCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // CreateResiliencyPolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   policyDescription: "STRING_VALUE",
 *   dataLocationConstraint: "AnyLocation" || "SameContinent" || "SameCountry",
 *   tier: "MissionCritical" || "Critical" || "Important" || "CoreServices" || "NonCritical" || "NotApplicable", // required
 *   policy: { // DisruptionPolicy // required
 *     "<keys>": { // FailurePolicy
 *       rtoInSecs: Number("int"), // required
 *       rpoInSecs: Number("int"), // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateResiliencyPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateResiliencyPolicyResponse
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
 * @param CreateResiliencyPolicyCommandInput - {@link CreateResiliencyPolicyCommandInput}
 * @returns {@link CreateResiliencyPolicyCommandOutput}
 * @see {@link CreateResiliencyPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateResiliencyPolicyCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception occurs when you have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
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
export class CreateResiliencyPolicyCommand extends $Command
  .classBuilder<
    CreateResiliencyPolicyCommandInput,
    CreateResiliencyPolicyCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "CreateResiliencyPolicy", {})
  .n("ResiliencehubClient", "CreateResiliencyPolicyCommand")
  .sc(CreateResiliencyPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResiliencyPolicyRequest;
      output: CreateResiliencyPolicyResponse;
    };
    sdk: {
      input: CreateResiliencyPolicyCommandInput;
      output: CreateResiliencyPolicyCommandOutput;
    };
  };
}
