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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  UpdateFuotaTaskRequest,
  UpdateFuotaTaskRequestFilterSensitiveLog,
  UpdateFuotaTaskResponse,
  UpdateFuotaTaskResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateFuotaTaskCommand,
  serializeAws_restJson1UpdateFuotaTaskCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateFuotaTaskCommandInput extends UpdateFuotaTaskRequest {}
export interface UpdateFuotaTaskCommandOutput extends UpdateFuotaTaskResponse, __MetadataBearer {}

/**
 * <p>Updates properties of a FUOTA task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new UpdateFuotaTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link UpdateFuotaTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class UpdateFuotaTaskCommand extends $Command<
  UpdateFuotaTaskCommandInput,
  UpdateFuotaTaskCommandOutput,
  IoTWirelessClientResolvedConfig
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

  constructor(readonly input: UpdateFuotaTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFuotaTaskCommandInput, UpdateFuotaTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFuotaTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "UpdateFuotaTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFuotaTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateFuotaTaskResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFuotaTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFuotaTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFuotaTaskCommandOutput> {
    return deserializeAws_restJson1UpdateFuotaTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
