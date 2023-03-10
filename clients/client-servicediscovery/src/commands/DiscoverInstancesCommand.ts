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
  DiscoverInstancesRequest,
  DiscoverInstancesRequestFilterSensitiveLog,
  DiscoverInstancesResponse,
  DiscoverInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DiscoverInstancesCommand,
  serializeAws_json1_1DiscoverInstancesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * The input for {@link DiscoverInstancesCommand}.
 */
export interface DiscoverInstancesCommandInput extends DiscoverInstancesRequest {}
/**
 * The output of {@link DiscoverInstancesCommand}.
 */
export interface DiscoverInstancesCommandOutput extends DiscoverInstancesResponse, __MetadataBearer {}

/**
 * <p>Discovers registered instances for a specified namespace and service. You can use
 *     <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and
 *    private DNS namespaces, you can also use DNS queries to discover instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DiscoverInstancesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DiscoverInstancesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new DiscoverInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DiscoverInstancesCommandInput} for command's `input` shape.
 * @see {@link DiscoverInstancesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @example Example: Discover registered instances
 * ```javascript
 * // Example: Discover registered instances
 * const input = {
 *   "HealthStatus": "ALL",
 *   "MaxResults": 10,
 *   "NamespaceName": "example.com",
 *   "ServiceName": "myservice"
 * };
 * const command = new DiscoverInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Instances": [
 *     {
 *       "Attributes": {
 *         "AWS_INSTANCE_IPV4": "172.2.1.3",
 *         "AWS_INSTANCE_PORT": "808"
 *       },
 *       "HealthStatus": "UNKNOWN",
 *       "InstanceId": "myservice-53",
 *       "NamespaceName": "example.com",
 *       "ServiceName": "myservice"
 *     }
 *   ]
 * }
 * *\/
 * // example id: example-discover-registered-instances-1587236343568
 * ```
 *
 */
export class DiscoverInstancesCommand extends $Command<
  DiscoverInstancesCommandInput,
  DiscoverInstancesCommandOutput,
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

  constructor(readonly input: DiscoverInstancesCommandInput) {
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
  ): Handler<DiscoverInstancesCommandInput, DiscoverInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DiscoverInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "DiscoverInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DiscoverInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DiscoverInstancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DiscoverInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DiscoverInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DiscoverInstancesCommandOutput> {
    return deserializeAws_json1_1DiscoverInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
