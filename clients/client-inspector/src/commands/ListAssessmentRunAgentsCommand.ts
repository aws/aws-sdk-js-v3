// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentRunAgentsRequest, ListAssessmentRunAgentsResponse } from "../models/models_0";
import { de_ListAssessmentRunAgentsCommand, se_ListAssessmentRunAgentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentRunAgentsCommand}.
 */
export interface ListAssessmentRunAgentsCommandInput extends ListAssessmentRunAgentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentRunAgentsCommand}.
 */
export interface ListAssessmentRunAgentsCommandOutput extends ListAssessmentRunAgentsResponse, __MetadataBearer {}

/**
 * <p>Lists the agents of the assessment runs that are specified by the ARNs of the
 *          assessment runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentRunAgentsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentRunAgentsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // ListAssessmentRunAgentsRequest
 *   assessmentRunArn: "STRING_VALUE", // required
 *   filter: { // AgentFilter
 *     agentHealths: [ // AgentHealthList // required
 *       "HEALTHY" || "UNHEALTHY" || "UNKNOWN",
 *     ],
 *     agentHealthCodes: [ // AgentHealthCodeList // required
 *       "IDLE" || "RUNNING" || "SHUTDOWN" || "UNHEALTHY" || "THROTTLED" || "UNKNOWN",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentRunAgentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentRunAgentsResponse
 * //   assessmentRunAgents: [ // AssessmentRunAgentList // required
 * //     { // AssessmentRunAgent
 * //       agentId: "STRING_VALUE", // required
 * //       assessmentRunArn: "STRING_VALUE", // required
 * //       agentHealth: "HEALTHY" || "UNHEALTHY" || "UNKNOWN", // required
 * //       agentHealthCode: "IDLE" || "RUNNING" || "SHUTDOWN" || "UNHEALTHY" || "THROTTLED" || "UNKNOWN", // required
 * //       agentHealthDetails: "STRING_VALUE",
 * //       autoScalingGroup: "STRING_VALUE",
 * //       telemetryMetadata: [ // TelemetryMetadataList // required
 * //         { // TelemetryMetadata
 * //           messageType: "STRING_VALUE", // required
 * //           count: Number("long"), // required
 * //           dataSize: Number("long"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentRunAgentsCommandInput - {@link ListAssessmentRunAgentsCommandInput}
 * @returns {@link ListAssessmentRunAgentsCommandOutput}
 * @see {@link ListAssessmentRunAgentsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentRunAgentsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @public
 */
export class ListAssessmentRunAgentsCommand extends $Command
  .classBuilder<
    ListAssessmentRunAgentsCommandInput,
    ListAssessmentRunAgentsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "ListAssessmentRunAgents", {})
  .n("InspectorClient", "ListAssessmentRunAgentsCommand")
  .f(void 0, void 0)
  .ser(se_ListAssessmentRunAgentsCommand)
  .de(de_ListAssessmentRunAgentsCommand)
  .build() {}
