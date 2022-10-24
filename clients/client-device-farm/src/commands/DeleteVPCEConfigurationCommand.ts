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
  DeleteVPCEConfigurationRequest,
  DeleteVPCEConfigurationRequestFilterSensitiveLog,
  DeleteVPCEConfigurationResult,
  DeleteVPCEConfigurationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteVPCEConfigurationCommand,
  serializeAws_json1_1DeleteVPCEConfigurationCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteVPCEConfigurationCommandInput extends DeleteVPCEConfigurationRequest {}
export interface DeleteVPCEConfigurationCommandOutput extends DeleteVPCEConfigurationResult, __MetadataBearer {}

/**
 * <p>Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteVPCEConfigurationCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteVPCEConfigurationCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteVPCEConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVPCEConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteVPCEConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class DeleteVPCEConfigurationCommand extends $Command<
  DeleteVPCEConfigurationCommandInput,
  DeleteVPCEConfigurationCommandOutput,
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

  constructor(readonly input: DeleteVPCEConfigurationCommandInput) {
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
  ): Handler<DeleteVPCEConfigurationCommandInput, DeleteVPCEConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVPCEConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "DeleteVPCEConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVPCEConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteVPCEConfigurationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVPCEConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteVPCEConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVPCEConfigurationCommandOutput> {
    return deserializeAws_json1_1DeleteVPCEConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
