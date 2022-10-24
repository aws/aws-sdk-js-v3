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
  CreateJobQueueRequest,
  CreateJobQueueRequestFilterSensitiveLog,
  CreateJobQueueResponse,
  CreateJobQueueResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateJobQueueCommand,
  serializeAws_restJson1CreateJobQueueCommand,
} from "../protocols/Aws_restJson1";

export interface CreateJobQueueCommandInput extends CreateJobQueueRequest {}
export interface CreateJobQueueCommandOutput extends CreateJobQueueResponse, __MetadataBearer {}

/**
 * <p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the
 *    queue and assign an order of preference for the compute environments.</p>
 *          <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto
 *    its associated compute environments. For example, if a compute environment is associated with more than one job
 *    queue, the job queue with a higher priority is given preference for scheduling jobs to that compute
 *    environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CreateJobQueueCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CreateJobQueueCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new CreateJobQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateJobQueueCommandInput} for command's `input` shape.
 * @see {@link CreateJobQueueCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 */
export class CreateJobQueueCommand extends $Command<
  CreateJobQueueCommandInput,
  CreateJobQueueCommandOutput,
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

  constructor(readonly input: CreateJobQueueCommandInput) {
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
  ): Handler<CreateJobQueueCommandInput, CreateJobQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateJobQueueCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "CreateJobQueueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateJobQueueRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateJobQueueResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateJobQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateJobQueueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJobQueueCommandOutput> {
    return deserializeAws_restJson1CreateJobQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
