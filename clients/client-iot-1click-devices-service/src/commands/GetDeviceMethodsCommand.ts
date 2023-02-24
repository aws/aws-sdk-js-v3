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
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import {
  GetDeviceMethodsRequest,
  GetDeviceMethodsRequestFilterSensitiveLog,
  GetDeviceMethodsResponse,
  GetDeviceMethodsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDeviceMethodsCommand,
  serializeAws_restJson1GetDeviceMethodsCommand,
} from "../protocols/Aws_restJson1";

export interface GetDeviceMethodsCommandInput extends GetDeviceMethodsRequest {}
export interface GetDeviceMethodsCommandOutput extends GetDeviceMethodsResponse, __MetadataBearer {}

/**
 * <p>Given a device ID, returns the invokable methods associated with the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, GetDeviceMethodsCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, GetDeviceMethodsCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new GetDeviceMethodsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceMethodsCommandInput} for command's `input` shape.
 * @see {@link GetDeviceMethodsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 */
export class GetDeviceMethodsCommand extends $Command<
  GetDeviceMethodsCommandInput,
  GetDeviceMethodsCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
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

  constructor(readonly input: GetDeviceMethodsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickDevicesServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeviceMethodsCommandInput, GetDeviceMethodsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeviceMethodsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "GetDeviceMethodsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDeviceMethodsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDeviceMethodsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDeviceMethodsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDeviceMethodsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeviceMethodsCommandOutput> {
    return deserializeAws_restJson1GetDeviceMethodsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
