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

import {
  UpdateConfigurationSetEventDestinationRequest,
  UpdateConfigurationSetEventDestinationResponse,
} from "../models/models_0";
import { PinpointSMSVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointSMSVoiceClient";
import {
  de_UpdateConfigurationSetEventDestinationCommand,
  se_UpdateConfigurationSetEventDestinationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationSetEventDestinationCommand}.
 */
export interface UpdateConfigurationSetEventDestinationCommandInput
  extends UpdateConfigurationSetEventDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationSetEventDestinationCommand}.
 */
export interface UpdateConfigurationSetEventDestinationCommandOutput
  extends UpdateConfigurationSetEventDestinationResponse,
    __MetadataBearer {}

/**
 * @public
 * Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, UpdateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, UpdateConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const input = { // UpdateConfigurationSetEventDestinationRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   EventDestination: { // EventDestinationDefinition
 *     CloudWatchLogsDestination: { // CloudWatchLogsDestination
 *       IamRoleArn: "STRING_VALUE",
 *       LogGroupArn: "STRING_VALUE",
 *     },
 *     Enabled: true || false,
 *     KinesisFirehoseDestination: { // KinesisFirehoseDestination
 *       DeliveryStreamArn: "STRING_VALUE",
 *       IamRoleArn: "STRING_VALUE",
 *     },
 *     MatchingEventTypes: [ // EventTypes
 *       "STRING_VALUE",
 *     ],
 *     SnsDestination: { // SnsDestination
 *       TopicArn: "STRING_VALUE",
 *     },
 *   },
 *   EventDestinationName: "STRING_VALUE", // required
 * };
 * const command = new UpdateConfigurationSetEventDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConfigurationSetEventDestinationCommandInput - {@link UpdateConfigurationSetEventDestinationCommandInput}
 * @returns {@link UpdateConfigurationSetEventDestinationCommandOutput}
 * @see {@link UpdateConfigurationSetEventDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationSetEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for PinpointSMSVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The input you provided is invalid.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  You've issued too many requests to the resource. Wait a few minutes, and then try again.
 *
 * @throws {@link PinpointSMSVoiceServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoice service.</p>
 *
 */
export class UpdateConfigurationSetEventDestinationCommand extends $Command<
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
  PinpointSMSVoiceClientResolvedConfig
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
  constructor(readonly input: UpdateConfigurationSetEventDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConfigurationSetEventDestinationCommandInput, UpdateConfigurationSetEventDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConfigurationSetEventDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceClient";
    const commandName = "UpdateConfigurationSetEventDestinationCommand";
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
  private serialize(
    input: UpdateConfigurationSetEventDestinationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateConfigurationSetEventDestinationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConfigurationSetEventDestinationCommandOutput> {
    return de_UpdateConfigurationSetEventDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
