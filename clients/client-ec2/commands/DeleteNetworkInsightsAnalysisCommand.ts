import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkInsightsAnalysisRequest } from "../models/models_1";
import { DeleteNetworkInsightsAnalysisResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteNetworkInsightsAnalysisCommand,
  serializeAws_ec2DeleteNetworkInsightsAnalysisCommand,
} from "../protocols/Aws_ec2";
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

export type DeleteNetworkInsightsAnalysisCommandInput = DeleteNetworkInsightsAnalysisRequest;
export type DeleteNetworkInsightsAnalysisCommandOutput = DeleteNetworkInsightsAnalysisResult & __MetadataBearer;

/**
 * <p>Deletes the specified network insights analysis.</p>
 */
export class DeleteNetworkInsightsAnalysisCommand extends $Command<
  DeleteNetworkInsightsAnalysisCommandInput,
  DeleteNetworkInsightsAnalysisCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNetworkInsightsAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteNetworkInsightsAnalysisCommandInput, DeleteNetworkInsightsAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteNetworkInsightsAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNetworkInsightsAnalysisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNetworkInsightsAnalysisResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteNetworkInsightsAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteNetworkInsightsAnalysisCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNetworkInsightsAnalysisCommandOutput> {
    return deserializeAws_ec2DeleteNetworkInsightsAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
