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
import { DescribeLoadBalancerAttributesInput, DescribeLoadBalancerAttributesOutput } from "../models/models_0";
import {
  de_DescribeLoadBalancerAttributesCommand,
  se_DescribeLoadBalancerAttributesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoadBalancerAttributesCommand}.
 */
export interface DescribeLoadBalancerAttributesCommandInput extends DescribeLoadBalancerAttributesInput {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancerAttributesCommand}.
 */
export interface DescribeLoadBalancerAttributesCommandOutput
  extends DescribeLoadBalancerAttributesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the attributes for the specified load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DescribeLoadBalancerAttributesInput
 *   LoadBalancerName: "STRING_VALUE", // required
 * };
 * const command = new DescribeLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBalancerAttributesOutput
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
 * @param DescribeLoadBalancerAttributesCommandInput - {@link DescribeLoadBalancerAttributesCommandInput}
 * @returns {@link DescribeLoadBalancerAttributesCommandOutput}
 * @see {@link DescribeLoadBalancerAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link LoadBalancerAttributeNotFoundException} (client fault)
 *  <p>The specified load balancer attribute does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To describe the attributes of a load balancer
 * ```javascript
 * // This example describes the attributes of the specified load balancer.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new DescribeLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoadBalancerAttributes": {
 *     "AccessLog": {
 *       "Enabled": false
 *     },
 *     "ConnectionDraining": {
 *       "Enabled": false,
 *       "Timeout": 300
 *     },
 *     "ConnectionSettings": {
 *       "IdleTimeout": 60
 *     },
 *     "CrossZoneLoadBalancing": {
 *       "Enabled": false
 *     }
 *   }
 * }
 * *\/
 * // example id: elb-describe-load-balancer-attributes-1
 * ```
 *
 */
export class DescribeLoadBalancerAttributesCommand extends $Command<
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput,
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
  constructor(readonly input: DescribeLoadBalancerAttributesCommandInput) {
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
  ): Handler<DescribeLoadBalancerAttributesCommandInput, DescribeLoadBalancerAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLoadBalancerAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DescribeLoadBalancerAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v7",
        operation: "DescribeLoadBalancerAttributes",
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
  private serialize(
    input: DescribeLoadBalancerAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeLoadBalancerAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLoadBalancerAttributesCommandOutput> {
    return de_DescribeLoadBalancerAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
