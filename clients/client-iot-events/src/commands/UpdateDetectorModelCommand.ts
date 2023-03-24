// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { UpdateDetectorModelRequest, UpdateDetectorModelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDetectorModelCommand,
  serializeAws_restJson1UpdateDetectorModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateDetectorModelCommand}.
 */
export interface UpdateDetectorModelCommandInput extends UpdateDetectorModelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDetectorModelCommand}.
 */
export interface UpdateDetectorModelCommandOutput extends UpdateDetectorModelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a detector model. Detectors (instances) spawned by the previous version are
 *       deleted and then re-created as new inputs arrive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, UpdateDetectorModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, UpdateDetectorModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const input = {
 *   detectorModelName: "STRING_VALUE", // required
 *   detectorModelDefinition: {
 *     states: [ // required
 *       {
 *         stateName: "STRING_VALUE", // required
 *         onInput: {
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
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   iotTopicPublish: {
 *                     mqttTopic: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
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
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   iotEvents: {
 *                     inputName: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   sqs: {
 *                     queueUrl: "STRING_VALUE", // required
 *                     useBase64: true || false,
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   firehose: {
 *                     deliveryStreamName: "STRING_VALUE", // required
 *                     separator: "STRING_VALUE",
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
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
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   dynamoDBv2: {
 *                     tableName: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
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
 *           transitionEvents: [
 *             {
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
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   iotTopicPublish: {
 *                     mqttTopic: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
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
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   iotEvents: {
 *                     inputName: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   sqs: {
 *                     queueUrl: "STRING_VALUE", // required
 *                     useBase64: true || false,
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   firehose: {
 *                     deliveryStreamName: "STRING_VALUE", // required
 *                     separator: "STRING_VALUE",
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
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
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   dynamoDBv2: {
 *                     tableName: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
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
 *         onEnter: {
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
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   iotTopicPublish: {
 *                     mqttTopic: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
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
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   iotEvents: {
 *                     inputName: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   sqs: {
 *                     queueUrl: "STRING_VALUE", // required
 *                     useBase64: true || false,
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   firehose: {
 *                     deliveryStreamName: "STRING_VALUE", // required
 *                     separator: "STRING_VALUE",
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
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
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   dynamoDBv2: {
 *                     tableName: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
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
 *         onExit: {
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
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   iotTopicPublish: {
 *                     mqttTopic: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
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
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   iotEvents: {
 *                     inputName: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   sqs: {
 *                     queueUrl: "STRING_VALUE", // required
 *                     useBase64: true || false,
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   firehose: {
 *                     deliveryStreamName: "STRING_VALUE", // required
 *                     separator: "STRING_VALUE",
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
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
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   dynamoDBv2: {
 *                     tableName: "STRING_VALUE", // required
 *                     payload: {
 *                       contentExpression: "STRING_VALUE", // required
 *                       type: "STRING_VALUE", // required
 *                     },
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
 *   roleArn: "STRING_VALUE", // required
 *   evaluationMethod: "STRING_VALUE",
 * };
 * const command = new UpdateDetectorModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateDetectorModelCommandInput - {@link UpdateDetectorModelCommandInput}
 * @returns {@link UpdateDetectorModelCommandOutput}
 * @see {@link UpdateDetectorModelCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorModelCommandOutput} for command's `response` shape.
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
 *
 */
export class UpdateDetectorModelCommand extends $Command<
  UpdateDetectorModelCommandInput,
  UpdateDetectorModelCommandOutput,
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
  constructor(readonly input: UpdateDetectorModelCommandInput) {
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
  ): Handler<UpdateDetectorModelCommandInput, UpdateDetectorModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDetectorModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "UpdateDetectorModelCommand";
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
  private serialize(input: UpdateDetectorModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDetectorModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDetectorModelCommandOutput> {
    return deserializeAws_restJson1UpdateDetectorModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
