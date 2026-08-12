// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAgentRecommendationRequest, GetAgentRecommendationResponse } from "../models/models_0";
import { GetAgentRecommendation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentRecommendationCommand}.
 */
export interface GetAgentRecommendationCommandInput extends GetAgentRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentRecommendationCommand}.
 */
export interface GetAgentRecommendationCommandOutput extends GetAgentRecommendationResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific optimization recommendation, including its impact analysis, content, and implementation guidance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAgentRecommendationCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAgentRecommendationCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetAgentRecommendationRequest
 *   recommendationArn: "STRING_VALUE", // required
 *   remediationType: "AUTO_REMEDIATION" || "CONSOLE" || "CLI" || "SDK" || "IAC" || "MCP",
 * };
 * const command = new GetAgentRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentRecommendationResponse
 * //   recommendationArn: "STRING_VALUE", // required
 * //   profileArn: "STRING_VALUE", // required
 * //   title: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   type: "RESOURCE" || "ARCHITECTURE" || "APPLICATION", // required
 * //   pillar: "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE", // required
 * //   priority: "HIGH" || "MEDIUM" || "LOW", // required
 * //   effort: "LARGE" || "MEDIUM" || "SMALL", // required
 * //   status: "ACTIVE" || "SUPPRESSED" || "COMPLETED", // required
 * //   state: "OPEN" || "CLOSED", // required
 * //   updateReason: "STRING_VALUE",
 * //   impact: "HIGH" || "MEDIUM" || "LOW", // required
 * //   roi: { // Roi
 * //     estimate: "STRING_VALUE",
 * //     detail: "STRING_VALUE", // required
 * //   },
 * //   numberOfResources: Number("int"),
 * //   awsServices: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   businessUnits: [
 * //     "STRING_VALUE",
 * //   ],
 * //   applications: [
 * //     "STRING_VALUE",
 * //   ],
 * //   impactDetails: [ // ImpactDetails // required
 * //     "STRING_VALUE",
 * //   ],
 * //   insights: [ // InsightList // required
 * //     { // Insight
 * //       usagePattern: "STRING_VALUE", // required
 * //       signalsDetected: "STRING_VALUE",
 * //     },
 * //   ],
 * //   highlights: [ // Highlights // required
 * //     "STRING_VALUE",
 * //   ],
 * //   remediationSummary: { // RemediationSummary
 * //     recommendation: "STRING_VALUE", // required
 * //     steps: [ // RecommendedFixSteps // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   crossPillarBenefits: [ // CrossPillarBenefits
 * //     { // CrossPillarBenefit
 * //       pillar: "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE", // required
 * //       title: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       impact: "HIGH" || "MEDIUM" || "LOW", // required
 * //     },
 * //   ],
 * //   tradeOffs: [ // TradeOffs
 * //     { // TradeOff
 * //       pillar: "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE", // required
 * //       title: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       risk: "LOW" || "MEDIUM" || "HIGH", // required
 * //       mitigation: "STRING_VALUE", // required
 * //       riskExplanation: "STRING_VALUE",
 * //     },
 * //   ],
 * //   sources: [ // RecommendationSourceList
 * //     "TRUSTED_ADVISOR" || "COST_EXPLORER" || "CLOUDWATCH" || "WELL_ARCHITECTED_TOOL" || "WELL_ARCHITECTED_AGENT" || "CUSTOMER_IAC",
 * //   ],
 * //   goals: [ // RecommendationGoals
 * //     { // RecommendationGoal
 * //       title: "STRING_VALUE", // required
 * //     },
 * //   ],
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
 * //   remediations: [ // AgentRecommendationRemediations
 * //     { // AgentRecommendationRemediation
 * //       recommendationArn: "STRING_VALUE", // required
 * //       type: "AUTO_REMEDIATION" || "CONSOLE" || "CLI" || "SDK" || "IAC" || "MCP", // required
 * //       steps: [ // RemediationSteps // required
 * //         { // RemediationStep
 * //           title: "STRING_VALUE",
 * //           content: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       resourceLinks: [ // ResourceLinks
 * //         { // ResourceLink
 * //           url: "STRING_VALUE", // required
 * //           title: "STRING_VALUE",
 * //         },
 * //       ],
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedBy: "STRING_VALUE",
 * //       lastModifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAgentRecommendationCommandInput - {@link GetAgentRecommendationCommandInput}
 * @returns {@link GetAgentRecommendationCommandOutput}
 * @see {@link GetAgentRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetAgentRecommendationCommandOutput} for command's `response` shape.
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
export class GetAgentRecommendationCommand extends command<GetAgentRecommendationCommandInput, GetAgentRecommendationCommandOutput>(
  _ep0,
  _mw0,
  "GetAgentRecommendation",
  GetAgentRecommendation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentRecommendationRequest;
      output: GetAgentRecommendationResponse;
    };
    sdk: {
      input: GetAgentRecommendationCommandInput;
      output: GetAgentRecommendationCommandOutput;
    };
  };
}
