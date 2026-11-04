// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateResponsePlanInput, UpdateResponsePlanOutput } from "../models/models_0";
import { UpdateResponsePlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the specified response plan.
 *
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
 *
 * You don't have sufficient access to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource causes an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SSMIncidentsServiceException}
 *
 * Base exception class for all service exceptions from SSMIncidents service.
 *
 * @public
 */
export class UpdateResponsePlanCommand extends command<UpdateResponsePlanCommandInput, UpdateResponsePlanCommandOutput>(
  _ep0,
  _mw0,
  "UpdateResponsePlan",
  UpdateResponsePlan$
) {
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
