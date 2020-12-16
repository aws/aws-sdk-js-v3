import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import {
  ListCustomRoutingPortMappingsByDestinationRequest,
  ListCustomRoutingPortMappingsByDestinationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand,
  serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand,
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

export type ListCustomRoutingPortMappingsByDestinationCommandInput = ListCustomRoutingPortMappingsByDestinationRequest;
export type ListCustomRoutingPortMappingsByDestinationCommandOutput = ListCustomRoutingPortMappingsByDestinationResponse &
  __MetadataBearer;

/**
 * <p>List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The
 * 			response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that
 * 			span multiple custom routing accelerators in your account, or for scenarios where you only want to
 * 			list the port mappings for a specific destination instance.</p>
 */
export class ListCustomRoutingPortMappingsByDestinationCommand extends $Command<
  ListCustomRoutingPortMappingsByDestinationCommandInput,
  ListCustomRoutingPortMappingsByDestinationCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCustomRoutingPortMappingsByDestinationCommandInput) {
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
  ): Handler<
    ListCustomRoutingPortMappingsByDestinationCommandInput,
    ListCustomRoutingPortMappingsByDestinationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListCustomRoutingPortMappingsByDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomRoutingPortMappingsByDestinationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCustomRoutingPortMappingsByDestinationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListCustomRoutingPortMappingsByDestinationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomRoutingPortMappingsByDestinationCommandOutput> {
    return deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
