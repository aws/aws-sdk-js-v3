// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetResponsePlanInput, GetResponsePlanOutput } from "../models/models_0";
import { GetResponsePlan$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResponsePlanCommand}.
 */
export interface GetResponsePlanCommandInput extends GetResponsePlanInput {}
/**
 * @public
 *
 * The output of {@link GetResponsePlanCommand}.
 */
export interface GetResponsePlanCommandOutput extends GetResponsePlanOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details of the specified response plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // GetResponsePlanInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetResponsePlanCommand(input);
 * const response = await client.send(command);
 * // { // GetResponsePlanOutput
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   incidentTemplate: { // IncidentTemplate
 * //     title: "STRING_VALUE", // required
 * //     impact: Number("int"), // required
 * //     summary: "STRING_VALUE",
 * //     dedupeString: "STRING_VALUE",
 * //     notificationTargets: [ // NotificationTargetSet
 * //       { // NotificationTargetItem Union: only one key present
 * //         snsTopicArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     incidentTags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   chatChannel: { // ChatChannel Union: only one key present
 * //     empty: {},
 * //     chatbotSns: [ // ChatbotSnsConfigurationSet
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   engagements: [ // EngagementSet
 * //     "STRING_VALUE",
 * //   ],
 * //   actions: [ // ActionsList
 * //     { // Action Union: only one key present
 * //       ssmAutomation: { // SsmAutomation
 * //         roleArn: "STRING_VALUE", // required
 * //         documentName: "STRING_VALUE", // required
 * //         documentVersion: "STRING_VALUE",
 * //         targetAccount: "STRING_VALUE",
 * //         parameters: { // SsmParameters
 * //           "<keys>": [ // SsmParameterValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         dynamicParameters: { // DynamicSsmParameters
 * //           "<keys>": { // DynamicSsmParameterValue Union: only one key present
 * //             variable: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   integrations: [ // Integrations
 * //     { // Integration Union: only one key present
 * //       pagerDutyConfiguration: { // PagerDutyConfiguration
 * //         name: "STRING_VALUE", // required
 * //         secretId: "STRING_VALUE", // required
 * //         pagerDutyIncidentConfiguration: { // PagerDutyIncidentConfiguration
 * //           serviceId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetResponsePlanCommandInput - {@link GetResponsePlanCommandInput}
 * @returns {@link GetResponsePlanCommandOutput}
 * @see {@link GetResponsePlanCommandInput} for command's `input` shape.
 * @see {@link GetResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
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
export class GetResponsePlanCommand extends $Command
  .classBuilder<
    GetResponsePlanCommandInput,
    GetResponsePlanCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMIncidents", "GetResponsePlan", {})
  .n("SSMIncidentsClient", "GetResponsePlanCommand")
  .sc(GetResponsePlan$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResponsePlanInput;
      output: GetResponsePlanOutput;
    };
    sdk: {
      input: GetResponsePlanCommandInput;
      output: GetResponsePlanCommandOutput;
    };
  };
}
