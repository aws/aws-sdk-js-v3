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

import { UpdateEventDestinationRequest, UpdateEventDestinationResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_UpdateEventDestinationCommand, se_UpdateEventDestinationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventDestinationCommand}.
 */
export interface UpdateEventDestinationCommandInput extends UpdateEventDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventDestinationCommand}.
 */
export interface UpdateEventDestinationCommandOutput extends UpdateEventDestinationResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing event destination in a configuration set. You can update the
 *                 IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can
 *             also enable or disable the event destination.</p>
 *         <p>You may want to update an event destination to change its matching event types or
 *             updating the destination resource ARN. You can't change an event destination's type
 *             between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, UpdateEventDestinationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, UpdateEventDestinationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // UpdateEventDestinationRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   EventDestinationName: "STRING_VALUE", // required
 *   Enabled: true || false,
 *   MatchingEventTypes: [ // EventTypeList
 *     "STRING_VALUE",
 *   ],
 *   CloudWatchLogsDestination: { // CloudWatchLogsDestination
 *     IamRoleArn: "STRING_VALUE", // required
 *     LogGroupArn: "STRING_VALUE", // required
 *   },
 *   KinesisFirehoseDestination: { // KinesisFirehoseDestination
 *     IamRoleArn: "STRING_VALUE", // required
 *     DeliveryStreamArn: "STRING_VALUE", // required
 *   },
 *   SnsDestination: { // SnsDestination
 *     TopicArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateEventDestinationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEventDestinationResult
 * //   ConfigurationSetArn: "STRING_VALUE",
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   EventDestination: { // EventDestination
 * //     EventDestinationName: "STRING_VALUE", // required
 * //     Enabled: true || false, // required
 * //     MatchingEventTypes: [ // EventTypeList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     CloudWatchLogsDestination: { // CloudWatchLogsDestination
 * //       IamRoleArn: "STRING_VALUE", // required
 * //       LogGroupArn: "STRING_VALUE", // required
 * //     },
 * //     KinesisFirehoseDestination: { // KinesisFirehoseDestination
 * //       IamRoleArn: "STRING_VALUE", // required
 * //       DeliveryStreamArn: "STRING_VALUE", // required
 * //     },
 * //     SnsDestination: { // SnsDestination
 * //       TopicArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEventDestinationCommandInput - {@link UpdateEventDestinationCommandInput}
 * @returns {@link UpdateEventDestinationCommandOutput}
 * @see {@link UpdateEventDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time or it could be that the
 *             requested action isn't valid for the current state or configuration of the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 */
export class UpdateEventDestinationCommand extends $Command<
  UpdateEventDestinationCommandInput,
  UpdateEventDestinationCommandOutput,
  PinpointSMSVoiceV2ClientResolvedConfig
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
  constructor(readonly input: UpdateEventDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEventDestinationCommandInput, UpdateEventDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEventDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "UpdateEventDestinationCommand";
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
  private serialize(input: UpdateEventDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateEventDestinationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEventDestinationCommandOutput> {
    return de_UpdateEventDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
