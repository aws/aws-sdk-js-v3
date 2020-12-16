import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { ListFaqsRequest, ListFaqsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListFaqsCommand, serializeAws_json1_1ListFaqsCommand } from "../protocols/Aws_json1_1";
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

export type ListFaqsCommandInput = ListFaqsRequest;
export type ListFaqsCommandOutput = ListFaqsResponse & __MetadataBearer;

/**
 * <p>Gets a list of FAQ lists associated with an index.</p>
 */
export class ListFaqsCommand extends $Command<ListFaqsCommandInput, ListFaqsCommandOutput, KendraClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFaqsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFaqsCommandInput, ListFaqsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "ListFaqsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFaqsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFaqsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFaqsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFaqsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFaqsCommandOutput> {
    return deserializeAws_json1_1ListFaqsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
