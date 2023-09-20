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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DeleteMessageRequest } from "../models/models_0";
import { de_DeleteMessageCommand, se_DeleteMessageCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteMessageCommand}.
 */
export interface DeleteMessageCommandInput extends DeleteMessageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMessageCommand}.
 */
export interface DeleteMessageCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified message from the specified queue. To select the message to
 *             delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the
 *                 <code>MessageId</code> which you receive when you send the message). Amazon SQS can
 *             delete a message from a queue even if a visibility timeout setting causes the message to
 *             be locked by another consumer. Amazon SQS automatically deletes messages left in a queue
 *             longer than the retention period configured for the queue. </p>
 *          <note>
 *             <p>The <code>ReceiptHandle</code> is associated with a <i>specific
 *                     instance</i> of receiving a message. If you receive a message more than
 *                 once, the <code>ReceiptHandle</code> is different each time you receive a message.
 *                 When you use the <code>DeleteMessage</code> action, you must provide the most
 *                 recently received <code>ReceiptHandle</code> for the message (otherwise, the request
 *                 succeeds, but the message will not be deleted).</p>
 *             <p>For standard queues, it is possible to receive a message even after you
 *                 delete it. This might happen on rare occasions if one of the servers which stores a
 *                 copy of the message is unavailable when you send the request to delete the message.
 *                 The copy remains on the server and might be returned to you during a subsequent
 *                 receive request. You should ensure that your application is idempotent, so that
 *                 receiving a message more than once does not cause issues.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, DeleteMessageCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, DeleteMessageCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // DeleteMessageRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   ReceiptHandle: "STRING_VALUE", // required
 * };
 * const command = new DeleteMessageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMessageCommandInput - {@link DeleteMessageCommandInput}
 * @returns {@link DeleteMessageCommandOutput}
 * @see {@link DeleteMessageCommandInput} for command's `input` shape.
 * @see {@link DeleteMessageCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidIdFormat} (client fault)
 *  <p>The specified receipt handle isn't valid for the current version.</p>
 *
 * @throws {@link ReceiptHandleIsInvalid} (client fault)
 *  <p>The specified receipt handle isn't valid.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 */
export class DeleteMessageCommand extends $Command<
  DeleteMessageCommandInput,
  DeleteMessageCommandOutput,
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
  constructor(readonly input: DeleteMessageCommandInput) {
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
  ): Handler<DeleteMessageCommandInput, DeleteMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteMessageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "DeleteMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSQS",
        operation: "DeleteMessage",
      },
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
  private serialize(input: DeleteMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMessageCommandOutput> {
    return de_DeleteMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
