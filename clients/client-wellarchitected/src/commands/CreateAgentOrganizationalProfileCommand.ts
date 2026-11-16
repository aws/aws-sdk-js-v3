// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  CreateAgentOrganizationalProfileRequest,
  CreateAgentOrganizationalProfileResponse,
} from "../models/models_0";
import { CreateAgentOrganizationalProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAgentOrganizationalProfileCommand}.
 */
export interface CreateAgentOrganizationalProfileCommandInput extends CreateAgentOrganizationalProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentOrganizationalProfileCommand}.
 */
export interface CreateAgentOrganizationalProfileCommandOutput extends CreateAgentOrganizationalProfileResponse, __MetadataBearer {}

/**
 * <p>Creates an Organizational Profile for use with AWS Organizations integration. Organizational Profiles are scoped to an AWS Organization and do not require an execution role or aggregation configuration. The organization is inferred from the caller's identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateAgentOrganizationalProfileCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateAgentOrganizationalProfileCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateAgentOrganizationalProfileRequest
 *   name: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   businessOverview: "STRING_VALUE",
 *   pillars: [ // Pillars // required
 *     "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 *   ],
 *   deletionProtection: true || false,
 *   clientToken: "STRING_VALUE",
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
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAgentOrganizationalProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentOrganizationalProfileResponse
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
 * //   tags: [ // Tags
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastModifiedBy: "STRING_VALUE",
 * //   lastModifiedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateAgentOrganizationalProfileCommandInput - {@link CreateAgentOrganizationalProfileCommandInput}
 * @returns {@link CreateAgentOrganizationalProfileCommandOutput}
 * @see {@link CreateAgentOrganizationalProfileCommandInput} for command's `input` shape.
 * @see {@link CreateAgentOrganizationalProfileCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
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
export class CreateAgentOrganizationalProfileCommand extends command<CreateAgentOrganizationalProfileCommandInput, CreateAgentOrganizationalProfileCommandOutput>(
  _ep1,
  _mw0,
  "CreateAgentOrganizationalProfile",
  CreateAgentOrganizationalProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentOrganizationalProfileRequest;
      output: CreateAgentOrganizationalProfileResponse;
    };
    sdk: {
      input: CreateAgentOrganizationalProfileCommandInput;
      output: CreateAgentOrganizationalProfileCommandOutput;
    };
  };
}
