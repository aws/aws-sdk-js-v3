// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateResponsePlanInput, UpdateResponsePlanOutput } from "../models/models_0";
import { de_UpdateResponsePlanCommand, se_UpdateResponsePlanCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResponsePlanCommand}.
 */
export interface UpdateResponsePlanCommandInput extends UpdateResponsePlanInput {}
/**
 * @public
 *
 * The output of {@link UpdateResponsePlanCommand}.
 */
export interface UpdateResponsePlanCommandOutput extends UpdateResponsePlanOutput, __MetadataBearer {}

/**
 * <p>Updates the specified response plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // UpdateResponsePlanInput
 *   clientToken: "STRING_VALUE",
 *   arn: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   incidentTemplateTitle: "STRING_VALUE",
 *   incidentTemplateImpact: Number("int"),
 *   incidentTemplateSummary: "STRING_VALUE",
 *   incidentTemplateDedupeString: "STRING_VALUE",
 *   incidentTemplateNotificationTargets: [ // NotificationTargetSet
 *     { // NotificationTargetItem Union: only one key present
 *       snsTopicArn: "STRING_VALUE",
 *     },
 *   ],
 *   chatChannel: { // ChatChannel Union: only one key present
 *     empty: {},
 *     chatbotSns: [ // ChatbotSnsConfigurationSet
 *       "STRING_VALUE",
 *     ],
 *   },
 *   engagements: [ // EngagementSet
 *     "STRING_VALUE",
 *   ],
 *   actions: [ // ActionsList
 *     { // Action Union: only one key present
 *       ssmAutomation: { // SsmAutomation
 *         roleArn: "STRING_VALUE", // required
 *         documentName: "STRING_VALUE", // required
 *         documentVersion: "STRING_VALUE",
 *         targetAccount: "STRING_VALUE",
 *         parameters: { // SsmParameters
 *           "<keys>": [ // SsmParameterValues
 *             "STRING_VALUE",
 *           ],
 *         },
 *         dynamicParameters: { // DynamicSsmParameters
 *           "<keys>": { // DynamicSsmParameterValue Union: only one key present
 *             variable: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   incidentTemplateTags: { // TagMapUpdate
 *     "<keys>": "STRING_VALUE",
 *   },
 *   integrations: [ // Integrations
 *     { // Integration Union: only one key present
 *       pagerDutyConfiguration: { // PagerDutyConfiguration
 *         name: "STRING_VALUE", // required
 *         secretId: "STRING_VALUE", // required
 *         pagerDutyIncidentConfiguration: { // PagerDutyIncidentConfiguration
 *           serviceId: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateResponsePlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateResponsePlanCommandInput - {@link UpdateResponsePlanCommandInput}
 * @returns {@link UpdateResponsePlanCommandOutput}
 * @see {@link UpdateResponsePlanCommandInput} for command's `input` shape.
 * @see {@link UpdateResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 *
 * @public
 */
export class UpdateResponsePlanCommand extends $Command
  .classBuilder<
    UpdateResponsePlanCommandInput,
    UpdateResponsePlanCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMIncidents", "UpdateResponsePlan", {})
  .n("SSMIncidentsClient", "UpdateResponsePlanCommand")
  .f(void 0, void 0)
  .ser(se_UpdateResponsePlanCommand)
  .de(de_UpdateResponsePlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResponsePlanInput;
      output: {};
    };
    sdk: {
      input: UpdateResponsePlanCommandInput;
      output: UpdateResponsePlanCommandOutput;
    };
  };
}
