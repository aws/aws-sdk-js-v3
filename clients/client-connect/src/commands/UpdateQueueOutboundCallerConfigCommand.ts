// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateQueueOutboundCallerConfigRequest } from "../models/models_3";
import {
  de_UpdateQueueOutboundCallerConfigCommand,
  se_UpdateQueueOutboundCallerConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQueueOutboundCallerConfigCommand}.
 */
export interface UpdateQueueOutboundCallerConfigCommandInput extends UpdateQueueOutboundCallerConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueOutboundCallerConfigCommand}.
 */
export interface UpdateQueueOutboundCallerConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the outbound caller ID name, number, and outbound whisper flow for a specified
 *    queue.</p>
 *          <important>
 *             <ul>
 *                <li>
 *                   <p>If the phone number is claimed to a traffic distribution group that was created in the
 *       same Region as the Amazon Connect instance where you are calling this API, then you can use a
 *       full phone number ARN or a UUID for <code>OutboundCallerIdNumberId</code>. However, if the phone number is claimed
 *       to a traffic distribution group that is in one Region, and you are calling this API from an instance in another Amazon Web Services Region that is associated with the traffic distribution group, you must provide a full phone number ARN. If a
 *       UUID is provided in this scenario, you will receive a
 *       <code>ResourceNotFoundException</code>.</p>
 *                </li>
 *                <li>
 *                   <p>Only use the phone number ARN format that doesn't contain <code>instance</code> in the
 *       path, for example, <code>arn:aws:connect:us-east-1:1234567890:phone-number/uuid</code>. This
 *       is the same ARN format that is returned when you call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html">ListPhoneNumbersV2</a>
 *       API.</p>
 *                </li>
 *                <li>
 *                   <p>If you plan to use IAM policies to allow/deny access to this API for phone
 *       number resources claimed to a traffic distribution group, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_resource-level-policy-examples.html#allow-deny-queue-actions-replica-region">Allow or Deny queue API actions for phone numbers in a replica Region</a>.</p>
 *                </li>
 *             </ul>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueOutboundCallerConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueOutboundCallerConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateQueueOutboundCallerConfigRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 *   OutboundCallerConfig: { // OutboundCallerConfig
 *     OutboundCallerIdName: "STRING_VALUE",
 *     OutboundCallerIdNumberId: "STRING_VALUE",
 *     OutboundFlowId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateQueueOutboundCallerConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQueueOutboundCallerConfigCommandInput - {@link UpdateQueueOutboundCallerConfigCommandInput}
 * @returns {@link UpdateQueueOutboundCallerConfigCommandOutput}
 * @see {@link UpdateQueueOutboundCallerConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueOutboundCallerConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateQueueOutboundCallerConfigCommand extends $Command
  .classBuilder<
    UpdateQueueOutboundCallerConfigCommandInput,
    UpdateQueueOutboundCallerConfigCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateQueueOutboundCallerConfig", {})
  .n("ConnectClient", "UpdateQueueOutboundCallerConfigCommand")
  .f(void 0, void 0)
  .ser(se_UpdateQueueOutboundCallerConfigCommand)
  .de(de_UpdateQueueOutboundCallerConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueOutboundCallerConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateQueueOutboundCallerConfigCommandInput;
      output: UpdateQueueOutboundCallerConfigCommandOutput;
    };
  };
}
