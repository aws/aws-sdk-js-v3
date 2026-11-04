// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEnrollmentStatusesRequest, ListEnrollmentStatusesResponse } from "../models/models_0";
import { ListEnrollmentStatuses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnrollmentStatusesCommand}.
 */
export interface ListEnrollmentStatusesCommandInput extends ListEnrollmentStatusesRequest {}
/**
 * @public
 *
 * The output of {@link ListEnrollmentStatusesCommand}.
 */
export interface ListEnrollmentStatusesCommandOutput extends ListEnrollmentStatusesResponse, __MetadataBearer {}

/**
 * Retrieves the enrollment status for an account. It can also return the list of accounts that are enrolled under the organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, ListEnrollmentStatusesCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, ListEnrollmentStatusesCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * // import type { CostOptimizationHubClientConfig } from "@aws-sdk/client-cost-optimization-hub";
 * const config = {}; // type is CostOptimizationHubClientConfig
 * const client = new CostOptimizationHubClient(config);
 * const input = { // ListEnrollmentStatusesRequest
 *   includeOrganizationInfo: true || false,
 *   accountId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEnrollmentStatusesCommand(input);
 * const response = await client.send(command);
 * // { // ListEnrollmentStatusesResponse
 * //   items: [ // AccountEnrollmentStatuses
 * //     { // AccountEnrollmentStatus
 * //       accountId: "STRING_VALUE",
 * //       status: "Active" || "Inactive",
 * //       lastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //       createdTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   includeMemberAccounts: true || false,
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnrollmentStatusesCommandInput - {@link ListEnrollmentStatusesCommandInput}
 * @returns {@link ListEnrollmentStatusesCommandOutput}
 * @see {@link ListEnrollmentStatusesCommandInput} for command's `input` shape.
 * @see {@link ListEnrollmentStatusesCommandOutput} for command's `response` shape.
 * @see {@link CostOptimizationHubClientResolvedConfig | config} for CostOptimizationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to use this operation with the given parameters.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An error on the server occurred during the processing of your request. Try again later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link CostOptimizationHubServiceException}
 *
 * Base exception class for all service exceptions from CostOptimizationHub service.
 *
 * @public
 */
export class ListEnrollmentStatusesCommand extends command<ListEnrollmentStatusesCommandInput, ListEnrollmentStatusesCommandOutput>(
  _ep0,
  _mw0,
  "ListEnrollmentStatuses",
  ListEnrollmentStatuses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnrollmentStatusesRequest;
      output: ListEnrollmentStatusesResponse;
    };
    sdk: {
      input: ListEnrollmentStatusesCommandInput;
      output: ListEnrollmentStatusesCommandOutput;
    };
  };
}
