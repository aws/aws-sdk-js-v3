// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetEnrollmentStatusesForOrganizationRequest,
  GetEnrollmentStatusesForOrganizationResponse,
} from "../models/models_0";
import { GetEnrollmentStatusesForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEnrollmentStatusesForOrganizationCommand}.
 */
export interface GetEnrollmentStatusesForOrganizationCommandInput extends GetEnrollmentStatusesForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link GetEnrollmentStatusesForOrganizationCommand}.
 */
export interface GetEnrollmentStatusesForOrganizationCommandOutput extends GetEnrollmentStatusesForOrganizationResponse, __MetadataBearer {}

/**
 * Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account.
 *
 * To get the enrollment status of standalone accounts, use the GetEnrollmentStatus action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEnrollmentStatusesForOrganizationCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEnrollmentStatusesForOrganizationCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetEnrollmentStatusesForOrganizationRequest
 *   filters: [ // EnrollmentFilters
 *     { // EnrollmentFilter
 *       name: "Status",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetEnrollmentStatusesForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // GetEnrollmentStatusesForOrganizationResponse
 * //   accountEnrollmentStatuses: [ // AccountEnrollmentStatuses
 * //     { // AccountEnrollmentStatus
 * //       accountId: "STRING_VALUE",
 * //       status: "Active" || "Inactive" || "Pending" || "Failed",
 * //       statusReason: "STRING_VALUE",
 * //       lastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEnrollmentStatusesForOrganizationCommandInput - {@link GetEnrollmentStatusesForOrganizationCommandInput}
 * @returns {@link GetEnrollmentStatusesForOrganizationCommandOutput}
 * @see {@link GetEnrollmentStatusesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link GetEnrollmentStatusesForOrganizationCommandOutput} for command's `response` shape.
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
export class GetEnrollmentStatusesForOrganizationCommand extends command<GetEnrollmentStatusesForOrganizationCommandInput, GetEnrollmentStatusesForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "GetEnrollmentStatusesForOrganization",
  GetEnrollmentStatusesForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnrollmentStatusesForOrganizationRequest;
      output: GetEnrollmentStatusesForOrganizationResponse;
    };
    sdk: {
      input: GetEnrollmentStatusesForOrganizationCommandInput;
      output: GetEnrollmentStatusesForOrganizationCommandOutput;
    };
  };
}
