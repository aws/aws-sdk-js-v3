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
  RegisterInstanceRequest,
  RegisterInstanceRequestFilterSensitiveLog,
  RegisterInstanceResponse,
  RegisterInstanceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RegisterInstanceCommand,
  serializeAws_json1_1RegisterInstanceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

export interface RegisterInstanceCommandInput extends RegisterInstanceRequest {}
export interface RegisterInstanceCommandOutput extends RegisterInstanceResponse, __MetadataBearer {}

/**
 * <p>Creates or updates one or more records and, optionally, creates a health check based on the
 *    settings in a specified service. When you submit a <code>RegisterInstance</code> request, the
 *    following occurs:</p>
 *          <ul>
 *             <li>
 *                <p>For each DNS record that you define in the service that's specified by
 *       <code>ServiceId</code>, a record is created or updated in the hosted zone that's associated
 *      with the corresponding namespace.</p>
 *             </li>
 *             <li>
 *                <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on
 *      the settings in the health check configuration.</p>
 *             </li>
 *             <li>
 *                <p>The health check, if any, is associated with each of the new or updated records.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>One <code>RegisterInstance</code> request must complete before you can submit another
 *     request and specify the same service ID and instance ID.</p>
 *          </important>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p>
 *          <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable
 *    value:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>If the health check is healthy</b>: returns all the
 *      records</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>If the health check is unhealthy</b>: returns the applicable
 *      value for the last healthy instance</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>If you didn't specify a health check configuration</b>:
 *      returns all the records</p>
 *             </li>
 *          </ul>
 *          <p>For the current quota on the number of instances that you can register using the same
 *    namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, RegisterInstanceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, RegisterInstanceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new RegisterInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterInstanceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 */
export class RegisterInstanceCommand extends $Command<
  RegisterInstanceCommandInput,
  RegisterInstanceCommandOutput,
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

  constructor(readonly input: RegisterInstanceCommandInput) {
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
  ): Handler<RegisterInstanceCommandInput, RegisterInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "RegisterInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterInstanceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterInstanceCommandOutput> {
    return deserializeAws_json1_1RegisterInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
