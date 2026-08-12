// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAgentProfileRequest, CreateAgentProfileResponse } from "../models/models_0";
import { CreateAgentProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAgentProfileCommand}.
 */
export interface CreateAgentProfileCommandInput extends CreateAgentProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentProfileCommand}.
 */
export interface CreateAgentProfileCommandOutput extends CreateAgentProfileResponse, __MetadataBearer {}

/**
 * <p>Creates an optimization profile that defines the scope and configuration for generating recommendations. A profile specifies the execution role, target pillars, and aggregation settings for analyzing your Amazon Web Services resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateAgentProfileCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateAgentProfileCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateAgentProfileRequest
 *   name: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   businessOverview: "STRING_VALUE",
 *   pillars: [ // Pillars // required
 *     "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 *   ],
 *   deletionProtection: true || false,
 *   executionRoleArn: "STRING_VALUE", // required
 *   aggregationConfiguration: [ // AggregationConfigurations // required
 *     { // AggregationConfiguration
 *       accountId: "STRING_VALUE", // required
 *       regions: [ // Regions // required
 *         "STRING_VALUE",
 *       ],
 *       accessRoleArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAgentProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentProfileResponse
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
 * @param CreateAgentProfileCommandInput - {@link CreateAgentProfileCommandInput}
 * @returns {@link CreateAgentProfileCommandOutput}
 * @see {@link CreateAgentProfileCommandInput} for command's `input` shape.
 * @see {@link CreateAgentProfileCommandOutput} for command's `response` shape.
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
export class CreateAgentProfileCommand extends command<CreateAgentProfileCommandInput, CreateAgentProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateAgentProfile",
  CreateAgentProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentProfileRequest;
      output: CreateAgentProfileResponse;
    };
    sdk: {
      input: CreateAgentProfileCommandInput;
      output: CreateAgentProfileCommandOutput;
    };
  };
}
