// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEnrollmentStatusRequest, GetEnrollmentStatusResponse } from "../models/models_0";
import { GetEnrollmentStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the enrollment (opt in) status of an account to the Compute Optimizer service.
 *
 * If the account is the management account of an organization, this action also confirms the enrollment status of member accounts of the organization. Use the GetEnrollmentStatusesForOrganization action to get detailed information about the enrollment status of member accounts of an organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEnrollmentStatusCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEnrollmentStatusCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. Try your call again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value supplied for the input parameter is out of range or not valid.
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *
 * The request must contain either a valid (registered) Amazon Web Services access key ID or X.509 certificate.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed due to a temporary failure of the server.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ComputeOptimizerServiceException}
 *
 * Base exception class for all service exceptions from ComputeOptimizer service.
 *
 * @public
 */
export class GetEnrollmentStatusCommand extends command<GetEnrollmentStatusCommandInput, GetEnrollmentStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetEnrollmentStatus",
  GetEnrollmentStatus$
) {
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
