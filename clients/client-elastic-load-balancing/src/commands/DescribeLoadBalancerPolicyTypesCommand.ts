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
import { DescribeLoadBalancerPolicyTypesInput, DescribeLoadBalancerPolicyTypesOutput } from "../models/models_0";
import {
  de_DescribeLoadBalancerPolicyTypesCommand,
  se_DescribeLoadBalancerPolicyTypesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoadBalancerPolicyTypesCommand}.
 */
export interface DescribeLoadBalancerPolicyTypesCommandInput extends DescribeLoadBalancerPolicyTypesInput {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancerPolicyTypesCommand}.
 */
export interface DescribeLoadBalancerPolicyTypesCommandOutput
  extends DescribeLoadBalancerPolicyTypesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified load balancer policy types or all load balancer policy types.</p>
 *          <p>The description of each type indicates how it can be used. For example,
 *            some policies can be used only with layer 7 listeners,
 *            some policies can be used only with layer 4 listeners,
 *            and some policies can be used only with your EC2 instances.</p>
 *          <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types.
 *            Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or
 *            <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancerPolicyTypesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancerPolicyTypesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DescribeLoadBalancerPolicyTypesInput
 *   PolicyTypeNames: [ // PolicyTypeNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeLoadBalancerPolicyTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBalancerPolicyTypesOutput
 * //   PolicyTypeDescriptions: [ // PolicyTypeDescriptions
 * //     { // PolicyTypeDescription
 * //       PolicyTypeName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       PolicyAttributeTypeDescriptions: [ // PolicyAttributeTypeDescriptions
 * //         { // PolicyAttributeTypeDescription
 * //           AttributeName: "STRING_VALUE",
 * //           AttributeType: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           DefaultValue: "STRING_VALUE",
 * //           Cardinality: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLoadBalancerPolicyTypesCommandInput - {@link DescribeLoadBalancerPolicyTypesCommandInput}
 * @returns {@link DescribeLoadBalancerPolicyTypesCommandOutput}
 * @see {@link DescribeLoadBalancerPolicyTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerPolicyTypesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link PolicyTypeNotFoundException} (client fault)
 *  <p>One or more of the specified policy types do not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To describe a load balancer policy type defined by Elastic Load Balancing
 * ```javascript
 * // This example describes the specified load balancer policy type.
 * const input = {
 *   "PolicyTypeNames": [
 *     "ProxyProtocolPolicyType"
 *   ]
 * };
 * const command = new DescribeLoadBalancerPolicyTypesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PolicyTypeDescriptions": [
 *     {
 *       "Description": "Policy that controls whether to include the IP address and port of the originating request for TCP messages. This policy operates on TCP listeners only.",
 *       "PolicyAttributeTypeDescriptions": [
 *         {
 *           "AttributeName": "ProxyProtocol",
 *           "AttributeType": "Boolean",
 *           "Cardinality": "ONE"
 *         }
 *       ],
 *       "PolicyTypeName": "ProxyProtocolPolicyType"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elb-describe-load-balancer-policy-types-1
 * ```
 *
 */
export class DescribeLoadBalancerPolicyTypesCommand extends $Command<
  DescribeLoadBalancerPolicyTypesCommandInput,
  DescribeLoadBalancerPolicyTypesCommandOutput,
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
  constructor(readonly input: DescribeLoadBalancerPolicyTypesCommandInput) {
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
  ): Handler<DescribeLoadBalancerPolicyTypesCommandInput, DescribeLoadBalancerPolicyTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLoadBalancerPolicyTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DescribeLoadBalancerPolicyTypesCommand";
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
  private serialize(
    input: DescribeLoadBalancerPolicyTypesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeLoadBalancerPolicyTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLoadBalancerPolicyTypesCommandOutput> {
    return de_DescribeLoadBalancerPolicyTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
