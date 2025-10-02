// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartIncidentInput, StartIncidentOutput } from "../models/models_0";
import { de_StartIncidentCommand, se_StartIncidentCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartIncidentCommand}.
 */
export interface StartIncidentCommandInput extends StartIncidentInput {}
/**
 * @public
 *
 * The output of {@link StartIncidentCommand}.
 */
export interface StartIncidentCommandOutput extends StartIncidentOutput, __MetadataBearer {}

/**
 * <p>Used to start an incident from CloudWatch alarms, EventBridge events, or
 *       manually. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, StartIncidentCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, StartIncidentCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // StartIncidentInput
 *   clientToken: "STRING_VALUE",
 *   responsePlanArn: "STRING_VALUE", // required
 *   title: "STRING_VALUE",
 *   impact: Number("int"),
 *   triggerDetails: { // TriggerDetails
 *     source: "STRING_VALUE", // required
 *     triggerArn: "STRING_VALUE",
 *     timestamp: new Date("TIMESTAMP"), // required
 *     rawData: "STRING_VALUE",
 *   },
 *   relatedItems: [ // RelatedItemList
 *     { // RelatedItem
 *       identifier: { // ItemIdentifier
 *         value: { // ItemValue Union: only one key present
 *           arn: "STRING_VALUE",
 *           url: "STRING_VALUE",
 *           metricDefinition: "STRING_VALUE",
 *           pagerDutyIncidentDetail: { // PagerDutyIncidentDetail
 *             id: "STRING_VALUE", // required
 *             autoResolve: true || false,
 *             secretId: "STRING_VALUE",
 *           },
 *         },
 *         type: "STRING_VALUE", // required
 *       },
 *       title: "STRING_VALUE",
 *       generatedId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartIncidentCommand(input);
 * const response = await client.send(command);
 * // { // StartIncidentOutput
 * //   incidentRecordArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartIncidentCommandInput - {@link StartIncidentCommandInput}
 * @returns {@link StartIncidentCommandOutput}
 * @see {@link StartIncidentCommandInput} for command's `input` shape.
 * @see {@link StartIncidentCommandOutput} for command's `response` shape.
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
export class StartIncidentCommand extends $Command
  .classBuilder<
    StartIncidentCommandInput,
    StartIncidentCommandOutput,
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
  .s("SSMIncidents", "StartIncident", {})
  .n("SSMIncidentsClient", "StartIncidentCommand")
  .f(void 0, void 0)
  .ser(se_StartIncidentCommand)
  .de(de_StartIncidentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartIncidentInput;
      output: StartIncidentOutput;
    };
    sdk: {
      input: StartIncidentCommandInput;
      output: StartIncidentCommandOutput;
    };
  };
}
