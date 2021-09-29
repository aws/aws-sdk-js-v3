import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateJobTemplateRequest, CreateJobTemplateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateJobTemplateCommand,
  serializeAws_restJson1CreateJobTemplateCommand,
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

export interface CreateJobTemplateCommandInput extends CreateJobTemplateRequest {}
export interface CreateJobTemplateCommandOutput extends CreateJobTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a job template.</p>
 *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJobTemplate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateJobTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateJobTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateJobTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateJobTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateJobTemplateCommand extends $Command<
  CreateJobTemplateCommandInput,
  CreateJobTemplateCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateJobTemplateCommandInput) {
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
  ): Handler<CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateJobTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateJobTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateJobTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateJobTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateJobTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJobTemplateCommandOutput> {
    return deserializeAws_restJson1CreateJobTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
