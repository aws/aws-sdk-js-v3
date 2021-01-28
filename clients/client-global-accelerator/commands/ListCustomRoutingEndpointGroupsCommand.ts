import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { ListCustomRoutingEndpointGroupsRequest, ListCustomRoutingEndpointGroupsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommand,
  serializeAws_json1_1ListCustomRoutingEndpointGroupsCommand,
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

export type ListCustomRoutingEndpointGroupsCommandInput = ListCustomRoutingEndpointGroupsRequest;
export type ListCustomRoutingEndpointGroupsCommandOutput = ListCustomRoutingEndpointGroupsResponse & __MetadataBearer;

/**
 * <p>List the endpoint groups that are associated with a listener for a custom routing accelerator. </p>
 */
export class ListCustomRoutingEndpointGroupsCommand extends $Command<
  ListCustomRoutingEndpointGroupsCommandInput,
  ListCustomRoutingEndpointGroupsCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCustomRoutingEndpointGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCustomRoutingEndpointGroupsCommandInput, ListCustomRoutingEndpointGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListCustomRoutingEndpointGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomRoutingEndpointGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCustomRoutingEndpointGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListCustomRoutingEndpointGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCustomRoutingEndpointGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomRoutingEndpointGroupsCommandOutput> {
    return deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
