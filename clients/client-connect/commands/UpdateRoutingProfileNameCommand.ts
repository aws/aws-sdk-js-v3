import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateRoutingProfileNameRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRoutingProfileNameCommand,
  serializeAws_restJson1UpdateRoutingProfileNameCommand,
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

export type UpdateRoutingProfileNameCommandInput = UpdateRoutingProfileNameRequest;
export type UpdateRoutingProfileNameCommandOutput = __MetadataBearer;

/**
 * <p>Updates the name and description of a routing profile. The request accepts the following
 *    data in JSON format. At least <code>Name</code> or <code>Description</code> must be
 *    provided.</p>
 */
export class UpdateRoutingProfileNameCommand extends $Command<
  UpdateRoutingProfileNameCommandInput,
  UpdateRoutingProfileNameCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRoutingProfileNameCommandInput) {
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
  ): Handler<UpdateRoutingProfileNameCommandInput, UpdateRoutingProfileNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateRoutingProfileNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRoutingProfileNameRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRoutingProfileNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRoutingProfileNameCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRoutingProfileNameCommandOutput> {
    return deserializeAws_restJson1UpdateRoutingProfileNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
