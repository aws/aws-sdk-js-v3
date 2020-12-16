import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImageBuildVersionsRequest, ListImageBuildVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListImageBuildVersionsCommand,
  serializeAws_restJson1ListImageBuildVersionsCommand,
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

export type ListImageBuildVersionsCommandInput = ListImageBuildVersionsRequest;
export type ListImageBuildVersionsCommandOutput = ListImageBuildVersionsResponse & __MetadataBearer;

/**
 * <p> Returns a list of image build versions. </p>
 */
export class ListImageBuildVersionsCommand extends $Command<
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListImageBuildVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListImageBuildVersionsCommandInput, ListImageBuildVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListImageBuildVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListImageBuildVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListImageBuildVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListImageBuildVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListImageBuildVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImageBuildVersionsCommandOutput> {
    return deserializeAws_restJson1ListImageBuildVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
