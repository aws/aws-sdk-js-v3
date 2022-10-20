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

import {
  CreateAppMonitorRequest,
  CreateAppMonitorRequestFilterSensitiveLog,
  CreateAppMonitorResponse,
  CreateAppMonitorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateAppMonitorCommand,
  serializeAws_restJson1CreateAppMonitorCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

export interface CreateAppMonitorCommandInput extends CreateAppMonitorRequest {}
export interface CreateAppMonitorCommandOutput extends CreateAppMonitorResponse, __MetadataBearer {}

/**
 * <p>Creates a Amazon CloudWatch RUM app monitor, which collects telemetry data from your application and sends that
 *       data to RUM. The data includes performance and reliability information such as page load time, client-side errors,
 *       and user behavior.</p>
 *          <p>You use this operation only to create a new app monitor. To update an existing app monitor, use <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_UpdateAppMonitor.html">UpdateAppMonitor</a> instead.</p>
 *          <p>After you create an app monitor, sign in to the CloudWatch RUM console to get
 *          the JavaScript code snippet to add to your web application. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html">How do I find a code snippet
 *          that I've already generated?</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, CreateAppMonitorCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, CreateAppMonitorCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const command = new CreateAppMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppMonitorCommandInput} for command's `input` shape.
 * @see {@link CreateAppMonitorCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 */
export class CreateAppMonitorCommand extends $Command<
  CreateAppMonitorCommandInput,
  CreateAppMonitorCommandOutput,
  RUMClientResolvedConfig
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

  constructor(readonly input: CreateAppMonitorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAppMonitorCommandInput, CreateAppMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppMonitorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "CreateAppMonitorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAppMonitorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAppMonitorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAppMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAppMonitorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppMonitorCommandOutput> {
    return deserializeAws_restJson1CreateAppMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
