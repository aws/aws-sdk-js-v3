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

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { DescribeLoadBalancerPoliciesInput, DescribeLoadBalancerPoliciesOutput } from "../models/models_0";
import { de_DescribeLoadBalancerPoliciesCommand, se_DescribeLoadBalancerPoliciesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoadBalancerPoliciesCommand}.
 */
export interface DescribeLoadBalancerPoliciesCommandInput extends DescribeLoadBalancerPoliciesInput {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancerPoliciesCommand}.
 */
export interface DescribeLoadBalancerPoliciesCommandOutput
  extends DescribeLoadBalancerPoliciesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified policies.</p>
 *          <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer.
 *     If you specify a policy name associated with your load balancer, the action returns the description of that policy.
 *     If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies.
 *     The names of the sample policies have the <code>ELBSample-</code> prefix.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancerPoliciesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancerPoliciesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DescribeLoadBalancerPoliciesInput
 *   LoadBalancerName: "STRING_VALUE",
 *   PolicyNames: [ // PolicyNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeLoadBalancerPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBalancerPoliciesOutput
 * //   PolicyDescriptions: [ // PolicyDescriptions
 * //     { // PolicyDescription
 * //       PolicyName: "STRING_VALUE",
 * //       PolicyTypeName: "STRING_VALUE",
 * //       PolicyAttributeDescriptions: [ // PolicyAttributeDescriptions
 * //         { // PolicyAttributeDescription
 * //           AttributeName: "STRING_VALUE",
 * //           AttributeValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLoadBalancerPoliciesCommandInput - {@link DescribeLoadBalancerPoliciesCommandInput}
 * @returns {@link DescribeLoadBalancerPoliciesCommandOutput}
 * @see {@link DescribeLoadBalancerPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerPoliciesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *  <p>One or more of the specified policies do not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To describe a policy associated with a load balancer
 * ```javascript
 * // This example describes the specified policy associated with the specified load balancer.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer",
 *   "PolicyNames": [
 *     "my-authentication-policy"
 *   ]
 * };
 * const command = new DescribeLoadBalancerPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PolicyDescriptions": [
 *     {
 *       "PolicyAttributeDescriptions": [
 *         {
 *           "AttributeName": "PublicKeyPolicyName",
 *           "AttributeValue": "my-PublicKey-policy"
 *         }
 *       ],
 *       "PolicyName": "my-authentication-policy",
 *       "PolicyTypeName": "BackendServerAuthenticationPolicyType"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elb-describe-load-balancer-policies-1
 * ```
 *
 */
export class DescribeLoadBalancerPoliciesCommand extends $Command<
  DescribeLoadBalancerPoliciesCommandInput,
  DescribeLoadBalancerPoliciesCommandOutput,
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
  constructor(readonly input: DescribeLoadBalancerPoliciesCommandInput) {
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
  ): Handler<DescribeLoadBalancerPoliciesCommandInput, DescribeLoadBalancerPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLoadBalancerPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DescribeLoadBalancerPoliciesCommand";
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
  private serialize(input: DescribeLoadBalancerPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLoadBalancerPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLoadBalancerPoliciesCommandOutput> {
    return de_DescribeLoadBalancerPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
