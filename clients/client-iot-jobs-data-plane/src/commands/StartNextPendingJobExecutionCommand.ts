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

import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import {
  StartNextPendingJobExecutionRequest,
  StartNextPendingJobExecutionRequestFilterSensitiveLog,
  StartNextPendingJobExecutionResponse,
  StartNextPendingJobExecutionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartNextPendingJobExecutionCommand,
  serializeAws_restJson1StartNextPendingJobExecutionCommand,
} from "../protocols/Aws_restJson1";

export interface StartNextPendingJobExecutionCommandInput extends StartNextPendingJobExecutionRequest {}
export interface StartNextPendingJobExecutionCommandOutput
  extends StartNextPendingJobExecutionResponse,
    __MetadataBearer {}

/**
 * <p>Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, StartNextPendingJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, StartNextPendingJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const command = new StartNextPendingJobExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartNextPendingJobExecutionCommandInput} for command's `input` shape.
 * @see {@link StartNextPendingJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for IoTJobsDataPlaneClient's `config` shape.
 *
 */
export class StartNextPendingJobExecutionCommand extends $Command<
  StartNextPendingJobExecutionCommandInput,
  StartNextPendingJobExecutionCommandOutput,
  IoTJobsDataPlaneClientResolvedConfig
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

  constructor(readonly input: StartNextPendingJobExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTJobsDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartNextPendingJobExecutionCommandInput, StartNextPendingJobExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartNextPendingJobExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTJobsDataPlaneClient";
    const commandName = "StartNextPendingJobExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartNextPendingJobExecutionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartNextPendingJobExecutionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartNextPendingJobExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartNextPendingJobExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartNextPendingJobExecutionCommandOutput> {
    return deserializeAws_restJson1StartNextPendingJobExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
