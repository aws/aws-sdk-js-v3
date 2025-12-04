// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateIncidentRecordInput, UpdateIncidentRecordOutput } from "../models/models_0";
import { UpdateIncidentRecord } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIncidentRecordCommand}.
 */
export interface UpdateIncidentRecordCommandInput extends UpdateIncidentRecordInput {}
/**
 * @public
 *
 * The output of {@link UpdateIncidentRecordCommand}.
 */
export interface UpdateIncidentRecordCommandOutput extends UpdateIncidentRecordOutput, __MetadataBearer {}

/**
 * <p>Update the details of an incident record. You can use this operation to update an incident
 *       record from the defined chat channel. For more information about using actions in chat
 *       channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateIncidentRecordCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateIncidentRecordCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // UpdateIncidentRecordInput
 *   clientToken: "STRING_VALUE",
 *   arn: "STRING_VALUE", // required
 *   title: "STRING_VALUE",
 *   summary: "STRING_VALUE",
 *   impact: Number("int"),
 *   status: "STRING_VALUE",
 *   chatChannel: { // ChatChannel Union: only one key present
 *     empty: {},
 *     chatbotSns: [ // ChatbotSnsConfigurationSet
 *       "STRING_VALUE",
 *     ],
 *   },
 *   notificationTargets: [ // NotificationTargetSet
 *     { // NotificationTargetItem Union: only one key present
 *       snsTopicArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateIncidentRecordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateIncidentRecordCommandInput - {@link UpdateIncidentRecordCommandInput}
 * @returns {@link UpdateIncidentRecordCommandOutput}
 * @see {@link UpdateIncidentRecordCommandInput} for command's `input` shape.
 * @see {@link UpdateIncidentRecordCommandOutput} for command's `response` shape.
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
export class UpdateIncidentRecordCommand extends $Command
  .classBuilder<
    UpdateIncidentRecordCommandInput,
    UpdateIncidentRecordCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMIncidents", "UpdateIncidentRecord", {})
  .n("SSMIncidentsClient", "UpdateIncidentRecordCommand")
  .sc(UpdateIncidentRecord)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIncidentRecordInput;
      output: {};
    };
    sdk: {
      input: UpdateIncidentRecordCommandInput;
      output: UpdateIncidentRecordCommandOutput;
    };
  };
}
