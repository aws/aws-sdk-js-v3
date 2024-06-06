// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateResiliencyPolicyRequest,
  UpdateResiliencyPolicyResponse,
  UpdateResiliencyPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateResiliencyPolicyCommand, se_UpdateResiliencyPolicyCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResiliencyPolicyCommand}.
 */
export interface UpdateResiliencyPolicyCommandInput extends UpdateResiliencyPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResiliencyPolicyCommand}.
 */
export interface UpdateResiliencyPolicyCommandOutput extends UpdateResiliencyPolicyResponse, __MetadataBearer {}

/**
 * <p>Updates a resiliency policy.</p>
 *          <note>
 *             <p>Resilience Hub allows you to provide a value of zero for <code>rtoInSecs</code> and
 *           <code>rpoInSecs</code> of your resiliency policy. But, while assessing your application,
 *         the lowest possible assessment result is near zero. Hence, if you provide value
 *         zero for <code>rtoInSecs</code> and <code>rpoInSecs</code>, the estimated workload RTO and
 *         estimated workload RPO result will be near zero and the <b>Compliance
 *           status</b> for your application will be set to <b>Policy
 *           breached</b>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, UpdateResiliencyPolicyCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, UpdateResiliencyPolicyCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // UpdateResiliencyPolicyRequest
 *   policyArn: "STRING_VALUE", // required
 *   policyName: "STRING_VALUE",
 *   policyDescription: "STRING_VALUE",
 *   dataLocationConstraint: "STRING_VALUE",
 *   tier: "STRING_VALUE",
 *   policy: { // DisruptionPolicy
 *     "<keys>": { // FailurePolicy
 *       rtoInSecs: Number("int"), // required
 *       rpoInSecs: Number("int"), // required
 *     },
 *   },
 * };
 * const command = new UpdateResiliencyPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResiliencyPolicyResponse
 * //   policy: { // ResiliencyPolicy
 * //     policyArn: "STRING_VALUE",
 * //     policyName: "STRING_VALUE",
 * //     policyDescription: "STRING_VALUE",
 * //     dataLocationConstraint: "STRING_VALUE",
 * //     tier: "STRING_VALUE",
 * //     estimatedCostTier: "STRING_VALUE",
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
 * @param UpdateResiliencyPolicyCommandInput - {@link UpdateResiliencyPolicyCommandInput}
 * @returns {@link UpdateResiliencyPolicyCommandOutput}
 * @see {@link UpdateResiliencyPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateResiliencyPolicyCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateResiliencyPolicyCommand extends $Command
  .classBuilder<
    UpdateResiliencyPolicyCommandInput,
    UpdateResiliencyPolicyCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "UpdateResiliencyPolicy", {})
  .n("ResiliencehubClient", "UpdateResiliencyPolicyCommand")
  .f(void 0, UpdateResiliencyPolicyResponseFilterSensitiveLog)
  .ser(se_UpdateResiliencyPolicyCommand)
  .de(de_UpdateResiliencyPolicyCommand)
  .build() {}
