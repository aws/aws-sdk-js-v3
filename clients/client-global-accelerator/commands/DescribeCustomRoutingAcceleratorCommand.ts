import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { DescribeCustomRoutingAcceleratorRequest, DescribeCustomRoutingAcceleratorResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommand,
  serializeAws_json1_1DescribeCustomRoutingAcceleratorCommand,
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

export type DescribeCustomRoutingAcceleratorCommandInput = DescribeCustomRoutingAcceleratorRequest;
export type DescribeCustomRoutingAcceleratorCommandOutput = DescribeCustomRoutingAcceleratorResponse & __MetadataBearer;

/**
 * <p>Describe a custom routing accelerator. </p>
 */
export class DescribeCustomRoutingAcceleratorCommand extends $Command<
  DescribeCustomRoutingAcceleratorCommandInput,
  DescribeCustomRoutingAcceleratorCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCustomRoutingAcceleratorCommandInput) {
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
  ): Handler<DescribeCustomRoutingAcceleratorCommandInput, DescribeCustomRoutingAcceleratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DescribeCustomRoutingAcceleratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCustomRoutingAcceleratorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCustomRoutingAcceleratorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeCustomRoutingAcceleratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCustomRoutingAcceleratorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCustomRoutingAcceleratorCommandOutput> {
    return deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
