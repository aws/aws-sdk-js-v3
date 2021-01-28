import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { ListCustomRoutingPortMappingsRequest, ListCustomRoutingPortMappingsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListCustomRoutingPortMappingsCommand,
  serializeAws_json1_1ListCustomRoutingPortMappingsCommand,
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

export type ListCustomRoutingPortMappingsCommandInput = ListCustomRoutingPortMappingsRequest;
export type ListCustomRoutingPortMappingsCommandOutput = ListCustomRoutingPortMappingsResponse & __MetadataBearer;

/**
 * <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance
 * 		IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator.
 * 		For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port
 * 		mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p>
 * 	        <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to
 * 		your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances
 * 		in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p>
 * 	        <p>The mappings also include a flag for each destination denoting which destination IP addresses and
 * 		ports are allowed or denied traffic.</p>
 */
export class ListCustomRoutingPortMappingsCommand extends $Command<
  ListCustomRoutingPortMappingsCommandInput,
  ListCustomRoutingPortMappingsCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCustomRoutingPortMappingsCommandInput) {
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
  ): Handler<ListCustomRoutingPortMappingsCommandInput, ListCustomRoutingPortMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListCustomRoutingPortMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomRoutingPortMappingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCustomRoutingPortMappingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCustomRoutingPortMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCustomRoutingPortMappingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomRoutingPortMappingsCommandOutput> {
    return deserializeAws_json1_1ListCustomRoutingPortMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
