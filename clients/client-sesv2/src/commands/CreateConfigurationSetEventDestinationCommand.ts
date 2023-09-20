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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  CreateConfigurationSetEventDestinationRequest,
  CreateConfigurationSetEventDestinationResponse,
} from "../models/models_0";
import {
  de_CreateConfigurationSetEventDestinationCommand,
  se_CreateConfigurationSetEventDestinationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateConfigurationSetEventDestinationCommand}.
 */
export interface CreateConfigurationSetEventDestinationCommandInput
  extends CreateConfigurationSetEventDestinationRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationSetEventDestinationCommand}.
 */
export interface CreateConfigurationSetEventDestinationCommandOutput
  extends CreateConfigurationSetEventDestinationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Create an event destination. <i>Events</i> include message sends,
 *             deliveries, opens, clicks, bounces, and complaints. <i>Event
 *                 destinations</i> are places that you can send information about these events
 *             to. For example, you can send event data to Amazon SNS to receive notifications when you
 *             receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term
 *             storage.</p>
 *          <p>A single configuration set can include more than one event destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // CreateConfigurationSetEventDestinationRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   EventDestinationName: "STRING_VALUE", // required
 *   EventDestination: { // EventDestinationDefinition
 *     Enabled: true || false,
 *     MatchingEventTypes: [ // EventTypes
 *       "SEND" || "REJECT" || "BOUNCE" || "COMPLAINT" || "DELIVERY" || "OPEN" || "CLICK" || "RENDERING_FAILURE" || "DELIVERY_DELAY" || "SUBSCRIPTION",
 *     ],
 *     KinesisFirehoseDestination: { // KinesisFirehoseDestination
 *       IamRoleArn: "STRING_VALUE", // required
 *       DeliveryStreamArn: "STRING_VALUE", // required
 *     },
 *     CloudWatchDestination: { // CloudWatchDestination
 *       DimensionConfigurations: [ // CloudWatchDimensionConfigurations // required
 *         { // CloudWatchDimensionConfiguration
 *           DimensionName: "STRING_VALUE", // required
 *           DimensionValueSource: "MESSAGE_TAG" || "EMAIL_HEADER" || "LINK_TAG", // required
 *           DefaultDimensionValue: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     SnsDestination: { // SnsDestination
 *       TopicArn: "STRING_VALUE", // required
 *     },
 *     PinpointDestination: { // PinpointDestination
 *       ApplicationArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateConfigurationSetEventDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateConfigurationSetEventDestinationCommandInput - {@link CreateConfigurationSetEventDestinationCommandInput}
 * @returns {@link CreateConfigurationSetEventDestinationCommandOutput}
 * @see {@link CreateConfigurationSetEventDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationSetEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource specified in your request already exists.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class CreateConfigurationSetEventDestinationCommand extends $Command<
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: CreateConfigurationSetEventDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConfigurationSetEventDestinationCommandInput, CreateConfigurationSetEventDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConfigurationSetEventDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "CreateConfigurationSetEventDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService_v2",
        operation: "CreateConfigurationSetEventDestination",
      },
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
    input: CreateConfigurationSetEventDestinationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateConfigurationSetEventDestinationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput> {
    return de_CreateConfigurationSetEventDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
