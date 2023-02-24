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

import { TagQueueRequest, TagQueueRequestFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_queryTagQueueCommand, serializeAws_queryTagQueueCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

export interface TagQueueCommandInput extends TagQueueRequest {}
export interface TagQueueCommandOutput extends __MetadataBearer {}

/**
 * <p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging
 * Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *
 *          <p>When you use queue tags, keep the following guidelines in mind:</p>
 *          <ul>
 *             <li>
 *                <p>Adding more than 50 tags to a queue isn't recommended.</p>
 *             </li>
 *             <li>
 *                <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p>
 *             </li>
 *             <li>
 *                <p>Tags are case-sensitive.</p>
 *             </li>
 *             <li>
 *                <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p>
 *             </li>
 *          </ul>
 *          <p>For a full list of tag restrictions, see
 * <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a>
 * in the <i>Amazon SQS Developer Guide</i>.</p>
 *         <note>
 *             <p>Cross-account permissions don't apply to this action. For more information,
 * see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant
 * cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, TagQueueCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, TagQueueCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new TagQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagQueueCommandInput} for command's `input` shape.
 * @see {@link TagQueueCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 */
export class TagQueueCommand extends $Command<TagQueueCommandInput, TagQueueCommandOutput, SQSClientResolvedConfig> {
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

  constructor(readonly input: TagQueueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagQueueCommandInput, TagQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TagQueueCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "TagQueueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagQueueRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryTagQueueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagQueueCommandOutput> {
    return deserializeAws_queryTagQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
