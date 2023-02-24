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

import {
  DeleteMessageBatchRequest,
  DeleteMessageBatchRequestFilterSensitiveLog,
  DeleteMessageBatchResult,
  DeleteMessageBatchResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteMessageBatchCommand,
  serializeAws_queryDeleteMessageBatchCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

export interface DeleteMessageBatchCommandInput extends DeleteMessageBatchRequest {}
export interface DeleteMessageBatchCommandOutput extends DeleteMessageBatchResult, __MetadataBearer {}

/**
 * <p>Deletes up to ten messages from the specified queue. This is a batch version of <code>
 *                <a>DeleteMessage</a>.</code> The result of the action on each message is reported individually in the response.</p>
 *          <important>
 *             <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
 *          </important>
 *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
 *          <p>
 *             <code>&AttributeName.1=first</code>
 *          </p>
 *          <p>
 *             <code>&AttributeName.2=second</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, DeleteMessageBatchCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, DeleteMessageBatchCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new DeleteMessageBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMessageBatchCommandInput} for command's `input` shape.
 * @see {@link DeleteMessageBatchCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 */
export class DeleteMessageBatchCommand extends $Command<
  DeleteMessageBatchCommandInput,
  DeleteMessageBatchCommandOutput,
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

  constructor(readonly input: DeleteMessageBatchCommandInput) {
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
  ): Handler<DeleteMessageBatchCommandInput, DeleteMessageBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMessageBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "DeleteMessageBatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMessageBatchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteMessageBatchResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMessageBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteMessageBatchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMessageBatchCommandOutput> {
    return deserializeAws_queryDeleteMessageBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
