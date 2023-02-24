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
  CreateServiceRequest,
  CreateServiceRequestFilterSensitiveLog,
  CreateServiceResponse,
  CreateServiceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateServiceCommand,
  serializeAws_json1_1CreateServiceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

export interface CreateServiceCommandInput extends CreateServiceRequest {}
export interface CreateServiceCommandOutput extends CreateServiceResponse, __MetadataBearer {}

/**
 * <p>Creates a service. This action defines the configuration for the following entities:</p>
 *          <ul>
 *             <li>
 *                <p>For public and private DNS namespaces, one of the following combinations of DNS records in
 *      Amazon Route 53:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>A</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>AAAA</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>A</code> and <code>AAAA</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>SRV</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>CNAME</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Optionally, a health check</p>
 *             </li>
 *          </ul>
 *          <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and
 *    Cloud Map uses the values in the configuration to create the specified entities.</p>
 *          <p>For the current quota on the number of instances that you can register using the same
 *    namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreateServiceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreateServiceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServiceCommandInput} for command's `input` shape.
 * @see {@link CreateServiceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 */
export class CreateServiceCommand extends $Command<
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
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

  constructor(readonly input: CreateServiceCommandInput) {
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
  ): Handler<CreateServiceCommandInput, CreateServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateServiceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "CreateServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateServiceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateServiceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateServiceCommandOutput> {
    return deserializeAws_json1_1CreateServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
