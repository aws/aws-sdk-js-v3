import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { deserializeAws_queryTagResourceCommand, serializeAws_queryTagResourceCommand } from "../protocols/Aws_query";
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

export type TagResourceCommandInput = TagResourceRequest;
export type TagResourceCommandOutput = TagResourceResponse & __MetadataBearer;

/**
 * <p>Add tags to the specified Amazon SNS topic. For an overview, see
 *             <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the
 *             <i>Amazon SNS Developer Guide</i>.</p>
 *         <p>When you use topic tags, keep the following guidelines in mind:</p>
 *         <ul>
 *             <li>
 *                 <p>Adding more than 50 tags to a topic isn't recommended.</p>
 *             </li>
 *             <li>
 *                 <p>Tags don't have any semantic meaning. Amazon SNS interprets tags as character
 *                     strings.</p>
 *             </li>
 *             <li>
 *                 <p>Tags are case-sensitive.</p>
 *             </li>
 *             <li>
 *                 <p>A new tag with a key identical to that of an existing tag overwrites the
 *                     existing tag.</p>
 *             </li>
 *             <li>
 *                 <p>Tagging actions are limited to 10 TPS per AWS account, per AWS region. If your application
 *                     requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p>
 *             </li>
 *          </ul>
 */
export class TagResourceCommand extends $Command<
  TagResourceCommandInput,
  TagResourceCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TagResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagResourceCommandInput, TagResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "TagResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TagResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryTagResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagResourceCommandOutput> {
    return deserializeAws_queryTagResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
