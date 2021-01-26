import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { RegisterInstanceRequest, RegisterInstanceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterInstanceCommand,
  serializeAws_json1_1RegisterInstanceCommand,
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

export type RegisterInstanceCommandInput = RegisterInstanceRequest;
export type RegisterInstanceCommandOutput = RegisterInstanceResponse & __MetadataBearer;

/**
 * <p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a
 *    specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p>
 *          <ul>
 *             <li>
 *                <p>For each DNS record that you define in the service that is specified by <code>ServiceId</code>, a record is
 *      created or updated in the hosted zone that is associated with the corresponding namespace.</p>
 *             </li>
 *             <li>
 *                <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the
 *      health check configuration.</p>
 *             </li>
 *             <li>
 *                <p>The health check, if any, is associated with each of the new or updated records.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the
 *     same service ID and instance ID.</p>
 *          </important>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p>
 *          <p>When AWS Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>If the health check is healthy</b>: returns all the records</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>If the health check is unhealthy</b>: returns the applicable value for the last
 *      healthy instance</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>If you didn't specify a health check configuration</b>: returns all the
 *      records</p>
 *             </li>
 *          </ul>
 *          <p>For the current quota on the number of instances that you can register using the same namespace and using the
 *    same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map
 *     Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
 */
export class RegisterInstanceCommand extends $Command<
  RegisterInstanceCommandInput,
  RegisterInstanceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "RegisterInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterInstanceResponse.filterSensitiveLog,
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
