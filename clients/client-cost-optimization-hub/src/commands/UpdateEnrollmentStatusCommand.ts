// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CostOptimizationHubClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostOptimizationHubClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEnrollmentStatusRequest, UpdateEnrollmentStatusResponse } from "../models/models_0";
import { de_UpdateEnrollmentStatusCommand, se_UpdateEnrollmentStatusCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnrollmentStatusCommand}.
 */
export interface UpdateEnrollmentStatusCommandInput extends UpdateEnrollmentStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEnrollmentStatusCommand}.
 */
export interface UpdateEnrollmentStatusCommandOutput extends UpdateEnrollmentStatusResponse, __MetadataBearer {}

/**
 * <p>Updates the enrollment (opt in and opt out) status of an account to the Cost Optimization
 *       Hub service.</p>
 *          <p>If the account is a management account or delegated administrator of an organization, this
 *       action can also be used to enroll member accounts of the organization.</p>
 *          <p>You must have the appropriate permissions to opt in to Cost Optimization Hub and to view
 *       its recommendations. When you opt in, Cost Optimization Hub automatically creates a
 *       service-linked role in your account to access its data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, UpdateEnrollmentStatusCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, UpdateEnrollmentStatusCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * const client = new CostOptimizationHubClient(config);
 * const input = { // UpdateEnrollmentStatusRequest
 *   status: "Active" || "Inactive", // required
 *   includeMemberAccounts: true || false,
 * };
 * const command = new UpdateEnrollmentStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnrollmentStatusResponse
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEnrollmentStatusCommandInput - {@link UpdateEnrollmentStatusCommandInput}
 * @returns {@link UpdateEnrollmentStatusCommandOutput}
 * @see {@link UpdateEnrollmentStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateEnrollmentStatusCommandOutput} for command's `response` shape.
 * @see {@link CostOptimizationHubClientResolvedConfig | config} for CostOptimizationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link CostOptimizationHubServiceException}
 * <p>Base exception class for all service exceptions from CostOptimizationHub service.</p>
 *
 *
 * @public
 */
export class UpdateEnrollmentStatusCommand extends $Command
  .classBuilder<
    UpdateEnrollmentStatusCommandInput,
    UpdateEnrollmentStatusCommandOutput,
    CostOptimizationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostOptimizationHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CostOptimizationHubService", "UpdateEnrollmentStatus", {})
  .n("CostOptimizationHubClient", "UpdateEnrollmentStatusCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEnrollmentStatusCommand)
  .de(de_UpdateEnrollmentStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnrollmentStatusRequest;
      output: UpdateEnrollmentStatusResponse;
    };
    sdk: {
      input: UpdateEnrollmentStatusCommandInput;
      output: UpdateEnrollmentStatusCommandOutput;
    };
  };
}
