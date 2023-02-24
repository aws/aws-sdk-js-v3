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
  UpdateMaintenanceStartTimeInput,
  UpdateMaintenanceStartTimeInputFilterSensitiveLog,
  UpdateMaintenanceStartTimeOutput,
  UpdateMaintenanceStartTimeOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateMaintenanceStartTimeCommand,
  serializeAws_json1_1UpdateMaintenanceStartTimeCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface UpdateMaintenanceStartTimeCommandInput extends UpdateMaintenanceStartTimeInput {}
export interface UpdateMaintenanceStartTimeCommandOutput extends UpdateMaintenanceStartTimeOutput, __MetadataBearer {}

/**
 * <p>Updates a gateway's weekly maintenance start time information, including day and
 *          time of the week. The maintenance time is the time in your gateway's time zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateMaintenanceStartTimeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateMaintenanceStartTimeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMaintenanceStartTimeCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceStartTimeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class UpdateMaintenanceStartTimeCommand extends $Command<
  UpdateMaintenanceStartTimeCommandInput,
  UpdateMaintenanceStartTimeCommandOutput,
  StorageGatewayClientResolvedConfig
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

  constructor(readonly input: UpdateMaintenanceStartTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMaintenanceStartTimeCommandInput, UpdateMaintenanceStartTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMaintenanceStartTimeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateMaintenanceStartTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMaintenanceStartTimeInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateMaintenanceStartTimeOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMaintenanceStartTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateMaintenanceStartTimeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateMaintenanceStartTimeCommandOutput> {
    return deserializeAws_json1_1UpdateMaintenanceStartTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
