import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListInvalidationsRequest, ListInvalidationsResult } from "../models/models_1";
import {
  deserializeAws_restXmlListInvalidationsCommand,
  serializeAws_restXmlListInvalidationsCommand,
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

export type ListInvalidationsCommandInput = ListInvalidationsRequest;
export type ListInvalidationsCommandOutput = ListInvalidationsResult & __MetadataBearer;

/**
 * <p>Lists invalidation batches. </p>
 */
export class ListInvalidationsCommand extends $Command<
  ListInvalidationsCommandInput,
  ListInvalidationsCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInvalidationsCommandInput) {
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
  ): Handler<ListInvalidationsCommandInput, ListInvalidationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListInvalidationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInvalidationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInvalidationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInvalidationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListInvalidationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInvalidationsCommandOutput> {
    return deserializeAws_restXmlListInvalidationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
