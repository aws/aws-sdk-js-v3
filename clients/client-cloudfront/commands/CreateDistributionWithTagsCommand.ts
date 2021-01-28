import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateDistributionWithTagsRequest, CreateDistributionWithTagsResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateDistributionWithTagsCommand,
  serializeAws_restXmlCreateDistributionWithTagsCommand,
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

export type CreateDistributionWithTagsCommandInput = CreateDistributionWithTagsRequest;
export type CreateDistributionWithTagsCommandOutput = CreateDistributionWithTagsResult & __MetadataBearer;

/**
 * <p>Create a new distribution with tags.</p>
 */
export class CreateDistributionWithTagsCommand extends $Command<
  CreateDistributionWithTagsCommandInput,
  CreateDistributionWithTagsCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDistributionWithTagsCommandInput) {
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
  ): Handler<CreateDistributionWithTagsCommandInput, CreateDistributionWithTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateDistributionWithTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDistributionWithTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDistributionWithTagsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDistributionWithTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateDistributionWithTagsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDistributionWithTagsCommandOutput> {
    return deserializeAws_restXmlCreateDistributionWithTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
