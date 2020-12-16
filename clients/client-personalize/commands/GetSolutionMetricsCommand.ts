import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { GetSolutionMetricsRequest, GetSolutionMetricsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetSolutionMetricsCommand,
  serializeAws_json1_1GetSolutionMetricsCommand,
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

export type GetSolutionMetricsCommandInput = GetSolutionMetricsRequest;
export type GetSolutionMetricsCommandOutput = GetSolutionMetricsResponse & __MetadataBearer;

/**
 * <p>Gets the metrics for the specified solution version.</p>
 */
export class GetSolutionMetricsCommand extends $Command<
  GetSolutionMetricsCommandInput,
  GetSolutionMetricsCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSolutionMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSolutionMetricsCommandInput, GetSolutionMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "GetSolutionMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSolutionMetricsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSolutionMetricsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSolutionMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSolutionMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSolutionMetricsCommandOutput> {
    return deserializeAws_json1_1GetSolutionMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
