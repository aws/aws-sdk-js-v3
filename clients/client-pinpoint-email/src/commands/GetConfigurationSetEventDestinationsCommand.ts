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
  GetConfigurationSetEventDestinationsRequest,
  GetConfigurationSetEventDestinationsResponse,
} from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  de_GetConfigurationSetEventDestinationsCommand,
  se_GetConfigurationSetEventDestinationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationSetEventDestinationsCommand}.
 */
export interface GetConfigurationSetEventDestinationsCommandInput extends GetConfigurationSetEventDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationSetEventDestinationsCommand}.
 */
export interface GetConfigurationSetEventDestinationsCommandOutput
  extends GetConfigurationSetEventDestinationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieve a list of event destinations that are associated with a configuration
 *             set.</p>
 *         <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens,
 *             clicks, bounces, and complaints. <i>Event destinations</i> are places that
 *             you can send information about these events to. For example, you can send event data to
 *             Amazon SNS to receive notifications when you receive bounces or complaints, or you can use
 *             Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetConfigurationSetEventDestinationsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetConfigurationSetEventDestinationsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = { // GetConfigurationSetEventDestinationsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 * };
 * const command = new GetConfigurationSetEventDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationSetEventDestinationsResponse
 * //   EventDestinations: [ // EventDestinations
 * //     { // EventDestination
 * //       Name: "STRING_VALUE", // required
 * //       Enabled: true || false,
 * //       MatchingEventTypes: [ // EventTypes // required
 * //         "SEND" || "REJECT" || "BOUNCE" || "COMPLAINT" || "DELIVERY" || "OPEN" || "CLICK" || "RENDERING_FAILURE",
 * //       ],
 * //       KinesisFirehoseDestination: { // KinesisFirehoseDestination
 * //         IamRoleArn: "STRING_VALUE", // required
 * //         DeliveryStreamArn: "STRING_VALUE", // required
 * //       },
 * //       CloudWatchDestination: { // CloudWatchDestination
 * //         DimensionConfigurations: [ // CloudWatchDimensionConfigurations // required
 * //           { // CloudWatchDimensionConfiguration
 * //             DimensionName: "STRING_VALUE", // required
 * //             DimensionValueSource: "MESSAGE_TAG" || "EMAIL_HEADER" || "LINK_TAG", // required
 * //             DefaultDimensionValue: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       SnsDestination: { // SnsDestination
 * //         TopicArn: "STRING_VALUE", // required
 * //       },
 * //       PinpointDestination: { // PinpointDestination
 * //         ApplicationArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetConfigurationSetEventDestinationsCommandInput - {@link GetConfigurationSetEventDestinationsCommandInput}
 * @returns {@link GetConfigurationSetEventDestinationsCommandOutput}
 * @see {@link GetConfigurationSetEventDestinationsCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationSetEventDestinationsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 */
export class GetConfigurationSetEventDestinationsCommand extends $Command<
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
  PinpointEmailClientResolvedConfig
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
  constructor(readonly input: GetConfigurationSetEventDestinationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfigurationSetEventDestinationsCommandInput, GetConfigurationSetEventDestinationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConfigurationSetEventDestinationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetConfigurationSetEventDestinationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPinpointEmailService",
        operation: "GetConfigurationSetEventDestinations",
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
    input: GetConfigurationSetEventDestinationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetConfigurationSetEventDestinationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput> {
    return de_GetConfigurationSetEventDestinationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
