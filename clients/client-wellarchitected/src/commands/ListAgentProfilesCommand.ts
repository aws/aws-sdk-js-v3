// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgentProfilesRequest, ListAgentProfilesResponse } from "../models/models_0";
import { ListAgentProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgentProfilesCommand}.
 */
export interface ListAgentProfilesCommandInput extends ListAgentProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentProfilesCommand}.
 */
export interface ListAgentProfilesCommandOutput extends ListAgentProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists optimization profiles in your account. Profiles define the scope and configuration for generating optimization recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListAgentProfilesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListAgentProfilesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListAgentProfilesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentProfilesResponse
 * //   items: [ // AgentProfileSummaries // required
 * //     { // AgentProfileSummary
 * //       name: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       businessOverview: "STRING_VALUE",
 * //       pillars: [ // Pillars // required
 * //         "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 * //       ],
 * //       deletionProtection: true || false,
 * //       executionRoleArn: "STRING_VALUE", // required
 * //       aggregationConfiguration: [ // AggregationConfigurations // required
 * //         { // AggregationConfiguration
 * //           accountId: "STRING_VALUE", // required
 * //           regions: [ // Regions // required
 * //             "STRING_VALUE",
 * //           ],
 * //           accessRoleArn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       arn: "STRING_VALUE", // required
 * //       eligibleForScheduledGeneration: true || false,
 * //       eligibleForArchitectureGeneration: true || false,
 * //       fieldErrors: { // FieldErrors
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedBy: "STRING_VALUE",
 * //       lastModifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentProfilesCommandInput - {@link ListAgentProfilesCommandInput}
 * @returns {@link ListAgentProfilesCommandOutput}
 * @see {@link ListAgentProfilesCommandInput} for command's `input` shape.
 * @see {@link ListAgentProfilesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
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
export class ListAgentProfilesCommand extends command<ListAgentProfilesCommandInput, ListAgentProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListAgentProfiles",
  ListAgentProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentProfilesRequest;
      output: ListAgentProfilesResponse;
    };
    sdk: {
      input: ListAgentProfilesCommandInput;
      output: ListAgentProfilesCommandOutput;
    };
  };
}
