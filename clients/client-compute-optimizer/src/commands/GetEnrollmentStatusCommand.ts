// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEnrollmentStatusRequest, GetEnrollmentStatusResponse } from "../models/models_0";
import { de_GetEnrollmentStatusCommand, se_GetEnrollmentStatusCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnrollmentStatusCommand}.
 */
export interface GetEnrollmentStatusCommandInput extends GetEnrollmentStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetEnrollmentStatusCommand}.
 */
export interface GetEnrollmentStatusCommandOutput extends GetEnrollmentStatusResponse, __MetadataBearer {}

/**
 * <p>Returns the enrollment (opt in) status of an account to the Compute Optimizer
 *             service.</p>
 *          <p>If the account is the management account of an organization, this action also confirms
 *             the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information
 *             about the enrollment status of member accounts of an organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEnrollmentStatusCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEnrollmentStatusCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = {};
 * const command = new GetEnrollmentStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetEnrollmentStatusResponse
 * //   status: "Active" || "Inactive" || "Pending" || "Failed",
 * //   statusReason: "STRING_VALUE",
 * //   memberAccountsEnrolled: true || false,
 * //   lastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //   numberOfMemberAccountsOptedIn: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetEnrollmentStatusCommandInput - {@link GetEnrollmentStatusCommandInput}
 * @returns {@link GetEnrollmentStatusCommandOutput}
 * @see {@link GetEnrollmentStatusCommandInput} for command's `input` shape.
 * @see {@link GetEnrollmentStatusCommandOutput} for command's `response` shape.
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
export class GetEnrollmentStatusCommand extends $Command
  .classBuilder<
    GetEnrollmentStatusCommandInput,
    GetEnrollmentStatusCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ComputeOptimizerService", "GetEnrollmentStatus", {})
  .n("ComputeOptimizerClient", "GetEnrollmentStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetEnrollmentStatusCommand)
  .de(de_GetEnrollmentStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetEnrollmentStatusResponse;
    };
    sdk: {
      input: GetEnrollmentStatusCommandInput;
      output: GetEnrollmentStatusCommandOutput;
    };
  };
}
