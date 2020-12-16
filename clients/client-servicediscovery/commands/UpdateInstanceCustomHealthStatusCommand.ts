import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { UpdateInstanceCustomHealthStatusRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand,
  serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type UpdateInstanceCustomHealthStatusCommandInput = UpdateInstanceCustomHealthStatusRequest;
export type UpdateInstanceCustomHealthStatusCommandOutput = __MetadataBearer;

/**
 * <p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p>
 *          <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks,
 *    which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the
 *    status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>
 */
export class UpdateInstanceCustomHealthStatusCommand extends $Command<
  UpdateInstanceCustomHealthStatusCommandInput,
  UpdateInstanceCustomHealthStatusCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "UpdateInstanceCustomHealthStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateInstanceCustomHealthStatusRequest.filterSensitiveLog,
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
