// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { CreateTopicRuleRequest } from "../models/models_0";
import { CreateTopicRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTopicRuleCommand}.
 */
export interface CreateTopicRuleCommandInput extends CreateTopicRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateTopicRuleCommand}.
 */
export interface CreateTopicRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a rule. Creating rules is an administrator-level action. Any user who has
 *          permission to create rules will be able to access data processed by the rule.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRule</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateTopicRuleRequest
 *   ruleName: "STRING_VALUE", // required
 *   topicRulePayload: { // TopicRulePayload
 *     sql: "STRING_VALUE", // required
 *     description: "STRING_VALUE",
 *     actions: [ // ActionList // required
 *       { // Action
 *         dynamoDB: { // DynamoDBAction
 *           tableName: "STRING_VALUE", // required
 *           roleArn: "STRING_VALUE", // required
 *           operation: "STRING_VALUE",
 *           hashKeyField: "STRING_VALUE", // required
 *           hashKeyValue: "STRING_VALUE", // required
 *           hashKeyType: "STRING" || "NUMBER",
 *           rangeKeyField: "STRING_VALUE",
 *           rangeKeyValue: "STRING_VALUE",
 *           rangeKeyType: "STRING" || "NUMBER",
 *           payloadField: "STRING_VALUE",
 *         },
 *         dynamoDBv2: { // DynamoDBv2Action
 *           roleArn: "STRING_VALUE", // required
 *           putItem: { // PutItemInput
 *             tableName: "STRING_VALUE", // required
 *           },
 *         },
 *         lambda: { // LambdaAction
 *           functionArn: "STRING_VALUE", // required
 *         },
 *         sns: { // SnsAction
 *           targetArn: "STRING_VALUE", // required
 *           roleArn: "STRING_VALUE", // required
 *           messageFormat: "RAW" || "JSON",
 *         },
 *         sqs: { // SqsAction
 *           roleArn: "STRING_VALUE", // required
 *           queueUrl: "STRING_VALUE", // required
 *           useBase64: true || false,
 *         },
 *         kinesis: { // KinesisAction
 *           roleArn: "STRING_VALUE", // required
 *           streamName: "STRING_VALUE", // required
 *           partitionKey: "STRING_VALUE",
 *         },
 *         republish: { // RepublishAction
 *           roleArn: "STRING_VALUE", // required
 *           topic: "STRING_VALUE", // required
 *           qos: Number("int"),
 *           headers: { // MqttHeaders
 *             payloadFormatIndicator: "STRING_VALUE",
 *             contentType: "STRING_VALUE",
 *             responseTopic: "STRING_VALUE",
 *             correlationData: "STRING_VALUE",
 *             messageExpiry: "STRING_VALUE",
 *             userProperties: [ // UserProperties
 *               { // UserProperty
 *                 key: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *         s3: { // S3Action
 *           roleArn: "STRING_VALUE", // required
 *           bucketName: "STRING_VALUE", // required
 *           key: "STRING_VALUE", // required
 *           cannedAcl: "private" || "public-read" || "public-read-write" || "aws-exec-read" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control" || "log-delivery-write",
 *         },
 *         firehose: { // FirehoseAction
 *           roleArn: "STRING_VALUE", // required
 *           deliveryStreamName: "STRING_VALUE", // required
 *           separator: "STRING_VALUE",
 *           batchMode: true || false,
 *         },
 *         cloudwatchMetric: { // CloudwatchMetricAction
 *           roleArn: "STRING_VALUE", // required
 *           metricNamespace: "STRING_VALUE", // required
 *           metricName: "STRING_VALUE", // required
 *           metricValue: "STRING_VALUE", // required
 *           metricUnit: "STRING_VALUE", // required
 *           metricTimestamp: "STRING_VALUE",
 *         },
 *         cloudwatchAlarm: { // CloudwatchAlarmAction
 *           roleArn: "STRING_VALUE", // required
 *           alarmName: "STRING_VALUE", // required
 *           stateReason: "STRING_VALUE", // required
 *           stateValue: "STRING_VALUE", // required
 *         },
 *         cloudwatchLogs: { // CloudwatchLogsAction
 *           roleArn: "STRING_VALUE", // required
 *           logGroupName: "STRING_VALUE", // required
 *           batchMode: true || false,
 *         },
 *         elasticsearch: { // ElasticsearchAction
 *           roleArn: "STRING_VALUE", // required
 *           endpoint: "STRING_VALUE", // required
 *           index: "STRING_VALUE", // required
 *           type: "STRING_VALUE", // required
 *           id: "STRING_VALUE", // required
 *         },
 *         salesforce: { // SalesforceAction
 *           token: "STRING_VALUE", // required
 *           url: "STRING_VALUE", // required
 *         },
 *         iotAnalytics: { // IotAnalyticsAction
 *           channelArn: "STRING_VALUE",
 *           channelName: "STRING_VALUE",
 *           batchMode: true || false,
 *           roleArn: "STRING_VALUE",
 *         },
 *         iotEvents: { // IotEventsAction
 *           inputName: "STRING_VALUE", // required
 *           messageId: "STRING_VALUE",
 *           batchMode: true || false,
 *           roleArn: "STRING_VALUE", // required
 *         },
 *         iotSiteWise: { // IotSiteWiseAction
 *           putAssetPropertyValueEntries: [ // PutAssetPropertyValueEntryList // required
 *             { // PutAssetPropertyValueEntry
 *               entryId: "STRING_VALUE",
 *               assetId: "STRING_VALUE",
 *               propertyId: "STRING_VALUE",
 *               propertyAlias: "STRING_VALUE",
 *               propertyValues: [ // AssetPropertyValueList // required
 *                 { // AssetPropertyValue
 *                   value: { // AssetPropertyVariant Union: only one key present
 *                     stringValue: "STRING_VALUE",
 *                     integerValue: "STRING_VALUE",
 *                     doubleValue: "STRING_VALUE",
 *                     booleanValue: "STRING_VALUE",
 *                   },
 *                   timestamp: { // AssetPropertyTimestamp
 *                     timeInSeconds: "STRING_VALUE", // required
 *                     offsetInNanos: "STRING_VALUE",
 *                   },
 *                   quality: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *           roleArn: "STRING_VALUE", // required
 *         },
 *         stepFunctions: { // StepFunctionsAction
 *           executionNamePrefix: "STRING_VALUE",
 *           stateMachineName: "STRING_VALUE", // required
 *           roleArn: "STRING_VALUE", // required
 *         },
 *         timestream: { // TimestreamAction
 *           roleArn: "STRING_VALUE", // required
 *           databaseName: "STRING_VALUE", // required
 *           tableName: "STRING_VALUE", // required
 *           dimensions: [ // TimestreamDimensionList // required
 *             { // TimestreamDimension
 *               name: "STRING_VALUE", // required
 *               value: "STRING_VALUE", // required
 *             },
 *           ],
 *           timestamp: { // TimestreamTimestamp
 *             value: "STRING_VALUE", // required
 *             unit: "STRING_VALUE", // required
 *           },
 *         },
 *         http: { // HttpAction
 *           url: "STRING_VALUE", // required
 *           confirmationUrl: "STRING_VALUE",
 *           headers: [ // HeaderList
 *             { // HttpActionHeader
 *               key: "STRING_VALUE", // required
 *               value: "STRING_VALUE", // required
 *             },
 *           ],
 *           auth: { // HttpAuthorization
 *             sigv4: { // SigV4Authorization
 *               signingRegion: "STRING_VALUE", // required
 *               serviceName: "STRING_VALUE", // required
 *               roleArn: "STRING_VALUE", // required
 *             },
 *           },
 *           enableBatching: true || false,
 *           batchConfig: { // BatchConfig
 *             maxBatchOpenMs: Number("int"),
 *             maxBatchSize: Number("int"),
 *             maxBatchSizeBytes: Number("int"),
 *           },
 *         },
 *         kafka: { // KafkaAction
 *           destinationArn: "STRING_VALUE", // required
 *           topic: "STRING_VALUE", // required
 *           key: "STRING_VALUE",
 *           partition: "STRING_VALUE",
 *           clientProperties: { // ClientProperties // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *           headers: [ // KafkaHeaders
 *             { // KafkaActionHeader
 *               key: "STRING_VALUE", // required
 *               value: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         openSearch: { // OpenSearchAction
 *           roleArn: "STRING_VALUE", // required
 *           endpoint: "STRING_VALUE", // required
 *           index: "STRING_VALUE", // required
 *           type: "STRING_VALUE", // required
 *           id: "STRING_VALUE", // required
 *         },
 *         location: { // LocationAction
 *           roleArn: "STRING_VALUE", // required
 *           trackerName: "STRING_VALUE", // required
 *           deviceId: "STRING_VALUE", // required
 *           timestamp: { // LocationTimestamp
 *             value: "STRING_VALUE", // required
 *             unit: "STRING_VALUE",
 *           },
 *           latitude: "STRING_VALUE", // required
 *           longitude: "STRING_VALUE", // required
 *         },
 *       },
 *     ],
 *     ruleDisabled: true || false,
 *     awsIotSqlVersion: "STRING_VALUE",
 *     errorAction: {
 *       dynamoDB: {
 *         tableName: "STRING_VALUE", // required
 *         roleArn: "STRING_VALUE", // required
 *         operation: "STRING_VALUE",
 *         hashKeyField: "STRING_VALUE", // required
 *         hashKeyValue: "STRING_VALUE", // required
 *         hashKeyType: "STRING" || "NUMBER",
 *         rangeKeyField: "STRING_VALUE",
 *         rangeKeyValue: "STRING_VALUE",
 *         rangeKeyType: "STRING" || "NUMBER",
 *         payloadField: "STRING_VALUE",
 *       },
 *       dynamoDBv2: {
 *         roleArn: "STRING_VALUE", // required
 *         putItem: {
 *           tableName: "STRING_VALUE", // required
 *         },
 *       },
 *       lambda: {
 *         functionArn: "STRING_VALUE", // required
 *       },
 *       sns: {
 *         targetArn: "STRING_VALUE", // required
 *         roleArn: "STRING_VALUE", // required
 *         messageFormat: "RAW" || "JSON",
 *       },
 *       sqs: {
 *         roleArn: "STRING_VALUE", // required
 *         queueUrl: "STRING_VALUE", // required
 *         useBase64: true || false,
 *       },
 *       kinesis: {
 *         roleArn: "STRING_VALUE", // required
 *         streamName: "STRING_VALUE", // required
 *         partitionKey: "STRING_VALUE",
 *       },
 *       republish: {
 *         roleArn: "STRING_VALUE", // required
 *         topic: "STRING_VALUE", // required
 *         qos: Number("int"),
 *         headers: {
 *           payloadFormatIndicator: "STRING_VALUE",
 *           contentType: "STRING_VALUE",
 *           responseTopic: "STRING_VALUE",
 *           correlationData: "STRING_VALUE",
 *           messageExpiry: "STRING_VALUE",
 *           userProperties: [
 *             {
 *               key: "STRING_VALUE", // required
 *               value: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *       s3: {
 *         roleArn: "STRING_VALUE", // required
 *         bucketName: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         cannedAcl: "private" || "public-read" || "public-read-write" || "aws-exec-read" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control" || "log-delivery-write",
 *       },
 *       firehose: {
 *         roleArn: "STRING_VALUE", // required
 *         deliveryStreamName: "STRING_VALUE", // required
 *         separator: "STRING_VALUE",
 *         batchMode: true || false,
 *       },
 *       cloudwatchMetric: {
 *         roleArn: "STRING_VALUE", // required
 *         metricNamespace: "STRING_VALUE", // required
 *         metricName: "STRING_VALUE", // required
 *         metricValue: "STRING_VALUE", // required
 *         metricUnit: "STRING_VALUE", // required
 *         metricTimestamp: "STRING_VALUE",
 *       },
 *       cloudwatchAlarm: {
 *         roleArn: "STRING_VALUE", // required
 *         alarmName: "STRING_VALUE", // required
 *         stateReason: "STRING_VALUE", // required
 *         stateValue: "STRING_VALUE", // required
 *       },
 *       cloudwatchLogs: {
 *         roleArn: "STRING_VALUE", // required
 *         logGroupName: "STRING_VALUE", // required
 *         batchMode: true || false,
 *       },
 *       elasticsearch: {
 *         roleArn: "STRING_VALUE", // required
 *         endpoint: "STRING_VALUE", // required
 *         index: "STRING_VALUE", // required
 *         type: "STRING_VALUE", // required
 *         id: "STRING_VALUE", // required
 *       },
 *       salesforce: {
 *         token: "STRING_VALUE", // required
 *         url: "STRING_VALUE", // required
 *       },
 *       iotAnalytics: {
 *         channelArn: "STRING_VALUE",
 *         channelName: "STRING_VALUE",
 *         batchMode: true || false,
 *         roleArn: "STRING_VALUE",
 *       },
 *       iotEvents: {
 *         inputName: "STRING_VALUE", // required
 *         messageId: "STRING_VALUE",
 *         batchMode: true || false,
 *         roleArn: "STRING_VALUE", // required
 *       },
 *       iotSiteWise: {
 *         putAssetPropertyValueEntries: [ // required
 *           {
 *             entryId: "STRING_VALUE",
 *             assetId: "STRING_VALUE",
 *             propertyId: "STRING_VALUE",
 *             propertyAlias: "STRING_VALUE",
 *             propertyValues: [ // required
 *               {
 *                 value: {//  Union: only one key present
 *                   stringValue: "STRING_VALUE",
 *                   integerValue: "STRING_VALUE",
 *                   doubleValue: "STRING_VALUE",
 *                   booleanValue: "STRING_VALUE",
 *                 },
 *                 timestamp: {
 *                   timeInSeconds: "STRING_VALUE", // required
 *                   offsetInNanos: "STRING_VALUE",
 *                 },
 *                 quality: "STRING_VALUE",
 *               },
 *             ],
 *           },
 *         ],
 *         roleArn: "STRING_VALUE", // required
 *       },
 *       stepFunctions: {
 *         executionNamePrefix: "STRING_VALUE",
 *         stateMachineName: "STRING_VALUE", // required
 *         roleArn: "STRING_VALUE", // required
 *       },
 *       timestream: {
 *         roleArn: "STRING_VALUE", // required
 *         databaseName: "STRING_VALUE", // required
 *         tableName: "STRING_VALUE", // required
 *         dimensions: [ // required
 *           {
 *             name: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *         ],
 *         timestamp: {
 *           value: "STRING_VALUE", // required
 *           unit: "STRING_VALUE", // required
 *         },
 *       },
 *       http: {
 *         url: "STRING_VALUE", // required
 *         confirmationUrl: "STRING_VALUE",
 *         headers: [
 *           {
 *             key: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *         ],
 *         auth: {
 *           sigv4: {
 *             signingRegion: "STRING_VALUE", // required
 *             serviceName: "STRING_VALUE", // required
 *             roleArn: "STRING_VALUE", // required
 *           },
 *         },
 *         enableBatching: true || false,
 *         batchConfig: {
 *           maxBatchOpenMs: Number("int"),
 *           maxBatchSize: Number("int"),
 *           maxBatchSizeBytes: Number("int"),
 *         },
 *       },
 *       kafka: {
 *         destinationArn: "STRING_VALUE", // required
 *         topic: "STRING_VALUE", // required
 *         key: "STRING_VALUE",
 *         partition: "STRING_VALUE",
 *         clientProperties: { // required
 *           "<keys>": "STRING_VALUE",
 *         },
 *         headers: [
 *           {
 *             key: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       openSearch: {
 *         roleArn: "STRING_VALUE", // required
 *         endpoint: "STRING_VALUE", // required
 *         index: "STRING_VALUE", // required
 *         type: "STRING_VALUE", // required
 *         id: "STRING_VALUE", // required
 *       },
 *       location: {
 *         roleArn: "STRING_VALUE", // required
 *         trackerName: "STRING_VALUE", // required
 *         deviceId: "STRING_VALUE", // required
 *         timestamp: {
 *           value: "STRING_VALUE", // required
 *           unit: "STRING_VALUE",
 *         },
 *         latitude: "STRING_VALUE", // required
 *         longitude: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   tags: "STRING_VALUE",
 * };
 * const command = new CreateTopicRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateTopicRuleCommandInput - {@link CreateTopicRuleCommandInput}
 * @returns {@link CreateTopicRuleCommandOutput}
 * @see {@link CreateTopicRuleCommandInput} for command's `input` shape.
 * @see {@link CreateTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictingResourceUpdateException} (client fault)
 *  <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link SqlParseException} (client fault)
 *  <p>The Rule-SQL expression can't be parsed correctly.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class CreateTopicRuleCommand extends $Command
  .classBuilder<
    CreateTopicRuleCommandInput,
    CreateTopicRuleCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CreateTopicRule", {})
  .n("IoTClient", "CreateTopicRuleCommand")
  .sc(CreateTopicRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTopicRuleRequest;
      output: {};
    };
    sdk: {
      input: CreateTopicRuleCommandInput;
      output: CreateTopicRuleCommandOutput;
    };
  };
}
