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
  DeregisterTargetFromMaintenanceWindowRequest,
  DeregisterTargetFromMaintenanceWindowRequestFilterSensitiveLog,
  DeregisterTargetFromMaintenanceWindowResult,
  DeregisterTargetFromMaintenanceWindowResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand,
  serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface DeregisterTargetFromMaintenanceWindowCommandInput
  extends DeregisterTargetFromMaintenanceWindowRequest {}
export interface DeregisterTargetFromMaintenanceWindowCommandOutput
  extends DeregisterTargetFromMaintenanceWindowResult,
    __MetadataBearer {}

/**
 * <p>Removes a target from a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterTargetFromMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterTargetFromMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeregisterTargetFromMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTargetFromMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link DeregisterTargetFromMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class DeregisterTargetFromMaintenanceWindowCommand extends $Command<
  DeregisterTargetFromMaintenanceWindowCommandInput,
  DeregisterTargetFromMaintenanceWindowCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: DeregisterTargetFromMaintenanceWindowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterTargetFromMaintenanceWindowCommandInput, DeregisterTargetFromMaintenanceWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterTargetFromMaintenanceWindowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeregisterTargetFromMaintenanceWindowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterTargetFromMaintenanceWindowRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterTargetFromMaintenanceWindowResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterTargetFromMaintenanceWindowCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterTargetFromMaintenanceWindowCommandOutput> {
    return deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
