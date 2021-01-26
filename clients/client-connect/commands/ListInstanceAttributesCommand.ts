import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListInstanceAttributesRequest, ListInstanceAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListInstanceAttributesCommand,
  serializeAws_restJson1ListInstanceAttributesCommand,
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

export type ListInstanceAttributesCommandInput = ListInstanceAttributesRequest;
export type ListInstanceAttributesCommandOutput = ListInstanceAttributesResponse & __MetadataBearer;

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all attribute types for the given instance.</p>
 */
export class ListInstanceAttributesCommand extends $Command<
  ListInstanceAttributesCommandInput,
  ListInstanceAttributesCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInstanceAttributesCommandInput) {
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
  ): Handler<ListInstanceAttributesCommandInput, ListInstanceAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListInstanceAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstanceAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInstanceAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceAttributesCommandOutput> {
    return deserializeAws_restJson1ListInstanceAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
