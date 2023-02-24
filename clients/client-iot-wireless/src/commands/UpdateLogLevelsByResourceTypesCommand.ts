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
  UpdateLogLevelsByResourceTypesRequest,
  UpdateLogLevelsByResourceTypesRequestFilterSensitiveLog,
  UpdateLogLevelsByResourceTypesResponse,
  UpdateLogLevelsByResourceTypesResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommand,
  serializeAws_restJson1UpdateLogLevelsByResourceTypesCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateLogLevelsByResourceTypesCommandInput extends UpdateLogLevelsByResourceTypesRequest {}
export interface UpdateLogLevelsByResourceTypesCommandOutput
  extends UpdateLogLevelsByResourceTypesResponse,
    __MetadataBearer {}

/**
 * <p>Set default log level, or log levels by resource types. This can be for wireless device log options or
 *             wireless gateways log options and is used to control the log messages that'll be displayed in CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateLogLevelsByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateLogLevelsByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new UpdateLogLevelsByResourceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLogLevelsByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link UpdateLogLevelsByResourceTypesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class UpdateLogLevelsByResourceTypesCommand extends $Command<
  UpdateLogLevelsByResourceTypesCommandInput,
  UpdateLogLevelsByResourceTypesCommandOutput,
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

  constructor(readonly input: UpdateLogLevelsByResourceTypesCommandInput) {
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
  ): Handler<UpdateLogLevelsByResourceTypesCommandInput, UpdateLogLevelsByResourceTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLogLevelsByResourceTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "UpdateLogLevelsByResourceTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLogLevelsByResourceTypesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateLogLevelsByResourceTypesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateLogLevelsByResourceTypesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateLogLevelsByResourceTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLogLevelsByResourceTypesCommandOutput> {
    return deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
