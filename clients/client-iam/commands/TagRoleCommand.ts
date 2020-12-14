import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { TagRoleRequest } from "../models/models_0";
import { deserializeAws_queryTagRoleCommand, serializeAws_queryTagRoleCommand } from "../protocols/Aws_query";
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

export type TagRoleCommandInput = TagRoleRequest;
export type TagRoleCommandOutput = __MetadataBearer;

/**
 * <p>Adds one or more tags to an IAM role. The role can be a regular role or a
 *       service-linked role. If a tag with the same key name already exists, then that tag is
 *       overwritten with the new value.</p>
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
 *                   <b>Access control</b> - Reference tags in IAM
 *           user-based and resource-based policies. You can use tags to restrict access to only an
 *           IAM user or role that has a specified tag attached. You can also restrict access to only
 *           those resources that have a certain tag attached. For examples of policies that show how
 *           to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control Access Using IAM Tags</a> in the
 *             <i>IAM User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Cost allocation</b> - Use tags to help track which
 *           individuals and teams are using which AWS resources.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Make sure that you have no invalid tags and that you do not exceed the allowed
 *             number of tags per role. In either case, the entire request fails and
 *               <i>no</i> tags are added to the role.</p>
 *                </li>
 *                <li>
 *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
 *             need to store an array, you can store comma-separated values in the string. However, you
 *             must interpret the value in your code.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the
 *         <i>IAM User Guide</i>.</p>
 */
export class TagRoleCommand extends $Command<TagRoleCommandInput, TagRoleCommandOutput, IAMClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TagRoleCommandInput) {
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
  ): Handler<TagRoleCommandInput, TagRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "TagRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryTagRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagRoleCommandOutput> {
    return deserializeAws_queryTagRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
