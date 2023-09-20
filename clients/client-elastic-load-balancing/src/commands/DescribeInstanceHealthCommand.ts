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
import { DescribeEndPointStateInput, DescribeEndPointStateOutput } from "../models/models_0";
import { de_DescribeInstanceHealthCommand, se_DescribeInstanceHealthCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceHealthCommand}.
 */
export interface DescribeInstanceHealthCommandInput extends DescribeEndPointStateInput {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceHealthCommand}.
 */
export interface DescribeInstanceHealthCommandOutput extends DescribeEndPointStateOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeInstanceHealthCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeInstanceHealthCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DescribeEndPointStateInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   Instances: [ // Instances
 *     { // Instance
 *       InstanceId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DescribeInstanceHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndPointStateOutput
 * //   InstanceStates: [ // InstanceStates
 * //     { // InstanceState
 * //       InstanceId: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       ReasonCode: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInstanceHealthCommandInput - {@link DescribeInstanceHealthCommandInput}
 * @returns {@link DescribeInstanceHealthCommandOutput}
 * @see {@link DescribeInstanceHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidEndPointException} (client fault)
 *  <p>The specified endpoint is not valid.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To describe the health of the instances for a load balancer
 * ```javascript
 * // This example describes the health of the instances for the specified load balancer.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new DescribeInstanceHealthCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceStates": [
 *     {
 *       "Description": "N/A",
 *       "InstanceId": "i-207d9717",
 *       "ReasonCode": "N/A",
 *       "State": "InService"
 *     },
 *     {
 *       "Description": "N/A",
 *       "InstanceId": "i-afefb49b",
 *       "ReasonCode": "N/A",
 *       "State": "InService"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elb-describe-instance-health-1
 * ```
 *
 */
export class DescribeInstanceHealthCommand extends $Command<
  DescribeInstanceHealthCommandInput,
  DescribeInstanceHealthCommandOutput,
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
  constructor(readonly input: DescribeInstanceHealthCommandInput) {
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
  ): Handler<DescribeInstanceHealthCommandInput, DescribeInstanceHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceHealthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DescribeInstanceHealthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v7",
        operation: "DescribeInstanceHealth",
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
  private serialize(input: DescribeInstanceHealthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInstanceHealthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstanceHealthCommandOutput> {
    return de_DescribeInstanceHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
