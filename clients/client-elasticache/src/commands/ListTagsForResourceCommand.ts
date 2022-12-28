// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  ListTagsForResourceMessage,
  ListTagsForResourceMessageFilterSensitiveLog,
  TagListMessage,
  TagListMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListTagsForResourceCommand,
  serializeAws_queryListTagsForResourceCommand,
} from "../protocols/Aws_query";

export interface ListTagsForResourceCommandInput extends ListTagsForResourceMessage {}
export interface ListTagsForResourceCommandOutput extends TagListMessage, __MetadataBearer {}

/**
 * <p>Lists all tags currently on a  named resource.</p>
 *          <p>    A  tag is a key-value pair where the key and value are case-sensitive.
 *             You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group.
 *      For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p>
 *          <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code>
 *             returns an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ListTagsForResourceCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ListTagsForResourceCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class ListTagsForResourceCommand extends $Command<
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListTagsForResourceCommandInput) {
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
  ): Handler<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTagsForResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ListTagsForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsForResourceMessageFilterSensitiveLog,
      outputFilterSensitiveLog: TagListMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsForResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListTagsForResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsForResourceCommandOutput> {
    return deserializeAws_queryListTagsForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
