import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeAutomationExecutionsRequest, DescribeAutomationExecutionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAutomationExecutionsCommand,
  serializeAws_json1_1DescribeAutomationExecutionsCommand,
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

export type DescribeAutomationExecutionsCommandInput = DescribeAutomationExecutionsRequest;
export type DescribeAutomationExecutionsCommandOutput = DescribeAutomationExecutionsResult & __MetadataBearer;

/**
 * <p>Provides details about all active and terminated Automation executions.</p>
 */
export class DescribeAutomationExecutionsCommand extends $Command<
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAutomationExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeAutomationExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAutomationExecutionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAutomationExecutionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAutomationExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAutomationExecutionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAutomationExecutionsCommandOutput> {
    return deserializeAws_json1_1DescribeAutomationExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
