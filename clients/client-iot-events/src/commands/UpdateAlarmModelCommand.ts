// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { UpdateAlarmModelRequest, UpdateAlarmModelResponse } from "../models/models_0";
import { de_UpdateAlarmModelCommand, se_UpdateAlarmModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAlarmModelCommand}.
 */
export interface UpdateAlarmModelCommandInput extends UpdateAlarmModelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAlarmModelCommand}.
 */
export interface UpdateAlarmModelCommandOutput extends UpdateAlarmModelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an alarm model. Any alarms that were created based on the previous version are
 *       deleted and then created again as new data arrives.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, UpdateAlarmModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, UpdateAlarmModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const input = { // UpdateAlarmModelRequest
 *   alarmModelName: "STRING_VALUE", // required
 *   alarmModelDescription: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   severity: Number("int"),
 *   alarmRule: { // AlarmRule
 *     simpleRule: { // SimpleRule
 *       inputProperty: "STRING_VALUE", // required
 *       comparisonOperator: "STRING_VALUE", // required
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
 *               type: "STRING_VALUE", // required
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
 *             type: "STRING_VALUE", // required
 *           },
 *         },
 *         iotTopicPublish: { // IotTopicPublishAction
 *           mqttTopic: "STRING_VALUE", // required
 *           payload: {
 *             contentExpression: "STRING_VALUE", // required
 *             type: "STRING_VALUE", // required
 *           },
 *         },
 *         lambda: {
 *           functionArn: "STRING_VALUE", // required
 *           payload: {
 *             contentExpression: "STRING_VALUE", // required
 *             type: "STRING_VALUE", // required
 *           },
 *         },
 *         iotEvents: { // IotEventsAction
 *           inputName: "STRING_VALUE", // required
 *           payload: {
 *             contentExpression: "STRING_VALUE", // required
 *             type: "STRING_VALUE", // required
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
 * const command = new UpdateAlarmModelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAlarmModelResponse
 * //   creationTime: new Date("TIMESTAMP"),
 * //   alarmModelArn: "STRING_VALUE",
 * //   alarmModelVersion: "STRING_VALUE",
 * //   lastUpdateTime: new Date("TIMESTAMP"),
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAlarmModelCommandInput - {@link UpdateAlarmModelCommandInput}
 * @returns {@link UpdateAlarmModelCommandOutput}
 * @see {@link UpdateAlarmModelCommandInput} for command's `input` shape.
 * @see {@link UpdateAlarmModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
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
 */
export class UpdateAlarmModelCommand extends $Command<
  UpdateAlarmModelCommandInput,
  UpdateAlarmModelCommandOutput,
  IoTEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateAlarmModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAlarmModelCommandInput, UpdateAlarmModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAlarmModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "UpdateAlarmModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateAlarmModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAlarmModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAlarmModelCommandOutput> {
    return de_UpdateAlarmModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
