import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { AddCustomRoutingEndpointsRequest, AddCustomRoutingEndpointsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AddCustomRoutingEndpointsCommand,
  serializeAws_json1_1AddCustomRoutingEndpointsCommand,
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

export type AddCustomRoutingEndpointsCommandInput = AddCustomRoutingEndpointsRequest;
export type AddCustomRoutingEndpointsCommandOutput = AddCustomRoutingEndpointsResponse & __MetadataBearer;

/**
 * <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p>
 * 	        <p>The listener port range must be large enough to support the number of IP addresses that can be
 * 		specified in your subnet. The number of ports required is: subnet size times the number
 * 		of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener
 * 		port range of at least 255 ports. </p>
 * 	        <p>Note: You must have enough remaining listener ports available to
 * 		map to the subnet ports, or the call will fail with a LimitExceededException.</p>
 * 	        <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all
 * 			destinations to receive traffic, or to specify individual port mappings that can receive
 * 			traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
 * 				AllowCustomRoutingTraffic</a> operation.</p>
 */
export class AddCustomRoutingEndpointsCommand extends $Command<
  AddCustomRoutingEndpointsCommandInput,
  AddCustomRoutingEndpointsCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddCustomRoutingEndpointsCommandInput) {
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
  ): Handler<AddCustomRoutingEndpointsCommandInput, AddCustomRoutingEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "AddCustomRoutingEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddCustomRoutingEndpointsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddCustomRoutingEndpointsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddCustomRoutingEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddCustomRoutingEndpointsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddCustomRoutingEndpointsCommandOutput> {
    return deserializeAws_json1_1AddCustomRoutingEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
