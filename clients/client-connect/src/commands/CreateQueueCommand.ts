// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateQueueRequest, CreateQueueResponse } from "../models/models_0";
import { CreateQueue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandInput extends CreateQueueRequest {}
/**
 * @public
 *
 * The output of {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandOutput extends CreateQueueResponse, __MetadataBearer {}

/**
 * Creates a new queue for the specified Connect Customer instance.
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
 * import { ConnectClient, CreateQueueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateQueueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateQueueRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   OutboundCallerConfig: { // OutboundCallerConfig
 *     OutboundCallerIdName: "STRING_VALUE",
 *     OutboundCallerIdNumberId: "STRING_VALUE",
 *     OutboundFlowId: "STRING_VALUE",
 *   },
 *   OutboundEmailConfig: { // OutboundEmailConfig
 *     OutboundEmailAddressId: "STRING_VALUE",
 *   },
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   MaxContacts: Number("int"),
 *   QuickConnectIds: [ // QuickConnectsList
 *     "STRING_VALUE",
 *   ],
 *   EmailAddressesConfig: [ // EmailAddressConfigList
 *     { // EmailAddressConfig
 *       EmailAddressId: "STRING_VALUE", // required
 *     },
 *   ],
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQueueCommand(input);
 * const response = await client.send(command);
 * // { // CreateQueueResponse
 * //   QueueArn: "STRING_VALUE",
 * //   QueueId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateQueueCommandInput - {@link CreateQueueCommandInput}
 * @returns {@link CreateQueueCommandOutput}
 * @see {@link CreateQueueCommandInput} for command's `input` shape.
 * @see {@link CreateQueueCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
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
export class CreateQueueCommand extends command<CreateQueueCommandInput, CreateQueueCommandOutput>(
  _ep0,
  _mw0,
  "CreateQueue",
  CreateQueue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQueueRequest;
      output: CreateQueueResponse;
    };
    sdk: {
      input: CreateQueueCommandInput;
      output: CreateQueueCommandOutput;
    };
  };
}
