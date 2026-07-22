// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServicesRequest, ListServicesResponse } from "../models/models_0";
import { ListServices$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServicesCommand}.
 */
export interface ListServicesCommandInput extends ListServicesRequest {}
/**
 * @public
 *
 * The output of {@link ListServicesCommand}.
 */
export interface ListServicesCommandOutput extends ListServicesResponse, __MetadataBearer {}

/**
 * <p>Lists services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListServicesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListServicesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListServicesRequest
 *   systemArn: "STRING_VALUE",
 *   userJourneyId: "STRING_VALUE",
 *   ouId: "STRING_VALUE",
 *   accountId: "STRING_VALUE",
 *   assessmentStatus: "NOT_STARTED" || "PENDING" || "IN_PROGRESS" || "FAILED" || "SUCCESS",
 *   policyArn: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * // { // ListServicesResponse
 * //   serviceSummaries: [ // ServiceSummaryList // required
 * //     { // ServiceSummary
 * //       serviceArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       associatedSystems: [ // AssociatedSystemList
 * //         { // AssociatedSystem
 * //           systemArn: "STRING_VALUE", // required
 * //           systemName: "STRING_VALUE",
 * //           userJourneyIds: [ // UserJourneyIdList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       regions: [ // RegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       policyArn: "STRING_VALUE",
 * //       assessmentStatus: "NOT_STARTED" || "PENDING" || "IN_PROGRESS" || "FAILED" || "SUCCESS",
 * //       openFindingsCount: Number("int"),
 * //       resolvedFindingsCount: Number("int"),
 * //       dependencyDiscovery: { // DependencyDiscoveryConfig
 * //         status: "ENABLED" || "INITIALIZING" || "DISABLED", // required
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         eligibleResourceCount: Number("int"),
 * //         message: "STRING_VALUE",
 * //       },
 * //       achievability: { // Achievability
 * //         availabilitySlo: "ACHIEVABLE" || "NOT_ACHIEVABLE",
 * //         multiAzRtoRpo: "ACHIEVABLE" || "NOT_ACHIEVABLE",
 * //         multiRegionRtoRpo: "ACHIEVABLE" || "NOT_ACHIEVABLE",
 * //         dataRecoveryTimeBetweenBackups: "ACHIEVABLE" || "NOT_ACHIEVABLE",
 * //       },
 * //       organizationId: "STRING_VALUE",
 * //       ouId: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServicesCommandInput - {@link ListServicesCommandInput}
 * @returns {@link ListServicesCommandOutput}
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
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
export class ListServicesCommand extends command<ListServicesCommandInput, ListServicesCommandOutput>(
  _ep0,
  _mw0,
  "ListServices",
  ListServices$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicesRequest;
      output: ListServicesResponse;
    };
    sdk: {
      input: ListServicesCommandInput;
      output: ListServicesCommandOutput;
    };
  };
}
