import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { TagMFADeviceRequest } from "../models/models_0";
import { deserializeAws_queryTagMFADeviceCommand, serializeAws_queryTagMFADeviceCommand } from "../protocols/Aws_query";
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

export interface TagMFADeviceCommandInput extends TagMFADeviceRequest {}
export interface TagMFADeviceCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds one or more tags to an IAM virtual multi-factor authentication (MFA) device. If
 *       a tag with the same key name already exists, then that tag is overwritten with the new
 *       value.</p>
 *          <p>A tag consists of a key name and an associated value. By assigning tags to your
 *       resources, you can do the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Administrative grouping and discovery</b> - Attach
 *           tags to resources to aid in organization and search. For example, you could search for all
 *           resources with the key name <i>Project</i> and the value
 *             <i>MyImportantProject</i>. Or search for all resources with the key name
 *             <i>Cost Center</i> and the value <i>41200</i>. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Access control</b> - Include tags in IAM user-based
 *           and resource-based policies. You can use tags to restrict access to only an IAM virtual
 *           MFA device that has a specified tag attached. For examples of policies that show how to
 *           use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
 *             <i>IAM User Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
 *    fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 *                </li>
 *                <li>
 *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
 *             need to store an array, you can store comma-separated values in the string. However, you
 *             must interpret the value in your code.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, TagMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, TagMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new TagMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagMFADeviceCommandInput} for command's `input` shape.
 * @see {@link TagMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class TagMFADeviceCommand extends $Command<
  TagMFADeviceCommandInput,
  TagMFADeviceCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TagMFADeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagMFADeviceCommandInput, TagMFADeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "TagMFADeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagMFADeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagMFADeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryTagMFADeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagMFADeviceCommandOutput> {
    return deserializeAws_queryTagMFADeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
