import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { DenyCustomRoutingTrafficRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DenyCustomRoutingTrafficCommand,
  serializeAws_json1_1DenyCustomRoutingTrafficCommand,
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

export type DenyCustomRoutingTrafficCommandInput = DenyCustomRoutingTrafficRequest;
export type DenyCustomRoutingTrafficCommandOutput = __MetadataBearer;

/**
 * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic
 * 			for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a
 * 			specified list of destination IP addresses and ports. Note that you cannot specify IP addresses
 * 			or ports outside of the range that you configured for the endpoint group.</p>
 * 		       <p>After you make changes, you can verify that the updates are complete by checking the status of your
 * 			accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
 */
export class DenyCustomRoutingTrafficCommand extends $Command<
  DenyCustomRoutingTrafficCommandInput,
  DenyCustomRoutingTrafficCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DenyCustomRoutingTrafficCommandInput) {
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
  ): Handler<DenyCustomRoutingTrafficCommandInput, DenyCustomRoutingTrafficCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DenyCustomRoutingTrafficCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DenyCustomRoutingTrafficRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DenyCustomRoutingTrafficCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DenyCustomRoutingTrafficCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DenyCustomRoutingTrafficCommandOutput> {
    return deserializeAws_json1_1DenyCustomRoutingTrafficCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
