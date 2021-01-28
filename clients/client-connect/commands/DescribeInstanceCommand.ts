import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeInstanceRequest, DescribeInstanceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeInstanceCommand,
  serializeAws_restJson1DescribeInstanceCommand,
} from "../protocols/Aws_restJson1";
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

export type DescribeInstanceCommandInput = DescribeInstanceRequest;
export type DescribeInstanceCommandOutput = DescribeInstanceResponse & __MetadataBearer;

/**
 * <p>Returns the current state of the specified instance identifier. It tracks the instance while
 *    it is being created and returns an error status if applicable. </p>
 *          <p>If an instance is not created successfully, the instance status reason field returns details
 *    relevant to the reason. The instance in a failed state is returned only for 24 hours after the
 *    CreateInstance API was invoked.</p>
 */
export class DescribeInstanceCommand extends $Command<
  DescribeInstanceCommandInput,
  DescribeInstanceCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstanceCommandInput, DescribeInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstanceCommandOutput> {
    return deserializeAws_restJson1DescribeInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
