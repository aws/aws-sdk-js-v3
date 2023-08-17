// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DiscoverInstancesRequest, DiscoverInstancesResponse } from "../models/models_0";
import { de_DiscoverInstancesCommand, se_DiscoverInstancesCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DiscoverInstancesCommand}.
 */
export interface DiscoverInstancesCommandInput extends DiscoverInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DiscoverInstancesCommand}.
 */
export interface DiscoverInstancesCommandOutput extends DiscoverInstancesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Discovers registered instances for a specified namespace and service. You can use
 *     <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and
 *    private DNS namespaces, you can also use DNS queries to discover instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DiscoverInstancesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DiscoverInstancesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // DiscoverInstancesRequest
 *   NamespaceName: "STRING_VALUE", // required
 *   ServiceName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   QueryParameters: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   OptionalParameters: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   HealthStatus: "HEALTHY" || "UNHEALTHY" || "ALL" || "HEALTHY_OR_ELSE_ALL",
 * };
 * const command = new DiscoverInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DiscoverInstancesResponse
 * //   Instances: [ // HttpInstanceSummaryList
 * //     { // HttpInstanceSummary
 * //       InstanceId: "STRING_VALUE",
 * //       NamespaceName: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       HealthStatus: "HEALTHY" || "UNHEALTHY" || "UNKNOWN",
 * //       Attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DiscoverInstancesCommandInput - {@link DiscoverInstancesCommandInput}
 * @returns {@link DiscoverInstancesCommandOutput}
 * @see {@link DiscoverInstancesCommandInput} for command's `input` shape.
 * @see {@link DiscoverInstancesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link NamespaceNotFound} (client fault)
 *  <p>No namespace exists with the specified ID.</p>
 *
 * @throws {@link RequestLimitExceeded} (client fault)
 *  <p>The operation can't be completed because you've reached the quota for the number of
 *    requests. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/throttling.html">Cloud Map API request throttling quota</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DiscoverInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DiscoverInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DiscoverInstancesCommandOutput> {
    return de_DiscoverInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
