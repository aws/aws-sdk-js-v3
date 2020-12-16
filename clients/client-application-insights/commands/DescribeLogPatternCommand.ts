import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { DescribeLogPatternRequest, DescribeLogPatternResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeLogPatternCommand,
  serializeAws_json1_1DescribeLogPatternCommand,
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

export type DescribeLogPatternCommandInput = DescribeLogPatternRequest;
export type DescribeLogPatternCommandOutput = DescribeLogPatternResponse & __MetadataBearer;

/**
 * <p>Describe a specific log pattern from a <code>LogPatternSet</code>.</p>
 */
export class DescribeLogPatternCommand extends $Command<
  DescribeLogPatternCommandInput,
  DescribeLogPatternCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLogPatternCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLogPatternCommandInput, DescribeLogPatternCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "DescribeLogPatternCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLogPatternRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLogPatternResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLogPatternCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLogPatternCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLogPatternCommandOutput> {
    return deserializeAws_json1_1DescribeLogPatternCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
