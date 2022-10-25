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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  GetLoggingOptionsRequest,
  GetLoggingOptionsRequestFilterSensitiveLog,
  GetLoggingOptionsResponse,
  GetLoggingOptionsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1GetLoggingOptionsCommand,
  serializeAws_restJson1GetLoggingOptionsCommand,
} from "../protocols/Aws_restJson1";

export interface GetLoggingOptionsCommandInput extends GetLoggingOptionsRequest {}
export interface GetLoggingOptionsCommandOutput extends GetLoggingOptionsResponse, __MetadataBearer {}

/**
 * <p>Gets the logging options.</p>
 *          <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code>
 *          instead.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetLoggingOptions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetLoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetLoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link GetLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class GetLoggingOptionsCommand extends $Command<
  GetLoggingOptionsCommandInput,
  GetLoggingOptionsCommandOutput,
  IoTClientResolvedConfig
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

  constructor(readonly input: GetLoggingOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLoggingOptionsCommandInput, GetLoggingOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLoggingOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetLoggingOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLoggingOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLoggingOptionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLoggingOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLoggingOptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLoggingOptionsCommandOutput> {
    return deserializeAws_restJson1GetLoggingOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
