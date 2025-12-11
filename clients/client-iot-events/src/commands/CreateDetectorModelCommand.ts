// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import type { CreateDetectorModelRequest, CreateDetectorModelResponse } from "../models/models_0";
import { CreateDetectorModel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDetectorModelCommand}.
 */
export interface CreateDetectorModelCommandInput extends CreateDetectorModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateDetectorModelCommand}.
 */
export interface CreateDetectorModelCommandOutput extends CreateDetectorModelResponse, __MetadataBearer {}

/**
 * <p>Creates a detector model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, CreateDetectorModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, CreateDetectorModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * // import type { IoTEventsClientConfig } from "@aws-sdk/client-iot-events";
 * const config = {}; // type is IoTEventsClientConfig
 * const client = new IoTEventsClient(config);
 * const input = { // CreateDetectorModelRequest
 *   detectorModelName: "STRING_VALUE", // required
 *   detectorModelDefinition: { // DetectorModelDefinition
 *     states: [ // States // required
 *       { // State
 *         stateName: "STRING_VALUE", // required
 *         onInput: { // OnInputLifecycle
 *           events: [ // Events
 *             { // Event
 *               eventName: "STRING_VALUE", // required
 *               condition: "STRING_VALUE",
 *               actions: [ // Actions
 *                 { // Action
 *                   setVariable: { // SetVariableAction
 *                     variableName: "STRING_VALUE", // required
 *                     value: "STRING_VALUE", // required
 *                   },
 *                   sns: { // SNSTopicPublishAction
 *                     targetArn: "STRING_VALUE", // required
 *                     payload: { // Payload
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING" || "JSON", // required
 *                     },
 *                   },
 *                   iotTopicPublish: { // IotTopicPublishAction
 *                     mqttTopic: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING" || "JSON", // required
 *                     },
 *                   },
 *                   setTimer: { // SetTimerAction
 *                     timerName: "STRING_VALUE", // required
 *                     seconds: Number("int"),
 *                     durationExpression: "STRING_VALUE",
 *                   },
 *                   clearTimer: { // ClearTimerAction
 *                     timerName: "STRING_VALUE", // required
 *                   },
 *                   resetTimer: { // ResetTimerAction
 *                     timerName: "STRING_VALUE", // required
 *                   },
 *                   lambda: { // LambdaAction
 *                     functionArn: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING" || "JSON", // required
 *                     },
 *                   },
 *                   iotEvents: { // IotEventsAction
 *                     inputName: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING" || "JSON", // required
 *                     },
 *                   },
 *                   sqs: { // SqsAction
 *                     queueUrl: "STRING_VALUE", // required
 *                     useBase64: true || false,
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING" || "JSON", // required
 *                     },
 *                   },
 *                   firehose: { // FirehoseAction
 *                     deliveryStreamName: "STRING_VALUE", // required
 *                     separator: "STRING_VALUE",
 *                     payload: "<Payload>",
 *                   },
 *                   dynamoDB: { // DynamoDBAction
 *                     hashKeyType: "STRING_VALUE",
 *                     hashKeyField: "STRING_VALUE", // required
 *                     hashKeyValue: "STRING_VALUE", // required
 *                     rangeKeyType: "STRING_VALUE",
 *                     rangeKeyField: "STRING_VALUE",
 *                     rangeKeyValue: "STRING_VALUE",
 *                     operation: "STRING_VALUE",
 *                     payloadField: "STRING_VALUE",
 *                     tableName: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   dynamoDBv2: { // DynamoDBv2Action
 *                     tableName: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   iotSiteWise: { // IotSiteWiseAction
 *                     entryId: "STRING_VALUE",
 *                     assetId: "STRING_VALUE",
 *                     propertyId: "STRING_VALUE",
 *                     propertyAlias: "STRING_VALUE",
 *                     propertyValue: { // AssetPropertyValue
 *                       value: { // AssetPropertyVariant
 *                         stringValue: "STRING_VALUE",
 *                         integerValue: "STRING_VALUE",
 *                         doubleValue: "STRING_VALUE",
 *                         booleanValue: "STRING_VALUE",
 *                       },
 *                       timestamp: { // AssetPropertyTimestamp
 *                         timeInSeconds: "STRING_VALUE", // required
 *                         offsetInNanos: "STRING_VALUE",
 *                       },
 *                       quality: "STRING_VALUE",
 *                     },
 *                   },
 *                 },
 *               ],
 *             },
 *           ],
 *           transitionEvents: [ // TransitionEvents
 *             { // TransitionEvent
 *               eventName: "STRING_VALUE", // required
 *               condition: "STRING_VALUE", // required
 *               actions: [
 *                 {
 *                   setVariable: {
 *                     variableName: "STRING_VALUE", // required
 *                     value: "STRING_VALUE", // required
 *                   },
 *                   sns: {
 *                     targetArn: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   iotTopicPublish: {
 *                     mqttTopic: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   setTimer: {
 *                     timerName: "STRING_VALUE", // required
 *                     seconds: Number("int"),
 *                     durationExpression: "STRING_VALUE",
 *                   },
 *                   clearTimer: {
 *                     timerName: "STRING_VALUE", // required
 *                   },
 *                   resetTimer: {
 *                     timerName: "STRING_VALUE", // required
 *                   },
 *                   lambda: {
 *                     functionArn: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   iotEvents: {
 *                     inputName: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   sqs: {
 *                     queueUrl: "STRING_VALUE", // required
 *                     useBase64: true || false,
 *                     payload: "<Payload>",
 *                   },
 *                   firehose: {
 *                     deliveryStreamName: "STRING_VALUE", // required
 *                     separator: "STRING_VALUE",
 *                     payload: "<Payload>",
 *                   },
 *                   dynamoDB: {
 *                     hashKeyType: "STRING_VALUE",
 *                     hashKeyField: "STRING_VALUE", // required
 *                     hashKeyValue: "STRING_VALUE", // required
 *                     rangeKeyType: "STRING_VALUE",
 *                     rangeKeyField: "STRING_VALUE",
 *                     rangeKeyValue: "STRING_VALUE",
 *                     operation: "STRING_VALUE",
 *                     payloadField: "STRING_VALUE",
 *                     tableName: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   dynamoDBv2: {
 *                     tableName: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   iotSiteWise: {
 *                     entryId: "STRING_VALUE",
 *                     assetId: "STRING_VALUE",
 *                     propertyId: "STRING_VALUE",
 *                     propertyAlias: "STRING_VALUE",
 *                     propertyValue: {
 *                       value: {
 *                         stringValue: "STRING_VALUE",
 *                         integerValue: "STRING_VALUE",
 *                         doubleValue: "STRING_VALUE",
 *                         booleanValue: "STRING_VALUE",
 *                       },
 *                       timestamp: {
 *                         timeInSeconds: "STRING_VALUE", // required
 *                         offsetInNanos: "STRING_VALUE",
 *                       },
 *                       quality: "STRING_VALUE",
 *                     },
 *                   },
 *                 },
 *               ],
 *               nextState: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         onEnter: { // OnEnterLifecycle
 *           events: [
 *             {
 *               eventName: "STRING_VALUE", // required
 *               condition: "STRING_VALUE",
 *               actions: [
 *                 {
 *                   setVariable: {
 *                     variableName: "STRING_VALUE", // required
 *                     value: "STRING_VALUE", // required
 *                   },
 *                   sns: {
 *                     targetArn: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   iotTopicPublish: {
 *                     mqttTopic: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   setTimer: {
 *                     timerName: "STRING_VALUE", // required
 *                     seconds: Number("int"),
 *                     durationExpression: "STRING_VALUE",
 *                   },
 *                   clearTimer: {
 *                     timerName: "STRING_VALUE", // required
 *                   },
 *                   resetTimer: {
 *                     timerName: "STRING_VALUE", // required
 *                   },
 *                   lambda: {
 *                     functionArn: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   iotEvents: {
 *                     inputName: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   sqs: {
 *                     queueUrl: "STRING_VALUE", // required
 *                     useBase64: true || false,
 *                     payload: "<Payload>",
 *                   },
 *                   firehose: {
 *                     deliveryStreamName: "STRING_VALUE", // required
 *                     separator: "STRING_VALUE",
 *                     payload: "<Payload>",
 *                   },
 *                   dynamoDB: {
 *                     hashKeyType: "STRING_VALUE",
 *                     hashKeyField: "STRING_VALUE", // required
 *                     hashKeyValue: "STRING_VALUE", // required
 *                     rangeKeyType: "STRING_VALUE",
 *                     rangeKeyField: "STRING_VALUE",
 *                     rangeKeyValue: "STRING_VALUE",
 *                     operation: "STRING_VALUE",
 *                     payloadField: "STRING_VALUE",
 *                     tableName: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   dynamoDBv2: {
 *                     tableName: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   iotSiteWise: {
 *                     entryId: "STRING_VALUE",
 *                     assetId: "STRING_VALUE",
 *                     propertyId: "STRING_VALUE",
 *                     propertyAlias: "STRING_VALUE",
 *                     propertyValue: {
 *                       value: {
 *                         stringValue: "STRING_VALUE",
 *                         integerValue: "STRING_VALUE",
 *                         doubleValue: "STRING_VALUE",
 *                         booleanValue: "STRING_VALUE",
 *                       },
 *                       timestamp: {
 *                         timeInSeconds: "STRING_VALUE", // required
 *                         offsetInNanos: "STRING_VALUE",
 *                       },
 *                       quality: "STRING_VALUE",
 *                     },
 *                   },
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         onExit: { // OnExitLifecycle
 *           events: [
 *             {
 *               eventName: "STRING_VALUE", // required
 *               condition: "STRING_VALUE",
 *               actions: [
 *                 {
 *                   setVariable: {
 *                     variableName: "STRING_VALUE", // required
 *                     value: "STRING_VALUE", // required
 *                   },
 *                   sns: {
 *                     targetArn: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   iotTopicPublish: {
 *                     mqttTopic: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   setTimer: {
 *                     timerName: "STRING_VALUE", // required
 *                     seconds: Number("int"),
 *                     durationExpression: "STRING_VALUE",
 *                   },
 *                   clearTimer: {
 *                     timerName: "STRING_VALUE", // required
 *                   },
 *                   resetTimer: {
 *                     timerName: "STRING_VALUE", // required
 *                   },
 *                   lambda: {
 *                     functionArn: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   iotEvents: {
 *                     inputName: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   sqs: {
 *                     queueUrl: "STRING_VALUE", // required
 *                     useBase64: true || false,
 *                     payload: "<Payload>",
 *                   },
 *                   firehose: {
 *                     deliveryStreamName: "STRING_VALUE", // required
 *                     separator: "STRING_VALUE",
 *                     payload: "<Payload>",
 *                   },
 *                   dynamoDB: {
 *                     hashKeyType: "STRING_VALUE",
 *                     hashKeyField: "STRING_VALUE", // required
 *                     hashKeyValue: "STRING_VALUE", // required
 *                     rangeKeyType: "STRING_VALUE",
 *                     rangeKeyField: "STRING_VALUE",
 *                     rangeKeyValue: "STRING_VALUE",
 *                     operation: "STRING_VALUE",
 *                     payloadField: "STRING_VALUE",
 *                     tableName: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   dynamoDBv2: {
 *                     tableName: "STRING_VALUE", // required
 *                     payload: "<Payload>",
 *                   },
 *                   iotSiteWise: {
 *                     entryId: "STRING_VALUE",
 *                     assetId: "STRING_VALUE",
 *                     propertyId: "STRING_VALUE",
 *                     propertyAlias: "STRING_VALUE",
 *                     propertyValue: {
 *                       value: {
 *                         stringValue: "STRING_VALUE",
 *                         integerValue: "STRING_VALUE",
 *                         doubleValue: "STRING_VALUE",
 *                         booleanValue: "STRING_VALUE",
 *                       },
 *                       timestamp: {
 *                         timeInSeconds: "STRING_VALUE", // required
 *                         offsetInNanos: "STRING_VALUE",
 *                       },
 *                       quality: "STRING_VALUE",
 *                     },
 *                   },
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *     initialStateName: "STRING_VALUE", // required
 *   },
 *   detectorModelDescription: "STRING_VALUE",
 *   key: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   evaluationMethod: "BATCH" || "SERIAL",
 * };
 * const command = new CreateDetectorModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateDetectorModelResponse
 * //   detectorModelConfiguration: { // DetectorModelConfiguration
 * //     detectorModelName: "STRING_VALUE",
 * //     detectorModelVersion: "STRING_VALUE",
 * //     detectorModelDescription: "STRING_VALUE",
 * //     detectorModelArn: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //     status: "ACTIVE" || "ACTIVATING" || "INACTIVE" || "DEPRECATED" || "DRAFT" || "PAUSED" || "FAILED",
 * //     key: "STRING_VALUE",
 * //     evaluationMethod: "BATCH" || "SERIAL",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDetectorModelCommandInput - {@link CreateDetectorModelCommandInput}
 * @returns {@link CreateDetectorModelCommandOutput}
 * @see {@link CreateDetectorModelCommandInput} for command's `input` shape.
 * @see {@link CreateDetectorModelCommandOutput} for command's `response` shape.
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
export class CreateDetectorModelCommand extends $Command
  .classBuilder<
    CreateDetectorModelCommandInput,
    CreateDetectorModelCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboService", "CreateDetectorModel", {})
  .n("IoTEventsClient", "CreateDetectorModelCommand")
  .sc(CreateDetectorModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDetectorModelRequest;
      output: CreateDetectorModelResponse;
    };
    sdk: {
      input: CreateDetectorModelCommandInput;
      output: CreateDetectorModelCommandOutput;
    };
  };
}
