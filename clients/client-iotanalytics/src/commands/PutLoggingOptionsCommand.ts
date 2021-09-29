import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { PutLoggingOptionsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutLoggingOptionsCommand,
  serializeAws_restJson1PutLoggingOptionsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface PutLoggingOptionsCommandInput extends PutLoggingOptionsRequest {}
export interface PutLoggingOptionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets or updates the IoT Analytics logging options.</p>
 *          <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one
 *       minute for the change to take effect. Also, if you change the policy attached to the role you
 *       specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it
 *       takes up to five minutes for that change to take effect. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, PutLoggingOptionsCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, PutLoggingOptionsCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new PutLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutLoggingOptionsCommand extends $Command<
  PutLoggingOptionsCommandInput,
  PutLoggingOptionsCommandOutput,
  IoTAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutLoggingOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "PutLoggingOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutLoggingOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutLoggingOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutLoggingOptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutLoggingOptionsCommandOutput> {
    return deserializeAws_restJson1PutLoggingOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
