// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateResponsePlanInput, CreateResponsePlanOutput } from "../models/models_0";
import { CreateResponsePlan } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateResponsePlanCommand}.
 */
export interface CreateResponsePlanCommandInput extends CreateResponsePlanInput {}
/**
 * @public
 *
 * The output of {@link CreateResponsePlanCommand}.
 */
export interface CreateResponsePlanCommandOutput extends CreateResponsePlanOutput, __MetadataBearer {}

/**
 * <p>Creates a response plan that automates the initial response to incidents. A response plan
 *       engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning
 *       of an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, CreateResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, CreateResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // CreateResponsePlanInput
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   incidentTemplate: { // IncidentTemplate
 *     title: "STRING_VALUE", // required
 *     impact: Number("int"), // required
 *     summary: "STRING_VALUE",
 *     dedupeString: "STRING_VALUE",
 *     notificationTargets: [ // NotificationTargetSet
 *       { // NotificationTargetItem Union: only one key present
 *         snsTopicArn: "STRING_VALUE",
 *       },
 *     ],
 *     incidentTags: { // TagMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
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
 *   tags: {
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
 * const command = new CreateResponsePlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateResponsePlanOutput
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateResponsePlanCommandInput - {@link CreateResponsePlanCommandInput}
 * @returns {@link CreateResponsePlanCommandOutput}
 * @see {@link CreateResponsePlanCommandInput} for command's `input` shape.
 * @see {@link CreateResponsePlanCommandOutput} for command's `response` shape.
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
export class CreateResponsePlanCommand extends $Command
  .classBuilder<
    CreateResponsePlanCommandInput,
    CreateResponsePlanCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMIncidents", "CreateResponsePlan", {})
  .n("SSMIncidentsClient", "CreateResponsePlanCommand")
  .sc(CreateResponsePlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResponsePlanInput;
      output: CreateResponsePlanOutput;
    };
    sdk: {
      input: CreateResponsePlanCommandInput;
      output: CreateResponsePlanCommandOutput;
    };
  };
}
