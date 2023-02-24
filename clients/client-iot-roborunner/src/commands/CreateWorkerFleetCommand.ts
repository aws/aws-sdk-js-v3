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
  CreateWorkerFleetRequest,
  CreateWorkerFleetRequestFilterSensitiveLog,
  CreateWorkerFleetResponse,
  CreateWorkerFleetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateWorkerFleetCommand,
  serializeAws_restJson1CreateWorkerFleetCommand,
} from "../protocols/Aws_restJson1";

export interface CreateWorkerFleetCommandInput extends CreateWorkerFleetRequest {}
export interface CreateWorkerFleetCommandOutput extends CreateWorkerFleetResponse, __MetadataBearer {}

/**
 * Grants permission to create a worker fleet
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, CreateWorkerFleetCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, CreateWorkerFleetCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const command = new CreateWorkerFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkerFleetCommandInput} for command's `input` shape.
 * @see {@link CreateWorkerFleetCommandOutput} for command's `response` shape.
 * @see {@link IoTRoboRunnerClientResolvedConfig | config} for IoTRoboRunnerClient's `config` shape.
 *
 */
export class CreateWorkerFleetCommand extends $Command<
  CreateWorkerFleetCommandInput,
  CreateWorkerFleetCommandOutput,
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

  constructor(readonly input: CreateWorkerFleetCommandInput) {
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
  ): Handler<CreateWorkerFleetCommandInput, CreateWorkerFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorkerFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTRoboRunnerClient";
    const commandName = "CreateWorkerFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkerFleetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkerFleetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorkerFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateWorkerFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkerFleetCommandOutput> {
    return deserializeAws_restJson1CreateWorkerFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
