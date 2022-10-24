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

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import {
  DescribeEventBusRequest,
  DescribeEventBusRequestFilterSensitiveLog,
  DescribeEventBusResponse,
  DescribeEventBusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEventBusCommand,
  serializeAws_json1_1DescribeEventBusCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeEventBusCommandInput extends DescribeEventBusRequest {}
export interface DescribeEventBusCommandOutput extends DescribeEventBusResponse, __MetadataBearer {}

/**
 * <p>Displays details about an event bus in your account. This can include the external Amazon Web Services
 *       accounts that are permitted to write events to your default event bus, and the associated
 *       policy. For custom event buses and partner event buses, it displays the name, ARN, policy,
 *       state, and creation time.</p>
 *          <p> To enable your account to receive events from other accounts on its default event bus,
 *       use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p>
 *          <p>For more information about partner event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribeEventBusCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribeEventBusCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new DescribeEventBusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventBusCommandInput} for command's `input` shape.
 * @see {@link DescribeEventBusCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 */
export class DescribeEventBusCommand extends $Command<
  DescribeEventBusCommandInput,
  DescribeEventBusCommandOutput,
  CloudWatchEventsClientResolvedConfig
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

  constructor(readonly input: DescribeEventBusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventBusCommandInput, DescribeEventBusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventBusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "DescribeEventBusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventBusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeEventBusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventBusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventBusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventBusCommandOutput> {
    return deserializeAws_json1_1DescribeEventBusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
