// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PublishInput, PublishResponse } from "../models/models_0";
import { Publish$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PublishCommand}.
 */
export interface PublishCommandInput extends PublishInput {}
/**
 * @public
 *
 * The output of {@link PublishCommand}.
 */
export interface PublishCommandOutput extends PublishResponse, __MetadataBearer {}

/**
 * Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone number, or a message to a mobile platform endpoint (when you specify the `TargetArn`).
 *
 * If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is subscribed to the topic. The format of the message depends on the notification protocol for each subscribed endpoint.
 *
 * When a `messageId` is returned, the message is saved and Amazon SNS immediately delivers it to subscribers.
 *
 * To use the `Publish` action for publishing a message to a mobile endpoint, such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for the TargetArn parameter. The EndpointArn is returned when making a call with the `CreatePlatformEndpoint` action.
 *
 * For more information about formatting messages, see [Send Custom Platform-Specific Payloads in Messages to Mobile Devices](https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-custommessage.html).
 *
 * > **Important:** You can publish messages only to topics and endpoints in the same Amazon Web Services Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, PublishCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // PublishInput
 *   TopicArn: "STRING_VALUE",
 *   TargetArn: "STRING_VALUE",
 *   PhoneNumber: "STRING_VALUE",
 *   Message: "STRING_VALUE", // required
 *   Subject: "STRING_VALUE",
 *   MessageStructure: "STRING_VALUE",
 *   MessageAttributes: { // MessageAttributeMap
 *     "<keys>": { // MessageAttributeValue
 *       DataType: "STRING_VALUE", // required
 *       StringValue: "STRING_VALUE",
 *       BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     },
 *   },
 *   MessageDeduplicationId: "STRING_VALUE",
 *   MessageGroupId: "STRING_VALUE",
 * };
 * const command = new PublishCommand(input);
 * const response = await client.send(command);
 * // { // PublishResponse
 * //   MessageId: "STRING_VALUE",
 * //   SequenceNumber: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PublishCommandInput - {@link PublishCommandInput}
 * @returns {@link PublishCommandOutput}
 * @see {@link PublishCommandInput} for command's `input` shape.
 * @see {@link PublishCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * Indicates that the user has been denied access to the requested resource.
 *
 * @throws {@link EndpointDisabledException} (client fault)
 *
 * Exception error indicating endpoint disabled.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Indicates an internal service error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link InvalidSecurityException} (client fault)
 *
 * The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.
 *
 * @throws {@link KMSAccessDeniedException} (client fault)
 *
 * The ciphertext references a key that doesn't exist or that you don't have access to.
 *
 * @throws {@link KMSDisabledException} (client fault)
 *
 * The request was rejected because the specified Amazon Web Services KMS key isn't enabled.
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *
 * The request was rejected because the state of the specified resource isn't valid for this request. For more information, see [Key states of Amazon Web Services KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * @throws {@link KMSNotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource can't be found.
 *
 * @throws {@link KMSOptInRequired} (client fault)
 *
 * The Amazon Web Services access key ID needs a subscription for the service.
 *
 * @throws {@link KMSThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. For more information about throttling, see [Limits](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second) in the *Key Management Service Developer Guide.*
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Indicates that the requested resource does not exist.
 *
 * @throws {@link PlatformApplicationDisabledException} (client fault)
 *
 * Exception error indicating platform application disabled.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that a parameter in the request is invalid.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class PublishCommand extends command<PublishCommandInput, PublishCommandOutput>(
  _ep0,
  _mw0,
  "Publish",
  Publish$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishInput;
      output: PublishResponse;
    };
    sdk: {
      input: PublishCommandInput;
      output: PublishCommandOutput;
    };
  };
}
