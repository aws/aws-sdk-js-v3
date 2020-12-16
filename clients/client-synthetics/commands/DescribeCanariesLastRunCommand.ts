import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";
import { DescribeCanariesLastRunRequest, DescribeCanariesLastRunResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeCanariesLastRunCommand,
  serializeAws_restJson1DescribeCanariesLastRunCommand,
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

export type DescribeCanariesLastRunCommandInput = DescribeCanariesLastRunRequest;
export type DescribeCanariesLastRunCommandOutput = DescribeCanariesLastRunResponse & __MetadataBearer;

/**
 * <p>Use this operation to see information from the most recent run of each canary that you have created.</p>
 */
export class DescribeCanariesLastRunCommand extends $Command<
  DescribeCanariesLastRunCommandInput,
  DescribeCanariesLastRunCommandOutput,
  SyntheticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCanariesLastRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SyntheticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCanariesLastRunCommandInput, DescribeCanariesLastRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "DescribeCanariesLastRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCanariesLastRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCanariesLastRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCanariesLastRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeCanariesLastRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCanariesLastRunCommandOutput> {
    return deserializeAws_restJson1DescribeCanariesLastRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
