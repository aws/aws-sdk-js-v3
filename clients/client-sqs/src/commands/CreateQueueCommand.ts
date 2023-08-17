// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateQueueRequest, CreateQueueResult } from "../models/models_0";
import { de_CreateQueueCommand, se_CreateQueueCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandInput extends CreateQueueRequest {}
/**
 * @public
 *
 * The output of {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandOutput extends CreateQueueResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new standard or FIFO queue. You can pass one or more attributes in
 *             the request. Keep the following in mind:</p>
 *          <ul>
 *             <li>
 *                <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p>
 *                <note>
 *                   <p>You can't change the queue type after you create it and you can't convert
 *                         an existing standard queue into a FIFO queue. You must either create a new
 *                         FIFO queue for your application or delete your existing standard queue and
 *                         recreate it as a FIFO queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving">Moving From a Standard Queue to a FIFO Queue</a> in the
 *                             <i>Amazon SQS Developer Guide</i>. </p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>If you don't provide a value for an attribute, the queue is created with the
 *                     default value for the attribute.</p>
 *             </li>
 *             <li>
 *                <p>If you delete a queue, you must wait at least 60 seconds before creating a
 *                     queue with the same name.</p>
 *             </li>
 *          </ul>
 *          <p>To successfully create a new queue, you must provide a queue name that adheres to the
 *                 <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html">limits
 *                 related to queues</a> and is unique within the scope of your queues.</p>
 *          <note>
 *             <p>After you create a queue, you must wait at least one second after the queue is
 *                 created to be able to use the queue.</p>
 *          </note>
 *          <p>To get the queue URL, use the <code>
 *                <a>GetQueueUrl</a>
 *             </code> action.
 *                     <code>
 *                <a>GetQueueUrl</a>
 *             </code> requires only the
 *                 <code>QueueName</code> parameter. be aware of existing queue names:</p>
 *          <ul>
 *             <li>
 *                <p>If you provide the name of an existing queue along with the exact names and
 *                     values of all the queue's attributes, <code>CreateQueue</code> returns the queue
 *                     URL for the existing queue.</p>
 *             </li>
 *             <li>
 *                <p>If the queue name, attribute names, or attribute values don't match an
 *                     existing queue, <code>CreateQueue</code> returns an error.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Cross-account permissions don't apply to this action. For more information,
 * see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant
 * cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, CreateQueueCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, CreateQueueCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // CreateQueueRequest
 *   QueueName: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Attributes: { // QueueAttributeMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQueueCommand(input);
 * const response = await client.send(command);
 * // { // CreateQueueResult
 * //   QueueUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateQueueCommandInput - {@link CreateQueueCommandInput}
 * @returns {@link CreateQueueCommandOutput}
 * @see {@link CreateQueueCommandInput} for command's `input` shape.
 * @see {@link CreateQueueCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link QueueDeletedRecently} (client fault)
 *  <p>You must wait 60 seconds after deleting a queue before you can create another queue
 *             with the same name.</p>
 *
 * @throws {@link QueueNameExists} (client fault)
 *  <p>A queue with this name already exists. Amazon SQS returns this error only if the request
 *             includes attributes whose values differ from those of the existing queue.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 */
export class CreateQueueCommand extends $Command<
  CreateQueueCommandInput,
  CreateQueueCommandOutput,
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
  constructor(readonly input: CreateQueueCommandInput) {
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
  ): Handler<CreateQueueCommandInput, CreateQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateQueueCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "CreateQueueCommand";
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
  private serialize(input: CreateQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateQueueCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateQueueCommandOutput> {
    return de_CreateQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
