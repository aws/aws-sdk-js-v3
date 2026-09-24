// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSubscriberRequest, UpdateSubscriberResponse } from "../models/models_0";
import { UpdateSubscriber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSubscriberCommand}.
 */
export interface UpdateSubscriberCommandInput extends UpdateSubscriberRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSubscriberCommand}.
 */
export interface UpdateSubscriberCommandOutput extends UpdateSubscriberResponse, __MetadataBearer {}

/**
 * Updates a subscriber. Fields omitted from the request are left unchanged.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, UpdateSubscriberCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, UpdateSubscriberCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // UpdateSubscriberRequest
 *   SubscriberArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   State: "RUNNING" || "STOPPED",
 *   ResumePosition: "LAST_PROCESSED" || "LATEST",
 *   InvokeConfiguration: { // UpdateInvokeConfiguration
 *     RoleArn: "STRING_VALUE", // required
 *     LambdaParameters: { // LambdaParameters
 *       InvocationType: "EVENT" || "REQUEST_RESPONSE",
 *       Qualifier: "STRING_VALUE",
 *       DurableExecutionName: "STRING_VALUE",
 *       TenantId: "STRING_VALUE",
 *       InvocationTimeoutSeconds: "STRING_VALUE",
 *     },
 *     SqsParameters: { // SqsParameters
 *       MessageGroupId: "STRING_VALUE",
 *       MessageDeduplicationId: "STRING_VALUE",
 *       DelaySeconds: "STRING_VALUE",
 *       MessageAttributes: { // SqsMessageAttributeMap
 *         "<keys>": { // SqsMessageAttributeValue
 *           DataType: "STRING_VALUE",
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: "STRING_VALUE",
 *         },
 *       },
 *       MessageSystemAttributes: {
 *         "<keys>": {
 *           DataType: "STRING_VALUE",
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     SnsParameters: { // SnsParameters
 *       MessageGroupId: "STRING_VALUE",
 *       MessageDeduplicationId: "STRING_VALUE",
 *       Subject: "STRING_VALUE",
 *       MessageStructure: "STRING_VALUE",
 *       MessageAttributes: { // SnsMessageAttributeMap
 *         "<keys>": { // SnsMessageAttributeValue
 *           DataType: "STRING_VALUE",
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     KinesisParameters: { // KinesisParameters
 *       PartitionKey: "STRING_VALUE",
 *       ExplicitHashKey: "STRING_VALUE",
 *     },
 *     StepFunctionsParameters: { // StepFunctionsParameters
 *       InvocationType: "EVENT" || "REQUEST_RESPONSE",
 *       Name: "STRING_VALUE",
 *       TraceHeader: "STRING_VALUE",
 *       InvocationTimeoutSeconds: "STRING_VALUE",
 *     },
 *     HttpParameters: { // HttpParameters
 *       PathParameterValues: [ // PathParameterList
 *         "STRING_VALUE",
 *       ],
 *       HeaderParameters: { // HeaderParametersMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       QueryStringParameters: { // QueryStringParametersMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       InvocationTimeoutSeconds: "STRING_VALUE",
 *     },
 *     UniversalTargetParameters: { // UniversalTargetParameters
 *       Input: "STRING_VALUE", // required
 *       InvocationTimeoutSeconds: "STRING_VALUE",
 *     },
 *     EventBusV2Parameters: { // EventBusV2Parameters
 *       Metadata: { // EventBusV2MetadataMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       SystemMetadata: { // EventBusV2SystemMetadata
 *         EventGroupId: "STRING_VALUE",
 *         DeduplicationId: "STRING_VALUE",
 *       },
 *       DeduplicationConfiguration: { // DeduplicationConfiguration
 *         DeduplicationType: "CONTENT_BASED", // required
 *       },
 *     },
 *   },
 *   FilterConfiguration: { // FilterConfiguration
 *     Language: "EVENT_BRIDGE_PATTERN",
 *     Filters: [ // FilterList
 *       { // Filter
 *         Pattern: "STRING_VALUE", // required
 *         Scope: "DATA" || "METADATA" || "SYSTEM_METADATA", // required
 *       },
 *     ],
 *   },
 *   BatchConfiguration: { // BatchConfiguration
 *     MaxBatchSize: Number("int"),
 *     MaxBatchWindowInSeconds: Number("int"),
 *   },
 *   Transformer: { // Transformer
 *     Type: "RAW" || "WITH_METADATA" || "JSONATA",
 *     JsonataConfiguration: { // JsonataConfiguration
 *       Expression: "STRING_VALUE", // required
 *     },
 *   },
 *   RetryPolicy: { // RetryPolicy
 *     MaxRetryAttempts: Number("int"),
 *     MaxEventAgeInSeconds: Number("int"),
 *     RetryStrategy: "ALL",
 *   },
 *   OnFailureConfiguration: { // OnFailureConfiguration
 *     Arn: "STRING_VALUE",
 *   },
 *   LogConfiguration: { // LogConfiguration
 *     Level: "OFF" || "ERROR" || "INFO",
 *     IncludePayload: "FULL" || "ON_ERROR_ONLY",
 *   },
 * };
 * const command = new UpdateSubscriberCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSubscriberResponse
 * //   SubscriberArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   EventBusArn: "STRING_VALUE",
 * //   Type: "FIFO" || "UNORDERED",
 * //   StartingPosition: "LATEST" || "POINT_IN_TIME",
 * //   PointInTimeConfiguration: { // PointInTimeConfiguration
 * //     PointType: "HORIZON" || "TIMESTAMP", // required
 * //     StartingPoint: new Date("TIMESTAMP"),
 * //     EndPoint: new Date("TIMESTAMP"),
 * //   },
 * //   State: "RUNNING" || "STOPPED",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateSubscriberCommandInput - {@link UpdateSubscriberCommandInput}
 * @returns {@link UpdateSubscriberCommandOutput}
 * @see {@link UpdateSubscriberCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriberCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  Another change to the resource is already in progress. Retry the request.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  The resource is not in a state that allows the operation. For example, an
 * event bus that is still being created cannot accept events.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  The request would exceed a service quota for the account.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The resource does not exist.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller does not have the permissions required to perform the operation.
 * This error is also returned when the operation cannot use the AWS KMS key for
 * the event bus.
 *
 * @throws {@link InternalException} (server fault)
 *  The request failed because of an internal service error. Retry the request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  A request parameter is missing or not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled because it exceeds a request rate limit. Retry the
 * request with backoff.
 *
 * @throws {@link EventBridgeV2ServiceException}
 * <p>Base exception class for all service exceptions from EventBridgeV2 service.</p>
 *
 *
 * @public
 */
export class UpdateSubscriberCommand extends command<UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSubscriber",
  UpdateSubscriber$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSubscriberRequest;
      output: UpdateSubscriberResponse;
    };
    sdk: {
      input: UpdateSubscriberCommandInput;
      output: UpdateSubscriberCommandOutput;
    };
  };
}
