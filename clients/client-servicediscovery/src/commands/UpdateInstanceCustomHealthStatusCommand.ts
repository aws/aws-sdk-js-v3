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
  UpdateInstanceCustomHealthStatusRequest,
  UpdateInstanceCustomHealthStatusRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand,
  serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

export interface UpdateInstanceCustomHealthStatusCommandInput extends UpdateInstanceCustomHealthStatusRequest {}
export interface UpdateInstanceCustomHealthStatusCommandOutput extends __MetadataBearer {}

/**
 * <p>Submits a request to change the health status of a custom health check to healthy or
 *    unhealthy.</p>
 *          <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for
 *    custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create
 *    a service. You can't use it to change the status for Route 53 health checks, which you define using
 *     <code>HealthCheckConfig</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdateInstanceCustomHealthStatusCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdateInstanceCustomHealthStatusCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new UpdateInstanceCustomHealthStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceCustomHealthStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceCustomHealthStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 */
export class UpdateInstanceCustomHealthStatusCommand extends $Command<
  UpdateInstanceCustomHealthStatusCommandInput,
  UpdateInstanceCustomHealthStatusCommandOutput,
  ServiceDiscoveryClientResolvedConfig
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

  constructor(readonly input: UpdateInstanceCustomHealthStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInstanceCustomHealthStatusCommandInput, UpdateInstanceCustomHealthStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateInstanceCustomHealthStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "UpdateInstanceCustomHealthStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateInstanceCustomHealthStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateInstanceCustomHealthStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateInstanceCustomHealthStatusCommandOutput> {
    return deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
