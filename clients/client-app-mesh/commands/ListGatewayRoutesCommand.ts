import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListGatewayRoutesInput, ListGatewayRoutesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListGatewayRoutesCommand,
  serializeAws_restJson1ListGatewayRoutesCommand,
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

export type ListGatewayRoutesCommandInput = ListGatewayRoutesInput;
export type ListGatewayRoutesCommandOutput = ListGatewayRoutesOutput & __MetadataBearer;

/**
 * <p>Returns a list of existing gateway routes that are associated to a virtual
 *          gateway.</p>
 */
export class ListGatewayRoutesCommand extends $Command<
  ListGatewayRoutesCommandInput,
  ListGatewayRoutesCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGatewayRoutesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGatewayRoutesCommandInput, ListGatewayRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "ListGatewayRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGatewayRoutesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListGatewayRoutesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGatewayRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGatewayRoutesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGatewayRoutesCommandOutput> {
    return deserializeAws_restJson1ListGatewayRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
