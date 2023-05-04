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

import { ListQueueTagsRequest, ListQueueTagsResult } from "../models/models_0";
import { de_ListQueueTagsCommand, se_ListQueueTagsCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 *
 * The input for {@link ListQueueTagsCommand}.
 */
export interface ListQueueTagsCommandInput extends ListQueueTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListQueueTagsCommand}.
 */
export interface ListQueueTagsCommandOutput extends ListQueueTagsResult, __MetadataBearer {}

/**
 * @public
 * <p>List all cost allocation tags added to the specified Amazon SQS queue.
 *             For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging
 * Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *          <note>
 *             <p>Cross-account permissions don't apply to this action. For more information,
 * see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant
 * cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ListQueueTagsCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ListQueueTagsCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // ListQueueTagsRequest
 *   QueueUrl: "STRING_VALUE", // required
 * };
 * const command = new ListQueueTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListQueueTagsResult
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListQueueTagsCommandInput - {@link ListQueueTagsCommandInput}
 * @returns {@link ListQueueTagsCommandOutput}
 * @see {@link ListQueueTagsCommandInput} for command's `input` shape.
 * @see {@link ListQueueTagsCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The <code>accountId</code> is invalid.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>When the request to a queue is not HTTPS and SigV4.</p>
 *
 * @throws {@link QueueDoesNotExist} (client fault)
 *  <p>The specified queue doesn't exist.</p>
 *
 * @throws {@link RequestThrottled} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *          <ul>
 *             <li>
 *                <p>The rate of requests per second exceeds the AWS KMS request quota for an
 *                     account and Region. </p>
 *             </li>
 *             <li>
 *                <p>A burst or sustained high rate of requests to change the state of the same KMS
 *                     key. This condition is often known as a "hot key."</p>
 *             </li>
 *             <li>
 *                <p>Requests for operations on KMS keys in a Amazon Web Services CloudHSM key store
 *                     might be throttled at a lower-than-expected rate when the Amazon Web Services
 *                     CloudHSM cluster associated with the Amazon Web Services CloudHSM key store is
 *                     processing numerous commands, including those unrelated to the Amazon Web Services CloudHSM key store.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 */
export class ListQueueTagsCommand extends $Command<
  ListQueueTagsCommandInput,
  ListQueueTagsCommandOutput,
  SQSClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: ListQueueTagsCommandInput) {
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
  ): Handler<ListQueueTagsCommandInput, ListQueueTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListQueueTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "ListQueueTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListQueueTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListQueueTagsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQueueTagsCommandOutput> {
    return de_ListQueueTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
