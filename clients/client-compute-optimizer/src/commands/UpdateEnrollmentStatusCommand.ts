// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ComputeOptimizerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateEnrollmentStatusRequest, UpdateEnrollmentStatusResponse } from "../models/models_0";
import { UpdateEnrollmentStatus$ } from "../schemas/schemas_0";

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
 * <p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p>
 *          <p>If the account is a management account of an organization, this action can also be
 *             used to enroll member accounts of the organization.</p>
 *          <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its
 *             recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p>
 *          <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your
 *             account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using
 *                 Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, UpdateEnrollmentStatusCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, UpdateEnrollmentStatusCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // UpdateEnrollmentStatusRequest
 *   status: "Active" || "Inactive" || "Pending" || "Failed", // required
 *   includeMemberAccounts: true || false,
 * };
 * const command = new UpdateEnrollmentStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnrollmentStatusResponse
 * //   status: "Active" || "Inactive" || "Pending" || "Failed",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEnrollmentStatusCommandInput - {@link UpdateEnrollmentStatusCommandInput}
 * @returns {@link UpdateEnrollmentStatusCommandOutput}
 * @see {@link UpdateEnrollmentStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateEnrollmentStatusCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Try your call again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value supplied for the input parameter is out of range or not valid.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ComputeOptimizerServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizer service.</p>
 *
 *
 * @public
 */
export class UpdateEnrollmentStatusCommand extends $Command
  .classBuilder<
    UpdateEnrollmentStatusCommandInput,
    UpdateEnrollmentStatusCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerService", "UpdateEnrollmentStatus", {})
  .n("ComputeOptimizerClient", "UpdateEnrollmentStatusCommand")
  .sc(UpdateEnrollmentStatus$)
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
