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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import {
  DeleteJobQueueRequest,
  DeleteJobQueueRequestFilterSensitiveLog,
  DeleteJobQueueResponse,
  DeleteJobQueueResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteJobQueueCommand,
  serializeAws_restJson1DeleteJobQueueCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteJobQueueCommandInput extends DeleteJobQueueRequest {}
export interface DeleteJobQueueCommandOutput extends DeleteJobQueueResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue.
 *    The jobs are terminated at a rate of about 16 jobs each second.</p>
 *          <p>It's not necessary to disassociate compute environments from a queue before submitting a
 *     <code>DeleteJobQueue</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeleteJobQueueCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeleteJobQueueCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DeleteJobQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteJobQueueCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 */
export class DeleteJobQueueCommand extends $Command<
  DeleteJobQueueCommandInput,
  DeleteJobQueueCommandOutput,
  BatchClientResolvedConfig
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

  constructor(readonly input: DeleteJobQueueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteJobQueueCommandInput, DeleteJobQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteJobQueueCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DeleteJobQueueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteJobQueueRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteJobQueueResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteJobQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteJobQueueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteJobQueueCommandOutput> {
    return deserializeAws_restJson1DeleteJobQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
