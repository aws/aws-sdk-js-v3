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

import { UpdateJourneyRequest, UpdateJourneyResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_UpdateJourneyCommand, se_UpdateJourneyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateJourneyCommand}.
 */
export interface UpdateJourneyCommandInput extends UpdateJourneyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJourneyCommand}.
 */
export interface UpdateJourneyCommandOutput extends UpdateJourneyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the configuration and other settings for a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateJourneyCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateJourneyCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // UpdateJourneyRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   JourneyId: "STRING_VALUE", // required
 *   WriteJourneyRequest: { // WriteJourneyRequest
 *     Activities: { // MapOfActivity
 *       "<keys>": { // Activity
 *         CUSTOM: { // CustomMessageActivity
 *           DeliveryUri: "STRING_VALUE",
 *           EndpointTypes: [ // ListOf__EndpointTypesElement
 *             "PUSH" || "GCM" || "APNS" || "APNS_SANDBOX" || "APNS_VOIP" || "APNS_VOIP_SANDBOX" || "ADM" || "SMS" || "VOICE" || "EMAIL" || "BAIDU" || "CUSTOM" || "IN_APP",
 *           ],
 *           MessageConfig: { // JourneyCustomMessage
 *             Data: "STRING_VALUE",
 *           },
 *           NextActivity: "STRING_VALUE",
 *           TemplateName: "STRING_VALUE",
 *           TemplateVersion: "STRING_VALUE",
 *         },
 *         ConditionalSplit: { // ConditionalSplitActivity
 *           Condition: { // Condition
 *             Conditions: [ // ListOfSimpleCondition
 *               { // SimpleCondition
 *                 EventCondition: { // EventCondition
 *                   Dimensions: { // EventDimensions
 *                     Attributes: { // MapOfAttributeDimension
 *                       "<keys>": { // AttributeDimension
 *                         AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *                         Values: [ // ListOf__string // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                     },
 *                     EventType: { // SetDimension
 *                       DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     Metrics: { // MapOfMetricDimension
 *                       "<keys>": { // MetricDimension
 *                         ComparisonOperator: "STRING_VALUE", // required
 *                         Value: Number("double"), // required
 *                       },
 *                     },
 *                   },
 *                   MessageActivity: "STRING_VALUE",
 *                 },
 *                 SegmentCondition: { // SegmentCondition
 *                   SegmentId: "STRING_VALUE", // required
 *                 },
 *                 SegmentDimensions: { // SegmentDimensions
 *                   Attributes: {
 *                     "<keys>": {
 *                       AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                   },
 *                   Behavior: { // SegmentBehaviors
 *                     Recency: { // RecencyDimension
 *                       Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 *                       RecencyType: "ACTIVE" || "INACTIVE", // required
 *                     },
 *                   },
 *                   Demographic: { // SegmentDemographics
 *                     AppVersion: {
 *                       DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     Channel: {
 *                       DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     DeviceType: {
 *                       DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *                       Values: "<ListOf__string>", // required
 *                     },
 *                     Make: {
 *                       DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *                       Values: "<ListOf__string>", // required
 *                     },
 *                     Model: "<SetDimension>",
 *                     Platform: "<SetDimension>",
 *                   },
 *                   Location: { // SegmentLocation
 *                     Country: "<SetDimension>",
 *                     GPSPoint: { // GPSPointDimension
 *                       Coordinates: { // GPSCoordinates
 *                         Latitude: Number("double"), // required
 *                         Longitude: Number("double"), // required
 *                       },
 *                       RangeInKilometers: Number("double"),
 *                     },
 *                   },
 *                   Metrics: {
 *                     "<keys>": {
 *                       ComparisonOperator: "STRING_VALUE", // required
 *                       Value: Number("double"), // required
 *                     },
 *                   },
 *                   UserAttributes: {
 *                     "<keys>": {
 *                       AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *                       Values: "<ListOf__string>", // required
 *                     },
 *                   },
 *                 },
 *               },
 *             ],
 *             Operator: "ALL" || "ANY",
 *           },
 *           EvaluationWaitTime: { // WaitTime
 *             WaitFor: "STRING_VALUE",
 *             WaitUntil: "STRING_VALUE",
 *           },
 *           FalseActivity: "STRING_VALUE",
 *           TrueActivity: "STRING_VALUE",
 *         },
 *         Description: "STRING_VALUE",
 *         EMAIL: { // EmailMessageActivity
 *           MessageConfig: { // JourneyEmailMessage
 *             FromAddress: "STRING_VALUE",
 *           },
 *           NextActivity: "STRING_VALUE",
 *           TemplateName: "STRING_VALUE",
 *           TemplateVersion: "STRING_VALUE",
 *         },
 *         Holdout: { // HoldoutActivity
 *           NextActivity: "STRING_VALUE",
 *           Percentage: Number("int"), // required
 *         },
 *         MultiCondition: { // MultiConditionalSplitActivity
 *           Branches: [ // ListOfMultiConditionalBranch
 *             { // MultiConditionalBranch
 *               Condition: {
 *                 EventCondition: {
 *                   Dimensions: {
 *                     Attributes: {
 *                       "<keys>": {
 *                         AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *                         Values: "<ListOf__string>", // required
 *                       },
 *                     },
 *                     EventType: "<SetDimension>",
 *                     Metrics: {
 *                       "<keys>": {
 *                         ComparisonOperator: "STRING_VALUE", // required
 *                         Value: Number("double"), // required
 *                       },
 *                     },
 *                   },
 *                   MessageActivity: "STRING_VALUE",
 *                 },
 *                 SegmentCondition: {
 *                   SegmentId: "STRING_VALUE", // required
 *                 },
 *                 SegmentDimensions: {
 *                   Attributes: {
 *                     "<keys>": {
 *                       AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *                       Values: "<ListOf__string>", // required
 *                     },
 *                   },
 *                   Behavior: {
 *                     Recency: {
 *                       Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 *                       RecencyType: "ACTIVE" || "INACTIVE", // required
 *                     },
 *                   },
 *                   Demographic: {
 *                     AppVersion: "<SetDimension>",
 *                     Channel: "<SetDimension>",
 *                     DeviceType: "<SetDimension>",
 *                     Make: "<SetDimension>",
 *                     Model: "<SetDimension>",
 *                     Platform: "<SetDimension>",
 *                   },
 *                   Location: {
 *                     Country: "<SetDimension>",
 *                     GPSPoint: {
 *                       Coordinates: {
 *                         Latitude: Number("double"), // required
 *                         Longitude: Number("double"), // required
 *                       },
 *                       RangeInKilometers: Number("double"),
 *                     },
 *                   },
 *                   Metrics: {
 *                     "<keys>": {
 *                       ComparisonOperator: "STRING_VALUE", // required
 *                       Value: Number("double"), // required
 *                     },
 *                   },
 *                   UserAttributes: "<MapOfAttributeDimension>",
 *                 },
 *               },
 *               NextActivity: "STRING_VALUE",
 *             },
 *           ],
 *           DefaultActivity: "STRING_VALUE",
 *           EvaluationWaitTime: {
 *             WaitFor: "STRING_VALUE",
 *             WaitUntil: "STRING_VALUE",
 *           },
 *         },
 *         PUSH: { // PushMessageActivity
 *           MessageConfig: { // JourneyPushMessage
 *             TimeToLive: "STRING_VALUE",
 *           },
 *           NextActivity: "STRING_VALUE",
 *           TemplateName: "STRING_VALUE",
 *           TemplateVersion: "STRING_VALUE",
 *         },
 *         RandomSplit: { // RandomSplitActivity
 *           Branches: [ // ListOfRandomSplitEntry
 *             { // RandomSplitEntry
 *               NextActivity: "STRING_VALUE",
 *               Percentage: Number("int"),
 *             },
 *           ],
 *         },
 *         SMS: { // SMSMessageActivity
 *           MessageConfig: { // JourneySMSMessage
 *             MessageType: "TRANSACTIONAL" || "PROMOTIONAL",
 *             OriginationNumber: "STRING_VALUE",
 *             SenderId: "STRING_VALUE",
 *             EntityId: "STRING_VALUE",
 *             TemplateId: "STRING_VALUE",
 *           },
 *           NextActivity: "STRING_VALUE",
 *           TemplateName: "STRING_VALUE",
 *           TemplateVersion: "STRING_VALUE",
 *         },
 *         Wait: { // WaitActivity
 *           NextActivity: "STRING_VALUE",
 *           WaitTime: {
 *             WaitFor: "STRING_VALUE",
 *             WaitUntil: "STRING_VALUE",
 *           },
 *         },
 *         ContactCenter: { // ContactCenterActivity
 *           NextActivity: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     CreationDate: "STRING_VALUE",
 *     LastModifiedDate: "STRING_VALUE",
 *     Limits: { // JourneyLimits
 *       DailyCap: Number("int"),
 *       EndpointReentryCap: Number("int"),
 *       MessagesPerSecond: Number("int"),
 *       EndpointReentryInterval: "STRING_VALUE",
 *     },
 *     LocalTime: true || false,
 *     Name: "STRING_VALUE", // required
 *     QuietTime: { // QuietTime
 *       End: "STRING_VALUE",
 *       Start: "STRING_VALUE",
 *     },
 *     RefreshFrequency: "STRING_VALUE",
 *     Schedule: { // JourneySchedule
 *       EndTime: new Date("TIMESTAMP"),
 *       StartTime: new Date("TIMESTAMP"),
 *       Timezone: "STRING_VALUE",
 *     },
 *     StartActivity: "STRING_VALUE",
 *     StartCondition: { // StartCondition
 *       Description: "STRING_VALUE",
 *       EventStartCondition: { // EventStartCondition
 *         EventFilter: { // EventFilter
 *           Dimensions: {
 *             Attributes: "<MapOfAttributeDimension>",
 *             EventType: "<SetDimension>",
 *             Metrics: "<MapOfMetricDimension>",
 *           },
 *           FilterType: "SYSTEM" || "ENDPOINT", // required
 *         },
 *         SegmentId: "STRING_VALUE",
 *       },
 *       SegmentStartCondition: {
 *         SegmentId: "STRING_VALUE", // required
 *       },
 *     },
 *     State: "DRAFT" || "ACTIVE" || "COMPLETED" || "CANCELLED" || "CLOSED" || "PAUSED",
 *     WaitForQuietTime: true || false,
 *     RefreshOnSegmentUpdate: true || false,
 *     JourneyChannelSettings: { // JourneyChannelSettings
 *       ConnectCampaignArn: "STRING_VALUE",
 *       ConnectCampaignExecutionRoleArn: "STRING_VALUE",
 *     },
 *     SendingSchedule: true || false,
 *     OpenHours: { // OpenHours
 *       EMAIL: { // MapOfListOfOpenHoursRules
 *         "<keys>": [ // ListOfOpenHoursRules
 *           { // OpenHoursRule
 *             StartTime: "STRING_VALUE",
 *             EndTime: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       SMS: {
 *         "<keys>": [
 *           {
 *             StartTime: "STRING_VALUE",
 *             EndTime: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       PUSH: {
 *         "<keys>": [
 *           {
 *             StartTime: "STRING_VALUE",
 *             EndTime: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       VOICE: {
 *         "<keys>": [
 *           {
 *             StartTime: "STRING_VALUE",
 *             EndTime: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       CUSTOM: {
 *         "<keys>": [
 *           {
 *             StartTime: "STRING_VALUE",
 *             EndTime: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     },
 *     ClosedDays: { // ClosedDays
 *       EMAIL: [ // ListOfClosedDaysRules
 *         { // ClosedDaysRule
 *           Name: "STRING_VALUE",
 *           StartDateTime: "STRING_VALUE",
 *           EndDateTime: "STRING_VALUE",
 *         },
 *       ],
 *       SMS: [
 *         {
 *           Name: "STRING_VALUE",
 *           StartDateTime: "STRING_VALUE",
 *           EndDateTime: "STRING_VALUE",
 *         },
 *       ],
 *       PUSH: [
 *         {
 *           Name: "STRING_VALUE",
 *           StartDateTime: "STRING_VALUE",
 *           EndDateTime: "STRING_VALUE",
 *         },
 *       ],
 *       VOICE: [
 *         {
 *           Name: "STRING_VALUE",
 *           StartDateTime: "STRING_VALUE",
 *           EndDateTime: "STRING_VALUE",
 *         },
 *       ],
 *       CUSTOM: [
 *         {
 *           Name: "STRING_VALUE",
 *           StartDateTime: "STRING_VALUE",
 *           EndDateTime: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     TimezoneEstimationMethods: [ // ListOf__TimezoneEstimationMethodsElement
 *       "PHONE_NUMBER" || "POSTAL_CODE",
 *     ],
 *   },
 * };
 * const command = new UpdateJourneyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateJourneyResponse
 * //   JourneyResponse: { // JourneyResponse
 * //     Activities: { // MapOfActivity
 * //       "<keys>": { // Activity
 * //         CUSTOM: { // CustomMessageActivity
 * //           DeliveryUri: "STRING_VALUE",
 * //           EndpointTypes: [ // ListOf__EndpointTypesElement
 * //             "PUSH" || "GCM" || "APNS" || "APNS_SANDBOX" || "APNS_VOIP" || "APNS_VOIP_SANDBOX" || "ADM" || "SMS" || "VOICE" || "EMAIL" || "BAIDU" || "CUSTOM" || "IN_APP",
 * //           ],
 * //           MessageConfig: { // JourneyCustomMessage
 * //             Data: "STRING_VALUE",
 * //           },
 * //           NextActivity: "STRING_VALUE",
 * //           TemplateName: "STRING_VALUE",
 * //           TemplateVersion: "STRING_VALUE",
 * //         },
 * //         ConditionalSplit: { // ConditionalSplitActivity
 * //           Condition: { // Condition
 * //             Conditions: [ // ListOfSimpleCondition
 * //               { // SimpleCondition
 * //                 EventCondition: { // EventCondition
 * //                   Dimensions: { // EventDimensions
 * //                     Attributes: { // MapOfAttributeDimension
 * //                       "<keys>": { // AttributeDimension
 * //                         AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                         Values: [ // ListOf__string // required
 * //                           "STRING_VALUE",
 * //                         ],
 * //                       },
 * //                     },
 * //                     EventType: { // SetDimension
 * //                       DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //                       Values: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     Metrics: { // MapOfMetricDimension
 * //                       "<keys>": { // MetricDimension
 * //                         ComparisonOperator: "STRING_VALUE", // required
 * //                         Value: Number("double"), // required
 * //                       },
 * //                     },
 * //                   },
 * //                   MessageActivity: "STRING_VALUE",
 * //                 },
 * //                 SegmentCondition: { // SegmentCondition
 * //                   SegmentId: "STRING_VALUE", // required
 * //                 },
 * //                 SegmentDimensions: { // SegmentDimensions
 * //                   Attributes: {
 * //                     "<keys>": {
 * //                       AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                       Values: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   },
 * //                   Behavior: { // SegmentBehaviors
 * //                     Recency: { // RecencyDimension
 * //                       Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 * //                       RecencyType: "ACTIVE" || "INACTIVE", // required
 * //                     },
 * //                   },
 * //                   Demographic: { // SegmentDemographics
 * //                     AppVersion: {
 * //                       DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //                       Values: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     Channel: {
 * //                       DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //                       Values: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     DeviceType: {
 * //                       DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //                       Values: "<ListOf__string>", // required
 * //                     },
 * //                     Make: {
 * //                       DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //                       Values: "<ListOf__string>", // required
 * //                     },
 * //                     Model: "<SetDimension>",
 * //                     Platform: "<SetDimension>",
 * //                   },
 * //                   Location: { // SegmentLocation
 * //                     Country: "<SetDimension>",
 * //                     GPSPoint: { // GPSPointDimension
 * //                       Coordinates: { // GPSCoordinates
 * //                         Latitude: Number("double"), // required
 * //                         Longitude: Number("double"), // required
 * //                       },
 * //                       RangeInKilometers: Number("double"),
 * //                     },
 * //                   },
 * //                   Metrics: {
 * //                     "<keys>": {
 * //                       ComparisonOperator: "STRING_VALUE", // required
 * //                       Value: Number("double"), // required
 * //                     },
 * //                   },
 * //                   UserAttributes: {
 * //                     "<keys>": {
 * //                       AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                       Values: "<ListOf__string>", // required
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             Operator: "ALL" || "ANY",
 * //           },
 * //           EvaluationWaitTime: { // WaitTime
 * //             WaitFor: "STRING_VALUE",
 * //             WaitUntil: "STRING_VALUE",
 * //           },
 * //           FalseActivity: "STRING_VALUE",
 * //           TrueActivity: "STRING_VALUE",
 * //         },
 * //         Description: "STRING_VALUE",
 * //         EMAIL: { // EmailMessageActivity
 * //           MessageConfig: { // JourneyEmailMessage
 * //             FromAddress: "STRING_VALUE",
 * //           },
 * //           NextActivity: "STRING_VALUE",
 * //           TemplateName: "STRING_VALUE",
 * //           TemplateVersion: "STRING_VALUE",
 * //         },
 * //         Holdout: { // HoldoutActivity
 * //           NextActivity: "STRING_VALUE",
 * //           Percentage: Number("int"), // required
 * //         },
 * //         MultiCondition: { // MultiConditionalSplitActivity
 * //           Branches: [ // ListOfMultiConditionalBranch
 * //             { // MultiConditionalBranch
 * //               Condition: {
 * //                 EventCondition: {
 * //                   Dimensions: {
 * //                     Attributes: {
 * //                       "<keys>": {
 * //                         AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                         Values: "<ListOf__string>", // required
 * //                       },
 * //                     },
 * //                     EventType: "<SetDimension>",
 * //                     Metrics: {
 * //                       "<keys>": {
 * //                         ComparisonOperator: "STRING_VALUE", // required
 * //                         Value: Number("double"), // required
 * //                       },
 * //                     },
 * //                   },
 * //                   MessageActivity: "STRING_VALUE",
 * //                 },
 * //                 SegmentCondition: {
 * //                   SegmentId: "STRING_VALUE", // required
 * //                 },
 * //                 SegmentDimensions: {
 * //                   Attributes: {
 * //                     "<keys>": {
 * //                       AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                       Values: "<ListOf__string>", // required
 * //                     },
 * //                   },
 * //                   Behavior: {
 * //                     Recency: {
 * //                       Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 * //                       RecencyType: "ACTIVE" || "INACTIVE", // required
 * //                     },
 * //                   },
 * //                   Demographic: {
 * //                     AppVersion: "<SetDimension>",
 * //                     Channel: "<SetDimension>",
 * //                     DeviceType: "<SetDimension>",
 * //                     Make: "<SetDimension>",
 * //                     Model: "<SetDimension>",
 * //                     Platform: "<SetDimension>",
 * //                   },
 * //                   Location: {
 * //                     Country: "<SetDimension>",
 * //                     GPSPoint: {
 * //                       Coordinates: {
 * //                         Latitude: Number("double"), // required
 * //                         Longitude: Number("double"), // required
 * //                       },
 * //                       RangeInKilometers: Number("double"),
 * //                     },
 * //                   },
 * //                   Metrics: {
 * //                     "<keys>": {
 * //                       ComparisonOperator: "STRING_VALUE", // required
 * //                       Value: Number("double"), // required
 * //                     },
 * //                   },
 * //                   UserAttributes: "<MapOfAttributeDimension>",
 * //                 },
 * //               },
 * //               NextActivity: "STRING_VALUE",
 * //             },
 * //           ],
 * //           DefaultActivity: "STRING_VALUE",
 * //           EvaluationWaitTime: {
 * //             WaitFor: "STRING_VALUE",
 * //             WaitUntil: "STRING_VALUE",
 * //           },
 * //         },
 * //         PUSH: { // PushMessageActivity
 * //           MessageConfig: { // JourneyPushMessage
 * //             TimeToLive: "STRING_VALUE",
 * //           },
 * //           NextActivity: "STRING_VALUE",
 * //           TemplateName: "STRING_VALUE",
 * //           TemplateVersion: "STRING_VALUE",
 * //         },
 * //         RandomSplit: { // RandomSplitActivity
 * //           Branches: [ // ListOfRandomSplitEntry
 * //             { // RandomSplitEntry
 * //               NextActivity: "STRING_VALUE",
 * //               Percentage: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         SMS: { // SMSMessageActivity
 * //           MessageConfig: { // JourneySMSMessage
 * //             MessageType: "TRANSACTIONAL" || "PROMOTIONAL",
 * //             OriginationNumber: "STRING_VALUE",
 * //             SenderId: "STRING_VALUE",
 * //             EntityId: "STRING_VALUE",
 * //             TemplateId: "STRING_VALUE",
 * //           },
 * //           NextActivity: "STRING_VALUE",
 * //           TemplateName: "STRING_VALUE",
 * //           TemplateVersion: "STRING_VALUE",
 * //         },
 * //         Wait: { // WaitActivity
 * //           NextActivity: "STRING_VALUE",
 * //           WaitTime: {
 * //             WaitFor: "STRING_VALUE",
 * //             WaitUntil: "STRING_VALUE",
 * //           },
 * //         },
 * //         ContactCenter: { // ContactCenterActivity
 * //           NextActivity: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     ApplicationId: "STRING_VALUE", // required
 * //     CreationDate: "STRING_VALUE",
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Limits: { // JourneyLimits
 * //       DailyCap: Number("int"),
 * //       EndpointReentryCap: Number("int"),
 * //       MessagesPerSecond: Number("int"),
 * //       EndpointReentryInterval: "STRING_VALUE",
 * //     },
 * //     LocalTime: true || false,
 * //     Name: "STRING_VALUE", // required
 * //     QuietTime: { // QuietTime
 * //       End: "STRING_VALUE",
 * //       Start: "STRING_VALUE",
 * //     },
 * //     RefreshFrequency: "STRING_VALUE",
 * //     Schedule: { // JourneySchedule
 * //       EndTime: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       Timezone: "STRING_VALUE",
 * //     },
 * //     StartActivity: "STRING_VALUE",
 * //     StartCondition: { // StartCondition
 * //       Description: "STRING_VALUE",
 * //       EventStartCondition: { // EventStartCondition
 * //         EventFilter: { // EventFilter
 * //           Dimensions: {
 * //             Attributes: "<MapOfAttributeDimension>",
 * //             EventType: "<SetDimension>",
 * //             Metrics: "<MapOfMetricDimension>",
 * //           },
 * //           FilterType: "SYSTEM" || "ENDPOINT", // required
 * //         },
 * //         SegmentId: "STRING_VALUE",
 * //       },
 * //       SegmentStartCondition: {
 * //         SegmentId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     State: "DRAFT" || "ACTIVE" || "COMPLETED" || "CANCELLED" || "CLOSED" || "PAUSED",
 * //     tags: { // MapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     WaitForQuietTime: true || false,
 * //     RefreshOnSegmentUpdate: true || false,
 * //     JourneyChannelSettings: { // JourneyChannelSettings
 * //       ConnectCampaignArn: "STRING_VALUE",
 * //       ConnectCampaignExecutionRoleArn: "STRING_VALUE",
 * //     },
 * //     SendingSchedule: true || false,
 * //     OpenHours: { // OpenHours
 * //       EMAIL: { // MapOfListOfOpenHoursRules
 * //         "<keys>": [ // ListOfOpenHoursRules
 * //           { // OpenHoursRule
 * //             StartTime: "STRING_VALUE",
 * //             EndTime: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       SMS: {
 * //         "<keys>": [
 * //           {
 * //             StartTime: "STRING_VALUE",
 * //             EndTime: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       PUSH: {
 * //         "<keys>": [
 * //           {
 * //             StartTime: "STRING_VALUE",
 * //             EndTime: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       VOICE: {
 * //         "<keys>": [
 * //           {
 * //             StartTime: "STRING_VALUE",
 * //             EndTime: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       CUSTOM: {
 * //         "<keys>": [
 * //           {
 * //             StartTime: "STRING_VALUE",
 * //             EndTime: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     ClosedDays: { // ClosedDays
 * //       EMAIL: [ // ListOfClosedDaysRules
 * //         { // ClosedDaysRule
 * //           Name: "STRING_VALUE",
 * //           StartDateTime: "STRING_VALUE",
 * //           EndDateTime: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SMS: [
 * //         {
 * //           Name: "STRING_VALUE",
 * //           StartDateTime: "STRING_VALUE",
 * //           EndDateTime: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PUSH: [
 * //         {
 * //           Name: "STRING_VALUE",
 * //           StartDateTime: "STRING_VALUE",
 * //           EndDateTime: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VOICE: [
 * //         {
 * //           Name: "STRING_VALUE",
 * //           StartDateTime: "STRING_VALUE",
 * //           EndDateTime: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CUSTOM: [
 * //         {
 * //           Name: "STRING_VALUE",
 * //           StartDateTime: "STRING_VALUE",
 * //           EndDateTime: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     TimezoneEstimationMethods: [ // ListOf__TimezoneEstimationMethodsElement
 * //       "PHONE_NUMBER" || "POSTAL_CODE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateJourneyCommandInput - {@link UpdateJourneyCommandInput}
 * @returns {@link UpdateJourneyCommandOutput}
 * @see {@link UpdateJourneyCommandInput} for command's `input` shape.
 * @see {@link UpdateJourneyCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class UpdateJourneyCommand extends $Command<
  UpdateJourneyCommandInput,
  UpdateJourneyCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: UpdateJourneyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJourneyCommandInput, UpdateJourneyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateJourneyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateJourneyCommand";
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
  private serialize(input: UpdateJourneyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateJourneyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateJourneyCommandOutput> {
    return de_UpdateJourneyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
