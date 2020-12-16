import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ListPartnerEventSourcesRequest, ListPartnerEventSourcesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListPartnerEventSourcesCommand,
  serializeAws_json1_1ListPartnerEventSourcesCommand,
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

export type ListPartnerEventSourcesCommandInput = ListPartnerEventSourcesRequest;
export type ListPartnerEventSourcesCommandOutput = ListPartnerEventSourcesResponse & __MetadataBearer;

/**
 * <p>An SaaS partner can use this operation to list all the partner event source names that
 *             they have created. This operation is not used by AWS customers.</p>
 */
export class ListPartnerEventSourcesCommand extends $Command<
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPartnerEventSourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPartnerEventSourcesCommandInput, ListPartnerEventSourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "ListPartnerEventSourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPartnerEventSourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPartnerEventSourcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPartnerEventSourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPartnerEventSourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPartnerEventSourcesCommandOutput> {
    return deserializeAws_json1_1ListPartnerEventSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
