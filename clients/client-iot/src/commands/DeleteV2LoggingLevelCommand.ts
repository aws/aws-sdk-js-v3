import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteV2LoggingLevelRequest } from "../models/models_1";
import {
  deserializeAws_restJson1DeleteV2LoggingLevelCommand,
  serializeAws_restJson1DeleteV2LoggingLevelCommand,
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

export interface DeleteV2LoggingLevelCommandInput extends DeleteV2LoggingLevelRequest {}
export interface DeleteV2LoggingLevelCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a logging level.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteV2LoggingLevel</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteV2LoggingLevelCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteV2LoggingLevelCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteV2LoggingLevelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteV2LoggingLevelCommandInput} for command's `input` shape.
 * @see {@link DeleteV2LoggingLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteV2LoggingLevelCommand extends $Command<
  DeleteV2LoggingLevelCommandInput,
  DeleteV2LoggingLevelCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteV2LoggingLevelCommandInput) {
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
  ): Handler<DeleteV2LoggingLevelCommandInput, DeleteV2LoggingLevelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteV2LoggingLevelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteV2LoggingLevelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteV2LoggingLevelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteV2LoggingLevelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteV2LoggingLevelCommandOutput> {
    return deserializeAws_restJson1DeleteV2LoggingLevelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
