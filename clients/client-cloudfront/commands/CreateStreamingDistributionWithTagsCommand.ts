import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  CreateStreamingDistributionWithTagsRequest,
  CreateStreamingDistributionWithTagsResult,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand,
  serializeAws_restXmlCreateStreamingDistributionWithTagsCommand,
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

export type CreateStreamingDistributionWithTagsCommandInput = CreateStreamingDistributionWithTagsRequest;
export type CreateStreamingDistributionWithTagsCommandOutput = CreateStreamingDistributionWithTagsResult &
  __MetadataBearer;

/**
 * <p>Create a new streaming distribution with tags.</p>
 */
export class CreateStreamingDistributionWithTagsCommand extends $Command<
  CreateStreamingDistributionWithTagsCommandInput,
  CreateStreamingDistributionWithTagsCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStreamingDistributionWithTagsCommandInput) {
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
  ): Handler<CreateStreamingDistributionWithTagsCommandInput, CreateStreamingDistributionWithTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateStreamingDistributionWithTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStreamingDistributionWithTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamingDistributionWithTagsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateStreamingDistributionWithTagsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateStreamingDistributionWithTagsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStreamingDistributionWithTagsCommandOutput> {
    return deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
