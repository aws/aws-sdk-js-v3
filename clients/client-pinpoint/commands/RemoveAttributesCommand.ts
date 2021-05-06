import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { RemoveAttributesRequest, RemoveAttributesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RemoveAttributesCommand,
  serializeAws_restJson1RemoveAttributesCommand,
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

export interface RemoveAttributesCommandInput extends RemoveAttributesRequest {}
export interface RemoveAttributesCommandOutput extends RemoveAttributesResponse, __MetadataBearer {}

/**
 * <p>Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, RemoveAttributesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, RemoveAttributesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new RemoveAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAttributesCommandInput} for command's `input` shape.
 * @see {@link RemoveAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveAttributesCommand extends $Command<
  RemoveAttributesCommandInput,
  RemoveAttributesCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveAttributesCommandInput, RemoveAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "RemoveAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveAttributesCommandOutput> {
    return deserializeAws_restJson1RemoveAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
