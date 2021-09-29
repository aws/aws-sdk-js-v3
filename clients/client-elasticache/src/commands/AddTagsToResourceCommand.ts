import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { AddTagsToResourceMessage, TagListMessage } from "../models/models_0";
import {
  deserializeAws_queryAddTagsToResourceCommand,
  serializeAws_queryAddTagsToResourceCommand,
} from "../protocols/Aws_query";
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

export interface AddTagsToResourceCommandInput extends AddTagsToResourceMessage {}
export interface AddTagsToResourceCommandOutput extends TagListMessage, __MetadataBearer {}

/**
 * <p>A  tag is a key-value pair where the key and value are case-sensitive.
 *             You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group.
 *           For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p>
 *         <p>
 *             For example, you can use cost-allocation tags to your ElastiCache resources,
 *             Amazon generates a cost allocation report as a comma-separated value (CSV) file
 *             with your usage and costs aggregated by your tags.
 *             You can apply tags that represent business categories (such as cost centers, application names, or owners)
 *             to organize your costs across multiple services.</p>
 *             <p>For more information,
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a>
 *             in the <i>ElastiCache User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, AddTagsToResourceCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, AddTagsToResourceCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AddTagsToResourceCommand extends $Command<
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
  ElastiCacheClientResolvedConfig
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
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "AddTagsToResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddTagsToResourceMessage.filterSensitiveLog,
      outputFilterSensitiveLog: TagListMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsToResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAddTagsToResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsToResourceCommandOutput> {
    return deserializeAws_queryAddTagsToResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
