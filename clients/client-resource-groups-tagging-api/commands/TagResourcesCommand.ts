import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { TagResourcesInput, TagResourcesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1TagResourcesCommand,
  serializeAws_json1_1TagResourcesCommand,
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

export type TagResourcesCommandInput = TagResourcesInput;
export type TagResourcesCommandOutput = TagResourcesOutput & __MetadataBearer;

/**
 * <p>Applies one or more tags to the specified resources. Note the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Not all resources can have tags. For a list of services that support tagging,
 *                     see <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/Welcome.html">this list</a>.</p>
 *             </li>
 *             <li>
 *                 <p>Each resource can have up to 50 tags. For other limits, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage
 *                         Conventions</a> in the <i>AWS General
 *                     Reference.</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>You can only tag resources that are located in the specified Region for the
 *                     AWS account.</p>
 *             </li>
 *             <li>
 *                 <p>To add tags to a resource, you need the necessary permissions for the service
 *                     that the resource belongs to as well as permissions for adding tags. For more
 *                     information, see <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/Welcome.html">this list</a>.</p>
 *             </li>
 *          </ul>
 *         <important>
 *             <p>Do not store personally identifiable information (PII) or other confidential or
 *                 sensitive information in tags. We use tags to provide you with billing and
 *                 administration services. Tags are not intended to be used for private or sensitive
 *                 data.</p>
 *         </important>
 */
export class TagResourcesCommand extends $Command<
  TagResourcesCommandInput,
  TagResourcesCommandOutput,
  ResourceGroupsTaggingAPIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TagResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsTaggingAPIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagResourcesCommandInput, TagResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "TagResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: TagResourcesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TagResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagResourcesCommandOutput> {
    return deserializeAws_json1_1TagResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
