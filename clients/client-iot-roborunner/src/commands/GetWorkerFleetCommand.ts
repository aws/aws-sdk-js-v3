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

import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import {
  GetWorkerFleetRequest,
  GetWorkerFleetRequestFilterSensitiveLog,
  GetWorkerFleetResponse,
  GetWorkerFleetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetWorkerFleetCommand,
  serializeAws_restJson1GetWorkerFleetCommand,
} from "../protocols/Aws_restJson1";

export interface GetWorkerFleetCommandInput extends GetWorkerFleetRequest {}
export interface GetWorkerFleetCommandOutput extends GetWorkerFleetResponse, __MetadataBearer {}

/**
 * Grants permission to get a worker fleet
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, GetWorkerFleetCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, GetWorkerFleetCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const command = new GetWorkerFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkerFleetCommandInput} for command's `input` shape.
 * @see {@link GetWorkerFleetCommandOutput} for command's `response` shape.
 * @see {@link IoTRoboRunnerClientResolvedConfig | config} for IoTRoboRunnerClient's `config` shape.
 *
 */
export class GetWorkerFleetCommand extends $Command<
  GetWorkerFleetCommandInput,
  GetWorkerFleetCommandOutput,
  IoTRoboRunnerClientResolvedConfig
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

  constructor(readonly input: GetWorkerFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTRoboRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorkerFleetCommandInput, GetWorkerFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWorkerFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTRoboRunnerClient";
    const commandName = "GetWorkerFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWorkerFleetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetWorkerFleetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWorkerFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetWorkerFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkerFleetCommandOutput> {
    return deserializeAws_restJson1GetWorkerFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
