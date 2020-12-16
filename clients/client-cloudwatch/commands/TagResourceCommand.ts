import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { TagResourceInput, TagResourceOutput } from "../models/models_0";
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

export type TagResourceCommandInput = TagResourceInput;
export type TagResourceCommandOutput = TagResourceOutput & __MetadataBearer;

/**
 * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Currently, the only CloudWatch resources that
 * 			can be tagged are alarms and Contributor Insights rules.</p>
 * 		       <p>Tags can help you organize and categorize your resources. You can also use them to scope user
 * 			permissions by granting a user
 * 			permission to access or change only resources with certain tag values.</p>
 * 		       <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p>
 * 		       <p>You can use the <code>TagResource</code> action with an alarm that already has tags. If you specify a new tag key for the alarm,
 * 			this tag is appended to the list of tags associated
 * 			with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces
 * 			the previous value for that tag.</p>
 * 		       <p>You can associate as many as 50 tags with a CloudWatch resource.</p>
 */
export class TagResourceCommand extends $Command<
  TagResourceCommandInput,
  TagResourceCommandOutput,
  CloudWatchClientResolvedConfig
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
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagResourceCommandInput, TagResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "TagResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: TagResourceOutput.filterSensitiveLog,
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
