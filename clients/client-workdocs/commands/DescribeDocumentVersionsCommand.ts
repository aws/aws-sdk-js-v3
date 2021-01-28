import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeDocumentVersionsRequest, DescribeDocumentVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDocumentVersionsCommand,
  serializeAws_restJson1DescribeDocumentVersionsCommand,
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

export type DescribeDocumentVersionsCommandInput = DescribeDocumentVersionsRequest;
export type DescribeDocumentVersionsCommandOutput = DescribeDocumentVersionsResponse & __MetadataBearer;

/**
 * <p>Retrieves the document versions for the specified document.</p>
 *         <p>By default, only active versions are returned.</p>
 */
export class DescribeDocumentVersionsCommand extends $Command<
  DescribeDocumentVersionsCommandInput,
  DescribeDocumentVersionsCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDocumentVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDocumentVersionsCommandInput, DescribeDocumentVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "DescribeDocumentVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDocumentVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDocumentVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDocumentVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDocumentVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDocumentVersionsCommandOutput> {
    return deserializeAws_restJson1DescribeDocumentVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
