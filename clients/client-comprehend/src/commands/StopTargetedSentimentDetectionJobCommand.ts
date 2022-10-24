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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  StopTargetedSentimentDetectionJobRequest,
  StopTargetedSentimentDetectionJobRequestFilterSensitiveLog,
  StopTargetedSentimentDetectionJobResponse,
  StopTargetedSentimentDetectionJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopTargetedSentimentDetectionJobCommand,
  serializeAws_json1_1StopTargetedSentimentDetectionJobCommand,
} from "../protocols/Aws_json1_1";

export interface StopTargetedSentimentDetectionJobCommandInput extends StopTargetedSentimentDetectionJobRequest {}
export interface StopTargetedSentimentDetectionJobCommandOutput
  extends StopTargetedSentimentDetectionJobResponse,
    __MetadataBearer {}

/**
 * <p>Stops a targeted sentiment detection job in progress.</p>
 *          <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put
 *       into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it
 *       is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the
 *       <code>STOPPED</code> state.</p>
 *          <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the
 *       <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400
 *       Internal Request Exception. </p>
 *          <p>When a job is stopped, any documents already processed are written to the output
 *       location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StopTargetedSentimentDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopTargetedSentimentDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StopTargetedSentimentDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTargetedSentimentDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StopTargetedSentimentDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class StopTargetedSentimentDetectionJobCommand extends $Command<
  StopTargetedSentimentDetectionJobCommandInput,
  StopTargetedSentimentDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
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

  constructor(readonly input: StopTargetedSentimentDetectionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopTargetedSentimentDetectionJobCommandInput, StopTargetedSentimentDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopTargetedSentimentDetectionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StopTargetedSentimentDetectionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopTargetedSentimentDetectionJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopTargetedSentimentDetectionJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StopTargetedSentimentDetectionJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StopTargetedSentimentDetectionJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopTargetedSentimentDetectionJobCommandOutput> {
    return deserializeAws_json1_1StopTargetedSentimentDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
