import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListApprovedOriginsRequest, ListApprovedOriginsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListApprovedOriginsCommand,
  serializeAws_restJson1ListApprovedOriginsCommand,
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

export type ListApprovedOriginsCommandInput = ListApprovedOriginsRequest;
export type ListApprovedOriginsCommandOutput = ListApprovedOriginsResponse & __MetadataBearer;

/**
 * <p>Returns a paginated list of all approved origins associated with the instance.</p>
 */
export class ListApprovedOriginsCommand extends $Command<
  ListApprovedOriginsCommandInput,
  ListApprovedOriginsCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListApprovedOriginsCommandInput) {
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
  ): Handler<ListApprovedOriginsCommandInput, ListApprovedOriginsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListApprovedOriginsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListApprovedOriginsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListApprovedOriginsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListApprovedOriginsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListApprovedOriginsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListApprovedOriginsCommandOutput> {
    return deserializeAws_restJson1ListApprovedOriginsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
