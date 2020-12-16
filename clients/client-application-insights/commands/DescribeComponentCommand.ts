import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { DescribeComponentRequest, DescribeComponentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeComponentCommand,
  serializeAws_json1_1DescribeComponentCommand,
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

export type DescribeComponentCommandInput = DescribeComponentRequest;
export type DescribeComponentCommandOutput = DescribeComponentResponse & __MetadataBearer;

/**
 * <p>Describes a component and lists the resources that are grouped together in a component.</p>
 */
export class DescribeComponentCommand extends $Command<
  DescribeComponentCommandInput,
  DescribeComponentCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeComponentCommandInput) {
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
  ): Handler<DescribeComponentCommandInput, DescribeComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "DescribeComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeComponentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeComponentCommandOutput> {
    return deserializeAws_json1_1DescribeComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
