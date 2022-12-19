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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import {
  StopCalculationExecutionRequest,
  StopCalculationExecutionRequestFilterSensitiveLog,
  StopCalculationExecutionResponse,
  StopCalculationExecutionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopCalculationExecutionCommand,
  serializeAws_json1_1StopCalculationExecutionCommand,
} from "../protocols/Aws_json1_1";

export interface StopCalculationExecutionCommandInput extends StopCalculationExecutionRequest {}
export interface StopCalculationExecutionCommandOutput extends StopCalculationExecutionResponse, __MetadataBearer {}

/**
 * <p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code>
 *             call on a calculation that is already in a terminal state (for example,
 *                 <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but
 *             has no effect.</p>
 *          <note>
 *             <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot
 *                 be cancelled, you can be charged for its completion. If you are concerned about
 *                 being charged for a calculation that cannot be cancelled, consider terminating the
 *                 session in which the calculation is running.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StopCalculationExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StopCalculationExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new StopCalculationExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopCalculationExecutionCommandInput} for command's `input` shape.
 * @see {@link StopCalculationExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class StopCalculationExecutionCommand extends $Command<
  StopCalculationExecutionCommandInput,
  StopCalculationExecutionCommandOutput,
  AthenaClientResolvedConfig
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

  constructor(readonly input: StopCalculationExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopCalculationExecutionCommandInput, StopCalculationExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopCalculationExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "StopCalculationExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopCalculationExecutionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopCalculationExecutionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopCalculationExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopCalculationExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopCalculationExecutionCommandOutput> {
    return deserializeAws_json1_1StopCalculationExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
