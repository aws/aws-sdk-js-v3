import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { AddTagsToResourceRequest, AddTagsToResourceResult } from "../models/models_0";
import {
  deserializeAws_json1_1AddTagsToResourceCommand,
  serializeAws_json1_1AddTagsToResourceCommand,
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

export type AddTagsToResourceCommandInput = AddTagsToResourceRequest;
export type AddTagsToResourceCommandOutput = AddTagsToResourceResult & __MetadataBearer;

/**
 * <p>Adds or overwrites one or more tags for the specified resource. Tags are metadata that you
 *    can assign to your documents, managed instances, maintenance windows, Parameter Store parameters,
 *    and patch baselines. Tags enable you to categorize your resources in different ways, for example,
 *    by purpose, owner, or environment. Each tag consists of a key and an optional value, both of
 *    which you define. For example, you could define a set of tags for your account's managed
 *    instances that helps you track each instance's owner and stack level. For example: Key=Owner and
 *    Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and Value=Production, Pre-Production, or
 *    Test.</p>
 *
 *          <p>Each resource can have a maximum of 50 tags. </p>
 *          <p>We recommend that you devise a set of tag keys that meets your needs for each resource type.
 *    Using a consistent set of tag keys makes it easier for you to manage your resources. You can
 *    search and filter the resources based on the tags you add. Tags don't have any semantic meaning
 *    to and are interpreted strictly as a string of characters. </p>
 *          <p>For more information about using tags with EC2 instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the
 *     <i>Amazon EC2 User Guide</i>.</p>
 */
export class AddTagsToResourceCommand extends $Command<
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddTagsToResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "AddTagsToResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddTagsToResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddTagsToResourceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsToResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddTagsToResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsToResourceCommandOutput> {
    return deserializeAws_json1_1AddTagsToResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
