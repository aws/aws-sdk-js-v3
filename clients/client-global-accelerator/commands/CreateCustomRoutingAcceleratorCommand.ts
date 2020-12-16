import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { CreateCustomRoutingAcceleratorRequest, CreateCustomRoutingAcceleratorResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCustomRoutingAcceleratorCommand,
  serializeAws_json1_1CreateCustomRoutingAcceleratorCommand,
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

export type CreateCustomRoutingAcceleratorCommandInput = CreateCustomRoutingAcceleratorRequest;
export type CreateCustomRoutingAcceleratorCommandOutput = CreateCustomRoutingAcceleratorResponse & __MetadataBearer;

/**
 * <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands
 * 		of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p>
 * 	        <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive
 * 			traffic. To enable all destinations to receive traffic, or to specify individual port
 * 			mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
 * 				AllowCustomRoutingTraffic</a> operation.</p>
 */
export class CreateCustomRoutingAcceleratorCommand extends $Command<
  CreateCustomRoutingAcceleratorCommandInput,
  CreateCustomRoutingAcceleratorCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCustomRoutingAcceleratorCommandInput) {
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
  ): Handler<CreateCustomRoutingAcceleratorCommandInput, CreateCustomRoutingAcceleratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "CreateCustomRoutingAcceleratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomRoutingAcceleratorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomRoutingAcceleratorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateCustomRoutingAcceleratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCustomRoutingAcceleratorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomRoutingAcceleratorCommandOutput> {
    return deserializeAws_json1_1CreateCustomRoutingAcceleratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
