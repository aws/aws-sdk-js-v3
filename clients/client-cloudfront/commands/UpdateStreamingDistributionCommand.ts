import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateStreamingDistributionRequest, UpdateStreamingDistributionResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateStreamingDistributionCommand,
  serializeAws_restXmlUpdateStreamingDistributionCommand,
} from "../protocols/Aws_restXml";
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

export type UpdateStreamingDistributionCommandInput = UpdateStreamingDistributionRequest;
export type UpdateStreamingDistributionCommandOutput = UpdateStreamingDistributionResult & __MetadataBearer;

/**
 * <p>Update a streaming distribution. </p>
 */
export class UpdateStreamingDistributionCommand extends $Command<
  UpdateStreamingDistributionCommandInput,
  UpdateStreamingDistributionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateStreamingDistributionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStreamingDistributionCommandInput, UpdateStreamingDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateStreamingDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateStreamingDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateStreamingDistributionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateStreamingDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateStreamingDistributionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateStreamingDistributionCommandOutput> {
    return deserializeAws_restXmlUpdateStreamingDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
