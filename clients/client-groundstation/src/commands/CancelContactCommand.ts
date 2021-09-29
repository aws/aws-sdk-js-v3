import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CancelContactRequest, ContactIdResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CancelContactCommand,
  serializeAws_restJson1CancelContactCommand,
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

export interface CancelContactCommandInput extends CancelContactRequest {}
export interface CancelContactCommandOutput extends ContactIdResponse, __MetadataBearer {}

/**
 * <p>Cancels a contact with a specified contact ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CancelContactCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CancelContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new CancelContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelContactCommandInput} for command's `input` shape.
 * @see {@link CancelContactCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CancelContactCommand extends $Command<
  CancelContactCommandInput,
  CancelContactCommandOutput,
  GroundStationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelContactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelContactCommandInput, CancelContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "CancelContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelContactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ContactIdResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelContactCommandOutput> {
    return deserializeAws_restJson1CancelContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
