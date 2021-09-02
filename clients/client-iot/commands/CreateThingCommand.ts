import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateThingRequest, CreateThingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateThingCommand,
  serializeAws_restJson1CreateThingCommand,
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

export interface CreateThingCommandInput extends CreateThingRequest {}
export interface CreateThingCommandOutput extends CreateThingResponse, __MetadataBearer {}

/**
 * <p>Creates a thing record in the registry. If this call is made multiple times using
 * 			the same thing name and configuration, the call will succeed. If this call is made with
 * 			the same thing name but different configuration a
 * 				<code>ResourceAlreadyExistsException</code> is thrown.</p>
 * 		       <note>
 * 			         <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for
 * 				information about authorizing control plane actions.</p>
 * 		       </note>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThing</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThingCommandInput} for command's `input` shape.
 * @see {@link CreateThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateThingCommand extends $Command<
  CreateThingCommandInput,
  CreateThingCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateThingCommandInput) {
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
  ): Handler<CreateThingCommandInput, CreateThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateThingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateThingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateThingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateThingCommandOutput> {
    return deserializeAws_restJson1CreateThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
