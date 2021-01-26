import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { ListTagsRequest, ListTagsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTagsCommand, serializeAws_json1_1ListTagsCommand } from "../protocols/Aws_json1_1";
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

export type ListTagsCommandInput = ListTagsRequest;
export type ListTagsCommandOutput = ListTagsResponse & __MetadataBearer;

/**
 * <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p>
 *          <p>This is a paginated operation, which means that each response might contain only a
 *       subset of all the tags. When the response contains only a subset of tags, it includes a
 *       <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to
 *       get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null
 *       value), that means there are no more tags to get.</p>
 */
export class ListTagsCommand extends $Command<
  ListTagsCommandInput,
  ListTagsCommandOutput,
  CloudHSMV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsCommandInput, ListTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "ListTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsCommandOutput> {
    return deserializeAws_json1_1ListTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
