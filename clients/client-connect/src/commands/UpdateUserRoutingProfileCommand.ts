import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateUserRoutingProfileRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateUserRoutingProfileCommand,
  serializeAws_restJson1UpdateUserRoutingProfileCommand,
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

export interface UpdateUserRoutingProfileCommandInput extends UpdateUserRoutingProfileRequest {}
export interface UpdateUserRoutingProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Assigns the specified routing profile to the specified user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserRoutingProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserRoutingProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateUserRoutingProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserRoutingProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateUserRoutingProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateUserRoutingProfileCommand extends $Command<
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateUserRoutingProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateUserRoutingProfileCommandInput, UpdateUserRoutingProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateUserRoutingProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserRoutingProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateUserRoutingProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateUserRoutingProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserRoutingProfileCommandOutput> {
    return deserializeAws_restJson1UpdateUserRoutingProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
