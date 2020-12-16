import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { ListServerNeighborsRequest, ListServerNeighborsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListServerNeighborsCommand,
  serializeAws_json1_1ListServerNeighborsCommand,
} from "../protocols/Aws_json1_1";
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

export type ListServerNeighborsCommandInput = ListServerNeighborsRequest;
export type ListServerNeighborsCommandOutput = ListServerNeighborsResponse & __MetadataBearer;

/**
 * <p>Retrieves a list of servers that are one network hop away from a specified
 *       server.</p>
 */
export class ListServerNeighborsCommand extends $Command<
  ListServerNeighborsCommandInput,
  ListServerNeighborsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServerNeighborsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServerNeighborsCommandInput, ListServerNeighborsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "ListServerNeighborsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServerNeighborsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListServerNeighborsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListServerNeighborsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListServerNeighborsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServerNeighborsCommandOutput> {
    return deserializeAws_json1_1ListServerNeighborsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
