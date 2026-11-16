// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  UpdateAgentOrganizationalProfileRequest,
  UpdateAgentOrganizationalProfileResponse,
} from "../models/models_0";
import { UpdateAgentOrganizationalProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAgentOrganizationalProfileCommand}.
 */
export interface UpdateAgentOrganizationalProfileCommandInput extends UpdateAgentOrganizationalProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentOrganizationalProfileCommand}.
 */
export interface UpdateAgentOrganizationalProfileCommandOutput extends UpdateAgentOrganizationalProfileResponse, __MetadataBearer {}

/**
 * <p>Updates an Organizational Profile. Organizational Profiles are specific to Profiles created using AWS Organizations integration. Include only the fields you want to change; any field you omit from the request keeps its current value.</p> <p>To clear an optional text field, supply an empty string for it; the field is then unset, and a subsequent read omits it rather than returning an empty string. Omitting the field from the request leaves the stored value in place. <code>description</code> and <code>businessOverview</code> can be cleared this way. <code>displayName</code> cannot be cleared because a display name is required, though you can change it. <code>pillars</code> cannot be cleared because a profile must target at least one pillar.</p> <p> <code>organizationalAggregationConfiguration</code> behaves differently because it is a structure rather than a text field. Supplying it with both its <code>organizationalUnits</code> and <code>accounts</code> lists empty removes every monitored organizational unit and account, but the field itself remains set: a subsequent read returns the structure with two empty lists rather than omitting it. Omitting the field from the request keeps the stored boundary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateAgentOrganizationalProfileCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateAgentOrganizationalProfileCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateAgentOrganizationalProfileRequest
 *   clientToken: "STRING_VALUE",
 *   profileArn: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   businessOverview: "STRING_VALUE",
 *   pillars: [ // Pillars
 *     "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 *   ],
 *   deletionProtection: true || false,
 *   organizationalAggregationConfiguration: { // OrganizationalAggregationConfiguration
 *     organizationalUnits: [ // OrganizationalUnitEntryList
 *       { // OrganizationalUnitEntry
 *         organizationalUnitId: "STRING_VALUE", // required
 *         regions: [ // Regions // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     accounts: [ // OrganizationalAccountEntryList
 *       { // OrganizationalAccountEntry
 *         accountId: "STRING_VALUE", // required
 *         regions: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateAgentOrganizationalProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentOrganizationalProfileResponse
 * //   name: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   businessOverview: "STRING_VALUE",
 * //   pillars: [ // Pillars // required
 * //     "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 * //   ],
 * //   deletionProtection: true || false,
 * //   organizationId: "STRING_VALUE", // required
 * //   organizationalAggregationConfiguration: { // OrganizationalAggregationConfiguration
 * //     organizationalUnits: [ // OrganizationalUnitEntryList
 * //       { // OrganizationalUnitEntry
 * //         organizationalUnitId: "STRING_VALUE", // required
 * //         regions: [ // Regions // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     accounts: [ // OrganizationalAccountEntryList
 * //       { // OrganizationalAccountEntry
 * //         accountId: "STRING_VALUE", // required
 * //         regions: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   arn: "STRING_VALUE", // required
 * //   eligibleForScheduledGeneration: true || false,
 * //   eligibleForArchitectureGeneration: true || false,
 * //   fieldErrors: { // FieldErrors
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastModifiedBy: "STRING_VALUE",
 * //   lastModifiedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateAgentOrganizationalProfileCommandInput - {@link UpdateAgentOrganizationalProfileCommandInput}
 * @returns {@link UpdateAgentOrganizationalProfileCommandOutput}
 * @see {@link UpdateAgentOrganizationalProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentOrganizationalProfileCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class UpdateAgentOrganizationalProfileCommand extends command<UpdateAgentOrganizationalProfileCommandInput, UpdateAgentOrganizationalProfileCommandOutput>(
  _ep1,
  _mw0,
  "UpdateAgentOrganizationalProfile",
  UpdateAgentOrganizationalProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentOrganizationalProfileRequest;
      output: UpdateAgentOrganizationalProfileResponse;
    };
    sdk: {
      input: UpdateAgentOrganizationalProfileCommandInput;
      output: UpdateAgentOrganizationalProfileCommandOutput;
    };
  };
}
