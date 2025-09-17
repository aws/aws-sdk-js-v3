// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { CreateAlarmModelRequest, CreateAlarmModelResponse } from "../models/models_0";
import { de_CreateAlarmModelCommand, se_CreateAlarmModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAlarmModelCommand}.
 */
export interface CreateAlarmModelCommandInput extends CreateAlarmModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateAlarmModelCommand}.
 */
export interface CreateAlarmModelCommandOutput extends CreateAlarmModelResponse, __MetadataBearer {}

/**
 * <p>Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get
 *       notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an
 *         alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, CreateAlarmModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, CreateAlarmModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * // import type { IoTEventsClientConfig } from "@aws-sdk/client-iot-events";
 * const config = {}; // type is IoTEventsClientConfig
 * const client = new IoTEventsClient(config);
 * const input = { // CreateAlarmModelRequest
 *   alarmModelName: "STRING_VALUE", // required
 *   alarmModelDescription: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   key: "STRING_VALUE",
 *   severity: Number("int"),
 *   alarmRule: { // AlarmRule
 *     simpleRule: { // SimpleRule
 *       inputProperty: "STRING_VALUE", // required
 *       comparisonOperator: "GREATER" || "GREATER_OR_EQUAL" || "LESS" || "LESS_OR_EQUAL" || "EQUAL" || "NOT_EQUAL", // required
 *       threshold: "STRING_VALUE", // required
 *     },
 *   },
 *   alarmNotification: { // AlarmNotification
 *     notificationActions: [ // NotificationActions
 *       { // NotificationAction
 *         action: { // NotificationTargetActions
 *           lambdaAction: { // LambdaAction
 *             functionArn: "STRING_VALUE", // required
 *             payload: { // Payload
 *               contentExpression: "STRING_VALUE", // required
 *               type: "STRING" || "JSON", // required
 *             },
 *           },
 *         },
 *         smsConfigurations: [ // SMSConfigurations
 *           { // SMSConfiguration
 *             senderId: "STRING_VALUE",
 *             additionalMessage: "STRING_VALUE",
 *             recipients: [ // RecipientDetails // required
 *               { // RecipientDetail
 *                 ssoIdentity: { // SSOIdentity
 *                   identityStoreId: "STRING_VALUE", // required
 *                   userId: "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *           },
 *         ],
 *         emailConfigurations: [ // EmailConfigurations
 *           { // EmailConfiguration
 *             from: "STRING_VALUE", // required
 *             content: { // EmailContent
 *               subject: "STRING_VALUE",
 *               additionalMessage: "STRING_VALUE",
 *             },
 *             recipients: { // EmailRecipients
 *               to: [
 *                 {
 *                   ssoIdentity: {
 *                     identityStoreId: "STRING_VALUE", // required
 *                     userId: "STRING_VALUE",
 *                   },
 *                 },
 *               ],
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   alarmEventActions: { // AlarmEventActions
 *     alarmActions: [ // AlarmActions
 *       { // AlarmAction
 *         sns: { // SNSTopicPublishAction
 *           targetArn: "STRING_VALUE", // required
 *           payload: {
 *             contentExpression: "STRING_VALUE", // required
 *             type: "STRING" || "JSON", // required
 *           },
 *         },
 *         iotTopicPublish: { // IotTopicPublishAction
 *           mqttTopic: "STRING_VALUE", // required
 *           payload: {
 *             contentExpression: "STRING_VALUE", // required
 *             type: "STRING" || "JSON", // required
 *           },
 *         },
 *         lambda: {
 *           functionArn: "STRING_VALUE", // required
 *           payload: {
 *             contentExpression: "STRING_VALUE", // required
 *             type: "STRING" || "JSON", // required
 *           },
 *         },
 *         iotEvents: { // IotEventsAction
 *           inputName: "STRING_VALUE", // required
 *           payload: {
 *             contentExpression: "STRING_VALUE", // required
 *             type: "STRING" || "JSON", // required
 *           },
 *         },
 *         sqs: { // SqsAction
 *           queueUrl: "STRING_VALUE", // required
 *           useBase64: true || false,
 *           payload: "<Payload>",
 *         },
 *         firehose: { // FirehoseAction
 *           deliveryStreamName: "STRING_VALUE", // required
 *           separator: "STRING_VALUE",
 *           payload: "<Payload>",
 *         },
 *         dynamoDB: { // DynamoDBAction
 *           hashKeyType: "STRING_VALUE",
 *           hashKeyField: "STRING_VALUE", // required
 *           hashKeyValue: "STRING_VALUE", // required
 *           rangeKeyType: "STRING_VALUE",
 *           rangeKeyField: "STRING_VALUE",
 *           rangeKeyValue: "STRING_VALUE",
 *           operation: "STRING_VALUE",
 *           payloadField: "STRING_VALUE",
 *           tableName: "STRING_VALUE", // required
 *           payload: "<Payload>",
 *         },
 *         dynamoDBv2: { // DynamoDBv2Action
 *           tableName: "STRING_VALUE", // required
 *           payload: "<Payload>",
 *         },
 *         iotSiteWise: { // IotSiteWiseAction
 *           entryId: "STRING_VALUE",
 *           assetId: "STRING_VALUE",
 *           propertyId: "STRING_VALUE",
 *           propertyAlias: "STRING_VALUE",
 *           propertyValue: { // AssetPropertyValue
 *             value: { // AssetPropertyVariant
 *               stringValue: "STRING_VALUE",
 *               integerValue: "STRING_VALUE",
 *               doubleValue: "STRING_VALUE",
 *               booleanValue: "STRING_VALUE",
 *             },
 *             timestamp: { // AssetPropertyTimestamp
 *               timeInSeconds: "STRING_VALUE", // required
 *               offsetInNanos: "STRING_VALUE",
 *             },
 *             quality: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   alarmCapabilities: { // AlarmCapabilities
 *     initializationConfiguration: { // InitializationConfiguration
 *       disabledOnInitialization: true || false, // required
 *     },
 *     acknowledgeFlow: { // AcknowledgeFlow
 *       enabled: true || false, // required
 *     },
 *   },
 * };
 * const command = new CreateAlarmModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateAlarmModelResponse
 * //   creationTime: new Date("TIMESTAMP"),
 * //   alarmModelArn: "STRING_VALUE",
 * //   alarmModelVersion: "STRING_VALUE",
 * //   lastUpdateTime: new Date("TIMESTAMP"),
 * //   status: "ACTIVE" || "ACTIVATING" || "INACTIVE" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateAlarmModelCommandInput - {@link CreateAlarmModelCommandInput}
 * @returns {@link CreateAlarmModelCommandOutput}
 * @see {@link CreateAlarmModelCommandInput} for command's `input` shape.
 * @see {@link CreateAlarmModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is in use.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 *
 * @public
 */
export class CreateAlarmModelCommand extends $Command
  .classBuilder<
    CreateAlarmModelCommandInput,
    CreateAlarmModelCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotColumboService", "CreateAlarmModel", {})
  .n("IoTEventsClient", "CreateAlarmModelCommand")
  .f(void 0, void 0)
  .ser(se_CreateAlarmModelCommand)
  .de(de_CreateAlarmModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAlarmModelRequest;
      output: CreateAlarmModelResponse;
    };
    sdk: {
      input: CreateAlarmModelCommandInput;
      output: CreateAlarmModelCommandOutput;
    };
  };
}
