import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeContactFlowRequest, DescribeContactFlowResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeContactFlowCommand,
  serializeAws_restJson1DescribeContactFlowCommand,
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

export type DescribeContactFlowCommandInput = DescribeContactFlowRequest;
export type DescribeContactFlowCommandOutput = DescribeContactFlowResponse & __MetadataBearer;

/**
 * <p>Describes the specified contact flow.</p>
 *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 */
export class DescribeContactFlowCommand extends $Command<
  DescribeContactFlowCommandInput,
  DescribeContactFlowCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeContactFlowCommandInput) {
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
  ): Handler<DescribeContactFlowCommandInput, DescribeContactFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeContactFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeContactFlowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeContactFlowResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeContactFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeContactFlowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeContactFlowCommandOutput> {
    return deserializeAws_restJson1DescribeContactFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
