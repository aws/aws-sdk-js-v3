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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  GetDevicePoolCompatibilityRequest,
  GetDevicePoolCompatibilityRequestFilterSensitiveLog,
  GetDevicePoolCompatibilityResult,
  GetDevicePoolCompatibilityResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetDevicePoolCompatibilityCommand,
  serializeAws_json1_1GetDevicePoolCompatibilityCommand,
} from "../protocols/Aws_json1_1";

export interface GetDevicePoolCompatibilityCommandInput extends GetDevicePoolCompatibilityRequest {}
export interface GetDevicePoolCompatibilityCommandOutput extends GetDevicePoolCompatibilityResult, __MetadataBearer {}

/**
 * <p>Gets information about compatibility with a device pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetDevicePoolCompatibilityCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetDevicePoolCompatibilityCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetDevicePoolCompatibilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicePoolCompatibilityCommandInput} for command's `input` shape.
 * @see {@link GetDevicePoolCompatibilityCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class GetDevicePoolCompatibilityCommand extends $Command<
  GetDevicePoolCompatibilityCommandInput,
  GetDevicePoolCompatibilityCommandOutput,
  DeviceFarmClientResolvedConfig
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

  constructor(readonly input: GetDevicePoolCompatibilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDevicePoolCompatibilityCommandInput, GetDevicePoolCompatibilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDevicePoolCompatibilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetDevicePoolCompatibilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDevicePoolCompatibilityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDevicePoolCompatibilityResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDevicePoolCompatibilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDevicePoolCompatibilityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDevicePoolCompatibilityCommandOutput> {
    return deserializeAws_json1_1GetDevicePoolCompatibilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
