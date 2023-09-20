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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { ModifyLoadBalancerAttributesInput, ModifyLoadBalancerAttributesOutput } from "../models/models_0";
import { de_ModifyLoadBalancerAttributesCommand, se_ModifyLoadBalancerAttributesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyLoadBalancerAttributesCommand}.
 */
export interface ModifyLoadBalancerAttributesCommandInput extends ModifyLoadBalancerAttributesInput {}
/**
 * @public
 *
 * The output of {@link ModifyLoadBalancerAttributesCommand}.
 */
export interface ModifyLoadBalancerAttributesCommandOutput
  extends ModifyLoadBalancerAttributesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the attributes of the specified load balancer.</p>
 *         <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and
 *             <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute
 *             <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p>
 *         <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, ModifyLoadBalancerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, ModifyLoadBalancerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // ModifyLoadBalancerAttributesInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   LoadBalancerAttributes: { // LoadBalancerAttributes
 *     CrossZoneLoadBalancing: { // CrossZoneLoadBalancing
 *       Enabled: true || false, // required
 *     },
 *     AccessLog: { // AccessLog
 *       Enabled: true || false, // required
 *       S3BucketName: "STRING_VALUE",
 *       EmitInterval: Number("int"),
 *       S3BucketPrefix: "STRING_VALUE",
 *     },
 *     ConnectionDraining: { // ConnectionDraining
 *       Enabled: true || false, // required
 *       Timeout: Number("int"),
 *     },
 *     ConnectionSettings: { // ConnectionSettings
 *       IdleTimeout: Number("int"), // required
 *     },
 *     AdditionalAttributes: [ // AdditionalAttributes
 *       { // AdditionalAttribute
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyLoadBalancerAttributesOutput
 * //   LoadBalancerName: "STRING_VALUE",
 * //   LoadBalancerAttributes: { // LoadBalancerAttributes
 * //     CrossZoneLoadBalancing: { // CrossZoneLoadBalancing
 * //       Enabled: true || false, // required
 * //     },
 * //     AccessLog: { // AccessLog
 * //       Enabled: true || false, // required
 * //       S3BucketName: "STRING_VALUE",
 * //       EmitInterval: Number("int"),
 * //       S3BucketPrefix: "STRING_VALUE",
 * //     },
 * //     ConnectionDraining: { // ConnectionDraining
 * //       Enabled: true || false, // required
 * //       Timeout: Number("int"),
 * //     },
 * //     ConnectionSettings: { // ConnectionSettings
 * //       IdleTimeout: Number("int"), // required
 * //     },
 * //     AdditionalAttributes: [ // AdditionalAttributes
 * //       { // AdditionalAttribute
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyLoadBalancerAttributesCommandInput - {@link ModifyLoadBalancerAttributesCommandInput}
 * @returns {@link ModifyLoadBalancerAttributesCommandOutput}
 * @see {@link ModifyLoadBalancerAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyLoadBalancerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link LoadBalancerAttributeNotFoundException} (client fault)
 *  <p>The specified load balancer attribute does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To enable cross-zone load balancing
 * ```javascript
 * // This example enables cross-zone load balancing for the specified load balancer.
 * const input = {
 *   "LoadBalancerAttributes": {
 *     "CrossZoneLoadBalancing": {
 *       "Enabled": true
 *     }
 *   },
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoadBalancerAttributes": {
 *     "CrossZoneLoadBalancing": {
 *       "Enabled": true
 *     }
 *   },
 *   "LoadBalancerName": "my-load-balancer"
 * }
 * *\/
 * // example id: elb-modify-load-balancer-attributes-1
 * ```
 *
 * @example To enable connection draining
 * ```javascript
 * // This example enables connection draining for the specified load balancer.
 * const input = {
 *   "LoadBalancerAttributes": {
 *     "ConnectionDraining": {
 *       "Enabled": true,
 *       "Timeout": 300
 *     }
 *   },
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoadBalancerAttributes": {
 *     "ConnectionDraining": {
 *       "Enabled": true,
 *       "Timeout": 300
 *     }
 *   },
 *   "LoadBalancerName": "my-load-balancer"
 * }
 * *\/
 * // example id: elb-modify-load-balancer-attributes-2
 * ```
 *
 */
export class ModifyLoadBalancerAttributesCommand extends $Command<
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
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
  constructor(readonly input: ModifyLoadBalancerAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyLoadBalancerAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "ModifyLoadBalancerAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v7",
        operation: "ModifyLoadBalancerAttributes",
      },
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
  private serialize(input: ModifyLoadBalancerAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyLoadBalancerAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyLoadBalancerAttributesCommandOutput> {
    return de_ModifyLoadBalancerAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
