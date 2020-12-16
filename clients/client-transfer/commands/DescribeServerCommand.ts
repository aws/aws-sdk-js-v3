import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { DescribeServerRequest, DescribeServerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeServerCommand,
  serializeAws_json1_1DescribeServerCommand,
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

export type DescribeServerCommandInput = DescribeServerRequest;
export type DescribeServerCommandOutput = DescribeServerResponse & __MetadataBearer;

/**
 * <p>Describes a file transfer protocol-enabled server that you specify by passing the
 *         <code>ServerId</code> parameter.</p>
 *
 *          <p>The response contains a description of a server's properties. When you set
 *         <code>EndpointType</code> to VPC, the response will contain the
 *       <code>EndpointDetails</code>.</p>
 */
export class DescribeServerCommand extends $Command<
  DescribeServerCommandInput,
  DescribeServerCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServerCommandInput, DescribeServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "DescribeServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeServerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeServerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServerCommandOutput> {
    return deserializeAws_json1_1DescribeServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
