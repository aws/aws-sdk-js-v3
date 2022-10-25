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
  StartSimulationJobBatchRequest,
  StartSimulationJobBatchRequestFilterSensitiveLog,
  StartSimulationJobBatchResponse,
  StartSimulationJobBatchResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartSimulationJobBatchCommand,
  serializeAws_restJson1StartSimulationJobBatchCommand,
} from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

export interface StartSimulationJobBatchCommandInput extends StartSimulationJobBatchRequest {}
export interface StartSimulationJobBatchCommandOutput extends StartSimulationJobBatchResponse, __MetadataBearer {}

/**
 * <p>Starts a new simulation job batch. The batch is defined using one or more
 *             <code>SimulationJobRequest</code> objects. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, StartSimulationJobBatchCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, StartSimulationJobBatchCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new StartSimulationJobBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSimulationJobBatchCommandInput} for command's `input` shape.
 * @see {@link StartSimulationJobBatchCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 */
export class StartSimulationJobBatchCommand extends $Command<
  StartSimulationJobBatchCommandInput,
  StartSimulationJobBatchCommandOutput,
  RoboMakerClientResolvedConfig
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

  constructor(readonly input: StartSimulationJobBatchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSimulationJobBatchCommandInput, StartSimulationJobBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSimulationJobBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "StartSimulationJobBatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSimulationJobBatchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartSimulationJobBatchResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSimulationJobBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartSimulationJobBatchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSimulationJobBatchCommandOutput> {
    return deserializeAws_restJson1StartSimulationJobBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
