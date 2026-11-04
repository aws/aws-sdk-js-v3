// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateQueueOutboundCallerConfigRequest } from "../models/models_4";
import { UpdateQueueOutboundCallerConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the outbound caller ID name, number, and outbound whisper flow for a specified queue.
 *
 * > **Important:**
 * >
 * > - If the phone number is claimed to a traffic distribution group that was created in the same Region as the Connect Customer instance where you are calling this API, then you can use a full phone number ARN or a UUID for `OutboundCallerIdNumberId`. However, if the phone number is claimed to a traffic distribution group that is in one Region, and you are calling this API from an instance in another Amazon Web Services Region that is associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a `ResourceNotFoundException`.
 * > - Only use the phone number ARN format that doesn't contain `instance` in the path, for example, `arn:aws:connect:us-east-1:1234567890:phone-number/uuid`. This is the same ARN format that is returned when you call the [ListPhoneNumbersV2](https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html) API.
 * > - If you plan to use IAM policies to allow/deny access to this API for phone number resources claimed to a traffic distribution group, see [Allow or Deny queue API actions for phone numbers in a replica Region](https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_resource-level-policy-examples.html#allow-deny-queue-actions-replica-region).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueOutboundCallerConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueOutboundCallerConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
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
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateQueueOutboundCallerConfigCommand extends command<UpdateQueueOutboundCallerConfigCommandInput, UpdateQueueOutboundCallerConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateQueueOutboundCallerConfig",
  UpdateQueueOutboundCallerConfig$
) {
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
