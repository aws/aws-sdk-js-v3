import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteRegistrationCodeRequest, DeleteRegistrationCodeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRegistrationCodeCommand,
  serializeAws_restJson1DeleteRegistrationCodeCommand,
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

export interface DeleteRegistrationCodeCommandInput extends DeleteRegistrationCodeRequest {}
export interface DeleteRegistrationCodeCommandOutput extends DeleteRegistrationCodeResponse, __MetadataBearer {}

/**
 * <p>Deletes a CA certificate registration code.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRegistrationCode</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteRegistrationCodeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteRegistrationCodeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteRegistrationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRegistrationCodeCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistrationCodeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteRegistrationCodeCommand extends $Command<
  DeleteRegistrationCodeCommandInput,
  DeleteRegistrationCodeCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRegistrationCodeCommandInput) {
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
  ): Handler<DeleteRegistrationCodeCommandInput, DeleteRegistrationCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteRegistrationCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRegistrationCodeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRegistrationCodeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRegistrationCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRegistrationCodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRegistrationCodeCommandOutput> {
    return deserializeAws_restJson1DeleteRegistrationCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
