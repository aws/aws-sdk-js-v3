// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAgentProfileRequest, GetAgentProfileResponse } from "../models/models_0";
import { GetAgentProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentProfileCommand}.
 */
export interface GetAgentProfileCommandInput extends GetAgentProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentProfileCommand}.
 */
export interface GetAgentProfileCommandOutput extends GetAgentProfileResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about an optimization profile, including its configuration and metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAgentProfileCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAgentProfileCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetAgentProfileRequest
 *   profileArn: "STRING_VALUE", // required
 * };
 * const command = new GetAgentProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentProfileResponse
 * //   name: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   businessOverview: "STRING_VALUE",
 * //   pillars: [ // Pillars // required
 * //     "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 * //   ],
 * //   deletionProtection: true || false,
 * //   executionRoleArn: "STRING_VALUE", // required
 * //   aggregationConfiguration: [ // AggregationConfigurations // required
 * //     { // AggregationConfiguration
 * //       accountId: "STRING_VALUE", // required
 * //       regions: [ // Regions // required
 * //         "STRING_VALUE",
 * //       ],
 * //       accessRoleArn: "STRING_VALUE", // required
 * //     },
 * //   ],
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
 * @param GetAgentProfileCommandInput - {@link GetAgentProfileCommandInput}
 * @returns {@link GetAgentProfileCommandOutput}
 * @see {@link GetAgentProfileCommandInput} for command's `input` shape.
 * @see {@link GetAgentProfileCommandOutput} for command's `response` shape.
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
export class GetAgentProfileCommand extends command<GetAgentProfileCommandInput, GetAgentProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetAgentProfile",
  GetAgentProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentProfileRequest;
      output: GetAgentProfileResponse;
    };
    sdk: {
      input: GetAgentProfileCommandInput;
      output: GetAgentProfileCommandOutput;
    };
  };
}
