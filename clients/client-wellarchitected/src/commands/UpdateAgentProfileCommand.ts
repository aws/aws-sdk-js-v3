// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { UpdateAgentProfileRequest, UpdateAgentProfileResponse } from "../models/models_0";
import { UpdateAgentProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAgentProfileCommand}.
 */
export interface UpdateAgentProfileCommandInput extends UpdateAgentProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentProfileCommand}.
 */
export interface UpdateAgentProfileCommandOutput extends UpdateAgentProfileResponse, __MetadataBearer {}

/**
 * Updates an existing optimization profile's configuration, including its pillars, execution role, and aggregation settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateAgentProfileCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateAgentProfileCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateAgentProfileRequest
 *   clientToken: "STRING_VALUE",
 *   profileArn: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   executionRoleArn: "STRING_VALUE",
 *   aggregationConfiguration: [ // AggregationConfigurations
 *     { // AggregationConfiguration
 *       accountId: "STRING_VALUE", // required
 *       regions: [ // Regions // required
 *         "STRING_VALUE",
 *       ],
 *       accessRoleArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   businessOverview: "STRING_VALUE",
 *   pillars: [ // Pillars
 *     "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 *   ],
 *   deletionProtection: true || false,
 * };
 * const command = new UpdateAgentProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentProfileResponse
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
 * @param UpdateAgentProfileCommandInput - {@link UpdateAgentProfileCommandInput}
 * @returns {@link UpdateAgentProfileCommandOutput}
 * @see {@link UpdateAgentProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentProfileCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class UpdateAgentProfileCommand extends command<UpdateAgentProfileCommandInput, UpdateAgentProfileCommandOutput>(
  _ep1,
  _mw0,
  "UpdateAgentProfile",
  UpdateAgentProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentProfileRequest;
      output: UpdateAgentProfileResponse;
    };
    sdk: {
      input: UpdateAgentProfileCommandInput;
      output: UpdateAgentProfileCommandOutput;
    };
  };
}
