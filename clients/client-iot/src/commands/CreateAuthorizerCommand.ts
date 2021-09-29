import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateAuthorizerRequest, CreateAuthorizerResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAuthorizerCommand,
  serializeAws_restJson1CreateAuthorizerCommand,
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

export interface CreateAuthorizerCommandInput extends CreateAuthorizerRequest {}
export interface CreateAuthorizerCommandOutput extends CreateAuthorizerResponse, __MetadataBearer {}

/**
 * <p>Creates an authorizer.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuthorizer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAuthorizerCommandInput} for command's `input` shape.
 * @see {@link CreateAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateAuthorizerCommand extends $Command<
  CreateAuthorizerCommandInput,
  CreateAuthorizerCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAuthorizerCommandInput) {
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
  ): Handler<CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateAuthorizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAuthorizerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAuthorizerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAuthorizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAuthorizerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAuthorizerCommandOutput> {
    return deserializeAws_restJson1CreateAuthorizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
