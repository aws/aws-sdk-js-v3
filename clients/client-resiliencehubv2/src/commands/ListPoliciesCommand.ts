// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPoliciesRequest, ListPoliciesResponse } from "../models/models_0";
import { ListPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandInput extends ListPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandOutput extends ListPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists resilience policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListPoliciesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListPoliciesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListPoliciesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListPoliciesResponse
 * //   policySummaries: [ // PolicySummaryList // required
 * //     { // PolicySummary
 * //       policyArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       availabilitySlo: { // AvailabilitySlo
 * //         target: Number("double"),
 * //       },
 * //       multiAz: { // MultiAzTargets
 * //         rtoInMinutes: Number("int"),
 * //         rpoInMinutes: Number("int"),
 * //         disasterRecoveryApproach: "ACTIVE_ACTIVE" || "HOT_STANDBY" || "WARM_STANDBY" || "PILOT_LIGHT" || "BACKUP_AND_RESTORE",
 * //       },
 * //       multiRegion: { // MultiRegionTargets
 * //         rtoInMinutes: Number("int"),
 * //         rpoInMinutes: Number("int"),
 * //         disasterRecoveryApproach: "ACTIVE_ACTIVE" || "HOT_STANDBY" || "WARM_STANDBY" || "PILOT_LIGHT" || "BACKUP_AND_RESTORE",
 * //       },
 * //       dataRecovery: { // DataRecoveryTargets
 * //         timeBetweenBackupsInMinutes: Number("int"),
 * //       },
 * //       associatedServiceCount: Number("int"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPoliciesCommandInput - {@link ListPoliciesCommandInput}
 * @returns {@link ListPoliciesCommandOutput}
 * @see {@link ListPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class ListPoliciesCommand extends command<ListPoliciesCommandInput, ListPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListPolicies",
  ListPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPoliciesRequest;
      output: ListPoliciesResponse;
    };
    sdk: {
      input: ListPoliciesCommandInput;
      output: ListPoliciesCommandOutput;
    };
  };
}
