import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { AllowCustomRoutingTrafficRequest } from "../models/models_0";
import {
  deserializeAws_json1_1AllowCustomRoutingTrafficCommand,
  serializeAws_json1_1AllowCustomRoutingTrafficCommand,
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

export type AllowCustomRoutingTrafficCommandInput = AllowCustomRoutingTrafficRequest;
export type AllowCustomRoutingTrafficCommandOutput = __MetadataBearer;

/**
 * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic
 * 			for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a
 * 			specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports
 * 			outside of the range that you configured for the endpoint group.</p>
 * 		       <p>After you make changes, you can verify that the updates are complete by checking the status of your
 * 			accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
 */
export class AllowCustomRoutingTrafficCommand extends $Command<
  AllowCustomRoutingTrafficCommandInput,
  AllowCustomRoutingTrafficCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AllowCustomRoutingTrafficCommandInput) {
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
  ): Handler<AllowCustomRoutingTrafficCommandInput, AllowCustomRoutingTrafficCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "AllowCustomRoutingTrafficCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AllowCustomRoutingTrafficRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AllowCustomRoutingTrafficCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AllowCustomRoutingTrafficCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AllowCustomRoutingTrafficCommandOutput> {
    return deserializeAws_json1_1AllowCustomRoutingTrafficCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
