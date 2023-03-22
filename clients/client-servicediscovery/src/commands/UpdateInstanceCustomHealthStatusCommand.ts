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

/**
 * @public
 *
 * The input for {@link UpdateInstanceCustomHealthStatusCommand}.
 */
export interface UpdateInstanceCustomHealthStatusCommandInput extends UpdateInstanceCustomHealthStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInstanceCustomHealthStatusCommand}.
 */
export interface UpdateInstanceCustomHealthStatusCommandOutput extends __MetadataBearer {}

/**
 * @public
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
 * @param UpdateInstanceCustomHealthStatusCommandInput - {@link UpdateInstanceCustomHealthStatusCommandInput}
 * @returns {@link UpdateInstanceCustomHealthStatusCommandOutput}
 * @see {@link UpdateInstanceCustomHealthStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceCustomHealthStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link CustomHealthNotFound} (client fault)
 *  <p>The health check for the instance that's specified by <code>ServiceId</code> and
 *     <code>InstanceId</code> isn't a custom health check. </p>
 *
 * @throws {@link InstanceNotFound} (client fault)
 *  <p>No instance exists with the specified ID, or the instance was recently registered, and
 *    information about the instance hasn't propagated yet.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link RequestLimitExceeded} (client fault)
 *  <p>The operation can't be completed because you've reached the quota for the number of
 *    requests. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/throttling.html">Cloud Map API request throttling quota</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 *
 * @example UpdateInstanceCustomHealthStatus Example
 * ```javascript
 * // This example submits a request to change the health status of an instance associated with a service with a custom health check to HEALTHY.
 * const input = {
 *   "InstanceId": "i-abcd1234",
 *   "ServiceId": "srv-e4anhexample0004",
 *   "Status": "HEALTHY"
 * };
 * const command = new UpdateInstanceCustomHealthStatusCommand(input);
 * await client.send(command);
 * // example id: updateinstancecustomhealthstatus-example-1590118408574
 * ```
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

  /**
   * @public
   */
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

  /**
   * @internal
   */
  private serialize(
    input: UpdateInstanceCustomHealthStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateInstanceCustomHealthStatusCommandOutput> {
    return deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
