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
  TerminateJobRequest,
  TerminateJobRequestFilterSensitiveLog,
  TerminateJobResponse,
  TerminateJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1TerminateJobCommand,
  serializeAws_restJson1TerminateJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link TerminateJobCommand}.
 */
export interface TerminateJobCommandInput extends TerminateJobRequest {}
/**
 * The output of {@link TerminateJobCommand}.
 */
export interface TerminateJobCommandOutput extends TerminateJobResponse, __MetadataBearer {}

/**
 * <p>Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are
 *    terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the
 *     <code>STARTING</code> state are cancelled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, TerminateJobCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, TerminateJobCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new TerminateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateJobCommandInput} for command's `input` shape.
 * @see {@link TerminateJobCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 *
 * @example To terminate a job
 * ```javascript
 * // This example terminates a job with the specified job ID.
 * const input = {
 *   "jobId": "61e743ed-35e4-48da-b2de-5c8333821c84",
 *   "reason": "Terminating job."
 * };
 * const command = new TerminateJobCommand(input);
 * await client.send(command);
 * // example id: to-terminate-a-job-1481154558276
 * ```
 *
 */
export class TerminateJobCommand extends $Command<
  TerminateJobCommandInput,
  TerminateJobCommandOutput,
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

  constructor(readonly input: TerminateJobCommandInput) {
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
  ): Handler<TerminateJobCommandInput, TerminateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TerminateJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "TerminateJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TerminateJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TerminateJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TerminateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TerminateJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TerminateJobCommandOutput> {
    return deserializeAws_restJson1TerminateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
