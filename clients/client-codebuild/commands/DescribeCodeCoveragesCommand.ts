import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DescribeCodeCoveragesInput, DescribeCodeCoveragesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCodeCoveragesCommand,
  serializeAws_json1_1DescribeCodeCoveragesCommand,
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

export type DescribeCodeCoveragesCommandInput = DescribeCodeCoveragesInput;
export type DescribeCodeCoveragesCommandOutput = DescribeCodeCoveragesOutput & __MetadataBearer;

/**
 * <p>Retrieves one or more code coverage reports.</p>
 */
export class DescribeCodeCoveragesCommand extends $Command<
  DescribeCodeCoveragesCommandInput,
  DescribeCodeCoveragesCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCodeCoveragesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCodeCoveragesCommandInput, DescribeCodeCoveragesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "DescribeCodeCoveragesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCodeCoveragesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCodeCoveragesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCodeCoveragesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCodeCoveragesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCodeCoveragesCommandOutput> {
    return deserializeAws_json1_1DescribeCodeCoveragesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
