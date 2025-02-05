// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetIncidentRecordInput, GetIncidentRecordOutput } from "../models/models_0";
import { de_GetIncidentRecordCommand, se_GetIncidentRecordCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIncidentRecordCommand}.
 */
export interface GetIncidentRecordCommandInput extends GetIncidentRecordInput {}
/**
 * @public
 *
 * The output of {@link GetIncidentRecordCommand}.
 */
export interface GetIncidentRecordCommandOutput extends GetIncidentRecordOutput, __MetadataBearer {}

/**
 * <p>Returns the details for the specified incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetIncidentRecordCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetIncidentRecordCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMIncidentsClient(config);
 * const input = { // GetIncidentRecordInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetIncidentRecordCommand(input);
 * const response = await client.send(command);
 * // { // GetIncidentRecordOutput
 * //   incidentRecord: { // IncidentRecord
 * //     arn: "STRING_VALUE", // required
 * //     title: "STRING_VALUE", // required
 * //     summary: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     impact: Number("int"), // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     resolvedTime: new Date("TIMESTAMP"),
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedBy: "STRING_VALUE", // required
 * //     automationExecutions: [ // AutomationExecutionSet
 * //       { // AutomationExecution Union: only one key present
 * //         ssmExecutionArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     incidentRecordSource: { // IncidentRecordSource
 * //       createdBy: "STRING_VALUE", // required
 * //       invokedBy: "STRING_VALUE",
 * //       resourceArn: "STRING_VALUE",
 * //       source: "STRING_VALUE", // required
 * //     },
 * //     dedupeString: "STRING_VALUE", // required
 * //     chatChannel: { // ChatChannel Union: only one key present
 * //       empty: {},
 * //       chatbotSns: [ // ChatbotSnsConfigurationSet
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     notificationTargets: [ // NotificationTargetSet
 * //       { // NotificationTargetItem Union: only one key present
 * //         snsTopicArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIncidentRecordCommandInput - {@link GetIncidentRecordCommandInput}
 * @returns {@link GetIncidentRecordCommandOutput}
 * @see {@link GetIncidentRecordCommandInput} for command's `input` shape.
 * @see {@link GetIncidentRecordCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetIncidentRecordCommand extends $Command
  .classBuilder<
    GetIncidentRecordCommandInput,
    GetIncidentRecordCommandOutput,
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
  .s("SSMIncidents", "GetIncidentRecord", {})
  .n("SSMIncidentsClient", "GetIncidentRecordCommand")
  .f(void 0, void 0)
  .ser(se_GetIncidentRecordCommand)
  .de(de_GetIncidentRecordCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIncidentRecordInput;
      output: GetIncidentRecordOutput;
    };
    sdk: {
      input: GetIncidentRecordCommandInput;
      output: GetIncidentRecordCommandOutput;
    };
  };
}
