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
  CancelJobRequest,
  CancelJobRequestFilterSensitiveLog,
  CancelJobResponse,
  CancelJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CancelJobCommand,
  serializeAws_restJson1CancelJobCommand,
} from "../protocols/Aws_restJson1";

export interface CancelJobCommandInput extends CancelJobRequest {}
export interface CancelJobCommandOutput extends CancelJobResponse, __MetadataBearer {}

/**
 * <p>Cancels a job in an Batch job queue. Jobs that are in the <code>SUBMITTED</code>, <code>PENDING</code>, or
 *    <code>RUNNABLE</code> state are canceled. Jobs that progressed to the <code>STARTING</code> or <code>RUNNING</code>
 *    state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be
 *    terminated with the <a>TerminateJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CancelJobCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CancelJobCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJobCommandInput} for command's `input` shape.
 * @see {@link CancelJobCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 */
export class CancelJobCommand extends $Command<
  CancelJobCommandInput,
  CancelJobCommandOutput,
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

  constructor(readonly input: CancelJobCommandInput) {
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
  ): Handler<CancelJobCommandInput, CancelJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CancelJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "CancelJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelJobCommandOutput> {
    return deserializeAws_restJson1CancelJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
