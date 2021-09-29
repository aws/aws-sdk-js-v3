import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeprecateThingTypeRequest, DeprecateThingTypeResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DeprecateThingTypeCommand,
  serializeAws_restJson1DeprecateThingTypeCommand,
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

export interface DeprecateThingTypeCommandInput extends DeprecateThingTypeRequest {}
export interface DeprecateThingTypeCommandOutput extends DeprecateThingTypeResponse, __MetadataBearer {}

/**
 * <p>Deprecates a thing type. You can not associate new things with deprecated thing
 * 			type.</p>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeprecateThingType</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeprecateThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeprecateThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeprecateThingTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprecateThingTypeCommandInput} for command's `input` shape.
 * @see {@link DeprecateThingTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeprecateThingTypeCommand extends $Command<
  DeprecateThingTypeCommandInput,
  DeprecateThingTypeCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeprecateThingTypeCommandInput) {
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
  ): Handler<DeprecateThingTypeCommandInput, DeprecateThingTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeprecateThingTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeprecateThingTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeprecateThingTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeprecateThingTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeprecateThingTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeprecateThingTypeCommandOutput> {
    return deserializeAws_restJson1DeprecateThingTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
